package com.simturbopc.ultra;

import java.nio.charset.StandardCharsets;
import java.security.SecureRandom;
import java.util.Locale;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;

/** HMAC authentication for LAN messages. No token is sent in clear text.
 * Not encryption; use on a trusted local network only.
 */
public final class SecurePacketV17 {
    private SecurePacketV17(){}
    public static String newSessionId() {
        byte[] bytes=new byte[8];
        new SecureRandom().nextBytes(bytes);
        return hex(bytes);
    }
    private static String hex(byte[] bytes) {
        StringBuilder out=new StringBuilder(bytes.length*2);
        for(byte b:bytes)out.append(String.format(Locale.ROOT,"%02X",b&255));
        return out.toString();
    }
    public static String sign(String code,String payload) {
        try {
            Mac mac=Mac.getInstance("HmacSHA256");
            mac.init(new SecretKeySpec(code.toUpperCase(Locale.ROOT)
                .getBytes(StandardCharsets.US_ASCII),"HmacSHA256"));
            return hex(mac.doFinal(payload.getBytes(StandardCharsets.US_ASCII)));
        } catch(Exception ex) {
            throw new IllegalStateException("No se pudo autenticar el mensaje",ex);
        }
    }
    public static boolean verify(String code,String payload,String signature) {
        if(signature==null||!signature.matches("[A-F0-9]{64}"))return false;
        byte[] a=sign(code,payload).getBytes(StandardCharsets.US_ASCII);
        byte[] b=signature.getBytes(StandardCharsets.US_ASCII);
        int diff=0;
        for(int i=0;i<a.length;i++)diff|=a[i]^b[i];
        return diff==0;
    }
    public static String encode(String code,String session,String action,String key,int seq) {
        String payload="STPC17|"+session+"|"+action+"|"+key+"|"+seq;
        return payload+"|"+sign(code,payload);
    }
}
