"use client";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import ZoopButton from "@/components/zoop-button";
import { Mail } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

type HeaderTextProps = {
  lines: {
    md: string[];
    lg: string[];
    sm: string[];
  }
}

export function HeaderText({lines}: HeaderTextProps) {
  const [screenSize, setScreenSize] = useState(getSize());
  const [currentLines, setCurrentLines] = useState(lines?.md || ["Hello, world!"]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getSize());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function getSize() {
    const width = window.innerWidth;
    if (width < 768) {
      return "sm";
    } else if (width >= 768 && width < 992) {
      return "md";
    } else {
      return "lg";
    }
  }

  useEffect(() => {
    if (screenSize === "sm") {
      setCurrentLines(lines.sm || ["Hello, world!"]);
    } else if (screenSize === "md") {
      setCurrentLines(lines.md || ["Hello, world!"]);
    } else {
      setCurrentLines(lines.lg || ["Hello, world!"]);
    }
  }, [screenSize]);
  return (
    <motion.h1
      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {currentLines.map((line, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden leading-[1.2]"
        >
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex items-end"
          >
            {line.split(" ").map((word, wordIndex) => (
              <motion.div
                key={wordIndex}
                className="block mr-[0.2em] last:mr-0"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.4 + wordIndex * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ))}
    </motion.h1>
  );
}

export default function ChetanPage() {
  return (
    <div>
      <div className="container max-w-7xl py-32 space-y-6 md:space-y-12">
        <HeaderText
          lines={{
            md: ["End-to-end framework for", "LM Agent Systems"],
            lg: ["End-to-end framework for", "LM Agent Systems"],
            sm: ["End-to-end", "framework for", "LM Agent Systems"],
          }}
        />
        <div className="flex gap-4 flex-wrap justify-center sm:justify-start">

                    <Link href={"https://github.com/snayu-ai/chetan"} target="_blank">
          <ZoopButton text="Become a contributor" variant="default" />
          </Link>

          <Link href={"mailto:snayu-ai@protonmail.com"}>
            <ZoopButton text="Contact us" variant="secondary">
              <Mail className="size-6" />
            </ZoopButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
