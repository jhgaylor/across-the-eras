// Community (NBC 2009–2014, Yahoo! Screen 2015) — chart data on a SEASON axis: 6 columns, 110 episodes.
// Each entry: [label, startSeason, endSeason, bg, fg?]. Bars within a row must not overlap;
// departures and one-off episodes are drawn at season granularity with the exact episode noted in the label.
const GREEN="#2e7d3a", DGREEN="#1b4d24", LGREEN="#b9dfb9", GOLD="#d4a62a", LGOLD="#f0dc94", GAS="#8a8f3a",
      LGAS="#d7d9a1", RED="#a8322d", DRED="#6b1a17", BLUE="#2c5a8c", LBLUE="#b3cde8", PURPLE="#5d3f7a",
      LPURPLE="#cdb7e0", ORANGE="#d2691e", LORANGE="#f3c9a3", PINK="#c2527a", LPINK="#f0c1d2",
      TEAL="#23767a", LTEAL="#a9dcdc", GRAY="#7c7c7c", DGRAY="#333", CREAM="#efe7d2", YAHOO="#6001d2",
      WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["eras","Showrunner & network"],
  ["group","The study group"],
  ["experiments","Format experiments"],
  ["genre","Genre & parody episodes"],
  ["arcs","Greendale arcs"],
  ["recurring","Faculty & recurring"],
];

