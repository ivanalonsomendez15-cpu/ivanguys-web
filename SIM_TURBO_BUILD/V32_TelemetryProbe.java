package com.simturbopc.ultra;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.util.Locale;

/** V32: real, bounded, authenticated UDP roundtrip to the specific PC on local Wi-Fi.
 * Never claims connected merely because DatagramSocket.send() succeeded.
 * No Internet, SIM, server, location or background permission needed.
 */
public final class AetherTelemetryProbeV32 {
    private AetherTelemetryProbeV32(){}
    public static long confirm(Context context,String host,String code,int rssi,int freq,int rate) throws IOException {
        if(host==null || !host.matches("[0-9.]{7,15}"))throw new IOException("La IP debe ser IPv4 local, como 192.168.1.25");
        if(code==null || !code.matches("[A-F0-9]{10}"))throw new IOException("El código actual del PC debe tener 10 caracteres hexadecimales.");
        final InetAddress pc=InetAddress.getByName(host);
        if(pc.getAddress().length!=4 || !pc.isSiteLocalAddress())
            throw new IOException("El PC debe tener una dirección IPv4 privada del mismo router.");
        ConnectivityManager cm=(ConnectivityManager)context.getSystemService(Context.CONNECTIVITY_SERVICE);
        if(cm==null)throw new IOException("Android no ofrece servicio de red.");
        Network wifi=null;
        for(Network n:cm.getAllNetworks()){
            NetworkCapabilities c=cm.getNetworkCapabilities(n);
            if(c!=null && c.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)) {wifi=n;break;}
        }
        if(wifi==null)throw new IOException("Conecta el móvil al Wi-Fi de casa y vuelve a intentarlo.");
        byte[] id=new byte[8];new SecureRandom().nextBytes(id);
        StringBuilder nonce=new StringBuilder();
        for(byte b:id)nonce.append(String.format(Locale.ROOT,"%02X",b & 255));
        String signatureKey=code.toUpperCase(Locale.ROOT);
        String payload="STPC32|"+signatureKey+"|"+rssi+"|"+freq+"|"+rate+"|"+nonce;
        byte[] packet=payload.getBytes(StandardCharsets.US_ASCII);
        String signed="STPC32-ACK|"+nonce;
        try(DatagramSocket socket=new DatagramSocket()){
            wifi.bindSocket(socket); // Force Wi-Fi, not cellular route.
            socket.setSoTimeout(1750);
            for(int attempt=0;attempt<2;attempt++){
                long begin=android.os.SystemClock.elapsedRealtimeNanos();
                socket.send(new DatagramPacket(packet,packet.length,pc,45721));
                try{
                    byte[] buf=new byte[256];
                    DatagramPacket reply=new DatagramPacket(buf,buf.length);
                    socket.receive(reply);
                    if(!pc.equals(reply.getAddress()))
                        throw new IOException("Respuesta desde una IP distinta del PC.");
                    String answer=new String(reply.getData(),reply.getOffset(),
                        reply.getLength(),StandardCharsets.US_ASCII);
                    String prefix=signed+"|";
                    if(!answer.startsWith(prefix) ||
                        !SecurePacketV17.verify(signatureKey,signed,answer.substring(prefix.length())))
                        throw new IOException("El PC respondió, pero la autenticación no coincide. Comprueba el código actual.");
                    return Math.max(0,(android.os.SystemClock.elapsedRealtimeNanos()-begin)/1000000L);
                }catch(java.net.SocketTimeoutException ex){
                    if(attempt==1)throw new IOException("El PC no respondió. Abre AETHER V32 en Windows y comprueba IP, código y firewall privado UDP 45721.");
                }
            }
        }catch(SecurityException e){
            throw new IOException("Android no permite la conexión Wi-Fi local.",e);
        }
        throw new IOException("Sin respuesta del PC.");
    }
}
