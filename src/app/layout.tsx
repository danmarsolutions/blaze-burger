import type { Metadata } from "next";
import { Freeman, Instrument_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

const description =
  "Savor Blaze Burger’s flame-grilled, premium halal burgers just steps from Union Station, the CN Tower & Harbourfront. The ultimate Toronto burger experience!";
export const metadata: Metadata = {
  title: {
    template: "%s | Blaze Burger",
    default: "Blaze Burger",
    absolute: "Home | Blaze Burger",
  },
  description,
  openGraph: {
    title: "Blaze Burger",
    images: ["/og-image.png"],
    description,
    url: "https://blazeburger.ca",
    siteName: "Blaze Burger",
    locale: "en-US",
    type: "website",
  },
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
