"use client";
import { imageSizes } from "@/lib/image-sizes";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menu",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [sheetOpen, setSheetOpen] = useState(false);
  return (
    <div className="w-full bg-foreground text-background">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="px-2 py-4">
          <Image
            src="/wordmark_white.png"
            alt="Blaze Burger Wordmark"
            height={imageSizes.wordmark.height}
            width={imageSizes.wordmark.width}
            className="w-auto h-12"
            priority
          />
        </Link>
        <ul className="space-x-8 text-sm md:flex hidden">
          {navItems.map((item, i) => {
            return (
              <li key={i}>
                <Link
                  href={item.href}
                  className={cn(
                    "hover:text-primary",
                    pathname === item.href &&
                      "text-primary font-bold",
                  )}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <Button
          variant="primary-outline"
          size="sm"
          className="text-xs font-bold md:block hidden"
        >
          View Menu
        </Button>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="md:hidden">
              <MenuIcon className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-screen sm:w-screen sm:max-w-screen">
            <SheetHeader>
              <SheetTitle className="sr-only">
                Navigation Menu
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col h-full w-full justify-center items-center gap-8">
              {navItems.map((item, i) => {
                return (
                  <Link
                    key={item.href + i}
                    href={item.href}
                    onClick={() => setSheetOpen(false)}
                    className={cn(
                      "text-4xl font-bold",
                      pathname === item.href &&
                        "border-b-4 border-primary",
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
