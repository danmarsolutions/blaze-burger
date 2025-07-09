import type { Metadata } from "next";
import { Freeman, Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Blaze Burger",
  description: "Savour the blaze your crave.",
};

const freeman = Freeman({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-freeman",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${freeman.variable} ${instrumentSans.variable} font-sans`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
