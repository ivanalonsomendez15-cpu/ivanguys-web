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

/** Local, user-triggered UDP discovery. No token is broadcast. */
public final class PcDiscovery {
    private PcDiscovery(){}
    public static String find(Context context) throws IOException {
        ConnectivityManager cm=(ConnectivityManager)context.getSystemService(Context.CONNECTIVITY_SERVICE);
        Network wifi=null;
        if(cm!=null)for(Network n:cm.getAllNetworks()) {
            NetworkCapabilities c=cm.getNetworkCapabilities(n);
            if(c!=null && c.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)) {wifi=n;break;}
        }
        if(wifi==null)throw new IOException("Conecta el móvil a la Wi-Fi del PC");
        byte[] bytes=new byte[8];
        new SecureRandom().nextBytes(bytes);
        StringBuilder token=new StringBuilder();
        for(byte b:bytes)token.append(String.format(Locale.ROOT,"%02X",b&255));
        String request="STPC-DISCOVER|"+token;
        try(DatagramSocket socket=new DatagramSocket()) {
            wifi.bindSocket(socket);
            socket.setBroadcast(true);
            socket.setSoTimeout(2200);
            byte[] query=request.getBytes(StandardCharsets.US_ASCII);
            socket.send(new DatagramPacket(query,query.length,
                InetAddress.getByName("255.255.255.255"),45728));
            long deadline=System.currentTimeMillis()+2200L;
            while(System.currentTimeMillis()<deadline) {
                byte[] buf=new byte[100];
                DatagramPacket response=new DatagramPacket(buf,buf.length);
                try{socket.receive(response);}catch(java.net.SocketTimeoutException ex){break;}
                if(!response.getAddress().isSiteLocalAddress())continue;
                String body=new String(response.getData(),response.getOffset(),
                    response.getLength(),StandardCharsets.US_ASCII);
                if(body.equals("STPC-HERE|"+token+"|V12"))
                    return response.getAddress().getHostAddress();
            }
        }
        throw new IOException("No se encontró receptor. Abre MANDO ANDROID en el PC; comprueba el firewall y la Wi-Fi.");
    }
}
