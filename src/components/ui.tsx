import type { ReactNode } from "react";

/** Page section with a consistent heading, anchor target, and rhythm. */
export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28 ${className}`}
    >
      <div className="mb-12 max-w-2xl">
        {eyebrow && (
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </p>
        )}
        <h2
          id={`${id}-heading`}
          className="font-display text-4xl leading-tight text-cream sm:text-5xl"
        >
          {title}
        </h2>
        {intro && <p className="mt-5 text-lg leading-relaxed text-haze">{intro}</p>}
      </div>
      {children}
    </section>
  );
}

/** Primary/secondary call to action. Renders an anchor — every CTA is a link. */
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
      : "border-2 border-haze/60 text-cream hover:border-gold hover:text-gold";

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

/** Soft rounded panel — the "avoid harsh edges" container used across sections. */
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
