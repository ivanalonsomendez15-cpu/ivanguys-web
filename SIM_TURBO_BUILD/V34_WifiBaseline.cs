using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>
  /// V34: measurable, read-only LAN-vs-WAN Wi-Fi quality assessment.
  /// Neither changes router settings nor claims unverified speed gains.
  /// 24 ICMP attempts per destination; short estimates, not proof of congestion.
  /// </summary>
  public static class AetherWifiMetricsV34 {
    public static string Summarize(IEnumerable<long?> samples,string subject) {
      if(samples==null)throw new ArgumentNullException("samples");
      var all=samples.ToList();
      if(all.Count==0)return subject+": sin muestras.";
      var hits=all.Where(v=>v.HasValue&&v.Value>=0).Select(v=>v.Value).OrderBy(v=>v).ToList();
      int fails=all.Count-hits.Count;
      int streak=0,maxStreak=0;
      foreach(var x in all){if(x.HasValue&&x.Value>=0)streak=0;else {streak++;maxStreak=Math.Max(maxStreak,streak);}}
      if(hits.Count==0)return subject+": 0/"+all.Count+" respuestas; "+maxStreak+" fallos consecutivos. ICMP puede estar bloqueado.";
      long median=hits[(hits.Count-1)/2];
      long p95=hits[(int)Math.Ceiling(.95*hits.Count)-1];
      long max=hits[hits.Count-1];
      // Jitter proxy: average absolute change between consecutive successful samples.
      var diffs=new List<long>();
      for(int i=1;i<all.Count;i++)if(all[i].HasValue&&all[i-1].HasValue &&
        all[i].Value>=0&&all[i-1].Value>=0)diffs.Add(Math.Abs(all[i].Value-all[i-1].Value));
      var jitter=diffs.Count>0?diffs.Average():0.0;
      return subject+": "+hits.Count+"/"+all.Count+" respuestas, pérdida/ICMP bloqueado "+fails+
        ", mediana "+median+" ms, p95 "+p95+" ms, peor "+max+" ms, jitter aproximado "+
        jitter.ToString("0.0")+" ms; racha máxima de fallos "+maxStreak+".";
    }
    public static string LocateProblem(IEnumerable<long?> lan, IEnumerable<long?> wan) {
      var l=lan.ToList();var w=wan.ToList();
      if(l.Count==0||w.Count==0)return "Sin medidas suficientes.";
      int lOk=l.Count(x=>x.HasValue&&x.Value>=0),wOk=w.Count(x=>x.HasValue&&x.Value>=0);
      if(lOk==0)return "La puerta de enlace no responde ICMP: puede existir bloqueo o fallo LAN. Comprueba señal Wi-Fi, router y adaptador.";
      if(wOk==0)return "La puerta de enlace respondió pero Internet no responde ICMP: revisa conectividad exterior, DNS o bloqueo ICMP.";
      long lp95=l.Where(x=>x.HasValue&&x.Value>=0).Select(x=>x.Value).OrderBy(x=>x).ElementAt((int)Math.Ceiling(.95*lOk)-1);
      if(lp95>=60 || lOk<l.Count*0.9)
        return "Posible problema local Wi-Fi/router: p95 alto o pérdidas hacia la puerta de enlace. Acerca el PC al router y compara 5 GHz/Ethernet.";
      long wp95=w.Where(x=>x.HasValue&&x.Value>=0).Select(x=>x.Value).OrderBy(x=>x).ElementAt((int)Math.Ceiling(.95*wOk)-1);
      if(wp95>=100 || wOk<w.Count*0.9)
        return "La LAN parece responder mejor que la ruta exterior. Compara pruebas a distintas horas y revisa saturación del acceso.";
      return "Muestras breves sin alarmas claras. Contrasta descargas reales y estabilidad durante juegos; ICMP no equivale al ping del juego.";
    }
    public static string Survey() {
      var wifi=NetworkInterface.GetAllNetworkInterfaces()
        .Where(n=>n.NetworkInterfaceType==NetworkInterfaceType.Wireless80211 &&
              n.OperationalStatus==OperationalStatus.Up).ToList();
      if(wifi.Count==0)return "No se detecta adaptador Wi-Fi conectado en Windows.";
      var sb=new StringBuilder();
      foreach(var n in wifi){
        sb.AppendLine("Adaptador: "+n.Name+"; velocidad de enlace anunciada: "+(n.Speed>0?(n.Speed/1e6).ToString("0")+" Mb/s":"desconocida")+
          " (no equivale a la velocidad de Internet)");
        var g=n.GetIPProperties().GatewayAddresses
           .FirstOrDefault(x=>x.Address.AddressFamily==System.Net.Sockets.AddressFamily.InterNetwork);
        string gateway=g==null?null:g.Address.ToString();
        if(gateway==null){sb.AppendLine("Sin puerta de enlace IPv4: no puede medirse la red doméstica.");continue;}
        sb.AppendLine("Ejecutando muestras limitadas hacia puerta de enlace e Internet (sin descargas).");
        var local=Probe(gateway,24);
        var outside=Probe("1.1.1.1",24);
        sb.AppendLine(Summarize(local,"Puerta de enlace"));
        sb.AppendLine(Summarize(outside,"Internet (1.1.1.1)"));
        sb.AppendLine(LocateProblem(local,outside));
      }
      sb.AppendLine("V34: comparación NUEVA LAN vs WAN con p95, jitter y rachas; solo lectura. No se han tocado parámetros del router.");
      return sb.ToString();
    }
    static IList<long?> Probe(string ip,int count) {
      var v=new List<long?>();
      for(int i=0;i<count;i++){
        try{
          using(var ping=new Ping()){
            var result=ping.Send(ip,500,new byte[]{7,3,2,1});
            v.Add(result.Status==IPStatus.Success?(long?)result.RoundtripTime:null);
          }
        }catch{v.Add(null);}
        if(i%4==3)Thread.Sleep(60);
      }
      return v;
    }
  }

  public sealed class AetherWifiBaselineWindowV34:Form {
    readonly TextBox data=new TextBox();
    readonly Button measure=new Button();
    public AetherWifiBaselineWindowV34(){
      Text="AETHER V34 · WI-FI: LATENCIA LOCAL VS INTERNET";
      Size=new Size(900,720);MinimumSize=new Size(780,600);
      Font=new Font("Segoe UI",10);StartPosition=FormStartPosition.CenterParent;
      BackColor=Color.FromArgb(10,24,42);ForeColor=Color.White;
      Controls.Add(new Label{Text="AETHER V34 · DIAGNÓSTICO WI-FI MEJORADO",
        Location=new Point(22,15),Size=new Size(830,48),ForeColor=Color.Aquamarine,
        Font=new Font("Segoe UI",18,FontStyle.Bold)});
      Controls.Add(new Label{Text="Mide por separado 24 muestras hacia el router y 24 a Internet. Compara p95, rachas de pérdidas y jitter.\r\nNO aumenta por arte de magia los Mb/s ni cambia ajustes de red. Un fallo ICMP puede significar filtrado.",
        Location=new Point(24,69),Size=new Size(823,74)});
      measure.Text="MEDIR ESTABILIDAD WIFI V34";measure.Location=new Point(23,154);
      measure.Size=new Size(833,53);measure.BackColor=Color.FromArgb(15,115,116);
      measure.ForeColor=Color.White;measure.Click+=(a,b)=>Start();
      Controls.Add(measure);
      data.Location=new Point(23,226);data.Size=new Size(833,390);data.Multiline=true;data.ReadOnly=true;
      data.WordWrap=true;data.ScrollBars=ScrollBars.Vertical;data.BackColor=Color.FromArgb(17,43,61);
      data.ForeColor=Color.White;data.Font=new Font("Consolas",10);
      data.Text="Pulsa MEDIR para obtener un informe local real. El análisis no transmite datos a servidores AETHER.";
      Controls.Add(data);
      var save=new Button{Text="GUARDAR INFORME TXT",Location=new Point(23,627),Size=new Size(350,40)};
      save.Click+=(a,b)=>{
        using(var dialog=new SaveFileDialog{Filter="Informe TXT (*.txt)|*.txt",FileName="aether_wifi_v34.txt"}){
          if(dialog.ShowDialog(this)==DialogResult.OK)try{File.WriteAllText(dialog.FileName,data.Text,Encoding.UTF8);}
          catch(Exception e){MessageBox.Show(this,e.Message,"Error al guardar");}
        }
      };
      Controls.Add(save);
    }
    void Start(){
      measure.Enabled=false;data.Text="Midiendo puerta de enlace y salida a Internet... Si el router filtra ping, aparecerá indicado.";
      ThreadPool.QueueUserWorkItem(_=>{
        string report;
        try{report=AetherWifiMetricsV34.Survey();}
        catch(Exception e){report="Diagnóstico incompleto: "+e.GetType().Name+". Comprueba conectividad y permisos."; }
        if(IsDisposed||!IsHandleCreated)return;
        try{BeginInvoke((Action)(()=>{data.Text=report;measure.Enabled=true;}));}catch{}
      });
    }
  }
}
