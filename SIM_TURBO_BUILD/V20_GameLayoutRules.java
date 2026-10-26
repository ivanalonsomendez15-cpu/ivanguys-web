package com.simturbopc.ultra;
import java.util.Locale;
/** Pure Java gamepad layout rules; never edits third-party apps. */
public final class GameLayoutRulesV20 {
    private GameLayoutRulesV20(){}
    public static boolean validPackage(String pkg) {
        return pkg!=null && pkg.length()<=180 &&
            pkg.matches("[a-zA-Z_][a-zA-Z0-9_]*(\\.[a-zA-Z_][a-zA-Z0-9_]*)+");
    }
    public static String normalize(String name) {
        if(name==null)return "GENERAL";
        String n=name.trim().toUpperCase(Locale.ROOT);
        return n.equals("MINECRAFT")||n.equals("ROBLOX")||n.equals("CARRERAS")?n:"GENERAL";
    }
    public static String choose(String saved,String automatic) {
        return saved==null?normalize(automatic):normalize(saved);
    }
}
