using System;
using System.Diagnostics;
using System.Text;
using System.Text.RegularExpressions;

namespace SimTurboPC {
  /// <summary>
  /// V26 read-only Wi-Fi radio diagnostics: parses localized "netsh wlan show interfaces".
  /// Never includes SSID, BSSID, MAC, IP or passwords in the report.
  /// Does not change Wi-Fi settings or claim to boost bandwidth.
  /// </summary>
  public static class WifiRadioV26 {
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
    public static string Format(string raw){
      int? signal=SignalPercent(raw),channel=Channel(raw);
      if(!signal.HasValue&&!channel.HasValue)
        return "RADIO WIFI V26: Windows no informó señal/canal (puede ser Ethernet o Wi-Fi desconectado).";
      var sb=new StringBuilder("RADIO WIFI V26 (solo lectura, sin SSID/BSSID): ");
      sb.Append("señal ").Append(signal.HasValue?signal.Value+"%":"no disponible");
      sb.Append("; canal ").Append(channel.HasValue?channel.Value.ToString():"no disponible").Append(".");
      if(signal.HasValue&&signal.Value<50)
        sb.Append(" Señal débil (<50%): prueba a acercarte al router y compara resultados.");
      else if(signal.HasValue&&signal.Value<70)
        sb.Append(" Señal moderada: comprueba interferencias y obstáculos.");
      sb.Append(" Canal no determina por sí solo la banda; comprueba tu router.");
      return sb.ToString();
    }
    public static string RadioReport(){
      if(Environment.OSVersion.Platform!=PlatformID.Win32NT)
        return "RADIO WIFI V26: disponible solamente en Windows.";
      try{
        var start=new ProcessStartInfo("netsh","wlan show interfaces"){
          UseShellExecute=false,CreateNoWindow=true,RedirectStandardOutput=true,
          RedirectStandardError=false,StandardOutputEncoding=Encoding.Default
        };
        using(var p=Process.Start(start)){
          if(p==null)return "RADIO WIFI V26: netsh no se pudo iniciar.";
          if(!p.WaitForExit(2500)){
            try{p.Kill();}catch{}
            return "RADIO WIFI V26: netsh agotó 2,5 segundos; diagnóstico omitido.";
          }
          string raw=p.StandardOutput.ReadToEnd();
          return Format(raw);
        }
      }catch(Exception ex){
        return "RADIO WIFI V26: consulta no disponible ("+ex.GetType().Name+").";
      }
    }
  }
}