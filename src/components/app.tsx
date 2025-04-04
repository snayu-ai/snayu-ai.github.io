import React, { PropsWithChildren } from "react";
import SiteHeader from "@/components/site-header";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ThemeProvider } from "./theme-provider";

export default function App({ children }: PropsWithChildren) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-dvh flex-col space-y-6">
        <SiteHeader />
        <main className="container flex-1 max-w-none mx-0">{children}</main>
        <footer className=" container border-t border-t-secondary/60 py-3 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; 2025 Created by{" "}
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.social.github}
              className="text-primary"
            >
              {siteConfig.author}
            </Link>{" "}
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}
