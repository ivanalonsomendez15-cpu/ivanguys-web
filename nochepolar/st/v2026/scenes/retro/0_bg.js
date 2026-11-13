import { s as sceneApi } from '../../_e310d67a.js';
import { e as rectify, h as href } from '../../_e1311d95.js';
import { s as scenes } from "../../_3a2cb20e_bg.js";
function build(seed = 0x2F6E2B1) {
  return () => {
    seed = seed + 0x7ED55D16 + (seed << 12) & 0xFFFFFFFF;
    seed = (seed ^ 0xC761C23C ^ seed >>> 19) & 0xFFFFFFFF;
    seed = seed + 0x165667B1 + (seed << 5) & 0xFFFFFFFF;
    seed = (seed + 0xD3A2646C ^ seed << 9) & 0xFFFFFFFF;
    seed = seed + 0xFD7046C5 + (seed << 3) & 0xFFFFFFFF;
    seed = (seed ^ 0xB55A4F09 ^ seed >>> 16) & 0xFFFFFFFF;
    return (seed & 0xFFFFFFF) / 0x10000000;
  };
}
function disableImageSmoothing(context) {
  const prefixes = ['moz', 'o', 'webkit', 'ms'];
  context.imageSmoothingEnabled = false;
  prefixes.forEach(prefix => context[`${prefix}ImageSmoothingEnabled`] = false);
}
function scaleCopy(src, dst, scale) {
  if (!dst) {
    dst = document.createElement('canvas');
  }
  const w = src.width * scale;
  const h = src.height * scale;
  const round = x => {
    if (x % 2) {
      return x + 1;
    }
    return x;
  };
  dst.width = round(w);
  dst.height = round(h);
  const context = dst.getContext('2d');
  disableImageSmoothing(context);
  context.drawImage(src, 0, 0, w, h);
  return dst;
}
function renderText(text, {
  width,
  color,
  font,
  lineHeight
}) {
  const start = performance.now();
  const chars = text.split('');
  const holder = document.createElement('div');
  holder.style.font = font;
  holder.style.position = 'absolute';
  holder.style.top = 0;
  holder.style.width = `${width}px`;
  holder.style.opacity = 0.9;
  document.body.appendChild(holder);
  const nodes = chars.map(char => {
    const c = document.createElement('span');
    c.textContent = char;
    holder.appendChild(c);
    return c;
  });
  nodes.push(document.createElement('div'));
  const lines = [];
  let previousTop = nodes[0].offsetTop;
  let consumed = 0;
  while (nodes.length > 1) {
    const checkNode = nodes[consumed + 1];
    const top = checkNode ? checkNode.offsetTop : -100;
    if (top !== previousTop) {
      const part = chars.splice(0, consumed + 1).join('').trim();
      part && lines.push(part);
      nodes.splice(0, consumed + 1);
      consumed = 0;
      previousTop = top;
    } else {
      ++consumed;
    }
  }
  holder.parentNode.removeChild(holder);
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = font;
  canvas.width = width;
  canvas.height = ~~(lineHeight * (lines.length + 0.5));
  context.font = font;
  context.textAlign = 'center';
  context.fillStyle = color;
  lines.forEach((line, i) => {
    context.fillText(line, width / 2, (i + 1) * lineHeight);
  });
  const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
  const average = i => {
    const v = (imageData.data[i - 4] || 0) + (imageData.data[i + 4 + 3] || 0);
    return ~~(v / 2);
  };
  for (let i = 0; i < imageData.data.length; i += 4) {
    const v = imageData.data[i + 3];
    const a = average(i);
    let output;
    if (v < 80) {
      output = 0;
    } else if (a < 200) {
      output = 200;
    } else {
      output = 255;
    }
    imageData.data[i + 3] = output;
  }
  const w = canvas.width * 4;
  for (let i = 0; i < imageData.data.length; i += 4) {
    const up1 = imageData.data[i + 3 - 4 - w];
    const up2 = imageData.data[i + 3 - 4 - w * 2];
    const v = imageData.data[i + 3];
    if ((up1 > 128 || up2 > 128) && !v) {
      imageData.data[i + 0] = 0;
      imageData.data[i + 1] = 0;
      imageData.data[i + 2] = 0;
      imageData.data[i + 3] = 32;
    }
  }
  context.putImageData(imageData, 0, 0);
  const duration = performance.now() - start;
  console.warn('text render took', duration.toFixed(2), 'for length', text.length);
  return canvas;
}
class Render {
  constructor() {
    this._ready = [];
    this._assets = {};
    this._randSeed = ~~(Math.random() * 0xFFFFFFF);
    this._preload(`img/tiles.png`);
  }
  _preload(src) {
    const p = new Promise(r => {
      const i = new Image();
      this._assets[src] = i;
      i.onload = i.onerror = () => r(i);
      i.src = src;
    });
    this._ready.push(p);
  }
  ready() {
    if (this._ready === null) {
      throw new Error('ready twice');
    }
    const out = Promise.all(this._ready);
    this._ready = null;
    out.then(() => this._afterReady());
    return out;
  }
  _afterReady() {}
  render(canvas, w, h) {
    canvas = canvas || document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = w;
    canvas.height = h;
    const now = performance.now();
    const sec = now / 1000;
    const rand = build(this._randSeed);
    const tiles = this._assets['img/tiles.png'];
    const wt = Math.ceil(w / 32);
    const ht = Math.ceil(h / 32);
    const snowLine = Math.round(ht * 0.25);
    context.fillStyle = '#3399ff';
    context.fillRect(0, 0, 32 * wt, 32 * (snowLine + 2));
    for (let x = 0; x < wt; ++x) {
      for (let y = snowLine + 1; y < ht; ++y) {
        context.drawImage(tiles, 0, 0, 32, 32, 32 * x, 32 * y, 32, 32);
      }
    }
    const cloudCount = ~~Math.sqrt(wt * snowLine) * 1;
    for (let i = 0; i < cloudCount; ++i) {
      let x = ~~(rand() * wt * 32) - 16 + sec * (rand() * 12 - 6);
      const y = snowLine / cloudCount * i * 32;
      if (x < -32) {
        x = w + 32 + x % (w + 32);
      } else if (x > w + 16) {
        x = x % w - 64;
      }
      context.drawImage(tiles, 32, 0, 32, 32, ~~x, ~~y, 32, 32);
    }
    for (let x = ~~(rand() * -8); x < wt; x += 8) {
      context.drawImage(tiles, 0, 64, 256, 64, 32 * x, 32 * snowLine, 256, 64);
    }
    context.save();
    context.fillStyle = 'white';
    const draw = () => {
      const v = [14, 10, 8, 6, 5];
      v.forEach((size, off) => {
        context.rect(off, 0, 1, size);
        context.rect(0, off, size, 1);
      });
    };
    for (let i = 0; i < 4; ++i) {
      draw();
      context.translate(w, 0);
      context.rotate(Math.PI / 2);
    }
    context.globalCompositeOperation = 'destination-out';
    context.fill();
    context.restore();
    return {
      canvas
    };
  }
}
rectify(document.body);
const canvasOptions = new Map();
titleSurface.title = "\u041A\u044A\u0434\u0435 \u0435 \u0414\u044F\u0434\u043E \u041A\u043E\u043B\u0435\u0434\u0430";
canvasOptions.set(titleSurface, {
  color: 'white',
  width: 300,
  font: '40px "Lobster"',
  lineHeight: 60
});
noticeSurface.title = sceneApi.param('fallback') ? "\u201E\u041A\u044A\u0434\u0435 \u0435 \u0414\u044F\u0434\u043E \u041A\u043E\u043B\u0435\u0434\u0430\u201C \u043D\u0435 \u0441\u0435 \u043F\u043E\u0434\u0434\u044A\u0440\u0436\u0430 \u0437\u0430 \u0431\u0440\u0430\u0443\u0437\u044A\u0440\u0430 \u0432\u0438. \u041E\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u0441 \u0434\u0440\u0443\u0433 \u0438\u043B\u0438 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0439\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u0441\u0438, \u0437\u0430 \u0434\u0430 \u0438\u0433\u0440\u0430\u0435\u0442\u0435 \u043E\u0449\u0435 \u0438\u0433\u0440\u0438 \u0438 \u0434\u0430 \u043F\u0440\u043E\u0441\u043B\u0435\u0434\u044F\u0432\u0430\u0442\u0435 \u0431\u0435\u043B\u043E\u0431\u0440\u0430\u0434\u0438\u044F \u0441\u0442\u0430\u0440\u0435\u0446 \u043D\u0430 24 \u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438." : "\u0418\u0437\u0441\u043B\u0435\u0434\u0432\u0430\u0439\u0442\u0435, \u0438\u0433\u0440\u0430\u0439\u0442\u0435 \u0438 \u0443\u0447\u0435\u0442\u0435 \u0441 \u0434\u0436\u0443\u0434\u0436\u0435\u0442\u0430\u0442\u0430 \u043D\u0430 \u0414\u044F\u0434\u043E \u041A\u043E\u043B\u0435\u0434\u0430 \u043F\u0440\u0435\u0437 \u0446\u0435\u043B\u0438\u044F \u0434\u0435\u043A\u0435\u043C\u0432\u0440\u0438";
canvasOptions.set(noticeSurface, {
  color: '#99ccff',
  width: 300,
  font: '16px "Fugaz One"',
  lineHeight: 24
});
const r = new Render();
function measureFont(fontFamily) {
  const div = document.createElement('div');
  div.style.fontFamily = fontFamily;
  div.style.fontSize = '100px';
  div.textContent = 'Some test string';
  document.body.appendChild(div);
  try {
    return div.offsetHeight;
  } finally {
    document.body.removeChild(div);
  }
}
function delayForFont(fontFamily, timeout = 8 * 1000) {
  const baseline = measureFont('monospace');
  let interval;
  const p = new Promise(resolve => {
    interval = window.setInterval(() => {
      if (measureFont(fontFamily + ',monospace') !== baseline) {
        resolve();
      }
    }, 125);
    window.setTimeout(resolve, timeout);
  });
  return p.then(() => {
    window.clearInterval(interval);
  });
}
sceneApi.preload.wait(r.ready());
const houses = 'boatload codeboogie codelab penguindash presentbounce presentdrop snowball traditions translations wrapbattle'.split(/\s+/g);
(function () {
  let i = 0;
  houses.sort((a, b) => a.length - b.length + ++i);
})();
const houseAssetsPromise = sceneApi.preload.images(...houses.map(x => `img/houses/${x}.gif`));
const otherAssetsPromise = sceneApi.preload.images('img/background.png', 'img/cave.png');
function targetSize() {
  const max = 2;
  const ratio = Math.min(max, Math.floor(window.innerWidth / 320)) || 1;
  return {
    width: 320,
    height: 320,
    ratio
  };
}
async function start() {
  const fps = 10;
  let last = 0;
  let previousRatio = -1;
  const scalableAssets = new Map();
  const houseAssets = await Promise.all(houseAssetsPromise);
  houseAssets.map((img, i) => {
    const house = houses[i];
    const node = document.createElement('a');
    const target = document.createElement('canvas');
    node.href = href(`${house}.html`);
    node.appendChild(target);
    games.appendChild(node);
    node.title = scenes[house];
    scalableAssets.set(img, target);
  });
  const [backgroundAsset, caveAsset] = await Promise.all(otherAssetsPromise);
  (function render(now = 0) {
    window.requestAnimationFrame(render);
    const t = targetSize();
    if (previousRatio !== t.ratio) {
      games.style.fontSize = `${32 * t.ratio}px`;
      const backgroundAssetScaled = scaleCopy(backgroundAsset, null, t.ratio * 4);
      const caveAssetScaled = scaleCopy(caveAsset, null, t.ratio * 4);
      extraStyles.textContent = `
body {
  background-image: url(${backgroundAssetScaled.toDataURL()});
  background-size: ${60 * t.ratio}px;
}
#games a {
  background-image: url(${caveAssetScaled.toDataURL()});
  background-size: ${32 * t.ratio}px;
}
      `;
      canvasOptions.forEach((options, target) => {
        const canvas = renderText(target.title, options);
        scaleCopy(canvas, target, t.ratio);
      });
      scalableAssets.forEach((target, canvas) => {
        scaleCopy(canvas, target, t.ratio);
      });
    }
    if (now - last > 1000 / fps || previousRatio !== t.ratio) {
      const {
        canvas
      } = r.render(null, t.width, t.height);
      scaleCopy(canvas, retroSurface, t.ratio);
      last = now;
    }
    previousRatio = t.ratio;
  })();
}
const fontDelay = Promise.all(['Fugaz One', 'Lobster'].map(name => delayForFont(name)));
sceneApi.preload.wait(fontDelay.then(() => start()));
sceneApi.preload.sounds('retro_load_sounds');
sceneApi.config({
  sound: ['retro_music_start']
});