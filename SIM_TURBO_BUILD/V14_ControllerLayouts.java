package com.simturbopc.ultra;

import android.content.Context;
import android.content.SharedPreferences;
import java.util.Locale;

/**
 * User-selected, per-game keyboard layouts for the AETHER LAN controller.
 * No accessibility injection, no interaction with other Android apps.
 * The Windows receiver still restricts the output to its existing whitelist.
 */
public final class ControllerLayoutsV14 {
    private static final String PREFS="aether_controller_layout_v14";
    private static final String KEY="layout";
    public static final String[] NAMES={"GENERAL","MINECRAFT","ROBLOX","CARRERAS"};
    private ControllerLayoutsV14(){}

    public static String load(Context context){
        String value=context.getSharedPreferences(PREFS,Context.MODE_PRIVATE)
            .getString(KEY,"GENERAL");
        for(String item:NAMES)if(item.equals(value))return item;
        return "GENERAL";
    }
    public static void save(Context context,String value){
        boolean found=false;
        for(String item:NAMES)if(item.equals(value))found=true;
        if(!found)throw new IllegalArgumentException("Perfil no reconocido");
        context.getSharedPreferences(PREFS,Context.MODE_PRIVATE)
            .edit().putString(KEY,value).apply();
    }
    public static int index(String name){
        for(int i=0;i<NAMES.length;i++)if(NAMES[i].equals(name))return i;
        return 0;
    }
    public static String key(String profile,String label,String fallback){
        if(label==null)return fallback;
        // The D-pad is always WASD. No layout can inject arbitrary key names.
        if("↑".equals(label)||"←".equals(label)||"↓".equals(label)||"→".equals(label))
            return fallback;
        String mapping=null;
        switch(profile==null?"GENERAL":profile.toUpperCase(Locale.ROOT)){
            case "MINECRAFT":
                if("A".equals(label))mapping="SPACE"; // jump
                if("B".equals(label))mapping="ESC";   // menu
                if("X".equals(label))mapping="E";     // inventory
                if("Y".equals(label))mapping="Q";     // drop
                if("LB".equals(label))mapping="F";    // offhand
                if("RB".equals(label))mapping="SHIFT";// sneak
                break;
            case "ROBLOX":
                if("A".equals(label))mapping="SPACE";
                if("B".equals(label))mapping="ESC";
                if("X".equals(label))mapping="F";
                if("Y".equals(label))mapping="E";
                if("LB".equals(label))mapping="Q";
                if("RB".equals(label))mapping="SHIFT";
                break;
            case "CARRERAS":
                if("A".equals(label))mapping="SPACE";// often handbrake
                if("B".equals(label))mapping="ESC";
                if("X".equals(label))mapping="SHIFT";
                if("Y".equals(label))mapping="E";
                if("LB".equals(label))mapping="Q";
                if("RB".equals(label))mapping="F";
                break;
            default:break;
        }
        return mapping==null?fallback:mapping;
    }
    public static String explanation(String profile){
        if("MINECRAFT".equals(profile))
            return "Minecraft (teclado): A saltar, X inventario, Y soltar, LB mano secundaria, RB agacharse.";
        if("ROBLOX".equals(profile))
            return "Roblox (teclado): A saltar, X F, Y E, RB Shift; depende de los controles del juego.";
        if("CARRERAS".equals(profile))
            return "Carreras (teclado): WASD dirigir, A espacio, X Shift; revisa los controles del juego.";
        return "General: WASD, A espacio, B Esc, X F, Y E, LB Q, RB Shift, Start Enter.";
    }
}
