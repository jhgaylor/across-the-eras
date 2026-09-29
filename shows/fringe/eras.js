// Fringe (FOX, 2008–2013) — chart data on an EPISODE axis: columns are the 100 episodes in air order.
// Season blocks:  S1 = 1–20 | S2 = 21–43 | S3 = 44–65 | S4 = 66–87 | S5 = 88–100
// Absolute index helpers: S1eN = N | S2eN = 20+N | S3eN = 43+N | S4eN = 65+N | S5eN = 87+N
// Each entry: [label, startEp, endEp, bg, fg?]
window.CHART_AXIS = "episode";

const BLUE="#2f6db3", DBLUE="#1b3f6b", LBLUE="#b9d3ef", RED="#b3302b", DRED="#6e1a17", LRED="#efbcb8",
      AMBER="#d9962b", LAMBER="#f1d49a", PURPLE="#6a4a96", LPURP="#cfc2e6", TEAL="#237a78", LTEAL="#a9dbd6",
      GREEN="#4f8a3f", LGREEN="#bcd9ac", SLATE="#3f4a56", GRAY="#7d8790", LGRAY="#d7dce0", INK="#15191d",
      OBS="#4b4f55", WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["seasons","Seasons & showrunners"],
  ["worlds","Universes & timelines"],
  ["arcs","Mythology arcs"],
  ["villains","Villains & threats"],
  ["people","Team & recurring faces"],
];

