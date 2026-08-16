// across-the-eras MCP server — read-only tools over the curated show data, using the SAME filter
// engine as the website (../filter.js), so an agent's answer and the UI's answer never disagree.
//
// Transport: MCP Streamable HTTP, stateless (no sessions, safe behind 2 replicas), at POST /mcp.
// Runs on :8081 inside the site image; nginx proxies /mcp there. See ../docs/ for the human-facing story.
const http = require("node:http");
const { z } = require("zod");
const { McpServer, ResourceTemplate } = require("@modelcontextprotocol/sdk/server/mcp.js");
const { StreamableHTTPServerTransport } = require("@modelcontextprotocol/sdk/server/streamableHttp.js");
const ATE = require("../filter.js");
const { loadAll } = require("./load.js");

const PORT = +(process.env.PORT || 8081);
const SITE = (process.env.SITE_ORIGIN || "https://eras.inevitable.fyi").replace(/\/$/, "");
const POSTHOG_KEY = process.env.POSTHOG_KEY ?? "phc_tx8PYa33kcFgtTxUz3DwJG7FqGoRpyUSjzwKJEmf4xjP";
const POSTHOG_HOST = process.env.POSTHOG_HOST || "https://us.i.posthog.com";
const VERSION = require("./package.json").version;

const DATA = loadAll();
console.log(`[mcp] loaded ${DATA.shows.size} shows from disk`);

// ---------- helpers ----------
const showOrThrow = slug => {
  const s = DATA.shows.get(String(slug || "").toLowerCase());
  if (!s) throw new Error(`Unknown show "${slug}". Known slugs: ${[...DATA.shows.keys()].join(", ")}. Call list_shows first.`);
  return s;
};
const norm = s => String(s ?? "").trim().toLowerCase();

// Resolve loose era names ("Glory", "Big Bads: Glory", "glory (season 5)") to actual chart bars.
function resolveEras(model, names = []) {
  const picked = [], warnings = [];
  for (const raw of names) {
    let cat = null, name = norm(raw);
    const m = /^([^:]+):\s*(.+)$/.exec(name); // "Category: bar"
    let cands = model.bars;
    if (m) { const c = m[1].trim(); const byCat = model.bars.filter(b => norm(b.cat) === c || norm(b.catKey) === c); if (byCat.length) { cands = byCat; cat = c; name = m[2].trim(); } }
    let hits = cands.filter(b => norm(b.name) === name);
    if (!hits.length) hits = cands.filter(b => norm(b.name).includes(name));
    if (!hits.length) hits = cands.filter(b => name.includes(norm(b.name)) && norm(b.name).length >= 4);
    if (!hits.length) { warnings.push(`No chart bar matches "${raw}"${cat ? ` in category "${cat}"` : ""}. Use get_show to see the exact bar names.`); continue; }
    // If several bars share a name (e.g. same character in several rows), take them all — union, like shift-click.
    const seen = new Set();
    hits.forEach(b => { const k = ATE.eraKey(b); if (!seen.has(k)) { seen.add(k); picked.push({ name: b.name, s1: b.s1, s2: b.s2, bg: b.bg, fg: b.fg, cat: b.cat }); } });
    if (hits.length > 1 && new Set(hits.map(h => h.name)).size > 1) warnings.push(`"${raw}" matched ${hits.length} bars (${[...new Set(hits.map(h => `${h.cat}: ${h.name}`))].slice(0, 6).join("; ")}) — using all of them. Be more specific to narrow.`);
  }
  return { eras: picked, warnings };
}
function resolveTags(model, tags = []) {
  const out = new Set(), warnings = [];
  const defs = model.tagDefs;
  for (const raw of tags) {
    const t = norm(raw);
    const key = Object.keys(defs).find(k => norm(k) === t) || Object.keys(defs).find(k => norm(defs[k].label) === t) || Object.keys(defs).find(k => norm(defs[k].label).includes(t));
    if (key) out.add(key); else warnings.push(`Unknown vibe/tag "${raw}". Valid: ${Object.keys(defs).join(", ")}.`);
  }
  return { tags: out, warnings };
}
function resolveCharacter(model, raw) {
  if (!raw) return { char: "", warnings: [] };
  const q = norm(raw);
  const names = Object.keys(model.charCount);
  const exact = names.find(n => norm(n) === q);
  if (exact) return { char: exact, warnings: [] };
  const partial = names.filter(n => norm(n).includes(q)).sort((a, b) => model.charCount[b] - model.charCount[a]);
  if (partial.length) return { char: partial[0], warnings: partial.length > 1 ? [`Character "${raw}" matched ${partial.length} names; using "${partial[0]}" (most episodes). Others: ${partial.slice(1, 6).join(", ")}. Use search_characters to pick exactly.`] : [] };
  return { char: "", warnings: [`No guest character matches "${raw}". Note: series regulars usually aren't in the guest list — use the roster rows on the chart (eras) instead. ${model.show?.regularsNote || ""}`.trim()] };
}
const codeOf = x => { const m = /^s?(\d{1,2})[xe.](\d{1,3})$/i.exec(String(x).trim()); return m ? `S${m[1].padStart(2, "0")}E${m[2].padStart(2, "0")}` : String(x).trim().toUpperCase(); };
function watchedSet(model, watched = []) {
  const s = new Set();
  for (const w of watched) { const e = model.byId.get(+w) || model.byCode.get(codeOf(w)); if (e) s.add(e.id); }
  return s;
}

