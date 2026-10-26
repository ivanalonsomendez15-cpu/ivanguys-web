using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Microsoft.Win32;

namespace SimTurboPC {
  /// <summary>Local, read-only storage and startup audit. No registry writes,
  /// automatic process termination, "RAM cleaners", or driver modification.</summary>
  public sealed class AetherStorageClinicV18 : Form {
    readonly RichTextBox report;
    readonly Label status;
    public AetherStorageClinicV18() {
      Text="AETHER V18 · DISCO E INICIO (SOLO LECTURA)";
      ClientSize=new Size(980,735);
      MinimumSize=new Size(760,560);
      StartPosition=FormStartPosition.CenterParent;
      BackColor=Color.FromArgb(8,19,34); ForeColor=Color.White;
      Font=new Font("Segoe UI",10);
      Controls.Add(new Label{Text="AETHER · SALUD DE ALMACENAMIENTO",
        Location=new Point(20,14),Size=new Size(940,45),
        Font=new Font("Segoe UI",19,FontStyle.Bold),ForeColor=Color.Turquoise});
      Controls.Add(new Label{Text="Espacio libre por unidad y entradas de inicio de sesión (solo nombres). " +
        "No borra archivos, no cambia el registro y no promete FPS.",
        Location=new Point(22,65),Size=new Size(930,50)});
      Button scan=NewButton("ANALIZAR EQUIPO",20,125,250);
      Button save=NewButton("GUARDAR INFORME",290,125,250);
      scan.Click+=(s,e)=>Analyze();
      save.Click+=(s,e)=>Save();
      report=new RichTextBox{Location=new Point(20,194),Size=new Size(935,470),
        Anchor=AnchorStyles.Top|AnchorStyles.Bottom|AnchorStyles.Left|AnchorStyles.Right,
        ReadOnly=true,WordWrap=true,BackColor=Color.FromArgb(18,35,53),
        ForeColor=Color.White,Font=new Font("Consolas",10)};
      Controls.Add(report);
      status=new Label{Text="Listo",Location=new Point(20,678),Size=new Size(930,34),
        Anchor=AnchorStyles.Left|AnchorStyles.Right|AnchorStyles.Bottom,
        ForeColor=Color.Turquoise};
      Controls.Add(status);
      Analyze();
    }
    Button NewButton(string caption,int x,int y,int width) {
      var b=new Button{Text=caption,Location=new Point(x,y),Size=new Size(width,48),
        BackColor=Color.FromArgb(22,100,110),ForeColor=Color.White,
        FlatStyle=FlatStyle.Flat,Font=new Font("Segoe UI",10,FontStyle.Bold)};
      b.FlatAppearance.BorderSize=0;Controls.Add(b);return b;
    }
    public static string SpaceAdvice(long available,long total) {
      if(total<=0||available<0)return "Datos insuficientes; no se puede evaluar.";
      double fraction=(double)available/total;
      if(fraction<0.10||available<15L*1024*1024*1024)
        return "ATENCIÓN: poco espacio libre. Revisa descargas y archivos propios; haz copia antes de borrar.";
      if(fraction<0.20)
        return "AVISO: menos del 20% libre. Evita llenar la unidad y comprueba el tamaño de tus juegos.";
      return "Espacio disponible razonable. El espacio libre no garantiza más FPS.";
    }
    static string Size(long bytes) {
      return (bytes/1073741824.0).ToString("0.0")+" GiB";
    }
    static string StartupNames(RegistryKey hive,string subkey) {
      try {
        using(var key=hive.OpenSubKey(subkey,false)) {
          if(key==null)return "  (sin entradas o no accesible)";
          var names=key.GetValueNames().OrderBy(x=>x).Take(40).ToArray();
          if(names.Length==0)return "  (sin entradas)";
          return string.Join("\r\n",names.Select(n=>"  - "+n));
        }
      } catch(Exception ex) {
        return "  No disponible ("+ex.GetType().Name+")";
      }
    }
    public static string BuildReport() {
      var sb=new StringBuilder();
      sb.AppendLine("AETHER V18 · DIAGNÓSTICO LOCAL DE DISCO E INICIO");
      sb.AppendLine("Fecha: "+DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
      sb.AppendLine("SOLO LECTURA · no se cambian archivos, servicios, procesos ni registro.");
      sb.AppendLine(new string('-',65));
      sb.AppendLine("ALMACENAMIENTO:");
      int found=0;
      try {
        foreach(var d in DriveInfo.GetDrives().OrderBy(x=>x.Name)) {
          try {
            if(!d.IsReady||d.DriveType!=DriveType.Fixed)continue;
            found++;
            long total=d.TotalSize,free=d.AvailableFreeSpace;
            sb.AppendLine("Unidad "+d.Name+" · "+Size(free)+" libres / "+Size(total)+" totales");
            sb.AppendLine("  "+SpaceAdvice(free,total));
          } catch(Exception ex) {
            sb.AppendLine("Unidad "+d.Name+": sin datos ("+ex.GetType().Name+")");
          }
        }
      }catch(Exception ex) {sb.AppendLine("Unidades no disponibles: "+ex.GetType().Name);}
      if(found==0)sb.AppendLine("No se encontraron unidades fijas disponibles.");
      sb.AppendLine();
      sb.AppendLine("ENTRADAS DE INICIO DE SESIÓN (NOMBRES, NO COMANDOS):");
      const string run=@"Software\Microsoft\Windows\CurrentVersion\Run";
      sb.AppendLine("Usuario actual:");
      sb.AppendLine(StartupNames(Registry.CurrentUser,run));
      sb.AppendLine("Todos los usuarios (si se permite leer):");
      sb.AppendLine(StartupNames(Registry.LocalMachine,run));
      sb.AppendLine();
      sb.AppendLine("RECOMENDACIONES SEGURAS:");
      sb.AppendLine("1. Si hay poco espacio, revisa manualmente archivos propios y haz copias.");
      sb.AppendLine("2. En Configuración > Aplicaciones > Inicio, revisa solo programas conocidos.");
      sb.AppendLine("3. No desactives antivirus, actualizaciones, controladores ni servicios desconocidos.");
      sb.AppendLine("4. Un SSD puede reducir tiempos de carga, pero no convierte 20 FPS en 120 FPS.");
      sb.AppendLine("5. Para mejorar FPS, utiliza el perfilador V15 y el comparador A/B V16.");
      sb.AppendLine("6. Para 60→120–150 Mb/s, utiliza auditoría de enlace V14 y prueba de red V13.");
      sb.AppendLine("Sin benchmark de disco: no se infieren MB/s, SMART, temperaturas ni salud física.");
      return sb.ToString();
    }
    void Analyze() {
      try {report.Text=BuildReport();status.Text="Auditoría local finalizada · "+DateTime.Now.ToString("HH:mm:ss");}
      catch(Exception ex){report.Text="Error de lectura: "+ex.Message;status.Text="Sin datos";}
    }
    void Save() {
      using(var d=new SaveFileDialog{Filter="Texto|*.txt",FileName="AETHER_V18_disco_inicio.txt"}) {
        if(d.ShowDialog(this)!=DialogResult.OK)return;
        try{File.WriteAllText(d.FileName,report.Text,new UTF8Encoding(true));status.Text="Informe guardado";}
        catch(Exception ex){MessageBox.Show(this,ex.Message,"Error guardando");}
      }
    }
  }
}
