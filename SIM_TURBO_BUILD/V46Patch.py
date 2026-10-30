# AETHER V46: 4K visual by driver DSR/DLDSR at 200 Hz (when supported)
# Real target: user's 425fps baseline vs 300fps goal, manually entered FPS
# Plus new Wi-Fi RX/TX interface monitoring; no game capture and no DNS changes.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
def change(path,old,new,name):
    s=path.read_text(encoding="utf-8-sig")
    n=s.count(old)
    if n!=1:raise RuntimeError("V46 anchor "+name+": "+str(n))
    path.write_text(s.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
change(clinic,'var smooth34=Tab(tabs,"200 HZ / IMAGEN V34");',
'''var smooth34=Tab(tabs,"200 HZ / IMAGEN V34");
      var visual46=Tab(tabs,"4K VISUAL / 300 FPS V46");
      var wifi46=Tab(tabs,"WI-FI V46 USO REAL");''',"tabs")
change(clinic,'      Desc(smooth34,"V34 prioriza fluidez:',
'''      Desc(visual46,"V46: prueba de supermuestreo DSR/DLDSR por GPU (SIN overlay lento). Meta: 300 FPS en CS2 partiendo de 425.",18);
      B(visual46,"ACTIVAR PRUEBA 4K VISUAL / META 300 FPS",16,99,1010,
        ()=>new AetherVisualGoalWindowV46().ShowDialog(this));
      Desc(visual46,"AETHER solo usa modos del controlador que conservan la frecuencia actual, y revierte la prueba en 20 segundos si no se confirma.",190);
      Desc(visual46,"Los FPS deben medirse EN EL JUEGO. 1080p físico NO es idéntico a 4K nativo; activar 4K virtual puede reducir FPS.",267);

      Desc(wifi46,"V46: medir actividad real RX/TX de tu adaptador Wi-Fi en Windows, no pruebas de velocidad de Internet.",18);
      B(wifi46,"MEDIR USO REAL DE WI-FI V46",16,99,1010,
        ()=>new AetherWifiTrafficWindowV46().ShowDialog(this));
      Desc(wifi46,"NUEVO: contadores recibidos/enviados y errores/descartes; no envía tráfico de prueba, no toca DNS ni router.",190);
      Desc(wifi46,"El tráfico observado no es la velocidad máxima, ni mide latencia de CS2.",267);

      Desc(smooth34,"V34 prioriza fluidez:''',"new sections")
change(clinic,"AETHER SYSTEM CLINIC  V45","AETHER SYSTEM CLINIC  V46","header")
change(clinic,"SIM TURBO PC ULTRA V45 · AETHER SYSTEM CLINIC",
    "SIM TURBO PC ULTRA V46 · AETHER SYSTEM CLINIC","title")
change(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V45","AETHER CLINIC V46","main button")
change(pc/"V31_LiveAiWifi.cs",
'Add("200 HZ SIN FILTRO LENTO · GUÍA NATIVA V34",20,624,858,54,()=>new AetherSmoothDisplayV34().ShowDialog(this));',
'Add("4K VISUAL / OBJETIVO 300 FPS V46 (SIN OVERLAY)",20,624,858,54,()=>new AetherVisualGoalWindowV46().ShowDialog(this));',
"old graphics tab shortcut")
change(pc/"V34_SmoothDisplay.cs",
'Add("ABRIR CONFIGURACIÓN 3D NVIDIA",20,310,858,55,OpenNvidia);',
'Add("4K VISUAL / OBJETIVO 300 FPS V46",20,310,858,55,()=>new AetherVisualGoalWindowV46().ShowDialog(this));',
"200Hz panel access")
for name in ("V46_VisualGoal.cs","V46_WifiTraffic.cs"):
    shutil.copy2(BASE/name,pc/name)
print("V46: DSR/DLDSR driver modes with 20s fallback and current Hz, CS2 target measured; Wi-Fi real usage in parallel.")
