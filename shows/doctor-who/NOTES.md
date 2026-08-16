# Doctor Who — show package notes

**Scope:** the revived series only (2005– ). No classic series, no spin-offs (Torchwood, SJA, Class),
no Confidential/Unleashed.

**196 episodes, 16 seasons, season axis.** `cast.json` has guest cast for all 196.

## Sources and stitching

Two TVmaze shows, so `show.json.tvmazeId` is an array:

- **210** — "Doctor Who" (2005–2022). Provides seasons **1–13** with TVmaze's own season numbers kept.
- **72724** — "Doctor Who" (2023– ). Provides seasons **14–16**, renumbered so seasons stay contiguous
  integers (the engine builds its season chips as `1..max`, so gaps or a restart at 1 would break it).

The 2023+ split:

| Package season | What it is | TVmaze source |
|---|---|---|
| 14 | The three 2023 60th-anniversary specials (Fourteenth Doctor) | 72724 S1, specials before Christmas 2023 |
| 15 | The 2024 run billed on air as "Season 1", with *The Church on Ruby Road* as 15×00 | 72724 S1 |
| 16 | The 2025 run billed on air as "Season 2", with *Joy to the World* as 16×00 | 72724 S2 |

I split 72724's S1 into two package seasons deliberately. TVmaze lumps the 60th specials, the 2024
season and *Joy to the World* into one season, but the Fourteenth and Fifteenth Doctors would then
share a season — and bars in one chart row can't overlap, so the Doctor row would have had to lie.
Splitting at the bi-generation in *The Giggle* keeps "The Doctor" row honest: 14 = Tennant, 15–16 = Gatwa.
`SEASON_META` labels these "2023 · the 60th specials", "2023–24 · billed 'Season 1'", "2024–25 · billed
'Season 2'" so the on-air branding isn't lost.

## How specials are numbered

TVmaze returns specials with `season` set but `number: null`. I kept each special in the season TVmaze
assigns it (which matches the watch order) and gave it a real episode number:

- A special that aired **after** the season's regular episodes continues the numbering.
  So the 2008–10 specials are **4×14 The Next Doctor → 4×18 The End of Time Part Two**; the 2013
  anniversary run is **7×15 The Day of the Doctor** and **7×16 The Time of the Doctor**.
- A special that aired **before** the season's premiere is **E0**: `10.0` *The Return of Doctor Mysterio*
  (Christmas 2016, before *The Pilot*) and `15.0` *The Church on Ruby Road*, `16.0` *Joy to the World*.
- One oddity worth knowing: **7×14 *The Snowmen*** aired between 7×05 and 7×06, so in air order it sits
  mid-list while carrying a higher episode number. This matches the usual fan convention (series 7 is
  7×01–7×13 with the Christmas special between the two halves) and keeps the regular episodes' familiar
  numbers intact, which felt more valuable than a strictly monotonic renumber.

`episodes.json` is sorted by **air date**, so the reading order is always the watch order regardless of
the E-numbers above.

The engine auto-tags `e === 1` as premiere and the highest `e` in a season as finale. That lands
correctly everywhere: 4×18 *The End of Time Pt 2*, 7×16 *The Time of the Doctor*, 10×13 *Twice Upon a
Time*, 13×09 *The Power of the Doctor*, 16×08 *The Reality War* are all season finales; E0 specials are
never mistaken for premieres.

## What was excluded

Kept: everything TVmaze types `regular`, plus `significant_special` entries with a runtime of 45+ minutes.

Dropped (all `insignificant_special`, or short-form):
- Prequels and minisodes — the *Prequel (…)* series, *Born Again*, *Time Crash*, *Pond Life*,
  *Night and the Doctor*, the Strax Field Reports, *Clara and the TARDIS*, *P.S.*, *The Great Detective*.
- **The Night of the Doctor** (6 min) — a real judgement call. It's canonically important (Paul McGann's
  regeneration into the War Doctor) and plenty of rewatch orders include it. I excluded it for
  consistency: including one 6-minute minisode while dropping *Time Crash* and the rest would have been
  arbitrary. If you want it back it's TVmaze episode in show 210, season 7.
