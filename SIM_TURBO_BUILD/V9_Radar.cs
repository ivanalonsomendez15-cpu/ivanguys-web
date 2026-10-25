using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace SimTurboPC {
    // User-directed sample map, not an indoor radar that sees rooms or walls.
    public sealed class AetherRadarV9 : Form {
        sealed class Sample {public int X,Y,Rssi;public DateTime At;}
        readonly List<Sample> samples=new List<Sample>();
        readonly PictureBox canvas;
        readonly NumericUpDown x,y,rssi;
        readonly Label note;
        readonly string filename;
        readonly Color bg=Color.FromArgb(10,19,34);
        public AetherRadarV9(string root) {
            Text="AETHER V9 · RADAR 3D DE COBERTURA MANUAL";
            ClientSize=new Size(880,650);MinimumSize=new Size(860,650);StartPosition=FormStartPosition.CenterParent;
            BackColor=bg;ForeColor=Color.White;Font=new Font("Segoe UI",10);
            filename=Path.Combine(root,"wifi_radar_samples.csv");
            Controls.Add(new Label{Text="WI-FI RADAR 3D · MUESTRAS DE COBERTURA",
                Font=new Font("Segoe UI",18,FontStyle.Bold),ForeColor=Color.Turquoise,
                Location=new Point(18,15),Size=new Size(845,38)});
            Controls.Add(new Label{Text="Define X,Y (pasos de tu habitación) y mide en cada sitio. Es una vista 3D ilustrativa, no un escáner de paredes.",
                ForeColor=Color.LightGray,Location=new Point(20,61),Size=new Size(840,47)});
            canvas=new PictureBox{Location=new Point(20,116),Size=new Size(840,374),
                BackColor=Color.FromArgb(17,33,52)};
            canvas.Paint+=CanvasPaint;Controls.Add(canvas);
            LabelAt("X:",21,507,26);x=Num(48,504,70,0,20,2);
            LabelAt("Y:",133,507,26);y=Num(162,504,70,0,20,2);
            LabelAt("Señal dBm (estimada o medida):",249,507,266);
            rssi=Num(523,504,81,-100,-20,-65);
            ButtonAt("LEER SEÑAL",619,502,117,38,()=>ReadWifiSignal());
            ButtonAt("AÑADIR PUNTO",742,502,119,38,()=>Add());
            note=new Label{Text="Señal en dBm: cerca de -40 fuerte; cerca de -85 débil. Anota dónde estabas.",
                Location=new Point(20,555),Size=new Size(840,26),ForeColor=Color.LightCyan};
            Controls.Add(note);
            ButtonAt("GUARDAR CSV",20,589,209,42,()=>Save());
            ButtonAt("CARGAR CSV",240,589,209,42,()=>Load());
            ButtonAt("QUITAR ÚLTIMO",461,589,209,42,()=>{
                if(samples.Count>0){samples.RemoveAt(samples.Count-1);canvas.Invalidate();}
            });
            ButtonAt("VACIAR",680,589,180,42,()=>{samples.Clear();canvas.Invalidate();});
            Load();
        }
        void LabelAt(string t,int lx,int ly,int w){Controls.Add(new Label{Text=t,Location=new Point(lx,ly),Size=new Size(w,27)});}
        NumericUpDown Num(int lx,int ly,int w,int min,int max,int value) {
            var n=new NumericUpDown{Location=new Point(lx,ly),Size=new Size(w,30),
                Minimum=min,Maximum=max,Value=value};
            Controls.Add(n);return n;
        }
        void ButtonAt(string t,int lx,int ly,int w,int h,Action a){
            var b=new Button{Text=t,Location=new Point(lx,ly),Size=new Size(w,h),
                BackColor=Color.FromArgb(13,95,94),FlatStyle=FlatStyle.Flat,ForeColor=Color.White};
            b.FlatAppearance.BorderSize=0;b.Click+=(s,e)=>{try{a();}catch(Exception ex){note.Text="Error: "+ex.Message;}};
            Controls.Add(b);
        }
        void Add() {
            samples.Add(new Sample{X=(int)x.Value,Y=(int)y.Value,Rssi=(int)rssi.Value,At=DateTime.UtcNow});
            canvas.Invalidate();
            note.Text="Registrados "+samples.Count+" puntos. No se obtiene el plano de casa automáticamente.";
        }
        void ReadWifiSignal() {
            using(var p=new Process()){
                p.StartInfo=new ProcessStartInfo("netsh.exe","wlan show interfaces"){
                    UseShellExecute=false,CreateNoWindow=true,RedirectStandardOutput=true,RedirectStandardError=true
                };
                p.Start();string content=p.StandardOutput.ReadToEnd();
                if(!p.WaitForExit(7000)){try{p.Kill();}catch{}throw new IOException("netsh tardó demasiado.");}
                var match=Regex.Match(content,@"(?im)^\s*(Signal|Señal)\s*:\s*(\d+)\s*%");
                if(!match.Success){note.Text="Windows no ha devuelto porcentaje de señal Wi-Fi. Escribe manualmente dBm.";return;}
                int pct=Math.Max(0,Math.Min(100,int.Parse(match.Groups[2].Value)));
                int estimated=-100+pct/2;
                rssi.Value=estimated;
                note.Text="Windows indica "+pct+"%. Equivalente "+estimated+" dBm es ESTIMADO, no medida física directa.";
            }
        }
        void Save(){
            using(var f=new StreamWriter(filename,false,Encoding.UTF8)) {
                f.WriteLine("timestamp_utc,x,y,dbm");
                foreach(var s in samples)
                    f.WriteLine(s.At.ToString("o")+","+s.X+","+s.Y+","+s.Rssi);
            }
            note.Text=samples.Count+" muestras guardadas en "+filename;
        }
        void Load(){
            if(!File.Exists(filename))return;
            var parsed=new List<Sample>();
            foreach(string line in File.ReadAllLines(filename).Skip(1)){
                string[] parts=line.Split(',');int xx,yy,rr;DateTime t;
                if(parts.Length>=4&&int.TryParse(parts[1],out xx)&&int.TryParse(parts[2],out yy)&&
                   int.TryParse(parts[3],out rr)&&DateTime.TryParse(parts[0],null,DateTimeStyles.RoundtripKind,out t)
                   && xx>=0&&xx<=20&&yy>=0&&yy<=20&&rr>=-100&&rr<=-20)
                    parsed.Add(new Sample{X=xx,Y=yy,Rssi=rr,At=t});
            }
            samples.Clear();samples.AddRange(parsed);canvas.Invalidate();
            if(note!=null)note.Text=parsed.Count+" muestras cargadas.";
        }
        static PointF Iso(int xx,int yy,int height,int width,int canvasHeight){
            float size=12.0f;
            return new PointF(width*.52f+(xx-yy)*size,canvasHeight*.72f+(xx+yy)*size*.50f-height);
        }
        void CanvasPaint(object sender,PaintEventArgs e) {
            var g=e.Graphics;g.SmoothingMode=System.Drawing.Drawing2D.SmoothingMode.AntiAlias;
            int w=canvas.Width,h=canvas.Height;
            using(var gridPen=new Pen(Color.FromArgb(69,101,120),1)){
                for(int i=0;i<=20;i++){
                    PointF x1=Iso(i,0,0,w,h),x2=Iso(i,20,0,w,h);
                    PointF y1=Iso(0,i,0,w,h),y2=Iso(20,i,0,w,h);
                    g.DrawLine(gridPen,x1,x2);g.DrawLine(gridPen,y1,y2);
                }
            }
            using(var font=new Font("Segoe UI",10)){
                g.DrawString("X →",font,Brushes.LightGray,new PointF(w*.76f,h*.77f));
                g.DrawString("Y ↘",font,Brushes.LightGray,new PointF(w*.2f,h*.77f));
            }
            foreach(var s in samples.OrderBy(k=>k.X+k.Y)){
                int height=(int)((s.Rssi+100)*2.5);
                var start=Iso(s.X,s.Y,0,w,h);
                var top=Iso(s.X,s.Y,height,w,h);
                int green=Math.Min(255,Math.Max(0,(s.Rssi+100)*4));
                Color color=Color.FromArgb(245,Math.Max(40,245-green),Math.Max(48,green),68);
                using(var pen=new Pen(color,7))g.DrawLine(pen,start,top);
                using(var dot=new SolidBrush(color))g.FillEllipse(dot,top.X-5,top.Y-5,10,10);
                g.DrawString(s.Rssi.ToString()+" dBm",Font,Brushes.White,top.X+5,top.Y-13);
            }
            if(samples.Count==0)g.DrawString(
                "Sin mediciones. Muévete por tu casa, indica coordenadas X/Y y registra la señal.",
                new Font("Segoe UI",11),Brushes.White,38,25);
        }
    }
}