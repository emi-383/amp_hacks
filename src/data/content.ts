// Page content.
//
// PLACEHOLDER lists below are deliberately empty. An empty list renders a
// visible "to be announced" panel, which is better than a plausible guess
// nobody can tell apart from a real announcement. Fill one in and the panel
// is replaced automatically.
//
// Nothing in this file is invented. The FAQ answers are v1's own wording
// (src/content/blog/*.md in the andhacks25 repo), lightly edited.

export const benefits = [
  {
    title: "It's free",
    body: "Registration, food all weekend, merch. You won't pay for anything at &hacks.",
  },
  {
    title: "You don't need to know how to code",
    body: "Loads of people show up having never written a line, and some of our best hacks have come from teams with no CS majors on them. Workshops start from scratch and there are mentors around all weekend if you get stuck.",
  },
  {
    title: "Meet people who are hiring",
    body: "Sponsors send engineers and recruiters down for the weekend, and they stick around. It's a lot easier to talk to someone here than it is across a career fair table.",
  },
  {
    title: "Build whatever you want",
    body: "A web app, a game, something with hardware, a bot that does one stupid thing well. Didn't finish? Plenty of people don't. It's your project and you can keep going after the weekend.",
  },
] as const;

type Track = { name: string; body: string; sponsored: boolean };

// PLACEHOLDER - no tracks announced for XII, sponsor track included.
export const tracks: readonly Track[] = [];

type Prize = { title: string; detail: string };

// PLACEHOLDER - no prize categories announced for XII.
export const prizes: readonly Prize[] = [];

type ScheduleItem = {
  title: string;
  // Times exactly as the organisers have them. A missing start or end is a
  // real gap in the running order, not an oversight here - the page renders
  // it as "TBA" rather than filling in a plausible time.
  start?: string;
  end?: string;
  location?: string;
};

type ScheduleDay = { day: string; items: readonly ScheduleItem[] };

export const schedule: readonly ScheduleDay[] = [
  {
    day: "Friday",
    items: [
      { title: "Set up", start: "5:00 PM", location: "ISC4" },
      { title: "Workshops (Git, Python, etc.)" },
      { title: "Dinner", end: "9:00 PM" },
    ],
  },
  {
    day: "Saturday",
    items: [
      { title: "Set up", start: "7:00 AM", end: "8:00 AM" },
      {
        title: "Registration / sign in",
        start: "8:00 AM",
        end: "10:30 AM",
        location: "Outside ISC",
      },
      { title: "Breakfast", start: "8:00 AM", end: "10:30 AM", location: "ISC4" },
      { title: "Opening", start: "10:30 AM" },
      { title: "Our intro", start: "11:00 AM" },
      { title: "Categories", start: "11:10 AM" },
      { title: "Keynote speaker", start: "11:20 AM" },
      { title: "Hacking starts", start: "12:00 PM" },
      { title: "Lunch", start: "1:00 PM", end: "2:30 PM" },
      { title: "Coffee", start: "1:00 PM", end: "3:00 PM" },
      { title: "Dinner", start: "7:30 PM", end: "8:00 PM" },
    ],
  },
  {
    day: "Sunday",
    items: [
      { title: "Midnight snack", start: "12:00 AM" },
      { title: "Set up" },
      { title: "Breakfast", start: "8:00 AM", end: "9:30 AM" },
      { title: "Hacking ends", start: "12:00 PM" },
      { title: "Lunch", start: "12:00 PM", end: "1:00 PM" },
      { title: "Judging", start: "1:00 PM", end: "3:00 PM" },
      { title: "Closing ceremony", start: "4:00 PM", location: "ISC 1221" },
    ],
  },
];

export type Sponsor = {
  name: string;
  tier: "Gold" | "Silver" | "Bronze" | "Partner";
  // Path under /public/logos. Every file there is a .webp built from
  // ../../logos/original by ../../logos/convert.sh - edit the original and
  // re-run the script, never the file in public. Omitted means we have not
  // been sent a logo yet: the tile shows the name as text, not a broken image.
  logo?: string;
  // Omitted means no URL has been supplied - the tile renders unlinked.
  href?: string;
  // Which tile the logo needs to sit on to be visible at all. Several of the
  // files we have are white-on-transparent (MULU, Column15, Rellify) and
  // disappear on a pale tile; the rest are dark artwork and disappear on a
  // dark one. Default is "light".
  logoOn?: "light" | "dark";
};

