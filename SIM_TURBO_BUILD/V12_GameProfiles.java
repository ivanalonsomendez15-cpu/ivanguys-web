package com.simturbopc.ultra;

import android.app.AppOpsManager;
import android.app.usage.UsageEvents;
import android.app.usage.UsageStatsManager;
import android.content.Context;
import android.content.SharedPreferences;
import android.os.Build;
import android.os.Process;
import java.util.HashMap;
import java.util.Map;

/** Local per-package preferences, advisory only. No changes to other apps. */
public final class GameProfiles {
    private static final String STORE="aether_game_profiles_v12";
    public static final String[] MODES={"EQUILIBRADO","LATENCIA","AHORRO","CALIDAD"};
    private GameProfiles(){}
    public static boolean validPackage(String name) {
        return name!=null && name.matches("[a-zA-Z][a-zA-Z0-9_.]{2,150}");
    }
    public static void save(Context context,String pkg,String mode) {
        if(!validPackage(pkg))throw new IllegalArgumentException("Paquete de juego no válido");
        boolean valid=false;
        for(String m:MODES)if(m.equals(mode))valid=true;
        if(!valid)throw new IllegalArgumentException("Perfil no reconocido");
        context.getSharedPreferences(STORE,Context.MODE_PRIVATE).edit().putString(pkg,mode).apply();
    }
    public static String profile(Context context,String pkg) {
        if(!validPackage(pkg))return "SIN CONFIGURAR";
        return context.getSharedPreferences(STORE,Context.MODE_PRIVATE).getString(pkg,"SIN CONFIGURAR");
    }
    public static boolean hasUsageAccess(Context context) {
        AppOpsManager ops=(AppOpsManager)context.getSystemService(Context.APP_OPS_SERVICE);
        if(ops==null)return false;
        int mode=ops.checkOpNoThrow(AppOpsManager.OPSTR_GET_USAGE_STATS,
            Process.myUid(),context.getPackageName());
        return mode==AppOpsManager.MODE_ALLOWED;
    }
    /**
     * Finds most recently foregrounded REGISTERED game package.
     * Usage events can be delayed or absent on some Android versions.
     * No app inventory, screenshots, or usage history is uploaded.
     */
    public static String lastConfiguredGame(Context context,long maxAgeMs) {
        if(!hasUsageAccess(context))return null;
        SharedPreferences saved=context.getSharedPreferences(STORE,Context.MODE_PRIVATE);
        Map<String,?> registered=saved.getAll();
        if(registered.isEmpty())return null;
        UsageStatsManager usage=(UsageStatsManager)context.getSystemService(Context.USAGE_STATS_SERVICE);
        if(usage==null)return null;
        long end=System.currentTimeMillis(), start=end-Math.min(Math.max(maxAgeMs,1000L),3600000L);
        UsageEvents events=usage.queryEvents(start,end);
        if(events==null)return null;
        UsageEvents.Event event=new UsageEvents.Event();
        String last=null;
        long latest=-1;
        while(events.hasNextEvent()) {
            events.getNextEvent(event);
            int type=event.getEventType();
            if(type!=UsageEvents.Event.MOVE_TO_FOREGROUND &&
               (Build.VERSION.SDK_INT<29 || type!=UsageEvents.Event.ACTIVITY_RESUMED))continue;
            String pkg=event.getPackageName();
            if(pkg!=null && registered.containsKey(pkg) && event.getTimeStamp()>latest) {
                last=pkg;latest=event.getTimeStamp();
            }
        }
        return last;
    }
    public static String recommendation(String mode) {
        switch(mode) {
            case "LATENCIA": return "Prioriza Wi-Fi estable, evita descargas simultáneas y mide jitter.";
            case "AHORRO": return "Reduce brillo y gráficos dentro del juego, activa su límite FPS.";
            case "CALIDAD": return "Ajusta calidad en el propio juego; vigila batería y temperatura.";
            default: return "Mide estabilidad y batería; no se cambian ajustes del sistema.";
        }
    }
}
