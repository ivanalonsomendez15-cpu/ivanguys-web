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
  /// V38: route-stability checkpoints guard LAN/WAN attribution during sampling.
  /// Read-only diagnostics. An ICMP timeout does not prove packet loss.
  /// </summary>
  public static class AetherWifiRouteV38 {
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
    // V38: read-only route gating; UDP selection does not guarantee ICMP routing.
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
        for(int i=0;i<16;i++) {
          // Four-sample checkpoints bound wasted probes when routes change.
          if(i>0 && i%4==0 &&
             !RouteSnapshotStable(lanSource,TrySource(gateway.Address),
                                  selectedSource,TrySource(IPAddress.Parse("1.1.1.1")),
                                  wifiIps,tunnelActive,IsTunnelActive())) {
            routeDrift=true;
            break;
          }
          if(canWan) {
            if(i%2==0) {
              lan.Add(TryPing(gateway.Address.ToString()));
              wan.Add(TryPing("1.1.1.1"));
            } else {
              wan.Add(TryPing("1.1.1.1"));
              lan.Add(TryPing(gateway.Address.ToString()));
            }
          } else {
            lan.Add(TryPing(gateway.Address.ToString()));
          }
          Thread.Sleep(35);
        }
        if(!routeDrift &&
           !RouteSnapshotStable(lanSource,TrySource(gateway.Address),
                                selectedSource,TrySource(IPAddress.Parse("1.1.1.1")),
                                wifiIps,tunnelActive,IsTunnelActive()))routeDrift=true;
        if(routeDrift) {
          sb.AppendLine("RUTA CAMBIANTE durante la prueba: se detuvo el muestreo y se descartan conclusiones LAN/WAN.");
          sb.AppendLine("Muestras previas: LAN "+lan.Count+", WAN "+wan.Count+
                        ". Repite cuando Wi-Fi, VPN y rutas estén estables.");
          continue;
        }
        sb.AppendLine(canWan
          ? "16 parejas LAN/WAN alternadas; timeout 400 ms por intento."
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

  public sealed class AetherWifiRouteWindowV38:Form {
    readonly TextBox output=new TextBox();
    readonly Button measure=new Button();
    public AetherWifiRouteWindowV38() {
      Text="AETHER V38 · WI-FI LAN/WAN Y RUTA IPv4";
      ClientSize=new Size(900,690);MinimumSize=new Size(790,600);
      StartPosition=FormStartPosition.CenterParent;
      Font=new Font("Segoe UI",10);
      BackColor=Color.FromArgb(10,24,42);ForeColor=Color.White;
      Controls.Add(new Label {
        Text="AETHER V38 · DIAGNÓSTICO WI-FI Y RUTA IPv4",
        Location=new Point(20,17),Size=new Size(860,46),
        ForeColor=Color.Aquamarine,Font=new Font("Segoe UI",18,FontStyle.Bold)
      });
      Controls.Add(new Label {
        Text="Hasta 16 parejas LAN/WAN; verifica la ruta cada 4 muestras y al finalizar. "+
             "Distingue gateway con ICMP filtrado de fallos demostrados.\r\n"+
             "Sin descargas ni ajustes automáticos. Los tiempos ICMP NO equivalen a Mbps o ping del juego.",
        Location=new Point(23,75),Size=new Size(852,80)
      });
      measure.Text="MEDIR WI-FI CON RUTAS ESTABLES V38";
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
          Filter="Informe TXT (*.txt)|*.txt",FileName="aether_wifi_v38.txt"
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
        try { report=AetherWifiRouteV38.Survey(); }
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
