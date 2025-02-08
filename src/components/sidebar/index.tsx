"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Category from "@/components/icons/category";
import Logs from "@/components/icons/clipboard";
import Templates from "@/components/icons/cloud_download";
import Home from "@/components/icons/home";
import Payment from "@/components/icons/payment";
import Settings from "@/components/icons/settings";
import Workflows from "@/components/icons/workflows";
import { Separator } from "../ui/separator";
import { Database, GitBranch, LucideMousePointerClick } from "lucide-react";
import { ModeToggle } from "../global/mode-toggle";
// import { Connection } from './types'
export const menuOptions = [
  { id: 1, name: "Dashboard", Component: Home, href: "/dashboard" },
  { id: 2, name: "Workflows", Component: Workflows, href: "/workflows" },
  { id: 3, name: "Settings", Component: Settings, href: "/settings" },
  { id: 4, name: "Connections", Component: Category, href: "/connections" },
  { id: 5, name: "Billing", Component: Payment, href: "/billing" },
  { id: 6, name: "Templates", Component: Templates, href: "/templates" },
  { id: 7, name: "Logs", Component: Logs, href: "/logs" },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-col items-center justify-center mb-44  w-28">
      <AnimatedTooltip items={menuOptions} />
      <Separator />
      <div className="flex items-center flex-col gap-9 dark:bg-[#353346]/30 py-4 px-2 rounded-full h-56 overflow-scroll border-[1px]">
        <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
          <LucideMousePointerClick className="dark:text-white" size={18} />
          <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]" />
        </div>
        <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
          <GitBranch className="text-muted-foreground" size={18} />
          <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
        </div>
        <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
          <Database className="text-muted-foreground" size={18} />
          <div className="border-l-2 border-muted-foreground/50 h-6 absolute left-1/2 transform translate-x-[-50%] -bottom-[30px]"></div>
        </div>
        <div className="relative dark:bg-[#353346]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]">
          <GitBranch className="text-muted-foreground" size={18} />
        </div>
      </div>
      <div className="flex items-center justify-center flex-col gap-8">
        <ModeToggle />
      </div>
    </div>
  );
}
