using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Management;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Diagnostics;
using System.Text;
using System.Threading;
using System.Windows.Forms;

namespace SimTurboPC {
  // Safe, read-only PC clinic. Does not promise to exceed ISP or hardware limitations.
  public sealed class AetherSystemClinicV11 : Form {
    readonly Color bg=Color.FromArgb(8,17,31),surface=Color.FromArgb(22,39,60),accent=Color.FromArgb(35,221,198);
    readonly TextBox report;
    readonly Label headline;
    readonly string pairingToken,pcAddress;
    int jobRunning=0;
    public AetherSystemClinicV11(string token,string pcIp) {
      pairingToken=token;pcAddress=pcIp;
      Text="SIM TURBO PC ULTRA V11 · AETHER SYSTEM CLINIC";
      ClientSize=new Size(1120,790);MinimumSize=new Size(1040,740);
      BackColor=bg;ForeColor=Color.White;
      Font=new Font("Segoe UI",10);StartPosition=FormStartPosition.CenterParent;
      Label header=new Label {Text="AETHER SYSTEM CLINIC  V11",Location=new Point(22,13),Size=new Size(1000,43),ForeColor=accent,Font=new Font("Segoe UI",19,FontStyle.Bold)};
      Controls.Add(header);
      Label subtitle=new Label {Text="12 herramientas reales de diagnóstico · Wi-Fi, PC, juegos, discos y mando Android · sin trucos de registro ocultos",Location=new Point(24,59),Size=new Size(1064,32),ForeColor=Color.Gainsboro};
      Controls.Add(subtitle);
      var tabs=new TabControl {Location=new Point(20,97),Size=new Size(1080,425)};
      tabs.Font=new Font("Segoe UI",10,FontStyle.Bold);
      Controls.Add(tabs);
      var net=Tab(tabs,"WI-FI / RED");
      var pc=Tab(tabs,"CPU / RAM");
      var low=Tab(tabs,"PC MODESTO");
      var game=Tab(tabs,"JUEGOS / FPS");
      var disk=Tab(tabs,"DISCOS");
      var pad=Tab(tabs,"MANDO ANDROID");

      Desc(net,"60 → 120–150 Mb/s es un OBJETIVO, no una velocidad prometida. Comprueba tarifa, router, Wi-Fi y adaptador.",18);
      B(net,"ANALIZAR ADAPTADORES Y ENLACES",16,99,492,()=>Run(ReadNetwork));
      B(net,"MEDIR PING + RUTA",535,99,492,()=>Run(CheckLatency));
      B(net,"VER DETALLES Wi-Fi WINDOWS",16,169,492,()=>Run(ReadWiFi));
      B(net,"SPEED TEST EN EL NAVEGADOR",535,169,492,()=>Open("https://speed.cloudflare.com/"));
      Desc(net,"Si la velocidad por Ethernet también es 60 Mb/s, revisa primero la tarifa y el router. La velocidad del enlace Wi-Fi no equivale a la de Internet.",263);

      Desc(pc,"Diagnóstico de procesos, uso de memoria y procesador. No cierra tareas automáticamente.",18);
      B(pc,"INFORME CPU + MEMORIA",16,99,492,()=>Run(ReadHardware));
      B(pc,"PROCESOS MÁS ACTIVOS EN MEMORIA",535,99,492,()=>Run(ReadProcesses));
      B(pc,"ABRIR MONITOR DE RECURSOS",16,169,492,()=>Open("resmon.exe"));
      B(pc,"ABRIR ADMINISTRADOR DE TAREAS",535,169,492,()=>Open("taskmgr.exe"));
      Desc(pc,"Los programas se mantienen bajo control del usuario. Evitamos matar procesos, alterar seguridad o borrar archivos.",263);

      Desc(low,"Perfil para portátiles básicos: descubre el cuello de botella ANTES de cambiar ajustes.",18);
      B(low,"DIAGNÓSTICO DE PC HUMILDE",16,99,492,()=>Run(ReadLowEnd));
      B(low,"CONFIGURACIÓN DE INICIO",535,99,492,()=>Open("ms-settings:startupapps"));
      B(low,"CONFIGURACIÓN DE ENERGÍA",16,169,492,()=>Open("ms-settings:powersleep"));
      B(low,"ACTUALIZACIONES OFICIALES",535,169,492,()=>Open("ms-settings:windowsupdate"));
      Desc(low,"Pasar de 15–20 a 100–120 FPS no puede garantizarse por software. Este modo busca ajustes seguros y medibles.",263);

      Desc(game,"Comprueba el hardware y prepara opciones para mejorar estabilidad y consumo de recursos.",18);
      B(game,"DIAGNÓSTICO GAMING",16,99,492,()=>Run(ReadGaming));
      B(game,"MODO JUEGO DE WINDOWS",535,99,492,()=>Open("ms-settings:gaming-gamemode"));
      B(game,"AJUSTES GRÁFICOS WINDOWS",16,169,492,()=>Open("ms-settings:display-advancedgraphics"));
      B(game,"PANEL DE RENDIMIENTO",535,169,492,()=>Run(ReadHardware));
      Desc(game,"Bajar resolución, sombras o distancia de dibujado puede subir FPS; la mejora depende del juego, CPU y GPU.",263);

      Desc(disk,"Consulta discos y espacio sin ejecutar limpiezas automáticas ni tocar tus documentos.",18);
      B(disk,"DIAGNÓSTICO DE UNIDADES",16,99,492,()=>Run(ReadDrives));
      B(disk,"ALMACENAMIENTO WINDOWS",535,99,492,()=>Open("ms-settings:storagesense"));
      B(disk,"DESFRAGMENTAR Y OPTIMIZAR",16,169,492,()=>Open("dfrgui.exe"));
      B(disk,"ABRIR EXPLORADOR",535,169,492,()=>Open("explorer.exe"));
      Desc(disk,"La herramienta oficial de Windows identifica SSD/HDD para optimización. No aconsejamos desfragmentar SSD manualmente.",263);

      Desc(pad,"Mando local por Wi-Fi: Android transmite botones; Windows los convierte en teclas. No requiere drivers XInput.",18);
      B(pad,"INICIAR RECEPTOR DEL MANDO",16,99,1010,()=>new AetherAndroidGamepadV11(pairingToken,pcAddress).ShowDialog(this));
      Desc(pad,"1. PC y móvil en la misma Wi-Fi de confianza.  2. Abre esta pantalla y el modo mando en Android.  3. Minimiza la ventana para jugar.",189);
      Desc(pad,"Controles asignados: cruceta = WASD; A = espacio; B = Escape; X = F; Y = E; L = Q; R = Shift; Start = Enter.",250);
      Desc(pad,"El juego debe aceptar teclado. NO emula un mando Xbox nativo ni envía comandos a Internet.",315);

      headline=new Label{Text="Preparado · selecciona una herramienta",Location=new Point(23,531),Size=new Size(1054,31),ForeColor=accent,Font=new Font("Segoe UI",11,FontStyle.Bold)};
      Controls.Add(headline);
      report=new TextBox{Location=new Point(23,563),Size=new Size(1054,149),Anchor=AnchorStyles.Left|AnchorStyles.Right|AnchorStyles.Top|AnchorStyles.Bottom,
         Multiline=true,ReadOnly=true,ScrollBars=ScrollBars.Vertical,BackColor=surface,ForeColor=Color.White,Font=new Font("Consolas",9.4f)};
      Controls.Add(report);
      var save=new Button{Text="GUARDAR INFORME TXT",Location=new Point(23,724),Size=new Size(260,42),BackColor=accent,ForeColor=Color.Black,FlatStyle=FlatStyle.Flat};
      save.Click+=(s,e)=>SaveReport();Controls.Add(save);
      var clear=new Button{Text="LIMPIAR REGISTRO",Location=new Point(296,724),Size=new Size(240,42),BackColor=surface,ForeColor=Color.White,FlatStyle=FlatStyle.Flat};
      clear.Click+=(s,e)=>{report.Clear();headline.Text="Registro borrado";};Controls.Add(clear);
      Append("V11: el diagnóstico compara hechos observados con recomendaciones; no modifica las conexiones ni garantiza FPS.");
    }
    TabPage Tab(TabControl root,string name){
      var page=new TabPage(name){BackColor=surface,ForeColor=Color.White};
      root.TabPages.Add(page);return page;
    }
    void Desc(Control parent,string message,int y){
      var l=new Label {Text=message,Location=new Point(18,y),Size=new Size(1015,77),ForeColor=Color.White,Font=new Font("Segoe UI",10)};
      parent.Controls.Add(l);
    }
    void B(Control parent,string name,int x,int y,int w,Action act){
      var b=new Button {Text=name,Location=new Point(x,y),Size=new Size(w,53),BackColor=Color.FromArgb(18,102,112),ForeColor=Color.White,
        FlatStyle=FlatStyle.Flat,Font=new Font("Segoe UI",10,FontStyle.Bold)};
      b.FlatAppearance.BorderSize=0;
      b.Click+=(s,e)=>{try{act();}catch(Exception ex){Append("Error: "+ex.Message);}};
      parent.Controls.Add(b);
    }
    void Run(Func<string> work){
      if(Interlocked.CompareExchange(ref jobRunning,1,0)!=0){Append("Ya existe una prueba en ejecución.");return;}
      headline.Text="Ejecutando prueba local...";
      ThreadPool.QueueUserWorkItem(_=>{
        string result;
        try{result=work();}catch(Exception ex){result="Prueba interrumpida: "+ex.Message;}
        Interlocked.Exchange(ref jobRunning,0);
        if(!IsDisposed&&IsHandleCreated)try{BeginInvoke((Action)(()=>{
          Append(result);headline.Text="Prueba terminada · no se han aplicado cambios";
        }));}catch{}
      });
    }
    void Append(string line){
      if(report!=null&&!IsDisposed){
        report.AppendText("["+DateTime.Now.ToString("HH:mm:ss")+"] "+line+Environment.NewLine+Environment.NewLine);
      }
    }
    static bool Relevant(NetworkInterface ni){
      return ni.OperationalStatus==OperationalStatus.Up && (ni.NetworkInterfaceType==NetworkInterfaceType.Ethernet ||
       ni.NetworkInterfaceType==NetworkInterfaceType.GigabitEthernet||ni.NetworkInterfaceType==NetworkInterfaceType.Wireless80211);
    }
    static string ReadNetwork(){
      var sb=new StringBuilder("REDES ACTIVAS Y VELOCIDADES DE ENLACE (no de Internet):\r\n");
      foreach(var ni in NetworkInterface.GetAllNetworkInterfaces().Where(Relevant)){
        long speed=ni.Speed;
        sb.AppendLine(ni.Name+" ["+ni.NetworkInterfaceType+"]");
        sb.AppendLine("  Velocidad anunciada: "+(speed>0?(speed/1000000.0).ToString("0.0")+" Mb/s":"desconocida"));
        var ips=ni.GetIPProperties();
        foreach(var g in ips.GatewayAddresses) if(g.Address.AddressFamily==AddressFamily.InterNetwork)
          sb.AppendLine("  Puerta de enlace: "+g.Address);
        if(speed>0&&speed<150000000)
          sb.AppendLine("  ALERTA: enlace por debajo de 150 Mb/s; una velocidad útil de 150 Mb/s no es realista por este adaptador/enlace.");
      }
      sb.AppendLine("Diagnóstico: contrasta Ethernet y Wi-Fi, tarifa contratada, banda 5 GHz y distancia al router.");
      return sb.ToString();
    }
    static string CheckLatency(){
      var sb=new StringBuilder("LATENCIA ICMP (no equivalente al ping de un juego)\r\n");
      foreach(string host in new[]{"1.1.1.1","8.8.8.8"}){
        var vals=new List<long>();int fail=0;
        for(int i=0;i<4;i++){
          try{using(var ping=new Ping()){
            var r=ping.Send(host,1000);
            if(r.Status==IPStatus.Success)vals.Add(r.RoundtripTime);else fail++;
          }}catch{fail++;}
        }
        sb.AppendLine(host+": "+(vals.Count>0?vals.Average().ToString("0")+" ms de media":"sin respuesta")+"; "+fail+"/4 pérdidas o bloqueos");
      }
      sb.AppendLine("Desactivar descargas en segundo plano durante el juego puede mejorar jitter si el enlace está saturado.");
      return sb.ToString();
    }
    static string RunCapture(string app,string args){
      using(var p=new Process()){
        p.StartInfo=new ProcessStartInfo(app,args){UseShellExecute=false,CreateNoWindow=true,RedirectStandardOutput=true};
        p.Start();
        string s=p.StandardOutput.ReadToEnd();
        if(!p.WaitForExit(7000)){try{p.Kill();}catch{}return "Tiempo agotado";}
        return s.Length>10000?s.Substring(0,10000)+"\r\n[TRUNCADO]":s;
      }
    }
    static string ReadWiFi(){
      return "NETSH WI-FI — MEDICIONES DEL SISTEMA\r\n"+RunCapture("netsh","wlan show interfaces")+
        "\r\nBusca banda, canal, intensidad y velocidad de recepción. El idioma de Windows puede variar.";
    }
    static string InfoWmi(string query,string[] keys){
      var b=new StringBuilder();
      try{using(var searcher=new ManagementObjectSearcher(query)){
        int count=0;
        foreach(ManagementObject o in searcher.Get()){
          if(count++>=4)break;
          foreach(string key in keys)try{if(o[key]!=null)b.AppendLine(key+": "+o[key]);}catch{}
        }
      }}catch(Exception ex){b.AppendLine("WMI no disponible: "+ex.Message);}
      return b.ToString();
    }
    static string ReadHardware(){
      var b=new StringBuilder("HARDWARE\r\n");
      b.AppendLine(InfoWmi("SELECT Name,NumberOfLogicalProcessors,MaxClockSpeed FROM Win32_Processor",
        new[]{"Name","NumberOfLogicalProcessors","MaxClockSpeed"}));
      b.AppendLine(InfoWmi("SELECT Capacity FROM Win32_PhysicalMemory",new[]{"Capacity"}));
      b.AppendLine("RAM física: revisar capacidad por módulos WMI (Capacity en bytes).");
      b.AppendLine(InfoWmi("SELECT Name,AdapterRAM FROM Win32_VideoController",new[]{"Name","AdapterRAM"}));
      return b.ToString();
    }
    static string ReadProcesses(){
      var p=Process.GetProcesses().OrderByDescending(p=>SafeMemory(p)).Take(12);
      var b=new StringBuilder("PROCESOS ORDENADOS POR MEMORIA RESIDENTE:\r\n");
      foreach(var x in p){
        b.AppendLine(x.ProcessName+" · "+(SafeMemory(x)/1048576.0).ToString("0")+" MiB");
        x.Dispose();
      }
      b.AppendLine("Son datos orientativos; no cierres procesos desconocidos del sistema.");
      return b.ToString();
    }
    static long SafeMemory(Process p){try{return p.WorkingSet64;}catch{return 0;}}
    static string ReadGaming(){
      var b=new StringBuilder("DIAGNÓSTICO PARA JUEGOS:\r\n");
      b.AppendLine(InfoWmi("SELECT Name FROM Win32_VideoController",new[]{"Name"}));
      b.AppendLine("Si un equipo solo consigue 15–20 FPS, comprueba gráficos integrados, CPU, RAM y temperaturas.");
      b.AppendLine("Prueba 720p, sombras mínimas, limitador de FPS estable, modo pantalla completa y reducción de procesos pesados.");
      b.AppendLine("Mantén Windows y drivers desde proveedores oficiales, no aplicaciones milagro.");
      return b.ToString();
    }
    static string ReadLowEnd(){
      var b=new StringBuilder("PERFIL DE PC MODESTO (solo diagnóstico)\r\n");
      b.AppendLine(InfoWmi("SELECT Name,NumberOfLogicalProcessors FROM Win32_Processor",new[]{"Name","NumberOfLogicalProcessors"}));
      b.AppendLine(InfoWmi("SELECT Name FROM Win32_VideoController",new[]{"Name"}));
      b.AppendLine("1. Usa el cargador si es un portátil y configura energía apropiada.");
      b.AppendLine("2. Desactiva aplicaciones de inicio que reconozcas y no necesites.");
      b.AppendLine("3. En los juegos reduce resolución, sombras, postprocesado y distancia.");
      b.AppendLine("4. Comprueba el almacenamiento libre y memoria antes de cerrar programas.");
      b.AppendLine("5. Compara FPS antes/después en el mismo juego y escena. 100 FPS no está garantizado.");
      return b.ToString();
    }
    static string ReadDrives(){
      var b=new StringBuilder("UNIDADES DE ALMACENAMIENTO\r\n");
      foreach(var d in DriveInfo.GetDrives()){
        if(!d.IsReady||d.DriveType!=DriveType.Fixed)continue;
        b.AppendLine(d.Name+": "+(d.AvailableFreeSpace/1073741824.0).ToString("0.0")+" GiB libres de "+
          (d.TotalSize/1073741824.0).ToString("0.0")+" GiB");
        if(d.TotalSize>0&&d.AvailableFreeSpace/(double)d.TotalSize<.12)
          b.AppendLine("  AVISO: poco espacio; revisar archivos manualmente.");
      }
      return b.ToString();
    }
    void Open(string target){
      try{Process.Start(new ProcessStartInfo(target){UseShellExecute=true});}
      catch(Exception ex){Append("No se pudo abrir "+target+": "+ex.Message);}
    }
    void SaveReport(){
      try{
        var dir=Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),"SimTurboPC","V11");
        Directory.CreateDirectory(dir);
        string path=Path.Combine(dir,"diagnostico_"+DateTime.Now.ToString("yyyyMMdd_HHmmss")+".txt");
        File.WriteAllText(path,report.Text,Encoding.UTF8);
        Append("Informe guardado localmente en: "+path);
      }catch(Exception ex){Append("No se pudo guardar el informe: "+ex.Message);}
    }
  }
}