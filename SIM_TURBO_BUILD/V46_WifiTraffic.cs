using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net.NetworkInformation;
using System.Text;
using System.Threading;
using System.Windows.Forms;
namespace SimTurboPC {
  /// <summary>
  /// V46 actual Wi-Fi interface usage: measured delta of Windows NIC byte
  /// counters, never an assertion about internet bandwidth or guaranteed Mbps.
  /// Read-only, no traffic generation, no SSID/MAC collection.
  /// </summary>
  public static class AetherWifiTrafficV46 {
    public static double? RateMbps(long start,long end,long elapsedMs) {
      if(start<0 || end<start || elapsedMs<100)return null;
      return 8.0*(end-start)/elapsedMs/1000.0;
    }
    public static long? CounterDelta(long start,long end){
      return (start<0||end<start)?(long?)null:end-start;
    }
    public static string Interpret(double? rx,double? tx,long? errors,long? discarded) {
      if(!rx.HasValue||!tx.HasValue)return "Contadores no disponibles o reiniciados: repetir, sin estimar velocidad.";
      string t="Tráfico observado por adaptador Wi-Fi RX "+rx.Value.ToString("0.00")+
        " Mb/s, TX "+tx.Value.ToString("0.00")+" Mb/s. "+
        "Mide USO del enlace, no máxima velocidad contratada ni ping del juego.";
      if(errors.HasValue&&errors.Value>0)t+=" Errores detectados (delta): "+errors.Value+".";
      if(discarded.HasValue&&discarded.Value>0)t+=" Descartes detectados (delta): "+discarded.Value+
        "; no demuestra por sí solo congestión inalámbrica.";
      if(!errors.HasValue||!discarded.HasValue)t+=" Algunos contadores reiniciados.";
      return t;
    }
    public static string Capture() {
      var nics=NetworkInterface.GetAllNetworkInterfaces().Where(n=>
        n.NetworkInterfaceType==NetworkInterfaceType.Wireless80211 &&
        n.OperationalStatus==OperationalStatus.Up).ToList();
      if(nics.Count==0)return "No se detecta Wi-Fi activo. El informe no confunde Ethernet o VPN con Wi-Fi.";
      var snapshots=new List<Reading>();
      foreach(var nic in nics){
        try{snapshots.Add(new Reading{Id=nic.Id,Name=nic.Name,Speed=nic.Speed,
          First=nic.GetIPv4Statistics()});}catch{}
      }
      if(snapshots.Count==0)return "Windows no expone contadores Wi-Fi disponibles.";
      var start=System.Diagnostics.Stopwatch.StartNew();
      Thread.Sleep(1200);
      var elapsed=start.ElapsedMilliseconds;
      var after=NetworkInterface.GetAllNetworkInterfaces();
      var sb=new StringBuilder();
      sb.AppendLine("WI-FI V46: USO REAL DEL ADAPTADOR · informe local, solo lectura");
      foreach(var first in snapshots){
        var nic=after.FirstOrDefault(n=>n.Id==first.Id &&
          n.NetworkInterfaceType==NetworkInterfaceType.Wireless80211 &&
          n.OperationalStatus==OperationalStatus.Up);
        if(nic==null){sb.AppendLine("Adaptador "+first.Name+" desconectado o cambiado durante lectura.");continue;}
        try{
          var b=nic.GetIPv4Statistics();
          var rx=RateMbps(first.First.BytesReceived,b.BytesReceived,elapsed);
          var tx=RateMbps(first.First.BytesSent,b.BytesSent,elapsed);
          var errors=CounterDelta(first.First.IncomingPacketsWithErrors+
            first.First.OutgoingPacketsWithErrors,b.IncomingPacketsWithErrors+b.OutgoingPacketsWithErrors);
          var drop=CounterDelta(first.First.IncomingPacketsDiscarded+
            first.First.OutgoingPacketsDiscarded,b.IncomingPacketsDiscarded+b.OutgoingPacketsDiscarded);
          sb.AppendLine("Adaptador: "+first.Name+" ("+elapsed+" ms observados)");
          sb.AppendLine(Interpret(rx,tx,errors,drop));
          sb.AppendLine("Velocidad nominal de interfaz reportada: "+(first.Speed>0?
            (first.Speed/1e6).ToString("0")+" Mb/s":"no disponible")+". No equivale a Internet.");
        }catch(Exception){sb.AppendLine("No se pudo leer la variación de contadores de "+first.Name+".");}
      }
      sb.AppendLine("No modifica canal, router, drivers, firewall ni DNS. "+
        "Un contador de errores puede representar limitaciones del driver, no interferencias demostradas.");
      return sb.ToString();
    }
    private sealed class Reading{
      public string Id,Name;
      public long Speed;
      public IPv4InterfaceStatistics First;
    }
  }
  public sealed class AetherWifiTrafficWindowV46:Form {
    readonly TextBox log=new TextBox();
    readonly Button button=new Button();
    public AetherWifiTrafficWindowV46(){
      Text="AETHER V46 · NUEVO TRÁFICO REAL DE WI-FI";
      ClientSize=new Size(870,570);MinimumSize=new Size(820,520);
      StartPosition=FormStartPosition.CenterParent;
      Font=new Font("Segoe UI",10);
      BackColor=Color.FromArgb(9,26,42);ForeColor=Color.White;
      Controls.Add(new Label{Text="WI-FI V46 · USO REAL DEL ADAPTADOR",
        Location=new Point(23,17),Size=new Size(818,49),ForeColor=Color.Aquamarine,
        Font=new Font("Segoe UI",18,FontStyle.Bold)});
      Controls.Add(new Label{Text="Nueva función: mide durante 1,2 s bytes RX/TX y contadores de errores/descartes.\r\n"+
        "NO hace descargas ni subidas, y NO aumenta los Mbps automáticamente.",
        Location=new Point(22,82),Size=new Size(814,65)});
      button.Text="MEDIR USO WI-FI AHORA";button.Location=new Point(23,163);
      button.Size=new Size(812,53);button.BackColor=Color.FromArgb(22,108,117);
      button.ForeColor=Color.White;button.Click+=(s,e)=>Run();
      Controls.Add(button);
      log.Location=new Point(23,237);log.Size=new Size(812,283);log.Multiline=true;
      log.ReadOnly=true;log.ScrollBars=ScrollBars.Vertical;log.WordWrap=true;
      log.BackColor=Color.FromArgb(17,43,61);log.ForeColor=Color.Gainsboro;
      log.Font=new Font("Consolas",10);Controls.Add(log);
      log.Text="Pulsa MEDIR para obtener estadísticas reales de tu adaptador Wi-Fi. "+
        "Para estimar el rendimiento máximo o jitter del juego hacen falta pruebas distintas.";
    }
    void Run(){
      button.Enabled=false;log.Text="Midiendo actividad Wi-Fi real (sin enviar tráfico)...";
      ThreadPool.QueueUserWorkItem(_=>{
        string result;
        try{result=AetherWifiTrafficV46.Capture();}
        catch(Exception ex){result="Contadores de red no disponibles: "+ex.GetType().Name;}
        if(IsDisposed||!IsHandleCreated)return;
        try{BeginInvoke((Action)(()=>{log.Text=result;button.Enabled=true;}));}catch{}
      });
    }
  }
}
