# AETHER V28: pointer-following FSRCNN preview + privacy-safe Wi-Fi channel scan.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V28: falta PC_Windows")
def patch(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    n=s.count(old)
    if n!=1:raise SystemExit("V28 "+label+" anchor count="+str(n))
    path.write_text(s.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
# Preserve the legacy DSR code for backwards compatibility, but clearly warn
# it changes Windows display resolution and is NOT the requested live neural AI.
patch(clinic,'var live=Tab(tabs,"DSR NVIDIA OPCIONAL");',
    'var live=Tab(tabs,"DSR LEGADO (CAMBIA RESOLUCION)");',"legacy DSR label")
patch(clinic,'B(live,"ABRIR MODO 4K EN DIRECTO V23",',
    'B(live,"DSR LEGADO: CAMBIA RESOLUCION WINDOWS",',"legacy DSR button")
patch(clinic,'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V27");',
    'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V28");',"live tab")
patch(clinic,'var wifi24=Tab(tabs,"WI-FI V27");',
    'var wifi24=Tab(tabs,"WI-FI V28");',"wifi tab")
patch(clinic,'new AetherLiveAIWindowV27().ShowDialog(this)',
    'new AetherLiveAIWindowV28().ShowDialog(this)',"live window")
patch(clinic,'new AetherWifiQualityV27().ShowDialog(this)',
    'new AetherWifiQualityV28().ShowDialog(this)',"wifi window")
patch(clinic,'AETHER SYSTEM CLINIC  V27','AETHER SYSTEM CLINIC  V28',"heading")
patch(clinic,'SIM TURBO PC ULTRA V27 · AETHER SYSTEM CLINIC',
    'SIM TURBO PC ULTRA V28 · AETHER SYSTEM CLINIC',"window")
patch(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V27","AETHER CLINIC V28","launcher")
shutil.copy2(BASE/"V28_LiveAiWifi.cs",pc/"V28_LiveAiWifi.cs")
shutil.copy2(BASE/"V28_WifiSurvey.cs",pc/"V28_WifiSurvey.cs")
print("V28: FSRCNN mouse-pointer focus preview and aggregated nearby Wi-Fi channel scan integrated.")
