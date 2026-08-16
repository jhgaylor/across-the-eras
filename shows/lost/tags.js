// LOST — episode tags. Keys are TVmaze season.episode, matching episodes.json.
// Season premieres and finales are auto-tagged by the engine and are not listed here.
window.TAG_DEFS = {
  fanfav:    {label:"Fan favorite", desc:"The hours people rewatch, quote and rank"},
  gutpunch:  {label:"Gut-punch", desc:"Somebody you love is about to have a very bad day"},
  myth:      {label:"Mythology-heavy", desc:"The Island, the Others, the rules — plot that matters to the endgame"},
  character: {label:"Character piece", desc:"A quiet hour about one person's damage, light on the Island"},
  answers:   {label:"\"The answers\" episode", desc:"An hour that exists to explain something: the Purge, Richard, the source"},
  twist:     {label:"Format twist", desc:"The show breaking its own rules — structure, POV or a rug-pull ending"},
  twopart:   {label:"Two-parter", desc:"Half of a two- or three-hour block, split here the way TVmaze splits it"},
  death:     {label:"A major death", desc:"Someone in the credits doesn't make it out"},
  timetravel:{label:"Time travel", desc:"Skips, loops, constants, and 1977"},
  flashfwd:  {label:"Flash-forward", desc:"The future, off the Island"},
  sideways:  {label:"Flash-sideways", desc:"The other 2004, where the plane never crashed"},
  skippable: {label:"Safe to skip", desc:"Fairly warned: little happens here that the next hour won't tell you"},

  jack:{label:"Jack spotlight"}, kate:{label:"Kate spotlight"}, locke:{label:"Locke spotlight"},
  sawyer:{label:"Sawyer spotlight"}, hurley:{label:"Hurley spotlight"}, sayid:{label:"Sayid spotlight"},
  sun:{label:"Sun spotlight"}, jin:{label:"Jin spotlight"}, charlie:{label:"Charlie spotlight"},
  claire:{label:"Claire spotlight"}, michael:{label:"Michael spotlight"}, walt:{label:"Walt spotlight"},
  boone:{label:"Boone spotlight"}, shannon:{label:"Shannon spotlight"},
  analucia:{label:"Ana Lucia spotlight"}, eko:{label:"Mr. Eko spotlight"},
  desmond:{label:"Desmond spotlight"}, ben:{label:"Ben spotlight"}, juliet:{label:"Juliet spotlight"},
  richard:{label:"Richard spotlight"}, jacob:{label:"Jacob & the Man in Black"},
  miles:{label:"Miles spotlight"}, daniel:{label:"Daniel Faraday spotlight"},
  rose:{label:"Rose & Bernard spotlight"},
};

