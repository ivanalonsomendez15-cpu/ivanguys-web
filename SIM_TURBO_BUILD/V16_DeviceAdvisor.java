package com.simturbopc.ultra;

import android.app.ActivityManager;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.os.BatteryManager;
import android.os.Build;
import java.util.Locale;

/**
 * V16 opt-in local Android hardware/network adviser. Does not require Usage Access,
 * accessibility, root or modification of another app. Network speeds are OS estimates.
 */
public final class DeviceAdvisorV16 {
    private DeviceAdvisorV16() {}
    public static String report(Context context, String packageName) {
        StringBuilder sb=new StringBuilder();
        sb.append("AETHER V16 · INFORME LOCAL DEL MÓVIL\n");
        sb.append("Android ").append(Build.VERSION.RELEASE)
          .append(" · CPU lógicos ").append(Runtime.getRuntime().availableProcessors()).append('\n');
        ActivityManager manager=(ActivityManager)context.getSystemService(Context.ACTIVITY_SERVICE);
        long total=-1,available=-1;
        if(manager!=null) {
            ActivityManager.MemoryInfo info=new ActivityManager.MemoryInfo();
            manager.getMemoryInfo(info);
            total=info.totalMem;available=info.availMem;
            sb.append("RAM total aprox.: ").append(mib(total)).append(" MiB")
              .append(" · disponible ").append(mib(available)).append(" MiB\n");
            if(info.lowMemory)sb.append("AVISO: Android señala presión de memoria.\n");
        }
        Intent battery=context.registerReceiver(null,new IntentFilter(Intent.ACTION_BATTERY_CHANGED));
        int percent=-1,plug=-1;
        if(battery!=null) {
            int level=battery.getIntExtra(BatteryManager.EXTRA_LEVEL,-1);
            int scale=battery.getIntExtra(BatteryManager.EXTRA_SCALE,-1);
            if(level>=0 && scale>0)percent=(int)Math.round(100.0*level/scale);
            plug=battery.getIntExtra(BatteryManager.EXTRA_PLUGGED,-1);
        }
        sb.append("Batería: ").append(percent<0?"sin datos":percent+" %");
        sb.append(plug>0?" · cargando\n":" · no cargando\n");
        ConnectivityManager cm=(ConnectivityManager)context.getSystemService(Context.CONNECTIVITY_SERVICE);
        if(cm!=null) {
            Network active=cm.getActiveNetwork();
            NetworkCapabilities cap=active==null?null:cm.getNetworkCapabilities(active);
            if(cap!=null) {
                String type=cap.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)?"Wi-Fi":
                    cap.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR)?"datos móviles":
                    cap.hasTransport(NetworkCapabilities.TRANSPORT_ETHERNET)?"Ethernet":"otra conexión";
                sb.append("Red actual: ").append(type).append('\n');
                int down=cap.getLinkDownstreamBandwidthKbps();
                if(down>0)sb.append("Estimación Android: ").append(
                    String.format(Locale.ROOT,"%.1f",down/1000.0))
                    .append(" Mb/s nominales. NO es un speedtest.\n");
                if(cap.hasCapability(NetworkCapabilities.NET_CAPABILITY_NOT_METERED))
                    sb.append("Conexión declarada sin medición por datos.\n");
                else sb.append("La conexión podría tener coste por datos.\n");
            }else sb.append("Red activa no disponible.\n");
        }
        String pkg=packageName==null?"":packageName.trim();
        String profile=GameProfiles.validPackage(pkg)?GameProfiles.profile(context,pkg):"SIN CONFIGURAR";
        sb.append("Juego seleccionado: ").append(pkg.isEmpty()?"ninguno":pkg).append('\n');
        sb.append("Perfil local: ").append(profile).append('\n');
        sb.append(GameProfiles.recommendation(profile)).append('\n');
        if(total>0 && total<4L*1024*1024*1024)
            sb.append("RAM limitada: reduce texturas y multitarea desde el propio juego.\n");
        if(percent>=0 && percent<=20)
            sb.append("Batería baja: prioriza el perfil AHORRO si lo deseas.\n");
        sb.append("Para mejorar FPS: compara misma escena y resolución; no se alteran otros juegos.\n");
        sb.append("Para llegar a 120–150 Mb/s: comprueba tarifa, router, cobertura y enlace.\n");
        sb.append("Solo datos locales. No mide FPS, temperatura ni Mbps reales.");
        return sb.toString();
    }
    private static long mib(long bytes){return bytes<0?-1:bytes/(1024L*1024L);}
}
