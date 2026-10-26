using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace SimTurboPC {
  // Durable, local, per-Windows-user preferences. No passwords, tokens or telemetry.
  // All writes are explicit, never modify Game Mode or system registry by themselves.
  public static class AetherSavedSettingsV22 {
    static readonly object Gate=new object();
    static readonly string Dir=Path.Combine(Environment.GetFolderPath(
       Environment.SpecialFolder.LocalApplicationData),"SimTurboPC","V22");
    public static string FilePath {get{return Path.Combine(Dir,"preferences.txt");}}
    const string Header="AETHER-PREFERENCES-V22";
    static readonly HashSet<string> Keys=new HashSet<string>(StringComparer.Ordinal) {
      "autopilot.network","autopilot.games","autopilot.drivers","autopilot.executables",
      "innovation.ping","innovation.dns","innovation.menu","clinic.tab"
    };
    static Dictionary<string,string> Read(string file) {
      var result=new Dictionary<string,string>(StringComparer.Ordinal);
      if(!File.Exists(file))return result;
      if(new FileInfo(file).Length>131072)throw new InvalidDataException("Archivo de preferencias demasiado grande.");
      var lines=File.ReadAllLines(file,Encoding.UTF8);
      if(lines.Length==0||lines[0].Trim('\uFEFF')!=Header)
        throw new InvalidDataException("Formato AETHER V22 no reconocido.");
      for(int i=1;i<lines.Length;i++){
        var line=lines[i].Split(new[]{'|'},2);
        if(line.Length!=2||!Keys.Contains(line[0])||result.ContainsKey(line[0]))
          throw new InvalidDataException("Clave desconocida o duplicada.");
        var data=Convert.FromBase64String(line[1]);
        if(data.Length>4096)throw new InvalidDataException("Valor demasiado grande.");
        result[line[0]]=new UTF8Encoding(false,true).GetString(data);
      }
      return result;
    }
    static void Write(Dictionary<string,string> data) {
      Directory.CreateDirectory(Dir);
      string temp=Path.Combine(Dir,"preferences-"+Guid.NewGuid().ToString("N")+".tmp");
      try{
        var lines=new List<string>{Header};
        foreach(var kv in data.OrderBy(x=>x.Key,StringComparer.Ordinal))
          lines.Add(kv.Key+"|"+Convert.ToBase64String(Encoding.UTF8.GetBytes(kv.Value)));
        File.WriteAllLines(temp,lines.ToArray(),new UTF8Encoding(false));
        if(File.Exists(FilePath))File.Replace(temp,FilePath,Path.Combine(Dir,"previous.bak"),true);
        else File.Move(temp,FilePath);
      }finally{if(File.Exists(temp))File.Delete(temp);}
    }
    public static void Save(string key,string val){
      if(!Keys.Contains(key)||val==null||Encoding.UTF8.GetByteCount(val)>4096)
        throw new ArgumentException("Preferencia no permitida");
      lock(Gate){
        var old=Read(FilePath);
        old[key]=val;
        Write(old);
      }
    }
    public static string Load(string key,string fallback){
      if(!Keys.Contains(key))throw new ArgumentException("Clave no permitida");
      lock(Gate){
        try{var map=Read(FilePath);return map.ContainsKey(key)?map[key]:fallback;}
        catch{return fallback;}
      }
    }
    public static void BindCheck(CheckBox checkbox,string key){
      checkbox.Checked=Load(key,checkbox.Checked?"1":"0")=="1";
      checkbox.CheckedChanged+=(s,e)=>TrySave(key,checkbox.Checked?"1":"0");
    }
    public static void BindText(TextBox input,string key){
      input.Text=Load(key,input.Text);
      var debounce=new Timer{Interval=700};
      debounce.Tick+=(s,e)=>{debounce.Stop();TrySave(key,input.Text);};
      input.TextChanged+=(s,e)=>{debounce.Stop();debounce.Start();};
      input.Leave+=(s,e)=>{debounce.Stop();TrySave(key,input.Text);};
      input.Disposed+=(s,e)=>{debounce.Stop();debounce.Dispose();};
    }
    public static void BindMenu(ListBox menu,string key){
      int old;
      if(int.TryParse(Load(key,"0"),out old)&&old>=0&&old<menu.Items.Count)
        menu.SelectedIndex=old;
      menu.SelectedIndexChanged+=(s,e)=>{if(menu.SelectedIndex>=0)TrySave(key,menu.SelectedIndex.ToString());};
    }
    public static void BindTabs(TabControl tabs,string key){
      int old;
      if(int.TryParse(Load(key,"0"),out old)&&old>=0&&old<tabs.TabCount)
        tabs.SelectedIndex=old;
      tabs.SelectedIndexChanged+=(s,e)=>TrySave(key,tabs.SelectedIndex.ToString());
    }
    static void TrySave(string key,string value){
      try{Save(key,value);}catch(IOException){}catch(UnauthorizedAccessException){}
    }
    public static string BackupTo(string file) {
      if(string.IsNullOrEmpty(file))throw new ArgumentNullException("file");
      lock(Gate){
        Directory.CreateDirectory(Dir);
        if(!File.Exists(FilePath))Write(new Dictionary<string,string>());
        var path=Path.GetFullPath(file);
        if(string.Equals(path,Path.GetFullPath(FilePath),StringComparison.OrdinalIgnoreCase))
          throw new InvalidOperationException("Elige otro archivo.");
        File.Copy(FilePath,path,true);
        return path;
      }
    }
    public static void RestoreFrom(string file) {
      lock(Gate){
        var map=Read(file);  // validation before changing any setting
        foreach(var kv in map)if(kv.Key=="autopilot.executables"&&kv.Value.Length>3000)
          throw new InvalidDataException("Lista de juegos demasiado larga.");
        Write(map);
      }
    }
  }

  public sealed class AetherPreferencesPanelV22:Form {
    readonly Label status;
    public AetherPreferencesPanelV22(){
      Text="AETHER V22 · GUARDADO AUTOMÁTICO";
      ClientSize=new Size(830,425);
      MinimumSize=new Size(730,400);
      BackColor=Color.FromArgb(8,23,37); ForeColor=Color.White;
      Font=new Font("Segoe UI",10);StartPosition=FormStartPosition.CenterParent;
      Controls.Add(new Label{Location=new Point(20,20),Size=new Size(790,52),
        Font=new Font("Segoe UI",19,FontStyle.Bold),ForeColor=Color.Turquoise,
        Text="AETHER V22 · GUARDADO AUTOMÁTICO"});
      Controls.Add(new Label{Location=new Point(24,80),Size=new Size(768,123),
        Text="Se guardan los juegos del autopiloto, sus tres opciones, preferencias del laboratorio AETHER y la pestaña seleccionada.\r\n"+
        "Quedan en este ordenador aunque cierres AETHER, reinicies Windows o cierres el navegador.\r\n"+
        "No se envían claves, códigos de mando, estadísticas ni información a Cloudflare. "+
        "Los interruptores de monitoreo y el mando requieren activación explícita cada vez."});
      Add("EXPORTAR COPIA",24,218,247,Export);
      Add("IMPORTAR COPIA",286,218,247,Import);
      Add("ABRIR CARPETA",548,218,248,Open);
      status=new Label{Location=new Point(24,294),Size=new Size(770,110),
        ForeColor=Color.Aquamarine,Text="Preferencias locales: "+AetherSavedSettingsV22.FilePath+
        "\r\nPara restaurar una copia hay que cerrar y volver a abrir las ventanas."};
      Controls.Add(status);
    }
    void Add(string label,int x,int y,int width,Action action){
      var b=new Button{Text=label,Location=new Point(x,y),Size=new Size(width,54),
        BackColor=Color.FromArgb(20,103,107),ForeColor=Color.White,FlatStyle=FlatStyle.Flat};
      b.Click+=(s,e)=>{try{action();}catch(Exception ex){status.Text="No se pudo completar: "+ex.Message;}};
      Controls.Add(b);
    }
    void Export(){
      using(var d=new SaveFileDialog{Title="Guardar copia AETHER V22",Filter="Preferencias AETHER|*.aether",
        FileName="aether-ajustes-v22.aether"}){
        if(d.ShowDialog(this)!=DialogResult.OK)return;
        status.Text="Copia guardada: "+AetherSavedSettingsV22.BackupTo(d.FileName);
      }
    }
    void Import(){
      using(var d=new OpenFileDialog{Title="Importar copia AETHER V22",Filter="Preferencias AETHER|*.aether"}){
        if(d.ShowDialog(this)!=DialogResult.OK)return;
        if(MessageBox.Show(this,"¿Reemplazar tus preferencias locales? Las ventanas abiertas deben reiniciarse después.",
          "Restaurar copia",MessageBoxButtons.YesNo,MessageBoxIcon.Question)!=DialogResult.Yes)return;
        AetherSavedSettingsV22.RestoreFrom(d.FileName);
        status.Text="Ajustes restaurados. Cierra y abre AETHER para aplicarlos.";
      }
    }
    void Open(){
      var folder=Path.GetDirectoryName(AetherSavedSettingsV22.FilePath);
      Directory.CreateDirectory(folder);
      System.Diagnostics.Process.Start(new System.Diagnostics.ProcessStartInfo(folder){UseShellExecute=true});
    }
  }
}