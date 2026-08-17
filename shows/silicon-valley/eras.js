// Silicon Valley (HBO, 2014-2019) - chart data on a SEASON axis: 6 columns, 53 episodes
// (S1: 8, S2: 10, S3: 10, S4: 10, S5: 8, S6: 7). No specials, no gaps - TVmaze's s/e numbering used verbatim.
window.CHART_AXIS = "season";

const GREEN="#3ddc84", DGREEN="#1f7a4d", LGREEN="#a8e6c3", MGREEN="#2fae68",
      GRAY="#5b6470", DGRAY="#2b2f36", LGRAY="#cfd4da",
      BLACK="#111111", WHITE="#ffffff",
      HBLUE="#3b6fd6", DHBLUE="#1f3f80", HRED="#c94a4a",
      ORANGE="#e08a3c", GOLD="#c9a227", LGOLD="#efd98a",
      PURPLE="#7a5cc9", LPURP="#d9cdf2", TEAL="#2a9d8f";

window.ERA_CATS = [
  ["eras","Pied Piper era"],
  ["funding","Funding & ownership"],
  ["ceo","CEOs of Pied Piper"],
  ["roster","Pied Piper roster"],
  ["hooli","Hooli & Gavin Belson"],
  ["rivals","Rivals, frenemies & threats"],
  ["satire","Real-world tech satire"],
];

