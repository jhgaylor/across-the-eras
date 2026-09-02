// Buffy the Vampire Slayer on skipto.tv — chart data. 7 seasons, 144 episodes.
// Seasons 1–5 aired on The WB; seasons 6–7 on UPN.
// Each entry: [label, startSeason, endSeason, bg, fg?]
const RED="#c0202c", DRED="#7a0f18", BLOOD="#8b0000", ROSE="#e2707a",
      GOLD="#e0a91b", LGOLD="#f5dd93", CREAM="#f3ead6",
      PURPLE="#6b3fa0", LPURP="#c7b0e6", MAGENTA="#a42b8c",
      GREEN="#3f7d3a", LGREEN="#a8d5a2", KHAKI="#7e8546",
      NAVY="#1b2a4a", BLUE="#5f86bf", LBLUE="#d3e2f7",
      BLACK="#141414", DGRAY="#3a3a3a", GRAY="#7f7f7f", SILVER="#dcdcdc", WHITE="#fff",
      PINK="#e0609b", LPINK="#f7c6da", ORANGE="#e07b39", TEAL="#2a8f8a", BROWN="#7a4b2a";

window.ERA_CATS = [
  ["showrunners","Showrunner, network & era"],
  ["roster","The Scooby Gang"],
  ["villains","Big Bads & mini-bosses"],
  ["arcs","Major arcs"],
  ["romances","Romances"],
  ["recurring","Recurring characters"],
  ["locations","Locations & home bases"],
];

