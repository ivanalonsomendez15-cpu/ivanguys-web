using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Management;
using System.Text;
using System.Threading;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>
  /// V15 live read-only PC resource sampler. It does not terminate processes,
  /// alter priorities, change power plans or pretend to measure game FPS.
  /// </summary>
  public sealed class AetherPerformanceProfilerV15 : Form {
    readonly RichTextBox details;
    readonly Label status;
    readonly ComboBox mode;
    readonly Button start;
    readonly Button stop;
    readonly System.Windows.Forms.Timer timer;
    readonly List<Sample> history=new List<Sample>();
    int working=0;
    bool sampling=false;
    int limit=120;
    sealed class Sample {
      public DateTime At;
      public int Cpu;
      public double RamUsed;
      public double RamTotal;
      public string TopProcesses;
      public string Gpu;
    }
    public AetherPerformanceProfilerV15() {
      Text="AETHER V15 · PERFILADOR DE RENDIMIENTO";
      ClientSize=new Size(1040,770);MinimumSize=new Size(760,610);
      BackColor=Color.FromArgb(8,19,34);ForeColor=Color.White;
      Font=new Font("Segoe UI",10);StartPosition=FormStartPosition.CenterParent;
      Controls.Add(new Label{Text="AETHER · CPU / RAM / PROCESOS EN DIRECTO",
        Location=new Point(22,14),Size=new Size(975,47),
        Font=new Font("Segoe UI",20,FontStyle.Bold),ForeColor=Color.FromArgb(42,231,203)});
      Controls.Add(new Label{Text="Muestras cada 3 segundos, historial limitado a 120. No se cambian prioridades, servicios ni ajustes de Windows.",
        Location=new Point(22,68),Size=new Size(980,45)});
      mode=new ComboBox{Location=new Point(22,126),Size=new Size(258,38),
        DropDownStyle=ComboBoxStyle.DropDownList};
      mode.Items.AddRange(new object[]{"EQUILIBRADO","PC MODESTO","JUEGOS"});
      mode.SelectedIndex=0;Controls.Add(mode);
      start=NewButton("INICIAR MUESTREO",295,119,210);
      stop=NewButton("DETENER",518,119,170);
      var save=NewButton("EXPORTAR CSV",702,119,170);
      start.Click+=(s,e)=>StartSampling();
      stop.Click+=(s,e)=>StopSampling();
      save.Click+=(s,e)=>Export();
      status=new Label{Text="Sin iniciar · pulsa INICIAR MUESTREO",
        Location=new Point(22,181),Size=new Size(975,42),
        ForeColor=Color.FromArgb(42,231,203)};
      Controls.Add(status);
      details=new RichTextBox{Location=new Point(22,234),Size=new Size(991,470),
        Anchor=AnchorStyles.Top|AnchorStyles.Bottom|AnchorStyles.Left|AnchorStyles.Right,
        BackColor=Color.FromArgb(19,38,57),ForeColor=Color.White,
        ReadOnly=true,Font=new Font("Consolas",10),WordWrap=true};
      Controls.Add(details);
      details.Text="AETHER V15\r\n"+
        "Mide uso global de CPU (estimación WMI), RAM y procesos con más memoria.\r\n"+
        "No mide FPS reales, temperatura ni utilización de GPU.\r\n"+
        "Para comparar FPS utiliza el contador del juego o una herramienta compatible.\r\n"+
        "La medición puede fallar si Windows bloquea WMI; se indicará como no disponible.";
      timer=new System.Windows.Forms.Timer{Interval=3000};
      timer.Tick+=(s,e)=>Schedule();
      FormClosing+=(s,e)=>StopSampling();
    }
    Button NewButton(string title,int x,int y,int w) {
      var b=new Button{Text=title,Location=new Point(x,y),Size=new Size(w,47),
        BackColor=Color.FromArgb(22,100,110),ForeColor=Color.White,
        FlatStyle=FlatStyle.Flat,Font=new Font("Segoe UI",10,FontStyle.Bold)};
      b.FlatAppearance.BorderSize=0;Controls.Add(b);return b;
    }
    void StartSampling() {
      if(sampling)return;
      history.Clear();
      sampling=true;start.Enabled=false;stop.Enabled=true;
      status.Text="Muestreo activo (cada 3 s)";
      timer.Start();Schedule();
    }
    void StopSampling() {
      sampling=false;timer.Stop();start.Enabled=true;stop.Enabled=false;
      if(status!=null && !IsDisposed)status.Text="Detenido · "+history.Count+" muestras locales";
    }
    void Schedule() {
      if(!sampling||Interlocked.CompareExchange(ref working,1,0)!=0)return;
      ThreadPool.QueueUserWorkItem(_=>{
        Sample sample=null;string error=null;
        try{sample=Collect();}
        catch(Exception ex){error=ex.Message;}
        finally{Interlocked.Exchange(ref working,0);}
        if(IsDisposed||!IsHandleCreated)return;
        try{BeginInvoke((Action)(()=>{
          if(!sampling)return;
          if(sample!=null){
            history.Add(sample);
            if(history.Count>limit)history.RemoveAt(0);
            details.Text=Report(sample);
            status.Text="Muestra "+history.Count+" · "+sample.At.ToString("HH:mm:ss")+
              " · datos locales; ningún cambio aplicado";
          }else status.Text="Lectura no disponible: "+error;
        }));}catch(InvalidOperationException){}
      });
    }
    static int CpuLoad() {
      int total=0,count=0;
      try{using(var q=new ManagementObjectSearcher("SELECT LoadPercentage FROM Win32_Processor"))
        foreach(ManagementObject obj in q.Get()) {
          int load=Convert.ToInt32(obj["LoadPercentage"]);
          if(load>=0&&load<=100){total+=load;count++;}
        }
      }catch{}
      return count>0?total/count:-1;
    }
    static void Memory(out double used,out double total) {
      used=0;total=0;
      try{using(var q=new ManagementObjectSearcher(
        "SELECT FreePhysicalMemory,TotalVisibleMemorySize FROM Win32_OperatingSystem"))
        foreach(ManagementObject obj in q.Get()) {
          double free=Convert.ToDouble(obj["FreePhysicalMemory"],CultureInfo.InvariantCulture)/1048576.0;
          total=Convert.ToDouble(obj["TotalVisibleMemorySize"],CultureInfo.InvariantCulture)/1048576.0;
          used=Math.Max(0,total-free);
          break;
        }
      }catch{}
    }
    static string TopProcesses() {
      var names=new List<Tuple<string,long>>();
      foreach(Process p in Process.GetProcesses()){
        try{names.Add(Tuple.Create(p.ProcessName,p.WorkingSet64));}
        catch{}finally{p.Dispose();}
      }
      return string.Join("\r\n",names.OrderByDescending(p=>p.Item2).Take(8)
        .Select(p=>"  "+p.Item1+" · "+(p.Item2/1048576.0).ToString("0")+" MiB"));
    }
    static string GpuName() {
      try{using(var q=new ManagementObjectSearcher("SELECT Name FROM Win32_VideoController"))
        foreach(ManagementObject obj in q.Get())
          return Convert.ToString(obj["Name"]);
      }catch{}
      return "No disponible";
    }
    static Sample Collect() {
      double used,total;Memory(out used,out total);
      return new Sample{At=DateTime.Now,Cpu=CpuLoad(),RamUsed=used,
        RamTotal=total,TopProcesses=TopProcesses(),Gpu=GpuName()};
    }
    string Report(Sample s) {
      var sb=new StringBuilder();
      sb.AppendLine("AETHER V15 · PERFILADOR (SOLO LECTURA)");
      sb.AppendLine("Hora: "+s.At.ToString("yyyy-MM-dd HH:mm:ss"));
      sb.AppendLine("CPU (estimación WMI): "+(s.Cpu>=0?s.Cpu+" %":"No disponible"));
      sb.AppendLine("RAM utilizada: "+s.RamUsed.ToString("0.00")+" / "+s.RamTotal.ToString("0.00")+" GiB");
      if(s.RamTotal>0)sb.AppendLine("RAM: "+(100*s.RamUsed/s.RamTotal).ToString("0.0")+" % utilizada");
      sb.AppendLine("GPU detectada: "+s.Gpu);
      sb.AppendLine("\r\nPROCESOS PRINCIPALES POR MEMORIA RESIDENTE:");
      sb.AppendLine(s.TopProcesses);
      sb.AppendLine("\r\nRECOMENDACIONES "+mode.SelectedItem+":");
      if(s.RamTotal>0&&s.RamUsed/s.RamTotal>.88)
        sb.AppendLine("RAM alta: revisa programas reconocidos antes de jugar. No cierres procesos desconocidos.");
      if(s.Cpu>=85)sb.AppendLine("CPU alta: compara la misma escena con tareas voluntariamente cerradas.");
      if(mode.SelectedIndex==1) {
        sb.AppendLine("PC modesto: prueba 720p, sombras bajas y un límite estable de FPS dentro del juego.");
        sb.AppendLine("No es posible garantizar pasar de 15–20 FPS a 100–120 FPS sin hardware suficiente.");
      }else if(mode.SelectedIndex==2) {
        sb.AppendLine("Juegos: comprueba modo juego de Windows, controladores oficiales y consumo real.");
        sb.AppendLine("DLSS/FSR solo funcionan en juegos compatibles. Este perfil no modifica su configuración.");
      }else sb.AppendLine("Equilibrado: evita tareas simultáneas pesadas; mide antes/después.");
      sb.AppendLine("\r\nLos FPS, el ping y los Mb/s deben medirse con pruebas específicas.");
      return sb.ToString();
    }
    void Export() {
      if(history.Count==0){MessageBox.Show(this,"Inicia el muestreo antes de exportar.");return;}
      using(var dialog=new SaveFileDialog{Filter="CSV|*.csv",
        FileName="AETHER_V15_recursos_"+DateTime.Now.ToString("yyyyMMdd_HHmm")+".csv"}) {
        if(dialog.ShowDialog(this)!=DialogResult.OK)return;
        var lines=new List<string>{"hora,cpu_pct,ram_usada_gib,ram_total_gib"};
        foreach(var s in history)lines.Add(
          s.At.ToString("yyyy-MM-ddTHH:mm:ss")+","+
          (s.Cpu>=0?s.Cpu.ToString():"")+","+
          s.RamUsed.ToString("0.000",CultureInfo.InvariantCulture)+","+
          s.RamTotal.ToString("0.000",CultureInfo.InvariantCulture));
        try{File.WriteAllLines(dialog.FileName,lines,Encoding.UTF8);
          status.Text="CSV guardado: "+history.Count+" muestras";}
        catch(Exception ex){MessageBox.Show(this,ex.Message,"Error CSV");}
      }
    }
  }
}
