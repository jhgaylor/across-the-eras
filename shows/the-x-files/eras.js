// The X-Files (FOX, 1993–2002, 2016, 2018) — chart data on a SEASON axis: 11 columns, 218 episodes.
// Each entry: [label, startSeason, endSeason, bg, fg?]. Bars within a row must not overlap;
// mid-season events are drawn at season granularity with the exact episode noted in the label.
// Seasons 10–11 are the revival; TVmaze lists them under the same show (430), so numbering is TVmaze's own.
const GREEN="#2f7d3a", DGREEN="#173d1d", LGREEN="#9fd8a0", ALIEN="#6fcf6a", SLATE="#3b4a5a", LSLATE="#b6c4d2",
      NAVY="#1f2f4f", RED="#9e2a2a", DRED="#5c1414", AMBER="#c9922a", LAMBER="#ecd197", GRAY="#6b6b6b",
      DGRAY="#2b2b2b", LGRAY="#cfcfcf", TEAL="#2a6f73", LTEAL="#a9d6d8", PLUM="#5b3a6b", LPLUM="#cdb6dc",
      RUST="#a8552a", SMOKE="#8a8474", WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["partners","Partners & era"],
  ["myth","The mythology"],
  ["cast","Cast & the Bureau"],
  ["players","Informants & conspirators"],
  ["room","Writers & format"],
  ["production","Production & the real world"],
];

