package com.simturbopc.ultra;

/**
 * Pure-Java sampling policy for the visible, opt-in Android monitor.
 * Conserves battery while retaining the existing foreground notification.
 * Android can still pause or stop the service independently.
 */
public final class MonitorCadenceV18 {
    private MonitorCadenceV18() {}
    public static long intervalMs(int batteryPercent, boolean charging) {
        if(charging) return 20000L;
        if(batteryPercent<0) return 30000L;
        if(batteryPercent<=20) return 60000L;
        if(batteryPercent<=50) return 30000L;
        return 20000L;
    }
}
