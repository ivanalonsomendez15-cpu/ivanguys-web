using System;
using SimTurboPC;
class WifiRadioV27Test {
  static void Check(bool condition,string message){if(!condition)throw new Exception(message);}
  static void Main(){
    const string es="Nombre: Wi-Fi\nSSID: MI-RED-SECRETA\nBSSID: 00:11:22:33:44:55\nSeñal: 48%\nCanal: 36\nBanda: 5 GHz\nVelocidad de recepción (Mbps): 866,7\nVelocidad de transmisión (Mbps): 433,3\n";
    const string en="Name: Wi-Fi\nSSID: PRIVATE-NETWORK\nSignal: 92%\nChannel: 11\nBand: 2.4 GHz\nReceive rate (Mbps): 72.2\nTransmit rate (Mbps): 65.0\n";
    Check(WifiRadioV27.SignalPercent(es)==48,"ES signal");
    Check(WifiRadioV27.Channel(es)==36,"ES channel");
    Check(WifiRadioV27.LinkMbps(es,true)==866.7,"ES rx");
    Check(WifiRadioV27.LinkMbps(es,false)==433.3,"ES tx");
    Check(WifiRadioV27.ExplicitBand(es)=="5 GHz","ES band");
    Check(WifiRadioV27.LinkMbps(en,true)==72.2,"EN rx");
    Check(WifiRadioV27.LinkMbps(en,false)==65.0,"EN tx");
    Check(WifiRadioV27.ExplicitBand(en)=="2.4 GHz","EN band");
    Check(!WifiRadioV27.LinkMbps("Receive rate (Mbps): 0",true).HasValue,"zero invalid");
    Check(!WifiRadioV27.LinkMbps("Receive rate (Mbps): 999999",true).HasValue,"oversize invalid");
    Check(!WifiRadioV27.SignalPercent("Signal: 140%").HasValue,"invalid signal");
    Check(WifiRadioV27.ExplicitBand("Channel: 36")=="no informada","never infer band from channel");
    string report=WifiRadioV27.Format(es);
    Check(report.Contains("866.7")&&report.Contains("5 GHz"),"report RX band");
    Check(!report.Contains("MI-RED-SECRETA")&&!report.Contains("00:11"),"private SSID/BSSID");
    Check(!WifiRadioV27.Format(en).Contains("PRIVATE-NETWORK"),"private SSID EN");
    Check(WifiRadioV27.Format("sin interfaces").Contains("no informó"),"unavailable");
    Console.WriteLine("AETHER V27: Wi-Fi ES/EN RX/TX PHY, banda explicita, validacion y privacidad OK.");
  }
}
