#!/usr/bin/env python3
"""Build shows/index.json from every shows/<slug>/show.json. Folders without a valid show.json are skipped."""
import json, os, sys
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "shows")
KEYS = ["slug", "title", "subtitle", "blurb", "episodeCount", "seasons", "axis"]
out = []
for slug in sorted(os.listdir(ROOT)):
    p = os.path.join(ROOT, slug, "show.json")
    if not os.path.isfile(p):
        continue
    try:
        d = json.load(open(p))
    except Exception as ex:
        print(f"skip {slug}: {ex}", file=sys.stderr); continue
    if d.get("slug") != slug or "title" not in d:
        print(f"skip {slug}: slug/title mismatch", file=sys.stderr); continue
    for req in ("episodes.json", "cast.json", "eras.js", "tags.js"):
        if not os.path.isfile(os.path.join(ROOT, slug, req)):
            print(f"skip {slug}: missing {req}", file=sys.stderr); d = None; break
    if not d: continue
    entry = {k: d.get(k) for k in KEYS}
    try:
        episodes = json.load(open(os.path.join(ROOT, slug, "episodes.json")))
        candidates = [ep for ep in episodes if ep.get("img")]
        # A still from one third into the run is usually more representative than the pilot.
        if candidates:
            entry["image"] = candidates[len(candidates) // 3]["img"]
    except Exception as ex:
        print(f"{slug}: no archive image ({ex})", file=sys.stderr)
    out.append(entry)
json.dump(out, open(os.path.join(ROOT, "index.json"), "w"), indent=2, ensure_ascii=False)
open(os.path.join(ROOT, "index.json"), "a").write("\n")
print(f"{len(out)} shows: {', '.join(s['slug'] for s in out)}")
