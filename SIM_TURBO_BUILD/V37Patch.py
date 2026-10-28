# AETHER V37: avoid misleading Wi-Fi diagnoses when routes use another adapter.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V37: faltan fuentes PC_Windows")
def change(path,old,new,label):
    data=path.read_text(encoding="utf-8-sig")
    if data.count(old)!=1:raise SystemExit("V37 anchor "+label+": "+str(data.count(old)))
    path.write_text(data.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
change(clinic,'WI-FI V36 · RUTA VERIFICADA','WI-FI V37 · RUTAS PROTEGIDAS',"tab")
change(clinic,'()=>new AetherWifiRouteWindowV36().ShowDialog(this));','()=>new AetherWifiRouteWindowV37().ShowDialog(this));',"clinic wifi")
change(clinic,'AETHER SYSTEM CLINIC  V36','AETHER SYSTEM CLINIC  V37',"clinic header")
change(clinic,'SIM TURBO PC ULTRA V36 · AETHER SYSTEM CLINIC','SIM TURBO PC ULTRA V37 · AETHER SYSTEM CLINIC',"clinic title")
change(pc/"SIM_TURBO_PC.cs",'AETHER CLINIC V36','AETHER CLINIC V37',"main label")
change(pc/"V31_LiveAiWifi.cs",'()=>new AetherWifiRouteWindowV36().ShowDialog(this));','()=>new AetherWifiRouteWindowV37().ShowDialog(this));',"live wifi")
shutil.copy2(BASE/"V37_WifiRouteGuard.cs",pc/"V37_WifiRouteGuard.cs")
print("V37: read-only route-gated LAN/WAN diagnostics; skip misattributed probes.")
