# SIM TURBO V5 - maintain V4 networking while adding a separate safe game center
from pathlib import Path
import shutil

base=Path(__file__).resolve().parent
pc=Path("PC_Windows/SIM_TURBO_PC.cs")
txt=pc.read_text(encoding="utf-8-sig")
anchor='            Controls.Add(Text("RED / SALUD", 39, 132, 240, 24, 10, muted, FontStyle.Bold));'
assert anchor in txt, "V5 title anchor missing"
addition='''            Button v5Center=MakeButton("FPS · DRIVERS · RED V5", 759, 78, 232, cyan, Color.FromArgb(13,55,65));
            v5Center.Click += (s,e) => new PerformanceCenter().ShowDialog(this);
'''
txt=txt.replace(anchor,addition+anchor)
txt=txt.replace('ULTRA   V4.0','ULTRA   V5.0')
txt=txt.replace('base.Text = "SIM TURBO PC ULTRA  |  Centro de red";',
                'base.Text = "SIM TURBO PC ULTRA V5  |  Centro de red + FPS";')
txt=txt.replace('lblHybrid.Text = "V4:','lblHybrid.Text = "V5:') # harmless if present
pc.write_text(txt,encoding="utf-8-sig")
shutil.copyfile(base/"V5_PerformanceCenter.cs","PC_Windows/V5_PerformanceCenter.cs")
print("V5 Windows installed; V4 bonding retained")
