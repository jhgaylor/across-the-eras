// Stargate SG-1 (Showtime / Sci Fi, 1997–2007, plus two 2008 films) — chart data on a SEASON axis: 10 columns,
// 215 episodes. The direct-to-DVD films The Ark of Truth and Continuum are 10×21 and 10×22.
// Each entry: [label, startSeason, endSeason, bg, fg?]. Bars within a row must not overlap;
// mid-season handoffs are drawn at season granularity with the exact episode noted in the label.
const GOLD="#c9a227", LGOLD="#efd98a", SAND="#d8c39a", BROWN="#6b4a2b", ORANGE="#e8862b", LORANGE="#f5c28f",
      STEEL="#5b6b7a", LSTEEL="#b8c4cf", SILVER="#9aa3ab", RED="#a32b2b", DRED="#5e1414", CRIM="#7a1f3d",
      BLUE="#2c5d8f", LBLUE="#a9c8e8", NAVY="#1c2e4a", TEAL="#2f6f6a", LTEAL="#a8d5d0", GREEN="#4a6b2f",
      LGREEN="#bcd49a", PURPLE="#5a3d7a", LPURPLE="#cbb6e0", GRAY="#6c6c6c", DGRAY="#333", CREAM="#efe7d2",
      WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["villains","Big bads"],
  ["team","SG-1 roster"],
  ["command","Stargate Command"],
  ["arcs","Arcs & turning points"],
  ["allies","Allies & recurring"],
  ["network","Network & production"],
];

