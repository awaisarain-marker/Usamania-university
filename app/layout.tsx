import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import SiteLayout from "@/components/layout/SiteLayout";
import SvgSprite from "@/components/icons/Sprite";
import BodyClassUpdater from "@/components/layout/BodyClassUpdater";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "UIT University",
  description: "UIT University Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} ${playfair.variable} antialiased flex flex-col min-h-screen`}
        suppressHydrationWarning
      >
        <BodyClassUpdater />
        <SvgSprite />
        <SiteLayout>
          {children}
        </SiteLayout>
      </body>
    </html>
  );
}

