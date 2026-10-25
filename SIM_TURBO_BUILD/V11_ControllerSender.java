package com.simturbopc.ultra;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.Network;
import android.net.NetworkCapabilities;
import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.nio.charset.StandardCharsets;
import java.util.Collections;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * Local game controller. Sends a LIMITED whitelist of buttons over the LAN.
 * The PC only accepts input while the user has opened the receiver window.
 * Not an Xbox/XInput virtual gamepad; it maps to keyboard actions.
 */
public final class ControllerSender {
    private static final Set<String> ALLOWED = Set.of(
        "W","A","S","D","SPACE","ESC","ENTER","F","E","Q","SHIFT"
    );
    private final Set<String> held = Collections.newSetFromMap(new ConcurrentHashMap<String, Boolean>());
    private final ScheduledExecutorService scheduler = Executors.newSingleThreadScheduledExecutor();
    private final AtomicInteger serial = new AtomicInteger();
    private final InetAddress ip;
    private final String token;
    private final DatagramSocket socket;
    private volatile boolean running = true;

    public ControllerSender(Context context, String host, String code) throws IOException {
        if (code == null || !code.matches("[0-9A-Fa-f]{10}"))
            throw new IOException("Código de emparejamiento inválido");
        ip = InetAddress.getByName(host);
        if (!ip.isSiteLocalAddress())
            throw new IOException("Por seguridad, solo se admite una IP privada de la red local");
        token = code.toUpperCase(java.util.Locale.ROOT);
        ConnectivityManager cm = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
        Network wifi = null;
        if (cm != null) {
            for (Network n : cm.getAllNetworks()) {
                NetworkCapabilities cap = cm.getNetworkCapabilities(n);
                if (cap != null && cap.hasTransport(NetworkCapabilities.TRANSPORT_WIFI)) {
                    wifi = n;
                    break;
                }
            }
        }
        if (wifi == null) throw new IOException("Conecta móvil y PC a la misma Wi-Fi");
        socket = new DatagramSocket();
        wifi.bindSocket(socket); // Nunca se transmiten los botones por los datos de la SIM.
        scheduler.scheduleAtFixedRate(() -> {
            if (!running) return;
            for (String key : held) send("DOWN",key);
        }, 30L, 115L, TimeUnit.MILLISECONDS);
    }

    private void send(String action,String key) {
        if (!running || !ALLOWED.contains(key)) return;
        try {
            int n = serial.incrementAndGet();
            if (n < 0) { serial.set(1); n = 1; }
            byte[] data = ("STPC-CTRL|" + token + "|" + action + "|" + key + "|" + n)
                .getBytes(StandardCharsets.US_ASCII);
            socket.send(new DatagramPacket(data,data.length,ip,45727));
        } catch (IOException ignored) {
            // Packet loss is expected on LAN. The PC releases keys automatically on timeout.
        }
    }

    public void down(String key) {
        if (!running || !ALLOWED.contains(key)) return;
        held.add(key);
        scheduler.execute(() -> send("DOWN",key));
    }

    public void up(String key) {
        if (!ALLOWED.contains(key)) return;
        held.remove(key);
        scheduler.execute(() -> send("UP",key));
    }

    public void close() {
        if (!running) return;
        for (String key : held) send("UP",key);
        held.clear();
        running=false;
        scheduler.shutdownNow();
        socket.close();
    }
}