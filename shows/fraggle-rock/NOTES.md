# Fraggle Rock — package notes

## Shape
- TVmaze show id **5488** — this is the classic 1983 HBO/Jim Henson puppet series, NOT the
  2022 Apple TV+ reboot (different TVmaze id). Confirmed by network (HBO), premiere date
  (1983-01-10) and cast (Henson-troupe puppeteers), all pulled live from TVmaze.
- 5 seasons, **96 episodes**, season axis. Season sizes: S1=24, S2=24, S3=22, S4=13, S5=13 —
  TVmaze's `s`/`e` numbering used verbatim, no specials, no gaps. Real-world air-date ranges
  (from `episodes.json`): S1 Jan–Jul 1983, S2 Jan–Jun 1984, S3 Dec 1984–May 1985 (so S3
  straddles a calendar-year boundary), S4 Jan–Mar 1986, S5 Jan–Mar 1987. The drop from
  22–24 episodes/season to 13 starting with S4 is real (confirmed by TVmaze's own episode
  count), not a data gap.

## Data quality — this is a sparsely-catalogued 1980s kids' show
- **`episodes.json`**: only **14 of 96** episodes have a TVmaze summary; **0 of 96** have a
  TVmaze rating (`rating.average` is `null` for every episode, so no `rating` key appears
  anywhere in the file); only **12 of 96** have an `image.medium`. This is a real limitation
  of TVmaze's catalog for this show, not a fetch error — spot-checked several episode pages
  directly and confirmed the fields are genuinely absent upstream.
- **`cast.json`**: `/episodes/<id>/guestcast` was called for all 96 episodes (no failures,
  ~0.35s between calls) and returned an **empty array for every single episode**. Spot-checked
  the raw endpoint on the pilot and the finale directly — both return `[]`, confirming this
  isn't a fetch bug. This makes sense for the show: per TVmaze's show-level `/cast` endpoint,
  every character (all five Fraggles, Doc, Sprocket, all three Gorgs, Cotterpin Doozer,
  Convincing John, the Trash Heap, Uncle Traveling Matt) is played by one of eight core
  puppeteers (Henson, Nelson, Goelz, Whitmire, Prell, Mullen, Hunt, Parkes, plus Myra
  Fried/Cheryl Wagner on Ma Gorg) — there's essentially no rotating human guest cast the way
  a live-action show has, so the guest-character dropdown will be empty for this show. Noted
  in `show.json.regularsNote`.
- **Because summaries are so sparse, `eras.js` and `tags.js` are grounded primarily in
  TVmaze episode *titles*** (which are complete and reliable for all 96 episodes) plus the
  14 available summaries, supplemented by general/encyclopedic knowledge of the series for a
  handful of well-known episodes (the pilot, "Mokey's Funeral," the "Bells of Fraggle Rock"
  Christmas special, "The Secret Society of Poohbahs," "The Trial of Cotterpin Doozer," the
  finale "Change of Address"). This is a materially different data situation from
  Silicon Valley/Angel/Buffy, where every episode has a summary to ground tags in — flagging
  it here per the task's honesty requirement.

