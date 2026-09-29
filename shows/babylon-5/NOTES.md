# Babylon 5 — package notes

**Source:** TVmaze show 475 (`/shows/475/episodes?specials=1`, `/episodes/<id>/guestcast`). Episode axis,
112 columns = the 110 broadcast episodes plus two TV movies.

## Confident
- Episode data, air dates, images and ratings: straight from TVmaze. 5 × 22 episodes, no gaps.
- The two movies that are part of the watch order are carried with episode number **0**, the way the
  West Wing and Dragon Ball Z packages carry specials: `1.0` The Gathering (Feb 1993 pilot) and `5.0`
  In the Beginning (Jan 1998 prequel, aired on TNT just before year 5). Both are TVmaze
  `significant_special` entries filed under those seasons.
- Episode order is TVmaze's numbering. TVmaze's air date for 3×14 "Ship of Tears" (1996-05-29) falls after
  3×15–3×17; the package keeps production/TVmaze order.
- Every episode number in a chart label was checked against the TVmaze title and summary for that
  episode (e.g. Sheridan replaces Sinclair 2×01, martial law 3×09, secession 3×10, Coriana VI 4×06,
  Proxima offensive 4×15, Clark dead by 4×21, Lochley and Byron 5×01, the Drakh revealed 5×18).
- The season subtitles of the five-year plan (Signs and Portents / The Coming of Shadows / Point of No
  Return / No Surrender, No Retreat / The Wheel of Fire) and the in-show years 2258–2262.

## Guessed / approximate
- Bars spanning a stretch (e.g. "Babylon 5 independent — the civil war waits on the Shadows",
  "The Drakh work through the Centauri") are editorial groupings; only the episodes named in a label are
  claims about a specific episode.
- Zack Allan's bar starts at 2×01 to mean "from year 2"; his exact first episode isn't charted.
- The Minbari civil war is drawn 4×11–4×14 (caste tensions in 4×11, open war by 4×13, ended in 4×14).
- Tags are editorial. `fanfav` is the consensus shortlist, not a ranking; `standalone` marks episodes you
  can skip without losing the arc, not episodes with no arc content at all.

## Notes for the engine
- Not included: Thirdspace, River of Souls, A Call to Arms (1998–99 TNT movies), The Legend of the
  Rangers (2002), The Lost Tales (2007) and The Road Home (2023). TVmaze files them as unnumbered
  specials; they sit outside the five-year story.
- Guest cast: 112 of 112 entries have some. TVmaze bills Lyta, Vir, Lennier, Zack and Lochley as guests in
  some episodes, so they appear in the character dropdown despite being regulars (see `regularsNote`).
- `eras.js` uses a small `E(season, episode)` helper to compute column numbers; it only assigns to
  `window` and loads fine under the validator and `mcp/load.js`.
