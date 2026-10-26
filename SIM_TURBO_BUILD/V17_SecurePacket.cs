using System;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace SimTurboPC {
  /// <summary>
  /// V17 LAN authentication: HMAC-SHA256 of each controller packet and
  /// capability response. This is authentication, NOT transport encryption.
  /// The 10-hex-digit legacy pairing code has only 40 bits of entropy:
  /// use only on a trusted private network with the receiver opened manually.
  /// </summary>
  public static class AetherSecurePacketV17 {
    static readonly Regex SessionPattern=new Regex(@"^[A-F0-9]{16}$",RegexOptions.CultureInvariant);
    static readonly Regex MacPattern=new Regex(@"^[A-F0-9]{64}$",RegexOptions.CultureInvariant);
    public static string Sign(string code,string payload) {
      using(var hmac=new HMACSHA256(Encoding.ASCII.GetBytes(code.ToUpperInvariant()))) {
        return BitConverter.ToString(hmac.ComputeHash(Encoding.ASCII.GetBytes(payload))).Replace("-","");
      }
    }
    public static bool Verify(string code,string payload,string signature) {
      if(!MacPattern.IsMatch(signature??""))return false;
      string expected=Sign(code,payload);
      int diff=0;
      for(int i=0;i<expected.Length;i++)diff|=expected[i]^signature[i];
      return diff==0;
    }
    public static bool TryParseController(string packet,string code,out string session,
      out string action,out string key,out int sequence) {
      session=null;action=null;key=null;sequence=-1;
      if(packet==null||packet.Length>180)return false;
      string[] p=packet.Split('|');
      if(p.Length!=6||p[0]!="STPC17"||!SessionPattern.IsMatch(p[1]))return false;
      if(p[2]!="DOWN"&&p[2]!="UP")return false;
      if(!Regex.IsMatch(p[3],@"^[A-Z]{1,8}$"))return false;
      int n;
      if(!Int32.TryParse(p[4],out n)||n<1)return false;
      string payload=p[0]+"|"+p[1]+"|"+p[2]+"|"+p[3]+"|"+p[4];
      if(!Verify(code,payload,p[5]))return false;
      session=p[1];action=p[2];key=p[3];sequence=n;
      return true;
    }
  }
}
