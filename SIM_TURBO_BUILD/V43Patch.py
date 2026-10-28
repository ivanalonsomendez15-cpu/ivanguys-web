# AETHER V43: independent ICMP suppression for silent gateway/WAN; read-only.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V43: faltan fuentes PC_Windows")
def change(path,old,new,label):
    data=path.read_text(encoding="utf-8-sig")
    if data.count(old)!=1:raise SystemExit("V43 anchor "+label+": "+str(data.count(old)))
    path.write_text(data.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
change(clinic,'WI-FI V41 · RUTA POR PAREJA','WI-FI V43 · ICMP POR DESTINO',"tab")
change(clinic,'()=>new AetherWifiRouteWindowV41().ShowDialog(this));','()=>new AetherWifiRouteWindowV43().ShowDialog(this));',"clinic wifi")
change(clinic,'AETHER SYSTEM CLINIC  V41','AETHER SYSTEM CLINIC  V43',"clinic header")
change(clinic,'SIM TURBO PC ULTRA V41 · AETHER SYSTEM CLINIC','SIM TURBO PC ULTRA V43 · AETHER SYSTEM CLINIC',"clinic title")
change(pc/"SIM_TURBO_PC.cs",'AETHER CLINIC V41','AETHER CLINIC V43',"main label")
change(pc/"V31_LiveAiWifi.cs",'()=>new AetherWifiRouteWindowV41().ShowDialog(this));','()=>new AetherWifiRouteWindowV43().ShowDialog(this));',"live wifi")
shutil.copy2(BASE/"V43_WifiRouteMonitor.cs",pc/"V43_WifiRouteMonitor.cs")
print("V43: ICMP silencioso suprimido por destino tras ocho intentos; no modifica configuracion.")
