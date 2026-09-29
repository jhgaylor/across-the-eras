# Star Trek: The Next Generation — package notes

**Source:** TVmaze show 491 (`/shows/491/episodes`, `/episodes/<id>/guestcast`). Season axis, 7 seasons,
178 episodes, all in air order with TVmaze's own `s`/`e` numbering.

## Confident
- Episode data, air dates, images and ratings: straight from TVmaze, unmodified apart from stripping HTML
  out of the summaries. Every episode has TVmaze guest cast.
- Showrunners (checked against Wikipedia's series, Piller, Hurley and Taylor articles): Roddenberry in charge
  for seasons 1–2 with Maurice Hurley as head writer; Michael Piller runs the writers' room from 3×05
  "The Bonding" (Michael Wagner had it for 3×01–3×04) through season 6, reporting to Rick Berman as executive
  producer; Jeri Taylor is showrunner for season 7. Roddenberry died 24 Oct 1991; both parts of "Unification"
  carry his dedication.
- CMO: Beverly Crusher (S1), Katherine Pulaski (S2, from 2×01), Crusher again from 3×01.
- Recurring-character spans (O'Brien, Guinan, Ro Laren, Barclay, Lwaxana, Alexander, Keiko, Q, Lore, Kurn,
  Gowron, Lursa & B'Etor, K'Ehleyr, Tomalak) were checked against the TVmaze guest-cast credits.
- Every episode number in a chart label or tag key was checked against `episodes.json`.

## Guessed / approximate
- Spotlight, fan-favorite, gut-punch and mind-bender tags are editorial.
- The Romulan / Klingon / Cardassian tags cover the episodes where that power drives the plot, not every
  episode with a warbird on the viewscreen. The chart bars list the headline episodes per season; the tags are
  the precise filter.
- "classic" is the fallback for a regular week, so every episode carries at least one tag.
- Two TVmaze guest-cast credits look wrong upstream (Sela on 2×06, Lore on 5×05) and were not used on the chart.

## Notes for the engine
- Nothing unusual: 7 seasons, contiguous; season 2 has 22 episodes (1988 writers' strike).
- TVmaze splits "Encounter at Farpoint" (1.1–1.2) and "All Good Things..." (7.25–7.26) into two entries each;
  both are tagged `twoparter`.
- TVmaze also lists a 1994 retrospective special ("Journey's End: The Saga of Star Trek The Next Generation")
  under season 7 with a null episode number. It isn't part of the watch order and was dropped.
