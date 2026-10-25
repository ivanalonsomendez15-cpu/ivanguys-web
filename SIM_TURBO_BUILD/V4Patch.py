# Applies V4 software changes after unpacking the established V3 source.
import pathlib
import shutil

def replace_required(data, old, new, label):
    if old not in data:
        raise SystemExit("V4 anchor missing: " + label)
    return data.replace(old, new)

base = pathlib.Path(__file__).resolve().parent
pc = pathlib.Path("PC_Windows/SIM_TURBO_PC.cs")
if pc.exists():
    text=pc.read_text(encoding="utf-8-sig")
    text=replace_required(text,'btnHybrid.Click += (s,e) => StartHybrid();',
         '''btnHybrid.Click += (s,e) => {
                if ((DateTime.Now-lastPhoneAt).TotalSeconds>10 || string.IsNullOrEmpty(phoneAddress)) {
                    MessageBox.Show("Empareja primero el móvil con CONECTAR Y MEDIR en Android. Activa PUENTE SIM. Abre la app y deja la pantalla encendida.", "SIM TURBO V4");
                    return;
                }
                new BondedDownloader(phoneAddress, token).ShowDialog(this);
            };''',"PC bonding click")
    text=replace_required(text,'"INICIAR WI-FI + SIM"','"SUMAR WIFI + SIM"',"PC button")
    text=replace_required(text,'"DETENER HÍBRIDO"','"RECUPERAR PROXY"',"PC safety")
    text=replace_required(text,'"HÍBRIDO: apagado · requiere SIM y APK activada"','"V4: suma real para archivos HTTPS con Range. No modifica el proxy."',"PC label")
    text=text.replace('ULTRA   V3.0','ULTRA   V4.0')
    # Previous versions exposed an unproven proxy mode. We remove that entrypoint in V4.
    pc.write_text(text,encoding="utf-8-sig")
    shutil.copyfile(base/"V4_BondedDownloader.cs","PC_Windows/V4_BondedDownloader.cs")
    print("PC V4 downloader enabled; old hybrid proxy disabled.")

app=pathlib.Path("Android/app/src/main/java/com/simturbopc/ultra/MainActivity.java")
if app.exists():
    text=app.read_text(encoding="utf-8")
    text=replace_required(text,'private ServerSocket cellServer;',
         'private ServerSocket cellServer;\n    private BondedServer bondedServer;',"Android field")
    text=replace_required(text,'        new Thread(()->{\n            try(ServerSocket server=new ServerSocket()) {',
         '''        bondedServer = new BondedServer(pairedPcIp, pairedToken,
            () -> cellNetwork,
            line -> { if(cellularOn)cellStatus.setText(line); });
        bondedServer.start();
        new Thread(()->{
            try(ServerSocket server=new ServerSocket()) {''',"Android bond start")
    text=replace_required(text,'        cellularOn=false;cellNetwork=null;',
        '''        if(bondedServer!=null) {bondedServer.stop();bondedServer=null;}
        cellularOn=false;cellNetwork=null;''',"Android stop bond")
    text=text.replace('HYPERLINK ANDROID V3','HYPERLINK ANDROID V4')
    text=text.replace('MODO 2 · PUENTE DE DATOS SIM (EXPERIMENTAL)',
                      'MODO 2 · SIM REAL PARA SUMAR DESCARGAS')
    text=text.replace('y, si autorizas el modo SIM, puede retransmitir conexiones HTTPS a través de los datos móviles.',
                      'y, si activas la SIM, descarga fragmentos HTTPS que el PC reúne con otros descargados por Wi-Fi.')
    text=text.replace('La SIM requiere autorización, gasta datos y no garantiza suma perfecta de velocidad.',
                      'La SIM consume datos. La suma V4 sirve para archivos HTTPS con rangos, no acelera todos los juegos ni Windows.')
    app.write_text(text,encoding="utf-8")
    shutil.copyfile(base/"V4_BondedServer.java",app.parent/"BondedServer.java")
    gradle=pathlib.Path("Android/app/build.gradle")
    g=gradle.read_text(encoding="utf-8").replace("versionCode 2","versionCode 4").replace("versionName '2.0'","versionName '4.0'")
    gradle.write_text(g,encoding="utf-8")
    print("Android V4 cellular Range relay enabled.")
