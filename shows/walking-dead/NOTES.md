# The Walking Dead — package notes

## Scope

AMC **main series only**, 2010–2022: 11 seasons, 177 episodes, TVmaze show **73**. Deliberately excluded:
Fear the Walking Dead (1824), World Beyond (45194), Dead City (60879), Daryl Dixon (64501), The Ones Who Live,
Tales of the Walking Dead (50287) and the webisode packs (Torn Apart, The Oath, Red Machete). Where a character
crosses over, the chart notes the exit episode and the destination show rather than following them.

TVmaze returned no specials for show 73, so `episodes.json` is a clean 1:1 with the broadcast run and no
renumbering was needed. Season lengths: 6 / 13 / 16×7 / 22 / 24. The two irregular ones are real:

- **Season 10 has 22 episodes.** 10×01–10×16 are the original order (10×16 "A Certain Doom" was the
  pandemic-delayed finale that aired Oct 2020); 10×17–10×22 are the six "bonus" episodes that aired
  Feb–Apr 2021. The engine's auto-finale tag therefore lands on 10×22 "Here's Negan", which is correct —
  it was the last episode of season 10 — but a rewatcher may think of 10×16 as the real finale.
- **Season 11 has 24 episodes** in three 8-episode parts (Aug–Oct 2021, Feb–Apr 2022, Oct–Nov 2022).
  11×17 and 11×18 share an airdate (both dropped 2022-10-02).

## Data provenance

- `episodes.json` — TVmaze `/shows/73/episodes`, HTML stripped from summaries, `img` = `image.medium`,
  `rating` = `rating.average`. Every episode has a rating.
- `cast.json` — TVmaze `/episodes/<id>/guestcast`, one request per episode, 177/177 fetched, 1,839 credits.
  Parentheticals stripped from character names, duplicates removed per episode. The temporary
  `fetch_cast.py` / `guestcast_raw.json` / `fetch_cast.log` were deleted.
- `eras.js` / `tags.js` — hand-built for this project from my own knowledge of the show. Not scraped.

**Guest-cast caveat worth knowing:** TVmaze treats the main-title cast as regulars, so Rick, Daryl, Carol,
Michonne, Glenn, Maggie, Carl, Negan, Eugene, Rosita, Gabriel, Aaron, Ezekiel and the rest are **not** in
`cast.json` for the seasons in which they were billed as regulars. The dropdown is therefore Merle, the
Governor, Milton, Martinez, Dawn Lerner, Deanna, Jesus, Dwight, Simon, Jadis, Alpha, Beta, Jerry, Dianne,
Nabila, Elijah, Pamela Milton and the one-episode faces. The `regularsNote` in `show.json` says so. Note
that a few characters appear *both* ways — e.g. "Maggie Greene" (13 credits) and "Hershel Greene" (12) show
up in guest cast for the seasons before/after they were regulars, and "Hershel Rhee" (17) is Maggie's son.

## Chart

Season axis, 11 columns, 6 categories, 163 bars. Every row is non-overlapping (validator checks this).
The first category's first row is the showrunner row, as the contract requires, so the per-card accent
stripe is the showrunner era.

