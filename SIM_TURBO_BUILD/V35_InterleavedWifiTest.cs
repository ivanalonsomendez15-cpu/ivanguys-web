using System;
using SimTurboPC;
class AetherV35Test {
  static void Need(bool ok,string name) {
    if(!ok)throw new Exception("FAILED: "+name);
  }
  static void Main() {
    long?[] ok={10,12,11,13,10,12,11,10,12,11,10,12};
    long?[] no={null,null,null,null,null,null,null,null,null,null,null,null};
    long?[] bad={150,null,140,110,null,120,160,100,90,null,180,120};
    Need(AetherWifiInterleaveV35.Explain(no,ok).Contains("filtrado ICMP"),"gateway ICMP filtered");
    Need(AetherWifiInterleaveV35.Explain(no,no).Contains("Inconcluso"),"all ICMP blocked");
    Need(AetherWifiInterleaveV35.Explain(ok,no).Contains("NO demuestra un fallo DNS"),"no DNS inference");
    Need(AetherWifiInterleaveV35.Explain(bad,ok).Contains("Wi-Fi/router"),"local trouble");
    Need(AetherWifiInterleaveV35.Explain(ok,bad).Contains("ruta exterior"),"WAN trouble");
    Need(AetherWifiInterleaveV35.Explain(new long?[]{10},new long?[]{10}).Contains("Muestra corta"),"small sample");
    Need(AetherWifiInterleaveV35.Explain(new long?[]{10},ok).Contains("distinta longitud"),"mismatched samples");
    Need(AetherWifiInterleaveV35.Explain(new long?[0],new long?[0]).Contains("Inconcluso"),"empty samples");
    Console.WriteLine("V35 OK: filtered gateway, ambiguous ICMP, local/WAN, length and sample guards.");
  }
}
