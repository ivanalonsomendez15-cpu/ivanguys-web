# V7 PulseRoute: conservative whole-PC network diagnostics + auto-tuning repair only when justified.
from pathlib import Path
import shutil
base=Path(__file__).resolve().parent
p=Path("PC_Windows/V5_PerformanceCenter.cs")
s=p.read_text(encoding="utf-8-sig")
old='AddButton(network,"PROBAR DNS Y GATEWAY",22,172,300,()=>Threaded(NetworkCheck));'
new='AddButton(network,"PULSEROUTE V7 · OPTIMIZAR RED",22,172,300,()=>new PulseRouteV7().ShowDialog(this));'
if old not in s: raise SystemExit("V7: falta punto de integración en pestaña Red")
s=s.replace(old,new)
s=s.replace('SIM TURBO PC ULTRA V6 | HYPERPERFORMANCE','SIM TURBO PC ULTRA V7 | HYPERPERFORMANCE')
s=s.replace('HYPERPERFORMANCE V6   ·','HYPERPERFORMANCE V7   ·')
p.write_text(s,encoding="utf-8-sig")
p=Path("PC_Windows/SIM_TURBO_PC.cs")
s=p.read_text(encoding="utf-8-sig")
old='"FPS · DRIVERS · RED V6"'
if old not in s: raise SystemExit("V7: falta launcher de V6")
s=s.replace(old,'"FPS · DRIVERS · RED V7"')
p.write_text(s,encoding="utf-8-sig")
shutil.copyfile(base/"V7_PulseRoute.cs","PC_Windows/V7_PulseRoute.cs")
print("V7 integrated; V4 SIM bonding, V5 drivers and V6 gaming retained")