// The shared "filters" argument shape every filtering tool takes — mirrors the sidebar 1:1.
const FILTERS = {
  seasons: z.array(z.number().int().positive()).optional().describe("Only these season numbers"),
  eras: z.array(z.string()).optional().describe('Chart bars to filter by, e.g. ["Glory"] or ["Big Bads & mini-bosses: Glory"]. Multiple = union (like shift-click). Get exact names from get_show.'),
  tags: z.array(z.string()).optional().describe("Vibes/tags (keys or labels from get_show). Multiple = ALL must match. 'premiere' and 'finale' always exist."),
  character: z.string().optional().describe("A guest character name (see search_characters). Series regulars are usually chart rows, not guests."),
  query: z.string().optional().describe("Free-text search over code, title, summary and guest cast/actor names"),
  minRating: z.number().min(0).max(10).optional().describe("Minimum TVmaze rating, e.g. 8.5"),
  sort: z.enum(["air", "airdesc", "rating"]).optional().describe("air (default, chronological), airdesc, or rating"),
  watched: z.array(z.union([z.string(), z.number()])).optional().describe('Episode codes ("S03E12", "3x12") or ids the user has already seen. Used with hideWatched/onlyWatched.'),
  hideWatched: z.boolean().optional().describe("Exclude episodes in `watched`"),
  onlyWatched: z.boolean().optional().describe("Only episodes in `watched`"),
};
function buildState(entry, args) {
  const { model } = entry;
  const state = ATE.emptyState();
  const warnings = [];
  (args.seasons || []).forEach(s => { if (model.seasons.includes(s)) state.seasons.add(s); else warnings.push(`Season ${s} doesn't exist (show has ${model.seasons.length}).`); });
  const er = resolveEras(model, args.eras || []); state.eras = er.eras; warnings.push(...er.warnings);
  const tg = resolveTags(model, args.tags || []); state.tags = tg.tags; warnings.push(...tg.warnings);
  const ch = resolveCharacter({ ...model, show: entry.show }, args.character); state.char = ch.char; warnings.push(...ch.warnings);
  state.q = norm(args.query || "");
  state.minRating = +(args.minRating || 0);
  state.sort = args.sort || "air";
  state.hideWatched = !!args.hideWatched; state.onlyWatched = !!args.onlyWatched;
  const watched = watchedSet(model, args.watched || []);
  return { state, watched, warnings };
}

