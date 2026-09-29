// Babylon 5 (PTEN 1993–97, TNT 1998) — chart data on an EPISODE axis.
// Columns are the 112 entries of episodes.json in TVmaze air order:
//   1        = "The Gathering" (1993 pilot movie, TVmaze 1×00)
//   2–23     = S1 e1–e22  | abs = 1 + N
//   24–45    = S2 e1–e22  | abs = 23 + N
//   46–67    = S3 e1–e22  | abs = 45 + N
//   68–89    = S4 e1–e22  | abs = 67 + N
//   90       = "In the Beginning" (1998 prequel movie, TVmaze 5×00 — aired just before year 5)
//   91–112   = S5 e1–e22  | abs = 90 + N
// Thirdspace, River of Souls, A Call to Arms and the later films are NOT columns — see NOTES.md.
// E(s, e) below turns a season/episode into its column so every bar reads in the show's own numbering.
// Each entry: [label, startEp, endEp, bg, fg?]
window.CHART_AXIS = "episode";

const E = (s, e) => [0, 1, 23, 45, 67, 90][s] + e;

const GOLD="#e0b54a", LGOLD="#f0d98c", AMBER="#d98c1f", CREAM="#efe4c8", TAN="#c8a878", BROWN="#6f4b2e",
      NAVY="#14284b", BLUE="#2f5d9e", LBLUE="#a9c6ea", STEEL="#5c7a99", SLATE="#46525e",
      RED="#b3262e", DRED="#6e1419", RUST="#a8442a", ORANGE="#e07a2a",
      GREEN="#3f7d4f", OLIVE="#6e7a3a", LGREEN="#a9d3a0", TEAL="#2a8c8c", LTEAL="#9fd8d8",
      PURPLE="#5e3f8f", LPURP="#c9b6e6", PINK="#e79aa8",
      GRAY="#7c7c7c", DGRAY="#33383d", INK="#0b0d12", WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["plan","The five-year plan"],
  ["command","Command of Babylon 5"],
  ["shadows","The Shadow War"],
  ["earth","Earth & the civil war"],
  ["empires","Centauri, Narn & Minbari"],
  ["psi","Psi Corps & the telepath crisis"],
  ["aftermath","Year 5 — the Alliance & the aftermath"],
];