## Confident
- Show identity, network, season/episode structure, air dates: straight from TVmaze.
- Main cast and puppeteers, including the Ma Gorg recast (Myra Fried played her in Season 1
  only; Cheryl Wagner from Season 2 on) — this is TVmaze's own show-cast data (`Ma Gorg
  (Season 1)` vs `Ma Gorg`), reflected as a bar in `eras.js`'s `gorgs` category.
  - the Fraggle Five (Gobo, Mokey, Wembley, Boober, Red), Doc & Sprocket, the Gorg family,
    Cotterpin Doozer, Convincing John and Marjory the Trash Heap are present the entire run
    (no cast departures the way live-action ensembles have) — confirmed via TVmaze's
    show-level cast list.
- The 14 episodes with TVmaze summaries are quoted/paraphrased accurately in tags and era
  bars (e.g. 1×24 "New Trash Heap in Town," 1×06 "The Preachification of Convincing John,"
  2×05/close reading of titles for Uncle Matt's postcard thread).

## Judgement calls / lower confidence
- **`eras.js` uses season-level rows, not invented plot arcs.** Fraggle Rock is a
  low-serialization anthology show — there is no season-long plot to chart the way Silicon
  Valley or Angel have. Rows track the recurring cast/world instead (Fraggle Five, Doc &
  Sprocket, Gorgs, Doozers, Trash Heap, Traveling Matt), per the task's guidance to use
  recurring-format rows rather than force arcs that don't exist.
- **Showrunner attribution is a single, unvaried string across all 5 seasons**
  (`Jim Henson & Jerry Juhl`) rather than a season-by-season breakdown. I could not find
  reliable season-by-season showrunner/story-editor records for this show (unlike Silicon
  Valley's clearly documented Judge/Berg run), so per CONTRACT.md's fallback guidance this
  notes the same creative team throughout rather than guessing a division. Duncan Kenworthy
  produced; Jocelyn Stevenson was also a story editor on the show at various points, but I
  don't have confident per-season attribution for her, so she isn't credited in
  `SEASON_META`.
- **Character-spotlight tags (`gobo`/`mokey`/`wembley`/`boober`/`red`/`doc`) are only applied
  where the episode title names the character explicitly** (e.g. "Wembley's Egg," "Red's Sea
  Monster," "Gobo's Discovery") or the TVmaze summary confirms it. I deliberately did *not*
  guess character focus from vague titles ("Born to Wander," "The Cavern of Lost Dreams,"
  "A Brush with Jealousy," etc.) — those get the fallback `classic` tag instead of a padded
  spotlight guess.
- **`postcard` (Traveling Matt), `doozer`, `gorg`, `trashheap` and `musical` tags** are
  applied where the title or summary makes the subject explicit (e.g. "Uncle Matt Comes
  Home," "The Doozer Contest," "Sir Hubris and the Gorgs," "Mokey and the Minstrels"). A few
  are inferred from strong contextual cues rather than a summary — e.g. `doc` on
  3×16 "The Battle of Leaking Roof" assumes the roof in question is Doc's workshop (which the
  pilot establishes connects to Fraggle Rock via vents/pipes), not summary-confirmed.
- **`heavy` (gut-punch) is used sparingly (3 episodes)**: 1×22 "Mokey's Funeral" (well-known,
  high confidence — a famously bittersweet episode about facing mortality), 5×07 "Gone But
  Not Forgotten" (inferred from the title itself, not a summary) and 5×13 "Change of Address"
  (series finale, generally bittersweet by nature of ending the show). Did not tag other
  plausible-sounding titles (e.g. "Blanket of Snow, Blanket of Woe") as heavy without
  stronger evidence — better a smaller accurate set than a padded one.
- **`milestone` (14 episodes)** covers the pilot, the finale, the Christmas special, and
  episodes whose titles/summaries indicate a real hinge or format-break for the show's world
  (Mokey briefly becoming the Trash Heap, Uncle Matt's return, the Doozer trial, etc.) —
  not every "notable-sounding" title got this tag.
- **`classic` is a new fallback tag** (not used by the reference shows, which all have dense
  summaries) introduced specifically because the CONTRACT requires every episode to have
  ≥1 tag, and roughly half of Fraggle Rock's 96 episodes have neither a usable summary nor a
  character/format name in the title. It's an honest placeholder ("standalone, thin data")
  rather than a fabricated claim.

## For the engine
- Nothing structurally unusual: 5 seasons, contiguous integers, season axis,
  `CHART_AXIS = "season"` set explicitly. `eras.js` is **7 categories** (world, fraggles,
  workshop, gorgs, doozers, trashheap, matt) / 15 rows / ~35 bars — on the low end of bar
  count deliberately, since most rows are full-run (1–5) character/world presence rather than
  season-by-season plot beats.
- Accent `#ff7a3d` (warm puppet orange) on near-black cave brown `#241208`, hero font
  **Baloo 2** (`Baloo 2:wght@500;700;800`) for a rounded, playful feel, emoji 🪨.