// Response shapes — compact but complete enough that an agent rarely needs a second call.
const epUrl = (slug, e) => `${SITE}/${slug}/#ep=${e.code}`;
function epSummary(entry, e, { full = false } = {}) {
  const { model, slug } = entry;
  const out = {
    code: e.code, id: e.id, season: e.s, episode: e.e, title: e.title, aired: e.air, rating: e.rating,
    tags: [...e.tags].filter(t => model.tagDefs[t]).map(t => model.tagDefs[t].label),
    summary: e.summary, url: epUrl(slug, e),
  };
  const meta = model.seasonMeta[e.s] || {};
  if (meta.showrunner) out.showrunner = meta.showrunner;
  if (full) {
    out.image = (e.img || "").replace("medium_landscape", "original_untouched") || undefined;
    out.guestCast = e.guests.map(([character, actor]) => ({ character, actor }));
    const ctx = ATE.unitContext(model.bars, ATE.unitOf(e, model.axis));
    const byCat = {}; ctx.forEach(c => { (byCat[c.cat] = byCat[c.cat] || []).push(c.name); });
    out.context = byCat; // "what's going on" — every chart bar covering this episode, grouped by category
    out.seasonYears = meta.years;
    const i = model.eps.indexOf(e);
    out.previous = i > 0 ? { code: model.eps[i - 1].code, title: model.eps[i - 1].title } : null;
    out.next = i < model.eps.length - 1 ? { code: model.eps[i + 1].code, title: model.eps[i + 1].title } : null;
  } else {
    out.guests = e.guests.slice().sort((a, b) => (model.charCount[b[0]] || 0) - (model.charCount[a[0]] || 0)).slice(0, 4).map(([c]) => c);
  }
  return out;
}
const chartFor = model => model.eraCats.map(([key, label]) => ({
  key, label,
  rows: ATE.rowsOf(model.eras[key]).map(row => row.map(([name, s1, s2]) => model.axis === "episode"
    ? { name, fromEpisode: model.eps[s1 - 1]?.code, toEpisode: model.eps[s2 - 1]?.code }
    : { name, fromSeason: s1, toSeason: s2 })),
}));

const text = obj => ({ content: [{ type: "text", text: JSON.stringify(obj, null, 1) }], structuredContent: obj });
const track = (event, props) => {
  if (!POSTHOG_KEY) return;
  fetch(`${POSTHOG_HOST}/capture/`, { method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: POSTHOG_KEY, event, distinct_id: "mcp-anon", properties: { surface: "mcp", $lib: "ate-mcp", version: VERSION, ...props } }) }).catch(() => { });
};

