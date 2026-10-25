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
using System.Text.RegularExpressions;
using System.Threading;
using System.Windows.Forms;
using System.Management;

namespace SimTurboPC {
    // PulseRoute V7: a cautious and auditable diagnostic and conditional TCP repair.
    // No guarantee of more bandwidth. No VPN, no DNS interception, no new physical antennas.
    public sealed class PulseRouteV7 : Form {
        readonly Color dark=Color.FromArgb(8,16,29);
        readonly Color panel=Color.FromArgb(23,38,59);
        readonly Color aqua=Color.FromArgb(32,223,202);
        readonly TextBox output;
        readonly Label status;
        readonly Button monitorButton;
        readonly System.Windows.Forms.Timer timer=new System.Windows.Forms.Timer();
        readonly string stateFile;
        volatile bool busy=false;
        bool monitoring=false;
        double lastIdlePing=double.NaN;
        int tick=0;
        long lastRx=0,lastTx=0;
        DateTime lastTime=DateTime.MinValue;
        public PulseRouteV7() {
            Text="SIM TURBO PC ULTRA V7 | PULSEROUTE";
            ClientSize=new Size(930,720);MinimumSize=new Size(930,720);
            Font=new Font("Segoe UI",10);
            ForeColor=Color.White;BackColor=dark;
            StartPosition=FormStartPosition.CenterParent;
            stateFile=Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
                "SimTurboPC","pulseroute_tcp_undo.txt");
            Directory.CreateDirectory(Path.GetDirectoryName(stateFile));
            AddLabel("PULSEROUTE V7 · ANALIZADOR DE WI-FI + ETHERNET",24,17,875,40,19,true,aqua);
            AddLabel("Diagnostica velocidad, interferencias, saturación y ajustes TCP. Todo cambio es voluntario y reversible.",
                26,64,880,44,10,false,Color.LightGray);
            AddPanel(23,119,880,142);
            AddLabel("ENLACES ACTIVOS · NO CONFUNDIR CON LA VELOCIDAD DE INTERNET",40,133,845,28,12,true,aqua);
            status=AddLabel("Pulsa ANALIZAR TODO para leer la red actual.",42,176,842,63,11,true,Color.White);
            AddButton("ANALIZAR TODO",24,277,273,54,()=>RunAsync(Scan));
            AddButton("MEDIR DESCARGA + SUBIDA",310,277,303,54,()=>ConfirmBenchmark());
            AddButton("REPARAR TCP SI ESTÁ LIMITADO",626,277,277,54,()=>RunAsync(RepairTcp));
            AddButton("DESHACER AJUSTE TCP",24,347,273,54,()=>RunAsync(RestoreTcp));
            monitorButton=AddButton("AUTOPILOTO RED: OFF",310,347,303,54,()=>ToggleMonitor());
            AddButton("ABRIR DIAGNÓSTICO WINDOWS",626,347,277,54,
                ()=>Open("ms-settings:network-status"));
            AddPanel(23,419,880,233);
            AddLabel("REGISTRO PULSEROUTE · EVIDENCIA REAL",40,434,840,28,13,true,aqua);
            output=new TextBox{Location=new Point(40,474),Size=new Size(840,155),
                Multiline=true,ReadOnly=true,ScrollBars=ScrollBars.Vertical,
                BackColor=Color.FromArgb(13,24,42),ForeColor=Color.LightCyan,
                Font=new Font("Consolas",9.5f)};
            Controls.Add(output);
            AddLabel("El autopiloto solo vigila y detecta regresiones; no reconfigura la red sin permiso.",24,661,879,45,10,false,Color.LightGray);
            timer.Interval=10000;timer.Tick+=(s,e)=>{if(monitoring&&!busy) RunAsync(QuickPulse);};
            Shown+=(s,e)=>RunAsync(Scan);
        }
        void AddPanel(int x,int y,int w,int h) {
            var p=new Panel{Location=new Point(x,y),Size=new Size(w,h),BackColor=panel};
            Controls.Add(p);p.SendToBack();
        }
        Label AddLabel(string text,int x,int y,int w,int h,float size,bool bold,Color color) {
            var lab=new Label{Text=text,Location=new Point(x,y),Size=new Size(w,h),
                ForeColor=color,BackColor=Color.Transparent,Font=new Font("Segoe UI",size,bold?FontStyle.Bold:FontStyle.Regular)};
            Controls.Add(lab);lab.BringToFront();return lab;
        }
        Button AddButton(string txt,int x,int y,int w,int h,Action handler) {
            var b=new Button{Text=txt,Location=new Point(x,y),Size=new Size(w,h),
                BackColor=Color.FromArgb(15,91,97),ForeColor=Color.White,FlatStyle=FlatStyle.Flat,
                Font=new Font("Segoe UI",9,FontStyle.Bold)};
            b.FlatAppearance.BorderSize=0;b.Click+=(s,e)=>handler();Controls.Add(b);b.BringToFront();return b;
        }
        void Log(string s){
            if(IsDisposed||!IsHandleCreated)return;
            if(InvokeRequired){BeginInvoke((Action)(()=>Log(s)));return;}
            output.AppendText("["+DateTime.Now.ToString("HH:mm:ss")+"] "+s+Environment.NewLine);
        }
        void SetStatus(string s) {
            if(IsDisposed||!IsHandleCreated)return;
            if(InvokeRequired){BeginInvoke((Action)(()=>SetStatus(s)));return;}
            status.Text=s;
        }
        void RunAsync(Action action) {
            if(busy){Log("Otra prueba está en curso.");return;}
            busy=true;
            ThreadPool.QueueUserWorkItem(o=>{try{action();}catch(Exception ex){Log("ERROR: "+ex.Message);}
                finally{busy=false;}});
        }
        void Open(string url) {
            try{Process.Start(new ProcessStartInfo(url){UseShellExecute=true});}
            catch(Exception ex){Log("No se pudo abrir Configuración: "+ex.Message);}
        }
        static bool Physical(NetworkInterface n){
            if(n.OperationalStatus!=OperationalStatus.Up)return false;
            switch(n.NetworkInterfaceType){
                case NetworkInterfaceType.Wireless80211:
                case NetworkInterfaceType.Ethernet:
                case NetworkInterfaceType.GigabitEthernet:
                case NetworkInterfaceType.FastEthernetT:
                case NetworkInterfaceType.FastEthernetFx:break;
                default:return false;
            }
            var name=(n.Name+" "+n.Description).ToLowerInvariant();
            return !(name.Contains("virtual")||name.Contains("vpn")||name.Contains("tap-")||name.Contains("hyper-v")||name.Contains("loopback"));
        }
        static string Exec(string path,string args,int limit=7000){
            using(var process=new Process()){
                process.StartInfo=new ProcessStartInfo(path,args){
                    UseShellExecute=false,CreateNoWindow=true,
                    RedirectStandardOutput=true,RedirectStandardError=true
                };
                process.Start();
                string text=process.StandardOutput.ReadToEnd();
                if(!process.WaitForExit(limit)){try{process.Kill();}catch{}throw new IOException(path+" no respondió");}
                if(process.ExitCode!=0)throw new IOException(path+" devolvió "+process.ExitCode);
                return text;
            }
        }
        static bool HasGateway(NetworkInterface nic){
            try{return nic.GetIPProperties().GatewayAddresses.Any(x=>x.Address.AddressFamily==AddressFamily.InterNetwork);}catch{return false;}
        }
        void Scan(){
            var nics=NetworkInterface.GetAllNetworkInterfaces().Where(Physical).ToArray();
            if(nics.Length==0){Log("No se detecta Ethernet/Wi-Fi físico activo.");SetStatus("Sin Wi-Fi ni Ethernet activo.");return;}
            string label="";
            foreach(var ni in nics){
                var type=ni.NetworkInterfaceType==NetworkInterfaceType.Wireless80211?"Wi-Fi":"Ethernet";
                var link=(ni.Speed/1000000.0).ToString("0");
                Log(type+" · "+ni.Name+" · enlace "+link+" Mb/s · gateway "+(HasGateway(ni)?"sí":"no"));
                if(label.Length>0)label+="   |   ";
                label+=type+" "+link+" Mb/s";
                if(ni.Speed<25000000)Log("AVISO: el enlace de "+ni.Name+" es inferior a 25 Mb/s. Comprueba cable, radio, señal o controlador.");
            }
            SetStatus(label+"\nEsas cifras describen los adaptadores, NO los Mb/s reales de Internet.");
            var first=nics.FirstOrDefault(n=>n.NetworkInterfaceType==NetworkInterfaceType.Wireless80211);
            if(first!=null){
                try{
                    string wifi=Exec("netsh.exe","wlan show interfaces",4000);
                    foreach(string line in wifi.Split('\n')){
                        var s=line.Trim();
                        if(Regex.IsMatch(s,@"(?i)^(signal|señal|channel|canal|radio type|tipo de radio|receive rate|velocidad de recepción|transmit rate|velocidad de transmisión)\s*:"))
                            Log("Radio: "+s);
                    }
                }catch(Exception e){Log("Wi-Fi: "+e.Message);}
            }
            var ping=PingHost("1.1.1.1");
            if(ping>=0){lastIdlePing=ping;Log("Latencia externa de referencia: "+ping.ToString("0")+" ms");}
            else Log("ICMP externo bloqueado o sin respuesta; no implica que Internet esté caído.");
            string tcp=TcpLevel();
            Log("Autotuning TCP actual: "+(string.IsNullOrEmpty(tcp)?"no identificado":tcp));
            if(tcp=="disabled"||tcp=="highlyrestricted"){
                Log("OPORTUNIDAD REAL: autotuning TCP está limitado; puede afectar a transferencias de gran tamaño.");
            }else Log("No se forzarán parámetros TCP si ya están en un estado normal o no verificable.");
            Log("Conexión de 36/15 Mb/s y aspiración de 300/150 requieren medir capacidad real del proveedor y/o SIM.");
        }
        static double PingHost(string host){
            try{using(var ping=new Ping()){
                var res=ping.Send(host,1200);
                return res.Status==IPStatus.Success?res.RoundtripTime:-1;
            }}catch{return -1;}
        }
        void QuickPulse(){
            tick++;
            try{
                long rx=0,tx=0;int count=0;
                foreach(var n in NetworkInterface.GetAllNetworkInterfaces().Where(Physical)){
                    var st=n.GetIPv4Statistics();rx+=st.BytesReceived;tx+=st.BytesSent;count++;
                }
                var now=DateTime.UtcNow;
                if(lastTime!=DateTime.MinValue){
                    double seconds=(now-lastTime).TotalSeconds;
                    if(seconds>0.5&&rx>=lastRx&&tx>=lastTx){
                        Log("PULSO "+tick+": ↓ "+((rx-lastRx)/seconds/1048576.0).ToString("0.00")+
                            " MB/s, ↑ "+((tx-lastTx)/seconds/1048576.0).ToString("0.00")+" MB/s ("+count+" interfaces)");
                    }
                }
                lastTime=now;lastRx=rx;lastTx=tx;
                double p=PingHost("1.1.1.1");
                if(p>=0){
                    if(!double.IsNaN(lastIdlePing)&&p>lastIdlePing+65)
                        Log("CONGESTIÓN PROBABLE: ping actual "+p.ToString("0")+" ms, referencia "+lastIdlePing.ToString("0")+" ms. Hay que revisar cargas y bufferbloat del router.");
                    else if(tick%3==0)Log("Ping: "+p.ToString("0")+" ms (referencia "+(double.IsNaN(lastIdlePing)?"?":lastIdlePing.ToString("0"))+" ms)");
                } else if(tick%6==0) Log("Sin respuesta ICMP, no se aplican cambios automáticos.");
            }catch(Exception ex){Log("Pulso: "+ex.Message);}
        }
        void ToggleMonitor(){
            monitoring=!monitoring;monitorButton.Text=monitoring?"AUTOPILOTO RED: ON":"AUTOPILOTO RED: OFF";
            if(monitoring){lastRx=0;lastTx=0;lastTime=DateTime.MinValue;
                timer.Start();Log("Vigilancia de latencia y saturación activada, cada 10 s.");RunAsync(QuickPulse);
            } else {timer.Stop();Log("Vigilancia desactivada. No había cambios de configuración que revertir.");}
        }
        // Windows local TCP "Internet" template; invariant enum values returned by PowerShell.
        static string TcpLevel(){
            try {
                string value=Exec("powershell.exe",
                    "-NoProfile -NonInteractive -Command \"(Get-NetTCPSetting -SettingName Internet).AutoTuningLevelLocal\"",
                    10000).Trim().ToLowerInvariant();
                foreach(var v in new[]{"normal","restricted","highlyrestricted","disabled","experimental"})
                    if(value==v)return v;
                return "";
            }catch{return "";}
        }
        static string StrictMode(string s) {
            return new[]{"normal","restricted","highlyrestricted","disabled","experimental"}.Contains(s)?s:"";
        }
        void RepairTcp(){
            string current=TcpLevel();
            Log("Autotuning detectado: "+(current==""?"desconocido":current));
            if(current==""){
                Log("No se puede comprobar la configuración TCP; no se realizan cambios.");return;
            }
            if(current=="normal"){
                Log("Windows ya utiliza autotuning normal: cambiarlo a ciegas no generaría ancho de banda extra.");return;
            }
            if(File.Exists(stateFile)){
                Log("Hay un cambio anterior por restaurar. Pulsa DESHACER antes.");return;
            }
            if(MessageBox.Show(
                "Windows muestra TCP Auto-Tuning en '"+current+"'.\n\n" +
                "Restaurar el ajuste de recepción TCP a Normal puede ayudar si estaba limitado, pero no garantiza 300/150 Mb/s.\n"+
                "Este ajuste afecta tanto Ethernet como Wi-Fi y requiere autorización de administrador. Se guardará copia para deshacer.\n\n¿Autorizar el cambio?",
                "HYPERFLOW V7 | OPTIMIZACIÓN CON PERMISO",MessageBoxButtons.YesNo,MessageBoxIcon.Question)!=DialogResult.Yes)return;
            string safe=StrictMode(current);if(safe=="")return;
            File.WriteAllText(stateFile,safe,Encoding.UTF8);
            if(!AdminNetsh("normal")){
                Log("Cambio no confirmado. Puedes reintentar o recuperar con DESHACER.");return;
            }
            string after=TcpLevel();
            Log("TCP después de reparar: "+(after==""?"sin verificar":after));
            if(after!="normal")Log("No se pudo confirmar. Se mantiene copia de restauración.");
            else Log("Ajuste aplicado. Compara velocidad real antes/después (no supone ganancia garantizada).");
        }
        void RestoreTcp(){
            if(!File.Exists(stateFile)){Log("No hay cambios TCP de PulseRoute que deshacer.");return;}
            string before=StrictMode(File.ReadAllText(stateFile,Encoding.UTF8).Trim());
            if(before==""){Log("Copia de estado incorrecta. No hacemos cambios.");return;}
            if(MessageBox.Show("Restaurar el anterior nivel TCP '"+before+"'?", "Deshacer",MessageBoxButtons.YesNo)!=DialogResult.Yes)return;
            if(AdminNetsh(before)){
                string actual=TcpLevel();
                if(actual==before){File.Delete(stateFile);Log("Configuración restaurada: "+actual);}
                else Log("No se pudo confirmar la restauración. Se ha conservado la copia.");
            }
        }
        bool AdminNetsh(string mode){
            if(StrictMode(mode)=="")return false;
            try{
                // Fixed validated argument and UAC. No powershell scripts, no unsanitised input.
                var p=Process.Start(new ProcessStartInfo("netsh.exe","int tcp set global autotuninglevel="+mode){
                    UseShellExecute=true,Verb="runas",WindowStyle=ProcessWindowStyle.Normal
                });
                if(p==null){Log("No se pudo abrir el proceso autorizado.");return false;}
                if(!p.WaitForExit(12000)){Log("El cambio está pendiente de confirmación de Windows.");return false;}
                if(p.ExitCode!=0){Log("Windows devolvió "+p.ExitCode+". No confirmamos cambio.");return false;}
                return true;
            }catch(System.ComponentModel.Win32Exception){Log("Autorización cancelada o no disponible.");return false;}
            catch(Exception ex){Log("Cambio no aplicado: "+ex.Message);return false;}
        }
        void ConfirmBenchmark(){
            if(MessageBox.Show(
                "Realizar una prueba aproximada de Internet?\n\nDescarga 8 MB y envía 2 MB a un servicio externo (Cloudflare)."+
                " Puede consumir datos de tu SIM según la ruta elegida. Algunas redes bloquean el servicio.\n\nNo se alterarán ajustes de conexión.",
                "MEDICIÓN REAL DE BAJADA Y SUBIDA",MessageBoxButtons.YesNo,MessageBoxIcon.Information)!=DialogResult.Yes)return;
            RunAsync(Benchmark);
        }
        static byte[] DownloadProbe(out long elapsed){
            ServicePointManager.SecurityProtocol|=(SecurityProtocolType)3072;
            var sw=Stopwatch.StartNew();
            var req=(HttpWebRequest)WebRequest.Create("https://speed.cloudflare.com/__down?bytes=8000000");
            req.Timeout=18000;req.ReadWriteTimeout=18000;req.AllowAutoRedirect=false;
            req.AutomaticDecompression=DecompressionMethods.None;
            using(var res=(HttpWebResponse)req.GetResponse()){
                if(res.StatusCode!=HttpStatusCode.OK)throw new IOException("Servicio de prueba no disponible: "+(int)res.StatusCode);
                using(var src=res.GetResponseStream()){
                    using(var mem=new MemoryStream()){
                        byte[] buffer=new byte[32768];int n;
                        while((n=src.Read(buffer,0,buffer.Length))>0){
                            if(mem.Length+n>8000000)throw new IOException("Respuesta más grande de lo permitido");
                            mem.Write(buffer,0,n);
                        }
                        sw.Stop();elapsed=sw.ElapsedMilliseconds;
                        if(mem.Length!=8000000)throw new IOException("Prueba incompleta: "+mem.Length+" bytes");
                        return mem.ToArray();
                    }
                }
            }
        }
        static long UploadProbe(){
            byte[] payload=new byte[2000000]; // fixed amount of neutral test bytes
            new Random(7).NextBytes(payload);
            var sw=Stopwatch.StartNew();
            var req=(HttpWebRequest)WebRequest.Create("https://speed.cloudflare.com/__up");
            req.Method="POST";req.Timeout=18000;req.ReadWriteTimeout=18000;req.AllowAutoRedirect=false;
            req.ContentType="application/octet-stream";req.ContentLength=payload.Length;
            using(var body=req.GetRequestStream())body.Write(payload,0,payload.Length);
            using(var res=(HttpWebResponse)req.GetResponse()){
                if(res.StatusCode!=HttpStatusCode.OK&&res.StatusCode!=HttpStatusCode.NoContent)
                    throw new IOException("Servicio de subida no disponible: "+(int)res.StatusCode);
            }
            sw.Stop();return sw.ElapsedMilliseconds;
        }
        void Benchmark(){
            Log("Prueba de velocidad real: se transferirán hasta 10 MB de datos, no se simularán cifras.");
            double idle=PingHost("1.1.1.1");
            try{
                long elapsed;byte[] data=DownloadProbe(out elapsed);
                double mbps=data.Length*8.0/Math.Max(0.001,elapsed/1000.0)/1e6;
                Log("DESCARGA: "+mbps.ToString("0.0")+" Mb/s ("+(mbps/8.0).ToString("0.00")+" MB/s) · 8 MB / "+elapsed+" ms");
            }catch(Exception e){Log("DESCARGA sin medición fiable: "+e.Message);}
            try{
                long elapsed=UploadProbe();
                double mbps=2000000*8.0/Math.Max(0.001,elapsed/1000.0)/1e6;
                Log("SUBIDA: "+mbps.ToString("0.0")+" Mb/s ("+(mbps/8.0).ToString("0.00")+" MB/s) · 2 MB / "+elapsed+" ms");
            }catch(Exception e){Log("SUBIDA sin medición fiable: "+e.Message);}
            var end=PingHost("1.1.1.1");
            if(idle>=0&&end>=0)Log("Ping antes/después: "+idle.ToString("0")+" / "+end.ToString("0")+
                " ms. No equivale a una prueba controlada de bufferbloat bajo carga.");
            Log("La velocidad depende del proveedor, router, distancia y datos móviles. Prueba repetida y cable puede ofrecer otro resultado.");
        }
        protected override void OnFormClosing(FormClosingEventArgs e){
            timer.Stop();monitoring=false;
            base.OnFormClosing(e);
        }
    }
}