window.ERAS = {
  showrunners: [
    ["Joss Whedon (creator & showrunner)", 1, 5, GOLD, BLACK],
    ["Marti Noxon (showrunner)", 6, 6, PURPLE, WHITE],
    ["Whedon & Noxon", 7, 7, RED, WHITE],
  ],

  roster: [
    [["Buffy Summers — the Slayer (Sarah Michelle Gellar)", 1, 7, RED, WHITE]],
    [["Willow Rosenberg (Alyson Hannigan)", 1, 7, GREEN, WHITE]],
    [["Xander Harris (Nicholas Brendon)", 1, 7, ORANGE, BLACK]],
    [
      ["Giles — Watcher & school librarian (Anthony Stewart Head)", 1, 3, BROWN, WHITE],
      ["Giles — unemployed free agent", 4, 4, CREAM, BLACK],
      ["Giles — the Magic Box", 5, 5, LGOLD, BLACK],
      ["Giles — recurring (leaves 6×08, back 6×21)", 6, 7, BROWN, WHITE],
    ],
    [
      ["Cordelia Chase (leaves after 3×22 → 'Angel')", 1, 3, LPINK, BLACK],
      ["Dawn Summers (retconned in from 5×01)", 5, 7, LPURP, BLACK],
    ],
    [
      ["Angel (regular; leaves after 3×22 → 'Angel')", 1, 3, NAVY, WHITE],
      ["Riley Finn (from 4×07; leaves 5×10)", 4, 5, KHAKI, WHITE],
    ],
    [
      ["Spike — Big Bad (from 2×03)", 2, 2, SILVER, BLACK],
      ["Spike — one-off return (3×08 'Lovers Walk')", 3, 3, GRAY, WHITE],
      ["Spike — chipped; series regular from S4", 4, 6, SILVER, BLACK],
      ["Spike — souled champion", 7, 7, LBLUE, BLACK],
    ],
    [["Oz (from 2×04; regular S3; leaves 4×06, back 4×19)", 2, 4, KHAKI, WHITE]],
    [["Tara Maclay (from 4×10 'Hush'; killed 6×19)", 4, 6, LPURP, BLACK]],
    [
      ["Anyanka — vengeance demon (3×09 'The Wish')", 3, 3, MAGENTA, WHITE],
      ["Anya Jenkins — series regular", 4, 7, LPINK, BLACK],
    ],
    [
      ["Faith — the rogue Slayer (from 3×03; coma 3×22)", 3, 3, DRED, WHITE],
      ["Faith wakes & flees to LA (4×15–4×16)", 4, 4, BLOOD, WHITE],
      ["Faith returns from prison (from 7×17)", 7, 7, DRED, WHITE],
    ],
    [
      ["Joyce Summers (dies 5×16 'The Body')", 1, 5, ROSE, BLACK],
      ["Andrew Wells — Trio member turned houseguest", 6, 7, LGOLD, BLACK],
    ],
    [["Kennedy & the Potential Slayers", 7, 7, GOLD, BLACK]],
  ],

  villains: [
    [
      ["The Master (Heinrich Joseph Nest)", 1, 1, BLACK, WHITE],
      ["Angelus, Spike & Drusilla", 2, 2, DRED, WHITE],
      ["Mayor Richard Wilkins III & the Ascension", 3, 3, GREEN, WHITE],
      ["Adam & the Initiative", 4, 4, KHAKI, WHITE],
      ["Glory, the Beast", 5, 5, PINK, BLACK],
      ["The Trio → Dark Willow", 6, 6, PURPLE, WHITE],
      ["The First Evil", 7, 7, BLACK, WHITE],
    ],
    [
      ["Darla, of the Order of Aurelius (dusted 1×07)", 1, 1, DGRAY, WHITE],
      ["Angelus (from 2×14 'Innocence')", 2, 2, NAVY, WHITE],
      ["Faith turns (from 3×15 'Consequences')", 3, 3, BLOOD, WHITE],
      ["Prof. Maggie Walsh (killed 4×13)", 4, 4, GRAY, WHITE],
      ["The Knights of Byzantium", 5, 5, SILVER, BLACK],
      ["Warren Mears", 6, 6, DGRAY, WHITE],
      ["Caleb (from 7×18 'Dirty Girls')", 7, 7, DRED, WHITE],
    ],
    [
      ["The Anointed One (dusted 2×03)", 1, 2, LGOLD, BLACK],
      ["Mr. Trick", 3, 3, TEAL, WHITE],
      ["The Gentlemen (4×10 'Hush')", 4, 4, CREAM, BLACK],
      ["Dracula (5×01) & Doc", 5, 5, MAGENTA, WHITE],
      ["Jonathan & Andrew — the other two thirds", 6, 6, LGOLD, BLACK],
      ["The Bringers & the Turok-Han Ubervamps", 7, 7, DGRAY, WHITE],
    ],
    [
      ["Ethan Rayne — chaos mage (2×06, 2×08, 3×06, 4×12)", 2, 4, ORANGE, BLACK],
      ["Ben, Glory's human half", 5, 5, LPINK, BLACK],
      ["Rack, the magic dealer", 6, 6, MAGENTA, WHITE],
      ["Spike under The First's trigger", 7, 7, SILVER, BLACK],
    ],
    [
      ["Drusilla (2×03–2×22; returns 3×08, 5×14, 7×07)", 2, 3, LPURP, BLACK],
      ["Darla in flashback (5×07 'Fool for Love')", 5, 5, DGRAY, WHITE],
    ],
    [
      ["The Judge (2×13–2×14)", 2, 2, BLUE, WHITE],
      ["Kakistos & the Sisterhood of Jhe", 3, 3, BROWN, WHITE],
      ["The Initiative's demon-hunting program", 4, 4, LGREEN, BLACK],
      ["Glory's scabby minions", 5, 5, LPINK, BLACK],
      ["Sweet, the singing demon (6×07)", 6, 6, RED, WHITE],
      ["The Hellmouth beneath the new school", 7, 7, BLOOD, WHITE],
    ],
  ],

  arcs: [
    [
      ["The Master's prophecy — Buffy dies at sixteen", 1, 1, BLACK, WHITE],
      ["Angel's curse breaks; Angelus hunts the Scoobies", 2, 2, NAVY, WHITE],
      ["Faith's fall & the Mayor's Ascension", 3, 3, GREEN, WHITE],
      ["The Initiative, Adam & the government's monsters", 4, 4, KHAKI, WHITE],
      ["Dawn is the Key; Joyce dies; Buffy dies", 5, 5, PINK, BLACK],
      ["Growing up hurts — resurrection, addiction, ruin", 6, 6, PURPLE, WHITE],
      ["The Potentials & the last stand on the Hellmouth", 7, 7, RED, WHITE],
    ],
    [
      ["Buffy & Angel's doomed romance", 1, 3, NAVY, WHITE],
      ["Buffy & Riley — loving a normal boy", 4, 5, KHAKI, WHITE],
      ["Buffy & Spike — the dark year", 6, 6, DGRAY, WHITE],
      ["Spike wins back his soul", 7, 7, SILVER, BLACK],
    ],
    [
      ["Willow's magic — from floating pencils to real power", 3, 5, LGREEN, BLACK],
      ["Magic as addiction; Rack, Warren, Dark Willow", 6, 6, PURPLE, WHITE],
      ["Willow rebuilds after Tara", 7, 7, GREEN, WHITE],
    ],
    [
      ["Faith arrives, kills a man, defects, falls into a coma", 3, 3, BLOOD, WHITE],
      ["Faith wakes, swaps bodies with Buffy, flees to LA", 4, 4, DRED, WHITE],
      ["Faith comes home to fight beside Buffy", 7, 7, BLOOD, WHITE],
    ],
    [
      ["Buffy's first death — 'Prophecy Girl' (1×12)", 1, 1, RED, WHITE],
      ["Kendra — a second Slayer is called (2×09)", 2, 2, BROWN, WHITE],
      ["The Cruciamentum — the Council turns on Buffy (3×12)", 3, 3, CREAM, BLACK],
      ["The Council reasserts itself (5×12 'Checkpoint')", 5, 5, LBLUE, BLACK],
      ["The First blows up the Watchers' Council (7×09)", 7, 7, BLACK, WHITE],
    ],
    [
      ["Joyce's illness & death (5×09–5×17)", 5, 5, ROSE, BLACK],
      ["Buffy pulled out of heaven; paying the rent", 6, 6, DGRAY, WHITE],
      ["Buffy as the general nobody wants to follow", 7, 7, GOLD, BLACK],
    ],
    [
      ["High school is hell — Sunnydale High burns (3×22)", 1, 3, LGOLD, BLACK],
      ["College at UC Sunnydale", 4, 4, LBLUE, BLACK],
      ["Adulthood: rent, the Doublemeat, guardianship of Dawn", 6, 6, BROWN, WHITE],
      ["New Sunnydale High & the Seal of Danzalthar", 7, 7, TEAL, WHITE],
    ],
    [
      ["The Angel-verse: 'Angel' spins off to LA; crossovers", 4, 5, MAGENTA, WHITE],
      ["Angel returns for the end (7×21–7×22)", 7, 7, NAVY, WHITE],
    ],
  ],

  romances: [
    [
      ["Buffy & Angel", 1, 3, NAVY, WHITE],
      ["Buffy & Riley (4×07–5×10)", 4, 5, KHAKI, WHITE],
      ["Buffy & Spike", 6, 7, SILVER, BLACK],
    ],
    [
      ["Owen Thurman (1×05)", 1, 1, CREAM, BLACK],
      ["Scott Hope (3×03–3×06)", 3, 3, LGREEN, BLACK],
      ["Parker Abrams (4×02–4×05)", 4, 4, GRAY, WHITE],
      ["The Buffybot loves Spike (5×18–6×02)", 5, 6, LBLUE, BLACK],
    ],
    [
      ["Willow's crush on Xander", 1, 1, LGREEN, BLACK],
      ["Willow & Oz (from 2×15; Oz leaves 4×06)", 2, 3, KHAKI, WHITE],
      ["Willow & Tara (from 4×10; Tara killed 6×19)", 4, 6, LPURP, BLACK],
      ["Willow & Kennedy (from 7×13)", 7, 7, GOLD, BLACK],
    ],
    [
      ["Xander's crush on Buffy", 1, 1, ORANGE, BLACK],
      ["Xander & Cordelia (from 2×10; over in 3×08)", 2, 3, LPINK, BLACK],
      ["Xander & Anya (from 3×22; jilted at the altar 6×16)", 4, 6, MAGENTA, WHITE],
      ["Xander & Anya — unfinished business", 7, 7, LPINK, BLACK],
    ],
    [
      ["Giles & Jenny Calendar (killed 2×17)", 1, 2, BROWN, WHITE],
      ["Giles & Joyce — the 'Band Candy' incident (3×06)", 3, 3, ROSE, BLACK],
      ["Giles & Olivia", 4, 4, TEAL, WHITE],
      ["Anya & Xander run the Magic Box", 5, 5, LGOLD, BLACK],
    ],
    [
      ["Spike & Drusilla", 2, 3, LPURP, BLACK],
      ["Spike & Harmony", 4, 5, LGOLD, BLACK],
      ["Anya & Spike — the worst mistake (6×18)", 6, 6, DGRAY, WHITE],
    ],
    [
      ["Joyce & Ted the robot (2×11)", 2, 2, GRAY, WHITE],
      ["Dawn's crush on Xander", 5, 6, LPURP, BLACK],
      ["Dawn & RJ (7×06 'Him')", 7, 7, ROSE, BLACK],
    ],
  ],

  recurring: [
    [
      ["Joyce Summers", 1, 5, ROSE, BLACK],
      ["Clem, the friendly loose-skinned demon", 6, 7, LGREEN, BLACK],
    ],
    [
      ["Principal Flutie (eaten 1×06)", 1, 1, CREAM, BLACK],
      ["Principal Snyder (from 1×09; eaten 3×22)", 2, 3, GRAY, WHITE],
      ["Principal Robin Wood", 7, 7, BROWN, WHITE],
    ],
    [
      ["Jenny Calendar (killed 2×17)", 1, 2, TEAL, WHITE],
      ["Wesley Wyndam-Pryce (from 3×14 → 'Angel')", 3, 3, LBLUE, BLACK],
      ["Maggie Walsh & the Initiative brass", 4, 4, KHAKI, WHITE],
      ["Quentin Travers & the Watchers' Council", 5, 5, CREAM, BLACK],
      ["The Watchers' Council destroyed (7×09)", 7, 7, BLACK, WHITE],
    ],
    [["Jonathan Levinson", 2, 7, LGOLD, BLACK]],
    [
      ["Harmony Kendall — Cordette", 2, 3, LPINK, BLACK],
      ["Harmony — vampire (from 3×22)", 4, 5, SILVER, BLACK],
    ],
    [
      ["Amy Madison (1×03; a rat from 3×11)", 1, 3, PURPLE, WHITE],
      ["Amy restored — the magic pusher", 6, 7, MAGENTA, WHITE],
    ],
    [
      ["Larry Blaisdell (1×06–3×22)", 1, 3, ORANGE, BLACK],
      ["Riley's Initiative squad — Forrest & Graham", 4, 5, KHAKI, WHITE],
      ["The Trio: Warren, Jonathan & Andrew", 6, 6, DGRAY, WHITE],
      ["The Potentials: Kennedy, Vi, Rona, Amanda, Molly", 7, 7, GOLD, BLACK],
    ],
    [
      ["Kendra, the second Slayer (2×09–2×21)", 2, 2, BROWN, WHITE],
      ["D'Hoffryn & the vengeance demons", 3, 3, MAGENTA, WHITE],
      ["Halfrek, Anya's demon past & Cecily", 5, 7, LPURP, BLACK],
    ],
    [
      ["Devon & Dingoes Ate My Baby (the Bronze house band)", 2, 4, BLUE, WHITE],
      ["Angel crosses over from LA (4×08, 4×15–16, 5×17)", 5, 5, NAVY, WHITE],
      ["Angel returns for the end (7×21–7×22)", 7, 7, NAVY, WHITE],
    ],
  ],

  locations: [
    [
      ["Sunnydale High School", 1, 3, LGOLD, BLACK],
      ["UC Sunnydale", 4, 5, LBLUE, BLACK],
      ["Sunnydale High rebuilt — Buffy the counselor", 7, 7, TEAL, WHITE],
    ],
    [["The Bronze", 1, 7, MAGENTA, WHITE]],
    [["1630 Revello Drive — the Summers house", 1, 7, ROSE, BLACK]],
    [
      ["The school library — Scooby HQ", 1, 3, BROWN, WHITE],
      ["Giles' apartment", 4, 4, CREAM, BLACK],
      ["The Magic Box (5×02–7×15)", 5, 7, GOLD, BLACK],
    ],
    [
      ["Angel's mansion on Crawford Street", 2, 3, NAVY, WHITE],
      ["The Initiative, under Lowell House", 4, 4, KHAKI, WHITE],
      ["Spike's crypt, Restfield Cemetery", 5, 7, GRAY, WHITE],
    ],
    [["Sunnydale's cemeteries — nightly patrol", 1, 7, DGRAY, WHITE]],
    [
      ["The Master's buried lair & the Hellmouth", 1, 1, BLACK, WHITE],
      ["The factory — Spike & Drusilla's court", 2, 2, DGRAY, WHITE],
      ["City Hall — the Mayor's office", 3, 3, GREEN, WHITE],
      ["Prof. Walsh's lab & Adam's cave", 4, 4, LGREEN, BLACK],
      ["Glory's penthouse & the tower", 5, 5, PINK, BLACK],
      ["The Trio's basement lair & Rack's place", 6, 6, PURPLE, WHITE],
      ["The vineyard & the Turok-Han caverns", 7, 7, BLOOD, WHITE],
    ],
    [
      ["Los Angeles ('Anne', then the 'Angel' crossovers)", 3, 5, LPURP, BLACK],
      ["The Sunnydale crater", 7, 7, BLACK, WHITE],
    ],
  ],
};

window.SEASON_META = {
  1:{years:"1997 · The WB",showrunner:"Whedon"},
  2:{years:"1997–98 · The WB",showrunner:"Whedon"},
  3:{years:"1998–99 · The WB",showrunner:"Whedon"},
  4:{years:"1999–2000 · The WB",showrunner:"Whedon"},
  5:{years:"2000–01 · The WB",showrunner:"Whedon"},
  6:{years:"2001–02 · UPN",showrunner:"Noxon"},
  7:{years:"2002–03 · UPN",showrunner:"Whedon & Noxon"},
};
