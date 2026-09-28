# Avatar: The Last Airbender — package notes

## Shape
- TVmaze show id **555**: the original Nickelodeon animated series (2005–2008), not the Netflix live-action
  remake (TVmaze 38753). 3 Books, **61 episodes** (20 / 20 / 21), **episode axis**. Columns 1–20 are
  Book One: Water, 21–40 Book Two: Earth, 41–61 Book Three: Fire. TVmaze `s`/`e` numbering is used as-is.
- Only TVmaze's `regular` episodes ship. Specials are left out: the unaired pilot, the behind-the-scenes
  and mini-short extras, and the 2026 "Avatar Aang: The Last Airbender" entry TVmaze files under season 3.
  None of them are part of the series' watch order.
- **Titles are shortened.** TVmaze stores "Book One: Water - Chapter One: The Boy in the Iceberg". The
  "Book … - Chapter …: " prefix is removed, so the title reads "The Boy in the Iceberg". The card already
  shows season and episode. Nothing else in the titles changed.
- Every episode has a summary, an image and a TVmaze rating.

## Cast
- `cast.json` is TVmaze `/episodes/<id>/guestcast` for all 61 episodes. TVmaze credits many voice actors
  only as **"additional voices"**: 289 of 597 raw credits. Those credits are **dropped** because they
  would be one useless entry in the character dropdown. That leaves 308 named credits for 159 characters,
  in 59 episodes. Two episodes have no named guest at all.
- Mai and Ty Lee are TVmaze show-level regulars but also show up in guestcast, so they're in the dropdown.
  `regularsNote` lists only the regulars who are not.

## Confident
- Book boundaries, air dates and the Book 3 split (3×01–3×11 Sep–Nov 2007, then 3×12–3×21 the week of
  Jul 14–19, 2008): straight from TVmaze's airdates.
- Recurring-character bars were checked against **both** TVmaze guestcast and the Avatar Wiki's per-character
  "Appearances" lists: Zhao (1×03–1×20), Azula (from 2×01; flashback in 1×12), Mai & Ty Lee (from 2×03),
  Ozai (silhouette from 1×08, face at 3×11), Long Feng (2×14–2×20), Jet (1×10, 2×12–2×17), Combustion Man
  (hired 3×02; 3×05, 3×07; dies 3×12), Suki (1×04, 2×12, 2×16, 3×14–3×21), Hakoda (2×19, 3×01, 3×10–11,
  3×14–16), Pakku, Jeong Jeong, Piandao, June, Xin Fu, Guru Pathik, Haru, Teo.
- Story beats pinned to one episode: Toph joins 2×06, Appa taken 2×10 and found 2×17, Iroh captured 2×20 and
  escaping 3×11, Zuko joining 3×12, the eclipse discovered 2×10, Hama 3×08, Yon Rha 3×16.

## Judgement calls
- **The Zuko row is in "Villains & antagonists"**, since he is the antagonist for most of the run. Its last
  bar shows him switching sides at 3×12. Iroh is in allies.
- **Locations are drawn where the group is, not where the villains are.** One exception: the 3×20 bar
  "The Capital & Ba Sing Se", where the finale splits. "Hiding out at the Western Air Temple" (3×13–3×16)
  runs across Sokka and Zuko's side trip to the Boiling Rock. The trip is on its own row.
- **"Avatar State locked" runs 3×01–3×20.** It is drawn from the story, not from a data field.
- Spotlight and vibe tags are editorial. `fanfav` follows common consensus plus the highest TVmaze ratings.
  `skippable` is only 1×11 The Great Divide. Premieres and finales aren't tagged; the engine does that.

## For the engine
- Nothing unusual: 3 contiguous seasons, `CHART_AXIS = "episode"`, 61 columns (BSG has 74).
- 5 categories, 33 rows, 166 bars. Accent `#e9b949` (Air Nomad saffron, lighter and yellower than DBZ's and Lost's
  oranges), hero font Marcellus SC, emoji 🌀.
