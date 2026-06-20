"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLMotionProps, motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import * as React from "react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative flex w-full flex-col justify-between overflow-hidden rounded-xl p-6 shadow-sm transition-shadow duration-300 ease-in-out group hover:shadow-lg",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        red: "bg-red-500/90 text-primary-foreground",
        blue: "bg-blue-500/90 text-primary-foreground",
        gray: "bg-secondary text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface ServiceCardProps
  extends Omit<HTMLMotionProps<"div">, "children" | "title">,
    VariantProps<typeof cardVariants> {
  title: string;
  href: string;
  imgSrc: string;
  imgAlt: string;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ className, variant, title, href, imgSrc, imgAlt, ...props }, ref) => {
    const cardAnimation: Variants = {
      hover: {
        scale: 1.02,
        transition: { duration: 0.3 },
      },
    };

    const imageAnimation: Variants = {
      hover: {
        scale: 1.1,
        rotate: 3,
        x: 10,
        transition: { duration: 0.4, ease: "easeInOut" },
      },
    };

    const arrowAnimation: Variants = {
      hover: {
        x: 5,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse" as const,
        },
      },
    };

    return (
      <motion.div
        className={cn(cardVariants({ variant, className }))}
        ref={ref}
        variants={cardAnimation}
        whileHover="hover"
        {...props}
      >
        <div className="relative z-10 flex h-full flex-col">
          <h3 className="max-w-[13rem] text-2xl font-bold tracking-tight">
            {title}
          </h3>
          <a
            href={href}
            aria-label={`Learn more about ${title}`}
            className="mt-auto flex items-center text-sm font-semibold group-hover:underline"
          >
            LEARN MORE
            <motion.div variants={arrowAnimation}>
              <ArrowRight className="ml-2 h-4 w-4" />
            </motion.div>
          </a>
        </div>

        <motion.div
          className="absolute -right-8 -bottom-8 h-40 w-40 overflow-hidden opacity-75 mix-blend-multiply group-hover:opacity-90"
          variants={imageAnimation}
        >
          <Image src={imgSrc} alt={imgAlt} fill className="object-cover" />
        </motion.div>
      </motion.div>
    );
  },
);
ServiceCard.displayName = "ServiceCard";

export { ServiceCard };
