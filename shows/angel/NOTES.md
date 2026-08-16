# Angel — package notes

## Shape
- TVmaze show id **428** (the 1999 Buffy spin-off, not the 1960 CBS show or the 2023 BET+ one).
  5 seasons, **110 episodes**, season axis. Every season is exactly 22 episodes, numbering is
  1..5 / 1..22 with no specials and no gaps — TVmaze's `s`/`e` is used verbatim.
- Every episode has a summary, an image and a TVmaze rating — no nulls anywhere in `episodes.json`.
- `cast.json` has an entry for all 110 episodes: **670 distinct guest characters, 1,068 credits**.

## Confident
- Episode data, air dates, ratings and guest cast: straight from TVmaze, unedited.
- **Roster arrivals/departures were cross-checked against the fetched guest-cast data**, not
  recalled: Doyle 1×01–1×09, Wesley from 1×10, Gunn from 1×20, Fred from 2×19, Lorne from 2×01,
  Kate 1×02–2×16, Holland Manners 1×21–2×15, Lindsey 1×01–2×18 (back 5×08–5×22), Lilah **1×16**–4×22,
  Drusilla 2×05–2×11 (+5×08, 5×20), Harmony 2×17 then S5, Groo 2×21–3×22, Holtz 3×01–3×21,
  Sahjhan 3×07–3×17 (+5×18), Justine 3×10–4×01, Jasmine 4×17–4×21, Gwen Raiden 4×02/4×09/4×16,
  Knox 4×22–5×16, Eve 5×01–5×22, Marcus Hamilton 5×17–5×22, Cyvus Vail 5×18–5×22, Nina 5×03/5×14/5×21.
- Buffy crossovers are verified against guest cast too, and two things in the brief were wrong:
  **Andrew Wells is in 5×11 "Damage" and 5×20 "The Girl in Question"** (not 5×07/5×08), and
  **Willow appears three times — 2×17 "Disharmony" (phone), 2×22, and 4×15 "Orpheus"**. Buffy
  herself: 1×07 (dream), 1×08, 1×19, plus archive footage in 5×02. Oz and Spike: 1×03 only.
- Network: The WB for all 5 seasons. There is no UPN split here (that's Buffy's S6–7).
- Tags: 25 definitions, **all 110 episodes tagged, every tag used at least once**.

## Judgement calls
- **Showrunner row.** Greenwalt 1–3, "Whedon, Jeffrey Bell & Tim Minear" for S4, Jeffrey Bell for
  S5. This is the honest version of a genuinely shared credit: Greenwalt left after S3, S4 was run
  by Whedon with Bell and Minear as co-EPs, and Bell had it alone for S5. The brief floated
  "David Simkins" — he was not an Angel showrunner and is not in the chart. `SEASON_META.showrunner`
  matches the bars.
- **Cordelia's coma is dated 4×17 "Inside Out"** — she gives birth to Jasmine and goes under in
  that episode, not at 4×22. Her bar runs 1–4 with the coma in the label, plus a 5×12 bar.
- **Fred/Illyria are separate roster rows.** Fred's bar ends at S5 with "dies 5×15" in the label;
  Illyria gets her own S5-only row. Amy Acker is a regular throughout, so neither appears in the
  guest dropdown.
- **The Hyperion is drawn 2–4.** They investigate it in 2×02 and move in immediately after; the
  bar doesn't try to pin an exact episode. W&H is the S5 home base, and the Hyperion still turns up.
- **`arc` vs `noir`.** `noir` (19 episodes) is reserved for genuinely standalone LA cases, almost
  all of them S1–S2 plus a handful later (4×03, 5×03). `arc` is generous (73) because the show is
  serialized from S2 onward. Episodes that are both got `arc` plus a character tag.
- **`twopart` is 8 episodes / 4 pairs**: 1×18–1×19 (the Faith arc, a formal crossover pair),
  5×15–5×16 and 5×21–5×22 (continuous single stories, same judgement call the Buffy package made
  for 6×21–6×22). The Pylea run (2×19–2×22) is a four-parter and the Darla-pregnancy run
  (3×07–3×09) a three-parter, so neither is tagged `twopart`.
