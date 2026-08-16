# Battlestar Galactica (2003–2009) — package notes

Ronald D. Moore / David Eick reimagining only. Not the 1978 original, not *Caprica*, not *Blood & Chrome*.

## Sources

- TVmaze **166** — *Battlestar Galactica* (Sci Fi, 2004). Supplies all 73 numbered episodes: S1 ×13, S2 ×20, S3 ×20, S4 ×20.
- TVmaze **85808** — *Battlestar Galactica: The Miniseries* (2003), which TVmaze files as its own two-episode show.

`show.json.tvmazeId` is the array `[166, 85808]`.

## The miniseries: one column, numbered `1×00`

Show 166 *does* carry the miniseries, but only as two unnumbered `significant_special` entries whose
titles literally read "TO BE DELETED" — TVmaze is migrating them to the standalone entry 85808. So the
miniseries had to be stitched in from 85808, where it is a clean `s1e1` / `s1e2`.

The engine derives its season list as `1..max(season)`, so a season 0 would leave those episodes without a
header and knock the chart grid out of alignment. That left two real options:

1. Miniseries becomes season 1 and every real season shifts up (S1→2 … S4→5). This is the Netflix numbering,
   and it mislabels all 73 aired episodes — "Maelstrom" would read `4×17`.
2. Keep the canonical numbering and give the miniseries an episode number of **0** inside season 1.

**Option 2 was chosen.** Every aired episode keeps the season/episode number fans actually use: `33` is `1×01`,
`Downloaded` is `2×18`, `Maelstrom` is `3×17`, `Daybreak, Part 2` is `4×20`. The miniseries sits in front of
them as `1×00`, which reads naturally as "the thing before episode one".

Consequence: the miniseries' two nights are **merged into a single card**. It aired as one three-hour film
across two evenings and is universally referred to in the singular, and two entries can't share `e = 0`.
The merged card uses Part 1's TVmaze id (`3296437`), Part 1's image and rating (9.0), and a **hand-written
summary** — TVmaze carries the same paragraph twice, once per part, so concatenating produced a duplicate.
It is the only summary in `episodes.json` not taken verbatim from TVmaze. **Its guest cast is the union of both parts' guest casts** —
the fetch pulled `/episodes/3296438/guestcast` too and folded it into the same key.

Totals: **74 columns, 4 seasons.** Season 1 has 14 entries (`1×00` plus `1×01`–`1×13`).

Engine behaviour that was verified against `app.js`: the auto "premiere" tag keys off `e === 1`, so it lands
on `33`, not the miniseries; the auto "finale" tag keys off `max(e)` per season, so it lands on `1×13`.
`1×00` gets neither, and is tagged `milestone` by hand instead. `code()` renders it `S01E00`, the chart
column label renders `1×00`.

## Razor and The Plan: not columns

TVmaze files both as `significant_special` with **`number: null`** — they are not episodes in the numbered
season order, and neither has its own TVmaze show entry to stitch from (the only related entries are the
*Razor Flashbacks* webisodes, which are a different thing). Giving them invented numbers `3×21` / `4×21`
would also have stolen the auto "finale" tag from *Crossroads, Part 2* and *Daybreak, Part 2*, which are the
two most important finales in the show.

So they are **excluded from `episodes.json`** and represented on the chart instead, in the fourth row of the
**Season & era** category:

- `The Plan (2009) retells this stretch from Cavil's side` — spans columns 1–34 (Miniseries → 2×20).
- `Razor (2007) sits here, between 3×20 and 4×01` — spans columns 54–55.

They are also named in `SEASON_META` (season 3 `+ Razor (2007)`, season 4 `+ The Plan (2009)`). Kendra Shaw,
being Razor-only, has no chart row.

## Chart

Episode axis, 74 columns. Absolute index helpers (also at the top of `eras.js`):
`1` = Miniseries · `S1eN = 1+N` · `S2eN = 14+N` · `S3eN = 34+N` · `S4eN = 54+N`.

Seven categories, 159 bars:

| key | label | rows |
|---|---|---|
| `eras` | Season & era | 4 — season bars (accent stripe), in-show timeline, Moore & Eick, Razor / The Plan |
| `command` | Command & the chain of command | 5 — Galactica's CO, the XO, Pegasus' four commanders, Lee's career, flashpoints |
| `politics` | The Presidency & politics | 6 — the Presidency, Baltar's road, Zarek, the Quorum, elections & trials, Roslin's cancer |
| `cylons` | The Cylons | 15 — one row per model of the Significant Seven, the Final Five, the Head characters, resurrection, the Hybrids, Hera, the occupation & civil war, the alliance |
| `arcs` | Arcs, prophecy & mysteries | 6 — the road to Earth, the visions, Kara's destiny, New Caprica, human/Cylon relations, the endgame |
| `people` | Who's aboard | 23 — one row per recurring character |
| `places` | Ships & worlds | 9 |

Bars in every row are non-overlapping; `scripts/validate-shows.py` passes.

## Confidence

**Confident** (checked against TVmaze synopses where memory was shaky):