window.ERAS = {
  partners: [
    [["Mulder & Scully", 1, 7, GREEN, WHITE], ["Mulder abducted (7×22) — Scully & Doggett", 8, 8, SLATE, WHITE], ["Doggett & Reyes", 9, 9, NAVY, WHITE], ["Mulder & Scully again — the revival", 10, 11, ALIEN, BLACK]],
    [["Chris Carter — creator and showrunner, all eleven seasons", 1, 11, DGREEN, WHITE]],
    [["The X-Files unit: shut down 1×24, reopened by Skinner 2×06", 1, 2, LGRAY, BLACK], ["The basement years", 3, 4, LGREEN, BLACK], ["Office burned 5×20; Spender & Fowley take over 6×01; Mulder & Scully back 6×13", 5, 6, AMBER, BLACK], ["Back on the X-Files", 7, 7, LGREEN, BLACK], ["Doggett assigned 8×03; Doggett & Reyes run it in season 9", 8, 9, LSLATE, BLACK], ["Reopened for the revival (10×01–10×02)", 10, 11, LGREEN, BLACK]],
  ],
  myth: [
    [["Deep Throat's era — UFO crash sites and the Erlenmeyer Flask", 1, 1, LGRAY, BLACK], ["Colonization: clones, the Bounty Hunter, black oil, the vaccine", 2, 5, GREEN, WHITE], ["The Syndicate burns (6×12 \"One Son\")", 6, 6, RED, WHITE], ["Artifacts, Mulder's illness and the Samantha answer", 7, 7, TEAL, WHITE], ["Super-soldiers and replicants", 8, 9, NAVY, WHITE], ["The Spartan virus and William", 10, 11, PLUM, WHITE]],
    [["Samantha Mulder — abducted 1973; the clones (2×16–17, 4×01); answered in 7×11 \"Closure\"", 1, 7, AMBER, BLACK]],
    [["Scully's abduction (2×05–2×08) — the chip, the missing ova", 2, 3, LSLATE, BLACK], ["Scully's cancer — diagnosed 4×14, remission in 5×02", 4, 5, RED, WHITE]],
    [["Emily — Scully's hybrid daughter (5×06–5×07)", 5, 5, LPLUM, BLACK], ["Scully's pregnancy (revealed 7×22) — William born 8×21", 7, 8, LPLUM, BLACK], ["William given up for adoption (9×16)", 9, 9, PLUM, WHITE], ["William, grown — 11×05 \"Ghouli\", 11×10", 11, 11, PLUM, WHITE]],
    [["The Truth — 9×19–9×20", 9, 9, DRED, WHITE], ["\"My Struggle\" I–IV bookend both revival seasons", 10, 11, DGREEN, WHITE]],
  ],
  cast: [
    [["Fox Mulder (David Duchovny)", 1, 7, GREEN, WHITE], ["Reduced: 12 of 21 episodes — dead 8×14, alive 8×15", 8, 8, LGREEN, BLACK], ["Absent — back only for \"The Truth\" (9×19–20)", 9, 9, LGRAY, BLACK], ["Mulder (Duchovny)", 10, 11, GREEN, WHITE]],
    [["Dana Scully (Gillian Anderson)", 1, 11, TEAL, WHITE]],
    [["John Doggett (Robert Patrick) — from 8×01", 8, 9, SLATE, WHITE]],
    [["Monica Reyes (Annabeth Gish) — first appears 8×14", 8, 9, NAVY, WHITE], ["Reyes returns (10×06, 11×01, 11×10)", 10, 11, LSLATE, BLACK]],
    [["Walter Skinner (Mitch Pileggi) — recurring from 1×21 \"Tooms\"", 1, 8, SMOKE, WHITE], ["Skinner — in the main cast", 9, 11, SMOKE, WHITE]],
    [["Deputy Director Alvin Kersh (James Pickens Jr.) — from 6×01", 6, 9, DGRAY, WHITE]],
    [["The Lone Gunmen — from 1×17 \"E.B.E.\"; killed in 9×15", 1, 9, AMBER, BLACK], ["Cameo 10×05; Langly's digital ghost 11×02", 10, 11, LAMBER, BLACK]],
  ],
  players: [
    [["Cigarette Smoking Man (William B. Davis) — from the pilot; seemingly killed 9×20", 1, 9, SMOKE, WHITE], ["CSM is back — shot in 11×10", 10, 11, DGRAY, WHITE]],
    [["Deep Throat (Jerry Hardin) — killed 1×24", 1, 1, LGRAY, BLACK], ["X (Steven Williams) — from 2×02; killed 4×01", 2, 3, DGRAY, WHITE], ["Marita Covarrubias (Laurie Holden) — from 4×01", 4, 7, LPLUM, BLACK]],
    [["Alex Krycek (Nicholas Lea) — Mulder's partner in 2×04; killed by Skinner in 8×21", 2, 8, RED, WHITE]],
    [["The Well-Manicured Man & the Syndicate — from 3×01; he dies in the 1998 film", 3, 5, DRED, WHITE], ["Syndicate burned at El Rico (6×12)", 6, 6, RED, WHITE]],
    [["Jeffrey Spender (Chris Owens) — from 5×13; shot in 6×12", 5, 6, RUST, WHITE], ["Spender returns — 9×16 \"William\"", 9, 9, RUST, WHITE]],
    [["Diana Fowley (Mimi Rogers) — from 5×20; her loyalties never quite explained", 5, 7, LPLUM, BLACK]],
    [["The Alien Bounty Hunter (Brian Thompson) — from 2×16 \"Colony\"", 2, 8, TEAL, WHITE], ["Knowle Rohrer & the super-soldiers", 9, 9, NAVY, WHITE]],
  ],
  room: [
    [["Monster of the week alongside the mythology — about two standalones for every arc episode", 1, 11, DGRAY, WHITE]],
    [["Glen Morgan & James Wong (through 2×14)", 1, 2, GREEN, WHITE], ["Morgan & Wong return — \"Home\", \"Musings\", \"Never Again\"", 4, 4, GREEN, WHITE], ["Morgan & Wong in the revival — 10×02, 10×04, 11×02, 11×05", 10, 11, GREEN, WHITE]],
    [["Darin Morgan — \"Humbug\", \"Clyde Bruckman\", \"Coprophages\", \"Jose Chung\"", 2, 3, AMBER, BLACK], ["Darin Morgan returns — 10×03 \"Were-Monster\", 11×04 \"Forehead Sweat\"", 10, 11, AMBER, BLACK]],
    [["Vince Gilligan — from 2×23 \"Soft Light\" to 9×18 \"Sunshine Days\"", 2, 9, TEAL, WHITE]],
    [["Frank Spotnitz — Carter's mythology co-writer from 2×17 \"End Game\"", 2, 9, SLATE, WHITE]],
    [["5×05 \"Post-Modern Prometheus\" (black and white), 5×12 \"Bad Blood\"", 5, 5, LAMBER, BLACK], ["6×03 \"Triangle\" (long takes); 6×19 Duchovny writes & directs", 6, 6, LAMBER, BLACK], ["7×03 \"Hungry\", 7×12 \"X-Cops\"; Anderson (7×17) and Duchovny (7×19) write & direct", 7, 7, LAMBER, BLACK], ["11×07 \"Rm9sbG93ZXJz\" — almost no dialogue", 11, 11, LAMBER, BLACK]],
  ],
  production: [
    [["Shot in Vancouver, BC", 1, 5, TEAL, WHITE], ["Production moves to Los Angeles", 6, 9, AMBER, BLACK], ["Back to Vancouver for the revival", 10, 11, TEAL, WHITE]],
    [["FOX Friday nights", 1, 3, DGRAY, WHITE], ["Moved to Sundays from 4×04", 4, 9, GRAY, WHITE], ["Six-episode event: Sunday premiere, then Mondays", 10, 10, SLATE, WHITE], ["Wednesdays", 11, 11, SLATE, WHITE]],
    [["Fight the Future — the 1998 film, between 5×20 and 6×01", 5, 5, RED, WHITE], ["I Want to Believe (2008) — the second film, after season 9", 9, 9, DRED, WHITE]],
    [["'90s millennial paranoia — Roswell, Area 51 and the alien autopsy tape", 1, 7, LGREEN, BLACK], ["Post-9/11 — season 9 premieres November 2001", 9, 9, DGRAY, WHITE], ["A fourteen-year gap, then the fake-news era", 10, 11, PLUM, WHITE]],
  ],
};

window.SEASON_META = {
  1:  {years:"1993–94", showrunner:"Chris Carter"},
  2:  {years:"1994–95", showrunner:"Chris Carter"},
  3:  {years:"1995–96", showrunner:"Chris Carter"},
  4:  {years:"1996–97", showrunner:"Chris Carter"},
  5:  {years:"1997–98", showrunner:"Chris Carter"},
  6:  {years:"1998–99", showrunner:"Chris Carter"},
  7:  {years:"1999–2000", showrunner:"Chris Carter"},
  8:  {years:"2000–01", showrunner:"Chris Carter"},
  9:  {years:"2001–02", showrunner:"Chris Carter"},
  10: {years:"2016", showrunner:"Chris Carter"},
  11: {years:"2018", showrunner:"Chris Carter"},
};
