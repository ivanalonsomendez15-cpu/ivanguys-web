using System;
using System.Collections.Concurrent;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;
using System.Windows.Forms;

namespace SimTurboPC {
    // V4: suma dos rutas reales para un mismo archivo HTTP Range. No es una VPN universal.
    public class AetherBondedDownloader : Form {
        readonly string phoneIp, token;
        TextBox url, log;
        Label info;
        Button go, cancel;
        CancellationTokenSource cts;
        TcpClient activeCellClient;
        readonly object cellClientLock=new object();
        void CloseCellSocket() { lock(cellClientLock){ if(activeCellClient!=null) try{activeCellClient.Close();}catch{} } }
        volatile bool running;
        long wifiBytes, cellBytes;
        readonly object writeLock = new object();
        const int Chunk = 512 * 1024;
        const long MaxBytes = 128L * 1024 * 1024;
        struct Part { public long start,end; public Part(long a,long b) {start=a;end=b;} }
        public AetherBondedDownloader(string address,string code) {
            phoneIp=address;token=code;
            Text="SIM TURBO ULTRA V8 · SUMAR WI-FI + SIM (ARCHIVOS)";
            ClientSize=new Size(770,480);MinimumSize=new Size(770,480);
            BackColor=Color.FromArgb(9,15,29);ForeColor=Color.White;
            Font=new Font("Segoe UI",11);StartPosition=FormStartPosition.CenterParent;
            Label title=new Label{Text="AETHER-LINK V8 · DESCARGA EN DOS RUTAS",ForeColor=Color.Turquoise,Font=new Font("Segoe UI",17,FontStyle.Bold),Location=new Point(22,16),Size=new Size(730,40)};
            Controls.Add(title);
            Label description=new Label{Text="Piloto adaptativo: reparte por Wi-Fi/Ethernet y SIM; rescata fragmentos lentos.\nNo acelera automáticamente videojuegos, streaming ni toda la conexión Windows.",Location=new Point(24,67),Size=new Size(725,56),ForeColor=Color.LightGray};
            Controls.Add(description);
            Controls.Add(new Label{Text="URL HTTPS de un archivo compatible con descargas parciales:",Location=new Point(24,140),Size=new Size(730,24)});
            url=new TextBox{Location=new Point(24,166),Size=new Size(719,32),Font=new Font("Segoe UI",11),BackColor=Color.FromArgb(27,43,65),ForeColor=Color.White,BorderStyle=BorderStyle.FixedSingle}; Controls.Add(url);
            go=new Button{Text="DESCARGAR CON WI-FI + SIM",Location=new Point(24,215),Size=new Size(345,50),BackColor=Color.FromArgb(8,105,103),ForeColor=Color.White,FlatStyle=FlatStyle.Flat};Controls.Add(go);
            cancel=new Button{Text="CANCELAR",Location=new Point(380,215),Size=new Size(175,50),BackColor=Color.FromArgb(54,64,83),ForeColor=Color.White,FlatStyle=FlatStyle.Flat,Enabled=false};Controls.Add(cancel);
            info=new Label{Text="Conexión móvil: "+phoneIp+" · Puerto 45726 (la APK debe tener SIM activa)",Location=new Point(24,281),Size=new Size(730,49),ForeColor=Color.LightCyan};Controls.Add(info);
            log=new TextBox{Multiline=true,ReadOnly=true,ScrollBars=ScrollBars.Vertical,Location=new Point(24,329),Size=new Size(719,125),Font=new Font("Consolas",10),BackColor=Color.FromArgb(14,23,40),ForeColor=Color.White};Controls.Add(log);
            go.Click += (s,e)=>StartDownload();
            cancel.Click += (s,e)=>{if(cts!=null)cts.Cancel();CloseCellSocket();Log("Cancelación solicitada...");};
            FormClosing += (s,e)=>{if(cts!=null)cts.Cancel();CloseCellSocket();};
            Log("Límite de esta prueba: 128 MiB. Requiere HTTPS, soporte Range e identificador de versión.");
            Log("Los datos de la SIM se descuentan de la tarifa. Puede ir peor si Wi-Fi local es débil.");
        }
        void Log(string text) { if(IsDisposed||!IsHandleCreated)return; if(InvokeRequired){BeginInvoke((Action)(()=>Log(text)));return;} log.AppendText(DateTime.Now.ToString("HH:mm:ss")+"  "+text+Environment.NewLine); }
        void Status(string text) {if(IsDisposed||!IsHandleCreated)return;if(InvokeRequired){BeginInvoke((Action)(()=>Status(text)));return;}info.Text=text;}
        static bool IsPublicHttps(Uri uri) {
            if(uri==null||uri.Scheme!="https"||string.IsNullOrEmpty(uri.Host)||uri.UserInfo.Length>0)return false;
            IPAddress ip;
            if(IPAddress.TryParse(uri.Host,out ip))return false;
            if(uri.Host.Equals("localhost",StringComparison.OrdinalIgnoreCase)||
                uri.Host.EndsWith(".local",StringComparison.OrdinalIgnoreCase) ||
                uri.Host.EndsWith(".internal",StringComparison.OrdinalIgnoreCase))return false;
            return true;
        }
        void StartDownload() {
            if(running)return;
            Uri uri;if(!Uri.TryCreate(url.Text.Trim(),UriKind.Absolute,out uri)||!IsPublicHttps(uri)){
                MessageBox.Show("Usa una URL HTTPS pública de un archivo. No se permiten IP ni servidores locales.");return;
            }
            if(string.IsNullOrEmpty(phoneIp)||string.IsNullOrEmpty(token)){
                MessageBox.Show("Primero empareja la APK con Windows y activa PUENTE SIM.");return;
            }
            using(var d=new SaveFileDialog()) {
                d.Title="Guardar el archivo reconstruido";d.FileName=Path.GetFileName(Uri.UnescapeDataString(uri.AbsolutePath));
                if(string.IsNullOrWhiteSpace(d.FileName))d.FileName="descarga.bin";
                if(d.ShowDialog()!=DialogResult.OK)return;
                if(MessageBox.Show("AETHER-LINK V8 usará el Internet móvil en fragmentos; consume datos de la SIM y podría no acelerar el archivo.\n\nContinuar con control automático de rutas?", "Autorizar uso de SIM",MessageBoxButtons.YesNo,MessageBoxIcon.Warning)!=DialogResult.Yes)return;
                string target=d.FileName;
                cts=new CancellationTokenSource();running=true;go.Enabled=false;cancel.Enabled=true;
                wifiBytes=0;cellBytes=0;
                Log("Comenzando prueba; no cambia el proxy ni rutas de Windows.");
                Thread t=new Thread(()=>Run(uri,target,cts.Token)){IsBackground=true};t.Start();
            }
        }
        HttpWebRequest Request(Uri url,long a,long b,string validator) {
            var r=(HttpWebRequest)WebRequest.Create(url);
            r.Method="GET";r.AllowAutoRedirect=false;r.AutomaticDecompression=DecompressionMethods.None;
            r.Timeout=12000;r.ReadWriteTimeout=20000;r.KeepAlive=false;
            r.UserAgent="SimTurboPC-BondedDownload/4.0";r.Accept="*/*";
            r.AddRange(a,b);
            if(!String.IsNullOrEmpty(validator))r.Headers["If-Range"]=validator;
            return r;
        }
        static string RangeValue(WebHeaderCollection h,long a,long b,long total) {
            string s=h["Content-Range"]??"";
            var m=Regex.Match(s,@"^bytes (\d+)-(\d+)/(\d+)$");
            if(!m.Success||long.Parse(m.Groups[1].Value)!=a||
               long.Parse(m.Groups[2].Value)!=b||long.Parse(m.Groups[3].Value)!=total)
               throw new IOException("Servidor devolvió Content-Range incompatible: "+s);
            return s;
        }
        static byte[] Exact(Stream stream,int n,CancellationToken ct) {
            var data=new byte[n];int off=0;
            while(off<n) {
                ct.ThrowIfCancellationRequested();
                int x=stream.Read(data,off,n-off);
                if(x==0)throw new IOException("Datos incompletos ("+off+"/"+n+")");
                off+=x;
            }
            return data;
        }
        byte[] WifiPart(Uri url,long start,long end,long total,string validator,CancellationToken ct) {
            var req=Request(url,start,end,validator);
            using(var res=(HttpWebResponse)req.GetResponse()) {
                if(res.StatusCode!=HttpStatusCode.PartialContent)throw new IOException("Wi-Fi: el servidor no admite Range 206");
                RangeValue(res.Headers,start,end,total);
                if(res.ContentLength!=(end-start+1))throw new IOException("Wi-Fi: longitud errónea");
                using(var stream=res.GetResponseStream())return Exact(stream,checked((int)(end-start+1)),ct);
            }
        }
        static string Line(Stream s) {
            var b=new MemoryStream();for(int i=0;i<512;i++){int x=s.ReadByte();if(x<0)throw new IOException("Sin respuesta del móvil");if(x==10) return Encoding.ASCII.GetString(b.ToArray()).Trim();if(x!=13)b.WriteByte((byte)x);}
            throw new IOException("Respuesta del móvil demasiado larga");
        }
        byte[] CellPart(Uri url,long start,long end,long total,string validator,CancellationToken ct) {
            using(var client=new TcpClient()) {
                lock(cellClientLock) activeCellClient=client;
                IAsyncResult ar=client.BeginConnect(phoneIp,45726,null,null);
                try{if(!ar.AsyncWaitHandle.WaitOne(5000))throw new IOException("No responde puerto 45726 del móvil (activa SIM y emparejamiento)");client.EndConnect(ar);}
                finally{ar.AsyncWaitHandle.Close();}
                client.ReceiveTimeout=9000;client.SendTimeout=10000;
                Stream s=client.GetStream();
                string req="STPC4|"+token+"|"+Convert.ToBase64String(Encoding.UTF8.GetBytes(url.AbsoluteUri))+
                     "|"+start+"|"+end+"|"+Convert.ToBase64String(Encoding.UTF8.GetBytes(validator))+"\n";
                var data=Encoding.ASCII.GetBytes(req);s.Write(data,0,data.Length);s.Flush();
                string response=Line(s);
                string[] parts=response.Split('|');
                if(parts.Length!=3||parts[0]!="OK")throw new IOException("SIM: "+response);
                long length,remoteTotal;
                if(!long.TryParse(parts[1],out length)||!long.TryParse(parts[2],out remoteTotal)||
                   length!=end-start+1||remoteTotal!=total)throw new IOException("SIM: rango/tamaño no coinciden");
                return Exact(s,checked((int)length),ct);
            }
        }

