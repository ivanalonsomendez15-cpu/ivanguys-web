# AETHER V23: supersampling de escritorio mediante modos permitidos por el driver.
# Applies AFTER V22: no injection into games and no forced custom monitor modes.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V23 requiere PC_Windows")
def change(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    n=s.count(old)
    if n!=1:raise SystemExit("V23: anchor "+label+" count="+str(n))
    path.write_text(s.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
change(clinic,
  'var saves=Tab(tabs,"GUARDADO V22");',
  'var saves=Tab(tabs,"GUARDADO V22");\n      var live=Tab(tabs,"4K EN DIRECTO V23");',
  "Live 4K tab")
change(clinic,
  '      AetherSavedSettingsV22.BindTabs(tabs,"clinic.tab");',
  '''      Desc(live,"4K en directo: DSR 4x usa resolucion virtual de NVIDIA. IA DLDSR 2,25x muestra aprox. 2880x1620 en FHD.",18);
      B(live,"ABRIR MODO 4K EN DIRECTO V23",16,99,1010,
        ()=>new AetherLive4KV23().ShowDialog(this));
      Desc(live,"Activa Factores DSR desde NVIDIA si Windows no ofrece el modo. 4K virtual no es un panel 4K fisico.",190);
      Desc(live,"En CS2, Valorant, Roblox o juegos exclusivos puede ser necesario escoger el modo dentro de cada juego. FPS pueden bajar.",264);
      AetherSavedSettingsV22.BindTabs(tabs,"clinic.tab");''',
  "Live 4K controls")
change(clinic,"AETHER SYSTEM CLINIC  V22","AETHER SYSTEM CLINIC  V23","header")
change(clinic,"SIM TURBO PC ULTRA V22 · AETHER SYSTEM CLINIC","SIM TURBO PC ULTRA V23 · AETHER SYSTEM CLINIC","window")
change(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V22","AETHER CLINIC V23","launcher")
shutil.copy2(BASE/"V23_LiveSupersampling.cs",pc/"V23_LiveSupersampling.cs")
print("AETHER V23: 4K DSR 4x / IA DLDSR 2.25x Windows settings UI integrated.")
