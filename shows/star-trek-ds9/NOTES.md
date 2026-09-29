# Star Trek: Deep Space Nine — package notes

**Source:** TVmaze show 493 (`/shows/493/episodes`, `/episodes/<id>/guestcast`). Season axis, 7 seasons,
176 episodes, in air order with TVmaze's own `s`/`e` numbering.

## Numbering
TVmaze splits the three feature-length episodes into two entries each: "Emissary" (1×01–1×02),
"The Way of the Warrior" (4×01–4×02) and "What You Leave Behind" (7×25–7×26). That makes 176 entries instead of
the usual 173, and from those points on seasons 1, 4 and 7 run one number higher than Memory Alpha and most
streaming services. For example, "The Visitor" is 4×03 here, not 4×02. Every episode number in the chart and tags uses
TVmaze's numbering and was checked against `episodes.json`.

## Confident
- Episode data, air dates, images and ratings come straight from TVmaze. The only change is stripping HTML
  from the summaries.
- Roster changes: the Defiant arrives in 3×01, Sisko is promoted in 3×26, Worf joins in 4×01–4×02, Jadzia dies in 6×26
  and Ezri is joined in 7×01–7×02. The Defiant is destroyed in 7×20 and replaced by the São Paulo in 7×24.
- Dominion War beats: the Dominion is named in 2×07, the Jem'Hadar arrive in 2×26 and the Founders are revealed in
  3×02. The Obsidian Order is destroyed in 3×21, Cardassia joins the Dominion in 5×14–5×15 and the war begins in
  5×26. The station is retaken in 6×06, the Romulans join in 6×19 and the Breen in 7×19–7×20. The final chapter
  runs 7×17–7×26.
- Klingon war: Gowron quits the Khitomer Accords in 4×01–4×02, changeling Martok is unmasked in 5×01 and the
  Accords are restored in 5×15. Worf joins the House of Martok in 5×21, and Gowron dies in 7×22.
- Bajor: Winn is elected Kai in 2×24, Bareil dies in 3×13, Akorem Laan appears in 4×17 and "Rapture" is 5×10.
  The Pah-wraiths first appear in 5×05.
- First appearances of recurring characters (Garak, Winn, Kasidy, the Female Changeling, Damar, Weyoun, Martok,
  Ishka and Leeta) match both Memory Alpha and the TVmaze guest-cast data. Ira Steven Behr was co-showrunner with Piller
  for season 3 and sole showrunner from "The Die is Cast" (3×21), per Memory Alpha.
- Mirror Universe episodes: 2×23, 3×19, 4×20, 6×08, 7×12. Ferengi episodes: 1×11, 2×07, 3×03, 3×16, 3×23, 4×08,
  4×16, 4×25, 5×20, 6×10, 6×23, 7×12, 7×24.

## Judgment calls
- **Dominion War arc vs. standalone.** Every episode carries exactly one of `dominion` or `standalone`. There are 48 arc
  episodes, from "The Jem'Hadar" (2×26) to the finale. They are the episodes where the Dominion or the war *is* the
  story: set-up, the Cardassian and Klingon political turns, war missions such as "The Siege of AR-558", and direct
  aftermath such as "It's Only a Paper Moon". War-era episodes that only have the war in the background ("You Are
  Cordially Invited", "The Sound of Her Voice", "In the Cards") are `standalone`. The Bajoran and Maquis threads are
  serialized too, but they have their own tags (`bajor`, `maquis`) and count as standalone for this split.
- Spotlight, fan-favourite and gut-punch tags are editorial.
- Some chart rows are drawn at season granularity with the exact episode in the label, such as Shakaar in 4–5 and
  Kira and Odo from 6×20.

## Notes for the engine
- Nothing unusual: 7 contiguous seasons, no specials, no missing episode numbers.
- TVmaze lists all 176 episodes with guest cast (1,513 credits). Morn, Broik and the station computer are the most
  common entries.
