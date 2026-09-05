"use client";

import { useState } from "react";
import { faqs } from "@/data/content";

/**
 * Accordion FAQ. One answer is open at a time: opening a question closes the
 * previous one. The open/close animation is CSS only (a 0fr -> 1fr grid row,
 * see `.faq-panel` in globals.css), which animates to the answer's real height
 * without measuring anything in JS.
 *
 * The list fills the section's width like every other section rather than
 * sitting in a narrow column off to one side, and splits into two columns on
 * large screens. `items-start` keeps a closed question from being stretched to
 * match an open one beside it.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="grid gap-3 lg:grid-cols-2 lg:items-start">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={item.q}
            className={`rounded-blob border backdrop-blur-sm transition-colors duration-300 ${
              isOpen
                ? "border-gold/50 bg-cream/[0.09]"
                : "border-cream/12 bg-cream/[0.06] hover:border-cream/25"
            }`}
          >
            <h3>
              <button
                type="button"
                id={`faq-q-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-a-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-cream focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {item.q}
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-2xl leading-none text-gold transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>

            <div
              id={`faq-a-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              inert={!isOpen}
              className={`faq-panel ${isOpen ? "is-open" : ""}`}
            >
              <div>
                <div className="px-6 pb-6 leading-relaxed text-cream/80">
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
