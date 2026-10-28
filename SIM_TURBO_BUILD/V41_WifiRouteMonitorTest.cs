using System;
using System.Net;
using SimTurboPC;
class AetherV41Test {
  static void Need(bool ok,string name) { if(!ok)throw new Exception("FAILED: "+name); }
  static void Main() {
    var wifi=new[]{IPAddress.Parse("192.168.1.20")};
    var other=IPAddress.Parse("10.8.0.2");
    var same=IPAddress.Parse("192.168.1.20");
    Need(AetherWifiRouteV41.SourceMatchesAdapter(same,wifi),"gateway via Wi-Fi");
    Need(!AetherWifiRouteV41.SourceMatchesAdapter(other,wifi),"gateway via other interface");
    Need(!AetherWifiRouteV41.SourceMatchesAdapter(null,wifi),"unknown route");
    Need(!AetherWifiRouteV41.SourceMatchesAdapter(IPAddress.Any,wifi),"unbound route");
    Need(!AetherWifiRouteV41.SourceMatchesAdapter(IPAddress.Parse("::1"),wifi),"IPv6 cannot claim IPv4");
    Need(!AetherWifiRouteV41.SourceMatchesAdapter(same,null),"unknown addresses");
    Need(AetherWifiRouteV41.CanCompareWan(same,wifi,false),"WAN matching Wi-Fi");
    Need(!AetherWifiRouteV41.CanCompareWan(other,wifi,false),"WAN Ethernet route excluded");
    Need(!AetherWifiRouteV41.CanCompareWan(same,wifi,true),"VPN/tunnel excluded");
    Need(!AetherWifiRouteV41.CanCompareWan(null,wifi,false),"WAN unknown excluded");
    long?[] lan={10,11,12,10,11,12,10,11,12,10,11,12};
    long?[] wan={200,210,200,220,210,200,200,210,220,210,200,210};
    string excluded=AetherWifiRouteV41.GuardedInterpretation(lan,wan,false);
    Need(excluded.Contains("WAN omitida") && !excluded.Contains("ruta exterior"),"no false WAN attribution");
    Need(AetherWifiRouteV41.GuardedInterpretation(lan,wan,true).Contains("ruta exterior"),"eligible WAN analyzed");
    Need(AetherWifiRouteV41.RouteAssessment(other,wifi,false).Contains("NO pertenece"),"warning preserved");
    Need(AetherWifiRouteV41.RouteSnapshotStable(same,same,same,same,wifi,false,false),
      "unchanged route accepted");
    Need(!AetherWifiRouteV41.RouteSnapshotStable(same,other,same,same,wifi,false,false),
      "LAN route drift aborts attribution");
    Need(!AetherWifiRouteV41.RouteSnapshotStable(same,same,same,other,wifi,false,false),
      "WAN route drift aborts attribution");
    Need(!AetherWifiRouteV41.RouteSnapshotStable(same,same,same,same,wifi,false,true),
      "VPN appears during test");
    Need(!AetherWifiRouteV41.RouteSnapshotStable(same,same,same,same,wifi,true,false),
      "VPN disappears during test");
    Need(!AetherWifiRouteV41.RouteSnapshotStable(null,same,same,same,wifi,false,false),
      "unknown baseline route rejected");
    var gw=IPAddress.Parse("192.168.1.1");
    var gwOther=IPAddress.Parse("192.168.1.254");
    var wifiExtra=IPAddress.Parse("192.168.1.21");
    Need(AetherWifiRouteV41.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      new[]{same,wifiExtra},new[]{wifiExtra,same}),"reordered IPv4 set is stable");
    Need(!AetherWifiRouteV41.AdapterSnapshotStable("wifi-A","wifi-A",false,gw,gw,
      wifi,wifi),"disconnected adapter aborts");
    Need(!AetherWifiRouteV41.AdapterSnapshotStable("wifi-A","wifi-B",true,gw,gw,
      wifi,wifi),"adapter switch aborts");
    Need(!AetherWifiRouteV41.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gwOther,
      wifi,wifi),"gateway change aborts");
    Need(!AetherWifiRouteV41.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      new[]{same,wifiExtra},wifi),"IPv4 removal aborts");
    Need(!AetherWifiRouteV41.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,new[]{same,wifiExtra}),"IPv4 addition aborts");
    Need(!AetherWifiRouteV41.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,null,
      wifi,wifi),"missing gateway aborts");
    Need(!AetherWifiRouteV41.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,new IPAddress[0]),"empty IPv4 set aborts");
    Need(!AetherWifiRouteV41.AdapterSnapshotStable(null,"wifi-A",true,gw,gw,
      wifi,wifi),"unknown adapter id aborts");
    Need(AetherWifiRouteV41.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,wifi,same,same,same,same,false,false),"per-pair stable snapshot accepted");
    Need(!AetherWifiRouteV41.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gwOther,
      wifi,wifi,same,same,same,same,false,false),"per-pair gateway drift rejected");
    Need(!AetherWifiRouteV41.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,wifi,same,other,same,same,false,false),"per-pair LAN route drift rejected");
    Need(!AetherWifiRouteV41.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,wifi,same,same,same,other,false,false),"per-pair WAN route drift rejected");
    Need(!AetherWifiRouteV41.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,wifi,same,same,same,same,false,true),"per-pair VPN drift rejected");
    Need(!AetherWifiRouteV41.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,new[]{wifiExtra},same,same,same,same,false,false),"per-pair IPv4 drift rejected");
    // V41: early exit is safe only when every eligible ICMP probe is silent.
    long?[] silent8={null,null,null,null,null,null,null,null};
    long?[] silent7={null,null,null,null,null,null,null};
    long?[] oneOk={null,null,null,12,null,null,null,null};
    Need(AetherWifiRouteV41.ShouldStopForIcmpSilence(silent8,silent8,true),
      "8 fully silent LAN/WAN pairs stop early");
    Need(!AetherWifiRouteV41.ShouldStopForIcmpSilence(silent7,silent7,true),
      "7 silent pairs do not stop");
    Need(!AetherWifiRouteV41.ShouldStopForIcmpSilence(oneOk,silent8,true),
      "one LAN response preserves full measurement");
    Need(!AetherWifiRouteV41.ShouldStopForIcmpSilence(silent8,oneOk,true),
      "one WAN response preserves full measurement");
    Need(AetherWifiRouteV41.ShouldStopForIcmpSilence(silent8,new long?[0],false),
      "LAN-only silent survey stops after eight");
    Need(!AetherWifiRouteV41.ShouldStopForIcmpSilence(silent8,silent7,true),
      "incomplete WAN data cannot trigger stop");
    Need(!AetherWifiRouteV41.ShouldStopForIcmpSilence(null,silent8,true),
      "missing LAN data cannot trigger stop");
    Need(!AetherWifiRouteV41.ShouldStopForIcmpSilence(silent8,null,true),
      "missing WAN data cannot trigger stop");
    Console.WriteLine("V41 OK: route, adapter, gateway and IPv4 stability and ICMP silence synthetic checks.");
  }
}
