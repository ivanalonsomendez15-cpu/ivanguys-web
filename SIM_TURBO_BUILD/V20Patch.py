# AETHER V20: bounded Windows ICMP stability tests and persistent Android
# per-game controller overrides. Apply AFTER V19Patch.py.
from pathlib import Path
import shutil
BASE=Path(__file__).resolve().parent
def change(path,old,new,label):
    data=path.read_text(encoding="utf-8-sig")
    count=data.count(old)
    if count!=1:
        raise SystemExit("V20 anchor "+label+" count="+str(count))
    path.write_text(data.replace(old,new),encoding="utf-8-sig" if path.suffix==".cs" else "utf-8")
pc=Path("PC_Windows")
if pc.is_dir():
    clinic=pc/"V11_SystemClinic.cs"
    change(clinic,'var process=Tab(tabs,"JUEGO / PROCESO V19");',
           'var process=Tab(tabs,"JUEGO / PROCESO V19");\n      var stability=Tab(tabs,"ESTABILIDAD V20");',
           "stability tab")
    change(clinic,'      headline=new Label{Text="Preparado · selecciona una herramienta"',
           '''      Desc(stability,"Prueba a demanda: 12 pings ICMP al router o a Internet. Calcula mediana, P95, pérdidas y jitter; exporta CSV.",18);
      B(stability,"ABRIR PRUEBA DE ESTABILIDAD V20",16,99,1010,()=>new AetherNetworkStabilityV20().ShowDialog(this));
      Desc(stability,"ICMP bloqueado puede parecer pérdida. No mide FPS ni Mb/s; no modifica Windows, DNS o TCP.",190);
      Desc(stability,"Para 60 → 120–150 Mb/s usa auditoría de enlace V14 y test HTTPS V13; ninguna herramienta supera la tarifa contratada.",264);

      headline=new Label{Text="Preparado · selecciona una herramienta"''',
           "stability controls")
    change(clinic,"AETHER SYSTEM CLINIC  V19","AETHER SYSTEM CLINIC  V20","clinic header")
    change(clinic,"SIM TURBO PC ULTRA V19 · AETHER SYSTEM CLINIC",
           "SIM TURBO PC ULTRA V20 · AETHER SYSTEM CLINIC","clinic title")
    change(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V19","AETHER CLINIC V20","launcher")
    shutil.copy2(BASE/"V20_NetworkStability.cs",pc/"V20_NetworkStability.cs")
android=Path("Android")
if android.is_dir():
    java=android/"app/src/main/java/com/simturbopc/ultra"
    main=java/"MainActivity.java"
    change(main,'GameProfiles.save(this,pkg,mode);',
           'GameProfiles.save(this,pkg,mode);\n                GameLayoutOverridesV20.save(this,pkg,v14ControllerLayout);',
           "save controller layout with game")
    change(main,'String layout=GameAutoProfileV19.layoutForPackage(pkg);',
           'String layout=GameLayoutOverridesV20.resolve(this,pkg);',
           "resolve saved layout before automatic fallback")
    change(main,'saveGame.setText("GUARDAR PERFIL DE ESTE JUEGO");',
           'saveGame.setText("GUARDAR PERFIL Y MANDO PARA ESTE JUEGO V20");',
           "save button label")
    change(main,'v12Info.setText("Guardado "+pkg+" · "+mode+". "+GameProfiles.recommendation(mode));',
           'v12Info.setText("Guardado "+pkg+" · "+mode+" · mando "+v14ControllerLayout+". "+GameProfiles.recommendation(mode));',
           "save confirmation")
    shutil.copy2(BASE/"V20_GameLayoutRules.java",java/"GameLayoutRulesV20.java")
    shutil.copy2(BASE/"V20_GameLayoutOverrides.java",java/"GameLayoutOverridesV20.java")
    gradle=android/"app/build.gradle"
    change(gradle,"versionCode 19","versionCode 20","Android versionCode")
    change(gradle,"versionName '19.0'","versionName '20.0'","Android versionName")
print("AETHER V20: Windows stability clinic + Android per-game saved controller layouts.")
