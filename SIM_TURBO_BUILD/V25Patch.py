# AETHER V25: pipeline timing, backpressure, safe screenshot preview and measurable Wi-Fi.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V25: falta PC_Windows")
def patch(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    n=s.count(old)
    if n!=1:raise SystemExit("V25 "+label+" anchor count="+str(n))
    path.write_text(s.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
patch(clinic,'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V24");',
    'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V25");',"live tab")
patch(clinic,'var wifi24=Tab(tabs,"WI-FI V24");',
    'var wifi24=Tab(tabs,"WI-FI V25");',"wifi tab")
patch(clinic,'new AetherLiveAIWindowV24().ShowDialog(this)',
    'new AetherLiveAIWindowV25().ShowDialog(this)',"live window")
patch(clinic,'new AetherWifiQualityV24().ShowDialog(this)',
    'new AetherWifiQualityV25().ShowDialog(this)',"wifi window")
patch(clinic,'AETHER SYSTEM CLINIC  V24','AETHER SYSTEM CLINIC  V25',"heading")
patch(clinic,'SIM TURBO PC ULTRA V24 · AETHER SYSTEM CLINIC',
    'SIM TURBO PC ULTRA V25 · AETHER SYSTEM CLINIC',"window")
patch(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V24","AETHER CLINIC V25","launcher")
shutil.copy2(BASE/"V25_LiveAiWifi.cs",pc/"V25_LiveAiWifi.cs")
print("V25: IA FPS/latencia y diagnostico Wi-Fi p95/DNS/guardar informe integrados.")
