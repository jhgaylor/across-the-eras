# Dragon Ball Z — package notes

**Source:** TVmaze show 2103 (`/shows/2103/episodes`, `/episodes/<id>/guestcast`). Season axis, 9 seasons,
293 entries = the 291 broadcast episodes plus two TV specials.

## Confident
- Episode data, air dates, images and ratings: straight from TVmaze. Titles are the English broadcast
  titles TVmaze carries; the numbering is the standard nine-season saga split
  (39 / 35 / 33 / 32 / 26 / 29 / 25 / 34 / 38 = 291), which matches TVmaze exactly.
- The series-director handoff at episode 200 — Daisuke Nishio through 7×05, Shigeyasu Yamauchi from
  7×06 — and the opening-theme change ("Cha-La Head-Cha-La" → "We Gotta Power") at the same point.
- Transformation episodes named in the chart were checked against the episode list: Kaio-ken 1×29,
  Super Saiyan 3×21, Super Saiyan 2 6×20, Super Saiyan 3 8×26, Gotenks 8×32, Vegito 9×16,
  Instant Transmission 4×14, Trunks' arrival 4×12.
- The three big anime-only arcs: the Snake Way / Arlia / Pendulum Room stretch (1×09–1×17), the Garlic Jr.
  arc (4×01–4×10) and the Other World Tournament (7×01–7×05).

## Guessed / approximate
- The `filler` tag marks the well-established anime-only arcs and a handful of anime-only one-offs
  ("A Girl Named Lime", the "Memories of Gohan" clip show, "The Puzzle of General Tao", "Gohan's First
  Date"). It is **not** a chapter-by-chapter audit: plenty of manga-derived episodes are padded, and those
  are tagged `story` like the rest. Treat it as "definitely skippable", not "everything else is tight".
- In-show Age dates on the timeline row are the usual fan chronology, drawn at season granularity.
- Spotlight tags are editorial. `story` is the fallback, so every non-filler episode carries at least one tag.

## Notes for the engine
- The two TV specials are carried in air order with episode number **0**, the way the West Wing package
  carries "Isaac and Ishmael" as 3×00: `2.0` Bardock — The Father of Goku (Oct 1990) and `6.0` The History
  of Trunks (Feb 1993). Both are story-relevant and are how people watch them.
- The 13 theatrical films TVmaze files under this show (null episode numbers) are **not** included —
  they are not part of the watch order and don't fit the season/episode numbering.
- Guest cast from TVmaze is the **Japanese** voice cast (Shigeru Chiba as Raditz, and so on); the English
  dub cast isn't in the upstream data. 210 of 293 entries have any guest cast at all.
- Nothing unusual structurally: 9 contiguous seasons, no gaps.
