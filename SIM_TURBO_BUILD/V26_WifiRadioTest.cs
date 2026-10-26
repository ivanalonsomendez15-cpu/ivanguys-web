using System;
using SimTurboPC;
class WifiRadioV26Test {
  static void Assert(bool ok,string message){if(!ok)throw new Exception(message);}
  static void Main(){
    const string es="Nombre: Wi-Fi\nSSID: PRIVADO-NO-MOSTRAR\nBSSID: 00:11:22:33:44:55\nSeñal: 42%\nCanal: 36\n";
    const string en="Name: Wi-Fi\nSSID: MY-PRIVATE-NETWORK\nSignal: 91%\nChannel: 11\n";
    Assert(WifiRadioV26.SignalPercent(es)==42,"ES signal");
    Assert(WifiRadioV26.Channel(es)==36,"ES channel");
    Assert(WifiRadioV26.SignalPercent(en)==91,"EN signal");
    Assert(WifiRadioV26.Channel(en)==11,"EN channel");
    Assert(!WifiRadioV26.SignalPercent("Signal: 120%").HasValue,"invalid signal");
    Assert(!WifiRadioV26.Channel("Canal: 0").HasValue,"invalid channel");
    string report=WifiRadioV26.Format(es);
    Assert(report.Contains("42%")&&report.Contains("36"),"report fields");
    Assert(!report.Contains("PRIVADO")&&!report.Contains("00:11"),"private identifiers leak");
    Assert(WifiRadioV26.Format("sin interfaces").Contains("no informó"),"unavailable");
    Console.WriteLine("AETHER V26: radio Wi-Fi ES/EN, validacion y privacidad OK.");
  }
}