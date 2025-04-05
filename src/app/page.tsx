"use client";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

import { Bento } from "@/app/product_bento";
import { useTheme } from "next-themes";
import { ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";
import { cn } from "@/lib/utils";
import { ContainerTextFlip } from "@/components/ui/cyclic-text";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TextAnimate } from "@/components/magicui/text-animate";

function GridBackground() {
  return (
    <>
      <div
        className={cn(
          "absolute inset-0 -z-10 top-0",
          "[background-size:40px_40px]",
          "[background-image:radial-gradient(#4f4f4f_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#333_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 top-0 -z-10 flex items-center justify-center bg-[hsl(var(--background))] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </>
  );
}

export default function Home() {
  const { resolvedTheme } = useTheme();

  return (
    <section className="space-y-6 pb-8 md:pb-12 md:pt-10 lg:py-6">
      <div className="container p-1 mt-6 flex max-w-none mx-0 flex-col items-center gap-4 text-center xl:mt-0">
        <GridBackground />
        <div className="inline">
          <TextAnimate className="inline text-foreground text-center text-[2.5rem] font-bold tracking-[-0.1em] sm:text-5xl md:text-6xl lg:text-7xl lg:max-w-5xl leading-[1.1]">
            We&apos;re shaping&nbsp;the
          </TextAnimate>
          <AuroraText className="tracking-tighter text-center text-[2.5rem] font-bold sm:text-5xl md:text-6xl lg:text-7xl lg:max-w-5xl w-full leading-[1.1]">
              LLM Agent ecosystem
          </AuroraText>
        </div>

        <div className="w-full flex items-center justify-center max-w-5xl mx-auto">
          <div className="w-full flex flex-col items-center overflow-hidden">
            <div className="w-full py-2  px-2 lg:py-10 lg:px-4">
              <Bento />
            </div>
          </div>
        </div>

        {/* <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Building the future of intelligent agent systems with cutting-edge
          technology
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-sm gap-4">
          <Button className="w-full text-md" size={"lg"}>
            Sign up <ChevronRight className="size-4 ml-1.5" />{" "}
          </Button>
          <Button className="w-full text-md" variant={"secondary"} size={"lg"}>
            <Mail className="size-4 me-1.5" />
            Get in touch
          </Button>
        </div> */}
      </div>
    </section>
  );
}
