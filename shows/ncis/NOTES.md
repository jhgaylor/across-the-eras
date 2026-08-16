# NCIS — package notes

**Source:** TVmaze show `60` (NCIS, CBS, premiered 2003-09-23). Not to be confused with LA (72),
New Orleans (45), Hawai'i (53629), Sydney (60547), Origins (73811), Tony & Ziva (76760), New York (91405).

**Shape:** season axis, seasons 1–23, **507 episodes**, 6 chart categories, all 507 episodes tagged.

## Scope decisions

- TVmaze also lists a **season 24 episode 1 "TBA" dated 2026-10-06** — unaired as of 2026-08-16, so it is
  excluded. `episodes.json` stops at 23×20 "Sons and Daughters" (2026-05-12). When S24 starts airing, re-run the
  fetch, bump `episodeCount`/`seasons` in `show.json`, and add a `SEASON_META` entry for 24 (the showrunner bar
  and the "20 eps" / "+ Sydney & Origins" network bars will need their end extended).
- No specials exist in TVmaze's numbering for this show, so nothing had to be interleaved or renumbered.
- 23 season columns. At the engine's ~66px minimum per column the chart scrolls horizontally; bar labels are
  kept short accordingly.

## Confident

Derived directly from the fetched guest-cast data (507/507 episodes have a guest cast), which pinned down a lot
of first/last appearances that are easy to misremember:

- **Debuts:** McGee 1×07 (guest through S1, regular from S2) · Palmer 1×21 (regular from S10) · Ari 1×16 ·
  Ziva & Jenny Shepard 3×01 · Trent Kort 4×10 · La Grenouille 4×14 · Vance 5×14 (regular from S6) ·
  Jackson Gibbs 6×04 · DiNozzo Sr. 7×12 · Bishop **11×09** (not 11×03) · Grace Confalone 13×16 ·
  Reeves 13×23 · Kasie **15×17** · Delilah 11×01.
- **Exits/deaths:** Kate 2×23 · Jenny 5×19 · Franks 8×24 (reappears in visions through 15×08) ·
  Eli David & Jackie Vance 10×11–12 · Ziva 11×02 · Tony **and Kort** 13×24 · Abby & Reeves 15×22 ·
  Sloane 18×07 · Bishop 18×16 · Gibbs 19×04 · Ducky 21×02. Fornell's last appearance is **21×07**
  (he is recurring 1–21, not 1–18 as briefed). Ziva's return run is 16×24, 17×01, 17×02, 17×10, 17×11.
- **Milestones**, computed from the air-order index and cross-checked against known celebrations:
  100th = 5×06 *Chimera*, 200th = 9×14 *Life Before His Eyes*, 300th = 13×18 *Scope*,
  350th = 15×20 *Sight Unseen*, 400th = 18×02 *Everything Starts Somewhere*, 450th = 20×15,
  500th = 23×13 *All Good Things*. The 100th/200th/400th land on episodes independently known to be the
  celebrated ones, which is a good check on the count.
- **Crossovers**, confirmed by actual shared cast in `cast.json` rather than memory:
  6×22–23 (LL Cool J, Chris O'Donnell, Daniela Ruah) · 11×18–19, 13×12, 14×15 (Scott Bakula & Lucas Black,
  NOLA) · 19×17 & 20×01 (Vanessa Lachey) · **20×10 "Too Many Cooks"** (Hanna, Callen, Tennant — the big
  DC/LA/Hawai'i event) · 21×07 (Tennant + Kensi Blye) · 22×18, 23×17, 23×18 (Sam Hanna).
  Per the brief, the JAG backdoor pilots are not tagged.
  Note: 12×23 "The Lost Boys" aired as part of a franchise event night but has **no** LA/NOLA cast in
  TVmaze's guest list, so it is tagged `arc`/`twoparter` only, not `crossover`.
- **Arc/plot facts** taken from the TVmaze summaries shipped in `episodes.json` (so they're checkable in the
  app itself): the S18 Fornell/opioid arc climaxing in 18×05, Gibbs' S19 serial-killer conspiracy, Parker's
  frame-up (19×21 → 20×01) and his ex Vivian, Torres' trial (20×22 → 21×01), Ducky's memorial (21×02, with
  Michael Weatherly returning), Carla Marino and Parker's father's murder (22×20 → 23×01–02), Bishop's return
  as a wanted cyber-terrorist (23×09–10), and the "NCIS: Elite" unit introduced in S23.

## Guessed / lower confidence — worth a second pass

- **Showrunner boundaries.** Bellisario 1–4 and Glasberg's death in Sept 2016 are solid. The rest are
  judgement calls between two commonly-cited breakdowns:
  - I used **Brennan 5–6, Glasberg 7–14**, following Wikipedia's "in fall 2009 Gary Glasberg … became the new
    day-to-day runner" (fall 2009 = the S7 premiere). Many listings instead credit **Brennan 5–8, Glasberg 9–14**,
    which is what the brief suggested. Either is defensible; swap the two bars in `eras.js` if you prefer.
  - Cardea & Schenck were announced 2016-11-04 (i.e. mid-S14) and I drew them **15–17**, with **Binder 18–23**.
    I could confirm Binder was showrunner by S18 but not the exact season Cardea & Schenck stepped down —
    15–19 (as briefed) is also plausible. David J. North is an EP/writer; I could not confirm a co-showrunner
    credit, so he is not on the chart.
- **Knight's debut.** Labelled "from S18" deliberately. TVmaze's guest cast puts Katrina Law's first
  appearance at 18×15; I half-remember 18×11 "Gut Punch" (the REACT-team episode) and couldn't settle it, so
  the label avoids an episode number. `newface` is tagged on 18×15.
- **Parker's debut episode.** Gary Cole has no guest-cast entries at all (credited as a regular from his first
  episode), so I can't pin it from the data. He is not in 19×01's cast list and is in 19×03's summary; I tagged
  `newface` on 19×02 and labelled the bar "from S19".
- **Sergei Mishnev** placed in S12 only, and **Diane's death** at 12×11 "Check" (the summary's "two of Gibbs'
  ex-wives show up" plus Melinda McGraw's last living appearance being S12 both point there, but I did not
  verify the exact episode). 12×15 "Cabin Fever" explicitly references Fornell's wife's murder, which is
  consistent.
- **The S18 opioid-ring head** and the **S19 serial-killer conspiracy** are labelled generically because I
  don't reliably remember the antagonists' names.
- **Christmas tags** come from mid-December air dates plus holiday content in the summary. S19 and S21 get
  none (S21 aired Feb–May). 20×08 "Turkey Trot" is tagged `xmas` as the season's holiday episode even though
  it's Thanksgiving — the tag label reads "Christmas & holiday".
- Things from the brief I **dropped** rather than guess: "Gibbs' rules" as a chart row (I can't place enough of
  them by episode honestly), Jacob Scott, and Kai. Rachel Cranston appears in `cast.json` (S8–S11) but didn't
  earn a bar.
- Character spotlight tags for the later seasons (roughly 21–23) are thinner and lean on the summaries; the
  memorable earlier seasons got the detailed treatment, and everything else carries `motw`.

## Engine notes

- Nothing unusual: standard `s`/`e` integers, contiguous seasons 1–23, no specials, no stitching.
- 23 columns is the widest season-axis show in the repo so far — worth an eyeball on the horizontal scroll.
- Longest chart row is `roster` (10 rows); `arcs` has 4 rows and `villains` 3.
