import { h as href } from '../../_e1311d95.js';
import { s as sceneApi } from '../../_e310d67a.js';
import { s as scenes$1 } from "../../_3a2cb20e_sk.js";
const scenes = {};
const listing = document.getElementById('listing');
const keys = Object.keys(scenes).sort();
const handler = (sceneName, ev) => {
  ev.preventDefault();
  sceneApi.go(sceneName);
};
keys.forEach(sceneName => {
  const data = scenes[sceneName];
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = href(sceneName ? `${sceneName}.html` : './');
  if (sceneName in scenes$1) {
    a.textContent = scenes$1[sceneName];
  } else {
    a.textContent = '?' + (sceneName || 'index');
  }
  a.addEventListener('click', handler.bind(null, sceneName));
  li.append(a);
  a.classList.toggle('video', Boolean(data.video));
  listing.appendChild(li);
});
sceneApi.config({
  scroll: true
});
error.addEventListener('click', ev => {
  sceneApi.error('error from scene');
});
sceneApi.ready(async () => {});