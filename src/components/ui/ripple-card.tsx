import Ripple from "@/components/magicui/ripple";
import { ReactNode } from "react";

export function RippleCard({text}: {text: ReactNode}) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-card-foreground p-5 select-none cursor-default">
        {text}
      </p>
      <Ripple />
    </div>
  );
}
