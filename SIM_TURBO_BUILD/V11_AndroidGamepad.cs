using System;
using System.Collections.Generic;
using System.Drawing;
using System.Net;
using System.Net.Sockets;
using System.Runtime.InteropServices;
using System.Text;
using System.Text.RegularExpressions;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>
  /// Local consent-based Android keyboard controller. Listens only while this window exists.
  /// No arbitrary commands, no shell access, no input from outside the private LAN.
  /// Keyboard simulation is NOT an XInput controller.
  /// </summary>
  public sealed class AetherAndroidGamepadV11 : Form {
    const int Port=45727;
    const uint UpFlag=0x0002;
    [DllImport("user32.dll",SetLastError=true)]
    static extern void keybd_event(byte key,byte scan,uint flags,UIntPtr extra);
    readonly string code;
    readonly Dictionary<string,byte> keyMap=new Dictionary<string,byte>(StringComparer.Ordinal) {
      {"W",0x57},{"A",0x41},{"S",0x53},{"D",0x44},
      {"SPACE",0x20},{"ESC",0x1B},{"ENTER",0x0D},
      {"F",0x46},{"E",0x45},{"Q",0x51},{"SHIFT",0x10}
    };
    readonly Dictionary<string,DateTime> down=new Dictionary<string,DateTime>();
    readonly System.Windows.Forms.Timer heartbeat=new System.Windows.Forms.Timer();
    readonly Label status;
    readonly string localPc;
    readonly UdpClient udp;
    string deviceIp=null;
    int lastSeq=-1;
    int total=0;
    bool live=true;
    public AetherAndroidGamepadV11(string token,string pcIp){
      if(!Regex.IsMatch(token??"",@"^[A-Fa-f0-9]{10}$"))throw new ArgumentException("Código de emparejamiento no válido");
      code=token.ToUpperInvariant();localPc=pcIp;
      Text="AETHER · MANDO ANDROID PARA PC V11";
      ClientSize=new Size(745,510);
      MinimumSize=new Size(745,510);
      BackColor=Color.FromArgb(8,17,29);ForeColor=Color.White;
      Font=new Font("Segoe UI",10);StartPosition=FormStartPosition.CenterParent;
      Label title=new Label{Text="MANDO ANDROID POR WI-FI",Location=new Point(20,16),Size=new Size(695,43),
        Font=new Font("Segoe UI",20,FontStyle.Bold),ForeColor=Color.FromArgb(33,227,201)};
      Controls.Add(title);
      Info("Solo en tu Wi-Fi local. Android debe estar conectado al mismo router.",70,47);
      Info("Dirección PC: "+pcIp+"   Código: "+token,122,39);
      Info("PUERTO 45727 · Solo se aceptan botones previamente definidos (WASD, A/B/X/Y, L/R, Start).",172,60);
      status=new Label{Text="Escuchando mando... (aún no emparejado)",Location=new Point(25,258),Size=new Size(680,55),
        ForeColor=Color.FromArgb(36,222,194),Font=new Font("Segoe UI",12,FontStyle.Bold)};
      Controls.Add(status);
      Info("1. Abre SIM TURBO en Android. Pulsa CONECTAR Y MEDIR e introduce la IP y el código.",324,40);
      Info("2. Activa MANDO PARA PC. Minimiza esta ventana y selecciona tu juego.",361,40);
      Info("3. Para parar, vuelve a la ventana y ciérrala. Al cerrarla se sueltan todas las teclas.",400,46);
      var stop=new Button {Text="DETENER Y LIBERAR TECLAS",Location=new Point(25,455),Size=new Size(690,38),
        BackColor=Color.FromArgb(188,73,86),ForeColor=Color.White,FlatStyle=FlatStyle.Flat};
      stop.Click+=(s,e)=>Close();Controls.Add(stop);
      udp=new UdpClient(new IPEndPoint(IPAddress.Any,Port));udp.Client.Blocking=false;
      heartbeat.Interval=40;
      heartbeat.Tick+=(s,e)=>Poll();
      heartbeat.Start();
    }
    void Info(string txt,int y,int height){
      Controls.Add(new Label {Text=txt,Location=new Point(25,y),Size=new Size(695,height),
        ForeColor=Color.LightGray});
    }
    static bool Local(IPAddress address){
      byte[] a=address.GetAddressBytes();
      return address.AddressFamily==AddressFamily.InterNetwork&&(
          a[0]==10 || a[0]==192&&a[1]==168 ||
          a[0]==172&&a[1]>=16&&a[1]<=31);
    }
    void Poll(){
      if(!live)return;
      int cap=0;
      try{
        while(udp.Available>0&&cap++<100){
          IPEndPoint endpoint=new IPEndPoint(IPAddress.Any,0);
          byte[] packet=udp.Receive(ref endpoint);
          if(!Local(endpoint.Address)||packet.Length>120)continue;
          string msg=Encoding.ASCII.GetString(packet);
          string[] p=msg.Split('|');
          if(p.Length!=5||p[0]!="STPC-CTRL"||p[1]!=code)continue;
          int sequence;
          if(!int.TryParse(p[4],out sequence)||sequence<0)continue;
          if(deviceIp!=null&&!string.Equals(deviceIp,endpoint.Address.ToString(),StringComparison.Ordinal))continue;
          if(sequence<=lastSeq)continue;
          if(!keyMap.ContainsKey(p[3]))continue;
          if(p[2]!="DOWN"&&p[2]!="UP")continue;
          if(deviceIp==null)deviceIp=endpoint.Address.ToString();
          lastSeq=sequence;
          total++;
          if(p[2]=="DOWN")Press(p[3]);
          else Release(p[3]);
          if(total%9==1)status.Text="Mando conectado · "+deviceIp+
              "\r\nBotón: "+p[3]+" · mensajes "+total+" · pulsa ESC del juego para salir";
        }
      }catch(SocketException){}catch(ObjectDisposedException){}
      foreach(string k in new List<string>(down.Keys)) {
        if((DateTime.UtcNow-down[k]).TotalMilliseconds>620) Release(k);
      }
    }
    void Press(string k){
      if(!down.ContainsKey(k)){
        keybd_event(keyMap[k],0,0,UIntPtr.Zero);
      }
      down[k]=DateTime.UtcNow;
    }
    void Release(string k){
      if(down.Remove(k)){
        keybd_event(keyMap[k],0,UpFlag,UIntPtr.Zero);
      }
    }
    protected override void OnFormClosing(FormClosingEventArgs e){
      live=false;heartbeat.Stop();
      foreach(var key in new List<string>(down.Keys))Release(key);
      try{udp.Close();}catch{}
      heartbeat.Dispose();
      base.OnFormClosing(e);
    }
  }
}