window.ERAS = {
  villains: [
    [["The Goa'uld — System Lords, Jaffa armies and false gods", 1, 8, GOLD, BLACK], ["The Ori — Priors, Origin and the crusade (ends in The Ark of Truth, 10×21)", 9, 10, CREAM, BLACK]],
    [["The Replicators — first seen 3×22 \"Nemesis\"; human-form from 6×12; wiped out by the Dakara weapon in 8×17", 3, 8, STEEL, WHITE]],
    [["Apophis — Teal'c's old master, killed in 5×01 \"Enemies\"", 1, 5, BROWN, WHITE], ["Anubis — revealed 5×22 \"Revelations\"; fleet destroyed 7×22; held off by Oma Desala in 8×18", 6, 8, DRED, WHITE], ["Ba'al and his clones — the last System Lord, finished in Continuum (10×22)", 9, 10, CRIM, WHITE]],
    [["Earth's own enemies — the rogue NID, Maybourne and Senator Kinsey", 1, 8, GRAY, WHITE], ["The Trust — Goa'uld-infiltrated rogues working for Ba'al", 9, 10, DGRAY, WHITE]],
    [["Adria, the Orici — born to Vala and grown to adulthood in 10×01", 10, 10, LPURPLE, BLACK]],
  ],
  team: [
    [["Col. Jack O'Neill leads SG-1", 1, 7, BLUE, WHITE], ["Brig. Gen. O'Neill runs the SGC (from 8×02)", 8, 8, NAVY, WHITE], ["O'Neill guest spots — 9×01, 9×03, 10×06, 10×14, Continuum", 9, 10, LBLUE, BLACK]],
    [["Capt., then Maj. Samantha Carter", 1, 7, TEAL, WHITE], ["Lt. Col. Carter commands SG-1", 8, 8, GREEN, WHITE], ["Carter — barely in 9×01–9×05 (maternity leave), then Mitchell's second", 9, 10, LTEAL, BLACK]],
    [["Dr. Daniel Jackson — ascends in 5×21 \"Meridian\"", 1, 5, ORANGE, BLACK], ["Daniel ascended — glimpsed in 6×06 and 6×19, back at the end of 6×22 \"Full Circle\"", 6, 6, LORANGE, BLACK], ["Daniel back on the team from 7×01 \"Fallen\"", 7, 10, ORANGE, BLACK]],
    [["Jonas Quinn debuts in 5×21 \"Meridian\"", 5, 5, LPURPLE, BLACK], ["Jonas Quinn takes Daniel's place on SG-1 (6×01 \"Redemption\")", 6, 6, PURPLE, WHITE], ["Jonas goes home to Kelowna in 7×02; guest in 7×14", 7, 7, LPURPLE, BLACK]],
    [["Teal'c — Apophis's First Prime turned SG-1's Jaffa", 1, 10, GOLD, BLACK]],
    [["Lt. Col. Cameron Mitchell leads the new SG-1 (from 9×01 \"Avalon\")", 9, 10, RED, WHITE]],
    [["Vala Mal Doran debuts in 8×12 \"Prometheus Unbound\"", 8, 8, LPURPLE, BLACK], ["Vala — 9×01–9×06, then back for 9×19–9×20", 9, 9, LPURPLE, BLACK], ["Vala joins SG-1", 10, 10, PURPLE, WHITE]],
  ],
  command: [
    [["Maj. Gen. George Hammond (briefly forced out in 4×15 \"Chain Reaction\")", 1, 7, NAVY, WHITE], ["Dr. Elizabeth Weir (8×01–8×02), then Brig. Gen. Jack O'Neill", 8, 8, BLUE, WHITE], ["Maj. Gen. Hank Landry (from 9×01)", 9, 10, STEEL, WHITE]],
    [["Dr. Janet Fraiser, chief medical officer — killed in 7×18 \"Heroes, Part 2\"", 1, 7, LTEAL, BLACK], ["Dr. Carolyn Lam — Landry's daughter, from 9×02", 9, 10, LSTEEL, BLACK]],
    [["Hammond recurs as a lieutenant general", 8, 10, LBLUE, BLACK]],
  ],
  arcs: [
    [["Abydos and the search for Sha're — ends in 3×10 \"Forever in a Day\"", 1, 3, SAND, BLACK], ["The Harcesis child — Sha're's son, 4×17 \"Absolute Power\"", 4, 4, LGOLD, BLACK]],
    [["Teal'c's rebellion — the Jaffa underground", 1, 7, GOLD, BLACK], ["The Jaffa take Dakara — free at last in 8×17 \"Reckoning, Part 2\"", 8, 8, ORANGE, BLACK], ["The Free Jaffa Nation and its growing pains", 9, 10, LORANGE, BLACK]],
    [["The Stargate is Earth's only way out", 1, 5, LSTEEL, BLACK], ["Earth's own ships — the X-303 Prometheus (6×11) and its successors", 6, 10, STEEL, WHITE]],
    [["The Ancients — a mystery in the background", 1, 6, CREAM, BLACK], ["The Lost City — 7×21–7×22 finds the Antarctic outpost and launches Stargate Atlantis", 7, 7, TEAL, WHITE], ["Merlin, the Sangraal and the Ancients' own war (10×10–10×11 \"The Quest\")", 9, 10, LTEAL, BLACK]],
    [["Written as possible series finales: 6×22, 7×21–22, 8×19–20", 6, 8, DGRAY, WHITE]],
    [["100th episode — 5×12 \"Wormhole X-Treme!\"", 5, 5, LGOLD, BLACK], ["200th episode — 10×06 \"200\"; last episode 10×20 \"Unending\"", 10, 10, LGOLD, BLACK]],
  ],
  allies: [
    [["Master Bra'tac — Teal'c's mentor, 1×11 to 10×17", 1, 10, BROWN, WHITE]],
    [["Jacob Carter / Selmak and the Tok'ra — alliance from 2×11–2×12; Jacob dies in 8×18 \"Threads\"", 2, 8, TEAL, WHITE]],
    [["Thor and the Asgard — until their last gift in 10×20 \"Unending\"", 1, 10, LSTEEL, BLACK]],
    [["Col. Harry Maybourne — enemy, then reluctant friend (last seen 8×13)", 1, 8, GRAY, WHITE]],
    [["Richard Woolsey — Pentagon lawyer, later the IOA's man (from 7×18)", 7, 10, SILVER, BLACK]],
  ],
  network: [
    [["Showtime (and syndication six months later) — 44 episodes ordered up front", 1, 5, CRIM, WHITE], ["The Sci Fi Channel — Friday nights, a smaller budget", 6, 10, NAVY, WHITE]],
    [["Brad Wright & Jonathan Glassner", 1, 3, GOLD, BLACK], ["Brad Wright", 4, 6, ORANGE, BLACK], ["Robert C. Cooper — Wright moves to Stargate Atlantis", 7, 10, TEAL, WHITE]],
    [["Stargate Atlantis airs alongside SG-1 from 2004", 8, 10, LTEAL, BLACK]],
    [["Cancelled Aug 2006, days after \"200\"; The Ark of Truth and Continuum go direct to DVD in 2008", 10, 10, DGRAY, WHITE]],
  ],
};

window.SEASON_META = {
  1:  {years:"1997–98", showrunner:"Brad Wright & Jonathan Glassner"},
  2:  {years:"1998–99", showrunner:"Brad Wright & Jonathan Glassner"},
  3:  {years:"1999–2000", showrunner:"Brad Wright & Jonathan Glassner"},
  4:  {years:"2000–01", showrunner:"Brad Wright"},
  5:  {years:"2001–02", showrunner:"Brad Wright"},
  6:  {years:"2002–03", showrunner:"Brad Wright"},
  7:  {years:"2003–04", showrunner:"Robert C. Cooper"},
  8:  {years:"2004–05", showrunner:"Robert C. Cooper"},
  9:  {years:"2005–06", showrunner:"Robert C. Cooper"},
  10: {years:"2006–07 · films 2008", showrunner:"Robert C. Cooper"},
};
