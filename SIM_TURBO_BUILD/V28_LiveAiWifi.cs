using System;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Collections.Generic;
using System.Text;

namespace SimTurboPC {
  // UI launcher for the REAL FSRCNN neural pipeline on captured screen frames.
  // It NEVER attempts ChangeDisplaySettings. The preview/overlay is user-controlled.
  public sealed class AetherLiveAIWindowV28:Form {
    readonly Label status;
    readonly string folder;
    readonly string app;
    public AetherLiveAIWindowV28(){
      Text="AETHER V28 · IA EN DIRECTO, SIN CAMBIAR LA RESOLUCIÓN";
      ClientSize=new Size(900,750);MinimumSize=new Size(850,720);
      Font=new Font("Segoe UI",10);BackColor=Color.FromArgb(9,25,40);ForeColor=Color.White;
      StartPosition=FormStartPosition.CenterParent;
      folder=Path.Combine(AppDomain.CurrentDomain.BaseDirectory,"IA_SUPERRESOLUCION");
      app=Path.Combine(folder,"AETHER_IA_DIRECTO.exe");
      Controls.Add(new Label{Text="AETHER IA · FOTOGRAMAS EN DIRECTO V28",Location=new Point(22,19),
        Size=new Size(850,40),ForeColor=Color.Aquamarine,Font=new Font("Segoe UI",18,FontStyle.Bold)});
      Controls.Add(new Label{Text=
        "La IA FSRCNN procesa la imagen de Windows continuamente. NO cambia el modo de pantalla.\r\n"+
        "VISTA PREVIA: ventana normal que muestra la imagen procesada. Esta es la opción más fiable.\r\n"+
        "OVERLAY: filtro a pantalla completa experimental y transparente a clics (solo si Windows excluye la ventana de captura).\r\n"+
        "FOCO: TURBO 320x180, AUTO adapta el área y CURSOR sigue el ratón en escritorio.\r\n"+
        "4K virtual no significa 4K físico. El filtro completo puede reducir los FPS.",
        Location=new Point(23,76),Size=new Size(852,112),ForeColor=Color.Gainsboro});
      Add("IA RÁPIDA · VISTA PREVIA",20,208,416,54,()=>Run("RAPIDO",false));
      Add("IA 4K VIRTUAL · VISTA PREVIA",456,208,421,54,()=>Run("IA_4K",false));
      Add("FOCO 640x360 · IA LOCAL",20,278,416,54,()=>Run("FOCO",false));
      Add("FOCO RÁPIDO 480x270 · IA LOCAL",456,278,421,54,()=>Run("FOCO_RAPIDO",false));
      Add("FOCO TURBO 320x180 · MENOS CARGA",20,347,416,54,()=>Run("FOCO_TURBO",false));
      Add("FOCO AUTO · ÁREA ADAPTATIVA",456,347,421,54,()=>Run("FOCO_AUTO",false));
      Add("FOCO CURSOR · IA SIGUE EL RATÓN (VISTA PREVIA)",20,417,858,54,()=>Run("FOCO_CURSOR",false));
      Add("FILTRO IA EN TODA LA PANTALLA · EXPERIMENTAL",20,486,858,54,()=>Run("RAPIDO",true));
      status=new Label{Location=new Point(22,560),Size=new Size(855,153),Padding=new Padding(12),
        BackColor=Color.FromArgb(22,47,63),ForeColor=Color.Aquamarine,
        Text="La IA de escritorio funciona sin DSR ni resoluciones 3840x2160 en Windows.\r\n"+
             "FOCO CURSOR solo mejora una región de vista previa: no es 4K nativo.\r\n"+
             "El resultado dependerá de la captura disponible y de la capacidad del ordenador."};
      Controls.Add(status);
    }
    void Add(string title,int x,int y,int w,int h,Action action){
      var b=new Button{Text=title,Location=new Point(x,y),Size=new Size(w,h),
        BackColor=Color.FromArgb(17,109,119),ForeColor=Color.White,
        FlatStyle=FlatStyle.Flat,Font=new Font("Segoe UI",10,FontStyle.Bold)};
      b.Click+=(s,e)=>{try{action();}catch(Exception ex){status.Text="Error: "+ex.Message;}};
      Controls.Add(b);
    }
    void Run(string mode,bool overlay){
      if(!File.Exists(app)){
        status.Text="Falta IA_SUPERRESOLUCION\\AETHER_IA_DIRECTO.exe. "+
          "Instala el ZIP COMPLETO de V28; no basta el viejo V23.";
        return;
      }
      if(overlay && mode.StartsWith("FOCO",StringComparison.Ordinal)){
        status.Text="FOCO solo está disponible en ventana de vista previa; no cubre toda la pantalla.";
        return;
      }
      if(overlay && MessageBox.Show(this,
          "El filtro en pantalla completa es EXPERIMENTAL y puede no funcionar con CS2, Valorant, "+
          "pantalla completa exclusiva o aplicaciones protegidas.\r\n"+
          "Se aplica sobre la imagen visible SIN modificar su resolución. "+
          "La ventana de control conserva un botón DETENER. ¿Probarlo?",
          "AETHER IA en directo",MessageBoxButtons.YesNo,MessageBoxIcon.Question)!=DialogResult.Yes)return;
      var args="--mode "+mode+(overlay?" --overlay":"");
      Process.Start(new ProcessStartInfo(app,args){WorkingDirectory=folder,UseShellExecute=true});
      status.Text="IA REAL INICIADA: "+mode+(overlay?" · filtro experimental":" · ventana previa")+
        "\r\nPuede procesar menos de 60 FPS. Abre la ventana de AETHER IA para DETENERLO.";
    }
  }

