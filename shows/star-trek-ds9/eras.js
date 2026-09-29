// Star Trek: Deep Space Nine (syndicated, 1993–1999) — chart data on a SEASON axis: 7 columns, 176 episodes.
// Episode numbers are TVmaze's, which split the three feature-length episodes in two: "Emissary" is 1×01–1×02,
// "The Way of the Warrior" 4×01–4×02 and "What You Leave Behind" 7×25–7×26. Seasons 1, 4 and 7 therefore run
// one higher than Memory Alpha's numbering from those points on.
// Each entry: [label, startSeason, endSeason, bg, fg?]. Bars within a row must not overlap; mid-season
// turns are drawn at season granularity with the exact episode noted in the label.
const RUST="#9c4a1a", COPPER="#c8782e", LCOPPER="#ecc39a", TEAL="#1f6f78", LTEAL="#a6d6d8", NAVY="#1f3357",
      BLUE="#3b6fb0", LBLUE="#b7cdea", RED="#a3262a", DRED="#5e1216", GOLD="#d6a531", LGOLD="#f1dc9c",
      PURPLE="#5b3a86", LPURP="#cdb9e6", GREEN="#3f7a3a", LGREEN="#b8dcae", SLATE="#5b6770", LSLATE="#c9d1d6",
      BROWN="#5a3d2b", TAN="#d9c6a5", GRAY="#7c7c7c", DGRAY="#2e2e2e", WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["eras","Showrunner & era"],
  ["dominion","The Dominion War"],
  ["bajor","Bajor, the Prophets & the Emissary"],
  ["crew","The crew & the Defiant"],
  ["klingons","Klingons & the Klingon war"],
  ["specials","Mirror Universe, Ferengi & format"],
];