window.ERAS = {

  // ───────────────────────────── SEASONS ─────────────────────────────
  seasons: [
    [["S1 — The Pattern", 1, 20, DBLUE, WHITE],
     ["S2 — Shapeshifters & Peter's secret", 21, 43, BLUE, WHITE],
     ["S3 — Two Olivias, one Machine", 44, 65, RED, WHITE],
     ["S4 — The timeline without Peter", 66, 87, AMBER, BLACK],
     ["S5 — 2036: the Observers' world", 88, 100, SLATE, WHITE]],

    [["Aired Sept 2008 – May 2009", 1, 20, LGRAY, BLACK],
     ["Sept 2009 – May 2010", 21, 43, LGRAY, BLACK],
     ["Sept 2010 – May 2011", 44, 65, LGRAY, BLACK],
     ["Sept 2011 – May 2012", 66, 87, LGRAY, BLACK],
     ["Sept 2012 – Jan 2013 (13-episode final season)", 88, 100, GRAY, WHITE]],

    [["Tuesdays", 1, 20, LBLUE, BLACK],
     ["Thursdays", 21, 30, LBLUE, BLACK],
     ["Mon (2×11)", 31, 31, LBLUE, BLACK],
     ["Thursdays", 32, 52, LBLUE, BLACK],
     ["Fridays — from 3×10 to the end", 53, 100, LAMBER, BLACK]],

    [["Created by J.J. Abrams, Alex Kurtzman & Roberto Orci · Jeff Pinkner runs S1", 1, 20, INK, WHITE],
     ["Jeff Pinkner & J.H. Wyman", 21, 87, INK, WHITE],
     ["J.H. Wyman", 88, 100, INK, WHITE]],
  ],

  // ───────────────────────────── WORLDS ─────────────────────────────
  // Which universe (or year) the hour mostly lives in. Blue = our side, red = Over There.
  worlds: [
    [["Our side", 1, 19, BLUE, WHITE],
     ["Crossing (Bell, 1×20)", 20, 20, PURPLE, WHITE],
     ["Our side", 21, 35, BLUE, WHITE],
     ["1985", 36, 36, AMBER, BLACK],
     ["Our side", 37, 41, BLUE, WHITE],
     ["Over There", 42, 43, RED, WHITE],
     ["There", 44, 44, RED, WHITE],
     ["Here", 45, 45, BLUE, WHITE],
     ["There", 46, 46, RED, WHITE],
     ["Here", 47, 47, BLUE, WHITE],
     ["There", 48, 48, RED, WHITE],
     ["Here", 49, 49, BLUE, WHITE],
     ["There", 50, 50, RED, WHITE],
     ["Both", 51, 51, PURPLE, WHITE],
     ["Our side", 52, 55, BLUE, WHITE],
     ["There", 56, 56, RED, WHITE],
     ["Here", 57, 57, BLUE, WHITE],
     ["1985", 58, 58, AMBER, BLACK],
     ["Here", 59, 60, BLUE, WHITE],
     ["There", 61, 61, RED, WHITE],
     ["Here", 62, 62, BLUE, WHITE],
     ["Both", 63, 63, PURPLE, WHITE],
     ["Here", 64, 64, BLUE, WHITE],
     ["2026", 65, 65, GRAY, WHITE],
     ["Here", 66, 66, BLUE, WHITE],
     ["Both", 67, 67, PURPLE, WHITE],
     ["Our side", 68, 72, BLUE, WHITE],
     ["Over There", 73, 74, RED, WHITE],
     ["Here", 75, 75, BLUE, WHITE],
     ["Both", 76, 76, PURPLE, WHITE],
     ["Our side", 77, 81, BLUE, WHITE],
     ["There", 82, 82, RED, WHITE],
     ["Both", 83, 83, PURPLE, WHITE],
     ["2036", 84, 84, SLATE, WHITE],
     ["Both", 85, 85, PURPLE, WHITE],
     ["Here", 86, 87, BLUE, WHITE],
     ["2036 — our side under the Observers", 88, 92, SLATE, WHITE],
     ["Pocket universe", 93, 93, TEAL, WHITE],
     ["2036", 94, 98, SLATE, WHITE],
     ["Both", 99, 99, PURPLE, WHITE],
     ["2036", 100, 100, SLATE, WHITE]],

    [["Original timeline — Peter was taken in 1985 and grew up here", 1, 64, DBLUE, WHITE],
     ["2026 vision; Peter erased (3×22)", 65, 65, GRAY, WHITE],
     ["Post-erasure timeline: Peter died as a boy", 66, 68, AMBER, BLACK],
     ["Post-erasure timeline — Peter is back and nobody knows him (from 4×04)", 69, 83, AMBER, BLACK],
     ["2036 (4×19)", 84, 84, SLATE, WHITE],
     ["Post-erasure timeline", 85, 87, AMBER, BLACK],
     ["2036 — Observer-occupied future", 88, 99, SLATE, WHITE],
     ["Reset to 2015 (5×13)", 100, 100, OBS, WHITE]],

    [["One universe (as far as we know)", 1, 19, LBLUE, BLACK],
     ["Two universes — the breach, the vortexes, the war", 20, 64, LRED, BLACK],
     ["The Bridge: both worlds share a room", 65, 85, LPURP, BLACK],
     ["After the Bridge closes (4×20)", 86, 87, LGRAY, BLACK]],
  ],

  // ───────────────────────────── ARCS ─────────────────────────────
  arcs: [
    [["The Pattern & ZFT", 1, 20, DBLUE, WHITE],
     ["Peter's origin: the boy from Over There", 36, 43, TEAL, WHITE],
     ["Olivia trapped Over There; Fauxlivia over here", 44, 51, DRED, WHITE],
     ["Fauxlivia's baby", 56, 61, LRED, BLACK],
     ["Peter erased — and the Observers' warning", 65, 83, AMBER, BLACK],
     ["The Observers invade (4×19)", 84, 84, OBS, WHITE],
     ["Walter's amber tapes: the plan to beat the Observers", 88, 97, SLATE, WHITE],
     ["The boy must live", 98, 100, OBS, WHITE]],

    [["Olivia's Cortexiphan past surfaces", 17, 19, LAMBER, BLACK],
     ["Jacksonville & the kids from the trial", 35, 37, AMBER, BLACK],
     ["Subject 13", 58, 58, AMBER, BLACK],
     ["Bell inside Olivia (3×16–3×19)", 59, 62, PURPLE, WHITE],
     ["Olivia's memories of Peter's timeline", 78, 81, AMBER, BLACK]],

    [["The doomsday Machine", 45, 64, DRED, WHITE]],
  ],

  // ───────────────────────────── VILLAINS ─────────────────────────────
  villains: [
    [["David Robert Jones & ZFT", 7, 20, DRED, WHITE],
     ["Jones returns in the new timeline", 73, 86, DRED, WHITE]],
    [["Mitchell Loeb", 7, 14, RED, WHITE],
     ["Newton's shapeshifters", 24, 47, RED, WHITE],
     ["Alt-Nina, Jones's plant", 72, 83, LRED, BLACK]],
    [["Walternate — Secretary Bishop", 36, 64, PURPLE, WHITE],
     ["William Bell's endgame", 86, 87, PURPLE, WHITE]],
    [["Captain Windmark & the Observers", 84, 84, OBS, WHITE],
     ["Captain Windmark & the Observers", 88, 100, OBS, WHITE]],
  ],

  // ───────────────────────────── PEOPLE ─────────────────────────────
  people: [
    [["Charlie Francis (killed 2×01; his double shot 2×04)", 1, 24, BLUE, WHITE],
     ["Alt-Charlie, Alt-Broyles & Alt-Lincoln's Fringe Division", 42, 82, RED, WHITE]],
    [["Rachel & Ella", 11, 21, LTEAL, BLACK],
     ["Sam Weiss, bowling alley oracle", 22, 64, TEAL, WHITE],
     ["Our Lincoln Lee joins Fringe (4×01)", 66, 85, GREEN, WHITE]],
    [["William Bell, in the flesh", 20, 20, PURPLE, WHITE],
     ["Bell", 42, 43, PURPLE, WHITE],
     ["Bell returns", 86, 87, PURPLE, WHITE]],
    [["September, glimpsed in almost every episode", 1, 87, LGRAY, BLACK],
     ["Donald is September", 98, 100, OBS, WHITE]],
    [["Michael (1×15)", 15, 15, GRAY, WHITE],
     ["Etta (4×19)", 84, 84, AMBER, BLACK],
     ["Etta Bishop (dies 5×04)", 88, 91, AMBER, BLACK],
     ["Michael, the Observer child", 93, 100, GRAY, WHITE]],
  ],
};

window.SEASON_META = {
  1: { years: "2008–09", showrunner: "Jeff Pinkner (with Kurtzman & Orci)" },
  2: { years: "2009–10", showrunner: "Jeff Pinkner & J.H. Wyman" },
  3: { years: "2010–11", showrunner: "Jeff Pinkner & J.H. Wyman" },
  4: { years: "2011–12", showrunner: "Jeff Pinkner & J.H. Wyman" },
  5: { years: "2012–13", showrunner: "J.H. Wyman" },
};
