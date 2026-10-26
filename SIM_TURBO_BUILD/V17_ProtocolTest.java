package com.simturbopc.ultra;

/** Pure Java protocol test, no Android device needed. */
public final class ProtocolTestV17 {
    static void check(boolean condition,String message) {
        if(!condition)throw new AssertionError(message);
    }
    public static void main(String[] args) {
        String code="A1B2C3D4E5";
        String nonce="0123456789ABCDEF";
        String caps="CAPS17|"+nonce;
        check(SecurePacketV17.sign(code,caps).equals(
            "B106ACA384F72931414794CD091FBBF9E416C43ABE9D41FBD4ED3CFD9ACAAD36"),"HMAC vector");
        String payload="STPC17|"+nonce+"|DOWN|W|1";
        check(SecurePacketV17.sign(code,payload).equals(
            "6061E24CD4F711C0290864CA1231C5ABA35F4E5E30AF80AEA0D5B3C3FF82A072"),"Controller vector");
        String msg=SecurePacketV17.encode(code,nonce,"DOWN","W",1);
        check(!msg.contains(code),"Secret leaked");
        String[] fields=msg.split("\\|");
        check(fields.length==6,"Packet field count");
        check(SecurePacketV17.verify(code,payload,fields[5]),"Valid MAC rejected");
        check(!SecurePacketV17.verify(code,payload+"tamper",fields[5]),"Tampering accepted");
        check(!SecurePacketV17.verify("A1B2C3D4E6",payload,fields[5]),"Wrong key accepted");
        check(!SecurePacketV17.newSessionId().equals(SecurePacketV17.newSessionId()),"Session nonce repeated");
        System.out.println("OK V17 Java HMAC vectors, packet integrity and token privacy");
    }
}
