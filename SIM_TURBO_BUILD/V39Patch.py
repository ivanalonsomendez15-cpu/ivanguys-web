# AETHER V39: fail closed when the Wi-Fi link, gateway or assigned IPv4 changes.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V39: faltan fuentes PC_Windows")
def change(path,old,new,label):
    data=path.read_text(encoding="utf-8-sig")
    if data.count(old)!=1:raise SystemExit("V39 anchor "+label+": "+str(data.count(old)))
    path.write_text(data.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
change(clinic,'WI-FI V38 · RUTA ESTABLE','WI-FI V39 · ENLACE ESTABLE',"tab")
change(clinic,'()=>new AetherWifiRouteWindowV38().ShowDialog(this));','()=>new AetherWifiRouteWindowV39().ShowDialog(this));',"clinic wifi")
change(clinic,'AETHER SYSTEM CLINIC  V38','AETHER SYSTEM CLINIC  V39',"clinic header")
change(clinic,'SIM TURBO PC ULTRA V38 · AETHER SYSTEM CLINIC','SIM TURBO PC ULTRA V39 · AETHER SYSTEM CLINIC',"clinic title")
change(pc/"SIM_TURBO_PC.cs",'AETHER CLINIC V38','AETHER CLINIC V39',"main label")
change(pc/"V31_LiveAiWifi.cs",'()=>new AetherWifiRouteWindowV38().ShowDialog(this));','()=>new AetherWifiRouteWindowV39().ShowDialog(this));',"live wifi")
shutil.copy2(BASE/"V39_WifiRouteMonitor.cs",pc/"V39_WifiRouteMonitor.cs")
print("V39: adapter, gateway and IPv4 drift checks every 4 probes and at end.")
