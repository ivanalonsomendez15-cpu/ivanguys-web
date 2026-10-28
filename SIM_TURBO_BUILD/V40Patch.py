# AETHER V40: check adapter, gateway, IPv4 and selected routes before and after EVERY probe pair.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V40: faltan fuentes PC_Windows")
def change(path,old,new,label):
    data=path.read_text(encoding="utf-8-sig")
    if data.count(old)!=1:raise SystemExit("V40 anchor "+label+": "+str(data.count(old)))
    path.write_text(data.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
change(clinic,'WI-FI V39 · ENLACE ESTABLE','WI-FI V40 · RUTA POR PAREJA',"tab")
change(clinic,'()=>new AetherWifiRouteWindowV39().ShowDialog(this));','()=>new AetherWifiRouteWindowV40().ShowDialog(this));',"clinic wifi")
change(clinic,'AETHER SYSTEM CLINIC  V39','AETHER SYSTEM CLINIC  V40',"clinic header")
change(clinic,'SIM TURBO PC ULTRA V39 · AETHER SYSTEM CLINIC','SIM TURBO PC ULTRA V40 · AETHER SYSTEM CLINIC',"clinic title")
change(pc/"SIM_TURBO_PC.cs",'AETHER CLINIC V39','AETHER CLINIC V40',"main label")
change(pc/"V31_LiveAiWifi.cs",'()=>new AetherWifiRouteWindowV39().ShowDialog(this));','()=>new AetherWifiRouteWindowV40().ShowDialog(this));',"live wifi")
shutil.copy2(BASE/"V40_WifiRouteMonitor.cs",pc/"V40_WifiRouteMonitor.cs")
print("V40: comprobacion de ruta y enlace antes y despues de cada pareja; sin cambios de red.")
