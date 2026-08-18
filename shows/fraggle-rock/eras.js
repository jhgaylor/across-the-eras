// Fraggle Rock (HBO, 1983-1987) - chart data on a SEASON axis: 5 columns, 96 episodes
// (S1: 24, S2: 24, S3: 22, S4: 13, S5: 13). TVmaze's s/e numbering used verbatim, no specials, no gaps.
// This is a low-serialization, mostly-standalone puppet show: there are no season-long plots to chart, so the
// rows below track the show's recurring cast, locations and formats (Gorgs, Doozers, Trash Heap, Traveling
// Matt) rather than invented arcs. TVmaze summaries only exist for 14/96 episodes (this is a sparsely-catalogued
// 1980s kids' show); bars are grounded in those summaries, in episode titles (also from TVmaze), and in the
// show's TVmaze main-cast list — see NOTES.md for what's recalled-from-general-knowledge vs. source-confirmed.
window.CHART_AXIS = "season";

const ORANGE="#ff7a3d", DORANGE="#8a3f18", LORANGE="#ffc9a3",
      RED="#d94452", PINKRED="#e0607a",
      PURPLE="#9163c9", LPURP="#d9c9f0",
      TEAL="#2f9e78", LTEAL="#a8e0cb",
      GOLD="#e0a83e", LGOLD="#f2dba3",
      BROWN="#8a5a34", TRASHBROWN="#6f4e37",
      GORGGREEN="#5c7a3d", LGREEN="#a7c47f",
      SKYBLUE="#3d7ea6", LBLUE="#a9d1e6",
      GRAY="#6b7280", LGRAY="#d9cfc0", DGRAY="#372b22",
      BLACK="#1c0a02", WHITE="#ffffff";

window.ERA_CATS = [
  ["world","Fraggle Rock, season by season"],
  ["fraggles","The Fraggle Five"],
  ["workshop","Doc, Sprocket & the workshop"],
  ["gorgs","The Gorgs & the garden"],
  ["doozers","The Doozers"],
  ["trashheap","Marjory the Trash Heap"],
  ["matt","Uncle Traveling Matt"],
];

window.ERAS = {
  world: [
    [
      ["Establishing the world — the Fraggle Five, the Gorgs, the Doozers and Doc's workshop, all introduced in the pilot", 1, 1, ORANGE, BLACK],
      ["Expanding the ensemble — Wembley's Egg, Doozer politics, more of the Gorg family", 2, 2, TEAL, WHITE],
      ["A shorter season — the Christmas special ('The Bells of Fraggle Rock'), Boober's fears tested in 'Scared Silly'", 3, 3, PURPLE, WHITE],
      ["Episode order cut to 13 — tighter, more character-driven stories", 4, 4, GOLD, BLACK],
      ["Final season — builds toward the series finale, 'Change of Address'", 5, 5, DGRAY, WHITE],
    ],
    [
      ["24-episode seasons", 1, 2, LGRAY, BLACK],
      ["22-episode season", 3, 3, GRAY, WHITE],
      ["13-episode seasons", 4, 5, DGRAY, WHITE],
    ],
    [
      ["Jim Henson (creator/executive producer) & Jerry Juhl (head writer) — same creative team, start to finish", 1, 5, ORANGE, BLACK],
    ],
  ],
  fraggles: [
    [
      ["Gobo Fraggle — Uncle Matt's nephew, the dutiful, reluctant leader of the group", 1, 5, ORANGE, BLACK],
    ],
    [
      ["Mokey Fraggle — poet, artist, spiritual seeker; briefly mistaken for the Trash Heap's successor in the S1 finale", 1, 5, PURPLE, WHITE],
    ],
    [
      ["Wembley Fraggle — sweet, chronically indecisive, prone to 'Wembling'", 1, 5, TEAL, WHITE],
    ],
    [
      ["Boober Fraggle — anxious, superstitious, doom-predicting; does the laundry and the cooking", 1, 5, BROWN, WHITE],
    ],
    [
      ["Red Fraggle — athletic, competitive, fiercely independent", 1, 5, RED, WHITE],
    ],
  ],
  workshop: [
    [
      ["Doc — inventor and tinkerer, shares his workshop with Sprocket and never learns Fraggles are real", 1, 5, GOLD, BLACK],
    ],
    [
      ["Sprocket — Doc's dog, the workshop resident most likely to actually run into a Fraggle", 1, 5, LGRAY, BLACK],
    ],
  ],
  gorgs: [
    [
      ["Pa Gorg, Ma Gorg & Junior Gorg — 'giants' guarding their garden from radish-thieving Fraggles", 1, 5, GORGGREEN, WHITE],
    ],
    [
      ["Ma Gorg — played by Myra Fried", 1, 1, LGRAY, BLACK],
      ["Ma Gorg recast — Cheryl Wagner takes over the role", 2, 5, GORGGREEN, WHITE],
    ],
    [
      ["Junior Gorg — lonely, put-upon son; drifts toward genuine (if bumbling) friendship with the Fraggles across the run", 1, 5, LGREEN, BLACK],
    ],
  ],
  doozers: [
    [
      ["The Doozers — tiny, hard-hatted builders whose radish-crystal towers the Fraggles eat as a delicacy", 1, 5, BROWN, WHITE],
    ],
    [
      ["Cotterpin Doozer — the engineer who questions Doozer tradition, eventually put on trial for it (5×04, 'The Trial of Cotterpin Doozer')", 1, 5, GOLD, BLACK],
    ],
  ],
  trashheap: [
    [
      ["Marjory the Trash Heap — oracle of the dump, consulted for wisdom throughout the run", 1, 5, TRASHBROWN, WHITE],
    ],
    [
      ["Mokey mistaken for the 'new Trash Heap' after a shared Fraggle dream (1×24, 'New Trash Heap in Town')", 1, 1, PURPLE, WHITE],
      ["Marjory temporarily gone — 'The Trash Heap Doesn't Live Here Anymore' (2×03)", 2, 2, DGRAY, WHITE],
    ],
  ],
  matt: [
    [
      ["Uncle Traveling Matt — Gobo's uncle, exploring 'Outer Space' (the human world) and sending back postcard reports throughout the run", 1, 5, SKYBLUE, WHITE],
    ],
    [
      ["Sets off on his expedition in the pilot (1×01, 'Beginnings')", 1, 1, ORANGE, BLACK],
      ["'Uncle Matt Comes Home' (2×05)", 2, 2, SKYBLUE, WHITE],
      ["'Uncle Matt's Discovery' (4×04)", 4, 4, LBLUE, BLACK],
    ],
  ],
};

window.SEASON_META = {
  1: { years: "1983", showrunner: "Jim Henson & Jerry Juhl" },
  2: { years: "1984", showrunner: "Jim Henson & Jerry Juhl" },
  3: { years: "1984-1985", showrunner: "Jim Henson & Jerry Juhl" },
  4: { years: "1986", showrunner: "Jim Henson & Jerry Juhl" },
  5: { years: "1987", showrunner: "Jim Henson & Jerry Juhl" },
};
