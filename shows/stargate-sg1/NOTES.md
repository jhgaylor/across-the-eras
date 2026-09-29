# Stargate SG-1 — package notes

**Source:** TVmaze show 204 (`/shows/204/episodes?specials=1`, `/episodes/<id>/guestcast`). Season axis,
10 seasons, 215 entries: the 213 regular episodes in TVmaze's own `s`/`e` numbering plus the two
direct-to-DVD films. Showrunners, network history and cast changes were checked against Wikipedia's
Stargate SG-1 article and its season pages.

## Confident
- Episode data, air dates, images and ratings come straight from TVmaze. The only change is that HTML
  was stripped out of the summaries. Season 1 has 21 entries because TVmaze counts the two-hour pilot
  "Children of the Gods" as one episode.
- The three villain eras. The Goa'uld run S1–8: Apophis dies in 5×01, Anubis is revealed in 5×22 and
  held off in 8×18, and the Jaffa are freed in 8×17. The Replicators run from 3×22 to 8×17. The Ori run
  S9–10 through *The Ark of Truth*. Ba'al lasts until *Continuum*.
- Daniel ascends in 5×21. Jonas Quinn first appears in 5×21, is on SG-1 for season 6, goes home in 7×02
  and guests in 7×14. Daniel appears as a guest in 6×06, 6×19 and 6×22, and returns in 7×01. Episode
  numbers for these and for O'Neill's guest spots (9×01, 9×03, 10×06, 10×14 and *Continuum*) come from
  the TVmaze guest-cast credits.
- Command of the SGC: Hammond S1–7, Weir 8×01–8×02, O'Neill for the rest of S8, and Landry from 9×01.
- Networks: Showtime for S1–5 and the Sci Fi Channel for S6–10. The two films went straight to DVD
  in 2008.
- Showrunners, per Wikipedia: Wright & Glassner S1–3, Wright alone S4–6, and Robert C. Cooper S7–10.
- The `goauld`, `ori`, `tokra`, `asgard`, `earthpol` and `bratac` tags come from the guest-cast
  credits: an episode gets the tag when a named character from that group is credited. Because of this,
  `goauld` also covers some episodes where a System Lord only makes a brief appearance.

## Guessed / approximate
- The spotlight tags, fan-favorite tags and "gut-punch" tags are editorial choices. `classic` is the
  fallback tag, so every episode has at least one tag.
- The `replicators`, `timey` and `funny` tags were picked by hand, not from the credits.
- Some spans are drawn at season granularity, including "The Ancients — a mystery in the background"
  (S1–6) and Earth's own ships starting in S6.

## Notes for the engine
- **Films:** TVmaze lists *The Ark of Truth* and *Continuum* as season-10 specials with `number: null`.
  Following the Doctor Who package's convention, they continue the season numbering as **10×21** and
  **10×22**. Because of this, the engine's auto "season finale" tag lands on *Continuum* rather than
  10×20 "Unending". The film is the true end of the story, but "Unending" is tagged `milestone` so
  the show's own last episode is still easy to find.
- TVmaze's three "insignificant" season-10 specials (featurettes) were dropped.
- All 215 entries have guest cast on TVmaze.
