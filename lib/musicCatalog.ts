/**
 * Lultrills released catalog, platform deep links for public surface.
 * Spotify + Apple Music IDs verified 2026-07-11. YouTube uses search deep-links
 * when a stable official video ID is not published.
 */

export type PlatformLinks = {
  spotify: string;
  apple: string;
  youtube: string;
};

export type CatalogRelease = {
  id: string;
  title: string;
  kind: "album" | "single";
  meta: string;
  /** Local page for album (SYSTEM BREACH) */
  pageHref?: string;
  links: PlatformLinks;
};

export type AlbumTrack = {
  n: number;
  title: string;
  links: PlatformLinks;
};

const YT = (q: string) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`Lultrills ${q}`)}`;

const SP_TRACK = (id: string) => `https://open.spotify.com/track/${id}`;
const SP_ALBUM = (id: string) => `https://open.spotify.com/album/${id}`;
const SP_SEARCH = (q: string) =>
  `https://open.spotify.com/search/${encodeURIComponent(`Lultrills ${q}`)}`;

/** SYSTEM BREACH, full album, track order from Spotify / Apple Music */
export const SYSTEM_BREACH_ALBUM = {
  title: "SYSTEM BREACH",
  meta: "Album · July 11, 2026 · 12 tracks",
  pageHref: "/system-breach",
  links: {
    spotify: SP_ALBUM("2EdL8cFjNfkiSuxk0udISO"),
    apple: "https://music.apple.com/us/album/system-breach/6789855058",
    youtube: YT("SYSTEM BREACH album"),
  } satisfies PlatformLinks,
  tracks: [
    {
      n: 1,
      title: "DOUBLE TAPPED",
      links: {
        spotify: SP_TRACK("46v77YcfcGN3ZjTVEwPcSD"),
        apple:
          "https://music.apple.com/us/album/double-tapped/6789855058?i=6789855059",
        youtube: YT("DOUBLE TAPPED"),
      },
    },
    {
      n: 2,
      title: "Oh Okay",
      links: {
        spotify: SP_TRACK("64BGbLT2yaTKsgbHeA1rz2"),
        apple:
          "https://music.apple.com/us/album/oh-okay/6789855058?i=6789855060",
        youtube: YT("Oh Okay"),
      },
    },
    {
      n: 3,
      title: "G O A T",
      links: {
        spotify: SP_TRACK("6xAACFpujS1CJPF1JQsfp1"),
        apple:
          "https://music.apple.com/us/album/g-o-a-t/6789855058?i=6789855061",
        youtube: YT("G O A T"),
      },
    },
    {
      n: 4,
      title: "NO BRAKEZ",
      links: {
        spotify: SP_TRACK("0XeXzNrr2M3cjGU464lOfd"),
        apple:
          "https://music.apple.com/us/album/no-brakez/6789855058?i=6789855062",
        youtube: YT("NO BRAKEZ"),
      },
    },
    {
      n: 5,
      title: "KASANO",
      links: {
        spotify: SP_TRACK("04zfd7a9p9wKMUlJWW8zSy"),
        apple:
          "https://music.apple.com/us/album/kasano/6789855058?i=6789855064",
        youtube: YT("KASANO"),
      },
    },
    {
      n: 6,
      title: "UP...",
      links: {
        spotify: SP_TRACK("1tdBLeOwAKb9TbKNZMShSS"),
        apple: "https://music.apple.com/us/album/up/6789855058?i=6789855065",
        youtube: YT("UP..."),
      },
    },
    {
      n: 7,
      title: "Never Be The SAME",
      links: {
        spotify: SP_TRACK("2QDKwXyC1sgCGSHiaCuAjc"),
        apple:
          "https://music.apple.com/us/album/never-be-the-same/6789855058?i=6789855066",
        youtube: YT("Never Be The SAME"),
      },
    },
    {
      n: 8,
      title: "AMIWRONG?",
      links: {
        spotify: SP_TRACK("1QkmUopS9zq8bvqhIPIk7y"),
        apple:
          "https://music.apple.com/us/album/amiwrong/6789855058?i=6789855067",
        youtube: YT("AMIWRONG?"),
      },
    },
    {
      n: 9,
      title: "Low Down",
      links: {
        spotify: SP_TRACK("3O4MBUs2h1gUlurzEaMwVn"),
        apple:
          "https://music.apple.com/us/album/low-down/6789855058?i=6789855068",
        youtube: YT("Low Down"),
      },
    },
    {
      n: 10,
      title: "nik",
      links: {
        spotify: SP_TRACK("5Dg17szApOSeqM1rKGoYY8"),
        apple: "https://music.apple.com/us/album/nik/6789855058?i=6789855069",
        youtube: YT("nik"),
      },
    },
    {
      n: 11,
      title: "icu",
      links: {
        spotify: SP_TRACK("6bW3srI166RCfFqfCaUjuT"),
        apple: "https://music.apple.com/us/album/icu/6789855058?i=6789855070",
        youtube: YT("icu"),
      },
    },
    {
      n: 12,
      title: "what's next...?",
      links: {
        spotify: SP_TRACK("0USPEH8JmXkaddLRRjyAB9"),
        apple:
          "https://music.apple.com/us/album/whats-next/6789855058?i=6789855071",
        youtube: YT("what's next...?"),
      },
    },
  ] satisfies AlbumTrack[],
};

/**
 * Full public catalog: album first, then all released singles.
 * Spotify: deep link when known; search fallback when store ID not yet mapped.
 */
