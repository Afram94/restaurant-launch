import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SmoothScroll } from "@/components/smooth-scroll";
import { PageTransition } from "@/components/page-transition";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `Nordic Kitchen Solutions - Complete Restaurant Launch Partner`,
    template: `%s | Nordic Kitchen Solutions`,
  },
  description:
    "From kitchen equipment to your website — complete restaurant launch solutions across Sweden. Physical setup + digital presence in one package. Based in Norrköping.",
  keywords: [
    "restaurant launch",
    "restaurant setup",
    "commercial kitchen",
    "restaurant website",
    "online booking system",
    "HELUX",
    "Sweden",
    "Norrköping",
    "digital presence",
    "complete package",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    title: `Nordic Kitchen Solutions - Complete Restaurant Launch Partner`,
    description:
      "From kitchen equipment to your website — complete restaurant launch solutions. Physical setup + digital presence in one package.",
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
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}

