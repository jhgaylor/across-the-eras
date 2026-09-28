// Gilmore Girls (The WB / The CW, 2000–2007) — chart data on a SEASON axis: 7 columns, 153 episodes.
// Each entry: [label, startSeason, endSeason, bg, fg?]. Bars within a row must not overlap;
// mid-season turns are drawn at season granularity with the exact episode noted in the label.
// The 2016 revival "A Year in the Life" is a separate TVmaze show (17399) and is not charted.
const COFFEE="#5b3a29", LCOFFEE="#c9a38a", AUTUMN="#d9824b", LAUTUMN="#f3c9a4", RUST="#9c4a24",
      NAVY="#2d3e5e", LNAVY="#b7c4dc", PLUM="#6d3b5f", LPLUM="#d9b8cf", SAGE="#6f8a5b", LSAGE="#c9d8b8",
      GOLD="#c9a227", LGOLD="#efd98a", ROSE="#b8485a", LROSE="#f1bcc4", SLATE="#5f6b73", LSLATE="#cfd6da",
      TEAL="#2f6f6a", LTEAL="#a8d5d0", CREAM="#f2e8d5", WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["eras","Showrunner & network"],
  ["rory","Rory's boyfriends"],
  ["lorelai","Lorelai's boyfriends"],
  ["path","School & work"],
  ["family","The elder Gilmores"],
  ["town","Stars Hollow & friends"],
];

