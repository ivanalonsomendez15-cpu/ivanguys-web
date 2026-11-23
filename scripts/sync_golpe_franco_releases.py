#!/usr/bin/env python3
"""Sincroniza el portal GOLPE FRANCO NEXT con Releases públicos de GitHub.

Las etiquetas aceptadas son: golpe-franco-v137, golpe-franco-next-v137
y gf-next-v137. Publicar una release con su ZIP activa automáticamente
su enlace en la misma página web. No toca Releases de otros proyectos.
"""
from __future__ import annotations

import json
import os
import re
import urllib.request
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse

REPO = "ivanalonsomendez15-cpu/ivanguys-web"
OUTPUT = Path("docs/golpe-franco/releases.json")
TAG = re.compile(r"^(?:golpe-franco(?:-next)?|gf-next)-v(\d+)(?:[-_].*)?$", re.I)
FILE_EXT = re.compile(r"\.(?:zip|html|htm|exe|7z)$", re.I)


def releases():
    found = []
    for page in range(1, 11):
        endpoint = f"https://api.github.com/repos/{REPO}/releases?per_page=100&page={page}"
        headers = {
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "User-Agent": "golpe-franco-release-center",
        }
        if os.getenv("GH_TOKEN"):
            headers["Authorization"] = "Bearer " + os.environ["GH_TOKEN"]
        request = urllib.request.Request(endpoint, headers=headers)
        with urllib.request.urlopen(request, timeout=30) as response:
            items = json.load(response)
        if not isinstance(items, list):
            raise RuntimeError("Respuesta de GitHub Releases inesperada")
        found.extend(items)
        if len(items) < 100:
            break
    return found


def size_label(size):
    if size >= 1_000_000_000:
        return f"{size / 1_000_000_000:.2f} GB"
    return f"{size / 1_000_000:.1f} MB"


def verified_github_asset(asset):
    if not isinstance(asset, dict):
        return False
    if not isinstance(asset.get("size"), int) or asset["size"] <= 0:
        return False
    if not FILE_EXT.search(str(asset.get("name", ""))):
        return False
    url = str(asset.get("browser_download_url", ""))
    parts = urlparse(url)
    return (parts.scheme == "https" and parts.netloc == "github.com"
            and parts.path.startswith(f"/{REPO}/releases/download/"))


def synchronize():
    original = json.loads(OUTPUT.read_text(encoding="utf-8"))
    items = {item["version"]: item for item in original.get("releases", [])
             if re.fullmatch(r"V\d+", str(item.get("version", "")))}
    count = 0
    for release in releases():
        if release.get("draft") or release.get("prerelease"):
            continue
        match = TAG.fullmatch(str(release.get("tag_name", "")))
        if match is None:
            continue
        version = f"V{int(match.group(1))}"
        previous = items.get(version, {})
        assets = [asset for asset in release.get("assets", [])
                  if verified_github_asset(asset)]
        body = str(release.get("body") or "").strip()
        notes = [re.sub(r"^[-*]\s*", "", line).strip()
                 for line in body.splitlines() if line.strip()]
        assets_present = [{
            "type": asset["name"],
            "size": size_label(asset["size"]),
            "available": True,
            "url": asset["browser_download_url"],
            "note": "Archivo publicado en GitHub Releases.",
        } for asset in assets]
        published_at = release.get("published_at")
        date_label = previous.get("date", "Fecha no confirmada")
        if published_at:
            dt = datetime.fromisoformat(published_at.replace("Z", "+00:00"))
            date_label = f"{dt.day} {['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'][dt.month - 1]} {dt.year}"
        items[version] = {
            "version": version,
            "title": str(release.get("name") or "").strip() or f"{version} — GOLPE FRANCO NEXT",
            "date": date_label,
            "size": assets_present[0]["size"] if assets_present else previous.get("size", "Pendiente"),
            "status": "Descarga publicada" if assets_present else "Versión registrada, archivo pendiente",
            "description": notes[0] if notes else previous.get("description", "Versión publicada en GitHub Releases."),
            "highlights": notes[:12] if notes else previous.get("highlights", []),
            "assets": assets_present if assets_present else previous.get("assets", []),
        }
        count += 1
    ordered = sorted(items.values(), key=lambda r: int(r["version"][1:]), reverse=True)
    updated = {"latest": ordered[0]["version"], "releases": ordered}
    content = json.dumps(updated, ensure_ascii=False, indent=2) + "\n"
    prior = OUTPUT.read_text(encoding="utf-8")
    if content != prior:
        OUTPUT.write_text(content, encoding="utf-8")
        print(f"Catálogo actualizado con {count} Releases compatibles.")
    else:
        print(f"Catálogo sin cambios. Releases compatibles: {count}")


if __name__ == "__main__":
    synchronize()
