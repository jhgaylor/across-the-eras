// Battlestar Galactica (Sci Fi / Syfy, 2003–09) — chart data on an EPISODE axis.
// Columns are the 74 entries of episodes.json in watch order:
//   1        = the 2003 Miniseries (both nights, folded into one card, numbered 1×00)
//   2–14     = S1 e1–e13      | abs = 1 + N
//   15–34    = S2 e1–e20      | abs = 14 + N
//   35–54    = S3 e1–e20      | abs = 34 + N
//   55–74    = S4 e1–e20      | abs = 54 + N
// Razor (2007) and The Plan (2009) are NOT columns — TVmaze files them as unnumbered specials.
// They are called out in the "Season & era" rows instead. See NOTES.md.
// Each entry: [label, startEp, endEp, bg, fg?]
window.CHART_AXIS = "episode";

const RED="#d81f26", DRED="#8f1418", RUST="#a8442a", ORANGE="#d9702a", AMBER="#f0a202",
      GOLD="#d9a441", CREAM="#efe1c2", TAN="#c8a878", BROWN="#6f4b2e",
      NAVY="#1d3557", BLUE="#3d6fa8", LBLUE="#bcd4ea", STEEL="#5c7a99", SLATE="#46525e",
      GREEN="#3f7d4f", LGREEN="#a9d3a0", OLIVE="#6e7a3a", TEAL="#2a8c8c", LTEAL="#9fd8d8",
      PURPLE="#6b4c9a", LPURP="#c9b6e6", PINK="#e79aa8",
      GRAY="#7c7c7c", DGRAY="#33383d", INK="#141618", WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["eras","Season & era"],
  ["command","Command & the chain of command"],
  ["politics","The Presidency & politics"],
  ["cylons","The Cylons"],
  ["arcs","Arcs, prophecy & mysteries"],
  ["people","Who's aboard"],
  ["places","Ships & worlds"],
];

