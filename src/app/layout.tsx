import type { ReactNode } from "react";
import type { Metadata } from "next";
import "./styles/globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Melisha Judi S | Full Stack Web Developer",
  description: "Modern portfolio of Melisha Judi S, a Full Stack Web Developer with 2 years of experience.",
  icons: {
    icon: "/head/logo.png",
  },
  openGraph: {
    images: ["/head/logo.png"],
  },
};

import MouseSpotlight from "@/components/portfolio/MouseSpotlight";

export default function MainpageLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <body className="antialiased">
        <MouseSpotlight />
        {children}
      </body>
    </html>
  );
}
