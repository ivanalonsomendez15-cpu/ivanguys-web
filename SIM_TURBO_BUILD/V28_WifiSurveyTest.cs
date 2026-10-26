using System;
using SimTurboPC;
class WifiSurveyV28Test {
  static void Assert(bool b,string label){if(!b)throw new Exception(label);}
  static void Main(){
    const string es="SSID 1 : RED-SECRETA\n BSSID 1 : 00:11:22:33:44:55\n Señal : 85%\n Canal : 6\n"+
       " BSSID 2 : 00:11:22:33:44:66\n Canal : 11\n"+
       "SSID 2 : PRIVADA\n BSSID 1 : AA:BB:CC:DD:EE:FF\n Canal : 6\n";
    const string en="SSID 1 : PRIVATE-SSID\n BSSID 1 : 00:11:22:33:44:55\n Channel : 36\n"+
       "SSID 2 : PRIVATE-2\n BSSID 1 : 00:11:22:33:44:66\n Channel : 40\n";
    var a=WifiChannelSurveyV28.ParseChannelCounts(es);
    Assert(a.Count==2&&a[6]==2&&a[11]==1,"ES counts");
    var b=WifiChannelSurveyV28.ParseChannelCounts(en);
    Assert(b.Count==2&&b[36]==1&&b[40]==1,"EN counts");
    string report=WifiChannelSurveyV28.Format(es,6,"2.4 GHz");
    Assert(report.Contains("6=2")&&report.Contains("11=1"),"aggregates");
    Assert(!report.Contains("RED-SECRETA")&&!report.Contains("PRIVADA")&&!report.Contains("00:11"),"privacy");
    Assert(report.Contains("En tu canal 6: 2"),"current channel");
    Assert(report.Contains("solapados"),"2.4 overlap");
    Assert(!WifiChannelSurveyV28.Format(en,36,"5 GHz").Contains("solapados"),"5GHz not assumed");
    Assert(WifiChannelSurveyV28.ParseChannelCounts("SSID 1 : ONLY-NAME\n Channel : 6").Count==0,"no BSSID");
    Assert(WifiChannelSurveyV28.ParseChannelCounts("BSSID 1 : 00:11:22:33:44:55\n Channel : 999").Count==0,"invalid");
    Console.WriteLine("AETHER V28 Wi-Fi channel scan ES/EN, channel counts and SSID/BSSID privacy OK.");
  }
}