window.ERAS = {
  eras: [
    [
      ["Founding & TechCrunch Disrupt — Hacker Hostel to Pied Piper Inc.", 1, 1, GREEN, BLACK],
      ["Hooli lawsuit & Raviga backing — surviving as an independent startup", 2, 2, HBLUE, WHITE],
      ["Richard ousted, 'Action Jack' Barker's platform pivot, the clickfarm reveal", 3, 3, ORANGE, BLACK],
      ["PiperChat, then the decentralized 'new Internet' pivot", 4, 4, TEAL, WHITE],
      ["Funded and scaled — building PiperNet, surviving a 51% attack", 5, 5, PURPLE, WHITE],
      ["The algorithm breaks encryption — Pied Piper dismantles itself", 6, 6, DGRAY, WHITE],
    ],
    [
      ["8-episode season", 1, 1, LGRAY, BLACK],
      ["10-episode seasons", 2, 4, GRAY, WHITE],
      ["8-episode season", 5, 5, LGRAY, BLACK],
      ["7-episode final season", 6, 6, DGRAY, WHITE],
    ],
    [
      ["Mike Judge & Alec Berg — co-showrunners, start to finish", 1, 6, MGREEN, BLACK],
    ],
  ],
  funding: [
    [
      ["Peter Gregory — eccentric Raviga founder & Pied Piper's first believer", 1, 1, PURPLE, WHITE],
      ["Laurie Bream — Raviga managing partner (succeeds Gregory, from S2); funds, chairs, and eventually turns on Pied Piper", 2, 6, LPURP, BLACK],
    ],
    [
      ["Russ Hanneman — 'ten out of ten' Series A money and a board seat", 2, 4, ORANGE, BLACK],
      ["Russ blows his fortune on 36 ICOs (ties to 5×07 'Initial Coin Offering')", 5, 5, GOLD, BLACK],
      ["RussFest — one more comeback event (6×06)", 6, 6, ORANGE, BLACK],
    ],
    [
      ["AT&T — multi-billion-dollar deal to host PiperNet (6×07)", 6, 6, HBLUE, WHITE],
    ],
  ],
  ceo: [
    [
      ["Richard Hendricks — founder & CEO", 1, 2, GREEN, BLACK],
      ["Jack 'Action Jack' Barker — installed by the board (3×01), ousted after the clickfarm scandal (3×10)", 3, 3, ORANGE, BLACK],
      ["Richard Hendricks — reclaims the company (3×10), CEO through the end", 4, 6, GREEN, BLACK],
    ],
    [
      ["Dinesh Chugtai — CEO of the PiperChat spinoff for 11 days, cedes it to Gavin (4×02)", 4, 4, LGREEN, BLACK],
    ],
  ],
  roster: [
    [
      ["Richard Hendricks — founder, chief architect of the compression algorithm", 1, 6, GREEN, BLACK],
    ],
    [
      ["Bertram Gilfoyle & Dinesh Chugtai — core engineers, running feud", 1, 6, LGREEN, BLACK],
    ],
    [
      ["Jared Dunn — Head of Business Development, keeps the trains running", 1, 3, GOLD, BLACK],
      ["Gives his notice after Richard's villain turn (4×10) — doesn't actually leave", 4, 4, GOLD, BLACK],
      ["At Richard's side through the endgame", 5, 6, GOLD, BLACK],
    ],
    [
      ["Erlich Bachman — hosts Pied Piper at the Hacker Hostel, owns 10%", 1, 4, LGOLD, BLACK],
      ["Gone — last seen headed for a Tibetan opium den; his fate is the finale's biggest twist", 5, 6, DGRAY, WHITE],
    ],
    [
      ["Monica Hall — Raviga associate, Peter Gregory's aide, Pied Piper's closest ally outside the house", 1, 4, PURPLE, WHITE],
      ["Joins Bream-Hall Capital as a partner, still in Pied Piper's corner", 5, 5, TEAL, WHITE],
      ["Back on the inside for the endgame", 6, 6, PURPLE, WHITE],
    ],
    [
      ["Big Head — unassigned at Hooli, paid to do nothing", 1, 1, GRAY, WHITE],
      ["Promoted at Hooli by accident", 2, 2, LGRAY, BLACK],
      ["Paid off with a Stanford 'visiting' gig (part of the Hooli settlement)", 3, 3, GRAY, WHITE],
      ["Accidental hire at Bream-Hall Capital — blows through $20M as a hobbyist VC", 4, 5, TEAL, WHITE],
      ["Back to Stanford as a guest lecturer", 6, 6, GRAY, WHITE],
    ],
  ],
  hooli: [
    [
      ["Gavin Belson — Hooli CEO, chasing Nucleus, obsessed with beating Richard", 1, 3, HBLUE, WHITE],
      ["Loses his grip on Hooli; a rocky stretch of ousters and comebacks", 4, 4, HRED, WHITE],
      ["Back on top at Hooli (5×01) — chastened, then chasing tech 'ethics'", 5, 6, HBLUE, WHITE],
    ],
    [
      ["Jack Barker defects to Hooli, works for Gavin", 4, 4, DHBLUE, WHITE],
    ],
    [
      ["Nucleus — Hooli's failed in-house Pied Piper knockoff", 1, 3, HRED, WHITE],
      ["Box 3, the smart fridge & other Hooli-Con flops", 4, 4, HRED, WHITE],
      ["Son of Anton & Hooli's AI ambitions", 5, 6, HRED, WHITE],
    ],
  ],
  rivals: [
    [
      ["Endframe — the rival Pied Piper is pressured into merging with", 2, 2, GRAY, WHITE],
    ],
    [
      ["Jian-Yang — steals Erlich's 'Seefood' idea, builds Not Hotdog, schemes his way into owning the incubator house", 3, 6, GOLD, BLACK],
    ],
    [
      ["Keenan Feldspar — Silicon Valley's latest 'it' boy, tempts Richard with a too-good offer", 4, 4, TEAL, WHITE],
    ],
    [
      ["Laurie Bream & Yao's 51% attack on PiperNet", 5, 5, PURPLE, WHITE],
    ],
  ],
  satire: [
    [
      ["Startup-culture excess & 'making the world a better place'", 1, 1, GREEN, BLACK],
      ["VC clubbiness & abusive-founder culture", 2, 2, GRAY, WHITE],
      ["Big Tech platform pivots & antitrust anxiety", 3, 3, ORANGE, BLACK],
      ["Decentralization & blockchain-era 'new Internet' dreams", 4, 4, TEAL, WHITE],
      ["Crypto-mania — 36 ICOs (5×07) and runaway valuations", 5, 5, GOLD, BLACK],
      ["Data privacy, encryption & Big Tech's ethical reckoning", 6, 6, DGRAY, WHITE],
    ],
    [
      ["Hooli = the Google/Facebook-scale monolith; Pied Piper = the scrappy YC-style startup", 1, 6, HBLUE, WHITE],
    ],
  ],
};

window.SEASON_META = {
  1: { years: "2014", showrunner: "Mike Judge & Alec Berg" },
  2: { years: "2015", showrunner: "Mike Judge & Alec Berg" },
  3: { years: "2016", showrunner: "Mike Judge & Alec Berg" },
  4: { years: "2017", showrunner: "Mike Judge & Alec Berg" },
  5: { years: "2018", showrunner: "Mike Judge & Alec Berg" },
  6: { years: "2019", showrunner: "Mike Judge & Alec Berg" },
};
