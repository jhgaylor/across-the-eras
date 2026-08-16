# Twin Peaks — package notes

## Shape

- **48 episodes, EPISODE axis** (`window.CHART_AXIS = "episode"`), 3 seasons, 7 categories, all 48 tagged.
- **No stitching was needed.** `https://api.tvmaze.com/search/shows?q=twin peaks` returns exactly one
  entry — **TVmaze show 156**, premiered 1990-04-08, ended 2017-09-03. The Return is season 3 of that
  same entry, so seasons are already contiguous 1 / 2 / 3. `show.json.tvmazeId` is the scalar `156`.
- Fetched with `?specials=1`; TVmaze lists no specials for this show, so the 48 are all `type: "regular"`.

## Numbering — the one thing to know

TVmaze counts the 90-minute **Pilot as `1×01`**, not `1×00`. The original broadcast numbering called the
Pilot "the pilot" and then started at "Episode 1", so **every original "Episode N" is TVmaze `1×(N+1)`**
(and, in season 2, TVmaze `2×(N−7)`). I kept TVmaze's numbering everywhere — `episodes.json`, `EP_TAGS`
keys, and the column indexes in `eras.js`.

Practical consequences, because this trips people up:

| The thing people say | Original numbering | TVmaze | chart column |
|---|---|---|---|
| The Red Room dream ("Zen, or the Skill to Catch a Killer") | Episode 2 | `1×03` | 3 |
| "Lonely Souls" — the killer is revealed | Episode 14 | `2×07` | 15 |
| "Arbitrary Law" — Leland dies | Episode 16 | `2×09` | 17 |
| "Beyond Life and Death" — the Black Lodge finale | Episode 29 | `2×22` | 30 |

The task brief listed Lynch's episodes as "pilot, 1×02, 2×01, 2×02, 2×07, 2×22" — that `1×02` is the
original Episode 2, which is TVmaze `1×03`. The chart uses columns **1, 3, 9, 10, 15, 30** plus **31–48**.

Column arithmetic: `S1eN = N`, `S2eN = 8+N`, `S3eN = 30+N`.

## Fire Walk With Me

It's a 1992 film, so it has no column on an episode axis. It is called out in the season-3 bar label —
`"S3: The Return — 25 years later (after Fire Walk With Me, 1992)"` — and again in `show.json.credits`.
Its knock-on characters (Phillip Jeffries, the Tremonds/Chalfonts, garmonbozia, the convenience store)
do get bars where they appear on screen in the series.

## Confidence

**Verified from data, not memory:**

- Directors: fetched from Wikipedia's episode list and cross-checked against the Lynch episodes I already
  knew. All 30 original-run directors are on the chart (`seasons` rows 5 and 6). Lynch directed 6 of the
  original 30 and all 18 Parts. Diane Keaton directing `2×15` is real, not a joke.
- Appearance spans for **recurring and guest** characters came from the fetched `cast.json`
  (`/episodes/<id>/guestcast`, 48 requests). That corrected several things I would have guessed wrong:
  - Gordon Cole's first appearance is **`2×06` "Demons"** (col 14), not `2×09`.
  - Albert Rosenfield arrives in **`1×03`** (col 3).
  - Philip Gerard is in the **Pilot** (col 1).
  - Denise Bryson is `2×11`–`2×13` (cols 19–21) and Part 4 only.
  - Richard Horne debuts in **Part 5**, not Part 6; dies Part 16.
  - Bill Hastings' last episode is **Part 11** (col 41), not Part 14.
  - Duncan Todd & Roger are killed in **Part 15**; Chantal & Hutch in **Part 16**.
  - Diane's first credit is **Part 6**; Tammy Preston's is **Part 3**.
  - The `1×03` dream is confirmed by BOB + the Man From Another Place both being credited there.
- The Roadhouse musical-guest row is built entirely from guest-cast credits — every band on it is
  credited as itself in that episode. Julee Cruise's three (Pilot, `2×07`, Part 17) are from the same
  source. Parts 1, 7, 11 and 18 have no musical guest and correctly get no bar.

**From knowledge, not verifiable from TVmaze** (series regulars don't appear in `guestcast`, so their
spans are mine):

- Cooper / Mr. C / Dougie boundaries: Red Room Parts 1–2, Dougie Parts 3–15, wakes in Part 16.
  This matches the brief and I'm confident in it.
- Windom Earle's span is drawn as `2×12`–`2×22` (cols 20–30). The chess game starts around `2×12` and he
  is physically in town from roughly `2×14`; the exact first-letter episode is the softest date on the
  chart. Annie Blackburn (cols 25–30) *is* confirmed by cast data.
- The "S1–2 presence" bars for regulars (Cooper, Audrey, Donna, James, Bobby, Shelly, Leo, Catherine,
  Pete, Norma, Ed, Harry Truman, Hawk, Andy, Lucy, Jacoby, the Log Lady, Briggs) are drawn as full
  1–30 spans. They are "in the show" spans, not "in every episode" spans — same convention the other
  episode-axis packages use. Death/exit dates in the labels (Leland `2×09`, Josie `2×16`, Maddy `2×07`)
  are accurate.
- The showrunner row is a fair summary rather than a documented handoff: Lynch and Frost were hands-on
  through the reveal, ABC pushed for the killer to be named, Lynch disengaged for most of the back half
  of S2 while Harley Peyton and Robert Engels ran the room, and Lynch returned to direct the finale.
  There is no single episode where control changes hands, so the bar boundary at column 17/18 (the
  Leland episode) is an editorial choice.
- `SEASON_META[2].showrunner` says "Frost, Peyton & Engels" for the same reason — season 2 is genuinely
  not a Lynch season after `2×09`.

**Tags** are deliberately conservative. `soap` marks the post-reveal S2 drift (`2×10`–`2×19`, minus the
episodes doing real Lodge work); `experiment` is on Part 8 only, because nothing else in 48 hours
abandons the show's shape that completely. Season premieres and finales are not hand-tagged — the engine
adds those.

## Nothing unusual for the engine

3 seasons, standard `s`/`e` integers, 48 columns, no zero-numbered episodes, no specials, one TVmaze id.
`accent` is `#b3001b` (Red Room red) on `#ffffff`; hero font is Zilla Slab; emoji is ☕.

`fetch_cast.py`, `build_cast.py`, `guestcast_raw.json`, `fetch_cast.log` and `tvmaze_raw.json` were
deleted after use, as the contract requires. Shipping: `show.json`, `episodes.json`, `cast.json`,
`eras.js`, `tags.js`, `NOTES.md`.
