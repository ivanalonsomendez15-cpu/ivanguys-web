using System;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.Drawing.Imaging;
using System.IO;
using System.Management;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>
  /// Real bicubic image upscaling. NOT AI. 1080p screens remain physically 1080p.
  /// A 4K PNG is useful for exporting/processing, not a way to gain native display pixels.
  /// </summary>
  public sealed class AetherSuperResolutionV12 : Form {
    readonly Label status;
    readonly PictureBox preview;
    readonly Button process;
    public AetherSuperResolutionV12() {
      Text="AETHER IMAGEN · SUPERRESOLUCIÓN V12 (BICÚBICA, NO IA)";
      ClientSize=new Size(990,730);
      MinimumSize=new Size(900,670);
      StartPosition=FormStartPosition.CenterParent;
      BackColor=Color.FromArgb(8,17,31);
      ForeColor=Color.White;
      Font=new Font("Segoe UI",10);
      Label title=new Label {Text="AETHER · LABORATORIO DE IMAGEN 4K",
        Location=new Point(22,17),Size=new Size(930,48),
        Font=new Font("Segoe UI",20,FontStyle.Bold),ForeColor=Color.FromArgb(42,225,201)};
      Controls.Add(title);
      Label description=new Label {Text=
        "Una pantalla de 1920×1080 nunca muestra 3840×2160 píxeles físicos. "+
        "Este módulo exporta imágenes PNG 4K con interpolación bicúbica REAL, no inteligencia artificial.\r\n"+
        "Para juegos: prueba DLSS/FSR solo si el juego lo admite; NVIDIA DSR/DLDSR puede renderizar "+
        "más alto y reducir a la pantalla, con coste de GPU. RTX Video Super Resolution depende del contenido y controlador.",
        Location=new Point(23,75),Size=new Size(940,105),ForeColor=Color.Gainsboro};
      Controls.Add(description);
      process=MakeButton("ELEGIR IMAGEN Y EXPORTAR PNG 4K",22,192,450);
      process.Click+=async(s,e)=>await Export();
      Controls.Add(process);
      var detect=MakeButton("DETECTAR GPU Y PANTALLA",498,192,463);
      detect.Click+=(s,e)=>ShowHardware();
      Controls.Add(detect);
      status=new Label {Text="Listo · elige una imagen JPEG/PNG/BMP local.",
        Location=new Point(23,259),Size=new Size(930,75),ForeColor=Color.FromArgb(42,225,201)};
      Controls.Add(status);
      preview=new PictureBox {Location=new Point(23,340),Size=new Size(937,345),
        BackColor=Color.FromArgb(19,39,57),SizeMode=PictureBoxSizeMode.Zoom};
      Controls.Add(preview);
      FormClosed+=(s,e)=>{if(preview.Image!=null)preview.Image.Dispose();};
    }
    static Button MakeButton(string label,int x,int y,int w) {
      return new Button {Text=label,Location=new Point(x,y),Size=new Size(w,52),
        FlatStyle=FlatStyle.Flat,BackColor=Color.FromArgb(18,105,113),ForeColor=Color.White,
        Font=new Font("Segoe UI",10,FontStyle.Bold)};
    }
    void ShowHardware() {
      string gpu="No detectada";
      try {
        using(var search=new ManagementObjectSearcher("SELECT Name FROM Win32_VideoController"))
          foreach(ManagementObject item in search.Get()) {
            gpu=Convert.ToString(item["Name"]);break;
          }
      }catch(Exception ex){gpu="WMI no disponible: "+ex.Message;}
      var screen=Screen.PrimaryScreen;
      string size=screen==null?"Desconocida":screen.Bounds.Width+" × "+screen.Bounds.Height;
      status.Text="GPU: "+gpu+"\r\nPantalla principal: "+size+
        ". La resolución nativa depende del panel físico.";
    }
    async Task Export() {
      string input,output;
      using(var open=new OpenFileDialog {
        Title="Elige una imagen local",Filter="Imágenes|*.png;*.jpg;*.jpeg;*.bmp"
      }) {
        if(open.ShowDialog(this)!=DialogResult.OK)return;
        input=open.FileName;
      }
      using(var save=new SaveFileDialog {
        Title="Guardar PNG 4K interpolado",Filter="PNG|*.png",
        FileName=Path.GetFileNameWithoutExtension(input)+"_AETHER_4K_BICUBICO.png"
      }) {
        if(save.ShowDialog(this)!=DialogResult.OK)return;
        output=save.FileName;
      }
      process.Enabled=false;
      status.Text="Procesando imagen en segundo plano · 3840×2160 · NO IA...";
      try {
        // Avoid holding a file lock or allocating extreme input bitmaps.
        if(new FileInfo(input).Length>45*1024*1024)
          throw new InvalidOperationException("Imagen de entrada demasiado grande (>45 MB).");
        Bitmap result=await Task.Run(()=>{
          using(var source=new Bitmap(input)) {
            if(source.Width>8192||source.Height>8192)
              throw new InvalidOperationException("Dimensiones de entrada superiores a 8192 píxeles.");
            var outputImage=new Bitmap(3840,2160,PixelFormat.Format24bppRgb);
            try {
              using(var graphics=Graphics.FromImage(outputImage)) {
                graphics.Clear(Color.Black);
                graphics.InterpolationMode=InterpolationMode.HighQualityBicubic;
                graphics.CompositingQuality=CompositingQuality.HighQuality;
                graphics.PixelOffsetMode=PixelOffsetMode.HighQuality;
                double factor=Math.Min(3840.0/source.Width,2160.0/source.Height);
                int width=(int)Math.Round(source.Width*factor);
                int height=(int)Math.Round(source.Height*factor);
                graphics.DrawImage(source,new Rectangle((3840-width)/2,(2160-height)/2,width,height),
                  new Rectangle(0,0,source.Width,source.Height),GraphicsUnit.Pixel);
              }
              outputImage.Save(output,ImageFormat.Png);
              return outputImage;
            }catch{outputImage.Dispose();throw;}
          }
        });
        // The preview is scaled to the UI. No 4K screen claim.
        if(preview.Image!=null)preview.Image.Dispose();
        preview.Image=result;
        status.Text="PNG 3840×2160 exportado · "+(new FileInfo(output).Length/1048576.0).ToString("0.0")+
          " MiB · Interpolación bicúbica, NO IA.\r\n"+output;
      }catch(Exception ex){status.Text="No se pudo exportar: "+ex.Message;}
      finally{process.Enabled=true;}
    }
  }
}
