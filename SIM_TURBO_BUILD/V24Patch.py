# V24: replace the broken expectation of 4K Windows modes with genuine frame AI.
# Keep V23 DSR as optional, not the primary or required approach.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
pc=Path("PC_Windows")
if not pc.is_dir():raise SystemExit("V24: Windows sources missing")
def patch(path, old, new, label):
    s=path.read_text(encoding="utf-8-sig")
    count=s.count(old)
    if count!=1:raise SystemExit("V24 "+label+" anchor count="+str(count))
    path.write_text(s.replace(old,new),encoding="utf-8-sig")
clinic=pc/"V11_SystemClinic.cs"
patch(clinic,'var live=Tab(tabs,"4K EN DIRECTO V23");',
  'var live=Tab(tabs,"DSR NVIDIA OPCIONAL");\n      var liveAI=Tab(tabs,"IA REAL EN DIRECTO V24");\n      var wifi24=Tab(tabs,"WI-FI V24");',
  "V24 clinic tabs")
patch(clinic,
 '      AetherSavedSettingsV22.BindTabs(tabs,"clinic.tab");',
 '''      Desc(liveAI,"Nueva IA de pantalla: procesa fotogramas con una red neuronal FSRCNN sin tocar la resolucion de Windows.",18);
      B(liveAI,"ABRIR AETHER IA DE PANTALLA V24",16,99,1010,
        ()=>new AetherLiveAIWindowV24().ShowDialog(this));
      Desc(liveAI,"VISTA PREVIA: procesado neuronal verificable; FILTRO COMPLETO: experimental si Windows permite capturar sin bucle.",189);
      Desc(liveAI,"No es 4K fisico. Modo rapido 540p a 1080p, modo IA_4K calcula 4K virtual y reduce a 1080p.",259);
      Desc(wifi24,"V24 mide router vs Internet para identificar saturacion y cortes reales, sin tocar DNS ni drivers.",18);
      B(wifi24,"DIAGNOSTICO WIFI Y RED V24",16,99,1010,
        ()=>new AetherWifiQualityV24().ShowDialog(this));
      Desc(wifi24,"12 mediciones de ping por destino, variacion, perdida y velocidad de enlace reportada por Windows.",189);
      Desc(wifi24,"No puede duplicar una tarifa de 60 Mb/s. Pruébalo antes y despues de cambios en router o distancia.",259);
      AetherSavedSettingsV22.BindTabs(tabs,"clinic.tab");''',
 "V24 buttons and help")
patch(clinic,'AETHER SYSTEM CLINIC  V23','AETHER SYSTEM CLINIC  V24',"clinic heading")
patch(clinic,'SIM TURBO PC ULTRA V23 · AETHER SYSTEM CLINIC',
  'SIM TURBO PC ULTRA V24 · AETHER SYSTEM CLINIC',"clinic window title")
patch(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V23","AETHER CLINIC V24","dashboard launcher")
shutil.copy2(BASE/"V24_LiveAiWifi.cs",pc/"V24_LiveAiWifi.cs")
print("V24: IA de pantalla FSRCNN sin cambio de resolucion + Wi-Fi calidad (12 muestras) integrado.")
