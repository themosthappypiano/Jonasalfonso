"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type * as React from "react";
import { cn } from "@/lib/utils";

const MotionLink = motion.create(Link);

export function DynamicButton({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <MotionLink
      href={href}
      className={cn(
        "group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-[#ada332] px-8 py-4 text-base font-semibold text-black shadow-[0_0_40px_-10px_rgba(173,163,50,0.5)] transition-all hover:shadow-[0_0_60px_-15px_rgba(173,163,50,0.7)] focus:outline-none focus:ring-2 focus:ring-[#ada332] focus:ring-offset-2 focus:ring-offset-black sm:px-12 sm:py-5 sm:text-lg",
        className,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
      <motion.div
        className="absolute inset-0 z-0 bg-white/20"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{ originX: 0.5, originY: 0.5, borderRadius: "100%" }}
      />
      <div className="absolute inset-0 z-0 rounded-full border border-white/20 mix-blend-overlay"></div>
    </MotionLink>
  );
}
