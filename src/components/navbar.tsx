"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/40 bg-slate-950/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold text-white">TRIFUTEC</span>
        </Link>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-800 hover:text-slate-50 focus:bg-slate-800 focus:text-slate-50",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-400">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const services = [
  {
    title: "Audio/Visual Solutions",
    href: "/services/audio-visual",
    description:
      "Professional home theater and audio/visual installation services.",
  },
  {
    title: "Network Solutions",
    href: "/services/networking",
    description: "Enterprise-grade networking and infrastructure solutions.",
  },
  {
    title: "Security Systems",
    href: "/services/security",
    description: "CCTV and comprehensive security system installations.",
  },
  {
    title: "Business IT",
    href: "/services/business-it",
    description: "Complete IT solutions for businesses of all sizes.",
  },
];
