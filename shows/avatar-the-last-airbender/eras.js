// Avatar: The Last Airbender (Nickelodeon, 2005–2008) — chart data on an EPISODE axis: columns are the 61 chapters
// in order (1–20 = Book One: Water, 21–40 = Book Two: Earth, 41–61 = Book Three: Fire). Each entry: [label, startEp, endEp, bg, fg?]
window.CHART_AXIS = "episode";
const WATER="#2f6fb3", DWATER="#173d66", LWATER="#c9dcf0", EARTH="#4f7f3a", DEARTH="#2c4a20", LEARTH="#c7dcb4",
      FIRE="#b3322b", DFIRE="#6b1612", LFIRE="#f0c2b8", AIR="#e0a030", LAIR="#f4dfae", GOLD="#d8b44a",
      PURPLE="#5b3f86", LPURP="#d4c6e6", TEAL="#2a8a86", LTEAL="#bfe2df", PINK="#e3a7b8", BROWN="#7a5a3c",
      GRAY="#7d7d7d", LGRAY="#dcdcdc", DGRAY="#2f3133", WHITE="#fff", BLACK="#000";

window.ERA_CATS = [
  ["books","Books"],
  ["team","Team Avatar"],
  ["villains","Villains & antagonists"],
  ["places","Places the group travels"],
  ["allies","Allies, mentors & recurring"],
];

