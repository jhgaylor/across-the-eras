# Lost — package notes

**Slug:** `lost` · **Axis:** `episode` (121 columns) · **TVmaze show id:** 123 · 6 seasons, 121 episodes.

## Episodes: what's in, what's out

`https://api.tvmaze.com/shows/123/episodes?specials=1` returns **150** entries: 121 numbered
episodes and **29 specials** (`number: null`, all typed `insignificant_special`). Every one of the 29 is
either a recap/clip show (*The Journey*, *Destination Lost*, *Revelation*, *Reckoning*, *Lost Survivor
Guide* ×3, *The Answers* ×2, *Past, Present & Future*, *Destiny Calls*, *A Journey in Time*, *Final
Chapter*, *The Final Journey*, …) or one of the 13 *Missing Pieces* mobisodes, plus the *Epilogue: The
New Man in Charge*. **All 29 are excluded.** The *Missing Pieces* and the epilogue are narrative rather
than recap, but they aren't part of the 121-hour broadcast run and would wreck the episode axis, so they
are out too; a rewatcher who wants them can find them after "The End".

That leaves exactly the canonical **121**: S1 25, S2 24, S3 23, S4 14, S5 17, S6 18.

**Two-hour episodes are kept split the way TVmaze splits them** — Exodus (1)(2)(3), Live Together Die
Alone (1)(2), Through the Looking Glass (1)(2), There's No Place Like Home (1)(2)(3), The Incident (1)(2),
LA X (1)(2), The End (1)(2). This is the standard 121-episode numbering, so nothing is renumbered.
Both halves of each block carry the `twopart` tag.

Only edit made to TVmaze's data: 1×01 and 1×02 were both titled `Pilot`; they are now `Pilot (1)` and
`Pilot (2)` to match how every other split two-parter is labelled. Everything else (summaries, images,
ratings, ids) is verbatim TVmaze. Note TVmaze's summary for **6×17 "The End (1)" is wrong** — it's a
network promo blurb about the enhanced-pilot rebroadcast, not a synopsis. Left as-is for provenance.

## Absolute episode indexes (episode axis)

    S1 = 1–25 | S2 = 26–49 | S3 = 50–72 | S4 = 73–86 | S5 = 87–103 | S6 = 104–121
    S1eN = N | S2eN = 25+N | S3eN = 49+N | S4eN = 72+N | S5eN = 86+N | S6eN = 103+N

## Chart: 7 categories, 70 rows, 409 bars

| category | rows | bars | what it is |
|---|---|---|---|
| `seasons` | 5 | 22 | season/era (accent-stripe row), in-show timeline, air dates, showrunners, the end-date decision |
| `structure` | 4 | 203 | the flash-device era, **exact narrative device per episode**, **centric character per episode**, centric type |
| `survivors` | 17 | 54 | the 815 cast with exact deaths and exits |
| `newcomers` | 14 | 36 | Others, Tailies, freighter crew, Rousseaus, Hawkings |
| `factions` | 8 | 25 | the Others, Widmore, Jacob, the Man in Black, DHARMA, the Temple, individual antagonists |
| `places` | 9 | 36 | beach/caves/Swan/Barracks/Hydra/freighter/Temple/Source, plus a "DHARMA stations, first seen" row |
| `arcs` | 13 | 33 | the Numbers, the button, the raft, the flash-forward reveal, the Oceanic Six, moving the Island, the candidates, the source |

### The two rows this show exists for

**Narrative device (row 2 of `structure`)** — run-length encoded, exact, one bar per run:
flashback 1–56 · time travel 57 (*Flashes Before Your Eyes*) · flashback 58–70 · flash-forward 71–73 ·
then S4's interleave one hour at a time (74 FB, 75–76 FF, 77 time travel *The Constant*, 78 FB, 79 "Both"
for *Ji Yeon*, 80 FB, 81–82 FF, 83 FB, 84–86 FF) · S5 alternating time-skips and flashbacks with 95 and
101 as the two hours with no flash device at all · flash-sideways 104–121 broken only by 112
(*Ab Aeterno*) and 118 (*Across the Sea*), which are flashbacks.

**Centric character (row 3 of `structure`)** — I took the brief's suggestion: **one row, 121
single-column bars**, one per episode, colour-keyed per character so all of Jack's hours share a blue, all
of Kate's a burnt orange, and so on. No second "group centric" row is needed because multi-centric hours
just get their own label and colour (`Everyone`, `Tailies`, `Freighter 4`, `Oceanic 6`, `Jack & Locke`,
`Jacob & MIB`). Row 4 collapses the same data into a coarser question — is this hour about a 815
survivor, a Tailie, an Other, a later arrival, mythology, or the ensemble.

