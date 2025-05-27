import type { Metadata } from "next";
import { Geist, Shrikhand } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const shrikhand = Shrikhand({
  variable: "--font-shrikhand",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "F1 Pulse - ISR",
  description: "A test website for ISR rendering technique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${shrikhand.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
