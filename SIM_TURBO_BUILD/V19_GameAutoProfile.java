package com.simturbopc.ultra;

import java.util.Locale;

/** Pure Java suggestion based on an explicitly registered Android package.
 * This only selects an AETHER controller layout; it does not modify other apps.
 */
public final class GameAutoProfileV19 {
    private GameAutoProfileV19(){}
    public static String layoutForPackage(String packageName) {
        if(packageName==null)return "GENERAL";
        String pkg=packageName.toLowerCase(Locale.ROOT).trim();
        if(pkg.equals("com.mojang.minecraftpe")||pkg.contains("minecraft"))
            return "MINECRAFT";
        if(pkg.equals("com.roblox.client")||pkg.contains("roblox"))
            return "ROBLOX";
        if(pkg.contains("asphalt")||pkg.contains("racing")||
           pkg.contains("carx")||pkg.contains("gridautosport"))
            return "CARRERAS";
        return "GENERAL";
    }
}
