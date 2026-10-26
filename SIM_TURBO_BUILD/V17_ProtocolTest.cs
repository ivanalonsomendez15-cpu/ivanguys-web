using System;
using SimTurboPC;
public static class ProtocolTestV17 {
  static void Check(bool ok,string name) {if(!ok)throw new Exception("FAIL: "+name);}
  public static int Main() {
    string code="A1B2C3D4E5",nonce="0123456789ABCDEF";
    string payload="STPC17|"+nonce+"|DOWN|W|1";
    Check(AetherSecurePacketV17.Sign(code,"CAPS17|"+nonce)==
      "B106ACA384F72931414794CD091FBBF9E416C43ABE9D41FBD4ED3CFD9ACAAD36","CAPS vector");
    Check(AetherSecurePacketV17.Sign(code,payload)==
      "6061E24CD4F711C0290864CA1231C5ABA35F4E5E30AF80AEA0D5B3C3FF82A072","controller vector");
    string mac=AetherSecurePacketV17.Sign(code,payload);
    string session,action,key;int seq;
    Check(AetherSecurePacketV17.TryParseController(payload+"|"+mac,code,
      out session,out action,out key,out seq),"valid packet");
    Check(session==nonce&&action=="DOWN"&&key=="W"&&seq==1,"decoded fields");
    Check(!AetherSecurePacketV17.TryParseController(payload+"|"+mac,"A1B2C3D4E6",
      out session,out action,out key,out seq),"wrong code");
    Check(!AetherSecurePacketV17.TryParseController(payload.Replace("DOWN","UP")+"|"+mac,code,
      out session,out action,out key,out seq),"tampered packet");
    Check(!AetherSecurePacketV17.TryParseController("STPC-CTRL|"+code+"|DOWN|W|1",code,
      out session,out action,out key,out seq),"legacy clear token");
    Console.WriteLine("OK V17 C# HMAC vectors, packet validation and token privacy");
    return 0;
  }
}
