# The West Wing — package notes

**Axis:** season (7 columns). **Episodes:** 155. **TVmaze show id:** 523.
Files shipped: `show.json`, `episodes.json`, `cast.json`, `eras.js`, `tags.js`.
`fetch_cast.py` / `build_cast.py` / `guestcast_raw.json` / `tvmaze_raw.json` / `fetch_cast.log` were used and deleted.

## Numbering decision — 155, not 154

TVmaze's `/shows/523/episodes` returns **154** regular episodes (S1 22, S2 22, S3 21, S4 23, S5 22, S6 22, S7 22).
`"Isaac and Ishmael"` is filed by TVmaze as a `significant_special` in season 3 with **`number: null`**. It aired
2001-10-03, a week *before* the actual S3 premiere ("Manchester: Part 1", 2001-10-10), and it is part of the
canonical watch order, so per the CONTRACT it is included — carried as **`s:3, e:0`**, i.e. the EP_TAGS key
**`"3.0"`**. That keeps every other TVmaze season/episode number untouched and gives S3 a clean 22 columns.

Two other specials were **excluded** (both `insignificant_special`, neither narrative):
- id 47437, "Documentary Special" (2002-04-24) — behind-the-scenes doc.
- id 1934818, "A West Wing Special to Benefit When We All Vote" (2020-10-15) — the 2020 staged reading.

**Engine note:** `e: 0` is the only unusual thing in this package. If the engine formats episode numbers or
auto-tags premieres by `e === 1`, `3.0` will simply not be treated as a premiere — which is correct, since
"Manchester: Part 1" is the real S3 premiere. Nothing else here is out of the ordinary: 7 seasons, no gaps,
all 155 episodes have a title, airdate, summary, image and rating, and all 155 have guest-cast entries.

## Confident (verified against TVmaze episode summaries and/or the guest-cast data)

These were checked against the actual data rather than recalled, and the episode numbers in the chart labels
are the verified ones:

- **Hoynes resigns in 4×21 "Life on Mars"** — the summary says so outright. This matters: it is *why* there is
  no Vice President in 4×23 "Twenty Five", which is what forces the 25th Amendment handoff to Speaker Walken.
  (My initial recollection had him resigning in S5; the data corrected it.) Russell is nominated in 5×03.
- **Mrs. Landingham dies in 2×21 "18th and Potomac"**, not 2×22 — "Mrs. Landingham buys her first new car, with
  tragic consequences." "Two Cathedrals" (2×22) is the funeral.
- **Leo's heart attack is 6×02** (at Camp David); **C.J. is Chief of Staff from 6×03** ("Third-Day Story").
- **Leo dies in 7×17 "Election Day, Part 2"** (the summary names it); 7×18 "Requiem" is the funeral.
- **Fitzwallace is killed in the Gaza bombing, 5×21**, alongside Donna being gravely wounded.
- **Toby's leak is exposed in 7×05 "Here Today"** ("the revelation of the identity of the leaker… Toby must get
  his lawyer"). The firing follows immediately; Bartlet pardons him in 7×22.
- **Haiti is the S2/S3 crisis** (2×21–3×02), not an S5 one — the summaries put it squarely there.
- **Kundu is S4 only** (4×14–4×16) per the summaries.
- **Kazakhstan/China is S7** (7×08, 7×09, 7×12).
- **The San Andreo nuclear accident is 7×12–13** ("the near-nuclear disaster at the power plant").
- Debuts from the guest-cast data: Will Bailey **4×06**, Debbie Fiderer first seen **3×21**, Annabeth **6×04**,
  Santos **6×05**, Vinick **6×08**, Helen Santos **6×10**, Amy Gardner **3×08**, Joey Lucas **1×14**,
  Marbury **1×11**, Nancy McNally **2×01**, Joe Quincy **4×20**, Sam returns **7×19**.

## Guessed / approximate — the soft spots

- **Josh's departure is labelled "quits ~6×11"** with a tilde deliberately. 6×08 has him *approached* to run
  Russell's campaign, 6×10 has Santos declaring, and by 6×11 he is in New Hampshire setting up Santos HQ. The
  exact episode he resigns as Deputy Chief of Staff is the one boundary I could not pin from the summaries.
- **Kate Harper "from 5×19"** — that's her first guest-cast credit and her first summary mention is 5×20. If she
  appeared earlier as a billed regular, the true debut could be a few episodes earlier (5×15-ish). Season range
  5–7 is right regardless.