Bar labels on 1-column bars are shortened (`Jacob & MIB`, `Oceanic 6`, `Rose & Bern.`, `815 survivor`)
because the episode-axis cell is ~52px with `overflow:hidden`; the full context is in the row above and
in the hover title.

## Confidence

**Solid — checked against episode summaries and the fetched guest cast.** All 121 centric assignments;
all death/exit episodes (Boone 1×20, Ethan 1×15, Shannon 2×06, Ana Lucia & Libby 2×20, Eko 3×05, Nikki
& Paulo 3×14, **Charlie 3×23** — not 3×22; the Looking Glass sequence is in part 2 per the TVmaze
synopsis — Naomi 4×02, Karl & Rousseau 4×08, Alex 4×09, Michael 4×14, Locke revealed 5×07, Charlotte
5×05, Daniel 5×14, Jacob 5×17, Juliet 6×01, Sayid/Sun/Jin 6×14, Widmore 6×16); all first appearances.

The guest-cast fetch corrected several of my first guesses, all now fixed in `eras.js`:
Ethan debuts 1×09 (not 1×10); Mikhail 3×05 (not 3×11); Naomi 3×17 (not 3×12); Karl 3×01 (not 3×02);
Keamy 4×05 (not 4×06); Zoe 6×08 (not 6×10); Daniel 4×01 (not 4×02); Boone's flash-sideways hour is 6×01
(not 6×05); Walt also visits Hurley in 4×13; Michael's ghost is in 6×12; Ana Lucia is in the 1×23 airport
flashback and the 6×16 sideways; Shannon and Boone both turn up in the *Exposé* flashbacks (3×14).

**Judgment calls, flagged honestly:**
- **Multi-centric hours.** 1×23–1×25, 5×01, 5×09, 5×15, 6×01, 6×02, 6×13, 6×16, 6×17, 6×18 are labelled
  `Everyone`. Reasonable people file some of these differently — 5×15 *Follow the Leader* gets called
  Locke-centric, 6×14 *The Candidate* gets called Locke-centric (I used `Jack & Locke` because the
  sideways is the two of them). 3×15 *Left Behind* is Kate here though it splits with Juliet.
- **S5 narrative device.** The season's structure is the plot, not a device, so I marked the hours with a
  genuine flashback (5×02, 5×04, 5×06, 5×07, 5×08, 5×10–5×14, 5×16, 5×17) as `Flashback`, the hours
  driven by the skips (5×01, 5×03, 5×05) as `Time skips`, and 5×09/5×15 as `No flashes`. Defensible, not
  the only defensible split.
- **`skippable`** is deliberately tiny and only where the consensus is broad: 1×12 *Whatever the Case May
  Be*, 2×12 *Fire + Water*, 3×09 *Stranger in a Strange Land*, 3×14 *Exposé*, 6×03 *What Kate Does*.
  *Exposé* also carries `twist` — it's skippable and a genuine format experiment at the same time.
- **Rose & Bernard in S6** is labelled vaguely ("in 2007, and in the flash-sideways") because TVmaze's
  guest cast lists them for 6×01/6×04/6×14 but not for the 6×10 jungle-cabin scene I remember. The bar
  covers the whole season rather than assert a wrong episode.
- **`myth` vs `character`** are close to mutually exclusive by construction: an episode tagged `myth` or
  `answers` loses `character` unless the character work is the actual point (*The Constant*, *The
  Variable*, *Jeremy Bentham*, *The Man Behind the Curtain*, *Ab Aeterno*, *The 23rd Psalm*, *One of Us*,
  *Deus ex Machina*, *Dr. Linus*, *The Man from Tallahassee*).

## Tags

36 defs, all 121 episodes tagged, 3.6 tags/episode. Structural: `fanfav` 49, `myth` 69, `character` 53,
`gutpunch` 35, `death` 23, `twopart` 18, `sideways` 16, `twist` 15, `timetravel` 15, `answers` 13,
`flashfwd` 10, `skippable` 5. Plus 24 character spotlights, derived from the centric row so the chart and
the tag filter always agree. Premiere/finale are left to the engine.

## Engine notes

Nothing unusual needed. 121 columns on the episode axis is the widest package so far — the chart is
`min-width: 150px + 121 × 54px ≈ 6.7k px` and scrolls horizontally as designed. 7 categories / 70 rows
makes for a tall chart; the collapse toggle matters more here than on the 60-column shows.
`cast.json` covers all 121 episodes (1,119 guest credits). Series regulars are not in TVmaze guest cast,
which is what `regularsNote` in `show.json` explains.

Accent is DHARMA orange `#f28c28` on `#1a1206`; hero font Cormorant Garamond 600/700; emoji 🏝️.
