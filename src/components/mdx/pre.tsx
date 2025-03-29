"use client";

import { cn } from "@/lib/utils";
import { Check, Clipboard } from "lucide-react";
import { DetailedHTMLProps, HTMLAttributes, useRef, useState } from "react";
import { Button } from "../ui/button";

export default function Pre({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) {
  const [isCopied, setIsCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleClickCopy = async () => {
    const code = preRef.current?.textContent;

    if (code) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };

  return (
    <div className="relative group">
      <Button
        disabled={isCopied}
        size={"icon"}
        variant={"ghost"}
        onClick={handleClickCopy}
        className="absolute right-2 top-2 size-8 z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-100 ease-in"
        title="Copy code"
      >
        {isCopied ? <Check className="text-green-400 size-4" /> : <Clipboard className="size-4" />}
      </Button>
      <pre
        ref={preRef}
        className={cn(
          "mb-4 mt-6 overflow-x-auto text-sm  rounded-lg border !bg-secondary py-4",
          props.className
        )}
        {...props}
      >
        {children}
      </pre>
    </div>
  );
}
