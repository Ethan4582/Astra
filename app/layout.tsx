import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Revealer from "./components/Revealer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astra®",
  description: "A sleek and customizable portfolio template designed for developers, designers, and creators who want to stand out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased`}
      >
        <Revealer />
        <SmoothScroll />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
