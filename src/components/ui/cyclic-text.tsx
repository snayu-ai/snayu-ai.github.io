"use client";

import React, { useState, useEffect, useId } from "react";
// import "@/app/styles/prism-theme.css";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface ContainerTextFlipProps {
  /** Array of words to cycle through in the animation */
  words?: string[];
  /** Time in milliseconds between word transitions */
  interval?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Additional CSS classes to apply to the text */
  textClassName?: string;
  /** Duration of the transition animation in milliseconds */
  animationDuration?: number;
}

export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 5000,
  className,
  textClassName,
  animationDuration = 700,
}: ContainerTextFlipProps) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      // Add some padding to the text width (30px on each side)
      // @ts-ignore
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    // Update width whenever the word changes
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      // Width will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.p
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "relative inline-block lg:mx-auto px-2 w-fit rounded-lg lg:mt-4 lg:mb-2 py-1 lg:pt-1 lg:pb-2 text-center font-medium",
        "text-background bg-linear-to-br from-[#4b4b4b] to-[#000000] dark:from-[#f0f0f0] dark:to-[#b1b1b1]",
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              className="font-title tracking-[-0.05em]"
              initial={{
                opacity: 0,
                filter: "blur(10px)",
                x: -20,
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
                x: 0,
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.p>
  );
}
