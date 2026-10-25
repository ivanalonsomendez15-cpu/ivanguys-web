#!/usr/bin/env python3
"""Package all editable SIM TURBO V10 PC / Android V4 / Cloudflare sources."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import base64, io, shutil, subprocess, sys, tarfile, tempfile
BASE=Path(__file__).resolve().parent
ROOT=BASE.parent
NAME="SIM_TURBO_PC_ULTRA_V10_PROYECTO_COMPLETO"
SRC=["SIM_TURBO_PC.cs","V4_BondedDownloader.cs","V5_PerformanceCenter.cs","V6_HyperAdaptive.cs","V7_PulseRoute.cs","V8_AetherDownloader.cs","V8_AetherAutopilot.cs","V9_Aether80Lab.cs","V9_Radar.cs","V9_ResearchLab.cs","V10_InnovationLab.cs","V10_IdeaEngine.cs"]
PATCHES=["V%dPatch.py"%n for n in range(4,11)]
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
<PropertyGroup><Configuration Condition=" '$(Configuration)' == '' ">Debug</Configuration><Platform Condition=" '$(Platform)' == '' ">AnyCPU</Platform><ProjectGuid>%s</ProjectGuid><OutputType>WinExe</OutputType><RootNamespace>SimTurboPC</RootNamespace><AssemblyName>SIM_TURBO_PC_ULTRA_V10</AssemblyName><TargetFrameworkVersion>v4.8</TargetFrameworkVersion><FileAlignment>512</FileAlignment></PropertyGroup>
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
        cloud=project/"Cloudflare"
        cloud.mkdir()
        shutil.copy2(ROOT/"AETHER_CLOUDFLARE/aether-worker.js",cloud/"aether-worker.js")
        assert "/api/health" in (cloud/"aether-worker.js").read_text()
        assert "/api/nodes" in (cloud/"aether-worker.js").read_text()
        previous=project/"scripts_originales_V4_a_V10"
        previous.mkdir()
        for item in PATCHES:shutil.copy2(BASE/item,previous/item)
        for ext in ("*.cs","*.java"):
            for src in BASE.glob(ext):shutil.copy2(src,previous/src.name)
        workflow=project/".github/workflows"
        workflow.mkdir(parents=True)
        shutil.copy2(ROOT/".github/workflows/sim-turbo-compilar.yml",workflow/"sim-turbo-compilar.yml")
        readme="""SIM TURBO PC ULTRA V10 — CÓDIGO FUENTE COMPLETO, SIN EJECUTABLES
==============================================================
PC_Windows/: programa C# WinForms, V4-V10 aplicadas; abre la solución .sln
en Visual Studio (con .NET Framework 4.8 Developer Pack).
Android/: proyecto Java Gradle, con BondedServer V4; abre en Android Studio
(JDK 17, Gradle 8.9, SDK Android API 35).
Cloudflare/aether-worker.js: código fuente del diagnóstico HTTPS.
scripts_originales_V4_a_V10/: parches originales y módulos de cada versión.
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
No incluye claves privadas, APK ni ejecutables.
"""
        (project/"LEEME.txt").write_text(readme,encoding="utf-8")
        powershell='''$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "PC_Windows")
$csc = "$env:WINDIR\Microsoft.NET\Framework64\v4.0.30319\csc.exe"
if (!(Test-Path $csc)) { throw "Falta el compilador csc.exe de .NET Framework" }
$fuentes = (Get-ChildItem -Filter "*.cs" | Sort-Object Name).Name
& $csc /nologo /optimize+ /target:winexe /out:SIM_TURBO_PC_ULTRA_V10.exe /r:System.dll /r:System.Core.dll /r:System.Drawing.dll /r:System.Windows.Forms.dll /r:System.Management.dll $fuentes
if ($LASTEXITCODE -ne 0) { throw "Error compilando C#" }
Write-Host "Compilación completa"
'''
        (project/"compilar_windows.ps1").write_text(powershell,encoding="utf-8")
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
            assert not any(n.lower().endswith((".exe",".apk")) for n in entries)
        print("FUENTES OK",len(entries),"archivos",zip_path.stat().st_size,"bytes",zip_path)
if __name__=="__main__":main()