- **The Infinite Quest** (45 min) — animated *Totally Doctor Who* serial, not part of the broadcast run.
- Documentaries and clip shows (*Doctor Who Confidential*-adjacent, *An Adventure in Space and Time*,
  *The Five(ish) Doctors Reboot*, watch-party specials).

## Chart

Seven categories, 127 bars, validated for no in-row overlap:

| Category | Rows | Notes |
|---|---|---|
| Showrunner | 1 | RTD1 1–4, Moffat 5–10, Chibnall 11–13, RTD2 14–16. Drives the per-card accent stripe. |
| The Doctor | 2 | Ninth→Fifteenth; second row for the War Doctor, Bradley's First, and the Fugitive Doctor. |
| Companions & TARDIS team | 4 | Lead companion / second companion / Jack & Ryan / River Song. |
| Recurring villains & monsters | 6 | Daleks, Cybermen, the Master–Missy, Weeping Angels, other classic monsters, and a "season's big bad" row with one bar per season. |
| Major arcs | 3 | Per-season arc phrase, multi-season threads (Time War → Gallifrey), character arcs. |
| Recurring characters & home bases | 5 | Families, recurring faces, UNIT, returning allies, and a home-base row (Powell Estate → Chiswick → Leadworth → Coal Hill → Sheffield → the UNIT Tower). |
| Broadcast & format | 3 | BBC One vs the Disney+ co-production, episode counts/lengths, the Christmas-special habit. |

Mid-season handoffs are drawn at season granularity with the exact episode in the label, e.g.
`"Amy Pond (leaves 7×05)"`, `"Clara Oswald (from 7×06)"`, `"Fifteenth — Ncuti Gatwa (bi-generated 14×03)"`,
`"Thirteenth — Jodie Whittaker (regenerates 13×09)"`.

Two deliberate simplifications:
- **Daleks** get one bar spanning seasons 1–13 rather than a bar per appearance — they show up in
  essentially every season of that stretch (S10's only appearance is the cold open of *The Pilot*), so
  splitting it would have added noise, not information. They have not appeared in the RTD2 era yet.
- **Captain Jack's** brief return in 12×11 *Revolution of the Daleks* is noted in the label of his
  3–4 bar rather than given its own bar, because Ryan occupies seasons 11–12 in that row.

## Tags

26 tag definitions; **every one of the 196 episodes has at least one tag**, and every defined tag is used.
Premiere/finale come from the engine and aren't in `EP_TAGS`.

Confident: `twoparter`, `xmas`, `regen`, `historical`, `doctorlite`, `multidoctor`, `debut`, `farewell`,
and the character-spotlight tags — these are checkable facts.

Judgement calls, applied as honestly as I could:
- `fanfav` — episodes that consistently top best-of polls and critical rankings (*Blink*, *Midnight*,
  *Heaven Sent*, *Vincent and the Doctor*, *The Doctor's Wife*, *Boom*, *73 Yards*, *Dot and Bubble*…).
  Deliberately not padded; roughly a quarter of the run.
- `scary` — the ones that actually function as horror, not just "has a monster".
- `heavy` — goodbyes, deaths and the emotional heavy hitters.
- `arc` vs `standalone` — an episode gets `arc` if you'd lose something watching it cold. Most episodes
  get one or the other; a few genuinely are both (e.g. 7×06 *The Bells of Saint John*).
- `experiment` — breaks the usual episode shape (*Love & Monsters*, *Turn Left*, *Heaven Sent*,
  *Extremis*, *Eve of the Daleks*, *73 Yards*, *Lux*).

## Anything the engine should know

- **16 seasons** — more than Supernatural (15) but fewer than Criminal Minds (19), so nothing new.
- **Episode number 0 exists** (`10.0`, `15.0`, `16.0`). The engine's `String(e.e).padStart(2,"0")`
  renders these as `S10E00` / `15×00`, which reads fine. Nothing divides by `e`, and the
  premiere/finale auto-tagging is unaffected.
- Season 14 has only **3 episodes**, the shortest in the package.
- Every episode has an image, a summary and a TVmaze rating — no gaps to design around.
- The hero font is **Bebas Neue** (`"Bebas+Neue"` as the Google Fonts spec — no weight axis on that
  family, so no `:wght@` suffix).
