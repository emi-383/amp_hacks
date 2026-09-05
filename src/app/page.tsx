import Sky from "@/components/Sky";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import CopyEmail from "@/components/CopyEmail";
import { Section, Cta, Card, Tba } from "@/components/ui";
import {
  Balloon,
  Rocket,
  Planet,
  Cloud,
  Constellation,
  Ground,
} from "@/components/Art";
import { site } from "@/data/site";
import type { Sponsor } from "@/data/content";
import { benefits, tracks, prizes, schedule, sponsors } from "@/data/content";

/**
 * Time label for one schedule row. The organisers' running order has genuine
 * gaps in it - a workshop block with no time on it, a Friday dinner with only
 * a finish time - so this says what is actually known rather than inventing
 * the missing half.
 */
function timeLabel(item: { start?: string; end?: string }) {
  const { start, end } = item;
  if (!start && !end) return "TBA";
  if (start && !end) return start;
  if (!start && end) return `until ${end}`;
  // Both ends share a meridiem more often than not; drop the first one when
  // they match so "1:00 - 2:30 PM" fits the column.
  const m = start!.slice(-2);
  return end!.endsWith(m)
    ? `${start!.slice(0, -3)} - ${end}`
    : `${start} - ${end}`;
}

const tierOrder = ["Gold", "Silver", "Bronze", "Partner"] as const;

/**
 * Tier decides the tile, and the tile is the only thing that says what tier a
 * sponsor is - no "GOLD" / "SILVER" headings. Gold takes half a row and is
 * three units tall; Partner is a short strip a quarter of the width. Spans
 * are on a 2 / 6 / 12 column grid so the same four shapes survive down to
 * mobile.
 */
const tierStyle = {
  Gold: {
    span: "col-span-2 row-span-3 sm:col-span-3 lg:col-span-6",
    text: "text-3xl",
    pad: "p-6",
  },
  Silver: {
    span: "col-span-2 row-span-2 sm:col-span-3 lg:col-span-4",
    text: "text-2xl",
    pad: "p-5",
  },
  Bronze: {
    span: "col-span-1 row-span-2 sm:col-span-2 lg:col-span-3",
    text: "text-xl",
    pad: "p-4",
  },
  Partner: {
    span: "col-span-1 row-span-1 sm:col-span-2 lg:col-span-3",
    text: "text-base",
    pad: "p-3",
  },
} as const;

/** Long department names would overflow the tile at their tier's size. */
const smallerText: Record<string, string> = {
  "text-3xl": "text-xl",
  "text-2xl": "text-base",
  "text-xl": "text-sm",
  "text-base": "text-sm",
};

/**
 * One sponsor tile. Solid rather than translucent: this section sits over the
 * sunrise end of the sky, and logo artwork needs a flat backdrop to read at
 * all. Which backdrop depends on the file - see `logoOn` in content.ts.
 */
