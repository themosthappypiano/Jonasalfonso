"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ClockIcon, MessageCircleMore, ShieldIcon } from "lucide-react";
import { useRef } from "react";
import { AnimatedListSection } from "@/components/bentoSection/AnimatedListSection";
import { OrbitingCirclesDemo } from "@/components/bentoSection/OrbitingCirclesDemo";
import { Stats } from "@/components/ui/statistics-card";
import { cn } from "@/lib/utils";

/**
 * Scroll-pinned capability reveal.
 *
 * Replaces the old horizontal bento carousel. Copy is unchanged from the
 * previous BentoGrid `pages` array — only the presentation is new.
 *
 * Pattern sourced from 21st.dev "Sticky Scroll Reveal" (id 952), rebuilt to
 * drive off window scroll rather than an inner scroll container: the catalog
 * version nests its own `overflow-y-auto` box, which traps the page scroll on
 * touch devices and is exactly the kind of thing that breaks on a phone.
 */

const capabilities = [
  {
    eyebrow: "Conversion",
    icon: MessageCircleMore,
    title: "Sales agents that convert",
    description:
      "A sales agent trained on your calls, CRM notes, scripts, FAQs, and best objections so it sells like your best human rep.",
    visual: <Stats />,
  },
  {
    eyebrow: "Trust",
    icon: ShieldIcon,
    title: "Enterprise security",
    description:
      "Connects securely with the business tools your team already uses, without turning your automation into a black box.",
    visual: (
      <div className="w-full scale-90 sm:scale-100">
        <OrbitingCirclesDemo />
      </div>
    ),
  },
  {
    eyebrow: "Visibility",
    icon: ClockIcon,
    title: "Real-time monitoring",
    description:
      "Track performance, monitor workflows, and know exactly what your agents are doing across leads, calls, and bookings.",
    visual: (
      <div className="flex h-full w-full items-center justify-center">
        <AnimatedListSection
          className="h-[300px] max-w-md md:h-[380px]"
          showFade={false}
        />
      </div>
    ),
  },
];

function CapabilityRow({
  capability,
  index,
}: {
  capability: (typeof capabilities)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle parallax on the visual; the text stays put so it remains readable.
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const Icon = capability.icon;
  const flip = index % 2 === 1;

  return (
    <div
      ref={ref}
      className="grid items-center gap-8 border-t border-white/10 py-14 md:grid-cols-2 md:gap-16 md:py-24"
    >
      <motion.div
        className={cn("order-2", flip ? "md:order-2" : "md:order-1")}
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-white text-black md:size-12">
          <Icon className="size-6" strokeWidth={1.5} />
        </div>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
          {capability.eyebrow}
        </p>
        <h3 className="max-w-xl text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl">
          {capability.title}
        </h3>
        <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/65 sm:text-base md:text-lg">
          {capability.description}
        </p>
      </motion.div>

      <motion.div
        className={cn(
          "order-1 flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-4 md:min-h-[360px] md:p-8",
          flip ? "md:order-1" : "md:order-2",
        )}
        style={{ y }}
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {capability.visual}
      </motion.div>
    </div>
  );
}

export function BentoSection({ className }: { className?: string }) {
  return (
    <section
      id="features"
      data-slot="section"
      className={cn("relative bg-black px-5 py-16 sm:px-8 md:py-24", className)}
    >
      <div className="mx-auto w-full max-w-6xl">
        {capabilities.map((capability, index) => (
          <CapabilityRow
            capability={capability}
            index={index}
            key={capability.title}
          />
        ))}
      </div>
    </section>
  );
}