window.ERAS = {
  eras: [
    [["Amy Sherman-Palladino & Daniel Palladino", 1, 6, AUTUMN, BLACK], ["David S. Rosenthal — the Palladinos leave before season 7", 7, 7, SLATE, WHITE]],
    [["The WB", 1, 6, NAVY, WHITE], ["The CW (after the WB–UPN merger)", 7, 7, PLUM, WHITE]],
  ],
  rory: [
    [["Dean Forester — first kiss 1×07, splits 1×16–17, back together 1×21", 1, 1, LNAVY, BLACK], ["Dean — Jess arrives, the bracelet goes missing", 2, 2, LNAVY, BLACK], ["Dean ends it at the dance marathon (3×07); engaged to Lindsay by 3×20", 3, 3, NAVY, WHITE], ["Married Dean — his wedding 4×04; with Rory again from 4×22", 4, 5, SLATE, WHITE]],
    [["Jess Mariano arrives (2×05); kisses Rory at Sookie's wedding (2×22)", 2, 2, LROSE, BLACK], ["Rory & Jess — together from 3×08, he leaves for California 3×21", 3, 3, ROSE, WHITE], ["Jess drops back in — 4×12–13, 4×20", 4, 4, LROSE, BLACK], ["Jess sends her back to Yale — 6×08; Philadelphia, 6×18", 6, 6, LROSE, BLACK]],
    [["Logan Huntzberger — meets him 5×03, Life and Death Brigade 5×07, together from 5×17", 5, 5, LGOLD, BLACK], ["Logan — his flings during the break come out (6×16), the accident (6×20), London (6×22)", 6, 6, GOLD, BLACK], ["Logan — long distance, his business fails, proposes at graduation (7×21)", 7, 7, LGOLD, BLACK]],
  ],
  lorelai: [
    [["Max Medina — meets him 1×04, proposes with a thousand daisies 1×21", 1, 1, LTEAL, BLACK], ["Max — engaged; wedding called off 2×03", 2, 2, TEAL, WHITE], ["Alex (3×11–3×14); Max again at Chilton (3×16, 3×19)", 3, 3, LSLATE, BLACK], ["Jason \"Digger\" Stiles — 4×03 to 4×19", 4, 4, SLATE, WHITE]],
    [["Christopher returns — 1×15", 1, 1, LPLUM, BLACK], ["Christopher & Sherry — the bomb (2×22), Gigi born (3×13)", 2, 3, PLUM, WHITE], ["Christopher vs. Luke at the vow renewal — 5×13", 5, 5, LPLUM, BLACK], ["The night after the ultimatum (6×22) → together 7×04 → married in Paris (7×08) → over by 7×15", 6, 7, PLUM, WHITE]],
    [["Luke — the slow burn (Rachel 1×16–21, Nicole from 3×12)", 1, 3, LCOFFEE, BLACK], ["Luke divorces Nicole (4×19), then the kiss — 4×22", 4, 4, LCOFFEE, BLACK], ["Luke & Lorelai — first date 5×03, split 5×13, she proposes 5×22", 5, 5, COFFEE, WHITE], ["Engaged — April (6×09, Lorelai finds out 6×12), the ultimatum 6×22", 6, 6, COFFEE, WHITE], ["Apart — karaoke (7×20), a party for Rory (7×22)", 7, 7, LCOFFEE, BLACK]],
  ],
  path: [
    [["Rory at Chilton — first day 1×02, graduates 3×22", 1, 3, NAVY, WHITE], ["Yale — 4×02; Yale Daily News from 4×10; drops out 5×22", 4, 5, LNAVY, BLACK], ["The year off — community service, the DAR, the pool house; back 6×09, editor 6×14", 6, 6, SLATE, WHITE], ["Senior year, graduates 7×21, joins the campaign trail 7×22", 7, 7, NAVY, WHITE]],
    [["Lorelai runs the Independence Inn; business-school graduation 2×21", 1, 2, SAGE, WHITE], ["The Inn burns (3×17); the Dragonfly comes up for sale (3×20)", 3, 3, RUST, WHITE], ["Building the Dragonfly — catering, Luke's loan (4×15), shakedown weekend 4×22", 4, 4, LSAGE, BLACK], ["The Dragonfly Inn, open for business", 5, 7, SAGE, WHITE]],
  ],
  family: [
    [["Friday night dinners — the Chilton loan (1×01)", 1, 2, LAUTUMN, BLACK], ["Richard's $75,000 pays off Chilton (3×18); Yale reopens the deal (3×22)", 3, 3, AUTUMN, BLACK], ["Trix dies (4×16); Richard & Emily separate (4×22)", 4, 4, RUST, WHITE], ["Vow renewal 5×13 — then the Gilmore girls stop speaking (5×22)", 5, 5, AUTUMN, BLACK], ["Rory lives in the pool house until 6×09", 6, 6, LAUTUMN, BLACK], ["Richard's heart attack — 7×13", 7, 7, RUST, WHITE]],
    [["Richard's angina (1×10); quits his job (2×10), new office (2×20)", 1, 2, LCOFFEE, BLACK], ["Richard & Jason's firm, and Floyd's lawsuit", 4, 4, LCOFFEE, BLACK], ["Emily dates (5×09), buys a panic room (5×05)", 5, 5, LCOFFEE, BLACK]],
  ],
  town: [
    [["Lane — Rory's best friend, hiding CDs from Mrs. Kim", 1, 2, LGOLD, BLACK], ["Lane's band — the ad (3×03), Dave Rygalski", 3, 4, GOLD, BLACK], ["Lane & Zack — first date 5×07, wedding 6×19", 5, 6, GOLD, BLACK], ["Lane expecting twins (7×07)", 7, 7, LGOLD, BLACK]],
    [["Sookie & Jackson — first date 1×11–12, wedding 2×22", 1, 2, LSAGE, BLACK], ["Sookie pregnant (3×16), Davey", 3, 4, SAGE, WHITE], ["Baby two arrives early (5×21)", 5, 5, LSAGE, BLACK]],
    [["Paris Geller — Chilton rival, Franklin editor, Harvard rejection (3×16)", 1, 3, LPLUM, BLACK], ["Paris — Rory's Yale roommate; Asher Fleming", 4, 4, PLUM, WHITE], ["Paris & Doyle (5×10); Yale Daily News editor, ousted 6×14", 5, 7, LPLUM, BLACK]],
    [["Jess lives above the diner (2×05–3×21)", 2, 3, LROSE, BLACK], ["Liz marries T.J. (4×21)", 4, 4, LROSE, BLACK], ["Liz & T.J. move to Stars Hollow (5×08)", 5, 5, LROSE, BLACK], ["April Nardini — Luke's daughter (6×09)", 6, 7, ROSE, WHITE]],
  ],
};

window.SEASON_META = {
  1: {years:"2000–01", showrunner:"Amy Sherman-Palladino & Daniel Palladino"},
  2: {years:"2001–02", showrunner:"Amy Sherman-Palladino & Daniel Palladino"},
  3: {years:"2002–03", showrunner:"Amy Sherman-Palladino & Daniel Palladino"},
  4: {years:"2003–04", showrunner:"Amy Sherman-Palladino & Daniel Palladino"},
  5: {years:"2004–05", showrunner:"Amy Sherman-Palladino & Daniel Palladino"},
  6: {years:"2005–06", showrunner:"Amy Sherman-Palladino & Daniel Palladino"},
  7: {years:"2006–07", showrunner:"David S. Rosenthal"},
};
