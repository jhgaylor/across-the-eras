# Severance — package notes

## Shape
- TVmaze show id **44933** (Apple TV+, 2022– ). 2 seasons, **19 episodes** (9 + 10), **episode axis**
  — with only two seasons a season axis would be two columns wide and useless. Columns 1–9 are S1,
  10–19 are S2. TVmaze `s`/`e` numbering used verbatim; all 19 are type `regular`, no specials.
- Every episode has a summary, an image and a TVmaze rating — no nulls in `episodes.json`.
- `cast.json` covers all 19 episodes: **169 guest credits** across **75 distinct guest characters**.
  The show is still running (status `Running` on TVmaze); season 3 will need a re-fetch and new bars.

## Confident
- Episode data, air dates, ratings and guest cast: straight from TVmaze, unedited.
- Recurring-character bars in `recurring` and `management` are **derived from `cast.json`**, not memory —
  the appearance ranges are exactly the episodes TVmaze credits them in: Doug Graner 1–7 (eps 1×01–1×07),
  Petey 1–4 plus 2×03, Reghabi 1×06–1×07 then 2×03–2×07, Drummond from 2×02, Dr. Mauer from 2×05,
  Natalie 1×03–2×05, the replacement MDR trio (Mark W., Gwendolyn Y., Dario R.) only in 2×01–2×02,
  Lorne in 2×03 and 2×10, the Georges (Gretchen, Jim, Merrick) across S2 plus Jim in 1×06.
- Petey dying **before 1×04** rather than in 1×05 is from the data, not recall: he has no credit in
  1×05, and 1×04's summary is "Mark attends a funeral with Ms. Selvig."
- Dylan's son Jim appearing in **1×06** pins the Overtime-Contingency-at-home scene to that episode.
- Series regulars per TVmaze's show-level cast (11): Mark, Milchick, Helly, Dylan, Devon, Irving,
  Cobel/Mrs. Selvig, Burt, Ms. Casey, Ricken, Miss Huang. None of them appear in the guestcast endpoint,
  so none are in the guest dropdown — hence the `regularsNote`.
- Dan Erickson is creator and showrunner for both seasons; `SEASON_META.showrunner` is the same string
  for both rather than a guessed split.

## Judgement calls
- **Season 1 vs season 2 halves are drawn at episode granularity where the beat is unambiguous**
  (Helena unmasked at Woe's Hollow = ep 13 / 2×04; Irving put on the train = ep 14 / 2×05; Cobel's
  Salt's Neck episode = ep 17 / 2×08) and spanned across a stretch where it isn't (Mark's reintegration
  runs 12–17 because the procedure is staged across several episodes rather than landing in one).
- **Helly/Helena is one row, four bars** — arrival 1–8, the gala reveal as its own single-episode bar at 9,
  Helena posing as Helly 10–13, Helly back 14–19. That single-column reveal bar is the pattern the chart
  uses for "this is the episode it happens in".
- **Two bars were cut rather than guessed.** An earlier draft had a "Break Room under Milchick" bar in S2
  and a "birthing retreat" bar at 2×09; neither could be pinned to a specific episode with confidence,
  so the Break Room row is S1-only and the S2 set-piece bar is just the marching band (2×10).
- **`places` mixes floor departments with outside set pieces** (the birthing cabin, Ricken's book party,
  Salt's Neck) — for a show whose whole premise is the split, "where are we" is the useful filter, and
  keeping them in one category means you can see the outside world interrupting the floor.
- **Tags are honest, not padded.** `experiment` is only the three episodes that genuinely break the show's
  shape (2×04 all outdoors, 2×07 Gemma flashbacks, 2×08 the Salt's Neck detour). `outside` marks the
  episodes with little or no severed floor. Character spotlights only where the episode is actually about
  them. Premieres/finales aren't tagged — the engine does that.
- `secrets` includes a "what the numbers are for" row that is deliberately vague until 2×07, because the
  show is.

## For the engine
- Nothing unusual: 2 contiguous seasons, `CHART_AXIS = "episode"` with 19 columns — the narrowest
  episode-axis show in the repo (Newsroom is 25). Bars are 1-based absolute indexes into `episodes.json`.
- Chart is **6 categories** (seasons, arcs, secrets, management, places, recurring) / **28 rows** /
  **~70 bars**. `arcs` is the tallest at 7 rows.
- Accent `#22b8a0` (Lumon teal) on near-black `#04211c`, hero gradient `#0b1a1d`, hero font
  **Space Grotesk** for the retro-corporate feel, emoji 🛗 (the elevator *is* the severance barrier).
  Distinct from Supernatural's cyan `#5fe0e6` and Silicon Valley's mint `#3ddc84`.
- Show is ongoing — `show.json` `episodeCount`/`seasons` will go stale when S3 airs, and CI's
  `validate-shows.py` will catch the mismatch as soon as `episodes.json` is re-fetched.
