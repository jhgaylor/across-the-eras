// LOST (ABC, 2004–2010) — chart data on an EPISODE axis: columns are the 121 episodes in air order.
// Season blocks:  S1 = 1–25 | S2 = 26–49 | S3 = 50–72 | S4 = 73–86 | S5 = 87–103 | S6 = 104–121
// Absolute index helpers: S1eN = N | S2eN = 25+N | S3eN = 49+N | S4eN = 72+N | S5eN = 86+N | S6eN = 103+N
// Two-hour episodes are split the way TVmaze splits them (Exodus 1–3, Live Together Die Alone 1–2,
// Through the Looking Glass 1–2, There's No Place Like Home 1–3, The Incident 1–2, LA X 1–2, The End 1–2).
// Each entry: [label, startEp, endEp, bg, fg?]
window.CHART_AXIS = "episode";

const SAND="#d9c9a3", ORANGE="#f28c28", DORANGE="#b3651a", RUST="#a8442a",
      JUNGLE="#2f6f4e", DJUNGLE="#1d4d36", LGREEN="#8fbf9f", OLIVE="#6b7c32",
      OCEAN="#1c5d99", LOCEAN="#7fb3d5", NAVY="#12395e", TEAL="#2c7a7b", LTEAL="#7fd1cd",
      PURPLE="#5b53a8", LPURPLE="#b8b0e8", MAGENTA="#b83280", PINK="#ed8fb8",
      RED="#9b2c2c", DRED="#6b1f1f", GOLD="#c98a1e", AMBER="#e0b33a",
      SLATE="#4a5568", GRAY="#718096", LGRAY="#cbd5e0", INK="#171923",
      BROWN="#7b5230", TAN="#c8a878", WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["seasons","Seasons, eras & timeline"],
  ["structure","How the story is told"],
  ["survivors","The Flight 815 survivors"],
  ["newcomers","Others, Tailies & later arrivals"],
  ["factions","Factions & antagonists"],
  ["places","Places on the Island (and off it)"],
  ["arcs","Mysteries & arcs"],
];

