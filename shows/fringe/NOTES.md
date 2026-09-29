# Fringe — package notes

## Shape
- TVmaze show id **158** (FOX, 2008–2013). 5 seasons, **100 episodes** (20 + 23 + 22 + 22 + 13), all type
  `regular`, no specials. **Episode axis**. Absolute columns: S1 = 1–20, S2 = 21–43, S3 = 44–65, S4 = 66–87,
  S5 = 88–100. TVmaze `s`/`e` numbering used verbatim.
- Every episode has a summary, an image and a rating, so there are no nulls in `episodes.json`.
- `cast.json` covers all 100 episodes: **1,591 guest credits**, 1,013 distinct character names. Fetched with curl
  (Python's urllib couldn't get through the sandbox proxy); the raw per-episode files were not shipped.

## Confident (from the data)
- **Airing slots** come from the air dates: Tuesdays for S1, Thursdays from S2, and Fridays from 3×10
  (2011-01-21) to the end. 2×11 "Unearthed" aired on a Monday (2010-01-11), out of production order.
- **Recurring and villain bars are cast-derived**, using the episodes where TVmaze credits the character:
  Jones 1×07–1×20 then 4×08–4×21; Loeb 1×07–1×14; Newton 2×04–3×04; Sam Weiss 2×02–3×21; Rachel 1×11–2×01;
  Alt-Nina 4×07–4×18; Windmark 4×19 then 5×01–5×13; Etta 4×19 then 5×01–5×04; Michael 1×15 then 5×06–5×13.
  September is credited in 88 of 100 episodes, so his row says "almost every episode".
- **The "Over There" worlds row is checked against guest credits.** TVmaze credits the alternate-universe
  doubles (Olivia/Walter/Broyles/Lincoln/Astrid "(Alt Universe)") as guests. All 17 episodes marked There or
  Both have 4–8 of those credits. 1×20's "Crossing" has none, because its Over There scene is just Olivia and Bell. The S3 alternation (3×01–3×08 swap, plus 3×13 and 3×18) matches both the credits and the
  TVmaze summaries ("In the Alternate Universe…", "Back 'over here'…").

## Judgement calls
- **Case vs mythology.** Every episode has exactly one of `case` or `myth` (38 / 62). Where an hour has a
  standalone case plus a mythology B-plot, it is tagged by what drives the hour. Borderline calls:
  1×09 The Dreamscape, 1×13 The Transformation, 3×12 Concentrate and Ask Again and 4×13 A Better Human Being
  are tagged myth; 3×07 The Abducted, 3×14 6B, 3×16 Os and 4×07 Wallflower are tagged case. 2×20 Brown Betty
  is tagged myth because the fairy tale retells Peter's abduction. All of S5 is myth, since it is fully serialized.
- **Worlds row granularity.** "Both" is used where the hour genuinely splits between universes (1×20's
  ending is labeled "Crossing"). 3×19 LSD is marked "Here" although most of it takes place inside Olivia's mind.
  5×06 is marked "Pocket universe"; 5×12 Liberty is "Both" (Olivia crosses to the other side of 2036).
- **Timeline row.** The original timeline runs to 3×21. 3×22 shows the 2026 future before Peter is erased. The
  post-erasure timeline runs from 4×01, and Peter reappears in 4×04. 4×19 Letters of Transit and all of S5
  are 2036. 5×13 ends with the reset to 2015.
- **Showrunners.** S1 is Jeff Pinkner with co-creators Kurtzman & Orci, S2–S4 are Pinkner & J.H. Wyman, and S5
  is Wyman alone. I'm confident about Pinkner leaving after S4. The S1 credit split is simplified.
- **Charlie Francis** (a regular, so not in guest cast) is drawn to 2×04. He is killed and replaced in 2×01, and
  Olivia shoots the shapeshifter in 2×04. This comes from recall, not the data.
- **Omitted:** the per-universe title-sequence colors and the exact episode of Newton's death (his last credit is
  3×04, which is where the bar ends).

## For the engine
- Nothing unusual: 5 contiguous seasons, `CHART_AXIS = "episode"`, 100 columns.
- 5 categories / 19 rows / ~108 bars. The per-episode "which world" row has 41 bars, over the usual per-category
  guideline, the same way Lost's per-episode narrative-device row is. That row is the point of the chart.
- Accent `#9b7bd8` (violet, the color used on the chart for "both sides"). No other show uses purple.
  Emoji 🦋 (one of the Fringe glyphs), hero font Oswald.
