using System;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>Opt-in process sampler. CPU/RAM are real OS counters, never FPS estimates.</summary>
  public sealed class AetherGameProcessClinicV19 : Form {
    sealed class Item {
      public int Pid; public string Name;
      public override string ToString(){return Name+" · PID "+Pid;}
    }
    readonly ComboBox picker;
    readonly RichTextBox report;
    readonly Label state;
    readonly Button measure;
    string lastReport="";
    int busy=0;
    public AetherGameProcessClinicV19(){
      Text="AETHER V19 · ANALIZAR PROCESO DE JUEGO (SOLO LECTURA)";
      ClientSize=new Size(1000,730);MinimumSize=new Size(760,550);
      StartPosition=FormStartPosition.CenterParent;
      BackColor=Color.FromArgb(8,19,34);ForeColor=Color.White;
      Font=new Font("Segoe UI",10);
      Controls.Add(new Label{Text="AETHER · DIAGNÓSTICO POR JUEGO",
        Location=new Point(20,14),Size=new Size(950,48),
        Font=new Font("Segoe UI",20,FontStyle.Bold),ForeColor=Color.Turquoise});
      Controls.Add(new Label{Text="Elige voluntariamente un proceso: mide CPU del proceso durante 1 segundo y memoria residente. No modifica el juego.",
        Location=new Point(22,66),Size=new Size(945,48)});
      picker=new ComboBox{Location=new Point(22,132),Size=new Size(490,35),DropDownStyle=ComboBoxStyle.DropDownList};
      Controls.Add(picker);
      var refresh=Button("ACTUALIZAR LISTA",527,127,208);
      refresh.Click+=(s,e)=>RefreshList();
      measure=Button("MEDIR PROCESO",747,127,226);
      measure.Click+=(s,e)=>Measure();
      var save=Button("GUARDAR INFORME",22,191,244);
      save.Click+=(s,e)=>Save();
      state=new Label{Text="Sin mediciones",Location=new Point(287,198),Size=new Size(686,40),ForeColor=Color.Turquoise};
      Controls.Add(state);
      report=new RichTextBox{Location=new Point(22,256),Size=new Size(950,430),
        Anchor=AnchorStyles.Top|AnchorStyles.Bottom|AnchorStyles.Left|AnchorStyles.Right,
        ReadOnly=true,BackColor=Color.FromArgb(18,35,53),ForeColor=Color.White,
        Font=new Font("Consolas",10),WordWrap=true};
      Controls.Add(report);
      report.Text="No se obtienen FPS ni temperatura.\r\n"+
        "Para diagnosticar un juego abierto, selecciónalo y pulsa MEDIR.\r\n"+
        "Los procesos de otros usuarios o protegidos pueden no estar disponibles.";
      RefreshList();
    }
    Button Button(string label,int x,int y,int width){
      var b=new Button{Text=label,Location=new Point(x,y),Size=new Size(width,45),
        BackColor=Color.FromArgb(22,100,110),ForeColor=Color.White,
        FlatStyle=FlatStyle.Flat};
      Controls.Add(b);return b;
    }
    void RefreshList(){
      picker.Items.Clear();
      var items=Process.GetProcesses().Select(p=>{
        try{return new Item{Pid=p.Id,Name=p.ProcessName};}
        catch{return null;}finally{p.Dispose();}
      }).Where(p=>p!=null).OrderBy(p=>p.Name).ThenBy(p=>p.Pid).ToArray();
      picker.Items.AddRange(items);
      if(picker.Items.Count>0)picker.SelectedIndex=0;
      state.Text=items.Length+" procesos visibles · elige el juego";
    }
    public static string Advice(double cpuPct,double memoryGiB,int logicalCores){
      if(logicalCores<1)return "Sin información suficiente sobre procesadores lógicos.";
      if(cpuPct<0||cpuPct>100||memoryGiB<0)
        return "Medición incompleta: no se infieren FPS.";
      var sb=new StringBuilder();
      if(cpuPct>=85)sb.AppendLine("El proceso ocupa gran parte de la CPU total. Compara con la misma escena y otras tareas cerradas voluntariamente.");
      else if(cpuPct>=40)sb.AppendLine("Carga apreciable de CPU del proceso. Comprueba el uso global y el límite de FPS.");
      else sb.AppendLine("La CPU total del proceso no parece saturada; podría existir límite por núcleo, GPU o juego.");
      if(memoryGiB>=6)sb.AppendLine("Uso elevado de RAM del proceso; revisa RAM total y aplicaciones abiertas.");
      else sb.AppendLine("La memoria del proceso por sí sola no determina los FPS.");
      sb.AppendLine("Para equipos modestos: prueba 720p y calidad baja dentro del juego, mide FPS antes y después.");
      sb.AppendLine("No es posible prometer 100–120 FPS ni aumentar la velocidad de Internet desde este módulo.");
      return sb.ToString().Trim();
    }
    void Measure(){
      Item item=picker.SelectedItem as Item;
      if(item==null||Interlocked.CompareExchange(ref busy,1,0)!=0)return;
      measure.Enabled=false;state.Text="Midiendo CPU durante ~1 segundo...";
      ThreadPool.QueueUserWorkItem(_=>{
        string result;
        try{
          using(var p=Process.GetProcessById(item.Pid)){
            TimeSpan first=p.TotalProcessorTime;
            var watch=Stopwatch.StartNew();
            Thread.Sleep(1050);
            p.Refresh();
            TimeSpan second=p.TotalProcessorTime;
            watch.Stop();
            int cores=Math.Max(1,Environment.ProcessorCount);
            double cpu=100.0*(second-first).TotalMilliseconds/(watch.Elapsed.TotalMilliseconds*cores);
            cpu=Math.Max(0,Math.Min(100,cpu));
            double mem=p.WorkingSet64/1073741824.0;
            var sb=new StringBuilder();
            sb.AppendLine("AETHER V19 · PROCESO SELECCIONADO");
            sb.AppendLine("Hora local: "+DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
            sb.AppendLine("Proceso: "+item.Name+" · PID "+item.Pid);
            sb.AppendLine("CPU total del proceso: "+cpu.ToString("0.0")+" % (normalizado a "+cores+" procesadores lógicos)");
            sb.AppendLine("RAM residente del proceso: "+mem.ToString("0.00")+" GiB");
            sb.AppendLine("Ventana de muestra: "+watch.ElapsedMilliseconds+" ms");
            sb.AppendLine("Aviso: CPU total baja no excluye saturación de un núcleo.");
            sb.AppendLine("\r\nRECOMENDACIONES:\r\n"+Advice(cpu,mem,cores));
            sb.AppendLine("\r\nSin FPS, temperaturas, GPU %, ni cambios automáticos.");
            result=sb.ToString();
          }
        }catch(Exception ex){result="No se pudo medir el proceso: "+ex.GetType().Name+
          ". Puede haber terminado o requerir otros permisos.";}
        Interlocked.Exchange(ref busy,0);
        if(IsDisposed||!IsHandleCreated)return;
        try{BeginInvoke((Action)(()=>{
          lastReport=result;report.Text=result;
          state.Text="Medición finalizada · solo lectura";
          measure.Enabled=true;
        }));}catch(InvalidOperationException){}
      });
    }
    void Save(){
      if(string.IsNullOrEmpty(lastReport)){MessageBox.Show(this,"Primero mide un proceso.");return;}
      using(var d=new SaveFileDialog{Filter="Texto|*.txt",FileName="AETHER_V19_proceso.txt"}){
        if(d.ShowDialog(this)!=DialogResult.OK)return;
        try{File.WriteAllText(d.FileName,lastReport,Encoding.UTF8);state.Text="Informe guardado";}
        catch(Exception ex){MessageBox.Show(this,ex.Message,"Error al guardar");}
      }
    }
  }
}
