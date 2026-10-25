using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>V13: bounded, user-initiated diagnostics. Does not change OS/network settings.</summary>
  public sealed class AetherNetworkLabV13 : Form {
    readonly TextBox log;
    readonly Button gatewayButton, externalButton, downloadButton, cancelButton, saveButton;
    CancellationTokenSource current;
    public AetherNetworkLabV13() {
      Text="AETHER V13 · LABORATORIO DE RED MEDIBLE";
      ClientSize=new Size(930,660); MinimumSize=new Size(820,600);
      BackColor=Color.FromArgb(9,21,34); ForeColor=Color.White;
      Font=new Font("Segoe UI",10);
      var title=new Label {Text="AETHER · MEDIR ANTES DE OPTIMIZAR",
        Location=new Point(22,12),Size=new Size(880,42),
        Font=new Font("Segoe UI",18,FontStyle.Bold),ForeColor=Color.Turquoise};
      Controls.Add(title);
      var intro=new Label {Text="Objetivo 120–150 Mb/s desde 60: solo posible si la tarifa, el router y el enlace lo permiten. "+
        "No se alteran DNS, TCP, drivers ni registros. El test HTTP usa hasta 15 MiB en total.",
        Location=new Point(23,62),Size=new Size(870,70)};
      Controls.Add(intro);
      gatewayButton=Button("PING AL ROUTER",22,145,205,()=>Run(PingGateway));
      externalButton=Button("PING EXTERNO / JITTER",238,145,225,()=>Run(PingExternal));
      downloadButton=Button("DESCARGA LIMITADA (15 MiB)",474,145,255,()=>Run(DownloadTest));
      cancelButton=Button("CANCELAR",740,145,160,Cancel);
      cancelButton.Enabled=false;
      log=new TextBox {Location=new Point(23,224),Size=new Size(877,358),
        Anchor=AnchorStyles.Top|AnchorStyles.Left|AnchorStyles.Right|AnchorStyles.Bottom,
        Multiline=true,ReadOnly=true,ScrollBars=ScrollBars.Vertical,
        Font=new Font("Consolas",10),BackColor=Color.FromArgb(20,38,55),ForeColor=Color.White};
      Controls.Add(log);
      saveButton=Button("GUARDAR RESULTADO TXT",23,595,300,Save);
      saveButton.Anchor=AnchorStyles.Bottom|AnchorStyles.Left;
      Write("V13: pruebas a demanda. Mb/s = megabits por segundo; MB/s = megabytes por segundo.");
      Write("No confundas velocidad del enlace Wi-Fi, descarga HTTP y velocidad contratada.");
      FormClosing+=(s,e)=>Cancel();
    }
    Button Button(string name,int x,int y,int width,Action click) {
      var b=new Button {Text=name,Location=new Point(x,y),Size=new Size(width,53),
        BackColor=Color.FromArgb(18,100,111),ForeColor=Color.White,FlatStyle=FlatStyle.Flat};
      b.Click+=(s,e)=>click(); Controls.Add(b); return b;
    }
    void Write(string s) {
      if(IsDisposed||!IsHandleCreated)return;
      if(InvokeRequired){try{BeginInvoke((Action)(()=>Write(s)));}catch{} return;}
      log.AppendText("["+DateTime.Now.ToString("HH:mm:ss")+"] "+s+"\r\n");
    }
    void EnableButtons(bool active) {
      gatewayButton.Enabled=active;externalButton.Enabled=active;downloadButton.Enabled=active;
      cancelButton.Enabled=!active;
    }
    void Cancel() {if(current!=null)current.Cancel();}
    void Run(Func<CancellationToken,string> test) {
      if(current!=null)return;
      current=new CancellationTokenSource();
      var cts=current;
      EnableButtons(false);
      Task.Run(()=>test(cts.Token)).ContinueWith(t=>{
        if(IsDisposed)return;
        try{BeginInvoke((Action)(()=>{
          if(t.IsFaulted)Write("Error de prueba: "+t.Exception.GetBaseException().Message);
          else if(t.IsCanceled)Write("Prueba cancelada.");
          else Write(t.Result);
          if(current==cts)current=null;
          cts.Dispose();
          EnableButtons(true);
        }));}catch{}
      });
    }
    static string PingHost(string address,CancellationToken ct) {
      var measurements=new List<long>();int lost=0;
      using(var p=new Ping()){
        for(int i=0;i<8;i++){
          ct.ThrowIfCancellationRequested();
          try{
            var result=p.Send(address,1100);
            if(result.Status==IPStatus.Success)measurements.Add(result.RoundtripTime);
            else lost++;
          }catch(PingException){lost++;}
          if(i<7&&ct.WaitHandle.WaitOne(120))ct.ThrowIfCancellationRequested();
        }
      }
      if(measurements.Count==0)return address+": sin respuesta ICMP (podría estar bloqueado), "+lost+"/8.";
      double avg=measurements.Average();
      double jitter=measurements.Count<2?0:measurements.Skip(1)
        .Select((n,i)=>Math.Abs(n-measurements[i])).Average();
      return address+": media "+avg.ToString("0.0")+" ms; mínimo "+measurements.Min()+
        " ms; máximo "+measurements.Max()+" ms; variación media "+jitter.ToString("0.0")+
        " ms; fallos ICMP "+lost+"/8. Jitter aproximado, no mide ping dentro del juego.";
    }
    static string PingGateway(CancellationToken ct) {
      var lines=new List<string>();
      foreach(var ni in NetworkInterface.GetAllNetworkInterfaces()) {
        if(ni.OperationalStatus!=OperationalStatus.Up)continue;
        if(ni.NetworkInterfaceType!=NetworkInterfaceType.Wireless80211 &&
           ni.NetworkInterfaceType!=NetworkInterfaceType.Ethernet &&
           ni.NetworkInterfaceType!=NetworkInterfaceType.GigabitEthernet)continue;
        ct.ThrowIfCancellationRequested();
        lines.Add("Adaptador: "+ni.Name+" · enlace anunciado "+
          (ni.Speed>0?(ni.Speed/1000000.0).ToString("0")+" Mb/s":"desconocido"));
        foreach(var gw in ni.GetIPProperties().GatewayAddresses) {
          if(gw.Address.AddressFamily!=AddressFamily.InterNetwork)continue;
          lines.Add(PingHost(gw.Address.ToString(),ct));
        }
      }
      if(lines.Count==0)return "No hay adaptadores Wi-Fi/Ethernet activos reconocidos.";
      lines.Add("Si el ping al router es inestable, comprueba distancia, interferencias y banda 5 GHz.");
      return string.Join("\r\n",lines);
    }
    static string PingExternal(CancellationToken ct) {
      return PingHost("1.1.1.1",ct)+"\r\n"+
        PingHost("8.8.8.8",ct)+"\r\nICMP puede estar filtrado; compara con el router y con el juego real.";
    }
    static string DownloadTest(CancellationToken ct) {
      var speeds=new List<double>();
      const int bytesPerSample=5*1024*1024;
      for(int i=0;i<3;i++){
        ct.ThrowIfCancellationRequested();
        var request=(HttpWebRequest)WebRequest.Create("https://speed.cloudflare.com/__down?bytes="+bytesPerSample);
        request.Timeout=9000;request.ReadWriteTimeout=9000;
        request.AutomaticDecompression=DecompressionMethods.None;
        request.CachePolicy=new System.Net.Cache.RequestCachePolicy(System.Net.Cache.RequestCacheLevel.NoCacheNoStore);
        request.UserAgent="AETHER-V13-ReadOnlyNetworkLab";
        using(ct.Register(()=>request.Abort())) {
          var watch=Stopwatch.StartNew();
          long total=0;
          using(var response=(HttpWebResponse)request.GetResponse())
          using(var stream=response.GetResponseStream()) {
            if(response.StatusCode!=HttpStatusCode.OK)throw new IOException("HTTP "+(int)response.StatusCode);
            var buffer=new byte[32768];
            int n;
            while(total<bytesPerSample && (n=stream.Read(buffer,0,(int)Math.Min(buffer.Length,bytesPerSample-total)))>0) {
              ct.ThrowIfCancellationRequested();total+=n;
            }
          }
          watch.Stop();
          if(total<bytesPerSample/2)throw new IOException("Descarga incompleta: "+total+" bytes");
          double mbps=total*8.0/(watch.Elapsed.TotalSeconds*1000000.0);
          speeds.Add(mbps);
        }
      }
      speeds.Sort();
      double median=speeds[1];
      return "HTTP de prueba: 3 × 5 MiB; mediana "+median.ToString("0.0")+
        " Mb/s; muestras "+string.Join(", ",speeds.Select(s=>s.ToString("0.0")))+
        " Mb/s.\r\n"+(median>=120?"Objetivo de 120 Mb/s observado en esta descarga.":
          "Por debajo de 120 Mb/s en esta descarga: contrasta con Ethernet, contrato y router.")+
        "\r\nEl resultado depende también del servidor/CDN y no garantiza velocidad sostenida.";
    }
    void Save() {
      using(var dialog=new SaveFileDialog{Filter="Texto|*.txt",FileName="AETHER_V13_red_"+DateTime.Now.ToString("yyyyMMdd_HHmm")+".txt"}) {
        if(dialog.ShowDialog(this)==DialogResult.OK)
          File.WriteAllText(dialog.FileName,log.Text,Encoding.UTF8);
      }
    }
  }
}
