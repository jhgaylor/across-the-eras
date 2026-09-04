// Dragon Ball Z (Fuji TV, 1989–1996) — chart data on a SEASON axis: 9 columns, 291 episodes
// plus the two TV specials (Bardock as 2×00, The History of Trunks as 6×00).
// Seasons follow the standard nine-saga split. Each entry: [label, startSeason, endSeason, bg, fg?].
// Bars in a row must not overlap; arcs that begin mid-season carry the exact episode in the label.
const ORANGE="#e8760f", DORANGE="#a34c00", GOLD="#f5c518", LGOLD="#ffe89a", BLUE="#1f4fa8", DBLUE="#12306a",
      SKY="#7fb2ea", GREEN="#2f7d32", LGREEN="#a5d6a7", PURPLE="#6b3f9e", LPURP="#cbb2e8", RED="#c0272d",
      DRED="#7a1418", PINK="#e87fae", LPINK="#f7c6da", TEAL="#1f7a76", GRAY="#7c7c7c", DGRAY="#2f2f2f",
      WHITE="#fff", BLACK="#000", SAND="#e0cf9a", BROWN="#6b4a2b", SILVER="#b9c1c9";

window.ERA_CATS = [
  ["eras","Production era"],
  ["sagas","Sagas"],
  ["power","Transformations & power"],
  ["roster","The Z Fighters"],
  ["tone","Shape of a season"],
  ["world","The world & the timeline"],
];

