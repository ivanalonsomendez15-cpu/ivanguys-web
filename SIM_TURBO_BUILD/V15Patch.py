# AETHER V15: read-only Windows live resource profiler + Android analog-style
# 8-way WASD touch joystick + paired LAN RTT measurement.
# Apply after V14Patch.py to the extracted project root.
from pathlib import Path
import shutil

BASE=Path(__file__).resolve().parent
def change(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    n=s.count(old)
    if n!=1:raise SystemExit("V15 patch anchor invalid: "+label+" count="+str(n))
    path.write_text(s.replace(old,new),encoding="utf-8-sig" if path.suffix==".cs" else "utf-8")

pc=Path("PC_Windows")
if pc.is_dir():
    clinic=pc/"V11_SystemClinic.cs"
    change(clinic,'var link=Tab(tabs,"ENLACES V14");',
           'var link=Tab(tabs,"ENLACES V14");\n      var performance=Tab(tabs,"RENDIMIENTO V15");',
           "Windows performance tab")
    change(clinic,'      headline=new Label{Text="Preparado · selecciona una herramienta"',
           '''      Desc(performance,"Monitor de recursos cada 3 segundos: CPU, RAM y procesos. Guarda hasta 120 muestras y exporta CSV. No modifica Windows.",18);
      B(performance,"ABRIR PERFILADOR EN DIRECTO V15",16,99,1010,()=>new AetherPerformanceProfilerV15().ShowDialog(this));
      Desc(performance,"Perfiles: EQUILIBRADO, PC MODESTO y JUEGOS. Recomendaciones según carga real; no mide FPS ni temperatura.",190);
      Desc(performance,"No promete convertir 15–20 FPS en 100–120 FPS. Compara el mismo juego antes y después con el contador del juego.",264);

      headline=new Label{Text="Preparado · selecciona una herramienta"''',
           "Windows profiler controls")
    change(clinic,"AETHER SYSTEM CLINIC  V14","AETHER SYSTEM CLINIC  V15","Windows header")
    change(clinic,"SIM TURBO PC ULTRA V14 · AETHER SYSTEM CLINIC",
           "SIM TURBO PC ULTRA V15 · AETHER SYSTEM CLINIC","Windows title")
    shutil.copy2(BASE/"V15_PerformanceProfiler.cs",pc/"V15_PerformanceProfiler.cs")
    main=pc/"SIM_TURBO_PC.cs"
    change(main,"AETHER CLINIC V14","AETHER CLINIC V15","Windows launcher")

android=Path("Android")
if android.is_dir():
    java=android/"app/src/main/java/com/simturbopc/ultra"
    main=java/"MainActivity.java"
    change(main,'        private String v14ControllerLayout="GENERAL";',
           '''        private String v14ControllerLayout="GENERAL";
        private TouchJoystickV15 v15Joystick;''',
           "Android joystick field")
    change(main,'            padCard.addView(dirs);',
           '''            padCard.addView(dirs);
            padCard.addView(text("V15 · STICK TÁCTIL MULTIDIRECCIONAL (WASD, DIAGONALES)",12,CYAN,true));
            padCard.setMotionEventSplittingEnabled(true);
            v15Joystick=new TouchJoystickV15(this,new TouchJoystickV15.KeySink(){
                @Override public void down(String key){
                    if(controllerOn && controllerSender!=null)controllerSender.down(key);
                }
                @Override public void up(String key){
                    if(controllerSender!=null)controllerSender.up(key);
                }
            });
            padCard.addView(v15Joystick,new LinearLayout.LayoutParams(-1,dp(195)));''',
           "Android joystick UI")
    change(main,'        private void stopController() {\n            controllerOn=false;',
           '''        private void stopController() {
            if(v15Joystick!=null)v15Joystick.releaseAll();
            controllerOn=false;''',
           "Android stop releases joystick")
    change(main,'        v12Info=text("Todo queda local. Abre el receptor V12 en Windows para detectar PC. "+',
           '''        Button v15Rtt=new Button(this);
        v15Rtt.setAllCaps(false);
        v15Rtt.setText("V15 · MEDIR RESPUESTA LOCAL DEL PC (3 MUESTRAS)");
        aetherCard.addView(v15Rtt,new LinearLayout.LayoutParams(-1,dp(48)));
        v15Rtt.setOnClickListener(v->{
            v12Info.setText("Midiendo respuesta del PC emparejado...");
            new Thread(()->{
                try{
                    String result=PcRoundtripV15.measure(this,pairedPcIp,pairedToken);
                    runOnUiThread(()->v12Info.setText(result));
                }catch(Exception ex){
                    runOnUiThread(()->v12Info.setText("RTT LAN: "+ex.getMessage()));
                }
            },"AETHER-PC-RTT").start();
        });
        v12Info=text("Todo queda local. Abre el receptor V12 en Windows para detectar PC. "+''',
           "Android RTT button")
    shutil.copy2(BASE/"V15_TouchJoystick.java",java/"TouchJoystickV15.java")
    shutil.copy2(BASE/"V15_PcRoundtrip.java",java/"PcRoundtripV15.java")
    gradle=android/"app/build.gradle"
    change(gradle,"versionCode 14","versionCode 15","Android versionCode")
    change(gradle,"versionName '14.0'","versionName '15.0'","Android versionName")

print("AETHER V15: Windows live profiler and Android multitouch joystick / PC RTT integrated.")
