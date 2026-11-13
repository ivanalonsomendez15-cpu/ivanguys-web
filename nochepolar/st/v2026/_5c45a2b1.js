import { k as build } from './_e1311d95.js';
const apiKey = 'AIzaSyCOEXDJAUuz6VHrOu7YEvsb_ol6RhlqgZA';
const mapsApiURLBase = 'https://maps.googleapis.com/maps/api/js';
const callbackName = '__$global_santa_maps_callback_' + Math.random().toString(16).slice(2);
function mapsApiURL() {
  const params = {
    'callback': callbackName,
    'key': apiKey,
    'v': 'quarterly',
    'libraries': 'drawing,geometry'
  };
  if (document.documentElement.lang) {
    params['language'] = document.documentElement.lang;
  }
  return mapsApiURLBase + build(params);
}
let mapsPromise = null;
function load() {
  if (mapsPromise === null) {
    mapsPromise = internalLoad();
  }
  return mapsPromise;
}
async function internalLoad() {
  const p = new Promise((resolve, reject) => {
    window[callbackName] = resolve;
    const script = document.createElement('script');
    script.src = mapsApiURL();
    script.onerror = reject;
    document.head.appendChild(script);
  });
  try {
    await p;
    return window['google']['maps'];
  } finally {
    delete window[callbackName];
  }
}
export { load as l };