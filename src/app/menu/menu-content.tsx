"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState, useMemo } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { StarIcon } from "@hugeicons/core-free-icons";

import { menuSections, sections } from "@/lib/menu";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Metadata } from "next";

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
export default function MenuContent() {
  const [activeSection, setActiveSection] = useState("beef-burgers");
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>(
    {},
  );
  const sectionIds = useMemo(() => sections.map((s) => s.id), []);

  useEffect(() => {
    // Wait for the next tick to ensure DOM elements are rendered
    const timeoutId = setTimeout(() => {
      const elements = sectionIds
        .map((id) => sectionRefs.current[id])
        .filter(Boolean) as HTMLElement[];

      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .map((entry) => ({
              id: entry.target.id,
              intersectionRatio: entry.intersectionRatio,
              top: entry.boundingClientRect.top,
            }))
            .sort((a, b) => {
              // Sort by intersection ratio first (higher is better)
              if (
                Math.abs(a.intersectionRatio - b.intersectionRatio) >
                0.1
              ) {
                return b.intersectionRatio - a.intersectionRatio;
              }
              // Then by position (closer to top is better)
              return a.top - b.top;
            });

          if (visible.length > 0) {
            setActiveSection(visible[0].id);
          }
        },
        {
          root: null,
          rootMargin: "-20% 0px -70% 0px", // Trigger when element is in the top 30% of viewport
          threshold: [0, 0.25, 0.5, 0.75, 1], // Multiple thresholds for better detection
        },
      );

      observerRef.current = observer;
      elements.forEach((section) => observer.observe(section));

      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionIds]);

  useEffect(() => {
    console.log("Active section changed:", activeSection);
  }, [activeSection]);

  // Function to set ref for each section
  const setSectionRef =
    (id: string) => (element: HTMLElement | null) => {
      sectionRefs.current[id] = element;
    };
  return (
    <div className="max-w-7xl px-8 mx-auto min-h-screen grid grid-cols-4 gap-8 xl:gap-16 pt-16">
      <div className="hidden col-span-1 h-fit xl:flex flex-col sticky top-4">
        <div className="font-heading uppercase text-xl mb-4">
          menu
        </div>
        <hr className="mb-8 border-foreground/30" />
        <div className="h-full w-full border border-foreground/30 rounded-xl p-3">
          {menuSections.map((menuSection, mi) => {
            return (
              <React.Fragment key={mi}>
                <div className="font-body uppercase mb-2">
                  {menuSection.name}
                </div>
                <div className="flex flex-col">
                  {sections
                    .filter((s) => s.type === menuSection.type)
                    .map((section, i) => (
                      <a
                        key={i}
                        href={`#${section.id}`}
                        className={cn(
                          "px-3 py-2 flex items-center gap-2 rounded-md text-sm hover:cursor-pointer hover:bg-foreground/5",
                          activeSection === section.id &&
                            "border border-foreground font-bold",
                        )}
                      >
                        {section.icon}
                        <div>{section.name}</div>
                      </a>
                    ))}
                </div>
                {mi < menuSections.length - 1 && (
                  <hr className="my-2 border-foreground/30" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      <div className="xl:hidden col-span-4 flex items-center justify-between sticky top-0 z-50 backdrop-blur bg-white/50 py-4">
        <div className="font-heading uppercase text-3xl">menu</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon className="size-6" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-56"
            align="end"
            onCloseAutoFocus={(event) => event.preventDefault()}
          >
            {menuSections.map((menuSection, mi, menuSections) => {
              return (
                <React.Fragment key={mi}>
                  <DropdownMenuLabel className="uppercase">
                    {menuSection.name}
                  </DropdownMenuLabel>
                  <DropdownMenuGroup>
                    {sections
                      .filter((s) => s.type === menuSection.type)
                      .map((section, si) => {
                        return (
                          <DropdownMenuItem
                            key={si}
                            className="flex items-center gap-2"
                            onClick={() => {
                              document
                                .getElementById(section.id)
                                ?.scrollIntoView({
                                  behavior: "smooth",
                                });
                            }}
                          >
                            {section.icon}
                            <span className="block">
                              {section.name}
                            </span>
                          </DropdownMenuItem>
                        );
                      })}
                  </DropdownMenuGroup>
                  {mi < menuSections.length - 1 && (
                    <DropdownMenuSeparator />
                  )}
                </React.Fragment>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="col-span-4 xl:col-span-3 flex flex-col gap-16 mb-96">
        {sections.map((section, i) => {
          return (
            <section
              id={section.id}
              key={section.id + i}
              ref={setSectionRef(section.id)}
            >
              <h2 className="text-2xl font-heading uppercase">
                {section.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items &&
                  section.items.map((item, j) => {
                    return (
                      <div
                        key={j}
                        className="w-full flex flex-col gap-6"
                      >
                        {item.image && (
                          <div className="relative h-72 w-full rounded-lg overflow-hidden bg-primary/75">
                            <Image
                              alt={item.name}
                              src={item.image}
                              fill
                              objectFit="cover"
                              objectPosition="center"
                            />
                          </div>
                        )}
                        <div className="flex flex-col gap-4 w-full">
                          {item.rating && (
                            <Badge className="flex items-center gap-1">
                              <span className="block">
                                {item.rating}
                              </span>
                              <HugeiconsIcon
                                icon={StarIcon}
                                className="fill-foreground"
                              />
                            </Badge>
                          )}
                          <div className="flex flex-col gap-2 w-full">
                            <div className="flex justify-between w-full">
                              <h3 className="text-lg font-extrabold">
                                {item.name}
                              </h3>
                              {item.tag && (
                                <Badge className="uppercase font-bold text-xs">
                                  {item.tag}
                                </Badge>
                              )}
                            </div>
                            <div className="flex flex-col gap-2">
                              {item.options.map((option, k) => {
                                return (
                                  <div key={k}>
                                    {option.name}:{" "}
                                    <span className="font-bold">
                                      ${option.price.toFixed(2)} CAD
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
