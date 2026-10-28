using System;
using System.Net;
using SimTurboPC;
class AetherV42Test {
  static void Need(bool ok,string name) { if(!ok)throw new Exception("FAILED: "+name); }
  static void Main() {
    var wifi=new[]{IPAddress.Parse("192.168.1.20")};
    var other=IPAddress.Parse("10.8.0.2");
    var same=IPAddress.Parse("192.168.1.20");
    Need(AetherWifiRouteV42.SourceMatchesAdapter(same,wifi),"gateway via Wi-Fi");
    Need(!AetherWifiRouteV42.SourceMatchesAdapter(other,wifi),"gateway via other interface");
    Need(!AetherWifiRouteV42.SourceMatchesAdapter(null,wifi),"unknown route");
    Need(!AetherWifiRouteV42.SourceMatchesAdapter(IPAddress.Any,wifi),"unbound route");
    Need(!AetherWifiRouteV42.SourceMatchesAdapter(IPAddress.Parse("::1"),wifi),"IPv6 cannot claim IPv4");
    Need(!AetherWifiRouteV42.SourceMatchesAdapter(same,null),"unknown addresses");
    Need(AetherWifiRouteV42.CanCompareWan(same,wifi,false),"WAN matching Wi-Fi");
    Need(!AetherWifiRouteV42.CanCompareWan(other,wifi,false),"WAN Ethernet route excluded");
    Need(!AetherWifiRouteV42.CanCompareWan(same,wifi,true),"VPN/tunnel excluded");
    Need(!AetherWifiRouteV42.CanCompareWan(null,wifi,false),"WAN unknown excluded");
    long?[] lan={10,11,12,10,11,12,10,11,12,10,11,12};
    long?[] wan={200,210,200,220,210,200,200,210,220,210,200,210};
    string excluded=AetherWifiRouteV42.GuardedInterpretation(lan,wan,false);
    Need(excluded.Contains("WAN omitida") && !excluded.Contains("ruta exterior"),"no false WAN attribution");
    Need(AetherWifiRouteV42.GuardedInterpretation(lan,wan,true).Contains("ruta exterior"),"eligible WAN analyzed");
    Need(AetherWifiRouteV42.RouteAssessment(other,wifi,false).Contains("NO pertenece"),"warning preserved");
    Need(AetherWifiRouteV42.RouteSnapshotStable(same,same,same,same,wifi,false,false),
      "unchanged route accepted");
    Need(!AetherWifiRouteV42.RouteSnapshotStable(same,other,same,same,wifi,false,false),
      "LAN route drift aborts attribution");
    Need(!AetherWifiRouteV42.RouteSnapshotStable(same,same,same,other,wifi,false,false),
      "WAN route drift aborts attribution");
    Need(!AetherWifiRouteV42.RouteSnapshotStable(same,same,same,same,wifi,false,true),
      "VPN appears during test");
    Need(!AetherWifiRouteV42.RouteSnapshotStable(same,same,same,same,wifi,true,false),
      "VPN disappears during test");
    Need(!AetherWifiRouteV42.RouteSnapshotStable(null,same,same,same,wifi,false,false),
      "unknown baseline route rejected");
    var gw=IPAddress.Parse("192.168.1.1");
    var gwOther=IPAddress.Parse("192.168.1.254");
    var wifiExtra=IPAddress.Parse("192.168.1.21");
    Need(AetherWifiRouteV42.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      new[]{same,wifiExtra},new[]{wifiExtra,same}),"reordered IPv4 set is stable");
    Need(!AetherWifiRouteV42.AdapterSnapshotStable("wifi-A","wifi-A",false,gw,gw,
      wifi,wifi),"disconnected adapter aborts");
    Need(!AetherWifiRouteV42.AdapterSnapshotStable("wifi-A","wifi-B",true,gw,gw,
      wifi,wifi),"adapter switch aborts");
    Need(!AetherWifiRouteV42.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gwOther,
      wifi,wifi),"gateway change aborts");
    Need(!AetherWifiRouteV42.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      new[]{same,wifiExtra},wifi),"IPv4 removal aborts");
    Need(!AetherWifiRouteV42.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,new[]{same,wifiExtra}),"IPv4 addition aborts");
    Need(!AetherWifiRouteV42.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,null,
      wifi,wifi),"missing gateway aborts");
    Need(!AetherWifiRouteV42.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,new IPAddress[0]),"empty IPv4 set aborts");
    Need(!AetherWifiRouteV42.AdapterSnapshotStable(null,"wifi-A",true,gw,gw,
      wifi,wifi),"unknown adapter id aborts");
    Need(AetherWifiRouteV42.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,wifi,same,same,same,same,false,false),"per-pair stable snapshot accepted");
    Need(!AetherWifiRouteV42.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gwOther,
      wifi,wifi,same,same,same,same,false,false),"per-pair gateway drift rejected");
    Need(!AetherWifiRouteV42.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,wifi,same,other,same,same,false,false),"per-pair LAN route drift rejected");
    Need(!AetherWifiRouteV42.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,wifi,same,same,same,other,false,false),"per-pair WAN route drift rejected");
    Need(!AetherWifiRouteV42.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,wifi,same,same,same,same,false,true),"per-pair VPN drift rejected");
    Need(!AetherWifiRouteV42.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,new[]{wifiExtra},same,same,same,same,false,false),"per-pair IPv4 drift rejected");
    // V42: early exit is safe only when every eligible ICMP probe is silent.
    long?[] silent8={null,null,null,null,null,null,null,null};
    long?[] silent7={null,null,null,null,null,null,null};
    long?[] oneOk={null,null,null,12,null,null,null,null};
    Need(AetherWifiRouteV42.ShouldStopForIcmpSilence(silent8,silent8,true),
      "8 fully silent LAN/WAN pairs stop early");
    Need(!AetherWifiRouteV42.ShouldStopForIcmpSilence(silent7,silent7,true),
      "7 silent pairs do not stop");
    Need(!AetherWifiRouteV42.ShouldStopForIcmpSilence(oneOk,silent8,true),
      "one LAN response preserves full measurement");
    Need(!AetherWifiRouteV42.ShouldStopForIcmpSilence(silent8,oneOk,true),
      "one WAN response preserves full measurement");
    Need(AetherWifiRouteV42.ShouldStopForIcmpSilence(silent8,new long?[0],false),
      "LAN-only silent survey stops after eight");
    Need(!AetherWifiRouteV42.ShouldStopForIcmpSilence(silent8,silent7,true),
      "incomplete WAN data cannot trigger stop");
    Need(!AetherWifiRouteV42.ShouldStopForIcmpSilence(null,silent8,true),
      "missing LAN data cannot trigger stop");
    Need(!AetherWifiRouteV42.ShouldStopForIcmpSilence(silent8,null,true),
      "missing WAN data cannot trigger stop");
    Need(AetherWifiRouteV42.SuppressSilentDestination(silent8),"silent LAN target suppressed at 8");
    Need(!AetherWifiRouteV42.SuppressSilentDestination(silent7),"7 attempts not suppressed");
    Need(!AetherWifiRouteV42.SuppressSilentDestination(oneOk),"one successful reply prevents suppression");
    Need(!AetherWifiRouteV42.SuppressSilentDestination(new long?[]{null,null,null,null,null,null,null,null,null}),"9 entries are not a fresh suppression threshold");
    Need(!AetherWifiRouteV42.SuppressSilentDestination(null),"unknown probes cannot suppress");
    Need(AetherWifiRouteV42.SuppressSilentDestination(new long?[]{-1,-1,-1,-1,-1,-1,-1,-1}),"negative failures count as silence");
    Need(AetherWifiRouteV42.SuppressedInterpretation(true,false).Contains("filtrado ICMP"),"gateway silence not classified as Wi-Fi fault");
    Need(AetherWifiRouteV42.SuppressedInterpretation(false,true).Contains("No demuestra fallo DNS"),"WAN silence not classified as DNS fault");
    Need(AetherWifiRouteV42.SuppressedInterpretation(true,true).Contains("Inconcluso"),"both silent inconclusive");
    Console.WriteLine("V42 OK: route, adapter, gateway and IPv4 stability and ICMP silence synthetic checks.");
  }
}
