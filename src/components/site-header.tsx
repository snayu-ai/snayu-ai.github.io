"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { AlignLeft, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import HeaderNav from "@/components/header-nav";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/mobile-nav";
import { Icons } from "./icons";
import { motion } from "motion/react";
import ZoopButton from "./zoop-button";
import ThemeSwitcher from "./theme-switcher";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [logoWidth, setLogoWidth] = useState<number | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      setLogoWidth(ref.current.clientWidth);
    }
  }, [ref.current]);

  return (
    <header className="sticky top-0 z-40 p-2 bg-transparent backdrop-blur-md">
      <div className="container flex h-16 max-w-full items-center">
        <div
          className="flex items-center space-x-3 app-logo"
          style={{ width: logoWidth }}
        >
          <Link
            href="/"
            className="flex items-center space-x-2 text-foreground"
          >
            <Icons.logo className="size-24" />
            <span className="font-semibold text-2xl">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="flex-grow flex items-center justify-center space-x-5 md:space-x-6">
          <HeaderNav />
          <Button
            variant="ghost"
            className="p-0 text-primary hover:bg-transparent hover:text-primary md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <>
              {isMobileOpen ? (
                <X className="size-6" />
              ) : (
                <AlignLeft className="size-6" />
              )}
              <span className="sr-only">Menu</span>
            </>
          </Button>
        </div>
        <motion.div
          ref={ref}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center space-x-2"
        >
          <Link href={"https://discord.gg/pUpVqA6g"} target="_blank">
            <ZoopButton
              text="Join server"
              size={"default"}
              variant={"link"}
              className="mr-2"
            >
              <Icons.discord className="size-6" />
            </ZoopButton>
          </Link>
          <ThemeSwitcher />
          <ZoopButton text="Log in" variant="ghost" size="default" />

          <ZoopButton text="Get started" variant="default" size="default" />
        </motion.div>
      </div>
      {isMobileOpen && (
        <MobileNav onOpenChange={() => setIsMobileOpen(false)} />
      )}
    </header>
  );
}
