import { r as read, a as resolvable, p as preloadEvent, i as internalSoundPreload, b as preload, c as playEvent, g as goEvent, d as globalClickHandler, s as scope } from './_e1311d95.js';
const withinFrame = window.parent && window.parent != window;
function parent(callback) {
  if (!withinFrame) {
    return () => {};
  }
  const {
    port1,
    port2
  } = new MessageChannel();
  window.parent.postMessage(port2, '*', [port2]);
  port1.onmessage = ev => callback(ev.data);
  return port1.postMessage.bind(port1);
}
function dashCamelCase(arg) {
  return arg.replace(/[A-Z]/g, v => {
    return '-' + v.toLowerCase();
  });
}
const sceneApi = function () {
  const params = read(window.location.search);
  const handlers = [];
  const {
    talkback,
    ready
  } = function () {
    if (!withinFrame) {
      return {
        talkback() {},
        ready: Promise.resolve(params)
      };
    }
    let data = null;
    const r = resolvable();
    const talkback = parent(({
      type,
      payload
    }) => {
      switch (type) {
        case 'data':
          data = payload;
          break;
        case 'ready':
          return r.resolve(data || {});
      }
      handlers.some(handler => handler(type, payload));
    });
    return {
      talkback,
      ready: r.promise
    };
  }();
  const resolveTask = () => talkback({
    type: 'tasks',
    payload: -1
  });
  window.addEventListener(preloadEvent, ev => {
    const tasks = ev.detail;
    talkback({
      type: 'tasks',
      payload: tasks.length
    });
    tasks.forEach(t => t.catch(() => null).then(resolveTask));
  });
  window.addEventListener(internalSoundPreload, ev => {
    talkback({
      type: 'sounds',
      payload: ev.detail
    });
  });
  const target = new class extends EventTarget {
    constructor() {
      super();
      this._config = undefined;
    }
    get preload() {
      return preload;
    }
    param(key) {
      return params[key] || '';
    }
    config(data = {}) {
      this._config = data;
    }
    _bufferList(type, ...args) {
      this._buffer(type, args);
    }
    _buffer(type, payload) {
      this.ready(() => talkback({
        type,
        payload
      }));
    }
    ready(fn) {
      return ready.then(fn);
    }
  }();
  handlers.push((type, payload) => {
    switch (type) {
      case 'data':
        target.dispatchEvent(new CustomEvent('data', {
          detail: payload
        }));
        return true;
      case 'pause':
      case 'resume':
      case 'restart':
      case 'muted':
      case 'unmuted':
        target.dispatchEvent(new Event(type));
        return true;
      case 'deviceorientation':
      case 'keyup':
      case 'keydown':
        const event = new CustomEvent(type, {
          bubbles: true
        });
        Object.assign(event, payload);
        document.dispatchEvent(event);
        return true;
    }
  });
  window.setTimeout(() => {
    talkback({
      type: 'config',
      payload: target._config || {}
    });
    target.config = () => {
      throw new TypeError('config() cannot be called after first tick');
    };
    target._config = undefined;
  }, 100);
  const bufferNames = {
    'tutorialQueue': true,
    'tutorialDismiss': true,
    'focusOnMenu': true,
    'gtag': true,
    'play': true,
    'data': false,
    'score': false,
    'gameover': false,
    'go': false,
    'error': false
  };
  for (const key in bufferNames) {
    const listType = bufferNames[key];
    const method = listType ? target._bufferList : target._buffer;
    const type = dashCamelCase(key);
    target[key] = method.bind(target, type);
  }
  window.gtag = target.gtag;
  window.addEventListener(playEvent, ev => target.play(...ev.detail));
  window.addEventListener(goEvent, ev => target.go(ev.detail));
  preload.wait(Promise.resolve());
  return target;
}();
function buildLegacyHandler() {
  const sanitizeSoundArgs = args => {
    if (args.length !== 1) {
      return args;
    }
    const first = args[0];
    if (first.name && first.args && first.args instanceof Array) {
      args = [first.name, ...first.args];
    }
    return args;
  };
  const fire = (eventName, ...args) => {
    switch (eventName) {
      case 'sound-trigger':
      case 'sound-ambient':
        args = sanitizeSoundArgs(args);
        sceneApi.play(...args);
        break;
      case 'game-data':
        sceneApi.data(args[0] || null);
        break;
      case 'game-score':
        sceneApi.score(args[0] || {});
        break;
      case 'game-stop':
        sceneApi.gameover(args[0] || {});
        break;
      case 'tutorial-queue':
        sceneApi.tutorialQueue(...(args[0] || []));
        break;
      case 'tutorial-dismiss':
        sceneApi.tutorialDismiss(...(args[0] || []));
        break;
      default:
        console.debug('unhandled santaApi.fire', eventName);
    }
  };
  return {
    fire,
    get headerSize() {
      return 0;
    }
  };
}
window.santaApp = buildLegacyHandler();
const handler = globalClickHandler(scope, sceneName => sceneApi.go(sceneName));
document.body.addEventListener('click', handler);
export { sceneApi as s };