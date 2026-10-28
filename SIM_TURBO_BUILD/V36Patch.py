# AETHER V36: route attribution warnings for Wi-Fi vs Ethernet/VPN, read-only.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V36: faltan fuentes PC_Windows")
def change(path,old,new,label):
    data=path.read_text(encoding="utf-8-sig")
    if data.count(old)!=1:raise SystemExit("V36 anchor "+label+": "+str(data.count(old)))
    path.write_text(data.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
change(clinic,'WI-FI V35 · MUESTREO ALTERNADO','WI-FI V36 · RUTA VERIFICADA',"tab")
change(clinic,'()=>new AetherWifiInterleaveWindowV35().ShowDialog(this));','()=>new AetherWifiRouteWindowV36().ShowDialog(this));',"clinic wifi")
change(clinic,'AETHER SYSTEM CLINIC  V35','AETHER SYSTEM CLINIC  V36',"clinic header")
change(clinic,'SIM TURBO PC ULTRA V35 · AETHER SYSTEM CLINIC','SIM TURBO PC ULTRA V36 · AETHER SYSTEM CLINIC',"clinic title")
change(pc/"SIM_TURBO_PC.cs",'AETHER CLINIC V35','AETHER CLINIC V36',"main label")
change(pc/"V31_LiveAiWifi.cs",'()=>new AetherWifiInterleaveWindowV35().ShowDialog(this));','()=>new AetherWifiRouteWindowV36().ShowDialog(this));',"live wifi")
shutil.copy2(BASE/"V36_WifiRoute.cs",pc/"V36_WifiRoute.cs")
print("V36: route-source attribution; Wi-Fi vs Ethernet/VPN caveat; no changes to network settings.")
