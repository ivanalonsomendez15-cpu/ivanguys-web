using System;
using System.Net;
using SimTurboPC;
class AetherV36Test {
  static void Need(bool ok,string name) { if(!ok)throw new Exception("FAILED: "+name); }
  static void Main() {
    var wifi=new[]{IPAddress.Parse("192.168.1.20")};
    Need(AetherWifiRouteV36.RouteAssessment(IPAddress.Parse("192.168.1.20"),wifi,false).Contains("pertenece a este adaptador"),"wifi route");
    Need(AetherWifiRouteV36.RouteAssessment(IPAddress.Parse("10.8.0.2"),wifi,false).Contains("NO pertenece"),"other route");
    Need(AetherWifiRouteV36.RouteAssessment(IPAddress.Parse("192.168.1.20"),wifi,true).Contains("TUNEL"),"vpn caveat");
    Need(AetherWifiRouteV36.RouteAssessment(null,wifi,false).Contains("no se pudo identificar"),"unknown route");
    Need(AetherWifiRouteV36.RouteAssessment(IPAddress.Any,wifi,false).Contains("no se pudo identificar"),"unbound route");
    Need(AetherWifiRouteV36.RouteAssessment(IPAddress.Parse("192.168.1.20"),new IPAddress[0],false).Contains("NO pertenece"),"no adapter ip");
    long?[] ok={10,12,11,13,10,12,11,10,12,11,10,12};
    long?[] no={null,null,null,null,null,null,null,null,null,null,null,null};
    Need(AetherWifiRouteV36.Explain(no,ok).Contains("filtrado ICMP"),"gateway filter");
    Need(AetherWifiRouteV36.Explain(ok,no).Contains("NO demuestra un fallo DNS"),"DNS caveat");
    Console.WriteLine("V36 OK: source-route match, mismatch, VPN, unknown and ICMP regression.");
  }
}
