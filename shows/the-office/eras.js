// The Office (US) (NBC, 2005–2013) — chart data on a SEASON axis: 9 columns, 202 episodes.
// Each entry: [label, startSeason, endSeason, bg, fg?]. Bars within a row must not overlap;
// mid-season handoffs are drawn at season granularity with the exact episode noted in the label.
// Episode numbers are TVmaze's, which splits every hour-long into (1)/(2) — so "Goodbye, Michael" is 7×22–23.
const NAVY="#1f3a5f", BLUE="#3d6fa3", LBLUE="#c6dcf0", SKY="#8fb8de", SLATE="#4f5d6b", LSLATE="#cfd6dd",
      GRAY="#7c7c7c", DGRAY="#2e3338", PAPER="#f2efe6", BEIGE="#d9ccae", TAN="#b89f72", BROWN="#6b4f33",
      GOLD="#d6a930", LGOLD="#f0d98c", RED="#a8332b", DRED="#6a1c17", PINK="#e7a9b3", LPINK="#f5d3d9",
      GREEN="#4d8a4a", LGREEN="#bcd9b0", TEAL="#2d7f7a", ORANGE="#d9822b", PURPLE="#6a4a86", LPURP="#cdbde0",
      WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["eras","Era & showrunner"],
  ["manager","Who runs Scranton"],
  ["corporate","Corporate layers"],
  ["jimpam","Jim & Pam"],
  ["romance","The other office romances"],
  ["roster","Roster changes"],
];

