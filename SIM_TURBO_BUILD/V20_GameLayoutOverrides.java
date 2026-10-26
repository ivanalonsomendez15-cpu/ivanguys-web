package com.simturbopc.ultra;
import android.content.Context;
import android.content.SharedPreferences;
/** Explicit per-game controller preferences. Stored only on the phone. */
public final class GameLayoutOverridesV20 {
    private static final String PREF="aether_gamepad_layouts_v20";
    private GameLayoutOverridesV20(){}
    public static void save(Context ctx,String pkg,String layout) {
        if(!GameLayoutRulesV20.validPackage(pkg))
            throw new IllegalArgumentException("Paquete Android no válido");
        ctx.getSharedPreferences(PREF,Context.MODE_PRIVATE).edit()
            .putString("layout:"+pkg,GameLayoutRulesV20.normalize(layout)).apply();
    }
    public static String resolve(Context ctx,String pkg) {
        if(!GameLayoutRulesV20.validPackage(pkg))return "GENERAL";
        SharedPreferences prefs=ctx.getSharedPreferences(PREF,Context.MODE_PRIVATE);
        return GameLayoutRulesV20.choose(prefs.getString("layout:"+pkg,null),
            GameAutoProfileV19.layoutForPackage(pkg));
    }
}
