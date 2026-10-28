#!/usr/bin/env python3
"""Package all editable SIM TURBO V21 PC / Android / Cloudflare / AI sources."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import base64, io, shutil, subprocess, sys, tarfile, tempfile, hashlib
BASE=Path(__file__).resolve().parent
ROOT=BASE.parent
NAME="SIM_TURBO_PC_ULTRA_V45_PROYECTO_COMPLETO"
SRC=["SIM_TURBO_PC.cs","V4_BondedDownloader.cs","V5_PerformanceCenter.cs","V6_HyperAdaptive.cs","V7_PulseRoute.cs","V8_AetherDownloader.cs","V8_AetherAutopilot.cs","V9_Aether80Lab.cs","V9_Radar.cs","V9_ResearchLab.cs","V10_InnovationLab.cs","V10_IdeaEngine.cs","V11_SystemClinic.cs","V11_AndroidGamepad.cs","V12_LanDiscovery.cs","V12_SuperResolution.cs","V13_NetworkLab.cs","V14_LinkAudit.cs","V15_PerformanceProfiler.cs","V16_ExperimentLab.cs","V17_SecurePacket.cs","V17_GraphicsAdvisor.cs","V18_StorageClinic.cs","V19_GameProcessClinic.cs","V20_NetworkStability.cs","V21_AiSuperResolution.cs","V22_Settings.cs","V23_LiveSupersampling.cs","V24_LiveAiWifi.cs","V25_LiveAiWifi.cs","V26_LiveAiWifi.cs","V26_WifiRadio.cs","V27_LiveAiWifi.cs","V27_WifiRadio.cs","V28_LiveAiWifi.cs","V28_WifiSurvey.cs","V29_LiveAiWifi.cs","V29_WifiSurvey.cs","V30_LiveAiWifi.cs","V30_WifiBursts.cs","V31_LiveAiWifi.cs","V32_TelemetryAck.cs","V34_WifiBaseline.cs","V34_SmoothDisplay.cs","V35_InterleavedWifi.cs","V36_WifiRoute.cs","V37_WifiRouteGuard.cs","V38_WifiRouteMonitor.cs","V39_WifiRouteMonitor.cs","V40_WifiRouteMonitor.cs","V41_WifiRouteMonitor.cs","V42_WifiRouteMonitor.cs","V43_WifiRouteMonitor.cs","V44_WifiRouteMonitor.cs","V45_WifiRouteMonitor.cs"]
PATCHES=["V%dPatch.py"%n for n in range(4,33)]+["V34Patch.py","V35Patch.py","V36Patch.py","V37Patch.py","V38Patch.py","V39Patch.py","V40Patch.py","V41Patch.py","V42Patch.py","V43Patch.py","V44Patch.py","V45Patch.py"]
def unpack(archive,dst):
    data=base64.b64decode(archive.read_text(encoding="utf-8").strip())
    with tarfile.open(fileobj=io.BytesIO(data),mode="r:xz") as t:
        for m in t.getmembers():
            p=Path(m.name)
            if p.is_absolute() or ".." in p.parts or m.issym() or m.islnk():raise ValueError("Unsafe source archive")
        t.extractall(dst,filter="data")
def fix_original_pc(pc):
    path=pc/"SIM_TURBO_PC.cs"
    code=path.read_text(encoding="utf-8-sig")
    old='            Append("No se necesitan permisos de administrador. No se comparte la SIM.");'
    tls='string url="https://speed.cloudflare.com/'
    assert code.count(old)==1 and code.count(tls)==1
    code=code.replace(old,old+"\n            foreach (Panel card in Controls.OfType<Panel>()) card.SendToBack();")
    code=code.replace(tls,"ServicePointManager.SecurityProtocol |= SecurityProtocolType.Tls12;\n                "+tls)
    code=code.replace("ULTRA   V3.0","ULTRA   V3.2")
    path.write_text(code,encoding="utf-8-sig")
def visual_studio(pc):
    guid="{DA87C75C-37C2-49CE-9BD6-3D1B0ED4A970}"
    compile="\n".join('    <Compile Include="%s" />'%n for n in SRC)
    csproj='''<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="15.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
<PropertyGroup><Configuration Condition=" '$(Configuration)' == '' ">Debug</Configuration><Platform Condition=" '$(Platform)' == '' ">AnyCPU</Platform><ProjectGuid>%s</ProjectGuid><OutputType>WinExe</OutputType><RootNamespace>SimTurboPC</RootNamespace><AssemblyName>SIM_TURBO_PC_ULTRA_V45</AssemblyName><TargetFrameworkVersion>v4.8</TargetFrameworkVersion><FileAlignment>512</FileAlignment></PropertyGroup>
<PropertyGroup Condition=" '$(Configuration)|$(Platform)' == 'Debug|AnyCPU' "><DebugSymbols>true</DebugSymbols><DebugType>full</DebugType><Optimize>false</Optimize><OutputPath>bin\Debug\</OutputPath><DefineConstants>DEBUG;TRACE</DefineConstants><WarningLevel>4</WarningLevel></PropertyGroup>
<PropertyGroup Condition=" '$(Configuration)|$(Platform)' == 'Release|AnyCPU' "><DebugType>pdbonly</DebugType><Optimize>true</Optimize><OutputPath>bin\Release\</OutputPath><DefineConstants>TRACE</DefineConstants><WarningLevel>4</WarningLevel></PropertyGroup>
<ItemGroup><Reference Include="System" /><Reference Include="System.Core" /><Reference Include="System.Drawing" /><Reference Include="System.Windows.Forms" /><Reference Include="System.Management" /></ItemGroup>
<ItemGroup>
%s
</ItemGroup><Import Project="$(MSBuildToolsPath)\Microsoft.CSharp.targets" /></Project>
'''%(guid,compile)
    (pc/"SIM_TURBO_PC_ULTRA.csproj").write_text(csproj,encoding="utf-8")
    sln='''Microsoft Visual Studio Solution File, Format Version 12.00
# Visual Studio Version 17
VisualStudioVersion = 17.0.31903.59
MinimumVisualStudioVersion = 10.0.40219.1
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "SIM_TURBO_PC_ULTRA", "SIM_TURBO_PC_ULTRA.csproj", "{DA87C75C-37C2-49CE-9BD6-3D1B0ED4A970}"
EndProject
Global
GlobalSection(SolutionConfigurationPlatforms) = preSolution
Debug|Any CPU = Debug|Any CPU
Release|Any CPU = Release|Any CPU
EndGlobalSection
GlobalSection(ProjectConfigurationPlatforms) = postSolution
{DA87C75C-37C2-49CE-9BD6-3D1B0ED4A970}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
{DA87C75C-37C2-49CE-9BD6-3D1B0ED4A970}.Debug|Any CPU.Build.0 = Debug|Any CPU
{DA87C75C-37C2-49CE-9BD6-3D1B0ED4A970}.Release|Any CPU.ActiveCfg = Release|Any CPU
{DA87C75C-37C2-49CE-9BD6-3D1B0ED4A970}.Release|Any CPU.Build.0 = Release|Any CPU
EndGlobalSection
EndGlobal
'''
    (pc/"SIM_TURBO_PC_ULTRA.sln").write_text(sln,encoding="utf-8")
def main():
    with tempfile.TemporaryDirectory() as tmp:
        project=Path(tmp)/NAME
        project.mkdir()
        unpack(BASE/"Windows_source.tar.xz.b64",project)
        unpack(BASE/"Android_source.tar.xz.b64",project)
        pc=project/"PC_Windows"
        android=project/"Android"
        assert pc.is_dir() and android.is_dir()
        fix_original_pc(pc)
        for patch in PATCHES:
            subprocess.run([sys.executable,str(BASE/patch)],cwd=project,check=True)
        for fname in SRC:assert (pc/fname).is_file(),fname
        assert "long-sky-d531" in (pc/"V10_InnovationLab.cs").read_text(encoding="utf-8-sig")
        assert (android/"app/src/main/java/com/simturbopc/ultra/BondedServer.java").is_file()
        visual_studio(pc)
        ai=project/"IA_SUPERRESOLUCION"
        ai.mkdir()
        model=base64.b64decode((BASE/"V21_FSRCNN_x2.pb.b64").read_text(encoding="utf-8").strip(),validate=True)
        if len(model)!=38973:raise ValueError("V21: modelo FSRCNN incompleto")
        (ai/"FSRCNN_x2.pb").write_bytes(model)
        shutil.copy2(BASE/"V21_IA_4K.py",ai/"AETHER_IA_4K.py")
        shutil.copy2(BASE/"V31_IA_LIVE.py",ai/"AETHER_IA_DIRECTO.py")
        subprocess.run([sys.executable,str(BASE/"V33OverlayFix.py"),str(ai/"AETHER_IA_DIRECTO.py")],check=True)
        shutil.copy2(BASE/"V21_APACHE_LICENSE.txt",ai/"LICENSE_MODELO_APACHE_2.0.txt")
        (ai/"requirements.txt").write_text("opencv-contrib-python==4.11.0.86\\nnumpy>=1.23,<3\\n",encoding="utf-8")
        (ai/"INSTRUCCIONES.txt").write_text(
          "AETHER IA 4K V21 - modelo neuronal FSRCNN 2x preentrenado.\\n"
          "1. Instalar Python 3.11 o 3.12.\\n"
          "2. Ejecutar: py -m pip install opencv-contrib-python==4.11.0.86\\n"
          "3. Ejecutar: py AETHER_IA_4K.py\\n"
          "CLI: py AETHER_IA_4K.py --input foto1080p.png --output foto4k.png\\n"
          "Test: py AETHER_IA_4K.py --self-test\\n"
          "Pantalla 1080p nunca equivale a panel fisico 4K. No mejora FPS/juegos en vivo.\\n",
          encoding="utf-8")
        cloud=project/"Cloudflare"
        cloud.mkdir()
        shutil.copy2(ROOT/"AETHER_CLOUDFLARE/aether-worker.js",cloud/"aether-worker.js")
        (cloud/"region_node.py").write_text("#!/usr/bin/env python3\n\"\"\"AETHER reference regional health node: no VPN, DNS, proxy, or speed boost.\"\"\"\nimport json, os, time\nfrom datetime import datetime, timezone\nfrom http.server import BaseHTTPRequestHandler, ThreadingHTTPServer\nHOST=os.environ.get(\"AETHER_HOST\",\"127.0.0.1\")\nPORT=int(os.environ.get(\"AETHER_PORT\",\"8787\"))\nNODE_ID=os.environ.get(\"AETHER_NODE_ID\",\"LOCAL-TEST\")\nREGION=os.environ.get(\"AETHER_REGION\",\"no verificada\")\nCITY=os.environ.get(\"AETHER_CITY\",\"no verificada\")\nSTART=time.monotonic()\nclass Handler(BaseHTTPRequestHandler):\n    def do_GET(self):\n        if self.path.split(\"?\",1)[0] not in (\"/\",\"/health\"):\n            self.send_error(404,\"No encontrado\");return\n        data={\"service\":\"AETHER diagnostic node\",\"online\":True,\"node_id\":NODE_ID,\n              \"declared_city\":CITY,\"declared_region\":REGION,\n              \"physical_location_verified\":False,\n              \"uptime_seconds\":round(time.monotonic()-START,1),\n              \"time_utc\":datetime.now(timezone.utc).isoformat(),\n              \"accelerator\":False,\"proxy\":False,\"public_dns\":False}\n        body=json.dumps(data,ensure_ascii=False).encode(\"utf-8\")\n        self.send_response(200)\n        self.send_header(\"Content-Type\",\"application/json; charset=utf-8\")\n        self.send_header(\"Cache-Control\",\"no-store\")\n        self.send_header(\"Content-Length\",str(len(body)))\n        self.end_headers()\n        self.wfile.write(body)\n    def log_message(self,*args): pass\nif __name__==\"__main__\":\n    print(\"AETHER diagnostic service at http://%s:%d/health\"%(HOST,PORT))\n    ThreadingHTTPServer((HOST,PORT),Handler).serve_forever()\n",encoding="utf-8")
        (cloud/"nodes.json").write_text("{\n  \"note\": \"Target locations only; no host is verified or running in these regions\",\n  \"regionalServersVerified\": 0,\n  \"nodes\": [\n    {\n      \"id\": \"AST-OVI\",\n      \"region\": \"Asturias\",\n      \"city\": \"Oviedo\",\n      \"priority\": 1,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    },\n    {\n      \"id\": \"MAD\",\n      \"region\": \"Madrid\",\n      \"city\": \"Madrid\",\n      \"priority\": 2,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    },\n    {\n      \"id\": \"AND\",\n      \"region\": \"Andalucía\",\n      \"city\": \"Sevilla/Málaga\",\n      \"priority\": 2,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    },\n    {\n      \"id\": \"CAT\",\n      \"region\": \"Cataluña\",\n      \"city\": \"Barcelona\",\n      \"priority\": 2,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    },\n    {\n      \"id\": \"CAN\",\n      \"region\": \"Islas Canarias\",\n      \"city\": \"Las Palmas/Tenerife\",\n      \"priority\": 2,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    },\n    {\n      \"id\": \"BAL\",\n      \"region\": \"Islas Baleares\",\n      \"city\": \"Palma\",\n      \"priority\": 2,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    },\n    {\n      \"id\": \"MEX\",\n      \"region\": \"México\",\n      \"city\": \"Ciudad de México\",\n      \"priority\": 2,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    },\n    {\n      \"id\": \"COL\",\n      \"region\": \"Colombia\",\n      \"city\": \"Bogotá\",\n      \"priority\": 2,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    },\n    {\n      \"id\": \"ARG\",\n      \"region\": \"Argentina\",\n      \"city\": \"Buenos Aires\",\n      \"priority\": 2,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    },\n    {\n      \"id\": \"PER\",\n      \"region\": \"Perú\",\n      \"city\": \"Lima\",\n      \"priority\": 2,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    },\n    {\n      \"id\": \"VEN\",\n      \"region\": \"Venezuela\",\n      \"city\": \"Caracas\",\n      \"priority\": 2,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    },\n    {\n      \"id\": \"BOL\",\n      \"region\": \"Bolivia\",\n      \"city\": \"La Paz\",\n      \"priority\": 2,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    },\n    {\n      \"id\": \"URU\",\n      \"region\": \"Uruguay\",\n      \"city\": \"Montevideo\",\n      \"priority\": 2,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    },\n    {\n      \"id\": \"CHI\",\n      \"region\": \"Chile\",\n      \"city\": \"Santiago\",\n      \"priority\": 2,\n      \"online\": false,\n      \"endpoint\": null,\n      \"deployed\": false\n    }\n  ]\n}",encoding="utf-8")
        (project/"AETHER_generador_ideas.py").write_text("#!/usr/bin/env python3\n\"\"\"Generate a deterministic range from 1,000,000,000 combinatorial ideas.\nThese are templates, NOT independently researched inventions.\n\"\"\"\nimport argparse\nfrom pathlib import Path\nAXES=[\n[\"Wi-Fi\",\"Ethernet\",\"SIM 4G/5G\",\"router\",\"latencia\",\"subida\",\"descarga\",\"FPS\",\"seguridad\",\"diagnóstico\"],\n[\"en casa\",\"en videojuegos\",\"en streaming\",\"en videollamadas\",\"en portátil\",\"en escritorio\",\"en móviles\",\"en redes mixtas\",\"en LAN\",\"en servidor remoto\"],\n[\"detectar fallos\",\"medir patrones\",\"predecir congestión\",\"comparar rutas\",\"detectar regresiones\",\"medir capacidad\",\"registrar evidencias\",\"controlar carga\",\"detectar interrupciones\",\"estimar estabilidad\"],\n[\"historial\",\"muestras en vivo\",\"pruebas A/B\",\"simulación\",\"auditoría\",\"métricas agregadas\",\"muestreo limitado\",\"repetición de pruebas\",\"reglas configurables\",\"comprobación cruzada\"],\n[\"comparación estadística\",\"umbral adaptativo\",\"modelo probabilístico\",\"interpolación\",\"colas dinámicas\",\"detección de anomalías\",\"modelo lineal\",\"mediana robusta\",\"clasificador sencillo\",\"priorización heurística\"],\n[\"sin tocar Windows\",\"con intervención manual\",\"con confirmación\",\"en modo lectura\",\"con deshacer\",\"solo en LAN\",\"con datos mínimos\",\"con protección de datos\",\"en modo experimental\",\"con apagado inmediato\"],\n[\"ping\",\"jitter\",\"pérdida\",\"Mbps\",\"MB/s\",\"FPS\",\"latencia p95\",\"uso de CPU\",\"uso de memoria\",\"estabilidad horaria\"],\n[\"sin permisos elevados\",\"con registros locales\",\"sin enviar contraseñas\",\"con cifrado\",\"con controles visibles\",\"con límite de consumo\",\"con revisión de resultados\",\"con historial reversible\",\"con privacidad por diseño\",\"con modo offline\"],\n[\"panel de control\",\"mapa de calor\",\"alertas\",\"informe\",\"gráfico\",\"tabla comparativa\",\"línea temporal\",\"simulador\",\"panel de pruebas\",\"asistente técnico\"]]\ndef idea(n):\n    if n<0 or n>=1_000_000_000:raise ValueError(\"Fuera de rango\")\n    selected=[\"\"]*9\n    for i in range(8,-1,-1):\n        selected[i]=AXES[i][n%10]\n        n//=10\n    return \"Herramienta para %s %s: %s con %s y %s, operando %s, midiendo %s, protegiendo datos %s y mostrando %s.\"%tuple(selected)\nif __name__==\"__main__\":\n    p=argparse.ArgumentParser()\n    p.add_argument(\"--inicio\",type=int,default=0)\n    p.add_argument(\"--cantidad\",type=int,default=1000)\n    p.add_argument(\"--salida\",default=\"ideas_AETHER.txt\")\n    a=p.parse_args()\n    if not 0<=a.inicio<1_000_000_000 or not 1<=a.cantidad<=100_000 or a.inicio+a.cantidad>1_000_000_000:\n        p.error(\"Usa --cantidad entre 1 y 100000, sin superar el índice 999999999\")\n    with Path(a.salida).open(\"w\",encoding=\"utf-8\") as f:\n        f.write(\"Plantillas combinatorias, sin garantías ni validación\\n\")\n        for n in range(a.inicio,a.inicio+a.cantidad):\n            f.write(\"%09d: %s\\n\"%(n,idea(n)))\n    print(\"Generado:\",a.salida)\n",encoding="utf-8")
        assert "/api/health" in (cloud/"aether-worker.js").read_text()
        assert "/api/nodes" in (cloud/"aether-worker.js").read_text()
        previous=project/"scripts_originales_V4_a_V45"
        previous.mkdir()
        for item in PATCHES:shutil.copy2(BASE/item,previous/item)
        for ext in ("*.cs","*.java"):
            for src in BASE.glob(ext):shutil.copy2(src,previous/src.name)
        workflow=project/".github/workflows"
        workflow.mkdir(parents=True)
        shutil.copy2(ROOT/".github/workflows/sim-turbo-compilar.yml",workflow/"sim-turbo-compilar.yml")
        readme="""SIM TURBO PC ULTRA V45 — CÓDIGO FUENTE COMPLETO, SIN EJECUTABLES
