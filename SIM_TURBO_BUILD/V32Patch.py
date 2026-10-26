# AETHER V32: repair CONECTAR Y MEDIR with REAL bidirectional authenticated ACK
# Applies after V31Patch.py inside unpacked project root.
from pathlib import Path
import shutil
ROOT=Path(__file__).resolve().parent
def replace(path,old,new,label):
    s=path.read_text(encoding="utf-8-sig")
    n=s.count(old)
    if n!=1:raise SystemExit("V32 patch error ("+label+"): expected one anchor, got "+str(n))
    path.write_text(s.replace(old,new),encoding="utf-8-sig" if path.suffix==".cs" else "utf-8")
pc=Path("PC_Windows")
android=Path("Android")
if not pc.is_dir() or not android.is_dir():raise SystemExit("V32 requires Windows + Android sources")
windows=pc/"SIM_TURBO_PC.cs"
replace(windows,
'''                    string msg=Encoding.UTF8.GetString(receiver.Receive(ref source));
                    string[] bits=msg.Split('|');
                    if (bits.Length!=5 || bits[0]!="STPC2" || bits[1]!=token) continue;
                    int rssi,freq,rate;
                    if(!int.TryParse(bits[2],out rssi)||!int.TryParse(bits[3],out freq)||!int.TryParse(bits[4],out rate)) continue;
                    if(rssi < -130 || rssi > -10 || freq < 0 || freq > 7500 || rate < 0 || rate > 20000) continue;''',
'''                    string msg=Encoding.UTF8.GetString(receiver.Receive(ref source));
                    if(!AetherTelemetryAckV32.IsPrivate(source.Address))continue;
                    string[] bits=msg.Split('|');
                    int rssi=0,freq=0,rate=0;
                    string confirmation=null;
                    if(bits.Length==6&&bits[0]=="STPC32"){
                        if(!AetherTelemetryAckV32.TryAccept(msg,token,out rssi,out freq,out rate,out confirmation))continue;
                    }else{
                        if(bits.Length!=5||bits[0]!="STPC2"||bits[1]!=token)continue;
                        if(!int.TryParse(bits[2],out rssi)||!int.TryParse(bits[3],out freq)||
                           !int.TryParse(bits[4],out rate))continue;
                        if(rssi < -130 || rssi > -10 || freq < 0 || freq > 7500 || rate < 0 || rate > 20000)continue;
                    }
                    if(confirmation!=null){
                        byte[] reply=Encoding.ASCII.GetBytes(confirmation);
                        receiver.Send(reply,reply.Length,source); // Confirm only actual accepted packets.
                    }''',
"Windows real authenticated ACK on UDP 45721")
replace(windows,
'catch (Exception ex) { Append("No se puede abrir UDP " + Port + ": " + ex.Message); }',
'''catch (Exception ex) {
                lblPhone.Text="ERROR RECEPTOR: el puerto UDP 45721 no está disponible.";
                Append("No se puede abrir UDP " + Port + ": " + ex.Message);
            }''',"Windows show listener error")
replace(windows,'Móvil enlazado · ','Móvil CONFIRMADO V32 · ','Windows confirmed message')
replace(windows,'ULTRA   V3.2','ULTRA   V32.0',"Windows version marker")
shutil.copy2(ROOT/"V32_TelemetryAck.cs",pc/"V32_TelemetryAck.cs")

main=android/"app/src/main/java/com/simturbopc/ultra/MainActivity.java"
replace(main,
'    private boolean active = false;',
'''    private boolean active = false;
    private TextView v32Feedback;
    private volatile boolean v32Pending = false;
    private int v32Session = 0;
    private int v32Missed = 0;
    private final java.util.concurrent.atomic.AtomicBoolean v32Sending =
        new java.util.concurrent.atomic.AtomicBoolean(false);''',"Android V32 state fields")
replace(main,
'        toggle.setOnClickListener(v -> { if(active) stop(); else start(); });',
'''        v32Feedback=text("V32: la conexión SOLO será válida si el PC confirma que ha recibido los datos.",13,CYAN,true);
        form.addView(v32Feedback);
        toggle.setOnClickListener(v -> {
            if(v32Pending)return;
            if(active)stop();else start();
        });''',"Visible status immediately below Connect button")
