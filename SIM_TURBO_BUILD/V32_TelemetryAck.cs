using System;
using System.Globalization;
using System.Text;
using System.Text.RegularExpressions;

namespace SimTurboPC {
  /// <summary>V32 UDP peer confirmation. Only after authenticated code and valid private LAN packet.
  /// Never opens ports, adjusts firewall, starts services or discloses pairing code.
  /// The V32 reply is signed with the existing V17 HMAC routine.</summary>
  public static class AetherTelemetryAckV32 {
    public static bool TryAccept(string packet,string code,
      out int signal,out int frequency,out int rate,out string ack) {
      signal=0;frequency=0;rate=0;ack=null;
      if(String.IsNullOrWhiteSpace(code)||packet==null||packet.Length>180)return false;
      var p=packet.Split('|');
      if(p.Length!=6 || p[0]!="STPC32" || !String.Equals(p[1],code,StringComparison.Ordinal))return false;
      if(!Regex.IsMatch(p[5],@"^[A-F0-9]{16}$",RegexOptions.CultureInvariant))return false;
      if(!int.TryParse(p[2],NumberStyles.Integer,CultureInfo.InvariantCulture,out signal) ||
         !int.TryParse(p[3],NumberStyles.Integer,CultureInfo.InvariantCulture,out frequency) ||
         !int.TryParse(p[4],NumberStyles.Integer,CultureInfo.InvariantCulture,out rate))return false;
      if(signal < -130 || signal > -10 || frequency < 0 || frequency > 7500 || rate < 0 || rate > 20000)return false;
      string body="STPC32-ACK|"+p[5];
      ack=body+"|"+AetherSecurePacketV17.Sign(code,body);
      return true;
    }
  }
}
