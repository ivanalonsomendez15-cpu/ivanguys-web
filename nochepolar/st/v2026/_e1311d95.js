const G = typeof global === typeof null ? global : self;
const findIndex = [].findIndex || function (callback, context) {
  let i = this.length;
  while (i--) if (callback.call(context, this[i])) return i;
  return i;
};
const defineProperty = Object.defineProperty;
const UID = '__event-target__' + Math.random();
const WeakMap = G.WeakMap || function WeakMap() {
  return {
    get(obj) {
      return obj[UID];
    },
    set(obj, value) {
      defineProperty(obj, UID, {
        configurable: true,
        value
      });
    }
  };
};
let EventTarget = G.EventTarget;
try {
  new EventTarget();
} catch (e) {
  EventTarget = (() => {
    const wm = new WeakMap();
    const get = self => wm.get(self) || set(self);
    const set = self => {
      const dictionary = new Null();
      wm.set(self, dictionary);
      return dictionary;
    };
    const define = (where, what) => {
      for (const key in what) {
        defineProperty(where, key, {
          configurable: true,
          value: what[key]
        });
      }
    };
    function EventTarget() {}
    define(EventTarget.prototype, {
      addEventListener,
      dispatchEvent,
      removeEventListener
    });
    function dispatch(info) {
      const options = info.options;
      if (options && options.once) {
        removeEventListener.call(info.target, this.type, info.listener, info.options);
      }
      if (typeof info.listener === 'function') {
        info.listener.call(info.target, this);
      } else {
        info.listener.handleEvent(this);
      }
    }
    function registered(info) {
      return this === info.listener;
    }
    function addEventListener(type, listener, options) {
      const secret = get(this);
      const listeners = secret[type] || (secret[type] = []);
      if (findIndex.call(listeners, registered, listener) < 0) {
        listeners.push({
          target: this,
          listener,
          options
        });
      }
    }
    function dispatchEvent(event) {
      const secret = get(this);
      const listeners = secret[event.type];
      if (listeners) {
        define(event, {
          currentTarget: this,
          target: this
        });
        listeners.forEach(dispatch, event);
        delete event.currentTarget;
        delete event.target;
      }
      return true;
    }
    function removeEventListener(type, listener, options) {
      const secret = get(this);
      const listeners = secret[type];
      if (listeners) {
        const i = findIndex.call(listeners, registered, listener);
        if (-1 < i) listeners.splice(i, 1);
      }
    }
    function Null() {}
    Null.prototype = Object.create(null);
    return EventTarget;
  })();
}
var EventTarget$1 = EventTarget;
self.EventTarget = EventTarget$1;
function frame(ms = -1) {
  if (ms >= 0) {
    return new Promise(r => {
      window.setTimeout(() => window.requestAnimationFrame(() => r()), ms);
    });
  }
  return new Promise(r => window.requestAnimationFrame(() => r()));
}
function timeout(ms) {
  return new Promise(r => window.setTimeout(() => r(), ms));
}
async function wrap(fn, args) {
  return fn(...args);
}
const dedup = method => {
  let p = Promise.resolve();
  let lastArguments;
  return (...args) => {
    if (lastArguments === undefined) {
      p = p.catch(() => null).then(() => frame()).then(() => {
        const localArguments = lastArguments;
        lastArguments = undefined;
        return wrap(method, localArguments);
      });
    }
    lastArguments = args;
    return p;
  };
};
function resolvable() {
  let resolve;
  const promise = new Promise(r => {
    resolve = r;
  });
  return {
    promise,
    resolve
  };
}
function read(search) {
  const out = {};
  (search || '').substr(1).split('&').forEach(part => {
    const p = part.split('=');
    const key = decodeURIComponent(p[0] || '');
    if (key && !(key in out)) {
      out[key] = decodeURIComponent(p[1] || '');
    }
  });
  return out;
}
function build(raw) {
  const keys = Object.keys(raw || {});
  if (keys.length) {
    const each = keys.map(key => `${encodeURIComponent(key)}=${encodeURIComponent(raw[key])}`);
    return '?' + each.join('&');
  }
  return '';
}
const preloadEvent = '__santa-preload';
const playEvent = '__santa-play';
const goEvent = '__santa-go';
const internalSoundPreload = '__santa-klang-preload';
function play(...args) {
  const ce = new CustomEvent(playEvent, {
    detail: args
  });
  window.dispatchEvent(ce);
}
function go(route) {
  const ce = new CustomEvent(goEvent, {
    detail: route
  });
  window.dispatchEvent(ce);
}
const wait = function () {
  const tasks = [];
  let announce = null;
  return (...all) => {
    tasks.push(...all);
    if (announce !== null || !all.length) {
      return;
    }
    announce = Promise.resolve().then(() => {
      announce = null;
      const detail = tasks.splice(0, tasks.length);
      const ce = new CustomEvent(preloadEvent, {
        detail
      });
      window.dispatchEvent(ce);
    });
  };
}();
const preload = Object.freeze({
  wait,
  images(...all) {
    const safe = [];
    const preloads = all.map(src => {
      const image = new Image();
      image.src = src;
      const out = new Promise((resolve, reject) => {
        image.onload = () => resolve(image);
        image.onerror = reject;
      });
      safe.push(out.catch(() => image));
      return out;
    });
    wait(...preloads);
    return safe;
  },
  assets(...all) {
    const preloads = all.map(cand => {
      let asset;
      let loadEvent = 'load';
      if (typeof cand === 'string') {
        asset = new Image();
        asset.src = cand;
      } else if (cand instanceof Image) {
        asset = cand;
      } else if (cand instanceof HTMLMediaElement) {
        asset = cand;
        loadEvent = 'canplaythrough';
      } else {
        return Promise.resolve();
      }
      return new Promise((resolve, reject) => {
        asset.addEventListener(loadEvent, () => resolve(asset), {
          once: true
        });
        asset.addEventListener('error', reject, {
          once: true
        });
      });
    });
    wait(...preloads);
  },
  sounds(...groups) {
    const ce = new CustomEvent(internalSoundPreload, {
      detail: groups
    });
    window.dispatchEvent(ce);
  }
});
function guessProdUrl() {
  let params;
  try {
    params = new URLSearchParams(window.location.search);
  } catch (e) {}
  if (params && params.has('referrer')) {
    return params.get('referrer');
  }
  return document.referrer;
}
function determine() {
  const referrer = guessProdUrl();
  if (window.top != window && referrer) {
    const scope = new URL('./', referrer);
    return {
      scope: scope.toString(),
      page: referrer
    };
  }
  const scope = new URL('./', window.location);
  return {
    scope: scope.toString(),
    page: window.location.href
  };
}
const {
  scope,
  page
} = determine();
const internalNavigation = cand => {
  const check = new URL(cand);
  const derived = new URL(check.hash, page);
  return check.toString() === derived.toString() ? check.hash : null;
};
const href = cand => {
  if (cand === null) {
    return null;
  }
  let url = null;
  try {
    url = new URL(cand, page);
  } catch (e) {}
  return url && ["http:", "https:"].includes(url.protocol) ? url : null;
};
const hrefForScene = sceneName => {
  if (sceneName) {
    return href(sceneName + '.html');
  }
  return href('./');
};
const rectify = el => {
  const hrefs = el.querySelectorAll('[href]');
  for (let i = 0; i < hrefs.length; ++i) {
    const c = hrefs[i];
    const url = href(c.getAttribute('href'));
    if (url !== null) {
      c.setAttribute('href', url.toString());
    }
  }
};
function isAndroid() {
  return document.body.getAttribute('data-mode') === 'android';
}
const simplePathMatcher = /^\/?(?:|(@?\w+)\.html)$/;
const deepClone = raw => JSON.parse(JSON.stringify(raw));
function pathnameForLocation(location) {
  const p = location && location.pathname || '/';
  if (p.startsWith('/')) {
    return p;
  }
  return '/' + p;
}
function normalizeRoute(route) {
  return String(route || '').toLowerCase().replace(/[^\w]/g, '');
}
function normalizeLang(lang) {
  const parts = (lang || '').split('-');
  parts[0] = parts[0].toLowerCase();
  if (parts.length >= 2) {
    parts[1] = parts[1].toUpperCase();
  }
  return parts.join('-');
}
function resolveProdURL(location) {
  const data = read(location.search);
  let pathname = pathnameForLocation(location);
  const nochepolarBase = '/ivanguys-web/nochepolar';
  if (pathname === nochepolarBase) pathname = '/';else if (pathname.startsWith(nochepolarBase + '/')) {
    pathname = pathname.slice(nochepolarBase.length);
  }
  const matchDev = pathname.match(/^\/\w+-\w{24,30}\//);
  if (matchDev) {
    pathname = pathname.substr(matchDev[0].length - 1);
  }
  let queryLang = data['hl'] || '';
  if (queryLang.indexOf('_') !== -1) {
    queryLang = '';
  }
  delete data['hl'];
  const matchLang = pathname.match(/^\/intl\/([-\w]+?)(?:|_[-_\w]+)\//);
  const requestLang = matchLang && matchLang[1] || queryLang || null;
  if (matchLang) {
    pathname = '/' + pathname.substr(matchLang[0].length);
  }
  const matchScene = simplePathMatcher.exec(pathname);
  const route = normalizeRoute(matchScene && matchScene[1]);
  let scope = `${location.origin}/ivanguys-web/nochepolar/`;
  if (requestLang) {
    scope += `intl/${normalizeLang(requestLang)}/`;
  }
  return {
    scope,
    route,
    data,
    hash: location.hash || ''
  };
}
function routeToAndroid(route) {
  let androidRoute = undefined;
  if (route[0] === '@') {
    androidRoute = route.substr(1);
  } else if (isAndroid()) {
    if (route === 'jetpack' || route === 'gumball') {
      androidRoute = route;
    } else if (route === 'matching') {
      androidRoute = 'memory';
    }
  }
  if (!androidRoute) {
    return false;
  }
  console.info('loading Android route', androidRoute);
  const hostname = window.location.hostname;
  window.location = `com.google.android.apps.santatracker://${hostname}/android/${androidRoute}`;
  return true;
}
function configureProdRouter(callback) {
  if (window.santaApp.go) {
    throw new Error('cannot configureProdRouter twice');
  }
  const load = resolveProdURL(window.location);
  const wh = window.history;
  let lastState = null;
  const internalRoute = ({
    route,
    data,
    hash
  }, navigation = false) => {
    data = deepClone(data);
    const updatedRoute = callback(route, data, hash);
    if (updatedRoute !== undefined) {
      route = updatedRoute;
    }
    const url = load.scope + (route ? route + '.html' : '') + build(data) + (hash || '');
    const state = {
      route,
      data,
      hash
    };
    if (navigation && (!wh.state || wh.state.route !== route)) {
      wh.pushState(state, null, url);
    } else if (url !== window.location.href) {
      navigation = false;
    }
    navigation || wh.replaceState(state, null, url);
    lastState = state;
  };
  window.addEventListener('popstate', () => {
    const state = wh.state || lastState;
    if (!wh.state) {
      state.hash = window.location.hash || '';
    }
    internalRoute(state);
  });
  internalRoute(load);
  Object.assign(window.santaApp, {
    get route() {
      return wh.state && wh.state.route;
    },
    set route(route) {
      this.go(route);
    },
    go(route, data = {}) {
      if (routeToAndroid(route)) {
        return false;
      }
      const parts = route.split('#', 1);
      const hash = route.substr(parts[0].length);
      route = parts[0];
      internalRoute({
        route: normalizeRoute(route),
        data,
        hash
      }, true);
    }
  });
  window.addEventListener(goEvent, ev => {
    window.santaApp.go(ev.detail || '');
  });
  return {
    scope: load.scope,
    go: santaApp.go,
    write: data => {
      internalRoute({
        route: wh.state.route,
        data
      }, false);
    }
  };
}
function nearestComposedLink(ev) {
  const path = ev.composedPath();
  path.reverse();
  for (const cand of path) {
    if (cand.localName === 'a' && cand.href) {
      return new URL(cand.href);
    }
  }
  return null;
}
function nearestClosestLink(ev) {
  const cand = ev.target.closest('a[href]');
  if (cand) {
    return new URL(cand.href);
  }
  return null;
}
const nativeNearest = Event.prototype.composedPath ? nearestComposedLink : nearestClosestLink;
function globalClickHandler(scope, go) {
  return ev => {
    if (ev.ctrlKey || ev.metaKey || ev.which > 1) {
      return false;
    }
    const target = nativeNearest(ev);
    if (target === null || !target.toString().startsWith(scope)) {
      return false;
    }
    const pathname = pathnameForLocation(target);
    const rest = pathname.substr(scope.length - target.origin.length - 1);
    const matchScene = simplePathMatcher.exec(rest);
    if (!matchScene) {
      return false;
    }
    const hash = internalNavigation(target);
    if (hash !== null) {
      ev.preventDefault();
      const a = document.createElement('a');
      a.href = hash;
      a.click();
      go((matchScene[1] || '') + hash);
      return false;
    }
    const data = read(target.search);
    go(matchScene[1] || '', data);
    ev.preventDefault();
    return true;
  };
}
export { resolvable as a, preload as b, playEvent as c, globalClickHandler as d, rectify as e, play as f, goEvent as g, href as h, internalSoundPreload as i, hrefForScene as j, build as k, go as l, isAndroid as m, dedup as n, frame as o, preloadEvent as p, configureProdRouter as q, read as r, scope as s, timeout as t };