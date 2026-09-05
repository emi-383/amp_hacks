import type { Metadata, Viewport } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import MlhBadge from "@/components/MlhBadge";

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
  title: `${site.name} | ${site.organization}`,
  description: `${site.blurb} ${site.date.label} in ${site.venue.city}.`,
  openGraph: {
    title: `${site.name} | ${site.organization}`,
    description: `${site.tagline}. ${site.date.label} in ${site.venue.city}.`,
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
      <body className="min-h-full">
        <MlhBadge />
        {children}
      </body>
    </html>
  );
}
