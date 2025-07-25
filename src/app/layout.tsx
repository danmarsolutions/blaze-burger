import type { Metadata } from "next";
import { Freeman, Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";
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

const plutoBold = localFont({
  src: "../fonts/PlutoBold.otf",
  variable: "--font-pluto-bold",
});

const plutoRegular = localFont({
  src: "../fonts/PlutoRegular.otf",
  variable: "--font-pluto-regular",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${freeman.variable} ${instrumentSans.variable} ${plutoBold.variable} ${plutoRegular.variable} font-body`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
