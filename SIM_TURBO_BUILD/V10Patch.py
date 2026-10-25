# SIM TURBO V10: AETHER ten innovation prototypes, guarded external DNS testing,
# and exactly one billion indexed combinations without materializing them.
from pathlib import Path
import shutil
base=Path(__file__).resolve().parent

p=Path("PC_Windows/V5_PerformanceCenter.cs")
s=p.read_text(encoding="utf-8-sig")
old='AddButton(info,"INVESTIGACIÓN DE PRECISIÓN V9",450,172,420,()=>new AetherResearchV9().ShowDialog(this));'
if old not in s: raise SystemExit("V10: V9 research entrypoint missing")
s=s.replace(old,'AddButton(info,"AETHER INNOVATION LAB V10",450,172,420,()=>new AetherInnovationV10().ShowDialog(this));')
old='            AddInfo(info,255,"No se terminan procesos automáticamente.'
if old not in s: raise SystemExit("V10: info panel anchor missing")
s=s.replace(old,'''            AddButton(info,"IDEAS · 1.000.000.000",22,333,420,()=>new AetherIdeaEngineV10().ShowDialog(this));
            AddButton(info,"LAB PRECISIÓN V9",450,333,420,()=>new AetherResearchV9().ShowDialog(this));
'''+old)
s=s.replace('SIM TURBO PC ULTRA V9 | HYPERPERFORMANCE','SIM TURBO PC ULTRA V10 | HYPERPERFORMANCE')
s=s.replace('HYPERPERFORMANCE V9   ·','HYPERPERFORMANCE V10   ·')
p.write_text(s,encoding="utf-8-sig")

p=Path("PC_Windows/SIM_TURBO_PC.cs")
s=p.read_text(encoding="utf-8-sig")
old='"FPS · DRIVERS · RED V9"'
if old not in s:raise SystemExit("V10: previous main launcher missing")
s=s.replace(old,'"AETHER · V10 INNOVATION LAB"')
p.write_text(s,encoding="utf-8-sig")

for src in ["V10_InnovationLab.cs","V10_IdeaEngine.cs"]:
    shutil.copyfile(base/src, "PC_Windows/"+src)
print("AETHER V10 modules and billion-combination navigator integrated. Main V9/V8 functions retained.")
