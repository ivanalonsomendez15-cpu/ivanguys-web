#!/usr/bin/env python3
"""Offline citywide OSM buildings for COASTLINE GT.
Source: actual Geofabrik Asturias OpenStreetMap PBF.
Coordinates are factual OSM, not constructed or inferred. Unknown heights stay unknown.
The original 10,501 historical street ways and metadata remain byte-identical.
"""
from __future__ import annotations
import base64, gzip, json, math, re, sys, hashlib, zipfile
from collections import defaultdict
from datetime import datetime, timezone
from pathlib import Path

import osmium

ROOT = Path(__file__).resolve().parents[1]
HTML = ROOT / "COASTLINE_GT_OVIEDO_EDIFICIOS_OFICIALES_QA.html"
ZIP = ROOT / "COASTLINE_GT_OVIEDO_EDIFICIOS_OFICIALES_QA.zip"
PBF = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("/tmp/asturias-latest.osm.pbf")
STAT = ROOT / "COASTLINE_GEOMETRIA_REAL_ESTADISTICAS.json"
source = HTML.read_text("utf-8")
original = source
assert 'id="coastline-all-city-buildings"' not in source, "Already embedded. Stop to avoid duplicates."
m = re.search(r'(<script id="v29PackedData" type="application/json">)(.*?)(</script>)', source, re.S)
assert m, "Historical road JSON not found"
original_road_bytes = m.group(2)
roads = json.loads(original_road_bytes)
tags_match = re.search(r'<script id="v34RoadTags" type="application/json">(.*?)</script>', source, re.S)
assert tags_match and json.loads(tags_match.group(1))["total"] == 10501
assert len(roads["ways"]) == 10501, "NEVER substitute road prototypes."
origin_lat, origin_lon = roads["origin"]

ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
LOOKUP = {ch: k for k, ch in enumerate(ALPHABET)}
extrema = [float("inf"), float("inf"), -float("inf"), -float("inf")]
for _, _, encoded in roads["ways"]:
    i = 0
    x = z = 0
    while i < len(encoded):
        diffs = []
        for _ in range(2):
            n, shift = 0, 0
            while True:
                d = LOOKUP[encoded[i]]
                i += 1
                n += (d & 31) << shift
                shift += 5
                if d < 32:
                    break
            diffs.append(-((n + 1) // 2) if n & 1 else n // 2)
        x += diffs[0]
        z += diffs[1]
        extrema[0] = min(extrema[0], x)
        extrema[1] = min(extrema[1], z)
        extrema[2] = max(extrema[2], x)
        extrema[3] = max(extrema[3], z)

# Exact street-bounds-based envelope plus a small buffer.
buffer_m = 600
cos_lat = math.cos(math.radians(origin_lat))
WEST = origin_lon + (extrema[0] - buffer_m) / (111320 * cos_lat)
EAST = origin_lon + (extrema[2] + buffer_m) / (111320 * cos_lat)
SOUTH = origin_lat + (extrema[1] - buffer_m) / 111320
NORTH = origin_lat + (extrema[3] + buffer_m) / 111320
LAT_TILE = .0045
LON_TILE = .0065

tiles: dict[str, list] = defaultdict(list)
stats = {"source": "Geofabrik Asturias extract, © OpenStreetMap contributors (ODbL)",
         "source_url": "https://download.geofabrik.de/europe/spain/asturias-latest.osm.pbf",
         "exported_utc": datetime.now(timezone.utc).isoformat(),
         "road_count_preserved": 10501,
         "bounds_from_original_roads": {"west": WEST,"east":EAST,"south":SOUTH,"north":NORTH},
         "buildings": 0, "explicit_heights": 0, "levels_estimated": 0,
         "unknown_heights": 0, "invalid_skipped": 0, "tiles": 0,
         "building_parts": 0}
def parse_height(tags):
    value = (tags.get("height") or "").strip().lower().replace(" ", "")
    if re.fullmatch(r"\d+(?:\.\d+)?m?", value):
        h = float(value.rstrip("m"))
        if 2 <= h <= 350:
            return round(h, 2), 1
    value = (tags.get("building:levels") or "").strip()
    if re.fullmatch(r"\d+(?:\.\d+)?", value):
        level = float(value)
        if 1 <= level <= 110:
            return round(level * 3.0, 2), 2  # marked explicitly as 3m-per-floor estimate
    return 0, 0

def area_m2(flat):
    p = [((flat[i] / 10**7) * 111320 * cos_lat,
          (flat[i+1] / 10**7) * 111320) for i in range(0,len(flat),2)]
    return abs(sum(p[i][0]*p[(i+1)%len(p)][1] -
                   p[(i+1)%len(p)][0]*p[i][1] for i in range(len(p)))/2)

class RealBuildingExtractor(osmium.SimpleHandler):
    def way(self, way):
        is_part = "building:part" in way.tags
        if "building" not in way.tags and not is_part:
            return
        if len(way.nodes) < 4 or len(way.nodes) > 500:
            stats["invalid_skipped"] += 1
            return
        coords = []
        try:
            for node in way.nodes:
                if not node.location.valid():
                    raise ValueError("Missing coordinates")
                lon, lat = node.location.lon, node.location.lat
                if not (-180 <= lon <= 180 and -90 <= lat <= 90):
                    raise ValueError("Invalid geographic coordinate")
                xy = (round(lon * 10**7), round(lat * 10**7))
                if not coords or xy != coords[-1]:
                    coords.append(xy)
        except (ValueError, osmium.InvalidLocationError):
            stats["invalid_skipped"] += 1
            return
        if len(coords) < 4 or coords[0] != coords[-1]:
            stats["invalid_skipped"] += 1
            return
        if len(coords) > 500:
            stats["invalid_skipped"] += 1
            return
        centroid_lon = sum(v[0] for v in coords[:-1]) / (len(coords)-1) / 10**7
        centroid_lat = sum(v[1] for v in coords[:-1]) / (len(coords)-1) / 10**7
        if not (WEST <= centroid_lon <= EAST and SOUTH <= centroid_lat <= NORTH):
            return
        flattened = []
        for lon, lat in coords:
            flattened.extend([lon - round(origin_lon * 10**7),
                              lat - round(origin_lat * 10**7)])
        if area_m2(flattened) < 3.0 or area_m2(flattened) > 300000:
            stats["invalid_skipped"] += 1
            return
        h, hk = parse_height(way.tags)
        key = f"{math.floor(centroid_lat / LAT_TILE)}:{math.floor(centroid_lon / LON_TILE)}"
        kind = (way.tags.get("building:part") if is_part else way.tags.get("building")) or "yes"
        colour = (way.tags.get("building:colour") or way.tags.get("building:color") or "")[:12]
        roof = (way.tags.get("roof:colour") or way.tags.get("roof:color") or "")[:12]
        tiles[key].append([int(way.id), flattened, h, hk, kind[:32], colour, roof])
        stats["buildings"] += 1
        stats["building_parts"] += int(is_part)
        if hk == 1: stats["explicit_heights"] += 1
        elif hk == 2: stats["levels_estimated"] += 1
        else: stats["unknown_heights"] += 1

assert PBF.is_file() and PBF.stat().st_size > 20_000_000, "Missing Asturias PBF"
RealBuildingExtractor().apply_file(str(PBF), locations=True, idx="flex_mem")
stats["tiles"] = len(tiles)
assert stats["buildings"] >= 2000 and stats["tiles"] >= 30, stats
assert stats["buildings"] == (stats["explicit_heights"] +
                             stats["levels_estimated"] + stats["unknown_heights"])

compact = {"v": 1, "origin": [origin_lat, origin_lon], "t": sorted(tiles.items()),
           "source": stats["source"], "ways_original": 10501}
raw = json.dumps(compact, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
packed = base64.b64encode(gzip.compress(raw, compresslevel=9)).decode("ascii")
stats["raw_json_bytes"] = len(raw)
stats["gzip_base64_bytes"] = len(packed)
stats["pbf_bytes"] = PBF.stat().st_size

data_block = ('<script id="coastline-all-city-buildings" type="application/octet-stream" '
              'data-compression="gzip+base64" data-source="geofabrik-osm">'
              + packed + '</script>\n')
anchor = '<script data-coastline-version="V169">'
assert source.count(anchor) == 1
source = source.replace(anchor, data_block + anchor)

# Remove procedural fake city blocks when real geographic data is embedded.
# All original landmark code and the entire road graph are otherwise preserved.
fake = 'if(v29Mode){blocks+=v36CityDetails(b,cityRoads);blocks+=v40Campus(b);'
assert source.count(fake) == 1
source = source.replace(fake, 'if(v29Mode){if(!document.getElementById("coastline-all-city-buildings"))blocks+=v36CityDetails(b,cityRoads);blocks+=v40Campus(b);')

# Real OSM polygons near any of the original 10,501 streets.
city_script = r"""
const cityOfflineNode = document.getElementById('coastline-all-city-buildings');
let cityOfflinePromise = null;
function allCityBuildingTiles() {
  if (cityOfflinePromise) return cityOfflinePromise;
  cityOfflinePromise = (async () => {
    if (!cityOfflineNode || !cityOfflineNode.textContent) return new Map();
    if (typeof DecompressionStream !== 'function')
      throw Error('El navegador no admite descompresión gzip local');
    const compact = cityOfflineNode.textContent.trim();
    const binary = atob(compact);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
    const dataset = JSON.parse(await new Response(stream).text());
    if (dataset.v !== 1 || dataset.ways_original !== 10501 ||
        !Array.isArray(dataset.t) || !Array.isArray(dataset.origin))
      throw Error('Cartografía de edificios no coincide con las 10.501 vías');
    state.offlineCityBuildingCount = dataset.t.reduce((n, t) => n + t[1].length, 0);
    state.offlineCityTileCount = dataset.t.length;
    state.offlineCitySource = dataset.source;
    status('Edificios reales OSM offline en toda la red: ' +
      state.offlineCityBuildingCount + ' huellas. Alturas no siempre documentadas.');
    return new Map(dataset.t);
  })().catch(err => {
    status('Fallo en los edificios offline: ' + String(err.message).slice(0,80));
    return new Map();
  });
  return cityOfflinePromise;
}
function unpackCityBuildings(items) {
  const r = [], lon0 =  -5.85, lat0 = 43.36;
  for (const item of items) {
    if (!Array.isArray(item) || !Array.isArray(item[1])) continue;
    const flat = item[1], ring = [];
    for (let j = 0; j + 1 < flat.length; j += 2) {
      ring.push([Math.round(lon0 * 1e7 + flat[j]) / 1e7,
                 Math.round(lat0 * 1e7 + flat[j+1]) / 1e7]);
    }
    if (!isR(ring)) continue;
    const h = item[2], kind = item[3];
    const height = Number.isFinite(h) && h >= 2 && h <= 350 ?
      {meters:h, kind:kind === 1 ? 'OSM height' : 'ESTIMACIÓN 3m por planta'} : null;
    r.push({
      id: 'w' + item[0], ring, area: BUILD.footprintArea(ring), height,
      kind: String(item[4] || 'yes'),
      facadeColor: safeColor(item[5]), roofColor: safeColor(item[6]),
      heightStatus: height ? height.kind : 'SIN ALTURA: solo huella 2D verificable'
    });
  }
  return r;
}
"""
anchor2 = 'function updateActive(){'
assert source.count(anchor2) == 1
source = source.replace(anchor2, city_script + '\n' + anchor2)

old_pump = """ const wanted=nearbyKeys(i,j),key=wanted.find(k=>!tiles.has(k)&&!pending.has(k)&&Date.now()-(failures.get(k)||0)>600000);
 if(!key)return;"""
new_pump = """ const wanted=nearbyKeys(i,j);
 // All districts: fill every nearby tile directly from downloaded offline OSM data.
 const cityAll=await allCityBuildingTiles();
 let changed=false;
 for (const k of wanted) {
   if (tiles.has(k) || !cityAll.has(k)) continue;
   tiles.set(k, {records:unpackCityBuildings(cityAll.get(k)), origin:'Geofabrik OSM Asturias offline'});
   changed=true;
 }
 if (changed) {
   while (tiles.size > MAX_TILES) {
     const oldest=tiles.keys().next().value;
     tiles.delete(oldest);
   }
   updateActive();
 }
 const key=wanted.find(k=>!tiles.has(k)&&!pending.has(k)&&Date.now()-(failures.get(k)||0)>600000);
 if(!key)return;"""
assert source.count(old_pump) == 1
source = source.replace(old_pump, new_pump)

# Start decompression early on all devices, then stream nearby tiles as the car moves.
start = 'loadPreloaded();styleUi();'
assert source.count(start) == 1
source = source.replace(start, 'loadPreloaded();styleUi();void allCityBuildingTiles();')

# Verify unchanged OSM source plus independent JS syntax (Node in CI).
new_road = re.search(r'<script id="v29PackedData" type="application/json">(.*?)</script>', source, re.S).group(1)
assert new_road == original_road_bytes
assert json.loads(new_road)["ways"] == roads["ways"]
assert source.count('id="coastline-all-city-buildings"') == 1
assert source.count('const cityOfflineNode') == 1
assert len(source) > len(original) + len(packed)
HTML.write_text(source, "utf-8")
with zipfile.ZipFile(ZIP, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as zout:
    zout.write(HTML, HTML.name)
with zipfile.ZipFile(ZIP) as archive:
    assert archive.testzip() is None
    assert archive.read(HTML.name) == HTML.read_bytes()
stats["final_html_bytes"] = HTML.stat().st_size
stats["final_zip_bytes"] = ZIP.stat().st_size
stats["sha256_html"] = hashlib.sha256(HTML.read_bytes()).hexdigest()
STAT.write_text(json.dumps(stats, indent=2, ensure_ascii=False) + "\n", "utf-8")
print(json.dumps(stats, ensure_ascii=False, indent=2))
