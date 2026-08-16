# Buffy the Vampire Slayer — package notes

## Shape
- TVmaze show id **427**. 7 seasons, **144 episodes**, season axis. No specials, no gaps, no
  unnumbered episodes — TVmaze's `s`/`e` numbering is used verbatim and is already 1..7 / 1..22
  (S1 is 12 episodes; every other season is 22).
- Every episode has a summary, an image and a TVmaze rating — no nulls anywhere in `episodes.json`.
- `cast.json` has an entry for all 144 episodes: **787 distinct guest characters, 1,445 credits**.

## Confident
- Episode data, air dates, ratings, guest cast: straight from TVmaze, unedited.
- Chart facts: showrunners and network split (WB 1–5, UPN 6–7), Big Bads per season, Scooby
  roster arrival/departure seasons, romances, home bases, arc structure. The mid-season handoffs
  in labels (Spike from 2×03, Riley from 4×07, Oz leaves 4×06 and returns 4×19, Tara from 4×10,
  Cordelia and Angel leaving after 3×22, Giles leaving in 6×08, Joyce dying in 5×16, Tara killed
  in 6×19, Faith returning from 7×17) are all right.
- Tags: 24 tag definitions, all 144 episodes tagged, every tag used at least once. Format
  experiments, the musical, two-parters and the character spotlights are hand-checked.

## Judgement calls / things a Buffy person might argue with
- **Showrunner row.** Whedon 1–5, Noxon 6, "Whedon & Noxon" 7. Noxon was effectively running
  the room from S6 and Whedon was more hands-on again in S7 while Noxon stayed on; the split is
  a reasonable simplification of a genuinely fuzzy credit. `SEASON_META.showrunner` matches.
- **Giles' roster row** is split four ways (librarian 1–3 / unemployed 4 / Magic Box 5 /
  recurring 6–7). Anthony Head moved to recurring-credit status for S6–7; the bar says so.
- **Spike's row** is split into four bars because S3 is a single episode (3×08 "Lovers Walk") —
  drawn at season granularity with the episode named, per the contract.
- **Anya** gets two bars: "Anyanka" for her S3 one-off (3×09 "The Wish") and the regular run 4–7.
- **`arc` vs `motw`.** Buffy blurs these more than Supernatural does, so `arc` is generous
  (77 episodes) and `motw` is reserved for genuinely standalone hours (30). Episodes that are
  both got `arc` plus a character tag rather than both labels.
- **Two-parters** (8 pairs, 16 episodes): 1×01–02, 2×09–10, 2×13–14, 2×21–22, 3×21–22,
  4×15–16, 6×01–02, 6×21–22. 6×21/6×22 ("Two to Go"/"Grave") is a judgement call — it's a
  continuous Dark Willow finale rather than a formally titled Part I/II.
- **`milestone`** is used for 4×10 "Hush", 4×22 "Restless", 5×16 "The Body", 5×22 "The Gift"
  (the 100th episode), 6×07 "Once More, with Feeling" and 7×22 "Chosen" — landmark hours, not a
  strict numeric count.
- **`angelverse`** covers real crossovers and LA trips: 3×01 "Anne", 4×08 "Pangs", 4×20 "The
  Yoko Factor", 5×17 "Forever", 7×21 "End of Days", 7×22 "Chosen". The Faith crossover pair
  4×15–16 is tagged `faith`/`twopart` rather than `angelverse` since the LA half airs on *Angel*.
- **`Amy Madison` recurring bar** starts at S1 (1×03 "Witch") and ends at S3 (ratted in 3×11),
  resuming 6–7. **Jonathan** is drawn 2–7; he may also be an uncredited extra in S1.
- Cordelia is a TVmaze main-cast member, so she is largely absent from the guest dropdown even
  for her S1–3 run — the chart roster row covers her.

## For the engine
- Nothing unusual: 7 seasons, contiguous integers, season axis, no `CHART_AXIS` override.
- **TVmaze's main-cast list is only 12 people** (Buffy, Willow, Xander, Giles, Spike, Anya, Dawn,
  Angel, Cordelia, Tara, Oz, Riley). Per-episode credits are narrower than that, so several of
  them *do* show up in `cast.json` for the seasons before/after they were regulars — Giles (21
  eps), Faith, Anya, Spike, Angel, Oz, Riley, Tara all appear in the guest dropdown. That's a
  feature, but it means the dropdown is not strictly "non-regulars only"; `regularsNote` in
  `show.json` is worded to match.
- Chart is 7 categories / 52 rows / 162 bars: showrunners 1/3, roster 13/25, villains 6/32,
  arcs 8/31, romances 7/25, recurring 9/25, locations 8/21. `roster` is the tallest category at
  13 rows. Labels run longer than Supernatural's on average, and several S1-only bars are a
  single column wide, so they will be tight.
- Accent `#d7263d` on `#fff`, hero gradient `#241016`, hero font **Cinzel Decorative**
  (`Cinzel+Decorative:wght@700;900`), emoji 🧛.
