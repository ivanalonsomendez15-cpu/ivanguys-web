# AETHER V45: representative paired-evidence classification for silent gateway/WAN; read-only.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V45: faltan fuentes PC_Windows")
def change(path,old,new,label):
    data=path.read_text(encoding="utf-8-sig")
    if data.count(old)!=1:raise SystemExit("V45 anchor "+label+": "+str(data.count(old)))
    path.write_text(data.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
change(clinic,'WI-FI V44 · ICMP POR DESTINO','WI-FI V45 · PARES REPRESENTATIVOS',"tab")
change(clinic,'()=>new AetherWifiRouteWindowV44().ShowDialog(this));','()=>new AetherWifiRouteWindowV45().ShowDialog(this));',"clinic wifi")
change(clinic,'AETHER SYSTEM CLINIC  V44','AETHER SYSTEM CLINIC  V45',"clinic header")
change(clinic,'SIM TURBO PC ULTRA V44 · AETHER SYSTEM CLINIC','SIM TURBO PC ULTRA V45 · AETHER SYSTEM CLINIC',"clinic title")
change(pc/"SIM_TURBO_PC.cs",'AETHER CLINIC V44','AETHER CLINIC V45',"main label")
change(pc/"V31_LiveAiWifi.cs",'()=>new AetherWifiRouteWindowV44().ShowDialog(this));','()=>new AetherWifiRouteWindowV45().ShowDialog(this));',"live wifi")
shutil.copy2(BASE/"V45_WifiRouteMonitor.cs",pc/"V45_WifiRouteMonitor.cs")
print("V45: requiere cobertura de pares ICMP representativa (12/16, >=5 por mitad); sin cambios de red.")