        void Run(Uri uri,string path,CancellationToken cancellation) {
            bool success=false;
            var stopwatch=Stopwatch.StartNew();
            bool firstSimError=false;
            try {
                ServicePointManager.SecurityProtocol|=(SecurityProtocolType)3072;
                long total;string validator;
                var probe=Request(uri,0,0,null);
                using(var r=(HttpWebResponse)probe.GetResponse()) {
                    if(r.StatusCode!=HttpStatusCode.PartialContent)throw new IOException("El servidor no devolvió HTTP 206");
                    var m=Regex.Match(r.Headers["Content-Range"]??"", @"^bytes 0-0/(\d+)$");
                    if(!m.Success)throw new IOException("Sin tamaño verificable Range");
                    total=long.Parse(m.Groups[1].Value);
                    string etag=r.Headers["ETag"];
                    if(!String.IsNullOrEmpty(etag)&&!etag.StartsWith("W/")) validator=etag;
                    else validator=r.Headers["Last-Modified"];
                    if(String.IsNullOrEmpty(validator))throw new IOException("Sin ETag firme o Last-Modified: no es seguro unir fragmentos");
                }
                if(total<1024||total>MaxBytes)throw new IOException("V8 admite entre 1 KiB y 128 MiB");
                cancellation.ThrowIfCancellationRequested();
                // El worker más rápido recibe automáticamente más fragmentos.
                var queue=new ConcurrentQueue<Part>();
                for(long i=0;i<total;i+=Chunk)queue.Enqueue(new Part(i,Math.Min(total-1,i+Chunk-1)));
                int jobsTotal=queue.Count;
                var written=new System.Collections.Generic.HashSet<long>();
                long wifiKbps=0, cellKbps=0;
                long cellStartedTicks=0;
                int cellPending=0; // 0 idle, 1 processing, 2 requeued for WiFi
                int disableCell=0;
                Part cellPart=new Part(0,0);
                Exception fatal=null;
                object fatalLock=new object();
                int finished=0;
                Log("AETHER-LINK V8: "+(total/1048576.0).ToString("0.0")+
                    " MiB · "+jobsTotal+" fragmentos de 512 KiB · balance automático ON");
                Log("Rutas disponibles: PC por red principal + teléfono por SIM. La SIM no está garantizada.");
                using(var fs=new FileStream(path,FileMode.Create,FileAccess.Write,FileShare.ReadWrite)) {
                    fs.SetLength(total);
                    Action<Part,byte[],bool> commit=(part,bytes,simRoute)=>{
                        bool unique=false;
                        lock(writeLock){
                            if(!written.Contains(part.start)){
                                cancellation.ThrowIfCancellationRequested();
                                fs.Position=part.start;
                                fs.Write(bytes,0,bytes.Length);
                                written.Add(part.start);
                                unique=true;
                            }
                        }
                        if(unique){
                            if(simRoute) Interlocked.Add(ref cellBytes,bytes.Length);
                            else Interlocked.Add(ref wifiBytes,bytes.Length);
                            Interlocked.Increment(ref finished);
                            Status("Wi-Fi/Ethernet: "+(Interlocked.Read(ref wifiBytes)/1048576.0).ToString("0.0")+
                                " MiB + SIM: "+(Interlocked.Read(ref cellBytes)/1048576.0).ToString("0.0")+
                                " MiB · "+Volatile.Read(ref finished)+"/"+jobsTotal+
                                " · AUTO "+(Volatile.Read(ref disableCell)==1?"solo PC":"ambas rutas"));
                        }
                    };
                    Thread wifi=new Thread(()=>{
                        while(!cancellation.IsCancellationRequested){
                            Part part;
                            if(queue.TryDequeue(out part)){
                                try{
                                    var sw=Stopwatch.StartNew();
                                    byte[] data=WifiPart(uri,part.start,part.end,total,validator,cancellation);
                                    sw.Stop();
                                    long speed=(long)(data.Length*8.0/Math.Max(0.01,sw.Elapsed.TotalSeconds)/1000.0);
                                    Interlocked.Exchange(ref wifiKbps,speed);
                                    commit(part,data,false);
                                }catch(Exception ex){
                                    lock(fatalLock){if(fatal==null)fatal=ex;}
                                    cts.Cancel();
                                    break;
                                }
                            } else {
                                // La SIM nunca puede bloquear la descarga: después de 2,5 s se
                                // duplica el último fragmento pendiente por la red del PC.
                                int pending=Volatile.Read(ref cellPending);
                                if(pending==1){
                                    long start=Interlocked.Read(ref cellStartedTicks);
                                    if(start>0 && DateTime.UtcNow.Ticks-start>TimeSpan.FromMilliseconds(2500).Ticks){
                                        Interlocked.Exchange(ref disableCell,1);
                                        Interlocked.Exchange(ref cellPending,2);
                                        queue.Enqueue(cellPart);
                                        CloseCellSocket();
                                        Log("AETHER-GUARD: fragmento móvil tardando demasiado; recuperado por el PC.");
                                    } else Thread.Sleep(35);
                                } else if(queue.IsEmpty)break;
                            }
                        }
                    }){IsBackground=true};
                    Thread sim=new Thread(()=>{
                        Part part;
                        while(!cancellation.IsCancellationRequested &&
                            Volatile.Read(ref disableCell)==0 && queue.TryDequeue(out part)){
                            cellPart=part;
                            Interlocked.Exchange(ref cellStartedTicks,DateTime.UtcNow.Ticks);
                            Interlocked.Exchange(ref cellPending,1);
                            try{
                                var sw=Stopwatch.StartNew();
                                var data=CellPart(uri,part.start,part.end,total,validator,cancellation);
                                sw.Stop();
                                long speed=(long)(data.Length*8.0/Math.Max(0.01,sw.Elapsed.TotalSeconds)/1000.0);
                                Interlocked.Exchange(ref cellKbps,speed);
                                commit(part,data,true);
                                long other=Interlocked.Read(ref wifiKbps);
                                if(other>0 && speed<other*0.4){
                                    Interlocked.Exchange(ref disableCell,1);
                                    Log("AETHER-SELECT: SIM lenta ("+speed+" frente a "+
                                        other+" kbit/s por Wi-Fi); se desactiva para esta descarga.");
                                }
                            }catch(Exception ex){
                                if(!cancellation.IsCancellationRequested){
                                    firstSimError=true;
                                    Interlocked.Exchange(ref disableCell,1);
                                    if(Volatile.Read(ref cellPending)!=2) queue.Enqueue(part);
                                    Log("AETHER-FALLBACK: fallo móvil ("+ex.Message+
                                        "). La red principal continuará sola.");
                                }
                                break;
                            } finally {
                                if(Volatile.Read(ref cellPending)==1)
                                    Interlocked.Exchange(ref cellPending,0);
                            }
                        }
                    }){IsBackground=true};
                    // Priorizar disponibilidad de Wi-Fi. No exigir conexión SIM para funcionar.
                    wifi.Start();sim.Start();
                    wifi.Join();
                    if(Volatile.Read(ref finished)!=jobsTotal && !cancellation.IsCancellationRequested){
                        // No perder una pieza aunque la SIM falle después de vaciar la cola.
                        if(Volatile.Read(ref cellPending)!=0) {
                            Interlocked.Exchange(ref disableCell,1);
                            bool cellWritten;
                            lock(writeLock) cellWritten=written.Contains(cellPart.start);
                            if(!cellWritten){
                                var data=WifiPart(uri,cellPart.start,cellPart.end,total,validator,cancellation);
                                commit(cellPart,data,false);
                            }
                        }
                    }
                    if(fatal!=null)throw fatal;
                    cancellation.ThrowIfCancellationRequested();
                    if(Volatile.Read(ref finished)!=jobsTotal)
                        throw new IOException("Descarga incompleta: "+finished+"/"+jobsTotal+" fragmentos");
                    // Impide que un worker de la SIM escriba después de cerrar el archivo.
                    if(cts!=null)cts.Cancel();
                    CloseCellSocket();
                    sim.Join(200);
                    fs.Flush();
                }
                success=true;
                stopwatch.Stop();
                double mbps=total*8.0/1e6/Math.Max(0.001,stopwatch.Elapsed.TotalSeconds);
                Log("COMPLETADO: "+mbps.ToString("0.0")+" Mb/s · PC "+
                    (wifiBytes/1048576.0).ToString("0.0")+" MiB · SIM "+
                    (cellBytes/1048576.0).ToString("0.0")+" MiB");
                Log("Algoritmo AETHER-LINK: cola de trabajo + penalización de ruta lenta + rescate automático.");
                if(firstSimError)Log("La descarga se salvó sin la SIM. Comprueba la red del teléfono.");
                Log("Archivo guardado: "+path);
                Status("Descarga completa · "+mbps.ToString("0.0")+
                    " Mb/s · datos PC/SIM mostrados arriba · no garantiza 3x");
            }catch(Exception ex){
                Log("DETENIDO: "+ex.Message);
                Status("No completada: "+ex.Message);
            } finally {
                if(!success)try{File.Delete(path);}catch{}
                if(IsHandleCreated&&!IsDisposed)BeginInvoke((Action)(()=>{
                    running=false;go.Enabled=true;cancel.Enabled=false;
                    if(cts!=null){cts.Dispose();cts=null;}
                }));
            }
        }    }
}