# Community — package notes

**Source:** TVmaze show 318 (`/shows/318/episodes`, `/episodes/<id>/guestcast`). Season axis, 6 seasons,
110 episodes in air order with TVmaze's own `s`/`e` numbering. TVmaze lists no specials.

## Confident
- Episode data, air dates, images and ratings come straight from TVmaze. The only change is stripping HTML from summaries.
- Showrunners: Dan Harmon for seasons 1–3, David Guarascio & Moses Port for season 4 (Harmon fired), Harmon again
  for seasons 5–6 with Chris McKenna. Season 3 was benched after 3×10 (Dec 2011) and returned with 3×11 on
  2012-03-15. Season 4 was delayed from October 2012 to February 2013. NBC cancelled the show in May 2014, and
  Yahoo! Screen streamed season 6. All of this is from Wikipedia's series and season articles.
- Departures: Chevy Chase is voice-only in 4×09, absent from 4×10 and 4×12, and last on screen in 4×13. He has a
  cameo in 5×01, and Pierce dies off-screen in 5×04. Donald Glover's last episode is 5×05. Yvette Nicole Brown
  appears only as a guest in season 6 (6×01, 6×13). Jim Rash is a regular from season 3.
- Every episode number in the format-experiment and genre rows was checked against `episodes.json` titles and
  TVmaze summaries.

## Guessed / approximate
- Fan-favorite, heartfelt and spotlight tags are editorial. "classic" is the fallback, so every episode has at
  least one tag.
- The "Greendale's bench" recurring row (Leonard, Magnitude, Garrett, Star-Burns, Vicki, Neil) spans all six seasons
  as a group. Individual characters come and go, and Star-Burns is presumed dead from 3×18 until season 5.
- The "Pillows vs. Blankets" and "floor is lava" bars share the paintball row because they are the same kind of
  campus-wide war episode, even though nobody fires paint in them.

## Notes for the engine
- Nothing unusual: 6 contiguous seasons, no specials, and no missing episode numbers. 3×20–3×22 all aired on
  2012-05-17. The first two episodes of seasons 5 and 6 also aired together.
- 108 of 110 episodes have guest cast on TVmaze.
