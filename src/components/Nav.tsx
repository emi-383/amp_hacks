"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

/**
 * Sticky navigation. Client-side only for the mobile menu toggle and the
 * scrolled-state backdrop; the links themselves are plain anchors.
 */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-cream/10 bg-void/80 backdrop-blur-md" : ""
      }`}
    >
      <nav
        aria-label="Main"
        // pr-* clears the fixed MlhBadge (right-5 w-20, lg:right-8 w-24);
        // if the badge moves or resizes, these have to move with it.
        className="flex w-full items-center gap-4 px-5 py-4 pr-28 sm:px-8 sm:pr-28 lg:px-12 lg:pr-36"
      >
        <a
          href="#top"
          className="font-display text-xl font-semibold text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          &amp;hacks <span className="text-gold">XII</span>
        </a>

        <ul className="ml-auto hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-semibold text-haze transition-colors hover:text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={site.links.register}
          target="_blank"
          rel="noreferrer"
          className="ml-auto rounded-full bg-gradient-to-r from-gold to-peach px-5 py-2.5 text-sm font-bold text-[#2b0f4a] transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold md:ml-0"
        >
          Register
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="rounded-full border border-cream/25 p-2 text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
          </svg>
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="border-t border-cream/10 bg-void/95 px-5 pb-5 backdrop-blur-md sm:px-8 md:hidden"
        >
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-cream/5 py-3.5 font-semibold text-haze hover:text-cream"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
