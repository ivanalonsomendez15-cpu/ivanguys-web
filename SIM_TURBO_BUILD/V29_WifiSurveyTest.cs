using System;
using SimTurboPC;
class WifiSurveyV29Test {
  static void Assert(bool b,string label){if(!b)throw new Exception(label);}
  static void Main(){
    const string es="SSID 1 : RED-SECRETA\n BSSID 1 : 00:11:22:33:44:55\n Señal : 85%\n Canal : 6\n"+
       " BSSID 2 : 00:11:22:33:44:66\n Canal : 11\n"+
       "SSID 2 : PRIVADA\n BSSID 1 : AA:BB:CC:DD:EE:FF\n Canal : 6\n";
    const string en="SSID 1 : PRIVATE-SSID\n BSSID 1 : 00:11:22:33:44:55\n Channel : 36\n"+
       "SSID 2 : PRIVATE-2\n BSSID 1 : 00:11:22:33:44:66\n Channel : 40\n";
    var a=WifiChannelSurveyV29.ParseChannelCounts(es);
    Assert(a.Count==2&&a[6]==2&&a[11]==1,"ES counts");
    var b=WifiChannelSurveyV29.ParseChannelCounts(en);
    Assert(b.Count==2&&b[36]==1&&b[40]==1,"EN counts");
    string report=WifiChannelSurveyV29.Format(es,6,"2.4 GHz");
    Assert(report.Contains("6=2")&&report.Contains("11=1"),"aggregates");
    Assert(!report.Contains("RED-SECRETA")&&!report.Contains("PRIVADA")&&!report.Contains("00:11"),"privacy");
    Assert(report.Contains("En tu canal 6: 2"),"current channel");
    Assert(report.Contains("solapados"),"2.4 overlap");
    Assert(!WifiChannelSurveyV29.Format(en,36,"5 GHz").Contains("solapados"),"5GHz not assumed");
    Assert(WifiChannelSurveyV29.ParseChannelCounts("SSID 1 : ONLY-NAME\n Channel : 6").Count==0,"no BSSID");
    Assert(WifiChannelSurveyV29.ParseChannelCounts("BSSID 1 : 00:11:22:33:44:55\n Channel : 999").Count==0,"invalid");
    var sample=new System.Collections.Generic.Dictionary<int,int>{{1,7},{6,3},{11,1}};
    var scores=WifiChannelSurveyV29.CandidateOverlap24(sample);
    Assert(scores[11]<scores[6]&&scores[6]<scores[1],"weighted candidates");
    string suggested=WifiChannelSurveyV29.Format(es,6,"2.4 GHz");
    Assert(suggested.Contains("COMPARATIVA EXPLORATORIA"),"candidate explanation");
    Assert(!WifiChannelSurveyV29.Format(en,36,"5 GHz").Contains("COMPARATIVA EXPLORATORIA"),"no 5GHz suggestion");
    Assert(!suggested.Contains("RED-SECRETA")&&!suggested.Contains("00:11"),"privacy in suggestion");
    Console.WriteLine("AETHER V29 Wi-Fi: channel counts, exploratory 1/6/11 candidates, privacy OK.");
  }
}
