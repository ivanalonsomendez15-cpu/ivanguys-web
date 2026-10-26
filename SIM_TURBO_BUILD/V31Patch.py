# AETHER V31: whole-desktop native 1080p clarity overlay option. Not 4K/AI.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V31: PC_Windows missing")
def patch(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    count=s.count(old)
    if count!=1:raise SystemExit("V31 anchor "+label+" count="+str(count))
    path.write_text(s.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
patch(clinic,'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V30");',
    'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V31");',"live tab")
patch(clinic,'var wifi24=Tab(tabs,"WI-FI V30");',
    'var wifi24=Tab(tabs,"WI-FI V31");',"wifi tab")
patch(clinic,'new AetherLiveAIWindowV30().ShowDialog(this)',
    'new AetherLiveAIWindowV31().ShowDialog(this)',"live window")
patch(clinic,'new AetherWifiQualityV30().ShowDialog(this)',
    'new AetherWifiQualityV31().ShowDialog(this)',"wifi window")
patch(clinic,'AETHER SYSTEM CLINIC  V30','AETHER SYSTEM CLINIC  V31',"heading")
patch(clinic,'SIM TURBO PC ULTRA V30 · AETHER SYSTEM CLINIC',
    'SIM TURBO PC ULTRA V31 · AETHER SYSTEM CLINIC',"window")
patch(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V30","AETHER CLINIC V31","launcher")
shutil.copy2(BASE/"V31_LiveAiWifi.cs",pc/"V31_LiveAiWifi.cs")
print("V31: clarity overlay (non-AI) with optional minimization and 16 Wi-Fi ping samples.")
