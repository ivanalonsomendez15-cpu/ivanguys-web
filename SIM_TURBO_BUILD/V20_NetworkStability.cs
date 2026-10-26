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
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>Bounded, opt-in ICMP stability test; never changes network settings.</summary>
  public sealed class AetherNetworkStabilityV20 : Form {
    public sealed class Statistics {
      public int Sent, Received;
      public double LossPercent, MedianMs, P95Ms, JitterMs;
    }
    public static Statistics Analyze(IEnumerable<int> samples) {
      if(samples==null)throw new ArgumentNullException("samples");
      int[] all=samples.ToArray();
      if(all.Length==0)throw new ArgumentException("At least one sample is required");
      if(all.Any(x=>x < -1))throw new ArgumentException("Use -1 for failed ICMP samples");
      int[] valid=all.Where(x=>x>=0).OrderBy(x=>x).ToArray();
      var s=new Statistics{Sent=all.Length,Received=valid.Length,
        LossPercent=100.0*(all.Length-valid.Length)/all.Length,
        MedianMs=double.NaN,P95Ms=double.NaN,JitterMs=double.NaN};
      if(valid.Length==0)return s;
      int middle=valid.Length/2;
      s.MedianMs=valid.Length%2==0?(valid[middle-1]+valid[middle])/2.0:valid[middle];
      s.P95Ms=valid[Math.Max(0,(int)Math.Ceiling(valid.Length*0.95)-1)];
      var ordered=all.Where(x=>x>=0).ToArray();
      if(ordered.Length>=2) {
        double sum=0;
        for(int i=1;i<ordered.Length;i++)sum+=Math.Abs(ordered[i]-ordered[i-1]);
        s.JitterMs=sum/(ordered.Length-1);
      }
      return s;
    }
    public static string Advice(Statistics s) {
      if(s==null||s.Sent<=0)return "Sin datos válidos.";
      if(s.Received==0)return "Sin respuestas ICMP: podría ser un bloqueo de ping, no necesariamente un corte de Internet.";
      if(s.LossPercent>0)return "Hubo respuestas ICMP perdidas. Repite por cable y Wi-Fi; el firewall puede filtrar ICMP.";
      if(s.JitterMs>20)return "Variación de latencia apreciable: compara Wi-Fi 2,4/5 GHz y Ethernet.";
      return "Sin pérdidas ICMP en esta muestra corta; no garantiza estabilidad en todos los juegos.";
    }
    readonly Button router, external, cancel, save;
    readonly RichTextBox output;
    CancellationTokenSource current;
    string csv;
    public AetherNetworkStabilityV20() {
      Text="AETHER V20 · ESTABILIDAD DE RED (12 PINGS, SOLO LECTURA)";
      ClientSize=new Size(960,690);MinimumSize=new Size(790,560);
      BackColor=Color.FromArgb(8,20,35);ForeColor=Color.White;
      Font=new Font("Segoe UI",10);
      Controls.Add(new Label{Text="AETHER · LATENCIA, PÉRDIDAS Y JITTER",
        Location=new Point(20,16),Size=new Size(920,48),
        Font=new Font("Segoe UI",20,FontStyle.Bold),ForeColor=Color.Turquoise});
      Controls.Add(new Label{Text="Prueba voluntaria: 12 pings ICMP con espera máxima de 900 ms. "+
        "No mide Mbps ni FPS, no cambia DNS ni prioridades. Un firewall puede bloquear ICMP.",
        Location=new Point(22,73),Size=new Size(920,60)});
      router=Make("PROBAR ROUTER",22,145,218);
      external=Make("PROBAR INTERNET",252,145,218);
      cancel=Make("CANCELAR",482,145,200);
      save=Make("EXPORTAR CSV",694,145,240);
      router.Click+=(s,e)=>Start(true);
      external.Click+=(s,e)=>Start(false);
      cancel.Click+=(s,e)=>{if(current!=null)current.Cancel();};
      save.Click+=(s,e)=>Save();
      cancel.Enabled=false;save.Enabled=false;
      output=new RichTextBox{Location=new Point(22,218),Size=new Size(912,443),
        Anchor=AnchorStyles.Top|AnchorStyles.Bottom|AnchorStyles.Left|AnchorStyles.Right,
        ReadOnly=true,BackColor=Color.FromArgb(19,38,55),ForeColor=Color.White,
        Font=new Font("Consolas",10)};
      Controls.Add(output);
      output.Text="Selecciona el router o Internet. Los pings son paquetes de diagnóstico, "+
        "no una prueba de velocidad de descarga.\r\nLa latencia de AETHER no equivale a la de un servidor de juegos.";
      FormClosing+=(s,e)=>{if(current!=null)current.Cancel();};
    }
    Button Make(string name,int x,int y,int w){
      var b=new Button{Text=name,Location=new Point(x,y),Size=new Size(w,48),
        FlatStyle=FlatStyle.Flat,BackColor=Color.FromArgb(20,99,111),ForeColor=Color.White};
      Controls.Add(b);return b;
    }
    static string Gateway(){
      foreach(var nic in NetworkInterface.GetAllNetworkInterfaces()){
        if(nic.OperationalStatus!=OperationalStatus.Up ||
           nic.NetworkInterfaceType==NetworkInterfaceType.Loopback)continue;
        try{
          foreach(var gateway in nic.GetIPProperties().GatewayAddresses){
            if(gateway.Address.AddressFamily==AddressFamily.InterNetwork &&
               !IPAddress.Any.Equals(gateway.Address))
              return gateway.Address.ToString();
          }
        }catch(NetworkInformationException){}
      }
      return null;
    }
    static int[] Probe(string host,CancellationToken token){
      var results=new List<int>();
      using(var ping=new Ping()){
        for(int i=0;i<12;i++){
          token.ThrowIfCancellationRequested();
          int value=-1;
          try{
            PingReply reply=ping.Send(host,900);
            if(reply!=null&&reply.Status==IPStatus.Success)
              value=(int)Math.Min(int.MaxValue,reply.RoundtripTime);
          }catch(PingException){}catch(System.Net.Sockets.SocketException){}
          results.Add(value);
          if(i<11){token.ThrowIfCancellationRequested();Thread.Sleep(130);}
        }
      }
      return results.ToArray();
    }
    async void Start(bool local){
      if(current!=null)return;
      string host=local?Gateway():"1.1.1.1";
      if(string.IsNullOrEmpty(host)){
        output.Text="No se detectó puerta de enlace IPv4 activa. Comprueba la conexión.";return;
      }
      var cts=new CancellationTokenSource();current=cts;
      router.Enabled=false;external.Enabled=false;cancel.Enabled=true;save.Enabled=false;
      output.Text="Probando "+host+" ...\r\n";
      try{
        int[] values=await Task.Run(()=>Probe(host,cts.Token));
        if(IsDisposed)return;
        Statistics s=Analyze(values);
        var sb=new StringBuilder();
        sb.AppendLine("AETHER V20 · ESTABILIDAD ICMP");
        sb.AppendLine("Fecha local: "+DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
        sb.AppendLine("Destino: "+host+(local?" (router)":" (externo)"));
        sb.AppendLine("Paquetes: "+s.Received+"/"+s.Sent);
        sb.AppendLine("Pérdidas ICMP: "+s.LossPercent.ToString("0.0")+" %");
        sb.AppendLine("Mediana: "+Format(s.MedianMs)+" ms · P95: "+Format(s.P95Ms)+" ms");
        sb.AppendLine("Jitter aproximado (variación absoluta sucesiva): "+Format(s.JitterMs)+" ms");
        sb.AppendLine("Muestras (-1 = sin respuesta): "+string.Join(", ",values.Select(x=>x.ToString()).ToArray()));
        sb.AppendLine(Advice(s));
        sb.AppendLine("ICMP bloqueado o priorizado puede distorsionar resultados. Repite varias veces.");
        output.Text=sb.ToString();
        csv="destino,indice,rtt_ms,estado\r\n"+
          string.Join("\r\n",values.Select((v,i)=>host+","+i+","+(v>=0?v.ToString():"")+","+
          (v>=0?"respuesta":"sin_respuesta")).ToArray())+"\r\n";
        save.Enabled=true;
      }catch(OperationCanceledException){if(!IsDisposed)output.AppendText("\r\nCancelado por el usuario.");}
      catch(Exception ex){if(!IsDisposed)output.AppendText("\r\nError: "+ex.GetType().Name);}
      finally{
        if(!IsDisposed){router.Enabled=true;external.Enabled=true;cancel.Enabled=false;}
        current=null;cts.Dispose();
      }
    }
    static string Format(double value){return double.IsNaN(value)?"sin datos":value.ToString("0.0");}
    void Save(){
      if(string.IsNullOrEmpty(csv))return;
      using(var d=new SaveFileDialog{Filter="CSV|*.csv",FileName="AETHER_V20_estabilidad.csv"}){
        if(d.ShowDialog(this)!=DialogResult.OK)return;
        try{File.WriteAllText(d.FileName,csv,new UTF8Encoding(true));}
        catch(Exception ex){MessageBox.Show(this,ex.Message,"No se pudo guardar");}
      }
    }
  }
}