// ---------- MCP server ----------
function buildServer() {
  const server = new McpServer({ name: "across-the-eras", version: VERSION }, {
    instructions: `Across the Eras (${SITE}) is a rewatch explorer for long-running TV shows. Each show has an "era chart" —
hand-curated bars for showrunners, cast rosters, big bads, arcs, locations, real-world periods — sitting on top of every episode,
plus curated "vibes" (tags), TVmaze guest cast, ratings and summaries. Every filter here is exactly what a human can click on the site.
Workflow: list_shows → get_show (learn the exact era/vibe/character vocabulary) → find_episodes / surprise_me / next_episode.
Every result carries a url that opens the same filters on the site — give it to the user.`,
  });

  server.registerTool("list_shows", {
    title: "List shows",
    description: "All shows on Across the Eras with slug, title, blurb, season/episode counts. Start here.",
    inputSchema: {},
  }, async () => {
    track("mcp_list_shows");
    return text({ site: SITE, shows: DATA.index.map(x => ({ slug: x.slug, title: x.title, emoji: x.emoji, blurb: x.blurb, seasons: x.seasons, episodes: x.episodeCount, url: `${SITE}/${x.slug}/` })) });
  });

  server.registerTool("get_show", {
    title: "Get show vocabulary",
    description: "Everything you need to filter a show: seasons (years, showrunner), the full era chart (every category, row and bar with its span), all vibes/tags with counts, and the most frequent guest characters. Bar names and tag keys/labels from here are what find_episodes accepts.",
    inputSchema: { slug: z.string().describe("Show slug from list_shows, e.g. 'buffy'") },
  }, async ({ slug }) => {
    const entry = showOrThrow(slug); const { show, model } = entry;
    track("mcp_get_show", { show: entry.slug });
    return text({
      slug: entry.slug, title: show.title, blurb: show.blurb, url: `${SITE}/${entry.slug}/`,
      episodes: model.eps.length, axis: model.axis,
      seasons: model.seasons.map(s => ({ season: s, years: model.seasonMeta[s]?.years, showrunner: model.seasonMeta[s]?.showrunner, episodes: model.eps.filter(e => e.s === s).length })),
      chart: chartFor(model),
      tags: Object.entries(model.tagDefs).map(([key, v]) => ({ key, label: v.label, description: v.desc, episodes: entry.tagCounts[key] || 0 })),
      regularsNote: show.regularsNote,
      topGuestCharacters: model.characters.slice(0, 40).map(([name, count]) => ({ name, episodes: count })),
      totalGuestCharacters: model.characters.length,
    });
  });

  server.registerTool("find_episodes", {
    title: "Find episodes",
    description: "Filter a show's episodes exactly like the site's sidebar/chart: seasons, chart bars (eras), vibes/tags, guest character, free text, min rating, sort, and an optional watched list. Returns matching episodes plus a url that opens the same filters on the site. Unknown names come back as `warnings` — read them.",
    inputSchema: { slug: z.string(), ...FILTERS, limit: z.number().int().min(1).max(200).optional().describe("Max episodes to return (default 50)"), offset: z.number().int().min(0).optional() },
  }, async (args) => {
    const entry = showOrThrow(args.slug);
    const { state, watched, warnings } = buildState(entry, args);
    const list = ATE.filter(entry.model.eps, state, { axis: entry.model.axis, watched });
    const limit = args.limit || 50, offset = args.offset || 0;
    const url = ATE.shareUrl(SITE, entry.slug, state);
    track("mcp_find_episodes", { show: entry.slug, results: list.length, filters: Object.keys(args).filter(k => k !== "slug" && args[k] != null) });
    return text({
      show: entry.slug, total: list.length, returned: Math.min(limit, Math.max(0, list.length - offset)), offset,
      appliedFilters: { seasons: [...state.seasons], eras: state.eras.map(e => `${e.cat}: ${e.name}`), tags: [...state.tags], character: state.char || undefined, query: state.q || undefined, minRating: state.minRating || undefined, sort: state.sort },
      warnings, url,
      episodes: list.slice(offset, offset + limit).map(e => epSummary(entry, e)),
    });
  });

  server.registerTool("get_episode", {
    title: "Get episode",
    description: "One episode in full: summary, rating, air date, vibes, complete guest cast, and its chart context (every era bar covering it — who's showrunning, which Big Bad, which arc…), plus previous/next.",
    inputSchema: { slug: z.string(), episode: z.string().describe('Episode code: "S03E12", "3x12", "3.12" — or a TVmaze episode id') },
  }, async ({ slug, episode }) => {
    const entry = showOrThrow(slug); const { model } = entry;
    const e = model.byId.get(+episode) || model.byCode.get(codeOf(episode));
    if (!e) throw new Error(`No episode "${episode}" in ${entry.slug}. Codes look like S01E01; the show has ${model.eps.length} episodes across ${model.seasons.length} seasons.`);
    track("mcp_get_episode", { show: entry.slug, episode: e.code });
    return text({ show: entry.slug, ...epSummary(entry, e, { full: true }) });
  });

  server.registerTool("search_characters", {
    title: "Search guest characters",
    description: "Find recurring guest characters (and who played them) by name fragment; returns episode counts and the codes they appear in. Series regulars are mostly NOT here — they're chart rows (see get_show.regularsNote).",
    inputSchema: { slug: z.string(), query: z.string().optional().describe("Name fragment; empty = the most frequent characters"), limit: z.number().int().min(1).max(100).optional() },
  }, async ({ slug, query, limit }) => {
    const entry = showOrThrow(slug); const { model } = entry;
    const q = norm(query || "");
    const pool = q ? Object.entries(model.charCount).filter(([c]) => norm(c).includes(q)).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])) : model.characters;
    const rows = pool.slice(0, limit || 25).map(([name, count]) => {
      const eps = model.eps.filter(e => e.guests.some(([c]) => c === name));
      const actors = [...new Set(eps.flatMap(e => e.guests.filter(([c]) => c === name).map(([, a]) => a)))];
      return { name, playedBy: actors, episodes: count, codes: eps.map(e => e.code), url: ATE.shareUrl(SITE, entry.slug, { ...ATE.emptyState(), char: name }) };
    });
    track("mcp_search_characters", { show: entry.slug, query: q, results: pool.length });
    return text({ show: entry.slug, matches: pool.length, characters: rows });
  });

  server.registerTool("surprise_me", {
    title: "Surprise me",
    description: "Pick one random episode matching the given filters (same as the site's 🎲 button). Great for 'what should I watch tonight?'.",
    inputSchema: { slug: z.string(), ...FILTERS },
  }, async (args) => {
    const entry = showOrThrow(args.slug);
    const { state, watched, warnings } = buildState(entry, args);
    const list = ATE.filter(entry.model.eps, state, { axis: entry.model.axis, watched });
    if (!list.length) return text({ show: entry.slug, warnings: [...warnings, "No episodes match those filters."], poolSize: 0, url: ATE.shareUrl(SITE, entry.slug, state) });
    const pick = list[Math.floor(Math.random() * list.length)];
    track("mcp_surprise_me", { show: entry.slug, pool_size: list.length, episode: pick.code });
    return text({ show: entry.slug, poolSize: list.length, warnings, filtersUrl: ATE.shareUrl(SITE, entry.slug, state), episode: epSummary(entry, pick, { full: true }) });
  });

  server.registerTool("next_episode", {
    title: "Next episode to watch",
    description: "Given what the user has already watched, return the next unwatched episode(s) in air order — optionally within filters (e.g. 'next unwatched episode of the Glory arc'). Stateless: pass the watched list each call.",
    inputSchema: { slug: z.string(), ...FILTERS, count: z.number().int().min(1).max(20).optional().describe("How many upcoming episodes to return (default 1)") },
  }, async (args) => {
    const entry = showOrThrow(args.slug);
    const { state, watched, warnings } = buildState(entry, { ...args, sort: "air", hideWatched: true, onlyWatched: false });
    const list = ATE.filter(entry.model.eps, state, { axis: entry.model.axis, watched });
    track("mcp_next_episode", { show: entry.slug, watched: watched.size, remaining: list.length });
    return text({ show: entry.slug, watchedCount: watched.size, remaining: list.length, warnings, url: ATE.shareUrl(SITE, entry.slug, state), next: list.slice(0, args.count || 1).map(e => epSummary(entry, e)) });
  });

  server.registerTool("share_link", {
    title: "Share link",
    description: "Build a URL that opens the site with these filters applied (and optionally an episode's detail card open). Same filter args as find_episodes.",
    inputSchema: { slug: z.string(), ...FILTERS, episode: z.string().optional().describe("Episode code to open on load, e.g. S05E16") },
  }, async (args) => {
    const entry = showOrThrow(args.slug);
    const { state, warnings } = buildState(entry, args);
    let ep = "";
    if (args.episode) { const e = entry.model.byCode.get(codeOf(args.episode)); if (e) ep = e.code; else warnings.push(`Unknown episode "${args.episode}"; link built without it.`); }
    track("mcp_share_link", { show: entry.slug });
    return text({ url: ATE.shareUrl(SITE, entry.slug, state, { ep }), warnings });
  });

  // Resources: whole-package reads for clients that want to reason in-context.
  server.registerResource("shows", "eras://shows", { title: "Show index", description: "All shows on Across the Eras", mimeType: "application/json" },
    async uri => ({ contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(DATA.index) }] }));
  server.registerResource("chart", new ResourceTemplate("eras://shows/{slug}/chart", { list: undefined }), { title: "Era chart", description: "A show's full era chart + season metadata", mimeType: "application/json" },
    async (uri, { slug }) => { const { model } = showOrThrow(slug); return { contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify({ axis: model.axis, seasons: model.seasonMeta, chart: chartFor(model) }) }] }; });
  server.registerResource("tags", new ResourceTemplate("eras://shows/{slug}/tags", { list: undefined }), { title: "Vibes / tags", description: "A show's tag definitions and per-episode tags", mimeType: "application/json" },
    async (uri, { slug }) => { const entry = showOrThrow(slug); const byEp = {}; entry.model.eps.forEach(e => { byEp[e.code] = [...e.tags]; }); return { contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify({ tags: entry.model.tagDefs, episodes: byEp }) }] }; });
  server.registerResource("episodes", new ResourceTemplate("eras://shows/{slug}/episodes", { list: undefined }), { title: "Episodes", description: "A show's episode list (code, title, air date, rating, summary, tags)", mimeType: "application/json" },
    async (uri, { slug }) => { const entry = showOrThrow(slug); return { contents: [{ uri: uri.href, mimeType: "application/json", text: JSON.stringify(entry.model.eps.map(e => epSummary(entry, e))) }] }; });

  return server;
}

