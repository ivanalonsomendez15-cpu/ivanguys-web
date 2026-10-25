using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.IO;
using System.Linq;
using System.Management;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Windows.Forms;

namespace SimTurboPC {
    // V9 80-module research console. Every module explicitly reports its maturity.
    // The app neither claims unverified inventions nor bypasses system protection.
    public sealed class AetherResearchV9 : Form {
        const string Names=@"Wi-Fi Radar 3D|Channel Hunter|Band Genius|Antenna Analyzer|Cable Doctor|Router Health|Wi-Fi Interference Hunter|LAN Turbo Test|Driver Regression Detector|Smart Interface Selector|Triple Bonding|Adaptive Upload|SIM Speed Predictor|Dynamic Chunking|Mobile Battery Guard|Thermal Protection|Data Budget AI|AETHER Tunnel|Instant Failover|Multipath Benchmark|Ping Guardian|Jitter Killer Lab|Bufferbloat Detector|Smart Queue Advisor|Game Server Analyzer|Packet Loss Radar|Latency Timeline|Congestion Alarm|Smart DNS Benchmark|Route Stability Score|Download Accelerator 2.0|Upload Scheduler|Network Speed History|Download Resume|Smart CDN Selector|HTTP/3 Analyzer|Adaptive Connection Count|Background Download Manager|Cloud Sync Guardian|Speed Comparison Lab|GPU Bottleneck Detector|CPU Bottleneck Detector|Frame Time Analyzer|1% Low Monitor|Game Profiles|Thermal Throttling Detector|Background Process Advisor|FPS A/B Testing|Streaming Performance Mode|Automatic Restore|Master Autopilot|Automatic Regression Guard|Confidence Engine|Gaming Detector|Driver Update Watch|Safe Experiment Mode|Smart Restore Points|Connection Forecast|Automatic Performance Report|Custom Rules|Driver Signature Checker|Rollback Guardian|Permission Center|Data Privacy Dashboard|Trusted Network Detection|Mobile Pairing QR|Encrypted Device Channel|Automatic Data Limit|Local-Only Mode|Change Audit|AETHER Digital Twin|Predictive Multipath|Dynamic Rescue Mosaic|Latency-Aware Scheduling|Adaptive Error Recovery|Causal Performance Engine|Self-Tuning Network Models|Experimental Traffic Simulator|Performance Evolution Lab|AETHER Research Mode";
        // Tasks without a working backend are intentionally not called "implemented".
        const string Full="1,2,3,4,5,6,7,9,10,21,22,25,26,27,28,29,30,33,40,42,47,51,54,55,56,59,60,61,63,64,65,69,70,71,78,79,80";
        const string Partial="8,13,14,17,19,20,23,24,31,35,37,41,43,44,45,46,48,49,50,52,53,57,58,62,72,73,74,76,77";
        readonly string[] names=Names.Split('|');
        readonly HashSet<int> functional=new HashSet<int>(), partial=new HashSet<int>();
        readonly Color baseColor=Color.FromArgb(8,15,29),surface=Color.FromArgb(24,39,60),accent=Color.FromArgb(22,221,206);
        readonly TabControl tabs;
        ListView catalog;
        Label selectedTitle,selectedStatus;
        TextBox console, roomName, roomX,roomY,hostTarget,uploadValue,downloadValue;
        NumericUpDown wifiSim, simRate, overhead;
        Panel mapPanel;
        Label mapText;
        CheckBox autoNetwork,autoRouter,autoDrivers,localOnly;
        Button autoButton;
        System.Windows.Forms.Timer autoTimer=new System.Windows.Forms.Timer();
        bool pilot=false,working=false;
        int selected=1,cycles=0;
        double pingAlert=80;
        readonly List<RadarSample> samples=new List<RadarSample>();
        readonly string folder,radarPath,eventsPath,speedPath,experimentPath;
        const string Groups="A Wi-Fi/Ethernet|B Wi-Fi + SIM|C Ping y latencia|D Descargas/subidas|E FPS y juegos|F Autopiloto|G Seguridad|H Investigación";
        struct RadarSample {
            public string Room;public int X,Y,Signal;
            public RadarSample(string r,int x,int y,int v){Room=r;X=x;Y=y;Signal=v;}
        }
        public AetherResearchV9(){
            Font=new Font("Segoe UI",10);Text="SIM TURBO PC ULTRA V9 · AETHER RESEARCH LAB / 80 MÓDULOS";
            BackColor=baseColor;ForeColor=Color.White;ClientSize=new Size(1110,770);
            MinimumSize=new Size(1000,700);StartPosition=FormStartPosition.CenterParent;
            foreach(string x in Full.Split(','))functional.Add(int.Parse(x));
            foreach(string x in Partial.Split(','))partial.Add(int.Parse(x));
            folder=Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),"SimTurboPC","research_v9");
            Directory.CreateDirectory(folder);
            radarPath=Path.Combine(folder,"radar_samples.csv");
            eventsPath=Path.Combine(folder,"events.log");
            speedPath=Path.Combine(folder,"speed_history.csv");
            experimentPath=Path.Combine(folder,"experiment_log.csv");
            Label heading=new Label{Text="AETHER RESEARCH LAB · 80 MÓDULOS",Location=new Point(22,14),Size=new Size(1060,42),
                Font=new Font("Segoe UI",19,FontStyle.Bold),ForeColor=accent};Controls.Add(heading);
            Label expl=new Label{Text="36 herramientas funcionales o de diagnóstico · 29 prototipos parciales · 15 dependientes de infraestructura futura. Estado visible en cada módulo.",
                Location=new Point(24,61),Size=new Size(1040,27),ForeColor=Color.Gainsboro};Controls.Add(expl);
            tabs=new TabControl{Location=new Point(18,99),Size=new Size(1075,526),Anchor=AnchorStyles.Left|AnchorStyles.Right|AnchorStyles.Top|AnchorStyles.Bottom};
            Controls.Add(tabs);
            TabPage menu=Tab("80 MÓDULOS"),radar=Tab("RADAR 3D"),auto=Tab("PILOTO GLOBAL"),sim=Tab("SIMULADOR");
            BuildCatalog(menu);BuildRadar(radar);BuildAuto(auto);BuildSimulator(sim);
            Label label=new Label{Text="DIARIO DE PRUEBAS · solo resultados observados",Location=new Point(23,636),Size=new Size(1020,25),
                Anchor=AnchorStyles.Bottom|AnchorStyles.Left,ForeColor=accent,Font=new Font("Segoe UI",10,FontStyle.Bold)};
            Controls.Add(label);
            console=new TextBox{Location=new Point(22,666),Size=new Size(1065,78),Anchor=AnchorStyles.Left|AnchorStyles.Right|AnchorStyles.Bottom,
                Multiline=true,ReadOnly=true,ScrollBars=ScrollBars.Vertical,BackColor=surface,ForeColor=Color.White,
                Font=new Font("Consolas",9)};
            Controls.Add(console);
            ReadRadar();
            autoTimer.Interval=10000;autoTimer.Tick+=(s,e)=>AutoCycle();
            Log("V9 arranca sin cambiar Windows. El piloto y las pruebas de red requieren autorización.");
            Log("Datos de investigación guardados en: "+folder);
        }
        TabPage Tab(string name){var t=new TabPage(name){BackColor=baseColor,ForeColor=Color.White};tabs.TabPages.Add(t);return t;}
        Label Label(Control parent,string text,int x,int y,int width,int height,int size,bool heavy){
            var v=new Label{Text=text,Location=new Point(x,y),Size=new Size(width,height),ForeColor=heavy?accent:Color.White,
                Font=new Font("Segoe UI",size,heavy?FontStyle.Bold:FontStyle.Regular)};
            parent.Controls.Add(v);return v;
        }
        Button Button(Control parent,string text,int x,int y,int w,int h,Action clicked) {
            var b=new Button{Text=text,Location=new Point(x,y),Size=new Size(w,h),
                BackColor=Color.FromArgb(13,100,106),ForeColor=Color.White,
                Font=new Font("Segoe UI",9,FontStyle.Bold),FlatStyle=FlatStyle.Flat};
            b.FlatAppearance.BorderSize=0;
            b.Click+=(s,e)=>{try{clicked();}catch(Exception ex){Log("Error: "+ex.Message);}};
            parent.Controls.Add(b);return b;
        }
        TextBox Input(Control parent,string text,int x,int y,int width){
            TextBox t=new TextBox{Text=text,Location=new Point(x,y),Size=new Size(width,28),
                BackColor=surface,ForeColor=Color.White};
            parent.Controls.Add(t);return t;
        }
        void BuildCatalog(TabPage tab){
            catalog=new ListView{Location=new Point(12,14),Size=new Size(516,456),Anchor=AnchorStyles.Left|AnchorStyles.Top|AnchorStyles.Bottom,
                BackColor=surface,ForeColor=Color.White,FullRowSelect=true,HideSelection=false,
                View=View.Details,MultiSelect=false};
            catalog.Columns.Add("#",45);catalog.Columns.Add("MÓDULO",296);catalog.Columns.Add("ESTADO",162);
            for(int i=1;i<=80;i++){
                string phase=Status(i);
                var row=new ListViewItem(i.ToString("00"));
                row.SubItems.Add(names[i-1]);row.SubItems.Add(phase);
                row.Tag=i;
                if(functional.Contains(i))row.ForeColor=Color.FromArgb(114,244,195);
                else if(partial.Contains(i))row.ForeColor=Color.FromArgb(255,220,153);
                catalog.Items.Add(row);
            }
            catalog.SelectedIndexChanged+=(s,e)=>{if(catalog.SelectedItems.Count>0){
                selected=(int)catalog.SelectedItems[0].Tag;
                selectedTitle.Text=selected.ToString("00")+" · "+names[selected-1];
                selectedStatus.Text=Status(selected)+"\n"+Explanation(selected);
            }};
            tab.Controls.Add(catalog);
            selectedTitle=Label(tab,"01 · Wi-Fi Radar 3D",546,29,510,62,15,true);
            selectedStatus=Label(tab,Status(1)+"\n"+Explanation(1),547,107,495,223,10,false);
            Button(tab,"EJECUTAR / VER MÓDULO",547,335,500,54,()=>Execute(selected));
            Button(tab,"ABRIR CARPETA DE INFORMES",547,399,240,49,()=>OpenPath(folder));
            Button(tab,"CREAR INFORME COMPLETO",799,399,248,49,()=>ExportReport());
            catalog.Items[0].Selected=true;
        }
        string Status(int id){
            return functional.Contains(id)?"FUNCIONAL / DIAGNÓSTICO":
                partial.Contains(id)?"PARCIAL / PROTOTIPO":"PENDIENTE / REQUIERE INFRAESTRUCTURA";
        }
        string Explanation(int id) {
            if(id==1)return "Mapa 3D aproximado a partir de puntos registrados manualmente. No es un escáner espacial automático.";
            if(id==8)return "La prueba entre dos equipos necesita un receptor instalado en otro dispositivo. Esta versión muestra el requisito, no un test LAN completo.";
            if(id==11)return "Necesita una tercera conexión independiente y servicio de agregación remoto.";
            if(id==12)return "Subida distribuida real requiere servidor remoto y cliente Android adicional.";
            if(id==15||id==16)return "El móvil debe transmitir datos de batería y temperatura con permisos adecuados; la APK actual no los transmite.";
            if(id==17||id==68)return "Necesita un contador de tráfico SIM persistente y una barrera en el servicio Android; aún no impide consumos.";
            if(id==18)return "El túnel seguro de sistema completo requiere un servidor remoto y mecanismos de VPN, en fase de diseño.";
            if(id==33||id==40)return "Prueba de descarga controlada con registro histórico local. La subida se realiza separadamente desde PulseRoute V7.";
            if(id==41||id==43||id==44)return "Métricas de FPS y uso GPU necesitan telemetría de fotogramas/GPU compatible. No se inventan resultados.";
            if(id==66||id==67)return "Emparejamiento QR y cifrado end-to-end requieren actualizar y autenticar ambos extremos PC/Android.";
            if(id==71)return "Modelo de escenarios hipotéticos: no transmite tráfico ni predice Mbps garantizados.";
            if(id==69)return "En modo local se bloquean las pruebas activas externas de este laboratorio; no bloquea otras apps de Windows.";
            if(functional.Contains(id))return "Herramienta ejecutable de diagnóstico, lectura de Windows o experimento controlado. Puede requerir permisos para ciertos datos.";
            if(partial.Contains(id))return "Hay mecanismos relacionados o una evaluación experimental, pero no cumple aún todo el objetivo descrito.";
            return "Aún no existe un motor completo para esta función. Se indica la dependencia; no se aplica una optimización ficticia.";
        }
        void Execute(int id){
            if(!functional.Contains(id)&&!partial.Contains(id)){
                MessageBox.Show("Módulo "+id+": "+names[id-1]+
                    "\n\nNo está implementado. "+Explanation(id)+
                    "\n\nNo voy a simular una mejora inexistente.","Estado real V9",MessageBoxButtons.OK,MessageBoxIcon.Information);return;
            }
            switch(id){
                case 1:tabs.SelectedIndex=1;break;
                case 2:case 7:Threaded(()=>NearbyNetworks(id==7));break;
                case 3:Threaded(BandAdvisor);break;
                case 4:Threaded(()=>SafeNetsh("wlan show drivers"));break;
                case 5:Threaded(CableDoctor);break;
                case 6:Threaded(RouterCheck);break;
                case 8:Log("LAN Test: requiere app/receptor de medición en otro equipo; no preparado en esta build.");break;
                case 9:Threaded(DriverSnapshot);break;
                case 10:Threaded(InterfaceAdvisor);break;
                case 13:case 14:case 17:case 19:case 20:case 31:Log("Ruta SIM: abre AETHER-LINK V8 desde el panel principal. "+Explanation(id));break;
                case 21:case 22:case 26:case 27:case 28:case 30:Threaded(PingTimeline);break;
                case 23:case 24:Log("Bufferbloat: mide ping sin carga y durante carga de la red, y revisa SQM en tu router. La V9 todavía no controla el router.");break;
                case 25:Threaded(PingUserHost);break;
                case 29:Threaded(DnsBenchmark);break;
                case 33:case 40:BenchConsent();break;
                case 35:Log("CDN: aún no hay descubrimiento automático de espejos autorizados. Usa archivos oficiales.");break;
                case 41:case 42:case 46:Threaded(HardwareProfile);break;
                case 43:case 44:Log("Frame times/1% lows: usa Xbox Game Bar o captura externa; V9 no lee fotogramas de otras aplicaciones.");break;
                case 45:case 50:case 51:case 54:new AetherAutopilotV8().ShowDialog(this);break;
                case 47:Threaded(ProcessesTop);break;
                case 48:case 52:case 53:case 56:case 76:ExperimentMarker(id);break;
                case 49:Open("taskmgr.exe","");break;
                case 55:Open("ms-settings:windowsupdate","");break;
                case 57:Log("Los cambios reversibles se gestionan en el piloto V8 y PulseRoute V7; no hay copia integral del sistema.");break;
                case 58:Log("La predicción necesita muestras guardadas y validación; el detector actual avisa cuando hay picos.");break;
                case 59:case 70:case 79:case 80:ExportReport();break;
                case 60:ConfigureRule();break;
                case 61:Threaded(SignedDrivers);break;
                case 62:Open("devmgmt.msc","");break;
                case 63:PermissionInfo();break;
                case 64:OpenPath(folder);Log("Datos locales guardados: CSV de radar, velocidad, experimentos e historial de auditoría.");break;
                case 65:Threaded(()=>SafeNetsh("wlan show interfaces"));break;
                case 69:localOnly.Checked=true;Log("Local-only ON para este laboratorio. Sin pruebas DNS externas ni descarga externa.");break;
                case 71:case 72:case 73:case 74:case 78:tabs.SelectedIndex=3;break;
                default:
                    MessageBox.Show(names[id-1]+"\n\n"+Explanation(id)+
                        "\n\nAún no hay una función autónoma completa para ejecutarla.","Prototipo V9");break;
            }
        }
        void Threaded(Action task){
            if(working){Log("Hay otra prueba ejecutándose.");return;}
            working=true;
            ThreadPool.QueueUserWorkItem(o=>{try{task();}catch(Exception ex){Log("Prueba cancelada: "+ex.Message);}
                finally{working=false;}});
        }
        void Log(string entry){
            if(IsDisposed||!IsHandleCreated)return;
            if(InvokeRequired){try{BeginInvoke((Action)(()=>Log(entry)));}catch{}return;}
            string text=DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")+" · "+entry;
            if(console!=null) console.AppendText(text+Environment.NewLine);
            try{File.AppendAllText(eventsPath,text+Environment.NewLine,Encoding.UTF8);}catch{}
        }
        static bool Physical(NetworkInterface n){
            if(n.OperationalStatus!=OperationalStatus.Up)return false;
            var t=n.NetworkInterfaceType;
            if(t!=NetworkInterfaceType.Wireless80211&&t!=NetworkInterfaceType.Ethernet&&
                t!=NetworkInterfaceType.FastEthernetT&&t!=NetworkInterfaceType.GigabitEthernet&&
                t!=NetworkInterfaceType.FastEthernetFx)return false;
            var s=(n.Name+" "+n.Description).ToLowerInvariant();
            return !(s.Contains("virtual")||s.Contains("tap")||s.Contains("vpn")||s.Contains("hyper-v"));
        }
        static string RunCmd(string exe,string args,int timeout=7000){
            using(var p=new Process()){
                p.StartInfo=new ProcessStartInfo(exe,args){CreateNoWindow=true,
                    UseShellExecute=false,RedirectStandardOutput=true,
                    RedirectStandardError=true};
                p.Start();
                string stdout=p.StandardOutput.ReadToEnd();
                if(!p.WaitForExit(timeout)){try{p.Kill();}catch{}throw new IOException("Tiempo de comando excedido");}
                if(p.ExitCode!=0)throw new IOException("Comando "+exe+" devolvió "+p.ExitCode);
                return stdout;
            }
        }
        void SafeNetsh(string command){
            string result=RunCmd("netsh.exe",command);
            Log("Salida de netsh "+command+":");
            foreach(var line in result.Split(new[]{'\r','\n'},StringSplitOptions.RemoveEmptyEntries).Take(24))Log(line.Trim());
        }
        static int WifiPercent(){
            try{
                string result=RunCmd("netsh.exe","wlan show interfaces");
                var m=Regex.Match(result,@"(?im)^\s*(Signal|Señal)\s*:\s*(\d+)\s*%");
                if(m.Success)return int.Parse(m.Groups[2].Value);
            }catch{}
            return -1;
        }
        void NearbyNetworks(bool snapshot){
            string raw=RunCmd("netsh.exe","wlan show networks mode=bssid",11000);
            string[] lines=raw.Split(new[]{'\n'},StringSplitOptions.RemoveEmptyEntries);
            var channels=new Dictionary<int,int>();
            foreach(string line in lines){
                Match m=Regex.Match(line,@"(?im)^\s*(Canal|Channel)\s*:\s*(\d+)\s*$");
                if(m.Success){
                    int number=int.Parse(m.Groups[2].Value);
                    if(!channels.ContainsKey(number))channels[number]=0;
                    channels[number]++;
                }
            }
            if(channels.Count==0){Log("Channel Hunter: no se pudieron identificar canales (idioma de Windows o controlador).");return;}
            Log("Canales observados: "+string.Join(", ",channels.OrderBy(x=>x.Key).Select(x=>x.Key+" ("+x.Value+" BSSID)").ToArray()));
            int recommended=new[]{1,6,11}.OrderBy(x=>channels.ContainsKey(x)?channels[x]:0).First();
            Log("Para 2,4 GHz, canal candidato con menos BSSID detectados: "+recommended+". No equivale a medir interferencias o potencia.");
            if(snapshot)Log("Interference Hunter: instantánea de canales registrada; para localizar interferencia real hacen falta más medidas en el tiempo.");
        }
        void BandAdvisor(){
            string raw=RunCmd("netsh.exe","wlan show drivers",9500);
            Log("Band Genius: capacidades extraídas de Windows (no todas las tarjetas admiten 6 GHz).");
            foreach(var line in raw.Split('\n').Where(x=>
                x.IndexOf("802.11",StringComparison.OrdinalIgnoreCase)>=0 ||
                x.IndexOf("6 GHz",StringComparison.OrdinalIgnoreCase)>=0).Take(8))
                Log(line.Trim());
            Log("2,4 GHz suele tener mayor alcance; 5 GHz suele ofrecer menos congestión; 6 GHz exige router y adaptador compatibles.");
        }
        void CableDoctor(){
            foreach(var n in NetworkInterface.GetAllNetworkInterfaces().Where(Physical)){
                var t=n.NetworkInterfaceType==NetworkInterfaceType.Wireless80211?"WIFI":"ETHERNET";
                double mbps=n.Speed/1000000.0;
                Log(t+" "+n.Name+" · enlace "+mbps.ToString("0")+" Mb/s (NO Internet)");
                if(t=="ETHERNET"&&mbps<=100)
                    Log("CABLE DOCTOR: enlace de 100 Mb/s o menos. Revisar categoría de cable, puerto y negociación; no cambiar registros a ciegas.");
                if(t=="WIFI"&&mbps<25)
                    Log("Wi-Fi lento en enlace: revisar señal, radio, distancia, saturación y controlador.");
            }
        }
        static IPAddress Router(){
            foreach(var n in NetworkInterface.GetAllNetworkInterfaces().Where(Physical)){
                foreach(var g in n.GetIPProperties().GatewayAddresses){
                    if(g.Address.AddressFamily==AddressFamily.InterNetwork)return g.Address;
                }
            }
            return null;
        }
        void RouterCheck(){
            IPAddress gw=Router();if(gw==null){Log("Router: no se identificó puerta de enlace IPv4.");return;}
            int lost=0;var times=new List<long>();
            for(int i=0;i<8;i++){
                using(var p=new Ping()){
                    try{var r=p.Send(gw,1200);if(r.Status==IPStatus.Success)times.Add(r.RoundtripTime);else lost++;}
                    catch{lost++;}
                }
            }
            Log("Router "+gw+": ping medio "+(times.Count>0?times.Average().ToString("0.0")+" ms":"sin respuesta")+
                "; respuestas perdidas "+lost+"/8. Puede bloquearse ICMP.");
        }
        void DriverSnapshot(){
            var lines=new List<string>();
            using(var finder=new ManagementObjectSearcher("SELECT DeviceName, DriverVersion, DriverDate FROM Win32_PnPSignedDriver")){
                foreach(ManagementObject obj in finder.Get()){
                    string name=Convert.ToString(obj["DeviceName"]);
                    if(name.IndexOf("Wi-Fi",StringComparison.OrdinalIgnoreCase)>=0 ||
                       name.IndexOf("Wireless",StringComparison.OrdinalIgnoreCase)>=0 ||
                       name.IndexOf("Ethernet",StringComparison.OrdinalIgnoreCase)>=0 ||
                       name.IndexOf("Realtek",StringComparison.OrdinalIgnoreCase)>=0)
                        lines.Add(name+"|"+Convert.ToString(obj["DriverVersion"])+"|"+Convert.ToString(obj["DriverDate"]));
                }
            }
            string path=Path.Combine(folder,"driver_network_snapshot.txt");
            if(File.Exists(path)){
                var prev=File.ReadAllLines(path);
                foreach(var change in lines.Except(prev).Take(10))Log("CONTROLADOR nuevo/cambiado: "+change);
                if(lines.SequenceEqual(prev))Log("Regresión: no han cambiado los controladores observados desde la última instantánea.");
                Log("Una diferencia de versión NO demuestra pérdida de rendimiento; compara medidas.");
            }
            File.WriteAllLines(path,lines);
            Log("Versiones de controladores de red guardadas ("+lines.Count+").");
        }
        void InterfaceAdvisor(){
            var list=NetworkInterface.GetAllNetworkInterfaces().Where(Physical).ToArray();
            foreach(var n in list){
                bool gateway=n.GetIPProperties().GatewayAddresses.Any(x=>x.Address.AddressFamily==AddressFamily.InterNetwork);
                Log(n.Name+" · "+n.NetworkInterfaceType+" · enlace "+(n.Speed/1e6).ToString("0")+
                    " Mb/s · ruta por defecto "+(gateway?"sí":"no"));
            }
            Log("Selector: es una RECOMENDACIÓN, no cambia la ruta por defecto: enlace local alto NO implica Internet más rápido.");
        }
        static string CleanHost(string host){
            host=host.Trim();
            if(host.Length<1||host.Length>180||!Regex.IsMatch(host,@"^[a-zA-Z0-9.:-]+$"))
                throw new ArgumentException("Host no válido");
            return host;
        }
        void PingUserHost(){
            string host=CleanHost(ReadInput(hostTarget));
            PingTimelineHost(host);
        }
        string ReadInput(TextBox box){
            if(InvokeRequired)return (string)Invoke(new Func<string>(()=>box.Text));
            return box.Text;
        }
        void PingTimeline(){PingTimelineHost("1.1.1.1");}
        void PingTimelineHost(string host){
            int lost=0;var times=new List<long>();
            var rows=new List<string>();
            for(int i=0;i<12;i++){
                long time=-1;
                try{using(var p=new Ping()){
                    var r=p.Send(host,950);
                    if(r.Status==IPStatus.Success){time=r.RoundtripTime;times.Add(time);}else lost++;
                }}catch{lost++;}
                rows.Add(DateTime.Now.ToString("o")+","+host+","+(time<0?"TIMEOUT":time.ToString()));
                if(i<11)Thread.Sleep(100);
            }
            File.AppendAllLines(Path.Combine(folder,"ping_timeline.csv"),rows,Encoding.UTF8);
            if(times.Count==0){Log("No hay respuestas ICMP de "+host+". Podría estar bloqueado; no implica que Internet haya caído.");return;}
            double jitter=0;
            for(int i=1;i<times.Count;i++)jitter+=Math.Abs(times[i]-times[i-1]);
            jitter=times.Count>1?jitter/(times.Count-1):0;
            double mean=times.Average(),max=times.Max();
            Log("Ping "+host+": "+mean.ToString("0.0")+" ms · jitter "+jitter.ToString("0.0")+
                " ms · máximo "+max+" ms · pérdida ICMP "+lost+"/12");
            if(max>pingAlert)Log("ALERTA: máximo superior al umbral de "+pingAlert+" ms configurado.");
        }
        static byte[] MakeQuery(string hostname){
            var random=new Random();
            int id=random.Next(1,65000);
            var b=new List<byte>{(byte)(id>>8),(byte)id,1,0,0,1,0,0,0,0,0,0};
            foreach(string part in hostname.Split('.')){
                byte[] label=Encoding.ASCII.GetBytes(part);
                b.Add((byte)label.Length);b.AddRange(label);
            }
            b.AddRange(new byte[]{0,0,1,0,1});
            return b.ToArray();
        }
        void DnsBenchmark(){
            if(LocalChecked()){Log("Local-only ON: no se consultan resolutores DNS externos.");return;}
            foreach(string address in new[]{"1.1.1.1","8.8.8.8","9.9.9.9"}){
                try{
                    using(var socket=new UdpClient()){
                        socket.Client.ReceiveTimeout=2000;socket.Connect(address,53);
                        byte[] packet=MakeQuery("example.com");
                        Stopwatch watch=Stopwatch.StartNew();
                        socket.Send(packet,packet.Length);
                        IPEndPoint ep=new IPEndPoint(IPAddress.Any,0);
                        byte[] answer=socket.Receive(ref ep);
                        watch.Stop();
                        if(answer.Length>=12&&answer[0]==packet[0]&&answer[1]==packet[1])
                            Log("DNS "+address+": "+watch.ElapsedMilliseconds+" ms · paquete validado por ID");
                        else Log("DNS "+address+": respuesta no válida");
                    }
                }catch(Exception e){Log("DNS "+address+": no disponible ("+e.Message+")");}
            }
            Log("La latencia DNS solo afecta resolución de nombres, NO multiplica la velocidad de descarga.");
        }
        void SignedDrivers(){
            int yes=0,no=0;
            using(var finder=new ManagementObjectSearcher("SELECT DeviceName, IsSigned FROM Win32_PnPSignedDriver")){
                foreach(ManagementObject row in finder.Get()){
                    if(row["IsSigned"]==null)continue;
                    if(Convert.ToBoolean(row["IsSigned"]))yes++;
                    else {no++;if(no<=6)Log("Sin firma reportada: "+Convert.ToString(row["DeviceName"]));}
                }
            }
            Log("Firma de drivers Windows: "+yes+" firmados y "+no+" sin firma reportada. No instala ni elimina nada.");
        }
        void HardwareProfile(){
            using(var search=new ManagementObjectSearcher("SELECT Name, NumberOfLogicalProcessors FROM Win32_Processor"))
                foreach(ManagementObject row in search.Get())Log("CPU: "+row["Name"]+" · hilos "+row["NumberOfLogicalProcessors"]);
            using(var search=new ManagementObjectSearcher("SELECT Name, DriverVersion FROM Win32_VideoController"))
                foreach(ManagementObject row in search.Get())Log("GPU: "+row["Name"]+" · driver "+row["DriverVersion"]);
            Log("No hay lectura de FPS en este módulo; no se puede concluir cuello de botella solo con modelos de hardware.");
        }
        void ProcessesTop(){
            var data=Process.GetProcesses().Select(p=>{
                try{return new{ Name=p.ProcessName,Bytes=p.WorkingSet64};}
                catch{return new{Name="sin acceso",Bytes=0L};}
            }).OrderByDescending(x=>x.Bytes).Take(10);
            foreach(var p in data)Log(p.Name+" · RAM "+(p.Bytes/1048576)+" MiB");
        }
        void PermissionInfo(){
            MessageBox.Show("PERMISOS V9:\n\n- Radar / diagnóstico: lee adaptadores y ejecuta netsh.\n"+
                "- Ping y DNS: envía paquetes a destinos explícitos.\n"+
                "- Benchmark: descarga 4 MB del servicio Cloudflare con tu autorización.\n"+
                "- Drivers: solo consulta firmas/versiones y abre Windows Update.\n"+
                "- Autopiloto: no toca ajustes TCP, proxy, antivirus ni router.\n"+
                "- Game Mode: se gestiona en el autopiloto V8 con consentimiento.\n"+
                "- Investigación: guarda CSV y logs en la carpeta de usuario.\n"+
                "- SIM: solo se usa al abrir una descarga V8 y autorizarla.\n\n"+
                "No hay ningún multiplicador secreto de megas.","Centro de permisos",MessageBoxButtons.OK);
        }
        void OpenPath(string path){
            try{Process.Start(new ProcessStartInfo(path){UseShellExecute=true});}
            catch(Exception e){Log("No se pudo abrir: "+e.Message);}
        }
        void Open(string executable,string args){
            try{Process.Start(new ProcessStartInfo(executable,args){UseShellExecute=true});}
            catch(Exception e){Log("No se pudo abrir: "+e.Message);}
        }
        void ExperimentMarker(int id){
            string row=DateTime.Now.ToString("o")+","+id+",\""+names[id-1].Replace("\"","")+ "\",\"marcador experimental (sin resultados verificados)\"";
            File.AppendAllText(experimentPath,row+Environment.NewLine);
            Log("Experimento registrado: "+names[id-1]+". Aún no es una prueba A/B controlada.");
        }
        void ExportReport(){
            string file=Path.Combine(folder,"INFORME_V9_"+DateTime.Now.ToString("yyyyMMdd_HHmmss")+".txt");
            var sb=new StringBuilder();
            sb.AppendLine("SIM TURBO PC ULTRA V9 · AETHER RESEARCH LAB");
            sb.AppendLine("Fecha UTC: "+DateTime.UtcNow.ToString("o"));
            sb.AppendLine("Cifras de velocidad reales solo si se registraron mediante benchmark.");
            for(int id=1;id<=80;id++)sb.AppendLine(id+". "+names[id-1]+" — "+Status(id));
            sb.AppendLine("\nREGISTRO:\n");
            if(File.Exists(eventsPath))foreach(string s in File.ReadAllLines(eventsPath).Reverse().Take(100).Reverse())sb.AppendLine(s);
            File.WriteAllText(file,sb.ToString(),Encoding.UTF8);
            Log("Informe generado: "+file);
        }
        void ConfigureRule(){
            string value=ReadInput(hostTarget);
            int ms;
            if(!int.TryParse(value,out ms) || ms<10 || ms>1000){
                Log("Regla: escribe un umbral en ms (10 a 1000) en el campo Servidor/Umbral. Actual: "+pingAlert+" ms.");
                return;
            }
            pingAlert=ms;Log("Regla de alerta de ping: "+pingAlert+" ms. El piloto registrará picos.");
        }
        void BenchConsent(){
            if(LocalChecked()){Log("Local-only ON: no se harán descargas externas.");return;}
            if(MessageBox.Show("Descargar 4 MB de Cloudflare para una medición de bajada y guardarla en CSV?\n\n"+
                "No mide subida, ni asegura que esté usando la SIM. Podría consumir datos móviles según la ruta.",
                "AUTORIZAR PRUEBA DE DESCARGA",MessageBoxButtons.YesNo,MessageBoxIcon.Question)!=DialogResult.Yes)return;
            Threaded(Benchmark);
        }
        void Benchmark(){
            ServicePointManager.SecurityProtocol|=(SecurityProtocolType)3072;
            string url="https://speed.cloudflare.com/__down?bytes=4000000";
            var r=(HttpWebRequest)WebRequest.Create(url);
            r.Timeout=15000;r.ReadWriteTimeout=15000;r.AllowAutoRedirect=false;
            Stopwatch sw=Stopwatch.StartNew();
            long bytes=0;
            using(var res=(HttpWebResponse)r.GetResponse()){
                if(res.StatusCode!=HttpStatusCode.OK)throw new IOException("HTTP "+res.StatusCode);
                using(var stream=res.GetResponseStream()){
                    byte[] buffer=new byte[32768];int n;
                    while((n=stream.Read(buffer,0,buffer.Length))>0){
                        bytes+=n;if(bytes>4000000)throw new IOException("Servidor devolvió datos adicionales");
                    }
                }
            }
            sw.Stop();
            if(bytes!=4000000)throw new IOException("Benchmark incompleto: "+bytes+" bytes");
            double mbps=bytes*8.0/1000000.0/Math.Max(0.001,sw.Elapsed.TotalSeconds);
            File.AppendAllText(speedPath,DateTime.Now.ToString("o")+","+mbps.ToString("0.000",System.Globalization.CultureInfo.InvariantCulture)+Environment.NewLine);
            Log("DESCARGA REAL: "+mbps.ToString("0.0")+" Mb/s · duración "+sw.Elapsed.TotalSeconds.ToString("0.00")+" s");
            if(File.Exists(speedPath)){
                var values=new List<double>();
                foreach(string line in File.ReadAllLines(speedPath).Take(1000)){
                    var parts=line.Split(',');
                    double speed;
                    if(parts.Length>=2 && double.TryParse(parts[1],System.Globalization.NumberStyles.Float,
                        System.Globalization.CultureInfo.InvariantCulture,out speed))values.Add(speed);
                }
                if(values.Count>=2)Log("HISTORIAL: "+values.Count+" muestras · media "+
                    values.Average().ToString("0.0")+" Mb/s · rango "+values.Min().ToString("0.0")+
                    "–"+values.Max().ToString("0.0")+" Mb/s");
            }
        }
        bool LocalChecked(){
            if(InvokeRequired)return (bool)Invoke(new Func<bool>(()=>localOnly.Checked));
            return localOnly.Checked;
        }
        void BuildRadar(TabPage tab){
            Label(tab,"RADAR 3D · REGISTRO REAL POR ESTANCIAS",20,17,1000,33,15,true);
            Label(tab,"Introduce el nombre de una habitación y su posición aproximada X/Y (0–9). Mide allí la señal.",
                21,58,1000,45,10,false);
            roomName=Input(tab,"Salón",22,109,204);
            roomX=Input(tab,"2",236,109,60);roomY=Input(tab,"2",308,109,60);
            Button(tab,"MEDIR SEÑAL Y AÑADIR PUNTO",385,105,300,42,()=>CaptureRadar());
            Button(tab,"BORRAR PUNTOS",699,105,191,42,()=>ClearRadar());
            mapPanel=new Panel{Location=new Point(20,166),Size=new Size(910,283),BackColor=surface};
            mapPanel.Paint+=(s,e)=>DrawRadar(e.Graphics,mapPanel.ClientRectangle);
            tab.Controls.Add(mapPanel);
            mapText=Label(tab,"Aún no hay muestras. Una medición no escanea toda la vivienda.",20,457,950,30,10,false);
        }
        void CaptureRadar(){
            int x,y;
            if(!int.TryParse(roomX.Text,out x)||!int.TryParse(roomY.Text,out y)||x<0||x>9||y<0||y>9){
                MessageBox.Show("Coordenadas X/Y: números de 0 a 9.");return;
            }
            string name=roomName.Text.Trim().Replace(",","").Replace("\r","").Replace("\n","");
            if(name.Length==0||name.Length>32){MessageBox.Show("Indica un nombre de estancia de 1 a 32 caracteres.");return;}
            int strength=WifiPercent();
            if(strength<0){MessageBox.Show("No puedo leer la señal Wi-Fi de Windows. Necesitas estar conectado por Wi-Fi para añadir una muestra.");return;}
            samples.Add(new RadarSample(name,x,y,strength));
            WriteRadar();
            mapPanel.Invalidate();
            mapText.Text=samples.Count+" puntos reales recogidos. Altura de cada barra = señal estimada por Windows.";
            Log("Radar 3D: "+name+"("+x+","+y+") · "+strength+"%.");
        }
        void ReadRadar(){
            if(!File.Exists(radarPath))return;
            foreach(string line in File.ReadAllLines(radarPath)){
                string[] p=line.Split(',');
                int x,y,v;
                if(p.Length==4&&int.TryParse(p[1],out x)&&int.TryParse(p[2],out y)&&int.TryParse(p[3],out v))
                    samples.Add(new RadarSample(p[0],x,y,v));
            }
            if(mapPanel!=null){mapPanel.Invalidate();mapText.Text=samples.Count+" muestras guardadas; coloca el PC en cada posición para medir.";}
        }
        void WriteRadar(){
            File.WriteAllLines(radarPath,samples.Select(x=>x.Room+","+x.X+","+x.Y+","+x.Signal).ToArray(),Encoding.UTF8);
        }
        void ClearRadar(){
            if(MessageBox.Show("¿Borrar las muestras del mapa?","Radar",MessageBoxButtons.YesNo)!=DialogResult.Yes)return;
            samples.Clear();WriteRadar();mapPanel.Invalidate();mapText.Text="Sin muestras.";
        }
        void DrawRadar(Graphics g,Rectangle rect){
            g.SmoothingMode=SmoothingMode.AntiAlias;
            g.Clear(surface);
            int originX=rect.Width/2,originY=rect.Height-36;
            Func<int,int,PointF> projection=(x,y)=>new PointF(originX+(x-y)*26,originY-(x+y)*12);
            using(var pen=new Pen(Color.FromArgb(60,133,157),1)){
                for(int i=0;i<=9;i++){
                    PointF a=projection(i,0),b=projection(i,9),c=projection(0,i),d=projection(9,i);
                    g.DrawLine(pen,a,b);g.DrawLine(pen,c,d);
                }
            }
            foreach(var x in samples.OrderBy(x=>x.X+x.Y)){
                PointF basePoint=projection(x.X,x.Y);
                int h=(int)(x.Signal*1.35);
                var top=new PointF(basePoint.X,basePoint.Y-h);
                Color fill=x.Signal>=75?Color.FromArgb(40,213,146):
                    x.Signal>=45?Color.FromArgb(242,194,72):Color.FromArgb(235,93,99);
                using(var brush=new SolidBrush(fill))
                using(var front=new SolidBrush(Color.FromArgb(130,fill))){
                    PointF[] face={new PointF(basePoint.X-9,basePoint.Y),
                        new PointF(basePoint.X+3,basePoint.Y+5),
                        new PointF(top.X+3,top.Y+5),
                        new PointF(top.X-9,top.Y)};
                    g.FillPolygon(front,face);
                    g.FillEllipse(brush,top.X-8,top.Y-5,16,10);
                    g.DrawString(x.Room+" "+x.Signal+"%",new Font("Segoe UI",8),Brushes.White,top.X+10,top.Y-11);
                }
            }
            if(samples.Count==0)g.DrawString("Sin muestras • añade un punto junto al PC",new Font("Segoe UI",13),
                Brushes.LightGray,22,45);
        }
        void BuildAuto(TabPage tab){
            Label(tab,"PILOTO GLOBAL V9 · RED / ROUTER / CONTROLADORES",20,20,1000,42,15,true);
            Label(tab,"Supervisión continua cada 10 s mientras esta ventana permanezca abierta. No cambia el router.",
                22,65,1000,41,10,false);
            autoNetwork=new CheckBox{Text="Monitorizar latencia, jitter, pérdida ICMP y tráfico",Checked=true,
                Location=new Point(26,123),Size=new Size(750,31),ForeColor=Color.White};tab.Controls.Add(autoNetwork);
            autoRouter=new CheckBox{Text="Comprobar estabilidad de router local",Checked=true,
                Location=new Point(26,166),Size=new Size(750,31),ForeColor=Color.White};tab.Controls.Add(autoRouter);
            autoDrivers=new CheckBox{Text="Registrar cambios de controladores de red",Checked=false,
                Location=new Point(26,208),Size=new Size(750,31),ForeColor=Color.White};tab.Controls.Add(autoDrivers);
            localOnly=new CheckBox{Text="MODO SOLO LOCAL: bloquear pruebas externas en este laboratorio",Checked=false,
                Location=new Point(26,252),Size=new Size(910,31),ForeColor=Color.White};tab.Controls.Add(localOnly);
            autoButton=Button(tab,"ENCENDER PILOTO V9",27,318,420,62,()=>ToggleAutopilot());
            Button(tab,"ANALIZAR UNA VEZ",467,318,440,62,()=>AutoCycle());
            Button(tab,"PILOTO DE FPS V8",27,392,420,54,()=>new AetherAutopilotV8().ShowDialog(this));
            Button(tab,"CONFIGURAR PING (campo servidor)",467,392,440,54,()=>ConfigureRule());
            Label(tab,"El piloto V9 es de diagnóstico. Las optimizaciones FPS permanecen en su piloto V8 reversible.",
                27,461,965,45,10,false);
        }
        void ToggleAutopilot(){
            if(pilot){pilot=false;autoTimer.Stop();autoButton.Text="ENCENDER PILOTO V9";Log("Piloto V9 detenido.");return;}
            if(MessageBox.Show("¿Autorizar comprobaciones de red cada 10 segundos mientras esté abierta V9?\n"+
                "ICMP y lecturas de Windows. No instala drivers ni altera TCP, proxy o firewall.",
                "AUTORIZAR PILOTO",MessageBoxButtons.YesNo,MessageBoxIcon.Question)!=DialogResult.Yes)return;
            pilot=true;autoTimer.Start();autoButton.Text="APAGAR PILOTO V9";
            Log("Piloto V9 iniciado. Las alertas son orientativas, no cambios automáticos.");
            AutoCycle();
        }
        void AutoCycle(){
            if(working)return;
            cycles++;
            if(autoNetwork.Checked){
                if(localOnly.Checked)Threaded(RouterCheck);
                else Threaded(PingTimeline);
            }else if(autoRouter.Checked)Threaded(RouterCheck);
            if(autoDrivers.Checked && cycles%30==0)Log("Piloto: consulta DRIVER REGRESSION DETECTOR para comparar controladores.");
        }
        void BuildSimulator(TabPage tab){
            Label(tab,"AETHER DIGITAL TWIN · SIMULADOR DE CAPACIDAD",20,21,1000,42,16,true);
            Label(tab,"Simulación hipotética OFFLINE, no implica velocidad realmente alcanzable.",22,67,970,45,11,false);
            Label(tab,"Wi-Fi / Ethernet (Mb/s)",24,125,370,28,11,true);
            wifiSim=new NumericUpDown{Minimum=0,Maximum=2000,Value=40,
                Location=new Point(400,125),Size=new Size(160,29)};
            tab.Controls.Add(wifiSim);
            Label(tab,"Datos móviles SIM (Mb/s)",24,182,370,28,11,true);
            simRate=new NumericUpDown{Minimum=0,Maximum=2000,Value=30,Location=new Point(400,182),Size=new Size(160,29)};
            tab.Controls.Add(simRate);
            Label(tab,"Sobrecarga estimada (%)",24,239,370,28,11,true);
            overhead=new NumericUpDown{Minimum=0,Maximum=90,Value=12,
                Location=new Point(400,239),Size=new Size(160,29)};
            tab.Controls.Add(overhead);
            Button(tab,"SIMULAR SUMA REALISTA",25,313,550,63,()=>ModelSimulation());
            Label(tab,"Se incluyen límites y pérdidas como hipótesis; ninguna técnica convierte 40+30 en 300 sin más capacidad.",
                22,405,995,75,11,false);
        }
        void ModelSimulation(){
            double a=(double)wifiSim.Value,b=(double)simRate.Value,p=(double)overhead.Value;
            double ideal=a+b,net=ideal*(1-p/100);
            Log("DIGITAL TWIN (supuesto): rutas "+a+" + "+b+" = "+ideal+
                " Mb/s sin pérdidas; con "+p+"% sobrecarga ≈ "+net.ToString("0.0")+" Mb/s. NO MEDIDO.");
            File.AppendAllText(experimentPath,DateTime.Now.ToString("o")+",71,\"digital twin\",\""+a+"+"+b+" overhead "+p+" => "+net.ToString("0.0")+"\"\n");
        }
        protected override void OnFormClosing(FormClosingEventArgs e){
            pilot=false;autoTimer.Stop();base.OnFormClosing(e);
        }
    }
}