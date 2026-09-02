(() => {
const $ = s => document.querySelector(s);
let SEASONS = [], UNITS = [];
const AXIS = () => window.CHART_AXIS || "season";           // "season" | "episode"
const unitOf = e => ATE.unitOf(e, AXIS());                  // which chart column an episode lives in
let CATS = [];                                              // resolved after the show package loads
let SHOW = null, SLUG = "", MODEL = null;                    // current show.json + slug + ATE.prepare() output
const state = ATE.emptyState();                              // filter state — shape defined in filter.js
let EPS=[], CHAR_COUNT={}, BARS=[];
const watched = new Set();
const wkey = () => `ate_watched_${SLUG}`;
const saveWatched = () => localStorage.setItem(wkey(), JSON.stringify([...watched]));
const track = (ev,props)=>{ try{ window.posthog && posthog.capture(ev,props); }catch{} };
const ARCHIVE_TONES=["#7a4246","#595754","#6b6965","#817b73","#454442","#71615f","#62605c","#343332"];
const archiveTone = value => {
  let h=0; for(const c of String(value||"")) h=((h<<5)-h+c.charCodeAt(0))|0;
  return ARCHIVE_TONES[Math.abs(h)%ARCHIVE_TONES.length];
};
const esc = s => String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

// ---------- routing / show package ----------
const slugFromPath = () => (location.pathname.split("/").filter(Boolean)[0]||"").toLowerCase();
const loadScript = src => new Promise((res,rej)=>{const t=document.createElement("script");t.src=src;t.onload=res;t.onerror=()=>rej(new Error("failed "+src));document.head.appendChild(t);});
async function boot(){
  SLUG = slugFromPath();
  let index=[]; try{ index = await (await fetch("/shows/index.json")).json(); }catch{}
  if(!SLUG){ renderLanding(index); return; }
  let show=null; try{ const r=await fetch(`/shows/${SLUG}/show.json`); if(r.ok) show=await r.json(); }catch{}
  if(!show){ $("#notfound").hidden=false; document.title="Not found — skipto.tv"; track("show_not_found",{slug:SLUG}); return; }
  SHOW=show; applyTheme(show); fillShowChrome(show,index);
  try{ window.posthog && posthog.register({show:SLUG}); }catch{}
  await loadScript(`/shows/${SLUG}/eras.js`); await loadScript(`/shows/${SLUG}/tags.js`);
  CATS = window.ERA_CATS;
  JSON.parse(localStorage.getItem(wkey())||"[]").forEach(id=>watched.add(id));
  $("#explorer").hidden=false;
  await load();
}
function applyTheme(show){
  document.documentElement.dataset.show=show.slug;
}
function fillShowChrome(show,index){
  document.title=`${show.title.replace(/\b\w+/g,w=>w[0]+w.slice(1).toLowerCase())} — skipto.tv episode guide`;
  const canonical=document.querySelector('link[rel="canonical"]'); if(canonical) canonical.href=`https://skipto.tv/${SLUG}/`;
  const description=document.querySelector('meta[name="description"]'); if(description&&show.blurb) description.content=show.blurb;
  $("#heroTitle").textContent=show.title; $("#heroSubtitle").textContent=show.subtitle||"skipto.tv";
  $("#heroBlurb").textContent=show.blurb||""; $("#heroCredits").textContent=show.credits||""; $("#heroCredits").hidden=!show.credits;
  if(show.chartHint) $("#chartHint").textContent=show.chartHint;
  $("#regularsNote").textContent=show.regularsNote||""; $("#regularsNote").hidden=!show.regularsNote;
  $("#navCurrent").textContent=show.title;
  const sw=$("#showSwitch");
  index.forEach(x=>{const o=document.createElement("option");o.value=x.slug;o.textContent=x.title;if(x.slug===SLUG)o.selected=true;sw.appendChild(o);});
  sw.onchange=()=>{ if(sw.value&&sw.value!==SLUG){ track("show_selected",{to:sw.value,from:SLUG,source:"switcher"}); location.href=`/${sw.value}/`; } };
  $("#navHome").onclick=()=>track("show_selected",{to:"landing",from:SLUG,source:"nav"});
}
function renderLanding(index){
  try{ window.posthog && posthog.register({show:"landing"}); }catch{}
  $("#landing").hidden=false;
  const g=$("#showsGrid");
  if(!index.length){ g.innerHTML='<div class="empty">No shows yet.</div>'; return; }
  index.forEach(x=>{
    const a=document.createElement("a"); a.className="show-card"; a.href=`/${x.slug}/`;
    a.innerHTML=`<div class="show-image" style="background-image:url('${esc(x.image||"")}')"></div>
      <div class="show-body"><h2>${esc(x.title)}</h2><p>${esc(x.blurb||"")}</p>
      <div class="show-meta"><span>${x.episodeCount||"?"} episodes</span><span>·</span><span>${x.seasons||"?"} season${x.seasons===1?"":"s"}</span><span>·</span><span>${x.axis==="episode"?"episode chart":"season chart"}</span></div></div>
      <div class="show-cta">Open field guide</div>`;
    a.onclick=()=>track("show_selected",{to:x.slug,from:"landing",source:"card"});
    g.appendChild(a);
  });
}

// ---------- data ----------
async function load(){
  const episodes = await (await fetch(`/shows/${SLUG}/episodes.json`)).json();
  let cast={}; try { cast = await (await fetch(`/shows/${SLUG}/cast.json`)).json(); } catch {}
  MODEL = ATE.prepare({episodes, cast, epTags:window.EP_TAGS, tagDefs:window.TAG_DEFS, eraCats:CATS, eras:window.ERAS, seasonMeta:window.SEASON_META, axis:AXIS()});
  ({eps:EPS, seasons:SEASONS, units:UNITS, charCount:CHAR_COUNT, bars:BARS} = MODEL);
  document.documentElement.style.setProperty("--ncols",UNITS.length);
  document.documentElement.classList.toggle("axis-episode",AXIS()==="episode");
  buildChart(); buildFilters(); const ep=readHash(); render();
  if(ep){ const e=EPS.find(x=>x.code===ep.toUpperCase()); if(e) openModal(e); }
}
// ---------- URL state ----------
// Format lives in filter.js (ATE.stateToHash / hashToState) so the MCP server can mint the same links.
function writeHash(){
  const h=ATE.stateToHash(state); history.replaceState(null,"",location.pathname+(h?"#"+h:""));
}
function readHash(){ // returns the `ep` code to open, if any
  const {state:st, ep, empty}=ATE.hashToState(location.hash,{tagDefs:TAG_DEFS,bars:BARS}); if(empty)return "";
  Object.assign(state, st);
  if(state.eras.length) setChartExpanded(true,false);
  $("#charSelect").value=state.char; $("#search").value=state.q; $("#searchMobile").value=state.q;
  $("#minRating").value=state.minRating; $("#minRatingOut").textContent=state.minRating?state.minRating.toFixed(1)+"+":"any";
  $("#sort").value=state.sort;
  return ep;
}

// ---------- chart ----------
function buildChart(){
  const el = $("#chart"); el.innerHTML="";
  const add=(cls,html,style="")=>{const d=document.createElement("div");d.className=cls;d.innerHTML=html;if(style)d.style.cssText=style;el.appendChild(d);return d;};
  if(AXIS()==="episode"){
    add("hdr lbl","Season");
    SEASONS.forEach(s=>{const n=UNITS.filter(u=>u.season===s).length; if(!n) return; const h=add("hdr",`Season ${s} <span class="muted">· ${SEASON_META[s].years}</span>`,`grid-column:span ${n}`);h.dataset.season=s;h.title=`Season ${s} — click to filter`;h.onclick=ev=>toggleSeason(s,ev.shiftKey);});
    add("hdr lbl","Episode");
    UNITS.forEach(u=>{const h=add("hdr ep",u.label);h.title=u.title+" — click to open";h.onclick=()=>openModal(u.ep);});
  } else {
    add("hdr lbl","Season");
    UNITS.forEach(u=>{const h=add("hdr",u.label);h.dataset.season=u.season;h.title=u.title;h.onclick=ev=>toggleSeason(u.season,ev.shiftKey);});
  }
  CATS.forEach(([key,label])=>{
    add("grp","");
    ATE.rowsOf(ERAS[key]).forEach((row,ri)=>{
      add(ri===0?"rowlbl":"rowlbl sub empty", ri===0?label:"");
      let col=1;
      row.slice().sort((a,b)=>a[1]-b[1]).forEach(b=>{
        let [name,s1,s2,bg,fg]=b;
        if(s1<col) s1=col; if(s2<s1) return;
        for(;col<s1;col++) add("cell","");
        const displayBg=archiveTone(`${label}:${name}:${bg}`), displayFg="#fffaf2";
        const d=add("cell bar",esc(name),`grid-column:span ${s2-s1+1};background:${displayBg};color:${displayFg}`);
        d.dataset.era=JSON.stringify({name,s1,s2,bg:displayBg,fg:displayFg,cat:label});
        d.title=AXIS()==="episode" ? `${name} — ${UNITS[s1-1].label}${s1===s2?"":" to "+UNITS[s2-1].label}. Click to filter.` : `${name} — Season${s1===s2?"":"s"} ${s1===s2?s1:s1+"–"+s2}. Click to filter.`;
        d.onclick=ev=>toggleEra({name,s1,s2,bg:displayBg,fg:displayFg,cat:label},ev.shiftKey);
        col=s2+1;
      });
      for(;col<=UNITS.length;col++) add("cell","");
    });
  });
  $("#chartSummary").textContent=`${UNITS.length} ${AXIS()==="episode"?"episodes":"seasons"} · ${CATS.length} timelines`;
  setChartExpanded(localStorage.getItem("ate_chart_expanded")==="1",false);
  $("#toggleChart").onclick=()=>setChartExpanded($("#chartWrap").classList.contains("preview"));
  $("#clearEra").onclick=()=>{state.eras=[];render();};
}
function setChartExpanded(expanded,persist=true){
  const wrap=$("#chartWrap"), button=$("#toggleChart");
  wrap.classList.toggle("preview",!expanded);
  wrap.classList.toggle("expanded",expanded);
  button.textContent=expanded?"Show map preview":"Explore full story map";
  button.setAttribute("aria-expanded",String(expanded));
  if(persist) localStorage.setItem("ate_chart_expanded",expanded?"1":"0");
  if(persist) track("chart_toggled",{expanded});
}
const eraKey=ATE.eraKey;
function toggleEra(era,additive){
  const i=state.eras.findIndex(x=>eraKey(x)===eraKey(era));
  if(i<0) track("era_selected",{category:era.cat,era:era.name,season_start:era.s1,season_end:era.s2,additive});
  if(i>=0) state.eras.splice(i,1);
  else if(additive) state.eras.push(era);
  else state.eras=[era];
  if(state.eras.length) setChartExpanded(true,false);
  render();
}
function toggleSeason(s,additive){
  track("season_selected",{season:s,additive,source:"chart"});
  if(!additive && !(state.seasons.size===1&&state.seasons.has(s))){ state.seasons.clear(); state.seasons.add(s); }
  else if(state.seasons.has(s)) state.seasons.delete(s); else state.seasons.add(s);
  render();
}
function syncChart(){
  const on=new Set(state.eras.map(eraKey));
  document.querySelectorAll("#chart .bar").forEach(b=>{
    const e=JSON.parse(b.dataset.era);
    const k=eraKey(e);
    b.classList.toggle("on",on.has(k));
    b.classList.toggle("dim",on.size>0&&!on.has(k));
  });
  document.querySelectorAll("#chart .hdr[data-season]").forEach(h=>h.classList.toggle("on",state.seasons.has(+h.dataset.season)));
  $("#clearEra").hidden=state.eras.length===0;
}

// ---------- filters UI ----------
function buildFilters(){
  const sc=$("#seasonChips");
  SEASONS.forEach(s=>{const c=document.createElement("button");c.className="chip";c.textContent=s;c.title=`Season ${s} · ${(SEASON_META[s]||{}).years||"?"} · ${(SEASON_META[s]||{}).showrunner||""}`;c.onclick=()=>{if(!state.seasons.has(s))track("season_selected",{season:s,source:"sidebar"});state.seasons.has(s)?state.seasons.delete(s):state.seasons.add(s);render();};c.dataset.s=s;sc.appendChild(c);});
  const tc=$("#tagChips");
  Object.entries(TAG_DEFS).forEach(([k,v])=>{const c=document.createElement("button");c.className="chip";c.textContent=v.label;c.title=v.desc||"";c.dataset.t=k;c.onclick=()=>{if(!state.tags.has(k))track("vibe_selected",{vibe:k,label:v.label});state.tags.has(k)?state.tags.delete(k):state.tags.add(k);render();};tc.appendChild(c);});
  const cs=$("#charSelect");
  ATE.characterList(CHAR_COUNT)
    .forEach(([c,n])=>{const o=document.createElement("option");o.value=c;o.textContent=`${c} (${n})`;cs.appendChild(o);});
  cs.onchange=()=>{state.char=cs.value;if(cs.value)track("character_selected",{character:cs.value});render();};
  let t,ts; $("#search").oninput=e=>{clearTimeout(t);t=setTimeout(()=>{state.q=e.target.value.trim().toLowerCase();render();},120);clearTimeout(ts);ts=setTimeout(()=>{if(state.q)track("searched",{query:state.q,results:filtered().length});},1200);};
  $("#minRating").oninput=e=>{state.minRating=+e.target.value;$("#minRatingOut").textContent=state.minRating?state.minRating.toFixed(1)+"+":"any";render();};
  $("#sort").onchange=e=>{state.sort=e.target.value;track("sort_changed",{sort:state.sort});render();};
  $("#hideWatched").onchange=e=>{state.hideWatched=e.target.checked;if(state.hideWatched){state.onlyWatched=false;$("#onlyWatched").checked=false;}render();};
  $("#onlyWatched").onchange=e=>{state.onlyWatched=e.target.checked;if(state.onlyWatched){state.hideWatched=false;$("#hideWatched").checked=false;}render();};
  $("#resetAll").onclick=()=>{track("filters_reset");state.seasons.clear();state.tags.clear();state.eras=[];state.char="";state.q="";state.minRating=0;state.sort="air";state.hideWatched=false;state.onlyWatched=false;
    $("#search").value="";$("#searchMobile").value="";$("#charSelect").value="";$("#minRating").value=0;$("#minRatingOut").textContent="any";$("#sort").value="air";$("#hideWatched").checked=false;$("#onlyWatched").checked=false;render();};
  $("#surprise").onclick=()=>{const list=filtered();if(!list.length)return;const pick=list[Math.floor(Math.random()*list.length)];track("surprise_me",{pool_size:list.length,episode:pick.code,title:pick.title});openModal(pick);};
  const mob=$("#searchMobile"), desk=$("#search");
  const setQ=v=>{state.q=v.trim().toLowerCase(); if(mob.value!==v)mob.value=v; if(desk.value!==v)desk.value=v; render();};
  let tm; mob.oninput=e=>{clearTimeout(tm);tm=setTimeout(()=>setQ(e.target.value),120);};
  $("#openDrawer").onclick=()=>{document.body.classList.add("drawer-open");track("filters_drawer_opened");};
  $("#closeDrawer").onclick=()=>{document.body.classList.remove("drawer-open");window.scrollTo({top:$("#filters").offsetTop-60>0?document.querySelector(".layout").offsetTop-8:0,behavior:"smooth"});};
  $("#modalClose").onclick=closeModal; $("#modal").onclick=e=>{if(e.target.id==="modal")closeModal();};
  document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();});
}