// ---------- HTTP ----------
const CORS = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Accept, Mcp-Session-Id, Mcp-Protocol-Version, Authorization", "Access-Control-Expose-Headers": "Mcp-Session-Id" };
const readBody = req => new Promise((res, rej) => { let b = ""; req.on("data", c => { b += c; if (b.length > 1e6) req.destroy(); }); req.on("end", () => res(b)); req.on("error", rej); });

const httpServer = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://x");
  Object.entries(CORS).forEach(([k, v]) => res.setHeader(k, v));
  if (req.method === "OPTIONS") { res.writeHead(204); return res.end(); }
  if (url.pathname === "/healthz") { res.writeHead(200, { "Content-Type": "text/plain" }); return res.end("ok\n"); }
  if (url.pathname === "/mcp" || url.pathname === "/mcp/") {
    // A plain browser GET (no SSE accept) gets a friendly pointer instead of a protocol error.
    if (req.method === "GET" && !(req.headers.accept || "").includes("text/event-stream")) {
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify({ name: "across-the-eras", version: VERSION, transport: "streamable-http", endpoint: `${SITE}/mcp`, docs: `${SITE}/docs/`, shows: DATA.shows.size }, null, 2));
    }
    try {
      let body;
      if (req.method === "POST") { const raw = await readBody(req); try { body = raw ? JSON.parse(raw) : undefined; } catch { res.writeHead(400, { "Content-Type": "application/json" }); return res.end(JSON.stringify({ jsonrpc: "2.0", error: { code: -32700, message: "Parse error" }, id: null })); } }
      // Stateless: fresh server+transport per request, so replicas need no shared state.
      const server = buildServer();
      const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
      res.on("close", () => { transport.close(); server.close(); });
      await server.connect(transport);
      await transport.handleRequest(req, res, body);
    } catch (err) {
      console.error("[mcp] request failed:", err);
      if (!res.headersSent) { res.writeHead(500, { "Content-Type": "application/json" }); res.end(JSON.stringify({ jsonrpc: "2.0", error: { code: -32603, message: "Internal error" }, id: null })); }
    }
    return;
  }
  res.writeHead(404, { "Content-Type": "text/plain" }); res.end("not found\n");
});

if (require.main === module) {
  httpServer.listen(PORT, () => console.log(`[mcp] across-the-eras MCP listening on :${PORT}/mcp (site ${SITE})`));
}
module.exports = { buildServer, httpServer, DATA };
