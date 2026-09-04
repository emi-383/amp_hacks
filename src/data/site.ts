// Central config. Everything a non-developer might need to change lives here.
// Values marked PLACEHOLDER are not confirmed yet — see README for the open list.

export const site = {
  name: "&Hacks XII",
  organization: "William & Mary",
  theme: "Imagination",
  tagline: "A weekend to build the thing you keep imagining.",

  // PLACEHOLDER — exact dates not confirmed. Meeting notes say fall 2026.
  date: {
    label: "Fall 2026",
    detail: "Exact dates coming soon",
    // Set this once dates are confirmed, e.g. "2026-11-07T09:00:00-05:00"
    iso: null as string | null,
  },

  // PLACEHOLDER — venue not confirmed.
  venue: {
    name: "William & Mary",
    detail: "Williamsburg, VA",
    note: "Exact building announced closer to the event",
  },

  links: {
    register: "https://wmsas.qualtrics.com/jfe/form/SV_6S8vNLg8wb4xpum",
    sponsor: "https://wmsas.qualtrics.com/jfe/form/SV_57iVqHk2QHKUzpY",
    discord: "https://discord.gg/ve8JwXSB",
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
