import type { Metadata } from "next";
import localFont from "next/font/local";
import { DM_Mono, Inter, Lexend } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/styles.css";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import App from "@/components/app";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    template: "%s | Snayu",
    default: "Snayu | Shaping the Agent Landscape",
  },
};

const fontCode = DM_Mono({
  variable: "--font-code",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});


 const titleFont = localFont({
  src: "../assets/fonts/Sentient-Variable.woff2",
  display: "swap",
  variable: "--font-title",
});

const titleFontItalic = localFont({
  src: "../assets/fonts/Sentient-VariableItalic.woff2",
  display: "swap",
  variable: "--font-title-italic",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen antialiased font-inter bg-background",
          inter.variable,
          fontCode.variable,
          titleFont.variable,
          titleFontItalic.variable,
        )}
      >
        <App>{children}</App>
      </body>
    </html>
  );
}