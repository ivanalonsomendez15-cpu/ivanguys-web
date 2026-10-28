using System;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Runtime.InteropServices;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>
  /// V34 replaces the misleading CPU overlay recommendation with a no-capture
  /// high-refresh-rate review and GPU driver links. It does not claim true 4K.
  /// </summary>
  public sealed class AetherSmoothDisplayV34:Form {
    [StructLayout(LayoutKind.Sequential,CharSet=CharSet.Unicode)]
    public struct Mode {
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
    static extern bool EnumDisplaySettings(string device,int mode,ref Mode data);
    readonly TextBox info=new TextBox();
    public AetherSmoothDisplayV34() {
      Text="AETHER V34 · IMAGEN FLUIDA SIN OVERLAY";
      ClientSize=new Size(900,710);MinimumSize=new Size(830,650);
      Font=new Font("Segoe UI",10);BackColor=Color.FromArgb(9,24,41);ForeColor=Color.White;
      StartPosition=FormStartPosition.CenterParent;
      Controls.Add(new Label{Text="AETHER V34 · PRIORIZAR 200 Hz Y FPS",
        Location=new Point(20,18),Size=new Size(855,49),ForeColor=Color.Aquamarine,
        Font=new Font("Segoe UI",18,FontStyle.Bold)});
      Controls.Add(new Label{Text=
        "NO usa la captura de pantalla ni el filtro lento de V33. No cambia la resolución ni la frecuencia.\r\n"+
        "DSR/DLDSR y DLSS solo funcionan según driver y juego. Un panel 1080p no puede mostrar exactamente píxeles 4K.",
        Location=new Point(23,76),Size=new Size(846,71),ForeColor=Color.Gainsboro});
      Add("VERIFICAR RESOLUCIÓN Y HZ REALES",20,167,858,55,()=>RefreshInfo());
      Add("ABRIR CONFIGURACIÓN DE PANTALLA AVANZADA",20,238,858,55,()=>
        Open("ms-settings:display-advanced"));
      Add("ABRIR CONFIGURACIÓN 3D NVIDIA",20,310,858,55,OpenNvidia);
      Add("ABRIR MODO JUEGO WINDOWS",20,380,858,55,()=>Open("ms-settings:gaming-gamemode"));
      info.Location=new Point(20,456);info.Size=new Size(858,228);info.Multiline=true;info.ReadOnly=true;
      info.BackColor=Color.FromArgb(18,45,62);info.ForeColor=Color.LightCyan;
      info.Font=new Font("Consolas",10);info.ScrollBars=ScrollBars.Vertical;
      Controls.Add(info);
      RefreshInfo();
    }
    void Add(string label,int x,int y,int w,int h,Action cb){
      var b=new Button{Text=label,Location=new Point(x,y),Size=new Size(w,h),
        FlatStyle=FlatStyle.Flat,BackColor=Color.FromArgb(18,108,121),ForeColor=Color.White};
      b.Click+=(s,e)=>{try{cb();}catch(Exception ex){info.Text="No se pudo abrir: "+ex.Message;}};
      Controls.Add(b);
    }
    void Open(string uri){
      Process.Start(new ProcessStartInfo(uri){UseShellExecute=true});
    }
    void OpenNvidia(){
      var files=new[]{
        Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFiles),
          "NVIDIA Corporation","Control Panel Client","nvcplui.exe"),
        Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.ProgramFilesX86),
          "NVIDIA Corporation","Control Panel Client","nvcplui.exe")
      };
      foreach(var p in files)if(File.Exists(p)){
        Process.Start(new ProcessStartInfo(p){UseShellExecute=true});return;
      }
      info.AppendText(Environment.NewLine+
        "No se encontró el ejecutable NVIDIA clásico. Abre la aplicación NVIDIA desde Inicio. "+
        "En Juegos busca DLSS/FSR si el juego lo admite. Evita DSR 4x si tus FPS caen."+
        Environment.NewLine);
    }
    void RefreshInfo(){
      var dm=new Mode{dmDeviceName="",dmFormName=""};
      dm.dmSize=(ushort)Marshal.SizeOf(typeof(Mode));
      if(!EnumDisplaySettings(null,-1,ref dm)){
        info.Text="Windows no ha permitido consultar el modo del monitor principal.";return;
      }
      info.Text="PANTALLA PRINCIPAL (lectura Windows): "+dm.dmPelsWidth+" x "+dm.dmPelsHeight+
        " @ "+dm.dmDisplayFrequency+" Hz."+Environment.NewLine+
        "Máximo de actualizaciones visibles por segundo: "+dm.dmDisplayFrequency+"."+
        Environment.NewLine+
        (dm.dmDisplayFrequency<200?"Para jugar a 200 Hz, selecciona 200 Hz en pantalla avanzada SOLO si Windows lo ofrece.":
          "Frecuencia detectada igual o superior a 200 Hz.")+
        Environment.NewLine+
        "AETHER V34 no captura ni re-renderiza el escritorio en esta pantalla."+
        Environment.NewLine+
        "Configuración de juego: intenta mantener resolución nativa y FPS estables. "+
        "La nitidez y el antialiasing dependen del controlador; no equivalen a 4K nativo."+
        Environment.NewLine+
        "El overlay de V33 causó caídas de rendimiento: no es recomendable para 200 Hz.";
    }
  }
}
