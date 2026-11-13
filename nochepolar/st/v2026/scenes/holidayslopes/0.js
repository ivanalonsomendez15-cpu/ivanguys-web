import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
sceneApi.addEventListener('muted', ev => sendAudioStatusToGame(false));
sceneApi.addEventListener('unmuted', ev => sendAudioStatusToGame(true));
sceneApi.config({
  pause: false,
  sound: []
});
sceneApi.ready(async () => {});
let gameRef = document.getElementById("GSFrame");
function sendAudioStatusToGame(audioStatus) {
  const audioUpdate = {
    type: "SANTA_AUDIO_UPDATE",
    isAudioEnabled: audioStatus
  };
  gameRef.contentWindow.postMessage(JSON.stringify(audioUpdate), "*");
}