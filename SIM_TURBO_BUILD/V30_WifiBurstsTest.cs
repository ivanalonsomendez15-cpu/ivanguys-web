using System;
using SimTurboPC;
class WifiLossBurstsV30Test {
  static void A(bool yes,string why){if(!yes)throw new Exception(why);}
  static void Main(){
    A(WifiLossBurstsV30.LongestFailureRun(new[]{true,true,true})==0,"no loss");
    A(WifiLossBurstsV30.LongestFailureRun(new[]{false,false,true,false,false,false,true})==3,"longest");
    A(WifiLossBurstsV30.FailureRuns(new[]{false,false,true,false,false,false,true})==2,"two bursts");
    A(WifiLossBurstsV30.FailureRuns(new bool[0])==0,"empty");
    A(WifiLossBurstsV30.LongestFailureRun(new[]{false,false,false})==3,"all loss");
    A(WifiLossBurstsV30.Describe(new[]{true,false,false,true}).Contains("racha consecutiva máxima 2"),"explain");
    A(WifiLossBurstsV30.Describe(new bool[0]).Contains("Sin muestras"),"empty explanation");
    Console.WriteLine("AETHER V30: Wi-Fi loss bursts 7 tests OK; read-only.");
  }
}