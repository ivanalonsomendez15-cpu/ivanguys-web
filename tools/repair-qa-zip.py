"""Repair CI-produced ZIP from the exact UTF-8 QA HTML, without touching V169."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED, BadZipFile
import hashlib

root = Path(__file__).resolve().parents[1]
html = root / "COASTLINE_GT_OVIEDO_EDIFICIOS_OFICIALES_QA.html"
archive = root / "COASTLINE_GT_OVIEDO_EDIFICIOS_OFICIALES_QA.zip"
raw = html.read_bytes()
assert len(raw) > 900_000
needs_repair = True
try:
    with ZipFile(archive) as z:
        needs_repair = (
            z.namelist() != [html.name]
            or z.testzip() is not None
            or z.read(html.name) != raw
        )
except (BadZipFile, OSError, ValueError):
    needs_repair = True
if needs_repair:
    with ZipFile(archive, "w", compression=ZIP_DEFLATED, compresslevel=9) as z:
        z.writestr(html.name, raw)
with ZipFile(archive) as z:
    assert z.testzip() is None
    assert z.read(html.name) == raw
print("QA ZIP valid; html_bytes=",len(raw),
      "zip_bytes=",archive.stat().st_size,
      "sha256=", hashlib.sha256(archive.read_bytes()).hexdigest())