==============================================================
PC_Windows/: programa C# WinForms, V4-V45 aplicadas; herramientas Wi-Fi y 200Hz sin filtro lento; abre la solución .sln
en Visual Studio (con .NET Framework 4.8 Developer Pack).
Android/: proyecto Java Gradle, con BondedServer V4 y mando V11;
monitor visible, perfiles locales, acceso de uso opcional y detección PC V12.
V13: informe de capacidades de red del móvil, sin descarga ni ajustes.
Abre en Android Studio
(JDK 17, Gradle 8.9, SDK Android API 35).
Cloudflare/aether-worker.js: código fuente del diagnóstico HTTPS.
scripts_originales_V4_a_V45/: parches originales y módulos de cada versión.
.github/workflows/: compilación automática de Windows y Android.

Para compilar Windows desde esta carpeta sin usar el instalador:
- Abrir la solución PC_Windows/SIM_TURBO_PC_ULTRA.sln, compilar Release.
- Alternativamente abrir PowerShell aquí y ejecutar compilar_windows.ps1.
Para Android usar Android Studio y ensamblar app:assembleDebug.
Para Cloudflare pegar Cloudflare/aether-worker.js en el editor del Worker.

El código Windows apunta a la URL long-sky-d531...workers.dev proporcionada
por el usuario. No se ha confirmado externamente que responda en producción.
El código Cloudflare se preparó como versión editable; no se descargó
directamente del panel del usuario, por lo que podría diferir de allí.

