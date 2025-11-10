import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Complete Restaurant Setups in Sweden`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Complete restaurant setups, kitchen design, and interiors in collaboration with HELUX Storkök & Inredningar AB. From concept to opening day.",
  keywords: [
    "restaurant setup",
    "commercial kitchen",
    "kitchen design",
    "restaurant equipment",
    "HELUX",
    "Sweden",
    "Norrköping",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    title: `${SITE_CONFIG.name} | Complete Restaurant Setups`,
    description:
      "Complete restaurant setups from concept to opening day. Kitchen design, equipment, and interiors.",
    siteName: SITE_CONFIG.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <SmoothScroll />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

