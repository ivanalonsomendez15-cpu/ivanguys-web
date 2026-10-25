using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Management;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Security;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Windows.Forms;
using Microsoft.Win32;

namespace SimTurboPC {
    // HYPERPERFORMANCE V5: tools based on documented Windows features; no arbitrary driver downloads.
    public sealed class PerformanceCenter : Form {
        readonly Color bg=Color.FromArgb(9,15,29),panel=Color.FromArgb(23,37,57);
        readonly Color accent=Color.FromArgb(22,217,212),muted=Color.FromArgb(160,183,205);
        TabControl tabs; TextBox output; Label headline,serverLabel;
        TcpListener server; volatile bool listening;
        Thread serverThread;
        string stateFile;
        const string GameModeKey=@"Software\Microsoft\GameBar";
        const string PowerGuidPattern=@"[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
        public PerformanceCenter() {
            Text="SIM TURBO PC ULTRA V5 | HYPERPERFORMANCE";
            ClientSize=new Size(940,690);MinimumSize=new Size(850,620);
            BackColor=bg;ForeColor=Color.White;Font=new Font("Segoe UI",10);
            StartPosition=FormStartPosition.CenterParent;
            var folder=Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),"SimTurboPC");
            Directory.CreateDirectory(folder);
            stateFile=Path.Combine(folder,"v5_optimizations_restore.txt");
            headline=new Label{Text="HYPERPERFORMANCE V5   ·   Gaming + drivers + red local",ForeColor=accent,
                Font=new Font("Segoe UI",16,FontStyle.Bold),Location=new Point(22,13),Size=new Size(890,40)};
            Controls.Add(headline);
            var desc=new Label{Text="Optimiza con autorización. No promete más FPS ni más megas sin mediciones.",ForeColor=muted,
                Location=new Point(26,59),Size=new Size(860,23)};
            Controls.Add(desc);
            tabs=new TabControl{Location=new Point(20,92),Size=new Size(900,420),
                Anchor=AnchorStyles.Top|AnchorStyles.Bottom|AnchorStyles.Left|AnchorStyles.Right,
                Font=new Font("Segoe UI",10,FontStyle.Bold)};
            Controls.Add(tabs);
            TabPage games=Tab("FPS / JUEGOS"), drivers=Tab("DRIVERS"), network=Tab("RED LOCAL"), info=Tab("EQUIPO / PROCESOS");
            AddHeader(games,"OPTIMIZACIÓN SEGURA PARA JUEGOS", "Game Mode y energía, reversibles. Steam, Roblox, CS2 y otros juegos.");
            AddButton(games,"ACTIVAR MODO FPS SEGURO",22,100,300,()=>EnableGameMode());
            AddButton(games,"ALTO RENDIMIENTO ENERGÉTICO",337,100,300,()=>EnableHighPerformance());
            AddButton(games,"RESTAURAR MIS AJUSTES",652,100,219,()=>UndoBoost());
            AddButton(games,"MODO JUEGO DE WINDOWS",22,172,266,()=>OpenSettings("ms-settings:gaming-gamemode"));
            AddButton(games,"AJUSTES GRÁFICOS / GPU",303,172,266,()=>OpenSettings("ms-settings:display-advancedgraphics"));
            AddButton(games,"PANEL FPS · WIN + G",584,172,286,()=>{
                Log("Para medir FPS reales en un juego: abre el juego, pulsa Win+G, abre widget Rendimiento y elige FPS. Si es necesario, concede permiso y reinicia.");
                MessageBox.Show("Mide los FPS con la Barra de juegos de Xbox: Win + G > Rendimiento > FPS.\n\nLa V5 no inventa valores de FPS.","Medidor de FPS");
            });
            AddInfo(games,245, "Consejo: un controlador más nuevo no siempre da más FPS. Primero compara el mismo juego,\nmisma resolución y escena antes/después. No desactivamos Defender, servicios ni telemetría de seguridad.");
            AddHeader(drivers,"CONTROLADORES OFICIALES", "Actualiza desde Windows Update. Para la GPU, utiliza el fabricante.");
            AddButton(drivers,"BUSCAR ACTUALIZACIONES",22,100,300,()=>OpenSettings("ms-settings:windowsupdate"));
            AddButton(drivers,"INSTALAR DRIVERS OPCIONALES",337,100,300,()=> {
                MessageBox.Show("Windows Update permite elegir qué controladores opcionales instalar.\n\nRevisa nombre, fabricante y fecha. Windows puede pedir reiniciar.\n\nEsta aplicación no descarga paquetes desconocidos ni fuerza controladores.","Instalación controlada");
                OpenSettings("ms-settings:windowsupdate-optionalupdates");
            });
            AddButton(drivers,"DRIVERS NVIDIA OFICIALES",652,100,219,()=>{
                Log("Abriendo web oficial NVIDIA. Comprueba el modelo y la firma del instalador.");
                try{Process.Start("https://www.nvidia.com/Download/index.aspx?lang=es");}catch(Exception e){Log(e.Message);}
            });
            AddButton(drivers,"INVENTARIO DE CONTROLADORES",22,172,300,()=>Threaded(ScanDrivers));
            AddButton(drivers,"ADMINISTRADOR DE DISPOSITIVOS",337,172,300,()=>Start("devmgmt.msc",""));
            AddButton(drivers,"HISTORIAL WINDOWS UPDATE",652,172,219,()=>OpenSettings("ms-settings:windowsupdate-history"));
            AddInfo(drivers,245,"Las actualizaciones se instalan desde Windows o NVIDIA tras tu autorización.\nNo ofrecemos una base de datos propietaria ni instalación automática de drivers de procedencia incierta.");
            AddHeader(network,"SERVIDOR INTERNO DE DIAGNÓSTICO", "Servidor local solo en este PC (127.0.0.1); no cambia el proxy ni intercepta HTTPS.");
            AddButton(network,"ENCENDER SERVIDOR LOCAL",22,100,300,()=>StartServer());
            AddButton(network,"ABRIR PANEL LOCAL",337,100,300,()=>{
                try{Process.Start("http://127.0.0.1:45728/");}catch(Exception e){Log(e.Message);}
            });
            AddButton(network,"APAGAR SERVIDOR",652,100,219,()=>StopServer());
            AddButton(network,"PROBAR DNS Y GATEWAY",22,172,300,()=>Threaded(NetworkCheck));
            AddButton(network,"MONITOR DE RECURSOS",337,172,300,()=>Start("resmon.exe",""));
            AddButton(network,"CONFIGURAR WI-FI",652,172,219,()=>OpenSettings("ms-settings:network-wifi"));
            serverLabel=new Label{Text="Servidor local: APAGADO · No se ha modificado Internet.",ForeColor=accent,
                Location=new Point(22,241),Size=new Size(860,32)};
            network.Controls.Add(serverLabel);
            AddInfo(network,284,"Un servidor interno puede medir y mostrar datos del PC. NO aumenta por sí solo los Mb/s.\nNo instalamos certificados, no leemos contraseñas y no interceptamos las páginas HTTPS.");
            AddHeader(info,"INVENTARIO Y PROCESOS EN SEGUNDO PLANO", "Busca cuellos de botella, controladores y aplicaciones que consumen memoria.");
            AddButton(info,"DIAGNÓSTICO DE CPU / GPU / RAM",22,100,410,()=>Threaded(Hardware));
            AddButton(info,"TOP PROCESOS POR MEMORIA",450,100,420,()=>Threaded(ProcessList));
            AddButton(info,"APLICACIONES DE INICIO",22,172,410,()=>OpenSettings("ms-settings:startupapps"));
            AddButton(info,"ABRIR ADMINISTRADOR TAREAS",450,172,420,()=>Start("taskmgr.exe",""));
            AddInfo(info,255,"No se terminan procesos automáticamente. Si cierras una aplicación, guarda antes sus datos.\nLa medida útil es FPS reales y latencia antes y después, no una cifra de marketing.");
            var logTitle=new Label{Text="REGISTRO HYPERPERFORMANCE",Location=new Point(23,520),
                Size=new Size(850,23),ForeColor=accent,Anchor=AnchorStyles.Left|AnchorStyles.Bottom};
            Controls.Add(logTitle);
            output=new TextBox{Multiline=true,ReadOnly=true,ScrollBars=ScrollBars.Vertical,
                BackColor=panel,ForeColor=Color.White,Font=new Font("Consolas",9.5f),
                Location=new Point(22,548),Size=new Size(892,116),
                Anchor=AnchorStyles.Left|AnchorStyles.Bottom|AnchorStyles.Right};
            Controls.Add(output);
            Log("Listo. Cambios de energía, drivers y Game Mode solo tras pulsar y autorizar.");
            if(File.Exists(stateFile))Log("Se encontró una copia de restauración de ajustes anteriores.");
        }
        TabPage Tab(string title){var t=new TabPage(title){BackColor=bg,ForeColor=Color.White,AutoScroll=true};tabs.TabPages.Add(t);return t;}
        void AddHeader(Control c,string text,string caption){
            c.Controls.Add(new Label{Text=text,Location=new Point(22,20),Size=new Size(840,31),ForeColor=accent,Font=new Font("Segoe UI",14,FontStyle.Bold)});
            c.Controls.Add(new Label{Text=caption,Location=new Point(22,57),Size=new Size(860,36),ForeColor=Color.LightGray});
        }
        void AddInfo(Control c,int y,string text){c.Controls.Add(new Label{Text=text,Location=new Point(22,y),Size=new Size(850,73),ForeColor=muted,Font=new Font("Segoe UI",10)});}
        void AddButton(Control c,string text,int x,int y,int w,Action action){
            var b=new Button{Text=text,Location=new Point(x,y),Size=new Size(w,55),
                BackColor=Color.FromArgb(15,78,86),ForeColor=Color.White,FlatStyle=FlatStyle.Flat,
                Font=new Font("Segoe UI",9,FontStyle.Bold)};
            b.FlatAppearance.BorderSize=0;b.Click+=(s,e)=>{try{action();}catch(Exception ex){Log(text+": "+ex.Message);MessageBox.Show(ex.Message,"SIM TURBO V5");}};
            c.Controls.Add(b);
        }
        void Log(string s){if(IsDisposed||!IsHandleCreated)return;
            if(InvokeRequired){BeginInvoke((Action)(()=>Log(s)));return;}
            output.AppendText("["+DateTime.Now.ToString("HH:mm:ss")+"] "+s+Environment.NewLine);
        }
        void Threaded(Action a) {
            new Thread(()=>{try{a();}catch(Exception e){Log("Error: "+e.Message);}}){IsBackground=true}.Start();
        }
        static string Command(string exe,string args,int timeout=10000){
            using(var p=new Process()){
                p.StartInfo=new ProcessStartInfo(exe,args){CreateNoWindow=true,
                    UseShellExecute=false,RedirectStandardOutput=true,RedirectStandardError=true};
                p.Start();string val=p.StandardOutput.ReadToEnd();
                if(!p.WaitForExit(timeout)){p.Kill();return "Tiempo excedido";}
                if(p.ExitCode!=0) return "Error ("+p.ExitCode+"): "+p.StandardError.ReadToEnd();
                return val;
            }
        }
        void Start(string file,string args){
            try{Process.Start(new ProcessStartInfo(file,args){UseShellExecute=true});Log("Abierto "+file);}
            catch(Exception e){Log("No se pudo abrir "+file+": "+e.Message);}
        }
        void OpenSettings(string uri){Start(uri,"");}
        static string ActivePowerGuid() {
            var m=Regex.Match(Command("powercfg.exe","/getactivescheme"),PowerGuidPattern);
            return m.Success?m.Value:"";
        }
        void SaveBackupIfMissing(){
            if(File.Exists(stateFile))return;
            int mode=-1;
            using(var k=Registry.CurrentUser.OpenSubKey(GameModeKey)){
                if(k!=null){object raw=k.GetValue("AutoGameModeEnabled",null);if(raw!=null){try{mode=Convert.ToInt32(raw);}catch{mode=-1;}}}
            }
            string guid=ActivePowerGuid();
            File.WriteAllLines(stateFile,new[]{"mode="+mode,"power="+guid},Encoding.UTF8);
        }
        void EnableGameMode(){
            if(MessageBox.Show("Activar Game Mode en tu cuenta de Windows?\n\nSe guarda el valor anterior para poder restaurarlo. No se desactivan antivirus ni servicios.",
                "Autorización Game Mode",MessageBoxButtons.YesNo,MessageBoxIcon.Question)!=DialogResult.Yes)return;
            SaveBackupIfMissing();
            using(var k=Registry.CurrentUser.CreateSubKey(GameModeKey))k.SetValue("AutoGameModeEnabled",1,RegistryValueKind.DWord);
            Log("Game Mode activado en HKCU (configuración del usuario). Reinicia el juego para comparar FPS.");
            MessageBox.Show("Game Mode activado. Puedes restaurar el ajuste con RESTAURAR MIS AJUSTES.","SIM TURBO V5");
        }
        void EnableHighPerformance(){
            if(MessageBox.Show("Cambiar temporalmente al plan ALTO RENDIMIENTO?\n\nPuede gastar más electricidad y calentar más el PC. No garantiza más FPS. Guardaremos el plan anterior.",
                "Autorización de energía",MessageBoxButtons.YesNo,MessageBoxIcon.Warning)!=DialogResult.Yes)return;
            SaveBackupIfMissing();
            string result=Command("powercfg.exe","/setactive SCHEME_MIN");
            string current=ActivePowerGuid();
            // SCHEME_MIN = 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c (if available).
            if(current.Equals("8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c",StringComparison.OrdinalIgnoreCase))
                Log("Alto rendimiento energético activado. Restaurable desde el panel.");
            else Log("Windows no confirmó el cambio de plan. "+result);
        }
        void UndoBoost(){
            if(!File.Exists(stateFile)){Log("Sin cambios guardados para restaurar.");return;}
            if(MessageBox.Show("Restaurar el Game Mode y el plan de energía anteriores?","Restaurar configuración",MessageBoxButtons.YesNo)!=DialogResult.Yes)return;
            var lines=File.ReadAllLines(stateFile);
            int mode=-1;string guid="";
            foreach(string item in lines){
                if(item.StartsWith("mode="))int.TryParse(item.Substring(5),out mode);
                if(item.StartsWith("power="))guid=item.Substring(6);
            }
            try{
                using(var k=Registry.CurrentUser.CreateSubKey(GameModeKey)){
                    if(mode<0)k.DeleteValue("AutoGameModeEnabled",false);
                    else k.SetValue("AutoGameModeEnabled",mode,RegistryValueKind.DWord);
                }
                bool restored=true;
                if(Regex.IsMatch(guid,"^"+PowerGuidPattern+"$")){
                    Command("powercfg.exe","/setactive "+guid);
                    restored=ActivePowerGuid().Equals(guid,StringComparison.OrdinalIgnoreCase);
                }
                if(restored){File.Delete(stateFile);Log("Ajustes anteriores restaurados correctamente.");}
                else Log("Game Mode restaurado; no se confirmó la recuperación del plan de energía "+guid+".");
            }catch(Exception ex){Log("Error al restaurar: "+ex.Message);}
        }
        void ScanDrivers(){
            Log("Leyendo adaptadores y controladores instalados...");
            using(var searcher=new ManagementObjectSearcher("SELECT Name, DriverVersion, Manufacturer FROM Win32_PnPSignedDriver")){
                var devices=new List<string>();
                foreach(ManagementObject device in searcher.Get()){
                    string n=Convert.ToString(device["Name"]),v=Convert.ToString(device["DriverVersion"]);
                    if(!string.IsNullOrWhiteSpace(n) && (n.IndexOf("NVIDIA",StringComparison.OrdinalIgnoreCase)>=0
                        ||n.IndexOf("Intel",StringComparison.OrdinalIgnoreCase)>=0
                        ||n.IndexOf("Realtek",StringComparison.OrdinalIgnoreCase)>=0
                        ||n.IndexOf("Wireless",StringComparison.OrdinalIgnoreCase)>=0
                        ||n.IndexOf("Wi-Fi",StringComparison.OrdinalIgnoreCase)>=0))
                        devices.Add(n+" / v"+v);
                }
                foreach(string s in devices.Distinct().Take(16))Log(s);
                Log("Esto es inventario instalado, NO indica si un controlador está anticuado. Usa Windows Update.");
            }
        }
        static string WmiSingle(string query,string field){
            using(var s=new ManagementObjectSearcher(query))foreach(ManagementObject row in s.Get())
                return Convert.ToString(row[field]);
            return "No disponible";
        }
        void Hardware(){
            Log("CPU: "+WmiSingle("SELECT Name FROM Win32_Processor","Name"));
            Log("GPU: "+WmiSingle("SELECT Name FROM Win32_VideoController","Name"));
            Log("Driver GPU: "+WmiSingle("SELECT DriverVersion FROM Win32_VideoController","DriverVersion"));
            try{
                using(var s=new ManagementObjectSearcher("SELECT TotalPhysicalMemory FROM Win32_ComputerSystem"))
                    foreach(ManagementObject m in s.Get())
                        Log("RAM instalada: "+(Convert.ToDouble(m["TotalPhysicalMemory"])/(1024*1024*1024)).ToString("0.0")+" GB");
            }catch(Exception e){Log(e.Message);}
            foreach(NetworkInterface nic in NetworkInterface.GetAllNetworkInterfaces()){
                if(nic.OperationalStatus==OperationalStatus.Up && nic.NetworkInterfaceType==NetworkInterfaceType.Wireless80211)
                    Log("Wi-Fi enlace reportado: "+(nic.Speed/1000000)+" Mb/s · "+nic.Name+" (NO velocidad de Internet)");
            }
        }
        void ProcessList(){
            var sorted=Process.GetProcesses().Select(p=>{
                try{return new{p.ProcessName,Bytes=p.WorkingSet64};}catch{return new{ProcessName="sin acceso",Bytes=0L};}
            }).OrderByDescending(x=>x.Bytes).Take(12).ToArray();
            foreach(var p in sorted)Log(p.ProcessName+" · RAM "+(p.Bytes/(1024*1024))+" MB");
            Log("El listado es informativo: no se cierran ni suspenden programas.");
        }
        void NetworkCheck(){
            foreach(var host in new[]{"www.microsoft.com","cloudflare.com"}){
                var sw=Stopwatch.StartNew();
                try{var addrs=Dns.GetHostAddresses(host);sw.Stop();
                    Log("DNS "+host+": "+sw.ElapsedMilliseconds+" ms · "+addrs.Length+" direcciones");
                }catch(Exception e){Log("DNS "+host+": "+e.Message);}
            }
            try{
                foreach(NetworkInterface ni in NetworkInterface.GetAllNetworkInterfaces()){
                    if(ni.OperationalStatus!=OperationalStatus.Up)continue;
                    foreach(GatewayIPAddressInformation gw in ni.GetIPProperties().GatewayAddresses){
                        if(gw.Address.AddressFamily!=AddressFamily.InterNetwork)continue;
                        using(var ping=new Ping()){
                            var r=ping.Send(gw.Address,1500);
                            Log("Gateway "+gw.Address+": "+(r.Status==IPStatus.Success?r.RoundtripTime+" ms":r.Status.ToString()));
                        }
                        return;
                    }
                }
            }catch(Exception ex){Log(ex.Message);}
        }
        void StartServer(){
            if(listening){Log("Servidor ya activo: http://127.0.0.1:45728/");return;}
            try{
                server=new TcpListener(IPAddress.Loopback,45728);
                server.Start(6);listening=true;
                serverLabel.Text="Servidor LOCAL ON · http://127.0.0.1:45728/ · solo este PC";
                serverThread=new Thread(ServerLoop){IsBackground=true};serverThread.Start();
                Log("Servidor local activado. Solo acepta conexiones desde 127.0.0.1. No actúa como proxy.");
            }catch(Exception e){listening=false;Log("Error iniciando servidor: "+e.Message);}
        }
        void StopServer(){
            listening=false;try{if(server!=null)server.Stop();}catch{}
            if(!IsDisposed && serverLabel!=null) serverLabel.Text="Servidor local: APAGADO";
            Log("Servidor local detenido, sin cambios en la navegación.");
        }
        void ServerLoop(){
            while(listening){
                try{TcpClient peer=server.AcceptTcpClient();
                    ThreadPool.QueueUserWorkItem(x=>Serve(peer));
                }catch(Exception){if(listening)Log("Conexión local fallida.");}
            }
        }
        void Serve(TcpClient client){
            using(client){
                try{
                    client.ReceiveTimeout=1500;client.SendTimeout=1500;
                    var stream=client.GetStream();
                    byte[] b=new byte[2048];
                    int n=stream.Read(b,0,b.Length);
                    string req=Encoding.ASCII.GetString(b,0,n);
                    string path=req.Split(' ')[1];
                    if(path!="/"&&path!="/status"){WriteHttp(stream,"404 Not Found","text/plain","No disponible");return;}
                    if(path=="/status"){
                        string json="{\"app\":\"SIM TURBO PC ULTRA V5\",\"local_server\":true,\"proxy\":false,\"timestamp\":\""+
                        DateTime.UtcNow.ToString("o")+"\"}";
                        WriteHttp(stream,"200 OK","application/json",json);return;
                    }
                    var html="<!doctype html><html lang='es'><meta charset='utf-8'><title>SIM TURBO V5</title>"+
                    "<style>body{background:#09101f;color:#eef7ff;font:18px Segoe UI;padding:40px;max-width:800px}"+
                    "h1{color:#19d8d2}code{color:#7fed99}</style><h1>SIM TURBO PC ULTRA · V5</h1>"+
                    "<p>Servidor de diagnóstico local activo: <code>127.0.0.1:45728</code></p>"+
                    "<p>No modifica Internet, no intercepta HTTPS y no aumenta los megas por sí mismo.</p>"+
                    "<p>Consulta <a href='/status'>/status</a> para el estado del servidor.</p></html>";
                    WriteHttp(stream,"200 OK","text/html; charset=utf-8",html);
                }catch(Exception){}
            }
        }
        static void WriteHttp(Stream s,string code,string type,string body){
            byte[] payload=Encoding.UTF8.GetBytes(body);
            byte[] headers=Encoding.ASCII.GetBytes("HTTP/1.1 "+code+"\r\nContent-Type: "+type+
                "\r\nContent-Length: "+payload.Length+"\r\nCache-Control: no-store\r\nConnection: close\r\nX-Content-Type-Options: nosniff\r\n\r\n");
            s.Write(headers,0,headers.Length);s.Write(payload,0,payload.Length);
        }
        protected override void OnFormClosed(FormClosedEventArgs e){StopServer();base.OnFormClosed(e);}
    }
}