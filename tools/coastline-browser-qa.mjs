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
const serviceTest = {};
const citywide = { expectedRoads: 10501, expectedBuildings: 29554 };
try {
  const url = new URL('https://sig.asturias.es/servicios/rest/services/Visor/CartografiaBase/MapServer/47/query');
  url.search = new URLSearchParams({
    f:'geojson', where:'1=1',
    geometry:'-5.853,43.354,-5.848,43.359',
    geometryType:'esriGeometryEnvelope', inSR:'4326', outSR:'4326',
    spatialRel:'esriSpatialRelIntersects',
    outFields:'objectid,nombre,uso,objeto',
    returnGeometry:'true', resultRecordCount:'2000'
  }).toString();
  const res=await fetch(url,{signal:AbortSignal.timeout(10000)});
  const body=await res.text();
  Object.assign(serviceTest,{status:res.status,bytes:body.length,head:body.slice(0,240)});
  try {serviceTest.features=JSON.parse(body).features?.length ?? null;} catch {}
} catch(e) {serviceTest.error=String(e);}
console.log('OFFICIAL_ASTURIAS_NODE',JSON.stringify(serviceTest));
const errors = [];
const badRequests = [];
page.on('requestfailed', request => { if (badRequests.length < 12) badRequests.push({url:request.url(),error:request.failure()?.errorText}); });
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
await page.waitForTimeout(11000);
const city = await page.evaluate(() => ({
  position: window.__COASTLINE_CITY_POSITION__?.() ?? null,
  buildings: window.COASTLINE_REAL_BUILDINGS?.probe?.() ?? null,
  webglCanvas: !!document.querySelector('#gl'),
  fpsText: document.getElementById('fps')?.textContent ?? '',
  buildingStatus: document.getElementById('cg169-status')?.textContent ?? ''
}));
await page.screenshot({path:'artifacts/02-real-browser-city.png'});
const areaResults = [];
for (const areaName of ['Plaza Puerta de Europa', 'La Corredoria', 'Accesos al HUCA']) {
  await page.evaluate((area) => {
    const search = document.getElementById('search');
    search.classList.add('show');
    document.getElementById('street').value = area;
    document.getElementById('findBtn').click();
  }, areaName);
  await page.waitForTimeout(4200);
  const area = await page.evaluate(() => ({
    coords: window.__COASTLINE_CITY_POSITION__?.() ?? null,
    state: window.COASTLINE_REAL_BUILDINGS?.probe?.() ?? null,
    status: document.getElementById('cg169-status')?.textContent ?? '',
    fps: document.getElementById('fps')?.textContent ?? ''
  }));
  areaResults.push({name: areaName, ...area});
  await page.screenshot({path:'artifacts/city-' + areaName.normalize('NFD').replace(/[^\w ]/g,'').replace(/ +/g,'-').toLowerCase() + '.png'});
}

writeFileSync('artifacts/qa.json',JSON.stringify({initial,city,areaResults,errors,badRequests,serviceTest},null,2));
console.log(JSON.stringify({initial,city,errors},null,2));
if (initial.originalOSM !== 10501) process.exitCode=1;
if (!initial.bridge || !initial.realBuildingsRuntime) process.exitCode=1;
if (!city.position) process.exitCode=1;
if (city.buildings?.offlineCityBuildingCount !== citywide.expectedBuildings) {
  throw Error('Missing offline city buildings: '+JSON.stringify(city.buildings));
}
if ((city.buildings?.offlineCityTileCount ?? 0) < 1000) {
  throw Error('City dataset does not cover broad areas');
}
for (const area of areaResults) {
  if (!area.coords || (area.state?.liveRecords ?? 0) < 1) {
    throw Error('No original geometry rendered near '+area.name);
  }
}
await browser.close();
server.close();
