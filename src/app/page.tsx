"use client";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

import { Bento } from "@/components/bento";
import { useTheme } from "next-themes";
import { ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Home() {

  const {resolvedTheme} = useTheme();

  return (
    <section className="space-y-6 pb-8 md:pb-12 md:pt-10 lg:py-6">
      <div className="container p-1 mt-6 flex max-w-5xl flex-col items-center gap-4 text-center xl:mt-0">
        <h1 className="text-left text-4xl font-semibold tracking-tight sm:text-center sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl w-full">
          We shape the
          <br />
          <LineShadowText className="italic" shadowColor={resolvedTheme === "dark" ? "white" : "black"}>
            LLM
          </LineShadowText>
          &nbsp;
          <LineShadowText className="italic" shadowColor={resolvedTheme === "dark" ? "white" : "black"}>
            Agent
          </LineShadowText>
          &nbsp;ecosystem
        </h1>

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
