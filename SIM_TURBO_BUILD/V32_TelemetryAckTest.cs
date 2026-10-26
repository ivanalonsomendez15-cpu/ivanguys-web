using System;
using System.Net;
using SimTurboPC;

class V32Test {
    static void Must(bool ok,string msg) {if(!ok)throw new Exception(msg);}
    static void Main(){
      int s,f,r;string ack;
      string code="A1B2C3D4E",id="1234567890ABCDEF";
      var packet="STPC32|"+code+"|-65|5180|780|"+id;
      Must(AetherTelemetryAckV32.TryAccept(packet,code,out s,out f,out r,out ack),"Valid telemetry");
      Must(s==-65&&f==5180&&r==780,"Signal parsing");
      var signed="STPC32-ACK|"+id;
      Must(ack==signed+"|"+AetherSecurePacketV17.Sign(code,signed),"HMAC ACK");
      Must(AetherSecurePacketV17.Verify(code,signed,ack.Substring(signed.Length+1)),"Android signature verification");
      Must(!AetherTelemetryAckV32.TryAccept(packet,"FFFFFFFFFF",out s,out f,out r,out ack),"Wrong code accepted");
      Must(!AetherTelemetryAckV32.TryAccept("STPC32|"+code+"|-65|5180|780|123",code,out s,out f,out r,out ack),"Bad nonce accepted");
      Must(!AetherTelemetryAckV32.TryAccept("STPC32|"+code+"|-8|5180|780|"+id,code,out s,out f,out r,out ack),"Bad RSSI accepted");
      Must(!AetherTelemetryAckV32.TryAccept("STPC32|"+code+"|-65|5180|780|"+id+"|EXTRA",code,out s,out f,out r,out ack),"Long request accepted");
      Must(AetherTelemetryAckV32.IsPrivate(IPAddress.Parse("192.168.1.13")),"Private LAN");
      Must(AetherTelemetryAckV32.IsPrivate(IPAddress.Parse("10.0.0.8")),"Private 10 LAN");
      Must(!AetherTelemetryAckV32.IsPrivate(IPAddress.Parse("8.8.8.8")),"Public packet accepted");
      Console.WriteLine("AETHER V32 TEST OK: signed ACK, incorrect token, nonce and signal, private network.");
    }
}
