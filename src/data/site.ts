// Central config. Everything a non-developer might need to change lives here.
//
// Anything not confirmed for XII is marked PLACEHOLDER. Placeholders render as
// a visible "to be announced" panel on the page rather than as invented
// detail, so nothing here has to be un-guessed later.

export const site = {
  name: "&hacks XII",
  organization: "William & Mary",
  tagline: "Launch your imagination",
  blurb:
    "William & Mary's student hackathon. Free food, free merch, and you don't need to know how to code.",

  // From the v1 site's own hero ("&Hacks 2026 / Sept. 25-27"), so this is the
  // org's published date. Worth confirming with Libby before launch.
  date: {
    label: "September 25-27, 2026",
    detail: "Friday evening to Sunday",
    iso: "2026-09-25T18:00:00-04:00" as string | null,
  },

  // "ISC4" is the building's campus shorthand, not somewhere a visitor can
  // navigate to, so `name` spells it out. The street address and map link
  // still have to come from the organisers - nothing is guessed here, and
  // while `address` is empty the page falls back to naming the campus.
  venue: {
    confirmed: true,
    name: "Integrated Science Center 4 (ISC4)",
    address: "",
    map: "",
    city: "Williamsburg, VA",
  },

  links: {
    register: "https://wmsas.qualtrics.com/jfe/form/SV_6S8vNLg8wb4xpum",
    sponsor: "https://wmsas.qualtrics.com/jfe/form/SV_57iVqHk2QHKUzpY",
    discord: "https://discord.gg/4AJgGBEfQW",
    instagram: "https://www.instagram.com/andhackswm/",
    email: "computing@wm.edu",
    mlhCodeOfConduct: "https://mlh.io/code-of-conduct",
  },
} as const;

export const nav = [
  { href: "#about", label: "About" },
  { href: "#tracks", label: "Tracks" },
  { href: "#prizes", label: "Prizes" },
  { href: "#schedule", label: "Schedule" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#faq", label: "FAQ" },
] as const;
