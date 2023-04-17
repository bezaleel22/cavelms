import { writable } from "svelte/store";

export const medias = writable([
  {
    title: "Big Buck Bunny 60fps 4K - Official Blender Foundation Short Film",
    description:
      "Enjoy this UHD High Frame rate version of one of the iconic short films produced by Blender Institute!",
    category: "youtube",
    mediaType: "VIDEO",

    playerInfo: {
      currentTime: 0,
      duration: 635,
      posterUrl: "https://i.ytimg.com/vi_webp/aqz-KE-bpKQ/maxresdefault.webp",
      thumbnailUrl:
        "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDQHVYYO9BNXZDYGmQWzBq_xP0R1g",
    },

    file: {
      name: "youtube.mp4",
      mimetype: "video/mp4",
      encoding: "",
      size: 0,
      url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ",
    },
  },
  {
    title: "The Fox and the Bird - CGI short film by Fred and Sam Guillaume",
    description:
      "A solitary fox finds itself improvising fatherhood for a freshly hatched baby bird. Two paths cross and a family is formed, until fate reminds each of the life it is meant to lead.",
    category: "youtube",
    mediaType: "VIDEO",

    playerInfo: {
      currentTime: 0,
      duration: 847,
      posterUrl: "https://i.ytimg.com/vi_webp/UT-mA673hLs/maxresdefault.webp",
      thumbnailUrl:
        "https://i.ytimg.com/vi/UT-mA673hLs/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCV2ZLs_9gS2NwZ7RRVrtkXwedhNQ",
    },

    file: {
      name: "youtube.mp4",
      mimetype: "video/mp4",
      encoding: "",
      size: 0,
      url: "https://www.youtube.com/watch?v=UT-mA673hLs",
    },
  },
  {
    title: 'Award Winning** CGI Animated Short Film: "Green Light" by Seongmin Kim | CGMeetup',
    description:
      "With the ecosystem destroyed after a nuclear war, Mari, a survivor, does all she can to rebuild. When she stumbles upon a robot soldier in an abandoned city, everything changes.",
    category: "youtube",
    mediaType: "VIDEO",

    playerInfo: {
      currentTime: 0,
      duration: 726,
      posterUrl: "https://i.ytimg.com/vi_webp/Jm0MLlE4x0U/maxresdefault.webp",
      thumbnailUrl:
        "https://i.ytimg.com/vi/Jm0MLlE4x0U/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC13JOLo0ShLlnjJLOixbju5Opm0A",
    },

    file: {
      name: "youtube.mp4",
      mimetype: "video/mp4",
      encoding: "",
      size: 0,
      url: "https://www.youtube.com/watch?v=Jm0MLlE4x0U",
    },
  },
  {
    title: "MINUSCULE Clips + Trailer (2016)",
    description:
      "Watch the official MINUSCULE Clips + Trailer (2016). Let us know what you think in the comments below!",
    category: "youtube",
    mediaType: "VIDEO",

    playerInfo: {
      currentTime: 0,
      duration: 790,
      posterUrl: "https://i.ytimg.com/vi_webp/dGHzj1Pozl8/maxresdefault.webp",
      thumbnailUrl:
        "https://i.ytimg.com/vi/dGHzj1Pozl8/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7azm7hFe6HVs3Q_cHd28wNknAag",
    },

    file: {
      name: "youtube.mp4",
      mimetype: "video/mp4",
      encoding: "",
      size: 0,
      url: "https://www.youtube.com/watch?v=dGHzj1Pozl8",
    },
  },
]);
