# Integrate V6 gaming/network telemetry into the V5 dashboard.
from pathlib import Path
import shutil
base=Path(__file__).resolve().parent
target=Path("PC_Windows/V5_PerformanceCenter.cs")
content=target.read_text(encoding="utf-8-sig")
anchor='            AddInfo(games,245, "Consejo:'
if anchor not in content:
    raise SystemExit("V6 patch failed: missing game panel integration anchor")
button='''            AddButton(games,"AUTOPILOTO FPS V6 + LATENCIA/RED EN VIVO",22,328,848,()=>new HyperAdaptiveV6().ShowDialog(this));\n'''
content=content.replace(anchor,button+anchor)
content=content.replace('SIM TURBO PC ULTRA V5 | HYPERPERFORMANCE','SIM TURBO PC ULTRA V6 | HYPERPERFORMANCE')
content=content.replace('HYPERPERFORMANCE V5   ·','HYPERPERFORMANCE V6   ·')
target.write_text(content,encoding="utf-8-sig")
main=Path("PC_Windows/SIM_TURBO_PC.cs")
main_text=main.read_text(encoding="utf-8-sig")
if '"FPS · DRIVERS · RED V5"' not in main_text:
    raise SystemExit("V6 main launcher anchor missing")
main.write_text(main_text.replace('"FPS · DRIVERS · RED V5"','"FPS · DRIVERS · RED V6"'),encoding="utf-8-sig")
shutil.copyfile(base/"V6_HyperAdaptive.cs","PC_Windows/V6_HyperAdaptive.cs")
print("V6 autopilot/network metrics integrated; existing Wi-Fi + SIM unchanged")
