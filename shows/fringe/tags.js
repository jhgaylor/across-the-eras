// Fringe — episode tags. Keys are TVmaze season.episode, matching episodes.json.
// Every episode carries exactly one of "case" (case of the week) or "myth" (mythology).
// Season premieres and finales are auto-tagged by the engine and are not listed here.
window.TAG_DEFS = {
  case:      {label:"Case of the week", desc:"A self-contained Fringe event, solved by the end of the hour"},
  myth:      {label:"Mythology", desc:"Moves the big story: the Pattern, the other side, Peter, the Observers"},
  fanfav:    {label:"Fan favorite", desc:"The hours people rewatch and rank"},
  gutpunch:  {label:"Gut-punch", desc:"Bring tissues"},
  experiment:{label:"Format experiment", desc:"Musical, animated, flashback-only or flash-forward hours"},
  flashback: {label:"1985 flashback", desc:"Walter, Elizabeth and a boy named Peter"},
  overthere: {label:"Over There", desc:"Most of the hour is set in the alternate universe"},
  twopart:   {label:"Two-parter", desc:"Half of a two-episode story"},
  cortexiphan:{label:"Cortexiphan", desc:"The drug trials, the children, and what they can do"},
  observers: {label:"Observers", desc:"The bald men in hats take center stage"},

  olivia:{label:"Olivia spotlight"}, peter:{label:"Peter spotlight"}, walter:{label:"Walter spotlight"},
  fauxlivia:{label:"Fauxlivia spotlight"}, walternate:{label:"Walternate spotlight"},
  broyles:{label:"Broyles spotlight"}, astrid:{label:"Astrid spotlight"}, nina:{label:"Nina Sharp spotlight"},
  lincoln:{label:"Lincoln Lee spotlight"}, etta:{label:"Etta spotlight"},
};

