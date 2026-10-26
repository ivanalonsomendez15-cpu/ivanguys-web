package com.simturbopc.ultra;

import android.content.Context;
import android.os.SystemClock;
import java.io.IOException;
import java.util.Arrays;
import java.util.Locale;

/** Bounded PC LAN request/response RTT. Not an Internet ping or gaming FPS test. */
public final class PcRoundtripV15 {
    private PcRoundtripV15(){}
    public static String measure(Context context,String host,String token) throws IOException {
        if(host==null||host.trim().isEmpty())throw new IOException("Detecta y empareja primero el PC");
        if(token==null||!token.matches("[0-9a-fA-F]{10}"))
            throw new IOException("Introduce el código mostrado en el PC");
        long[] values=new long[3];
        String hardware="";
        for(int i=0;i<values.length;i++) {
            long start=SystemClock.elapsedRealtimeNanos();
            hardware=PcDiscovery.capabilities(context,host,token);
            long end=SystemClock.elapsedRealtimeNanos();
            values[i]=Math.max(0,(end-start)/1000000L);
        }
        Arrays.sort(values);
        return String.format(Locale.ROOT,
            "PC %s · RTT AETHER mediano %d ms (muestras %d, %d, %d ms). %s. "+
            "Mide el intercambio con el receptor, NO los FPS ni el ping de juegos.",
            host,values[1],values[0],values[1],values[2],hardware);
    }
}
