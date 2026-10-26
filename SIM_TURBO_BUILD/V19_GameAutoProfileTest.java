package com.simturbopc.ultra;
public final class GameAutoProfileTestV19 {
    static void eq(String got,String expected) {
        if(!expected.equals(got))throw new AssertionError("Expected "+expected+", got "+got);
    }
    public static void main(String[] args){
        eq(GameAutoProfileV19.layoutForPackage("com.mojang.minecraftpe"),"MINECRAFT");
        eq(GameAutoProfileV19.layoutForPackage("com.roblox.client"),"ROBLOX");
        eq(GameAutoProfileV19.layoutForPackage("com.gameloft.asphalt9"),"CARRERAS");
        eq(GameAutoProfileV19.layoutForPackage("com.example.racing"),"CARRERAS");
        eq(GameAutoProfileV19.layoutForPackage("com.example.other"),"GENERAL");
        eq(GameAutoProfileV19.layoutForPackage(null),"GENERAL");
        System.out.println("OK V19 Android game-to-layout suggestions: 6 cases");
    }
}
