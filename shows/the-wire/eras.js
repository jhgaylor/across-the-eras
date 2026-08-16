// The Wire (HBO, 2002–08) — chart data on an EPISODE axis: columns are the 60 episodes in order.
// 1–13 = S1, 14–25 = S2, 26–37 = S3, 38–50 = S4, 51–60 = S5.
// Absolute index helpers: S1eN = N | S2eN = 13+N | S3eN = 25+N | S4eN = 37+N | S5eN = 50+N
// Each entry: [label, startEp, endEp, bg, fg?]
window.CHART_AXIS = "episode";

const BRICK="#9e3b2e", AMBER="#d98e04", GOLD="#e8b73a", CREAM="#efe3c8",
      NAVY="#1d3557", BLUE="#3d6fa8", LBLUE="#bcd4ea", STEEL="#5c7a99", SLATE="#46525e",
      GREEN="#3f7d4f", LGREEN="#a9d3a0", OLIVE="#6e7a3a", TEAL="#2a8c8c",
      PURPLE="#6b4c9a", LPURP="#c9b6e6", PINK="#e79aa8",
      RED="#c0392b", DRED="#7a1f14", ORANGE="#e0762a", RUST="#a85b2b",
      BROWN="#7b5230", TAN="#c8a878", GRAY="#7c7c7c", DGRAY="#333", INK="#161616",
      WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["seasons","Season & institution"],
  ["cases","Investigations & cases"],
  ["barksdale","The Barksdales & the corners"],
  ["connect","Marlo, Joe & the connect"],
  ["law","The Law"],
  ["politics","City Hall, command & institutions"],
  ["recurring","Recurring characters"],
];

