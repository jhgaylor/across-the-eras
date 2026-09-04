# M*A*S*H — package notes

**Source:** TVmaze show 665 (`/shows/665/episodes`, `/episodes/<id>/guestcast`). Season axis, 11 seasons,
251 episodes, all in air order with TVmaze's own `s`/`e` numbering.

## Confident
- Episode data, air dates, images and ratings: straight from TVmaze, unmodified apart from stripping HTML
  out of the summaries.
- The roster row and every change of command: Blake → Potter (4×02), Trapper → B.J. (4×01),
  Frank → Winchester (6×01), Radar's departure (8×05), Klinger and Mulcahy joining the opening credits in
  season 5. Milestone episode numbers in the chart labels were checked against `episodes.json`.
- Showrunners: Gelbart & Reynolds through season 4, Reynolds & Metcalfe for season 5, Metcalfe from season 6.
- Format experiments named in the "Tone & format" row (3×05 "O.R.", 4×18 "Hawkeye", 4×24 "The Interview",
  5×21 "Movie Tonight", 7×04, 7×10, 8×11, 8×22, 9×02, 10×10, 10×20) — all verified against the episode list.

## Guessed / approximate
- Recurring-character spans (Flagg, Sidney Freedman, Nurse Kellye, Rizzo, Penobscott) are drawn at season
  granularity from the characters' well-known runs, not from a credit-by-credit audit; the first and last
  seasons of the smaller ones may be off by one.
- The in-show Korean War calendar is deliberately loose. The series covers three years of war in eleven
  seasons and contradicts itself constantly; the "war & the calendar" row says so on the chart rather than
  pretending to a timeline.
- Spotlight tags are editorial. "classic" is the fallback for a standard week at the 4077th, so every
  episode carries at least one tag.

## Notes for the engine
- Nothing unusual: 11 seasons, contiguous, no specials, no missing episode numbers.
- TVmaze also carries a 2024 documentary special (`M*A*S*H: The Comedy That Changed Television`) under
  season 11 with a null episode number. It is not part of the watch order and was dropped.
- Two-parters that aired as single hours (4×01 "Welcome to Korea", 5×01 "Bug Out", 6×01 "Fade Out, Fade In",
  11×16 "Goodbye, Farewell and Amen") are single entries on TVmaze and are tagged `hour`. The ones TVmaze
  splits in two (6×12–13, 8×04–05, 10×07–08) are tagged `twoparter`.
- 203 of 251 episodes have guest cast on TVmaze; the rest have no `guestcast` entries upstream.
