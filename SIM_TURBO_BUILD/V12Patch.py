# AETHER V12 source integration: Android visible monitor, per-game profiles,
# LAN discovery + PC capabilities, Windows bicubic 4K export (not AI).
# Apply AFTER V11Patch.py, from the extracted project root.
from pathlib import Path
import shutil

BASE=Path(__file__).resolve().parent

def change(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    if s.count(old)!=1:
        raise SystemExit("V12 anchor missing or repeated: "+label+" ("+str(s.count(old))+")")
    path.write_text(s.replace(old,new),encoding="utf-8-sig" if path.suffix==".cs" else "utf-8")

pc=Path("PC_Windows")
if pc.is_dir():
    clinic=pc/"V11_SystemClinic.cs"
    change(clinic,'var pad=Tab(tabs,"MANDO ANDROID");',
           'var pad=Tab(tabs,"MANDO ANDROID");\n      var image=Tab(tabs,"IMAGEN / 4K");',"Windows image tab")
    change(clinic,'      headline=new Label{Text="Preparado · selecciona una herramienta"',
           '''      Desc(image,"Superresolución bicúbica para imágenes: exporta un PNG de 3840×2160. No es IA ni convierte un panel 1080p en uno 4K.",18);
      B(image,"ABRIR LABORATORIO DE IMAGEN 4K",16,99,1010,()=>new AetherSuperResolutionV12().ShowDialog(this));
      Desc(image,"Puedes consultar la GPU y la resolución real. DLSS, FSR y DLDSR dependen del hardware y del juego. Este módulo NO los fuerza.",189);
      Desc(image,"Un panel 1920×1080 sigue mostrando 1920×1080 píxeles físicos, incluso con una imagen de origen 4K.",264);

      headline=new Label{Text="Preparado · selecciona una herramienta"''',"Windows image controls")
    change(clinic,'AETHER SYSTEM CLINIC  V11','AETHER SYSTEM CLINIC  V12',"Windows header")
    gamepad=pc/"V11_AndroidGamepad.cs"
    change(gamepad,'readonly UdpClient udp;',
           'readonly UdpClient udp;\n    readonly AetherLanDiscoveryV12 discovery;',"LAN field")
    change(gamepad,'udp.Client.Blocking=false;',
           'udp.Client.Blocking=false;\n      discovery=new AetherLanDiscoveryV12(code);',"LAN start")
    change(gamepad,'try{udp.Close();}catch{}',
           'try{udp.Close();}catch{}\n      discovery.Dispose();',"LAN stop")
    for fname in ("V12_LanDiscovery.cs","V12_SuperResolution.cs"):
        shutil.copyfile(BASE/fname,pc/fname)

android=Path("Android")
if android.is_dir():
    java=android/"app/src/main/java/com/simturbopc/ultra"
    main=java/"MainActivity.java"
    change(main,'        private TextView controllerStatus;',
           '''        private TextView controllerStatus;
        private android.widget.EditText v12GamePackage;
        private android.widget.Spinner v12ProfileMode;
        private TextView v12Info;
        private boolean v12MonitorRequested=false;''',"Android V12 fields")
    section='''        LinearLayout aetherCard=card();root.addView(aetherCard);
        aetherCard.addView(text("AETHER V12 · MONITOR MÓVIL Y JUEGOS",15,CYAN,true));
        gap(aetherCard,9);
        aetherCard.addView(text("Servicio visible en segundo plano: batería y conexión cada 20 s. No modifica Android ni otros juegos.",12,GREY,false));
        Button monitorBtn=new Button(this);
        monitorBtn.setAllCaps(false);
        monitorBtn.setText("INICIAR MONITOR VISIBLE");
        aetherCard.addView(monitorBtn,new LinearLayout.LayoutParams(-1,dp(48)));
        monitorBtn.setOnClickListener(v->{
            try{
                android.content.Intent intent=new android.content.Intent(this,AetherMonitorService.class);
                if(!v12MonitorRequested){
                    if(android.os.Build.VERSION.SDK_INT>=33 &&
                       checkSelfPermission("android.permission.POST_NOTIFICATIONS")!=android.content.pm.PackageManager.PERMISSION_GRANTED)
                        requestPermissions(new String[]{"android.permission.POST_NOTIFICATIONS"},1201);
                    if(android.os.Build.VERSION.SDK_INT>=26)startForegroundService(intent);
                    else startService(intent);
                    v12MonitorRequested=true;
                    monitorBtn.setText("DETENER MONITOR");
                    v12Info.setText("Monitor solicitado; Android puede pausarlo por batería.");
                }else{
                    stopService(intent);
                    v12MonitorRequested=false;
                    monitorBtn.setText("INICIAR MONITOR VISIBLE");
                    v12Info.setText("Monitor detenido por el usuario.");
                }
            }catch(Exception ex){v12Info.setText("No se pudo iniciar: "+ex.getMessage());}
        });
        Button sampleBtn=new Button(this);
        sampleBtn.setAllCaps(false);sampleBtn.setText("VER ÚLTIMA MUESTRA DEL MÓVIL");
        aetherCard.addView(sampleBtn,new LinearLayout.LayoutParams(-1,dp(46)));
        sampleBtn.setOnClickListener(v->v12Info.setText(
            getSharedPreferences(AetherMonitorService.PREFS,MODE_PRIVATE)
                .getString("last_status","Aún no hay muestras.")));
        gap(aetherCard,9);
        aetherCard.addView(text("PERFILES POR JUEGO · SOLO CONSEJOS, SIN MODIFICAR OTRAS APPS",12,CYAN,true));
        v12GamePackage=new android.widget.EditText(this);
        v12GamePackage.setSingleLine(true);
        v12GamePackage.setText("com.roblox.client");
        v12GamePackage.setTextColor(0xFFFFFFFF);
        v12GamePackage.setHint("Paquete Android del juego");
        aetherCard.addView(v12GamePackage,new LinearLayout.LayoutParams(-1,dp(50)));
        v12ProfileMode=new android.widget.Spinner(this);
        android.widget.ArrayAdapter<String> modes=new android.widget.ArrayAdapter<>(
            this,android.R.layout.simple_spinner_item,GameProfiles.MODES);
        modes.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        v12ProfileMode.setAdapter(modes);
        aetherCard.addView(v12ProfileMode,new LinearLayout.LayoutParams(-1,dp(52)));
        Button saveGame=new Button(this);saveGame.setAllCaps(false);
        saveGame.setText("GUARDAR PERFIL DE ESTE JUEGO");
        aetherCard.addView(saveGame,new LinearLayout.LayoutParams(-1,dp(47)));
        saveGame.setOnClickListener(v->{
            try{
                String pkg=v12GamePackage.getText().toString().trim();
                String mode=String.valueOf(v12ProfileMode.getSelectedItem());
                GameProfiles.save(this,pkg,mode);
                v12Info.setText("Guardado "+pkg+" · "+mode+". "+GameProfiles.recommendation(mode));
            }catch(Exception ex){v12Info.setText("Perfil no guardado: "+ex.getMessage());}
        });
        Button lastGame=new Button(this);lastGame.setAllCaps(false);
        lastGame.setText("DETECTAR ÚLTIMO JUEGO CONFIGURADO");
        aetherCard.addView(lastGame,new LinearLayout.LayoutParams(-1,dp(47)));
        lastGame.setOnClickListener(v->{
            if(!GameProfiles.hasUsageAccess(this)){
                v12Info.setText("Concede Acceso a datos de uso a AETHER si deseas detección voluntaria.");
                startActivity(new android.content.Intent(android.provider.Settings.ACTION_USAGE_ACCESS_SETTINGS));
            }else{
                String pkg=GameProfiles.lastConfiguredGame(this,600000L);
                if(pkg!=null){
                    v12GamePackage.setText(pkg);
                    v12Info.setText("Detectado: "+pkg+" · "+GameProfiles.profile(this,pkg));
                }else v12Info.setText("No hay juego configurado detectado en los últimos 10 min.");
            }
        });
        gap(aetherCard,9);
        aetherCard.addView(text("PC · DETECCIÓN Y PERFIL POR HARDWARE",12,CYAN,true));
        Button findPc=new Button(this);findPc.setAllCaps(false);
        findPc.setText("DETECTAR PC POR WI-FI LOCAL");
        aetherCard.addView(findPc,new LinearLayout.LayoutParams(-1,dp(47)));
        findPc.setOnClickListener(v->{
            v12Info.setText("Buscando receptor en la LAN...");
            new Thread(()->{
                try{
                    String ip=PcDiscovery.find(this);
                    runOnUiThread(()->{
                        pairedPcIp=ip;
                        v12Info.setText("PC encontrado: "+ip+
                            ". Introduce ese IP y tu código en CONECTAR Y MEDIR para autorizarlo.");
                    });
                }catch(Exception ex){
                    runOnUiThread(()->v12Info.setText("Detección: "+ex.getMessage()));
                }
            }).start();
        });
        Button pcCaps=new Button(this);pcCaps.setAllCaps(false);
        pcCaps.setText("LEER CPU / RAM / GPU DEL PC EMPAREJADO");
        aetherCard.addView(pcCaps,new LinearLayout.LayoutParams(-1,dp(47)));
        pcCaps.setOnClickListener(v->{
            v12Info.setText("Consultando hardware con el código de emparejamiento...");
            new Thread(()->{
                try{
                    String caps=PcDiscovery.capabilities(this,pairedPcIp,pairedToken);
                    runOnUiThread(()->v12Info.setText(caps+
                        ". Recomendaciones: GPU modesta = bajar resolución y sombras; "+
                        "compara FPS reales antes y después."));
                }catch(Exception ex){
                    runOnUiThread(()->v12Info.setText("Hardware: "+ex.getMessage()));
                }
            }).start();
        });
        v12Info=text("Todo queda local. Abre el receptor V12 en Windows para detectar PC. "+
            "Los permisos de uso son opcionales.",12,GREY,false);
        aetherCard.addView(v12Info);
        gap(root,18);
'''
    change(main,'        root.addView(text("PRIVACIDAD Y LÍMITES", 12, CYAN, true));',
           section+'        root.addView(text("PRIVACIDAD Y LÍMITES", 12, CYAN, true));',
           "Android V12 sections")
    for fname,final in [
        ("V12_AndroidMonitorService.java","AetherMonitorService.java"),
        ("V12_GameProfiles.java","GameProfiles.java"),
        ("V12_PcDiscovery.java","PcDiscovery.java")
    ]:shutil.copyfile(BASE/fname,java/final)
    manifest=android/"app/src/main/AndroidManifest.xml"
    m=manifest.read_text(encoding="utf-8")
    permissions=[
        "android.permission.FOREGROUND_SERVICE",
        "android.permission.FOREGROUND_SERVICE_CONNECTED_DEVICE",
        "android.permission.CHANGE_NETWORK_STATE",
        "android.permission.POST_NOTIFICATIONS"
    ]
    additions="".join('    <uses-permission android:name="'+p+'" />\n' for p in permissions if p not in m)
    if "<application" not in m or "</application>" not in m:
        raise SystemExit("V12 Android manifest structure not found")
    m=m.replace("<application",additions+"    <application",1)
    service='''        <service android:name=".AetherMonitorService"
            android:exported="false"
            android:foregroundServiceType="connectedDevice" />
'''
    m=m.replace("</application>",service+"    </application>",1)
    manifest.write_text(m,encoding="utf-8")
    gradle=android/"app/build.gradle"
    g=gradle.read_text(encoding="utf-8")
    if "versionCode 11" not in g:raise SystemExit("V12 Android versionCode 11 anchor missing")
    gradle.write_text(g.replace("versionCode 11","versionCode 12")
                      .replace("versionName '11.0'","versionName '12.0'"),encoding="utf-8")
    print("Android V12: monitor foreground, local profiles, opt-in Usage Access and LAN PC detection.")
print("AETHER V12 patch complete.")
