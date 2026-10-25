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
    public class BondedDownloader : Form {
        readonly string phoneIp, token;
        TextBox url, log;
        Label info;
        Button go, cancel;
        CancellationTokenSource cts;
        volatile bool running;
        long wifiBytes, cellBytes;
        readonly object writeLock = new object();
        const int Chunk = 512 * 1024;
        const long MaxBytes = 128L * 1024 * 1024;
        struct Part { public long start,end; public Part(long a,long b) {start=a;end=b;} }
        public BondedDownloader(string address,string code) {
            phoneIp=address;token=code;
            Text="SIM TURBO ULTRA V4 · SUMAR WI-FI + SIM (ARCHIVOS)";
            ClientSize=new Size(770,480);MinimumSize=new Size(770,480);
            BackColor=Color.FromArgb(9,15,29);ForeColor=Color.White;
            Font=new Font("Segoe UI",11);StartPosition=FormStartPosition.CenterParent;
            Label title=new Label{Text="HYPERLINK V4 · DESCARGA EN DOS RUTAS",ForeColor=Color.Turquoise,Font=new Font("Segoe UI",17,FontStyle.Bold),Location=new Point(22,16),Size=new Size(730,40)};
            Controls.Add(title);
            Label description=new Label{Text="El PC pide fragmentos por Wi-Fi y el Android por su SIM. Reensambla un solo archivo.\nNo acelera automáticamente videojuegos, streaming ni toda la conexión Windows.",Location=new Point(24,67),Size=new Size(725,56),ForeColor=Color.LightGray};
            Controls.Add(description);
            Controls.Add(new Label{Text="URL HTTPS de un archivo compatible con descargas parciales:",Location=new Point(24,140),Size=new Size(730,24)});
            url=new TextBox{Location=new Point(24,166),Size=new Size(719,32),Font=new Font("Segoe UI",11),BackColor=Color.FromArgb(27,43,65),ForeColor=Color.White,BorderStyle=BorderStyle.FixedSingle}; Controls.Add(url);
            go=new Button{Text="DESCARGAR CON WI-FI + SIM",Location=new Point(24,215),Size=new Size(345,50),BackColor=Color.FromArgb(8,105,103),ForeColor=Color.White,FlatStyle=FlatStyle.Flat};Controls.Add(go);
            cancel=new Button{Text="CANCELAR",Location=new Point(380,215),Size=new Size(175,50),BackColor=Color.FromArgb(54,64,83),ForeColor=Color.White,FlatStyle=FlatStyle.Flat,Enabled=false};Controls.Add(cancel);
            info=new Label{Text="Conexión móvil: "+phoneIp+" · Puerto 45726 (la APK debe tener SIM activa)",Location=new Point(24,281),Size=new Size(730,49),ForeColor=Color.LightCyan};Controls.Add(info);
            log=new TextBox{Multiline=true,ReadOnly=true,ScrollBars=ScrollBars.Vertical,Location=new Point(24,329),Size=new Size(719,125),Font=new Font("Consolas",10),BackColor=Color.FromArgb(14,23,40),ForeColor=Color.White};Controls.Add(log);
            go.Click += (s,e)=>StartDownload();
            cancel.Click += (s,e)=>{if(cts!=null)cts.Cancel();Log("Cancelación solicitada...");};
            FormClosing += (s,e)=>{if(cts!=null)cts.Cancel();};
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
                IAsyncResult ar=client.BeginConnect(phoneIp,45726,null,null);
                try{if(!ar.AsyncWaitHandle.WaitOne(5000))throw new IOException("No responde puerto 45726 del móvil (activa SIM y emparejamiento)");client.EndConnect(ar);}
                finally{ar.AsyncWaitHandle.Close();}
                client.ReceiveTimeout=35000;client.SendTimeout=10000;
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
            try {
                ServicePointManager.SecurityProtocol|=(SecurityProtocolType)3072;
                long total;string validator;
                var probe=Request(uri,0,0,null);
                using(var r=(HttpWebResponse)probe.GetResponse()) {
                    if(r.StatusCode!=HttpStatusCode.PartialContent)throw new IOException("URL sin respuesta 206 Partial Content");
                    var m=Regex.Match(r.Headers["Content-Range"]??"", @"^bytes 0-0/(\d+)$");
                    if(!m.Success)throw new IOException("No hay tamaño verificable mediante Range");
                    total=long.Parse(m.Groups[1].Value);
                    string etag=r.Headers["ETag"];
                    if(!String.IsNullOrEmpty(etag) && !etag.StartsWith("W/"))validator=etag;
                    else validator=r.Headers["Last-Modified"];
                    if(String.IsNullOrEmpty(validator))throw new IOException("Sin ETag fuerte ni Last-Modified: no es seguro reunir fragmentos");
                }
                if(total<1024||total>MaxBytes)throw new IOException("Se aceptan archivos entre 1 KiB y 128 MiB");
                cancellation.ThrowIfCancellationRequested();
                var queue=new ConcurrentQueue<Part>();
                for(long start=0;start<total;start+=Chunk)queue.Enqueue(new Part(start,Math.Min(total-1,start+Chunk-1)));
                Exception failure=null;
                int succeeded=0;
                object errLock=new object();
                Log("Archivo: "+(total/1048576.0).ToString("0.0")+" MiB. Fragmentos: "+queue.Count);
                using(var fs=new FileStream(path,FileMode.Create,FileAccess.Write,FileShare.ReadWrite)) {
                    fs.SetLength(total);
                    Action<bool> work=viaSim=>{
                        Part part;
                        while(!cancellation.IsCancellationRequested && queue.TryDequeue(out part)) {
                            try{
                                byte[] chunk=viaSim?
                                    CellPart(uri,part.start,part.end,total,validator,cancellation):
                                    WifiPart(uri,part.start,part.end,total,validator,cancellation);
                                cancellation.ThrowIfCancellationRequested();
                                lock(writeLock){fs.Position=part.start;fs.Write(chunk,0,chunk.Length);}
                                if(viaSim)Interlocked.Add(ref cellBytes,chunk.Length);
                                else Interlocked.Add(ref wifiBytes,chunk.Length);
                                Interlocked.Increment(ref succeeded);
                                Status("Wi-Fi: "+(Interlocked.Read(ref wifiBytes)/1048576.0).ToString("0.0")+
                                    " MiB  +  SIM: "+(Interlocked.Read(ref cellBytes)/1048576.0).ToString("0.0")+" MiB  /  "+(total/1048576.0).ToString("0.0")+" MiB");
                            }catch(Exception ex){lock(errLock)if(failure==null)failure=ex;cts.Cancel();break;}
                        }
                    };
                    Thread wifi=new Thread(()=>work(false)){IsBackground=true};
                    Thread sim=new Thread(()=>work(true)){IsBackground=true};
                    wifi.Start();sim.Start();wifi.Join();sim.Join();
                    if(failure!=null)throw failure;
                    cancellation.ThrowIfCancellationRequested();
                    if(succeeded!= (int)((total+Chunk-1)/Chunk))throw new IOException("Faltan fragmentos");
                    fs.Flush();
                }
                success=true; stopwatch.Stop();
                double mbps=total*8.0/1000000.0/Math.Max(0.001,stopwatch.Elapsed.TotalSeconds);
                Log("COMPLETADO · Wi-Fi "+(wifiBytes/1048576.0).ToString("0.0")+" MiB + SIM "+(cellBytes/1048576.0).ToString("0.0")+" MiB. Total "+mbps.ToString("0.0")+" Mb/s");
                Log("Archivo: "+path);
                Status("SUMA REAL DE FRAGMENTOS COMPLETADA · "+mbps.ToString("0.0")+" Mb/s (solo esta descarga)");
            }catch(Exception e) {
                Log("Detenido: "+e.Message);
                Status("No terminado: "+e.Message);
            }finally {
                if(!success)try{File.Delete(path);}catch{}
                if(IsHandleCreated&&!IsDisposed) BeginInvoke((Action)(()=>{
                    running=false;go.Enabled=true;cancel.Enabled=false;
                    if(cts!=null){cts.Dispose();cts=null;}
                }));
            }
        }
    }
}