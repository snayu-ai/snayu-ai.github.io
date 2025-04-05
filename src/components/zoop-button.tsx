"use client";
import { motion } from "framer-motion";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const DURATION = 0.5;
const STAGGER = 0.005;

export const ZoopButton = ({
  text,
  variant,
  className,
  size = "lg",
  children,
  active,
  ...props
}: {
  text: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant:
    | "link"
    | "outline"
    | "default"
    | "destructive"
    | "secondary"
    | "ghost"
    | null
    | undefined;
  active?: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <motion.button
      className={cn(
        buttonVariants({ variant, size, className }),
        "hover:scale-x-[0.95] hover:scale-y-[0.99] transition-transform duration-1000 ease-fast inline-flex gap-2 w-full sm:w-auto"
      )}
      initial="initial"
      whileHover="hovered"
      whileTap="hovered"
      variants={{
        initial: { opacity: 0 },
      }}
      animate={{ opacity: 1 }}
      {...props}
    >
      {children}
      <motion.div className="relative overflow-hidden whitespace-nowrap leading-[1.5]">
        {variant === "link" && (
          <motion.div
            initial={{ x: "-200%" }}
            animate={active ? { x: 0 } : { x: "-200%" }}
            variants={{
              initial: { x: "-200%" },
              hovered: { x: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: [0.5, 0, 0, 1]
            }}
            className="absolute bottom-0 h-px w-full bg-foreground"
          />
        )}
        <div>
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: [0.5, 0, 0, 1],
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: [0.5, 0, 0, 1],
                delay: STAGGER * i,
              }}
              className={cn("inline-block")}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.button>
  );
};
export default ZoopButton;
