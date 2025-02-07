"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const menuOptions = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
    // Placeholder image path
  },
  {
    id: 2,
    name: "Workflows",
    href: "/workflows",
    // Placeholder image path
  },
  {
    id: 3,
    name: "Settings",
    href: "/settings",
  },
  {
    id: 4,
    name: "Connections",
    href: "/connections",
  },
  {
    id: 5,
    name: "Billing",
    href: "/billing",
  },
  {
    id: 6,
    name: "Templates",
    href: "/templates",
  },
  {
    id: 7,
    name: "Logs",
    href: "/logs",
  },
];

const MenuOptions = () => {
  const pathName = usePathname();

  return (
    <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-6 px-2 font-press-start">
      <div className="flex items-center justify-center flex-col gap-8">
        <Link href={"/"} className="flex font-bold flex-row">
          Autos
        </Link>
        <div className="flex gap-4">
          <AnimatedTooltip
            items={menuOptions.map((option) => ({
              id: option.id,
              name: option.name,
              designation: option.href,
            }))}
          />
        </div>
      </div>
    </nav>
  );
};

export default MenuOptions;
