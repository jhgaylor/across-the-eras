# Game of Thrones — package notes

## Shape
- TVmaze show id **82** (HBO, 2011–19, status `Ended`). 8 seasons, **73 episodes** (10×6, then 7, then 6),
  **episode axis**. TVmaze `s`/`e` numbering used verbatim. The 12 TVmaze specials are all
  `insignificant_special` (making-ofs, recaps, The Last Watch) and are not part of the watch order, so
  they are left out.
- Column helpers: S1eN = N, S2 = 10+N, S3 = 20+N, S4 = 30+N, S5 = 40+N, S6 = 50+N, S7 = 60+N, S8 = 67+N.
- Every episode has a summary, an image and a rating.
- `cast.json` covers all 73 episodes: **1,818 guest credits**, **483 distinct guest characters**.

## Confident
- Episode data, air dates, ratings and guest cast come straight from TVmaze, unedited.
- Death placements were cross-checked against each character's **last TVmaze guest credit** where the
  character is guest-credited: Jeor Mormont (last credit 1×10, dies 3×04; he's uncredited in S2–S3 there, so
  his death is placed from the series), Renly 2×05, Talisa 3×09, Lysa 4×07, Oberyn 4×08, Mance 5×01,
  Maester Aemon 5×07, Shireen 5×09, Doran 6×01, Thorne & Olly 6×03, Osha 6×04, Hodor 6×05,
  Rickon 6×09, Kevan/Loras/Mace/Pycelle 6×10, Olenna & Tyene 7×03, Tarlys 7×05, Benjen 7×06.
  Barristan's last credit is 5×05 (his body); he dies at the end of 5×04.
- George R. R. Martin wrote 1×08, 2×09, 3×07 and 4×02. Neil Marshall directed 2×09 and 4×09;
  Miguel Sapochnik directed 5×08, 6×09, 8×03 and 8×05.
- Book era = S1–S5 (columns 1–50); after the books = S6–S8 (51–73). The per-season book row follows the
  usual mapping (S3/S4 split A Storm of Swords; S5 blends Feast and Dance).

## Judgement calls
- Long character arcs are drawn at stretch granularity, with the pinning episode in the label where the
  beat is exact (e.g. "Lord Commander (from 5×02)", "Home at Winterfell (7×04)").
- Kevan Lannister as Hand in S5–S6 is left off the Hand row rather than guessing when it starts.
- Multiple deaths in one episode share one bar (e.g. 8×03 "Theon, Jorah, Lyanna Mormont, Beric, Edd,
  Melisandre"); deaths are split into five rows by faction so each row stays one bar per episode.
- Tags are conservative: `death`, `battle`, `wedding`, `walkers`, `dragons`, `reveal` only where the episode
  plainly has one; character spotlights only for storylines the episode actually carries.

## For the engine
- Nothing unusual: 8 contiguous seasons, 73 columns (wider than The Wire's 60).
- Chart is **7 categories** (eras, crown, starks, houses, places, war, deaths).
- Accent `#9cc4d9` (ice) on `#0b1d26`, hero gradient `#1a1d22`, hero font Cinzel, emoji 🐺.
