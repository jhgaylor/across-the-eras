// The X-Files — episode tags. Season premieres and finales are auto-tagged by the engine, so they aren't listed here.
// Keys are the TVmaze season.episode numbers used in episodes.json. Every episode is exactly one of myth / motw:
// myth = the episodes Wikipedia's season pages mark (‡) as the alien-mythology arc, following Fox's Mythology DVD
// collections; "The Truth" is one episode there and two (9.19, 9.20) on TVmaze, so both are myth. Everything else is motw.
window.TAG_DEFS = {
  myth:       {label:"Mythology", desc:"The alien-conspiracy arc — per Fox's X-Files Mythology DVD collections"},
  motw:       {label:"Monster of the week", desc:"A standalone case — skip it and the arc still makes sense"},
  callback:   {label:"Conspiracy callback", desc:"A standalone that brushes the mythology: Samantha, X, the chip, William"},
  fanfav:     {label:"Fan favorite", desc:"The ones people rewatch first"},
  scary:      {label:"Genuinely scary", desc:"Lights-off X-Files"},
  comedy:     {label:"Comic / meta", desc:"The show laughing at itself"},
  heavy:      {label:"Gut-punch", desc:"Grief, loss and the cost of the search"},
  twoparter:  {label:"Multi-parter", desc:"Part of a two- or three-episode story"},
  experiment: {label:"Format experiment", desc:"Black and white, Rashomon, fake COPS, long takes, flashback episodes"},
  milestone:  {label:"Milestone", desc:"Arrivals, departures, deaths and the unit changing hands"},
  xmas:       {label:"Christmas"},
  gunmen:     {label:"Lone Gunmen", desc:"Byers, Frohike and Langly take the lead"},
  darin:      {label:"Darin Morgan", desc:"Written by the show's resident satirist"},
  castpen:    {label:"Cast behind the camera", desc:"Written or directed by Duchovny, Anderson or William B. Davis"},
  mulder:     {label:"Mulder spotlight"},
  scully:     {label:"Scully spotlight"},
  skinner:    {label:"Skinner spotlight"},
  csm:        {label:"Cigarette Smoking Man spotlight"},
  doggett:    {label:"Doggett spotlight"},
  reyes:      {label:"Reyes spotlight"},
};

