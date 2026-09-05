/* ============================================================================
   PLACEHOLDER ART
   ----------------------------------------------------------------------------
   Stand-in illustrations so the layout can be built around real shapes before
   the artwork arrives (expected end of week 1).

   To swap one out: replace the SVG body, keep the component name, the
   `className` pass-through, and the viewBox aspect ratio. Nothing outside this
   file needs to change. Every piece is decorative and hidden from screen
   readers by its container.
   ========================================================================== */

type ArtProps = { className?: string };

export function Balloon({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 120 170" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="balloon-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fcd34d" />
          <stop offset="100%" stopColor="#fb923c" />
        </linearGradient>
        <linearGradient id="balloon-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
      </defs>

      {/* envelope */}
      <path d="M60 8c26 0 46 21 46 48 0 24-18 45-30 62H44C32 101 14 80 14 56 14 29 34 8 60 8Z" fill="url(#balloon-a)" />
      <path d="M60 8c9 0 16 21 16 48s-7 45-16 62c-9-17-16-35-16-62S51 8 60 8Z" fill="url(#balloon-b)" opacity="0.85" />
      <path d="M60 8c26 0 46 21 46 48 0 24-18 45-30 62H44C32 101 14 80 14 56 14 29 34 8 60 8Z" fill="none" stroke="#fdf7ff" strokeOpacity="0.35" strokeWidth="2" />

      {/* ropes */}
      <path d="M46 118l6 20M74 118l-6 20" stroke="#fdf7ff" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />

      {/* basket */}
      <rect x="48" y="136" width="24" height="18" rx="6" fill="#7c3aed" />
      <rect x="48" y="136" width="24" height="18" rx="6" fill="none" stroke="#fdf7ff" strokeOpacity="0.35" strokeWidth="2" />
    </svg>
  );
}

export function Rocket({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 80 140" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="rocket-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fdf7ff" />
          <stop offset="100%" stopColor="#cbb6ef" />
        </linearGradient>
      </defs>

      {/* flame */}
      <path d="M40 104c7 8 11 15 11 21a11 11 0 0 1-22 0c0-6 4-13 11-21Z" fill="#fb923c" className="animate-float" />
      {/* fins */}
      <path d="M26 76c-9 6-13 15-13 26l13-6V76ZM54 76c9 6 13 15 13 26l-13-6V76Z" fill="#f472b6" />
      {/* body */}
      <path d="M40 8c13 12 20 30 20 50v38H20V58c0-20 7-38 20-50Z" fill="url(#rocket-a)" />
      {/* window */}
      <circle cx="40" cy="54" r="10" fill="#4c1d95" />
      <circle cx="40" cy="54" r="10" fill="none" stroke="#fcd34d" strokeWidth="3" />
      <circle cx="36" cy="50" r="3" fill="#fdf7ff" opacity="0.7" />
    </svg>
  );
}

export function Planet({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 160 120" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="planet-a" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#6d28d9" />
        </radialGradient>
      </defs>

      <circle cx="80" cy="60" r="38" fill="url(#planet-a)" />
      <circle cx="66" cy="48" r="7" fill="#4c1d95" opacity="0.5" />
      <circle cx="92" cy="70" r="5" fill="#4c1d95" opacity="0.4" />
      <circle cx="78" cy="82" r="3.5" fill="#4c1d95" opacity="0.35" />

      {/* ring */}
      <ellipse
        cx="80"
        cy="62"
        rx="72"
        ry="17"
        fill="none"
        stroke="#fcd34d"
        strokeWidth="4"
        strokeOpacity="0.75"
        transform="rotate(-14 80 62)"
      />
    </svg>
  );
}

export function Cloud({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 200 80" className={className} aria-hidden="true">
      <path
        d="M46 66c-17 0-30-12-30-26S29 14 46 14c7 0 13 2 18 6 7-11 20-18 34-18 21 0 38 15 41 34 12 2 21 12 21 23 0 4-1 5-2 7H46Z"
        fill="#fdf7ff"
        fillOpacity="0.16"
      />
    </svg>
  );
}

/** A moon-and-constellation cluster for quiet corners of the page. */
export function Constellation({ className = "" }: ArtProps) {
  return (
    <svg viewBox="0 0 140 100" className={className} aria-hidden="true">
      <path
        d="M18 74 46 52l24 14 22-34 28 12"
        fill="none"
        stroke="#fcd34d"
        strokeOpacity="0.45"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {[
        [18, 74],
        [46, 52],
        [70, 66],
        [92, 32],
        [120, 44],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i === 3 ? 4 : 2.5} fill="#fcd34d" />
      ))}
    </svg>
  );
}

/**
 * The horizon the page lands on. The sky reaches sunrise yellow at the bottom
 * of the page, so the last section and the footer sit on this instead, which
 * keeps their text readable and puts the sun behind a hill where it belongs.
 * Stretched with preserveAspectRatio="none", so give it a height, not a width.
 */
export function Ground({ className = "" }: ArtProps) {
  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {/* far hill, lighter so the two read as separate ridges */}
      <path
        d="M0 122C196 58 337 141 561 111 785 81 903 20 1122 61c158 30 240 12 318 25v114H0Z"
        fill="#2a1160"
      />
      {/* near hill, same colour as the ground the footer sits on */}
      <path
        d="M0 160C158 121 301 178 521 159 761 138 979 96 1181 133c122 22 199 14 259 8v59H0Z"
        fill="#150830"
      />
      {/* sunrise catching the near ridge */}
      <path
        d="M0 160C158 121 301 178 521 159 761 138 979 96 1181 133c122 22 199 14 259 8"
        fill="none"
        stroke="#fcd34d"
        strokeOpacity="0.4"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
