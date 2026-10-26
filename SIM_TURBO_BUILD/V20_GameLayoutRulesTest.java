package com.simturbopc.ultra;
public final class GameLayoutRulesTestV20 {
    static void eq(Object actual,Object expected,String label){
        if(!expected.equals(actual))throw new AssertionError(label+": "+actual);
    }
    public static void main(String[] args){
        eq(GameLayoutRulesV20.validPackage("com.roblox.client"),true,"valid");
        eq(GameLayoutRulesV20.validPackage("../path"),false,"reject path");
        eq(GameLayoutRulesV20.validPackage("com"),false,"reject single segment");
        eq(GameLayoutRulesV20.normalize(" roblox "),"ROBLOX","normalization");
        eq(GameLayoutRulesV20.normalize("unknown"),"GENERAL","unknown");
        eq(GameLayoutRulesV20.choose(null,"MINECRAFT"),"MINECRAFT","fallback");
        eq(GameLayoutRulesV20.choose("CARRERAS","MINECRAFT"),"CARRERAS","override");
        System.out.println("OK V20 Android per-game layout rules: 7 assertions");
    }
}
