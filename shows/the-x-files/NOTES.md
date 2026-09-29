# The X-Files — package notes

**Source:** TVmaze show 430 (`/shows/430/episodes`, `/episodes/<id>/guestcast`). Season axis, 11 seasons,
218 episodes, all in air order with TVmaze's own `s`/`e` numbering. TVmaze lists the 2016 and 2018 revivals as
seasons 10 and 11 of the same show, so nothing is stitched.

## Confident
- Episode data, air dates, images and ratings: straight from TVmaze, with HTML stripped from the summaries.
- **Mythology vs. monster of the week.** Every episode carries exactly one of `myth` / `motw`. `myth` is the set
  Wikipedia's season pages mark with ‡ as the alien-mythology arc (sourced there to Fox's *X-Files Mythology*
  DVD collections): 71 episodes. The Wikipedia titles were matched to TVmaze by title, and every match landed on the
  same `s.e`. The one structural difference is "The Truth", which is a single episode on Wikipedia and 9.19 + 9.20 on
  TVmaze, so both halves are `myth`. The other 147 episodes are `motw`.
- Writer/director facts in the "Writers & format" row come from the credits on the same Wikipedia pages
  (Morgan & Wong through 2×14 and again in season 4 and the revival; Darin Morgan's six scripts; Gilligan from 2×23 to 9×18;
  Duchovny 6×19, 7×19 and directing 9×16; Anderson 7×17; William B. Davis 7×15).
- Duchovny: Mulder is abducted in 7×22, appears in 12 of season 8's 21 episodes, and is absent from season 9 until
  "The Truth" (credited only there). Doggett from 8×01, Reyes first appears 8×14, Kersh from 6×01, Skinner from 1×21.
- Production: Vancouver for seasons 1–5 and again for the revival, Los Angeles for seasons 6–9. FOX Fridays, moving
  to Sundays from 4×04; season 10 Sunday premiere then Mondays; season 11 Wednesdays (checked against the air dates).

## Guessed / editorial
- `callback` marks a handful of standalones that touch the mythology without being part of it (Conduit, Soft Light,
  Avatar, Wetwired, Paper Hearts, Elegy, Unusual Suspects, Travelers, Jump the Shark, Founder's Mutation). These stay `motw`.
- Fan-favorite, scary, comic, gut-punch and spotlight tags are editorial.
- Some recurring-character bars are drawn at season granularity, such as Fowley's run and the Bounty Hunter through season 8.
  The episode in each label is the checked fact. A bar's first or last season may be off by one.

## Notes for the engine
- TVmaze also lists four behind-the-scenes specials (S2, S3, S5, S10, null episode numbers). They aren't in the
  watch order and were dropped.
- The two films (1998, 2008) aren't episodes. They appear only as chart labels.
