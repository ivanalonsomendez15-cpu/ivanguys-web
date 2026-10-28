using System;
using System.Linq;
using SimTurboPC;
class AetherV34Test {
  static void Need(bool test,string name){if(!test)throw new Exception("FAILED: "+name);}
  static void Main(){
    var stable=new long?[]{11,13,12,12,11,14,13,12,11,11,12,12};
    var unstable=new long?[]{8,11,null,null,85,130,60,90,null,50,130,190};
    string a=AetherWifiMetricsV34.Summarize(stable,"Router");
    Need(a.Contains("12/12")&&a.Contains("p95")&&a.Contains("jitter"),"summary");
    string b=AetherWifiMetricsV34.Summarize(unstable,"Router");
    Need(b.Contains("racha máxima de fallos 2"),"loss burst");
    string c=AetherWifiMetricsV34.LocateProblem(unstable,stable);
    Need(c.Contains("Wi-Fi/router"),"LAN concern");
    var internetFails=Enumerable.Repeat((long?)null,12).ToArray();
    Need(AetherWifiMetricsV34.LocateProblem(stable,internetFails).Contains("Internet"),"WAN concern");
    Need(AetherWifiMetricsV34.Summarize(new long?[0],"empty").Contains("sin muestras"),"empty");
    Console.WriteLine("AETHER V34 TESTS OK: 24x ping diagnostics, loss bursts, p95, gateway vs Internet.");
  }
}
