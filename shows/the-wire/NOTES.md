# The Wire — package notes

TVmaze show id **179** (HBO, 2002–2008). 60 episodes, 5 seasons, no specials, no gaps —
TVmaze's `s`/`e` numbering is 1:1 with air order, so `episodes.json` needed no stitching or renumbering.

Absolute episode indexes used by `eras.js` (`window.CHART_AXIS = "episode"`, 60 columns):

| Season | Episodes | Absolute range | Helper |
|---|---|---|---|
| S1 | 13 | 1–13  | `S1eN = N` |
| S2 | 12 | 14–25 | `S2eN = 13+N` |
| S3 | 12 | 26–37 | `S3eN = 25+N` |
| S4 | 13 | 38–50 | `S4eN = 37+N` |
| S5 | 10 | 51–60 | `S5eN = 50+N` |

## What shipped

- `episodes.json` — 60 episodes, all with summary, image and rating.
- `cast.json` — guest cast for all 60 episodes: 1,540 credits, **322 distinct characters**.
- `eras.js` — 7 categories, 54 rows, **132 bars**. No overlaps within any row (validated).
- `tags.js` — 33 tag definitions, all 60 episodes tagged, every tag used at least once.
- `show.json` — accent `#d98e04` (Baltimore brick/amber) on `#000` text, hero font Oswald, emoji 📟.

## Categories

1. **Season & institution** — season bars, the institution each season indicts, in-show year, Simon across all 60. (First row drives the per-card accent stripe.)
2. **Investigations & cases** — the season's case, Hamsterdam / the special class / the fabricated killer, the Clay Davis money trail, the vacants, and a row for the wire itself (pagers → port cameras → burners → Marlo's clock-face texts).
3. **The Barksdales & the corners** — Avon, Stringer, D'Angelo/Wee-Bey, Bodie, Wallace/Cutty, Poot, the muscle.
4. **Marlo, Joe & the connect** — Marlo, Chris & Snoop, Prop Joe & the Co-Op, Cheese, the Greek & Vondas, Omar, Mouzone.
5. **The Law** — McNulty, Greggs, Bunk, Freamon, Daniels, Herc, Carver, Prez, Sydnor, Landsman, Colvin.
6. **City Hall, command & institutions** — the commissioner succession, Rawls, Valchek, Royce/Carcetti, Clay Davis, Norman Wilson, and the union / the school / the Sun.
7. **Recurring characters** — Beadie, Bubbles, Johnny, Levy, Pearlman, the S4 boys, the Sobotkas, Butchie, Brianna.

## Confident

Season boundaries and all 60 columns. The deaths and exits named in bar labels are the ones I'm sure of:
Wallace 1×12, Kima shot 1×10, D'Angelo 2×06, Frank Sobotka 2×11, Stringer 3×11, Avon arrested 3×12,
Bodie 4×13, Butchie 5×04, Prop Joe 5×05, Omar 5×08, Snoop 5×09, Cheese 5×10. Also solid: Freamon joins the
detail 1×02, Omar's debut 1×03, Prop Joe's debut 1×09, Avon released 3×06 ("Homecoming"), Carcetti wins the
primary 4×06, Burrell forced out 5×04, Clay Davis acquitted 5×07.

## Guessed or deliberately widened

Where I wasn't certain of the exact episode I widened the bar to season granularity rather than assert a number.

- **Prez shooting the plainclothes officer** — 3×09 or 3×10; I couldn't pin it. Bar reads "(late S3)" and spans
  26–36; both 3.9 and 3.10 carry the `prez` tag.
- **First appearances set to the S3 premiere (26)**: Marlo, Chris, Snoop, Cutty, Slim Charles. All are S3
  introductions; the precise episode within 3×01–3×03 is approximate.
- **Cheese** starts at the S2 premiere (14) — S2 introduction, exact episode not pinned.
- **Brother Mouzone** arrives at 20 (2×07); it's 2×07 or 2×08.
- **Omar's S2 bar** is the full season (14–25). He is not in every S2 episode — read it as "active in S2",
  same convention as the other season-granularity bars.
- **Johnny Weeks' death** widened to the end of S3 (bar ends at 37); he dies in Hamsterdam late in the season.
- **McNulty marine unit → port case** boundary at 18/19 is approximate (he is pulled back in over 2×04–2×06).
- **Beadie & McNulty at home** starts at 37 (3×12), approximate.
- **Kima → homicide** at 38 (S4 premiere), approximate.
- **Herc fired** at 48 and **Carcetti sworn in** at 48 (4×11 "A New Day") — both late S4, approximate;
  Royce's mayoral bar ends at 47 to match.
- **Clay Davis money trail** starts at 33 (mid-S3, when Freamon starts following the money), approximate.
- **The Greek & Vondas return** at 54, approximate — Joe brokers Marlo's introduction across 5×04–5×07.
- **Commissioner succession row** (Burrell → Rawls acting → Daniels → Valchek): Burrell's ouster at 5×04 is
  firm; the Daniels and Valchek handoffs are drawn from the 5×09/5×10 sequence and are one-episode bars, so
  read them as "ends the series in the chair", not as precise tenures.
- **In-show years** (2002/2003/2004/2006/2008) track the air years. The show is loose about this; S5 ends with
  an epilogue that jumps forward, noted in the bar label.

Ziggy's shooting of Glekas is somewhere around 2×09–2×10; I did not name an episode in any label rather than
guess wrong, so no bar or tag asserts it.

## Notes for the engine

- 60 columns on the episode axis is the widest episode-axis show in the repo so far (The Newsroom is 25), so
  the chart will need comfortable horizontal scrolling — worth a look at column width at this count.
- Nothing unusual about numbering: 5 contiguous seasons, single TVmaze id, no specials.
- `regularsNote` in `show.json` flags that the cast rotates by season, which is why so many faces people think
  of as regulars (Marlo, Colvin, Carcetti, the S4 boys) are not in every season's regular cast.
- Guest character names come straight from TVmaze and keep their rank/title prefixes
  (e.g. `Dep. Comm. for Admin. Stanislaus "Stan" Valchek`, `Sgt. Jay Landsman`). Left as-is for consistency
  with the other shows in the repo; ~18 of the 322 are generic walk-ons like `Inmate #1`.
