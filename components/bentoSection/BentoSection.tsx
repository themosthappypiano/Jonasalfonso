"use client";

import { motion } from "framer-motion";
import { bentoGrid } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { BentoGrid } from "./BentoGrid";

export interface BentoSectionProps {
  className?: string;
}

export function BentoSection({ className }: BentoSectionProps) {
  return (
    <section
      id="features"
      data-slot="section"
      className={cn(
        "relative box-border overflow-hidden bg-black px-4 py-12 text-black md:h-screen md:px-6 md:py-10",
        className,
      )}
    >
      <motion.div
        className="relative z-10 h-full w-full overflow-hidden rounded-2xl md:rounded-[32px]"
        variants={bentoGrid}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="relative z-10 h-full w-full">
          <BentoGrid />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-0 z-30 hidden h-20 bg-black md:block" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 hidden h-14 bg-black md:block" />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-30 hidden w-11 bg-black md:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-30 hidden w-4 bg-black/80 md:block" />
      </motion.div>
    </section>
  );
}
