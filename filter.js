// across-the-eras — shared filter engine.
// Used by the browser (app.js) AND the MCP server (mcp/server.js) so both agree on exactly what
// "episodes matching these filters" and "the URL for these filters" mean.
// No DOM, no fetch, no globals beyond the export. Loads as a classic <script> (window.ATE) or via require().
(function (root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory();
  else root.ATE = factory();
})(typeof self !== "undefined" ? self : this, function () {
  const code = e => `S${String(e.s).padStart(2, "0")}E${String(e.e).padStart(2, "0")}`;
  const unitOf = (e, axis) => axis === "episode" ? e.idx : e.s; // which chart column an episode lives in
  const eraKey = e => `${e.cat}|${e.name}|${e.s1}|${e.s2}`;
  const rowsOf = v => Array.isArray(v[0][0]) ? v : [v];         // ERAS[key] is a bar list or a list of rows

  // Guest-cast names too generic to be a useful "character" filter (kept from the original single-show sites).
  const GENERIC = /^(unsub|reporter|clerk|medical examiner|dispatcher|police chief|fbi agent|swat|lawyer|judge|prosecutor|attorney|technician|forensic tech|officer|police officer #\d|demon|demons|sheriff|coroner|nurse|bartender|vampire|vampires|unknown|waitress|waiter|doctor|cop|police officer|deputy|angel|angels|reaper|man|woman|girl|boy|guy|bystander|security guard|paramedic|hunter|priest|reporter|receptionist|clerk|detective|teacher|mother|father|husband|wife|kid|jogger|driver|customer|orderly|agent|soldier|witch|ghost|shapeshifter|werewolf|djinn|zombie|leviathan|crossroads demon|hostess|maid|butler|announcer|voice|narrator|young sam|young dean|dean winchester|sam winchester)$/i;

  function emptyState() {
    return { seasons: new Set(), tags: new Set(), eras: [], char: "", q: "", minRating: 0, sort: "air", hideWatched: false, onlyWatched: false };
  }

  // Decorate raw episodes.json rows in place (idx, code, tags Set incl. auto premiere/finale, guests, hay)
  // and return the derived show model everything else consumes.
  function prepare({ episodes, cast = {}, epTags = {}, tagDefs = {}, eraCats = [], eras = {}, seasonMeta = {}, axis = "season" }) {
    const eps = episodes;
    eps.forEach((e, i) => { e.idx = i + 1; });
    const perSeason = {};
    eps.forEach(e => { perSeason[e.s] = Math.max(perSeason[e.s] || 0, e.e); });
    const charCount = {};
    eps.forEach(e => {
      e.code = code(e);
      e.tags = new Set(epTags[`${e.s}.${e.e}`] || []);
      if (e.e === 1) e.tags.add("premiere");
      if (e.e === perSeason[e.s]) e.tags.add("finale");
      e.guests = cast[e.id] || [];
      e.guests.forEach(([c]) => { charCount[c] = (charCount[c] || 0) + 1; });
      e.hay = `${e.code} ${e.title} ${e.summary} ${e.guests.map(g => g.join(" ")).join(" ")}`.toLowerCase();
    });
    tagDefs.premiere = tagDefs.premiere || { label: "Season premiere" };
    tagDefs.finale = tagDefs.finale || { label: "Season finale" };
    const maxS = Math.max(...eps.map(e => e.s));
    const seasons = Array.from({ length: maxS }, (_, i) => i + 1);
    const units = axis === "episode"
      ? eps.map(e => ({ n: e.idx, label: `${e.s}×${String(e.e).padStart(2, "0")}`, season: e.s, ep: e, title: `S${e.s}E${String(e.e).padStart(2, "0")} · ${e.title}` }))
      : seasons.map(s => ({ n: s, label: String(s), season: s, title: `Season ${s} (${(seasonMeta[s] || {}).years || "?"})` }));
    return { eps, seasons, units, charCount, tagDefs, eraCats, eras, seasonMeta, axis, bars: bars(eraCats, eras) };
  }

  // Every bar on the chart, flattened: {name,s1,s2,bg,fg,cat (label),catKey,row}
  function bars(eraCats, eras) {
    const out = [];
    eraCats.forEach(([key, label]) => {
      rowsOf(eras[key]).forEach((row, ri) => row.forEach(([name, s1, s2, bg, fg]) => out.push({ name, s1, s2, bg, fg, cat: label, catKey: key, row: ri })));
    });
    return out;
  }
  // All bars active in chart column u (what the modal shows as "what's going on this season").
  const unitContext = (allBars, u) => allBars.filter(b => u >= b.s1 && u <= b.s2).map(({ name, s1, s2, bg, fg, cat }) => ({ name, s1, s2, bg, fg, cat }));
  // Union of chart columns across selected eras (null = no era filter)
  function eraUnits(eras) {
    if (!eras.length) return null;
    const s = new Set(); eras.forEach(e => { for (let i = e.s1; i <= e.s2; i++) s.add(i); }); return s;
  }
  // The character dropdown: recurring (≥2 eps), non-generic, most-frequent first.
  const characterList = charCount => Object.entries(charCount)
    .filter(([c, n]) => n >= 2 && !GENERIC.test(c) && !/^#\d|#\d+$/.test(c))
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

  // THE filter. `watched` is a Set of episode ids (browser localStorage / MCP caller-supplied); may be omitted.
  function filter(eps, state, { axis = "season", watched = new Set() } = {}) {
    const es = eraUnits(state.eras);
    const q = (state.q || "").toLowerCase();
    let list = eps.filter(e => {
      if (es && !es.has(unitOf(e, axis))) return false;
      if (state.seasons.size && !state.seasons.has(e.s)) return false;
      for (const t of state.tags) if (!e.tags.has(t)) return false;
      if (state.char && !e.guests.some(([c]) => c === state.char)) return false;
      if (state.minRating && !(e.rating >= state.minRating)) return false;
      if (state.hideWatched && watched.has(e.id)) return false;
      if (state.onlyWatched && !watched.has(e.id)) return false;
      if (q && !e.hay.includes(q)) return false;
      return true;
    });
    if (state.sort === "rating") list = list.slice().sort((a, b) => (b.rating || 0) - (a.rating || 0) || a.s - b.s || a.e - b.e);
    else if (state.sort === "airdesc") list = list.slice().reverse();
    return list;
  }

  // ---- URL state (the part after # on /<slug>/) ----
  function stateToHash(state, extra = {}) {
    const p = new URLSearchParams();
    if (state.seasons.size) p.set("s", [...state.seasons].join(","));
    if (state.tags.size) p.set("t", [...state.tags].join(","));
    if (state.eras.length) p.set("e", JSON.stringify(state.eras.map(e => [e.cat, e.name])));
    if (state.char) p.set("c", state.char); if (state.q) p.set("q", state.q);
    if (state.minRating) p.set("r", state.minRating); if (state.sort !== "air") p.set("o", state.sort);
    if (extra.ep) p.set("ep", extra.ep);
    return p.toString();
  }
  // Parse a hash into a fresh state. Unknown tags / eras are dropped, exactly as the browser does.
  function hashToState(hash, { tagDefs = {}, bars: allBars = [] } = {}) {
    const state = emptyState();
    const p = new URLSearchParams((hash || "").replace(/^#/, ""));
    (p.get("s") || "").split(",").filter(Boolean).forEach(x => state.seasons.add(+x));
    (p.get("t") || "").split(",").filter(Boolean).forEach(x => { if (tagDefs[x]) state.tags.add(x); });
    try {
      JSON.parse(p.get("e") || "[]").forEach(([cat, name]) => {
        const f = allBars.find(x => x.cat === cat && x.name === name);
        if (f && !state.eras.some(x => eraKey(x) === eraKey(f))) state.eras.push({ name: f.name, s1: f.s1, s2: f.s2, bg: f.bg, fg: f.fg, cat: f.cat });
      });
    } catch { }
    state.char = p.get("c") || "";
    state.q = (p.get("q") || "").toLowerCase();
    state.minRating = +(p.get("r") || 0);
    state.sort = p.get("o") || "air";
    return { state, ep: p.get("ep") || "", empty: ![...p.keys()].length };
  }
  const shareUrl = (origin, slug, state, extra) => { const h = stateToHash(state, extra); return `${origin}/${slug}/${h ? "#" + h : ""}`; };

  return { code, unitOf, eraKey, rowsOf, GENERIC, emptyState, prepare, bars, unitContext, eraUnits, characterList, filter, stateToHash, hashToState, shareUrl };
});
