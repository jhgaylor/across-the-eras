// M*A*S*H (CBS, 1972–1983) — chart data on a SEASON axis: 11 columns, 251 episodes.
// Each entry: [label, startSeason, endSeason, bg, fg?]. Bars within a row must not overlap;
// mid-season handoffs are drawn at season granularity with the exact episode noted in the label.
const OLIVE="#4a5d23", DOLIVE="#2f3d13", SAGE="#8a9a5b", LSAGE="#cbd5a0", KHAKI="#b8a878", LKHAKI="#e4dcc0",
      RED="#a32b2b", DRED="#6e1616", SURG="#2f6f6a", LSURG="#a8d5d0", BROWN="#5c4433", TAN="#d8c9a3",
      GOLD="#c9a227", LGOLD="#efd98a", GRAY="#7c7c7c", DGRAY="#333", WHITE="#fff", BLACK="#000",
      RUST="#b5651d", CREAM="#efe7d2", NAVY="#2c3e5c", PLUM="#6b3f6b", LPLUM="#cbb0d8";

window.ERA_CATS = [
  ["eras","Showrunner & era"],
  ["roster","The 4077th roster"],
  ["arcs","Arcs & turning points"],
  ["tone","Tone & format"],
  ["war","The war & the calendar"],
  ["recurring","Recurring characters"],
];

