"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

/**
 * The team address as a click-to-copy button rather than a mailto: link, which
 * is what v1 did. A mailto hands the visitor off to whatever mail client the
 * OS happens to have registered, which on a lab machine is usually nothing.
 *
 * The address stays visible either way, so if the clipboard API is missing
 * (it needs a secure context) the fallback is reading it off the page.
 */
export default function CopyEmail({ className = "" }: { className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  // A click late in the timeout would otherwise leave setState running after
  // the section unmounts.
  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copy() {
    if (!navigator.clipboard) return;

    try {
      await navigator.clipboard.writeText(site.links.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Ignore clipboard failures; the address is on screen to copy by hand.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${site.links.email} to the clipboard`}
      className={`group relative inline-flex cursor-pointer items-center whitespace-nowrap underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${className}`}
    >
      {site.links.email}

      {/* Hint sits below the address so it never covers the heading above it. */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-full mt-1 text-xs font-normal tracking-wide whitespace-nowrap text-gold transition-opacity duration-200 ${
          copied ? "opacity-100" : "opacity-0 group-hover:opacity-70 group-focus-visible:opacity-70"
        }`}
      >
        {copied ? "Copied!" : "Click to copy"}
      </span>

      <span role="status" className="sr-only">
        {copied ? "Email address copied to the clipboard" : ""}
      </span>
    </button>
  );
}
