using System;
using SimTurboPC;
class NetworkStabilityTestV20 {
  static void Check(bool value,string label){if(!value)throw new Exception(label);}
  static void Main(){
    var a=AetherNetworkStabilityV20.Analyze(new int[]{10,20,30,40});
    Check(a.Sent==4&&a.Received==4&&a.LossPercent==0,"all valid");
    Check(a.MedianMs==25&&a.P95Ms==40&&a.JitterMs==10,"statistics");
    var b=AetherNetworkStabilityV20.Analyze(new int[]{-1,10,-1,20});
    Check(b.Received==2&&b.LossPercent==50,"loss");
    Check(b.MedianMs==15&&b.JitterMs==10,"valid-only jitter");
    var c=AetherNetworkStabilityV20.Analyze(new int[]{-1,-1});
    Check(double.IsNaN(c.MedianMs)&&c.LossPercent==100,"no ICMP replies");
    Check(AetherNetworkStabilityV20.Advice(c).Contains("bloqueo"),"no-reply advice");
    Check(AetherNetworkStabilityV20.Advice(b).Contains("perdidas"),"advice");
    Console.WriteLine("OK V20 Windows ICMP stability: 7 assertions");
  }
}