// One list, ordered by tier - the tile size does the ranking, so nothing here
// needs a heading. W&M's own units sit in with everyone else; their names are
// expanded from the sheet's shorthand ("CS", "CDSP", "Ent Hub") against
// wm.edu, since a tile reading "Ent Hub" means nothing to a visitor.
//
// Tiers are from the organisers' sponsorship sheet. No sponsor URLs were
// supplied, so nothing is linked yet.
export const sponsors: readonly Sponsor[] = [
  { name: "W&M Computer Science", tier: "Gold" },

  { name: "Rellify", tier: "Silver", logo: "/logos/rellify.webp", logoOn: "dark" },
  { name: "WJE", tier: "Silver", logo: "/logos/wje.webp" },
  {
    name: "W&M School of Computing, Data Sciences & Physics",
    tier: "Silver",
    logo: "/logos/wm-computing-data-sciences-physics.webp",
  },
  { name: "W&M Linguistics", tier: "Silver", logo: "/logos/wm-linguistics.webp" },
  {
    name: "W&M Entrepreneurship Hub",
    tier: "Silver",
    logo: "/logos/wm-entrepreneurship-hub.webp",
  },

  { name: "Air", tier: "Bronze" },
  { name: "MULU", tier: "Bronze", logo: "/logos/mulu.webp", logoOn: "dark" },
  { name: "TSI", tier: "Bronze", logo: "/logos/tsi.webp" },
  { name: "Luna Labs", tier: "Bronze", logo: "/logos/luna-labs.webp" },
  { name: "Agile Software", tier: "Bronze" },

  { name: "Column15", tier: "Partner", logo: "/logos/column15.webp", logoOn: "dark" },
  { name: "Sarah Knight", tier: "Partner", logo: "/logos/sarah-knight.webp" },
  {
    name: "Nano & Biomaterials Lab",
    tier: "Partner",
    logo: "/logos/nano-biomaterials-lab.webp",
  },
];

export const faqs = [
  {
    q: "What is a hackathon?",
    a: "A free, weekend-long tech event where students learn new skills, build interesting projects, and have fun! There's free merch, free food, and industry people to meet.",
  },
  {
    q: "Do I need coding experience?",
    a: "Nope. Some of our best hacks have come from teams with no CS people on them at all.",
  },
  {
    q: "What does it cost?",
    a: "Nothing. Registration, food, and merch are all free.",
  },
  {
    q: "Can I attend &hacks?",
    a: "Come to &hacks! Work on a project, with a team or on your own, to win prizes. Or just come for the workshops and the good vibes. No pressure, do what you feel. One note for high schoolers: we aren't able to chaperone minors.",
  },
  {
    q: "Can I go solo?",
    a: "You can go solo or work in a team! Join the Discord to find people, or come to the team-building workshop at &hacks itself.",
    link: { label: "Join the Discord", href: "https://discord.gg/4AJgGBEfQW" },
  },
  {
    q: "When can I start my project?",
    a: "Once the schedule comes out. If you're carrying on something you already started, just be upfront about what you built during &hacks and what was done beforehand.",
  },
  {
    q: "What if I don't submit a project?",
    a: "That's OK! You can still finish it on your own time after &hacks concludes.",
  },
  {
    q: "Are there rules?",
    a: "You can use AI at &hacks. Past that, everyone here follows the MLH Code of Conduct: hackers, organizers, volunteers, sponsors. It covers how we expect people to behave, what counts as harassment, and how to report something.",
    link: {
      label: "Read the MLH Code of Conduct",
      href: "https://mlh.io/code-of-conduct",
    },
  },
  {
    q: "What if I have more questions?",
    a: "Email us at computing@wm.edu or ask in the Discord, and someone on the team will pick it up.",
  },
] as const;