// ---------- filtering ----------
// The actual matching lives in filter.js so the MCP server returns exactly what the UI shows.
const filtered = () => ATE.filter(EPS, state, {axis:AXIS(), watched});

// ---------- render ----------
const unitContext = u => ATE.unitContext(BARS, u); // all bars active in chart column u
function accentColor(e){const first=ERAS[CATS[0][0]]; const bars=Array.isArray(first[0][0])?first[0]:first; const u=unitOf(e); const b=bars.find(b=>u>=b[1]&&u<=b[2]);return b?archiveTone(`${CATS[0][1]}:${b[0]}:${b[3]}`):"#514b45";}

function render(){
  writeHash(); syncChart();
  document.querySelectorAll("#seasonChips .chip").forEach(c=>c.classList.toggle("on",state.seasons.has(+c.dataset.s)));
  document.querySelectorAll("#tagChips .chip").forEach(c=>c.classList.toggle("on",state.tags.has(c.dataset.t)));
  const list=filtered();
  $("#resultCount").textContent=`${list.length} episode${list.length===1?"":"s"}`;
  $("#drawerCount").textContent=list.length;
  const nf=state.eras.length+state.seasons.size+state.tags.size+(state.char?1:0)+(state.minRating?1:0)+(state.hideWatched||state.onlyWatched?1:0);
  $("#filterCount").textContent=nf; $("#filterCount").hidden=!nf;
  $("#watchedCount").textContent=`${watched.size} / ${EPS.length} watched`;
  // active filter chips
  const af=$("#activeFilters"); af.innerHTML="";
  const chip=(txt,fn)=>{const b=document.createElement("button");b.className="chip";b.innerHTML=`${esc(txt)}<b>Remove</b>`;b.onclick=fn;af.appendChild(b);};
  state.eras.forEach(e=>chip(`${e.cat}: ${e.name}`,()=>toggleEra(e,true)));
  if(state.seasons.size) chip(`Seasons ${[...state.seasons].sort((a,b)=>a-b).join(", ")}`,()=>{state.seasons.clear();render();});
  state.tags.forEach(t=>chip(TAG_DEFS[t].label,()=>{state.tags.delete(t);render();}));
  if(state.char) chip(state.char,()=>{state.char="";$("#charSelect").value="";render();});
  if(state.q) chip(`"${state.q}"`,()=>{state.q="";$("#search").value="";$("#searchMobile").value="";render();});

  const grid=$("#grid"); grid.innerHTML="";
  $("#empty").hidden=list.length>0;
  const frag=document.createDocumentFragment();
  list.forEach(e=>{
    const d=document.createElement("article");
    d.className="card"+(watched.has(e.id)?" watched":"");
    const tags=[...e.tags].filter(t=>TAG_DEFS[t]).map(t=>`<span class="tag">${esc(TAG_DEFS[t].label)}</span>`).join("");
    const guests=e.guests.slice().sort((a,b)=>(CHAR_COUNT[b[0]]||0)-(CHAR_COUNT[a[0]]||0)).slice(0,4).map(([c])=>`<span class="tag guest">${esc(c)}</span>`).join("");
    d.innerHTML=`
      <div class="thumb" style="background-image:url('${e.img||""}')">
        <span class="code">${e.code}</span>${e.rating?`<span class="rating">Rated ${e.rating}</span>`:""}
        <span class="era" style="background:${accentColor(e)}"></span>
      </div>
      <div class="body">
        <h3>${esc(e.title)}</h3>
        <div class="meta">${e.air||""} · ${(SEASON_META[e.s]||{}).showrunner||"—"} era</div>
        <div class="sum">${esc(e.summary)}</div>
        <div class="tags">${tags}${guests}</div>
        <div class="foot"><span class="muted tiny">click for details</span>
          <button class="watch ${watched.has(e.id)?"on":""}" data-w="${e.id}">${watched.has(e.id)?"Watched":"Mark watched"}</button></div>
      </div>`;
    d.onclick=ev=>{ if(ev.target.closest(".watch")){toggleWatched(e.id);return;} openModal(e); };
    frag.appendChild(d);
  });
  grid.appendChild(frag);
}
function toggleWatched(id){ const on=!watched.has(id); on?watched.add(id):watched.delete(id); const e=EPS.find(x=>x.id===id); track("watched_toggled",{watched:on,episode:e?.code,title:e?.title,season:e?.s,total_watched:watched.size}); saveWatched(); render(); }

