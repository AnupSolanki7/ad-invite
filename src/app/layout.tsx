import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { wedding } from "@/data/wedding";
import "./globals.css";

// Fonts are self-hosted from ./fonts (downloaded from Google Fonts) so the
// build never depends on reaching fonts.googleapis.com.
const cormorant = localFont({
  src: [
    { path: "./fonts/CormorantGaramond-Variable.woff2", weight: "300 700", style: "normal" },
    { path: "./fonts/CormorantGaramond-Italic-Variable.woff2", weight: "300 700", style: "italic" },
  ],
  variable: "--ff-cormorant",
  display: "swap",
});
const cinzel = localFont({
  src: "./fonts/Cinzel-Variable.woff2",
  weight: "400 900",
  variable: "--ff-cinzel",
  display: "swap",
});
const script = localFont({ src: "./fonts/GreatVibes-Regular.woff2", weight: "400", variable: "--ff-script", display: "swap" });
const monogram = localFont({ src: "./fonts/PinyonScript-Regular.woff2", weight: "400", variable: "--ff-monogram", display: "swap" });
const lora = localFont({
  src: [
    { path: "./fonts/Lora-Variable.woff2", weight: "400 700", style: "normal" },
    { path: "./fonts/Lora-Italic-Variable.woff2", weight: "400 700", style: "italic" },
  ],
  variable: "--ff-lora",
  display: "swap",
});
const gujarati = localFont({
  src: [
    { path: "./fonts/NotoSerifGujarati-Regular.ttf", weight: "400" },
    { path: "./fonts/NotoSerifGujarati-Medium.ttf", weight: "500" },
  ],
  variable: "--ff-gujarati",
  display: "swap",
  preload: false,
});
const devanagari = localFont({
  src: "./fonts/TiroDevanagariMarathi-Regular.ttf",
  weight: "400",
  variable: "--ff-devanagari",
  display: "swap",
  preload: false,
});

const { bride, groom } = wedding.couple;
const title = `${bride} & ${groom} · Wedding Invitation`;
const description = `With the blessings of our families, you are cordially invited to celebrate the wedding of ${bride} & ${groom}. Tap to open your invitation.`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#650D19",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${cormorant.variable} ${cinzel.variable} ${script.variable} ${monogram.variable} ${lora.variable} ${gujarati.variable} ${devanagari.variable}`}
    >
      <body>
        <noscript>
          <style>{`[data-intro]{opacity:1!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
