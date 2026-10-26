package com.simturbopc.ultra;

public final class MonitorCadenceTestV18 {
    private static void eq(long actual,long expected,String label) {
        if(actual!=expected)throw new AssertionError(label+": "+actual+" != "+expected);
    }
    public static void main(String[] args) {
        eq(MonitorCadenceV18.intervalMs(5,false),60000L,"critical battery");
        eq(MonitorCadenceV18.intervalMs(20,false),60000L,"low boundary");
        eq(MonitorCadenceV18.intervalMs(21,false),30000L,"medium lower");
        eq(MonitorCadenceV18.intervalMs(50,false),30000L,"medium upper");
        eq(MonitorCadenceV18.intervalMs(51,false),20000L,"normal");
        eq(MonitorCadenceV18.intervalMs(5,true),20000L,"charging");
        eq(MonitorCadenceV18.intervalMs(-1,false),30000L,"unknown");
        System.out.println("OK V18 Android monitor sampling policy: 7 cases");
    }
}
