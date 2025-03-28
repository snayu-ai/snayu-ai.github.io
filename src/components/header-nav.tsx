"use client";
import React from "react";
import { NAV_LIST } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import ThemeSwitcher from "./theme-switcher";

export default function HeaderNav() {
  const segment = useSelectedLayoutSegment();
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {NAV_LIST.map((item) => (
        <Link
          key={item.label + item.path}
          href={item.path}
          className={cn(
            " font-normal hover:text-primary transition-colors flex items-center",
            `/${segment}` === item.path
              ? "text-primary"
              : "text-muted-foreground",
          )}
        >
          <span className="font-medium">{item.label}</span>
        </Link>
      ))}
      <ThemeSwitcher />
    </nav>
  );
}
