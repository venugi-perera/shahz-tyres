import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shahz tyres - Derby's Premier Auto Experts",
  description:
    "Professional automotive services including MOT testing, car servicing, timing belt replacement, welding, and mechanical repairs in Derby.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-900 text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
