// NCIS Across the Eras — chart data. Season axis, seasons 1–23 (CBS, 2003–2026).
// Each bar: [label, startSeason, endSeason, bg, fg?]. Bars within a row must not overlap.
// Mid-season handoffs are drawn at season granularity with the exact episode noted in the label.
const NAVY="#1b3a6b", BLUE="#4a7ab8", LBLUE="#a8c6e8", GOLD="#c9a227", LGOLD="#e8d18a",
      RED="#b3252b", DRED="#6e0f13", ORANGE="#d9822b", GREEN="#3f7d3f", LGREEN="#9fc98a",
      TEAL="#2a8a86", PURPLE="#6a3d9a", LPURP="#c3aee0", GRAY="#7a7f87", DGRAY="#2f3237",
      STEEL="#5c6b7a", BROWN="#7a5230", PINK="#e39ab0", WHITE="#ffffff", BLACK="#111111";

window.ERA_CATS = [
  ["showrunners","Showrunner"],
  ["network","Network, format & franchise"],
  ["roster","The MCRT roster"],
  ["arcs","Major arcs"],
  ["villains","Serial-arc big bads"],
  ["recurring","Recurring characters"],
];

window.ERAS = {
  showrunners: [
    ["Donald P. Bellisario (creator)", 1, 4, GOLD, BLACK],
    ["Shane Brennan", 5, 6, ORANGE, BLACK],
    ["Gary Glasberg (d. Sept 2016)", 7, 14, BLUE, BLACK],
    ["Cardea & Schenck", 15, 17, TEAL, WHITE],
    ["Steven D. Binder", 18, 23, NAVY, WHITE],
  ],
  network: [
    // season length / production circumstances
    [["23–24 episode seasons", 1, 4, LBLUE, BLACK], ["Writers' strike — 19 eps", 5, 5, GRAY, WHITE],
     ["24–25 episode seasons", 6, 16, LBLUE, BLACK], ["COVID-shortened", 17, 18, GRAY, WHITE],
     ["21–22 eps", 19, 20, LBLUE, BLACK], ["Strike-delayed — 10 eps", 21, 21, GRAY, WHITE],
     ["20 eps", 22, 23, LBLUE, BLACK]],
    // the franchise around it
    [["Spun off from JAG — original series alone", 1, 6, DGRAY, WHITE], ["+ NCIS: Los Angeles", 7, 11, PURPLE, WHITE],
     ["+ LA & New Orleans", 12, 18, TEAL, WHITE], ["+ Hawai'i", 19, 20, GREEN, WHITE],
     ["+ Sydney & Origins", 21, 23, RED, WHITE]],
  ],
  roster: [
    // team lead
    [["Gibbs — team lead (leaves 19×04)", 1, 19, NAVY, WHITE], ["Parker — team lead", 20, 23, GOLD, BLACK]],
    // senior field agent
    [["Tony DiNozzo (leaves 13×24)", 1, 13, ORANGE, BLACK], ["Nick Torres (from 14×01)", 14, 23, RED, WHITE]],
    // the third seat
    [["Kate Todd (dies 2×23)", 1, 2, LGOLD, BLACK], ["Ziva David (leaves 11×02)", 3, 11, DRED, WHITE],
     ["Ellie Bishop (from 11×09, leaves 18×16)", 12, 18, TEAL, WHITE], ["Jessica Knight (from S18)", 19, 23, PURPLE, WHITE]],
    // McGee
    [["McGee — recurring (from 1×07)", 1, 1, LBLUE, BLACK], ["Tim McGee — regular", 2, 23, GREEN, WHITE]],
    // the lab
    [["Abby Sciuto (leaves 15×22)", 1, 15, PINK, BLACK], ["Kasie Hines (from 15×17)", 16, 23, LGREEN, BLACK]],
    // autopsy
    [["Ducky Mallard (dies 21×02)", 1, 21, LPURP, BLACK]],
    [["Palmer — recurring (from 1×21)", 1, 9, LBLUE, BLACK], ["Jimmy Palmer — regular", 10, 23, PURPLE, WHITE]],
    // the director's office
    [["Dir. Tom Morrow", 1, 2, STEEL, WHITE], ["Dir. Jenny Shepard (dies 5×19)", 3, 5, DRED, WHITE],
     ["Dir. Leon Vance (from 5×14)", 6, 23, DGRAY, WHITE]],
    // the extra chairs
    [["Alex Quinn", 14, 14, GRAY, WHITE], ["Jack Sloane (leaves 18×07)", 15, 18, ORANGE, BLACK],
     ["Alden Parker (from S19)", 19, 23, GOLD, BLACK]],
    [["Clayton Reeves (from 13×23, dies 15×22)", 14, 15, BROWN, WHITE], ["Ziva returns (16×24–17×11)", 16, 17, DRED, WHITE]],
  ],
  arcs: [
    // the spine of each era
    [["Ari & Kate's death", 1, 3, DRED, WHITE], ["La Grenouille & Jeanne", 4, 5, PURPLE, WHITE],
     ["Somalia & Ziva's rescue", 6, 7, GOLD, BLACK], ["Port-to-Port Killer", 8, 8, BLACK, WHITE],
     ["Harper Dearing bombs NCIS", 9, 10, ORANGE, BLACK], ["Parsa & Ziva's exit", 11, 11, TEAL, WHITE],
     ["The Calling; Gibbs shot", 12, 13, RED, WHITE], ["Sloane's captor; Abby leaves", 15, 15, PINK, BLACK],
     ["Ziva's return", 16, 17, LGOLD, BLACK], ["Fornell's opioid crusade", 18, 18, BROWN, WHITE],
     ["Gibbs' last case & exit", 19, 19, NAVY, WHITE], ["Parker framed; Torres on trial", 20, 21, GRAY, WHITE],
     ["Carla Marino & Parker's revenge", 22, 23, DGRAY, WHITE]],
    // Gibbs' own long game
    [["Gibbs' Mexico amnesia (3×23–4×01)", 3, 4, LBLUE, BLACK], ["Vance disbands the team", 6, 6, DGRAY, WHITE],
     ["Rule 51 — Shannon & Kelly's killer", 7, 7, BLUE, BLACK], ["Jackson Gibbs' farewell", 11, 11, BROWN, WHITE],
     ["Gibbs' PTSD & Dr. Grace", 17, 19, LPURP, BLACK], ["Ducky's farewell (21×02)", 21, 21, LGOLD, BLACK]],
    // hearts and homes
    [["Tony undercover / Jeanne Benoit", 4, 5, PINK, BLACK], ["Vance's family; Jackie dies 10×11", 6, 10, STEEL, WHITE],
     ["McGee & Delilah", 11, 16, GREEN, WHITE], ["Palmer loses Breena (18×07)", 17, 19, LPURP, BLACK],
     ["Palmer & Knight", 20, 23, TEAL, WHITE]],
    // exits & losses — the gut-punch row
    [["Kate dies 2×23", 2, 2, DRED, WHITE], ["Jenny dies 5×19", 5, 5, PURPLE, WHITE],
     ["Mike Franks dies 8×24", 8, 8, BROWN, WHITE], ["Eli David & Jackie Vance die 10×11", 10, 10, STEEL, WHITE],
     ["Ziva leaves 11×02", 11, 11, GOLD, BLACK], ["Tony leaves 13×24", 13, 13, ORANGE, BLACK],
     ["Abby & Reeves 15×22", 15, 15, PINK, BLACK], ["Bishop leaves 18×16", 18, 18, TEAL, WHITE],
     ["Gibbs leaves 19×04", 19, 19, NAVY, WHITE], ["Ducky dies 21×02", 21, 21, LPURP, BLACK]],
  ],
  villains: [
    [["Ari Haswari", 1, 3, DRED, WHITE], ["La Grenouille (René Benoit)", 4, 5, PURPLE, WHITE],
     ["Saleem Ulman (Somalia)", 6, 7, BROWN, WHITE], ["Jonas Cobb — Port-to-Port Killer", 8, 8, BLACK, WHITE],
     ["Harper Dearing", 9, 10, ORANGE, BLACK], ["Benham Parsa", 11, 11, TEAL, WHITE],
     ["Daniel Budd — The Calling", 12, 13, RED, WHITE], ["Sahar", 16, 17, LGOLD, BLACK],
     ["The opioid ring", 18, 18, BROWN, WHITE], ["The serial-killer conspiracy", 19, 19, NAVY, WHITE],
     ["Carla Marino — mob boss", 22, 23, DGRAY, WHITE]],
    [["Ilan Bodnar", 10, 10, STEEL, WHITE], ["Sergei Mishnev (Ari's half-brother)", 12, 12, DRED, WHITE],
     ["The vigilante network (16×21–22)", 16, 16, PURPLE, WHITE], ["Parker framed for murder", 19, 20, GOLD, BLACK]],
    [["Trent Kort — CIA (dies 13×24)", 4, 13, DGRAY, WHITE], ["Gabriel Hicks & Paul Triff", 15, 15, BLACK, WHITE],
     ["Bishop, wanted cyber-terrorist", 23, 23, TEAL, WHITE]],
  ],
  recurring: [
    [["Tobias Fornell — FBI", 1, 21, BLUE, BLACK], ["Dep. Dir. Gabriel LaRoche", 22, 23, NAVY, WHITE]],
    [["Gerald — autopsy assistant", 1, 3, LBLUE, BLACK], ["Mike Franks (dies 8×24)", 4, 13, BROWN, WHITE],
     ["Dr. Grace Confalone (from 13×16)", 14, 22, LPURP, BLACK]],
    [["Jackson Gibbs (dies S11)", 6, 11, ORANGE, BLACK], ["Delilah Fielding-McGee (from S11)", 12, 22, GREEN, WHITE]],
    [["Special Agent Paula Cassidy", 1, 4, PINK, BLACK], ["Anthony DiNozzo Sr. (from 7×12)", 7, 16, GOLD, BLACK],
     ["Phineas — Gibbs' young neighbor", 17, 18, LGREEN, BLACK], ["Sawyer & the REACT agents", 19, 23, DGRAY, WHITE]],
    [["Eli David & Mossad", 6, 10, DRED, WHITE], ["Jake Malloy (Bishop's ex)", 12, 13, TEAL, WHITE],
     ["Odette Malone", 16, 18, PURPLE, WHITE], ["Vivian Kolchak (Parker's ex)", 19, 20, GRAY, WHITE],
     ["Marino's crew & NCIS: Elite", 22, 23, STEEL, WHITE]],
  ],
};