RESTRICCIONES REALES: Bonding solo para descargas compatibles con Range.
Cloudflare no permite elegir forzosamente Oviedo como ubicación física.
Los catorce nodos regionales son objetivos de despliegue PENDIENTES.
No se prometen aumentos de megas, FPS ni pings.
Incluye un servicio regional de referencia ejecutable y el generador de ideas.
Los nodos regionales no están desplegados y las ideas son combinatorias.
V12: monitor Android Foreground Service de bajo consumo con notificación,
perfiles por paquete y detección de juego registrado con permiso voluntario,
descubrimiento PC LAN (solo con receptor abierto), CPU/RAM/GPU con código,
exportador Windows PNG 3840x2160 por interpolación bicúbica, NO IA.
Pantalla 1080p sigue siendo 1080p. Sin garantías de FPS ni Mbps.
V13: panel Windows de jitter/router y descarga HTTP a demanda limitada a 15 MiB;
informe Android de capacidad estimada sin consumir datos de prueba.
V14: auditoría Windows de enlaces Ethernet/Wi-Fi y velocidades negociadas,
con informe TXT de solo lectura. Android: perfiles de teclas por juego
para el mando LAN (general, Minecraft, Roblox, carreras), guardado local,
liberación segura de teclas al cambiar perfil. No emula XInput.
V15: perfilador Windows de CPU/RAM/procesos en vivo, CSV y tres perfiles de consejos.
Android V15: stick WASD con diagonales, liberación de teclas y mediana RTT PC LAN.
V16: comparador A/B de 3 muestras antes y despues de Mbps/latencia, FPS introducidos manualmente y CSV. Android: informe local de RAM, CPU, batería, red y perfil por juego; sin permisos nuevos ni cambios de otros juegos.
V17: autenticación HMAC-SHA256 del mando Android-PC y de la consulta de capacidades LAN, sesión aleatoria y protección antirrepetición. HMAC no cifra. Requiere PC y Android V17. Nuevo asesor gráfico de solo lectura Windows: GPU, pantalla, RAM y perfiles. DLSS/FSR/DSR requieren compatibilidad; 1080p nunca es 4K nativo.
V18: Windows: auditoría de espacio en discos e inicio de sesión (solo nombres). Android: monitor con cadencia 20-60 s según batería, con notificación visible y sin ejecución oculta.
V19: Windows: diagnóstico CPU/RAM por proceso seleccionado, sin estimar FPS. Android: detección voluntaria de juego registrado y selección de perfil del mando, sin modificar otros juegos.
Cloudflare permanece sin servidores regionales físicamente verificados.
V20: estabilidad ICMP Windows; diseños Android de mando por juego guardados.
V21: IA neuronal auténtica FSRCNN x2 para archivos de imagen. Python/OpenCV Contrib necesarios.
    En Windows: py -m pip install opencv-contrib-python==4.11.0.86
    Ejecuta: py IA_SUPERRESOLUCION\\AETHER_IA_4K.py (GUI) o prueba con --self-test.
    Si es 1920x1080 la salida es PNG 3840x2160. No 4K nativo en pantalla 1080p.
    No mejora juegos en tiempo real; la IA solo procesa imágenes fijas.
