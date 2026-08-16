// Transcribed from "Supernatural Across the Eras" by FTWinchester.
// Each entry: [label, startSeason, endSeason, bg, fg?]
window.ERAS = {
  showrunners: [
    ["Kripke", 1, 5, "#ffd54a", "#000"],
    ["Gamble", 6, 7, "#a5cf6b", "#000"],
    ["Carver", 8, 11, "#bcd7f2", "#000"],
    ["Dabb-Singer", 12, 15, "#e35b3b", "#000"],
  ],
  arcs: [
    // row 1
    [
      ["Apocalypse", 1, 5, "#fff", "#000"],
      ["Purgatory", 6, 7, "#b6d98a", "#4a7a2a"],
      ["Ancient Organizations (Men of Letters, Knights of Hell, Judah Initiative, Thules, Grand Coven, Styne Family)", 8, 11, "#fff", "#000"],
      ["Cosmic Powers and Multiverse", 12, 15, "#00b0f0", "#0b3d91"],
    ],
    // row 2
    [
      ["Search for John", 1, 1, "#fff", "#000"],
      ["Psychic kids", 2, 2, "#fff", "#c00"],
      ["Dean's deal", 3, 3, "#fff", "#c00"],
      ["Battle for the seals", 4, 4, "#fff", "#c00"],
      ["Roles as vessels", 5, 5, "#bcd7f2", "#c00"],
      ["Monsters", 6, 7, "#6da54a", "#000"],
      ["Darkness", 11, 11, "#000", "#fff"],
      ["Jack's birth, growth, death and resurrection", 12, 15, "#2e75b6", "#ffe066"],
    ],
    // row 3
    [
      ["Avenging Mary", 1, 1, "#fff", "#000"],
      ["Sam's powers, demon blood drinking", 2, 5, "#ff8080", "#000"],
      ["Heaven and Hell civil wars", 6, 6, "#ff8080", "#c00"],
      ["Leviathans", 7, 7, "#7f7f7f", "#bcd7f2"],
      ["Billie the reaper dies and ascends as Death", 12, 15, "#d9d9d9", "#000"],
    ],
    // row 4
    [
      ["Heaven and Hell civil wars", 8, 10, "#bcd7f2", "#c00"],
      ["God intervenes, leaves with the Darkness, and returns", 11, 15, "#ffd54a", "#000"],
    ],
    // row 5
    [
      ["Lucifer returns", 11, 14, "#ddebf7", "#c00"],
    ],
  ],
  villains: [
    [
      ["Demons / Hell", 1, 5, "#ff0000", "#000"],
      ["Purgatory Ancients", 6, 7, "#4a7a2a", "#fff"],
      ["Knights of Hell", 8, 10, "#c00000", "#000"],
      ["Darkness", 11, 11, "#000", "#fff"],
      ["British Men of Letters", 12, 12, "#fff", "#000"],
      ["The Shadow / Cosmic Entity", 13, 15, "#000", "#fff"],
    ],
    [
      ["(Prince of Hell) Azazel", 1, 2, "#ff0000", "#ffe066"],
      ["Cain", 8, 10, "#c00000", "#000"],
    ],
    [
      ["Meg", 1, 2, "#ff8080", "#000"],
      ["(First Demon) Lilith", 3, 4, "#c00000", "#000"],
      ["Horsemen of the Apocalypse", 5, 5, "#fff", "#000"],
      ["(Mother of All) Eve", 6, 6, "#b6d98a", "#4a7a2a"],
      ["The Old Ones / Leviathans", 7, 7, "#7f7f7f", "#b6d98a"],
      ["Demons", 8, 10, "#ff0000", "#000"],
      ["(Princes of Hell) Ramiel, Dagon and Asmodeus", 12, 13, "#ff0000", "#000"],
      ["God", 14, 15, "#ffd54a", "#000"],
    ],
    [
      ["Ruby", 3, 4, "#ff8080", "#000"],
      ["Crowley", 6, 6, "#ff8080", "#000"],
      ["Crowley vs Abaddon", 8, 9, "#ff8080", "#000"],
      ["Dean", 10, 10, "#c00000", "#000"],
    ],
    [
      ["(Grand Torturer) Alastair", 3, 4, "#c00000", "#000"],
    ],
    [
      ["Archangels / Heaven", 1, 5, "#bcd7f2", "#000"],
      ["Angels", 8, 10, "#bcd7f2", "#000"],
      ["Archangels", 11, 15, "#bcd7f2", "#000"],
    ],
    [
      ["Lucifer", 1, 5, "#ddebf7", "#c00"],
      ["Raphael", 6, 6, "#ddebf7", "#00b0f0"],
      ["Naomi, faction leaders, Metatron", 8, 10, "#bcd7f2", "#000"],
      ["Lucifer", 11, 14, "#ddebf7", "#c00"],
    ],
    [
      ["Michael", 1, 5, "#ddebf7", "#2e75b6"],
      ["Alt-Michael", 13, 14, "#ddebf7", "#2e75b6"],
    ],
  ],
  locations: [
    [["Hell", 1, 15, "#ff0000", "#000"]],
    [["Heaven", 4, 15, "#bcd7f2", "#000"]],
    [["Purgatory", 6, 15, "#4a7a2a", "#fff"]],
    [["Avalon (including Oz)", 6, 9, "#c000c0", "#000"], ["The Empty", 11, 15, "#000", "#fff"]],
    [["The Multiverse", 12, 15, "#00b0f0", "#0b3d91"]],
  ],
  homeBases: [
    [["Baby", 1, 15, "#333", "#fff"]],
    [["Bobby's house / Singer Salvage Yard", 1, 7, "#8fa8c8", "#000"], ["Men of Letters Bunker (Lebanon, Kansas)", 8, 15, "#8b4513", "#fff"]],
    [["Roadhouse", 2, 2, "#ffb08a", "#000"], ["Jody's house", 9, 13, "#92d050", "#000"]],
  ],
};
window.ERA_CATS = [
  ["showrunners","Showrunner"],["arcs","Major arc"],["villains","Villains (big bads & mini-bosses)"],
  ["locations","Major locations"],["homeBases","Home bases"],
];
window.SEASON_META = {
  1:{years:"2005–06",showrunner:"Kripke"},2:{years:"2006–07",showrunner:"Kripke"},3:{years:"2007–08",showrunner:"Kripke"},
  4:{years:"2008–09",showrunner:"Kripke"},5:{years:"2009–10",showrunner:"Kripke"},6:{years:"2010–11",showrunner:"Gamble"},
  7:{years:"2011–12",showrunner:"Gamble"},8:{years:"2012–13",showrunner:"Carver"},9:{years:"2013–14",showrunner:"Carver"},
  10:{years:"2014–15",showrunner:"Carver"},11:{years:"2015–16",showrunner:"Carver"},12:{years:"2016–17",showrunner:"Dabb-Singer"},
  13:{years:"2017–18",showrunner:"Dabb-Singer"},14:{years:"2018–19",showrunner:"Dabb-Singer"},15:{years:"2019–20",showrunner:"Dabb-Singer"},
};