start=main.read_text(encoding="utf-8")
a=start.index('    private void start() {')
b=start.index('    private void stop() {',a)
newstart='''    private void start() {
        if(v32Pending || active)return;
        final String ip=ipBox.getText().toString().trim();
        final String code=codeBox.getText().toString().trim().toUpperCase(Locale.ROOT);
        if(!ip.matches("[0-9.]{7,15}") || !code.matches("[A-F0-9]{10}")){
            v32Feedback.setText("CORRIGE IP Y CÓDIGO: copia el código NUEVO de 10 caracteres que aparece en el PC.");
            status.setText("No se ha intentado conectar: datos incompletos.");return;
        }
        try{
            InetAddress addr=InetAddress.getByName(ip);
            if(addr.getAddress().length!=4 || !addr.isSiteLocalAddress()){
                v32Feedback.setText("Esa IP no pertenece a una red privada. Usa la IPv4 local de tu PC.");return;
            }
        }catch(Exception e){v32Feedback.setText("IP incorrecta: comprueba puntos y números.");return;}
        ConnectivityManager cm=(ConnectivityManager)getSystemService(Context.CONNECTIVITY_SERVICE);
        if(findWifi(cm)==null){
            v32Feedback.setText("El móvil no está conectado por Wi-Fi. Conéctalo al mismo router que el PC.");return;
        }
        final int attempt=++v32Session;
        v32Pending=true;toggle.setEnabled(false);toggle.setText("COMPROBANDO CONEXIÓN...");
        v32Feedback.setText("Enviando comprobación al PC por Wi-Fi. Esperando confirmación real...");
        status.setText("COMPROBANDO: aún NO conectado.");
        new Thread(()->{
            try{
                WifiManager wifi=(WifiManager)getApplicationContext().getSystemService(Context.WIFI_SERVICE);
                WifiInfo info=wifi==null?null:wifi.getConnectionInfo();
                int signal=info==null?-90:Math.max(-130,Math.min(-10,info.getRssi()));
                int freq=info==null?0:Math.max(0,Math.min(7500,info.getFrequency()));
                int rate=info==null?0:Math.max(0,Math.min(20000,info.getLinkSpeed()));
                long delay=AetherTelemetryProbeV32.confirm(getApplicationContext(),ip,code,signal,freq,rate);
                runOnUiThread(()->{
                    if(attempt!=v32Session || isFinishing() || isDestroyed())return;
                    v32Pending=false;toggle.setEnabled(true);
                    pairedPcIp=ip;pairedToken=code;active=true;v32Missed=0;
                    toggle.setText("DESCONECTAR");
                    toggle.setBackground(rounded(0xFFFE8196,14));
                    ipBox.setEnabled(false);codeBox.setEnabled(false);
                    v32Feedback.setText("PC CONECTADO Y CONFIRMADO · Respuesta: "+delay+" ms. ✓");
                    status.setText("Conectado de verdad al PC. Recibirás comprobaciones periódicas.");
                    handler.postDelayed(tick,2500);
                });
            }catch(Exception ex){
                final String error=ex.getMessage()==null?ex.getClass().getSimpleName():ex.getMessage();
                runOnUiThread(()->{
                    if(attempt!=v32Session || isFinishing() || isDestroyed())return;
                    v32Pending=false;toggle.setEnabled(true);toggle.setText("CONECTAR Y MEDIR");
                    v32Feedback.setText("NO CONECTADO: "+error);
                    status.setText("Error de conexión V32: "+error);
                });
            }
        },"AETHER-V32-Pairing").start();
    }
'''
start=start[:a]+newstart+start[b:]
main.write_text(start,encoding="utf-8")
replace(main,
'        active = false; handler.removeCallbacks(tick);',
'''        ++v32Session;
        v32Pending=false;
        active = false; handler.removeCallbacks(tick);''',"Cancel stale asynchronous pairing")
replace(main,
'        status.setText("Desconectado. No se están enviando datos.");',
'''        status.setText("Desconectado. No se están enviando datos.");
        if(v32Feedback!=null)v32Feedback.setText("DESCONECTADO. Pulsa CONECTAR Y MEDIR para verificar la conexión de verdad.");''',"Android visible disconnected status")
text=main.read_text(encoding="utf-8")
a=text.index('    private void sendOnce() {')
b=text.index('    private void startCell()',a)
newsender='''    private void sendOnce() {
        if(!active || !v32Sending.compareAndSet(false,true))return;
        WifiManager wifi=(WifiManager)getApplicationContext().getSystemService(Context.WIFI_SERVICE);
        WifiInfo info=wifi==null?null:wifi.getConnectionInfo();
        final int rssi=info==null?-90:Math.max(-130,Math.min(-10,info.getRssi()));
        final int freq=info==null?0:Math.max(0,Math.min(7500,info.getFrequency()));
        final int rate=info==null?0:Math.max(0,Math.min(20000,info.getLinkSpeed()));
        stats.setText("Señal: "+rssi+" dBm\\\\nFrecuencia: "+freq+
            " MHz\\\\nEnlace del móvil: "+rate+" Mb/s (no es Internet)");
        final String ip=pairedPcIp,code=pairedToken;
        final int attempt=v32Session;
        new Thread(()->{
            try{
                final long rtt=AetherTelemetryProbeV32.confirm(getApplicationContext(),ip,code,rssi,freq,rate);
                runOnUiThread(()->{
                    if(!active||attempt!=v32Session)return;
                    v32Missed=0;
                    v32Feedback.setText("PC CONECTADO Y CONFIRMADO · "+rtt+" ms · Wi-Fi activo. ✓");
                    status.setText("Enlace AETHER V32 verificado; el PC respondió.");
                });
            }catch(Exception ex){
                final String error=ex.getMessage()==null?"Error de red":ex.getMessage();
                runOnUiThread(()->{
                    if(!active||attempt!=v32Session)return;
                    v32Missed++;
                    v32Feedback.setText("FALLO DE ENLACE ("+v32Missed+"): "+error);
                    status.setText("Sin respuesta confirmada del PC: "+error);
                });
            }finally{v32Sending.set(false);}
        },"AETHER-V32-Heartbeat").start();
    }

'''
text=text[:a]+newsender+text[b:]
main.write_text(text,encoding="utf-8")
shutil.copy2(ROOT/"V32_TelemetryProbe.java",main.parent/"AetherTelemetryProbeV32.java")
gradle=android/"app/build.gradle"
replace(gradle,"versionCode 22","versionCode 32","Android version code")
replace(gradle,"versionName '22.0'","versionName '32.0'","Android version name")
print("AETHER V32: Android ONLY CONNECTED after signed ACK; in-button status and heartbeat. Windows UDP 45721 responds to STPC32.")