window.EP_TAGS = {
  // season 1
  "1.1":   ["myth", "fanfav"],  // Pilot
  "1.2":   ["myth"],  // Deep Throat
  "1.3":   ["motw", "fanfav", "scary"],  // Squeeze
  "1.4":   ["motw", "callback", "mulder"],  // Conduit
  "1.5":   ["motw"],  // The Jersey Devil
  "1.6":   ["motw"],  // Shadows
  "1.7":   ["motw"],  // Ghost in the Machine
  "1.8":   ["motw", "fanfav", "scary"],  // Ice
  "1.9":   ["motw"],  // Space
  "1.10":  ["myth"],  // Fallen Angel
  "1.11":  ["motw"],  // Eve
  "1.12":  ["motw"],  // Fire
  "1.13":  ["motw", "fanfav", "heavy", "scully"],  // Beyond the Sea
  "1.14":  ["motw"],  // Genderbender
  "1.15":  ["motw"],  // Lazarus
  "1.16":  ["motw"],  // Young at Heart
  "1.17":  ["myth", "milestone", "gunmen"],  // E.B.E.
  "1.18":  ["motw"],  // Miracle Man
  "1.19":  ["motw"],  // Shapes
  "1.20":  ["motw", "scary"],  // Darkness Falls
  "1.21":  ["motw", "fanfav", "scary", "milestone"],  // Tooms
  "1.22":  ["motw"],  // Born Again
  "1.23":  ["motw"],  // Roland
  "1.24":  ["myth", "fanfav", "milestone"],  // The Erlenmeyer Flask
  // season 2
  "2.1":   ["myth", "mulder"],  // Little Green Men
  "2.2":   ["motw", "fanfav", "scary", "milestone"],  // The Host
  "2.3":   ["motw"],  // Blood
  "2.4":   ["motw", "milestone"],  // Sleepless
  "2.5":   ["myth", "fanfav", "twoparter"],  // Duane Barry
  "2.6":   ["myth", "twoparter", "milestone"],  // Ascension
  "2.7":   ["motw"],  // 3
  "2.8":   ["myth", "fanfav", "heavy", "twoparter", "scully"],  // One Breath
  "2.9":   ["motw"],  // Firewalker
  "2.10":  ["myth"],  // Red Museum
  "2.11":  ["motw"],  // Excelsis Dei
  "2.12":  ["motw"],  // Aubrey
  "2.13":  ["motw", "fanfav", "scary", "scully"],  // Irresistible
  "2.14":  ["motw", "scary"],  // Die Hand die Verletzt
  "2.15":  ["motw"],  // Fresh Bones
  "2.16":  ["myth", "twoparter"],  // Colony
  "2.17":  ["myth", "twoparter"],  // End Game
  "2.18":  ["motw"],  // Fearful Symmetry
  "2.19":  ["motw"],  // Død Kalm
  "2.20":  ["motw", "fanfav", "comedy", "darin"],  // Humbug
  "2.21":  ["motw"],  // The Calusari
  "2.22":  ["motw"],  // F. Emasculata
  "2.23":  ["motw", "callback"],  // Soft Light
  "2.24":  ["motw"],  // Our Town
  "2.25":  ["myth", "fanfav", "twoparter"],  // Anasazi
  // season 3
  "3.1":   ["myth", "twoparter"],  // The Blessing Way
  "3.2":   ["myth", "heavy", "twoparter", "milestone"],  // Paper Clip
  "3.3":   ["motw"],  // D.P.O.
  "3.4":   ["motw", "fanfav", "comedy", "heavy", "darin"],  // Clyde Bruckman's Final Repose
  "3.5":   ["motw"],  // The List
  "3.6":   ["motw"],  // 2Shy
  "3.7":   ["motw"],  // The Walk
  "3.8":   ["motw"],  // Oubliette
  "3.9":   ["myth", "twoparter"],  // Nisei (1)
  "3.10":  ["myth", "twoparter"],  // 731 (2)
  "3.11":  ["motw"],  // Revelations
  "3.12":  ["motw", "fanfav", "comedy", "darin"],  // War of the Coprophages
  "3.13":  ["motw"],  // Syzygy
  "3.14":  ["motw", "scary"],  // Grotesque
  "3.15":  ["myth", "twoparter"],  // Piper Maru
  "3.16":  ["myth", "twoparter"],  // Apocrypha
  "3.17":  ["motw", "fanfav"],  // Pusher
  "3.18":  ["motw"],  // Teso dos Bichos
  "3.19":  ["motw"],  // Hell Money
  "3.20":  ["motw", "fanfav", "comedy", "experiment", "darin"],  // Jose Chung's 'From Outer Space'
  "3.21":  ["motw", "callback", "skinner"],  // Avatar
  "3.22":  ["motw"],  // Quagmire
  "3.23":  ["motw", "callback", "scully"],  // Wetwired
  "3.24":  ["myth", "twoparter"],  // Talitha Cumi
  // season 4
  "4.1":   ["myth", "twoparter", "milestone"],  // Herrenvolk
  "4.2":   ["motw", "fanfav", "scary"],  // Home
  "4.3":   ["motw"],  // Teliko
  "4.4":   ["motw"],  // Unruhe
  "4.5":   ["motw", "heavy"],  // The Field Where I Died
  "4.6":   ["motw"],  // Sanguinarium
  "4.7":   ["myth", "fanfav", "experiment", "gunmen", "csm"],  // Musings of a Cigarette-Smoking Man
  "4.8":   ["myth", "twoparter"],  // Tunguska
  "4.9":   ["myth", "twoparter"],  // Terma
  "4.10":  ["motw", "fanfav", "callback", "mulder"],  // Paper Hearts
  "4.11":  ["motw"],  // El Mundo Gira
  "4.12":  ["motw", "fanfav", "scary"],  // Leonard Betts
  "4.13":  ["motw", "scully"],  // Never Again
  "4.14":  ["myth", "fanfav", "heavy", "milestone", "scully"],  // Memento Mori
  "4.15":  ["motw"],  // Kaddish
  "4.16":  ["motw"],  // Unrequited
  "4.17":  ["myth", "twoparter"],  // Tempus Fugit
  "4.18":  ["myth", "twoparter"],  // Max
  "4.19":  ["motw"],  // Synchrony
  "4.20":  ["motw", "fanfav", "comedy"],  // Small Potatoes
  "4.21":  ["myth", "skinner"],  // Zero Sum
  "4.22":  ["motw", "callback"],  // Elegy
  "4.23":  ["myth", "mulder"],  // Demons
  "4.24":  ["myth", "twoparter"],  // Gethsemane
  // season 5
  "5.1":   ["myth", "twoparter"],  // Redux (1)
  "5.2":   ["myth", "twoparter"],  // Redux (2)
  "5.3":   ["motw", "fanfav", "comedy", "experiment", "callback", "gunmen"],  // Unusual Suspects
  "5.4":   ["motw", "scary"],  // Detour
  "5.5":   ["motw", "fanfav", "comedy", "experiment"],  // The Post-Modern Prometheus
  "5.6":   ["myth", "twoparter", "xmas"],  // Christmas Carol
  "5.7":   ["myth", "heavy", "twoparter", "scully"],  // Emily
  "5.8":   ["motw"],  // Kitsunegari
  "5.9":   ["motw"],  // Schizogeny
  "5.10":  ["motw", "scary", "scully"],  // Chinga
  "5.11":  ["motw"],  // Kill Switch
  "5.12":  ["motw", "fanfav", "comedy", "experiment"],  // Bad Blood
  "5.13":  ["myth", "twoparter", "milestone"],  // Patient X
  "5.14":  ["myth", "twoparter"],  // The Red and the Black
  "5.15":  ["motw", "experiment", "callback", "mulder"],  // Travelers
  "5.16":  ["motw"],  // Mind's Eye
  "5.17":  ["motw", "scully"],  // All Souls
  "5.18":  ["motw"],  // The Pine Bluff Variant
  "5.19":  ["motw"],  // Folie a Deux
  "5.20":  ["myth", "milestone"],  // The End
  // season 6
  "6.1":   ["myth", "milestone"],  // The Beginning
  "6.2":   ["motw", "fanfav", "scary"],  // Drive
  "6.3":   ["motw", "fanfav", "experiment"],  // Triangle
  "6.4":   ["motw", "twoparter"],  // Dreamland (1)
  "6.5":   ["motw", "twoparter", "mulder"],  // Dreamland (2)
  "6.6":   ["motw", "fanfav", "comedy", "xmas"],  // How the Ghosts Stole Christmas
  "6.7":   ["motw"],  // Terms of Endearment
  "6.8":   ["motw"],  // The Rain King
  "6.9":   ["myth", "skinner"],  // S.R. 819
  "6.10":  ["motw", "heavy", "scully"],  // Tithonus
  "6.11":  ["myth", "twoparter"],  // Two Fathers
  "6.12":  ["myth", "twoparter", "milestone", "csm"],  // One Son
  "6.13":  ["motw", "milestone"],  // Agua Mala
  "6.14":  ["motw", "fanfav", "experiment"],  // Monday
  "6.15":  ["motw", "comedy"],  // Arcadia
  "6.16":  ["motw"],  // Alpha
  "6.17":  ["motw"],  // Trevor
  "6.18":  ["motw", "scully"],  // Milagro
  "6.19":  ["motw", "fanfav", "comedy", "experiment", "castpen"],  // The Unnatural
  "6.20":  ["motw", "comedy", "gunmen"],  // Three of a Kind
  "6.21":  ["motw"],  // Field Trip
  "6.22":  ["myth", "twoparter"],  // Biogenesis
  // season 7
  "7.1":   ["myth", "twoparter"],  // The Sixth Extinction
  "7.2":   ["myth", "twoparter", "castpen", "mulder"],  // The Sixth Extinction: Amor Fati
  "7.3":   ["motw", "experiment"],  // Hungry
  "7.4":   ["motw"],  // Millennium
  "7.5":   ["motw"],  // Rush
  "7.6":   ["motw", "comedy"],  // The Goldberg Variation
  "7.7":   ["motw", "scary", "scully"],  // Orison
  "7.8":   ["motw", "comedy"],  // The Amazing Maleeni
  "7.9":   ["motw"],  // Signs and Wonders
  "7.10":  ["myth", "heavy", "twoparter", "mulder"],  // Sein und Zeit
  "7.11":  ["myth", "heavy", "twoparter", "milestone", "mulder"],  // Closure
  "7.12":  ["motw", "fanfav", "comedy", "experiment"],  // X-Cops
  "7.13":  ["motw", "gunmen"],  // First Person Shooter
  "7.14":  ["motw"],  // Theef
  "7.15":  ["myth", "castpen", "scully", "csm"],  // En Ami
  "7.16":  ["motw"],  // Chimera
  "7.17":  ["motw", "castpen", "scully"],  // all things
  "7.18":  ["motw", "skinner"],  // Brand X
  "7.19":  ["motw", "comedy", "experiment", "castpen"],  // Hollywood A.D.
  "7.20":  ["motw", "comedy"],  // Fight Club
  "7.21":  ["motw", "fanfav", "comedy"],  // Je Souhaite
  "7.22":  ["myth", "twoparter", "milestone"],  // Requiem
  // season 8
  "8.1":   ["myth", "twoparter", "milestone", "doggett"],  // Within
  "8.2":   ["myth", "twoparter"],  // Without
  "8.3":   ["motw"],  // Patience
  "8.4":   ["motw", "fanfav", "scary", "scully"],  // Roadrunners
  "8.5":   ["motw", "doggett"],  // Invocation
  "8.6":   ["motw"],  // Redrum
  "8.7":   ["motw"],  // Via Negativa
  "8.8":   ["motw"],  // Surekill
  "8.9":   ["motw"],  // Salvage
  "8.10":  ["motw"],  // Badlaa
  "8.11":  ["myth"],  // The Gift
  "8.12":  ["motw"],  // Medusa
  "8.13":  ["myth", "scully"],  // Per Manum
  "8.14":  ["myth", "heavy", "twoparter", "milestone"],  // This is Not Happening
  "8.15":  ["myth", "twoparter", "milestone", "skinner"],  // DeadAlive
  "8.16":  ["myth", "mulder"],  // Three Words
  "8.17":  ["motw", "doggett"],  // Empedocles
  "8.18":  ["myth"],  // Vienen
  "8.19":  ["motw", "doggett"],  // Alone
  "8.20":  ["myth", "twoparter"],  // Essence
  "8.21":  ["myth", "twoparter", "milestone"],  // Existence
  // season 9
  "9.1":   ["myth", "twoparter"],  // Nothing Important Happened Today (1)
  "9.2":   ["myth", "twoparter"],  // Nothing Important Happened Today (2)
  "9.3":   ["motw"],  // Dæmonicus
  "9.4":   ["motw", "doggett", "reyes"],  // 4-D
  "9.5":   ["motw"],  // Lord of the Flies
  "9.6":   ["myth"],  // Trust No 1
  "9.7":   ["motw", "doggett"],  // John Doe
  "9.8":   ["motw", "reyes"],  // Hellbound
  "9.9":   ["myth", "twoparter"],  // Provenance
  "9.10":  ["myth", "twoparter"],  // Providence
  "9.11":  ["motw", "reyes"],  // Audrey Pauley
  "9.12":  ["motw", "doggett"],  // Underneath
  "9.13":  ["motw", "comedy", "reyes"],  // Improbable
  "9.14":  ["motw"],  // Scary Monsters
  "9.15":  ["motw", "comedy", "milestone", "callback", "gunmen"],  // Jump the Shark
  "9.16":  ["myth", "heavy", "milestone", "castpen"],  // William
  "9.17":  ["motw", "doggett"],  // Release
  "9.18":  ["motw", "comedy"],  // Sunshine Days
  "9.19":  ["myth", "twoparter"],  // The Truth (1)
  "9.20":  ["myth", "twoparter", "milestone"],  // The Truth (2)
  // season 10
  "10.1":  ["myth", "milestone"],  // My Struggle
  "10.2":  ["motw", "callback"],  // Founder's Mutation
  "10.3":  ["motw", "fanfav", "comedy", "darin"],  // Mulder and Scully Meet the Were-Monster
  "10.4":  ["motw", "scary", "heavy"],  // Home Again
  "10.5":  ["motw"],  // Babylon
  "10.6":  ["myth"],  // My Struggle II
  // season 11
  "11.1":  ["myth"],  // My Struggle III
  "11.2":  ["motw", "gunmen"],  // This
  "11.3":  ["motw"],  // Plus One
  "11.4":  ["motw", "comedy", "darin"],  // The Lost Art of Forehead Sweat
  "11.5":  ["myth", "scully"],  // Ghouli
  "11.6":  ["motw", "skinner"],  // Kitten
  "11.7":  ["motw", "comedy", "experiment"],  // Rm9sbG93ZXJz
  "11.8":  ["motw", "scary"],  // Familiar
  "11.9":  ["motw"],  // Nothing Lasts Forever
  "11.10": ["myth", "milestone", "csm"],  // My Struggle IV
};
