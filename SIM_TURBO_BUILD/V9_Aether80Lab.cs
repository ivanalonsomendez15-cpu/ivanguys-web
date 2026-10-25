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
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Windows.Forms;

namespace SimTurboPC {
    // V9: 80-item research/workbench. Status must describe reality, not make unsupported claims.
    public sealed class Aether80LabV9 : Form {
        readonly Color bg=Color.FromArgb(9,17,32), panel=Color.FromArgb(25,40,62), cyan=Color.FromArgb(20,220,210);
        readonly string root;
        readonly ListView catalog;
        readonly TextBox output,hostField;
        readonly ComboBox category;
        readonly NumericUpDown wifiSpeed,simSpeed,latencyAlert;
        readonly Label caption;
        readonly CheckBox localOnly,logToFile;
        readonly System.Windows.Forms.Timer live=new System.Windows.Forms.Timer();
        readonly string[] groups={
            "A · Wi-Fi y Ethernet","B · Wi-Fi + SIM","C · Latencia y estabilidad","D · Transferencias",
            "E · FPS y gaming","F · Autopiloto","G · Seguridad","H · Investigación"
        };
        readonly string[] names={
            "Wi-Fi Radar 3D","Channel Hunter","Band Genius","Antenna Analyzer","Cable Doctor",
            "Router Health","Wi-Fi Interference Hunter","LAN Turbo Test","Driver Regression Detector","Smart Interface Selector",
            "Triple Bonding","Adaptive Upload","SIM Speed Predictor","Dynamic Chunking","Mobile Battery Guard",
            "Thermal Protection","Data Budget AI","AETHER Tunnel","Instant Failover","Multipath Benchmark",
            "Ping Guardian","Jitter Killer Lab","Bufferbloat Detector","Smart Queue Advisor","Game Server Analyzer",
            "Packet Loss Radar","Latency Timeline","Congestion Alarm","Smart DNS Benchmark","Route Stability Score",
            "Download Accelerator 2.0","Upload Scheduler","Network Speed History","Download Resume","Smart CDN Selector",
            "HTTP/3 Analyzer","Adaptive Connection Count","Background Download Manager","Cloud Sync Guardian","Speed Comparison Lab",
            "GPU Bottleneck Detector","CPU Bottleneck Detector","Frame Time Analyzer","1% Low Monitor","Game Profiles",
            "Thermal Throttling Detector","Background Process Advisor","FPS A/B Testing","Streaming Performance Mode","Automatic Restore",
            "Master Autopilot","Automatic Regression Guard","Confidence Engine","Gaming Detector","Driver Update Watch",
            "Safe Experiment Mode","Smart Restore Points","Connection Forecast","Automatic Performance Report","Custom Rules",
            "Driver Signature Checker","Rollback Guardian","Permission Center","Data Privacy Dashboard","Trusted Network Detection",
            "Mobile Pairing QR","Encrypted Device Channel","Automatic Data Limit","Local-Only Mode","Change Audit",
            "AETHER Digital Twin","Predictive Multipath","Dynamic Rescue Mosaic","Latency-Aware Scheduling","Adaptive Error Recovery",
            "Causal Performance Engine","Self-Tuning Network Models","Experimental Traffic Simulator","Performance Evolution Lab","AETHER Research Mode"
        };
        readonly string[] descriptions={
            "Registrar puntos de señal manualmente y mostrar una superficie 3D ilustrativa; no reconstruye paredes ni plano automáticamente.",
            "Examinar canales de redes cercanas detectadas por Windows y recomendar canales candidatos de 2,4 GHz.",
            "Comparar características de 2,4, 5 y 6 GHz sin afirmar que tu router ofrece una banda no detectada.",
            "Revisar radio, versión de controlador, adaptador y velocidad de enlace que informa Windows.",
            "Advertir de enlaces Ethernet a 10/100 Mb/s; no puede convertir físicamente un cable en Gigabit.",
            "Medir varias respuestas ICMP al gateway y resumir media y variabilidad.",
            "Estimar ocupación de canales visibles, no medir físicamente el espectro RF.",
            "Para medir la LAN entre dos equipos hace falta un servidor de pruebas en el otro extremo.",
            "Guardar una instantánea del inventario de drivers y comparar cambios entre fechas.",
            "Evaluar adaptadores activos y sugerir cuál conviene comprobar; no cambia rutas sin autorización.",
            "Requiere tres enlaces independientes y motor de agregación; la V8 solo emplea dos rutas para ciertos archivos.",
            "Agregación de subidas: requiere servidor receptor y protocolo multipart; aún no implementado.",
            "Simular capacidad combinada teórica usando las velocidades ingresadas, no una predicción medida.",
            "Modificar tamaño de los fragmentos según el archivo (prototipo de heurística por tamaño).",
            "Requiere telemetría fiable de batería Android y consentimiento explícito.",
            "Requiere telemetría térmica fiable del móvil.",
            "Requiere contador verificable de bytes de SIM y bloqueo por presupuesto.",
            "Requiere servidor remoto y túnel cifrado; no existe aún para todo Windows.",
            "Fallback por ruta principal cuando la SIM falla durante descargas compatibles.",
            "Comparación de rutas por pruebas repetidas con el mismo servidor y muestras.",
            "Vigilancia voluntaria de picos de ping mediante pruebas repetidas.",
            "Análisis de variaciones entre muestras de latencia ICMP.",
            "Medir ping simultáneo a una carga autorizada; no se realizará sin aviso de tráfico.",
            "Asesorar sobre colas SQM compatibles con cada router, sin tocar su configuración.",
            "Probar la latencia ICMP de un hostname público elegido por el usuario.",
            "Contar solicitudes ICMP sin respuesta; no equivale a pérdida real de todos los protocolos.",
            "Guardar muestras con fecha y dibujar evolución histórica en el radar de red.",
            "Avisar si la latencia excede un umbral ajustable.",
            "Comparar consultas DNS públicas con respuestas reales, sin cambiar DNS del sistema.",
            "Puntuación heurística basada en latencia, jitter y pérdidas; no es una métrica estándar.",
            "Descarga parcial paralela en un archivo HTTPS Range mediante descargador V8.",
            "Planificador de subida; necesita un motor de subida que actualmente no tenemos.",
            "Historial local CSV de muestras de red; los MB/s de uso no son velocidad máxima.",
            "Reanudar descarga HTTP con validación de ETag y fragmentos guardados; todavía pendiente.",
            "Elegir CDN exige disponer de enlaces alternativos válidos del mismo contenido.",
            "Inspeccionar disponibilidad de capacidades HTTP/3 de curl local; no es una prueba exhaustiva.",
            "Modificar el número de descargas paralelas requiere medir el servidor destino.",
            "Programar trabajos de descarga exige una cola persistente con destino autorizado.",
            "Detectar presencia de sincronizadores conocidos para localizar posibles consumos.",
            "Registrar experiencias A/B y exportarlas; sin suficientes ensayos no indica causalidad.",
            "Detectar saturación GPU fiable requiere contadores GPU compatibles y FPS del juego.",
            "Medir carga CPU en Windows como pista de cuello de botella.",
            "Necesita captura de frametimes compatible con el juego.",
            "Requiere una serie de FPS real; no estimamos 1% low sin medidas.",
            "Acceso al controlador de Game Mode según juegos; modos existentes en V8.",
            "Requiere sensor de temperatura válido por hardware.",
            "Ordenar procesos por consumo RAM sin terminarlos automáticamente.",
            "Registrar dos mediciones de FPS comparables introducidas por el usuario.",
            "Detectar procesos OBS o similares y recomendar comprobar encoder/capturadora.",
            "Restauración de ajustes de gaming usada por los pilotos anteriores.",
            "Abrir el piloto de red y Game Mode integrado en V8.",
            "Comparar línea base y cambio antes de mantener una optimización; aún no aplica TCP a ciegas.",
            "Describir margen de incertidumbre de una muestra con múltiples pings.",
            "Detectar juegos por proceso dentro del autopiloto V8.",
            "Avisos sobre actualizaciones oficiales sin instalar paquetes desconocidos.",
            "Guardar pruebas de rendimiento independientes para poder comparar.",
            "Mostrar ubicación de copias de seguridad de ajustes de la app.",
            "Pronóstico experimental a partir de media reciente; no es una predicción garantizada.",
            "Exportar informe local con resultados y fecha.",
            "Elegir umbral de ping que generará avisos mientras el monitor esté activo.",
            "Revisar estado de firma reportado por Windows en controladores listados.",
            "Abrir Administrador de dispositivos para recuperación oficial de un driver.",
            "Informar de todos los permisos y cambios de los módulos.",
            "Mostrar dónde se guardan los ficheros generados por la aplicación.",
            "Solo sugerir identificar redes conocidas, nunca guardar contraseñas de Wi-Fi.",
            "QR de emparejamiento requiere codificador e integración con la APK, no terminado.",
            "TLS autenticado para PC-móvil aún no implementado en puente actual.",
            "Límite de datos de SIM aún no integrado en APK/PC como bloqueo absoluto.",
            "No ejecutar pruebas externas mientras está marcada la opción 'Solo local'.",
            "Auditar acciones voluntarias en archivo local cuando está habilitado.",
            "Simular capacidad ideal y sobrecarga de dos rutas a partir de tus valores.",
            "Usar velocidades de fragmentos anteriores como estimadores no garantizados.",
            "Rescatar fragmentos lentos a través de la ruta principal en AETHER V8.",
            "Priorizar ruta de menor latencia para el destino requiere medidas por ruta y servidor.",
            "Fallback tras errores de fragmento móvil en V8.",
            "Diseño de experimentos A/B replicables en red.",
            "Aprender de varias pruebas sin sobreajustar necesita un histórico suficientemente grande.",
            "Simular dos enlaces a partir de velocidades configuradas sin consumir datos.",
            "Guardar resultados de distintas versiones, con unidad y condiciones.",
            "Guardar un diario de hipótesis/experimentos y resultados reproducibles."
        };
        readonly HashSet<int> working=new HashSet<int>{1,2,3,4,5,6,7,9,10,13,14,19,21,22,25,26,27,28,29,30,31,33,36,39,40,42,45,47,48,49,50,51,53,54,55,56,57,59,60,61,62,63,64,69,70,71,72,73,75,78,79,80};
        readonly HashSet<int> prototype=new HashSet<int>{8,17,20,23,24,37,41,43,44,46,52,58,65,68,74,76,77};
        long sampleIndex=0;
        bool pilot=false;
        int pingFailures=0;
        readonly List<double> pingHistory=new List<double>();
        readonly object resultsLock=new object();
        public Aether80LabV9(){
            Text="SIM TURBO PC ULTRA V9 · 80 MÓDULOS / AETHER LAB";
            ClientSize=new Size(1110,785);MinimumSize=new Size(1010,755);
            Font=new Font("Segoe UI",10);BackColor=bg;ForeColor=Color.White;StartPosition=FormStartPosition.CenterParent;
            root=Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),"SimTurboPC","AetherLab");
            Directory.CreateDirectory(root);
            Label headline=new Label{Text="AETHER LAB V9 · CATÁLOGO DE 80 MÓDULOS",Location=new Point(20,12),Size=new Size(1080,43),
                Font=new Font("Segoe UI",19,FontStyle.Bold),ForeColor=cyan};Controls.Add(headline);
            Controls.Add(new Label{Text="Operativo = función parcial real; Prototipo = prueba/asesor; Pendiente = requiere componentes que no existen aún.",
                Location=new Point(23,58),Size=new Size(1048,26),ForeColor=Color.LightGray});
            category=new ComboBox{Location=new Point(22,92),Size=new Size(364,32),DropDownStyle=ComboBoxStyle.DropDownList};
            category.Items.Add("TODAS LAS CATEGORÍAS");
            foreach(string g in groups)category.Items.Add(g);
            category.SelectedIndex=0;category.SelectedIndexChanged+=(s,e)=>RefreshCatalog();Controls.Add(category);
            localOnly=new CheckBox{Text="MODO SOLO LOCAL",Location=new Point(410,94),Size=new Size(228,30),Checked=true,ForeColor=Color.White};
            Controls.Add(localOnly);
            logToFile=new CheckBox{Text="GUARDAR AUDITORÍA",Location=new Point(647,94),Size=new Size(228,30),Checked=false,ForeColor=Color.White};
            Controls.Add(logToFile);
            catalog=new ListView{Location=new Point(22,137),Size=new Size(512,429),View=View.Details,
                FullRowSelect=true,MultiSelect=false,GridLines=false,BackColor=panel,ForeColor=Color.White,
                HideSelection=false};
            catalog.Columns.Add("#",41);
            catalog.Columns.Add("MÓDULO",297);
            catalog.Columns.Add("ESTADO",152);
            catalog.SelectedIndexChanged+=(s,e)=>ShowSelected();
            Controls.Add(catalog);
            caption=new Label{Text="Selecciona uno de los 80 módulos.",Location=new Point(550,139),Size=new Size(534,99),
                ForeColor=Color.LightCyan,Font=new Font("Segoe UI",11)};
            Controls.Add(caption);
            Button run=ButtonAt("ABRIR / EJECUTAR EL MÓDULO",550,248,530,54,()=>RunSelected());
            Button pilotButton=ButtonAt("PILOTO DE RED V9 · OFF",550,316,530,54,()=>TogglePilot());
            pilotButton.Name="pilotButton";
            Button v8=ButtonAt("PILOTO GENERAL V8 (FPS + RED)",550,381,530,54,
                ()=>new AetherAutopilotV8().ShowDialog(this));
            Button radar=ButtonAt("RADAR 3D · REGISTRAR COBERTURA",550,447,530,54,
                ()=>new AetherRadarV9(root).ShowDialog(this));
            Controls.Add(new Label{Text="ENLACES SIMULADOS (solo investigación)",Location=new Point(550,510),Size=new Size(500,25),ForeColor=cyan});
            wifiSpeed=Number(550,540,80,0,2000,36);
            simSpeed=Number(651,540,80,0,2000,15);
            latencyAlert=Number(751,540,80,20,1000,100);
            Controls.Add(new Label{Text="Wi-Fi Mb/s",Location=new Point(549,567),Size=new Size(92,19),ForeColor=Color.LightGray,Font=new Font("Segoe UI",8)});
            Controls.Add(new Label{Text="SIM Mb/s",Location=new Point(650,567),Size=new Size(92,19),ForeColor=Color.LightGray,Font=new Font("Segoe UI",8)});
            Controls.Add(new Label{Text="Alerta ping ms",Location=new Point(750,567),Size=new Size(130,19),ForeColor=Color.LightGray,Font=new Font("Segoe UI",8)});
            hostField=new TextBox{Text="1.1.1.1",Location=new Point(875,540),Size=new Size(200,30),
                BackColor=panel,ForeColor=Color.White};
            Controls.Add(hostField);
            Controls.Add(new Label{Text="Host de prueba",Location=new Point(875,567),Size=new Size(190,19),ForeColor=Color.LightGray,Font=new Font("Segoe UI",8)});
            output=new TextBox{Location=new Point(22,612),Size=new Size(1057,144),Anchor=AnchorStyles.Left|AnchorStyles.Right|AnchorStyles.Bottom,
                BackColor=Color.FromArgb(15,28,46),ForeColor=Color.LightCyan,ReadOnly=true,Multiline=true,ScrollBars=ScrollBars.Vertical,
                Font=new Font("Consolas",9)};
            Controls.Add(output);
            RefreshCatalog();
            Log("80 módulos clasificados. No se afirma que estén los 80 completados.");
            live.Interval=10000;
            live.Tick+=(s,e)=>{if(pilot)Threaded(Pulse);};
            FormClosing+=(s,e)=>{pilot=false;live.Stop();};
        }
        NumericUpDown Number(int x,int y,int w,decimal min,decimal max,decimal value){
            var n=new NumericUpDown{Location=new Point(x,y),Size=new Size(w,32),Minimum=min,Maximum=max,Value=value,DecimalPlaces=0};
            Controls.Add(n);return n;
        }
        Button ButtonAt(string text,int x,int y,int w,int h,Action action){
            var b=new Button{Text=text,Location=new Point(x,y),Size=new Size(w,h),FlatStyle=FlatStyle.Flat,
                ForeColor=Color.White,BackColor=Color.FromArgb(12,95,98),Font=new Font("Segoe UI",10,FontStyle.Bold)};
            b.FlatAppearance.BorderSize=0;b.Click+=(s,e)=>{try{action();}catch(Exception ex){Log("Error: "+ex.Message);}};
            Controls.Add(b);return b;
        }
        int SelectedId(){
            if(catalog.SelectedItems.Count==0)return 0;
            return Convert.ToInt32(catalog.SelectedItems[0].Tag);
        }
        string State(int id){return working.Contains(id)?"Función parcial":prototype.Contains(id)?"Prototipo":"Pendiente";}
        void RefreshCatalog(){
            if(catalog==null)return;catalog.BeginUpdate();catalog.Items.Clear();
            for(int id=1;id<=80;id++){
                if(category.SelectedIndex>0&&(id-1)/10!=category.SelectedIndex-1)continue;
                var item=new ListViewItem(id.ToString());
                item.SubItems.Add(names[id-1]);item.SubItems.Add(State(id));item.Tag=id;
                if(!working.Contains(id))item.ForeColor=Color.FromArgb(185,200,215);
                catalog.Items.Add(item);
            }
            catalog.EndUpdate();
        }
        void ShowSelected(){
            int i=SelectedId();if(i==0)return;
            caption.Text=i+". "+names[i-1]+" — "+State(i)+"\n"+descriptions[i-1];
        }
        void Log(string s){
            if(IsDisposed||!IsHandleCreated)return;
            if(InvokeRequired){BeginInvoke((Action)(()=>Log(s)));return;}
            string text="["+DateTime.Now.ToString("HH:mm:ss")+"] "+s;
            output.AppendText(text+Environment.NewLine);
            if(logToFile.Checked)try{File.AppendAllText(Path.Combine(root,"audit.txt"),text+Environment.NewLine,Encoding.UTF8);}catch{}
        }
        void Threaded(Action a) {
            ThreadPool.QueueUserWorkItem(o=>{try{a();}catch(Exception e){Log("Error: "+e.Message);}});
        }
        static string Exec(string file,string args,int max=10000){
            using(var p=new Process()){
                p.StartInfo=new ProcessStartInfo(file,args){UseShellExecute=false,CreateNoWindow=true,RedirectStandardOutput=true,RedirectStandardError=true};
                p.Start();string stdout=p.StandardOutput.ReadToEnd();
                if(!p.WaitForExit(max)){try{p.Kill();}catch{}throw new IOException("Tiempo excedido en "+file);}
                if(p.ExitCode!=0)throw new IOException("Error de "+file+": "+p.ExitCode);
                return stdout;
            }
        }
        static NetworkInterface[] Physical(){
            return NetworkInterface.GetAllNetworkInterfaces().Where(n=>n.OperationalStatus==OperationalStatus.Up &&
                (n.NetworkInterfaceType==NetworkInterfaceType.Wireless80211 ||
                 n.NetworkInterfaceType==NetworkInterfaceType.Ethernet||
                 n.NetworkInterfaceType==NetworkInterfaceType.GigabitEthernet) &&
                 !((n.Name+" "+n.Description).ToLowerInvariant().Contains("virtual"))).ToArray();
        }
        static IPAddress Gateway(){
            foreach(var n in Physical())foreach(var g in n.GetIPProperties().GatewayAddresses)
                if(g.Address.AddressFamily==AddressFamily.InterNetwork)return g.Address;
            return null;
        }
        void ScanNetwork(){
            foreach(var n in Physical()){
                var s=n.GetIPv4Statistics();
                Log(n.Name+" | "+n.NetworkInterfaceType+" | enlace "+(n.Speed/1000000.0).ToString("0")+" Mb/s"+
                    " | bytes ↓"+s.BytesReceived+" ↑"+s.BytesSent);
                if(n.NetworkInterfaceType!=NetworkInterfaceType.Wireless80211&&n.Speed<=100000000)
                    Log("CABLE DOCTOR: enlace a "+(n.Speed/1000000)+" Mb/s; comprueba cable, puerto y negociación.");
            }
            var gw=Gateway();Log("Router/gateway: "+(gw==null?"No detectado":gw.ToString()));
        }
        void ChannelScan(){
            string raw=Exec("netsh.exe","wlan show networks mode=bssid");
            var matches=Regex.Matches(raw,@"(?im)^\s*(canal|channel)\s*:\s*(\d+)\s*$");
            var counts=new Dictionary<int,int>();
            foreach(Match m in matches){
                int ch=int.Parse(m.Groups[2].Value);
                if(!counts.ContainsKey(ch))counts[ch]=0;counts[ch]++;
            }
            Log("CHANNEL HUNTER: "+matches.Count+" BSSID visibles / "+counts.Count+" canales.");
            foreach(var kv in counts.OrderByDescending(x=>x.Value).Take(12))
                Log("Canal "+kv.Key+": "+kv.Value+" emisores visibles (aproximación; no mide ocupación real)");
            if(counts.Count==0){Log("El controlador no devolvió canales; no es posible recomendar.");return;}
            int[] channels={1,6,11};
            int winner=channels.OrderBy(c=>counts.Sum(kv=>kv.Value*Math.Max(0,4-Math.Abs(kv.Key-c)))).First();
            Log("Candidato de 2,4 GHz entre 1/6/11: canal "+winner+
                ". IMPORTANTE: es un tanteo basado en redes visibles, no una orden de cambiar el router.");
        }
        void Drivers(){
            string raw=Exec("netsh.exe","wlan show drivers");
            foreach(string line in raw.Split('\n').Select(x=>x.Trim())){
                string l=line.ToLowerInvariant();
                if(l.StartsWith("driver")||l.StartsWith("controlador")||l.StartsWith("version")||
                    l.StartsWith("versión")||l.Contains("radio types")||l.Contains("tipos de radio")||
                    l.Contains("802.11")||l.Contains("bands")||l.Contains("bandas"))
                    Log(line.Substring(0,Math.Min(150,line.Length)));
            }
            Log("Bandas: 2,4 GHz ofrece habitualmente más alcance; 5/6 GHz pueden reducir congestión, según compatibilidad y distancia.");
        }
        void RouterPing(){
            var gw=Gateway();
            if(gw==null){Log("No hay gateway IPv4; no se puede medir el router.");return;}
            PingSurvey(gw.ToString(),8);
        }
        void PingSurvey(string host,int attempts){
            if(!Regex.IsMatch(host,@"^[a-zA-Z0-9\-\.:\[\]]{1,190}$")){Log("Host inválido.");return;}
            var r=new List<long>();int lost=0;
            for(int i=0;i<attempts;i++){
                try{using(var p=new Ping()){
                    var answer=p.Send(host,1100);
                    if(answer.Status==IPStatus.Success)r.Add(answer.RoundtripTime);
                    else lost++;
                }}catch{lost++;}
            }
            if(r.Count==0){Log(host+": sin respuestas ICMP ("+lost+"/"+attempts+
                "). Puede haber filtrado ICMP.");return;}
            double avg=r.Average();
            double jitter=r.Count>1?Enumerable.Range(1,r.Count-1).Average(i=>Math.Abs(r[i]-r[i-1])):0;
            Log(host+": ping "+avg.ToString("0.0")+" ms | jitter aprox "+
                jitter.ToString("0.0")+" ms | ICMP sin respuesta "+lost+"/"+attempts);
            lock(resultsLock){pingHistory.Add(avg);if(pingHistory.Count>120)pingHistory.RemoveAt(0);}
            if(avg>(double)latencyAlert.Value)Log("CONGESTION ALARM: ping excede umbral configurado.");
            if(attempts>=6){
                double score=Math.Max(0,100-1.2*avg-3.0*jitter-100.0*lost/attempts);
                Log("Route Stability Score: "+score.ToString("0.0")+"/100 (heurística experimental, NO puntuación oficial)");
            }
            try{
                File.AppendAllText(Path.Combine(root,"ping_history.csv"),
                    DateTime.UtcNow.ToString("o")+","+host+","+avg.ToString("0.###",System.Globalization.CultureInfo.InvariantCulture)+
                    ","+jitter.ToString("0.###",System.Globalization.CultureInfo.InvariantCulture)+","+lost+","+attempts+"\n");
            }catch{}
        }
        void TcpInterfaces(){
            ScanNetwork();
            var sample=Physical().OrderByDescending(n=>n.Speed).FirstOrDefault();
            if(sample!=null)Log("SMART INTERFACE ADVISOR: empieza comprobando "+sample.Name+
                " por enlace "+(sample.Speed/1000000.0).ToString("0")+" Mb/s. No determina la velocidad de Internet.");
        }
        void DriverHistory(){
            var names=new List<string>();
            using(var query=new ManagementObjectSearcher("SELECT DeviceName,DriverVersion,IsSigned FROM Win32_PnPSignedDriver")){
                foreach(ManagementObject x in query.Get()){
                    string label=Convert.ToString(x["DeviceName"]);
                    if(label.IndexOf("Wi-Fi",StringComparison.OrdinalIgnoreCase)>=0||
                        label.IndexOf("Wireless",StringComparison.OrdinalIgnoreCase)>=0||
                        label.IndexOf("Ethernet",StringComparison.OrdinalIgnoreCase)>=0||
                        label.IndexOf("Realtek",StringComparison.OrdinalIgnoreCase)>=0||
                        label.IndexOf("NVIDIA",StringComparison.OrdinalIgnoreCase)>=0)
                        names.Add(label+" / "+Convert.ToString(x["DriverVersion"])+
                            " / firmado="+Convert.ToString(x["IsSigned"]));
                }
            }
            var file=Path.Combine(root,"drivers_prev.txt");
            if(File.Exists(file)){
                var past=File.ReadAllLines(file);
                foreach(string n in names.Except(past).Take(12))Log("Driver nuevo/modificado: "+n);
                foreach(string n in past.Except(names).Take(12))Log("Driver ya no aparece: "+n);
                if(!names.Except(past).Any()&&!past.Except(names).Any())Log("Inventario de drivers sin cambios registrados.");
            }else Log("Primera instantánea de drivers, sin histórico previo.");
            File.WriteAllLines(file,names.ToArray(),Encoding.UTF8);
            foreach(string n in names.Take(8))Log(n);
            Log("Historial de versiones NO implica que el rendimiento haya mejorado o empeorado.");
        }
        void CpuLoad(){
            using(var counter=new PerformanceCounter("Processor","% Processor Time","_Total")){
                counter.NextValue();Thread.Sleep(1100);
                Log("CPU media estimada: "+counter.NextValue().ToString("0.0")+"% en un intervalo de 1,1 s.");
            }
        }
        void ProcessAdvice(){
            var top=Process.GetProcesses().Select(p=>{
                try{return new{n=p.ProcessName,b=p.WorkingSet64};}
                catch{return new{n="desconocido",b=0L};}
            }).OrderByDescending(x=>x.b).Take(12);
            foreach(var p in top) Log("RAM: "+p.n+" "+(p.b/1048576)+" MiB");
            bool streaming=Process.GetProcesses().Any(p=>p.ProcessName.ToLowerInvariant().Contains("obs"));
            if(streaming)Log("Streaming: OBS detectado; revisa encoder y uso GPU durante juego.");
            Log("Ningún proceso se cierra automáticamente.");
        }
        void DnsBenchmark(){
            if(localOnly.Checked){Log("Modo solo local activo: no se consulta DNS público.");return;}
            foreach(string ip in new[]{"1.1.1.1","8.8.8.8","9.9.9.9"}){
                try{
                    var sw=Stopwatch.StartNew();
                    string result=Exec("nslookup.exe","example.org "+ip,8000);
                    sw.Stop();
                    Log("DNS "+ip+": "+sw.ElapsedMilliseconds+" ms, "+(result.Contains("Address")||result.Contains("Dirección")?"respuesta recibida":"respuesta no identificada"));
                }catch(Exception ex){Log("DNS "+ip+": "+ex.Message);}
            }
            Log("Las consultas DNS no miden velocidad de descarga ni cambian tu DNS.");
        }
        void Simulation(){
            double wifi=(double)wifiSpeed.Value,sim=(double)simSpeed.Value, sum=wifi+sim;
            Log("SIMULACIÓN: "+wifi.ToString("0")+" Mb/s + "+sim.ToString("0")+
                " Mb/s = "+sum.ToString("0")+" Mb/s IDEAL, si hay rutas independientes.");
            Log("Con 15% de sobrecarga supuesta: "+(sum*.85).ToString("0.0")+
                " Mb/s. NO es una predicción de tu PC ni una medición.");
            if(wifi>0&&sim>0)Log("Relación SIM/Wi-Fi: "+(sim/wifi).ToString("0.00")+
                ". Una SIM lenta no debería recibir fragmentos críticos en el motor adaptativo.");
        }
        void WriteReport(int id){
            var filename=Path.Combine(root,"informe_"+DateTime.Now.ToString("yyyyMMdd_HHmmss")+".txt");
            string content="SIM TURBO PC ULTRA V9 / "+DateTime.Now.ToString("u")+"\r\n"+
                "Módulo "+id+" "+names[id-1]+" / "+State(id)+"\r\n"+
                descriptions[id-1]+"\r\n\r\n"+output.Text;
            File.WriteAllText(filename,content,Encoding.UTF8);
            Log("INFORME GUARDADO: "+filename);
        }
        void LocalFileInfo(){
            Log("Datos locales de esta V9: "+root);
            Log("Puede contener: audit.txt (si lo autorizas), ping_history.csv, drivers_prev.txt, informes.");
            string dir=Path.GetDirectoryName(root);
            Log("Configuración previa V6/V7/V8: "+dir+" (archivos de restauración y estados).");
            Log("No se guardan contraseñas ni tokens de emparejamiento en este laboratorio.");
        }
        void OpenWin(string uri){try{Process.Start(new ProcessStartInfo(uri){UseShellExecute=true});}
            catch(Exception e){Log("No se pudo abrir: "+e.Message);}}
        void TogglePilot(){
            pilot=!pilot;
            var b=Controls.Find("pilotButton",false).FirstOrDefault() as Button;
            if(b!=null)b.Text=pilot?"PILOTO DE RED V9 · ON":"PILOTO DE RED V9 · OFF";
            if(pilot){
                Log("Piloto RED iniciado (10 s). Se analiza ICMP, no se cambian rutas ni se usa SIM.");
                live.Start();Threaded(Pulse);
            }else{live.Stop();Log("Piloto RED detenido.");}
        }
        void Pulse(){
            string host=localOnly.Checked?(Gateway()==null?"":Gateway().ToString()):"1.1.1.1";
            if(host.Length==0){Log("No hay router para diagnóstico local.");return;}
            PingSurvey(host,3);
            sampleIndex++;
            if(sampleIndex%12==0)Log("Autopiloto: "+sampleIndex+" iteraciones; nunca modifica drivers o firewall.");
        }
        void RunSelected(){
            int id=SelectedId();
            if(id==0){Log("Selecciona un módulo de la lista.");return;}
            Log("["+id+"] "+names[id-1]+" / "+State(id));
            switch(id){
                case 1: new AetherRadarV9(root).ShowDialog(this);return;
                case 2:case 7:Threaded(ChannelScan);return;
                case 3:case 4:Threaded(Drivers);return;
                case 5:case 10:Threaded(TcpInterfaces);return;
                case 6:Threaded(RouterPing);return;
                case 9:case 61:Threaded(DriverHistory);return;
                case 13:case 71:case 72:case 78:Simulation();return;
                case 14:Log("AETHER V9: chunk dinámico por tamaño de archivo disponible en nueva compilación; solo en descarga compatible.");return;
                case 19:case 31:case 73:case 75:Log("Abre AETHER-LINK WI-FI + SIM desde la pantalla principal; el fallback actúa durante la descarga.");return;
                case 21:case 27:case 28:case 33:case 60:TogglePilot();return;
                case 22:case 26:case 30:
                    Threaded(()=>PingSurvey(localOnly.Checked?(Gateway()==null?"1.1.1.1":Gateway().ToString()):"1.1.1.1",8));return;
                case 25:
                    if(localOnly.Checked){Log("Desmarca MODO SOLO LOCAL para probar un servidor de Internet.");return;}
                    string host=hostField.Text.Trim();Threaded(()=>PingSurvey(host,8));return;
                case 29:Threaded(DnsBenchmark);return;
                case 36:Threaded(()=>{
                    try{string x=Exec("curl.exe","--version");Log("curl: "+x.Split('\n')[0]);Log(x.ToLowerInvariant().Contains("http3")?"HTTP/3 aparece entre capacidades.":"HTTP/3 no aparece entre capacidades de curl.");}
                    catch(Exception ex){Log("Curl: "+ex.Message);}
                });return;
                case 39:case 47:case 49:Threaded(ProcessAdvice);return;
                case 42:Threaded(CpuLoad);return;
                case 45:case 50:case 51:case 54:case 55:new AetherAutopilotV8().ShowDialog(this);return;
                case 56:case 59:case 79:case 80:WriteReport(id);return;
                case 57:case 63:case 64:case 69:case 70:LocalFileInfo();return;
                case 62:OpenWin("devmgmt.msc");return;
                default:
                    Log("ALCANCE ACTUAL: "+descriptions[id-1]);
                    if(!working.Contains(id))Log("AÚN NO OPERATIVO: requiere código, hardware, datos o infraestructura adicionales. No se simula como éxito.");
                    else Log("Esta función está disponible parcialmente en otros módulos de V8/V9; su alcance es limitado.");
                    return;
            }
        }
    }
}