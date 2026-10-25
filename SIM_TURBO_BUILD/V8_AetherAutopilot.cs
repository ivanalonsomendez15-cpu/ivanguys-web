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
using Microsoft.Win32;

namespace SimTurboPC {
    // AETHER-GUARD: consent-based global orchestrator of safe diagnostics and reversible gaming profile.
    public sealed class AetherAutopilotV8 : Form {
        const string GameModePath=@"Software\Microsoft\GameBar";
        const string GameModeValue="AutoGameModeEnabled";
        System.Windows.Forms.Timer monitor=new System.Windows.Forms.Timer();
        readonly Color bg=Color.FromArgb(8,15,27),accent=Color.FromArgb(26,224,202);
        readonly CheckBox optNetwork,optGames,optDrivers;
        readonly Button toggle,manual,restore;
        readonly TextBox output,games;
        readonly Label health;
        bool enabled=false,gameBoost=false;
        bool gameModeOwned=false,gameModeChangedExternally=false;
        string backupFile;
        int loops=0;
        int lastFailureCount=0;
        long lastAdapterRx=0, lastAdapterTx=0;
        DateTime lastSample=DateTime.MinValue;
        long previousPing=-1;
        bool scanRunning=false;
        public AetherAutopilotV8(){
            Text="SIM TURBO PC ULTRA V8 · AETHER AUTOPILOT";
            ClientSize=new Size(840,690);MinimumSize=new Size(800,670);
            Font=new Font("Segoe UI",10);
            BackColor=bg;ForeColor=Color.White;StartPosition=FormStartPosition.CenterParent;
            string dir=Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),"SimTurboPC");
            Directory.CreateDirectory(dir);
            backupFile=Path.Combine(dir,"aether_v8_gamemode_original.txt");
            AddLabel("AETHER AUTOPILOT V8",24,17,790,41,19,true,accent);
            AddLabel("Supervisión continua de red y juegos. Cambios mínimos y reversibles con tu autorización.",
                24,61,790,42,10,false,Color.LightGray);
            optNetwork=Option("RED: ping, jitter, saturación, Wi-Fi y cable (solo diagnóstico)",24,120,true);
            optGames=Option("FPS: activar Game Mode mientras juegas y restaurarlo después",24,158,false);
            optDrivers=Option("DRIVERS: recordar actualizaciones oficiales (sin instalar solos)",24,196,true);
            AddLabel("Juegos que detectar (procesos .exe sin extensión):",24,246,770,27,11,true,accent);
            games=new TextBox{Location=new Point(24,278),Size=new Size(790,30),
                BackColor=Color.FromArgb(24,42,60),ForeColor=Color.White,
                Text="cs2, RocketLeague, RobloxPlayerBeta, Minecraft.Windows, javaw, FC26, FC27"};
            Controls.Add(games);
            toggle=Button("INICIAR PILOTO GLOBAL",24,328,390,52,()=>Toggle());
            manual=Button("ANALIZAR AHORA",427,328,386,52,()=>ScanNow());
            restore=Button("PARAR Y RESTAURAR",24,392,390,50,()=>StopAndRestore());
            Button("ABRIR WINDOWS UPDATE",427,392,386,50,()=>Open("ms-settings:windowsupdate"));
            health=AddLabel("PILOTO DESACTIVADO · no se han modificado ajustes",24,461,790,29,10,true,accent);
            AddLabel("DIARIO DE AETHER · Las cifras son mediciones, no multiplicadores imaginarios",24,498,790,30,11,true,accent);
            output=new TextBox{Location=new Point(24,528),Size=new Size(790,131),ReadOnly=true,
                Multiline=true,ScrollBars=ScrollBars.Vertical,
                BackColor=Color.FromArgb(20,35,54),ForeColor=Color.LightCyan,Font=new Font("Consolas",9.3f)};
            Controls.Add(output);
            monitor.Interval=10000;monitor.Tick+=(s,e)=>ScanNow();
            Log("El enlace Wi-Fi + SIM V8 se autoajusta al iniciar una descarga compatible.");
            Log("No actualiza drivers ni manipula el router de forma silenciosa.");
            if(File.Exists(backupFile)) Log("Hay una restauración pendiente de otra sesión; revisa PARAR Y RESTAURAR.");
        }
        Label AddLabel(string text,int x,int y,int w,int h,float size,bool bold,Color fg){
            var l=new Label{Text=text,Location=new Point(x,y),Size=new Size(w,h),
                ForeColor=fg,Font=new Font("Segoe UI",size,bold?FontStyle.Bold:FontStyle.Regular)};
            Controls.Add(l);return l;
        }
        CheckBox Option(string text,int x,int y,bool value){
            var c=new CheckBox{Text=text,Location=new Point(x,y),Size=new Size(790,30),
                Checked=value,ForeColor=Color.White};
            Controls.Add(c);return c;
        }
        Button Button(string text,int x,int y,int w,int h,Action onClick){
            var b=new Button{Text=text,Location=new Point(x,y),Size=new Size(w,h),ForeColor=Color.White,
                BackColor=Color.FromArgb(10,93,93),FlatStyle=FlatStyle.Flat,Font=new Font("Segoe UI",10,FontStyle.Bold)};
            b.FlatAppearance.BorderSize=0;b.Click+=(s,e)=>{try{onClick();}catch(Exception ex){Log("Error: "+ex.Message);}};
            Controls.Add(b);return b;
        }
        void Log(string line){
            if(IsDisposed||!IsHandleCreated)return;
            if(InvokeRequired){try{BeginInvoke((Action)(()=>Log(line)));}catch{}return;}
            output.AppendText("["+DateTime.Now.ToString("HH:mm:ss")+"] "+line+Environment.NewLine);
        }
        void ShowHealth(string s){
            if(IsDisposed||!IsHandleCreated)return;
            if(InvokeRequired){try{BeginInvoke((Action)(()=>ShowHealth(s)));}catch{}return;}
            health.Text=s;
        }
        static string[] Processes(string text){
            return text.Split(new[]{',',';'},StringSplitOptions.RemoveEmptyEntries)
                .Select(x=>x.Trim()).Where(x=>x.Length>0&&x.Length<90)
                .Select(x=>x.EndsWith(".exe",StringComparison.OrdinalIgnoreCase)?x.Substring(0,x.Length-4):x).ToArray();
        }
        static bool Playing(string text){
            foreach(string game in Processes(text)){
                try{if(Process.GetProcessesByName(game).Length>0)return true;}catch{}
            }
            return false;
        }
        static int GetGameMode(){
            using(var key=Registry.CurrentUser.OpenSubKey(GameModePath)){
                object v=key==null?null:key.GetValue(GameModeValue,null);
                if(v==null)return -1;
                try{return Convert.ToInt32(v);}catch{return -1;}
            }
        }
        static void SetGameMode(int value){
            using(var key=Registry.CurrentUser.CreateSubKey(GameModePath)){
                if(value<0)key.DeleteValue(GameModeValue,false);
                else key.SetValue(GameModeValue,value,RegistryValueKind.DWord);
            }
        }
        void SetBoost(bool active){
            if(active==gameBoost)return;
            if(active){
                if(!gameModeOwned){
                    if(File.Exists(backupFile)){
                        Log("Existe configuración previa por recuperar. No se aplicará un nuevo cambio.");return;
                    }
                    int before=GetGameMode();
                    File.WriteAllText(backupFile,before.ToString(),Encoding.UTF8);
                    gameModeOwned=true;
                }
                SetGameMode(1);
                gameBoost=true;
                Log("Juego detectado: Game Mode activado (estado previo guardado).");
            }else RestoreGameMode();
        }
        void RestoreGameMode(){
            if(!File.Exists(backupFile)){gameBoost=false;gameModeOwned=false;return;}
            try{
                int before; if(!int.TryParse(File.ReadAllText(backupFile,Encoding.UTF8).Trim(),out before))
                    throw new IOException("Copia de Game Mode no válida");
                int now=GetGameMode();
                if(now==1) SetGameMode(before);
                else if(now!=before) {
                    gameModeChangedExternally=true;
                    Log("Se detectó cambio externo de Game Mode; no lo sobrescribimos.");
                }
                File.Delete(backupFile);
                gameModeOwned=false;gameBoost=false;
                Log("Game Mode restaurado (o cambio externo respetado).");
            }catch(Exception e){Log("Restauración pendiente: "+e.Message);}
        }
        void Open(string uri){
            Process.Start(new ProcessStartInfo(uri){UseShellExecute=true});
        }
        void Toggle(){
            if(enabled){StopAndRestore();return;}
            if(File.Exists(backupFile)){
                MessageBox.Show("Queda una copia de restauración anterior. Pulsa PARAR Y RESTAURAR antes de iniciar.","AETHER");
                return;
            }
            if(MessageBox.Show("Iniciar autopiloto?\n\nCada 10 segundos medirá el estado de red. Si autorizas FPS, activará Game Mode solo al detectar uno de los juegos de tu lista y lo restaurará cuando termines.\n\nNo instala drivers automáticamente ni desactiva antivirus. Los datos de la SIM solo se usarán si inicias una descarga con el módulo de agregación.\n\n¿Autorizas?",
                "AETHER AUTOPILOT V8",MessageBoxButtons.YesNo,MessageBoxIcon.Question)!=DialogResult.Yes)return;
            enabled=true;
            toggle.Text="PILOTO ACTIVO · PULSA PARA DETENER";
            monitor.Start();
            Log("Piloto global iniciado con módulos seleccionados.");
            ScanNow();
        }
        void StopAndRestore(){
            enabled=false;monitor.Stop();toggle.Text="INICIAR PILOTO GLOBAL";
            RestoreGameMode();
            ShowHealth("PILOTO APAGADO · comprobación y restauración ejecutadas");
            Log("Autopiloto detenido. No se han cambiado DNS, firewall ni controladores.");
        }
        void ScanNow(){
            if(scanRunning)return;
            scanRunning=true;
            string selectedGames=games.Text;
            bool doNetwork=optNetwork.Checked,doGames=optGames.Checked,doDrivers=optDrivers.Checked;
            ThreadPool.QueueUserWorkItem(o=>{
                try{
                    int interval=Interlocked.Increment(ref loops);
                    if(doGames){
                        bool found=Playing(selectedGames);
                        if(InvokeRequired)BeginInvoke((Action)(()=>{
                            try {if(enabled&&optGames.Checked) SetBoost(found);
                                else if(!enabled) RestoreGameMode();
                            }catch(Exception ex){Log("Game Mode: "+ex.Message);}
                        }));
                    }
                    if(doNetwork) MeasureNetwork(interval);
                    if(doDrivers && interval%180==0)
                        Log("DRIVERS: revisa Windows Update y NVIDIA. Sin actualizaciones automáticas ocultas.");
                }catch(Exception ex){Log("Piloto: "+ex.Message);}
                finally{scanRunning=false;}
            });
        }
        static bool Primary(NetworkInterface nic){
            if(nic.OperationalStatus!=OperationalStatus.Up)return false;
            if(nic.NetworkInterfaceType!=NetworkInterfaceType.Wireless80211 &&
               nic.NetworkInterfaceType!=NetworkInterfaceType.Ethernet &&
               nic.NetworkInterfaceType!=NetworkInterfaceType.GigabitEthernet)return false;
            var desc=(nic.Name+" "+nic.Description).ToLowerInvariant();
            if(desc.Contains("virtual")||desc.Contains("vpn")||desc.Contains("hyper-v"))return false;
            return true;
        }
        void MeasureNetwork(int n){
            long rx=0,tx=0;int devices=0;
            foreach(var nic in NetworkInterface.GetAllNetworkInterfaces().Where(Primary)){
                var st=nic.GetIPv4Statistics();
                rx+=st.BytesReceived;tx+=st.BytesSent;devices++;
            }
            DateTime now=DateTime.UtcNow;
            if(lastSample!=DateTime.MinValue){
                double sec=(now-lastSample).TotalSeconds;
                if(sec>0.5&&rx>=lastAdapterRx&&tx>=lastAdapterTx)
                    Log("Red ("+devices+" interfaces): ↓ "+((rx-lastAdapterRx)/sec/1048576.0).ToString("0.00")+
                        " MB/s · ↑ "+((tx-lastAdapterTx)/sec/1048576.0).ToString("0.00")+" MB/s");
            }
            lastAdapterRx=rx;lastAdapterTx=tx;lastSample=now;
            var times=new List<long>();int missed=0;
            for(int i=0;i<3;i++){
                try{using(var ping=new Ping()){
                    PingReply r=ping.Send("1.1.1.1",950);
                    if(r.Status==IPStatus.Success) times.Add(r.RoundtripTime);
                    else missed++;
                }}catch{missed++;}
            }
            if(times.Count>0){
                double avg=times.Average();
                double jitter=times.Count>=2?Enumerable.Range(1,times.Count-1).Average(i=>Math.Abs(times[i]-times[i-1])):0.0;
                ShowHealth("RED: ping "+avg.ToString("0")+" ms · jitter "+jitter.ToString("0")+" ms · ICMP "+missed+"/3 perdidos");
                if(previousPing>0&&avg>previousPing+55)
                    Log("AETHER ALERTA: ping subió "+(avg-previousPing).ToString("0")+" ms respecto a la muestra anterior.");
                previousPing=(long)avg;
            } else if(n%6==1) Log("No hay respuesta ICMP; puede estar filtrada, no se cambia la red.");
        }
        protected override void OnFormClosing(FormClosingEventArgs e){
            StopAndRestore();base.OnFormClosing(e);
        }
    }
}