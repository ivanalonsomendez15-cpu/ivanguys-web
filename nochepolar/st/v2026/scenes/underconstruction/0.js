import { s as sceneApi } from '../../_e310d67a.js';
import { p as prepareAnimation } from '../../_36ce2a0a.js';
import '../../_e1311d95.js';
sceneApi.preload.images('img/background.jpg', 'img/ropes.svg', 'img/st-logo-horizontal.svg');
sceneApi.preload.sounds('village_load_sounds');
const initAnimation = (key, preserveAspectRatio) => {
  const p = prepareAnimation(`img/animations/${key}.json`, {
    loop: true,
    autoplay: true,
    rendererSettings: {
      className: 'animation__svg',
      preserveAspectRatio
    },
    clearDefs: true,
    container: document.querySelector(`.animation--${key}`)
  });
  sceneApi.preload.wait(p);
};
initAnimation('backhoe', 'xMaxYMax meet');
initAnimation('crane', 'xMaxYMid meet');
initAnimation('drill', 'xMidYMin meet');
initAnimation('snowman', 'xMinYMax meet');
initAnimation('tower', 'xMidYMid meet');
sceneApi.config({
  sound: ['music_start_village', 'village_start']
});
sceneApi.ready(async () => {});