# AETHER V38: reject LAN/WAN diagnosis if route changes during measurement.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V38: faltan fuentes PC_Windows")
def change(path,old,new,label):
    data=path.read_text(encoding="utf-8-sig")
    if data.count(old)!=1:raise SystemExit("V38 anchor "+label+": "+str(data.count(old)))
    path.write_text(data.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
change(clinic,'WI-FI V37 · RUTAS PROTEGIDAS','WI-FI V38 · RUTA ESTABLE',"tab")
change(clinic,'()=>new AetherWifiRouteWindowV37().ShowDialog(this));','()=>new AetherWifiRouteWindowV38().ShowDialog(this));',"clinic wifi")
change(clinic,'AETHER SYSTEM CLINIC  V37','AETHER SYSTEM CLINIC  V38',"clinic header")
change(clinic,'SIM TURBO PC ULTRA V37 · AETHER SYSTEM CLINIC','SIM TURBO PC ULTRA V38 · AETHER SYSTEM CLINIC',"clinic title")
change(pc/"SIM_TURBO_PC.cs",'AETHER CLINIC V37','AETHER CLINIC V38',"main label")
change(pc/"V31_LiveAiWifi.cs",'()=>new AetherWifiRouteWindowV37().ShowDialog(this));','()=>new AetherWifiRouteWindowV38().ShowDialog(this));',"live wifi")
shutil.copy2(BASE/"V38_WifiRouteMonitor.cs",pc/"V38_WifiRouteMonitor.cs")
print("V38: route-stability checkpoints every 4 probes and at end; abort on drift.")
