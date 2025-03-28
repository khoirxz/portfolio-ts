import type { Metadata } from "next";
// google font
import { Fira_Code } from "next/font/google";
// next/font/local
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { globalConfig } from "./config";

// font files can be colocated in the `app`

const GeneralSans = localFont({
  src: "./fonts/GeneralSans-Variable.woff2",
  display: "swap",
  variable: "--font-general-sans",
});

// google font
const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
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
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeneralSans.variable} ${firaCode.variable} antialiased font-[family-name:var(--font-general-sans)] relative`}>
        <Navbar />
        {children}
        {modal}
        <Footer />
      </body>
    </html>
  );
}
