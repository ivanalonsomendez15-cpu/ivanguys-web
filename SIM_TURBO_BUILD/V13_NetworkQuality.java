package com.simturbopc.ultra;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.LinkProperties;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.net.wifi.WifiManager;
import android.os.Build;

/** V13: local, read-only network estimate; does not download data or modify Wi-Fi. */
public final class NetworkQuality {
    private NetworkQuality() {}
    public static String report(Context context) {
        ConnectivityManager cm=(ConnectivityManager)context.getSystemService(Context.CONNECTIVITY_SERVICE);
        if(cm==null)return "Sin servicio de conectividad";
        Network network=cm.getActiveNetwork();
        if(network==null)return "No hay red activa";
        NetworkCapabilities caps=cm.getNetworkCapabilities(network);
        if(caps==null)return "Android no facilita las capacidades de red";
        boolean wifi=caps.hasTransport(NetworkCapabilities.TRANSPORT_WIFI);
        boolean mobile=caps.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR);
        String kind=wifi?"Wi-Fi":mobile?"Datos móviles":"Otra conexión";
        boolean validated=caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_VALIDATED);
        boolean metered=!caps.hasCapability(NetworkCapabilities.NET_CAPABILITY_NOT_METERED);
        int down=caps.getLinkDownstreamBandwidthKbps();
        int up=caps.getLinkUpstreamBandwidthKbps();
        StringBuilder s=new StringBuilder("AETHER V13 · INFORME DE RED\n");
        s.append("Conexión: ").append(kind).append('\n');
        s.append("Internet validado por Android: ").append(validated?"sí":"no / no comprobado").append('\n');
        s.append("Red medida como de pago/limitada: ").append(metered?"sí o desconocido":"no").append('\n');
        s.append("Capacidad de enlace estimada por Android (NO test de Internet): bajada ")
            .append(down>0?String.format(java.util.Locale.ROOT,"%.1f Mb/s",down/1000.0):"desconocida")
            .append("; subida ")
            .append(up>0?String.format(java.util.Locale.ROOT,"%.1f Mb/s",up/1000.0):"desconocida")
            .append('\n');
        if(wifi && Build.VERSION.SDK_INT>=29) {
            s.append("Android puede limitar datos Wi-Fi detallados sin permisos de ubicación.\n");
        }
        s.append("60 → 120–150 Mb/s requiere conexión/router compatibles. ");
        s.append("Esta pantalla NO aumenta velocidad, ni fuerza 5G, ni modifica el sistema.");
        return s.toString();
    }
}
