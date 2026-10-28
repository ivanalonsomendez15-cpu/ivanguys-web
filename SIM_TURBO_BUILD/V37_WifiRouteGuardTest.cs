using System;
using System.Net;
using SimTurboPC;
class AetherV37Test {
  static void Need(bool ok,string name) { if(!ok)throw new Exception("FAILED: "+name); }
  static void Main() {
    var wifi=new[]{IPAddress.Parse("192.168.1.20")};
    var other=IPAddress.Parse("10.8.0.2");
    var same=IPAddress.Parse("192.168.1.20");
    Need(AetherWifiRouteV37.SourceMatchesAdapter(same,wifi),"gateway via Wi-Fi");
    Need(!AetherWifiRouteV37.SourceMatchesAdapter(other,wifi),"gateway via other interface");
    Need(!AetherWifiRouteV37.SourceMatchesAdapter(null,wifi),"unknown route");
    Need(!AetherWifiRouteV37.SourceMatchesAdapter(IPAddress.Any,wifi),"unbound route");
    Need(!AetherWifiRouteV37.SourceMatchesAdapter(IPAddress.Parse("::1"),wifi),"IPv6 cannot claim IPv4");
    Need(!AetherWifiRouteV37.SourceMatchesAdapter(same,null),"unknown addresses");
    Need(AetherWifiRouteV37.CanCompareWan(same,wifi,false),"WAN matching Wi-Fi");
    Need(!AetherWifiRouteV37.CanCompareWan(other,wifi,false),"WAN Ethernet route excluded");
    Need(!AetherWifiRouteV37.CanCompareWan(same,wifi,true),"VPN/tunnel excluded");
    Need(!AetherWifiRouteV37.CanCompareWan(null,wifi,false),"WAN unknown excluded");
    long?[] lan={10,11,12,10,11,12,10,11,12,10,11,12};
    long?[] wan={200,210,200,220,210,200,200,210,220,210,200,210};
    string excluded=AetherWifiRouteV37.GuardedInterpretation(lan,wan,false);
    Need(excluded.Contains("WAN omitida") && !excluded.Contains("ruta exterior"),"no false WAN attribution");
    Need(AetherWifiRouteV37.GuardedInterpretation(lan,wan,true).Contains("ruta exterior"),"eligible WAN analyzed");
    Need(AetherWifiRouteV37.RouteAssessment(other,wifi,false).Contains("NO pertenece"),"warning preserved");
    Console.WriteLine("V37 OK: gateway route guard, WAN route gating, tunnel, unknown route and attribution.");
  }
}