- **`milestone`** marks hinge points, not a numeric count: 1×09 "Hero", 1×22, 2×07 "Darla",
  2×10 "Reunion", 2×16 "Epiphany", 3×09 "Lullaby", 3×13, 3×16 "Sleep Tight", 4×22 "Home",
  5×12 "You're Welcome" (the actual **100th episode** — 4×22 + 12), 5×14 "Smile Time",
  5×15 "A Hole in the World", 5×22 "Not Fade Away".
- **`format`** covers the real experiments: 1×08 (the erased day), 2×02 (1952 Hyperion), 2×20,
  3×04 (body swap), 3×11 "Birthday", 3×13 "Waiting in the Wings", 4×06 "Spin the Bottle",
  4×10 "Awakening", 5×06 (luchador), 5×09 (Harmony POV), 5×10 "Soul Purpose", 5×13 (WWII sub),
  5×14 "Smile Time" (puppets). There is no separate `musical`/`puppet` tag — Smile Time is
  `format` + `comedy` + `milestone`.
- **Romance rows** include some unrequited/one-sided pairings (Angel & Kate, Wesley pining for
  Fred, Fred & Knox, Lorne & the Transuding Furies) because a rewatcher looking for "the Wesley/Fred
  thing" wants the pining years, not just 5×14–5×15.
- **Skip's bar** in `recurring` is 4-only (4×17) because the Groo bar occupies 2–3 on that row;
  his full run (3×11, 4×17) is drawn as a 3–4 bar in `villains` instead.
- Two labels reference characters I could not date precisely from cast data and left deliberately
  loose: "Gunn's crew — Rondell, George & Alonna" (1–3) and "Angel's 250 years" flashbacks (1–2).
- Wesley's exile in S4 is labelled "back with the team by 4×07" — he drifts back across 4×05–4×07
  rather than rejoining in one scene.

## For the engine
- Nothing unusual: 5 seasons, contiguous integers, season axis, no `CHART_AXIS` override.
- Chart is **8 categories / 69 rows / 182 bars** — one more category than Buffy because Angel gets
  a dedicated **"Buffy crossovers"** row-group (6 rows, 17 bars). Category sizes: showrunners 5/10,
  roster 16/31, villains 8/28, arcs 8/30, romances 8/22, recurring 9/23, locations 9/21,
  crossovers 6/17. `roster` is the tallest at 16 rows. With only **5 columns** the bars are wide,
  so long labels have room — several roster labels include actor names, which Buffy's do too.
- **TVmaze's main cast for Angel is 9 people** (Angel, Cordelia, Wesley, Gunn, Fred/Illyria, Lorne,
  Connor, Spike, Doyle). Per-episode credits are narrower, so Lorne shows up in the guest dropdown
  45 times (he was recurring until S4), and Cordelia, Connor, Fred and Wesley each appear once or
  twice for their pre-regular episodes. `regularsNote` in `show.json` is worded to match.
- Shared characters keep **Buffy's colors** so the two charts read as siblings: Angel NAVY
  `#1b2a4a`, Cordelia LPINK `#f7c6da`, Spike SILVER `#dcdcdc`, Faith BLOOD `#7a0f18`, Darla DGRAY
  `#3a3a3a`, Drusilla LPURP `#c7b0e6`, Wesley LBLUE `#d3e2f7`, Harmony LGOLD `#f5dd93`,
  Willow GREEN `#3f7d3a`, Buffy CRIM `#c0202c`, Oz KHAKI `#7e8546`.
- Accent `#8b1e3f` (wine, deeper than Buffy's `#d7263d`) on `#fff`, hero gradient `#1a0d13`,
  hero font **Cinzel** (`Cinzel:wght@600;800` — the plain cut of Buffy's Cinzel Decorative),
  emoji 🌆.