window.ERAS = {
  seasons: [
    [["S1 — The towers & the detail", 1, 13, BRICK, WHITE],
     ["S2 — The port", 14, 25, NAVY, WHITE],
     ["S3 — City Hall & Hamsterdam", 26, 37, AMBER, BLACK],
     ["S4 — The schools", 38, 50, GREEN, WHITE],
     ["S5 — The newspaper", 51, 60, SLATE, WHITE]],

    [["The drug trade", 1, 13, TAN, BLACK],
     ["Blue-collar labor & the docks", 14, 25, LBLUE, BLACK],
     ["The political machine", 26, 37, CREAM, BLACK],
     ["Public education", 38, 50, LGREEN, BLACK],
     ["The media", 51, 60, TAN, BLACK]],

    [["In-show year: 2002", 1, 13, GRAY, WHITE],
     ["2003", 14, 25, GRAY, WHITE],
     ["2004", 26, 37, GRAY, WHITE],
     ["2006", 38, 50, GRAY, WHITE],
     ["2008 (+ epilogue)", 51, 60, GRAY, WHITE]],

    [["David Simon — creator & showrunner, all 60", 1, 60, INK, WHITE]],
  ],

  cases: [
    [["The Barksdale wiretap detail", 1, 13, BRICK, WHITE],
     ["The Sobotka / port case", 14, 25, NAVY, WHITE],
     ["Major Crimes vs Barksdale & Bell", 26, 37, AMBER, BLACK],
     ["The Stanfield case", 38, 60, DRED, WHITE]],

    [["Hamsterdam — the free zones", 29, 37, ORANGE, BLACK],
     ["Colvin's special class at Tilghman", 41, 50, LGREEN, BLACK],
     ["McNulty's fabricated serial killer", 53, 60, DGRAY, WHITE]],

    [["Clay Davis money trail (Freamon's paper chase)", 33, 56, GOLD, BLACK],
     ["Davis acquitted 5×07", 57, 60, CREAM, BLACK]],

    [["The 22 bodies in the vacants (found 4×13)", 50, 60, INK, WHITE]],

    [["The wire: cloned pagers → the pit payphones", 5, 13, TEAL, WHITE],
     ["Port cameras & the can bounce", 16, 25, TEAL, WHITE],
     ["Burners & disposables", 31, 50, TEAL, WHITE],
     ["Marlo's clock-face picture texts (cracked 5×09)", 51, 60, TEAL, WHITE]],
  ],

  barksdale: [
    [["Avon Barksdale runs the towers", 1, 13, BRICK, WHITE],
     ["Avon inside — Stringer runs it", 14, 30, TAN, BLACK],
     ["Avon home, war with Marlo", 31, 37, BRICK, WHITE],
     ["Avon back inside for good (3×12)", 38, 60, GRAY, WHITE]],

    [["Stringer Bell — Avon's number two", 1, 13, PURPLE, WHITE],
     ["Stringer runs the business (co-op, condos, econ class)", 14, 30, PURPLE, WHITE],
     ["Stringer vs Avon — killed 3×11", 31, 36, DRED, WHITE]],

    [["D'Angelo — the pit, then the towers", 1, 13, BLUE, WHITE],
     ["D'Angelo inside — killed 2×06", 14, 19, DRED, WHITE],
     ["Wee-Bey serving life (Namond's father)", 38, 50, SLATE, WHITE]],

    [["Bodie Broadus — the pit to the corner, killed 4×13", 1, 50, RUST, WHITE],
     ["Poot walks away from the game", 51, 60, TAN, BLACK]],

    [["Wallace — killed 1×12", 1, 12, DRED, WHITE],
     ["Cutty Wise — out of prison, then the gym", 26, 60, ORANGE, BLACK]],

    [["Poot Carr", 1, 50, TAN, BLACK]],

    [["Stinkum, Savino, Bird & the Barksdale muscle", 1, 13, BROWN, WHITE],
     ["Slim Charles — Avon's enforcer, then the Co-Op's", 26, 60, BROWN, WHITE]],
  ],

  connect: [
    [["Marlo Stanfield's rise", 26, 59, INK, WHITE],
     ["Marlo takes the deal, walks", 60, 60, GRAY, WHITE]],

    [["Chris & Snoop — Marlo's muscle (Snoop killed 5×09)", 26, 59, DGRAY, WHITE],
     ["Chris takes the charge for the vacants", 60, 60, SLATE, WHITE]],

    [["Proposition Joe — the East side", 9, 25, GREEN, WHITE],
     ["Prop Joe & the New Day Co-Op — killed 5×05", 26, 55, GREEN, WHITE],
     ["Marlo holds the connect", 56, 60, OLIVE, WHITE]],

    [["Cheese Wagstaff — Joe's nephew (killed 5×10)", 14, 60, LGREEN, BLACK]],

    [["The Greek & Vondas — the connect", 14, 25, NAVY, WHITE],
     ["The Greek returns for Marlo", 54, 60, NAVY, WHITE]],

    [["Omar Little (first robs the pit 1×03)", 3, 13, RED, WHITE],
     ["Omar in S2 — testifies against Bird, shoots Mouzone", 14, 25, RED, WHITE],
     ["Omar's war on the Barksdales", 26, 37, RED, WHITE],
     ["Omar vs Marlo — framed for Ms. Anna's murder", 38, 50, RED, WHITE],
     ["Omar back from the island — killed 5×08", 51, 58, DRED, WHITE]],

    [["Brother Mouzone — the New York muscle", 20, 25, INK, WHITE],
     ["Mouzone & Omar come for Stringer", 35, 36, DRED, WHITE]],
  ],

  law: [
    [["McNulty — the Barksdale detail", 1, 13, BLUE, WHITE],
     ["McNulty exiled to the marine unit", 14, 18, LBLUE, BLACK],
     ["McNulty on the port case", 19, 25, BLUE, WHITE],
     ["McNulty — Major Crimes", 26, 37, BLUE, WHITE],
     ["McNulty on Western District patrol (sober, happy)", 38, 50, LBLUE, BLACK],
     ["McNulty — homicide & the fake killer", 51, 60, DGRAY, WHITE]],

    [["Kima Greggs — the detail", 1, 9, TEAL, WHITE],
     ["Greggs shot 1×10, recovering", 10, 25, PINK, BLACK],
     ["Greggs — Major Crimes", 26, 37, TEAL, WHITE],
     ["Greggs — homicide", 38, 60, TEAL, WHITE]],

    [["Bunk Moreland — homicide, all 60", 1, 60, RUST, WHITE]],

    [["Lester Freamon — exiled to pawn shop, joins 1×02", 2, 13, GOLD, BLACK],
     ["Freamon — the port case", 14, 25, GOLD, BLACK],
     ["Freamon — Major Crimes, follows the money", 26, 60, GOLD, BLACK]],

    [["Lt. Cedric Daniels runs the detail", 1, 25, NAVY, WHITE],
     ["Daniels — Major Crimes commander", 26, 37, NAVY, WHITE],
     ["Daniels — Western District major, then colonel", 38, 50, NAVY, WHITE],
     ["Daniels — Deputy Ops → Commissioner → resigns 5×10", 51, 60, STEEL, WHITE]],

    [["Herc — the detail", 1, 37, OLIVE, WHITE],
     ["Herc — the mayor's driver", 38, 47, OLIVE, WHITE],
     ["Herc fired, works as Levy's investigator", 48, 60, GRAY, WHITE]],

    [["Carver — the detail (Burrell's snitch)", 1, 25, LGREEN, BLACK],
     ["Sgt. Carver — Western District, learns the job", 26, 50, GREEN, WHITE],
     ["Lt. Carver", 51, 60, GREEN, WHITE]],

    [["Prez — the detail, the man who breaks the code", 1, 25, LPURP, BLACK],
     ["Prez shoots a plainclothes officer (late S3), resigns", 26, 36, DRED, WHITE],
     ["Mr. Pryzbylewski teaches 8th-grade math", 38, 60, LGREEN, BLACK]],

    [["Sydnor — the detail", 1, 13, STEEL, WHITE],
     ["Sydnor — Major Crimes", 26, 60, STEEL, WHITE]],

    [["Sgt. Jay Landsman — homicide, all 60", 1, 60, BROWN, WHITE]],

    [["Maj. Bunny Colvin — Western District & Hamsterdam", 26, 37, ORANGE, BLACK],
     ["Colvin — hotel security, then the special class", 38, 50, ORANGE, BLACK],
     ["Colvin & Namond", 60, 60, CREAM, BLACK]],

  ],

  politics: [
    [["Commissioner Burrell", 1, 54, SLATE, WHITE],
     ["Rawls acting commissioner", 55, 58, SLATE, WHITE],
     ["Daniels", 59, 59, NAVY, WHITE],
     ["Valchek", 60, 60, GRAY, WHITE]],

    [["Rawls — homicide major → Deputy Ops → State Police", 1, 60, DGRAY, WHITE]],

    [["Maj. Valchek — the stained-glass grudge starts the port case", 14, 60, GRAY, WHITE]],

    [["Mayor Clarence Royce", 26, 47, GOLD, BLACK],
     ["Mayor Tommy Carcetti", 48, 60, BLUE, WHITE]],

    [["Councilman Tommy Carcetti", 26, 42, LBLUE, BLACK],
     ["Carcetti wins the primary 4×06", 43, 47, BLUE, WHITE],
     ["Carcetti runs for governor", 51, 60, NAVY, WHITE]],

    [["State Senator Clay Davis — \"Sheeeeeit\"", 1, 50, GOLD, BLACK],
     ["Davis indicted, the state's case", 51, 56, RUST, WHITE],
     ["Acquitted 5×07", 57, 60, CREAM, BLACK]],

    [["Norman Wilson — Carcetti's deputy chief of staff", 38, 60, PURPLE, WHITE]],

    [["IBS Local 1514 — Frank Sobotka's union & the grain pier", 14, 25, NAVY, WHITE],
     ["Edward Tilghman Middle School", 38, 50, GREEN, WHITE],
     ["The Baltimore Sun — buyouts and \"more with less\"", 51, 60, SLATE, WHITE]],

    [["Frank Sobotka — treasurer, killed 2×11", 14, 24, DRED, WHITE],
     ["Colvin's special class (the \"corner kids\")", 41, 50, LGREEN, BLACK],
     ["Gus Haynes vs Scott Templeton's fabrications", 51, 60, ORANGE, BLACK]],

    [["Klebanow, Whiting & the buyout list", 51, 60, TAN, BLACK]],

    [["Alma Gutierrez & Roger Twigg on the city desk", 51, 60, LBLUE, BLACK]],
  ],

  recurring: [
    [["Beadie Russell — port police, then the detail", 14, 25, LBLUE, BLACK],
     ["Beadie & McNulty at home", 37, 60, PINK, BLACK]],

    [["Bubbles — CI, rock bottom, then clean", 1, 60, TEAL, WHITE]],

    [["Johnny Weeks — Bubbles' partner, dies in Hamsterdam (S3)", 1, 37, GRAY, WHITE]],

    [["Maurice Levy — the lawyer for everybody", 1, 60, PURPLE, WHITE]],

    [["ASA Rhonda Pearlman — the warrants and the deals", 1, 60, LPURP, BLACK]],

    [["Michael, Dukie, Randy & Namond — the corner boys", 38, 50, LGREEN, BLACK],
     ["Michael on his own; Dukie adrift", 51, 60, BROWN, WHITE]],

    [["Nick & Ziggy Sobotka", 14, 25, LBLUE, BLACK],
     ["Nick Sobotka resurfaces 5×10", 60, 60, STEEL, WHITE]],

    [["Butchie — Omar's banker, killed 5×04", 3, 54, INK, WHITE]],

    [["Brianna Barksdale — D'Angelo's mother", 1, 37, PINK, BLACK]],
  ],
};

window.SEASON_META = {
  1:{years:"2002",showrunner:"David Simon"},
  2:{years:"2003",showrunner:"David Simon"},
  3:{years:"2004",showrunner:"David Simon"},
  4:{years:"2006",showrunner:"David Simon"},
  5:{years:"2008",showrunner:"David Simon"},
};