window.EP_TAGS = {
  // S1 — The Pattern
  "1.1":["myth","olivia"],                                          // Pilot
  "1.2":["case"],                                                   // The Same Old Story
  "1.3":["case"],                                                   // The Ghost Network
  "1.4":["myth","observers","peter"],                               // The Arrival
  "1.5":["case"],                                                   // Power Hungry
  "1.6":["case","nina"],                                            // The Cure
  "1.7":["myth"],                                                   // In Which We Meet Mr. Jones
  "1.8":["case","walter"],                                          // The Equation
  "1.9":["myth","olivia"],                                          // The Dreamscape
  "1.10":["myth"],                                                  // Safe
  "1.11":["myth","olivia"],                                         // Bound
  "1.12":["case"],                                                  // The No-Brainer
  "1.13":["myth","olivia"],                                         // The Transformation
  "1.14":["myth","olivia"],                                         // Ability
  "1.15":["case","observers"],                                      // Inner Child
  "1.16":["case"],                                                  // Unleashed
  "1.17":["myth","cortexiphan","olivia"],                           // Bad Dreams
  "1.18":["case"],                                                  // Midnight
  "1.19":["myth","cortexiphan","olivia"],                           // The Road Not Taken
  "1.20":["myth","fanfav","walter"],                                // There's More than One of Everything
  // S2 — Shapeshifters & Peter's secret
  "2.1":["myth","olivia"],                                          // A New Day in the Old Town
  "2.2":["case"],                                                   // Night of Desirable Objects
  "2.3":["case"],                                                   // Fracture
  "2.4":["myth","olivia"],                                          // Momentum Deferred
  "2.5":["case","peter"],                                           // Dream Logic
  "2.6":["case","broyles"],                                         // Earthling
  "2.7":["case","nina"],                                            // Of Human Action
  "2.8":["myth","observers"],                                       // August
  "2.9":["case"],                                                   // Snakehead
  "2.10":["myth","walter"],                                         // Grey Matters
  "2.11":["case"],                                                  // Unearthed
  "2.12":["case"],                                                  // Johari Window
  "2.13":["case","peter","olivia"],                                 // What Lies Below
  "2.14":["case","walter"],                                         // The Bishop Revival
  "2.15":["myth","cortexiphan","olivia"],                           // Jacksonville
  "2.16":["myth","fanfav","gutpunch","flashback","experiment","walter"], // Peter
  "2.17":["myth","cortexiphan","olivia"],                           // Olivia. In the Lab. With the Revolver.
  "2.18":["case","fanfav","gutpunch","walter"],                     // White Tulip
  "2.19":["myth","peter"],                                          // The Man from the Other Side
  "2.20":["myth","fanfav","experiment","walter"],                   // Brown Betty
  "2.21":["myth","peter"],                                          // Northwest Passage
  "2.22":["myth","twopart","overthere","walternate"],               // Over There: Part 1
  "2.23":["myth","twopart","fanfav","overthere","walternate"],      // Over There: Part 2
  // S3 — Two Olivias, one Machine
  "3.1":["myth","overthere","olivia"],                              // Olivia
  "3.2":["myth","fauxlivia"],                                       // The Box
  "3.3":["case","overthere","olivia"],                              // The Plateau
  "3.4":["myth","fauxlivia"],                                       // Do Shapeshifters Dream of Electric Sheep?
  "3.5":["case","overthere","olivia"],                              // Amber 31422
  "3.6":["myth","fauxlivia"],                                       // 6955 kHz
  "3.7":["case","overthere","broyles","olivia"],                    // The Abducted
  "3.8":["myth","fanfav","gutpunch","olivia","fauxlivia"],          // Entrada
  "3.9":["case","peter"],                                           // Marionette
  "3.10":["myth","fanfav","observers","walter"],                    // The Firefly
  "3.11":["myth","peter"],                                          // Reciprocity
  "3.12":["myth","walter"],                                         // Concentrate and Ask Again
  "3.13":["case","overthere","fauxlivia"],                          // Immortality
  "3.14":["case","olivia","peter"],                                 // 6B
  "3.15":["myth","fanfav","flashback","experiment","cortexiphan","walter","olivia"], // Subject 13
  "3.16":["case"],                                                  // Os
  "3.17":["case","olivia"],                                         // Stowaway
  "3.18":["myth","overthere","fauxlivia"],                          // Bloodline
  "3.19":["myth","fanfav","experiment","olivia","peter","walter"],  // Lysergic Acid Diethylamide
  "3.20":["myth","walternate"],                                     // 6:02 AM EST
  "3.21":["myth"],                                                  // The Last Sam Weiss
  "3.22":["myth","fanfav","gutpunch","peter"],                      // The Day We Died
  // S4 — The timeline without Peter
  "4.1":["myth","lincoln"],                                         // Neither Here Nor There
  "4.2":["case","olivia"],                                          // One Night in October
  "4.3":["case","walter"],                                          // Alone in the World
  "4.4":["myth","cortexiphan","olivia"],                            // Subject 9
  "4.5":["myth","peter"],                                           // Novation
  "4.6":["case","peter"],                                           // And Those We've Left Behind
  "4.7":["case","olivia"],                                          // Wallflower
  "4.8":["myth","overthere","peter"],                               // Back to Where You've Never Been
  "4.9":["myth","overthere","peter","lincoln"],                     // Enemy of My Enemy
  "4.10":["case","olivia"],                                         // Forced Perspective
  "4.11":["case","astrid"],                                         // Making Angels
  "4.12":["case","fanfav"],                                         // Welcome to Westfield
  "4.13":["myth","cortexiphan","olivia"],                           // A Better Human Being
  "4.14":["myth","observers","nina","olivia"],                      // The End of All Things
  "4.15":["case","peter"],                                          // A Short Story About Love
  "4.16":["case","olivia","peter"],                                 // Nothing as It Seems
  "4.17":["case","overthere","lincoln","fauxlivia"],                // Everything in Its Right Place
  "4.18":["myth","walter","broyles"],                               // The Consultant
  "4.19":["myth","fanfav","experiment","observers","etta"],         // Letters of Transit
  "4.20":["myth","lincoln","fauxlivia"],                            // Worlds Apart
  "4.21":["myth","twopart","cortexiphan","olivia"],                 // Brave New World: Part 1
  "4.22":["myth","twopart","cortexiphan","walter"],                 // Brave New World: Part 2
  // S5 — 2036: the Observers' world
  "5.1":["myth","observers","etta"],                                // Transilience Thought Unifier Model-11
  "5.2":["myth","etta"],                                            // In Absentia
  "5.3":["myth"],                                                   // The Recordist
  "5.4":["myth","fanfav","gutpunch","etta"],                        // The Bullet that Saved the World
  "5.5":["myth","observers","peter"],                               // An Origin Story
  "5.6":["myth","walter"],                                          // Through the Looking Glass and What Walter Found There
  "5.7":["myth","peter","nina"],                                    // Five-Twenty-Ten
  "5.8":["myth","olivia","peter"],                                  // The Human Kind
  "5.9":["myth","experiment","walter"],                             // Black Blotter
  "5.10":["myth","observers","nina"],                               // Anomaly XB-6783746
  "5.11":["myth","observers","walter"],                             // The Boy Must Live
  "5.12":["myth","twopart","olivia"],                               // Liberty
  "5.13":["myth","twopart","gutpunch","walter"],                    // An Enemy of Fate
};
