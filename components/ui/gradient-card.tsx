"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative flex h-full min-h-[320px] w-full flex-col justify-between overflow-hidden rounded-2xl p-8 shadow-sm transition-shadow duration-300 hover:shadow-lg",
  {
    defaultVariants: {
      gradient: "gray",
    },
    variants: {
      gradient: {
        blue: "bg-gradient-to-br from-sky-100 to-cyan-200/50",
        gray: "bg-gradient-to-br from-slate-100 to-slate-200/50",
        green: "bg-gradient-to-br from-emerald-100 to-teal-200/50",
        orange: "bg-gradient-to-br from-orange-100 to-amber-200/50",
        purple: "bg-gradient-to-br from-purple-100 to-indigo-200/50",
      },
    },
  },
);

export interface GradientCardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
    VariantProps<typeof cardVariants> {
  badgeText: string;
  badgeColor: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  imageUrl: string;
}

const GradientCard = React.forwardRef<HTMLDivElement, GradientCardProps>(
  (
    {
      badgeColor,
      badgeText,
      className,
      ctaHref,
      ctaText,
      description,
      gradient,
      imageUrl,
      title,
      ...props
    },
    ref,
  ) => {
    return (
      <motion.div
        animate="rest"
        className="h-full"
        initial="rest"
        ref={ref}
        variants={{
          hover: { scale: 1.03, y: -4 },
          rest: { scale: 1, y: 0 },
        }}
        whileHover="hover"
      >
        <div className={cn(cardVariants({ gradient }), className)} {...props}>
          <motion.div
            className="pointer-events-none absolute -right-1/4 -bottom-1/4 h-3/4 w-3/4 opacity-80"
            transition={{ damping: 15, stiffness: 400, type: "spring" }}
            variants={{
              hover: { rotate: 3, scale: 1.1 },
              rest: { rotate: 0, scale: 1 },
            }}
          >
            <Image
              alt={`${title} background graphic`}
              className="object-cover"
              fill
              sizes="(min-width: 1024px) 320px, 70vw"
              src={imageUrl}
            />
          </motion.div>

          <div className="z-10 flex h-full flex-col">
            <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-background/50 px-3 py-1 text-sm font-medium text-foreground/80 backdrop-blur-sm">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: badgeColor }}
              />
              {badgeText}
            </div>

            <div className="flex-grow">
              <h3 className="mb-2 text-2xl font-bold text-foreground">
                {title}
              </h3>
              <p className="max-w-xs text-foreground/70">{description}</p>
            </div>

            <a
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
              href={ctaHref}
            >
              {ctaText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </motion.div>
    );
  },
);
GradientCard.displayName = "GradientCard";

export { GradientCard, cardVariants };
