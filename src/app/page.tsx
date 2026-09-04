import Sky from "@/components/Sky";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { Section, Cta, Card } from "@/components/ui";
import { Balloon, Rocket, Planet, Cloud, Constellation } from "@/components/Art";
import { site } from "@/data/site";
import {
  benefits,
  tracks,
  prizes,
  schedule,
  sponsorTiers,
  faqs,
} from "@/data/content";

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
          {/* Decorative art. Simplified on small screens rather than
              cramming every desktop asset onto mobile. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
          >
            <Balloon className="animate-float absolute right-[6%] top-[8%] w-24 opacity-90 sm:w-32 lg:w-40" />
            <Rocket className="animate-float absolute right-[22%] top-[52%] hidden w-14 opacity-80 [animation-delay:1.5s] lg:block" />
            <Planet className="absolute -left-16 top-[62%] hidden w-72 opacity-70 lg:block" />
            <Constellation className="absolute left-[8%] top-[10%] hidden w-40 lg:block" />
            <Cloud className="animate-drift absolute -bottom-2 left-[-5%] w-[70%] max-w-2xl" />
          </div>

          <div className="relative max-w-3xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-gold">
              {site.organization} · {site.date.label}
            </p>

            <h1 className="font-display text-6xl leading-[0.95] text-cream sm:text-7xl lg:text-8xl">
              &amp;Hacks{" "}
              <span className="bg-gradient-to-r from-gold via-peach to-pink bg-clip-text text-transparent">
                XII
              </span>
            </h1>

            <p className="mt-6 font-display text-2xl italic text-haze sm:text-3xl">
              {site.theme}
            </p>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 sm:text-xl">
              {site.tagline} A free, weekend-long hackathon at{" "}
              {site.organization} &mdash; open to every major, and built for
              people who have never been to one.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Cta href={site.links.register}>Register &mdash; it takes a minute</Cta>
              <Cta href={site.links.sponsor} variant="secondary">
                Sponsor us
              </Cta>
            </div>

            <p className="mt-6 text-sm text-haze">
              Free to attend · Free food and merch · No experience needed
            </p>
          </div>
        </section>

        {/* ------------------------------------------------------------- */}
        {/* About + why come                                              */}
        {/* ------------------------------------------------------------- */}
        <Section
          id="about"
          eyebrow="What is it"
          title="A weekend to build the thing you keep imagining."
          intro="&Hacks is the William &amp; Mary student hackathon. You show up Saturday morning with an idea — or no idea at all — and leave Sunday with something you built. Food, workshops, mentors, and prizes are all free."
        >
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
        <Section
          id="tracks"
          eyebrow="Tracks"
          title="Pick a direction, or ignore them entirely."
          intro="Tracks are prompts, not rules. They exist to give you somewhere to start if the blank page is the hardest part."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {tracks.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <Card className="h-full">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-2xl text-cream">{t.name}</h3>
                    {t.sponsored && (
                      <span className="rounded-full bg-gold/15 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-gold">
                        Sponsored
                      </span>
                    )}
                  </div>
                  <p className="mt-3 leading-relaxed text-cream/80">{t.body}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------------- */}
        {/* Prizes                                                        */}
        {/* ------------------------------------------------------------- */}
        <Section
          id="prizes"
          eyebrow="Prizes"
          title="Something to aim at."
          intro="Categories are set. Exact prizes are announced closer to the event."
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {prizes.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <Card className="flex h-full items-start gap-4">
                  <span className="font-display text-3xl text-gold">{p.place}</span>
                  <span>
                    <span className="block font-bold text-cream">{p.title}</span>
                    <span className="mt-1 block text-sm text-haze">{p.detail}</span>
                  </span>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------------- */}
        {/* Schedule, workshops, venue                                    */}
        {/* ------------------------------------------------------------- */}
        <Section
          id="schedule"
          eyebrow="Schedule"
          title="How the weekend runs."
          intro="A draft shape of the weekend. Times shift a little every year — the final schedule goes out before the event."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {schedule.map((day) => (
              <Reveal key={day.day}>
                <Card className="h-full">
                  <h3 className="font-display text-2xl text-gold">{day.day}</h3>
                  <ul className="mt-5 space-y-4">
                    {day.items.map((item) => (
                      <li key={item.title} className="flex gap-4">
                        <span className="w-20 shrink-0 font-mono text-xs text-haze">
                          {item.time}
                        </span>
                        <span>
                          <span className="block font-semibold text-cream">
                            {item.title}
                          </span>
                          {"note" in item && item.note ? (
                            <span className="mt-0.5 block text-sm text-haze">
                              {item.note}
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

          <Reveal className="mt-5">
            <Card className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl text-cream">Where</h3>
                <p className="mt-2 text-lg text-cream/85">
                  {site.venue.name} · {site.venue.detail}
                </p>
                <p className="mt-1 text-sm text-haze">{site.venue.note}</p>
              </div>
              <Planet className="hidden w-40 opacity-70 sm:block" />
            </Card>
          </Reveal>
        </Section>

        {/* ------------------------------------------------------------- */}
        {/* Sponsors                                                      */}
        {/* ------------------------------------------------------------- */}
        <Section
          id="sponsors"
          eyebrow="Sponsors"
          title="Built with our sponsors."
          intro="Sponsors fund the food, the prizes, and the space — and send engineers who actually talk to students. Coffee chats put your team in front of hackers without a career-fair line."
        >
          <div className="space-y-8">
            {sponsorTiers.map((tier) => (
              <Reveal key={tier.tier}>
                <div>
                  <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-gold">
                    {tier.tier}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    {/* PLACEHOLDER — empty slots until sponsors are signed. */}
                    {Array.from({ length: tier.slots }).map((_, i) => (
                      <div
                        key={i}
                        className="flex h-24 items-center justify-center rounded-blob border border-dashed border-cream/20 bg-cream/[0.03] text-xs text-haze"
                      >
                        Your logo here
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10">
            <Card className="flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-md">
                <h3 className="font-display text-2xl text-cream">
                  Want to sponsor &amp;Hacks?
                </h3>
                <p className="mt-2 text-cream/80">
                  We will send you the prospectus with tiers, deadlines, and
                  what each level includes.
                </p>
              </div>
              <Cta href={site.links.sponsor}>Sponsor us</Cta>
            </Card>
          </Reveal>
        </Section>

        {/* ------------------------------------------------------------- */}
        {/* FAQ                                                           */}
        {/* ------------------------------------------------------------- */}
        <Section id="faq" eyebrow="FAQ" title="Questions people actually ask.">
          <div className="max-w-3xl space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-blob border border-cream/12 bg-cream/[0.06] px-6 open:border-gold/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-semibold text-cream marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-2xl text-gold transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="pb-6 leading-relaxed text-cream/80">
                  <p>{item.a}</p>
                  {"link" in item && item.link ? (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block font-semibold text-gold underline underline-offset-4 hover:text-peach"
                    >
                      {item.link.label}
                    </a>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </Section>

        {/* ------------------------------------------------------------- */}
        {/* Register + contact                                            */}
        {/* ------------------------------------------------------------- */}
        <Section
          id="contact"
          eyebrow="Come build with us"
          title="Registration is one click."
          intro="No essay, no portfolio, no experience. Put your name down and show up."
        >
          <div className="flex flex-wrap gap-4">
            <Cta href={site.links.register}>Register for &amp;Hacks XII</Cta>
            <Cta href={site.links.discord} variant="secondary">
              Join the Discord
            </Cta>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Card>
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold">
                Email
              </h3>
              <a
                href={`mailto:${site.links.email}`}
                className="mt-2 block break-words font-semibold text-cream hover:text-gold"
              >
                {site.links.email}
              </a>
            </Card>
            <Card>
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold">
                Discord
              </h3>
              <a
                href={site.links.discord}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block font-semibold text-cream hover:text-gold"
              >
                Join the server
              </a>
            </Card>
            <Card>
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold">
                Instagram
              </h3>
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
      </main>

      {/* --------------------------------------------------------------- */}
      {/* Footer                                                          */}
      {/* --------------------------------------------------------------- */}
      <footer className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-12 sm:px-8">
          <div>
            <p className="font-display text-xl text-cream">&amp;Hacks XII</p>
            <p className="mt-1 text-sm text-haze">
              {site.organization} · {site.date.label}
            </p>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-haze">
            All hackers, organizers, volunteers, and sponsors follow the{" "}
            <a
              href={site.links.mlhCodeOfConduct}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-gold underline underline-offset-4 hover:text-peach"
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
