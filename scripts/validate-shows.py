#!/usr/bin/env python3
"""Validate every shows/<slug>/ package: files present, JSON parses, eras.js/tags.js load, bars don't overlap,
EP_TAGS keys exist, SEASON_META covers all seasons, axis matches. Exit 1 on any error."""
import json, os, subprocess, sys
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "shows")
JS = r'''
const fs=require("fs"); global.window={}; const dir=process.argv[process.argv.length-1];
new Function(fs.readFileSync(dir+"/eras.js","utf8"))(); new Function(fs.readFileSync(dir+"/tags.js","utf8"))();
const w=window, eps=JSON.parse(fs.readFileSync(dir+"/episodes.json","utf8")); const errs=[];
if(!Array.isArray(w.ERA_CATS)||!w.ERA_CATS.length) errs.push("ERA_CATS missing");
if(!w.ERAS) errs.push("ERAS missing"); if(!w.SEASON_META) errs.push("SEASON_META missing");
if(!w.TAG_DEFS||!w.EP_TAGS) errs.push("TAG_DEFS/EP_TAGS missing");
const axis=w.CHART_AXIS||"season"; const maxUnit=axis==="episode"?eps.length:Math.max(...eps.map(e=>e.s));
for(const [k,label] of (w.ERA_CATS||[])){ const v=(w.ERAS||{})[k]; if(!v){errs.push(`ERAS.${k} missing for cat "${label}"`);continue;}
  const rows=Array.isArray(v[0][0])?v:[v];
  rows.forEach((r,i)=>{ let c=1; for(const b of [...r].sort((a,b)=>a[1]-b[1])){ if(!Array.isArray(b)||b.length<4) errs.push(`${k}[${i}] bad bar ${JSON.stringify(b)}`);
    else { if(b[1]<c) errs.push(`${k}[${i}] overlap at "${b[0]}"`); if(b[2]<b[1]) errs.push(`${k}[${i}] end<start "${b[0]}"`); if(b[2]>maxUnit) errs.push(`${k}[${i}] "${b[0]}" ends past ${maxUnit}`); c=b[2]+1; } } }); }
const seasons=new Set(eps.map(e=>e.s)); for(const s of seasons) if(!(w.SEASON_META||{})[s]) errs.push(`SEASON_META missing season ${s}`);
const keys=new Set(eps.map(e=>e.s+"."+e.e)); for(const k of Object.keys(w.EP_TAGS||{})) if(!keys.has(k)) errs.push(`EP_TAGS key ${k} not an episode`);
for(const [k,ts] of Object.entries(w.EP_TAGS||{})) for(const t of ts) if(!(w.TAG_DEFS||{})[t]) errs.push(`EP_TAGS ${k}: unknown tag "${t}"`);
const tagged=Object.keys(w.EP_TAGS||{}).filter(k=>(w.EP_TAGS[k]||[]).length).length;
console.log(JSON.stringify({axis,eps:eps.length,seasons:seasons.size,cats:(w.ERA_CATS||[]).length,tagged,errs}));
'''
bad = 0
for slug in sorted(os.listdir(ROOT)):
    d = os.path.join(ROOT, slug)
    if not os.path.isdir(d): continue
    missing = [f for f in ("show.json","episodes.json","cast.json","eras.js","tags.js") if not os.path.isfile(os.path.join(d,f))]
    if missing: print(f"✗ {slug}: missing {missing}"); bad += 1; continue
    try:
        sj = json.load(open(os.path.join(d,"show.json"))); json.load(open(os.path.join(d,"cast.json")))
    except Exception as ex: print(f"✗ {slug}: bad json {ex}"); bad += 1; continue
    r = subprocess.run(["node","-e",JS,"--",d], capture_output=True, text=True)
    if r.returncode: print(f"✗ {slug}: js failed: {r.stderr.strip()[:300]}"); bad += 1; continue
    info = json.loads(r.stdout.strip().splitlines()[-1])
    if sj.get("slug") != slug: info["errs"].append(f"show.json slug={sj.get('slug')!r} != folder")
    if sj.get("axis","season") != info["axis"]: info["errs"].append(f"show.json axis={sj.get('axis')} but eras.js axis={info['axis']}")
    if sj.get("episodeCount") != info["eps"]: info["errs"].append(f"show.json episodeCount={sj.get('episodeCount')} but episodes.json has {info['eps']}")
    ok = not info["errs"]; bad += 0 if ok else 1
    print(f"{'✓' if ok else '✗'} {slug}: {info['axis']} axis, {info['eps']} eps, {info['seasons']} seasons, {info['cats']} categories, {info['tagged']} tagged" + ("" if ok else "\n    - " + "\n    - ".join(info["errs"])))
sys.exit(1 if bad else 0)
