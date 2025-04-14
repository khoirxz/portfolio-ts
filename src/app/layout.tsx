import type { Metadata } from "next";
// google font
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { globalConfig } from "./config";

// font files can be colocated in the `app`

const imbPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-mono",
});
const imbPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: globalConfig.title,
  description: globalConfig.description,
  keywords: ["programming", "web development", "full stack"],
  authors: [{ name: "Rizqi", url: "https://rizqikhoir.vercel.app/" }],
  creator: "Rizqi Khoirurrohman",
  publisher: "Rizqi Khoirurrohman",
  openGraph: {
    title: "Rizqi Khoirurrohman",
    description: "Portfolio",
    siteName: "Rizqi Khoirurrohman",
    images: [
      {
        url: "https://rizqikhoir.vercel.app/og-image.png",
        width: 800,
        height: 600,
        alt: "Rizqi Khoirurrohman",
      },
    ],
    locale: "en_US",
    type: "website",
    url: "https://rizqikhoir.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${imbPlexMono.variable} ${imbPlexSans.variable} antialiased font-[family-name:var(--font-ibm-plex-sans)] relative bg-[#FFF4E4] dark:bg-[#1A1A1E]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
