import type { Metadata } from "next";
// google font
import { Bricolage_Grotesque, UnifrakturMaguntia } from "next/font/google";

import "./globals.css";
import { globalConfig } from "./config";

// font files can be colocated in the `app`
const bricolageGrotosque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage-grotesque",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const unifrakturMaguntia = UnifrakturMaguntia({
  subsets: ["latin"],
  variable: "--font-unifraktur-maguntia",
  display: "swap",
  weight: ["400"],
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
        className={`${bricolageGrotosque.variable} ${unifrakturMaguntia.variable} antialiased font-[family-name:var(--font-bricolage-grotesque)] relative bg-[#f5f5f5] text-black dark:text-black`}>
        {children}
      </body>
    </html>
  );
}
