# AETHER V44: independent ICMP suppression for silent gateway/WAN; read-only.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V44: faltan fuentes PC_Windows")
def change(path,old,new,label):
    data=path.read_text(encoding="utf-8-sig")
    if data.count(old)!=1:raise SystemExit("V44 anchor "+label+": "+str(data.count(old)))
    path.write_text(data.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
change(clinic,'WI-FI V43 · ICMP POR DESTINO','WI-FI V44 · ICMP POR DESTINO',"tab")
change(clinic,'()=>new AetherWifiRouteWindowV43().ShowDialog(this));','()=>new AetherWifiRouteWindowV44().ShowDialog(this));',"clinic wifi")
change(clinic,'AETHER SYSTEM CLINIC  V43','AETHER SYSTEM CLINIC  V44',"clinic header")
change(clinic,'SIM TURBO PC ULTRA V43 · AETHER SYSTEM CLINIC','SIM TURBO PC ULTRA V44 · AETHER SYSTEM CLINIC',"clinic title")
change(pc/"SIM_TURBO_PC.cs",'AETHER CLINIC V43','AETHER CLINIC V44',"main label")
change(pc/"V31_LiveAiWifi.cs",'()=>new AetherWifiRouteWindowV43().ShowDialog(this));','()=>new AetherWifiRouteWindowV44().ShowDialog(this));',"live wifi")
shutil.copy2(BASE/"V44_WifiRouteMonitor.cs",pc/"V44_WifiRouteMonitor.cs")
print("V44: ICMP silencioso suprimido por destino tras ocho intentos; no modifica configuracion.")
