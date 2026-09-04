"use client";

import { useEffect } from "react";

/**
 * Drives the page-wide background: three fixed gradient layers (space →
 * twilight → dawn) that cross-fade as you scroll, plus a starfield that
 * fades out as the sun comes up.
 *
 * The only JS here is writing a single CSS custom property, --p. All of the
 * actual colour work happens in globals.css, so there is no animation library
 * and no per-frame React render.
 */

// Deterministic PRNG so the server and client generate identical stars.
// Math.random() here would cause a hydration mismatch.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(1112);
const STARS = Array.from({ length: 90 }, () => ({
  cx: rand() * 100,
  cy: rand() * 100,
  r: rand() * 1.1 + 0.35,
  delay: rand() * 6,
  dur: rand() * 3 + 3,
}));

export default function Sky() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = root.scrollHeight - window.innerHeight;
      const p = scrollable > 0 ? window.scrollY / scrollable : 0;
      root.style.setProperty("--p", Math.min(1, Math.max(0, p)).toFixed(4));
    };

    const onScroll = () => {
      // Coalesce bursts of scroll events into one write per frame.
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="sky" aria-hidden="true">
        <div className="sky-layer sky-space" />
        <div className="sky-layer sky-twilight" />
        <div className="sky-layer sky-dawn" />
      </div>

      <svg
        className="stars"
        aria-hidden="true"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
      >
        {STARS.map((s, i) => (
          <circle
            key={i}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill="#fdf7ff"
            style={{
              animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
            }}
          />
        ))}
      </svg>
    </>
  );
}
