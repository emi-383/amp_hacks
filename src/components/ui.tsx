import type { ReactNode } from "react";

/**
 * Page section with a consistent heading, anchor target, and rhythm.
 *
 * Heading only, no standing subtitle: a line under "Sponsors" explaining what
 * a sponsor is only pads the page out. Anything a section genuinely needs to
 * say goes in its own content.
 */
export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}
    >
      <h2
        id={`${id}-heading`}
        className="mb-12 max-w-2xl font-display text-4xl leading-tight text-cream sm:text-5xl"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

/** Primary/secondary call to action. Renders an anchor - every CTA is a link. */
export function Cta({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-bold transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-gold via-peach to-pink text-[#2b0f4a] shadow-lg shadow-pink/25 hover:shadow-xl hover:shadow-pink/35"
      : "border-2 border-cream/45 text-cream hover:border-gold hover:text-gold";

  const external = href.startsWith("http");

  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/** Soft rounded panel - the "avoid harsh edges" container used across sections. */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-blob border border-cream/12 bg-cream/[0.06] p-7 backdrop-blur-sm transition-colors duration-300 hover:border-gold/40 ${className}`}
    >
      {children}
    </div>
  );
}

/**
 * Stand-in for something that is not announced yet. Deliberately looks
 * unfinished so nobody mistakes it for real information, and so it is obvious
 * what is still outstanding. Drive it from an empty list in `content.ts`.
 */
export function Tba({
  title = "To be announced",
  children,
}: {
  title?: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-blob border border-dashed border-gold/45 bg-gold/[0.07] p-7">
      <p className="font-display text-2xl text-gold">{title}</p>
      {children && (
        <p className="mt-2 max-w-xl leading-relaxed text-cream/75">{children}</p>
      )}
    </div>
  );
}
