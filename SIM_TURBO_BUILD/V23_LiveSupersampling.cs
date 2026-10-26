using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Management;
using System.Runtime.InteropServices;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>
  /// V23: Windows desktop supersampling via driver-provided virtual display modes
  /// (NVIDIA DSR/DLDSR where available). It does NOT fake new physical panel pixels,
  /// intercept game frames or inject into anti-cheat-protected processes.
  /// Window only changes the PRIMARY desktop after the user explicitly opts in.
  /// A 20s confirmation timeout and close handler restore the previous mode.
  /// All changes are TEMPORARY (no CDS_UPDATEREGISTRY).
  /// </summary>
  public sealed class AetherLive4KV23 : Form {
    [StructLayout(LayoutKind.Sequential,CharSet=CharSet.Unicode)]
    public struct DevMode {
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
    static extern bool EnumSettings(string display,int mode,ref DevMode data);
    [DllImport("user32.dll",EntryPoint="ChangeDisplaySettingsW",CharSet=CharSet.Unicode)]
    static extern int ChangeSettings(ref DevMode data,uint flags);
    const int CURRENT=-1, SUCCESS=0;
    const uint TEST=0x00000002;  // CDS_TEST: never changes hardware.
    static DevMode NewMode(){
      var mode=new DevMode();
      mode.dmDeviceName="";
      mode.dmFormName="";
      mode.dmSize=(ushort)Marshal.SizeOf(typeof(DevMode));
      return mode;
    }
    public static List<string> EnumerateVirtualModes(){
      var list=new List<string>();
      var mode=NewMode();
      var seen=new HashSet<string>(StringComparer.Ordinal);
      for(int index=0;index<350;index++){
        mode=NewMode();
        if(!EnumSettings(null,index,ref mode))break;
        if((mode.dmPelsWidth!=2560||mode.dmPelsHeight!=1440) &&
           (mode.dmPelsWidth!=3840||mode.dmPelsHeight!=2160) &&
           (mode.dmPelsWidth!=2880||mode.dmPelsHeight!=1620))continue;
        string name=mode.dmPelsWidth+"x"+mode.dmPelsHeight;
        if(seen.Add(name))list.Add(name);
      }
      return list;
    }
    static bool HasMode(int width,int height,out DevMode data){
      data=NewMode();
      for(int i=0;i<350;i++){
        var m=NewMode();
        if(!EnumSettings(null,i,ref m))break;
        if(m.dmPelsWidth==(uint)width&&m.dmPelsHeight==(uint)height){
          if(ChangeSettings(ref m,TEST)==SUCCESS){data=m;return true;}
        }
      }
      return false;
    }

    readonly Label status;
    readonly Label baseline;
    readonly Button activate,restore,confirm;
    readonly ComboBox quality;
    readonly Timer safety=new Timer();
    readonly string preferences=Path.Combine(
      Environment.GetFolderPath(Environment.SpecialFolder.LocalApplicationData),
      "SimTurboPC","V23","preferred_mode.txt");
    DevMode original;
    bool active=false,provisional=false;
    int remaining=0;
    public AetherLive4KV23(){
      Text="AETHER V23 · 4K EN DIRECTO / DSR DE NVIDIA";
      ClientSize=new Size(1010,710);
      MinimumSize=new Size(930,690);
      StartPosition=FormStartPosition.CenterParent;
      BackColor=Color.FromArgb(7,22,38);
      ForeColor=Color.White;
      Font=new Font("Segoe UI",10);
      Controls.Add(new Label{
        Text="AETHER LIVE 4K · WINDOWS + JUEGOS + NAVEGADOR",
        Location=new Point(20,17),Size=new Size(955,47),
        Font=new Font("Segoe UI",18,FontStyle.Bold),
        ForeColor=Color.FromArgb(43,230,201)});
      Controls.Add(new Label{
        Text="Esto NO convierte fotos: usa modos virtuales de resolución DSR/DLDSR del controlador gráfico.\r\n"+
             "La GPU puede renderizar a más píxeles y reducir al panel 1080p. Si un juego usa pantalla completa exclusiva,\r\n"+
             "quizá necesites elegir 2560x1440 o 3840x2160 dentro de SUS ajustes. No hay inyección en juegos.",
        Location=new Point(24,75),Size=new Size(955,91),ForeColor=Color.Gainsboro});
      baseline=new Label{Location=new Point(24,174),Size=new Size(930,77),
        ForeColor=Color.LightCyan,Text="Comprobando pantalla..."};
      Controls.Add(baseline);
      Controls.Add(new Label{Text="Calidad a utilizar en pantalla principal:",
        Location=new Point(25,265),Size=new Size(400,28),ForeColor=Color.LightGray});
      quality=new ComboBox{DropDownStyle=ComboBoxStyle.DropDownList,
        Location=new Point(25,297),Width=650,Height=34};
      quality.Items.Add("EQUILIBRADO · 2560x1440 (menos coste en GPU)");
      quality.Items.Add("IA DLDSR · 2880x1620 (si NVIDIA lo permite)");
      quality.Items.Add("MÁXIMO · 3840x2160 (4K virtual · más coste en GPU)");
      quality.SelectedIndex=LoadPreferred();
      quality.SelectedIndexChanged+=(s,e)=>SavePreferred();
      Controls.Add(quality);
      activate=MakeButton("ACTIVAR RESOLUCIÓN VIRTUAL",25,356,438,55);
      activate.Click+=(s,e)=>Activate();
      restore=MakeButton("VOLVER A RESOLUCIÓN ORIGINAL",475,356,484,55);
      restore.Click+=(s,e)=>Restore();
      confirm=MakeButton("CONFIRMAR RESOLUCIÓN (20 S)",25,425,935,55);
      confirm.Enabled=false;
      confirm.Click+=(s,e)=>{safety.Stop();provisional=false;confirm.Enabled=false;
        status.Text="Modo de supermuestreo activo. Puedes MINIMIZAR esta ventana y usar Windows o jugar.\r\n"+
          "No cierres la ventana: al cerrarla, restauraremos la resolución anterior.";};
      status=new Label{Location=new Point(25,492),Size=new Size(931,125),
        BackColor=Color.FromArgb(16,43,61),Padding=new Padding(12),
        ForeColor=Color.Aquamarine,Text="Por seguridad AETHER no aplica resoluciones sin que las admita el controlador."};
      Controls.Add(status);
      var gpuBtn=MakeButton("ABRIR CONFIGURACIÓN DE PANTALLA",25,634,454,46);
      gpuBtn.Click+=(s,e)=>OpenWindowsDisplay();
      var guide=MakeButton("CÓMO ACTIVAR DSR 4x NVIDIA",490,634,469,46);
      guide.Click+=(s,e)=>ExplainDsr();
      safety.Interval=1000;
      safety.Tick+=(s,e)=>{
        if(!provisional)return;
        remaining--;
        confirm.Text="CONFIRMAR RESOLUCIÓN ("+remaining+" S)";
        if(remaining<=0){Restore();status.Text="Tiempo agotado: AETHER ha restaurado la resolución anterior.";}
      };
      FormClosing+=(s,e)=>Restore();
      RefreshStatus();
    }
    Button MakeButton(string title,int x,int y,int w,int h){
      var b=new Button{Text=title,Location=new Point(x,y),Size=new Size(w,h),
        BackColor=Color.FromArgb(17,108,111),ForeColor=Color.White,
        FlatStyle=FlatStyle.Flat,Font=new Font("Segoe UI",10,FontStyle.Bold)};
      b.FlatAppearance.BorderSize=0;Controls.Add(b);return b;
    }
    int LoadPreferred(){
      try{if(File.Exists(preferences)){
          string stored=File.ReadAllText(preferences).Trim();
          if(stored=="1440p")return 0;
          if(stored=="DLDSR")return 1;
        }}catch{}
      return 2; // 4K selected by default; nothing happens until user confirms.
    }
    void SavePreferred(){
      try{
        Directory.CreateDirectory(Path.GetDirectoryName(preferences));
        File.WriteAllText(preferences,quality.SelectedIndex==0?"1440p":quality.SelectedIndex==1?"DLDSR":"4K");
      }catch{} // preference write never prevents manual access.
    }
    void RefreshStatus(){
      var current=NewMode();
      if(!EnumSettings(null,CURRENT,ref current)){
        baseline.Text="No se pudo leer la pantalla principal.";activate.Enabled=false;return;
      }
      var modes=EnumerateVirtualModes();
      string gpu="No detectada";
      try{
        using(var search=new ManagementObjectSearcher("SELECT Name FROM Win32_VideoController"))
          foreach(ManagementObject o in search.Get()){
            var label=Convert.ToString(o["Name"]);
            if(label.IndexOf("NVIDIA",StringComparison.OrdinalIgnoreCase)>=0){gpu=label;break;}
            if(gpu=="No detectada")gpu=label;
          }
      }catch{}
      baseline.Text="GPU: "+gpu+"\r\nPantalla principal: "+current.dmPelsWidth+"x"+current.dmPelsHeight+
        " @ "+current.dmDisplayFrequency+" Hz\r\n"+
        "Modos virtuales detectados: "+(modes.Count==0?"NINGUNO (configura DSR en NVIDIA)":string.Join(" y ",modes.ToArray()));
      if(current.dmPelsWidth==3840&&current.dmPelsHeight==2160)
        status.Text="Windows ya está en 3840x2160. Si tu panel es 1080p, puede ser DSR; no significa 4K físico.";
    }
    void Activate(){
      if(active){status.Text="Ya está activo. Primero restaura para cambiar de calidad.";return;}
      int width=quality.SelectedIndex==0?2560:quality.SelectedIndex==1?2880:3840;
      int height=quality.SelectedIndex==0?1440:quality.SelectedIndex==1?1620:2160;
      var current=NewMode();
      if(!EnumSettings(null,CURRENT,ref current)){
        status.Text="No se puede consultar la resolución actual.";return;
      }
      if(current.dmPelsWidth==(uint)width&&current.dmPelsHeight==(uint)height){
        status.Text="Windows ya usa esta resolución; no hay cambio que activar.";return;
      }
      DevMode target;
      if(!HasMode(width,height,out target)){
        status.Text="NO DISPONIBLE: Windows no anuncia "+width+"x"+height+" como modo compatible.\r\n"+
          "Abre Panel de control NVIDIA > Controlar configuración 3D > Factores DSR.\r\n"+
          "Para 1080p->4K marca DSR 4,00x; para DLDSR selecciona 2,25x. Pulsa Aplicar.\r\n"+
          "No fuerces resoluciones personalizadas que el controlador no ofrezca.";
        RefreshStatus();return;
      }
      if(MessageBox.Show(this,
        "Cambiar TEMPORALMENTE la resolución de Windows a "+width+"x"+height+"?\r\n\r\n"+
        "Esto afecta al escritorio y ventanas en el monitor principal. En juegos puede reducir mucho los FPS.\r\n"+
        "Si la pantalla sale mal, NO pulses nada: se restaurará automáticamente en 20 segundos.\r\n"+
        "AETHER no modificará la resolución guardada de Windows. Para volver, pulsa RESTAURAR o cierra esta ventana.",
        "AETHER V23 · modo DSR",MessageBoxButtons.YesNo,MessageBoxIcon.Warning)
        !=DialogResult.Yes)return;
      original=current;
      var rc=ChangeSettings(ref target,0); // temporary, DO NOT persist in registry
      if(rc!=SUCCESS){
        status.Text="Windows rechazó el modo "+width+"x"+height+" (código "+rc+"). No se ha cambiado el registro.";
        return;
      }
      active=true;provisional=true;remaining=20;
      safety.Start();confirm.Enabled=true;
      confirm.Text="CONFIRMAR RESOLUCIÓN (20 S)";
      status.Text="CAMBIO PROVISIONAL: "+width+"x"+height+" en escritorio principal.\r\n"+
        "Si se ve correctamente, pulsa CONFIRMAR. Se revertirá al cerrar AETHER.\r\n"+
        "Para usar Roblox, Counter-Strike o el navegador, MINIMIZA la ventana.";
    }
    void Restore(){
      safety.Stop();provisional=false;confirm.Enabled=false;
      confirm.Text="CONFIRMAR RESOLUCIÓN (20 S)";
      if(!active)return;
      int rc=ChangeSettings(ref original,0);
      if(rc!=SUCCESS)ChangeSettings(IntPtr.Zero,0); // fallback to registered Windows mode
      active=false;
      status.Text="Modo DSR temporal desactivado. Se solicitó restaurar la resolución previa.\r\n"+
        "Si un juego cambia su propia resolución, revísala también dentro de ese juego.";
      RefreshStatus();
    }
    [DllImport("user32.dll",EntryPoint="ChangeDisplaySettingsW",CharSet=CharSet.Unicode)]
    static extern int ChangeSettings(IntPtr value,uint flags);
    void OpenWindowsDisplay(){
      try{Process.Start(new ProcessStartInfo("ms-settings:display"){UseShellExecute=true});}
      catch(Exception ex){status.Text="No se pudo abrir Configuración: "+ex.Message;}
    }
    void ExplainDsr(){
      MessageBox.Show(this,
        "1. Abre el Panel de control de NVIDIA desde el escritorio.\r\n"+
        "2. En Controlar configuración 3D busca «Factores DSR».\r\n"+
        "3. Para una pantalla 1920x1080 activa «DSR 4,00x» (3840x2160) o DLDSR 2,25x (2880x1620).\r\n"+
        "4. Pulsa Aplicar. Regresa a AETHER y elige MÁXIMO 4K.\r\n"+
        "5. AETHER solo cambiará el escritorio si el modo aparece en la lista del controlador.\r\n"+
        "6. Si un juego tiene menú de resolución propio, elige 3840x2160 dentro del juego.\r\n\r\n"+
        "DLDSR 2,25x equivale aprox. a 2880x1620 en un panel Full HD, no a 4K.\r\n"+
        "Una pantalla 1080p sigue mostrando 1080p físicos. Los FPS pueden bajar.\r\n"+
        "No se modifican archivos, drivers, shaders del juego ni anticheat.",
        "Activar DSR en NVIDIA (sin hacks)",MessageBoxButtons.OK,MessageBoxIcon.Information);
    }
  }
}
