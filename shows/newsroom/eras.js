// The Newsroom (HBO, 2012–14) — chart data on an EPISODE axis: columns are the 25 episodes in order
// (1–10 = S1, 11–19 = S2, 20–25 = S3). Each entry: [label, startEp, endEp, bg, fg?]
window.CHART_AXIS = "episode";
const NAVY="#1f3a5f", BLUE="#4f7ff0", LBLUE="#cfe0f5", RED="#c62828", DRED="#7f0000", ORANGE="#f2994a",
      GOLD="#e0b64a", GREEN="#4f8a3f", LGREEN="#a8d08d", PURPLE="#6a3d9a", LPURP="#c9b3e6", GRAY="#7f7f7f",
      DGRAY="#333", WHITE="#fff", BLACK="#000", TEAL="#2a9d8f", PINK="#f4a6b0", BROWN="#8b5a2b";

window.ERA_CATS = [
  ["seasons","Season arc"],
  ["news","Real news covered"],
  ["arcs","Major arcs"],
  ["antagonists","Antagonists & pressure"],
  ["recurring","Recurring characters"],
];

window.ERAS = {
  seasons: [
    [["S1 — Rebuilding News Night", 1, 10, BLUE, WHITE], ["S2 — Genoa & the lawsuit", 11, 19, RED, WHITE], ["S3 — Boston, the leak & the sale of ACN", 20, 25, GOLD, BLACK]],
    [["In-show time: Apr–Nov 2010", 1, 3, LBLUE, BLACK], ["Jan–Aug 2011", 4, 11, LBLUE, BLACK], ["Sept 2011 – Nov 2012", 12, 19, LBLUE, BLACK], ["Apr–Jun 2013", 20, 25, LBLUE, BLACK]],
    [["Aaron Sorkin writes every episode", 1, 25, DGRAY, WHITE]],
  ],
  news: [
    [["Deepwater Horizon", 1, 1, DGRAY, WHITE], ["Arizona SB 1070", 2, 2, ORANGE, BLACK], ["2010 midterms & the Tea Party", 3, 3, RED, WHITE], ["Giffords shooting", 4, 4, DRED, WHITE], ["Tahrir Square / Wisconsin", 5, 5, GREEN, WHITE], ["Fukushima", 6, 6, GRAY, WHITE], ["Bin Laden raid", 7, 7, NAVY, WHITE], ["Casey Anthony & Weiner", 8, 8, PINK, BLACK], ["Debt ceiling / mock debate", 9, 9, PURPLE, WHITE], ["Voter-ID laws", 10, 10, GOLD, BLACK], ["Occupy Wall Street", 11, 11, GREEN, WHITE], ["Troy Davis execution", 12, 12, DGRAY, WHITE], ["GOP debates / Romney bus", 13, 13, RED, WHITE], ["OWS & Uganda", 14, 14, GREEN, WHITE], ["Trayvon Martin 911 tape", 15, 15, DRED, WHITE], ["Genoa reporting", 16, 16, DRED, WHITE], ["Genoa airs; Benghazi", 17, 17, DRED, WHITE], ["Election Night 2012", 18, 19, BLUE, WHITE], ["Boston Marathon bombing", 20, 20, DGRAY, WHITE], ["Kundu leak & the DOJ", 21, 24, NAVY, WHITE], ["Snowden era; Charlie's funeral", 25, 25, GOLD, BLACK]],
  ],
  arcs: [
    [["Will & Mac: the email and the fallout", 1, 10, PURPLE, WHITE], ["Will & Mac: Genoa strains everything", 11, 19, LPURP, BLACK], ["Will & Mac: engaged, married", 20, 25, PURPLE, WHITE]],
    [["Jim–Maggie–Don triangle", 1, 11, PINK, BLACK], ["Maggie's Africa trip & aftermath", 12, 19, BROWN, WHITE], ["Jim & Maggie, finally", 20, 25, PINK, BLACK]],
    [["Leona & TMI's smear campaign", 3, 10, RED, WHITE], ["The Genoa story", 12, 17, DRED, WHITE], ["Neal's leak; Will jailed for contempt", 21, 24, NAVY, WHITE], ["Charlie's death", 25, 25, BLACK, WHITE]],
    [["The Dantana lawsuit (depositions)", 11, 19, GRAY, WHITE], ["Sale of ACN to Lucas Pruit", 21, 25, GOLD, BLACK]],
    [["Nina Howard", 5, 13, ORANGE, BLACK], ["Sloan & Don", 14, 25, TEAL, WHITE]],
    [["Jim on the Romney bus / Hallie", 12, 14, LBLUE, BLACK], ["Election Night", 18, 19, BLUE, WHITE], ["Sloan's book / insider trading", 21, 22, TEAL, WHITE]],
  ],
  antagonists: [
    [["Leona & Reese Lansing / AWM", 3, 25, RED, WHITE]],
    [["Nina Howard / TMI", 5, 11, ORANGE, BLACK], ["Jerry Dantana", 12, 17, DRED, WHITE], ["Lucas Pruit", 21, 25, GOLD, BLACK]],
    [["Solomon Hancock (NSA)", 5, 6, GRAY, WHITE], ["Brian Brenner (NY Mag profile)", 8, 10, LGREEN, BLACK], ["Rebecca Halliday (deposition)", 11, 19, LBLUE, BLACK], ["DOJ / FBI", 21, 24, NAVY, WHITE]],
  ],
  recurring: [
    [["Elliot Hirsch", 1, 25, LBLUE, BLACK]],
    [["Lisa Lambert", 4, 9, PINK, BLACK], ["Taylor Warren (Romney camp)", 13, 15, ORANGE, BLACK]],
    [["Rebecca Halliday", 11, 19, LBLUE, BLACK], ["Taylor Warren", 20, 25, ORANGE, BLACK]],
    [["Hallie Shea", 13, 25, GREEN, WHITE]],
    [["Reese Lansing", 3, 25, RED, WHITE]],
  ],
};
window.SEASON_META = {
  1:{years:"2012",showrunner:"Sorkin"},2:{years:"2013",showrunner:"Sorkin"},3:{years:"2014",showrunner:"Sorkin"},
};
