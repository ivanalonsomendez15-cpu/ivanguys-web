using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace SimTurboPC {
  /// <summary>
  /// Read-only nearby Wi-Fi channel scan. Aggregates BSSID/channel counts in RAM,
  /// never includes SSIDs, BSSIDs, MACs or passwords in reports or files.
  /// A count of visible BSSIDs is NOT a measured congestion/interference score.
  /// </summary>
  public static class WifiChannelSurveyV28 {
    static readonly Regex Bssid = new Regex(@"^\s*BSSID\s+\d+\s*:\s*[0-9a-fA-F:\-]+\s*$",
      RegexOptions.IgnoreCase | RegexOptions.CultureInvariant);
    static readonly Regex Ssid = new Regex(@"^\s*SSID\s+\d+\s*:",
      RegexOptions.IgnoreCase | RegexOptions.CultureInvariant);
    static readonly Regex Channel = new Regex(@"^\s*(?:Channel|Canal)\s*:\s*(\d{1,3})\s*$",
      RegexOptions.IgnoreCase | RegexOptions.CultureInvariant);
    public static Dictionary<int,int> ParseChannelCounts(string raw) {
      var counts = new Dictionary<int,int>();
      if(String.IsNullOrEmpty(raw) || raw.Length>500000)return counts;
      bool inBssid=false, consumed=false;
      foreach(var line in raw.Split(new[]{'\r','\n'},StringSplitOptions.RemoveEmptyEntries)){
        if(Ssid.IsMatch(line)){inBssid=false;consumed=false;continue;}
        if(Bssid.IsMatch(line)){inBssid=true;consumed=false;continue;}
        if(!inBssid||consumed)continue;
        var match=Channel.Match(line);
        if(!match.Success)continue;
        int channel;
        if(Int32.TryParse(match.Groups[1].Value,out channel) && channel>=1 && channel<=233){
          if(!counts.ContainsKey(channel))counts[channel]=0;
          counts[channel]++;
          consumed=true;
        }
      }
      return counts;
    }
    public static string Format(string raw,int? ownChannel,string ownBand){
      var counts=ParseChannelCounts(raw);
      if(counts.Count==0)return "ESCANEO WIFI V28: sin canales BSSID disponibles; puede estar desconectado o Windows bloquear el escaneo.";
      int total=counts.Values.Sum();
      var sorted=counts.OrderBy(kv=>kv.Key).Select(kv=>kv.Key+"="+kv.Value);
      var sb=new StringBuilder("ESCANEO WIFI V28 (BSSID visibles por canal; NO son velocidades): ");
      sb.Append(String.Join(", ",sorted.ToArray())).Append(". Total: ").Append(total).Append(".");
      if(ownChannel.HasValue&&ownChannel.Value>=1&&ownChannel.Value<=233){
        int exact=counts.ContainsKey(ownChannel.Value)?counts[ownChannel.Value]:0;
        sb.Append(" En tu canal ").Append(ownChannel.Value).Append(": ").Append(exact)
          .Append(" BSSID visibles (incluye el tuyo si aparece).");
        if(ownBand=="2.4 GHz" && ownChannel.Value<=14){
          int neighbors=counts.Where(kv=>kv.Key>=1&&kv.Key<=14&&
            kv.Key!=ownChannel.Value&&Math.Abs(kv.Key-ownChannel.Value)<=4)
            .Sum(kv=>kv.Value);
          sb.Append(" En canales 2,4 GHz solapados (+/-4): ").Append(neighbors)
            .Append(" BSSID visibles.");
        }
      }
      sb.Append(" Un BSSID visible NO demuestra saturación; la ocupación real requiere medir tiempo de aire.");
      sb.Append(" No se muestran ni guardan nombres de redes, BSSID o MAC.");
      return sb.ToString();
    }
    public static string Survey(){
      if(Environment.OSVersion.Platform!=PlatformID.Win32NT)
        return "ESCANEO WIFI V28: solo Windows.";
      try{
        // Read active channel/band separately; no SSID data leaves this process.
        string radio=ReadNetsh("wlan show interfaces",3000);
        int? own=WifiRadioV27.Channel(radio);
        string band=WifiRadioV27.ExplicitBand(radio);
        string raw=ReadNetsh("wlan show networks mode=bssid",6000);
        if(String.IsNullOrEmpty(raw))return "ESCANEO WIFI V28: netsh sin respuesta o tiempo agotado.";
        return Format(raw,own,band);
      }catch(Exception ex){
        return "ESCANEO WIFI V28: no disponible ("+ex.GetType().Name+").";
      }
    }
    static string ReadNetsh(string args,int timeoutMs){
      using(var p=new Process()){
        p.StartInfo=new ProcessStartInfo("netsh",args){
          UseShellExecute=false,CreateNoWindow=true,RedirectStandardOutput=true,
          RedirectStandardError=false,StandardOutputEncoding=Encoding.Default
        };
        if(!p.Start())return "";
        Task<string> output=p.StandardOutput.ReadToEndAsync();
        if(!p.WaitForExit(timeoutMs)){
          try{p.Kill();}catch{}
          return "";
        }
        if(p.ExitCode!=0)return "";
        string raw=output.GetAwaiter().GetResult();
        return raw.Length>500000?"":raw;
      }
    }
  }
}