V22: Windows recuerda automáticamente preferencias del piloto, juegos, laboratorio y pestaña;
    Android mantiene perfiles de juego y manda y permite exportar/importar copia JSON.
    Se guardan localmente sin navegador; el Worker no es una base de datos y la nube no está activa.
    La monitorización NO se reactiva automáticamente tras reiniciar.
V23: Windows 4K EN DIRECTO con DSR 4x, DLDSR AI 2.25x, modes permitidos por driver,
    confirmacion en 20 segundos y recuperacion de resolucion anterior al cerrar.
    Resolucion 4K virtual no equivale a 4K nativo del panel.
    Android permanece V22 (perfiles y copias). Se incluye IA de fotos V21 por separado.
V24: IA FSRCNN x2 sobre fotogramas en directo sin cambio de resolucion de Windows.\nV27: foco turbo 320x180 y foco auto que adapta el recorte a la latencia medida. Wi-Fi RX/TX PHY, banda explicita.\nV28: foco cursor 480x270, sigue el raton en preview, escaneo anonimo de canales Wi-Fi.\nV29: FOCO ECO cache de imagenes estaticas con refresco cada 2 s; canales Wi-Fi 1/6/11 orientativos.\nV30: FOCO MOVIMIENTO usa miniatura de pantalla para centrar recorte IA; latencia p95 y hasta UI. Wi-Fi rachas ICMP.\nV31: CLARIDAD GLOBAL 1080P con contraste de bordes (NO IA, NO 4K fisico), overlay experimental y boton minimizar. Wi-Fi 16 muestras por destino.\nV32: CONECTAR Y MEDIR recibe ACK autenticado del PC. Errores junto al boton. Requiere V32 en ambos dispositivos. Desinstalar Android puede borrar datos.\nV33: fix Tk conflict in fullscreen overlay.\nV35: muestras LAN/WAN alternadas; ICMP filtrado no prueba fallo Wi-Fi o DNS.\nV36: identifica si la ruta IPv4 WAN elegida pertenece al Wi-Fi; alerta por Ethernet/VPN. No prueba la ruta ICMP.\nV37: omite sondas LAN/WAN de rutas no atribuibles al Wi-Fi; evita clasificaciones falsas y sondas WAN innecesarias.\nV38: comprueba rutas cada cuatro muestras y al finalizar; aborta la interpretacion si cambian Wi-Fi, WAN o tunel.\nV39: comprueba tambien que el enlace Wi-Fi sigue activo y que gateway e IPv4 asignadas no cambian durante la prueba; descarta conclusiones si hay deriva.\nV42: suprime por separado sondas ICMP de un destino tras ocho intentos sin respuesta, conservando 16 muestras del otro destino; diagnostico parcial sin inventar perdida.\nV43: exige ocho parejas LAN/WAN con respuesta ICMP en ambos destinos para atribuir diferencias de latencia; con menos, informa inconcluso. No cambia la red.
V44: clasifica la latencia usando SOLO las parejas donde ambos destinos responden. No atribuye picos de muestras sin pareja al Wi-Fi ni al exterior. No altera la red.\nV45: exige al menos 12/16 parejas válidas y 5 en cada mitad para atribuir latencia; si no, informe inconcluso.\n\nV25: tiempo de captura e inferencia, limite de CPU, benchmark 1080p, Wi-Fi p95/DNS y exportacion manual.
    Vista previa y overlay a pantalla completa EXPERIMENTAL con exclusion de captura en Windows.
    El pipeline IA calcula 4K virtual y reduce a 1080p, sin 4K fisico.
    Mejoras Wi-Fi: analisis del router e Internet con RTT/jitter/perdidas y 12 muestras.
    Android permanece V22; nada se sube a Cloudflare.
