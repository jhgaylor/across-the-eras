# across-the-eras — show package contract

One repo, many shows. Every show lives in `shows/<slug>/` and is fully self-contained. The shared engine
(`index.html`, `app.js`, `filter.js`, `styles.css`) loads a show's package at runtime; nothing about a show is
hard-coded in the engine. `filter.js` (matching + URL format) is also loaded by the MCP server in `mcp/`, which reads
the same package files from disk — so anything that works on the site works as a tool, with no extra work per show.

This document describes the trusted, repository-native format. Public MCP clients submit the equivalent declarative
JSON contract; the server generates `eras.js` and `tags.js` without executing client code. See [SUBMISSIONS.md](SUBMISSIONS.md).

Reference implementations (read these first, they are the format):
- `/Users/jake/dev/jhgaylor/moose-and-squirrel/` — Supernatural, **season axis**, 15 seasons
- `/Users/jake/dev/jhgaylor/goat-gideon/` — Criminal Minds, season axis, 19 seasons (roster rows, mid-season handoffs)
- `/Users/jake/dev/jhgaylor/greater-fool/` — The Newsroom, **episode axis** (25 columns), "real news covered" row

## Files in `shows/<slug>/`

### `show.json` (new — the only file the old repos don't have)
```json
{
  "slug": "doctor-who",
  "title": "DOCTOR WHO",                     // hero line 1 (rendered as-is; usually ALL CAPS)
  "subtitle": "Across the Eras",             // hero line 2
  "blurb": "One or two sentences for the hero. Plain text, no HTML.",
  "emoji": "🚪",                             // used on the show-picker card
  "tvmazeId": 210,                           // for provenance; may be an array if stitched from several TVmaze shows
  "axis": "season",                          // "season" | "episode"  (must match CHART_AXIS in eras.js)
  "accent": "#5fe0e6",                       // primary accent (chips, glows, active states)
  "accentText": "#062327",                   // text color on accent backgrounds (#fff for dark accents)
  "heroGradient": "#1c2a30",                 // dark tint behind the hero title
  "heroFont": { "google": "Cinzel:wght@600;800", "family": "Cinzel, serif" },
  "regularsNote": "Sentence shown under the guest-character dropdown explaining who the series regulars are.",
  "chartHint": "Optional override for the one-line hint above the chart.",
  "credits": "Optional attribution sentence for the hero (e.g. chart adapted from …). Plain text.",
  "episodeCount": 327,
  "seasons": 15
}
```

### `episodes.json`
Array, in air order, from TVmaze `/shows/<id>/episodes`:
`{"id", "s", "e", "title", "air", "summary", "img", "rating"}` — see any reference repo's `data/episodes.json`
and the normalizer at the top of `data/fetch_cast.py`'s sibling script (the reference repos generated it with a
6-line python snippet: strip HTML from summary, `img` = `image.medium`, `rating` = `rating.average`).
Include specials only if they are part of the canonical watch order (Doctor Who: yes, put them in the season they
belong to per TVmaze; keep TVmaze's `s`/`e` numbering). If a show is split across multiple TVmaze entries
(e.g. Doctor Who 2005 + Doctor Who 2023), stitch them and renumber seasons so they are contiguous integers;
say so in `show.json.tvmazeId` (array) and in the SEASON_META years.

### `cast.json`
`{"<episodeId>": [["Character name","Actor name"], ...], ...}` from TVmaze `/episodes/<id>/guestcast`.
Use `data/fetch_cast.py` (rate-limited, resumable) then `data/build_cast.py` from any reference repo — copy them
into `shows/<slug>/` (or run from there with paths adjusted), then delete `guestcast_raw.json`, `fetch_cast.log`
and `tvmaze_raw.json`. Only `episodes.json`, `cast.json`, `eras.js`, `tags.js`, `show.json` ship.

### `eras.js`
Sets globals exactly like the reference repos: `window.ERA_CATS` (ordered `[key,label]` list; the FIRST
category's first row is used for the per-card accent stripe, so make it the showrunner/era row),
`window.ERAS` (per key: either a flat array of bars = single row, or an array of rows), `window.SEASON_META`
(`{season: {years, showrunner}}` for every season), and optionally `window.CHART_AXIS = "episode"`.
Bar = `[label, start, end, bg, fg]`. On the season axis start/end are season numbers; on the episode axis they
are 1-based absolute episode indexes in `episodes.json` order. **Bars in one row must not overlap** — check with the
node one-liner used in goat-gideon's history (sort by start; each start must be ≥ previous end+1). Mid-season
handoffs are drawn at season granularity with the exact episode noted in the label, e.g. `"Gideon (leaves 3×02)"`.
Choose colors so labels are readable (fg vs bg). Aim for 5–7 categories and 15–35 bars per category max; think
"what would a rewatcher want to click": showrunners/eras, companions/roster, big bads/villains, arcs, recurring
characters, locations/home bases, real-world time period, network/format — whichever fit the show.

### `tags.js`
Sets `window.TAG_DEFS` (`{key: {label, desc}}`) and `window.EP_TAGS` (`{"S.E": [tagKeys]}`; keys are the
TVmaze season.episode numbers you used in episodes.json). Season premieres/finales are auto-tagged by the engine —
don't add those. Include: fan favorite, gut-punch/heavy, arc/mythology vs standalone (or the show's equivalent),
two-parters, milestones, format experiments, plus character-spotlight tags for the leads. Be honest: tag what you
actually know; a smaller accurate set beats a padded one. Every episode should ideally have ≥1 tag; standalone
episodes can just get the show's "classic standalone" tag.

## Rules for show agents
- Work ONLY inside `shows/<slug>/`. Do not touch anything else in the repo. Do not `git commit`.
- Validate: `node -e` load of eras.js and tags.js (they must not throw when `window={}`), the no-overlap check,
  every EP_TAGS key exists in episodes.json, every SEASON_META season exists, JSON parses.
- Data comes from TVmaze (no key needed, ~20 req/10s). Guest cast is 1 request per episode — run it in the
  background early; for 150–870 episodes it takes 2–10 minutes.
- Finish by writing `shows/<slug>/NOTES.md`: what you're confident about, what's guessed, anything the engine
  might need (e.g. more than 20 seasons, unusual numbering).

## What the engine agent builds (for reference)
- `index.html` = landing page + app shell. `/` lists shows from `shows/index.json`
  (`[{"slug","title","emoji","blurb","episodeCount","seasons","accent"}]`, generated by `scripts/build-index.py`
  from the show.json files). `/<slug>/` (nginx `try_files` → `index.html`) loads that show's package.
- Theme (accent, hero font, gradient) applied from `show.json` at load; hero/blurb/regulars note text likewise.
- PostHog: one project (token `phc_tx8PYa33kcFgtTxUz3DwJG7FqGoRpyUSjzwKJEmf4xjP`, US), `posthog.register({show: slug})`
  after load, same explicit events as the reference repos, autocapture off.
- Docker (nginx, port 8080, `/healthz`), `.github/workflows/build.yml` (multi-arch, GHCR
  `ghcr.io/jhgaylor/across-the-eras`, sha-pin into `k8s/deployment.yaml`), `k8s/` for `skipto.tv`
  in namespace `across-the-eras` — copy the shape from greater-fool exactly (the placeholder image sha in the
  first commit must be `sha-0000000000000000000000000000000000000000`).
- Imports the three existing shows into `shows/supernatural`, `shows/criminal-minds`, `shows/newsroom` (copy their
  data files, author their `show.json` from their index.html/styles.css branding).
