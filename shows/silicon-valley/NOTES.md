# Silicon Valley — package notes

## Shape
- TVmaze show id **143** (HBO, 2014–2019). 6 seasons, **53 episodes**, season axis.
  Season sizes are 8/10/10/10/8/7 — TVmaze's `s`/`e` numbering used verbatim, no specials,
  no gaps (the type field on all 53 episodes is `"regular"`).
- Every episode has a summary, an image and a TVmaze rating — no nulls in `episodes.json`.
- `cast.json` has an entry for all 53 episodes: **716 guest credits** across 361 distinct
  guest actors. No guest-cast fetch failures — all 53 `/episodes/<id>/guestcast` calls
  succeeded on the first pass.

## Confident
- Episode data, air dates, ratings and guest cast: straight from TVmaze, unedited.
- Season structure and the big narrative beats were cross-checked against episode summaries
  fetched in step 1 plus web search on top of general knowledge of the show, not recalled
  from memory alone: Richard fired as CEO and Jack Barker installed in **3×01** ("Founder
  Friendly"); Richard reclaims the company and the clickfarm-inflated-DAU scandal breaks in
  **3×10** ("The Uptick"); Richard steps down from PiperChat in **4×01**, Dinesh's 11-day
  stint as PiperChat CEO and the handoff to Gavin happens in **4×02** ("Terms of Service");
  Russ Hanneman loses his fortune to 36 ICOs, tied to the title of **5×07** ("Initial Coin
  Offering"); PiperNet launches and survives Laurie/Yao's 51% attack in **5×08** ("Fifty-One
  Percent"); the finale **6×07** ("Exit Event") is where Pied Piper's compression breaks
  encryption and the team deliberately kills the company, with a 10-years-later epilogue and
  the Jian-Yang/Erlich twist.
- Mike Judge and Alec Berg are credited as co-showrunners for the entire run (confirmed via
  Hollywood Reporter coverage of the finale) — `SEASON_META.showrunner` is the same string
  for all 6 seasons rather than a guessed split.
- TVmaze's show-level cast list includes 13 "main cast" credits (Richard, Gilfoyle, Dinesh,
  Jared, Gavin, Monica, Big Head, Erlich, Jian-Yang, Laurie Bream, Russ Hanneman, Jack Barker,
  Peter Gregory). Jian-Yang, Russ Hanneman and Jack Barker were promoted from recurring to
  regular partway through the show, so their earliest episodes (Jian-Yang: 1×03/1×04/1×07;
  Russ: most of S2 plus 3×08 and 5×07; Barker: all of S3 except 3×05–3×07) still show up in
  the per-episode guestcast data and therefore in `cast.json` / the guest-character dropdown.
  Laurie Bream and Peter Gregory never appear in the guestcast endpoint for any episode.

## Judgement calls
- **CEO row is compressed to season granularity** per CONTRACT.md's guidance for mid-season
  handoffs: Richard's S3 reinstatement (3×10) and PiperChat/Dinesh handoff (4×02) are noted
  in bar labels with exact episodes rather than drawn as separate mid-season bars in the same
  row. Dinesh's PiperChat CEO stint gets its own row so it doesn't collide with the main
  Richard/Barker row.
- **Gavin's Hooli-CEO status across S3–S4 is deliberately vague.** The show never states his
  exact title in every episode — he's clearly ousted from the top job at some point after the
  elephant/Hooli-Con disasters and is clearly back in charge by 5×01 ("After returning to
  Hooli..."), but the precise episode of any S4 firing/reinstatement isn't nailed down in the
  summaries available, so that bar spans season 4 as a single "rocky stretch" rather than
  claiming a specific episode.
- **Erlich's exit is drawn 5–6 as "gone"** rather than picking an episode — the character
  (and actor T.J. Miller) leaves before season 5 begins and is only explained/resolved in the
  6×07 finale twist, so there's no single departure episode to point to.
- **`arc` vs `standalone`** follows Angel's convention: `arc` (18 episodes) marks episodes
  that visibly move the season's throughline; `standalone` (9 episodes) marks episodes that
  are mostly a self-contained B-plot week. Most episodes get neither if they're a blend.
- **`milestone`** (13 episodes) is reserved for real hinge points — CEO changes, the
  clickfarm/DAU reveal, the PiperChat handoff, the PiperNet launch, the finale — not just
  premieres/finales (which the engine auto-tags separately).
- Character-spotlight tags are honest, not padded: `jianyang` clusters around his S3–S6
  schemes (Seefood/Not Hotdog, the incubator house, the finale twist); `laurie` and `russ`
  are tagged only on episodes where they're plot-relevant, not every episode they technically
  appear in.

## For the engine
- Nothing unusual: 6 seasons, contiguous integers, season axis, `CHART_AXIS = "season"` set
  explicitly (matches the default but kept for clarity given the show's heavy season-shape
  variance: 8/10/10/10/8/7).
- Chart is **7 categories** (eras, funding, ceo, roster, hooli, rivals, satire) / **20 rows**
  / **~55 bars**. `roster` is the tallest at 6 rows (Richard, Dinesh & Gilfoyle as one row,
  Jared, Erlich, Monica, Big Head).
- Accent `#3ddc84` (terminal/Pied Piper green) on near-black `#04140c`, hero gradient
  `#0d1310`, hero font **Space Mono** (`Space Mono:wght@400;700`) for a code-editor feel,
  emoji 💻.