window.ERAS = {

  // ───────────────────────────── SEASONS ─────────────────────────────
  seasons: [
    [["S1 — The crash, the caves & the hatch", 1, 25, DORANGE, WHITE],
     ["S2 — The Swan, the Tailies & the button", 26, 49, JUNGLE, WHITE],
     ["S3 — The Others, the Barracks & the flash-forward", 50, 72, NAVY, WHITE],
     ["S4 — The freighter & the Oceanic Six", 73, 86, RUST, WHITE],
     ["S5 — Time skips & DHARMA 1977", 87, 103, ORANGE, BLACK],
     ["S6 — The Temple, the candidates & the flash-sideways", 104, 121, PURPLE, WHITE]],

    [["Island: 22 Sept – Nov 2004 (days 1–44)", 1, 25, SAND, BLACK],
     ["Island: Nov–Dec 2004 (days 44–67)", 26, 49, SAND, BLACK],
     ["Island: Dec 2004 (days 68–91)", 50, 72, SAND, BLACK],
     ["Island: Dec 2004 (days 91–100) + 2007 off-island", 73, 86, TAN, BLACK],
     ["1954 · 1974 · 1977 on-island, 2007 off-island", 87, 103, GOLD, BLACK],
     ["Island: 2007 — plus the flash-sideways", 104, 121, LPURPLE, BLACK]],

    [["Aired Sept 2004 – May 2005", 1, 25, GRAY, WHITE],
     ["Sept 2005 – May 2006", 26, 49, GRAY, WHITE],
     ["Oct 2006 – May 2007 (6-episode fall pod, then Feb–May)", 50, 72, GRAY, WHITE],
     ["Jan – May 2008 (writers' strike: 14 episodes)", 73, 86, SLATE, WHITE],
     ["Jan – May 2009", 87, 103, GRAY, WHITE],
     ["Feb – May 2010", 104, 121, GRAY, WHITE]],

    [["J.J. Abrams, Damon Lindelof & Carlton Cuse", 1, 25, INK, WHITE],
     ["Damon Lindelof & Carlton Cuse — showrunners", 26, 121, INK, WHITE]],

    [["Written open-ended — nobody knew where it stopped", 1, 72, BROWN, WHITE],
     ["End date set: 3 more seasons, 48 episodes (announced May 2007)", 73, 121, AMBER, BLACK]],
  ],

  // ───────────────────────────── STRUCTURE ─────────────────────────────
  structure: [
    [["The flashback era — every hour has a past", 1, 70, JUNGLE, WHITE],
     ["The flash-forward era — \"We have to go back!\"", 71, 86, RUST, WHITE],
     ["The time-travel era — 1954, 1974, 1977", 87, 103, GOLD, BLACK],
     ["The flash-sideways era — LA X", 104, 121, PURPLE, WHITE]],

    // Narrative device, exact, per episode
    [
    ["Flashback", 1, 56, "#38754f", "#fff"],
    ["Time travel", 57, 57, "#2c7a7b", "#fff"],
    ["Flashback", 58, 70, "#38754f", "#fff"],
    ["Flash-forward", 71, 73, "#a8442a", "#fff"],
    ["Flashback", 74, 74, "#38754f", "#fff"],
    ["Flash-forward", 75, 76, "#a8442a", "#fff"],
    ["Time travel", 77, 77, "#2c7a7b", "#fff"],
    ["Flashback", 78, 78, "#38754f", "#fff"],
    ["Both", 79, 79, "#7b4b8a", "#fff"],
    ["Flashback", 80, 80, "#38754f", "#fff"],
    ["Flash-forward", 81, 82, "#a8442a", "#fff"],
    ["Flashback", 83, 83, "#38754f", "#fff"],
    ["Flash-forward", 84, 86, "#a8442a", "#fff"],
    ["Time skips", 87, 87, "#c98a1e", "#000"],
    ["Flashback", 88, 88, "#38754f", "#fff"],
    ["Time skips", 89, 89, "#c98a1e", "#000"],
    ["Flashback", 90, 90, "#38754f", "#fff"],
    ["Time skips", 91, 91, "#c98a1e", "#000"],
    ["Flashback", 92, 94, "#38754f", "#fff"],
    ["No flashes", 95, 95, "#5a6472", "#fff"],
    ["Flashback", 96, 100, "#38754f", "#fff"],
    ["No flashes", 101, 101, "#5a6472", "#fff"],
    ["Flashback", 102, 103, "#38754f", "#fff"],
    ["Flash-sideways", 104, 111, "#5b53a8", "#fff"],
    ["Flashback", 112, 112, "#38754f", "#fff"],
    ["Flash-sideways", 113, 117, "#5b53a8", "#fff"],
    ["Flashback", 118, 118, "#38754f", "#fff"],
    ["Flash-sideways", 119, 121, "#5b53a8", "#fff"]
    ],

    // Centric character — one bar per episode (Lost's "X-centric" hours)
    [
    ["Jack", 1, 1, "#2b6cb0", "#fff"],
    ["Charlie", 2, 2, "#5a67d8", "#fff"],
    ["Kate", 3, 3, "#c05621", "#fff"],
    ["Locke", 4, 4, "#276749", "#fff"],
    ["Jack", 5, 5, "#2b6cb0", "#fff"],
    ["Sun", 6, 6, "#b83280", "#fff"],
    ["Charlie", 7, 7, "#5a67d8", "#fff"],
    ["Sawyer", 8, 8, "#8b5e34", "#fff"],
    ["Sayid", 9, 9, "#7b2d26", "#fff"],
    ["Claire", 10, 10, "#90cdf4", "#000"],
    ["Jack", 11, 11, "#2b6cb0", "#fff"],
    ["Kate", 12, 12, "#c05621", "#fff"],
    ["Boone", 13, 13, "#fbb6ce", "#000"],
    ["Michael & Walt", 14, 14, "#9ae6b4", "#000"],
    ["Charlie", 15, 15, "#5a67d8", "#fff"],
    ["Sawyer", 16, 16, "#8b5e34", "#fff"],
    ["Jin", 17, 17, "#97266d", "#fff"],
    ["Hurley", 18, 18, "#ecc94b", "#000"],
    ["Locke", 19, 19, "#276749", "#fff"],
    ["Jack", 20, 20, "#2b6cb0", "#fff"],
    ["Sayid", 21, 21, "#7b2d26", "#fff"],
    ["Kate", 22, 22, "#c05621", "#fff"],
    ["Everyone", 23, 23, "#718096", "#fff"],
    ["Everyone", 24, 24, "#718096", "#fff"],
    ["Everyone", 25, 25, "#718096", "#fff"],
    ["Jack", 26, 26, "#2b6cb0", "#fff"],
    ["Michael", 27, 27, "#2f855a", "#fff"],
    ["Locke", 28, 28, "#276749", "#fff"],
    ["Hurley", 29, 29, "#ecc94b", "#000"],
    ["Sun & Jin", 30, 30, "#d53f8c", "#fff"],
    ["Shannon", 31, 31, "#ed64a6", "#000"],
    ["Tailies", 32, 32, "#6b7c32", "#fff"],
    ["Ana Lucia", 33, 33, "#9b2c2c", "#fff"],
    ["Kate", 34, 34, "#c05621", "#fff"],
    ["Mr. Eko", 35, 35, "#1a202c", "#fff"],
    ["Jack", 36, 36, "#2b6cb0", "#fff"],
    ["Charlie", 37, 37, "#5a67d8", "#fff"],
    ["Sawyer", 38, 38, "#8b5e34", "#fff"],
    ["Sayid", 39, 39, "#7b2d26", "#fff"],
    ["Claire", 40, 40, "#90cdf4", "#000"],
    ["Sun", 41, 41, "#b83280", "#fff"],
    ["Locke", 42, 42, "#276749", "#fff"],
    ["Hurley", 43, 43, "#ecc94b", "#000"],
    ["Rose & Bern.", 44, 44, "#6b46c1", "#fff"],
    ["Ana Lucia", 45, 45, "#9b2c2c", "#fff"],
    ["Mr. Eko", 46, 46, "#1a202c", "#fff"],
    ["Michael", 47, 47, "#2f855a", "#fff"],
    ["Desmond", 48, 48, "#319795", "#fff"],
    ["Desmond", 49, 49, "#319795", "#fff"],
    ["Jack", 50, 50, "#2b6cb0", "#fff"],
    ["Sun & Jin", 51, 51, "#d53f8c", "#fff"],
    ["Locke", 52, 52, "#276749", "#fff"],
    ["Sawyer", 53, 53, "#8b5e34", "#fff"],
    ["Mr. Eko", 54, 54, "#1a202c", "#fff"],
    ["Kate", 55, 55, "#c05621", "#fff"],
    ["Juliet", 56, 56, "#d6bcfa", "#000"],
    ["Desmond", 57, 57, "#319795", "#fff"],
    ["Jack", 58, 58, "#2b6cb0", "#fff"],
    ["Hurley", 59, 59, "#ecc94b", "#000"],
    ["Sayid", 60, 60, "#7b2d26", "#fff"],
    ["Claire", 61, 61, "#90cdf4", "#000"],
    ["Locke", 62, 62, "#276749", "#fff"],
    ["Nikki & Paulo", 63, 63, "#a0aec0", "#000"],
    ["Kate", 64, 64, "#c05621", "#fff"],
    ["Juliet", 65, 65, "#d6bcfa", "#000"],
    ["Desmond", 66, 66, "#319795", "#fff"],
    ["Sun", 67, 67, "#b83280", "#fff"],
    ["Locke", 68, 68, "#276749", "#fff"],
    ["Ben", 69, 69, "#4a5568", "#fff"],
    ["Charlie", 70, 70, "#5a67d8", "#fff"],
    ["Jack", 71, 71, "#2b6cb0", "#fff"],
    ["Jack", 72, 72, "#2b6cb0", "#fff"],
    ["Hurley", 73, 73, "#ecc94b", "#000"],
    ["Freighter 4", 74, 74, "#2c7a7b", "#fff"],
    ["Sayid", 75, 75, "#7b2d26", "#fff"],
    ["Kate", 76, 76, "#c05621", "#fff"],
    ["Desmond", 77, 77, "#319795", "#fff"],
    ["Juliet", 78, 78, "#d6bcfa", "#000"],
    ["Sun & Jin", 79, 79, "#d53f8c", "#fff"],
    ["Michael", 80, 80, "#2f855a", "#fff"],
    ["Ben", 81, 81, "#4a5568", "#fff"],
    ["Jack", 82, 82, "#2b6cb0", "#fff"],
    ["Locke", 83, 83, "#276749", "#fff"],
    ["Oceanic 6", 84, 84, "#b7791f", "#fff"],
    ["Oceanic 6", 85, 85, "#b7791f", "#fff"],
    ["Oceanic 6", 86, 86, "#b7791f", "#fff"],
    ["Everyone", 87, 87, "#718096", "#fff"],
    ["Hurley", 88, 88, "#ecc94b", "#000"],
    ["Desmond", 89, 89, "#319795", "#fff"],
    ["Kate", 90, 90, "#c05621", "#fff"],
    ["Jin", 91, 91, "#97266d", "#fff"],
    ["Jack", 92, 92, "#2b6cb0", "#fff"],
    ["Locke", 93, 93, "#276749", "#fff"],
    ["Sawyer", 94, 94, "#8b5e34", "#fff"],
    ["Everyone", 95, 95, "#718096", "#fff"],
    ["Sayid", 96, 96, "#7b2d26", "#fff"],
    ["Kate", 97, 97, "#c05621", "#fff"],
    ["Ben", 98, 98, "#4a5568", "#fff"],
    ["Miles", 99, 99, "#68d391", "#000"],
    ["Daniel", 100, 100, "#b794f4", "#000"],
    ["Everyone", 101, 101, "#718096", "#fff"],
    ["Jacob & MIB", 102, 102, "#e2e8f0", "#000"],
    ["Jacob & MIB", 103, 103, "#e2e8f0", "#000"],
    ["Everyone", 104, 104, "#718096", "#fff"],
    ["Everyone", 105, 105, "#718096", "#fff"],
    ["Kate", 106, 106, "#c05621", "#fff"],
    ["Locke", 107, 107, "#276749", "#fff"],
    ["Jack", 108, 108, "#2b6cb0", "#fff"],
    ["Sayid", 109, 109, "#7b2d26", "#fff"],
    ["Ben", 110, 110, "#4a5568", "#fff"],
    ["Sawyer", 111, 111, "#8b5e34", "#fff"],
    ["Richard", 112, 112, "#744210", "#fff"],
    ["Sun & Jin", 113, 113, "#d53f8c", "#fff"],
    ["Desmond", 114, 114, "#319795", "#fff"],
    ["Hurley", 115, 115, "#ecc94b", "#000"],
    ["Everyone", 116, 116, "#718096", "#fff"],
    ["Jack & Locke", 117, 117, "#1c4f7c", "#fff"],
    ["Jacob & MIB", 118, 118, "#e2e8f0", "#000"],
    ["Everyone", 119, 119, "#718096", "#fff"],
    ["Everyone", 120, 120, "#718096", "#fff"],
    ["Everyone", 121, 121, "#718096", "#fff"]
    ],

    // Who the centric hour belongs to
    [
    ["815 survivor", 1, 22, "#3b6ea8", "#fff"],
    ["Ensemble", 23, 25, "#718096", "#fff"],
    ["815 survivor", 26, 31, "#3b6ea8", "#fff"],
    ["Tail section", 32, 33, "#8a6d3b", "#fff"],
    ["815 survivor", 34, 34, "#3b6ea8", "#fff"],
    ["Tail section", 35, 35, "#8a6d3b", "#fff"],
    ["815 survivor", 36, 44, "#3b6ea8", "#fff"],
    ["Tail section", 45, 46, "#8a6d3b", "#fff"],
    ["815 survivor", 47, 47, "#3b6ea8", "#fff"],
    ["Later arrival", 48, 49, "#2c7a7b", "#fff"],
    ["815 survivor", 50, 53, "#3b6ea8", "#fff"],
    ["Tail section", 54, 54, "#8a6d3b", "#fff"],
    ["815 survivor", 55, 55, "#3b6ea8", "#fff"],
    ["The Others", 56, 56, "#4a5568", "#fff"],
    ["Later arrival", 57, 57, "#2c7a7b", "#fff"],
    ["815 survivor", 58, 64, "#3b6ea8", "#fff"],
    ["The Others", 65, 65, "#4a5568", "#fff"],
    ["Later arrival", 66, 66, "#2c7a7b", "#fff"],
    ["815 survivor", 67, 68, "#3b6ea8", "#fff"],
    ["The Others", 69, 69, "#4a5568", "#fff"],
    ["815 survivor", 70, 73, "#3b6ea8", "#fff"],
    ["Later arrival", 74, 74, "#2c7a7b", "#fff"],
    ["815 survivor", 75, 76, "#3b6ea8", "#fff"],
    ["Later arrival", 77, 77, "#2c7a7b", "#fff"],
    ["The Others", 78, 78, "#4a5568", "#fff"],
    ["815 survivor", 79, 80, "#3b6ea8", "#fff"],
    ["The Others", 81, 81, "#4a5568", "#fff"],
    ["815 survivor", 82, 83, "#3b6ea8", "#fff"],
    ["Ensemble", 84, 87, "#718096", "#fff"],
    ["815 survivor", 88, 88, "#3b6ea8", "#fff"],
    ["Later arrival", 89, 89, "#2c7a7b", "#fff"],
    ["815 survivor", 90, 94, "#3b6ea8", "#fff"],
    ["Ensemble", 95, 95, "#718096", "#fff"],
    ["815 survivor", 96, 97, "#3b6ea8", "#fff"],
    ["The Others", 98, 98, "#4a5568", "#fff"],
    ["Later arrival", 99, 100, "#2c7a7b", "#fff"],
    ["Ensemble", 101, 101, "#718096", "#fff"],
    ["Mythology", 102, 103, "#cbd5e0", "#000"],
    ["Ensemble", 104, 105, "#718096", "#fff"],
    ["815 survivor", 106, 109, "#3b6ea8", "#fff"],
    ["The Others", 110, 110, "#4a5568", "#fff"],
    ["815 survivor", 111, 111, "#3b6ea8", "#fff"],
    ["The Others", 112, 112, "#4a5568", "#fff"],
    ["815 survivor", 113, 113, "#3b6ea8", "#fff"],
    ["Later arrival", 114, 114, "#2c7a7b", "#fff"],
    ["815 survivor", 115, 115, "#3b6ea8", "#fff"],
    ["Ensemble", 116, 116, "#718096", "#fff"],
    ["815 survivor", 117, 117, "#3b6ea8", "#fff"],
    ["Mythology", 118, 118, "#cbd5e0", "#000"],
    ["Ensemble", 119, 121, "#718096", "#fff"]
    ],
  ],

  // ───────────────────────────── SURVIVORS ─────────────────────────────
  survivors: [
    [["Jack Shephard — man of science", 1, 86, OCEAN, WHITE],
     ["Jack off-island: \"We have to go back!\"", 87, 92, LOCEAN, BLACK],
     ["Jack — man of faith, then protector (dies 6×18)", 93, 121, NAVY, WHITE]],

    [["Kate Austen — the fugitive", 1, 86, DORANGE, WHITE],
     ["Kate off-island, raising Aaron", 87, 92, SAND, BLACK],
     ["Kate back on the Island (leaves 6×18)", 93, 121, DORANGE, WHITE]],

    [["John Locke — the man of faith who could walk", 1, 86, JUNGLE, WHITE],
     ["Locke off-island as \"Jeremy Bentham\" — murdered by Ben (5×07)", 87, 93, LGREEN, BLACK],
     ["Locke's body comes back on Flight 316", 94, 102, DJUNGLE, WHITE],
     ["The Man in Black wearing Locke's face (from 5×17)", 103, 121, INK, WHITE]],

    [["James \"Sawyer\" Ford — the con man", 1, 86, BROWN, WHITE],
     ["Sawyer left behind, time-skipping", 87, 93, TAN, BLACK],
     ["\"Jim LaFleur\" — DHARMA head of security, 1974–77", 94, 103, ORANGE, BLACK],
     ["Sawyer in 2007 (leaves 6×18)", 104, 121, BROWN, WHITE]],

    [["Hugo \"Hurley\" Reyes — cursed by the Numbers", 1, 72, AMBER, BLACK],
     ["Hurley — Oceanic Six, then Santa Rosa", 73, 92, SAND, BLACK],
     ["Hurley back on the Island", 93, 120, AMBER, BLACK],
     ["Hurley — the new protector (6×18)", 121, 121, GOLD, BLACK]],

    [["Sayid Jarrah — the Republican Guard torturer", 1, 72, RED, WHITE],
     ["Sayid — Oceanic Six, Ben's assassin", 73, 92, PINK, BLACK],
     ["Sayid back, drowned & \"claimed\" — dies 6×14", 93, 117, DRED, WHITE]],

    [["Sun-Hwa Kwon", 1, 72, MAGENTA, WHITE],
     ["Sun — Oceanic Six, widow, running Paik Industries", 73, 92, PINK, BLACK],
     ["Sun back on the Island — dies 6×14", 93, 117, MAGENTA, WHITE]],

    [["Jin-Soo Kwon", 1, 86, "#97266d", WHITE],
     ["Jin time-skipping, presumed dead by the Oceanic Six", 87, 93, PINK, BLACK],
     ["Jin in DHARMA, 1974–77", 94, 103, ORANGE, BLACK],
     ["Jin & Sun reunited (6×13) — die together 6×14", 104, 117, "#97266d", WHITE]],

    [["Charlie Pace — the rock god junkie", 1, 71, PURPLE, WHITE],
     ["Charlie drowns in the Looking Glass — \"Not Penny's Boat\" (3×23)", 72, 72, NAVY, WHITE],
     ["Charlie's ghost visits Hurley", 73, 86, LPURPLE, BLACK],
     ["Charlie in the flash-sideways", 104, 121, LPURPLE, BLACK]],

    [["Claire Littleton & Aaron", 1, 83, LOCEAN, BLACK],
     ["Claire gone — walked off with Christian (4×11)", 84, 105, GRAY, WHITE],
     ["Claire in the jungle — the Monster's ally (from 6×03)", 106, 121, OLIVE, WHITE]],

    [["Michael Dawson — looking for his son", 1, 49, JUNGLE, WHITE],
     ["Michael as \"Kevin Johnson\" on the freighter — dies 4×14", 74, 86, DRED, WHITE],
     ["Michael's ghost, stuck on the Island as a whisper (6×12)", 115, 121, GRAY, WHITE]],

    [["Walt Lloyd — \"special\"", 1, 49, LGREEN, BLACK],
     ["Walt appears to Locke in the mass grave (3×22)", 71, 71, INK, WHITE],
     ["Walt visits Hurley at Santa Rosa (4×13)", 85, 85, LGREEN, BLACK],
     ["Walt in New York — Locke's last visit (5×07)", 93, 93, LGREEN, BLACK]],

    [["Boone Carlyle — the first to die, 1×20", 1, 20, PINK, BLACK],
     ["Boone in Locke's sweat-lodge vision (3×03)", 52, 52, LGRAY, BLACK],
     ["Boone in the Exposé flashbacks (3×14)", 63, 63, LGRAY, BLACK],
     ["Boone in the flash-sideways (6×01)", 104, 104, LPURPLE, BLACK]],

    [["Shannon Rutherford — shot by Ana Lucia, 2×06", 1, 31, MAGENTA, WHITE],
     ["Shannon in the Exposé flashbacks (3×14)", 63, 63, LGRAY, BLACK],
     ["Shannon back in the flash-sideways (6×17–18)", 120, 121, LPURPLE, BLACK]],

    [["Rose Nadler — waiting for a husband everyone says is dead", 1, 32, RUST, WHITE],
     ["Rose & Bernard reunited (2×08)", 33, 103, TAN, BLACK],
     ["Rose & Bernard in 2007, and in the flash-sideways", 104, 121, LGREEN, BLACK]],

    [["Vincent — the first face Jack sees, and the last", 1, 121, GOLD, BLACK]],

    [["Dr. Christian Shephard — a body in a coffin that keeps walking around", 1, 121, LGRAY, BLACK]],
  ],

  // ───────────────────────────── NEWCOMERS ─────────────────────────────
  newcomers: [
    [["Desmond Hume in the hatch (2×01–2×03)", 26, 28, TEAL, WHITE],
     ["Desmond returns (2×23) — the failsafe, the flashes, the constant", 48, 121, TEAL, WHITE]],

    [["\"Henry Gale\" — the man in the armory (2×14)", 39, 49, SLATE, WHITE],
     ["Benjamin Linus — leader of the Others", 50, 86, INK, WHITE],
     ["Ben off-island, hunting Widmore", 87, 92, GRAY, WHITE],
     ["Ben judged by the Monster, then Locke's man", 93, 121, SLATE, WHITE]],

    [["Juliet Burke — the Others' fertility doctor (3×01)", 50, 86, LPURPLE, BLACK],
     ["Juliet left behind, time-skipping", 87, 93, LTEAL, BLACK],
     ["Juliet in DHARMA, 1974–77 — happy, with Sawyer", 94, 103, ORANGE, BLACK],
     ["Juliet detonates Jughead and dies (6×01)", 104, 104, DRED, WHITE],
     ["Juliet in the flash-sideways (6×17–18)", 120, 121, LPURPLE, BLACK]],

    [["Richard Alpert — ageless advisor to the Others (3×07)", 56, 111, BROWN, WHITE],
     ["Richard's whole story: 1867, the Black Rock (6×09)", 112, 121, DORANGE, WHITE]],

    [["Danielle Rousseau — 16 years alone (1×09), shot 4×08", 9, 80, OLIVE, WHITE],
     ["Ilana Verdansky — Jacob's soldier (5×06), dies 6×12", 92, 115, RED, WHITE]],

    [["Mr. Eko — smuggler, warlord, priest (2×02)", 27, 53, INK, WHITE],
     ["Eko killed by the Monster (3×05)", 54, 54, DRED, WHITE],
     ["Naomi Dorrit — the parachutist (3×17), dies 4×02", 66, 74, LOCEAN, BLACK]],

    [["Ana Lucia at the airport bar with Jack (1×23)", 23, 23, RED, WHITE],
     ["Ana Lucia Cortez — the tail-section cop (2×02), shot 2×20", 27, 45, RED, WHITE],
     ["Nikki & Paulo — buried alive (3×14)", 50, 63, GRAY, WHITE],
     ["Charlotte Lewis — the freighter's anthropologist, dies 5×05", 74, 91, "#f6ad55", BLACK],
     ["Ana Lucia in the flash-sideways (6×16)", 119, 121, LPURPLE, BLACK]],

    [["Libby — dies 2×20, and nobody ever explains Santa Rosa", 29, 45, SAND, BLACK],
     ["Karl — Alex's boyfriend (3×01), shot 4×08", 50, 80, LGREEN, BLACK]],

    [["Alex Rousseau — raised by Ben, executed by Keamy (4×09)", 40, 81, PINK, BLACK],
     ["Dogen & the Temple Others (6×01–6×06)", 104, 109, DJUNGLE, WHITE]],

    [["Miles Straume — the man who talks to the dead (4×02)", 74, 121, LGREEN, BLACK]],

    [["Daniel Faraday — the physicist (4×01)", 73, 93, "#b794f4", BLACK],
     ["Daniel back from Ann Arbor, 1977 — shot by his mother (5×14)", 94, 100, "#b794f4", BLACK]],

    [["Eloise Hawking — the jeweller who knows the rules (3×08)", 57, 57, LGRAY, BLACK],
     ["Eloise & the Lamp Post — sending them back (5×05–5×06)", 91, 92, LGRAY, BLACK],
     ["Eloise kills her own son (5×14)", 100, 100, DRED, WHITE],
     ["Eloise in the flash-sideways — she knows (6×11)", 114, 121, LPURPLE, BLACK]],

    [["Frank Lapidus — the pilot who should have flown 815 (4×02)", 74, 121, LTEAL, BLACK]],

    [["Penny Widmore — \"I'll come back for you\" (2×23)", 48, 121, PINK, BLACK]],
  ],

  // ───────────────────────────── FACTIONS ─────────────────────────────
  factions: [
    [["The Others — a rumor in the jungle", 9, 25, DJUNGLE, WHITE],
     ["The Others take Walt; Mr. Friendly's fake beach camp", 26, 49, DJUNGLE, WHITE],
     ["The Others at the Barracks — Ben's people", 50, 72, INK, WHITE],
     ["The Others flee the freighter, into the jungle", 73, 86, DJUNGLE, WHITE],
     ["Richard's camp in 1954/1977 · Ben's people in 2007", 87, 103, OLIVE, WHITE],
     ["The Temple Others → Widmore → the war for the Island", 104, 121, INK, WHITE]],

    [["Charles Widmore — a name in Desmond's past", 48, 72, NAVY, WHITE],
     ["Widmore's freighter, the Kahana", 73, 86, NAVY, WHITE],
     ["Widmore backs Locke, hunts Ben (off-island)", 87, 103, LOCEAN, BLACK],
     ["Widmore back on the Island — shot by Ben (6×16)", 104, 119, NAVY, WHITE]],

    [["Tom \"Mr. Friendly\" — the beard, the boat, the Others' face (1×24), killed 3×22", 24, 71, DJUNGLE, WHITE]],

    [["Jacob — a name whispered in the cabin (3×20)", 69, 101, LGRAY, BLACK],
     ["Jacob seen, then stabbed by Ben (5×16–17)", 102, 103, SAND, BLACK],
     ["Jacob's ghost, the candidates and a successor", 104, 121, LGRAY, BLACK]],

    [["The Monster — a sound and a column of black smoke", 1, 102, "#2d3748", WHITE],
     ["The Man in Black, revealed (5×17)", 103, 121, INK, WHITE]],

    [["The DHARMA Initiative — the orientation film (2×03)", 28, 49, ORANGE, BLACK],
     ["DHARMA's ruins: the Pearl, the Flame, the Hydra, the Purge", 50, 86, DORANGE, WHITE],
     ["Living inside DHARMA, 1974–1977", 94, 103, ORANGE, BLACK]],

    [["Ethan Rom — the man who wasn't on the plane (1×09), killed 1×15", 9, 15, DRED, WHITE],
     ["Mikhail Bakunin — the Flame's one-eyed Russian (3×05, 3×11)", 54, 71, RUST, WHITE],
     ["Martin Keamy & the Kahana strike team (4×05)", 77, 86, DRED, WHITE],
     ["Zoe & Widmore's team on Hydra Island (6×08)", 111, 119, SLATE, WHITE]],

    [["The tail-section survivors — Ana Lucia, Eko, Libby, Bernard, Cindy", 27, 49, OLIVE, WHITE],
     ["The Temple — Dogen, the spring, and the ash line", 104, 109, TEAL, WHITE]],
  ],

  // ───────────────────────────── PLACES ─────────────────────────────
  places: [
    [["The beach camp & the fuselage", 1, 86, SAND, BLACK],
     ["No beach camp — the time skips and 1977", 87, 103, GRAY, WHITE],
     ["Back at the beach camp, 2007", 104, 121, SAND, BLACK]],

    [["The caves — fresh water and the Adam & Eve skeletons (1×05)", 5, 49, BROWN, WHITE],
     ["The Barracks / \"Otherville\"", 50, 86, TAN, BLACK],
     ["The DHARMA Barracks, 1974–1977", 94, 103, ORANGE, BLACK],
     ["The abandoned Barracks, 2007", 104, 121, TAN, BLACK]],

    [["The hatch in the ground (1×11)", 11, 25, DJUNGLE, WHITE],
     ["The Swan — 108 minutes, 4 8 15 16 23 42, execute", 26, 48, JUNGLE, WHITE],
     ["The Swan implodes (2×24)", 49, 49, DRED, WHITE],
     ["The crater where the hatch was", 50, 103, GRAY, WHITE],
     ["The Swan built and the Incident buried — 1977", 104, 121, LGRAY, BLACK]],

    [["The raft — built, launched and burned (1×22–2×02)", 22, 27, BROWN, WHITE],
     ["Hydra Island — the cages, the Pearl and Room 23", 50, 60, LTEAL, BLACK],
     ["The freighter Kahana", 74, 86, NAVY, WHITE],
     ["Hydra Island again — Widmore's camp & the Ajira plane", 113, 121, LTEAL, BLACK]],

    [["The Black Rock — a slave ship in the middle of the jungle (1×23)", 23, 111, INK, WHITE],
     ["The Black Rock blown up (6×09)", 112, 121, DRED, WHITE]],

    [["The four-toed statue: a foot (2×23), then Taweret whole (5×16)", 48, 121, SAND, BLACK]],

    [["The Swan (2×01)", 26, 26, ORANGE, BLACK],
     ["The Arrow (2×02)", 27, 27, ORANGE, BLACK],
     ["The Staff (2×15)", 40, 40, ORANGE, BLACK],
     ["The Pearl (2×21)", 46, 46, ORANGE, BLACK],
     ["The Hydra (3×01)", 50, 50, ORANGE, BLACK],
     ["The Flame (3×11)", 60, 60, ORANGE, BLACK],
     ["The Looking Glass (3×21)", 70, 70, ORANGE, BLACK],
     ["The Tempest (4×06)", 78, 78, ORANGE, BLACK],
     ["The Orchid (4×11)", 83, 83, ORANGE, BLACK],
     ["The Lamp Post (5×06)", 92, 92, ORANGE, BLACK]],

    [["Jacob's cabin — the circle of ash", 61, 103, "#2d3748", WHITE],
     ["The Temple & the spring", 104, 109, TEAL, WHITE],
     ["The Lighthouse (6×05)", 110, 117, GOLD, BLACK],
     ["The Source — the heart of the Island (6×15)", 118, 121, AMBER, BLACK]],

    [["Off-Island: the flashback world — Sydney, LA, Seoul, Iraq, Nigeria", 1, 72, LGRAY, BLACK],
     ["Off-Island: the Oceanic Six's life, 2005–2007", 73, 92, PINK, BLACK],
     ["The flash-sideways Los Angeles", 104, 121, LPURPLE, BLACK]],
  ],

  // ───────────────────────────── ARCS ─────────────────────────────
  arcs: [
    [["The Numbers — 4 8 15 16 23 42 (1×18)", 18, 121, AMBER, BLACK]],

    [["What's inside the hatch? (1×11)", 11, 25, DJUNGLE, WHITE],
     ["Pushing the button — is it real, or a rat in a maze?", 26, 48, JUNGLE, WHITE],
     ["Desmond turns the failsafe key (2×24)", 49, 49, GOLD, BLACK],
     ["It was real — and it's why the plane crashed", 50, 121, LGREEN, BLACK]],

    [["Building the raft — a way off the Island", 22, 25, BROWN, WHITE],
     ["The Others took Walt — Michael's hunt", 26, 46, DJUNGLE, WHITE],
     ["Michael's betrayal; Michael & Walt sail away (2×24)", 47, 49, DRED, WHITE]],

    [["Rousseau's distress signal — 16 years and counting", 9, 25, OLIVE, WHITE],
     ["Rousseau's maps, her team, and Alex", 26, 80, OLIVE, WHITE]],

    [["Desmond & the failsafe (2×23–24)", 48, 49, TEAL, WHITE],
     ["Desmond's flashes of the future — and Charlie's death", 50, 72, LTEAL, BLACK],
     ["\"The Constant\" — consciousness unstuck in time (4×05)", 77, 86, TEAL, WHITE],
     ["Desmond & Penny found each other", 87, 121, LTEAL, BLACK]],

    [["The flash-forward reveal — \"We have to go back, Kate!\" (3×23)", 72, 72, RUST, WHITE],
     ["The Oceanic Six and the lie they agreed to tell", 73, 92, TAN, BLACK],
     ["Back to the Island on Ajira 316 (5×06)", 93, 121, RUST, WHITE]],

    [["Moving the Island — the frozen donkey wheel (4×14)", 86, 86, GOLD, BLACK],
     ["The time skips — nosebleeds, and needing a constant", 87, 93, GOLD, BLACK],
     ["Stranded in 1977 — DHARMA, Jughead and the Incident", 94, 103, ORANGE, BLACK]],

    [["\"Whatever happened, happened\" vs. changing it — the Jughead plan", 89, 103, DORANGE, WHITE],
     ["Time is a loop: Richard's compass, Locke's instructions", 104, 121, BROWN, WHITE]],

    [["The Others' lists — \"he's not on the list\"", 33, 103, SLATE, WHITE],
     ["The candidates — names on the cave wall and the Lighthouse dial", 104, 121, LGRAY, BLACK]],

    [["Why can't a baby survive on this Island? (3×07)", 56, 86, MAGENTA, WHITE],
     ["Aaron raised by Kate; Ji Yeon raised by nobody", 87, 121, PINK, BLACK]],

    [["The Incident — the Swan, Radzinsky and a hydrogen bomb (5×16–17)", 102, 103, RED, WHITE],
     ["The rules of the game: Jacob vs. the Man in Black", 104, 117, LGRAY, BLACK],
     ["\"Across the Sea\" — Mother, the light and the source (6×15)", 118, 118, AMBER, BLACK],
     ["The cork in the bottle, and who protects the Island", 119, 121, GOLD, BLACK]],

    [["The whispers in the trees", 1, 115, "#2d3748", WHITE],
     ["The whispers explained: the dead who can't move on (6×12)", 116, 121, GRAY, WHITE]],

    [["What is the flash-sideways? (answered 6×18)", 104, 121, PURPLE, WHITE]],
  ],
};

window.SEASON_META = {
  1:{years:"2004–05", showrunner:"J.J. Abrams, Damon Lindelof & Carlton Cuse"},
  2:{years:"2005–06", showrunner:"Damon Lindelof & Carlton Cuse"},
  3:{years:"2006–07", showrunner:"Damon Lindelof & Carlton Cuse"},
  4:{years:"2008",    showrunner:"Damon Lindelof & Carlton Cuse"},
  5:{years:"2009",    showrunner:"Damon Lindelof & Carlton Cuse"},
  6:{years:"2010",    showrunner:"Damon Lindelof & Carlton Cuse"},
};
