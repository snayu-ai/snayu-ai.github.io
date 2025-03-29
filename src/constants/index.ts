import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { Bot, Rss } from "lucide-react";

export const NAV_LIST = [
  { label: "Blog", path: "/blog" },
  // { label: "About", path: "/about"},
];

export const SOCIALS = [
  { label: "Github", path: siteConfig.social.github, icon: Icons.github },
  { label: "X", path: siteConfig.social.x, icon: Icons.x },
];
