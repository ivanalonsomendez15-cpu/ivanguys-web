# AETHER V29: neural ECO preview + exploratory 2.4GHz channel comparison.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V29: falta PC_Windows")
def patch(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    n=s.count(old)
    if n!=1:raise SystemExit("V29 "+label+" anchor count="+str(n))
    path.write_text(s.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
patch(clinic,'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V28");',
    'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V29");',"live tab")
patch(clinic,'var wifi24=Tab(tabs,"WI-FI V28");',
    'var wifi24=Tab(tabs,"WI-FI V29");',"wifi tab")
patch(clinic,'new AetherLiveAIWindowV28().ShowDialog(this)',
    'new AetherLiveAIWindowV29().ShowDialog(this)',"live window")
patch(clinic,'new AetherWifiQualityV28().ShowDialog(this)',
    'new AetherWifiQualityV29().ShowDialog(this)',"wifi window")
patch(clinic,'AETHER SYSTEM CLINIC  V28','AETHER SYSTEM CLINIC  V29',"heading")
patch(clinic,'SIM TURBO PC ULTRA V28 · AETHER SYSTEM CLINIC',
    'SIM TURBO PC ULTRA V29 · AETHER SYSTEM CLINIC',"window")
patch(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V28","AETHER CLINIC V29","launcher")
shutil.copy2(BASE/"V29_LiveAiWifi.cs",pc/"V29_LiveAiWifi.cs")
shutil.copy2(BASE/"V29_WifiSurvey.cs",pc/"V29_WifiSurvey.cs")
print("V29: ECO FSRCNN preview cache and read-only 2.4GHz channel comparison integrated.")