window.ERAS = {
  eras: [
    [["Daisuke Nishio — series director (episodes 1–199)", 1, 7, ORANGE, BLACK], ["Shigeyasu Yamauchi — series director (from 7×06, episode 200)", 8, 9, PURPLE, WHITE]],
    [["Opening: \"Cha-La Head-Cha-La\"", 1, 7, LGOLD, BLACK], ["Opening: \"We Gotta Power\" (from episode 200)", 8, 9, LPURP, BLACK]],
    [["Adapting Akira Toriyama's manga chapter by chapter, while it is still running in Weekly Shōnen Jump", 1, 8, SAND, BLACK], ["The manga ends (May 1995) — the anime finishes the last arc and stops", 9, 9, GRAY, WHITE]],
    [["Snake Way, Arlia and the Pendulum Room — anime-only detours (1×09–1×17)", 1, 1, SILVER, BLACK], ["The Garlic Jr. arc — anime-only (4×01–4×10)", 4, 4, SILVER, BLACK], ["The Other World Tournament — anime-only (7×01–7×05)", 7, 7, SILVER, BLACK]],
    [["Fuji TV, Wednesdays at 7pm — 291 episodes, April 1989 to January 1996", 1, 9, DGRAY, WHITE]],
  ],
  sagas: [
    [["Saiyan Saga", 1, 1, BLUE, WHITE], ["Frieza Saga", 2, 3, PURPLE, WHITE], ["Android & Cell Saga", 4, 7, GREEN, WHITE], ["Majin Buu Saga", 8, 9, PINK, BLACK]],
    [["Raditz, Goku's Saiyan origin, a year of training, then Vegeta and Nappa land (1×22)", 1, 1, SKY, BLACK], ["Namek — the race for the Dragon Balls and the Ginyu Force", 2, 2, LPURP, BLACK], ["Goku vs. Frieza — the fight that ate a season", 3, 3, LPURP, BLACK], ["Garlic Jr. filler, then Trunks from the future (4×12) and Dr. Gero's androids", 4, 4, LGREEN, BLACK], ["Cell hunts 17 and 18; the Hyperbolic Time Chamber", 5, 5, LGREEN, BLACK], ["The Cell Games — and Gohan finally lets go", 6, 6, LGREEN, BLACK], ["Other World Tournament, Great Saiyaman, the 25th World Tournament", 7, 7, LGOLD, BLACK], ["Babidi, Majin Vegeta, and Buu hatched", 8, 8, LPINK, BLACK], ["Gotenks, Vegito, Kid Buu and the Spirit Bomb", 9, 9, LPINK, BLACK]],
    [["Raditz → Nappa → Vegeta", 1, 1, DRED, WHITE], ["Frieza's empire — Zarbon, Dodoria, the Ginyu Force, Frieza himself", 2, 3, DRED, WHITE], ["Dr. Gero and the androids, then Cell", 4, 7, DRED, WHITE], ["Babidi, Dabura and Majin Buu", 8, 9, DRED, WHITE]],
    [["Earth, Snake Way and King Kai's planet", 1, 1, SAND, BLACK], ["Planet Namek — five days to destruction", 2, 3, LGREEN, BLACK], ["Earth, Kami's Lookout and the Time Chamber", 4, 7, SAND, BLACK], ["Earth, the Sacred World of the Kais, and whatever is left of both", 8, 9, SAND, BLACK]],
  ],
  power: [
    [["Kaio-ken (1×29)", 1, 1, RED, WHITE], ["Super Saiyan — Goku on Namek, 3×21 \"Transformed At Last\"", 3, 3, GOLD, BLACK], ["Ascended and Ultra Super Saiyan — Vegeta and Trunks", 5, 5, GOLD, BLACK], ["Super Saiyan 2 — Gohan, 6×20 \"Awakening\"", 6, 6, GOLD, BLACK], ["Super Saiyan 3 — Goku, 8×26", 8, 8, GOLD, BLACK], ["Ultimate Gohan; Vegito, 9×16", 9, 9, GOLD, BLACK]],
    [["Spirit Bomb (1×32)", 1, 1, SKY, BLACK], ["Instant Transmission (4×14)", 4, 4, SKY, BLACK], ["The Hyperbolic Time Chamber — a year in a day", 5, 6, SKY, BLACK], ["Fusion: the dance (8×32) and the Potara earrings (9×16)", 8, 9, SKY, BLACK]],
    [["Goku is the strongest man alive", 1, 3, ORANGE, BLACK], ["The gap closes — Vegeta, Trunks, Piccolo and Cell all pass him", 4, 5, GRAY, WHITE], ["Gohan is the strongest", 6, 7, GOLD, BLACK], ["Goku again — Super Saiyan 3, then Vegito", 8, 9, ORANGE, BLACK]],
    [["Goku dies in 1×05; Yamcha, Chiaotzu, Tien and Piccolo die in 1×23–1×26", 1, 1, DGRAY, WHITE], ["Everyone wished back with the Namekian Dragon Balls (3×27)", 3, 3, LGREEN, BLACK], ["Goku stays dead after 6×23 \"A Hero's Farewell\"", 6, 7, DGRAY, WHITE], ["Vegeta's sacrifice (8×18); Buu destroys the Earth (9×24); Porunga puts it all back", 8, 9, DGRAY, WHITE]],
  ],
  roster: [
    [["Son Goku — the centre of the story", 1, 3, ORANGE, BLACK], ["Goku sidelined — the heart virus, then dead after the Cell Games", 4, 7, GRAY, WHITE], ["Goku back: one day for the tournament (7×16), then the fight with Buu", 8, 9, ORANGE, BLACK]],
    [["Gohan — the four-year-old who would rather study", 1, 5, LGOLD, BLACK], ["Gohan carries the show — the Cell Games, then high school and Great Saiyaman", 6, 7, GOLD, BLACK], ["Ultimate Gohan, and a father's shadow", 8, 9, GOLD, BLACK]],
    [["Vegeta — the villain", 1, 1, DBLUE, WHITE], ["Vegeta — reluctant ally on Namek", 2, 3, BLUE, WHITE], ["Vegeta — the prince who cannot catch up", 4, 7, BLUE, WHITE], ["Majin Vegeta, and then a father who fights beside Goku", 8, 9, DBLUE, WHITE]],
    [["Piccolo — the enemy who becomes Gohan's mentor", 1, 2, GREEN, WHITE], ["Piccolo fuses with Nail (3×03)", 3, 4, GREEN, WHITE], ["Piccolo fuses with Kami — briefly the strongest fighter on Earth", 5, 9, GREEN, WHITE]],
    [["Krillin, Yamcha, Tien and Chiaotzu — outclassed by season 2 and still turning up", 1, 9, SAND, BLACK]],
    [["Bulma, Chi-Chi, Master Roshi and the ground crew", 1, 9, TEAL, WHITE]],
    [["Future Trunks — arrives 4×12, goes home 6×29", 4, 6, LPURP, BLACK], ["Trunks and Goten, growing up in peacetime", 7, 9, LPURP, BLACK]],
    [["Android 18 — Dr. Gero's weapon", 4, 6, SILVER, BLACK], ["Android 18 — Krillin's wife, and in it for the prize money", 7, 9, SILVER, BLACK]],
    [["Mr. Satan — the loudest fraud on Earth (from 6×01), and eventually its saviour", 6, 9, BROWN, WHITE]],
    [["Videl — classmate, sparring partner, and the one who works out who Saiyaman is (from 7×09)", 7, 9, DBLUE, WHITE]],
  ],
  tone: [
    [["One fight, stretched across a month of Wednesdays, ending on a cliffhanger every time", 1, 9, DGRAY, WHITE]],
    [["Adventure comedy that suddenly kills its hero", 1, 1, LGOLD, BLACK], ["Space opera on a five-minute countdown", 2, 3, LPURP, BLACK], ["Science fiction — time travel, androids and a ticking clock", 4, 7, LGREEN, BLACK], ["High fantasy, and then a comedy about a pink monster", 8, 9, LPINK, BLACK]],
    [["Training arc: Snake Way and King Kai's planet", 1, 1, SKY, BLACK], ["Training arc: 100× gravity", 2, 4, SKY, BLACK], ["Training arc: the Hyperbolic Time Chamber", 5, 6, SKY, BLACK], ["Training arc: the Z Sword and the Time Chamber again", 8, 9, SKY, BLACK]],
    [["Tournament: the Other World Tournament (7×01–7×05) and the 25th World Martial Arts Tournament (7×16–7×25)", 7, 7, GOLD, BLACK], ["The tournament resumes — and Babidi interrupts it", 8, 8, GOLD, BLACK], ["The 28th World Tournament, ten years on (9×36–9×38)", 9, 9, GOLD, BLACK]],
  ],
  world: [
    [["Age 761–762 — Raditz arrives, the Saiyans land, Namek", 1, 3, SAND, BLACK], ["Age 764–767 — Trunks' warning, the androids, the Cell Games", 4, 6, LGREEN, BLACK], ["Age 774 — seven years later: Great Saiyaman, the tournament, Buu", 7, 9, LPINK, BLACK]],
    [["Trunks' future — a ruined Earth (4×13, 5×25 and the 1993 TV special)", 4, 6, DGRAY, WHITE], ["Age 784 — the epilogue, ten years on (9×36–9×38)", 9, 9, GRAY, WHITE]],
    [["Earth's Dragon Balls — one wish, and Shenron", 1, 1, ORANGE, BLACK], ["The Namekian Dragon Balls — three wishes, and Porunga", 2, 3, LGREEN, BLACK], ["Dende's new Dragon Balls (6×08) — the ones that undo the Buu Saga", 6, 9, ORANGE, BLACK]],
    [["King Kai, Snake Way and King Yemma's Other World", 1, 3, SKY, BLACK], ["The Grand Kai, the Supreme Kai and the Sacred World", 7, 9, PURPLE, WHITE]],
  ],
};

window.SEASON_META = {
  1: {years:"1989–90", showrunner:"Daisuke Nishio"},
  2: {years:"1990–91", showrunner:"Daisuke Nishio"},
  3: {years:"1991",    showrunner:"Daisuke Nishio"},
  4: {years:"1991–92", showrunner:"Daisuke Nishio"},
  5: {years:"1992",    showrunner:"Daisuke Nishio"},
  6: {years:"1992–93", showrunner:"Daisuke Nishio"},
  7: {years:"1993–94", showrunner:"Daisuke Nishio, then Shigeyasu Yamauchi (from 7×06)"},
  8: {years:"1994–95", showrunner:"Shigeyasu Yamauchi"},
  9: {years:"1995–96", showrunner:"Shigeyasu Yamauchi"},
};
