using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.NetworkInformation;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>
  /// AETHER V10 experimental research platform.
  /// Does not claim global traffic bonding, independent DNS hosting, or unreal speed gains.
  /// Read-only network tests and opt-in selection of an internal DNS-over-HTTPS provider.
  /// </summary>
  public sealed class AetherInnovationV10 : Form {
    readonly string home;
    readonly string logPath;
    readonly string signalFile;
    readonly string telemetryFile;
    readonly string selectionFile;
    readonly Color bg=Color.FromArgb(8,15,29), surface=Color.FromArgb(21,38,59), sea=Color.FromArgb(26,226,210);
    readonly string[] features={
      "AETHER SHADOW MAP","NETWORK DREAM ENGINE","ZERO-REGRET NETWORK","WI-FI WEATHER FORECAST",
      "ROUTE RACE","LATENCY MICROSCOPIO","NETWORK TIME MACHINE","CONNECTION GENOME",
      "INTERNET AIR TRAFFIC CONTROL","AETHER EXPLAINABLE GOVERNOR"
    };
    readonly string[] statements={
      "INTERPOLACIÓN REAL DE MEDICIONES, NO UN ESCÁNER DE PAREDES",
      "20.000 ESCENARIOS HIPOTÉTICOS, NO VELOCIDADES MEDIDAS",
      "PILOTO A/B DE DNS INTERNO CON REVERSIÓN, NO AJUSTES GLOBALES",
      "AGRUPACIÓN DE MUESTRAS REALES POR HORA; SIN FUTURO GARANTIZADO",
      "COMPARATIVA DE RESOLUTORES DoH; ENLACES FÍSICOS EN OTRAS PESTAÑAS",
      "CORRELACIÓN PING/CPU; FRAMETIMES REQUIEREN TELEMETRÍA EXTERNA",
      "REPRODUCCIÓN ESTADÍSTICA DE REGISTROS; NO PAQUETES EN VIVO",
      "HUELLA DE PROCESOS CPU/RAM; NO INTERCEPTA TRÁFICO PRIVADO",
      "ASESOR SQM/BUFFERBLOAT; NO ADMINISTRA ROUTERS AJENOS",
      "INFORME EXPLICABLE DE DECISIONES Y SUS LIMITACIONES"
    };
    readonly ListBox menu;
    readonly TextBox log;
    readonly Label detail,serverStatus,chosen;
    readonly Button run,pilotButton;
    readonly CheckBox pilotDiagnostics,pilotDns;
    readonly System.Windows.Forms.Timer timer=new System.Windows.Forms.Timer();
    readonly PictureBox map;
    readonly NumericUpDown baseline, mobile, ideaNumber;
    readonly TextBox ideaText;
    bool pilot=false;
    bool running=false;
    int cycle=0;
    string selectedProvider="AUTO";
    double lastPing=-1,lastDnsMs=-1;
    const int MaxSampleLines=3000;
    readonly string[] providerNames={"Cloudflare","Google"};
    readonly string[] providerUrls={
       "https://cloudflare-dns.com/dns-query?name=example.org&type=A",
       "https://dns.google/resolve?name=example.org&type=A"
    };
    public AetherInnovationV10(){
      Text="SIM TURBO PC ULTRA V10 · AETHER INNOVATION LAB + DNS GUARD";
      ClientSize=new Size(1100,780);MinimumSize=new Size(1000,730);
      BackColor=bg;ForeColor=Color.White;Font=new Font("Segoe UI",10);
      StartPosition=FormStartPosition.CenterParent;
      home=Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),"SimTurboPC","V10");
      Directory.CreateDirectory(home);
      logPath=Path.Combine(home,"lab.log");
      telemetryFile=Path.Combine(home,"measurements.csv");
      signalFile=Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),"SimTurboPC","wifi_radar_samples.csv");
      selectionFile=Path.Combine(home,"internal_dns.txt");
      if(File.Exists(selectionFile)){
        string name=File.ReadAllText(selectionFile).Trim();
        if(providerNames.Contains(name))selectedProvider=name;
      }
      TextLabel(this,"AETHER V10 · 10 MOTORES + DNS GUARD",22,12,1030,42,19,true,sea);
      TextLabel(this,"Investigación reproducible · sin VPN oculta · sin cambios DNS del sistema · recuperación voluntaria",24,60,1030,29,10,false,Color.LightGray);
      menu=new ListBox{Location=new Point(22,104),Size=new Size(363,399),BackColor=surface,
        ForeColor=Color.White,Font=new Font("Segoe UI",10.5f)};
      for(int i=0;i<10;i++) menu.Items.Add((i+1).ToString("00")+"  "+features[i]);
      menu.SelectedIndexChanged+=(s,e)=>UpdateSelected();
      Controls.Add(menu);
      detail=TextLabel(this,"",406,102,657,127,10,false,Color.Gainsboro);
      run=ActionButton("EJECUTAR MÓDULO SELECCIONADO",407,247,650,50,()=>Execute());
      serverStatus=TextLabel(this,"Diagnóstico DNS: sin evaluar",407,315,650,53,11,true,sea);
      chosen=TextLabel(this,"DNS seleccionado para el laboratorio: "+selectedProvider,407,372,650,55,10,false,Color.White);
      ActionButton("COMPARAR DNS REALES",407,445,313,51,()=>StartWork(()=>CompareDns(true)));
      ActionButton("ABRIR DNS DE WINDOWS",734,445,323,51,()=>Open("ms-settings:network-wifi"));
      pilotDiagnostics=new CheckBox{Text="Autopiloto: medir ping y guardar historial",Checked=true,
        Location=new Point(24,524),Size=new Size(393,30),ForeColor=Color.White};
      pilotDns=new CheckBox{Text="Autopiloto: comparar DNS cada ~3 min",Checked=false,
        Location=new Point(421,524),Size=new Size(440,30),ForeColor=Color.White};
      Controls.Add(pilotDiagnostics);Controls.Add(pilotDns);
      pilotButton=ActionButton("AUTOPILOTO V10: APAGADO",24,566,492,45,()=>TogglePilot());
      ActionButton("RESTAURAR DNS INTERNO",529,566,528,45,()=>ResetDns());
      TextLabel(this,"REGISTRO / EVIDENCIAS",22,628,1033,26,11,true,sea);
      log=new TextBox{Location=new Point(23,656),Size=new Size(1037,103),Anchor=AnchorStyles.Left|AnchorStyles.Right|AnchorStyles.Bottom,
        Multiline=true,ReadOnly=true,ScrollBars=ScrollBars.Vertical,BackColor=surface,ForeColor=Color.LightCyan,
        Font=new Font("Consolas",9)};
      Controls.Add(log);
      // Sub-panel map and idea interfaces are shown as dedicated modal windows.
      map=null;baseline=null;mobile=null;ideaNumber=null;ideaText=null;
      menu.SelectedIndex=0;
      timer.Interval=10000;
      timer.Tick+=(s,e)=>{if(pilot&&!running) AutoCycle();};
      Log("La V10 no puede crear un servidor de Internet sin infraestructura online. Compara dos resolutores DoH reales.");
      Log("El DNS elegido solo afecta a futuras pruebas de este laboratorio, no cambia DNS Windows.");
    }
    static Label TextLabel(Control c,string text,int x,int y,int w,int h,float size,bool bold,Color color){
      var l=new Label{Text=text,Location=new Point(x,y),Size=new Size(w,h),ForeColor=color,
        Font=new Font("Segoe UI",size,bold?FontStyle.Bold:FontStyle.Regular)};
      c.Controls.Add(l);return l;
    }
    Button ActionButton(string text,int x,int y,int width,int height,Action action) {
      var b=new Button{Text=text,Location=new Point(x,y),Size=new Size(width,height),
        BackColor=Color.FromArgb(12,105,107),ForeColor=Color.White,FlatStyle=FlatStyle.Flat,
        Font=new Font("Segoe UI",9.5f,FontStyle.Bold)};
      b.FlatAppearance.BorderSize=0;b.Click+=(s,e)=>{try{action();}catch(Exception ex){Log("Error: "+ex.Message);}};
      Controls.Add(b);return b;
    }
    void Log(string text) {
      if(IsDisposed||!IsHandleCreated)return;
      if(InvokeRequired){try{BeginInvoke((Action)(()=>Log(text)));}catch{}return;}
      string message=DateTime.Now.ToString("HH:mm:ss")+"  "+text;
      if(log!=null)log.AppendText(message+Environment.NewLine);
      try{File.AppendAllText(logPath,DateTime.Now.ToString("o")+" "+text+"\r\n",Encoding.UTF8);}catch{}
    }
    void SafeUI(Action a){
      if(IsDisposed||!IsHandleCreated)return;
      if(InvokeRequired){try{BeginInvoke(a);}catch{}}else a();
    }
    void StartWork(Action work){
      if(running){Log("Una operación sigue en curso.");return;}
      running=true;
      ThreadPool.QueueUserWorkItem(o=>{try{work();}catch(Exception e){Log("Prueba interrumpida: "+e.Message);}
        finally{running=false;}});
    }
    static string Exec(string exe,string args) {
      using(var p=new Process()){
        p.StartInfo=new ProcessStartInfo(exe,args){UseShellExecute=false,CreateNoWindow=true,
          RedirectStandardOutput=true,RedirectStandardError=true};
        p.Start();string s=p.StandardOutput.ReadToEnd();
        if(!p.WaitForExit(7000)){p.Kill();throw new IOException("Comando fuera de tiempo");}
        if(p.ExitCode!=0)throw new IOException(exe+" error "+p.ExitCode);
        return s;
      }
    }
    void Open(string s){try{Process.Start(new ProcessStartInfo(s){UseShellExecute=true});}
      catch(Exception e){Log("Windows: "+e.Message);}}
    void UpdateSelected(){
      if(menu.SelectedIndex<0)return;
      int i=menu.SelectedIndex;
      detail.Text=features[i]+"\n"+statements[i]+
        "\n\nTodos los resultados deben distinguir medición, estimación y simulación. No garantiza aumento de megas.";
    }
    void Execute(){
      switch(menu.SelectedIndex){
        case 0:ShowShadowMap();break;
        case 1:ShowDream();break;
        case 2:StartWork(()=>CompareDns(true));break;
        case 3:StartWork(WeatherForecast);break;
        case 4:StartWork(()=>CompareDns(false));break;
        case 5:StartWork(LatencyMicroscope);break;
        case 6:StartWork(TimeMachine);break;
        case 7:StartWork(ConnectionGenome);break;
        case 8:StartWork(AirTrafficAdvisor);break;
        case 9:StartWork(Governor);break;
      }
    }
    static double Ping(string target){
      try{using(var p=new Ping()){var r=p.Send(target,1200);
        return r.Status==IPStatus.Success?r.RoundtripTime:-1;}}catch{return -1;}
    }
    static IPAddress Gateway(){
      foreach(var n in NetworkInterface.GetAllNetworkInterfaces()){
        if(n.OperationalStatus!=OperationalStatus.Up)continue;
        if(n.NetworkInterfaceType!=NetworkInterfaceType.Ethernet &&
           n.NetworkInterfaceType!=NetworkInterfaceType.Wireless80211 &&
           n.NetworkInterfaceType!=NetworkInterfaceType.GigabitEthernet)continue;
        foreach(var gw in n.GetIPProperties().GatewayAddresses)
          if(gw.Address.AddressFamily==System.Net.Sockets.AddressFamily.InterNetwork)
            return gw.Address;
      }
      return null;
    }
    struct Sample {
      public DateTime Time;
      public double Ping,Router,Cpu;
      public Sample(DateTime at,double ping,double router,double cpu){Time=at;Ping=ping;Router=router;Cpu=cpu;}
    }
    void Save(Sample s){
      File.AppendAllText(telemetryFile,s.Time.ToString("o")+","+
        s.Ping.ToString("0.0",CultureInfo.InvariantCulture)+","+
        s.Router.ToString("0.0",CultureInfo.InvariantCulture)+","+
        s.Cpu.ToString("0.0",CultureInfo.InvariantCulture)+"\r\n",Encoding.UTF8);
    }
    List<Sample> ReadSamples(){
      var list=new List<Sample>();
      if(!File.Exists(telemetryFile))return list;
      foreach(string line in File.ReadAllLines(telemetryFile).Reverse().Take(MaxSampleLines).Reverse()){
        var p=line.Split(',');DateTime at;double a,b,c;
        if(p.Length==4&&DateTime.TryParse(p[0],null,DateTimeStyles.RoundtripKind,out at)&&
          double.TryParse(p[1],NumberStyles.Float,CultureInfo.InvariantCulture,out a)&&
          double.TryParse(p[2],NumberStyles.Float,CultureInfo.InvariantCulture,out b)&&
          double.TryParse(p[3],NumberStyles.Float,CultureInfo.InvariantCulture,out c))
          list.Add(new Sample(at,a,b,c));
      }
      return list;
    }
    static double CpuPercent(){
      try{using(var pc=new PerformanceCounter("Processor","% Processor Time","_Total")){
        pc.NextValue();Thread.Sleep(220);return pc.NextValue();
      }}catch{return -1;}
    }
    void Observe(){
      double ext=Ping("1.1.1.1");
      var gw=Gateway();
      double local=gw==null?-1:Ping(gw.ToString());
      var cp=CpuPercent();
      var sample=new Sample(DateTime.Now,ext,local,cp);
      Save(sample);
      lastPing=ext;
      Log("PING "+(ext<0?"sin respuesta":ext.ToString("0")+" ms")+
        " · router "+(local<0?"sin respuesta":local.ToString("0")+" ms")+
        " · CPU "+(cp<0?"sin dato":cp.ToString("0.0")+"%"));
      if(ext>120)Log("ALERTA: latencia alta en esta muestra; examinar carga y router, sin tocar sistema.");
    }
    void AutoCycle(){
      cycle++;
      if(pilotDiagnostics.Checked)StartWork(Observe);
      if(pilotDns.Checked && cycle%18==0)StartWork(()=>CompareDns(true));
    }
    void TogglePilot(){
      if(pilot){pilot=false;timer.Stop();pilotButton.Text="AUTOPILOTO V10: APAGADO";
        Log("Piloto detenido.");return;}
      if(MessageBox.Show("Activar monitorización cada 10 segundos?\n\n"+
          "Pruebas ICMP y, si está marcado, comparación DNS HTTPS cada tres minutos. "+
          "No cambiará el DNS de Windows ni usará el móvil intencionadamente.\n\n"+
          "Ten en cuenta que consume pequeñas cantidades de datos de red.",
          "AETHER V10 · AUTORIZAR",MessageBoxButtons.YesNo)!=DialogResult.Yes)return;
      pilot=true;timer.Start();pilotButton.Text="AUTOPILOTO V10: ACTIVO";
      Log("Autopiloto iniciado; solamente supervisa y compara.");
      AutoCycle();
    }
    struct DoHResult {public string Provider;public double Ms;public int Passes;public int Total;}
    DoHResult ProbeDns(int index,int tests){
      var watch=new Stopwatch();int passes=0;double total=0;
      for(int i=0;i<tests;i++){
        try{
          // A supported standard published DoH-over-HTTPS JSON endpoint.
          ServicePointManager.SecurityProtocol|=(SecurityProtocolType)3072;
          var request=(HttpWebRequest)WebRequest.Create(providerUrls[index]);
          request.Timeout=4200;request.ReadWriteTimeout=4200;
          request.Method="GET";request.AllowAutoRedirect=false;
          request.Headers["Accept"]="application/dns-json";
          request.UserAgent="SimTurboAetherV10/1.0";
          watch.Restart();
          using(var resp=(HttpWebResponse)request.GetResponse()){
            if(resp.StatusCode!=HttpStatusCode.OK)continue;
            using(var reader=new StreamReader(resp.GetResponseStream())){
              string text=reader.ReadToEnd();
              watch.Stop();
              if(Regex.IsMatch(text,@"[""']Status[""']\s*:\s*0\b")){
                passes++;total+=watch.Elapsed.TotalMilliseconds;
              }
            }
          }
        }catch(Exception){}
      }
      return new DoHResult{Provider=providerNames[index],Ms=passes>0?total/passes:double.PositiveInfinity,
        Passes=passes,Total=tests};
    }
    void CompareDns(bool choose){
      Log("DNS GUARD: probando Cloudflare y Google (3 consultas HTTPS cada uno).");
      DoHResult[] v={ProbeDns(0,3),ProbeDns(1,3)};
      foreach(var s in v)Log("DNS "+s.Provider+" · "+s.Passes+"/"+s.Total+
        " correctas · media "+(double.IsInfinity(s.Ms)?"sin medición":s.Ms.ToString("0")+" ms"));
      var valid=v.Where(x=>x.Passes==x.Total).OrderBy(x=>x.Ms).ToArray();
      if(valid.Length==0){Log("DNS sin ruta fiable; no se cambia nada.");
        SafeUI(()=>serverStatus.Text="DNS GUARD: ninguna ruta DoH confirmada");return;}
      var winner=valid[0];
      SafeUI(()=>serverStatus.Text="DNS GUARD: "+winner.Provider+
        " · "+winner.Ms.ToString("0")+" ms · "+winner.Passes+"/"+winner.Total+" pruebas");
      lastDnsMs=winner.Ms;
      if(!choose)return;
      string before=selectedProvider;
      // Avoid changing if both perform similarly: noisy measurements.
      double baselineMs=double.PositiveInfinity;
      foreach(var x in v)if(x.Provider==before)baselineMs=x.Ms;
      if(before!="AUTO" && winner.Provider!=before && baselineMs< double.PositiveInfinity &&
         baselineMs/winner.Ms < 1.20){
        Log("ZERO REGRET: mejora de DNS <20%; se mantiene "+before);
        return;
      }
      // No system DNS modifications; preferences control only the lab DoH tests.
      selectedProvider=winner.Provider;
      File.WriteAllText(selectionFile,selectedProvider,Encoding.UTF8);
      SafeUI(()=>chosen.Text="DNS del laboratorio: "+selectedProvider+" (Windows NO cambiado)");
      Log("DNS interno del laboratorio "+before+" → "+selectedProvider+
        "; para activar DNS Windows usar su configuración con autorización.");
      // A/B guard: if network returns errors in confirmation, revert selection.
      DoHResult check=ProbeDns(Array.IndexOf(providerNames,selectedProvider),2);
      if(check.Passes<2||check.Ms>winner.Ms*1.60){
        selectedProvider=before;
        File.WriteAllText(selectionFile,before,Encoding.UTF8);
        SafeUI(()=>chosen.Text="DNS del laboratorio revertido: "+before);
        Log("ZERO REGRET: regresión/no respuesta tras prueba; selector interno restaurado.");
      }
    }
    void ResetDns(){
      if(MessageBox.Show("Restaurar selección DNS de este laboratorio a AUTO? "+
          "No cambiará la configuración del sistema.","Restaurar DNS",
          MessageBoxButtons.YesNo)!=DialogResult.Yes)return;
      selectedProvider="AUTO";
      File.WriteAllText(selectionFile,"AUTO",Encoding.UTF8);
      chosen.Text="DNS seleccionado para el laboratorio: AUTO";
      Log("DNS interno del laboratorio restaurado.");
    }
    void ShowShadowMap(){
      var pointData=new List<Tuple<int,int,double>>();
      if(File.Exists(signalFile)){
        foreach(string line in File.ReadAllLines(signalFile).Skip(1)){
          var parts=line.Split(',');int x,y,dbm;
          if(parts.Length>=4 && int.TryParse(parts[1],out x) &&
            int.TryParse(parts[2],out y) && int.TryParse(parts[3],out dbm)&&
            x>=0&&x<=20&&y>=0&&y<=20&&dbm>=-100&&dbm<=-20)
            pointData.Add(Tuple.Create(x,y,(double)dbm));
        }
      }
      Form f=new Form{Text="SHADOW MAP · INTERPOLACIÓN Y CONFIANZA",ClientSize=new Size(770,650),
        StartPosition=FormStartPosition.CenterParent,BackColor=bg,ForeColor=Color.White};
      var intro=TextLabel(f,"SHADOW MAP · "+
        pointData.Count+" muestras existentes. Verde = señal fuerte, gris = sin evidencia.",
        15,14,740,55,11,false,Color.White);
      PictureBox pic=new PictureBox{Location=new Point(16,78),Size=new Size(720,510),BackColor=surface};
      pic.Paint+=(s,e)=>{
        var g=e.Graphics;
        const int cell=24;const int n=21;int x0=94,y0=0;
        for(int y=0;y<n;y++)for(int x=0;x<n;x++){
          double wsum=0,rsum=0,minDist=999;
          foreach(var p in pointData){
            double dist=Math.Sqrt(Math.Pow(p.Item1-x,2)+Math.Pow(p.Item2-y,2));
            minDist=Math.Min(minDist,dist);
            double weight=1.0/(0.6+dist*dist);
            wsum+=weight;rsum+=weight*p.Item3;
          }
          double signal=wsum>0?rsum/wsum:-100;
          double confidence=pointData.Count==0?0.0:Math.Max(0,1-minDist/7.0);
          int green=(int)Math.Max(0,Math.Min(255,(signal+100)/80*255));
          int red=255-green;
          using(var brush=new SolidBrush(Color.FromArgb(255,
              (int)(75+red*confidence*.7),(int)(65+green*confidence*.6),90))){
            g.FillRectangle(brush,x0+x*cell,y0+y*cell,cell-2,cell-2);
          }
        }
        foreach(var p in pointData){
          int x=x0+(p.Item1*cell)+7,y=p.Item2*cell+7;
          g.FillEllipse(Brushes.White,x,y,9,9);
        }
        if(pointData.Count<3)g.DrawString("POCAS MUESTRAS: estimaciones poco fiables",new Font("Segoe UI",13,FontStyle.Bold),
          Brushes.White,new PointF(95,455));
      };
      f.Controls.Add(pic);
      TextLabel(f,"Los píxeles no son mediciones: interpolación con confianza que cae al alejarse de los puntos blancos.",
        15,604,740,35,9,false,Color.LightGray);
      f.ShowDialog(this);
      Log("SHADOW MAP: "+pointData.Count+" mediciones reales; mapa interpolado, no detección real de paredes.");
    }
    void ShowDream(){
      using(var f=new Form{Text="NETWORK DREAM ENGINE · SIMULACIONES",ClientSize=new Size(650,400),
        StartPosition=FormStartPosition.CenterParent,BackColor=bg,ForeColor=Color.White}){
        TextLabel(f,"Simular 20.000 escenarios: capacidad hipotética y sobrecarga.",19,18,610,57,13,true,sea);
        TextLabel(f,"Conexión principal (Mb/s):",18,98,255,31,10,false,Color.White);
        var a=new NumericUpDown{Location=new Point(310,94),Width=190,Maximum=10000,Value=40};
        TextLabel(f,"Datos móviles (Mb/s):",18,158,255,31,10,false,Color.White);
        var b=new NumericUpDown{Location=new Point(310,154),Width=190,Maximum=10000,Value=30};
        var result=TextLabel(f,"Simulación, no medición.",18,281,615,93,11,false,Color.White);
        f.Controls.Add(a);f.Controls.Add(b);
        var btn=new Button{Text="EJECUTAR 20.000 ESCENARIOS",Location=new Point(18,222),Size=new Size(615,50),
          BackColor=Color.Teal,ForeColor=Color.White};
        btn.Click+=(s,e)=>{
          var random=new Random(123);double maximum=0,mean=0;
          for(int i=0;i<20000;i++){
            double overhead=.03+random.NextDouble()*.35, availability=.6+random.NextDouble()*.4;
            double throughput=((double)a.Value+(double)b.Value*availability)*(1-overhead);
            maximum=Math.Max(maximum,throughput);mean+=throughput;
          }
          result.Text="MEDIA SIMULADA: "+(mean/20000).ToString("0.0")+
            " Mb/s · MÁXIMA HIPOTÉTICA: "+maximum.ToString("0.0")+
            " Mb/s\nEstas velocidades NO se han alcanzado ni demostrado.";
          Log("DREAM: 20.000 escenarios generados con supuestos 3–38% sobrecarga; entrada "+a.Value+" + "+b.Value+" Mb/s");
        };
        f.Controls.Add(btn);
        f.ShowDialog(this);
      }
    }
    void WeatherForecast(){
      var samples=ReadSamples().Where(x=>x.Ping>=0).ToList();
      if(samples.Count<24){Log("WEATHER: se requieren al menos 24 mediciones de ping. Hay "+samples.Count+".");return;}
      var grouped=samples.GroupBy(x=>x.Time.Hour).Select(g=>new{Hour=g.Key,N=g.Count(),Mean=g.Average(x=>x.Ping)})
        .Where(x=>x.N>=2).OrderBy(x=>x.Mean).ToArray();
      if(grouped.Length<3){Log("WEATHER: se necesitan datos de ≥3 franjas horarias diferentes.");return;}
      foreach(var x in grouped)Log("Hora "+x.Hour+":00 · "+x.N+" muestras · ping medio "+x.Mean.ToString("0")+" ms");
      Log("Pronóstico exploratorio: franjas más estables por HISTORIAL, no predicción garantizada: "+grouped[0].Hour+":00.");
    }
    void LatencyMicroscope(){
      Log("MICROSCOPIO: correlación de CPU y ping; FPS/disk todavía no instrumentados.");
      var records=new List<Tuple<double,double>>();
      for(int i=0;i<8;i++){
        double cpu=CpuPercent(),ping=Ping("1.1.1.1");
        if(cpu>=0&&ping>=0)records.Add(Tuple.Create(cpu,ping));
        Save(new Sample(DateTime.Now,ping,-1,cpu));
      }
      if(records.Count<5){Log("No hay suficientes pares CPU/ping fiables.");return;}
      double mx=records.Average(x=>x.Item1),my=records.Average(x=>x.Item2);
      double cov=records.Sum(x=>(x.Item1-mx)*(x.Item2-my));
      double xx=records.Sum(x=>Math.Pow(x.Item1-mx,2)),yy=records.Sum(x=>Math.Pow(x.Item2-my,2));
      if(xx<.001||yy<.001){Log("Métricas casi constantes; correlación indefinida.");return;}
      double correlation=cov/Math.Sqrt(xx*yy);
      Log("MICROSCOPIO: correlación CPU/ping "+correlation.ToString("0.00")+
        " sobre "+records.Count+" pares. Correlación no demuestra causalidad.");
    }
    void TimeMachine(){
      var samples=ReadSamples().Where(x=>x.Ping>=0).ToArray();
      if(samples.Length==0){Log("TIME MACHINE: no hay registros para reproducir.");return;}
      int spikes=samples.Count(x=>x.Ping>100);
      var top=samples.OrderByDescending(x=>x.Ping).Take(5).OrderBy(x=>x.Time).ToArray();
      Log("TIME MACHINE: "+samples.Length+" muestras registradas · "+spikes+" picos >100 ms.");
      foreach(var x in top)Log(x.Time.ToString("dd/MM HH:mm:ss")+" · "+x.Ping.ToString("0")+" ms · CPU "+x.Cpu.ToString("0")+"%");
      Log("Reproducción estadística, no se inyectan ni replican paquetes reales.");
    }
    void ConnectionGenome(){
      // Process sampling reads only CPU process time and working memory, no contents or browsing history.
      var first=new Dictionary<int,TimeSpan>();
      foreach(var p in Process.GetProcesses()){
        try{first[p.Id]=p.TotalProcessorTime;}catch{}
        finally{p.Dispose();}
      }
      Thread.Sleep(650);
      var record=new List<Tuple<string,double,long>>();
      foreach(var p in Process.GetProcesses()){
        try{
          TimeSpan before;if(!first.TryGetValue(p.Id,out before))continue;
          double cpuMs=Math.Max(0,(p.TotalProcessorTime-before).TotalMilliseconds);
          record.Add(Tuple.Create(p.ProcessName,cpuMs,p.WorkingSet64));
        }catch{}finally{p.Dispose();}
      }
      foreach(var p in record.OrderByDescending(x=>x.Item2).ThenByDescending(x=>x.Item3).Take(10))
        Log("GENOME: "+p.Item1+" · CPU muestreada "+p.Item2.ToString("0")+" ms · RAM "+(p.Item3/1048576)+" MiB");
      Log("La V10 NO atribuye bytes por aplicación y NO inspecciona contenido de Internet.");
    }
    void AirTrafficAdvisor(){
      var gw=Gateway();
      double local=gw==null?-1:Ping(gw.ToString());
      double external=Ping("1.1.1.1");
      Log("AIR TRAFFIC: gateway "+(gw==null?"desconocido":gw.ToString())+
        " · ping LAN "+(local<0?"no responde":local.ToString("0")+" ms")+
        " · Internet "+(external<0?"no responde":external.ToString("0")+" ms"));
      Log("Recomendación: si el ping empeora al saturarse subida, revisar SQM/CAKE/FQ-CoDel del router, si es compatible.");
      Log("Este PC no dispone de permiso para gestionar automáticamente todos los dispositivos de la casa.");
    }
    void Governor(){
      var s=ReadSamples().Where(x=>x.Ping>=0).ToArray();
      string reason,action;
      if(s.Length<8){reason="menos de 8 muestras de ping; evidencia insuficiente";action="mantener configuración y medir más"; }
      else {
        double mean=s.Average(x=>x.Ping);
        double p95=s.OrderBy(x=>x.Ping).ElementAt((int)Math.Floor((s.Length-1)*.95)).Ping;
        if(p95>mean+80){reason="p95="+p95.ToString("0")+" ms frente a media "+mean.ToString("0")+" ms";
          action="examinar saturación, señal y router; no reconfigurar sin prueba A/B";
        }else{reason="p95 y media próximos o sin evidencia de degradación sostenida";
          action="ningún cambio recomendado";
        }
      }
      Log("GOVERNOR · DATO: "+reason);
      Log("GOVERNOR · DECISIÓN: "+action);
      Log("GOVERNOR · CAMBIOS APLICADOS: ninguno · REVERSIÓN: no necesaria");
    }
    protected override void OnFormClosing(FormClosingEventArgs e){
      pilot=false;timer.Stop();
      base.OnFormClosing(e);
    }
  }
}