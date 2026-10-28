using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>
  /// V42: per-pair route and adapter guards plus per-destination ICMP suppression.
  /// Read-only diagnostics. An ICMP timeout does not prove packet loss.
  /// </summary>
  public static class AetherWifiRouteV42 {
    public static string Explain(IList<long?> lan,IList<long?> wan) {
      if(lan==null || wan==null)throw new ArgumentNullException(lan==null?"lan":"wan");
      if(lan.Count==0 || wan.Count==0)return "Inconcluso: no hay muestras.";
      if(lan.Count!=wan.Count)return "Inconcluso: las series LAN/WAN tienen distinta longitud.";
      int lok=lan.Count(x=>x.HasValue&&x.Value>=0);
      int wok=wan.Count(x=>x.HasValue&&x.Value>=0);
      if(lok==0 && wok>0)
        return "El router no responde ICMP, pero Internet SI: probable filtrado ICMP del gateway. No se ha demostrado fallo Wi-Fi.";
      if(lok==0 && wok==0)
        return "Inconcluso: no hay respuestas ICMP en ninguno de los destinos. Comprueba conexión y posibles filtros; no implica pérdida real.";
      if(lok>0 && wok==0)
        return "La puerta de enlace responde, pero 1.1.1.1 no responde ICMP. Puede ser filtrado o problema exterior; NO demuestra un fallo DNS.";
      if(lan.Count<8)
        return "Muestra corta: menos de ocho parejas. Repite antes de localizar un problema.";
      return AetherWifiMetricsV34.LocateProblem(lan,wan);
    }

    // V42: when ICMP is completely silent for the first eight attempts, further
    // pings cannot establish whether a router filters ICMP. Stop early and
    // explicitly mark the outcome inconclusive; never report packet loss.
    public static bool ShouldStopForIcmpSilence(IList<long?> lan,IList<long?> wan,bool canWan) {
      if(lan==null || wan==null || lan.Count<8 ||
         (canWan && wan.Count!=lan.Count))return false;
      return lan.All(x=>!x.HasValue || x.Value<0) &&
             (!canWan || wan.All(x=>!x.HasValue || x.Value<0));
    }

    // V42: suppress only a destination that has never replied in its first
    // eight actual probes. A suppressed target is NOT treated as packet loss.
    public static bool SuppressSilentDestination(IList<long?> samples) {
      return samples!=null && samples.Count==8 &&
             samples.All(x=>!x.HasValue || x.Value<0);
    }
    public static string SuppressedInterpretation(bool lanSuppressed,bool wanSuppressed) {
      if(lanSuppressed && wanSuppressed)
        return "Inconcluso: ambos destinos ICMP sin respuesta; no demuestra perdida real.";
      if(lanSuppressed)
        return "Gateway sin respuesta ICMP en ocho intentos; WAN si respondio. Puede ser filtrado ICMP del router; no demuestra fallo Wi-Fi.";
      if(wanSuppressed)
        return "WAN sin respuesta ICMP en ocho intentos; gateway si respondio. No demuestra fallo DNS, perdida real ni averia Wi-Fi.";
      return "Sin destinos ICMP suprimidos.";
    }

    static long? TryPing(string host) {
      try {
        using(var ping=new Ping()) {
          var result=ping.Send(host,400);
          return result.Status==IPStatus.Success?(long?)result.RoundtripTime:null;
        }
      } catch { return null; }
    }


    // Read-only route attribution: UDP connect selects a local IPv4 address without
    // transmitting a datagram. ICMP may still take a different route.
    public static string RouteAssessment(IPAddress selected, IEnumerable<IPAddress> wifiAddresses, bool tunnelActive) {
      var ips=wifiAddresses==null?new List<IPAddress>():wifiAddresses.Where(x=>x!=null && x.AddressFamily==AddressFamily.InterNetwork).ToList();
      if(selected==null || selected.AddressFamily!=AddressFamily.InterNetwork || IPAddress.Any.Equals(selected))
        return "Ruta WAN: no se pudo identificar la IPv4 local elegida; no atribuir el ping exterior al Wi-Fi.";
      if(!ips.Any(x=>x.Equals(selected)))
        return "AVISO RUTA: la IPv4 elegida para salir a Internet NO pertenece a este adaptador Wi-Fi. "+
          "Los pings WAN pueden usar Ethernet, VPN u otra interfaz; no sirven para diagnosticar exclusivamente este Wi-Fi.";
      if(tunnelActive)
        return "RUTA CON TUNEL: la IPv4 elegida pertenece a este Wi-Fi, pero hay un túnel activo. "+
          "No se puede asegurar que ICMP o el tráfico de juegos sigan el mismo camino.";
      return "Ruta WAN orientativa: la IPv4 local elegida pertenece a este adaptador Wi-Fi. "+
        "Esto NO garantiza que ICMP o cada juego utilicen la misma interfaz.";
    }
    // V42: read-only route gating; UDP selection does not guarantee ICMP routing.
    public static bool SourceMatchesAdapter(IPAddress selected, IEnumerable<IPAddress> wifiAddresses) {
      if(selected==null || selected.AddressFamily!=AddressFamily.InterNetwork ||
         IPAddress.Any.Equals(selected) || wifiAddresses==null)return false;
      return wifiAddresses.Any(ip=>ip!=null && ip.AddressFamily==AddressFamily.InterNetwork && ip.Equals(selected));
    }
    public static bool CanCompareWan(IPAddress selected, IEnumerable<IPAddress> wifiAddresses, bool tunnelActive) {
      return !tunnelActive && SourceMatchesAdapter(selected,wifiAddresses);
    }
    public static string GuardedInterpretation(IList<long?> lan,IList<long?> wan,bool canCompareWan) {
      if(!canCompareWan)return "WAN omitida por ruta no atribuible al Wi-Fi o tunel activo. "+
        "Solo se informa de la puerta de enlace; no comparar LAN/WAN ni atribuir Internet a este adaptador.";
      return Explain(lan,wan);
    }
    // A route may change during the 16-probe survey (roaming, VPN, Ethernet).
    // Abort attribution rather than mixing measurements from different paths.
    public static bool RouteSnapshotStable(
        IPAddress lanBefore, IPAddress lanNow, IPAddress wanBefore, IPAddress wanNow,
        IEnumerable<IPAddress> wifiAddresses, bool tunnelBefore, bool tunnelNow) {
      return tunnelBefore==tunnelNow &&
             SourceMatchesAdapter(lanBefore,wifiAddresses) &&
             SourceMatchesAdapter(lanNow,wifiAddresses) &&
             Object.Equals(lanBefore,lanNow) &&
             Object.Equals(wanBefore,wanNow);
    }
    // V42: fail closed if the Wi-Fi link, gateway or assigned IPv4 set changes.
    // Read-only snapshots: no interface reset, driver changes or route modifications.
    public static bool AdapterSnapshotStable(string baselineId,string currentId,bool currentUp,
        IPAddress gatewayBefore,IPAddress gatewayNow,
        IEnumerable<IPAddress> ipv4Before,IEnumerable<IPAddress> ipv4Now) {
      if(String.IsNullOrWhiteSpace(baselineId) || baselineId!=currentId || !currentUp ||
         gatewayBefore==null || gatewayNow==null ||
         gatewayBefore.AddressFamily!=AddressFamily.InterNetwork ||
         !gatewayBefore.Equals(gatewayNow) || ipv4Before==null || ipv4Now==null)return false;
      var before=ipv4Before.Where(x=>x!=null && x.AddressFamily==AddressFamily.InterNetwork)
        .Select(x=>x.ToString()).Distinct().OrderBy(x=>x).ToArray();
      var now=ipv4Now.Where(x=>x!=null && x.AddressFamily==AddressFamily.InterNetwork)
        .Select(x=>x.ToString()).Distinct().OrderBy(x=>x).ToArray();
      return before.Length>0 && before.SequenceEqual(now);
    }
    static bool AdapterLiveStable(string baselineId,IPAddress gatewayBefore,IEnumerable<IPAddress> ipv4Before) {
      try {
        var live=NetworkInterface.GetAllNetworkInterfaces().FirstOrDefault(x=>
          x.Id==baselineId && x.NetworkInterfaceType==NetworkInterfaceType.Wireless80211);
        if(live==null)return false;
        var props=live.GetIPProperties();
        var gateway=props.GatewayAddresses.FirstOrDefault(x=>
          x.Address.AddressFamily==AddressFamily.InterNetwork);
        return AdapterSnapshotStable(baselineId,live.Id,
          live.OperationalStatus==OperationalStatus.Up,gatewayBefore,
          gateway==null?null:gateway.Address,ipv4Before,
          props.UnicastAddresses.Select(x=>x.Address));
      } catch { return false; } // Missing/ambiguous data must never count as stable.
    }
    // One coherent decision per probe: adapter identity, IPv4, gateway, route and tunnel.
    // This pure helper is exercised by synthetic tests; unknown state fails closed.
    public static bool SampleSnapshotStable(string baselineId,string currentId,bool currentUp,
        IPAddress gatewayBefore,IPAddress gatewayNow,
        IEnumerable<IPAddress> ipv4Before,IEnumerable<IPAddress> ipv4Now,
        IPAddress lanBefore,IPAddress lanNow,IPAddress wanBefore,IPAddress wanNow,
        bool tunnelBefore,bool tunnelNow) {
      return AdapterSnapshotStable(baselineId,currentId,currentUp,gatewayBefore,gatewayNow,ipv4Before,ipv4Now) &&
             RouteSnapshotStable(lanBefore,lanNow,wanBefore,wanNow,ipv4Before,tunnelBefore,tunnelNow);
    }
    static bool LiveSampleStable(string baselineId,IPAddress gatewayBefore,List<IPAddress> wifiIps,
        IPAddress lanBefore,IPAddress wanBefore,bool tunnelBefore) {
      try {
        var live=NetworkInterface.GetAllNetworkInterfaces().FirstOrDefault(x=>
          x.Id==baselineId && x.NetworkInterfaceType==NetworkInterfaceType.Wireless80211);
        if(live==null)return false;
        var props=live.GetIPProperties();
        var currentGateway=props.GatewayAddresses.FirstOrDefault(x=>
          x.Address.AddressFamily==AddressFamily.InterNetwork);
        return SampleSnapshotStable(baselineId,live.Id,live.OperationalStatus==OperationalStatus.Up,
          gatewayBefore,currentGateway==null?null:currentGateway.Address,
          wifiIps,props.UnicastAddresses.Select(x=>x.Address),
          lanBefore,TrySource(gatewayBefore),wanBefore,TrySource(IPAddress.Parse("1.1.1.1")),
          tunnelBefore,IsTunnelActive());
      } catch { return false; }
    }
    static bool IsTunnelActive() {
      return NetworkInterface.GetAllNetworkInterfaces().Any(x=>
        x.OperationalStatus==OperationalStatus.Up &&
        (x.NetworkInterfaceType==NetworkInterfaceType.Tunnel ||
         x.NetworkInterfaceType==NetworkInterfaceType.Ppp));
    }
    static IPAddress TrySource(IPAddress target) {
      try {
        using(var sock=new Socket(AddressFamily.InterNetwork,SocketType.Dgram,ProtocolType.Udp)) {
          sock.Connect(new IPEndPoint(target,443));
          var ep=sock.LocalEndPoint as IPEndPoint;
          return ep==null?null:ep.Address;
        }
      } catch { return null; }
    }

    public static string Survey() {
      var adapters=NetworkInterface.GetAllNetworkInterfaces()
        .Where(n=>n.NetworkInterfaceType==NetworkInterfaceType.Wireless80211 &&
               n.OperationalStatus==OperationalStatus.Up).ToList();
      if(adapters.Count==0)return "No hay adaptador Wi-Fi activo. No se ha ejecutado ninguna prueba.";
      var sb=new StringBuilder();
      // One read-only WAN route selection per survey; reused for all adapters.
      var selectedSource=TrySource(IPAddress.Parse("1.1.1.1"));
      bool tunnelActive=IsTunnelActive();
      foreach(var adapter in adapters) {
        sb.AppendLine("Adaptador: "+adapter.Name);
        sb.AppendLine("Velocidad negociada: "+(adapter.Speed>0?(adapter.Speed/1000000.0).ToString("0")+" Mb/s":"desconocida")+
          " (NO es velocidad real de Internet).");
        var wifiIps=adapter.GetIPProperties().UnicastAddresses
          .Where(x=>x.Address.AddressFamily==AddressFamily.InterNetwork)
          .Select(x=>x.Address).ToList();
        bool canWan=CanCompareWan(selectedSource,wifiIps,tunnelActive);
        sb.AppendLine(RouteAssessment(selectedSource,wifiIps,tunnelActive));
        var gateway=adapter.GetIPProperties().GatewayAddresses
          .FirstOrDefault(x=>x.Address.AddressFamily==AddressFamily.InterNetwork);
        if(gateway==null) {
          sb.AppendLine("Sin gateway IPv4: prueba LAN/WAN omitida.");
          continue;
        }
        // A gateway reachable via another interface cannot diagnose this Wi-Fi.
        var lanSource=TrySource(gateway.Address);
        if(!SourceMatchesAdapter(lanSource,wifiIps)) {
          sb.AppendLine("Pruebas LAN/WAN omitidas: la ruta IPv4 al gateway no se puede atribuir a este Wi-Fi.");
          continue;
        }
        var lan=new List<long?>();
        var wan=new List<long?>();
        bool routeDrift=false;
        bool icmpSilent=false;
        bool lanSuppressed=false;
        bool wanSuppressed=false;
        for(int i=0;i<16;i++) {
          // V42: check BEFORE every pair, not only once per four pairs.
          if(!LiveSampleStable(adapter.Id,gateway.Address,wifiIps,lanSource,selectedSource,tunnelActive)) {
            routeDrift=true;
            break;
          }
          if(canWan && !lanSuppressed && !wanSuppressed) {
            if(i%2==0) {
              lan.Add(TryPing(gateway.Address.ToString()));
              wan.Add(TryPing("1.1.1.1"));
            } else {
              wan.Add(TryPing("1.1.1.1"));
              lan.Add(TryPing(gateway.Address.ToString()));
            }
          } else {
            // Continue the responding target, never send another ICMP probe to
            // a target suppressed after eight completely silent attempts.
            if(!lanSuppressed)lan.Add(TryPing(gateway.Address.ToString()));
            if(canWan && !wanSuppressed)wan.Add(TryPing("1.1.1.1"));
          }
          // V42: check AFTER each pair too; never interpret mixed-route samples.
          if(!LiveSampleStable(adapter.Id,gateway.Address,wifiIps,lanSource,selectedSource,tunnelActive)) {
            routeDrift=true;
            break;
          }
          // No need to issue up to sixteen more ICMP requests when both
          // targets (or the only eligible LAN target) remain entirely silent.
          if(ShouldStopForIcmpSilence(lan,wan,canWan)) {
            icmpSilent=true;
            break;
          }
          // V42: when only one endpoint is silent, preserve the other endpoint's
          // full 16 real samples and avoid up to eight pointless ICMP requests.
          if(canWan && lan.Count==8 && wan.Count==8) {
            lanSuppressed=SuppressSilentDestination(lan);
            wanSuppressed=SuppressSilentDestination(wan);
          }
          Thread.Sleep(35);
        }
        if(routeDrift) {
          sb.AppendLine("CAMBIO DE ENLACE, GATEWAY, IP O RUTA durante la prueba: se detuvo el muestreo y se descartan conclusiones LAN/WAN.");
          sb.AppendLine("Muestras previas: LAN "+lan.Count+", WAN "+wan.Count+
                        ". Repite cuando Wi-Fi, VPN y rutas estén estables.");
          continue;
        }
        if(icmpSilent) {
          sb.AppendLine("ICMP sin respuestas tras 8 intentos por destino elegible: prueba detenida antes para evitar sondas innecesarias.");
          sb.AppendLine("Inconcluso: puede existir filtrado ICMP, no se demuestra perdida de paquetes ni fallo Wi-Fi. Repite mas tarde si procede.");
          continue;
        }
        if(lanSuppressed || wanSuppressed) {
          sb.AppendLine("V42: destino ICMP silencioso omitido tras 8 intentos; el otro conserva hasta 16 muestras reales.");
          sb.AppendLine(SuppressedInterpretation(lanSuppressed,wanSuppressed));
          if(lanSuppressed && canWan)
            sb.AppendLine(AetherWifiMetricsV34.Summarize(wan,"WAN 1.1.1.1 (solo ICMP)"));
          if(wanSuppressed)
            sb.AppendLine(AetherWifiMetricsV34.Summarize(lan,"Gateway IPv4 (solo ICMP)"));
          sb.AppendLine("No se calculan perdidas ni comparaciones LAN/WAN con el destino suprimido.");
          continue;
        }
        sb.AppendLine(canWan
          ? "Hasta 16 parejas LAN/WAN alternadas; timeout 400 ms; corte o supresion ICMP tras 8 silencios."
          : "16 muestras solo al gateway; se evitan 16 sondas WAN de otra ruta.");
        sb.AppendLine(AetherWifiMetricsV34.Summarize(lan,"Gateway IPv4 (ruta orientativa)"));
        if(canWan)sb.AppendLine(AetherWifiMetricsV34.Summarize(wan,"WAN 1.1.1.1"));
        sb.AppendLine(GuardedInterpretation(lan,wan,canWan));
      }
      sb.AppendLine("Lectura local sin cambios de DNS, red, firewall o router. No mide Mbps, FPS ni ping de juegos.");
      sb.AppendLine("ICMP puede estar limitado o filtrado; una prueba breve no prueba causa ni mejora de velocidad.");
      return sb.ToString();
    }
  }

  public sealed class AetherWifiRouteWindowV42:Form {
    readonly TextBox output=new TextBox();
    readonly Button measure=new Button();
    public AetherWifiRouteWindowV42() {
      Text="AETHER V42 · WI-FI LAN/WAN Y RUTA IPv4";
      ClientSize=new Size(900,690);MinimumSize=new Size(790,600);
      StartPosition=FormStartPosition.CenterParent;
      Font=new Font("Segoe UI",10);
      BackColor=Color.FromArgb(10,24,42);ForeColor=Color.White;
      Controls.Add(new Label {
        Text="AETHER V42 · DIAGNÓSTICO WI-FI Y RUTA IPv4",
        Location=new Point(20,17),Size=new Size(860,46),
        ForeColor=Color.Aquamarine,Font=new Font("Segoe UI",18,FontStyle.Bold)
      });
      Controls.Add(new Label {
        Text="Hasta 16 parejas LAN/WAN; tras 8 silencios deja de sondear el destino ICMP sin respuesta. Verifica rutas y enlace. "+
             "Distingue gateway con ICMP filtrado de fallos demostrados.\r\n"+
             "Sin descargas ni ajustes automáticos. Los tiempos ICMP NO equivalen a Mbps o ping del juego.",
        Location=new Point(23,75),Size=new Size(852,80)
      });
      measure.Text="MEDIR WI-FI CON ENLACE Y RUTAS V42";
      measure.Location=new Point(23,165);measure.Size=new Size(850,51);
      measure.BackColor=Color.FromArgb(15,115,116);
      measure.ForeColor=Color.White;
      measure.Click+=(a,b)=>Start();
      Controls.Add(measure);
      output.Location=new Point(23,230);output.Size=new Size(850,374);
      output.Multiline=true;output.ReadOnly=true;output.WordWrap=true;
      output.ScrollBars=ScrollBars.Vertical;
      output.BackColor=Color.FromArgb(17,43,61);
      output.ForeColor=Color.White;output.Font=new Font("Consolas",10);
      output.Text="Pulsa MEDIR para iniciar. La información permanece en el equipo salvo que la guardes.";
      Controls.Add(output);
      var save=new Button {
        Text="GUARDAR INFORME TXT",
        Location=new Point(23,620),Size=new Size(390,43)
      };
      save.Click+=(a,b)=>{
        using(var dialog=new SaveFileDialog {
          Filter="Informe TXT (*.txt)|*.txt",FileName="aether_wifi_v42.txt"
        }) {
          if(dialog.ShowDialog(this)==DialogResult.OK) {
            try { File.WriteAllText(dialog.FileName,output.Text,Encoding.UTF8); }
            catch(Exception ex) { MessageBox.Show(this,ex.Message,"No se pudo guardar"); }
          }
        }
      };
      Controls.Add(save);
    }
    void Start() {
      measure.Enabled=false;
      output.Text="Verificando rutas y midiendo solo destinos atribuibles... Sin cambiar ajustes.";
      ThreadPool.QueueUserWorkItem(_=>{
        string report;
        try { report=AetherWifiRouteV42.Survey(); }
        catch(Exception ex) {
          report="Diagnóstico incompleto: "+ex.GetType().Name+
            ". Comprueba el estado de la conexión.";
        }
        if(IsDisposed||!IsHandleCreated)return;
        try {
          BeginInvoke((Action)(()=>{
            output.Text=report;measure.Enabled=true;
          }));
        } catch {}
      });
    }
  }
}
