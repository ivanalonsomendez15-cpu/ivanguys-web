# AETHER V26: neural center-crop modes, Wi-Fi signal/channel read-only diagnostics.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V26: falta PC_Windows")
def patch(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    n=s.count(old)
    if n!=1:raise SystemExit("V26 "+label+" anchor count="+str(n))
    path.write_text(s.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
patch(clinic,'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V25");',
    'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V26");',"live tab")
patch(clinic,'var wifi24=Tab(tabs,"WI-FI V25");',
    'var wifi24=Tab(tabs,"WI-FI V26");',"wifi tab")
patch(clinic,'new AetherLiveAIWindowV25().ShowDialog(this)',
    'new AetherLiveAIWindowV26().ShowDialog(this)',"live window")
patch(clinic,'new AetherWifiQualityV25().ShowDialog(this)',
    'new AetherWifiQualityV26().ShowDialog(this)',"wifi window")
patch(clinic,'AETHER SYSTEM CLINIC  V25','AETHER SYSTEM CLINIC  V26',"heading")
patch(clinic,'SIM TURBO PC ULTRA V25 · AETHER SYSTEM CLINIC',
    'SIM TURBO PC ULTRA V26 · AETHER SYSTEM CLINIC',"window")
patch(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V25","AETHER CLINIC V26","launcher")
shutil.copy2(BASE/"V26_LiveAiWifi.cs",pc/"V26_LiveAiWifi.cs")
shutil.copy2(BASE/"V26_WifiRadio.cs",pc/"V26_WifiRadio.cs")
print("V26: FSRCNN focus crop + read-only Wi-Fi radio diagnostics integrated.")
