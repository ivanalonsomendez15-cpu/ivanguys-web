using System;
using System.Diagnostics;
using System.Text;
using System.Text.RegularExpressions;

namespace SimTurboPC {
  /// <summary>
  /// V27 read-only Wi-Fi radio diagnostics: parses localized "netsh wlan show interfaces".
  /// Never includes SSID, BSSID, MAC, IP or passwords in the report.
  /// Does not change Wi-Fi settings or claim to boost bandwidth.
  /// </summary>
  public static class WifiRadioV27 {
    public static int? SignalPercent(string text){
      if(String.IsNullOrEmpty(text))return null;
      var match=Regex.Match(text,@"(?im)^\s*(?:Signal|Se.al)\s*:\s*(\d{1,3})\s*%");
      if(!match.Success)return null;
      int number;
      if(!Int32.TryParse(match.Groups[1].Value,out number)||number>100)return null;
      return number;
    }
    public static int? Channel(string text){
      if(String.IsNullOrEmpty(text))return null;
      var match=Regex.Match(text,@"(?im)^\s*(?:Channel|Canal)\s*:\s*(\d{1,3})\s*$");
      if(!match.Success)return null;
      int number;
      if(!Int32.TryParse(match.Groups[1].Value,out number)||number<1||number>233)return null;
      return number;
    }
    // These are negotiated Wi-Fi PHY link rates, NOT speed-test results.
    // Never parse or print SSID/BSSID, MAC or any credentials.
    public static double? LinkMbps(string text,bool receive){
      if(String.IsNullOrEmpty(text))return null;
      string label=receive
        ? @"(?:Receive\s+rate\s*\(Mbps\)|Velocidad\s+de\s+recepci[oó]n\s*\(Mbps\))"
        : @"(?:Transmit\s+rate\s*\(Mbps\)|Velocidad\s+de\s+transmisi[oó]n\s*\(Mbps\))";
      var match=Regex.Match(text,@"(?im)^\s*"+label+@"\s*:\s*(\d{1,6}(?:[\.,]\d{1,2})?)\s*$");
      if(!match.Success)return null;
      double value;
      if(!Double.TryParse(match.Groups[1].Value.Replace(',','.'),
        System.Globalization.NumberStyles.AllowDecimalPoint,
        System.Globalization.CultureInfo.InvariantCulture,out value))return null;
      return value>0&&value<=100000? (double?)value:null;
    }
    public static string ExplicitBand(string text){
      if(String.IsNullOrEmpty(text))return "no informada";
      var m=Regex.Match(text,@"(?im)^\s*(?:Band|Banda)\s*:\s*([2456](?:[\.,]4)?)\s*GHz\s*$");
      if(!m.Success)return "no informada";
      var value=m.Groups[1].Value.Replace(',','.');
      if(value=="2.4"||value=="5"||value=="6")return value+" GHz";
      return "no informada";
    }
    public static string Format(string raw){
      int? signal=SignalPercent(raw),channel=Channel(raw);
      double? rx=LinkMbps(raw,true),tx=LinkMbps(raw,false);
      string band=ExplicitBand(raw);
      if(!signal.HasValue&&!channel.HasValue&&!rx.HasValue&&!tx.HasValue&&band=="no informada")
        return "RADIO WIFI V27: Windows no informó señal/canal (puede ser Ethernet o Wi-Fi desconectado).";
      var sb=new StringBuilder("RADIO WIFI V27 (solo lectura, sin SSID/BSSID): ");
      sb.Append("señal ").Append(signal.HasValue?signal.Value+"%":"no disponible");
      sb.Append("; canal ").Append(channel.HasValue?channel.Value.ToString():"no disponible").Append(".");
      sb.Append(" Banda anunciada: ").Append(band).Append(".");
      sb.Append(" Enlace RX ").Append(rx.HasValue?rx.Value.ToString("0.##",System.Globalization.CultureInfo.InvariantCulture)+" Mb/s":"no disponible");
      sb.Append("; TX ").Append(tx.HasValue?tx.Value.ToString("0.##",System.Globalization.CultureInfo.InvariantCulture)+" Mb/s":"no disponible");
      sb.Append(" (PHY, NO velocidad de Internet).");
      if(signal.HasValue&&signal.Value<50)
        sb.Append(" Señal débil (<50%): prueba a acercarte al router y compara resultados.");
      else if(signal.HasValue&&signal.Value<70)
        sb.Append(" Señal moderada: comprueba interferencias y obstáculos.");
      if(rx.HasValue&&rx.Value<100)
        sb.Append(" Enlace Wi-Fi RX por debajo de 100 Mb/s: compara distancia y banda antes de buscar problemas en el ISP.");
      sb.Append(" El canal NO determina por sí solo la banda; solo se muestra banda si Windows la informa.");
      return sb.ToString();
    }
    public static string RadioReport(){
      if(Environment.OSVersion.Platform!=PlatformID.Win32NT)
        return "RADIO WIFI V27: disponible solamente en Windows.";
      try{
        var start=new ProcessStartInfo("netsh","wlan show interfaces"){
          UseShellExecute=false,CreateNoWindow=true,RedirectStandardOutput=true,
          RedirectStandardError=false,StandardOutputEncoding=Encoding.Default
        };
        using(var p=Process.Start(start)){
          if(p==null)return "RADIO WIFI V27: netsh no se pudo iniciar.";
          if(!p.WaitForExit(2500)){
            try{p.Kill();}catch{}
            return "RADIO WIFI V27: netsh agotó 2,5 segundos; diagnóstico omitido.";
          }
          string raw=p.StandardOutput.ReadToEnd();
          return Format(raw);
        }
      }catch(Exception ex){
        return "RADIO WIFI V27: consulta no disponible ("+ex.GetType().Name+").";
      }
    }
  }
}