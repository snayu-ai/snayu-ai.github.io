"use client";

import Image from "next/image";
// import { AnimatedBeamMultipleOutputs } from "@/components/animated-beam-multiple-outputs";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
// import BlurIn from "@/components/magicui/blur-in";
// import { EmailForm } from "@/components/email-form";
// import { FadeIn } from "@/components/magicui/fade-in";
// import GlobeAndStars from "@/components/globe-and-stars";
// import Hero from "@/components/hero";
// import Marquee from "@/components/magicui/marquee";
// import Technologies from "@/components/technologies";
// import ThemeToggle from "@/components/theme-toggle";
// import Orbit from "@/components/orbit";
// import RetroGrid from "@/components/magicui/retro-grid";
// import StatsChart from "@/components/stats-chart";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { MitraIcon } from "@/components/icon";
import { RippleCard } from "./ui/ripple-card";
// import { defaultDomains } from "@/lib/data";
// import { RippleCard } from "./ui/ripper-card";
// import { motion } from "framer-motion";
// import GitHubStars from "@/components/github-stars";
// import ProjectPosts from "@/components/project-posts";

const features = [
  {
    id: "chetan",
    Icon: "",
    name: "Chetan",
    description: "The comprehensive agent system framework.",
    href: "/chetan",
    cta: "Go to documentation",
    className: "col-span-3 md:col-span-2",
    background: (
      <>
        <div
          id="hero"
          className="absolute right-0 top-0 h-full w-full border-none transition-all duration-300 ease-out"
        ></div>

        <div className="absolute right-0 top-0 z-50"></div>
      </>
    ),
  },
  {
    id: "zerve",
    Icon: "",
    name: "Zerve",
    description: "The Rust-powered performant agent-system server.",
    className: "col-span-3 md:col-span-1",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`,
    cta: "View on GitHub",
    background: (
      <div>
        <div className="absolute right-0 top-0 h-3/4 w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_50%)] group-hover:scale-105"></div>
      </div>
    ),
  },

  {
    id: "egent",
    Icon: "",
    name: "Egent",
    description: "Cross-platform app for fully local LM agents.",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/projects`,
    cta: "Download",
    className: "col-span-3 md:col-span-1",
    background: (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      ></motion.div>
    ),
  },
  {
    id: "chetanbase",
    Icon: "",
    name: "Chetanbase",
    description: "Manage all of chetan, in one place.",
    href: "/chetanbase",
    cta: "Get started for free",
    className: "col-span-3 md:col-span-2",
    background: (
      <div className="absolute right-0 top-0 w-[80%] origin-top translate-x-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_70%)] md:[mask-image:linear-gradient(to_top,transparent_50%,#000_70%)] group-hover:-translate-y-5 group-hover:scale-105"></div>
    ),
  },
  {
    id: "mitra",
    Icon: "",
    name: <>Mitra </>,
    description: "The collaborative workspace for humans and agents.",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/tags/ai`,
    cta: "Get started for free",
    className: "col-span-3 md:col-span-2",
    background: (
      <>
        <div className="absolute h-full w-full left-0 top-12 flex justify-center rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_70%)] group-hover:scale-105 group-hover:-translate-y-4">
          <div className="text-7xl font-semibold w-full flex justify-center items-center h-2/3 group-hover:-translate-y-2 transition-all duration-300">
            <a
              href={`${process.env.GITHUB_URL}/${process.env.REPO_NAME}`}
              className="flex items-center gap-2 border shadow-xl p-5 rounded-lg border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            >
              <MitraIcon className="h-14 w-14 drop-shadow" />
            </a>
          </div>
        </div>
      </>
    ),
  },
  {
    Icon: "",
    name: "",
    description: "",
    className: "col-span-3 md:col-span-1",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/tags/vercel`,
    cta: "Learn more",
    background: (
      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out group-hover:scale-[105%]">
        <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_20%,#000_70%)]">
          <div className="absolute h-full w-full [mask-image:linear-gradient(to_bottom,transparent_2%,#000_10%)]">
            <RippleCard />
          </div>
        </div>
      </div>
    ),
  },

  {
    Icon: "",
    name: "Worldwide Reach",
    description:
      "Deploy to any region on earth. From remote servers, on-prem, in the cloud, or to the edge.",
    className: "col-span-3 md:col-span-3",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/tags/vercel`,
    cta: "Learn more",
    background: (
      <div className="absolute w-full h-full right-0 top-0 origin-top rounded-md transition-all duration-300 ease-out  [mask-image:linear-gradient(to_top,transparent_20%,#000_100%)] md:[mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 group-hover:-translate-y-4"></div>
    ),
  },

  {
    Icon: "",
    name: "GitHub Stars",
    description: "Star this repository to show your support.",
    className: "col-span-3 md:col-span-1",
    href: `${process.env.GITHUB_URL}/${process.env.REPO_NAME}`,
    cta: "Star repository",
    background: (
      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_70%)] group-hover:scale-105 group-hover:-translate-y-4">
        <div className="text-7xl font-semibold w-full flex justify-center items-center h-2/3 group-hover:-translate-y-2 transition-all duration-300">
          <a
            href={`${process.env.GITHUB_URL}/${process.env.REPO_NAME}`}
            className="flex items-center gap-2 border shadow-xl p-5 rounded-lg border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
          >
            <Image
              src="/images/githubstar.webp"
              alt="GitHub logo"
              className="h-14 w-14 drop-shadow"
              width={56}
              height={56}
              priority
            />
          </a>
        </div>
      </div>
    ),
  },

  {
    Icon: "",
    name: "Project Showcase",
    description:
      "Here are a few of my recent projects, using the technologies mentioned above.",
    className: "col-span-3 md:col-span-2",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/projects`,
    cta: "All projects",
    background: (
      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out group-hover:scale-[102%]">
        <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_20%,#000_70%)]">
          <div className="absolute h-full w-full [mask-image:linear-gradient(to_bottom,transparent_2%,#000_10%)]">
            <div className="text-7xl font-semibold w-full flex justify-center items-center h-2/3 transition-all duration-300">
              <div className="flex items-center gap-2"></div>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  {
    Icon: "",
    name: "Daily Visitors",
    description:
      "Live visitor stats for this website, powered by Umami Analytics.",
    href: "https://umami.is",
    cta: "Umami",
    className: "col-span-3 md:col-span-2",
    background: (
      <>
        <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out group-hover:scale-[102%]">
          <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_20%,#000_70%)]">
            <div className="absolute h-full w-full [mask-image:linear-gradient(to_bottom,transparent_2%,#000_10%)]"></div>
            <div className="sm:-translate-y-5"></div>
          </div>
        </div>
      </>
    ),
  },

  {
    Icon: "",
    name: "",
    description: "",
    className: "col-span-3 md:col-span-1",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/now`,
    cta: "Ideas",
    background: (
      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out group-hover:scale-[105%]">
        <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_20%,#000_70%)]">
          <div className="absolute h-full w-full [mask-image:linear-gradient(to_bottom,transparent_2%,#000_10%)]"></div>
        </div>
      </div>
    ),
  },

  {
    Icon: "",
    name: "",
    description: "",
    className: "col-span-3 md:col-span-3",
    href: "",
    cta: "",
    background: (
      <div
        id="contact-form"
        className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_0%,#000_0%)]"
      >
        <div className="absolute inset-0 z-50 flex justify-center items-center gap-5 p-5">
          <div className="max-w-sm w-full flex flex-col gap-2">
            <div className="text-5xl md:text-6xl font-semibold text-neutral-700 dark:text-neutral-300 w-full flex justify-start"></div>
            <div className="w-full flex justify-center text-neutral-500 dark:text-neutral-400">
              Leave your email to get the conversation started. We&apos;ll be in
              touch soon.
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
              *Your email will never be shared with anyone.
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    ),
  },
];

export function Bento() {
  return (
    <>
      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </>
  );
}
