import http from 'node:http';
import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

const html = readFileSync('COASTLINE_GT_OVIEDO_EDIFICIOS_OFICIALES_QA.html');
const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url?.startsWith('/game.html')) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(html);
  } else { res.writeHead(404); res.end(); }
});
await new Promise(resolve => server.listen(4179, '127.0.0.1', resolve));
mkdirSync('artifacts', {recursive: true});
const browser = await chromium.launch({
  headless: true,
  args: ['--enable-webgl', '--use-gl=angle', '--use-angle=swiftshader', '--no-sandbox']
});
const page = await browser.newPage({viewport: {width: 1280, height: 720}});
const errors = [];
page.on('pageerror', error => errors.push(String(error)));
await page.goto('http://127.0.0.1:4179/', {waitUntil: 'load', timeout: 30000});
await page.waitForTimeout(5000);
await page.screenshot({path:'artifacts/01-real-browser-initial.png'});
const initial = await page.evaluate(() => ({
  canvas: !!document.querySelector('canvas'),
  bridge: typeof window.__COASTLINE_CITY_POSITION__ === 'function',
  originalOSM: window.CG95StreetData?.()?.ways?.length ?? null,
  realBuildingsRuntime: typeof window.COASTLINE_REAL_BUILDINGS?.probe === 'function'
}));
await page.evaluate(() => document.getElementById('cityBtn')?.click());
await page.waitForTimeout(17000);
const city = await page.evaluate(() => ({
  position: window.__COASTLINE_CITY_POSITION__?.() ?? null,
  buildings: window.COASTLINE_REAL_BUILDINGS?.probe?.() ?? null,
  webglCanvas: !!document.querySelector('#gl'),
  fpsText: document.getElementById('fps')?.textContent ?? ''
}));
await page.screenshot({path:'artifacts/02-real-browser-city.png'});
writeFileSync('artifacts/qa.json',JSON.stringify({initial,city,errors},null,2));
console.log(JSON.stringify({initial,city,errors},null,2));
if (initial.originalOSM !== 10501) process.exitCode=1;
if (!initial.bridge || !initial.realBuildingsRuntime) process.exitCode=1;
if (!city.position) process.exitCode=1;
await browser.close();
server.close();
