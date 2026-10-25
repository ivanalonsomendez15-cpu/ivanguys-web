# SIM TURBO V8 - AetherLink + Guardian orchestration.
from pathlib import Path
import shutil
base=Path(__file__).resolve().parent

p=Path("PC_Windows/SIM_TURBO_PC.cs")
s=p.read_text(encoding="utf-8-sig")
old="new BondedDownloader(phoneAddress, token).ShowDialog(this);"
if old not in s:raise SystemExit("V8: no main downloader found")
s=s.replace(old,"new AetherBondedDownloader(phoneAddress, token).ShowDialog(this);")
s=s.replace('"SUMAR WIFI + SIM"','"AETHER-LINK V8 · WI-FI + SIM"')
s=s.replace('"FPS · DRIVERS · RED V7"','"FPS · DRIVERS · RED V8"')
p.write_text(s,encoding="utf-8-sig")

p=Path("PC_Windows/V5_PerformanceCenter.cs")
s=p.read_text(encoding="utf-8-sig")
old='AddButton(games,"AUTOPILOTO FPS V6 + LATENCIA/RED EN VIVO",22,328,848,()=>new HyperAdaptiveV6().ShowDialog(this));'
if old not in s:raise SystemExit("V8: V6 game booster missing")
s=s.replace(old,'''AddButton(games,"FPS V6 + LATENCIA",22,328,406,()=>new HyperAdaptiveV6().ShowDialog(this));
            AddButton(games,"AETHER PILOTO GLOBAL V8",442,328,428,()=>new AetherAutopilotV8().ShowDialog(this));''')
old='AddButton(network,"MONITOR DE RECURSOS",337,172,300,()=>Start("resmon.exe",""));'
if old not in s:raise SystemExit("V8: network autopilot anchor missing")
s=s.replace(old,'AddButton(network,"PILOTO GLOBAL V8",337,172,300,()=>new AetherAutopilotV8().ShowDialog(this));')
s=s.replace('SIM TURBO PC ULTRA V7 | HYPERPERFORMANCE','SIM TURBO PC ULTRA V8 | HYPERPERFORMANCE')
s=s.replace('HYPERPERFORMANCE V7   ·','HYPERPERFORMANCE V8   ·')
p.write_text(s,encoding="utf-8-sig")
shutil.copyfile(base/"V8_AetherDownloader.cs","PC_Windows/V8_AetherDownloader.cs")
shutil.copyfile(base/"V8_AetherAutopilot.cs","PC_Windows/V8_AetherAutopilot.cs")
print("AETHER V8 adaptive bonding & global opt-in pilot integrated.")
