"""Sincroniza las últimas publicaciones del canal IVANGUYS.

RSS oficial sin claves. Estadísticas opcionales mediante YOUTUBE_API_KEY
(secreto de GitHub Actions, nunca incorporado al sitio público).
"""
from __future__ import annotations

import json
import os
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TARGET = ROOT / 'data' / 'youtube.json'
config_text = (ROOT / 'config.js').read_text(encoding='utf-8')
channel_match = re.search(r"channelId:\s*['\"]([^'\"]+)['\"]", config_text)
CHANNEL_ID = channel_match.group(1) if channel_match else 'UCNiqFFOtb1imm-PpTkUF9GQ'
NS = {
    'atom': 'http://www.w3.org/2005/Atom',
    'yt': 'http://www.youtube.com/xml/schemas/2015',
    'media': 'http://search.yahoo.com/mrss/',
}


def fetch(url: str) -> bytes:
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (compatible; IVANGUYS/1.0; +https://github.com/)',
        'Accept': 'application/atom+xml,application/json;q=0.9,*/*;q=0.8',
    })
    with urllib.request.urlopen(req, timeout=22) as res:
        return res.read()


def get_videos() -> tuple[str, list[dict]]:
    xml = fetch('https://www.youtube.com/feeds/videos.xml?channel_id=' + CHANNEL_ID)
    root = ET.fromstring(xml)
    title = root.findtext('atom:title', 'IVANGUYS', namespaces=NS)
    videos: list[dict] = []
    for entry in root.findall('atom:entry', NS):
        vid = entry.findtext('yt:videoId', '', namespaces=NS)
        name = entry.findtext('atom:title', '', namespaces=NS)
        published = entry.findtext('atom:published', '', namespaces=NS)
        thumbnail = entry.find('media:group/media:thumbnail', NS)
        if not vid or not name:
            continue
        videos.append({
            'id': vid,
            'title': name,
            'url': 'https://www.youtube.com/watch?v=' + urllib.parse.quote(vid, safe=''),
            'thumbnail': thumbnail.attrib.get('url') if thumbnail is not None else f'https://i.ytimg.com/vi/{vid}/hqdefault.jpg',
            'published': published,
            'type': 'short' if '#shorts' in name.lower() else 'video',
        })
    return title, videos


def get_statistics(api_key: str) -> tuple[int | None, int | None]:
    if not api_key:
        return None, None
    query = urllib.parse.urlencode({'part': 'statistics', 'id': CHANNEL_ID, 'key': api_key})
    raw = json.loads(fetch('https://www.googleapis.com/youtube/v3/channels?' + query))
    items = raw.get('items', [])
    if not items:
        raise RuntimeError('La API no devolvió el canal solicitado')
    stats = items[0].get('statistics', {})
    subs = int(stats['subscriberCount']) if not stats.get('hiddenSubscriberCount', False) and 'subscriberCount' in stats else None
    count = int(stats['videoCount']) if 'videoCount' in stats else None
    return subs, count


def main() -> int:
    previous = json.loads(TARGET.read_text(encoding='utf-8')) if TARGET.exists() else {}
    try:
        name, videos = get_videos()
    except (urllib.error.URLError, ET.ParseError, OSError, ValueError) as exc:
        print(f'No se pudo descargar el RSS público: {type(exc).__name__}: {exc}', file=sys.stderr)
        print('Se conservan los datos anteriores (no se publica contenido inventado).')
        return 1

    if not videos:
        print('YouTube devolvió un feed vacío. Se conservan los datos anteriores.', file=sys.stderr)
        return 1

    subs, count = None, None
    key = os.getenv('YOUTUBE_API_KEY', '').strip()
    if key:
        try:
            subs, count = get_statistics(key)
        except (urllib.error.URLError, ValueError, KeyError, RuntimeError) as exc:
            print(f'La API de estadísticas falló: {type(exc).__name__}. Los vídeos RSS sí se actualizarán.', file=sys.stderr)
    # No reciclamos estadísticas antiguas que puedan hacer creer que son actuales.
    payload = {
        'status': 'ok',
        'lastUpdated': datetime.now(timezone.utc).isoformat(),
        'channelTitle': name,
        'subscribers': subs,
        'videoCount': count,
        'videos': videos,
    }
    TARGET.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + '\n', encoding='utf-8')
    print(f'Sincronizados {len(videos)} vídeos de {name}. Estadísticas API: {"sí" if key else "no"}.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