window.EP_TAGS = {
  // S1 — the crash, the caves & the hatch
  "1.1":["fanfav","myth","twopart","death","jack"],                       // Pilot (1)
  "1.2":["fanfav","myth","twopart","charlie"],                            // Pilot (2)
  "1.3":["character","kate"],                                             // Tabula Rasa
  "1.4":["fanfav","gutpunch","character","twist","locke"],                // Walkabout
  "1.5":["character","jack"],                                             // White Rabbit
  "1.6":["character","sun"],                                              // House of the Rising Sun
  "1.7":["character","charlie"],                                          // The Moth
  "1.8":["character","sawyer"],                                           // Confidence Man
  "1.9":["myth","sayid"],                                                 // Solitary
  "1.10":["myth","claire"],                                               // Raised by Another
  "1.11":["gutpunch","myth","jack"],                                      // All the Best Cowboys Have Daddy Issues
  "1.12":["skippable","kate"],                                            // Whatever the Case May Be
  "1.13":["character","boone"],                                           // Hearts and Minds
  "1.14":["myth","michael","walt"],                                       // Special
  "1.15":["gutpunch","death","charlie"],                                  // Homecoming
  "1.16":["fanfav","character","sawyer"],                                 // Outlaws
  "1.17":["fanfav","character","jin"],                                    // ...In Translation
  "1.18":["myth","hurley"],                                               // Numbers
  "1.19":["fanfav","gutpunch","myth","character","locke"],                // Deus ex Machina
  "1.20":["gutpunch","death","jack"],                                     // Do No Harm
  "1.21":["character","sayid"],                                           // The Greater Good
  "1.22":["character","kate"],                                            // Born to Run
  "1.23":["fanfav","myth","twopart"],                                     // Exodus (1)
  "1.24":["fanfav","gutpunch","myth","twopart"],                          // Exodus (2)
  "1.25":["fanfav","gutpunch","myth","twopart","death"],                  // Exodus (3)

  // S2 — the Swan, the Tailies & the button
  "2.1":["fanfav","myth","jack"],                                         // Man of Science, Man of Faith
  "2.2":["character","michael"],                                          // Adrift
  "2.3":["fanfav","myth","answers","locke"],                              // Orientation
  "2.4":["character","hurley"],                                           // Everybody Hates Hugo
  "2.5":["character","sun","jin"],                                        // ...And Found
  "2.6":["gutpunch","death","shannon"],                                   // Abandoned
  "2.7":["fanfav","myth","twist"],                                        // The Other 48 Days
  "2.8":["gutpunch","character","analucia"],                              // Collision
  "2.9":["character","kate"],                                             // What Kate Did
  "2.10":["fanfav","myth","character","eko"],                             // The 23rd Psalm
  "2.11":["myth","jack"],                                                 // The Hunting Party
  "2.12":["character","skippable","charlie"],                             // Fire + Water
  "2.13":["character","sawyer"],                                          // The Long Con
  "2.14":["fanfav","myth","sayid"],                                       // One of Them
  "2.15":["myth","claire"],                                               // Maternity Leave
  "2.16":["character","sun"],                                             // The Whole Truth
  "2.17":["fanfav","myth","locke"],                                       // Lockdown
  "2.18":["character","twist","hurley"],                                  // Dave
  "2.19":["character","rose"],                                            // S.O.S.
  "2.20":["fanfav","gutpunch","death","analucia"],                        // Two for the Road
  "2.21":["myth","eko"],                                                  // ?
  "2.22":["myth","michael"],                                              // Three Minutes
  "2.23":["fanfav","myth","twopart","desmond"],                           // Live Together, Die Alone (1)
  "2.24":["fanfav","gutpunch","myth","answers","twopart","desmond"],      // Live Together, Die Alone (2)

  // S3 — the Others, the Barracks & the flash-forward
  "3.1":["myth","jack"],                                                  // A Tale of Two Cities
  "3.2":["character","sun","jin"],                                        // The Glass Ballerina
  "3.3":["character","locke"],                                            // Further Instructions
  "3.4":["gutpunch","myth","sawyer"],                                     // Every Man for Himself
  "3.5":["gutpunch","myth","death","eko"],                                // The Cost of Living
  "3.6":["character","kate"],                                             // I Do
  "3.7":["fanfav","myth","juliet"],                                       // Not in Portland
  "3.8":["fanfav","myth","twist","timetravel","desmond"],                 // Flashes Before Your Eyes
  "3.9":["skippable","jack"],                                             // Stranger in a Strange Land
  "3.10":["character","hurley"],                                          // Tricia Tanaka is Dead
  "3.11":["myth","sayid"],                                                // Enter 77
  "3.12":["character","claire"],                                          // Par Avion
  "3.13":["fanfav","gutpunch","myth","character","answers","locke"],      // The Man from Tallahassee
  "3.14":["twist","death","skippable"],                                   // Exposé
  "3.15":["character","kate"],                                            // Left Behind
  "3.16":["fanfav","myth","character","juliet"],                          // One of Us
  "3.17":["character","desmond"],                                         // Catch-22
  "3.18":["myth","sun"],                                                  // D.O.C.
  "3.19":["fanfav","gutpunch","character","death","locke"],               // The Brig
  "3.20":["fanfav","myth","character","answers","ben"],                   // The Man Behind the Curtain
  "3.21":["fanfav","gutpunch","character","charlie"],                     // Greatest Hits
  "3.22":["fanfav","myth","twopart","jack"],                              // Through the Looking Glass (1)
  "3.23":["fanfav","gutpunch","myth","twist","twopart","death","flashfwd","jack"],// Through the Looking Glass (2)

  // S4 — the freighter & the Oceanic Six
  "4.1":["fanfav","character","flashfwd","hurley"],                       // The Beginning of the End
  "4.2":["fanfav","myth","twist"],                                        // Confirmed Dead
  "4.3":["fanfav","character","flashfwd","sayid"],                        // The Economist
  "4.4":["character","flashfwd","kate"],                                  // Eggtown
  "4.5":["fanfav","gutpunch","myth","character","twist","timetravel","desmond"],// The Constant
  "4.6":["myth","juliet"],                                                // The Other Woman
  "4.7":["fanfav","gutpunch","character","twist","flashfwd","sun","jin"], // Ji Yeon
  "4.8":["gutpunch","character","death","michael"],                       // Meet Kevin Johnson
  "4.9":["fanfav","gutpunch","myth","death","flashfwd","ben"],            // The Shape of Things to Come
  "4.10":["character","flashfwd","jack"],                                 // Something Nice Back Home
  "4.11":["fanfav","myth","answers","locke"],                             // Cabin Fever
  "4.12":["myth","twopart","flashfwd"],                                   // There's No Place Like Home (1)
  "4.13":["myth","twopart","flashfwd"],                                   // There's No Place Like Home (2)
  "4.14":["fanfav","gutpunch","myth","twopart","death","timetravel","flashfwd"],// There's No Place Like Home (3)

  // S5 — time skips & DHARMA 1977
  "5.1":["myth","timetravel"],                                            // Because You Left
  "5.2":["character","timetravel","hurley"],                              // The Lie
  "5.3":["fanfav","myth","timetravel","desmond"],                         // Jughead
  "5.4":["character","timetravel","kate"],                                // The Little Prince
  "5.5":["gutpunch","myth","death","timetravel","jin"],                   // This Place is Death
  "5.6":["myth","jack"],                                                  // 316
  "5.7":["fanfav","gutpunch","character","answers","twist","death","locke"],// The Life and Death of Jeremy Bentham
  "5.8":["fanfav","character","twist","timetravel","sawyer"],             // LaFleur
  "5.9":["myth","timetravel"],                                            // Namaste
  "5.10":["gutpunch","character","sayid"],                                // He's Our You
  "5.11":["myth","timetravel","kate"],                                    // Whatever Happened, Happened
  "5.12":["myth","answers","ben"],                                        // Dead is Dead
  "5.13":["myth","miles"],                                                // Some Like It Hoth
  "5.14":["fanfav","gutpunch","myth","character","death","timetravel","daniel"],// The Variable
  "5.15":["myth","timetravel"],                                           // Follow the Leader
  "5.16":["fanfav","myth","answers","twopart","timetravel","jacob"],      // The Incident (1)
  "5.17":["fanfav","gutpunch","myth","answers","twopart","death","timetravel","jacob"],// The Incident (2)

  // S6 — the Temple, the candidates & the flash-sideways
  "6.1":["fanfav","gutpunch","myth","twist","twopart","death","sideways"],// LA X (1)
  "6.2":["myth","twist","twopart","sideways"],                            // LA X (2)
  "6.3":["character","sideways","skippable","kate"],                      // What Kate Does
  "6.4":["myth","answers","sideways","locke"],                            // The Substitute
  "6.5":["fanfav","myth","sideways","jack"],                              // Lighthouse
  "6.6":["gutpunch","character","death","sideways","sayid"],              // Sundown
  "6.7":["fanfav","gutpunch","character","sideways","ben"],               // Dr. Linus
  "6.8":["character","sideways","sawyer"],                                // Recon
  "6.9":["fanfav","gutpunch","myth","character","answers","richard"],     // Ab Aeterno
  "6.10":["myth","sideways","sun","jin"],                                 // The Package
  "6.11":["fanfav","myth","twist","sideways","desmond"],                  // Happily Ever After
  "6.12":["gutpunch","myth","death","sideways","hurley"],                 // Everybody Loves Hugo
  "6.13":["myth","sideways"],                                             // The Last Recruit
  "6.14":["fanfav","gutpunch","myth","death","sideways","jack","locke"],  // The Candidate
  "6.15":["myth","answers","twist","jacob"],                              // Across the Sea
  "6.16":["myth","death","sideways"],                                     // What They Died For
  "6.17":["fanfav","gutpunch","myth","twopart","sideways"],               // The End (1)
  "6.18":["fanfav","gutpunch","myth","answers","twopart","death","sideways"],// The End (2)
};
