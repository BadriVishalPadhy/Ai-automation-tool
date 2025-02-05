"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Press_Start_2P } from "next/font/google";

type Props = {};

const MenuOptions = (props: Props) => {
  const pathName = usePathname;

  return (
    <nav className="dark:bg-black h-screen overflow-scroll justify-between flex items-centre flex-col gap-10 py-6 px-2 font-press-start ">
      Autos
    </nav>
  );
};

export default MenuOptions;
