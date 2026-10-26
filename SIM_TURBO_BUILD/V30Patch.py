# AETHER V30: neural ECO preview + exploratory 2.4GHz channel comparison.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V30: falta PC_Windows")
def patch(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    n=s.count(old)
    if n!=1:raise SystemExit("V30 "+label+" anchor count="+str(n))
    path.write_text(s.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
patch(clinic,'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V29");',
    'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V30");',"live tab")
patch(clinic,'var wifi24=Tab(tabs,"WI-FI V29");',
    'var wifi24=Tab(tabs,"WI-FI V30");',"wifi tab")
patch(clinic,'new AetherLiveAIWindowV29().ShowDialog(this)',
    'new AetherLiveAIWindowV30().ShowDialog(this)',"live window")
patch(clinic,'new AetherWifiQualityV29().ShowDialog(this)',
    'new AetherWifiQualityV30().ShowDialog(this)',"wifi window")
patch(clinic,'AETHER SYSTEM CLINIC  V29','AETHER SYSTEM CLINIC  V30',"heading")
patch(clinic,'SIM TURBO PC ULTRA V29 · AETHER SYSTEM CLINIC',
    'SIM TURBO PC ULTRA V30 · AETHER SYSTEM CLINIC',"window")
patch(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V29","AETHER CLINIC V30","launcher")
shutil.copy2(BASE/"V30_LiveAiWifi.cs",pc/"V30_LiveAiWifi.cs")
shutil.copy2(BASE/"V30_WifiBursts.cs",pc/"V30_WifiBursts.cs")

print("V30: FOCO MOVIMIENTO FSRCNN preview, p95 UI timings and Wi-Fi ICMP loss bursts integrated.")