window.ERAS = {
  eras: [
    [["Miniseries — the Fall of the Twelve Colonies", 1, 1, RED, WHITE],
     ["S1 — Running", 2, 14, DRED, WHITE],
     ["S2 — Pegasus, the election & New Caprica", 15, 34, RUST, WHITE],
     ["S3 — The occupation, the exodus & the trial", 35, 54, AMBER, BLACK],
     ["S4 — The Final Five, Earth, the mutiny & the end", 55, 74, STEEL, WHITE]],

    [["Day 1 — the attack", 1, 1, GRAY, WHITE],
     ["On the run: sleepless days, then the long first year", 2, 33, DGRAY, WHITE],
     ["New Caprica settled — and the story jumps forward one year (2×20)", 34, 34, GOLD, BLACK],
     ["The occupation (≈4 months) and the exodus", 35, 38, OLIVE, WHITE],
     ["Back on the run", 39, 54, DGRAY, WHITE],
     ["The last months — Earth, the mutiny, Daybreak", 55, 74, SLATE, WHITE]],

    [["Ronald D. Moore & David Eick — developed and ran the whole series", 1, 74, INK, WHITE]],

    [["The Plan (2009) retells this stretch from Cavil's side", 1, 34, LPURP, BLACK],
     ["Razor (2007) sits here, between 3×20 and 4×01", 54, 55, PURPLE, WHITE]],
  ],

  command: [
    [["Commander William Adama commands Galactica", 1, 14, NAVY, WHITE],
     ["Adama shot by Boomer (1×13) — Tigh in command, martial law", 15, 18, DRED, WHITE],
     ["Adama back in command (2×04); Admiral from 2×12", 19, 74, BLUE, WHITE]],

    [["Colonel Saul Tigh — Galactica's XO", 1, 33, STEEL, WHITE],
     ["New Caprica: Tigh runs the insurgency and loses an eye", 34, 38, DGRAY, WHITE],
     ["Tigh back as XO — and, from 3×20, one of the Final Five", 39, 66, SLATE, WHITE],
     ["In the brig during the mutiny (4×13–14), then XO to the end", 67, 74, STEEL, WHITE]],

    [["Admiral Helena Cain — the Pegasus arrives (2×10), shot dead 2×12", 24, 26, DRED, WHITE],
     ["Cmdr Jack Fisk — murdered 2×14", 27, 28, RUST, WHITE],
     ["Cmdr Barry Garner — dies 2×17", 29, 30, BROWN, WHITE],
     ["Cmdr Lee Adama has the Pegasus — lost saving New Caprica (3×04)", 31, 38, BLUE, WHITE]],

    [["Capt. Lee \"Apollo\" Adama — CAG", 1, 30, GOLD, BLACK],
     ["Commander of the Pegasus", 31, 38, BLUE, WHITE],
     ["Back aboard Galactica", 39, 52, GOLD, BLACK],
     ["Resigns his commission for Baltar's defense (3×19)", 53, 56, CREAM, BLACK],
     ["Caprica's delegate to the Quorum — and, after the mutiny, the fleet's voice", 57, 74, LBLUE, BLACK]],

    [["The fleet splits: Adama vs Roslin over Kobol (2×01–2×07)", 15, 21, RUST, WHITE],
     ["The Cain standoff — two battlestars, two admirals (2×10–2×12)", 24, 26, DRED, WHITE],
     ["Baltar's presidency vs Adama's military (2×20–3×04)", 34, 38, GOLD, BLACK],
     ["The Circle — the collaborator reckoning (3×05)", 39, 39, DGRAY, WHITE],
     ["The Demetrius — Starbuck's crew turns on her (4×05–4×08)", 59, 62, OLIVE, WHITE],
     ["Gaeta & Zarek's mutiny (4×13–14)", 67, 68, DRED, WHITE]],
  ],

  politics: [
    [["President Laura Roslin — 43rd in the line of succession, sworn in during the Fall", 1, 33, PURPLE, WHITE],
     ["President Gaius Baltar (elected 2×20)", 34, 38, GOLD, BLACK],
     ["Zarek acting President — hands it back (3×05)", 39, 39, DGRAY, WHITE],
     ["Roslin, President again, with Zarek as her VP", 40, 74, LPURP, BLACK]],

    [["Dr. Gaius Baltar — the man who let the Cylons in", 1, 11, RED, WHITE],
     ["Vice President (elected 1×11)", 12, 33, GOLD, BLACK],
     ["President, then collaborator on New Caprica", 34, 38, RUST, WHITE],
     ["Aboard the basestar, living with the Cylons", 39, 46, TEAL, WHITE],
     ["Colonial prisoner → on trial (3×19–20) → acquitted", 47, 54, DGRAY, WHITE],
     ["Baltar's monotheist cult — \"you are perfect just as you are\"", 55, 74, LPURP, BLACK]],

    [["Tom Zarek — terrorist, prisoner, then Sagittaron's delegate (1×03 →)", 4, 33, BROWN, WHITE],
     ["Baltar's Vice President on New Caprica", 34, 38, OLIVE, WHITE],
     ["Roslin's Vice President", 39, 66, TAN, BLACK],
     ["Seizes the fleet with Gaeta — executed 4×14", 67, 68, DRED, WHITE]],

    [["The Quorum of Twelve — reconvened 1×11", 12, 66, LBLUE, BLACK],
     ["Zarek executes the Quorum (4×13); it is rebuilt after", 67, 74, GRAY, WHITE]],

    [["The presidential election — and Roslin's attempt to steal it (2×19–2×20)", 33, 34, GOLD, BLACK],
     ["Collaborator trials and the Circle (3×05)", 39, 39, DGRAY, WHITE],
     ["Baltar's trial — Romo Lampkin for the defense (3×18–3×20)", 52, 54, CREAM, BLACK]],

    [["Laura Roslin's cancer — diagnosed in the Miniseries", 1, 26, PINK, BLACK],
     ["Remission — Hera's blood saves her (2×13)", 27, 54, LGREEN, BLACK],
     ["The cancer returns: diloxin, the wig, and the end", 55, 74, DRED, WHITE]],
  ],

  cylons: [
    [["Number Six — Caprica Six, Gina, Natalie, and the Six in Baltar's head", 1, 74, RED, WHITE]],

    [["Number Eight — Sharon: Boomer the sleeper, and Athena", 1, 74, TEAL, WHITE]],

    [["Number Two — Leoben Conoy (from \"Flesh and Bone\", 1×08)", 9, 74, GREEN, WHITE]],

    [["Number Five — Aaron Doral (Miniseries →)", 1, 74, OLIVE, WHITE]],

    [["Number Four — Simon (from \"The Farm\", 2×05)", 19, 74, BLUE, WHITE]],

    [["Number Three — D'Anna Biers, embedded reporter (2×08 →)", 22, 46, PURPLE, WHITE],
     ["The Threes are boxed for seeing too much (3×12)", 47, 60, GRAY, WHITE],
     ["D'Anna unboxed — she has seen the Final Five", 61, 65, LPURP, BLACK]],

    [["Number One — Brother Cavil (from \"Downloaded\", 2×18)", 32, 74, DGRAY, WHITE]],

    [["The Final Five, hidden in plain sight", 1, 53, INK, WHITE],
     ["Tigh, Tyrol, Anders & Tory hear the music (3×20)", 54, 64, PURPLE, WHITE],
     ["Ellen revealed as the Fifth (4×11); she returns to the fleet 4×16", 65, 74, LPURP, BLACK]],

    [["Head Six — the Six only Baltar can see", 1, 74, PINK, BLACK]],

    [["Head Baltar — the Baltar only Caprica Six can see (2×18 →)", 32, 74, CREAM, BLACK]],

    [["Cylon resurrection: die, download, wake up new", 1, 62, LTEAL, BLACK],
     ["The Hub is destroyed (4×09) — the Cylons are mortal now", 63, 74, DGRAY, WHITE]],

    [["The Hybrid on the Resurrection Ship raid (2×11–12)", 25, 26, STEEL, WHITE],
     ["The basestar Hybrid's prophecies (4×05 →)", 59, 70, STEEL, WHITE],
     ["Anders, shot in the head, becomes the new Hybrid (4×17)", 71, 74, SLATE, WHITE]],

    [["Sharon's pregnancy — Helo's baby, on Caprica and in the brig", 1, 31, LGREEN, BLACK],
     ["Hera Agathon — the first human-Cylon child (born 2×18)", 32, 74, GOLD, BLACK]],

    [["The Cylons occupy New Caprica", 34, 38, OLIVE, WHITE],
     ["The Cylon civil war — Cavil against the rebels (4×02 →)", 56, 74, DRED, WHITE]],

    [["The rebel basestar throws in with the fleet (4×08 →)", 62, 74, TEAL, WHITE]],
  ],

  arcs: [
    [["\"There is a 13th colony — Earth\": Roslin's gambit", 1, 12, GOLD, BLACK],
     ["Kobol, the Arrow of Apollo & the Tomb of Athena (1×12–2×07)", 13, 21, GREEN, WHITE],
     ["Following the map — Cylon-occupied space, the Lion's Head, the algae planet", 22, 44, CREAM, BLACK],
     ["The Eye of Jupiter & the Temple of Five (3×11–12)", 45, 46, AMBER, BLACK],
     ["The Ionian nebula and \"All Along the Watchtower\" (3×20–4×01)", 53, 55, PURPLE, WHITE],
     ["Following the Cylon beacon and Kara's Viper", 56, 63, LBLUE, BLACK],
     ["Earth found — and it is ash (4×10–4×11)", 64, 65, DGRAY, WHITE],
     ["A new Earth (4×20)", 74, 74, LGREEN, BLACK]],

    [["Roslin's chamalla visions and the scriptures of Pythia", 13, 27, LPURP, BLACK],
     ["The Opera House — from \"Rapture\" (3×12) to Daybreak", 46, 74, PINK, BLACK]],

    [["Leoben: \"You are the harbinger of death\" (1×08)", 9, 9, TEAL, WHITE],
     ["Kara's destiny — the mandala, the Maelstrom, her death and return (3×17–3×20)", 51, 54, GOLD, BLACK],
     ["Her own body on Earth, the song, and the coordinates", 55, 74, AMBER, BLACK]],

    [["Settling New Caprica (2×20)", 34, 34, OLIVE, WHITE],
     ["The occupation and the resistance — suicide bombings, the round-ups", 35, 38, DRED, WHITE],
     ["Collaborators: the Circle and the reckoning (3×05)", 39, 39, DGRAY, WHITE]],

    [["\"A Measure of Salvation\" — the fleet debates genocide (3×07)", 41, 41, DRED, WHITE],
     ["Cylon civil war into a human-Cylon alliance (4×02–4×12)", 56, 66, TEAL, WHITE],
     ["The mutiny against the alliance (4×13–14)", 67, 68, DGRAY, WHITE],
     ["Cylon resin holds Galactica together for one last jump", 69, 74, STEEL, WHITE]],

    [["The Demetrius and the rebel basestar (4×05–4×08)", 59, 62, OLIVE, WHITE],
     ["The raid on the resurrection Hub (4×09)", 63, 63, LTEAL, BLACK],
     ["Boomer takes Hera to the Colony (4×17)", 71, 72, DRED, WHITE],
     ["The assault on the Colony and the last jump (4×19–20)", 73, 74, INK, WHITE]],
  ],

  people: [
    [["Kara \"Starbuck\" Thrace", 1, 50, GOLD, BLACK],
     ["Dies in the Maelstrom (3×17)", 51, 53, DGRAY, WHITE],
     ["Returns: \"I've been to Earth\" (3×20 →)", 54, 74, AMBER, BLACK]],

    [["Sharon \"Boomer\" Valerii — the sleeper who doesn't know", 1, 14, LTEAL, BLACK],
     ["Shoots Adama (1×13); shot dead by Cally (2×04)", 15, 18, DRED, WHITE],
     ["Downloaded — Boomer with the Cylons (2×18 →)", 32, 74, STEEL, WHITE]],

    [["Caprica-Sharon — Helo's Sharon, on the ground and in the brig", 1, 33, LGREEN, BLACK],
     ["Lt. Sharon \"Athena\" Agathon, Colonial officer", 34, 74, TEAL, WHITE]],

    [["Karl \"Helo\" Agathon — left behind on Caprica", 1, 19, BROWN, WHITE],
     ["Back in the fleet, and Galactica's XO by the end", 20, 74, TAN, BLACK]],

    [["Chief Galen Tyrol — the deck gang", 1, 53, RUST, WHITE],
     ["One of the Final Five", 54, 74, INK, WHITE]],

    [["Samuel Anders — pyramid star, then the Caprica resistance (2×04 →)", 18, 33, GREEN, WHITE],
     ["New Caprica, then a Viper pilot", 34, 53, LGREEN, BLACK],
     ["One of the Final Five; shot in the head (4×13), then the Hybrid", 54, 74, SLATE, WHITE]],

    [["Tory Foster — Roslin's aide (2×17 →)", 31, 53, LPURP, BLACK],
     ["One of the Final Five — and Cally's killer", 54, 74, DGRAY, WHITE]],

    [["Ellen Tigh — presumed dead in the attack, back in 1×09; poisoned by Saul (3×03)", 10, 37, PINK, BLACK],
     ["Alive with Cavil; revealed as the Fifth (4×11), rejoins the fleet 4×16", 65, 74, PURPLE, WHITE]],

    [["Billy Keikeya — Roslin's aide, killed in the hostage stand-off (2×16)", 2, 30, LBLUE, BLACK]],

    [["Anastasia \"Dee\" Dualla — comms, then Lee's wife; takes her own life after Earth (4×11)", 2, 65, BLUE, WHITE]],

    [["Callandra \"Cally\" Henderson Tyrol — killed by Tory (4×03)", 1, 57, LGREEN, BLACK]],

    [["Louanne \"Kat\" Katraine (1×10 → dies flying the Passage, 3×10)", 11, 44, ORANGE, BLACK]],

    [["Lt. Felix Gaeta — Galactica's tactical officer", 1, 58, OLIVE, WHITE],
     ["Loses a leg, then leads the mutiny — executed 4×14", 59, 68, DRED, WHITE]],

    [["Doc Cottle — the fleet's doctor, and its cigarettes (1×04 →)", 5, 74, LTEAL, BLACK]],

    [["Racetrack (1×13 →) — and the last shot she ever fires", 14, 74, TAN, BLACK]],

    [["\"Hot Dog\" Costanza (2×01 →)", 15, 74, CREAM, BLACK]],

    [["\"Hardball\" Seelix — deck gang, then a nugget, then a mutineer", 14, 68, GRAY, WHITE]],

    [["\"Jammer\" Lyman — deck gang, then a collaborator (airlocked 3×05)", 7, 39, BROWN, WHITE]],

    [["Tucker \"Duck\" Clellan — New Caprica's first suicide bomber (3×02)", 33, 36, DRED, WHITE]],

    [["Lt. Louis Hoshi — Pegasus, then CIC, then Admiral for a day (2×11 →)", 25, 74, LBLUE, BLACK]],

    [["Romo Lampkin — Baltar's lawyer, and his cat (3×18 →)", 52, 74, DGRAY, WHITE]],

    [["Elosha, the priest who reads the scrolls — killed on Kobol (1×13)", 2, 14, LPURP, BLACK]],

    [["Baltar's household — the harem, the cult, the tent revival", 57, 74, PINK, BLACK]],
  ],

  places: [
    [["Battlestar Galactica — a museum piece that survives because it is obsolete", 1, 74, GRAY, WHITE]],

    [["Colonial One — the President's ship", 1, 74, LBLUE, BLACK]],

    [["Cloud Nine, the fleet's luxury liner (1×11) — nuked 2×20", 12, 34, PINK, BLACK]],

    [["Battlestar Pegasus (2×10) — rammed into a basestar over New Caprica (3×04)", 24, 38, STEEL, WHITE]],

    [["Caprica — occupied ground, Helo, and the resistance", 1, 19, GREEN, WHITE],
     ["Back to Caprica for Anders (2×19–2×20)", 33, 34, LGREEN, BLACK]],

    [["Ragnar Anchorage (Miniseries)", 1, 1, DGRAY, WHITE],
     ["Kobol — the Tomb of Athena (1×12–2×07)", 13, 21, GREEN, WHITE],
     ["New Caprica (2×20–3×04)", 34, 38, OLIVE, WHITE],
     ["The algae planet & the Temple of Five (3×11–12)", 45, 46, AMBER, BLACK],
     ["The Ionian nebula (3×20–4×01)", 54, 55, PURPLE, WHITE],
     ["Earth, the 13th colony — irradiated ruin (4×10–4×11)", 64, 65, DGRAY, WHITE],
     ["The Colony, the black hole, and a new Earth (4×19–20)", 73, 74, INK, WHITE]],

    [["The Resurrection Ship (2×11–12)", 25, 26, LTEAL, BLACK],
     ["Cylon basestars — and Baltar living aboard one", 32, 74, TEAL, WHITE]],

    [["The civilian fleet — the Rising Star, the Astral Queen, the Gideon, the tylium ship", 1, 74, TAN, BLACK]],

    [["The Demetrius (4×05–4×08)", 59, 62, OLIVE, WHITE],
     ["The rebel basestar, docked with the fleet", 63, 74, LTEAL, BLACK]],
  ],
};

window.SEASON_META = {
  1:{years:"2003–05 · Miniseries + Season 1",showrunner:"Ronald D. Moore & David Eick"},
  2:{years:"2005–06",showrunner:"Ronald D. Moore & David Eick"},
  3:{years:"2006–07 · + Razor (2007)",showrunner:"Ronald D. Moore & David Eick"},
  4:{years:"2008–09 · + The Plan (2009)",showrunner:"Ronald D. Moore & David Eick"},
};
