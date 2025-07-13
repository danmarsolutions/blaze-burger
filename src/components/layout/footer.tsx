import Image from "next/image";
import Link from "next/link";
import { imageSizes } from "@/lib/image-sizes";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  HalalIcon,
  MapsIcon,
  Call02Icon,
} from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-foreground text-background"
    >
      <div className="max-w-7xl mx-auto flex flex-col p-8">
        <div className="flex md:flex-row flex-col gap-4 justify-between items-start md:items-center">
          <Image
            src="/wordmark_white.png"
            width={imageSizes.wordmark.width}
            height={imageSizes.wordmark.height}
            alt="Blaze Burger Wordmark"
            className="w-auto h-8"
          />
          <div className="flex md:flex-row flex-col gap-4 items-start md:items-center">
            <div className="flex items-center gap-2">
              <HugeiconsIcon icon={HalalIcon} />
              <span>Only serving halal</span>
            </div>
            <Link
              href="https://maps.app.goo.gl/7taXaXSM8JsuJkTa7"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary"
            >
              <HugeiconsIcon icon={MapsIcon} />
              <span>208 Queens Quay West, Toronto ON</span>
            </Link>
            <Link
              href="tel:+14163680796"
              target="_blank"
              className="flex items-center gap-2 hover:text-primary"
            >
              <HugeiconsIcon icon={Call02Icon} />
              <span>416-368-0796</span>
            </Link>
          </div>
          <div className="flex md:items-center items-start gap-2">
            <Button size="icon" asChild>
              <Link
                href="https://www.instagram.com/blazeburger_"
                target="_blank"
              >
                <FaInstagram className="size-6" />
              </Link>
            </Button>
          </div>
        </div>
        <hr className="border-background/30 my-4" />
        <div className="flex justify-between">
          <p className="text-xs">
            © 2025 Blaze Burger. All Rights Reserved
          </p>
          <Link href="https://danmarsolutions.ca">
            <Image
              src="/danmar_wordmark_white.png"
              width={imageSizes.danmarWordmark.width}
              height={imageSizes.danmarWordmark.height}
              alt="Danmar Software Solutions Wordmark"
              className="h-7 w-auto"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