window.ERAS = {
  eras: [
    [["Michael Piller, showrunner (co-created with Rick Berman)", 1, 2, TEAL, WHITE], ["Piller & Ira Steven Behr; Behr sole showrunner from 3×21", 3, 3, COPPER, BLACK], ["Ira Steven Behr, showrunner to the end", 4, 7, RUST, WHITE]],
    [["Frontier outpost: the station, Bajor and a new wormhole", 1, 2, LTEAL, BLACK], ["The Dominion looms: the Defiant, the Founders, changelings everywhere", 3, 4, LCOPPER, BLACK], ["The war years", 5, 7, RED, WHITE]],
    [["Airs alongside The Next Generation, which ends in May 1994", 1, 2, LSLATE, BLACK], ["Voyager launches UPN in January 1995; DS9 becomes the Trek off to one side", 3, 7, SLATE, WHITE]],
    [["First-run syndication, January 1993 to June 1999", 1, 7, DGRAY, WHITE]],
  ],
  dominion: [
    [["Rumours from the Gamma Quadrant: \"the Dominion\" named in 2×07, the Jem'Hadar arrive in 2×26", 2, 2, LCOPPER, BLACK], ["Cold war: the Founders are Odo's people (3×02); the Obsidian Order dies (3×21)", 3, 3, COPPER, BLACK], ["Paranoia: changelings on Earth (4×11–4×12)", 4, 4, COPPER, BLACK], ["Cardassia joins the Dominion (5×14–5×15); war begins in 5×26", 5, 5, RED, WHITE], ["The station falls and is retaken (6×01–6×06); Romulans join (6×19)", 6, 6, RED, WHITE], ["The Breen, Damar's rebellion, the surrender: the final chapter, 7×17–7×26", 7, 7, DRED, WHITE]],
    [["The Female Changeling, from 3×01", 3, 7, PURPLE, WHITE]],
    [["Damar (from 4×14) and Weyoun (from 4×23)", 4, 6, LPURP, BLACK], ["Damar turns on the Dominion (7×20)", 7, 7, GOLD, BLACK]],
    [["Gul Dukat, ex-prefect of Bajor", 1, 4, BROWN, WHITE], ["Dukat takes Cardassia into the Dominion; Ziyal's death (6×06) breaks him", 5, 6, DRED, WHITE], ["Dukat and the Pah-wraiths: Covenant (7×09), then Anjohl (7×18)", 7, 7, DGRAY, WHITE]],
    [["The Maquis: 2×20–2×21", 2, 2, GREEN, WHITE], ["Tom Riker steals the Defiant (3×09)", 3, 3, LGREEN, BLACK], ["Eddington defects (4×22)", 4, 4, GREEN, WHITE], ["Sisko hunts Eddington (5×13); the Maquis are wiped out (5×23)", 5, 5, LGREEN, BLACK]],
    [["Section 31 (6×18) and \"In the Pale Moonlight\" (6×19)", 6, 6, SLATE, WHITE], ["Section 31: 7×16, and the changeling disease (7×21–7×23)", 7, 7, SLATE, WHITE]],
  ],
  bajor: [
    [["Sisko named the Emissary (1×01), and wants no part of it", 1, 3, GOLD, BLACK], ["Sisko takes the title back from Akorem Laan (4×17)", 4, 4, GOLD, BLACK], ["Visions: \"Rapture\" (5×10) keeps Bajor out of the Federation", 5, 5, GOLD, BLACK], ["\"The Reckoning\" (6×21); the wormhole closes (6×26)", 6, 6, COPPER, BLACK], ["Sarah Sisko, a Prophet's vessel (7×01–7×02); Sisko joins the Prophets (7×26)", 7, 7, LGOLD, BLACK]],
    [["Kai Opaka, left behind in 1×13; Vedek Winn arrives in 1×20", 1, 1, TAN, BLACK], ["Kai Winn Adami, elected in 2×24", 2, 6, RUST, WHITE], ["Winn turns to the Pah-wraiths, and to Dukat", 7, 7, DRED, WHITE]],
    [["Vedek Bareil, from 1×20; dies in 3×13", 1, 3, LTEAL, BLACK], ["First Minister Shakaar Edon (introduced in 3×24), and Kira's partner", 4, 5, TEAL, WHITE]],
    [["The Circle and the Provisional Government (2×01–2×03)", 2, 2, TAN, BLACK], ["The Pah-wraiths, first seen in 5×05", 5, 5, DGRAY, WHITE], ["A Pah-wraith in Jake (6×21); Dukat kills Jadzia (6×26)", 6, 6, DGRAY, WHITE], ["The Kosst Amojan text and the Fire Caves (7×26)", 7, 7, DGRAY, WHITE]],
    [["The Occupation remembered: \"Duet\" (1×19)", 1, 1, BROWN, WHITE], ["\"Cardassians\" (2×05), \"Necessary Evil\" (2×08)", 2, 2, BROWN, WHITE], ["\"Things Past\" (5×08), \"The Darkness and the Light\" (5×11)", 5, 5, BROWN, WHITE], ["\"Wrongs Darker Than Death or Night\" (6×17)", 6, 6, BROWN, WHITE]],
    [["Major Kira Nerys, Bajoran liaison and ex-resistance", 1, 6, RED, WHITE], ["Colonel Kira; a Starfleet commission (7×21) to train Damar's rebels", 7, 7, DRED, WHITE]],
  ],
  crew: [
    [["Commander Sisko, promoted to captain in 3×26", 1, 3, NAVY, WHITE], ["Captain Sisko: shaved head, goatee, a war", 4, 7, BLUE, WHITE]],
    [["Jadzia Dax (Terry Farrell), killed in 6×26", 1, 6, TEAL, WHITE], ["Ezri Dax (Nicole de Boer), joined in 7×01–7×02", 7, 7, LTEAL, BLACK]],
    [["Worf (Michael Dorn) transfers from the Enterprise in 4×01–4×02", 4, 7, RED, WHITE]],
    [["Runabouts only: Ganges, Yangtzee Kiang, Rio Grande", 1, 2, LSLATE, BLACK], ["USS Defiant arrives in 3×01, with a Romulan cloak", 3, 6, SLATE, WHITE], ["Defiant destroyed (7×20); the São Paulo takes the name (7×24)", 7, 7, DGRAY, WHITE]],
    [["Odo, searching for his people", 1, 2, GOLD, BLACK], ["Odo finds the Founders (3×02), and is made solid by them (4×26)", 3, 4, COPPER, BLACK], ["A changeling again (5×12); with Kira from 6×20", 5, 6, GOLD, BLACK], ["The disease, the cure, and going home", 7, 7, COPPER, BLACK]],
    [["Garak, \"plain, simple\" tailor, from 1×03", 1, 2, GREEN, WHITE], ["Garak's Obsidian Order past comes due (3×20–3×21)", 3, 4, GREEN, WHITE], ["Garak at war: codebreaker, conspirator, rebel", 5, 7, LGREEN, BLACK]],
    [["Jake and Nog on the Promenade", 1, 3, LBLUE, BLACK], ["Jake the writer: \"The Visitor\" (4×03), \"The Muse\" (4×21)", 4, 5, BLUE, WHITE], ["Jake, war correspondent: stays on the occupied station", 6, 7, NAVY, WHITE]],
    [["Kasidy Yates, from 3×23; marries Sisko in 7×18", 3, 7, PURPLE, WHITE]],
    [["Vic Fontaine's lounge, from 6×20", 6, 7, LPURP, BLACK]],
  ],
  klingons: [
    [["Allies at arm's length: Kor, Kang and Koloth (2×19)", 1, 3, LSLATE, BLACK], ["The Klingon war: Gowron invades Cardassia and quits the Khitomer Accords (4×01–4×02)", 4, 4, RED, WHITE], ["Changeling Martok unmasked (5×01); the Accords restored (5×15)", 5, 5, DRED, WHITE], ["Allies against the Dominion", 6, 6, SLATE, WHITE], ["Gowron takes command (7×21); Worf kills him (7×22)", 7, 7, RED, WHITE]],
    [["Worf's house loses its lands; Kurn's memory wiped (4×15)", 4, 4, BROWN, WHITE], ["Worf joins the House of Martok (5×21)", 5, 5, RUST, WHITE], ["Worf marries Jadzia (6×07)", 6, 6, TEAL, WHITE], ["Kor's last ride (7×07)", 7, 7, BROWN, WHITE]],
    [["\"General Martok\" is a changeling impostor", 4, 4, DGRAY, WHITE], ["The real Martok escapes (5×15), then leads the Rotarran (5×21)", 5, 6, RUST, WHITE], ["Chancellor Martok (7×22)", 7, 7, GOLD, BLACK]],
    [["\"Blood Oath\" (2×19)", 2, 2, LCOPPER, BLACK], ["\"The House of Quark\" (3×03)", 3, 3, LCOPPER, BLACK], ["\"The Sword of Kahless\" (4×09), \"Sons of Mogh\" (4×15), \"Rules of Engagement\" (4×18)", 4, 4, LCOPPER, BLACK], ["\"Looking for par'Mach…\" (5×03), \"Soldiers of the Empire\" (5×21)", 5, 5, LCOPPER, BLACK], ["\"You Are Cordially Invited\" (6×07)", 6, 6, LCOPPER, BLACK], ["\"Once More Unto the Breach\" (7×07), \"Tacking Into the Wind\" (7×22)", 7, 7, LCOPPER, BLACK]],
  ],
  specials: [
    [["Mirror Universe: \"Crossover\" (2×23)", 2, 2, DGRAY, WHITE], ["\"Through the Looking Glass\" (3×19)", 3, 3, DGRAY, WHITE], ["\"Shattered Mirror\" (4×20)", 4, 4, DGRAY, WHITE], ["\"Resurrection\" (6×08)", 6, 6, DGRAY, WHITE], ["\"The Emperor's New Cloak\" (7×12)", 7, 7, DGRAY, WHITE]],
    [["Ferengi: \"The Nagus\" (1×11)", 1, 1, GOLD, BLACK], ["\"Rules of Acquisition\" (2×07)", 2, 2, GOLD, BLACK], ["\"The House of Quark\" (3×03), \"Prophet Motive\" (3×16), \"Family Business\" (3×23)", 3, 3, GOLD, BLACK], ["\"Little Green Men\" (4×08), \"Bar Association\" (4×16), \"Body Parts\" (4×25)", 4, 4, GOLD, BLACK], ["\"Ferengi Love Songs\" (5×20)", 5, 5, GOLD, BLACK], ["\"The Magnificent Ferengi\" (6×10), \"Profit and Lace\" (6×23)", 6, 6, GOLD, BLACK], ["\"The Emperor's New Cloak\" (7×12), \"The Dogs of War\" (7×24)", 7, 7, GOLD, BLACK]],
    [["Rom and Nog work the bar", 1, 3, LGOLD, BLACK], ["Nog to the Academy (4×08); Rom unionises, then quits (4×16)", 4, 4, LGOLD, BLACK], ["Cadet, then Ensign Nog; Rom marries Leeta (5×26)", 5, 6, LGOLD, BLACK], ["Nog loses a leg (7×08); Rom becomes Grand Nagus (7×24)", 7, 7, LGOLD, BLACK]],
    [["Ishka (\"Moogie\") and Zek: a slow Ferengi revolution, from 3×23", 3, 7, TAN, BLACK]],
    [["Format: \"Whispers\" (2×14)", 2, 2, LBLUE, BLACK], ["\"Past Tense\" (3×11–3×12)", 3, 3, LBLUE, BLACK], ["\"The Visitor\" (4×03), \"Our Man Bashir\" (4×10), \"Hard Time\" (4×19)", 4, 4, LBLUE, BLACK], ["\"Trials and Tribble-ations\" (5×06)", 5, 5, LBLUE, BLACK], ["\"Far Beyond the Stars\" (6×13), \"In the Pale Moonlight\" (6×19)", 6, 6, LBLUE, BLACK], ["\"Take Me Out to the Holosuite\" (7×04), \"Badda-Bing, Badda-Bang\" (7×15)", 7, 7, LBLUE, BLACK]],
  ],
};

window.SEASON_META = {
  1: {years:"1993", showrunner:"Michael Piller"},
  2: {years:"1993–94", showrunner:"Michael Piller"},
  3: {years:"1994–95", showrunner:"Michael Piller & Ira Steven Behr"},
  4: {years:"1995–96", showrunner:"Ira Steven Behr"},
  5: {years:"1996–97", showrunner:"Ira Steven Behr"},
  6: {years:"1997–98", showrunner:"Ira Steven Behr"},
  7: {years:"1998–99", showrunner:"Ira Steven Behr"},
};
