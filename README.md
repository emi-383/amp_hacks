# &hacks XII, v2

Rebuild of the &hacks site for 2026. Theme: **Imagination**. Tagline:
**Launch your imagination**.

Built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4.
The whole site is statically rendered, with three runtime dependencies, no
animation library, no CMS, and no backend.

Note the spelling: it is **&hacks**, lowercase h, the way v1 writes it in
`src/data/faqs.ts` on `main`.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Requires Node 20.9+ (Next 16 minimum).

## Where things live

```
src/
  app/
    layout.tsx      fonts, metadata
    page.tsx        the whole page, every section in order
    globals.css     theme tokens, sky gradients, keyframes, FAQ animation
    icon.svg        PLACEHOLDER tab icon
  components/
    Sky.tsx         scroll-driven background + starfield  (client)
    Nav.tsx         sticky nav + mobile menu              (client)
    Faq.tsx         accordion, one answer open at a time  (client)
    Reveal.tsx      fade-in-on-scroll wrapper             (client)
    Art.tsx         PLACEHOLDER illustrations + Ground
    ui.tsx          Section / Cta / Card / Tba primitives
  data/
    site.ts         links, dates, venue. Edit here first
    content.ts      benefits, tracks, prizes, schedule, sponsors, FAQ
```

Copy and links live in `src/data/`, so most edits do not require touching
components.

## How placeholders work

`tracks`, `prizes`, `schedule`, and `sponsors` in `content.ts` are **empty
lists on purpose**. An empty list renders a dashed "to be announced" panel
(`Tba` in `ui.tsx`) instead of content. Fill the list in and the panel is
replaced automatically, no component changes.

The same goes for `site.venue`: it renders a TBA panel until
`venue.confirmed` is set to `true`.

This is deliberate. A plausible-looking invented track list is worse than an
obvious gap, because nobody can tell it from a real announcement later.

## How the background works

The page runs from deep space at the top to a sunrise horizon at the bottom.
`Sky.tsx` writes a single CSS variable, `--p` (scroll progress from 0 to 1),
on each animation frame. Everything else, meaning three cross-fading gradient
layers and the star fade, is pure CSS in `globals.css`. There is no scroll
library.

Because the sky is yellow by the bottom of the page, the contact section and
the footer sit on the `Ground` hills (`Art.tsx`) with a solid dark background
instead. Without that, grey-on-yellow text is unreadable.

Anything animated is disabled under `prefers-reduced-motion`.

## Still to do

**Blocking launch:**

- [ ] **Art.** Everything in `Art.tsx` is a placeholder (balloon, rocket,
      planet, cloud, constellation, ground). Swap the SVG bodies, keep the
      component names and viewBox ratios. Nothing outside that file changes.
- [ ] **Tab icon.** `src/app/icon.svg` is a placeholder ampersand.
- [ ] **Dates.** Set to September 25-27, 2026, taken from the v1 hero
      ("&Hacks 2026 / Sept. 25-27"). That is the org's own published date,
      but confirm it with Libby.
- [ ] **Venue.** Not named anywhere in v1 and not confirmed for XII. Renders
      as TBA. Fill in `site.venue` and flip `confirmed`.
- [ ] **Tracks, prizes, schedule, sponsors.** All empty, all rendering TBA.
      See "How placeholders work" above.
- [ ] **Theme copy.** v1's about section frames XII as an AI hackathon
      ("AI & imagination = imaginAItion"). v2 does not mention AI anywhere.
      Decide which is right before launch.

**Not yet decided:**

- [ ] **Hosting.** Nobody currently knows how the live site is deployed. It
      is supposedly connected to `andhacks.cs.wm.edu`. This has to be worked
      out before v2 can replace v1. Nothing in this repo configures a deploy.
- [ ] Team photos and a "previous hackathons" section, both marked "later".

## Where the copy came from

Everything factual on the page traces to v1 or to the organizers:

| what | source |
| ---- | ------ |
| FAQ answers | `src/data/faqs.ts` on `main`, lightly edited |
| Register / sponsor forms | the two Qualtrics links in `SectionRegis.astro` |
| Discord, Instagram, email | `ContactSection.astro` |
| Dates | the v1 hero in `index.astro` |
| Tagline | the organizers |

**An earlier draft of this file claimed a set of statistics (200+
registrants, 60% first-timers, 33% non-CS, 30+ projects), a past prize list,
a past sponsor list, and a Devpost gallery link came from a "v1 sponsorship
page". There is no sponsorship page in v1 and none of those strings exist on
any branch. They were invented and have been removed. Do not reintroduce
them without a source.**

Tone follows how real hackathon sites read: short sentences, plain section
headings, welcoming rather than salesy. See vthacks.com, gotechnica.org,
hackmit.org.

## Relationship to v1

v1 (Astro) is untouched and still on `main`. This branch does not deploy
anywhere. Archive tags:

| tag            | what it is                               |
| -------------- | ---------------------------------------- |
| `v1-final`     | most complete v1 state                   |
| `v1-main`      | `main` as of 2026-04-20                  |
| `v1-art`       | `art` branch tip                         |
| `v1-sponsors`  | `sponsors`, 2 commits never merged       |

`v1-final` contains every branch except `sponsors`.
