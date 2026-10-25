package com.simturbopc.ultra;

import android.net.Network;
import android.os.Handler;
import android.os.Looper;
import java.io.*;
import java.net.*;
import java.nio.charset.StandardCharsets;
import java.util.Base64;
import java.util.concurrent.Semaphore;
import javax.net.ssl.HttpsURLConnection;
import java.util.function.Supplier;

/**
 * V4: relay de fragmentos HTTPS por la SIM real, no hotspot ni VPN.
 * La IP remota y token deben coincidir con el PC emparejado.
 * Solo acepta descargas Range; rechaza redirecciones e IP/hosts privados.
 */
final class BondedServer {
    private final String pcIp, token;
    private final Supplier<Network> cellularNetwork;
    private final java.util.function.Consumer<String> status;
    private final Semaphore slots=new Semaphore(2);
    private final Handler ui=new Handler(Looper.getMainLooper());
    private volatile boolean running=false;
    private volatile ServerSocket server;
    private long mobileBytes=0L;
    BondedServer(String pcIp,String token,Supplier<Network> cell,
        java.util.function.Consumer<String> notice) {
        this.pcIp=pcIp; this.token=token; this.cellularNetwork=cell; this.status=notice;
    }
    void start() {
        if(running)return;
        running=true;
        new Thread(()->{
            try(ServerSocket s=new ServerSocket()){
                s.setReuseAddress(true);
                s.bind(new InetSocketAddress(45726));
                server=s;
                post("SUMA DE RUTAS V4 lista · TCP 45726. Esperando descargas del PC.");
                while(running){
                    Socket remote=s.accept();
                    if(!slots.tryAcquire()){try{remote.close();}catch(Exception ignored){}continue;}
                    new Thread(()->{try{handle(remote);}finally{slots.release();}},
                        "bond-v4-chunk").start();
                }
            }catch(Exception e){if(running)post("Bonding detenido: "+e.getMessage());}
            finally{server=null;}
        },"bond-v4-listener").start();
    }
    void stop() {
        running=false;
        try{if(server!=null)server.close();}catch(Exception ignored){}
    }
    private void post(String x){ui.post(()->status.accept(x));}
    private static String header(InputStream in,int max) throws IOException {
        ByteArrayOutputStream b=new ByteArrayOutputStream();
        for(int i=0;i<max;i++){
            int c=in.read();
            if(c<0)throw new EOFException();
            if(c=='\n')return b.toString("US-ASCII").trim();
            if(c!='\r')b.write(c);
        }
        throw new IOException("Cabecera demasiado grande");
    }
    private static boolean validDomain(URI u) {
        if(u==null||!"https".equals(u.getScheme())||u.getHost()==null||
            u.getUserInfo()!=null)return false;
        String host=u.getHost().toLowerCase(java.util.Locale.ROOT);
        if(host.equals("localhost")||host.endsWith(".local")||
            host.endsWith(".internal")||host.indexOf(':')>=0)return false;
        // No permitir IP literales, incluyendo las de red local.
        if(host.matches("[0-9.]+")||host.startsWith("["))return false;
        return true;
    }
    private void handle(Socket client) {
        HttpsURLConnection c=null;
        try(Socket pc=client) {
            if(!running||!pc.getInetAddress().getHostAddress().equals(pcIp))return;
            pc.setSoTimeout(45000);
            InputStream input=pc.getInputStream();OutputStream output=pc.getOutputStream();
            String line=header(input,4096);
            String[] parts=line.split("\\|",-1);
            if(parts.length!=6 || !"STPC4".equals(parts[0]) ||
                !token.equals(parts[1])){error(output,"PAIR");return;}
            String target=new String(Base64.getDecoder().decode(parts[2]),StandardCharsets.UTF_8);
            URI uri=new URI(target);
            if(target.length()>1800||!validDomain(uri)){error(output,"URL");return;}
            long start=Long.parseLong(parts[3]),end=Long.parseLong(parts[4]);
            String validator=new String(Base64.getDecoder().decode(parts[5]),StandardCharsets.UTF_8);
            if(start<0||end<start||end-start+1>512*1024||
                validator.isEmpty()||validator.length()>300){error(output,"RANGE");return;}
            Network cellular=cellularNetwork.get();
            if(cellular==null){error(output,"SIN_SIM");return;}
            // Bloquear destinos que resuelvan a rangos privados de la red local.
            InetAddress[] ips=cellular.getAllByName(uri.getHost());
            if(ips.length==0){error(output,"DNS");return;}
            for(InetAddress ip:ips){
                if(ip.isAnyLocalAddress()||ip.isLoopbackAddress()||
                   ip.isSiteLocalAddress()||ip.isLinkLocalAddress()||
                   ip.isMulticastAddress()){error(output,"DESTINO_PRIVADO");return;}
            }
            URL url=uri.toURL();
            URLConnection connection=cellular.openConnection(url);
            if(!(connection instanceof HttpsURLConnection)){error(output,"NO_HTTPS");return;}
            c=(HttpsURLConnection)connection;
            c.setInstanceFollowRedirects(false);
            c.setConnectTimeout(10000);c.setReadTimeout(25000);
            c.setRequestMethod("GET");
            c.setRequestProperty("Range","bytes="+start+"-"+end);
            c.setRequestProperty("If-Range",validator);
            c.setRequestProperty("Accept-Encoding","identity");
            c.setRequestProperty("User-Agent","SimTurboPC-Bonding/4.0");
            if(c.getResponseCode()!=206){error(output,"NO_206_"+c.getResponseCode());return;}
            String range=c.getHeaderField("Content-Range");
            if(range==null || !range.matches("bytes "+start+"-"+end+"/[0-9]+")){
                error(output,"RANGO_INCORRECTO");return;
            }
            String total=range.substring(range.indexOf('/')+1);
            long n=end-start+1;
            if(c.getContentLengthLong()!=n){error(output,"LONGITUD");return;}
            output.write(("OK|"+n+"|"+total+"\n").getBytes(StandardCharsets.US_ASCII));
            byte[] buf=new byte[16384];
            try(InputStream origin=c.getInputStream()){
                long sent=0;while(sent<n) {
                    int k=origin.read(buf,0,(int)Math.min(buf.length,n-sent));
                    if(k<=0)throw new EOFException("Fragmento incompleto");
                    output.write(buf,0,k);sent+=k;
                }
                output.flush();
                synchronized(this){mobileBytes+=sent;}
                if(running)post("Fragmentos SIM: "+String.format(java.util.Locale.ROOT,"%.2f",mobileBytes/1048576.0)+" MiB");
            }
        }catch(Exception e) {
            if(running)post("Error en fragmento SIM: "+e.getMessage());
        }finally{if(c!=null)c.disconnect();}
    }
    private static void error(OutputStream o,String why)throws IOException {
        o.write(("ERR|"+why+"|0\n").getBytes(StandardCharsets.US_ASCII));o.flush();
    }
}