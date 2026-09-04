import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

// Fraunces for display (soft, whimsical serif), Nunito for body (rounded).
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.organization}`,
  description: `${site.name} is a free, weekend-long hackathon at ${site.organization}. ${site.tagline} No experience needed.`,
  openGraph: {
    title: `${site.name} — ${site.organization}`,
    description: `A free, weekend-long hackathon at ${site.organization}. ${site.date.label}.`,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#120726",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