export const CATALOG: CatalogRelease[] = [
  {
    id: "system-breach",
    title: "SYSTEM BREACH",
    kind: "album",
    meta: "Album · July 11, 2026 · 12 tracks",
    pageHref: "/system-breach",
    links: SYSTEM_BREACH_ALBUM.links,
  },
  {
    id: "amiwrong",
    title: "AMIWRONG?",
    kind: "single",
    meta: "Single",
    links: {
      spotify: SP_ALBUM("71vwu57z3XV2SMwAr5xHaB"),
      apple:
        "https://music.apple.com/us/album/amiwrong/1887310579?i=1887310580",
      youtube: YT("AMIWRONG?"),
    },
  },
  {
    id: "kasano",
    title: "Kasano",
    kind: "single",
    meta: "Single",
    links: {
      spotify: SP_ALBUM("1DAnxp8GlremmFseeS3lGt"),
      apple: "https://music.apple.com/us/album/kasano/1876569795?i=1876569796",
      youtube: YT("Kasano"),
    },
  },
  {
    id: "up",
    title: "Up...",
    kind: "single",
    meta: "Single",
    links: {
      spotify: SP_ALBUM("7qiIMR7aMUFb4IW2TceJDu"),
      apple: "https://music.apple.com/us/album/up/1865728118?i=1865728122",
      youtube: YT("Up..."),
    },
  },
  {
    id: "oh-okay-2",
    title: "Oh Okay 2",
    kind: "single",
    meta: "Single",
    links: {
      spotify: SP_ALBUM("6Q2A3eOtUycHBvjTFViqaz"),
      apple:
        "https://music.apple.com/us/album/oh-okay-2/1861986737?i=1861986738",
      youtube: YT("Oh Okay 2"),
    },
  },
  {
    id: "hpd",
    title: "HPD",
    kind: "single",
    meta: "Single",
    links: {
      spotify: SP_ALBUM("6s2HpCjnuYmzT9t6PwNVqY"),
      apple: "https://music.apple.com/us/album/hpd/1856598513?i=1856598514",
      youtube: YT("HPD"),
    },
  },
  {
    id: "2real",
    title: "2REAL",
    kind: "single",
    meta: "Single",
    links: {
      spotify: SP_ALBUM("0LDVn2N2LitmZgU0LrYcQF"),
      apple: "https://music.apple.com/us/album/2real/1855241806?i=1855241807",
      youtube: YT("2REAL"),
    },
  },
  {
    id: "villain",
    title: "Villain",
    kind: "single",
    meta: "Single",
    links: {
      spotify: SP_ALBUM("2Af5272isARmI0XgNNSr4d"),
      apple: "https://music.apple.com/us/album/villain/1835307017?i=1835307018",
      youtube: YT("Villain"),
    },
  },
  {
    id: "psa",
    title: "PSA",
    kind: "single",
    meta: "Single",
    links: {
      spotify: SP_SEARCH("PSA"),
      apple: "https://music.apple.com/us/album/psa/1832238551?i=1832238552",
      youtube: YT("PSA"),
    },
  },
  {
    id: "never-be-the-same",
    title: "Never Be The SAME",
    kind: "single",
    meta: "Single",
    links: {
      spotify: SP_SEARCH("Never Be The SAME"),
      apple:
        "https://music.apple.com/us/album/never-be-the-same/1829998737?i=1829998738",
      youtube: YT("Never Be The SAME"),
    },
  },
  {
    id: "im-gonna-crash",
    title: "I'm Gonna CRASH",
    kind: "single",
    meta: "Single",
    links: {
      spotify: SP_SEARCH("I'm Gonna CRASH"),
      apple:
        "https://music.apple.com/us/album/im-gonna-crash/1825710554?i=1825710555",
      youtube: YT("I'm Gonna CRASH"),
    },
  },
  {
    id: "cant-change",
    title: "Cant Change",
    kind: "single",
    meta: "Single",
    links: {
      spotify: SP_SEARCH("Cant Change"),
      apple:
        "https://music.apple.com/us/album/cant-change/1823452625?i=1823452626",
      youtube: YT("Cant Change"),
    },
  },
  {
    id: "g-o-a-t",
    title: "G O A T",
    kind: "single",
    meta: "Single",
    links: {
      spotify: SP_ALBUM("6UO8mvTCoG5vSUPhG3yYM6"),
      apple: "https://music.apple.com/us/album/g-o-a-t/6771086936?i=6771086937",
      youtube: YT("G O A T"),
    },
  },
  {
    id: "oh-okay",
    title: "Oh Okay",
    kind: "single",
    meta: "Single · Honk Magazine",
    links: {
      spotify: SP_SEARCH("Oh Okay"),
      apple: "https://music.apple.com/us/album/oh-okay/1813751606?i=1813751609",
      youtube: YT("Oh Okay"),
    },
  },
  {
    id: "really-that",
    title: "Really That",
    kind: "single",
    meta: "Single",
    links: {
      spotify: SP_SEARCH("Really That"),
      apple:
        "https://music.apple.com/us/album/really-that/1812095045?i=1812095046",
      youtube: YT("Really That"),
    },
  },
];

export const ARTIST = {
  spotify: "https://open.spotify.com/artist/0nacf49LEewRpqqnHsKJlt",
  apple: "https://music.apple.com/us/artist/lultrills/1811909376",
  youtube: YT(""),
};
