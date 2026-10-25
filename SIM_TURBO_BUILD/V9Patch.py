# AETHER V9 80 features + improved SIM budget + adaptive file chunking.
from pathlib import Path
import shutil
base=Path(__file__).resolve().parent
p=Path("PC_Windows/V5_PerformanceCenter.cs")
s=p.read_text(encoding="utf-8-sig")
old='AddButton(network,"PILOTO GLOBAL V8",337,172,300,()=>new AetherAutopilotV8().ShowDialog(this));'
if old not in s:raise SystemExit("V9: missing V8 network button")
s=s.replace(old,'AddButton(network,"AETHER LAB · 80 MÓDULOS V9",337,172,300,()=>new Aether80LabV9().ShowDialog(this));')
s=s.replace('SIM TURBO PC ULTRA V8 | HYPERPERFORMANCE','SIM TURBO PC ULTRA V9 | HYPERPERFORMANCE')
s=s.replace('HYPERPERFORMANCE V8   ·','HYPERPERFORMANCE V9   ·')
p.write_text(s,encoding="utf-8-sig")
p=Path("PC_Windows/SIM_TURBO_PC.cs")
s=p.read_text(encoding="utf-8-sig")
if '"FPS · DRIVERS · RED V8"' not in s:raise SystemExit("V9: launcher V8 absent")
s=s.replace('"FPS · DRIVERS · RED V8"','"FPS · DRIVERS · RED V9"')
p.write_text(s,encoding="utf-8-sig")
p=Path("PC_Windows/V8_AetherDownloader.cs")
s=p.read_text(encoding="utf-8-sig")
if 'TextBox url, log;' not in s:raise SystemExit("V9: downloader field absent")
s=s.replace('TextBox url, log;','TextBox url, log;\n        NumericUpDown simLimit;')
old='Controls.Add(info);'
if old not in s:raise SystemExit("V9: info label missing")
s=s.replace(old,'''Controls.Add(info);
            info.Size=new Size(523,49);
            Controls.Add(new Label{Text="SIM máx. MiB:",Location=new Point(551,286),Size=new Size(114,30),ForeColor=Color.LightGray});
            simLimit=new NumericUpDown{Minimum=1,Maximum=128,Value=16,Location=new Point(670,285),Size=new Size(68,28)};
            Controls.Add(simLimit);''')
s=s.replace('Thread t=new Thread(()=>Run(uri,target,cts.Token))',
            'long capBytes=(long)simLimit.Value*1048576L;\n                Thread t=new Thread(()=>Run(uri,target,cts.Token,capBytes))')
s=s.replace('void Run(Uri uri,string path,CancellationToken cancellation) {',
            'void Run(Uri uri,string path,CancellationToken cancellation,long simBudgetBytes) {')
old='for(long i=0;i<total;i+=Chunk)queue.Enqueue(new Part(i,Math.Min(total-1,i+Chunk-1)));'
if old not in s:raise SystemExit("V9: chunk anchor missing")
s=s.replace(old,'''int adaptiveChunk=total<4L*1024*1024?128*1024:
                    (total<32L*1024*1024?256*1024:Chunk);
                for(long i=0;i<total;i+=adaptiveChunk)
                    queue.Enqueue(new Part(i,Math.Min(total-1,i+adaptiveChunk-1)));''')
old='Volatile.Read(ref disableCell)==0 && queue.TryDequeue(out part)'
if old not in s:raise SystemExit("V9: SIM budget anchor missing")
s=s.replace(old,'Volatile.Read(ref disableCell)==0 && Interlocked.Read(ref cellBytes)<simBudgetBytes && queue.TryDequeue(out part)')
s=s.replace('AETHER-LINK V8','AETHER-LINK V9')
s=s.replace('SIM TURBO ULTRA V8','SIM TURBO ULTRA V9')
s=s.replace('"AETHER-LINK V8', '"AETHER-LINK V9')
p.write_text(s,encoding="utf-8-sig")
for fn in ["V9_Aether80Lab.cs","V9_Radar.cs"]:
    shutil.copyfile(base/fn,"PC_Windows/"+fn)
print("V9: 80 modules, Wi-Fi Radar, adaptive chunks, SIM budget and prior modules integrated")
