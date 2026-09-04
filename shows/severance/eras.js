// Severance (Apple TV+, 2022– ) — chart data on an EPISODE axis: columns are the 19 episodes in order
// (1–9 = S1, 10–19 = S2). Each entry: [label, startEp, endEp, bg, fg?]
window.CHART_AXIS = "episode";
const TEAL="#1f8f80", DTEAL="#0f4d47", LTEAL="#bfe3dd", NAVY="#22364d", BLUE="#4d7ea8", LBLUE="#cddced",
      GREEN="#4f8a3f", LGREEN="#b9d7a8", RED="#b3352f", DRED="#6d1a17", ORANGE="#d98b3a", GOLD="#d8c07a",
      PURPLE="#6a4a86", LPURP="#cdbde0", PINK="#e3a7ae", BROWN="#7a5a3c", GRAY="#8a8a8a", LGRAY="#dcdcdc",
      DGRAY="#2f3436", WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["seasons","Season arc"],
  ["arcs","Major arcs"],
  ["secrets","Lumon's secrets"],
  ["management","Lumon management"],
  ["places","Places & set pieces"],
  ["recurring","Recurring characters"],
];

window.ERAS = {
  seasons: [
    [["S1 — the four, the Break Room, the Overtime Contingency", 1, 9, TEAL, WHITE], ["S2 — after the OTC: Cold Harbor", 10, 19, NAVY, WHITE]],
    [["Aired Feb–Apr 2022", 1, 9, LTEAL, BLACK], ["Aired Jan–Mar 2025", 10, 19, LTEAL, BLACK]],
    [["In-show: a few weeks at Lumon", 1, 9, LBLUE, BLACK], ["Five months later", 10, 19, LBLUE, BLACK]],
    [["Created by Dan Erickson · Ben Stiller directs most of the run", 1, 19, DGRAY, WHITE]],
  ],
  arcs: [
    [["Mark S. leads MDR; Petey's crumbs", 1, 9, TEAL, WHITE], ["Outie Mark reintegrates with Reghabi (from 2×03)", 12, 17, PURPLE, WHITE], ["Mark, Devon & Cobel play for Gemma", 18, 19, DTEAL, WHITE]],
    [["Helly R. arrives and will not stop rebelling", 1, 8, RED, WHITE], ["She is Helena Eagan (1×09)", 9, 9, DRED, WHITE], ["Helena posing as Helly", 10, 13, DRED, WHITE], ["Helly R., back with the team", 14, 19, RED, WHITE]],
    [["Irving B. — the paintings, the map, the Black Hallway", 1, 13, NAVY, WHITE], ["Irving exposes Helena, then is put on a northbound train", 14, 14, BLUE, WHITE], ["Irving's last stop: dinner with Burt & Fields", 15, 15, LBLUE, BLACK]],
    [["Burt G. of Optics & Design — retires 1×07", 2, 7, LPURP, BLACK], ["Burt back at Lumon, married to Fields", 12, 15, PURPLE, WHITE]],
    [["Dylan G. finds the Overtime Contingency", 6, 9, ORANGE, BLACK], ["Dylan's outie: Gretchen, the visitation suite, the resignation", 12, 18, BROWN, WHITE], ["Dylan holds the door", 19, 19, ORANGE, BLACK]],
    [["Ms. Casey's wellness sessions", 3, 8, LGREEN, BLACK], ["She is Gemma, and she is alive (1×09)", 9, 9, GREEN, WHITE], ["Gemma on the testing floor — the 25 rooms", 16, 19, GREEN, WHITE]],
    [["Harmony Cobel runs the floor as Mrs. Selvig next door", 1, 9, GOLD, BLACK], ["Cobel cast out; Lumon hunts her", 10, 16, GRAY, WHITE], ["Salt's Neck: Cobel invented severance", 17, 17, GOLD, BLACK], ["Cobel, on her own terms", 18, 19, GOLD, BLACK]],
  ],
  secrets: [
    [["Petey Kilmer: reintegrated, deteriorating, dead by 1×04", 1, 4, DRED, WHITE], ["Reghabi surfaces again", 12, 16, PURPLE, WHITE]],
    [["The Overtime Contingency: found, then fired", 6, 9, ORANGE, BLACK], ["Lumon grapples with the fallout", 10, 11, LGRAY, BLACK]],
    [["\"Finish Cold Harbor\"", 10, 18, NAVY, WHITE], ["Cold Harbor completed", 19, 19, DTEAL, WHITE]],
    [["What the numbers are for", 1, 15, TEAL, WHITE], ["Tempers, refined into Gemma's rooms", 16, 19, DTEAL, WHITE]],
    [["The Kier Eagan catechism — the Compunction Statement, the Handbook, the Nine Principles", 1, 19, LGRAY, BLACK]],
  ],
  management: [
    [["Cobel, floor manager", 1, 9, GOLD, BLACK], ["Milchick promoted to floor manager", 10, 19, DTEAL, WHITE]],
    [["Seth Milchick, Cobel's deputy", 1, 9, TEAL, WHITE], ["Miss Huang, deputy manager", 10, 19, LTEAL, BLACK]],
    [["Doug Graner, chief of security", 1, 7, GRAY, WHITE], ["Mr. Drummond", 11, 19, DGRAY, WHITE]],
    [["Natalie Kalen, the Board's voice", 3, 14, LPURP, BLACK]],
    [["Jame Eagan, glimpsed", 3, 11, DGRAY, WHITE], ["Jame Eagan, in the room", 18, 19, BLACK, WHITE]],
    [["Dr. Mauer and the testing floor", 14, 19, GREEN, WHITE]],
  ],
  places: [
    [["Macrodata Refinement", 1, 19, TEAL, WHITE]],
    [["Optics & Design", 2, 7, LPURP, BLACK], ["O&D again, with Burt back", 12, 15, PURPLE, WHITE]],
    [["The Break Room", 3, 9, DRED, WHITE]],
    [["Wellness Center", 3, 8, LGREEN, BLACK], ["The testing floor", 16, 19, GREEN, WHITE]],
    [["The goat department (Mammalians Nurturable)", 5, 5, BROWN, WHITE], ["Lorne and the herd", 12, 12, BROWN, WHITE], ["What the goats were for", 19, 19, BROWN, WHITE]],
    [["Perpetuity Wing", 3, 3, GOLD, BLACK], ["The birthing cabin", 6, 6, PINK, BLACK], ["Ricken's book party", 8, 9, LBLUE, BLACK], ["The export halls & the Black Hallway", 12, 12, NAVY, WHITE], ["Woe's Hollow (the ORTBO)", 13, 13, BLUE, WHITE], ["Salt's Neck", 17, 17, GRAY, WHITE], ["The marching band", 19, 19, GOLD, BLACK]],
  ],
  recurring: [
    [["Petey Kilmer", 1, 4, DRED, WHITE], ["Petey (2×03)", 12, 12, DRED, WHITE]],
    [["Asal Reghabi", 6, 7, PURPLE, WHITE], ["Reghabi returns", 12, 16, PURPLE, WHITE]],
    [["Alexa, Devon's friend", 2, 7, PINK, BLACK], ["Gretchen, Jim & Merrick George", 12, 19, BROWN, WHITE]],
    [["Judd, at the security desk", 1, 7, GRAY, WHITE], ["Judd", 11, 14, GRAY, WHITE]],
    [["Felicia of O&D", 3, 7, LPURP, BLACK], ["Felicia", 12, 14, LPURP, BLACK]],
    [["Elizabeth", 4, 7, LGRAY, BLACK], ["Replacement MDR — Mark W., Gwendolyn Y., Dario R.", 10, 11, LBLUE, BLACK], ["Elizabeth", 14, 14, LGRAY, BLACK]],
    [["Dylan's son Jim (the OTC at home)", 6, 6, ORANGE, BLACK], ["Ricken's circle — Patton, Rebeck, Danise", 8, 11, LGREEN, BLACK], ["Cecily", 16, 19, LGRAY, BLACK]],
    [["Gabby & Angelo Arteta", 5, 9, GOLD, BLACK]],
  ],
};

window.SEASON_META = {
  1: { years: "2022", showrunner: "Dan Erickson" },
  2: { years: "2025", showrunner: "Dan Erickson" },
};