- Adama shot at the end of `1×13`; Tigh commands under martial law `2×01`–`2×04`; Adama resumes at the end of
  `2×04` and is made Rear Admiral by Cain in `2×12`.
- Cally kills Boomer in `2×04` (**"Resistance"**), and Boomer downloads in `2×18` (**"Downloaded"**).
- Billy Keikeya dies in `2×16` (**"Sacrifice"**, the hostage stand-off) — *not* `2×14`, which is "Black Market".
  TVmaze's guest-cast data confirms it: Billy's last credit is `2×16`.
- Hera is born in `2×18` ("The Cylon baby is finally born" — TVmaze's own synopsis).
- Roslin's cancer goes into remission in `2×13` ("Epiphanies") and returns in season 4.
- Ellen Tigh returns in `1×09` (guest-cast confirmed) and is poisoned by Saul in `3×03` ("Exodus, Part 1" —
  the episode where Anders finds the evidence pointing at the traitor).
- Kat dies in `3×10` (**"The Passage"**) — *not* `3×08`, which is "Hero". Guest-cast confirmed: last credit `3×10`.
- Dee dies in `4×11` (**"Sometimes a Great Notion"**) — *not* `4×12`. Guest-cast confirmed: last credit `4×11`.
- Cally is killed by Tory in `4×03`; Gaeta and Zarek are executed in `4×14`; Cain is shot in `2×12`.
- Starbuck dies in `3×17` and returns at the end of `3×20`.
- Baltar is elected VP in `1×11` ("Colonial Day", per TVmaze's synopsis), President in `2×20`, put on trial
  `3×19`–`3×20`.
- The four Final Five are revealed in `3×20`; Ellen is revealed as the fifth at the end of `4×11` (TVmaze's
  synopsis for `4×11` covers the Earth ruins and the Four's memories) and physically rejoins the fleet in `4×16`.
- Lee takes the Pegasus in `2×17` ("The Captain's Hand") and loses her in `3×04`; Pegasus commanders in order
  are Cain → Fisk → Garner → Lee.
- Resurrection Hub destroyed in `4×09` ("The Hub"); Earth found and found dead in `4×10`–`4×11`.
- Character first/last appearances for the recurring rows (Cottle `1×04`, Kat `1×10`, Racetrack and Seelix
  `1×13`, Hot Dog `2×01`, Hoshi `2×11`, Tory `2×17`, Anders `2×04`, Zarek `1×03`, Jammer `1×06`) were taken
  from the fetched guest-cast data, not from memory.

**Judgement calls / softened on purpose:**

- **Cloud Nine** is charted as destroyed at `2×20`. Gina's nuke goes off during the New Caprica sequence of
  "Lay Down Your Burdens, Part 2"; some summaries place the detonation late in `2×19`. The bar runs `1×11`–`2×20`
  either way.
- **Gaeta's leg.** He is shot during the Demetrius standoff in the `4×05`–`4×08` stretch (I believe Anders fires
  the shot, in "Faith"), and the leg is amputated after. The bar is labelled "Loses a leg, then leads the
  mutiny" and starts at `4×05` rather than naming an episode.
- **The occupation's length** is labelled "≈4 months" rather than the often-quoted 134 days, which I could not
  verify from the data at hand.
- **Athena's transition** from brig prisoner to commissioned Colonial officer is drawn at `2×20`; it is really a
  gradual thaw across `2×18`–`3×01`.
- **D'Anna.** Her row starts at `2×08` ("Final Cut"), where she appears as the embedded reporter D'Anna Biers,
  even though the guest-cast data first credits the character as "Number Three" at `2×18`.
- **Tigh/Tyrol/Helo/Gaeta guest-cast data stops at `3×20`** because they were promoted to series regulars for
  season 4. Their chart rows are written from the story, not from that data, and run to the end.
- **Baltar's basestar stretch** is drawn `3×05`–`3×12`; he is captured at the very end of "Rapture" (`3×12`), so
  the prisoner bar starts at `3×13`.
- Tag assignments are mine. The "standalone" tag is used descriptively, not as an insult — "Black Market",
  "The Woman King" and "Hero" are tagged `standalone` because they are skippable for the arc, and "Hero" and
  "A Day in the Life" also carry an Adama spotlight because they are genuinely about him.

## Cast

`cast.json` is TVmaze guest cast, one request per episode, 74 keys. TVmaze's series regulars for this show are
Adama, Roslin, Starbuck, Apollo, Baltar, Number Six and Sharon, so those seven never appear in the guest-cast
dropdown — `show.json.regularsNote` says so. Everyone else on Galactica is guest cast and is in there.
`fetch_cast.py`, `guestcast_raw.json`, `fetch_cast.log` and the raw TVmaze dumps were deleted after the build.

## Branding

Accent is Cylon-eye red `#d81f26` on white, hero gradient `#241012`, hero font **Orbitron** (checked against
the other packages: Cinzel, Cinzel Decorative, Bebas Neue, Special Elite, Playfair Display, Cormorant Garamond,
Oswald, Rye, Zilla Slab and Libre Baskerville were taken; Orbitron was free). Emoji 🚀.