| Category | Rows | Bars | What's in it |
|---|---|---|---|
| Showrunner & format | 4 | 14 | Darabont / Mazzara / Gimple / Kang; AMC; episode counts incl. the S10 bonus block and the S11 three-part split; spinoff hand-offs |
| Locations & home bases | 6 | 20 | Atlanta & the CDC → the farm → the prison → the road/Terminus → Alexandria; Woodbury, Grady, the Sanctuary, the Hilltop, the Kingdom, Oceanside, the junkyard, Meridian, the Commonwealth |
| The originals — Rick's group | 13 | 29 | Rick, Daryl, Carol, Glenn, Carl, Lori, Judith, Shane, Michonne, Dale, Tyreese, T-Dog, Abraham, Andrea, Eugene, Sophia, Sasha, Maggie, Merle, Gabriel, the Magna group… |
| The communities & later arrivals | 13 | 32 | Hershel, Beth, Aaron, Rosita, Tara, Enid, Jesus, Negan, Ezekiel's people, Dwight, Sherry, Jadis, Gregory, Dante, Leah, Princess, Elijah, Virgil, Morgan's three stints… |
| Big bads & threats | 5 | 30 | Per-season big bad; secondary factions (inmates, Claimers, Wolves, Scavengers, Highwaymen, Reapers); a walker-herd row; lieutenants; and a "rot from inside" row (Milton, Eugene's lie, Gregory, Hornsby) |
| Major arcs | 6 | 38 | Per-season arc; the relationships row; a Carol row; a Daryl row; a row of the nine biggest gut-punches; and a "bigger picture" row (DC, the alliance, the bridge, the border, the class system) |

### Things I'm confident about

Showrunner tenure; every death/exit episode number in the labels; the season each community is introduced
and lost; the big-bad ranges; the mid-season split structure. Spot-checked against the episode titles and
airdates in `episodes.json`.

### Judgement calls / things a fan might argue with

- **Darabont at season 1 only.** He was fired during season 2's production and is credited on 2×01; Mazzara's
  bar is labelled "from 2×02". Drawing him across half of season 2 would be more literally accurate and much
  less readable, so I followed the brief.
- **Michonne's bar starts at season 3**, though she first appears (hooded, silent) at the very end of 2×13.
  The label says "arrives 2×13". Same pattern for Judith: her bar starts at season 4, label says "born 3×04",
  because Lori's bar has to own season 3.
- **Merle gets two bars** (1×02 on the roof, then 3×01–3×15) rather than one 1–3 bar, because he is entirely
  absent from season 2 and a single bar would mis-filter. Morgan gets three for the same reason (1×01, 3×12
  "Clear", then 5×16–8×16).
- **The Sanctuary at 6–9 and the Kingdom at 7–9.** Both linger past their functional end; I cut them where
  they stop being anyone's home base rather than at the last time the set appears.
- **Hilltop "burns 10×12"** — destroyed during "Walk with Us"; the survivors are at the Tower for the rest
  of the season, hence the separate Tower bar.
- **The Wolves at 5–6**: they're first glimpsed in season 5 (the W-carved walkers, 5×16) and wiped out by
  6×09.

## Tags

22 tag keys, all 177 episodes carry at least one. Premiere/finale are left to the engine.

TWD's structural signature is the mid-season split, so `midfin`/`midprem` are tagged explicitly: episode 8
and 9 of each 16-episode season (3–10), 2×07/2×08 for the 7/6 split, and both boundaries of season 11's
three-part run (11×08/11×09 and 11×16/11×17). Season 1 has no split. The six season-10 bonus episodes sit
after 10×16 with no split of their own.

Frequency after a deliberate trim pass: `heavy` 61, `fanfav` 56, `setpiece` 48, `daryl` 46, `carol` 44,
`rick` 43, `maggie` 41, `villain` 40, `negan` 40, `death` 39, `slow` 32, `michonne` 32, `bottle` 29,
`war` 26, `flashback` 18, `newcomm` 14, `glenn` 13, `carl` 13, `midfin` 11, `midprem` 11, `timejump` 4.

- `slow` is applied honestly (32 episodes ≈ 18%) — mostly season 7's back half, season 8's middle stretch
  and the season 2 Nebraska run. It is a "table-setting" label, not a "bad episode" label, and the tag
  description says so.
- `death` means a series regular or a major recurring character. Deanna is tagged on both 6×08 (bitten) and
  6×09 (dies).
- `bottle` covers the show's small-cast one-location hours: "Clear", "Still", "The Grove", "Consumed",
  "Here's Not Here", "The Same Boat", "The Cell", "Look at the Flowers", "Here's Negan", and most of the
  season-10 bonus block.
- `timejump` is only the four episodes where the story actually skips: 9×01, 9×05, 9×06, 11×24.

## Branding

Accent `#8fae3f` — a swampy rot-green. I chose green over the suggested dried-blood red because the gallery
already has two reds (Buffy `#d7263d`, Criminal Minds `#e5484d`) and an amber (The Wire `#d98e04`); green is
unclaimed and reads as walker rot. Hero font **Rye** (Google) — a distressed wood-type slab, the only
weathered display face in the lineup and distinct from Bebas Neue, Special Elite and Cinzel Decorative.
Emoji 🧟.

## Nothing the engine needs to change

11 seasons (well under 20), contiguous integers, no specials, no stitching, `axis: "season"`.
`python3 scripts/validate-shows.py` passes for this slug.
