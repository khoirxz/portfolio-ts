import type { Metadata } from "next";
// google font
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";
import { globalConfig } from "./config";

// font files can be colocated in the `app`
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
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
        className={`${plusJakartaSans.variable} antialiased font-[family-name:var(--font-plus-jakarta-sans)] relative bg-[#f5f5f5] text-black dark:text-black`}>
        {children}
      </body>
    </html>
  );
}
