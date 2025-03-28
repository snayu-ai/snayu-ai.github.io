import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist, Lexend } from "next/font/google";
import "@/styles/globals.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import App from "@/components/app";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: {
    template: "%s | Snayu",
    default: "Snayu | Shaping the Agent Landscape",
  },
};

const fontCode = localFont({
  src: "../assets/fonts/GeistMonoVF.woff2",
  variable: "--font-code",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={cn(
          "min-h-screen antialiased font-geist bg-background",
          geist.variable,
          fontCode.variable,
        )}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}
