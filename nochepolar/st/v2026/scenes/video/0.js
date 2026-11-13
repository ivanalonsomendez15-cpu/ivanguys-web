import { s as sceneApi } from '../../_e310d67a.js';
import '../../_e1311d95.js';
const player = document.getElementById('player');
const quality = '1080p';
const videoId = sceneApi.param('route') || 'comroom';
player.src = `https://firebasestorage.googleapis.com/v0/b/santa-api.appspot.com/o/videos%2F${encodeURIComponent(videoId)}_${quality}.mp4?alt=media`;
sceneApi.preload.wait(new Promise(resolve => {
  player.addEventListener('canplay', () => resolve());
}));
sceneApi.preload.wait(new Promise((resolve, reject) => {
  player.addEventListener('canplaythrough', () => resolve());
  player.addEventListener('error', reject);
}));
sceneApi.addEventListener('pause', ev => player.pause());
sceneApi.addEventListener('resume', ev => player.play());
sceneApi.addEventListener('restart', ev => player.currentTime = 0.0);
sceneApi.addEventListener('muted', ev => player.muted = true);
sceneApi.addEventListener('unmuted', ev => player.muted = false);
sceneApi.config({
  pause: true,
  sound: []
});
player.addEventListener('ended', () => {
  sceneApi.gameover();
});
const safePlay = () => {
  const p = player.play();
  if (!p) {
    playButton.disabled = true;
    return;
  }
  p.then(() => {
    playButton.disabled = true;
  }).catch(err => {
    playButton.disabled = false;
  });
};
playButton.addEventListener('click', () => {
  safePlay();
});
sceneApi.ready(() => {
  safePlay();
});