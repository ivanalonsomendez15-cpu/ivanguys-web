using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>
  /// V46: real NVIDIA DSR/DLDSR resolution experiment at current high refresh rate.
  /// Does not capture or replay the game, touch anticheat, or claim native 4K on FHD.
  /// Changes are provisional and session-only. FPS are user supplied, NOT inferred.
  /// </summary>
  public static class AetherVisualGoalV46 {
    public const int BaselineFps=425;
    public const int TargetFps=300;
    public static int HeadroomFps(int baseline,int goal) {return Math.Max(0,baseline-goal);}
    public static string Grade(int observed) {
      if(observed<=0)return "Introduce el promedio FPS medido dentro del juego.";
      if(observed>=TargetFps)return "META DE 300 FPS ALCANZADA EN LA MEDICIÓN INTRODUCIDA. No demuestra 4K nativo.";
      return "MENOS DE 300 FPS: baja un nivel de supermuestreo o restaura 1080p. Nunca uses el overlay lento.";
    }
    public static bool EligibleMode(int width,int height,int refresh,int nativeRefresh){
      if(nativeRefresh<=0||refresh<nativeRefresh)return false;
      return (width==3840&&height==2160)||(width==2880&&height==1620)||
        (width==2560&&height==1440);
    }
  }
  public sealed class AetherVisualGoalWindowV46:Form {
    [StructLayout(LayoutKind.Sequential,CharSet=CharSet.Unicode)]
    public struct DisplayMode {
      [MarshalAs(UnmanagedType.ByValTStr,SizeConst=32)] public string dmDeviceName;
      public ushort dmSpecVersion,dmDriverVersion,dmSize,dmDriverExtra;
      public uint dmFields;
      public int dmPositionX,dmPositionY;
      public uint dmDisplayOrientation,dmDisplayFixedOutput;
      public short dmColor,dmDuplex,dmYResolution,dmTTOption,dmCollate;
      [MarshalAs(UnmanagedType.ByValTStr,SizeConst=32)] public string dmFormName;
      public ushort dmLogPixels;
      public uint dmBitsPerPel,dmPelsWidth,dmPelsHeight,dmDisplayFlags,dmDisplayFrequency;
      public uint dmICMMethod,dmICMIntent,dmMediaType,dmDitherType,dmReserved1,dmReserved2;
      public uint dmPanningWidth,dmPanningHeight;
    }
    [DllImport("user32.dll",EntryPoint="EnumDisplaySettingsW",CharSet=CharSet.Unicode)]
    static extern bool EnumMode(string device,int mode,ref DisplayMode result);
    [DllImport("user32.dll",EntryPoint="ChangeDisplaySettingsW",CharSet=CharSet.Unicode)]
    static extern int SetMode(ref DisplayMode data,uint flags);
    [DllImport("user32.dll",EntryPoint="ChangeDisplaySettingsW",CharSet=CharSet.Unicode)]
    static extern int SetMode(IntPtr data,uint flags);
    const uint TEST=2;
    const int CURRENT=-1, SUCCESS=0;
    readonly ComboBox quality=new ComboBox();
    readonly Label report=new Label(),modeLabel=new Label();
    readonly TextBox fps=new TextBox();
    readonly Button start=new Button(),confirm=new Button(),restore=new Button(),evaluate=new Button();
    readonly Timer rollback=new Timer();
    readonly List<DisplayMode> supported=new List<DisplayMode>();
    DisplayMode initial;
    bool changed=false,needsConfirmation=false;
    int seconds=20;
    static DisplayMode Blank(){
      var d=new DisplayMode{dmDeviceName="",dmFormName=""};
      d.dmSize=(ushort)Marshal.SizeOf(typeof(DisplayMode));
      return d;
    }
    static bool ReadCurrent(out DisplayMode d){
      d=Blank();
      return EnumMode(null,CURRENT,ref d);
    }
    static string Description(DisplayMode d){
      string quality=d.dmPelsWidth==3840?"4K VIRTUAL (DSR x4)":d.dmPelsWidth==2880?
        "DLDSR 2,25x":"CALIDAD 1440p";
      return quality+" · "+d.dmPelsWidth+"×"+d.dmPelsHeight+" @ "+d.dmDisplayFrequency+" Hz";
    }
    public AetherVisualGoalWindowV46(){
      Text="AETHER V46 · 4K VISUAL / META 300 FPS";
      ClientSize=new Size(1010,780);MinimumSize=new Size(970,740);
      Font=new Font("Segoe UI",10);
      StartPosition=FormStartPosition.CenterParent;
      BackColor=Color.FromArgb(9,24,40);ForeColor=Color.White;
      var title=new Label{Text="AETHER · 4K VISUAL / OBJETIVO 300 FPS",
        Location=new Point(22,16),Size=new Size(955,50),ForeColor=Color.Aquamarine,
        Font=new Font("Segoe UI",19,FontStyle.Bold)};Controls.Add(title);
      var desc=new Label{Text="Tu referencia: 425 FPS en CS2 a 1080p. Meta: ≥300 FPS (margen 125 FPS).\r\n"+
        "NO es un overlay: usa DSR/DLDSR del controlador NVIDIA si existe un modo compatible.\r\n"+
        "El panel 1080p no adquiere píxeles 4K físicos. No podemos garantizar los 300 FPS sin medirlos.",
        Location=new Point(23,73),Size=new Size(957,105),ForeColor=Color.Gainsboro};Controls.Add(desc);
      modeLabel.Location=new Point(25,186);modeLabel.Size=new Size(943,66);
      modeLabel.ForeColor=Color.LightCyan;Controls.Add(modeLabel);
      var lbl=new Label{Text="Modo de imagen (solo resoluciones anunciadas por el controlador y que mantienen Hz):",
        Location=new Point(25,270),Size=new Size(940,28)};Controls.Add(lbl);
      quality.DropDownStyle=ComboBoxStyle.DropDownList;
      quality.Location=new Point(25,304);quality.Size=new Size(938,36);Controls.Add(quality);
      SetupButton(start,"1. ACTIVAR PRUEBA VISUAL (NO OVERLAY)",25,362,936,57,Activate);
      SetupButton(confirm,"2. CONFIRMAR IMAGEN · 20 s",25,429,464,55,Confirm);
      confirm.Enabled=false;
      SetupButton(restore,"RESTAURAR 1080P ORIGINAL",500,429,461,55,Restore);
      var label=new Label{Text="FPS reales obtenidos en CS2 después de activar el modo (escribe la lectura del propio juego):",
        Location=new Point(25,505),Size=new Size(938,28)};Controls.Add(label);
      fps.Location=new Point(25,540);fps.Size=new Size(160,34);
      fps.Text="";Controls.Add(fps);
      SetupButton(evaluate,"3. COMPROBAR OBJETIVO 300 FPS",203,537,758,45,Evaluate);
      report.Location=new Point(23,600);report.Size=new Size(945,93);
      report.ForeColor=Color.Aquamarine;report.BackColor=Color.FromArgb(17,45,63);
      report.Padding=new Padding(12);Controls.Add(report);
      SetupButton(new Button(),"ABRIR OPCIONES NVIDIA (ACTIVAR DSR / DLDSR)",25,711,936,46,OpenNvidia);
      rollback.Interval=1000;rollback.Tick+=(s,e)=>{
        if(!needsConfirmation)return;
        seconds--;confirm.Text="CONFIRMAR IMAGEN ("+seconds+" s)";
        if(seconds<=0){Restore();report.Text="No se confirmó la resolución. Se restauró el modo anterior.";}
      };
      FormClosing+=(s,e)=>Restore();
      LoadModes();
    }
    void SetupButton(Button b,string label,int x,int y,int w,int h,Action action){
      b.Text=label;b.Location=new Point(x,y);b.Size=new Size(w,h);
      b.FlatStyle=FlatStyle.Flat;b.BackColor=Color.FromArgb(19,109,117);
      b.ForeColor=Color.White;b.Font=new Font("Segoe UI",10,FontStyle.Bold);
      b.Click+=(s,e)=>{try{action();}catch(Exception ex){report.Text="Error: "+ex.Message;}};
      Controls.Add(b);
    }
    void LoadModes(){
      quality.Items.Clear();supported.Clear();
      DisplayMode current;
      if(!ReadCurrent(out current)){start.Enabled=false;report.Text="Windows no informa la pantalla activa.";return;}
      modeLabel.Text="PANTALLA: "+current.dmPelsWidth+"×"+current.dmPelsHeight+
        " a "+current.dmDisplayFrequency+" Hz. Objetivo "+AetherVisualGoalV46.TargetFps+
        " FPS; monitor muestra hasta "+current.dmDisplayFrequency+" actualizaciones/s.";
      if(current.dmDisplayFrequency<190){
        start.Enabled=false;report.Text="Tu pantalla NO está actualmente a 200 Hz. Configúrala primero en Windows; no forzaré otro modo.";return;
      }
      if(current.dmPelsWidth!=1920||current.dmPelsHeight!=1080){
        start.Enabled=false;report.Text="Para esta prueba el modo inicial debe ser 1920×1080. Restáuralo desde Windows antes.";return;
      }
      var dims=new[]{new[]{3840,2160},new[]{2880,1620},new[]{2560,1440}};
      foreach(var d in dims) {
        DisplayMode candidate=Blank();bool found=false;
        for(int i=0;i<600;i++){
          var m=Blank();if(!EnumMode(null,i,ref m))break;
          if(m.dmPelsWidth!=d[0]||m.dmPelsHeight!=d[1] ||
             !AetherVisualGoalV46.EligibleMode((int)m.dmPelsWidth,(int)m.dmPelsHeight,
               (int)m.dmDisplayFrequency,(int)current.dmDisplayFrequency))continue;
          if(SetMode(ref m,TEST)!=SUCCESS)continue;
          candidate=m;found=true;break;
        }
        if(found){supported.Add(candidate);quality.Items.Add(Description(candidate));}
      }
      if(supported.Count==0){
        start.Enabled=false;
        report.Text="No hay resoluciones virtuales DSR/DLDSR a la frecuencia actual. "+
          "En NVIDIA activa Factores DSR. Vuelve a abrir esta ventana después de aplicarlos.";
      }else{
        quality.SelectedIndex=0;start.Enabled=true;
        report.Text="V46 detecta "+supported.Count+" modos de supermuestreo a "+
          current.dmDisplayFrequency+" Hz. Elige uno y prueba. Si no alcanzas 300 FPS, "+
          "restaura y usa uno menos exigente. El programa no mide FPS por sí mismo.";
      }
    }
    void Activate(){
      if(changed){report.Text="Restablece la resolución antes de probar otro modo.";return;}
      if(quality.SelectedIndex<0||quality.SelectedIndex>=supported.Count)return;
      DisplayMode current;
      if(!ReadCurrent(out current))return;
      var chosen=supported[quality.SelectedIndex];
      if(current.dmDisplayFrequency!=chosen.dmDisplayFrequency){
        report.Text="La frecuencia anunciada no coincide con la actual. No cambiaré el modo.";return;
      }
      if(MessageBox.Show(this,"Probar temporalmente "+Description(chosen)+"?\r\n"+
        "Puede reducir FPS; solo confirmar si la imagen es correcta. "+
        "Si no confirmas en 20 s, el escritorio vuelve a su estado anterior. "+
        "No se modifica el registro de Windows ni se capturan los juegos.",
        "AETHER V46 · confirmar prueba",MessageBoxButtons.YesNo,MessageBoxIcon.Warning)
        !=DialogResult.Yes)return;
      initial=current;
      var result=SetMode(ref chosen,0); // TEMPORARY, no CDS_UPDATEREGISTRY
      if(result!=SUCCESS){report.Text="Windows rechazó el modo (código "+result+").";return;}
      changed=true;needsConfirmation=true;seconds=20;
      confirm.Enabled=true;confirm.Text="CONFIRMAR IMAGEN (20 s)";
      rollback.Start();
      report.Text="Prueba activada. Confirma imagen en 20 segundos o se restaurará sola. "+
        "Después selecciona la misma resolución dentro de CS2 si es necesario. "+
        "Mide los FPS reales: AETHER NO los inventa.";
    }
    void Confirm(){
      if(!changed)return;
      needsConfirmation=false;rollback.Stop();confirm.Enabled=false;
      report.Text="Resolución temporal confirmada. Puedes minimizar AETHER para jugar y medir FPS. "+
        "Al cerrar esta ventana se restaurará el modo anterior.";
    }
    void Restore(){
      needsConfirmation=false;rollback.Stop();confirm.Enabled=false;
      if(!changed)return;
      int result=SetMode(ref initial,0);
      if(result!=SUCCESS)SetMode(IntPtr.Zero,0);
      changed=false;
      report.Text="Resolución de pantalla anterior restaurada. Puedes probar otro modo.";
    }
    void Evaluate(){
      int observed;
      if(!int.TryParse(fps.Text.Trim(),out observed)||observed<1||observed>5000){
        report.Text="Introduce tus FPS reales del contador de CS2 (entre 1 y 5000).";return;
      }
      report.Text="Tus FPS medidos: "+observed+". "+AetherVisualGoalV46.Grade(observed)+
        " Referencia original: 425 FPS. Valor introducido manualmente, no validado por AETHER.";
    }
    void OpenNvidia(){
      var candidates=new[]{
        Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles),
          "NVIDIA Corporation","Control Panel Client","nvcplui.exe"),
        Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86),
          "NVIDIA Corporation","Control Panel Client","nvcplui.exe")
      };
      foreach(var file in candidates)if(File.Exists(file)){
        Process.Start(new ProcessStartInfo(file){UseShellExecute=true});
        report.Text="En NVIDIA > Configuración 3D > Factores DSR, activa 4x o DLDSR 2,25x; "+
          "después reabre este panel. AETHER solo usa modos publicados por el controlador.";return;
      }
      report.Text="Abre NVIDIA App o el Panel de Control NVIDIA desde Inicio. "+
        "Configura Factores DSR/DLDSR si aparecen. No forces resoluciones personalizadas.";
    }
  }
}
