import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["700", "800", "900"],
});

export const metadata: Metadata = {
  title: "QuoteForge — Machine Configurator for Manufacturers",
  description:
    "QuoteForge is the digital machine configurator and quotation platform built for Indian machinery manufacturers. Let customers configure machines and receive branded PDF quotes instantly — at exhibitions, on your website, anywhere.",
  keywords: [
    "machine configurator",
    "quotation software",
    "machinery manufacturers India",
    "PDF quote generator",
    "exhibition software",
    "B2B SaaS India",
    "industrial sales software",
  ],
  authors: [{ name: "QuoteForge", url: "https://quoteforge.in" }],
  openGraph: {
    title: "QuoteForge — Machine Configurator for Manufacturers",
    description:
      "Let customers configure machines and receive branded PDF quotes instantly — at exhibitions, on your website, anywhere.",
    url: "https://quoteforge.in",
    siteName: "QuoteForge",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://quoteforge.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuoteForge — Machine Configurator for Manufacturers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuoteForge — Machine Configurator for Manufacturers",
    description:
      "Digital machine configurator and quotation platform for Indian machinery manufacturers.",
    images: ["https://quoteforge.in/og-image.png"],
  },
  metadataBase: new URL("https://quoteforge.in"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
