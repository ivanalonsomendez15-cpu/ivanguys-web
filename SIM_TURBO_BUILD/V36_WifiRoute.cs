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
  /// V36: interleaved gateway/WAN ICMP samples to reduce time-of-test bias.
  /// Read-only diagnostics. An ICMP timeout does not prove packet loss.
  /// </summary>
  public static class AetherWifiRouteV36 {
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
    static IPAddress TryWanSource() {
      try {
        using(var sock=new Socket(AddressFamily.InterNetwork,SocketType.Dgram,ProtocolType.Udp)) {
          sock.Connect(new IPEndPoint(IPAddress.Parse("1.1.1.1"),443));
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
      foreach(var adapter in adapters) {
        sb.AppendLine("Adaptador: "+adapter.Name);
        sb.AppendLine("Velocidad negociada: "+(adapter.Speed>0?(adapter.Speed/1000000.0).ToString("0")+" Mb/s":"desconocida")+
          " (NO es velocidad real de Internet).");
        var selectedSource=TryWanSource();
        var wifiIps=adapter.GetIPProperties().UnicastAddresses
          .Where(x=>x.Address.AddressFamily==AddressFamily.InterNetwork).Select(x=>x.Address);
        bool tunnelActive=NetworkInterface.GetAllNetworkInterfaces().Any(x=>
          x.OperationalStatus==OperationalStatus.Up &&
          (x.NetworkInterfaceType==NetworkInterfaceType.Tunnel ||
           x.NetworkInterfaceType==NetworkInterfaceType.Ppp));
        sb.AppendLine(RouteAssessment(selectedSource,wifiIps,tunnelActive));
        var gateway=adapter.GetIPProperties().GatewayAddresses
          .FirstOrDefault(x=>x.Address.AddressFamily==AddressFamily.InterNetwork);
        if(gateway==null) {
          sb.AppendLine("Sin gateway IPv4: prueba LAN/WAN omitida.");
          continue;
        }
        var lan=new List<long?>();
        var wan=new List<long?>();
        // Alternating order avoids testing all LAN samples in one time period,
        // then all WAN samples in a different period (V34 limitation).
        for(int i=0;i<16;i++) {
          if(i%2==0) {
            lan.Add(TryPing(gateway.Address.ToString()));
            wan.Add(TryPing("1.1.1.1"));
          } else {
            wan.Add(TryPing("1.1.1.1"));
            lan.Add(TryPing(gateway.Address.ToString()));
          }
          Thread.Sleep(35);
        }
        sb.AppendLine("16 parejas LAN/WAN alternadas; timeout 400 ms por intento. Ruta IPv4 orientativa, no vinculacion de ICMP.");
        sb.AppendLine(AetherWifiMetricsV34.Summarize(lan,"Gateway IPv4"));
        sb.AppendLine(AetherWifiMetricsV34.Summarize(wan,"WAN 1.1.1.1"));
        sb.AppendLine(Explain(lan,wan));
      }
      sb.AppendLine("Lectura local sin cambios de DNS, red, firewall o router. No mide Mbps, FPS ni ping de juegos.");
      sb.AppendLine("ICMP puede estar limitado o filtrado; una prueba breve no prueba causa ni mejora de velocidad.");
      return sb.ToString();
    }
  }

  public sealed class AetherWifiRouteWindowV36:Form {
    readonly TextBox output=new TextBox();
    readonly Button measure=new Button();
    public AetherWifiRouteWindowV36() {
      Text="AETHER V36 · WI-FI LAN/WAN Y RUTA IPv4";
      ClientSize=new Size(900,690);MinimumSize=new Size(790,600);
      StartPosition=FormStartPosition.CenterParent;
      Font=new Font("Segoe UI",10);
      BackColor=Color.FromArgb(10,24,42);ForeColor=Color.White;
      Controls.Add(new Label {
        Text="AETHER V36 · DIAGNÓSTICO WI-FI Y RUTA IPv4",
        Location=new Point(20,17),Size=new Size(860,46),
        ForeColor=Color.Aquamarine,Font=new Font("Segoe UI",18,FontStyle.Bold)
      });
      Controls.Add(new Label {
        Text="16 parejas alternadas hacia router e Internet y aviso de rutas Ethernet/VPN. "+
             "Distingue gateway con ICMP filtrado de fallos demostrados.\r\n"+
             "Sin descargas ni ajustes automáticos. Los tiempos ICMP NO equivalen a Mbps o ping del juego.",
        Location=new Point(23,75),Size=new Size(852,80)
      });
      measure.Text="MEDIR WI-FI Y COMPROBAR RUTA V36";
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
          Filter="Informe TXT (*.txt)|*.txt",FileName="aether_wifi_v35.txt"
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
      output.Text="Midiendo 16 parejas de muestras LAN/WAN... No se modifican los ajustes.";
      ThreadPool.QueueUserWorkItem(_=>{
        string report;
        try { report=AetherWifiRouteV36.Survey(); }
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
