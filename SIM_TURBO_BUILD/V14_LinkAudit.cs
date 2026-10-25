using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.NetworkInformation;
using System.Net.Sockets;
using System.Text;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>
  /// Read-only, user-initiated audit of physical link rates, local addresses and
  /// Wi-Fi information. No registry changes, admin rights or "speed boost" claims.
  /// </summary>
  public sealed class AetherLinkAuditV14 : Form {
    readonly RichTextBox report;
    readonly Label status;
    public AetherLinkAuditV14() {
      Text="AETHER V14 · AUDITORÍA DE ENLACES";
      ClientSize=new Size(1010,730);
      MinimumSize=new Size(760,570);
      StartPosition=FormStartPosition.CenterParent;
      BackColor=Color.FromArgb(8,19,34);
      ForeColor=Color.White;
      Font=new Font("Segoe UI",10);
      var heading=new Label{Text="AETHER · ¿POR QUÉ MI RED VA A 60 Mb/s?",
        Location=new Point(20,13),Size=new Size(945,40),
        ForeColor=Color.FromArgb(42,231,203),
        Font=new Font("Segoe UI",19,FontStyle.Bold)};
      Controls.Add(heading);
      var hint=new Label{Text="Informe local de adaptadores, enlace Wi-Fi, puerta de enlace y límites reales. Solo lectura; no cambia Windows.",
        Location=new Point(22,62),Size=new Size(950,47)};
      Controls.Add(hint);
      var refresh=NewButton("ANALIZAR ENLACES",20,116,275);
      refresh.Click+=(s,e)=>RefreshReport();
      var save=NewButton("GUARDAR TXT",311,116,230);
      save.Click+=(s,e)=>SaveReport();
      var copy=NewButton("COPIAR",556,116,175);
      copy.Click+=(s,e)=>{try{Clipboard.SetText(report.Text);status.Text="Informe copiado";}catch(Exception ex){status.Text=ex.Message;}};
      report=new RichTextBox{Location=new Point(20,184),Size=new Size(968,483),
        Anchor=AnchorStyles.Left|AnchorStyles.Right|AnchorStyles.Top|AnchorStyles.Bottom,
        ReadOnly=true,BackColor=Color.FromArgb(18,35,53),ForeColor=Color.White,
        Font=new Font("Consolas",10),WordWrap=true};
      Controls.Add(report);
      status=new Label{Text="Listo. Pulsa ANALIZAR ENLACES.",Location=new Point(20,678),
        Size=new Size(950,31),Anchor=AnchorStyles.Left|AnchorStyles.Right|AnchorStyles.Bottom,
        ForeColor=Color.FromArgb(42,231,203)};
      Controls.Add(status);
      RefreshReport();
    }
    Button NewButton(string text,int x,int y,int w) {
      var b=new Button{Text=text,Location=new Point(x,y),Size=new Size(w,48),
        BackColor=Color.FromArgb(22,100,110),ForeColor=Color.White,
        FlatStyle=FlatStyle.Flat,Font=new Font("Segoe UI",10,FontStyle.Bold)};
      b.FlatAppearance.BorderSize=0;Controls.Add(b);return b;
    }
    void RefreshReport() {
      try {
        report.Text=BuildReport();
        status.Text="Diagnóstico terminado · "+DateTime.Now.ToString("HH:mm:ss")+" · sin cambios en el sistema";
      }catch(Exception ex){report.Text="No se pudo leer el informe: "+ex.Message;status.Text="Error";}
    }
    void SaveReport() {
      using(var dlg=new SaveFileDialog{Filter="Informe TXT|*.txt",FileName="AETHER_V14_enlaces.txt"}) {
        if(dlg.ShowDialog(this)!=DialogResult.OK)return;
        try{File.WriteAllText(dlg.FileName,report.Text,Encoding.UTF8);status.Text="Guardado por el usuario";}
        catch(Exception ex){MessageBox.Show(this,ex.Message,"Error guardando TXT");}
      }
    }
    public static string BuildReport() {
      var sb=new StringBuilder();
      sb.AppendLine("AETHER V14 · INFORME DE ENLACES (SOLO LECTURA)");
      sb.AppendLine("Generado: "+DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss"));
      sb.AppendLine("ATENCIÓN: velocidad del enlace ≠ velocidad real de Internet.");
      sb.AppendLine("Un adaptador conectado a 100 Mb/s NO puede dar 120–150 Mb/s reales.");
      sb.AppendLine(new string('-',70));
      int active=0;
      foreach(var nic in NetworkInterface.GetAllNetworkInterfaces().OrderBy(n=>n.Name)) {
        if(nic.OperationalStatus!=OperationalStatus.Up)continue;
        if(nic.NetworkInterfaceType!=NetworkInterfaceType.Ethernet &&
           nic.NetworkInterfaceType!=NetworkInterfaceType.GigabitEthernet &&
           nic.NetworkInterfaceType!=NetworkInterfaceType.Wireless80211)continue;
        active++;
        sb.AppendLine();
        sb.AppendLine("ADAPTADOR: "+nic.Name);
        sb.AppendLine("Tipo: "+nic.NetworkInterfaceType);
        long speed=0;
        try{speed=nic.Speed;}catch{}
        if(speed>0) {
          double mbps=speed/1000000.0;
          sb.AppendLine("Velocidad de enlace: "+mbps.ToString("0.0")+" Mb/s (no es un speedtest)");
          if(mbps<=100.5)sb.AppendLine("ALERTA: enlace de ~100 Mb/s o menos; comprueba cable/puerto, negociación o cobertura.");
          else if(mbps<200)sb.AppendLine("NOTA: alcanzar 150 Mb/s útiles puede ser difícil por sobrecarga y señal.");
          else sb.AppendLine("El enlace nominal supera 150 Mb/s, pero el rendimiento real depende de más factores.");
        }else sb.AppendLine("Velocidad de enlace: no disponible");
        try {
          var props=nic.GetIPProperties();
          foreach(var ip in props.UnicastAddresses.Where(a=>a.Address.AddressFamily==AddressFamily.InterNetwork))
            sb.AppendLine("IPv4 local: "+ip.Address);
          foreach(var gateway in props.GatewayAddresses.Where(g=>g.Address.AddressFamily==AddressFamily.InterNetwork))
            sb.AppendLine("Router/gateway: "+gateway.Address);
          var dns=props.DnsAddresses.Where(a=>a.AddressFamily==AddressFamily.InterNetwork).Take(3).Select(a=>a.ToString()).ToArray();
          if(dns.Length>0)sb.AppendLine("DNS (solo consulta): "+string.Join(", ",dns));
        }catch(Exception ex){sb.AppendLine("No se pudieron leer los detalles IP: "+ex.Message);}
      }
      if(active==0)sb.AppendLine("No se encontraron interfaces Ethernet/Wi-Fi activas.");
      sb.AppendLine();
      sb.AppendLine(new string('-',70));
      sb.AppendLine("DETALLES WI-FI DE WINDOWS (netsh, solo lectura):");
      sb.AppendLine(RunNetsh());
      sb.AppendLine();
      sb.AppendLine("PRUEBA RECOMENDADA PARA 60 → 120–150 Mb/s:");
      sb.AppendLine("1) Compara una medición por Ethernet y otra por Wi-Fi en el mismo momento.");
      sb.AppendLine("2) Verifica tu tarifa de Internet y si el router y el puerto admiten >150 Mb/s.");
      sb.AppendLine("3) Si Wi-Fi usa 2,4 GHz y tu router ofrece 5 GHz, compara ambas bandas cerca del router.");
      sb.AppendLine("4) Revisa saturación, interferencias, distancia y controladores oficiales.");
      sb.AppendLine("5) Usa el laboratorio de red V13 para medir Mb/s reales; esta auditoría NO los mide.");
      sb.AppendLine("No se cambió DNS, registro, cortafuegos, drivers ni configuración del router.");
      return sb.ToString();
    }
    static string RunNetsh() {
      try {
        using(var p=new Process()) {
          p.StartInfo=new ProcessStartInfo("netsh","wlan show interfaces"){
            UseShellExecute=false,CreateNoWindow=true,RedirectStandardOutput=true,
            RedirectStandardError=false};
          if(!p.Start())return "No se pudo iniciar netsh.";
          // netsh typically returns immediately. Output is bounded and the timeout
          // prevents a stuck system command from blocking the application forever.
          string output=p.StandardOutput.ReadToEnd();
          if(!p.WaitForExit(5000)){try{p.Kill();}catch{}return "netsh tardó demasiado.";}
          return output.Length>8000?output.Substring(0,8000)+"\r\n[TRUNCADO]":output;
        }
      }catch(Exception ex){return "Información Wi-Fi no disponible: "+ex.Message;}
    }
  }
}
