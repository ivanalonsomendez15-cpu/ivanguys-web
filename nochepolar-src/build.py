#!/usr/bin/env python3
"""Build-time adapter for Google's Apache-2.0 / CC BY Santa Tracker source."""
import argparse
import json
import re
import shutil
from pathlib import Path

BASE = "/ivanguys-web/nochepolar/"


def edit(root, name, fn):
    path = root / name
    old = path.read_text(encoding="utf8")
    new = fn(old)
    if new == old:
        raise RuntimeError("Expected upstream marker missing in " + name)
    path.write_text(new, encoding="utf8")


def prepare(root):
    def router(source):
        old = "  let pathname = pathnameForLocation(location);"
        insert = (
            old + "\n"
            "  // Adapt original Santa Tracker routing to GitHub Pages subpath.\n"
            "  const nochepolarBase = '/ivanguys-web/nochepolar';\n"
            "  if (pathname === nochepolarBase) pathname = '/';\n"
            "  else if (pathname.startsWith(nochepolarBase + '/')) {\n"
            "    pathname = pathname.slice(nochepolarBase.length);\n"
            "  }"
        )
        old_scope = "  let scope = " + chr(96) + "$" + "{location.origin}/" + chr(96) + ";"
        new_scope = "  let scope = " + chr(96) + "$" + "{location.origin}/ivanguys-web/nochepolar/" + chr(96) + ";"
        return source.replace(old, insert).replace(old_scope, new_scope)
    edit(root, "static/src/core/router.js", router)

    edit(root, "prod/loader.js",
         lambda s: s.replace(
             "if ('serviceWorker' in navigator) {",
             "if ('serviceWorker' in navigator && !location.hostname.endsWith('github.io')) {"
         ))
    def html(s):
        return re.sub(
            r'  <!-- Analytics -->.*?  <!-- CSS -->',
            '  <!-- Independent adaptation: upstream analytics removed. -->\n'
            '  <script>window.gtag = function () {};</script>\n  <!-- CSS -->',
            s, flags=re.DOTALL
        )
    edit(root, "prod/index.html", html)
    edit(root, "prod/src/firebase.js",
         lambda s: s.replace("return remoteConfig.fetchAndActivate().catch(",
                             "return Promise.resolve().catch("))
    edit(root, "static/src/core/config.js",
         lambda s: s.replace("await remoteConfig.fetchAndActivate();",
                             "// No remote fetch: use open-source configuration defaults."))
    print("Prepared upstream Santa Tracker without modifying original scene list")


def finish(root, dst, addon):
    prod = root / "dist" / "prod"
    generated = prod / "ivanguys-web" / "nochepolar" / "st"
    if not generated.is_dir():
        raise RuntimeError("Original project static assets missing: " + str(generated))
    if (prod / "st").exists():
        shutil.rmtree(prod / "st")
    shutil.move(str(generated), str(prod / "st"))
    pages = list(prod.glob("*.html")) + list(prod.glob("intl/*/*.html"))
    if not any(path.name == "index.html" for path in pages):
        raise RuntimeError("Original Google site home HTML missing")

    for path in pages:
        s = path.read_text(encoding="utf8")
        s = re.sub(
            r'(?P<attr>\b(?:src|href)\s*=\s*["\'])/(?!/)',
            lambda m: m.group("attr") + BASE.lstrip("/"),
            s
        )
        extra = (
            '<link rel="stylesheet" href="' + BASE + 'extra.css">'
            '<script defer src="' + BASE + 'extra.js"></script>'
        )
        if "</head>" not in s:
            raise RuntimeError("No head in " + str(path))
        s = s.replace("</head>", extra + "</head>", 1)
        path.write_text(s, encoding="utf8")

    # Stable Spanish route; built upstream locales use es_ALL as their output folder.
    original_es = prod / "intl" / "es_ALL"
    if original_es.is_dir():
        local_es = prod / "intl" / "es"
        if local_es.exists():
            shutil.rmtree(local_es)
        shutil.copytree(original_es, local_es)

    for mf in prod.glob("**/manifest.json"):
        if "st" in mf.parts:
            continue
        data = json.loads(mf.read_text(encoding="utf8"))
        data["start_url"] = BASE
        data["scope"] = BASE
        mf.write_text(json.dumps(data, ensure_ascii=False), encoding="utf8")

    sw = prod / "sw.js"
    if sw.exists():
        sw.unlink()

    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(prod, dst)
    shutil.copy2(addon / "extra.js", dst / "extra.js")
    shutil.copy2(addon / "extra.css", dst / "extra.css")
    (dst / "ATTRIBUTION.txt").write_text(
        "NOCHEPOLAR: adaptación no oficial de Google Santa Tracker.\n"
        "Código original © Google LLC — Apache-2.0.\n"
        "Imágenes y sonidos originales © Google LLC — licencia CC BY.\n"
        "Fuente: https://github.com/google/santa-tracker-web\n"
        "Google no participa ni avala esta adaptación.\n"
        "Eventos NOCHEPOLAR: desarrollo independiente de 2026.\n",
        encoding="utf8"
    )
    shutil.copy2(root / "LICENSE", dst / "LICENSE")
    print("Built", len(pages), "host pages and",
          sum(p.is_file() for p in dst.rglob("*")), "total files")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("phase", choices=["prepare", "finish"])
    ap.add_argument("--root", type=Path, required=True)
    ap.add_argument("--dst", type=Path)
    ap.add_argument("--addon", type=Path)
    args = ap.parse_args()
    if args.phase == "prepare":
        prepare(args.root)
    elif args.dst is None or args.addon is None:
        ap.error("--dst and --addon are required")
    else:
        finish(args.root, args.dst, args.addon)


if __name__ == "__main__":
    main()