window.ERAS = {
  eras: [
    [["Larry Gelbart & Gene Reynolds", 1, 4, OLIVE, WHITE], ["Gene Reynolds & Burt Metcalfe", 5, 5, GOLD, BLACK], ["Burt Metcalfe", 6, 11, SURG, WHITE]],
    [["Gelbart's room — jokes at machine-gun rate, then a body on the table", 1, 4, LSAGE, BLACK], ["Metcalfe's room — the ensemble takes turns carrying an episode", 5, 11, LSURG, BLACK]],
    [["Alan Alda writes his first script (1×19 \"The Long-John Flap\")", 1, 2, TAN, BLACK], ["Alda directs, from 3×16 \"Bulletin Board\" — and writes and directs the finale", 3, 11, RUST, WHITE]],
    [["CBS Sundays — 46th in the ratings, nearly cancelled", 1, 1, DGRAY, WHITE], ["Rescheduled behind All in the Family — a top-ten show ever after", 2, 11, GRAY, WHITE]],
  ],
  roster: [
    [["Capt. Benjamin Franklin \"Hawkeye\" Pierce (Alan Alda) — chief surgeon from 1×04", 1, 11, RED, WHITE]],
    [["Capt. \"Trapper John\" McIntyre (Wayne Rogers) — discharged between seasons", 1, 3, SURG, WHITE], ["Capt. B.J. Hunnicutt (Mike Farrell) — arrives 4×01", 4, 11, NAVY, WHITE]],
    [["Lt. Col. Henry Blake (McLean Stevenson) — killed in 3×24", 1, 3, GOLD, BLACK], ["Col. Sherman Potter (Harry Morgan) — takes command in 4×02", 4, 11, BROWN, WHITE]],
    [["Maj. Frank Burns (Larry Linville) — written out in 6×01", 1, 5, RUST, BLACK], ["Maj. Charles Emerson Winchester III (David Ogden Stiers) — arrives 6×01", 6, 11, PLUM, WHITE]],
    [["Maj. Margaret \"Hot Lips\" Houlihan (Loretta Swit) — head nurse", 1, 11, LPLUM, BLACK]],
    [["Cpl. Walter \"Radar\" O'Reilly (Gary Burghoff) — company clerk, leaves in 8×05", 1, 8, LGOLD, BLACK], ["Klinger takes the clerk's desk (from 8×06)", 9, 11, KHAKI, BLACK]],
    [["Cpl. Maxwell Klinger (Jamie Farr) — recurring", 1, 4, LKHAKI, BLACK], ["Klinger — in the opening credits from season 5", 5, 11, KHAKI, BLACK]],
    [["Father Francis Mulcahy (William Christopher) — recurring", 1, 4, CREAM, BLACK], ["Mulcahy — in the opening credits from season 5", 5, 11, TAN, BLACK]],
    [["Lt. Dish, Ho-Jon, Spearchucker Jones and Ugly John — the pilot's bench, gone after season 1", 1, 1, DOLIVE, WHITE]],
  ],
  arcs: [
    [["Farce with a body count — the film's cast of characters, still recognisable", 1, 3, LSAGE, BLACK], ["The great recast — Potter, then B.J., then Winchester", 4, 6, GOLD, BLACK], ["The elegiac years — the war grinds on and everyone is tired", 7, 11, SURG, WHITE]],
    [["Frank and Margaret's affair", 1, 4, RUST, BLACK], ["Margaret and Lt. Col. Donald Penobscott — engagement (5×02), marriage (5×24), divorce (7×19)", 5, 7, LPLUM, BLACK], ["Margaret on her own — head nurse, career officer, finally taken seriously", 8, 11, PLUM, WHITE]],
    [["Hawkeye & Trapper — the still, the scams, the nurses", 1, 3, SURG, WHITE], ["Hawkeye & B.J. — the same pranks with a conscience attached", 4, 11, NAVY, WHITE]],
    [["Klinger's Section 8 campaign — the dresses", 1, 7, LKHAKI, BLACK], ["Klinger gives up on the discharge and runs the office", 8, 11, KHAKI, BLACK]],
    [["Henry's plane goes down over the Sea of Japan — 3×24 \"Abyssinia, Henry\"", 3, 3, DRED, WHITE], ["\"The Interview\" — 4×24, black-and-white, no jokes to hide behind", 4, 4, DGRAY, WHITE], ["Frank cracks up, Winchester arrives — 6×01 \"Fade Out, Fade In\"", 6, 6, PLUM, WHITE], ["\"Good-Bye, Radar\" — 8×04–8×05", 8, 8, LGOLD, BLACK], ["The time capsule and the ceasefire — 11×15 and 11×16", 11, 11, RED, WHITE]],
  ],
  tone: [
    [["Half-hour network comedy with a laugh track — which never runs in the O.R.", 1, 11, DGRAY, WHITE]],
    [["Broad service farce", 1, 3, LSAGE, BLACK], ["The turn — comedy with casualties", 4, 7, KHAKI, BLACK], ["Character drama that still lands the jokes", 8, 11, SURG, WHITE]],
    [["3×05 \"O.R.\" — the whole episode in the operating room", 3, 3, LSURG, BLACK], ["4×18 \"Hawkeye\" — Alda alone, talking at a Korean family; 4×24 \"The Interview\"", 4, 4, LSURG, BLACK], ["5×21 \"Movie Tonight\" — the camp watches a broken print of a western", 5, 5, LSURG, BLACK], ["7×04 \"Our Finest Hour\" clip show; 7×10 \"Point of View\" — shot from a patient's eyes", 7, 7, LSURG, BLACK], ["8×11 \"Life Time\" — real time with a clock on screen; 8×22 \"Dreams\"", 8, 8, LSURG, BLACK], ["9×02 \"Letters\" — the camp answers a class of schoolchildren", 9, 9, LSURG, BLACK], ["10×10 \"Follies of the Living\" — a dead soldier watches; 10×20 \"Picture This\"", 10, 10, LSURG, BLACK]],
    [["The \"Dear Dad\" letter-home frame (1×12, 1×18, 2×09…) becomes the show's favourite structure", 1, 11, CREAM, BLACK]],
  ],
  war: [
    [["Eleven seasons for a three-year war — the camp's internal calendar never quite adds up", 1, 11, GRAY, WHITE]],
    [["In-show: the first year, autumn 1950 into 1951", 1, 2, LKHAKI, BLACK], ["Stalemate on the 38th parallel; the truce talks at Panmunjom drag on", 3, 10, KHAKI, BLACK], ["Ceasefire — 27 July 1953, and everybody goes home", 11, 11, OLIVE, WHITE]],
    [["Vietnam still on the evening news", 1, 3, DRED, WHITE], ["Post-Vietnam, post-Watergate America", 4, 8, BROWN, WHITE], ["The Reagan years — the show is now an institution", 9, 11, NAVY, WHITE]],
    [["Bug-outs, choppers and the O.R. — the war arrives by helicopter and leaves by bus", 1, 11, LSAGE, BLACK]],
  ],
  recurring: [
    [["Maj. Sidney Freedman (Allan Arbus) — the psychiatrist, 2×03 to the last scene of the series", 2, 11, SURG, WHITE]],
    [["Col. Flagg (Edward Winter) — counter-intelligence, allegedly", 2, 7, DRED, WHITE]],
    [["Lt. Gen. Clayton and the I-Corps brass", 1, 3, GRAY, WHITE], ["Lt. Col. Donald Penobscott — Margaret's husband", 5, 7, LPLUM, BLACK], ["Soon-Lee Han (Rosalind Chao) — the reason Klinger stays in Korea", 11, 11, RED, WHITE]],
    [["Ho-Jon and the pilot's Korean cast", 1, 1, DOLIVE, WHITE], ["Igor, Zale, Nurse Bigelow and the camp's permanent bench", 2, 11, TAN, BLACK]],
    [["Nurse Kellye (Kellye Nakahara) — background nurse to an episode of her own (11×01)", 3, 11, LKHAKI, BLACK]],
    [["Sgt. Luther Rizzo (G.W. Bailey) — the motor pool", 7, 11, BROWN, WHITE]],
  ],
};

window.SEASON_META = {
  1:  {years:"1972–73", showrunner:"Larry Gelbart & Gene Reynolds"},
  2:  {years:"1973–74", showrunner:"Larry Gelbart & Gene Reynolds"},
  3:  {years:"1974–75", showrunner:"Larry Gelbart & Gene Reynolds"},
  4:  {years:"1975–76", showrunner:"Larry Gelbart & Gene Reynolds"},
  5:  {years:"1976–77", showrunner:"Gene Reynolds & Burt Metcalfe"},
  6:  {years:"1977–78", showrunner:"Burt Metcalfe"},
  7:  {years:"1978–79", showrunner:"Burt Metcalfe"},
  8:  {years:"1979–80", showrunner:"Burt Metcalfe"},
  9:  {years:"1980–81", showrunner:"Burt Metcalfe"},
  10: {years:"1981–82", showrunner:"Burt Metcalfe"},
  11: {years:"1982–83", showrunner:"Burt Metcalfe"},
};
