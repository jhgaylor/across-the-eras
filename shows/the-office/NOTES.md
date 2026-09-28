# The Office (US) — package notes

**Source:** TVmaze show 526 (NBC, 2005–2013; `/shows/526/episodes`, `/episodes/<id>/guestcast`) — the American
series, not the UK original (TVmaze 1292). Season axis, 9 seasons, 202 episodes, in air order with TVmaze's own
`s`/`e` numbering.

## Confident
- Episode data, air dates, images and ratings: straight from TVmaze, unmodified apart from stripping HTML
  out of the summaries.
- Showrunners: Greg Daniels (1–4), Paul Lieberstein & Jennifer Celotta (5–6), Lieberstein alone (7–8), Daniels
  again for 9 (Wikipedia, series article).
- Who runs Scranton: Michael through 7×23 "Goodbye, Michael"; Michael's resignation (5×20–21) and the Paper
  Company buyout in 5×25 "Broke"; Jim's co-manager stint (6×02 "The Meeting" to 6×16); Deangelo (arrives 7×20),
  Dwight acting (7×25), the search committee (7×26–27); Andy from 8×01; Nellie takes the office in 8×19 and
  Wallace buys the company back and reinstates Andy in 8×24; Andy quits and Dwight is named manager in 9×21.
  Checked against TVmaze summaries and the Wikipedia episode articles.
- Corporate layers: Jan → Ryan (after "The Job", arrested in "Goodbye, Toby") → Charles Miner (from "New Boss") →
  Sabre (6×15 "Sabre", Jo Bennett, Gabe) → Robert California as CEO (8×01) → David Wallace as owner/CEO (8×24 on).
- Every episode number in a chart label was checked against `episodes.json`.

## Guessed / approximate
- Recurring spans (Holly, Karen, Gabe, Nellie, Kelly & Ryan) are drawn at season granularity; the labels carry
  the exact episode where we checked it.
- Romance rows are drawn at season granularity and simplify some on-again/off-again stretches (Andy & Erin in
  seasons 6–7 especially).
- Tags are editorial. "classic" is the fallback for a regular day at the office, so every episode carries at
  least one tag. `jimdwight` is deliberately small: only episodes where the prank/rivalry is the A-plot.

## Notes for the engine
- TVmaze splits every hour-long episode into two entries, "(1)" and "(2)", with consecutive numbers — so
  season 5 has 28 entries and "Goodbye, Michael" is 7×22–23. All labels and tags use TVmaze's numbering; the
  split entries are tagged `twoparter`.
- TVmaze also carries a 2013 "Retrospective" special in season 9 with a null episode number. It is not part of
  the watch order and was dropped.
- 196 of 202 episodes have guest cast on TVmaze; the rest have no `guestcast` entries upstream. TVmaze lists a
  few early regulars (e.g. Stanley in season 1) as guests, so they appear in the dropdown for those episodes.
