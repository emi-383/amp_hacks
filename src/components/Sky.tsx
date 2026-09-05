"use client";

import { useEffect } from "react";

/**
 * Drives the page-wide background: three fixed gradient layers (space →
 * twilight → dawn) that cross-fade as you scroll, plus two starfields that
 * scroll at different speeds and fade out as the sun comes up.
 *
 * The only JS here writes two CSS custom properties: --p, scroll progress from
 * 0 to 1, and --sy, raw scroll offset in pixels. All of the actual colour and
 * parallax work happens in globals.css, so there is no animation library and
 * no per-frame React render.
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

function field(count: number, minD: number, maxD: number) {
  return Array.from({ length: count }, () => ({
    x: rand() * 100,
    y: rand() * 100,
    d: rand() * (maxD - minD) + minD,
    delay: rand() * 6,
    dur: rand() * 3 + 3,
  }));
}

// Two depths. The far field is smaller, dimmer, and barely moves; the near
// field is larger and travels further, which is what reads as depth.
// Sizes are diameters in px, not viewBox units, so a star is the same size
// whatever the window is doing.
const FAR = field(70, 1.4, 3);
const NEAR = field(34, 2.5, 5);

function Stars({
  stars,
  className,
}: {
  stars: ReturnType<typeof field>;
  className: string;
}) {
  // Plain positioned elements rather than an svg. A single svg stretched over
  // the viewport needs preserveAspectRatio="none" to fill it, which scales x
  // and y by different amounts and turns every circle into an ellipse - stars
  // came out visibly squashed on anything but a square window. Sizing each
  // star in px sidesteps the whole problem.
  return (
    <div className={`stars ${className}`} aria-hidden="true">
      {stars.map((s, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.d}px`,
            height: `${s.d}px`,
            animation: `twinkle ${s.dur}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function Sky() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollable = root.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      const p = scrollable > 0 ? y / scrollable : 0;
      root.style.setProperty("--p", Math.min(1, Math.max(0, p)).toFixed(4));
      root.style.setProperty("--sy", `${y}px`);
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

      <Stars stars={FAR} className="stars-far" />
      <Stars stars={NEAR} className="stars-near" />
    </>
  );
}
