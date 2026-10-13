import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drive X Auto — Complete Car Care. All in One Place.",
  description:
    "Explore 14 confirmed automotive service categories from routine servicing and AC repair to tyres, diagnostics, detailing and bodywork at Drive X Auto.",
  keywords: [
    "automotive service",
    "car repair workshop",
    "periodic maintenance",
    "wheel alignment",
    "brake service",
    "diagnostics",
    "car detailing",
    "Drive X Auto",
  ],
  authors: [{ name: "Drive X Auto" }],
  openGraph: {
    title: "Drive X Auto — Complete Car Care. All in One Place.",
    description:
      "Explore 14 confirmed automotive service categories from routine servicing and AC repair to tyres, diagnostics, detailing and bodywork.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full dark`}>
      <body className="min-h-full flex flex-col bg-[#08090C] text-slate-100 antialiased selection:bg-yellow-400 selection:text-black">
        {children}
      </body>
    </html>
  );
}
