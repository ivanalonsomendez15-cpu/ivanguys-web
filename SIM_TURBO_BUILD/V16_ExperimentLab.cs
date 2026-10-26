using System;
using System.Collections.Generic;
using System.Drawing;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SimTurboPC {
  /// <summary>
  /// Controlled A/B experiment notebook. Values are entered by the user from
  /// the same test and game scene. No registry, DNS, drivers or network changes.
  /// </summary>
  public sealed class AetherExperimentLabV16 : Form {
    readonly TextBox[] before=new TextBox[3], after=new TextBox[3];
    readonly TextBox fpsBefore, fpsAfter, notes;
    readonly ComboBox testType;
    readonly RichTextBox report;
    string csv="";
    public AetherExperimentLabV16() {
      Text="AETHER V16 · COMPARADOR A/B DE RED Y FPS";
      ClientSize=new Size(960,750);MinimumSize=new Size(850,700);
      StartPosition=FormStartPosition.CenterParent;
      BackColor=Color.FromArgb(8,20,34);ForeColor=Color.White;
      Font=new Font("Segoe UI",10);
      Controls.Add(new Label{Text="AETHER · EXPERIMENTOS REALES A/B",
        Location=new Point(20,13),Size=new Size(900,45),
        Font=new Font("Segoe UI",19,FontStyle.Bold),ForeColor=Color.Turquoise});
      Controls.Add(new Label{Text="Mide tres veces ANTES y DESPUÉS, en el mismo equipo, misma prueba y condiciones parecidas. "+
        "No cambia nada del sistema. Escribe Mb/s reales; no la velocidad nominal del enlace.",
        Location=new Point(20,61),Size=new Size(910,60)});
      Controls.Add(new Label{Text="Tipo de prueba:",Location=new Point(22,136),Size=new Size(165,27)});
      testType=new ComboBox{Location=new Point(195,133),Size=new Size(325,33),
        DropDownStyle=ComboBoxStyle.DropDownList};
      testType.Items.AddRange(new object[]{"Descarga Internet (Mb/s)","Subida Internet (Mb/s)","Latencia (ms, menor es mejor)"});
      testType.SelectedIndex=0;Controls.Add(testType);
      Controls.Add(new Label{Text="ANTES (3 muestras)",Location=new Point(22,188),Size=new Size(430,29),
        Font=new Font("Segoe UI",12,FontStyle.Bold)});
      Controls.Add(new Label{Text="DESPUÉS (3 muestras)",Location=new Point(489,188),Size=new Size(430,29),
        Font=new Font("Segoe UI",12,FontStyle.Bold)});
      for(int i=0;i<3;i++) {
        before[i]=Field(22+i*145,226,128);
        after[i]=Field(489+i*145,226,128);
      }
      Controls.Add(new Label{Text="FPS antes (opcional)",Location=new Point(22,289),Size=new Size(220,30)});
      fpsBefore=Field(247,287,173);
      Controls.Add(new Label{Text="FPS después (opcional)",Location=new Point(489,289),Size=new Size(240,30)});
      fpsAfter=Field(735,287,175);
      Controls.Add(new Label{Text="Qué cambiaste (ej. 2,4 GHz → 5 GHz):",
        Location=new Point(22,340),Size=new Size(850,27)});
      notes=new TextBox{Location=new Point(22,370),Size=new Size(888,35),
        MaxLength=180,BackColor=Color.FromArgb(22,45,62),ForeColor=Color.White};
      Controls.Add(notes);
      Button analyze=Button("COMPARAR 3 + 3 MUESTRAS",22,426,380);
      Button save=Button("GUARDAR RESULTADOS CSV",419,426,390);
      analyze.Click+=(s,e)=>Analyze();
      save.Click+=(s,e)=>Save();
      report=new RichTextBox{Location=new Point(22,498),Size=new Size(888,215),
        Anchor=AnchorStyles.Top|AnchorStyles.Bottom|AnchorStyles.Left|AnchorStyles.Right,
        ReadOnly=true,BackColor=Color.FromArgb(20,38,55),ForeColor=Color.White,
        Font=new Font("Consolas",10)};
      Controls.Add(report);
      report.Text="V16: introduce resultados obtenidos en el laboratorio de red V13, "+
        "en un test externo comparable o con el contador FPS del mismo juego.\r\n"+
        "La mediana reduce el efecto de valores extremos, pero tres pruebas no garantizan causalidad.\r\n"+
        "No prometemos 120–150 Mb/s ni 100–120 FPS sin mediciones.";
    }
    TextBox Field(int x,int y,int width) {
      var t=new TextBox{Location=new Point(x,y),Size=new Size(width,34),
        BackColor=Color.FromArgb(22,45,62),ForeColor=Color.White,MaxLength=12};
      Controls.Add(t);return t;
    }
    Button Button(string label,int x,int y,int width) {
      var b=new Button{Text=label,Location=new Point(x,y),Size=new Size(width,50),
        BackColor=Color.FromArgb(20,102,112),ForeColor=Color.White,FlatStyle=FlatStyle.Flat};
      Controls.Add(b);return b;
    }
    static double Number(string raw) {
      double n;
      if(!double.TryParse(raw.Trim().Replace(",","."),NumberStyles.Float,
        CultureInfo.InvariantCulture,out n) || Double.IsNaN(n) || Double.IsInfinity(n)
        || n<=0 || n>1000000)
        throw new FormatException("Introduce números positivos válidos, sin unidades, en las 6 casillas.");
      return n;
    }
    static double Median(double[] v) {
      double[] sorted=(double[])v.Clone();Array.Sort(sorted);return sorted[1];
    }
    static string F(double n) {return n.ToString("0.00",CultureInfo.InvariantCulture);}
    void Analyze() {
      try {
        double[] a=before.Select(t=>Number(t.Text)).ToArray();
        double[] b=after.Select(t=>Number(t.Text)).ToArray();
        double m1=Median(a),m2=Median(b);
        bool latency=testType.SelectedIndex==2;
        double delta=m2-m1, relative=delta/m1*100.0;
        double improvement=(latency?-relative:relative);
        var sb=new StringBuilder();
        sb.AppendLine("AETHER V16 · COMPARACIÓN A/B · "+DateTime.Now.ToString("yyyy-MM-dd HH:mm"));
        sb.AppendLine("Métrica: "+testType.SelectedItem);
        sb.AppendLine("Antes: "+string.Join(", ",a.Select(F))+" · mediana "+F(m1));
        sb.AppendLine("Después: "+string.Join(", ",b.Select(F))+" · mediana "+F(m2));
        sb.AppendLine("Cambio absoluto: "+F(delta)+" · cambio relativo: "+F(relative)+" %");
        sb.AppendLine("Resultado: "+(improvement>2?"MEJORA OBSERVADA":
          improvement< -2?"EMPEORAMIENTO OBSERVADO":"DIFERENCIA PEQUEÑA")+
          " (orientativo; no demuestra causalidad).");
        if(!latency) {
          sb.AppendLine("Objetivo 120 Mb/s: "+(m2>=120?"alcanzado en esta prueba":"NO alcanzado"));
          sb.AppendLine("Objetivo 150 Mb/s: "+(m2>=150?"alcanzado en esta prueba":"NO alcanzado"));
        }
        double f1=0,f2=0;bool fps=false;
        if(fpsBefore.Text.Trim().Length>0 || fpsAfter.Text.Trim().Length>0) {
          if(fpsBefore.Text.Trim().Length==0 || fpsAfter.Text.Trim().Length==0)
            throw new FormatException("Para comparar FPS, rellena ambas casillas.");
          f1=Number(fpsBefore.Text);f2=Number(fpsAfter.Text);fps=true;
          sb.AppendLine("FPS declarados (misma escena): "+F(f1)+" → "+F(f2)+
            " ("+F((f2-f1)/f1*100)+" %). No son mediciones de AETHER.");
        }
        sb.AppendLine("Cambio realizado: "+(notes.Text.Trim().Length==0?"no indicado":notes.Text.Trim()));
        sb.AppendLine("Repite en varios horarios. Compara también Ethernet y Wi-Fi 5 GHz.");
        sb.AppendLine("Una pantalla 1080p no tiene píxeles físicos 4K. DLSS/FSR dependen del juego.");
        report.Text=sb.ToString();
        string q=notes.Text.Replace("\"","\"\"").Replace("\r"," ").Replace("\n"," ");
        csv="fecha,tipo,antes_1,antes_2,antes_3,despues_1,despues_2,despues_3,mediana_antes,mediana_despues,cambio_pct,fps_antes,fps_despues,notas\r\n"+
          "\""+DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")+"\",\""+testType.SelectedItem+"\","+
          string.Join(",",a.Select(F))+","+string.Join(",",b.Select(F))+","+
          F(m1)+","+F(m2)+","+F(relative)+","+(fps?F(f1):"")+","+
          (fps?F(f2):"")+",\""+q+"\"\r\n";
      } catch(Exception ex) {
        report.Text="No se puede comparar: "+ex.Message;
        csv="";
      }
    }
    void Save() {
      if(csv.Length==0){MessageBox.Show(this,"Calcula primero la comparación.");return;}
      using(var d=new SaveFileDialog{Filter="CSV|*.csv",
        FileName="AETHER_V16_AB_"+DateTime.Now.ToString("yyyyMMdd_HHmm")+".csv"}) {
        if(d.ShowDialog(this)==DialogResult.OK) {
          try{File.WriteAllText(d.FileName,csv,new UTF8Encoding(true));}
          catch(Exception ex){MessageBox.Show(this,ex.Message,"Error al guardar");}
        }
      }
    }
  }
}
