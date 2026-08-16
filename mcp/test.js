// Smoke tests: (1) filter.js semantics on real show data, (2) the MCP server end-to-end over Streamable HTTP.
// Run: node mcp/test.js   (needs no network)
const assert = require("node:assert/strict");
const ATE = require("../filter.js");
const { loadAll } = require("./load.js");

process.env.POSTHOG_KEY = ""; // no analytics from tests
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

  // ---- MCP end-to-end ----
  await new Promise(r => httpServer.listen(0, r));
  const port = httpServer.address().port;
  const client = new Client({ name: "test", version: "0" });
  await client.connect(new StreamableHTTPClientTransport(new URL(`http://127.0.0.1:${port}/mcp`)));
  const tools = (await client.listTools()).tools.map(t => t.name).sort();
  assert.deepEqual(tools, ["find_episodes", "get_episode", "get_show", "list_shows", "next_episode", "search_characters", "share_link", "surprise_me"]);
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
  const err = await client.callTool({ name: "get_show", arguments: { slug: "nope" } }); assert.ok(err.isError);
  const res = await client.readResource({ uri: "eras://shows/buffy/chart" }); assert.ok(JSON.parse(res.contents[0].text).chart.length);
  await client.close(); httpServer.close();
  console.log("✓ mcp server (8 tools, resources, errors)");
})().catch(e => { console.error("✗", e); process.exit(1); });
