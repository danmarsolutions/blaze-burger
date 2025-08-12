import React from "react";
import { Metadata } from "next";
import MenuContent from "./menu-content";

const description =
  "Contact Blaze Burger for inquiries, feedback, or to learn more about our premium halal gourmet burgers. We're here to help and would love to hear from you!";
export const metadata: Metadata = {
  title: "Contact Us",
  description,
  openGraph: {
    title: "Contact Us | Blaze Burger",
    images: ["/og-image.png"],
    description,
    url: "https://blazeburger.ca/about",
    siteName: "Blaze Burger",
    locale: "en-US",
    type: "website",
  },
};
export default function Menu() {
  return <MenuContent />;
}
