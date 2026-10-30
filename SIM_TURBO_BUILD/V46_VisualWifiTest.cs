using System;
using SimTurboPC;
class V46Test{
 static void Need(bool ok,string name){if(!ok)throw new Exception("FAILED: "+name);}
 static void Main(){
  Need(AetherVisualGoalV46.HeadroomFps(425,300)==125,"425 vs 300 headroom");
  Need(AetherVisualGoalV46.Grade(299).Contains("MENOS"),"under target");
  Need(AetherVisualGoalV46.Grade(300).Contains("ALCANZADA"),"at target");
  Need(AetherVisualGoalV46.Grade(425).Contains("ALCANZADA"),"above target");
  Need(AetherVisualGoalV46.Grade(0).Contains("Introduce"),"unknown FPS");
  Need(AetherVisualGoalV46.EligibleMode(3840,2160,200,200),"4K virtual 200 Hz");
  Need(AetherVisualGoalV46.EligibleMode(2880,1620,240,200),"DLDSR");
  Need(!AetherVisualGoalV46.EligibleMode(3840,2160,60,200),"reject 60 Hz");
  Need(!AetherVisualGoalV46.EligibleMode(1920,1080,200,200),"reject ordinary FHD");
  Need(AetherWifiTrafficV46.RateMbps(1000000,2250000,1000).Value==10.0,"10Mb/s measured traffic");
  Need(!AetherWifiTrafficV46.RateMbps(10,5,1000).HasValue,"counter reset");
  Need(!AetherWifiTrafficV46.RateMbps(0,120,20).HasValue,"too short sample");
  Need(AetherWifiTrafficV46.CounterDelta(25,27).Value==2,"error delta");
  Need(!AetherWifiTrafficV46.CounterDelta(27,25).HasValue,"counter decrease");
  var claim=AetherWifiTrafficV46.Interpret(12.0,3.5,0,0);
  Need(claim.Contains("no máxima velocidad"),"not confused usage with internet bandwidth");
  Console.WriteLine("V46 OK: GPU 200Hz modes validated, no 4K physical claim, FPS user-supplied, Wi-Fi byte stats verified.");
 }
}
