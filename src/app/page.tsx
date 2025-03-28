"use client";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import {
  ArrowRight,
  BarChartHorizontalBig,
  Bot,
  ChevronRight,
  Mail,
  Monitor,
  Server,
} from "lucide-react";


const MitraIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svg1"
    width="217.412"
    height="168"
    version="1.1"
    viewBox="0 0 217.412 168"
    {...props}
  >
    <g id="layer1" transform="translate(-147.294 -172)">
      <path
        id="rect1"
        fill="currentColor"
        strokeWidth="0.314"
        d="m242.824 172-95.53 168h26.353l69.177-121.656V340h26.352l69.177-121.656V340h26.353V172h-26.353l-69.177 121.656V172Z"
      ></path>
    </g>
  </svg>
);

const features = [
  {
    Icon: MitraIcon,
    name: "Mitra",
    description: "The collaborative workspace for humans and agents.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Bot,
    name: "Chetan",
    description: "The comprehensive agent system framework.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: BarChartHorizontalBig,
    name: "Chetanbase",
    description: "Manage all of chetan, in one place.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: Server,
    name: "Chetanserve",
    description: "The Rust-powered performant agent-system server.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: Monitor,
    name: "Eagent",
    description: "A Cross-platform app for fully local LM agents.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
];

export default function Home() {
  return (
    <section className="space-y-6 pb-8 md:pb-12 md:pt-10 lg:py-32">
      <div className="container mt-6 flex max-w-5xl flex-col items-start gap-4 text-center xl:mt-0">
        <div className="flex items-center space-x-2">
          {SOCIALS.map((social) => (
            <Link
              key={social.label}
              href={social.path}
              rel="noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-background px-0 hover:bg-primary/50 transition-colors rounded-full p-2 size-8 bg-muted"
              )}
            >
              <social.icon className="size-6 fill-foreground" />
              <span className="sr-only">{social.label}</span>
            </Link>
          ))}
        </div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-2xl w-full text-left">
          We shape the &nbsp;
          <br />
          <LineShadowText className="italic" shadowColor={"white"}>
            LLM
          </LineShadowText>
          &nbsp;
          <LineShadowText className="italic" shadowColor={"white"}>
            Agent
          </LineShadowText>
          &nbsp;ecosystem
        </h1>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
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
        </div>

        <BentoGrid className="lg:grid-rows-3 text-left">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
