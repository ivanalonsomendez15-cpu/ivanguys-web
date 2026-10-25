package com.simturbopc.ultra;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.SharedPreferences;
import android.content.pm.ServiceInfo;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import android.os.BatteryManager;
import android.os.Build;
import android.os.Handler;
import android.os.IBinder;
import android.os.Looper;

/**
 * Opt-in, visible, low-rate local diagnostic monitor.
 * No background VPN, packet capture, remote commands, or device optimisation.
 * Android may stop the service to conserve battery.
 */
public final class AetherMonitorService extends Service {
    public static final String PREFS = "aether_monitor_v12";
    private static final String CHANNEL = "aether_monitor_v12_channel";
    private static final int NOTIFICATION_ID = 1207;
    private final Handler handler = new Handler(Looper.getMainLooper());
    private boolean running;
    private final Runnable sample = new Runnable() {
        @Override public void run() {
            if (!running) return;
            try {
                ConnectivityManager cm=(ConnectivityManager)getSystemService(Context.CONNECTIVITY_SERVICE);
                Network network=cm==null?null:cm.getActiveNetwork();
                NetworkCapabilities caps=network==null?null:cm.getNetworkCapabilities(network);
                String transport="Sin conexión";
                if(caps!=null) {
                    if(caps.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)) transport="Wi-Fi";
                    else if(caps.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR)) transport="Datos móviles";
                    else if(caps.hasTransport(NetworkCapabilities.TRANSPORT_ETHERNET)) transport="Ethernet";
                    else transport="Otra red";
                }
                Intent battery=registerReceiver(null,new IntentFilter(Intent.ACTION_BATTERY_CHANGED));
                int percent=-1;
                if(battery!=null) {
                    int level=battery.getIntExtra(BatteryManager.EXTRA_LEVEL,-1);
                    int scale=battery.getIntExtra(BatteryManager.EXTRA_SCALE,-1);
                    if(level>=0 && scale>0) percent=Math.round(level*100f/scale);
                }
                String game=GameProfiles.lastConfiguredGame(this,5*60*1000L);
                String profile=game==null?"Sin juego configurado":GameProfiles.profile(this,game);
                String status=transport+" · batería "+(percent<0?"?":percent+"%")+
                    " · juego "+(game==null?"no detectado":game)+" · perfil "+profile;
                getSharedPreferences(PREFS,MODE_PRIVATE).edit()
                    .putString("last_status",status)
                    .putLong("last_sample",System.currentTimeMillis()).apply();
                updateNotification(status);
            } catch (SecurityException ex) {
                getSharedPreferences(PREFS,MODE_PRIVATE).edit()
                    .putString("last_status","Permisos de red o uso no disponibles").apply();
            } catch (Exception ex) {
                getSharedPreferences(PREFS,MODE_PRIVATE).edit()
                    .putString("last_status","Muestra no disponible").apply();
            }
            handler.postDelayed(this,20000L); // 1 muestra / 20 segundos.
        }
    };
    @Override public void onCreate() {
        super.onCreate();
        NotificationManager manager=(NotificationManager)getSystemService(NOTIFICATION_SERVICE);
        if(Build.VERSION.SDK_INT>=26) {
            NotificationChannel ch=new NotificationChannel(CHANNEL,"AETHER · monitor visible",
                NotificationManager.IMPORTANCE_LOW);
            ch.setDescription("Diagnóstico local voluntario de conexión y batería");
            manager.createNotificationChannel(ch);
        }
    }
    private Notification notification(String body) {
        Intent intent=new Intent(this,MainActivity.class);
        int flags=PendingIntent.FLAG_UPDATE_CURRENT;
        if(Build.VERSION.SDK_INT>=23) flags|=PendingIntent.FLAG_IMMUTABLE;
        PendingIntent open=PendingIntent.getActivity(this,0,intent,flags);
        Notification.Builder b=Build.VERSION.SDK_INT>=26
            ?new Notification.Builder(this,CHANNEL):new Notification.Builder(this);
        return b.setContentTitle("AETHER · supervisión activa")
            .setContentText(body).setContentIntent(open)
            .setSmallIcon(android.R.drawable.stat_notify_sync)
            .setOngoing(true).setOnlyAlertOnce(true).build();
    }
    private void updateNotification(String status) {
        NotificationManager m=(NotificationManager)getSystemService(NOTIFICATION_SERVICE);
        if(m!=null)m.notify(NOTIFICATION_ID,notification(status));
    }
    @Override public int onStartCommand(Intent intent,int flags,int startId) {
        if(!running) {
            running=true;
            Notification initial=notification("Monitorizando solo en este dispositivo");
            if(Build.VERSION.SDK_INT>=29)
                startForeground(NOTIFICATION_ID,initial,ServiceInfo.FOREGROUND_SERVICE_TYPE_CONNECTED_DEVICE);
            else startForeground(NOTIFICATION_ID,initial);
            handler.post(sample);
        }
        return START_NOT_STICKY;
    }
    @Override public void onDestroy() {
        running=false;
        handler.removeCallbacks(sample);
        super.onDestroy();
    }
    @Override public IBinder onBind(Intent intent) { return null; }
}
