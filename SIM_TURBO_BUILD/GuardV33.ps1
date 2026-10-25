$ErrorActionPreference = 'Stop'
$p='PC_Windows/SIM_TURBO_PC.cs'
$c=[IO.File]::ReadAllText((Join-Path $pwd $p))
function ReplaceOnce([string]$old,[string]$new) {
    if(-not $script:c.Contains($old)) { throw "Falta ancla para parche v3.3: $old" }
    $script:c=$script:c.Replace($old,$new)
}
ReplaceOnce 'double baselineMbps = -1;' @'
double baselineMbps = -1;
        DateTime lastMeasuredAt = DateTime.MinValue;
        double hybridGuardBaseline = -1;
        bool hybridGuardPending = false;
'@
ReplaceOnce 'if (e.Error != null) { Append("Prueba de velocidad fallida: " + e.Error.Message); lblDownload.Text = "No disponible"; return; }' @'
if (e.Error != null) {
                    if(hybridGuardPending) { hybridGuardPending=false; StopHybrid(); Append("Proteccion: error en prueba; proxy restaurado."); }
                    Append("Prueba de velocidad fallida: " + e.Error.Message); lblDownload.Text = "No disponible"; return;
                }
'@
ReplaceOnce 'var result = (SpeedResult)e.Result;' @'
var result = (SpeedResult)e.Result;
                bool speedWasHybrid = hybridGuardPending;
                if(hybridGuardPending) {
                    hybridGuardPending=false;
                    double baseMbps=hybridGuardBaseline;
                    double ratio=baseMbps>0 && result.Mbps>0 ? result.Mbps/baseMbps : 0;
                    if(ratio < 1.10) {
                        StopHybrid();
                        Append("PROTECCION AUTOMATICA: modo movil detenido. Base: "+baseMbps.ToString("0.0")+" Mb/s, híbrido: "+(result.Mbps>0?result.Mbps.ToString("0.0")+" Mb/s":"prueba no disponible")+". Resultado: no alcanza +10%.");
                        MessageBox.Show("El modo PC + movil NO ha demostrado una mejora minima del 10% en esta prueba.\n\nPor seguridad se ha detenido y restaurado el proxy de Windows.\n\nEste resultado no permite afirmar una mejora de 3 veces.", "Proteccion de velocidad",MessageBoxButtons.OK,MessageBoxIcon.Information);
                    } else {
                        Append("Proteccion: muestra hibrida "+ratio.ToString("0.00")+"x frente a PC solo. Esta es una prueba, no garantiza el resto del trafico.");
                        lblHybrid.Text="Prueba hibrida "+ratio.ToString("0.00")+"x · experimental, no garantizado";
                    }
                }
'@
ReplaceOnce 'lastMbps = result.Mbps;' @'
if(!speedWasHybrid) lastMbps = result.Mbps;
                    if(!speedWasHybrid && !hybridOn) lastMeasuredAt=DateTime.Now;
'@
$guard=@'
if(tester.IsBusy || lastMbps <= 0 || (DateTime.Now-lastMeasuredAt).TotalMinutes>3) {
                MessageBox.Show("Antes de activar la SIM, pulsa MEDIR VELOCIDAD con el modo hibrido apagado.\n\nNecesitamos una medicion del PC solo hecha en los ultimos 3 minutos. Si no logramos medir, no activamos el proxy.", "Proteccion de velocidad",MessageBoxButtons.OK,MessageBoxIcon.Information);
                return;
            }
            string warning = "HÍBRIDO EXPERIMENTAL:
'@
ReplaceOnce 'string warning = "HÍBRIDO EXPERIMENTAL:' ($guard.TrimEnd([char]13,[char]10))
ReplaceOnce 'Temporalmente configura el proxy HTTP/HTTPS' 'Se descargaran hasta 8 MB automaticamente para comparar antes/despues. Si no mejora al menos un 10%, se detiene y restaura el proxy.\n" + "Temporalmente configura el proxy HTTP/HTTPS'
ReplaceOnce 'lblHybrid.Text="HÍBRIDO ON · 1 de cada 3 conexiones HTTPS -> SIM (si responde)";' @'
hybridGuardBaseline=lastMbps;
                hybridGuardPending=true;
                lblHybrid.Text="Comprobando velocidad híbrida · apagado automático si no mejora";
                tester.RunWorkerAsync();
'@
ReplaceOnce 'void StopHybrid() {' @'
void StopHybrid() {
            hybridGuardPending=false;
'@
ReplaceOnce 'ULTRA   V3.2' 'ULTRA   V3.3'
[IO.File]::WriteAllText((Join-Path $pwd $p),$c,[Text.UTF8Encoding]::new($true))
Write-Host "Parche de proteccion V3.3 aplicado"
