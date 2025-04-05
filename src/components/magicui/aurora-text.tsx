"use client";

import { motion } from "motion/react";
import React, { memo } from "react";
import { text } from "stream/consumers";

interface AuroraTextProps {
  children: string;
  className?: string;
  colors?: string[];
  speed?: number;
  style?: React.CSSProperties;
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    // colors = ["#FF4278", "#425BFF", "#42C3FF"],
    speed = 1,
    style,
  }: AuroraTextProps) => {
    const gradientStyle = {
      backgroundImage: `linear-gradient(1150deg, ${colors.join(", ")}, ${colors[0]})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      animationDuration: `${10 / speed}s`
    };

    return (
      <motion.span
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          ease: [0.16, 1, 0.3, 1],
          duration: 1,
          delay: 0.4,
        }}
        className={`relative inline-block ${className}`}
        style={style}
      >
        <span className="sr-only">{children}</span>
        <span
          className="relative z-10 animate-aurora bg-[length:250%_auto] bg-clip-text text-transparent tracking-tight"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </motion.span>
    );
  }
);

AuroraText.displayName = "AuroraText";
