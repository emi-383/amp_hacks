# &Hacks XII — v2

Rebuild of the &Hacks site for 2026. Theme: **Imagination**.

Built with Next.js (App Router), React, TypeScript, and Tailwind CSS v4.
The whole site is statically rendered — three runtime dependencies, no
animation library, no CMS, no backend.

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
    page.tsx        the whole page — every section, in order
    globals.css     theme tokens, sky gradients, keyframes
    icon.svg        PLACEHOLDER tab icon
  components/
    Sky.tsx         scroll-driven background + starfield  (client)
    Nav.tsx         sticky nav + mobile menu              (client)
    Reveal.tsx      fade-in-on-scroll wrapper             (client)
    Art.tsx         PLACEHOLDER illustrations
    ui.tsx          Section / Cta / Card primitives
  data/
    site.ts         links, dates, venue — edit here first
    content.ts      benefits, tracks, prizes, schedule, FAQ
```

Copy and links live in `src/data/`, so most edits do not require touching
components.

## How the background works

The page runs from deep space at the top to a sunrise horizon at the bottom.
`Sky.tsx` writes a single CSS variable, `--p` (scroll progress, 0→1), on each
animation frame. Everything else — three cross-fading gradient layers and the
star fade — is pure CSS in `globals.css`. There is no scroll library.

Anything animated is disabled under `prefers-reduced-motion`.

## Still to do

**Blocking launch:**

- [ ] **Art** — everything in `Art.tsx` is a placeholder (balloon, rocket,
      planet, cloud, constellation). Swap the SVG bodies, keep the component
      names and viewBox ratios. Nothing outside that file needs to change.
- [ ] **Tab icon** — `src/app/icon.svg` is a placeholder ampersand.
- [ ] **Dates** — `site.date` says "Fall 2026". Set the real dates, and fill
      in `date.iso` once known.
- [ ] **Venue** — `site.venue` is William & Mary / Williamsburg with the
      building marked TBA.
- [ ] **Tracks** — the four in `content.ts` are drafts written around the
      Imagination theme. Confirm with the team.
- [ ] **Prizes** — categories are plausible, amounts all say "TBA".
- [ ] **Schedule** — a typical hackathon shape, not a confirmed agenda.
- [ ] **Sponsors** — no 2026 sponsors signed, so the tiers render empty
      "Your logo here" slots. Tier counts are in `content.ts`.

**Not yet decided:**

- [ ] **Hosting.** Nobody currently knows how the live site is deployed —
      it is supposedly connected to `andhacks.cs.wm.edu`. This has to be
      worked out before v2 can replace v1. Nothing in this repo configures
      a deploy.
- [ ] Team photos and a "previous hackathons" section — both marked "later".

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
