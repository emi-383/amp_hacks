// Page content. Entries marked PLACEHOLDER need real values before launch.

export const benefits = [
  {
    title: "No experience needed",
    body: "Most of our hackers are beginners. Workshops start from zero, and mentors are around all weekend.",
  },
  {
    title: "Free food & merch",
    body: "Meals, snacks, and a t-shirt. You do not pay for anything at &Hacks.",
  },
  {
    title: "Meet companies",
    body: "Sponsors send engineers and recruiters. Coffee chats put you in front of them without a career-fair line.",
  },
  {
    title: "Build something real",
    body: "Leave with a finished project, a demo, and something worth putting on a resume.",
  },
] as const;

// PLACEHOLDER — track names and descriptions are drafts built around the
// "Imagination" theme. Confirm with the organizing team before launch.
export const tracks = [
  {
    name: "Worldbuilding",
    body: "Invent a place and make it real enough to walk through — games, maps, simulations, interactive fiction.",
    sponsored: false,
  },
  {
    name: "Everyday Magic",
    body: "Take something tedious and make it feel effortless. Small tools that make life quietly better.",
    sponsored: false,
  },
  {
    name: "Sight & Sound",
    body: "Anything you can see or hear — generative art, music tools, visualizations, creative coding.",
    sponsored: false,
  },
  {
    name: "Sponsor Track",
    body: "A challenge set by one of our sponsors, announced at opening ceremony.",
    sponsored: true,
  },
] as const;

// PLACEHOLDER — prize amounts and categories not confirmed.
export const prizes = [
  { place: "1st", title: "Best Overall", detail: "Prize TBA" },
  { place: "2nd", title: "Runner-Up", detail: "Prize TBA" },
  { place: "3rd", title: "Third Place", detail: "Prize TBA" },
  { place: "★", title: "Best Beginner Hack", detail: "For first-time hackers" },
  { place: "★", title: "Best Design", detail: "Prize TBA" },
  { place: "★", title: "Sponsor Prizes", detail: "Announced at opening ceremony" },
] as const;

// PLACEHOLDER — schedule is a typical hackathon shape, not a confirmed agenda.
export const schedule = [
  {
    day: "Saturday",
    items: [
      { time: "9:00 AM", title: "Check-in & breakfast" },
      { time: "10:00 AM", title: "Opening ceremony", note: "Tracks and sponsor challenges announced" },
      { time: "11:00 AM", title: "Hacking begins" },
      { time: "12:30 PM", title: "Workshop: Getting started from zero", note: "For first-time hackers" },
      { time: "3:00 PM", title: "Coffee chat with sponsors", note: "Informal — bring questions, not a resume" },
      { time: "7:00 PM", title: "Dinner & team-building" },
    ],
  },
  {
    day: "Sunday",
    items: [
      { time: "9:00 AM", title: "Breakfast" },
      { time: "12:00 PM", title: "Submissions due" },
      { time: "1:00 PM", title: "Judging & demos" },
      { time: "3:00 PM", title: "Closing ceremony & prizes" },
    ],
  },
] as const;

// PLACEHOLDER — no sponsors confirmed for 2026 yet. Tiers kept so the
// layout is ready; drop in logos as they are signed.
export const sponsorTiers = [
  { tier: "Gold", slots: 2 },
  { tier: "Silver", slots: 3 },
  { tier: "Bronze", slots: 4 },
] as const;

export const faqs = [
  {
    q: "What is a hackathon?",
    a: "A hackathon is a free, weekend-long tech event where students learn new skills, build interesting projects, and have fun. We have free merch, free food, and industry professionals to connect with.",
  },
  {
    q: "Do I need coding experience?",
    a: "No coding experience is necessary. In fact, some of our best hacks have come from teams of non-CS people.",
  },
  {
    q: "Can I attend &Hacks?",
    a: "Come to &Hacks! Work on a project — with a team or on your own — to win prizes, or just come for the workshops and good vibes. Please note that we are unable to chaperone minors.",
  },
  {
    q: "Can I go solo?",
    a: "You can go solo or work in a team. Join our Discord to find teammates, or come to the team-building session at the event.",
    link: { label: "Join the Discord", href: "https://discord.gg/ve8JwXSB" },
  },
  {
    q: "When can I start my project?",
    a: "When hacking opens at the event. If you continue a previous project, be transparent about what you built during &Hacks and what existed beforehand.",
  },
  {
    q: "What if I don't submit a project?",
    a: "That's completely fine. You can finish it on your own time after &Hacks ends — nothing is wasted.",
  },
  {
    q: "Are there rules?",
    a: "All hackers, organizers, volunteers, and sponsors follow the Major League Hacking Code of Conduct, which covers expected behavior, harassment, and how to report an incident.",
    link: { label: "Read the MLH Code of Conduct", href: "https://mlh.io/code-of-conduct" },
  },
  {
    q: "What if I have more questions?",
    a: "Reach out any time at computing@wm.edu, or ask in our Discord.",
  },
] as const;