function openModal(e){
  document.body.classList.remove("drawer-open");
  track("episode_opened",{episode:e.code,title:e.title,season:e.s,rating:e.rating,vibes:[...e.tags]});
  const ctx=unitContext(unitOf(e));
  const byCat={}; ctx.forEach(c=>{(byCat[c.cat]=byCat[c.cat]||[]).push(c);});
  const ctxHtml=Object.entries(byCat).map(([cat,items])=>`<div class="section"><h4>${esc(cat)}</h4><div class="ctx">${
    items.map(c=>`<span class="bar" style="background:${archiveTone(`${cat}:${c.name}:${c.bg}`)};color:#fffaf2" data-era='${esc(JSON.stringify(c))}'>${esc(c.name)}</span>`).join("")}</div></div>`).join("");
  const tags=[...e.tags].filter(t=>TAG_DEFS[t]).map(t=>`<span class="tag">${esc(TAG_DEFS[t].label)}</span>`).join("");
  const cast=e.guests.length?`<div class="section"><h4>Guest cast</h4><div class="cast">${e.guests.map(([c,p])=>`<div><b>${esc(c)}</b> <span class="muted">— ${esc(p)}</span></div>`).join("")}</div></div>`:"";
  const big=(e.img||"").replace("medium_landscape","original_untouched");
  $("#modalBody").innerHTML=`
    <div class="hero-img" style="background-image:url('${big}')"></div>
    <div class="mbody">
      <h2>${e.code} · ${esc(e.title)}</h2>
      <div class="meta">Aired ${e.air||"?"} · Season ${e.s} (${(SEASON_META[e.s]||{}).years||"?"}, ${(SEASON_META[e.s]||{}).showrunner||"—"} era)${e.rating?` · Rating ${e.rating}`:""}</div>
      <p>${esc(e.summary)||"<i>No summary.</i>"}</p>
      <div class="tags">${tags}</div>
      <div class="section" style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn" id="mWatch">${watched.has(e.id)?"Watched — unmark":"Mark as watched"}</button>
        <button class="btn" id="mNext">Next episode</button>
        <a class="btn" target="_blank" rel="noopener" href="https://www.google.com/search?q=${encodeURIComponent(SHOW.title+" "+e.code+" "+e.title)}">Search the web</a>
      </div>
      <div class="section"><h4>${AXIS()==="episode"?"Where this sits on the chart":"What's going on this season"}</h4><div class="muted tiny" style="margin:0 0 6px">Click any bar to filter to that era.</div>${ctxHtml}</div>
      ${cast}
    </div>`;
  $("#modal").hidden=false;
  $("#mWatch").onclick=()=>{toggleWatched(e.id);openModal(e);};
  const idx=EPS.indexOf(e); $("#mNext").disabled=idx>=EPS.length-1; $("#mNext").onclick=()=>openModal(EPS[idx+1]);
  document.querySelectorAll("#modalBody .ctx .bar").forEach(b=>b.onclick=()=>{toggleEra(JSON.parse(b.dataset.era),false);closeModal();window.scrollTo({top:0,behavior:"smooth"});});
}
function closeModal(){$("#modal").hidden=true;}

boot();
})();
