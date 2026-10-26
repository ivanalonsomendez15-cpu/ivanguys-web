using System;
using System.Drawing;
using System.IO;
using System.Management;
using System.Text;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>Read-only GPU/display audit and manual per-game recommendation profiles.
  /// Does not install drivers, override game files, or claim native 4K on a 1080p display.</summary>
  public sealed class AetherGraphicsAdvisorV17 : Form {
    readonly ComboBox mode;
    readonly RichTextBox output;
    public AetherGraphicsAdvisorV17() {
      Text="AETHER V17 · GPU, PANTALLA Y CALIDAD";
      ClientSize=new Size(920,700);MinimumSize=new Size(800,600);
      StartPosition=FormStartPosition.CenterParent;
      BackColor=Color.FromArgb(9,21,35);ForeColor=Color.White;
      Font=new Font("Segoe UI",10);
      Controls.Add(new Label{Text="AETHER · ASESOR GRÁFICO V17",
        Location=new Point(20,18),Size=new Size(850,46),
        Font=new Font("Segoe UI",20,FontStyle.Bold),ForeColor=Color.Turquoise});
      Controls.Add(new Label{Text="Detecta GPU, resolución y RAM; recomienda opciones que el juego debe admitir. "+
        "No modifica juegos ni promete más FPS.",Location=new Point(22,72),Size=new Size(855,50)});
      mode=new ComboBox{Location=new Point(22,130),Size=new Size(375,35),
        DropDownStyle=ComboBoxStyle.DropDownList};
      mode.Items.AddRange(new object[]{"Prioridad FPS / PC modesto","Equilibrado","Calidad / supermuestreo"});
      mode.SelectedIndex=1;Controls.Add(mode);
      Button scan=new Button{Text="ANALIZAR PC Y PANTALLA",Location=new Point(420,130),Size=new Size(230,40)};
      Button save=new Button{Text="GUARDAR INFORME",Location=new Point(660,130),Size=new Size(210,40)};
      Controls.Add(scan);Controls.Add(save);
      output=new RichTextBox{Location=new Point(22,188),Size=new Size(850,483),
        Anchor=AnchorStyles.Top|AnchorStyles.Bottom|AnchorStyles.Left|AnchorStyles.Right,
        ReadOnly=true,BackColor=Color.FromArgb(20,38,55),ForeColor=Color.White,
        Font=new Font("Consolas",10)};
      Controls.Add(output);
      scan.Click+=(s,e)=>Analyze();
      mode.SelectedIndexChanged+=(s,e)=>Analyze();
      save.Click+=(s,e)=>Save();
      Analyze();
    }
    static string First(string query,string field) {
      try {
        using(var search=new ManagementObjectSearcher(query))
        using(var items=search.Get()) {
          foreach(ManagementObject item in items) {
            object value=item[field];
            if(value!=null)return Convert.ToString(value);
          }
        }
      }catch(Exception){}
      return "No disponible";
    }
    static string Memory() {
      try {
        string raw=First("SELECT TotalPhysicalMemory FROM Win32_ComputerSystem","TotalPhysicalMemory");
        ulong bytes;
        if(UInt64.TryParse(raw,out bytes))return (bytes/1073741824.0).ToString("0.0")+" GiB";
      }catch(Exception){}
      return "No disponible";
    }
    void Analyze() {
      var sb=new StringBuilder();
      sb.AppendLine("AETHER V17 · INFORME DE SOLO LECTURA");
      sb.AppendLine("Fecha: "+DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
      sb.AppendLine("GPU: "+First("SELECT Name FROM Win32_VideoController","Name"));
      sb.AppendLine("CPU: "+First("SELECT Name FROM Win32_Processor","Name"));
      sb.AppendLine("RAM física: "+Memory());
      sb.AppendLine("Hilos lógicos: "+Environment.ProcessorCount);
      try {
        var s=Screen.PrimaryScreen;
        sb.AppendLine("Pantalla principal: "+s.Bounds.Width+" x "+s.Bounds.Height+
          " píxeles físicos informados por Windows");
      }catch(Exception ex){sb.AppendLine("Pantalla: no disponible ("+ex.Message+")");}
      sb.AppendLine();
      sb.AppendLine("PERFIL: "+mode.SelectedItem);
      if(mode.SelectedIndex==0) {
        sb.AppendLine("Juego compatible: resolución 720p o 900p; sombras y reflejos BAJOS;");
        sb.AppendLine("desactivar trazado de rayos; limitar FPS a un valor ESTABLE medido.");
        sb.AppendLine("Activar FSR/DLSS solo si el juego y GPU lo admiten; probar antes/después.");
      }else if(mode.SelectedIndex==1) {
        sb.AppendLine("Mantener resolución nativa y texturas según VRAM disponible;");
        sb.AppendLine("probar DLSS/FSR modo Calidad solo si el juego lo ofrece;");
        sb.AppendLine("revisar uso de CPU/GPU y temperaturas con herramientas compatibles.");
      }else {
        sb.AppendLine("Si el driver y la GPU admiten DSR/DLDSR, se puede renderizar");
        sb.AppendLine("a más resolución y reducir a la pantalla real (supermuestreo).");
        sb.AppendLine("Puede MEJORAR bordes, pero suele COSTAR FPS.");
      }
      sb.AppendLine();
      sb.AppendLine("DLSS: escalado con IA solo en juegos y GPU compatibles.");
      sb.AppendLine("FSR: técnica de escalado disponible según el juego y versión.");
      sb.AppendLine("RTX Video Super Resolution: mejora vídeo compatible, no todos los juegos.");
      sb.AppendLine("La exportación bicúbica de V12 NO es IA neuronal.");
      sb.AppendLine("Una pantalla 1920x1080 NO puede mostrar 3840x2160 píxeles nativos.");
      sb.AppendLine("No se ha ejecutado benchmark ni medido FPS con este informe.");
      sb.AppendLine("Compara resultados con el experimento A/B de V16.");
      output.Text=sb.ToString();
    }
    void Save() {
      using(var dlg=new SaveFileDialog{Filter="Texto|*.txt",
        FileName="AETHER_V17_GPU_"+DateTime.Now.ToString("yyyyMMdd_HHmm")+".txt"}) {
        if(dlg.ShowDialog(this)==DialogResult.OK) {
          try{File.WriteAllText(dlg.FileName,output.Text,new UTF8Encoding(true));}
          catch(Exception ex){MessageBox.Show(this,ex.Message,"Error al guardar");}
        }
      }
    }
  }
}
