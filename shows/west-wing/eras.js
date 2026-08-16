// The West Wing (NBC, 1999–2006) — chart data on a SEASON axis: 7 columns, 155 episodes
// (154 regular + "Isaac and Ishmael", carried as 3×00 because it aired ahead of the S3 premiere).
// Each entry: [label, startSeason, endSeason, bg, fg?]
const NAVY="#1f3a5f", DNAVY="#132a45", BLUE="#3f6fb5", LBLUE="#cfe0f5", RED="#b3242b", DRED="#7a0f16",
      ORANGE="#e08a3c", GOLD="#c9a227", LGOLD="#efd98a", GREEN="#3f7d4e", LGREEN="#a8d0a8",
      PURPLE="#5b3f8a", LPURP="#cbb8e8", GRAY="#7c7c7c", DGRAY="#333", WHITE="#fff", BLACK="#000",
      TEAL="#2a7f7a", PINK="#e2a0ad", BROWN="#7a5230", CREAM="#e8e2d0";

window.ERA_CATS = [
  ["eras","Showrunner & era"],
  ["presidency","The Bartlet presidency"],
  ["roster","The senior staff"],
  ["arcs","Major arcs"],
  ["world","Crises & the world"],
  ["recurring","Recurring characters"],
];

window.ERAS = {
  eras: [
    [["Aaron Sorkin & Thomas Schlamme", 1, 4, NAVY, WHITE], ["John Wells", 5, 7, RED, WHITE]],
    [["Sorkin writes (or rewrites) nearly every script — walk-and-talk, aria-length speeches", 1, 4, LBLUE, BLACK], ["Wells era — a wider writers' room, colder light, campaign serialization", 5, 7, ORANGE, BLACK]],
    [["NBC, Wednesdays at 9 — 22-episode seasons", 1, 7, DGRAY, WHITE]],
    [["Peak Emmy run — 4 consecutive Best Drama wins", 1, 4, LGOLD, BLACK], ["Ratings slide, then the campaign revival", 5, 7, GRAY, WHITE]],
  ],
  presidency: [
    [["Bartlet's first term", 1, 3, NAVY, WHITE], ["Re-election; second inauguration 4×14", 4, 4, GOLD, BLACK], ["Bartlet's second term", 5, 7, NAVY, WHITE]],
    [["Re-election campaign vs. Gov. Rob Ritchie (R-FL)", 3, 4, RED, WHITE], ["The primaries", 6, 6, PURPLE, WHITE], ["The Santos–Vinick general election", 7, 7, GOLD, BLACK]],
    [["VP John Hoynes (resigns in scandal 4×21)", 1, 4, BLUE, WHITE], ["VP Bob Russell (confirmed 5×03)", 5, 7, LGREEN, BLACK]],
    [["25th Amendment invoked — Speaker Glen Walken is acting president (4×23–5×02)", 4, 5, DRED, WHITE], ["Transition to President-elect Santos (7×19–7×22)", 7, 7, TEAL, WHITE]],
    [["In-show: Jan 1999 – Jan 2003 (first term)", 1, 4, CREAM, BLACK], ["In-show: Jan 2003 – Jan 2007 (second term)", 5, 7, LBLUE, BLACK]],
  ],
  roster: [
    [["Leo McGarry — Chief of Staff", 1, 5, GOLD, BLACK], ["C.J. Cregg — Chief of Staff (from 6×03, after Leo's heart attack)", 6, 7, PURPLE, WHITE]],
    [["C.J. Cregg — Press Secretary", 1, 5, PURPLE, WHITE], ["Annabeth Schott — Press Secretary (from 6×05)", 6, 7, PINK, BLACK]],
    [["Toby Ziegler — Communications Director (fired 7×05 over the shuttle leak)", 1, 6, TEAL, WHITE], ["Will Bailey — Communications Director", 7, 7, LGREEN, BLACK]],
    [["Josh Lyman — Deputy Chief of Staff (quits ~6×11 to draft Santos)", 1, 6, ORANGE, BLACK], ["Josh — Santos campaign manager, then Chief of Staff-designate", 7, 7, RED, WHITE]],
    [["Sam Seaborn — Deputy Communications Director (leaves 4×22 for the California 47th)", 1, 4, BLUE, WHITE], ["Sam returns as Deputy Chief of Staff-designate (7×19)", 7, 7, LBLUE, BLACK]],
    [["Donna Moss — Josh's assistant (defects to the Russell campaign 6×15)", 1, 6, PINK, BLACK], ["Donna — Santos press aide, then the First Lady's Chief of Staff", 7, 7, LPURP, BLACK]],
    [["Charlie Young — the President's body man, later Deputy Special Assistant", 1, 7, BROWN, WHITE]],
    [["Mandy Hampton — media consultant", 1, 1, ORANGE, BLACK], ["Ainsley Hayes — Associate White House Counsel (from 2×04)", 2, 3, LGREEN, BLACK], ["Joe Quincy — Associate Counsel (from 4×20)", 4, 5, GRAY, WHITE], ["Annabeth Schott (from 6×04)", 6, 7, PINK, BLACK]],
    [["Will Bailey — speechwriter, then Deputy Communications Director (from 4×06)", 4, 5, LGREEN, BLACK], ["Will — VP Russell's Chief of Staff", 6, 6, GRAY, WHITE], ["Will — back in the West Wing", 7, 7, LGREEN, BLACK]],
    [["Kate Harper — Deputy National Security Advisor (from 5×19)", 5, 7, DNAVY, WHITE]],
    [["Mrs. Landingham — Executive Secretary (killed by a drunk driver, 2×21)", 1, 2, GOLD, BLACK], ["Debbie Fiderer — Executive Secretary (hired 4×05)", 4, 7, LPURP, BLACK]],
    [["Margaret Hooper — assistant to the Chief of Staff (Leo, then C.J.)", 1, 7, LBLUE, BLACK]],
  ],
  arcs: [
    [["Bartlet's MS, concealed (Toby works it out in 17 People, 2×18)", 1, 2, DRED, WHITE], ["The grand jury, the hearings & censure (H. Con-172, 3×10)", 3, 3, RED, WHITE], ["Zoey's kidnapping & the 25th Amendment", 4, 5, DGRAY, WHITE], ["The military space-shuttle leak → Toby's firing & pardon", 6, 7, NAVY, WHITE]],
    [["Rosslyn: the shooting and the year of recovering from it (1×22–2×02)", 1, 2, BLACK, WHITE], ["Shareef's assassination and the Qumari blowback", 3, 5, BROWN, WHITE], ["Leo's heart attack (6×02); C.J. takes the big office", 6, 6, GOLD, BLACK], ["Leo's death on election day (7×17) and Requiem", 7, 7, DRED, WHITE]],
    [["Mrs. Landingham's death & Two Cathedrals", 2, 2, GOLD, BLACK], ["Re-election: Ritchie, the debate, Game On", 3, 4, RED, WHITE], ["The government shutdown & Speaker Haffley", 5, 5, ORANGE, BLACK], ["The convention: Santos nominated on the fourth ballot", 6, 6, PURPLE, WHITE], ["The transition; Bartlet's last day", 7, 7, TEAL, WHITE]],
    [["Josh & Donna — the long, slow, unspoken burn", 1, 6, PINK, BLACK], ["Josh & Donna, finally", 7, 7, PINK, BLACK]],
    [["C.J. & Danny Concannon — round one", 1, 2, LBLUE, BLACK], ["Sam's run for California's 47th", 4, 4, BLUE, WHITE], ["Gaza: Donna gravely wounded, Fitzwallace killed (5×21)", 5, 5, DRED, WHITE], ["C.J. & Danny — round two", 6, 7, LBLUE, BLACK]],
    [["Bartlet vs. Toby: the argument that runs seven years", 1, 7, CREAM, BLACK]],
  ],
  world: [
    [["Qumar: the women of Qumar, then Shareef", 3, 5, BROWN, WHITE], ["Israel–Palestine: the Camp David accords (6×01–03)", 6, 6, GREEN, WHITE], ["Kazakhstan: Russia, China and a nuclear standoff", 7, 7, RED, WHITE]],
    [["Haiti: the coup and the carrier (2×21–3×02)", 2, 3, ORANGE, BLACK], ["Genocide in Equatorial Kundu", 4, 4, DRED, WHITE], ["The Gaza bombing and the retaliation debate", 5, 5, GREEN, WHITE], ["The stranded space-shuttle crew and the secret military orbiter", 6, 7, DNAVY, WHITE]],
    [["India & Pakistan over Kashmir", 1, 1, GRAY, WHITE], ["China, Taiwan & the Three Gorges", 3, 3, LBLUE, BLACK], ["North Korea: secret disarmament talks", 5, 5, GRAY, WHITE], ["Belarus, Cuba, Iran & an asteroid", 6, 6, LGREEN, BLACK], ["The Palestinian assassination & the funeral", 7, 7, CREAM, BLACK]],
    [["Domestic: the census, the ERA, gays in the military", 1, 2, LGOLD, BLACK], ["Post-9/11 America — Isaac and Ishmael (3×00), airport security", 3, 4, BLACK, WHITE], ["The shutdown, Social Security & the Supreme Court seats", 5, 5, ORANGE, BLACK], ["Energy, the Hubbert peak & immigration", 6, 6, GREEN, WHITE], ["The San Andreo nuclear accident (7×12–13)", 7, 7, GOLD, BLACK]],
  ],
  recurring: [
    [["Abbey Bartlet — the First Lady (from 1×07)", 1, 7, LPURP, BLACK]],
    [["Zoey Bartlet (from 1×05)", 1, 7, PINK, BLACK]],
    [["Danny Concannon — the Washington Post", 1, 2, LBLUE, BLACK], ["Danny, back on the beat", 4, 5, LBLUE, BLACK], ["Danny & C.J.", 7, 7, BLUE, WHITE]],
    [["Adm. Percy Fitzwallace — Chairman, Joint Chiefs (killed in Gaza, 5×21)", 1, 5, DNAVY, WHITE]],
    [["Nancy McNally — National Security Advisor (from 2×01)", 2, 7, DGRAY, WHITE]],
    [["Joey Lucas — the pollster (from 1×14)", 1, 7, GREEN, WHITE]],
    [["Lord John Marbury — British Ambassador (from 1×11)", 1, 3, PURPLE, WHITE], ["Marbury returns (6×14)", 6, 6, PURPLE, WHITE]],
    [["Bruno Gianelli — Bartlet's campaign strategist", 3, 4, GOLD, BLACK], ["Bruno runs Vinick's campaign", 6, 7, ORANGE, BLACK]],
    [["Amy Gardner (from 3×08)", 3, 5, TEAL, WHITE], ["Amy joins the Santos campaign", 7, 7, TEAL, WHITE]],
    [["Oliver Babish — White House Counsel (from 2×19)", 2, 3, GRAY, WHITE], ["Babish runs the leak investigation", 7, 7, GRAY, WHITE]],
    [["Mallory O'Brien — Leo's daughter", 1, 2, PINK, BLACK], ["Andrea Wyatt — Toby's ex-wife, and the twins", 3, 5, LGREEN, BLACK], ["Ellie & the wedding; Liz Bartlet Westin", 7, 7, LPURP, BLACK]],
    [["Rep. Matt Santos (D-TX) — from 6×05", 6, 7, RED, WHITE]],
    [["Sen. Arnold Vinick (R-CA) — from 6×08", 6, 7, GOLD, BLACK]],
    [["Helen Santos, Ronna, Bram, Edie & Lou Thornton — the campaign bench", 6, 7, LGOLD, BLACK]],
    [["Speaker Jeff Haffley (R) — the shutdown", 5, 6, DRED, WHITE], ["Sheila Brooks & Bob Mayer — Vinick's team", 7, 7, CREAM, BLACK]],
  ],
};

window.SEASON_META = {
  1:{years:"1999–2000",showrunner:"Sorkin & Schlamme"},
  2:{years:"2000–01",showrunner:"Sorkin & Schlamme"},
  3:{years:"2001–02",showrunner:"Sorkin & Schlamme"},
  4:{years:"2002–03",showrunner:"Sorkin & Schlamme"},
  5:{years:"2003–04",showrunner:"John Wells"},
  6:{years:"2004–05",showrunner:"John Wells"},
  7:{years:"2005–06",showrunner:"John Wells"},
};
