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
import { RippleCard } from "../components/ui/ripple-card";
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
    cta: "Learn more",
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
  // {
  //   id: "zerve",
  //   Icon: "",
  //   name: "Zerve",
  //   description: "The Rust-powered performant agent-system server.",
  //   className: "col-span-3 md:col-span-1",
  //   href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}`,
  //   cta: "View on GitHub",
  //   background: (
  //     <div>
  //       <div className="absolute right-0 top-0 h-3/4 w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_5%,#000_50%)] group-hover:scale-105"></div>
  //     </div>
  //   ),
  // },

  // {
  //   id: "egent",
  //   Icon: "",
  //   name: "Egent",
  //   description: "Cross-platform app for fully local LM agents.",
  //   href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/projects`,
  //   cta: "Download",
  //   className: "col-span-3 md:col-span-1",
  //   background: (
  //     <motion.div
  //       initial={{ opacity: 0 }}
  //       animate={{ opacity: 1 }}
  //       transition={{ duration: 2.5 }}
  //     ></motion.div>
  //   ),
  // },
  // {
  //   id: "chetanbase",
  //   Icon: "",
  //   name: "Chetanbase",
  //   description: "Manage all of chetan, in one place.",
  //   href: "/chetanbase",
  //   cta: "Get started for free",
  //   className: "col-span-3 md:col-span-2",
  //   background: (
  //     <div className="absolute right-0 top-0 w-[80%] origin-top translate-x-0 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_70%)] md:[mask-image:linear-gradient(to_top,transparent_50%,#000_70%)] group-hover:-translate-y-5 group-hover:scale-105"></div>
  //   ),
  // },
  // {
  //   id: "mitra",
  //   Icon: "",
  //   name: <>Mitra </>,
  //   description: "The collaborative workspace for humans and agents.",
  //   href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/tags/ai`,
  //   cta: "Get started for free",
  //   className: "col-span-3 md:col-span-2",
  //   background: (
  //     <>
  //       <div className="absolute h-full w-full left-0 flex justify-center rounded-md transition-all duration-300 ease-out group-hover:scale-110 group-hover:-translate-y-4">
  //         <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,#8c8c8c_200%)]">
  //           <div className="text-7xl font-semibold w-full flex justify-center items-center h-2/3 group-hover:-translate-y-2 transition-all duration-300">
  //             <a
  //               href={`${process.env.GITHUB_URL}/${process.env.REPO_NAME}`}
  //               className="flex items-center gap-2 border shadow-xl p-5 rounded-lg border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
  //             >
  //               <MitraIcon className="h-14 w-14 drop-shadow" />
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </>
  //   ),
  // },
  {
    Icon: "",
    name: "",
    description: "",
    className: "col-span-3 md:col-span-1",
    href: `${process.env.NEXT_PUBLIC_PORTFOLIO_URL}/tags/vercel`,
    cta: "",
    background: (
      <div className="absolute h-full w-full left-0 top-0 origin-top rounded-md transition-all duration-300 ease-out group-hover:scale-[105%]">
        <div className="absolute h-full w-full [mask-image:linear-gradient(to_top,transparent_20%,#000_70%)]">
          <div className="absolute h-full w-full [mask-image:linear-gradient(to_bottom,transparent_2%,#000_10%)]">
            <RippleCard text={<>there are<br /> more to<br /> come.</>} />
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
