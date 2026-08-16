// Angel Across the Eras — chart data. 5 seasons, 110 episodes, all on The WB (1999–2004).
// Sibling package to shows/buffy — shared characters keep the same colors across both charts.
// Each entry: [label, startSeason, endSeason, bg, fg?]
const WINE="#8b1e3f", DWINE="#5a1029", CRIM="#c0202c", BLOOD="#7a0f18", ROSE="#d98a9d",
      GOLD="#c9962a", LGOLD="#f5dd93", CREAM="#f3ead6",
      NAVY="#1b2a4a", BLUE="#3f6ea8", LBLUE="#d3e2f7",
      GREEN="#3f7d3a", LGREEN="#a8d5a2", KHAKI="#7e8546", TEAL="#2a7f7a",
      PURPLE="#5c3a86", LPURP="#c7b0e6", MAGENTA="#9c2b7d",
      BLACK="#141414", DGRAY="#3a3a3a", GRAY="#7f7f7f", SILVER="#dcdcdc", WHITE="#fff",
      ORANGE="#d9722f", BROWN="#6f4526", PINK="#e0609b", LPINK="#f7c6da";

window.ERA_CATS = [
  ["showrunners","Showrunner, network & format"],
  ["roster","Angel Investigations"],
  ["villains","Big Bads & mini-bosses"],
  ["arcs","Major arcs"],
  ["romances","Romances"],
  ["recurring","Recurring characters"],
  ["locations","Locations & home bases"],
  ["crossovers","Buffy crossovers"],
];

