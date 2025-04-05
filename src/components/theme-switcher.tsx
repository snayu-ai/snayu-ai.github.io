"use client";

import * as React from "react";
import { Moon, Sun, Laptop } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={cycleTheme}
      className="aspect-square text-foreground h-full"
    >
      {theme === "light" && <Sun className="size-[1.4rem]" />}
      {theme === "dark" && <Moon className="size-[1.4rem]" />}
      {(theme === "system" || !theme) && (
        <Laptop className="size-[1.4rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
