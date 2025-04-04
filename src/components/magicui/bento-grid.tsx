import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ReactNode } from "react";
import BlurIn from "@/components/magicui/blur-in";
import { Badge } from "../ui/badge";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-2 lg:gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  id,
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  flair,
  flairProps = {
    variant: "secondary"
  }
}: {
  id?: string;
  name?: string | ReactNode;
  className?: string;
  background?: ReactNode;
  Icon?: any;
  description?: string;
  href?: string;
  cta?: string;
  flair?: string;
  flairProps?: object;
}) => (
  <BlurIn
    duration={0.1}
    key={id}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between text-left overflow-hidden rounded-xl",
      // light styles
      "bg-card [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      " dark:[border:1px_solid_rgba(255,255,255,.1)]",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <div className="flex flex-col gap-2">

          {Icon !== "" ? (
            <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
          ) : (
            ""
          )}


        <div className="text-3xl font-semibold text-neutral-700 dark:text-neutral-300 inline-flex items-center flex-wrap gap-2">
          {name}
          {flair && <Badge className="h-fit text-sm" {...flairProps}>{flair}</Badge>}
        </div>
      </div>
      <p className="w-full text-neutral-500 dark:text-neutral-400 dark:drop-shadow-sm">
        {description}
      </p>
    </div>

    {cta !== "" ? (
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        {href !== "" ? (
          <Button
            variant="ghost"
            asChild
            size="sm"
            className="pointer-events-auto group/Arrow"
          >
            <a href={href}>
              {cta}
              <ArrowRightIcon className="ml-2 h-4 w-4 lg:group-hover/Arrow:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        ) : (
          ""
        )}
      </div>
    ) : (
      <></>
    )}
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10" />
  </BlurIn>
);

export { BentoCard, BentoGrid };
