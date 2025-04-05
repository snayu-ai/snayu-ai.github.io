"use client";
import React from "react";
import { NAV_LIST } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "./theme-switcher";
import ZoopButton from "./zoop-button";

export default function HeaderNav() {
  const path = usePathname();

  function deduceActivePath(itemPath: string) {
    // Special case for homepage
    if (itemPath === "/") {
      return path === "/";
    }
    
    // For exact matches with optional trailing slash handling
    const normalizedPath = path.endsWith("/") ? path.slice(0, -1) : path;
    const normalizedItemPath = itemPath.endsWith("/") ? itemPath.slice(0, -1) : itemPath;
    
    // For paths like "/about" we want to match exactly "/about" and not "/about-us"
    const pathParts = normalizedPath.split("/");
    const itemPathParts = normalizedItemPath.split("/");
    
    // Check if paths are identical or if we're on a subpage
    if (normalizedPath === normalizedItemPath) {
      return true;
    }
    
    // Don't match substrings - ensure we're matching whole path segments
    if (normalizedPath.startsWith(normalizedItemPath)) {
      // Make sure it's a proper subpath (e.g., "/about" should not match "/about-us")
      const nextChar = normalizedPath.charAt(normalizedItemPath.length);
      return nextChar === "" || nextChar === "/";
    }
    
    return false;
  }

  return (
    <nav className="hidden items-center gap-6 md:flex">
      {NAV_LIST.map((item) => (
        <Link
          key={item.label + item.path}
          href={item.path}
          className={cn(
            " font-normal hover:text-primary transition-colors flex items-center"
          )}
        >
          <ZoopButton
            text={item.label}
            variant="link"
            size="default"
            className="!text-xl font-medium"
            active={deduceActivePath(item.path)}
          />
          {/* <span className="font-medium text-lg">{item.label}</span> */}
        </Link>
      ))}
    </nav>
  );
}