window.ERAS = {
  showrunners: [
    [
      ["David Greenwalt — showrunner", 1, 3, GOLD, BLACK],
      ["Whedon, Jeffrey Bell & Tim Minear", 4, 4, WINE, WHITE],
      ["Jeffrey Bell — showrunner", 5, 5, PURPLE, WHITE],
    ],
    [["Joss Whedon — co-creator & executive producer", 1, 5, NAVY, WHITE]],
    [["The WB", 1, 5, LBLUE, BLACK]],
    [
      ["Noir case-of-the-week — 'we help the helpless'", 1, 1, DGRAY, WHITE],
      ["Serialized and getting darker every year", 2, 4, DWINE, WHITE],
      ["Network-mandated reset: Wolfram & Hart, Spike, standalones", 5, 5, CRIM, WHITE],
    ],
    [
      ["Spun off from 'Buffy' after its season 3", 1, 1, CRIM, WHITE],
      ["Cancelled mid-season 5; 5×22 written as a series finale", 5, 5, BLACK, WHITE],
    ],
  ],

  roster: [
    [["Angel — the vampire with a soul (David Boreanaz)", 1, 5, NAVY, WHITE]],
    [
      ["Cordelia Chase (Charisma Carpenter) — comatose from 4×17", 1, 4, LPINK, BLACK],
      ["Cordelia's last vision (5×12 \"You're Welcome\")", 5, 5, PINK, BLACK],
    ],
    [
      ["Doyle — the visions (Glenn Quinn; 1×01–1×09 \"Hero\")", 1, 1, KHAKI, WHITE],
      ["Lorne / the Host (Andy Hallett; from 2×01, regular S4)", 2, 5, GREEN, WHITE],
    ],
    [
      ["Wesley — rogue demon hunter (Alexis Denisof; from 1×10)", 1, 2, LBLUE, BLACK],
      ["Wesley — the betrayal, the exile, the dark year", 3, 4, DGRAY, WHITE],
      ["Wesley — head of Research at Wolfram & Hart", 5, 5, BLUE, WHITE],
    ],
    [
      ["Charles Gunn (J. August Richards; from 1×20 \"War Zone\")", 1, 1, ORANGE, BLACK],
      ["Gunn — series regular; the lawyer upgrade in S5", 2, 5, ORANGE, BLACK],
    ],
    [
      ["Fred Burkle in Pylea (Amy Acker; from 2×19)", 2, 2, LGREEN, BLACK],
      ["Fred — series regular; dies 5×15 \"A Hole in the World\"", 3, 5, LGREEN, BLACK],
    ],
    [
      ["Connor born 3×09; stolen to Quor'toth 3×16; back grown 3×20", 3, 3, BROWN, WHITE],
      ["Connor (Vincent Kartheiser) — regular; memory-wiped 4×22", 4, 4, BROWN, WHITE],
      ["Connor, the Reillys' son (5×18 \"Origin\", 5×22)", 5, 5, CREAM, BLACK],
    ],
    [
      ["Spike — one night in LA (1×03 \"In the Dark\")", 1, 1, SILVER, BLACK],
      ["Spike (James Marsters) — ghost, then champion", 5, 5, SILVER, BLACK],
    ],
    [
      ["Illyria, Old One in Fred's shell (from 5×15)", 5, 5, BLUE, WHITE],
    ],
    [
      ["Kate Lockley, LAPD (1×02–2×16)", 1, 2, LBLUE, BLACK],
      ["Eve — liaison to the Senior Partners", 5, 5, LGOLD, BLACK],
    ],
    [
      ["Harmony Kendall — vampire (2×17 \"Disharmony\")", 2, 2, LGOLD, BLACK],
      ["Harmony — Angel's secretary", 5, 5, LGOLD, BLACK],
    ],
    [
      ["Lindsey McDonald (Christian Kane; leaves 2×18 \"Dead End\")", 1, 2, CREAM, BLACK],
      ["Lindsey returns as \"Doyle\" (5×08–5×22)", 5, 5, GOLD, BLACK],
    ],
    [["Lilah Morgan — W&H lawyer (1×16; killed 4×12, back 4×22)", 1, 4, MAGENTA, WHITE]],
    [
      ["Darla (Julie Benz) — flashbacks, resurrected 1×22, dust 3×09", 1, 3, DGRAY, WHITE],
      ["Darla in flashback (5×20 \"The Girl in Question\")", 5, 5, DGRAY, WHITE],
    ],
    [
      ["Drusilla (2×05–2×11)", 2, 2, LPURP, BLACK],
      ["Drusilla in flashback (5×08, 5×20)", 5, 5, LPURP, BLACK],
    ],
    [
      ["Faith Lehane (1×18–1×19, 2×01 in prison)", 1, 2, BLOOD, WHITE],
      ["Faith breaks out to save Angel (4×13–4×15)", 4, 4, BLOOD, WHITE],
    ],
  ],

  villains: [
    [
      ["Wolfram & Hart — Holland, Lindsey & Lilah", 1, 1, WINE, WHITE],
      ["Darla & Drusilla", 2, 2, DGRAY, WHITE],
      ["Holtz & Sahjhan", 3, 3, BROWN, WHITE],
      ["The Beast → Angelus → Jasmine", 4, 4, BLOOD, WHITE],
      ["The Circle of the Black Thorn", 5, 5, BLACK, WHITE],
    ],
    [["Wolfram & Hart — the firm never stops", 1, 5, WINE, WHITE]],
    [["The Senior Partners — never seen, always winning", 1, 5, BLACK, WHITE]],
    [
      ["Russell Winters & the client list (1×01)", 1, 1, DGRAY, WHITE],
      ["The Covenant of Trombli & the priests of Pylea", 2, 2, CREAM, BLACK],
      ["Billy Blim, misogyny made contagious (3×06)", 3, 3, ORANGE, BLACK],
      ["The Beast (4×07–4×13)", 4, 4, DGRAY, WHITE],
      ["Marcus Hamilton (5×17–5×22)", 5, 5, GRAY, WHITE],
    ],
    [
      ["Vocah & the Raising of Darla (1×22)", 1, 1, PURPLE, WHITE],
      ["Angel's own darkness — the wine cellar (2×10)", 2, 2, NAVY, WHITE],
      ["Sahjhan, the time-shifting demon (3×07–3×17, 5×18)", 3, 3, TEAL, WHITE],
      ["Angelus, loose again (4×10–4×15)", 4, 4, NAVY, WHITE],
      ["Illyria as an enemy (5×15–5×16)", 5, 5, BLUE, WHITE],
    ],
    [
      ["Faith, hired to kill Angel (1×18–1×19)", 1, 1, BLOOD, WHITE],
      ["Holland Manners (1×21–2×15, dead and still talking)", 2, 2, CREAM, BLACK],
      ["Justine & the Holtzian fanatics", 3, 3, GRAY, WHITE],
      ["Jasmine (4×17–4×21)", 4, 4, GOLD, BLACK],
      ["Eve & Lindsey's long con (5×01–5×22)", 5, 5, LGOLD, BLACK],
    ],
    [
      ["Lindsey vs. Lilah — Special Projects infighting", 1, 2, MAGENTA, WHITE],
      ["Linwood Murrow & Gavin Park run the branch", 3, 4, LPURP, BLACK],
      ["Cyvus Vail & the Black Thorn's inner circle", 5, 5, DWINE, WHITE],
    ],
    [
      ["Kate Lockley hunting Angel", 1, 2, LBLUE, BLACK],
      ["Skip, the demon guide (3×11, 4×17)", 3, 4, TEAL, WHITE],
      ["Izzy, Senator Bruckner & Archduke Sebassis", 5, 5, PURPLE, WHITE],
    ],
  ],

  arcs: [
    [
      ["Angel finds the mission — 'we help the helpless'", 1, 1, GOLD, BLACK],
      ["Darla resurrected & Angel's dark turn", 2, 2, DGRAY, WHITE],
      ["Connor: Darla's baby, Holtz's revenge", 3, 3, BROWN, WHITE],
      ["The Beast, Angelus & Jasmine's false peace", 4, 4, BLOOD, WHITE],
      ["Running Wolfram & Hart from the inside", 5, 5, WINE, WHITE],
    ],
    [["The Shanshu Prophecy — a vampire made human (from 1×22)", 1, 5, LGOLD, BLACK]],
    [
      ["Doyle's death; the visions pass to Cordelia (1×09)", 1, 1, KHAKI, WHITE],
      ["Pylea — Cordelia crowned princess (2×19–2×22)", 2, 2, LGREEN, BLACK],
      ["The visions are killing Cordelia; she part-ascends", 3, 3, LPINK, BLACK],
      ["Cordelia possessed; she gives birth to Jasmine (4×17)", 4, 4, GOLD, BLACK],
      ["Cordelia's goodbye (5×12 \"You're Welcome\")", 5, 5, PINK, BLACK],
    ],
    [
      ["Wesley, from prissy Watcher to rogue demon hunter", 1, 2, LBLUE, BLACK],
      ["Wesley steals Connor and gets his throat cut (3×16–3×17)", 3, 3, DGRAY, WHITE],
      ["Wesley in exile; back with the team by 4×07", 4, 4, GRAY, WHITE],
      ["Wesley & Fred, then Fred's death and Illyria", 5, 5, BLUE, WHITE],
    ],
    [
      ["Gunn's crew & the war under the streets", 1, 2, ORANGE, BLACK],
      ["Gunn, Fred & Wesley — the triangle", 3, 4, LGREEN, BLACK],
      ["Gunn's brain upgrade and what it cost (5×01, 5×16)", 5, 5, ORANGE, BLACK],
    ],
    [
      ["Angel Investigations opens for business", 1, 1, CREAM, BLACK],
      ["Angel fires the team; the epiphany (2×11–2×16)", 2, 2, NAVY, WHITE],
      ["Darla's impossible pregnancy (3×07–3×09)", 3, 3, DGRAY, WHITE],
      ["Angel sunk in a steel box on the ocean floor (3×22–4×01)", 4, 4, BLACK, WHITE],
      ["Fred's death & Illyria (5×15–5×16)", 5, 5, BLUE, WHITE],
    ],
    [
      ["Kate, the LAPD and a cop who can't be told the truth", 1, 1, LBLUE, BLACK],
      ["Lorne's Pylea, the anagogic gift and Caritas", 2, 3, GREEN, WHITE],
      ["The deal: a memory-wiped Connor and a new life (4×22)", 4, 5, WINE, WHITE],
    ],
    [
      ["Angel's 250 years — Galway, Boxer Rebellion, 1952, WWII", 1, 2, BROWN, WHITE],
      ["Holtz's 18th-century vendetta comes due", 3, 3, BROWN, WHITE],
      ["Jasmine's world peace, and what it eats (4×17–4×21)", 4, 4, GOLD, BLACK],
      ["The Circle of the Black Thorn & 'Not Fade Away'", 5, 5, BLACK, WHITE],
    ],
  ],

  romances: [
    [
      ["Angel & Buffy — over, and never over (1×08, 1×19)", 1, 1, CRIM, WHITE],
      ["Angel & Darla — 150 years, and 2×15 \"Reprise\"", 2, 2, DGRAY, WHITE],
      ["Angel & Cordelia", 3, 4, LPINK, BLACK],
      ["Angel & Nina Ash, the werewolf (5×03, 5×14, 5×21)", 5, 5, KHAKI, WHITE],
    ],
    [
      ["Doyle & Cordelia (1×01–1×09)", 1, 1, KHAKI, WHITE],
      ["Cordelia & the Groosalugg (2×22–3×22)", 2, 3, LGREEN, BLACK],
      ["Cordelia & Connor (4×07–4×17)", 4, 4, BROWN, WHITE],
    ],
    [
      ["Wesley & Virginia Bryce (2×06–2×15)", 2, 2, LPURP, BLACK],
      ["Wesley pining for Fred, in silence", 3, 4, LGREEN, BLACK],
      ["Wesley & Fred — finally, for one episode (5×14–5×15)", 5, 5, BLUE, WHITE],
    ],
    [
      ["Angel & Kate — the cop who hated him", 1, 2, LBLUE, BLACK],
      ["Wesley & Lilah (3×19–4×12)", 3, 4, MAGENTA, WHITE],
      ["Wesley & Illyria — grief wearing Fred's face", 5, 5, BLUE, WHITE],
    ],
    [
      ["Gunn & Fred (3×20–4×05)", 3, 4, ORANGE, BLACK],
      ["Gunn & Anne Steele (5×22)", 5, 5, ORANGE, BLACK],
    ],
    [
      ["Spike & Drusilla (flashbacks 2×07, 5×08, 5×20)", 2, 2, LPURP, BLACK],
      ["Spike & Harmony — the worst on-again (5×09)", 5, 5, SILVER, BLACK],
    ],
    [
      ["Darla, the Master, Angelus & Dru — 400 years of family", 1, 3, DGRAY, WHITE],
      ["Gunn & Gwen Raiden (4×02, 4×16)", 4, 4, PURPLE, WHITE],
      ["Fred & Knox — the wrong admirer", 5, 5, TEAL, WHITE],
    ],
    [
      ["Lorne & the Transuding Furies (3×16)", 3, 3, MAGENTA, WHITE],
      ["Eve & Lindsey", 5, 5, GOLD, BLACK],
    ],
  ],

  recurring: [
    [
      ["Holland Manners, W&H (1×21–2×15)", 1, 2, CREAM, BLACK],
      ["Daniel Holtz (3×01–3×21)", 3, 3, BROWN, WHITE],
      ["Jasmine (4×17–4×21)", 4, 4, GOLD, BLACK],
      ["Marcus Hamilton (5×17–5×22)", 5, 5, GRAY, WHITE],
    ],
    [
      ["Det. Kate Lockley (1×02–2×16)", 1, 2, LBLUE, BLACK],
      ["Justine Cooper (3×10–4×01)", 3, 4, GRAY, WHITE],
      ["Eve, the liaison (5×01–5×22)", 5, 5, LGOLD, BLACK],
    ],
    [
      ["Merl, the paid informant (2×01–3×03)", 2, 3, TEAL, WHITE],
      ["Knox, W&H Science (4×22–5×16)", 4, 5, LGREEN, BLACK],
    ],
    [
      ["Phantom Dennis, Cordelia's ghost roommate (from 1×05)", 1, 4, SILVER, BLACK],
      ["Nina Ash, the werewolf (5×03, 5×14, 5×21)", 5, 5, KHAKI, WHITE],
    ],
    [
      ["Gunn's crew — Rondell, George & Alonna", 1, 3, ORANGE, BLACK],
      ["Gwen Raiden (4×02, 4×09, 4×16)", 4, 4, PURPLE, WHITE],
      ["Harmony Kendall, Angel's secretary", 5, 5, LGOLD, BLACK],
    ],
    [["Anne Steele & the East Hills Teen Center (2×12, 2×14, 5×22)", 2, 5, ROSE, BLACK]],
    [
      ["The Groosalugg (2×21–3×22)", 2, 3, LGREEN, BLACK],
      ["Skip, the demon guide (4×17 \"Inside Out\")", 4, 4, TEAL, WHITE],
    ],
    [
      ["Sahjhan (3×07–3×17; freed again 5×18 \"Origin\")", 3, 3, TEAL, WHITE],
      ["Linwood Murrow & Gavin Park, W&H management", 4, 4, LPURP, BLACK],
      ["Cyvus Vail, the demon who wiped Connor (5×18–5×22)", 5, 5, DWINE, WHITE],
    ],
    [
      ["Lindsey McDonald (1×01–2×18)", 1, 2, CREAM, BLACK],
      ["Lilah Morgan (3×01–4×22)", 3, 4, MAGENTA, WHITE],
      ["Numero Cinco, the last luchador (5×06)", 5, 5, ORANGE, BLACK],
    ],
  ],

  locations: [
    [
      ["The Angel Investigations office (1×01–1×22)", 1, 1, CREAM, BLACK],
      ["The Hyperion Hotel — home base", 2, 4, DWINE, WHITE],
      ["Wolfram & Hart, the LA branch", 5, 5, WINE, WHITE],
    ],
    [
      ["Wolfram & Hart's old offices (levelled by the Beast 4×08)", 1, 4, WINE, WHITE],
      ["The Circle of the Black Thorn's back rooms", 5, 5, BLACK, WHITE],
    ],
    [
      ["Cordelia's haunted apartment", 1, 4, LPINK, BLACK],
      ["Spike's spectral limbo & the W&H basement", 5, 5, SILVER, BLACK],
    ],
    [
      ["Caritas — Lorne's karaoke bar (2×01–3×03)", 2, 3, GREEN, WHITE],
      ["Lorne's office & the W&H lobby", 5, 5, LGREEN, BLACK],
    ],
    [
      ["Pylea, the demon dimension (2×19–2×22)", 2, 2, LGREEN, BLACK],
      ["Quor'toth, the darkest of dark worlds (3×16–3×20)", 3, 3, BLACK, WHITE],
      ["Jasmine's blissed-out Los Angeles (4×17–4×21)", 4, 4, GOLD, BLACK],
      ["The Deeper Well, under the Cotswolds (5×15)", 5, 5, BROWN, WHITE],
    ],
    [["LA's sewers, alleys, cemeteries and rooftops", 1, 5, DGRAY, WHITE]],
    [
      ["Flashbacks: Galway 1753, London, the Hyperion 1952", 1, 2, BROWN, WHITE],
      ["The White Room and its conduit", 3, 5, LBLUE, BLACK],
    ],
    [
      ["Kate's LAPD precinct", 1, 2, LBLUE, BLACK],
      ["The ocean floor, in a steel box (3×22–4×01)", 3, 4, NAVY, WHITE],
      ["The alley behind the Hyperion — 'let's go to work'", 5, 5, BLACK, WHITE],
    ],
    [
      ["The Beast's dark LA — the sun blotted out (4×09–4×13)", 4, 4, BLACK, WHITE],
      ["Lindsey's suburban holding dimension (5×17)", 5, 5, LGOLD, BLACK],
    ],
  ],

  crossovers: [
    [
      ["Buffy in LA — 1×08 \"I Will Remember You\", 1×19 \"Sanctuary\"", 1, 1, CRIM, WHITE],
      ["Buffy in Rome, off-screen (5×20 \"The Girl in Question\")", 5, 5, CRIM, WHITE],
    ],
    [
      ["Willow phones in (2×17), then brings the news (2×22)", 2, 2, GREEN, WHITE],
      ["Willow restores Angel's soul (4×15 \"Orpheus\")", 4, 4, GREEN, WHITE],
    ],
    [
      ["Spike & Oz deliver the Gem of Amara (1×03 \"In the Dark\")", 1, 1, SILVER, BLACK],
      ["Harmony moves to LA (2×17 \"Disharmony\")", 2, 2, LGOLD, BLACK],
      ["Spike, series regular; Harmony on the front desk", 5, 5, SILVER, BLACK],
    ],
    [
      ["Faith's LA contract & Buffy's arrival (1×18–1×19)", 1, 1, BLOOD, WHITE],
      ["Angel visits Faith in prison (2×01 \"Judgment\")", 2, 2, BLOOD, WHITE],
      ["Faith breaks out for Angelus (4×13–4×15)", 4, 4, BLOOD, WHITE],
    ],
    [
      ["Imported from Sunnydale: Angel, Cordelia, Wesley, Darla, Dru", 1, 3, LPINK, BLACK],
      ["Andrew Wells, Watcher (5×11 \"Damage\", 5×20)", 5, 5, LGOLD, BLACK],
    ],
    [
      ["Angel leaves Sunnydale (after Buffy 3×22)", 1, 1, NAVY, WHITE],
      ["Buffy dies; Willow brings the news (2×22)", 2, 2, BLACK, WHITE],
      ["Buffy is alive again; they meet off-screen (3×01)", 3, 3, CRIM, WHITE],
      ["Angel takes the amulet to Sunnydale (after 4×22)", 4, 4, LGOLD, BLACK],
      ["The amulet delivers Spike to LA (5×01)", 5, 5, SILVER, BLACK],
    ],
  ],
};

window.SEASON_META = {
  1:{years:"1999–2000 · The WB",showrunner:"Greenwalt"},
  2:{years:"2000–01 · The WB",showrunner:"Greenwalt"},
  3:{years:"2001–02 · The WB",showrunner:"Greenwalt"},
  4:{years:"2002–03 · The WB",showrunner:"Whedon, Bell & Minear"},
  5:{years:"2003–04 · The WB",showrunner:"Jeffrey Bell"},
};
