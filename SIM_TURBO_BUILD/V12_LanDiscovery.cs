using System;
using System.Management;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading;

namespace SimTurboPC {
  /// <summary>
  /// User-enabled LAN discovery for the Android keyboard controller.
  /// This listener is alive ONLY while the receiver window is open.
  /// It never executes commands and never discloses the pairing token.
  /// </summary>
  public sealed class AetherLanDiscoveryV12 : IDisposable {
    readonly UdpClient socket;
    readonly Thread thread;
    readonly string code;
    readonly string capabilities;
    volatile bool running=true;
    public AetherLanDiscoveryV12(string pairingCode) {
      code=pairingCode.ToUpperInvariant();
      capabilities=BuildCapabilities();
      socket=new UdpClient(new IPEndPoint(IPAddress.Any,45728));
      socket.Client.ReceiveTimeout=400;
      thread=new Thread(Loop) {IsBackground=true,Name="AETHER LAN discovery"};
      thread.Start();
    }
    static bool IsPrivate(IPAddress ip) {
      if(ip.AddressFamily!=AddressFamily.InterNetwork)return false;
      var b=ip.GetAddressBytes();
      return b[0]==10 || b[0]==192&&b[1]==168 ||
             b[0]==172&&b[1]>=16&&b[1]<=31;
    }
    static string Clean(string text) {
      string s=Regex.Replace(text??"","[^a-zA-Z0-9 ._+()-]"," ");
      return s.Length>80?s.Substring(0,80):s;
    }
    static string BuildCapabilities() {
      string gpu="GPU no detectada",ram="RAM no detectada";
      try {
        using(var search=new ManagementObjectSearcher("SELECT Name FROM Win32_VideoController"))
          foreach(ManagementObject item in search.Get()) {
            gpu=Clean(Convert.ToString(item["Name"]));break;
          }
      }catch{}
      try {
        using(var search=new ManagementObjectSearcher("SELECT TotalPhysicalMemory FROM Win32_ComputerSystem"))
          foreach(ManagementObject item in search.Get()) {
            var bytes=Convert.ToDouble(item["TotalPhysicalMemory"]);
            ram=Math.Round(bytes/1073741824.0).ToString()+" GiB";break;
          }
      }catch{}
      return Environment.ProcessorCount+"|"+ram+"|"+gpu;
    }
    void Loop() {
      while(running) {
        try {
          IPEndPoint from=new IPEndPoint(IPAddress.Any,0);
          byte[] bytes=socket.Receive(ref from);
          if(bytes.Length>130||!IsPrivate(from.Address))continue;
          string msg=Encoding.ASCII.GetString(bytes);
          string[] p=msg.Split('|');
          string reply=null;
          if(p.Length==2 && p[0]=="STPC-DISCOVER" &&
             Regex.IsMatch(p[1],@"^[A-F0-9]{16}$")) {
            reply="STPC-HERE|"+p[1]+"|V12";
          } else if(p.Length==3 && p[0]=="STPC-CAPS" && p[1]==code &&
                    Regex.IsMatch(p[2],@"^[A-F0-9]{16}$")) {
            reply="STPC-CAPS-OK|"+p[2]+"|"+capabilities;
          }
          if(reply!=null) {
            byte[] result=Encoding.ASCII.GetBytes(reply);
            socket.Send(result,result.Length,from);
          }
        }catch(SocketException){}catch(ObjectDisposedException){break;}
        catch(Exception){} // No remote packet may crash the receiver.
      }
    }
    public void Dispose() {
      running=false;
      try{socket.Close();}catch{}
      if(Thread.CurrentThread!=thread)thread.Join(700);
    }
  }
}
