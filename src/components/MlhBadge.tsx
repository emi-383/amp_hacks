import { site } from "@/data/site";

/**
 * The MLH trust badge. Sponsorship terms require it on the page, pinned to a
 * top corner and visible without scrolling, so this is `fixed` rather than
 * part of the nav's flow — it must survive the page scrolling underneath it.
 *
 * v1 served the same asset at a flat 80px from `MainLayout.astro`. Here it
 * steps up on wider viewports, because v1's nav was centred and this one runs
 * its register button flush to the right edge; `Nav` reserves the matching
 * right padding so the two never overlap. Change one and change the other.
 *
 * Plain <img>, not next/image: the build is a static export with no image
 * optimizer behind it, and an SVG has nothing to optimize anyway.
 */
export default function MlhBadge() {
  return (
    <a
      href={site.links.mlh}
      target="_blank"
      rel="noreferrer"
      aria-label="Major League Hacking 2027 Hackathon Season"
      className="fixed top-0 right-5 z-[60] block w-20 lg:right-8 lg:w-24"
    >
      <img
        src="/mlh-banner.svg"
        alt="Major League Hacking 2027 Hackathon Season"
        width={393}
        height={688}
        className="h-auto w-full"
      />
    </a>
  );
}
