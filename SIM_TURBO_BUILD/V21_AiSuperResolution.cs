using System;
using System.ComponentModel;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>
  /// AETHER IA 4K V21 launches the real FSRCNN x2 neural model bundled
  /// with the COMPLETE SOURCE PROJECT. Requires local Python + OpenCV contrib.
  /// It produces files; not live gaming upscaling or a change in display pixels.
  /// </summary>
  public sealed class AetherAi4KV21 : Form {
    readonly Label status;
    readonly Button convert;
    string input;
    string output;
    readonly string script;

    public AetherAi4KV21(){
      Text="AETHER IA 4K V21 · RED NEURONAL REAL";
      ClientSize=new Size(910,455);
      MinimumSize=new Size(760,455);
      BackColor=Color.FromArgb(8,21,35);
      ForeColor=Color.White;
      Font=new Font("Segoe UI",10);
      StartPosition=FormStartPosition.CenterParent;
      script=FindScript();
      Controls.Add(new Label{Text="AETHER · IA SUPERRESOLUCIÓN x2",Location=new Point(20,19),
        Size=new Size(860,43),Font=new Font("Segoe UI",18,FontStyle.Bold),
        ForeColor=Color.FromArgb(54,231,209)});
      Controls.Add(new Label{Text=
        "RED NEURONAL FSRCNN x2 entrenada: PNG/JPG 1920×1080 → archivo PNG 3840×2160.\r\n"+
        "No es bicúbico. Las imágenes se procesan localmente; el modelo neuronal está incluido en el ZIP.\r\n"+
        "Necesitas Python y OpenCV Contrib instalados. La primera ejecución no descarga modelos.\r\n"+
        "Un monitor 1080p mantiene 1920×1080 píxeles físicos. No modifica los gráficos de juegos en vivo.",
        Location=new Point(22,76),Size=new Size(855,106),ForeColor=Color.Gainsboro});
      var choose=Btn("1. ELEGIR IMAGEN",22,196,254);
      choose.Click+=(s,e)=>ChooseInput();
      convert=Btn("2. CONVERTIR CON IA A 4K",289,196,346);
      convert.Click+=async(s,e)=>await Upscale();
      var setup=Btn("CÓMO INSTALAR OPENCV",646,196,239);
      setup.Click+=(s,e)=>ShowRequirements();
      status=new Label{Text="Proyecto fuente: "+(script!=null?"modelo y herramienta encontrados.":"no encuentro la carpeta IA_SUPERRESOLUCION.")+
        "\r\nSelecciona una imagen antes de iniciar.",Location=new Point(22,267),Size=new Size(855,150),
        BorderStyle=BorderStyle.FixedSingle,Padding=new Padding(10),
        BackColor=Color.FromArgb(17,41,57),ForeColor=Color.FromArgb(63,231,204)};
      Controls.Add(status);
    }
    Button Btn(string label,int x,int y,int w){
      var b=new Button{Text=label,Location=new Point(x,y),Size=new Size(w,54),
        BackColor=Color.FromArgb(18,113,114),ForeColor=Color.White,
        FlatStyle=FlatStyle.Flat,Font=new Font("Segoe UI",10,FontStyle.Bold)};
      b.FlatAppearance.BorderSize=0;Controls.Add(b);return b;
    }
    static string FindScript(){
      string dir=AppDomain.CurrentDomain.BaseDirectory;
      for(int depth=0;depth<7;depth++){
        string file=Path.Combine(dir,"IA_SUPERRESOLUCION","AETHER_IA_4K.py");
        if(File.Exists(file) && File.Exists(Path.Combine(dir,"IA_SUPERRESOLUCION","FSRCNN_x2.pb")))
          return file;
        dir=Path.GetDirectoryName(Path.GetFullPath(dir.TrimEnd(Path.DirectorySeparatorChar)));
        if(string.IsNullOrEmpty(dir))break;
      }
      return null;
    }
    void ChooseInput(){
      using(var dialog=new OpenFileDialog{
        Filter="Imagen local|*.png;*.jpg;*.jpeg;*.bmp",Title="Imagen para superresolución IA"}){
        if(dialog.ShowDialog(this)!=DialogResult.OK)return;
        input=dialog.FileName;
        status.Text="Imagen elegida: "+input+"\r\nLa IA generará dimensiones ×2.";
      }
    }
    void ShowRequirements(){
      MessageBox.Show(this,
        "AETHER V21 utiliza FSRCNN x2 (red neuronal entrenada), no bicúbico.\r\n\r\n"+
        "1. Instala Python 3.11 o 3.12 para Windows si no lo tienes.\r\n"+
        "2. Abre PowerShell y ejecuta:\r\n"+
        "py -m pip install opencv-contrib-python==4.11.0.86\r\n\r\n"+
        "3. Abre esta ventana desde el proyecto fuente V21 completo.\r\n"+
        "El modelo FSRCNN_x2.pb va dentro de IA_SUPERRESOLUCION.\r\n\r\n"+
        "No se ejecuta silenciosamente, no cambia el driver ni aumenta la resolución física de la pantalla.",
        "Requisitos para IA 4K",MessageBoxButtons.OK,MessageBoxIcon.Information);
    }
    static Tuple<int,string> RunScript(string py,string script,string input,string output){
      string arguments="\""+script+"\" --input \""+input+"\" --output \""+output+"\"";
      using(var p=new Process()){
        p.StartInfo=new ProcessStartInfo(py,arguments){
          WorkingDirectory=Path.GetDirectoryName(script),
          RedirectStandardOutput=true,RedirectStandardError=true,
          CreateNoWindow=true,UseShellExecute=false
        };
        p.Start();
        string stdOut=p.StandardOutput.ReadToEnd();
        string stdErr=p.StandardError.ReadToEnd();
        if(!p.WaitForExit(900000)){
          try{p.Kill();}catch{}
          throw new TimeoutException("La IA excedió 15 minutos.");
        }
        return Tuple.Create(p.ExitCode,(stdOut+"\r\n"+stdErr).Trim());
      }
    }
    async Task Upscale(){
      if(script==null){
        status.Text="Abre el programa DESDE la carpeta del proyecto fuente completo V21; falta IA_SUPERRESOLUCION.";
        return;
      }
      if(string.IsNullOrEmpty(input) || !File.Exists(input)){
        status.Text="Primero elige una imagen PNG/JPG/BMP válida.";return;
      }
      using(var dlg=new SaveFileDialog{
        Title="Guardar imagen 4K generada por IA",Filter="Imagen PNG|*.png",
        FileName=Path.GetFileNameWithoutExtension(input)+"_AETHER_IA_4K.png"}){
        if(dlg.ShowDialog(this)!=DialogResult.OK)return;
        output=dlg.FileName;
      }
      convert.Enabled=false;
      status.Text="IA neuronal FSRCNN x2 ejecutándose por bloques..."+
        "\r\nLos vídeos y el juego en tiempo real NO están incluidos.";
      try{
        Tuple<int,string> result=await Task.Run(()=>{
          try{return RunScript("py",script,input,output);}
          catch(Win32Exception){return RunScript("python",script,input,output);}
        });
        if(result.Item1==0 && File.Exists(output)){
          status.Text="CONVERSIÓN REAL COMPLETADA · IA FSRCNN x2\r\n"+output+
            "\r\n"+result.Item2+"\r\nAbre el PNG con tu visor de imágenes.";
        } else {
          status.Text="La IA no pudo completar el archivo. "+result.Item2+
            "\r\nPulsa CÓMO INSTALAR OPENCV para corregir dependencias.";
        }
      }catch(Exception ex){
        status.Text="Error ejecutando la IA: "+ex.Message+
          "\r\nPulsa CÓMO INSTALAR OPENCV. Debes tener Python disponible.";
      }finally{convert.Enabled=true;}
    }
  }
}
