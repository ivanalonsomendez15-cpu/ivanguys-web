using System;
using System.Net;
using SimTurboPC;
class AetherV44Test {
  static void Need(bool ok,string name) { if(!ok)throw new Exception("FAILED: "+name); }
  static void Main() {
    var wifi=new[]{IPAddress.Parse("192.168.1.20")};
    var other=IPAddress.Parse("10.8.0.2");
    var same=IPAddress.Parse("192.168.1.20");
    Need(AetherWifiRouteV44.SourceMatchesAdapter(same,wifi),"gateway via Wi-Fi");
    Need(!AetherWifiRouteV44.SourceMatchesAdapter(other,wifi),"gateway via other interface");
    Need(!AetherWifiRouteV44.SourceMatchesAdapter(null,wifi),"unknown route");
    Need(!AetherWifiRouteV44.SourceMatchesAdapter(IPAddress.Any,wifi),"unbound route");
    Need(!AetherWifiRouteV44.SourceMatchesAdapter(IPAddress.Parse("::1"),wifi),"IPv6 cannot claim IPv4");
    Need(!AetherWifiRouteV44.SourceMatchesAdapter(same,null),"unknown addresses");
    Need(AetherWifiRouteV44.CanCompareWan(same,wifi,false),"WAN matching Wi-Fi");
    Need(!AetherWifiRouteV44.CanCompareWan(other,wifi,false),"WAN Ethernet route excluded");
    Need(!AetherWifiRouteV44.CanCompareWan(same,wifi,true),"VPN/tunnel excluded");
    Need(!AetherWifiRouteV44.CanCompareWan(null,wifi,false),"WAN unknown excluded");
    long?[] lan={10,11,12,10,11,12,10,11,12,10,11,12};
    long?[] wan={200,210,200,220,210,200,200,210,220,210,200,210};
    string excluded=AetherWifiRouteV44.GuardedInterpretation(lan,wan,false);
    Need(excluded.Contains("WAN omitida") && !excluded.Contains("ruta exterior"),"no false WAN attribution");
    Need(AetherWifiRouteV44.GuardedInterpretation(lan,wan,true).Contains("ruta exterior"),"eligible WAN analyzed");
    Need(AetherWifiRouteV44.RouteAssessment(other,wifi,false).Contains("NO pertenece"),"warning preserved");
    Need(AetherWifiRouteV44.RouteSnapshotStable(same,same,same,same,wifi,false,false),
      "unchanged route accepted");
    Need(!AetherWifiRouteV44.RouteSnapshotStable(same,other,same,same,wifi,false,false),
      "LAN route drift aborts attribution");
    Need(!AetherWifiRouteV44.RouteSnapshotStable(same,same,same,other,wifi,false,false),
      "WAN route drift aborts attribution");
    Need(!AetherWifiRouteV44.RouteSnapshotStable(same,same,same,same,wifi,false,true),
      "VPN appears during test");
    Need(!AetherWifiRouteV44.RouteSnapshotStable(same,same,same,same,wifi,true,false),
      "VPN disappears during test");
    Need(!AetherWifiRouteV44.RouteSnapshotStable(null,same,same,same,wifi,false,false),
      "unknown baseline route rejected");
    var gw=IPAddress.Parse("192.168.1.1");
    var gwOther=IPAddress.Parse("192.168.1.254");
    var wifiExtra=IPAddress.Parse("192.168.1.21");
    Need(AetherWifiRouteV44.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      new[]{same,wifiExtra},new[]{wifiExtra,same}),"reordered IPv4 set is stable");
    Need(!AetherWifiRouteV44.AdapterSnapshotStable("wifi-A","wifi-A",false,gw,gw,
      wifi,wifi),"disconnected adapter aborts");
    Need(!AetherWifiRouteV44.AdapterSnapshotStable("wifi-A","wifi-B",true,gw,gw,
      wifi,wifi),"adapter switch aborts");
    Need(!AetherWifiRouteV44.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gwOther,
      wifi,wifi),"gateway change aborts");
    Need(!AetherWifiRouteV44.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      new[]{same,wifiExtra},wifi),"IPv4 removal aborts");
    Need(!AetherWifiRouteV44.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,new[]{same,wifiExtra}),"IPv4 addition aborts");
    Need(!AetherWifiRouteV44.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,null,
      wifi,wifi),"missing gateway aborts");
    Need(!AetherWifiRouteV44.AdapterSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,new IPAddress[0]),"empty IPv4 set aborts");
    Need(!AetherWifiRouteV44.AdapterSnapshotStable(null,"wifi-A",true,gw,gw,
      wifi,wifi),"unknown adapter id aborts");
    Need(AetherWifiRouteV44.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,wifi,same,same,same,same,false,false),"per-pair stable snapshot accepted");
    Need(!AetherWifiRouteV44.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gwOther,
      wifi,wifi,same,same,same,same,false,false),"per-pair gateway drift rejected");
    Need(!AetherWifiRouteV44.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,wifi,same,other,same,same,false,false),"per-pair LAN route drift rejected");
    Need(!AetherWifiRouteV44.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,wifi,same,same,same,other,false,false),"per-pair WAN route drift rejected");
    Need(!AetherWifiRouteV44.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,wifi,same,same,same,same,false,true),"per-pair VPN drift rejected");
    Need(!AetherWifiRouteV44.SampleSnapshotStable("wifi-A","wifi-A",true,gw,gw,
      wifi,new[]{wifiExtra},same,same,same,same,false,false),"per-pair IPv4 drift rejected");
    // V44: early exit is safe only when every eligible ICMP probe is silent.
    long?[] silent8={null,null,null,null,null,null,null,null};
    long?[] silent7={null,null,null,null,null,null,null};
    long?[] oneOk={null,null,null,12,null,null,null,null};
    Need(AetherWifiRouteV44.ShouldStopForIcmpSilence(silent8,silent8,true),
      "8 fully silent LAN/WAN pairs stop early");
    Need(!AetherWifiRouteV44.ShouldStopForIcmpSilence(silent7,silent7,true),
      "7 silent pairs do not stop");
    Need(!AetherWifiRouteV44.ShouldStopForIcmpSilence(oneOk,silent8,true),
      "one LAN response preserves full measurement");
    Need(!AetherWifiRouteV44.ShouldStopForIcmpSilence(silent8,oneOk,true),
      "one WAN response preserves full measurement");
    Need(AetherWifiRouteV44.ShouldStopForIcmpSilence(silent8,new long?[0],false),
      "LAN-only silent survey stops after eight");
    Need(!AetherWifiRouteV44.ShouldStopForIcmpSilence(silent8,silent7,true),
      "incomplete WAN data cannot trigger stop");
    Need(!AetherWifiRouteV44.ShouldStopForIcmpSilence(null,silent8,true),
      "missing LAN data cannot trigger stop");
    Need(!AetherWifiRouteV44.ShouldStopForIcmpSilence(silent8,null,true),
      "missing WAN data cannot trigger stop");
    Need(AetherWifiRouteV44.SuppressSilentDestination(silent8),"silent LAN target suppressed at 8");
    Need(!AetherWifiRouteV44.SuppressSilentDestination(silent7),"7 attempts not suppressed");
    Need(!AetherWifiRouteV44.SuppressSilentDestination(oneOk),"one successful reply prevents suppression");
    Need(!AetherWifiRouteV44.SuppressSilentDestination(new long?[]{null,null,null,null,null,null,null,null,null}),"9 entries are not a fresh suppression threshold");
    Need(!AetherWifiRouteV44.SuppressSilentDestination(null),"unknown probes cannot suppress");
    Need(AetherWifiRouteV44.SuppressSilentDestination(new long?[]{-1,-1,-1,-1,-1,-1,-1,-1}),"negative failures count as silence");
    Need(AetherWifiRouteV44.SuppressedInterpretation(true,false).Contains("filtrado ICMP"),"gateway silence not classified as Wi-Fi fault");
    Need(AetherWifiRouteV44.SuppressedInterpretation(false,true).Contains("No demuestra fallo DNS"),"WAN silence not classified as DNS fault");
    Need(AetherWifiRouteV44.SuppressedInterpretation(true,true).Contains("Inconcluso"),"both silent inconclusive");
    // V44: sparse, disjoint ICMP replies cannot justify LAN/WAN attribution.
    long?[] sparseLan={10,10,10,10,10,10,10,null,null,null,null,null};
    long?[] sparseWan={null,null,null,null,null,null,null,20,20,20,20,20};
    Need(AetherWifiRouteV44.CountValidPairs(sparseLan,sparseWan)==0,"disjoint replies have zero valid pairs");
    Need(!AetherWifiRouteV44.HasEnoughPairedEvidence(sparseLan,sparseWan),"disjoint replies are inconclusive");
    Need(AetherWifiRouteV44.Explain(sparseLan,sparseWan).Contains("Inconcluso"),"no false Wi-Fi attribution on disjoint samples");
    long?[] sevenLan={10,10,10,10,10,10,10,null,null,null,null,null};
    long?[] sevenWan={20,20,20,20,20,20,20,20,20,20,20,20};
    Need(AetherWifiRouteV44.CountValidPairs(sevenLan,sevenWan)==7,"exactly seven paired replies");
    Need(!AetherWifiRouteV44.HasEnoughPairedEvidence(sevenLan,sevenWan),"seven paired replies below threshold");
    Need(AetherWifiRouteV44.Explain(sevenLan,sevenWan).Contains("Inconcluso"),"seven replies cannot localize fault");
    long?[] eightLan={10,10,10,10,10,10,10,10,null,null,null,null};
    Need(AetherWifiRouteV44.CountValidPairs(eightLan,sevenWan)==8,"exactly eight paired replies");
    Need(AetherWifiRouteV44.HasEnoughPairedEvidence(eightLan,sevenWan),"eight replies meet threshold");
    Need(AetherWifiRouteV44.HasEnoughPairedEvidence(lan,wan),"fully successful baseline preserved");
    Need(AetherWifiRouteV44.CountValidPairs(null,wan)==0,"null series fail closed");
    Need(AetherWifiRouteV44.CountValidPairs(lan,new long?[]{1})==0,"unequal series fail closed");
    Need(AetherWifiRouteV44.CountValidPairs(new long?[]{-1,5},new long?[]{2,3})==1,"negative RTT not a successful pair");
    // V44: a high RTT with no matching reply at the other endpoint must
    // not be used to claim a local Wi-Fi or WAN latency issue.
    long?[] mixedLan={10,10,10,10,10,10,10,10,500,500,500,500,500,500,500,500};
    long?[] mixedWan={30,30,30,30,30,30,30,30,null,null,null,null,null,null,null,null};
    Need(AetherWifiRouteV44.CountValidPairs(mixedLan,mixedWan)==8,"8 valid pairs, 8 unmatched local outliers");
    Need(AetherWifiRouteV44.PairedReplies(mixedLan,mixedWan,true).Count==8,"paired LAN sample count");
    Need(!AetherWifiRouteV44.Explain(mixedLan,mixedWan).Contains("Posible problema local"),
      "unmatched local outliers cannot cause false local attribution");
    long?[] reverseLan={10,10,10,10,10,10,10,10,null,null,null,null,null,null,null,null};
    long?[] reverseWan={30,30,30,30,30,30,30,30,500,500,500,500,500,500,500,500};
    Need(!AetherWifiRouteV44.Explain(reverseLan,reverseWan).Contains("ruta exterior"),
      "unmatched WAN outliers cannot cause false upstream attribution");
    long?[] highLocal={100,100,100,100,100,100,100,100};
    long?[] highWan={120,120,120,120,120,120,120,120};
    Need(AetherWifiRouteV44.Explain(highLocal,highWan).Contains("Posible problema local"),
      "paired high local p95 remains visible");
    long?[] goodLocal={10,10,10,10,10,10,10,10};
    long?[] highOutside={180,180,180,180,180,180,180,180};
    Need(AetherWifiRouteV44.Explain(goodLocal,highOutside).Contains("ruta exterior"),
      "paired high WAN p95 remains visible");
    Need(AetherWifiRouteV44.PairedReplies(null,highOutside,true).Count==0,
      "unknown LAN cannot yield paired samples");
    Need(AetherWifiRouteV44.PairedReplies(goodLocal,new long?[]{30},false).Count==0,
      "different lengths cannot yield paired samples");
    Console.WriteLine("V44 OK: paired-only ICMP classification and previous route/adapter synthetic tests.");
  }
}