window.ERAS = {
  books: [
    [["Book One: Water", 1, 20, WATER, WHITE], ["Book Two: Earth", 21, 40, EARTH, WHITE], ["Book Three: Fire", 41, 61, FIRE, WHITE]],
    [["Aired Feb–Dec 2005", 1, 20, LWATER, BLACK], ["Aired Mar–Dec 2006", 21, 40, LEARTH, BLACK], ["Aired Sep–Nov 2007", 41, 51, LFIRE, BLACK], ["Aired Jul 14–19, 2008", 52, 61, LFIRE, BLACK]],
    [["In-world: winter, 99 AG", 1, 20, LGRAY, BLACK], ["Spring, 100 AG", 21, 40, LGRAY, BLACK], ["Summer, 100 AG: the comet is coming", 41, 61, LGRAY, BLACK]],
    [["Created by Michael Dante DiMartino & Bryan Konietzko · head writer Aaron Ehasz", 1, 61, DGRAY, WHITE]],
  ],
  team: [
    [["Aang, Katara & Sokka (with Appa & Momo)", 1, 25, AIR, BLACK], ["Toph joins (2×06)", 26, 51, EARTH, WHITE], ["Zuko joins (3×12)", 52, 61, FIRE, WHITE]],
    [["North to find a waterbending master", 1, 17, LWATER, BLACK], ["Master Pakku", 18, 20, WATER, WHITE], ["Looking for an earthbending teacher", 21, 25, LEARTH, BLACK], ["Toph teaches earthbending", 26, 38, EARTH, WHITE], ["Guru Pathik & the chakras", 39, 40, AIR, BLACK], ["No firebending teacher", 41, 51, LFIRE, BLACK], ["Zuko teaches firebending", 52, 58, FIRE, WHITE], ["The lion turtle: energybending", 59, 61, GOLD, BLACK]],
    [["The Spirit World & Hei Bai", 7, 7, TEAL, WHITE], ["Avatar Roku at the solstice", 8, 8, DFIRE, WHITE], ["Koh; the Moon & Ocean spirits", 19, 20, PURPLE, WHITE], ["Fong forces the Avatar State", 21, 21, EARTH, WHITE], ["Kyoshi comes through", 25, 25, EARTH, WHITE], ["Wan Shi Tong's library", 30, 30, TEAL, WHITE], ["Opens his chakras; shot by Azula", 39, 40, DGRAY, WHITE], ["Avatar State locked", 41, 60, LGRAY, BLACK], ["Restored (3×21)", 61, 61, AIR, BLACK]],
    [["Roku's story: how the war began", 46, 46, DFIRE, WHITE], ["Asks his past lives", 59, 59, TEAL, WHITE]],
    [["Appa taken by sandbenders", 30, 36, BROWN, WHITE], ["Reunited at Lake Laogai", 37, 37, AIR, BLACK]],
    [["The eclipse found in the library", 30, 30, DWATER, WHITE], ["Getting the plan to the Earth King", 31, 40, LWATER, BLACK], ["Regrouping for the invasion", 41, 49, LGRAY, BLACK], ["The Day of Black Sun", 50, 51, DFIRE, WHITE], ["Sozin's Comet", 58, 61, FIRE, WHITE]],
    [["Katara teaches herself", 1, 17, LWATER, BLACK], ["Pakku's student", 18, 20, WATER, WHITE], ["Waterbending master; teaching Aang", 21, 47, WATER, WHITE], ["Hama teaches her bloodbending", 48, 48, PURPLE, WHITE], ["Won't trust Zuko", 52, 55, LGRAY, BLACK], ["Confronts Yon Rha", 56, 56, DWATER, WHITE], ["With Zuko against Azula", 60, 60, WATER, WHITE]],
    [["Sokka meets Suki", 4, 4, GOLD, BLACK], ["Bato and word of Dad", 15, 15, LWATER, BLACK], ["Sokka & Yue", 18, 20, LPURP, BLACK], ["Reunited with Hakoda", 39, 39, WATER, WHITE], ["Piandao and the space sword", 44, 44, DGRAY, WHITE], ["Leads the invasion", 50, 51, DWATER, WHITE], ["The Boiling Rock", 54, 55, DFIRE, WHITE]],
  ],
  villains: [
    [["Prince Zuko hunts the Avatar", 1, 20, FIRE, WHITE], ["Fugitive with Iroh", 21, 33, LFIRE, BLACK], ["Refugee in Ba Sing Se", 34, 39, LEARTH, BLACK], ["Chooses Azula (2×20)", 40, 40, DFIRE, WHITE], ["Home, honor restored, miserable", 41, 51, FIRE, WHITE], ["Switches sides", 52, 61, AIR, BLACK]],
    [["Commander Zhao", 3, 12, DFIRE, WHITE], ["Admiral Zhao", 13, 19, DFIRE, WHITE], ["Kills the Moon Spirit (1×20)", 20, 20, BLACK, WHITE]],
    [["Azula hunts her brother & the Avatar", 21, 33, PURPLE, WHITE], ["Kyoshi disguise; takes Ba Sing Se", 36, 40, PURPLE, WHITE], ["Hero of the Fire Nation", 41, 51, LPURP, BLACK], ["Betrayed at the Boiling Rock", 55, 55, PURPLE, WHITE], ["Attacks the Western Air Temple", 56, 56, PURPLE, WHITE], ["Comes apart; the final Agni Kai", 58, 61, BLACK, WHITE]],
    [["Mai & Ty Lee join Azula", 23, 40, PINK, BLACK], ["Mai & Zuko", 41, 49, LPURP, BLACK], ["They turn on Azula", 55, 55, PINK, BLACK]],
    [["Fire Lord Ozai, a voice and a silhouette", 8, 50, DGRAY, WHITE], ["Face revealed; Zuko confronts him", 51, 51, DFIRE, WHITE], ["The Phoenix King", 58, 61, BLACK, WHITE]],
    [["Jet's Freedom Fighters", 10, 10, EARTH, WHITE], ["Jet in Ba Sing Se", 32, 37, LEARTH, BLACK]],
    [["Long Feng & the Dai Li", 34, 39, DEARTH, WHITE], ["The Dai Li switch to Azula", 40, 40, PURPLE, WHITE]],
    [["Pirates", 9, 9, BROWN, WHITE], ["June & Nyla", 15, 15, GRAY, WHITE], ["Xin Fu & Master Yu", 26, 26, GRAY, WHITE], ["Xin Fu & Master Yu", 31, 31, GRAY, WHITE], ["Xin Fu & Master Yu capture Toph", 38, 39, GRAY, WHITE], ["Combustion Man", 42, 52, DFIRE, WHITE]],
    [["General Fong", 21, 21, EARTH, WHITE], ["Wan Shi Tong", 30, 30, DGRAY, WHITE], ["Hama the bloodbender", 48, 48, PURPLE, WHITE], ["The Boiling Rock's warden", 54, 55, GRAY, WHITE], ["Yon Rha", 56, 56, DFIRE, WHITE]],
  ],
  places: [
    [["South Pole", 1, 2, LWATER, BLACK], ["The long way north", 3, 17, LEARTH, BLACK], ["North Pole", 18, 20, WATER, WHITE], ["The Earth Kingdom, toward Ba Sing Se", 21, 33, LEARTH, BLACK], ["Ba Sing Se", 34, 40, EARTH, WHITE], ["The Fire Nation", 41, 61, FIRE, WHITE]],
    [["Southern Air Temple", 3, 3, AIR, BLACK], ["Northern Air Temple", 17, 17, AIR, BLACK], ["Eastern Air Temple", 39, 39, AIR, BLACK], ["Western Air Temple", 52, 52, AIR, BLACK], ["Hiding out at the Western Air Temple", 53, 56, LAIR, BLACK]],
    [["Kyoshi Island", 4, 4, GOLD, BLACK], ["Omashu", 5, 5, EARTH, WHITE], ["Haru's village & the prison rig", 6, 6, GRAY, WHITE], ["Senlin Village", 7, 7, LEARTH, BLACK], ["Crescent Island: Roku's temple", 8, 8, DFIRE, WHITE], ["Pirate market", 9, 9, BROWN, WHITE], ["Jet's treetop hideout", 10, 10, EARTH, WHITE], ["The Great Divide", 11, 11, BROWN, WHITE], ["Pohuai Stronghold", 13, 13, DFIRE, WHITE], ["Aunt Wu's village", 14, 14, LPURP, BLACK], ["Jeong Jeong's camp", 16, 16, LFIRE, BLACK]],
    [["General Fong's base", 21, 21, EARTH, WHITE], ["Cave of Two Lovers", 22, 22, DGRAY, WHITE], ["Occupied Omashu", 23, 23, FIRE, WHITE], ["The Foggy Swamp", 24, 24, DEARTH, WHITE], ["Chin Village", 25, 25, LEARTH, BLACK], ["Gaoling & Earth Rumble", 26, 26, EARTH, WHITE], ["Wan Shi Tong's library", 30, 30, TEAL, WHITE], ["Si Wong Desert", 31, 31, GOLD, BLACK], ["The Serpent's Pass", 32, 32, WATER, WHITE], ["The Outer Wall & the drill", 33, 33, GRAY, WHITE], ["Lake Laogai", 37, 37, DWATER, WHITE], ["Chameleon Bay", 39, 39, LWATER, BLACK], ["The Crystal Catacombs", 40, 40, TEAL, WHITE]],
    [["Fire Nation school", 42, 42, LFIRE, BLACK], ["Jang Hui", 43, 43, GRAY, WHITE], ["Piandao's castle", 44, 44, DGRAY, WHITE], ["Ember Island", 45, 45, GOLD, BLACK], ["Roku's island", 46, 46, DFIRE, WHITE], ["Hama's village", 48, 48, PURPLE, WHITE], ["The Fire Nation Capital", 50, 51, FIRE, WHITE], ["The Sun Warriors' city", 53, 53, GOLD, BLACK], ["The Boiling Rock", 54, 55, DFIRE, WHITE], ["Ember Island", 57, 58, GOLD, BLACK], ["The lion turtle", 59, 59, TEAL, WHITE], ["The Capital & Ba Sing Se", 60, 60, FIRE, WHITE], ["The Wulong Forest", 61, 61, DGRAY, WHITE]],
  ],
  allies: [
    [["Iroh, at Zuko's side", 1, 39, GOLD, BLACK], ["Captured in Ba Sing Se", 40, 40, GRAY, WHITE], ["Iroh in prison", 41, 51, GRAY, WHITE], ["The Order of the White Lotus", 59, 61, WHITE, BLACK]],
    [["Monk Gyatso (flashbacks)", 3, 3, AIR, BLACK], ["Monk Gyatso (flashbacks)", 12, 12, AIR, BLACK], ["Jeong Jeong", 16, 16, DFIRE, WHITE], ["Master Pakku", 18, 20, WATER, WHITE], ["Guru Pathik", 39, 40, AIR, BLACK], ["Piandao", 44, 44, DGRAY, WHITE], ["The Sun Warriors & the dragons", 53, 53, GOLD, BLACK]],
    [["King Bumi", 5, 5, EARTH, WHITE], ["Bumi, a prisoner in Omashu", 23, 23, LEARTH, BLACK], ["Bumi, White Lotus", 59, 60, EARTH, WHITE]],
    [["Suki & the Kyoshi Warriors", 4, 4, GOLD, BLACK], ["Suki at the Serpent's Pass", 32, 32, GOLD, BLACK], ["Captured by Azula", 36, 36, PURPLE, WHITE], ["Suki, rescued, with the group", 54, 61, GOLD, BLACK]],
    [["Bato", 15, 15, LWATER, BLACK], ["Hakoda at Chameleon Bay", 39, 39, WATER, WHITE], ["Hakoda's invasion fleet", 41, 51, WATER, WHITE], ["Hakoda, freed from the Boiling Rock", 55, 56, DWATER, WHITE]],
    [["Princess Yue", 18, 20, LPURP, BLACK], ["Yue, a vision in the swamp", 24, 24, LPURP, BLACK]],
    [["Haru", 6, 6, EARTH, WHITE], ["Teo & the Mechanist", 17, 17, AIR, BLACK], ["Invasion allies: Haru, Teo, the Duke, the Mechanist", 50, 51, LEARTH, BLACK], ["With the group at the air temple", 52, 52, LEARTH, BLACK]],
  ],
};

window.SEASON_META = {
  1: { years: "2005", showrunner: "DiMartino & Konietzko" },
  2: { years: "2006", showrunner: "DiMartino & Konietzko" },
  3: { years: "2007–2008", showrunner: "DiMartino & Konietzko" },
};
