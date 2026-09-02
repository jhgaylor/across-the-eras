// Smoke tests: (1) filter.js semantics on real show data, (2) the MCP server end-to-end over Streamable HTTP.
// Run: node mcp/test.js   (needs no network)
const assert = require("node:assert/strict");
const ATE = require("../filter.js");
const { loadAll } = require("./load.js");
const { validateSubmission, filesForSubmission, submitToGitHub } = require("./submissions.js");

process.env.POSTHOG_KEY = ""; // no analytics from tests
process.env.SUBMISSIONS_ENABLED = ""; // never let a developer/CI credential enable public writes in tests
const { httpServer } = require("./server.js");
const { Client } = require("@modelcontextprotocol/sdk/client/index.js");
const { StreamableHTTPClientTransport } = require("@modelcontextprotocol/sdk/client/streamableHttp.js");

(async () => {
  const { shows } = loadAll();
  const buffy = shows.get("buffy");
  assert.ok(buffy, "buffy loads");
  const { model } = buffy;

  // ---- filter.js ----
  assert.equal(model.eps.length, 144);
  assert.ok(model.byCode.get("S05E16").tags.has("heavy"), "The Body is tagged heavy");
  assert.ok(model.byCode.get("S01E01").tags.has("premiere") && model.byCode.get("S07E22").tags.has("finale"), "auto premiere/finale");
  const glory = model.bars.filter(b => /glory/i.test(b.name));
  assert.ok(glory.length, "Glory bar exists");
  let st = ATE.emptyState(); st.eras = [glory[0]];
  const gl = ATE.filter(model.eps, st, { axis: model.axis });
  assert.ok(gl.every(e => e.s >= glory[0].s1 && e.s <= glory[0].s2), "era filter restricts to bar's seasons");
  st = ATE.emptyState(); st.seasons.add(2); st.tags.add("heavy");
  const s2h = ATE.filter(model.eps, st, { axis: model.axis });
  assert.ok(s2h.length && s2h.every(e => e.s === 2 && e.tags.has("heavy")), "season+tag AND");
  st = ATE.emptyState(); st.minRating = 9; st.sort = "rating";
  const top = ATE.filter(model.eps, st, { axis: model.axis });
  assert.ok(top.length && top.every((e, i) => !i || top[i - 1].rating >= e.rating), "rating sort desc");
  st = ATE.emptyState(); st.q = "hush";
  assert.ok(ATE.filter(model.eps, st, { axis: model.axis }).some(e => e.title === "Hush"), "free text");
  const watched = new Set([model.byCode.get("S01E01").id]);
  st = ATE.emptyState(); st.hideWatched = true;
  assert.equal(ATE.filter(model.eps, st, { axis: model.axis, watched }).length, 143, "hideWatched");
  st = ATE.emptyState(); st.onlyWatched = true;
  assert.equal(ATE.filter(model.eps, st, { axis: model.axis, watched }).length, 1, "onlyWatched");
  // URL round trip
  st = ATE.emptyState(); st.seasons.add(5); st.tags.add("heavy"); st.eras = [glory[0]]; st.char = "Faith"; st.q = "slayer"; st.minRating = 8; st.sort = "rating";
  const hash = ATE.stateToHash(st, { ep: "S05E16" });
  const back = ATE.hashToState("#" + hash, { tagDefs: model.tagDefs, bars: model.bars });
  assert.deepEqual([...back.state.seasons], [5]); assert.deepEqual([...back.state.tags], ["heavy"]);
  assert.equal(back.state.eras.length, 1); assert.equal(back.state.eras[0].name, glory[0].name);
  assert.equal(back.state.char, "Faith"); assert.equal(back.state.q, "slayer"); assert.equal(back.state.minRating, 8); assert.equal(back.state.sort, "rating"); assert.equal(back.ep, "S05E16");
  assert.equal(ATE.shareUrl("https://x", "buffy", ATE.emptyState()), "https://x/buffy/", "empty state → bare url");
  // episode-axis show
  const newsroom = shows.get("newsroom");
  assert.equal(newsroom.model.axis, "episode");
  st = ATE.emptyState(); st.eras = [newsroom.model.bars[0]];
  const nr = ATE.filter(newsroom.model.eps, st, { axis: "episode" });
  assert.ok(nr.length && nr.every(e => e.idx >= newsroom.model.bars[0].s1 && e.idx <= newsroom.model.bars[0].s2), "episode-axis era filter uses idx");
  console.log("✓ filter.js");

  // ---- anonymous submission validation + safe file generation ----
  const proposal = {
    show: { slug: "tiny-show", title: "TINY SHOW", subtitle: "Across the Eras", blurb: "A tiny test show.", emoji: "📺", tvmazeId: 123,
      axis: "season", accent: "#123456", accentText: "#ffffff", heroGradient: "#111111",
      heroFont: { google: "Inter:wght@600", family: "Inter, sans-serif" }, regularsNote: "The regular cast is represented in the chart." },
    episodes: [
      { id: 1001, s: 1, e: 1, title: "Pilot", air: "2020-01-01", summary: "It begins.", img: "https://example.com/1.jpg", rating: 8 },
      { id: 1002, s: 1, e: 2, title: "Second", air: "2020-01-08", summary: "It continues.", img: "", rating: null },
    ],
    cast: { "1001": [["Friend", "Actor Person"]] },
    chart: { categories: [{ key: "eras", label: "Creative era", rows: [[{ label: "The beginning", start: 1, end: 1, background: "#123456", foreground: "#ffffff" }]] }],
      seasonMeta: { "1": { years: "2020", showrunner: "A. Showrunner" } } },
    tags: { definitions: { fanfav: { label: "Fan favorite", desc: "A favorite." }, motw: { label: "Standalone", desc: "A standalone story." } },
      episodes: { "1.1": ["fanfav"], "1.2": ["motw"] } },
    notes: "Synthetic fixture; all fields are intentional.",
    sources: [{ url: "https://www.tvmaze.com/shows/123/tiny-show", label: "TVmaze" }],
  };
  const checked = validateSubmission(proposal, []);
  assert.equal(checked.ok, true, checked.errors?.join("; "));
  const generated = filesForSubmission(checked.data, []);
  assert.equal(Object.keys(generated).length, 7);
  assert.ok(generated["shows/tiny-show/eras.js"].startsWith("// Generated"));
  assert.ok(!generated["shows/tiny-show/eras.js"].includes("eval("));
  assert.equal(JSON.parse(generated["shows/tiny-show/show.json"]).episodeCount, 2);
  assert.equal(JSON.parse(generated["shows/index.json"])[0].slug, "tiny-show");
  const generatedWindow = {};
  new Function("window", generated["shows/tiny-show/eras.js"])(generatedWindow);
  new Function("window", generated["shows/tiny-show/tags.js"])(generatedWindow);
  const generatedModel = ATE.prepare({ episodes: proposal.episodes, cast: proposal.cast, epTags: generatedWindow.EP_TAGS,
    tagDefs: generatedWindow.TAG_DEFS, eraCats: generatedWindow.ERA_CATS, eras: generatedWindow.ERAS,
    seasonMeta: generatedWindow.SEASON_META, axis: proposal.show.axis });
  assert.equal(generatedModel.eps.length, 2, "generated scripts load in the shared engine");
  const overlap = structuredClone(proposal); overlap.chart.categories[0].rows[0].push({ label: "Overlap", start: 1, end: 1, background: "#000000" });
  assert.equal(validateSubmission(overlap, []).ok, false, "overlapping anonymous chart data is rejected");
  assert.equal(validateSubmission(proposal, ["tiny-show"]).ok, false, "existing slugs are rejected");
  const requests = [];
  const mockFetch = async (url, init = {}) => {
    const parsedUrl = new URL(url);
    const path = parsedUrl.pathname + parsedUrl.search;
    const method = init.method || "GET";
    requests.push({ path, method, body: init.body && JSON.parse(init.body) });
    const reply = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });
    if (path.endsWith("/pulls?state=open&per_page=100") && method === "GET") return reply([]);
    if (path.includes("/contents/shows/tiny-show/show.json")) return reply({ message: "Not Found" }, 404);
    if (path.endsWith("/git/ref/heads/main")) return reply({ object: { sha: "base-commit" } });
    if (path.endsWith("/git/commits/base-commit")) return reply({ tree: { sha: "base-tree" } });
    if (path.includes("/contents/shows/index.json")) return reply({ content: Buffer.from("[]").toString("base64") });
    if (path.includes("/git/ref/heads/submissions/")) return reply({ message: "Not Found" }, 404);
    if (path.endsWith("/git/blobs")) return reply({ sha: `blob-${requests.length}` }, 201);
    if (path.endsWith("/git/trees")) return reply({ sha: "new-tree" }, 201);
    if (path.endsWith("/git/commits") && method === "POST") return reply({ sha: "new-commit" }, 201);
    if (path.endsWith("/git/refs")) return reply({ ref: "created" }, 201);
    if (path.endsWith("/pulls") && method === "POST") return reply({ html_url: "https://github.com/jhgaylor/across-the-eras/pull/99", number: 99 }, 201);
    throw new Error(`unexpected mock GitHub request: ${method} ${path}`);
  };
  const submitted = await submitToGitHub(checked.data, checked.warnings, { token: "test-token", fetchImpl: mockFetch });
  assert.equal(submitted.number, 99);
  assert.equal(requests.filter(r => r.path.endsWith("/git/blobs")).length, 7, "only the seven generated files are written");
  assert.ok(requests.find(r => r.path.endsWith("/git/trees")).body.tree.every(x => x.path === "shows/index.json" || x.path.startsWith("shows/tiny-show/")));
  console.log("✓ show submission validation + generation");

  // ---- MCP end-to-end ----
  await new Promise(r => httpServer.listen(0, "127.0.0.1", r));
  const port = httpServer.address().port;
  const client = new Client({ name: "test", version: "0" });
  await client.connect(new StreamableHTTPClientTransport(new URL(`http://127.0.0.1:${port}/mcp`)));
  const tools = (await client.listTools()).tools.map(t => t.name).sort();
  assert.deepEqual(tools, ["find_episodes", "get_episode", "get_show", "get_submission_guide", "list_shows", "next_episode", "search_characters", "share_link", "submit_show", "surprise_me"]);
  const call = async (name, args) => { const r = await client.callTool({ name, arguments: args }); assert.ok(!r.isError, `${name} errored: ${JSON.stringify(r.content)}`); return r.structuredContent; };
  const ls = await call("list_shows", {}); assert.ok(ls.shows.length >= 7);
  const gs = await call("get_show", { slug: "buffy" }); assert.ok(gs.chart.length && gs.tags.some(t => t.key === "heavy") && gs.seasons.length === 7);
  const fe = await call("find_episodes", { slug: "buffy", eras: ["glory"], tags: ["Gut-punch"], sort: "rating" });
  assert.ok(fe.total > 0 && !fe.warnings.some(w => /^No chart bar/.test(w)), "loose era + tag label resolve"); assert.ok(fe.warnings.some(w => /matched 4 bars/.test(w)), "ambiguity warned"); assert.ok(fe.url.includes("#"), "share url");
  assert.ok(fe.episodes.every(e => e.season === 5), "glory → season 5");
  const bad = await call("find_episodes", { slug: "buffy", eras: ["nonsense bar"], tags: ["nope"] });
  assert.equal(bad.warnings.length, 2, "warnings for unknown era + tag");
  const ge = await call("get_episode", { slug: "buffy", episode: "5x16" }); assert.equal(ge.title, "The Body"); assert.ok(ge.context && ge.guestCast && ge.next);
  const sc = await call("search_characters", { slug: "buffy", query: "faith" }); assert.ok(sc.characters[0].name.includes("Faith") && sc.characters[0].codes.length);
  const sm = await call("surprise_me", { slug: "buffy", seasons: [3] }); assert.equal(sm.episode.season, 3);
  const nx = await call("next_episode", { slug: "buffy", watched: ["S01E01", "1x02", model.byCode.get("S01E03").id] }); assert.equal(nx.next[0].code, "S01E04");
  const sl = await call("share_link", { slug: "buffy", seasons: [2], episode: "S02E17" }); assert.ok(sl.url.includes("s=2") && sl.url.includes("ep=S02E17"));
  const guide = await call("get_submission_guide", {}); assert.equal(guide.acceptsSubmissions, false); assert.ok(guide.workflow.length);
  const err = await client.callTool({ name: "get_show", arguments: { slug: "nope" } }); assert.ok(err.isError);
  const res = await client.readResource({ uri: "eras://shows/buffy/chart" }); assert.ok(JSON.parse(res.contents[0].text).chart.length);
  await client.close(); httpServer.close();
  console.log("✓ mcp server (10 tools, resources, errors)");
})().catch(e => { console.error("✗", e); process.exit(1); });