- **Ainsley Hayes charted as S2–3.** She debuts 2×04 and her guest credits are S2, S3 (and a 7×18 funeral
  cameo). She does appear early in S4 as a regular; I left the bar at 2–3 because that's where she's a presence.
- **Debbie Fiderer's bar starts at S4** ("hired 4×05") even though she first appears in 3×21, because S3 has no
  standing Executive Secretary — that gap in the row is intentional and accurate.
- **"Bartlet vs. Toby: the argument that runs seven years"** (arcs row 6) is an editorial through-line, not an
  event with dates. It's a real spine of the show but it's a reading, not a fact.
- The **`world` category's** grouped bars ("Belarus, Cuba, Iran & an asteroid" for S6; "the census, the ERA,
  gays in the military" for S1–2) bundle several storylines per season to keep the row readable. Each named item
  is real and in the right season, but the bars are summaries rather than single arcs.
- **Qumar is charted 3–5** and **Israel–Palestine 6**, on separate handling, because summaries mention Qumar
  from 3×08 through 5×02. The S6 Camp David accords are a distinct arc.

## Tags

28 tag types, all 155 episodes tagged, **minimum 3 tags per episode**. Season premieres/finales are *not*
tagged here (the engine auto-tags them).

- Every episode carries a mechanical era tag — **`sorkin` (S1–4, 89 eps)** or **`wells` (S5–7, 66 eps)** — which
  guarantees the ≥1-tag floor and delivers the Sorkin-vs-Wells filter directly.
- **`fanfav` is 53/155 (34%)**, which is high for a "fan favorite" tag but defensible for this show. I
  cross-checked every pick against the TVmaze ratings and adjusted: dropped 2×07, added 2×21, 4×22, 5×01, 7×20.
- I deliberately **kept `fanfav` on some low-rated episodes** where the *scene* is what's famous rather than the
  whole hour: 2×03 "The Midterms" (7.6 — the Dr. Jenna Jacobs takedown), 4×06 "Game On" (7.6 — the ten-word
  answers debate), 3×07 "The Indians in the Lobby" (7.5).
- **I did not trust the TVmaze rating on 3×00 "Isaac and Ishmael" (9.7)** — that's a low-vote artifact. It is in
  reality the most argued-about episode of the series, so it's tagged `divisive` + `experiment` + `bottle`, not
  `fanfav`. `divisive` is also on 4×13 "The Long Goodbye" and 5×18 "Access".
- `bottle` (7) and `experiment` (6) are kept deliberately tight: 3×00, 2×17 (the epistolary Stackhouse
  filibuster), 2×18, 4×13, 4×19, 4×20, 5×18 (the mock documentary), 5×20, **7×07 "The Debate" — broadcast live,
  twice**.
- Character spotlights cover Bartlet, Leo, C.J., Toby, Josh, Sam, Donna, Charlie, Will, Santos, Vinick, Abbey,
  plus Zoey, Kate and Annabeth. Spotlight counts are uneven by design (Bartlet 82, Josh 82, Annabeth 3) — they
  reflect who the episode is actually *about*.

## Chart shape

6 categories, 46 rows, **104 bars**, zero overlaps (validated). First category is `eras` (showrunner row first),
so the per-card accent stripe is Sorkin/Schlamme vs. Wells.

| category | rows | what it holds |
|---|---|---|
| `eras` | 4 | Sorkin & Schlamme 1–4 / John Wells 5–7, house style, NBC, the Emmy run |
| `presidency` | 5 | first/second term, the two campaigns, the VPs, the Walken interregnum & the transition, in-show years |
| `roster` | 12 | one row per seat — CoS, Press Sec, Comms, Deputy CoS, Sam's chair, Donna, Charlie, counsel, Will, Kate, the Executive Secretary's desk, Margaret |
| `arcs` | 6 | MS/censure/25th/leak, Rosslyn→Shareef→Leo, Landingham→re-election→shutdown→convention→transition, Josh/Donna, C.J./Danny + Gaza, Bartlet vs. Toby |
| `world` | 4 | Middle East, the standing crises, the one-season foreign files, the domestic files |
| `recurring` | 15 | Abbey, Zoey, Danny, Fitzwallace, McNally, Joey, Marbury, Bruno, Amy, Babish, the family, Santos, Vinick, the campaign bench, the opposition |

## Branding chosen

Accent **`#1f4e9c`** (presidential navy) on `#ffffff` text, hero gradient `#101c2e`, emoji **🏛️**, hero font
**Libre Baskerville** — picked over Playfair Display because greater-fool/The Newsroom already uses Playfair and
these two Sorkin shows will sit next to each other on the show picker.
