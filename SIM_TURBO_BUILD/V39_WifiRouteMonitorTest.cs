using System;
using System.Net;
using SimTurboPC;
class AetherV39Test {
  static void Need(bool ok,string name) { if(!ok)throw new Exception("FAILED: "+name); }
  static void Main() {
    var wifi=new[]{IPAddress.Parse("192.168.1.20")};
    var other=IPAddress.Parse("10.8.0.2");
    var same=IPAddress.Parse("192.168.1.20");
    Need(AetherWifiRouteV39.SourceMatchesAdapter(same,wifi),"gateway via Wi-Fi");
    Need(!AetherWifiRouteV39.SourceMatchesAdapter(other,wifi),"gateway via other interface");
    Need(!AetherWifiRouteV39.SourceMatchesAdapter(null,wifi),"unknown route");
    Need(!AetherWifiRouteV39.SourceMatchesAdapter(IPAddress.Any,wifi),"unbound route");
    Need(!AetherWifiRouteV39.SourceMatchesAdapter(IPAddress.Parse("::1"),wifi),"IPv6 cannot claim IPv4");
    Need(!AetherWifiRouteV39.SourceMatchesAdapter(same,null),"unknown addresses");
    Need(AetherWifiRouteV39.CanCompareWan(same,wifi,false),"WAN matching Wi-Fi");
    Need(!AetherWifiRouteV39.CanCompareWan(other,wifi,false),"WAN Ethernet route excluded");
    Need(!AetherWifiRouteV39.CanCompareWan(same,wifi,true),"VPN/tunnel excluded");
    Need(!AetherWifiRouteV39.CanCompareWan(null,wifi,false),"WAN unknown excluded");
    long?[] lan={10,11,12,10,11,12,10,11,12,10,11,12};
    long?[] wan={200,210,200,220,210,200,200,210,220,210,200,210};
    string excluded=AetherWifiRouteV39.GuardedInterpretation(lan,wan,false);
    Need(excluded.Contains("WAN omitida") && !excluded.Contains("ruta exterior"),"no false WAN attribution");
    Need(AetherWifiRouteV39.GuardedInterpretation(lan,wan,true).Contains("ruta exterior"),"eligible WAN analyzed");
    Need(AetherWifiRouteV39.RouteAssessment(other,wifi,false).Contains("NO pertenece"),"warning preserved");
    Need(AetherWifiRouteV39.RouteSnapshotStable(same,same,same,same,wifi,false,false),
      "unchanged route accepted");
    Need(!AetherWifiRouteV39.RouteSnapshotStable(same,other,same,same,wifi,false,false),
      "LAN route drift aborts attribution");
    Need(!AetherWifiRouteV39.RouteSnapshotStable(same,same,same,other,wifi,false,false),
      "WAN route drift aborts attribution");
    Need(!AetherWifiRouteV39.RouteSnapshotStable(same,same,same,same,wifi,false,true),
      "VPN appears during test");
    Need(!AetherWifiRouteV39.RouteSnapshotStable(same,same,same,same,wifi,true,false),
      "VPN disappears during test");
    Need(!AetherWifiRouteV39.RouteSnapshotStable(null,same,same,same,wifi,false,false),
      "unknown baseline route rejected");
    var gw=IPAddress.Parse("192.168.1.1");
    var gwOther=IPAddress.Parse("192.168.1.254");
    var wifiExtra=IPAddress.Parse("192.168.1.21");
    Need(AetherWifiRouteV39.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      new[]{same,wifiExtra},new[]{wifiExtra,same}),"reordered IPv4 set is stable");
    Need(!AetherWifiRouteV39.AdapterSnapshotStable("wifi-A","wifi-A",false,gw,gw,
      wifi,wifi),"disconnected adapter aborts");
    Need(!AetherWifiRouteV39.AdapterSnapshotStable("wifi-A","wifi-B",true,gw,gw,
      wifi,wifi),"adapter switch aborts");
    Need(!AetherWifiRouteV39.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gwOther,
      wifi,wifi),"gateway change aborts");
    Need(!AetherWifiRouteV39.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      new[]{same,wifiExtra},wifi),"IPv4 removal aborts");
    Need(!AetherWifiRouteV39.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,new[]{same,wifiExtra}),"IPv4 addition aborts");
    Need(!AetherWifiRouteV39.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,null,
      wifi,wifi),"missing gateway aborts");
    Need(!AetherWifiRouteV39.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,new IPAddress[0]),"empty IPv4 set aborts");
    Need(!AetherWifiRouteV39.AdapterSnapshotStable(null,"wifi-A",true,gw,gw,
      wifi,wifi),"unknown adapter id aborts");
    Console.WriteLine("V39 OK: route, adapter, gateway and IPv4 stability synthetic checks.");
  }
}
