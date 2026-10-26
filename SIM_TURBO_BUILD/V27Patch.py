# AETHER V27: adaptive low-load neural focus + read-only Wi-Fi link PHY diagnostics.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V27: falta PC_Windows")
def patch(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    n=s.count(old)
    if n!=1:raise SystemExit("V27 "+label+" anchor count="+str(n))
    path.write_text(s.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
patch(clinic,'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V26");',
    'var liveAI=Tab(tabs,"IA REAL EN DIRECTO V27");',"live tab")
patch(clinic,'var wifi24=Tab(tabs,"WI-FI V26");',
    'var wifi24=Tab(tabs,"WI-FI V27");',"wifi tab")
patch(clinic,'new AetherLiveAIWindowV26().ShowDialog(this)',
    'new AetherLiveAIWindowV27().ShowDialog(this)',"live window")
patch(clinic,'new AetherWifiQualityV26().ShowDialog(this)',
    'new AetherWifiQualityV27().ShowDialog(this)',"wifi window")
patch(clinic,'AETHER SYSTEM CLINIC  V26','AETHER SYSTEM CLINIC  V27',"heading")
patch(clinic,'SIM TURBO PC ULTRA V26 · AETHER SYSTEM CLINIC',
    'SIM TURBO PC ULTRA V27 · AETHER SYSTEM CLINIC',"window")
patch(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V26","AETHER CLINIC V27","launcher")
shutil.copy2(BASE/"V27_LiveAiWifi.cs",pc/"V27_LiveAiWifi.cs")
shutil.copy2(BASE/"V27_WifiRadio.cs",pc/"V27_WifiRadio.cs")
print("V27: FSRCNN adaptive center focus + Wi-Fi PHY RX/TX and explicit band integrated.")