window.ERAS = {
  eras: [
    [["Dan Harmon", 1, 3, GREEN, WHITE], ["Guarascio & Port: the \"gas leak year\" (Harmon fired)", 4, 4, GAS, WHITE], ["Dan Harmon returns (with Chris McKenna)", 5, 6, GREEN, WHITE]],
    [["Harmon & the Russo brothers: the Russos direct the pilot and exec-produce seasons 1–3", 1, 3, LGREEN, BLACK], ["Harmon, McKenna, the Russos and several other writers gone; 13 episodes", 4, 4, LGAS, BLACK], ["Harmon, McKenna and the Russos return", 5, 5, LGREEN, BLACK], ["Yahoo! revival: Harmon & McKenna run season 6", 6, 6, LGREEN, BLACK]],
    [["NBC Thursdays", 1, 5, BLUE, WHITE], ["Yahoo! Screen: 13 episodes streamed weekly", 6, 6, YAHOO, WHITE]],
    [["Benched mid-season: pulled Dec 2011, back March 2012 (3×11) after #SixSeasonsAndAMovie", 3, 3, DGRAY, WHITE], ["Premiere delayed from Oct 2012 to Feb 2013", 4, 4, GRAY, WHITE], ["Cancelled by NBC, May 2014", 5, 5, DRED, WHITE], ["Revived by Yahoo!, then Yahoo! Screen shut down in Jan 2016", 6, 6, LPURPLE, BLACK]],
  ],
  group: [
    [["Jeff Winger (Joel McHale): student; graduates in 4×13", 1, 4, GREEN, WHITE], ["Professor Winger: back to teach law from 5×01", 5, 6, DGREEN, WHITE]],
    [["Britta Perry (Gillian Jacobs)", 1, 6, PINK, WHITE]],
    [["Abed Nadir (Danny Pudi)", 1, 6, TEAL, WHITE]],
    [["Annie Edison (Alison Brie)", 1, 6, LBLUE, BLACK]],
    [["Troy Barnes (Donald Glover)", 1, 4, BLUE, WHITE], ["Troy sets sail with LeVar Burton: 5×05 is his last episode", 5, 5, LBLUE, BLACK]],
    [["Shirley Bennett (Yvette Nicole Brown)", 1, 5, ORANGE, WHITE], ["Shirley: guest only (6×01, 6×13)", 6, 6, LORANGE, BLACK]],
    [["Pierce Hawthorne (Chevy Chase)", 1, 3, GOLD, BLACK], ["Chase leaves mid-season: voice only in 4×09, absent from 4×10 and 4×12, last on screen 4×13", 4, 4, LGOLD, BLACK], ["Cameo in 5×01; Pierce dies off-screen, 5×04", 5, 5, GRAY, WHITE]],
    [["Señor Chang (Ken Jeong): the fake Spanish teacher", 1, 1, RED, WHITE], ["Chang the student", 2, 2, RED, WHITE], ["Chang the security guard, then dictator", 3, 3, DRED, WHITE], ["\"Kevin\": Changnesia", 4, 4, LPINK, BLACK], ["Chang, rehabilitated-ish", 5, 6, RED, WHITE]],
    [["Dean Pelton (Jim Rash): recurring", 1, 2, LPURPLE, BLACK], ["Dean Pelton: series regular", 3, 6, PURPLE, WHITE]],
    [["Buzz Hickey (Jonathan Banks) fills the gap", 5, 5, DGRAY, WHITE], ["Frankie Dart (Paget Brewster) & Elroy Patashnik (Keith David)", 6, 6, YAHOO, WHITE]],
  ],
  experiments: [
    [["Paintball: 1×23 \"Modern Warfare\"", 1, 1, RED, WHITE], ["Paintball western + space opera: 2×23–2×24", 2, 2, RED, WHITE], ["Pillows vs. Blankets: 3×13–3×14", 3, 3, LORANGE, BLACK], ["The floor is lava: 5×05 \"Geothermal Escapism\"", 5, 5, ORANGE, WHITE], ["Spy paintball: 6×11 \"Modern Espionage\"", 6, 6, RED, WHITE]],
    [["Christmas: 1×12 \"Comparative Religion\"", 1, 1, GREEN, WHITE], ["Stop-motion: 2×11 \"Abed's Uncontrollable Christmas\"", 2, 2, GREEN, WHITE], ["Glee parody: 3×10 \"Regional Holiday Music\"", 3, 3, GREEN, WHITE], ["4×10 \"Intro to Knots\" (aired in April)", 4, 4, LGREEN, BLACK]],
    [["Documentary: 2×16 \"Intermediate Documentary Filmmaking\"", 2, 2, DGRAY, WHITE], ["3×08 \"Documentary Filmmaking: Redux\"; 3×14 Ken Burns-style war doc", 3, 3, DGRAY, WHITE], ["4×06 \"Advanced Documentary Filmmaking\"", 4, 4, GRAY, WHITE]],
    [["Remedial Chaos Theory: six timelines in 3×04; Evil Abed returns in 3×22", 3, 3, DRED, WHITE], ["The Darkest Timeline invades: 4×13", 4, 4, DRED, WHITE]],
    [["Stop-motion (2×11)", 2, 2, LTEAL, BLACK], ["8-bit video game (3×20)", 3, 3, TEAL, WHITE], ["Puppets (4×09)", 4, 4, LTEAL, BLACK], ["G.I. Joe cartoon (5×11 \"G.I. Jeff\")", 5, 5, TEAL, WHITE]],
    [["Fake clip show: 2×21 \"Paradigms of Human Memory\"", 2, 2, CREAM, BLACK], ["Therapy clip show: 3×19 \"Curriculum Unavailable\"", 3, 3, CREAM, BLACK], ["Pitching season 7: 6×13", 6, 6, LPURPLE, BLACK]],
    [["Dungeons & Dragons: 2×14", 2, 2, PURPLE, WHITE], ["Advanced Advanced D&D: 5×10", 5, 5, PURPLE, WHITE]],
    [["Bottle episode: 2×08 \"Cooperative Calligraphy\"", 2, 2, GRAY, WHITE], ["Bottle episode: 5×04 \"Cooperative Polygraphy\"", 5, 5, GRAY, WHITE]],
  ],
  genre: [
    [["Mob movie: 1×21 \"Contemporary American Poultry\"", 1, 1, DGRAY, WHITE], ["Zombies 2×06; My Dinner with Andre 2×19", 2, 2, DGRAY, WHITE], ["Horror anthology 3×05; Law & Order 3×17; heist 3×21", 3, 3, DGRAY, WHITE], ["Sci-fi convention 4×03; body swap 4×11", 4, 4, GRAY, WHITE], ["Serial-killer thriller 5×03; VCR board game 5×09", 5, 5, DGRAY, WHITE], ["Con-artist caper 6×09; flashback road movie 6×10", 6, 6, DGRAY, WHITE]],
    [["Halloween: 1×07", 1, 1, LORANGE, BLACK], ["2×06 \"Epidemiology\"", 2, 2, ORANGE, WHITE], ["3×05 \"Horror Fiction in Seven Spooky Steps\"", 3, 3, ORANGE, WHITE], ["4×02 \"Paranormal Parentage\"", 4, 4, LORANGE, BLACK]],
  ],
  arcs: [
    [["Spanish 101", 1, 1, LGREEN, BLACK], ["Anthropology 101", 2, 2, LGREEN, BLACK], ["Biology 101", 3, 3, LGREEN, BLACK], ["History 101: Jeff's race to graduate", 4, 4, LGAS, BLACK], ["The Save Greendale Committee", 5, 6, GREEN, WHITE]],
    [["City College rivalry (1×09, 2×04)", 1, 2, BLUE, WHITE], ["The Air Conditioning Repair Annex; Chang's coup", 3, 3, LBLUE, BLACK], ["City College and Chang plot against Greendale (4×12)", 4, 4, BLUE, WHITE], ["Subway buys the school (5×12–5×13)", 5, 5, DGREEN, WHITE], ["Frankie's budget cuts", 6, 6, YAHOO, WHITE]],
    [["Troy & Abed: best friends and end-tag double act", 1, 2, TEAL, WHITE], ["Troy & Abed's apartment and the Dreamatorium (from 3×04)", 3, 4, LTEAL, BLACK], ["Troy leaves (5×05)", 5, 5, TEAL, WHITE], ["Abed, Annie & Britta share the apartment", 6, 6, LTEAL, BLACK]],
    [["Jeff & Britta (1×23), Jeff & Annie (1×25)", 1, 1, PINK, WHITE], ["Pierce's villain year; he walks out after paintball (2×24)", 2, 2, GOLD, BLACK], ["Pierce back; his father Cornelius (3×06) and inheritance (3×20)", 3, 3, LGOLD, BLACK]],
  ],
  recurring: [
    [["Prof. Ian Duncan (John Oliver)", 1, 2, LGREEN, BLACK], ["Duncan returns", 5, 5, GREEN, WHITE]],
    [["Prof. June Bauer (Betty White)", 2, 2, CREAM, BLACK], ["Vice Dean Laybourne (John Goodman)", 3, 3, DGRAY, WHITE], ["Prof. Cornwallis (Malcolm McDowell)", 4, 4, GRAY, WHITE], ["Prof. Buzz Hickey (Jonathan Banks)", 5, 5, DGRAY, WHITE], ["Frankie & Elroy", 6, 6, YAHOO, WHITE]],
    [["Alan Connor (Rob Corddry), 2×02", 2, 2, RED, WHITE], ["Alan vs. Jeff in court, 3×22", 3, 3, RED, WHITE], ["Alan lures Jeff back, 5×01", 5, 5, RED, WHITE]],
    [["Leonard, Magnitude, Garrett, Star-Burns, Vicki and Neil: Greendale's bench", 1, 6, CREAM, BLACK]],
  ],
};

window.SEASON_META = {
  1: {years:"2009–10", showrunner:"Dan Harmon"},
  2: {years:"2010–11", showrunner:"Dan Harmon"},
  3: {years:"2011–12", showrunner:"Dan Harmon"},
  4: {years:"2013", showrunner:"David Guarascio & Moses Port"},
  5: {years:"2014", showrunner:"Dan Harmon"},
  6: {years:"2015", showrunner:"Dan Harmon"},
};