function SponsorTile({ sponsor }: { sponsor: Sponsor }) {
  const { span, text, pad } = tierStyle[sponsor.tier];
  const dark = sponsor.logoOn === "dark";

  const className = `flex h-full w-full items-center justify-center rounded-blob border ${pad} transition-colors duration-300 ${
    dark
      ? "border-cream/15 bg-ground hover:border-gold/50"
      : "border-deep/10 bg-cream hover:border-gold"
  }`;

  const inner = sponsor.logo ? (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={sponsor.logo}
      alt={sponsor.name}
      className="max-h-full w-auto max-w-full object-contain"
      loading="lazy"
    />
  ) : (
    <span
      className={`text-balance text-center font-display leading-tight ${
        sponsor.name.length > 22 ? smallerText[text] : text
      } ${dark ? "text-cream" : "text-deep"}`}
    >
      {sponsor.name}
    </span>
  );

  return (
    <div className={span}>
      {sponsor.href ? (
        <a
          href={sponsor.href}
          target="_blank"
          rel="noreferrer"
          className={className}
        >
          {inner}
        </a>
      ) : (
        <div className={className}>{inner}</div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Sky />
      <Nav />

      <main id="top">
        {/* ------------------------------------------------------------- */}
        {/* Hero                                                          */}
        {/* ------------------------------------------------------------- */}
        <section className="relative mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-center px-5 py-20 sm:px-8">
          {/* Decorative art, in two layers. Simplified on small screens rather
              than cramming every desktop asset onto mobile. The two pieces with
              no keyframe animation of their own also parallax against the page;
              see .parallax-* in globals.css for why the others do not.

              Both layers clip, which is what stops a parallaxing piece sliding
              out of the hero and down over the About section. They differ in
              how wide the clip is. */}

          {/* Edge pieces. The planet and the cloud are drawn to run off the
              left of the screen, so their clip has to be the screen: pinned to
              the section's own width they get sliced down the middle of the sky
              on any viewport wider than the 72rem content column. w-screen is
              safe here because body sets overflow-x: hidden. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 w-screen -translate-x-1/2 overflow-hidden"
          >
            <Planet className="parallax-near absolute -left-16 top-[62%] hidden w-72 opacity-70 lg:block" />
            <Cloud className="animate-drift absolute -bottom-2 left-[-5%] w-[70%] max-w-2xl" />
          </div>

          {/* Pieces that are composed against the headline rather than the
              screen, so they stay tied to the content column at any width. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <Balloon className="animate-float absolute right-[6%] top-[8%] w-24 opacity-90 sm:w-32 lg:w-40" />
            <Rocket className="animate-float absolute right-[22%] top-[52%] hidden w-14 opacity-80 [animation-delay:1.5s] lg:block" />
            <Constellation className="parallax-far absolute left-[8%] top-[10%] hidden w-40 lg:block" />
          </div>

          <div className="relative max-w-3xl">
            <h1 className="font-display text-6xl leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
              &amp;hacks{" "}
              <span className="bg-gradient-to-r from-gold via-peach to-pink bg-clip-text text-transparent">
                XII
              </span>
            </h1>

            <p className="mt-5 font-display text-3xl italic text-haze sm:text-4xl">
              {site.tagline}
            </p>

            <p className="mt-6 text-lg text-cream/80 sm:text-xl">
              {site.date.label} &middot; {site.venue.city}
            </p>

            <p className="mt-3 max-w-xl text-lg leading-relaxed text-cream/80">
              {site.blurb}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Cta href={site.links.register}>Register</Cta>
              <Cta href={site.links.sponsor} variant="secondary">
                Sponsor us
              </Cta>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* About                                                         */}
        {/* ------------------------------------------------------------- */}
        <Section id="about" title="About &hacks">
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <Card className="h-full">
                  <h3 className="font-display text-2xl text-gold">{b.title}</h3>
                  <p className="mt-3 leading-relaxed text-cream/80">{b.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------------- */}
        {/* Tracks                                                        */}
        {/* ------------------------------------------------------------- */}
        <Section id="tracks" title="Tracks">
          {tracks.length === 0 ? (
            <Tba>
              Tracks are extra categories with their own prizes. You pick one
              when you submit, or skip them and build whatever you like. This
              year&apos;s are still coming together, sponsor track included.
            </Tba>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {tracks.map((t, i) => (
                <Reveal key={t.name} delay={i * 80}>
                  <Card className="h-full">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-2xl text-cream">
                        {t.name}
                      </h3>
                      {t.sponsored && (
                        <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-semibold text-gold">
                          Sponsored
                        </span>
                      )}
                    </div>
                    <p className="mt-3 leading-relaxed text-cream/80">
                      {t.body}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          )}
        </Section>

        {/* ------------------------------------------------------------- */}
        {/* Prizes                                                        */}
        {/* ------------------------------------------------------------- */}
        <Section id="prizes" title="Prizes">
          {prizes.length === 0 ? (
            <Tba>
              We&apos;re still working out what you can win this year. There
              will be something for first-time hackers, as always.
            </Tba>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {prizes.map((p, i) => (
                <Reveal key={p.title} delay={i * 60}>
                  <Card className="h-full">
                    <h3 className="font-display text-2xl text-gold">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-cream/80">{p.detail}</p>
                  </Card>
                </Reveal>
              ))}
            </div>
          )}
        </Section>

        {/* ------------------------------------------------------------- */}
        {/* Schedule and venue                                            */}
        {/* ------------------------------------------------------------- */}
        <Section id="schedule" title="Schedule">
          {schedule.length === 0 ? (
            <Tba>
              The weekend isn&apos;t mapped out yet. It goes out before the
              event, and you get a copy again at check-in.
            </Tba>
          ) : (
            <div className="grid gap-5 md:grid-cols-3">
              {schedule.map((day) => (
                <Reveal key={day.day}>
                  <Card className="h-full">
                    <h3 className="font-display text-2xl text-gold">
                      {day.day}
                    </h3>
                    <ul className="mt-5 space-y-4">
                      {day.items.map((item) => (
                        <li key={item.title} className="flex gap-4">
                          <span className="w-28 shrink-0 text-sm tabular-nums text-haze">
                            {timeLabel(item)}
                          </span>
                          <span>
                            <span className="block font-semibold text-cream">
                              {item.title}
                            </span>
                            {item.location ? (
                              <span className="mt-0.5 block text-sm text-cream/70">
                                {item.location}
                              </span>
                            ) : null}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              ))}
            </div>
          )}

          <Reveal className="mt-5">
            {site.venue.confirmed ? (
              <Card className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl text-cream">Where</h3>
                  <p className="mt-2 text-lg text-cream/85">{site.venue.name}</p>
                  {site.venue.address ? (
                    site.venue.map ? (
                      <a
                        href={site.venue.map}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 block text-cream/80 underline underline-offset-4 hover:text-gold"
                      >
                        {site.venue.address}
                      </a>
                    ) : (
                      <p className="mt-1 text-cream/80">{site.venue.address}</p>
                    )
                  ) : (
                    <p className="mt-1 text-cream/80">
                      {site.organization} campus, {site.venue.city}
                    </p>
                  )}
                </div>
                <Planet className="hidden w-40 opacity-70 sm:block" />
              </Card>
            ) : (
              <Tba title="Venue to be announced">
                We&apos;re on the {site.organization} campus in{" "}
                {site.venue.city}. The building and room go out with the
                schedule.
              </Tba>
            )}
          </Reveal>
        </Section>

        {/* ------------------------------------------------------------- */}
        {/* Sponsors                                                      */}
        {/* ------------------------------------------------------------- */}
        <Section id="sponsors" title="Thank you to our sponsors!">
          {sponsors.length === 0 ? (
            <Tba title="Sponsors to be announced">
              We&apos;re signing sponsors for XII right now. Logos go up here as
              they&apos;re confirmed.
            </Tba>
          ) : (
            <div className="grid auto-rows-[4.5rem] grid-flow-row-dense grid-cols-2 gap-4 sm:grid-cols-6 lg:grid-cols-12">
              {tierOrder.flatMap((tier) =>
                sponsors
                  .filter((s) => s.tier === tier)
                  .map((s) => <SponsorTile key={s.name} sponsor={s} />),
              )}
            </div>
          )}

          <Reveal className="mt-10">
            <Card className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <h3 className="font-display text-2xl text-cream">
                  Sponsor &amp;hacks XII
                </h3>
                <p className="mt-2 leading-relaxed text-cream/80">
                  Fill out the form, or email{" "}
                  <CopyEmail className="font-semibold text-gold hover:text-peach" />{" "}
                  and we&apos;ll send over the prospectus.
                </p>
              </div>
              <Cta href={site.links.sponsor}>Sponsor us</Cta>
            </Card>
          </Reveal>
        </Section>

        {/* ------------------------------------------------------------- */}
        {/* FAQ                                                           */}
        {/* ------------------------------------------------------------- */}
        <Section id="faq" title="FAQ">
          <Faq />
        </Section>

        {/* ------------------------------------------------------------- */}
        {/* Ground. The sky is sunrise yellow this far down the page, so   */}
        {/* everything below the hills sits on a dark surface instead and  */}
        {/* stays readable.                                                */}
        {/* ------------------------------------------------------------- */}
        <div className="relative mt-10">
          <Ground className="block h-24 w-full sm:h-36" />

          <div className="bg-ground">
            <Section id="contact" title="Contact us">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <h3 className="font-display text-xl text-gold">Email</h3>
                  <CopyEmail className="mt-2 font-semibold text-cream hover:text-gold" />
                </Card>
                <Card>
                  <h3 className="font-display text-xl text-gold">Discord</h3>
                  <a
                    href={site.links.discord}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block font-semibold text-cream hover:text-gold"
                  >
                    Join the server
                  </a>
                </Card>
                <Card className="sm:col-span-2 lg:col-span-1">
                  <h3 className="font-display text-xl text-gold">Instagram</h3>
                  <a
                    href={site.links.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block font-semibold text-cream hover:text-gold"
                  >
                    @andhackswm
                  </a>
                </Card>
              </div>
            </Section>
          </div>
        </div>
      </main>

      {/* --------------------------------------------------------------- */}
      {/* Footer, on the same dark ground as the section above it.        */}
      {/* --------------------------------------------------------------- */}
      <footer className="bg-ground">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 border-t border-cream/10 px-5 py-12 sm:px-8">
          <div>
            <p className="font-display text-xl text-cream">&amp;hacks XII</p>
            <p className="mt-1 text-sm text-cream/70">
              {site.organization} &middot; {site.date.label}
            </p>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-cream/70">
            Hackers, organizers, volunteers, and sponsors all follow the{" "}
            <a
              href={site.links.mlhCodeOfConduct}
              target="_blank"
              rel="noreferrer"
              className="font-semibold whitespace-nowrap text-gold underline underline-offset-4 hover:text-peach"
            >
              MLH Code of Conduct
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
}
