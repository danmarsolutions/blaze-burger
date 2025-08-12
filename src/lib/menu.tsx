"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  SteakIcon,
  LeafIcon,
  Bread01Icon,
  FrenchFries02Icon,
  ForkIcon,
  SodaCanIcon,
  Hamburger02Icon,
  PlusMinusIcon,
  Bread04Icon,
} from "@hugeicons/core-free-icons";
import { LuDrumstick } from "react-icons/lu";
import { TbMilkshake } from "react-icons/tb";
import type { ReactNode } from "react";
import { MenuItem, menuItems } from "./menu-items";

export const SECTION_IDS = [
  "beef-burgers",
  "chicken-burgers",
  "veggie-burgers",
  "sandwiches",
  "fries",
  "poutines",
  "soft-drinks",
  "milkshakes",
  "toppings",
  "buns",
  "add-ons",
] as const;

export type SectionID = (typeof SECTION_IDS)[number];

export type SectionType =
  | "burgers-and-sandwiches"
  | "sides"
  | "drinks"
  | "other";

export type Section = {
  id: SectionID;
  type: SectionType;
  name: string;
  icon: ReactNode;
  items?: MenuItem[];
};

export type MenuSection = {
  name: string;
  type: SectionType;
};

export const menuSections: MenuSection[] = [
  { name: "Burgers & Sandwiches", type: "burgers-and-sandwiches" },
  { name: "Sides", type: "sides" },
  { name: "Drinks", type: "drinks" },
  { name: "Other", type: "other" },
];

export const sections: Section[] = [
  {
    id: "beef-burgers",
    type: "burgers-and-sandwiches",
    name: "Beef Burgers",
    icon: <HugeiconsIcon icon={SteakIcon} className="size-4" />,
    items: menuItems["beef-burgers"],
  },
  {
    id: "chicken-burgers",
    type: "burgers-and-sandwiches",
    name: "Chicken Burgers",
    icon: <LuDrumstick className="size-4" />,
    items: menuItems["chicken-burgers"],
  },
  {
    id: "veggie-burgers",
    type: "burgers-and-sandwiches",
    name: "Veggie Burgers",
    icon: <HugeiconsIcon icon={LeafIcon} className="size-4" />,
    items: menuItems["veggie-burgers"],
  },
  {
    id: "sandwiches",
    type: "burgers-and-sandwiches",
    name: "Sandwiches",
    icon: <HugeiconsIcon icon={Bread01Icon} className="size-4" />,
    items: menuItems["sandwiches"],
  },
  {
    id: "fries",
    type: "sides",
    name: "Fries",
    icon: (
      <HugeiconsIcon icon={FrenchFries02Icon} className="size-4" />
    ),
    items: menuItems["fries"],
  },
  {
    id: "poutines",
    type: "sides",
    name: "Poutines",
    icon: <HugeiconsIcon icon={ForkIcon} className="size-4" />,
    items: menuItems["poutines"],
  },
  {
    id: "soft-drinks",
    type: "drinks",
    name: "Soft Drinks",
    icon: <HugeiconsIcon icon={SodaCanIcon} className="size-4" />,
    items: menuItems["soft-drinks"],
  },
  {
    id: "milkshakes",
    type: "drinks",
    name: "Milkshakes",
    icon: <TbMilkshake className="size-4" />,
    items: menuItems["milkshakes"],
  },
  {
    id: "toppings",
    type: "other",
    name: "Toppings",
    icon: <HugeiconsIcon icon={Hamburger02Icon} className="size-4" />,
    items: menuItems["toppings"],
  },
  {
    id: "buns",
    type: "other",
    name: "Buns",
    icon: <HugeiconsIcon icon={Bread04Icon} className="size-4" />,
    items: menuItems["buns"],
  },
  {
    id: "add-ons",
    type: "other",
    name: "Add Ons",
    icon: <HugeiconsIcon icon={PlusMinusIcon} className="size-4" />,
    items: menuItems["add-ons"],
  },
];
