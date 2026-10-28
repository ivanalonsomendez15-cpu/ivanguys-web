# AETHER V35: alternating LAN/WAN Wi-Fi sampling; no screen capture or risky changes.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir(): raise SystemExit("V35: faltan fuentes PC_Windows")
def change(path,old,new,name):
    s=path.read_text(encoding="utf-8-sig")
    n=s.count(old)
    if n!=1:raise SystemExit("V35 anchor "+name+": "+str(n))
    path.write_text(s.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
change(clinic,'var wifi34=Tab(tabs,"WI-FI V34 MEJORADO");',
       'var wifi34=Tab(tabs,"WI-FI V35 · MUESTREO ALTERNADO");',"tab")
change(clinic,'()=>new AetherWifiBaselineWindowV34().ShowDialog(this));',
       '()=>new AetherWifiInterleaveWindowV35().ShowDialog(this));',"clinic wifi")
change(clinic,'AETHER SYSTEM CLINIC  V34','AETHER SYSTEM CLINIC  V35',"clinic header")
change(clinic,'SIM TURBO PC ULTRA V34 · AETHER SYSTEM CLINIC',
       'SIM TURBO PC ULTRA V35 · AETHER SYSTEM CLINIC',"clinic title")
change(pc/"SIM_TURBO_PC.cs",'AETHER CLINIC V34','AETHER CLINIC V35',"main label")
live=pc/"V31_LiveAiWifi.cs"
change(live,'()=>new AetherWifiBaselineWindowV34().ShowDialog(this));',
       '()=>new AetherWifiInterleaveWindowV35().ShowDialog(this));',"live wifi")
shutil.copy2(BASE/"V35_InterleavedWifi.cs",pc/"V35_InterleavedWifi.cs")
print("V35: 16 interleaved gateway/WAN pairs, ICMP-filtering guard, read-only.")
