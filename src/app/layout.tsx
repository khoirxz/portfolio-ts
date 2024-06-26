import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import { GeistSans } from "geist/font/sans";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rizqi Khoirurrohman",
  description: "Hey its me! Rizqi, i can write code 😊",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta property="og:url" content="https://rizqikhoir.vercel.app/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Rizqi Khoirurrohman" />
          <meta
            property="og:description"
            content="Hey its me! Rizqi, i can write code 😊"
          />
          <meta property="og:image" content="/next.svg" />
          <SpeedInsights />
        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <main className="relative">{children}</main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