  /// <summary>
  /// V28 Wi-Fi diagnostics provide measurable gateway-vs-internet latency and jitter.
  /// Read-only: NEVER reset network stacks, disable security, rewrite DNS or promise Mb/s.
  /// </summary>
  public sealed class AetherWifiQualityV28:Form {
    readonly TextBox output;
    readonly Button run;
    public AetherWifiQualityV28(){
      Text="AETHER V28 · CONTROL DE CALIDAD WIFI";
      ClientSize=new Size(850,670);MinimumSize=new Size(790,620);
      BackColor=Color.FromArgb(8,25,39);ForeColor=Color.White;
      Font=new Font("Segoe UI",10);StartPosition=FormStartPosition.CenterParent;
      Controls.Add(new Label{Text="Wi-Fi · MEDICIONES COMPARABLES V28",
        Location=new Point(22,17),Size=new Size(790,43),
        Font=new Font("Segoe UI",19,FontStyle.Bold),ForeColor=Color.Aquamarine});
      Controls.Add(new Label{Text=
        "Mide latencia, pérdidas y variación del ping en el router y en Internet por separado.\r\n"+
        "Incluye señal, canal, banda explícita y enlace PHY RX/TX si Windows los anuncia, sin SSID/BSSID.\r\n"+
        "V28: escaneo agregado de BSSID por canal sin mostrar nombres de redes.\r\n"+
        "El enlace PHY no equivale a Mbps de Internet: diagnostica sin aumentar el ancho de banda.\r\n"+
        "Puedes guardar el informe manualmente. No cambia DNS, controladores ni ajustes de Windows.",
        Location=new Point(22,68),Size=new Size(790,108),ForeColor=Color.Gainsboro});
      run=new Button{Text="ANALIZAR WIFI (12 PINGS POR DESTINO)",
        Location=new Point(22,165),Size=new Size(565,51),
        BackColor=Color.FromArgb(18,109,119),ForeColor=Color.White};
      run.Click+=async(s,e)=>await Check();
      Controls.Add(run);
      var save=new Button{Text="GUARDAR INFORME",
        Location=new Point(598,165),Size=new Size(219,51),
        BackColor=Color.FromArgb(18,109,119),ForeColor=Color.White};
      save.Click+=(s,e)=>{
        if(String.IsNullOrWhiteSpace(output.Text))return;
        using(var dlg=new SaveFileDialog{Filter="Informe texto (*.txt)|*.txt",
            FileName="AETHER_WIFI_V28_"+DateTime.Now.ToString("yyyyMMdd_HHmm")+".txt"}){
          if(dlg.ShowDialog(this)==DialogResult.OK)
            try{File.WriteAllText(dlg.FileName,output.Text,Encoding.UTF8);}
            catch(Exception ex){MessageBox.Show(this,"No se pudo guardar: "+ex.Message);}
        }
      };
      Controls.Add(save);
      output=new TextBox{Multiline=true,ReadOnly=true,ScrollBars=ScrollBars.Vertical,
        Location=new Point(22,232),Size=new Size(795,376),
        BackColor=Color.FromArgb(20,43,58),ForeColor=Color.Aquamarine,Font=new Font("Consolas",10)};
      Controls.Add(output);
      Controls.Add(new Label{Text="Nota: ICMP puede ser bloqueado por router/ISP. No significa necesariamente caída de Internet.",
        Location=new Point(22,615),Size=new Size(800,29),ForeColor=Color.Gainsboro});
    }
    static List<long> Samples(IPAddress ip,out int lost){
      var list=new List<long>();lost=0;
      using(var ping=new Ping()){
        for(int i=0;i<12;i++){
          try{var r=ping.Send(ip,850);
            if(r.Status==IPStatus.Success)list.Add(r.RoundtripTime);
            else lost++;
          }catch{lost++;}
        }
      }
      return list;
    }
    static string Summary(string name,IPAddress addr,ref bool localTrouble){
      int failed;var vals=Samples(addr,out failed);
      var b=new StringBuilder();
      b.AppendLine(name+" · "+addr);
      b.AppendLine("Respuestas: "+vals.Count+"/12  ·  Fallos: "+failed+"/12");
      if(vals.Count>0){
        double avg=vals.Average(),jitter=0;
        for(int i=1;i<vals.Count;i++)jitter+=Math.Abs(vals[i]-vals[i-1]);
        jitter/=(vals.Count>1?vals.Count-1:1);
        var ordered=vals.OrderBy(v=>v).ToList();
        double median=ordered.Count%2==0
          ? (ordered[ordered.Count/2-1]+ordered[ordered.Count/2])/2.0
          : ordered[ordered.Count/2];
        long p95=ordered[Math.Max(0,(int)Math.Ceiling(ordered.Count*.95)-1)];
        double stddev=Math.Sqrt(vals.Select(v=>Math.Pow(v-avg,2)).Average());
        b.AppendLine("Ping: promedio "+avg.ToString("0.0")+" ms; mediana "+median.ToString("0.0")+
          " ms; p95 "+p95+" ms; min "+vals.Min()+
          " ms; max "+vals.Max()+" ms; variación "+jitter.ToString("0.0")+
          " ms; desviación "+stddev.ToString("0.0")+" ms (p95 aproximado con 12 muestras)");
        if(name.StartsWith("GATEWAY")&&(avg>30||jitter>20||failed>=3||p95>80))localTrouble=true;
      }else{
        b.AppendLine("Sin respuestas ICMP: puede ser bloqueo de ping, NO prueba de caída de Internet.");
      }
      if(name.StartsWith("GATEWAY")&&failed>=3)localTrouble=true;
      if(name.StartsWith("GATEWAY")&&vals.Count==0)
        b.AppendLine("Verifica la conexión en el navegador antes de diagnosticar un corte.");
      b.AppendLine();
      return b.ToString();
    }
    static string NetworkTest(){
      var sb=new StringBuilder("AETHER · COMPROBACIÓN WIFI V28\r\n"+
        "Fecha local: "+DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")+"\r\n"+
        "Método: ICMP 12 muestras por destino, timeout 850 ms, solo lectura.\r\n\r\n");
      var adapters=NetworkInterface.GetAllNetworkInterfaces()
        .Where(x=>x.OperationalStatus==OperationalStatus.Up &&
          (x.NetworkInterfaceType==NetworkInterfaceType.Wireless80211 ||
           x.NetworkInterfaceType==NetworkInterfaceType.Ethernet)).ToList();
      if(adapters.Count==0)return "No se encontró Wi-Fi/Ethernet activo.";
      foreach(var nic in adapters){
        sb.AppendLine("ADAPTADOR: "+nic.Name+" ("+nic.NetworkInterfaceType+")");
        sb.AppendLine("Enlace anunciado: "+(nic.Speed>0?(nic.Speed/1000000.0).ToString("0")+" Mb/s":"no reportado")+
          " (NO equivale al speedtest)");
        sb.AppendLine();
      }
      sb.AppendLine(WifiRadioV27.RadioReport());
       sb.AppendLine(WifiChannelSurveyV28.Survey());
      sb.AppendLine();
      var first=adapters.FirstOrDefault(x=>x.NetworkInterfaceType==NetworkInterfaceType.Wireless80211)??adapters[0];
      var gateways=first.GetIPProperties().GatewayAddresses.Select(x=>x.Address)
        .Where(x=>x.AddressFamily==AddressFamily.InterNetwork&&!IPAddress.IsLoopback(x)).ToList();
      bool trouble=false;
      if(gateways.Count>0)sb.Append(Summary(
        first.NetworkInterfaceType==NetworkInterfaceType.Wireless80211?"GATEWAY WIFI":"GATEWAY ETHERNET",
        gateways[0],ref trouble));
      else sb.AppendLine("Sin gateway IPv4; se omite ping al router.\r\n");
      sb.Append(Summary("INTERNET (1.1.1.1)",IPAddress.Parse("1.1.1.1"),ref trouble));
      var dnsTimer=Stopwatch.StartNew();
      try{
        var ips=Dns.GetHostAddresses("example.com");
        dnsTimer.Stop();
        sb.AppendLine("DNS: example.com resuelto en "+dnsTimer.ElapsedMilliseconds+
          " ms ("+ips.Length+" direcciones). No equivale a velocidad de descarga.");
      }catch(Exception ex){
        dnsTimer.Stop();
        sb.AppendLine("DNS: error o bloqueo de resolución ("+ex.GetType().Name+").");
      }
      if(trouble)sb.AppendLine("RECOMENDACIÓN: comprueba señal Wi-Fi y banda 5 GHz, distancia, interferencias y router.");
      else sb.AppendLine("Si el gateway responde bien pero Internet va lento: compara tarifa, speedtest por Ethernet, saturación y proveedor.");
      sb.AppendLine("Una conexión de 60 Mb/s NO puede convertirse automáticamente en 150 Mb/s por esta aplicación.");
      return sb.ToString();
    }
    async Task Check(){
      run.Enabled=false;output.Text="Probando gateway y conectividad Internet de forma secuencial...";
      try{output.Text=await Task.Run(()=>NetworkTest());}
      catch(Exception e){output.Text="No se pudo medir: "+e.Message;}
      finally{run.Enabled=true;}
    }
  }
}
