# AETHER V21: real neural 1080p->4K offline image generation, Windows GUI tab.
# Keep all V4..V20 functionality and the old bicubic tool intact.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():
    raise SystemExit("V21: Windows project directory missing")
clinic=pc/"V11_SystemClinic.cs"
s=clinic.read_text(encoding="utf-8-sig")
changes=[
 ('var stability=Tab(tabs,"ESTABILIDAD V20");',
  'var stability=Tab(tabs,"ESTABILIDAD V20");\n      var neural4k=Tab(tabs,"IA 4K REAL V21");',
  "tab neural V21"),
 ('      headline=new Label{Text="Preparado · selecciona una herramienta"',
  '''      Desc(neural4k,"RED NEURONAL FSRCNN x2 PREENTRENADA: 1080p -> 4K PNG real, sin interpolación bicúbica.",18);
      B(neural4k,"ABRIR AETHER IA 4K V21",16,99,1010,()=>new AetherAi4KV21().ShowDialog(this));
      Desc(neural4k,"Necesita Python + OpenCV Contrib instalados; los pesos de la red se incluyen en el ZIP fuente.",190);
      Desc(neural4k,"NO es escalado de juegos en directo. Monitor físico 1080p = 1080p. El render x2 consume recursos.",264);
      headline=new Label{Text="Preparado · selecciona una herramienta"''',
  "neural controls"),
 ("AETHER SYSTEM CLINIC  V20","AETHER SYSTEM CLINIC  V21","clinic headline"),
 ("SIM TURBO PC ULTRA V20 · AETHER SYSTEM CLINIC",
  "SIM TURBO PC ULTRA V21 · AETHER SYSTEM CLINIC","clinic window")
]
for old,new,label in changes:
    n=s.count(old)
    if n!=1:raise SystemExit("V21: "+label+" anchor count "+str(n))
    s=s.replace(old,new)
clinic.write_text(s,encoding="utf-8-sig")
main=pc/"SIM_TURBO_PC.cs"
s=main.read_text(encoding="utf-8-sig")
if s.count("AETHER CLINIC V20")!=1:
    raise SystemExit("V21: V20 launcher not found")
main.write_text(s.replace("AETHER CLINIC V20","AETHER CLINIC V21"),encoding="utf-8-sig")
shutil.copy2(BASE/"V21_AiSuperResolution.cs",pc/"V21_AiSuperResolution.cs")
print("AETHER V21: real FSRCNN neural GUI integrated; source folder needed at runtime.")
