// Star Trek: The Next Generation (syndication, 1987–1994) — chart data on a SEASON axis: 7 columns, 178 episodes.
// Each entry: [label, startSeason, endSeason, bg, fg?]. Bars within a row must not overlap;
// mid-season handoffs are drawn at season granularity with the exact episode noted in the label.
const ORANGE="#ff9c00", LORANGE="#ffcc88", PEACH="#ff9966", LPEACH="#ffd2b8", LILAC="#cc99cc", LLILAC="#e8d0e8",
      PURPLE="#6b4f9e", BLUE="#5577cc", LBLUE="#b8c8f0", NAVY="#1f2a55", GOLD="#d4a017", LGOLD="#f2d98a",
      RED="#b3261e", DRED="#6e1212", GREEN="#1f6b3a", LGREEN="#a8d8b8", BORG="#2e3b2e", TAN="#c8a878",
      BROWN="#5c4033", GRAY="#7c7c7c", DGRAY="#2f2f2f", WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["eras","Showrunners & era"],
  ["crew","Senior staff"],
  ["borgq","Q & the Borg"],
  ["powers","Romulans, Klingons & Cardassians"],
  ["recurring","Recurring faces"],
  ["production","Production & the franchise"],
];

window.ERAS = {
  eras: [
    [["Gene Roddenberry — the creator in charge (Maurice Hurley head writer)", 1, 2, LILAC, BLACK], ["Michael Piller — runs the writers' room from 3×05 \"The Bonding\"", 3, 6, ORANGE, BLACK], ["Jeri Taylor — showrunner for the final season", 7, 7, BLUE, WHITE]],
    [["Rick Berman — Roddenberry's producer", 1, 2, LLILAC, BLACK], ["Rick Berman — executive producer over the whole show; Roddenberry steps back", 3, 7, NAVY, WHITE]],
    [["Roddenberry's rules — no conflict among the crew, and a lot of rewrites", 1, 2, LILAC, BLACK], ["Piller's rule — every story is about one of our people", 3, 7, LORANGE, BLACK]],
    [["Roddenberry dies 24 Oct 1991 — both parts of \"Unification\" (5×07–5×08) carry his dedication", 5, 5, DGRAY, WHITE]],
  ],
  crew: [
    [["Dr. Beverly Crusher — CMO; leaves for Starfleet Medical", 1, 1, TAN, BLACK], ["Dr. Katherine Pulaski (Diana Muldaur) — CMO for one season", 2, 2, PEACH, BLACK], ["Dr. Beverly Crusher — back as CMO from 3×01 \"Evolution\"", 3, 7, TAN, BLACK]],
    [["Lt. Tasha Yar — security chief, killed in 1×23 \"Skin of Evil\"", 1, 1, GOLD, BLACK], ["Lt. Worf — chief of security from 2×01", 2, 7, RED, WHITE]],
    [["A revolving door of chief engineers; Geordi flies the ship", 1, 1, LGOLD, BLACK], ["Geordi La Forge — chief engineer from 2×01", 2, 7, GOLD, BLACK]],
    [["Wesley Crusher — acting ensign at the helm", 1, 3, LGREEN, BLACK], ["Wesley leaves for the Academy in 4×09 \"Final Mission\"", 4, 4, GREEN, WHITE], ["Wesley as a guest — 5×06, 5×19 \"The First Duty\", 7×11, 7×20 \"Journey's End\"", 5, 7, LGREEN, BLACK]],
    [["Ro Laren (Michelle Forbes) — at the helm from 5×03 \"Ensign Ro\" to 7×24 \"Preemptive Strike\"", 5, 7, BROWN, WHITE]],
    [["Guinan (Whoopi Goldberg) — Ten Forward, from 2×01 \"The Child\"", 2, 6, PURPLE, WHITE]],
    [["Miles O'Brien — at the transporter; leaves for Deep Space Nine in season 6", 1, 6, LBLUE, BLACK]],
  ],
  borgq: [
    [["Q puts humanity on trial — 1×01–1×02 \"Encounter at Farpoint\", 1×10 \"Hide and Q\"", 1, 1, RED, WHITE], ["\"Q Who?\" — 2×16, Q flings the Enterprise at the Borg", 2, 2, RED, WHITE], ["\"Déjà Q\" — 3×13, Q made mortal", 3, 3, RED, WHITE], ["\"Qpid\" — 4×20, Robin Hood", 4, 4, RED, WHITE], ["\"True Q\" — 6×06; \"Tapestry\" — 6×15", 6, 6, RED, WHITE], ["\"All Good Things...\" — 7×25–7×26, the trial ends", 7, 7, RED, WHITE]],
    [["Federation and Romulan outposts wiped out — 1×26 \"The Neutral Zone\", later tied to the Borg", 1, 1, GRAY, WHITE], ["First contact — 2×16 \"Q Who?\"", 2, 2, BORG, WHITE], ["Picard becomes Locutus — 3×26 and 4×01 \"The Best of Both Worlds\"; 4×02 \"Family\"", 3, 4, BORG, WHITE], ["\"I, Borg\" — 5×23, Hugh", 5, 5, LGREEN, BLACK], ["Lore's rogue Borg — 6×26 and 7×01 \"Descent\"", 6, 7, BORG, WHITE]],
  ],
  powers: [
    [["The Romulans return — 1×26 \"The Neutral Zone\"", 1, 1, GREEN, WHITE], ["\"Contagion\" — 2×11", 2, 2, GREEN, WHITE], ["Tomalak — \"The Enemy\" 3×07, \"The Defector\" 3×10; \"Yesterday's Enterprise\" 3×15", 3, 3, GREEN, WHITE], ["Sela — \"The Mind's Eye\" 4×24, \"Redemption\" 4×26", 4, 4, GREEN, WHITE], ["Spock on Romulus — \"Unification\" 5×07–5×08", 5, 5, GREEN, WHITE], ["\"Face of the Enemy\" 6×14, \"Timescape\" 6×25", 6, 6, GREEN, WHITE], ["\"The Pegasus\" — 7×12", 7, 7, GREEN, WHITE]],
    [["\"Heart of Glory\" — 1×20", 1, 1, DRED, WHITE], ["Riker on a Klingon ship (2×08); K'Ehleyr (2×20)", 2, 2, DRED, WHITE], ["\"Sins of the Father\" — 3×17, Worf's discommendation", 3, 3, DRED, WHITE], ["\"Reunion\" 4×07 (Gowron, K'Ehleyr, Alexander) to the civil war of \"Redemption\" 4×26–5×01", 4, 5, DRED, WHITE], ["\"Birthright\" 6×16–6×17; \"Rightful Heir\" 6×23 — Kahless returns", 6, 6, DRED, WHITE], ["\"Firstborn\" — 7×21, Lursa & B'Etor", 7, 7, DRED, WHITE]],
    [["First contact — \"The Wounded\" 4×12", 4, 4, BROWN, WHITE], ["\"Ensign Ro\" — 5×03, the Bajoran occupation", 5, 5, BROWN, WHITE], ["\"Chain of Command\" 6×10–6×11 — there are four lights", 6, 6, BROWN, WHITE], ["The DMZ treaty and the Maquis — 7×20 \"Journey's End\", 7×24 \"Preemptive Strike\"", 7, 7, BROWN, WHITE]],
  ],
  recurring: [
    [["Lwaxana Troi — 1×11, 2×19, 3×24, 4×22, 5×20, 7×07", 1, 7, LILAC, BLACK]],
    [["Lore — 1×13 \"Datalore\"", 1, 1, GRAY, WHITE], ["Lore and Dr. Soong — 4×03 \"Brothers\"", 4, 4, GRAY, WHITE], ["Lore — 6×26–7×01 \"Descent\"", 6, 7, GRAY, WHITE]],
    [["Moriarty — 2×03 \"Elementary, Dear Data\"", 2, 2, TAN, BLACK], ["Barclay — 3×21 \"Hollow Pursuits\"", 3, 3, LBLUE, BLACK], ["Barclay — 4×19 \"The Nth Degree\"", 4, 4, LBLUE, BLACK], ["Barclay — 6×02; Barclay and Moriarty — 6×12 \"Ship in a Bottle\"", 6, 6, LBLUE, BLACK], ["Barclay — 7×19 \"Genesis\"", 7, 7, LBLUE, BLACK]],
    [["K'Ehleyr — 2×20 \"The Emissary\"", 2, 2, PEACH, BLACK], ["Alexander Rozhenko — from 4×07; lives aboard from 5×10 \"New Ground\"", 4, 7, LPEACH, BLACK]],
    [["Sarek — 3×23", 3, 3, NAVY, WHITE], ["Sarek and Spock — 5×07–5×08", 5, 5, NAVY, WHITE], ["Scotty — 6×04 \"Relics\"", 6, 6, NAVY, WHITE]],
    [["Keiko O'Brien — from her wedding in 4×11 \"Data's Day\"", 4, 6, LLILAC, BLACK]],
  ],
  production: [
    [["The first season — 26 episodes, finding its feet", 1, 1, LILAC, BLACK], ["The 1988 writers' strike delays the premiere to November: 22 episodes, ending on the clip show \"Shades of Gray\"", 2, 2, GRAY, WHITE], ["The golden years — 26 episodes a season", 3, 7, ORANGE, BLACK]],
    [["Riker is clean-shaven", 1, 1, LGOLD, BLACK], ["The beard, from 2×01", 2, 7, GOLD, BLACK]],
    [["Deep Space Nine premieres in January 1993 and takes O'Brien", 6, 7, PURPLE, WHITE]],
    [["First-run syndication, 1987–1994 — the finale leads into the films, starting with Generations (Nov 1994)", 1, 7, DGRAY, WHITE]],
  ],
};

window.SEASON_META = {
  1: {years:"1987–88", showrunner:"Gene Roddenberry"},
  2: {years:"1988–89", showrunner:"Gene Roddenberry (Maurice Hurley, head writer)"},
  3: {years:"1989–90", showrunner:"Rick Berman & Michael Piller (from 3×05)"},
  4: {years:"1990–91", showrunner:"Rick Berman & Michael Piller"},
  5: {years:"1991–92", showrunner:"Rick Berman & Michael Piller"},
  6: {years:"1992–93", showrunner:"Rick Berman & Michael Piller"},
  7: {years:"1993–94", showrunner:"Rick Berman & Jeri Taylor"},
};