window.SEASON_META = {
  1:{years:"2003–04",showrunner:"Bellisario"}, 2:{years:"2004–05",showrunner:"Bellisario"},
  3:{years:"2005–06",showrunner:"Bellisario"}, 4:{years:"2006–07",showrunner:"Bellisario"},
  5:{years:"2007–08",showrunner:"Brennan"}, 6:{years:"2008–09",showrunner:"Brennan"},
  7:{years:"2009–10",showrunner:"Glasberg"}, 8:{years:"2010–11",showrunner:"Glasberg"},
  9:{years:"2011–12",showrunner:"Glasberg"}, 10:{years:"2012–13",showrunner:"Glasberg"},
  11:{years:"2013–14",showrunner:"Glasberg"}, 12:{years:"2014–15",showrunner:"Glasberg"},
  13:{years:"2015–16",showrunner:"Glasberg"}, 14:{years:"2016–17",showrunner:"Glasberg → Cardea & Schenck"},
  15:{years:"2017–18",showrunner:"Cardea & Schenck"}, 16:{years:"2018–19",showrunner:"Cardea & Schenck"},
  17:{years:"2019–20",showrunner:"Cardea & Schenck"}, 18:{years:"2020–21",showrunner:"Binder"},
  19:{years:"2021–22",showrunner:"Binder"}, 20:{years:"2022–23",showrunner:"Binder"},
  21:{years:"2024",showrunner:"Binder"}, 22:{years:"2024–25",showrunner:"Binder"},
  23:{years:"2025–26",showrunner:"Binder"},
};
