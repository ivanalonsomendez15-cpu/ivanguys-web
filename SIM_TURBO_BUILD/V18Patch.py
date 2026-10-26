# AETHER V18: Windows read-only storage/startup clinic and Android
# battery-aware foreground monitoring. Apply AFTER V17Patch.py.
from pathlib import Path
import shutil

BASE=Path(__file__).resolve().parent

def replace(path,old,new,label):
    text=path.read_text(encoding="utf-8-sig")
    count=text.count(old)
    if count!=1:
        raise SystemExit("V18 anchor "+label+" expected once; found "+str(count))
    path.write_text(text.replace(old,new),encoding="utf-8-sig" if path.suffix==".cs" else "utf-8")

pc=Path("PC_Windows")
if pc.is_dir():
    clinic=pc/"V11_SystemClinic.cs"
    replace(clinic,'var graphics=Tab(tabs,"GPU Y PANTALLA V17");',
            'var graphics=Tab(tabs,"GPU Y PANTALLA V17");\n      var storage=Tab(tabs,"DISCO E INICIO V18");',
            "new storage tab")
    replace(clinic,'      headline=new Label{Text="Preparado · selecciona una herramienta"',
            '''      Desc(storage,"Comprueba espacio libre de discos y nombres de aplicaciones al inicio. Solo lectura, sin limpiar ni cerrar procesos.",18);
      B(storage,"ABRIR AUDITORÍA DE DISCO E INICIO V18",16,99,1010,()=>new AetherStorageClinicV18().ShowDialog(this));
      Desc(storage,"Detecta unidades con poco espacio y enumera entradas de inicio sin revelar comandos ni modificar el registro.",190);
      Desc(storage,"Para PC modesto: revisa cargas y programas conocidos; un SSD mejora tiempos de carga, no garantiza FPS.",264);

      headline=new Label{Text="Preparado · selecciona una herramienta"''',
            "storage tab controls")
    replace(clinic,"AETHER SYSTEM CLINIC  V17","AETHER SYSTEM CLINIC  V18","clinic header")
    replace(clinic,"SIM TURBO PC ULTRA V17 · AETHER SYSTEM CLINIC",
            "SIM TURBO PC ULTRA V18 · AETHER SYSTEM CLINIC","clinic window title")
    replace(pc/"SIM_TURBO_PC.cs","AETHER CLINIC V17","AETHER CLINIC V18","main launcher")
    shutil.copy2(BASE/"V18_StorageClinic.cs",pc/"V18_StorageClinic.cs")

android=Path("Android")
if android.is_dir():
    java=android/"app/src/main/java/com/simturbopc/ultra"
    monitor=java/"AetherMonitorService.java"
    replace(monitor,'            try {\n                ConnectivityManager cm=',
            '            long delayMs=30000L;\n            try {\n                ConnectivityManager cm=',
            "delay declaration")
    replace(monitor,'''                String game=GameProfiles.lastConfiguredGame(AetherMonitorService.this,5*60*1000L);''',
            '''                boolean charging=false;
                if(battery!=null) {
                    int state=battery.getIntExtra(BatteryManager.EXTRA_STATUS,-1);
                    charging=state==BatteryManager.BATTERY_STATUS_CHARGING ||
                        state==BatteryManager.BATTERY_STATUS_FULL;
                }
                delayMs=MonitorCadenceV18.intervalMs(percent,charging);
                String game=GameProfiles.lastConfiguredGame(AetherMonitorService.this,5*60*1000L);''',
            "battery charging status")
    replace(monitor,'''                getSharedPreferences(PREFS,MODE_PRIVATE).edit()
                    .putString("last_status",status)
                    .putLong("last_sample",System.currentTimeMillis()).apply();''',
            '''                getSharedPreferences(PREFS,MODE_PRIVATE).edit()
                    .putString("last_status",status+" · próxima muestra "+(delayMs/1000L)+" s")
                    .putLong("last_sample",System.currentTimeMillis())
                    .putLong("last_interval_ms",delayMs).apply();''',
            "persist sample interval")
    replace(monitor,'            handler.postDelayed(this,20000L); // 1 muestra / 20 segundos.',
            '            handler.postDelayed(this,delayMs); // 20-60 s according to battery; Android may stop service.',
            "adaptive interval")
    shutil.copy2(BASE/"V18_MonitorCadence.java",java/"MonitorCadenceV18.java")
    main=java/"MainActivity.java"
    replace(main,"Servicio visible en segundo plano: batería y conexión cada 20 s.",
            "Servicio visible en segundo plano: batería y conexión cada 20-60 s según carga.",
            "monitor description")
    gradle=android/"app/build.gradle"
    replace(gradle,"versionCode 17","versionCode 18","versionCode")
    replace(gradle,"versionName '17.0'","versionName '18.0'","versionName")

print("AETHER V18: Windows disk/startup diagnostics and adaptive Android monitor.")
