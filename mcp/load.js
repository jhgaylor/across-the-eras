// Loads every shows/<slug>/ package from disk into the same in-memory model the browser builds,
// using the shared filter engine (../filter.js). Read-only; nothing here touches the network.
const fs = require("node:fs");
const path = require("node:path");
const ATE = require("../filter.js");

const SHOWS_DIR = process.env.SHOWS_DIR || path.join(__dirname, "..", "shows");

// eras.js / tags.js are classic scripts that assign onto `window` — same trick scripts/validate-shows.py uses.
function loadWindowScript(file) {
  const window = {};
  new Function("window", fs.readFileSync(file, "utf8"))(window);
  return window;
}

function loadShow(slug) {
  const dir = path.join(SHOWS_DIR, slug);
  const show = JSON.parse(fs.readFileSync(path.join(dir, "show.json"), "utf8"));
  const episodes = JSON.parse(fs.readFileSync(path.join(dir, "episodes.json"), "utf8"));
  let cast = {}; try { cast = JSON.parse(fs.readFileSync(path.join(dir, "cast.json"), "utf8")); } catch { }
  const eras = loadWindowScript(path.join(dir, "eras.js"));
  const tags = loadWindowScript(path.join(dir, "tags.js"));
  const axis = eras.CHART_AXIS || show.axis || "season";
  const model = ATE.prepare({
    episodes, cast, epTags: tags.EP_TAGS || {}, tagDefs: tags.TAG_DEFS || {},
    eraCats: eras.ERA_CATS || [], eras: eras.ERAS || {}, seasonMeta: eras.SEASON_META || {}, axis,
  });
  // Tag usage counts + character list are handy for tool responses; compute once.
  const tagCounts = {};
  model.eps.forEach(e => e.tags.forEach(t => { tagCounts[t] = (tagCounts[t] || 0) + 1; }));
  model.characters = ATE.characterList(model.charCount); // [[name, count], ...]
  model.byCode = new Map(model.eps.map(e => [e.code, e]));
  model.byId = new Map(model.eps.map(e => [e.id, e]));
  return { slug, show, model, tagCounts };
}

function loadAll() {
  const index = JSON.parse(fs.readFileSync(path.join(SHOWS_DIR, "index.json"), "utf8"));
  const shows = new Map();
  for (const entry of index) {
    try { shows.set(entry.slug, loadShow(entry.slug)); }
    catch (err) { console.error(`[mcp] failed to load show ${entry.slug}: ${err.message}`); }
  }
  return { index, shows };
}

module.exports = { loadAll, loadShow, SHOWS_DIR };
