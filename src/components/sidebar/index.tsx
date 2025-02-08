"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import {
  Home,
  Settings,
  ListIcon as Category,
  ReceiptIcon as Payment,
  FileText,
  List,
} from "lucide-react";

export const menuOptions = [
  { id: 1, name: "Dashboard", Component: Home, href: "/dashboard" },
  { id: 2, name: "Workflows", Component: List, href: "/workflows" },
  { id: 3, name: "Settings", Component: Settings, href: "/settings" },
  { id: 4, name: "Connections", Component: Category, href: "/connections" },
  { id: 5, name: "Billing", Component: Payment, href: "/billing" },
  { id: 6, name: "Templates", Component: FileText, href: "/templates" },
  { id: 7, name: "Logs", Component: List, href: "/logs" },
];

export default function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-col items-center justify-center mb-10 w-24">
      <AnimatedTooltip items={menuOptions} />
    </div>
  );
}
