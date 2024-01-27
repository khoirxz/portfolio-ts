import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Rizqi Khoirurrohman",
  description: "Hey its me! Rizqi, i can write code 😊",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
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
        <body className={GeistSans.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