No incluye claves privadas, APK ni ejecutables.
"""
        (project/"LEEME.txt").write_text(readme,encoding="utf-8")
        shutil.copy2(BASE/"CHANGELOG_V13.md",project/"CHANGELOG_V13.md")
        shutil.copy2(BASE/"CHANGELOG_V14.md",project/"CHANGELOG_V14.md")
        shutil.copy2(BASE/"CHANGELOG_V15.md",project/"CHANGELOG_V15.md")
        shutil.copy2(BASE/"CHANGELOG_V16.md",project/"CHANGELOG_V16.md")
        shutil.copy2(BASE/"CHANGELOG_V17.md",project/"CHANGELOG_V17.md")
        shutil.copy2(BASE/"CHANGELOG_V18.md",project/"CHANGELOG_V18.md")
        shutil.copy2(BASE/"CHANGELOG_V19.md",project/"CHANGELOG_V19.md")
        shutil.copy2(BASE/"CHANGELOG_V20.md",project/"CHANGELOG_V20.md")
        shutil.copy2(BASE/"CHANGELOG_V21.md",project/"CHANGELOG_V21.md")
        shutil.copy2(BASE/"CHANGELOG_V22.md",project/"CHANGELOG_V22.md")
        shutil.copy2(BASE/"CHANGELOG_V23.md",project/"CHANGELOG_V23.md")
        shutil.copy2(BASE/"CHANGELOG_V24.md",project/"CHANGELOG_V24.md")
        shutil.copy2(BASE/"CHANGELOG_V25.md",project/"CHANGELOG_V25.md")
        shutil.copy2(BASE/"CHANGELOG_V26.md",project/"CHANGELOG_V26.md")
        shutil.copy2(BASE/"CHANGELOG_V27.md",project/"CHANGELOG_V27.md")
        shutil.copy2(BASE/"CHANGELOG_V28.md",project/"CHANGELOG_V28.md")
        shutil.copy2(BASE/"CHANGELOG_V29.md",project/"CHANGELOG_V29.md")
        shutil.copy2(BASE/"CHANGELOG_V30.md",project/"CHANGELOG_V30.md")
        shutil.copy2(BASE/"CHANGELOG_V31.md",project/"CHANGELOG_V31.md")
        shutil.copy2(BASE/"CHANGELOG_V32.md",project/"CHANGELOG_V32.md")
        shutil.copy2(BASE/"CHANGELOG_V33.md",project/"CHANGELOG_V33.md")
        shutil.copy2(BASE/"CHANGELOG_V34.md",project/"CHANGELOG_V34.md")
        shutil.copy2(BASE/"CHANGELOG_V35.md",project/"CHANGELOG_V35.md")
        shutil.copy2(BASE/"CHANGELOG_V36.md",project/"CHANGELOG_V36.md")
        shutil.copy2(BASE/"CHANGELOG_V37.md",project/"CHANGELOG_V37.md")
        shutil.copy2(BASE/"CHANGELOG_V38.md",project/"CHANGELOG_V38.md")
        shutil.copy2(BASE/"CHANGELOG_V41.md",project/"CHANGELOG_V41.md")
        shutil.copy2(BASE/"CHANGELOG_V42.md",project/"CHANGELOG_V42.md")
        shutil.copy2(BASE/"CHANGELOG_V43.md",project/"CHANGELOG_V43.md")
        shutil.copy2(BASE/"CHANGELOG_V44.md",project/"CHANGELOG_V44.md")
        shutil.copy2(BASE/"CHANGELOG_V45.md",project/"CHANGELOG_V45.md")
        powershell='''$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "PC_Windows")
$csc = "$env:WINDIR\Microsoft.NET\Framework64\v4.0.30319\csc.exe"
if (!(Test-Path $csc)) { throw "Falta el compilador csc.exe de .NET Framework" }
$fuentes = (Get-ChildItem -Filter "*.cs" | Sort-Object Name).Name
& $csc /nologo /optimize+ /target:winexe /out:SIM_TURBO_PC_ULTRA_V45.exe /r:System.dll /r:System.Core.dll /r:System.Drawing.dll /r:System.Windows.Forms.dll /r:System.Management.dll $fuentes
if ($LASTEXITCODE -ne 0) { throw "Error compilando C#" }
Write-Host "Compilación completa"
'''
        (project/"compilar_windows.ps1").write_text(powershell,encoding="utf-8")
        # Reproducible file-by-file hashes inside the editable source package.
        hashes=[]
        for f in sorted(project.rglob("*")):
            if f.is_file():
                hashes.append(hashlib.sha256(f.read_bytes()).hexdigest()+"  "+f.relative_to(project).as_posix())
        (project/"SHA256SUMS.txt").write_text("\n".join(hashes)+"\n",encoding="utf-8")
        assert len(hashes)>=40
        dest=ROOT/"EXPORTS"
        dest.mkdir(exist_ok=True)
        zip_path=dest/(NAME+".zip")
        with ZipFile(zip_path,"w",compression=ZIP_DEFLATED,compresslevel=9) as z:
            for file in sorted(project.rglob("*")):
                if file.is_file():z.write(file,file.relative_to(project.parent).as_posix())
        with ZipFile(zip_path) as z:
            assert z.testzip() is None
            entries=z.namelist()
            assert any(n.endswith("PC_Windows/SIM_TURBO_PC_ULTRA.sln") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/BondedServer.java") for n in entries)
            assert any(n.endswith("Cloudflare/aether-worker.js") for n in entries)
            assert any(n.endswith("Cloudflare/region_node.py") for n in entries)
            assert any(n.endswith("AETHER_generador_ideas.py") for n in entries)
            assert any(n.endswith("SHA256SUMS.txt") for n in entries)
            assert any(n.endswith("PC_Windows/V12_LanDiscovery.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V12_SuperResolution.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V13_NetworkLab.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V14_LinkAudit.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V15_PerformanceProfiler.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V16_ExperimentLab.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V17_GraphicsAdvisor.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V17_SecurePacket.cs") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/SecurePacketV17.java") for n in entries)
            assert any(n.endswith("CHANGELOG_V17.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V18.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V19.md") for n in entries)
            assert any(n.endswith("PC_Windows/V19_GameProcessClinic.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V20_NetworkStability.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V21_AiSuperResolution.cs") for n in entries)
            assert any(n.endswith("IA_SUPERRESOLUCION/FSRCNN_x2.pb") for n in entries)
            assert any(n.endswith("IA_SUPERRESOLUCION/AETHER_IA_4K.py") for n in entries)
            assert any(n.endswith("CHANGELOG_V20.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V21.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V22.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V23.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V24.md") for n in entries)
            assert any(n.endswith("PC_Windows/V24_LiveAiWifi.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V25_LiveAiWifi.cs") for n in entries)
            assert any(n.endswith("CHANGELOG_V25.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V26.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V28.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V29.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V30.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V31.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V32.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V33.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V34.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V35.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V36.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V37.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V38.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V41.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V42.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V44.md") for n in entries)
            assert any(n.endswith("CHANGELOG_V45.md") for n in entries)
            assert any(n.endswith("PC_Windows/V34_WifiBaseline.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V35_InterleavedWifi.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V36_WifiRoute.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V37_WifiRouteGuard.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V38_WifiRouteMonitor.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V39_WifiRouteMonitor.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V41_WifiRouteMonitor.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V42_WifiRouteMonitor.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V44_WifiRouteMonitor.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V45_WifiRouteMonitor.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V34_SmoothDisplay.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V32_TelemetryAck.cs") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/AetherTelemetryProbeV32.java") for n in entries)
            assert any(n.endswith("PC_Windows/V31_LiveAiWifi.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V30_LiveAiWifi.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V30_WifiBursts.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V29_LiveAiWifi.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V29_WifiSurvey.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V28_LiveAiWifi.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V28_WifiSurvey.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V26_LiveAiWifi.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V26_WifiRadio.cs") for n in entries)
            assert any(n.endswith("IA_SUPERRESOLUCION/AETHER_IA_DIRECTO.py") for n in entries)
            assert any(n.endswith("PC_Windows/V23_LiveSupersampling.cs") for n in entries)
            assert any(n.endswith("PC_Windows/V22_Settings.cs") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/AetherBackupV22.java") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/GameAutoProfileV19.java") for n in entries)
            assert any(n.endswith("PC_Windows/V18_StorageClinic.cs") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/MonitorCadenceV18.java") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/DeviceAdvisorV16.java") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/TouchJoystickV15.java") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/PcRoundtripV15.java") for n in entries)
            assert any(n.endswith("CHANGELOG_V15.md") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/ControllerLayoutsV14.java") for n in entries)
            assert any(n.endswith("CHANGELOG_V14.md") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/NetworkQuality.java") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/AetherMonitorService.java") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/GameProfiles.java") for n in entries)
            assert any(n.endswith("Android/app/src/main/java/com/simturbopc/ultra/PcDiscovery.java") for n in entries)
            assert not any(n.lower().endswith((".exe",".apk")) for n in entries)
        print("FUENTES OK",len(entries),"archivos",zip_path.stat().st_size,"bytes",zip_path)
if __name__=="__main__":main()