window.ERAS = {
  plan: [
    [["Year 1 (2258) — \"Signs and Portents\", with The Gathering (2257) as prologue", E(1,0), E(1,22), BLUE, WHITE],
     ["Year 2 (2259) — \"The Coming of Shadows\"", E(2,1), E(2,22), PURPLE, WHITE],
     ["Year 3 (2260) — \"Point of No Return\"", E(3,1), E(3,22), RED, WHITE],
     ["Year 4 (2261) — \"No Surrender, No Retreat\"", E(4,1), E(4,22), AMBER, BLACK],
     ["Year 5 (2262) — \"The Wheel of Fire\"", E(5,0), E(5,22), TEAL, WHITE]],

    [["Setting the board — the station, the ambassadors, and the trapdoors for later", E(1,0), E(1,22), LBLUE, BLACK],
     ["The Shadows return; the Narn–Centauri war", E(2,1), E(2,22), LPURP, BLACK],
     ["War on two fronts — the Shadows, and Earth", E(3,1), E(3,22), PINK, BLACK],
     ["Both wars end — the Shadow War, then the civil war", E(4,1), E(4,22), LGOLD, BLACK],
     ["Prequel — the Earth–Minbari War, 2245–48", E(5,0), E(5,0), DGRAY, WHITE],
     ["Aftermath — the Alliance, the telepaths, the fall of Centauri Prime", E(5,1), E(5,22), LTEAL, BLACK]],

    [["Michael O'Hare leaves after year 1 — Sheridan takes the chair; Sinclair's story is paid off in 3×16–17", E(1,22), E(2,1), SLATE, WHITE],
     ["Talia's story cut short (2×19)", E(2,19), E(2,19), GRAY, WHITE],
     ["Year 4 compressed — with no fifth season assured, the Shadow War and the civil war are both finished", E(4,1), E(4,22), BROWN, WHITE],
     ["Claudia Christian leaves after year 4 — Lochley arrives (5×01)", E(5,1), E(5,1), SLATE, WHITE],
     ["\"Sleeping in Light\" — shot as the year-4 finale, held back to close year 5", E(5,22), E(5,22), INK, WHITE]],

    [["PTEN — first-run syndication (1993–97)", E(1,0), E(4,22), DGRAY, WHITE],
     ["TNT (1998) — In the Beginning, then year 5", E(5,0), E(5,22), STEEL, WHITE]],

    [["J. Michael Straczynski — creator and showrunner; wrote every episode of years 3 and 4", E(1,0), E(5,22), INK, WHITE]],
  ],

  command: [
    [["Commander Jeffrey Sinclair (Michael O'Hare)", E(1,0), E(1,22), BLUE, WHITE],
     ["Captain John Sheridan (Bruce Boxleitner) — arrives 2×01", E(2,1), E(4,22), GOLD, BLACK],
     ["Captain Elizabeth Lochley (Tracy Scoggins) — takes command 5×01", E(5,1), E(5,22), TEAL, WHITE]],

    [["Sinclair — the missing 24 hours at the Line (1×08), Babylon 4 (1×20)", E(1,0), E(1,22), BLUE, WHITE],
     ["Recalled (2×01) — ambassador to Minbar, off-screen", E(2,1), E(3,15), LBLUE, BLACK],
     ["War Without End (3×16–17) — Sinclair takes Babylon 4 back a thousand years and becomes Valen", E(3,16), E(3,17), NAVY, WHITE]],

    [["Sheridan takes command (2×01)", E(2,1), E(2,15), GOLD, BLACK],
     ["Learns what happened to the Icarus (2×16) — joins the conspiracy against the Shadows", E(2,16), E(3,9), LGOLD, BLACK],
     ["Declares Babylon 5 independent (3×10)", E(3,10), E(3,21), RED, WHITE],
     ["Z'ha'dum (3×22) — dies, and comes back (4×03)", E(3,22), E(4,3), INK, WHITE],
     ["Leads the Army of Light to Coriana VI (4×06)", E(4,4), E(4,6), PURPLE, WHITE],
     ["Takes the war to Clark — captured on Mars (4×17), interrogated (4×18), freed (4×19)", E(4,7), E(4,20), RUST, WHITE],
     ["Leaves EarthForce; heads the new Interstellar Alliance (4×21)", E(4,21), E(4,22), AMBER, BLACK],
     ["President of the Interstellar Alliance (inaugurated 5×01)", E(5,1), E(5,22), TEAL, WHITE]],

    [["Lt. Cmdr Laurel Takashima — XO in The Gathering", E(1,0), E(1,0), GRAY, WHITE],
     ["Lt. Cmdr Susan Ivanova (Claudia Christian) — XO", E(1,1), E(2,2), STEEL, WHITE],
     ["Commander Ivanova (promoted by 2×03) — the White Stars, the Voice of the Resistance, wounded in 4×20", E(2,3), E(4,22), BLUE, WHITE]],

    [["Michael Garibaldi — security chief; shot in the back (1×22), wakes 2×02", E(1,0), E(3,21), GREEN, WHITE],
     ["Missing after Z'ha'dum — found 4×03", E(3,22), E(4,2), INK, WHITE],
     ["Back, but not himself — quits, works for Edgars, betrays Sheridan (4×17)", E(4,3), E(4,17), DRED, WHITE],
     ["Bester's conditioning exposed — helps free Sheridan (4×19)", E(4,18), E(4,22), LGREEN, BLACK],
     ["Alliance intelligence chief — and the drinking comes back", E(5,1), E(5,21), OLIVE, WHITE]],

    [["Zack Allan (Jeff Conaway) — security officer; sides with the station over Nightwatch (3×09)", E(2,1), E(3,22), TAN, BLACK],
     ["Chief of security", E(4,1), E(5,22), BROWN, WHITE]],

    [["Dr. Benjamin Kyle — The Gathering", E(1,0), E(1,0), GRAY, WHITE],
     ["Dr. Stephen Franklin — chief medical officer", E(1,1), E(3,14), LTEAL, BLACK],
     ["Stims, walkabout, stabbed in Downbelow (3×15–3×21)", E(3,15), E(3,21), DRED, WHITE],
     ["Franklin — to Mars with Marcus (4×10); leaves for Earth at the end (5×21)", E(3,22), E(5,21), TEAL, WHITE]],

    [["Marcus Cole, Ranger (3×01)", E(3,1), E(4,20), GREEN, WHITE],
     ["Gives his life for Ivanova (4×21)", E(4,21), E(4,21), DRED, WHITE]],
  ],

  shadows: [
    [["Signs — Morden's question (1×13), Babylon 4 (1×20)", E(1,13), E(1,22), LPURP, BLACK],
     ["The Shadows return — Z'ha'dum wakes, the Narn outposts burn", E(2,1), E(2,22), PURPLE, WHITE],
     ["The Army of Light gathers — Rangers, White Stars, the station as its base", E(3,1), E(3,14), STEEL, WHITE],
     ["The Shadows attack openly (3×15) — the war proper", E(3,15), E(3,21), RED, WHITE],
     ["Z'ha'dum (3×22)", E(3,22), E(3,22), INK, WHITE],
     ["Vorlons and Shadows burn whole worlds — ends at Coriana VI (4×06)", E(4,1), E(4,6), DRED, WHITE]],

    [["Ambassador Kosh — poisoned in The Gathering; hidden in his encounter suit", E(1,0), E(2,21), LBLUE, BLACK],
     ["Kosh steps out of the suit (2×22)", E(2,22), E(2,22), GOLD, BLACK],
     ["Kosh teaches Sheridan — then is killed by the Shadows (3×15)", E(3,1), E(3,15), BLUE, WHITE],
     ["The new Vorlon ambassador (3×18) — destroyed 4×04", E(3,18), E(4,4), SLATE, WHITE],
     ["The Vorlon fleet at Coriana VI", E(4,5), E(4,6), NAVY, WHITE]],

    [["Mr. Morden asks \"What do you want?\" (1×13)", E(1,13), E(2,22), DGRAY, WHITE],
     ["Morden returns (3×15) — killed on Centauri Prime (4×06)", E(3,15), E(4,6), INK, WHITE]],

    [["The Icarus — Anna Sheridan's lost ship (2×16)", E(2,16), E(2,16), GRAY, WHITE],
     ["Anna comes back (3×22)", E(3,22), E(3,22), DGRAY, WHITE]],

    [["Epsilon III — Draal and the Great Machine (1×18–19)", E(1,18), E(1,19), TAN, BLACK],
     ["Babylon 4 reappears (1×20)", E(1,20), E(1,20), NAVY, WHITE],
     ["Draal offers the Great Machine (2×20)", E(2,20), E(2,20), TAN, BLACK],
     ["Babylon 4 goes back in time (3×16–17)", E(3,16), E(3,17), NAVY, WHITE]],

    [["Ivanova and Marcus hunt the First Ones (3×05)", E(3,5), E(3,5), LGOLD, BLACK],
     ["Lorien (4×01) and the First Ones", E(4,1), E(4,6), GOLD, BLACK]],

    [["Telepaths wired into Shadow ships — \"Ship of Tears\" (3×14)", E(3,14), E(3,14), PURPLE, WHITE],
     ["Lyta against a Shadow ship (3×18)", E(3,18), E(3,18), LPURP, BLACK]],
  ],

  earth: [
    [["President Luis Santiago", E(1,0), E(1,21), LBLUE, BLACK],
     ["EarthForce One destroyed — Santiago killed, Clark sworn in (1×22)", E(1,22), E(1,22), DRED, WHITE],
     ["President Morgan Clark", E(2,1), E(4,19), RED, WHITE],
     ["Clark kills himself as Earth is retaken (4×20)", E(4,20), E(4,20), INK, WHITE],
     ["After Clark — Sheridan answers to the Senate (4×21)", E(4,21), E(4,22), STEEL, WHITE]],

    [["The Ministry of Peace and Nightwatch (2×16)", E(2,16), E(3,8), DGRAY, WHITE],
     ["Martial law — Nightwatch moves on the station (3×09)", E(3,9), E(3,9), RED, WHITE],
     ["Nightwatch's last try, through Delenn (3×11)", E(3,11), E(3,11), DGRAY, WHITE]],

    [["The conspiracy — who really killed Santiago (Hunter, Prey 2×13; Messages from Earth 3×08)", E(1,22), E(3,8), SLATE, WHITE],
     ["Point of No Return (3×09)", E(3,9), E(3,9), RED, WHITE],
     ["Severed Dreams — EarthForce attacks, the station secedes (3×10)", E(3,10), E(3,10), DRED, WHITE],
     ["Babylon 5 independent — the civil war waits on the Shadows", E(3,11), E(4,14), RUST, WHITE],
     ["Sheridan's offensive — from Proxima (4×15) to Mars (4×20)", E(4,15), E(4,20), ORANGE, BLACK],
     ["The war is over (4×21)", E(4,21), E(4,21), LGOLD, BLACK]],

    [["Mars revolts (1×18–19)", E(1,18), E(1,19), RUST, WHITE],
     ["Free Mars (2×06)", E(2,6), E(2,6), ORANGE, BLACK],
     ["The Mars Resistance — Franklin and Marcus (4×10–11) to Endgame", E(4,10), E(4,20), RED, WHITE]],

    [["ISN's documentary (2×15)", E(2,15), E(2,15), GRAY, WHITE],
     ["\"The Illusion of Truth\" — ISN turns the station into propaganda (4×08)", E(4,8), E(4,8), DGRAY, WHITE],
     ["Ivanova's Voice of the Resistance (4×12)", E(4,12), E(4,20), BLUE, WHITE]],
  ],

  empires: [
    [["Londo Mollari — ambassador of a faded empire", E(1,0), E(1,12), GOLD, BLACK],
     ["Morden's bargain — Quadrant 37 burns (1×22)", E(1,13), E(2,8), PURPLE, WHITE],
     ["War with the Narn (2×09) — Londo rises at court", E(2,9), E(2,22), RED, WHITE],
     ["Trying to get out from under the Shadows — Lord Refa dies (3×20)", E(3,1), E(3,22), DGRAY, WHITE],
     ["Cartagia's court — Londo arranges his death (4×05) and rids Centauri Prime of the Shadows (4×06)", E(4,1), E(4,6), DRED, WHITE],
     ["Prime Minister", E(4,7), E(4,22), AMBER, BLACK],
     ["In the Beginning — told by an old Emperor Londo", E(5,0), E(5,0), GRAY, WHITE],
     ["The Drakh war creeps up on the Republic", E(5,1), E(5,17), LGOLD, BLACK],
     ["Emperor, with a Keeper (5×18)", E(5,18), E(5,22), INK, WHITE]],

    [["G'Kar — the Narn ambassador, all grievance and schemes", E(1,0), E(2,8), GREEN, WHITE],
     ["The Narn–Centauri war (2×09) — Narn falls (2×20)", E(2,9), E(2,20), DRED, WHITE],
     ["The resistance on the station — and G'Kar's awakening (3×06)", E(2,21), E(4,1), LGREEN, BLACK],
     ["Captured by the Centauri (4×02) — Cartagia's prisoner", E(4,2), E(4,4), RUST, WHITE],
     ["Narn freed (4×05)", E(4,5), E(4,22), GREEN, WHITE],
     ["The reluctant prophet — the Declaration of Principles (5×03); leaves with Lyta (5×20)", E(5,1), E(5,20), TEAL, WHITE]],

    [["Border raids — Ragesh 3 (1×01), Quadrant 37 (1×22)", E(1,1), E(1,22), TAN, BLACK],
     ["The Narn–Centauri war (2×09–2×20)", E(2,9), E(2,20), RED, WHITE],
     ["Narn under Centauri occupation", E(2,21), E(4,4), DGRAY, WHITE],
     ["Narn freed (4×05)", E(4,5), E(4,5), GREEN, WHITE],
     ["The Centauri quit the Alliance (5×16); Centauri Prime bombarded (5×18)", E(5,16), E(5,18), DRED, WHITE]],

    [["Ambassador Delenn — secretly of the Grey Council", E(1,0), E(1,19), LPURP, BLACK],
     ["Summoned by the Grey Council (1×20) — the chrysalis (1×22)", E(1,20), E(2,1), PURPLE, WHITE],
     ["Emerges part human (2×02)", E(2,2), E(2,20), PINK, BLACK],
     ["The Inquisitor (2×21) — the Army of Light", E(2,21), E(3,9), LPURP, BLACK],
     ["Breaks the Grey Council (3×10); Ranger One (3×19)", E(3,10), E(3,22), PURPLE, WHITE],
     ["Holds the alliance together — then the Minbari civil war (4×11–4×14)", E(4,1), E(4,14), GOLD, BLACK],
     ["Founding the Interstellar Alliance — with Sheridan into year 5", E(4,15), E(5,22), LGOLD, BLACK]],

    [["The Battle of the Line — Sinclair's lost 24 hours (1×08)", E(1,8), E(1,8), NAVY, WHITE],
     ["Minbari warships at the station's side (3×10)", E(3,10), E(3,10), PURPLE, WHITE],
     ["The Minbari civil war — Warrior caste against Religious (4×11–4×14)", E(4,11), E(4,14), DRED, WHITE],
     ["The Earth–Minbari War, 2245–48", E(5,0), E(5,0), NAVY, WHITE]],

    [["Lennier — Delenn's aide", E(1,1), E(5,1), LTEAL, BLACK],
     ["Lennier joins the Rangers (5×02) — the Drakh trail, and the betrayal (5×21)", E(5,2), E(5,21), TEAL, WHITE]],
  ],

  psi: [
    [["Bester — \"Mind War\" (1×06)", E(1,6), E(1,6), INK, WHITE],
     ["The underground railroad (2×08)", E(2,8), E(2,8), INK, WHITE],
     ["Dust (3×06)", E(3,6), E(3,6), INK, WHITE],
     ["\"Ship of Tears\" (3×14)", E(3,14), E(3,14), INK, WHITE],
     ["\"Epiphanies\" (4×07)", E(4,7), E(4,7), INK, WHITE],
     ["Lyta's deal (4×14)", E(4,14), E(4,14), INK, WHITE],
     ["Garibaldi's handler (4×17)", E(4,17), E(4,17), INK, WHITE],
     ["Hunting Byron's rogues (5×06)", E(5,6), E(5,6), INK, WHITE],
     ["The Downbelow siege (5×10–11)", E(5,10), E(5,11), INK, WHITE],
     ["\"The Corps Is Mother, the Corps Is Father\" (5×13)", E(5,13), E(5,13), INK, WHITE]],

    [["Lyta Alexander — commercial telepath in The Gathering", E(1,0), E(1,0), LPURP, BLACK],
     ["Talia Winters — station telepath (1×01)", E(1,1), E(2,18), PINK, BLACK],
     ["Lyta brings the warning — Talia unmasked as a Psi Corps sleeper (2×19)", E(2,19), E(2,19), DRED, WHITE],
     ["Lyta back from Vorlon space (3×04) — the Vorlons' telepath", E(3,4), E(4,22), PURPLE, WHITE],
     ["Lyta and Byron's cause — arrest ordered (5×19), leaves with G'Kar", E(5,1), E(5,20), LPURP, BLACK]],

    [["The Corps in the background — Psi Cops, blips, rogues, Eyes (1×16)", E(1,1), E(2,18), GRAY, WHITE],
     ["The Corps and the Shadows — telepaths as weapons", E(3,14), E(3,22), DGRAY, WHITE],
     ["Bester's bargains — Garibaldi's conditioning, Lyta's deal", E(4,7), E(4,19), SLATE, WHITE],
     ["The telepath crisis — Byron's rogue telepaths in Downbelow (5×01–5×11)", E(5,1), E(5,11), RED, WHITE],
     ["After Byron — a telepath homeworld, and a war coming", E(5,12), E(5,20), DRED, WHITE]],

    [["Byron (Robin Atkin Downes) — arrives with his telepaths (5×01), dies in \"Phoenix Rising\" (5×11)", E(5,1), E(5,11), PINK, BLACK]],
  ],

  aftermath: [
    [["\"Rising Star\" — the Interstellar Alliance founded (4×21)", E(4,21), E(4,21), AMBER, BLACK],
     ["\"The Deconstruction of Falling Stars\" — a thousand years of Babylon 5 (4×22)", E(4,22), E(4,22), SLATE, WHITE],
     ["The Alliance's first year — the Declaration (5×03), raids on shipping", E(5,1), E(5,15), TEAL, WHITE],
     ["The Centauri leave (5×16); the White Stars join the fight (5×17)", E(5,16), E(5,17), RUST, WHITE],
     ["The Fall of Centauri Prime — the Drakh show themselves (5×18)", E(5,18), E(5,18), INK, WHITE],
     ["Everyone leaves (5×19–5×21)", E(5,19), E(5,21), LTEAL, BLACK],
     ["\"Sleeping in Light\" — 2281, twenty years on", E(5,22), E(5,22), GOLD, BLACK]],

    [["The Drakh work through the Centauri — raids on Alliance shipping (5×12 →)", E(5,12), E(5,18), DGRAY, WHITE]],

    [["Lise Hampton — the one Garibaldi left on Mars (1×18–19)", E(1,18), E(1,19), LGREEN, BLACK],
     ["Garibaldi's relapse — Lise finds out (5×15), Sheridan confronts him (5×19); off to Mars with Lise", E(5,15), E(5,21), GREEN, WHITE]],

    [["Lochley's station — Downbelow, the telepaths, Zack", E(5,1), E(5,21), STEEL, WHITE],
     ["The station is shut down (5×22)", E(5,22), E(5,22), INK, WHITE]],
  ],
};

window.SEASON_META = {
  1:{years:"1993–94 · The Gathering + Year 1",showrunner:"J. Michael Straczynski"},
  2:{years:"1994–95",showrunner:"J. Michael Straczynski"},
  3:{years:"1995–96",showrunner:"J. Michael Straczynski"},
  4:{years:"1996–97",showrunner:"J. Michael Straczynski"},
  5:{years:"1998 · In the Beginning + Year 5",showrunner:"J. Michael Straczynski"},
};