window.ERAS = {
  eras: [
    [["The Michael Scott era — 1×01 to 7×23 \"Goodbye, Michael\"", 1, 7, NAVY, WHITE], ["After Michael — Andy, Robert California, Nellie, then Dwight", 8, 9, ORANGE, BLACK]],
    [["Greg Daniels", 1, 4, BLUE, WHITE], ["Paul Lieberstein & Jennifer Celotta", 5, 6, TEAL, WHITE], ["Paul Lieberstein", 7, 8, SLATE, WHITE], ["Greg Daniels returns", 9, 9, BLUE, WHITE]],
    [["Six-episode first season, close to the UK original", 1, 1, LSLATE, BLACK], ["The show finds its warmth — Dundies to the Stamford merger", 2, 3, LBLUE, BLACK], ["Michael in love and in debt — Jan, Holly, the Paper Company", 4, 5, SKY, BLACK], ["Sabre, babies and Michael's long goodbye", 6, 7, BEIGE, BLACK], ["The Robert California / Andy / Nellie stretch", 8, 8, LGOLD, BLACK], ["The last season — the documentary becomes the story", 9, 9, TAN, BLACK]],
  ],
  manager: [
    [["Michael Scott — regional manager, 1×01 to 7×23", 1, 7, NAVY, WHITE], ["Andy Bernard — 8×01 until he quits for acting in 9×21", 8, 9, ORANGE, BLACK]],
    [["Michael names Dwight his successor, then doesn't get the corporate job (3×24–25)", 3, 3, LGOLD, BLACK], ["Michael quits (5×20–21); Charles Miner runs the floor; Wallace buys the Paper Company in 5×25 \"Broke\"", 5, 5, RED, WHITE], ["Jim & Michael co-managers — 6×02 \"The Meeting\" to 6×16 \"The Manager and the Salesman\"", 6, 6, GREEN, WHITE], ["After Michael: Deangelo Vickers (7×20–24), Dwight acting (7×25), Creed during the search (7×26–27)", 7, 7, GOLD, BLACK], ["Nellie Bertram takes Andy's office (8×19) until Wallace reinstates him (8×24)", 8, 8, PURPLE, WHITE], ["Dwight Schrute — regional manager from 9×21, Jim his assistant", 9, 9, BROWN, WHITE]],
    [["Dwight — assistant (to the) regional manager, always angling for the chair", 1, 9, BEIGE, BLACK]],
  ],
  corporate: [
    [["Dunder Mifflin Inc. — public paper company, headquarters in New York", 1, 5, NAVY, WHITE], ["Stock collapse; bought by Sabre (6×15 \"Sabre\")", 6, 6, DRED, WHITE], ["Dunder Mifflin, a division of Sabre — Jo Bennett, CEO", 7, 7, RED, WHITE], ["Sabre under Robert California — until Wallace buys Dunder Mifflin back (8×24)", 8, 8, DGRAY, WHITE], ["Dunder Mifflin again, owned by David Wallace", 9, 9, BLUE, WHITE]],
    [["Jan Levinson, VP Northeast sales — out after 3×24–25 \"The Job\"", 1, 3, PINK, BLACK], ["Ryan Howard, VP & new media — arrested for fraud (4×18–19)", 4, 4, SKY, BLACK], ["Charles Miner, VP Northeast (from 5×20); David Wallace, CFO, above everyone", 5, 5, SLATE, WHITE], ["Wallace, then Sabre: Jo Bennett in Tallahassee, Gabe Lewis on site", 6, 7, TAN, BLACK], ["Robert California — from the manager's chair to CEO (8×01)", 8, 8, DGRAY, WHITE], ["David Wallace, CEO", 9, 9, BLUE, WHITE]],
    [["Jim transfers to Stamford; Stamford merges into Scranton (3×08)", 3, 3, LBLUE, BLACK], ["Dunder Mifflin Infinity; Karen's Utica branch in 4×10 \"Branch Wars\"", 4, 4, LSLATE, BLACK], ["The Michael Scott Paper Company (5×22–25)", 5, 5, LGOLD, BLACK], ["Sabre printers catch fire — 6×26 \"Whistleblower\"", 6, 6, ORANGE, BLACK], ["The Sabre Store task force in Tallahassee (8×14–18)", 8, 8, LGREEN, BLACK], ["Jim's side venture: Athlead in Philadelphia", 9, 9, LPURP, BLACK]],
  ],
  jimpam: [
    [["Jim pines; Pam is engaged to Roy", 1, 2, LBLUE, BLACK], ["Stamford and Karen; Pam calls off the wedding; \"The Job\" ends with a date (3×25)", 3, 3, SKY, BLACK], ["Together — caught on camera in 4×01 \"Fun Run\"", 4, 4, BLUE, WHITE], ["Rest-stop proposal (5×02); Pam at art school in New York", 5, 5, TEAL, WHITE], ["Married at Niagara (6×04–05); Cece born (6×17–18)", 6, 6, GREEN, WHITE], ["Young parents", 7, 7, LGREEN, BLACK], ["Second baby, Phillip — Cathy covers Pam's maternity leave (8×07)", 8, 8, LGREEN, BLACK], ["Athlead strains the marriage; recommitted in 9×22–23 \"A.A.R.M.\"", 9, 9, NAVY, WHITE]],
    [["Pam — receptionist", 1, 4, LPINK, BLACK], ["Art school, then Paper Company saleswoman; returns in sales (5×25)", 5, 5, PINK, BLACK], ["Pam in sales", 6, 6, PINK, BLACK], ["Office administrator — a job Pam invents in 7×02 \"Counseling\"", 7, 9, RED, WHITE]],
    [["Jim — salesman, Dwight's desk-mate", 1, 2, LSLATE, BLACK], ["Jim at Stamford, back to Scranton in the merger", 3, 3, SLATE, WHITE], ["Jim — salesman", 4, 5, LSLATE, BLACK], ["Co-manager, back to sales in 6×16", 6, 6, GREEN, WHITE], ["Jim — salesman", 7, 8, LSLATE, BLACK], ["Athlead in Philadelphia; home \"all in\" by 9×21", 9, 9, PURPLE, WHITE]],
    [["Roy Anderson — Pam's fiancé", 1, 2, TAN, BLACK], ["Karen Filippelli; Roy attacks Jim in 3×19 \"The Negotiation\"", 3, 3, BROWN, WHITE], ["Karen, now running Utica", 4, 4, TAN, BLACK]],
  ],
  romance: [
    [["Michael and Jan — the kiss in 2×07 \"The Client\"", 2, 2, PINK, BLACK], ["Carol, then Jan again (3×24–25)", 3, 3, LPINK, BLACK], ["Jan moves in — 4×13 \"Dinner Party\"; Holly arrives (4×18–19)", 4, 4, PINK, BLACK], ["Holly, until she's transferred to Nashua (5×06)", 5, 5, LPURP, BLACK], ["Pam's mom (dumped in 6×09); Donna, who's married (from 6×21)", 6, 6, LPINK, BLACK], ["Holly returns (7×11); proposal (7×19); they leave for Colorado (7×22–23)", 7, 7, PURPLE, WHITE]],
    [["Dwight & Angela, in secret", 2, 3, BROWN, WHITE], ["Andy proposes to Angela (4×18–19); the affair comes out in 5×12 \"The Duel\"", 4, 5, TAN, BLACK], ["The baby contract (6×17, mediated in 6×25)", 6, 6, BEIGE, BLACK], ["Angela marries the Senator; baby Phillip (8×13)", 8, 8, LSLATE, BLACK], ["Dwight proposes (9×22–23); married in the finale", 9, 9, BROWN, WHITE]],
    [["Andy & Erin — slowly, then not (6×22 \"Secretary's Day\")", 6, 6, LGOLD, BLACK], ["Erin dates Gabe; Andy waits", 7, 7, BEIGE, BLACK], ["Andy & Erin — he drives to Florida for her (8×19)", 8, 8, GOLD, BLACK], ["Andy sails away (9×06); Erin and Pete (9×16)", 9, 9, LGOLD, BLACK]],
  ],
  roster: [
    [["Michael Scott (Steve Carell) — 1×01 to 7×23, back for one scene in the finale", 1, 7, NAVY, WHITE]],
    [["Andy Bernard (Ed Helms) — from Stamford, Scranton after 3×08", 3, 9, ORANGE, BLACK]],
    [["Kelly & Ryan", 1, 8, LPINK, BLACK], ["Kelly & Ryan leave in 9×01, back for the finale", 9, 9, PINK, BLACK]],
    [["Toby Flenderson — HR; Costa Rica after 4×18–19", 1, 4, LSLATE, BLACK], ["Toby's back from 5×01", 5, 9, SLATE, WHITE]],
    [["Holly Flax (Amy Ryan) — 4×18 to 5×06", 4, 5, LPURP, BLACK], ["Holly again — 7×11 to 7×23", 7, 7, PURPLE, WHITE]],
    [["Erin Hannon (Ellie Kemper) — Pam's replacement at reception", 5, 9, LGOLD, BLACK]],
    [["Gabe Lewis (Zach Woods) — Sabre's man, from 6×15", 6, 8, TAN, BLACK]],
    [["Deangelo, Robert California & Nellie arrive (7×20–27)", 7, 7, GOLD, BLACK], ["Robert California (James Spader), CEO", 8, 8, DGRAY, WHITE], ["Clark & Pete — \"The New Guys\" (9×01)", 9, 9, LBLUE, BLACK]],
    [["Nellie Bertram (Catherine Tate) — Tallahassee (8×15), then Scranton", 8, 9, PURPLE, WHITE]],
  ],
};

window.SEASON_META = {
  1: {years:"2005",    showrunner:"Greg Daniels"},
  2: {years:"2005–06", showrunner:"Greg Daniels"},
  3: {years:"2006–07", showrunner:"Greg Daniels"},
  4: {years:"2007–08", showrunner:"Greg Daniels"},
  5: {years:"2008–09", showrunner:"Paul Lieberstein & Jennifer Celotta"},
  6: {years:"2009–10", showrunner:"Paul Lieberstein & Jennifer Celotta"},
  7: {years:"2010–11", showrunner:"Paul Lieberstein"},
  8: {years:"2011–12", showrunner:"Paul Lieberstein"},
  9: {years:"2012–13", showrunner:"Greg Daniels"},
};
