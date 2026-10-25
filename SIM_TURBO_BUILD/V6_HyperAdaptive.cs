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
using Microsoft.Win32;

namespace SimTurboPC {
    /// <summary>
    /// V6 - Conservative, reversible Win11 gaming mode and local network telemetry.
    /// Does not alter drivers, antivirus, TCP registry, QoS, or system proxy.
    /// </summary>
    public sealed class HyperAdaptiveV6 : Form {
        const string PowerHigh="8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c";
        const string RegPath=@"Software\Microsoft\GameBar";
        const string RegValue="AutoGameModeEnabled";
        const string GuidRx=@"[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}";
        readonly Color bg=Color.FromArgb(9,15,29),card=Color.FromArgb(22,36,57),mint=Color.FromArgb(27,223,207);
        readonly System.Windows.Forms.Timer netTimer = new System.Windows.Forms.Timer(), gameTimer = new System.Windows.Forms.Timer();
        readonly Dictionary<string, long[]> counters=new Dictionary<string, long[]>();
        readonly string backupPath;
        DateTime lastCounters=DateTime.MinValue;
        long oldRx=0,oldTx=0;
        Label title, rxLabel,txLabel,pingLabel,lossLabel,jitterLabel, gamingLabel,autoLabel,networkInfo;
        TextBox gameProcesses,log;
        CheckBox highPower;
        Button autopilotButton,boostButton,restoreButton;
        bool autoEnabled=false, boostActive=false, powerRequested=false,manualEnabled=false,gameWasRunning=false;
        int pingBusy=0;
        int netTicks=0;
        public HyperAdaptiveV6() {
            Text="SIM TURBO PC ULTRA · V6 HYPERADAPTIVE";
            ClientSize=new Size(1010,755);MinimumSize=new Size(950,730);
            BackColor=bg;ForeColor=Color.White;Font=new Font("Segoe UI",10);
            StartPosition=FormStartPosition.CenterParent;
            string folder=Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),"SimTurboPC");
            Directory.CreateDirectory(folder);
            backupPath=Path.Combine(folder,"v6_game_mode_restore.txt");
            title=LabelAt("HYPERADAPTIVE V6 · RED + FPS",24,14,948,42,19,true,mint);
            LabelAt("Mediciones reales de red y optimización reversible. No crea ancho de banda ni FPS mágicos.",26,57,946,22,10,false,Color.Silver);
            Section(24,91,962,226);
            LabelAt("RED EN VIVO · tráfico de interfaces y calidad de conexión",41,105,916,29,13,true,mint);
            rxLabel=LabelAt("DESCARGA ACTUAL\n-- MB/s",44,146,225,62,15,true,Color.White);
            txLabel=LabelAt("SUBIDA ACTUAL\n-- MB/s",285,146,225,62,15,true,Color.White);
            pingLabel=LabelAt("PING EXTERIOR\n-- ms",526,146,216,62,15,true,Color.White);
            jitterLabel=LabelAt("JITTER\n-- ms",756,146,202,62,15,true,Color.White);
            lossLabel=LabelAt("PÉRDIDA DE PAQUETES: --",44,229,300,28,11,true,Color.White);
            networkInfo=LabelAt("El tráfico actual NO representa la velocidad máxima de tu conexión.",44,267,895,38,10,false,Color.LightGray);
            Section(24,329,962,265);
            LabelAt("MEJORA DE FPS + AUTOPILOTO INTELIGENTE",41,343,917,30,14,true,mint);
            LabelAt("Procesos de juegos que detectar (nombre .exe sin extensión, separados por comas):",44,383,905,25,10,false,Color.Gainsboro);
            gameProcesses=new TextBox{Text="cs2, RocketLeague, RobloxPlayerBeta, Minecraft.Windows, javaw, FC26, FC27",
                Location=new Point(44,411),Size=new Size(906,31),
                BackColor=Color.FromArgb(32,48,70),ForeColor=Color.White,BorderStyle=BorderStyle.FixedSingle,
                Font=new Font("Segoe UI",11)};
            Controls.Add(gameProcesses);
            highPower=new CheckBox{Text="Permitir plan Alto rendimiento mientras juego (más calor y consumo; opcional)",
                Location=new Point(44,451),Size=new Size(850,29),ForeColor=Color.Gainsboro};
            Controls.Add(highPower);
            boostButton=ButtonAt("MEJORAR FPS AHORA",44,500,270,59,()=>ManualBoost());
            autopilotButton=ButtonAt("AUTOPILOTO: APAGADO",327,500,302,59,()=>ToggleAuto());
            restoreButton=ButtonAt("DESHACER TODO",641,500,310,59,()=>Restore(true));
            gamingLabel=LabelAt("Perfil gaming: SIN CAMBIOS",44,569,400,24,10,true,mint);
            autoLabel=LabelAt("Autopiloto OFF: espera tu autorización.",450,569,505,24,10,false,Color.LightGray);
            LabelAt("REGISTRO · acciones y comprobaciones",25,610,790,29,12,true,mint);
            log=new TextBox{Multiline=true,ReadOnly=true,ScrollBars=ScrollBars.Vertical,Location=new Point(24,641),Size=new Size(963,87),
                Anchor=AnchorStyles.Bottom|AnchorStyles.Left|AnchorStyles.Right,
                BackColor=card,ForeColor=Color.LightCyan,Font=new Font("Consolas",9.5f)};
            Controls.Add(log);
            Log("Red: tráfico real de Windows por segundo, no test de capacidad de Internet.");
            Log("FPS: Game Mode + energía (opcional); sin inyección en juegos, sin alterar antivirus.");
            if(File.Exists(backupPath)) Log("ATENCIÓN: existe copia de recuperación de una sesión anterior. Pulsa DESHACER TODO antes de iniciar.");
            netTimer.Interval=2000;netTimer.Tick += (s,e)=>MeasureNetwork();netTimer.Start();
            gameTimer.Interval=8000;gameTimer.Tick += (s,e)=>AutoTick();
            Shown+=(s,e)=>{MeasureNetwork();CheckPings();};
        }
        void Section(int x,int y,int w,int h){
            Controls.Add(new Panel{Location=new Point(x,y),Size=new Size(w,h),BackColor=card});
            // Background panels behind label and controls.
            Controls[Controls.Count-1].SendToBack();
        }
        Label LabelAt(string txt,int x,int y,int w,int h,float font,bool bold,Color color){
            Label lbl=new Label{Text=txt,Location=new Point(x,y),Size=new Size(w,h),
                ForeColor=color,BackColor=Color.Transparent,Font=new Font("Segoe UI",font,bold?FontStyle.Bold:FontStyle.Regular)};
            Controls.Add(lbl);lbl.BringToFront();return lbl;
        }
        Button ButtonAt(string txt,int x,int y,int w,int h,Action click){
            Button b=new Button{Text=txt,Location=new Point(x,y),Size=new Size(w,h),ForeColor=Color.White,
                BackColor=Color.FromArgb(10,93,93),FlatStyle=FlatStyle.Flat,Font=new Font("Segoe UI",10,FontStyle.Bold)};
            b.FlatAppearance.BorderSize=0;b.Click+=(s,e)=>{try{click();}catch(Exception ex){Log("ERROR: "+ex.Message);}};
            Controls.Add(b);b.BringToFront();return b;
        }
        void Log(string text){
            if(IsDisposed||!IsHandleCreated)return;
            if(InvokeRequired){BeginInvoke((Action)(()=>Log(text)));return;}
            log.AppendText("["+DateTime.Now.ToString("HH:mm:ss")+"] "+text+Environment.NewLine);
        }
        void SetLabel(Label target,string value){
            if(IsDisposed||!IsHandleCreated)return;
            if(InvokeRequired){BeginInvoke((Action)(()=>SetLabel(target,value)));return;}target.Text=value;
        }
        static bool NicWanted(NetworkInterface n){
            if(n.OperationalStatus!=OperationalStatus.Up || n.NetworkInterfaceType==NetworkInterfaceType.Loopback ||
                n.NetworkInterfaceType==NetworkInterfaceType.Tunnel)return false;
            // Limit to physical Wi-Fi and Ethernet; exclude tunnel/VPN/virtual interfaces by default.
            var type=n.NetworkInterfaceType;
            if(type!=NetworkInterfaceType.Wireless80211&&type!=NetworkInterfaceType.Ethernet &&
               type!=NetworkInterfaceType.GigabitEthernet&&type!=NetworkInterfaceType.FastEthernetFx &&
               type!=NetworkInterfaceType.FastEthernetT)return false;
            string name=(n.Name+" "+n.Description).ToLowerInvariant();
            if(name.Contains("virtual")||name.Contains("vpn")||name.Contains("tap-")||
               name.Contains("hyper-v")||name.Contains("loopback"))return false;
            return true;
        }
        void MeasureNetwork(){
            netTicks++;
            try{
                long totalRx=0,totalTx=0;
                int adapters=0;
                foreach(NetworkInterface nic in NetworkInterface.GetAllNetworkInterfaces()){
                    if(!NicWanted(nic))continue;
                    var st=nic.GetIPv4Statistics();
                    if(st.BytesReceived<0||st.BytesSent<0)continue;
                    totalRx+=st.BytesReceived;totalTx+=st.BytesSent;adapters++;
                }
                DateTime now=DateTime.UtcNow;
                if(lastCounters!=DateTime.MinValue){
                    double dt=(now-lastCounters).TotalSeconds;
                    long down=totalRx-oldRx,up=totalTx-oldTx;
                    if(dt>=0.5&&down>=0&&up>=0){
                        double dl=down/dt/1048576.0, ul=up/dt/1048576.0;
                        rxLabel.Text="DESCARGA ACTUAL\n"+dl.ToString("0.000")+" MB/s";
                        txLabel.Text="SUBIDA ACTUAL\n"+ul.ToString("0.000")+" MB/s";
                        networkInfo.Text="Tráfico en "+adapters+" interfaces físicas · ↓ "+(dl*8.388608).ToString("0.00")+
                            " Mb/s · ↑ "+(ul*8.388608).ToString("0.00")+" Mb/s. No mide máximo contratado.";
                    }
                }
                oldRx=totalRx;oldTx=totalTx;lastCounters=now;
                if(netTicks%5==0)CheckPings();
            }catch(Exception ex){if(netTicks%10==1)Log("Lectura de tráfico: "+ex.Message);}
        }
        void CheckPings(){
            if(Interlocked.CompareExchange(ref pingBusy,1,0)!=0)return;
            ThreadPool.QueueUserWorkItem(s=>{
                try{
                    var timings=new List<long>();int lost=0;
                    for(int i=0;i<4;i++){
                        try{using(var ping=new Ping()){
                            var answer=ping.Send("1.1.1.1",1000,new byte[]{1,2,3,4},new PingOptions(64,true));
                            if(answer.Status==IPStatus.Success)timings.Add(answer.RoundtripTime);
                            else lost++;
                        }}catch{lost++;}
                    }
                    if(timings.Count>0){
                        double avg=timings.Average();
                        double jitter=0;
                        for(int i=1;i<timings.Count;i++) jitter+=Math.Abs(timings[i]-timings[i-1]);
                        if(timings.Count>1)jitter/=timings.Count-1;
                        SetLabel(pingLabel,"PING EXTERIOR\n"+avg.ToString("0.0")+" ms");
                        SetLabel(jitterLabel,timings.Count>1?"JITTER\n"+jitter.ToString("0.0")+" ms":"JITTER\nSin muestras");
                    }else{
                        SetLabel(pingLabel,"PING EXTERIOR\nNo responde");
                        SetLabel(jitterLabel,"JITTER\nNo disponible");
                    }
                    SetLabel(lossLabel,"PÉRDIDA ICMP: "+(lost*25)+"% (4 muestras)");
                    if(lost==4 && netTicks%20==0)Log("1.1.1.1 no respondió ICMP. Puede estar bloqueado: no implica pérdida general de Internet.");
                }catch(Exception e){Log("Ping: "+e.Message);}
                finally{Interlocked.Exchange(ref pingBusy,0);}
            });
        }
        static string Command(string executable,string args){
            using(Process p=new Process()){
                p.StartInfo=new ProcessStartInfo(executable,args){
                    UseShellExecute=false,CreateNoWindow=true,RedirectStandardOutput=true,
                    RedirectStandardError=true};
                p.Start();
                string output=p.StandardOutput.ReadToEnd();
                if(!p.WaitForExit(4500)){try{p.Kill();}catch{}throw new IOException("powercfg no responde");}
                if(p.ExitCode!=0)throw new IOException("powercfg error "+p.ExitCode);
                return output;
            }
        }
        static string ActivePower(){
            Match m=Regex.Match(Command("powercfg.exe","/getactivescheme"),GuidRx);
            return m.Success?m.Value.ToLowerInvariant():"";
        }
        static int GameModeValue(){
            using(var k=Registry.CurrentUser.OpenSubKey(RegPath)){
                if(k==null)return -1;
                var v=k.GetValue(RegValue,null);
                return v==null?-1:Convert.ToInt32(v);
            }
        }
        static void SetGameMode(int value){
            using(var k=Registry.CurrentUser.CreateSubKey(RegPath)){
                if(value<0)k.DeleteValue(RegValue,false);
                else k.SetValue(RegValue,value,RegistryValueKind.DWord);
            }
        }
        void BackupBeforeChange(){
            if(File.Exists(backupPath))throw new InvalidOperationException(
                "Existe copia de recuperación de otra sesión. Pulsa DESHACER TODO antes de continuar.");
            string oldPower=ActivePower();
            string original="mode="+GameModeValue()+"\npower="+oldPower+"\n";
            File.WriteAllText(backupPath,original,Encoding.UTF8);
            Log("Copia reversible guardada en "+backupPath);
        }
        bool ApplyBoost(bool needPower){
            if(!boostActive){
                BackupBeforeChange();
                SetGameMode(1);
                boostActive=true;
                powerRequested=needPower;
                Log("Game Mode activado para la cuenta Windows.");
                if(needPower)SwitchPower();
                gamingLabel.Text="Gaming: activo · Game Mode"+(needPower?" + plan de energía (ver registro)":"");
            } else {
                // Only enforce while running; every 8 seconds, no performance-killing process restarts.
                if(GameModeValue()!=1){SetGameMode(1);Log("Autopiloto: se ha repuesto Game Mode.");}
                if(needPower && powerRequested){
                    try{if(ActivePower()!=PowerHigh)SwitchPower();}catch(Exception e){Log("Energía: "+e.Message);}
                }
            }
            return true;
        }
        void SwitchPower(){
            try{
                string current=ActivePower();
                if(current==PowerHigh)return;
                Command("powercfg.exe","/setactive "+PowerHigh);
                if(ActivePower()==PowerHigh)Log("Plan Alto rendimiento activado (restaurable).");
                else Log("Alto rendimiento no disponible, se mantiene el plan original.");
            }catch(Exception e){Log("Alto rendimiento no aplicado: "+e.Message);}
        }
        void ManualBoost(){
            if(File.Exists(backupPath) && !boostActive){Log("Restaura la sesión anterior antes de usar MEJORAR FPS.");return;}
            if(MessageBox.Show("Aplicar Game Mode de Windows y, si está marcado, plan Alto rendimiento?\n\nNo fuerza prioridad alta ni cierra procesos. No garantiza más FPS. Al cerrar el centro se restauran los ajustes originales.",
                "SIM TURBO V6 · Confirmación",MessageBoxButtons.YesNo,MessageBoxIcon.Question)!=DialogResult.Yes)return;
            manualEnabled=true;ApplyBoost(highPower.Checked);
            Log("FPS: perfil aplicado. Mide FPS reales con Win+G antes y después en la misma escena.");
        }
        bool AnyGame(){
            string[] names=gameProcesses.Text.Split(new char[]{',',';'},StringSplitOptions.RemoveEmptyEntries)
                .Select(x=>x.Trim().Replace(".exe","")).Where(x=>x.Length>0&&x.Length<90).ToArray();
            if(names.Length==0)return false;
            foreach(string name in names){
                try{if(Process.GetProcessesByName(name).Length>0)return true;}catch{}
            }
            return false;
        }
        void ToggleAuto(){
            if(autoEnabled){
                autoEnabled=false;gameTimer.Stop();autopilotButton.Text="AUTOPILOTO: APAGADO";
                autoLabel.Text="Autopiloto OFF · restaurando cambios.";
                Restore(false);return;
            }
            if(File.Exists(backupPath)&& !boostActive){
                MessageBox.Show("Hay una copia de recuperación anterior. Pulsa DESHACER TODO antes de iniciar.","Protección de ajustes");
                return;
            }
            if(MessageBox.Show("AUTOPILOTO V6:\n\nCada 8 segundos detectará si estás jugando a los procesos de la lista.\nAl detectar un juego activará Game Mode y, si lo autorizas, el plan Alto rendimiento. Al salir del juego restaurará lo anterior.\n\nNo instala drivers, no termina procesos ni toca el antivirus. Debes mantener abierta esta ventana.\n\n¿Activarlo?",
                "Autopiloto de juegos",MessageBoxButtons.YesNo,MessageBoxIcon.Question)!=DialogResult.Yes)return;
            autoEnabled=true;gameWasRunning=false;manualEnabled=false;
            autopilotButton.Text="AUTOPILOTO: ACTIVADO";autoLabel.Text="Buscando procesos de juegos...";
            gameTimer.Start();AutoTick();Log("Autopiloto iniciado (8 s por comprobación).");
        }
        void AutoTick(){
            if(!autoEnabled)return;
            bool running=AnyGame();
            if(running){
                if(!gameWasRunning){Log("Juego detectado. Activando perfil gaming autorizado.");gameWasRunning=true;}
                if(!boostActive)ApplyBoost(highPower.Checked);
                else ApplyBoost(powerRequested);
                autoLabel.Text="Autopiloto ON · juego detectado";
            }else{
                if(gameWasRunning){
                    gameWasRunning=false;
                    Log("Juego cerrado. Restaurando perfil anterior.");
                    Restore(false);
                }
                autoLabel.Text="Autopiloto ON · esperando juego";
            }
        }
        void Restore(bool disableAuto){
            if(disableAuto){autoEnabled=false;gameTimer.Stop();autopilotButton.Text="AUTOPILOTO: APAGADO";}
            if(!File.Exists(backupPath)){
                boostActive=false;manualEnabled=false;gamingLabel.Text="Gaming: sin cambios";
                if(disableAuto)Log("No hay copia pendiente de restauración.");
                return;
            }
            string text=File.ReadAllText(backupPath,Encoding.UTF8);
            Match mm=Regex.Match(text,@"(?:^|\n)mode=(-?\d+)");
            Match mp=Regex.Match(text,@"(?:^|\n)power=("+GuidRx+")");
            int origMode=mm.Success?int.Parse(mm.Groups[1].Value):-1;
            string origPower=mp.Success?mp.Groups[1].Value.ToLowerInvariant():"";
            bool allGood=true;
            try{
                if(GameModeValue()==1)SetGameMode(origMode); // respect edits made manually while we were running
                Log("Game Mode anterior restaurado, si seguía bajo control de V6.");
            }catch(Exception e){Log("Restaurar Game Mode: "+e.Message);allGood=false;}
            if(origPower.Length>0){
                try{
                    if(ActivePower()==PowerHigh && origPower!=PowerHigh)
                        Command("powercfg.exe","/setactive "+origPower);
                    if(ActivePower()==PowerHigh && origPower!=PowerHigh)allGood=false;
                }catch(Exception e){Log("Restaurar energía: "+e.Message);allGood=false;}
            }
            if(allGood){
                File.Delete(backupPath);boostActive=false;manualEnabled=false;powerRequested=false;
                gamingLabel.Text="Gaming: ajustes restaurados";Log("Cambios V6 revertidos.");
            }else Log("No se pudo restaurar todo. Conservada copia para reintentar.");
        }
        protected override void OnFormClosing(FormClosingEventArgs e){
            netTimer.Stop();gameTimer.Stop();autoEnabled=false;
            try{Restore(false);}catch(Exception ex){MessageBox.Show(
                "No se pudieron restaurar los ajustes: "+ex.Message+
                "\n\nReabre este centro y pulsa DESHACER TODO.","SIM TURBO V6");}
            base.OnFormClosing(e);
        }
    }
}