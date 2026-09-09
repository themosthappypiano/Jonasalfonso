"use client";

import { motion } from "framer-motion";
import { BadgeCheck, FileCheck2, LockKeyhole, ShieldCheck } from "lucide-react";
import { BookCallLiquidButton } from "@/components/ui/button-1";
import { HorizontalScrollGallery } from "@/components/ui/horizontal-scroll-gallery";

/**
 * Compliance as a pinned horizontal track.
 *
 * The section pins to the viewport and vertical scrolling drives the four
 * compliance panels sideways. Deliberately the only sideways-moving section on
 * the page so it doesn't read as "another grid of cards".
 *
 * Sourced from 21st.dev "Horizontal Scroll Gallery" (id 20139).
 * All copy carried over unchanged.
 */

const complianceItems = [
  {
    icon: FileCheck2,
    title: "Automated audit trails",
    description:
      "Every action is logged and timestamped with immutable audit trails for complete regulatory compliance.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance monitoring",
    description:
      "Real-time monitoring helps your systems stay aligned with privacy, healthcare, and industry standards.",
  },
  {
    icon: BadgeCheck,
    title: "Regulatory reporting",
    description:
      "Generate compliance reports automatically to meet regulatory requirements and audit demands.",
  },
  {
    icon: LockKeyhole,
    title: "GDPR data protection",
    description:
      "Support consent-aware workflows, retention controls, and secure data handling for EU privacy requirements.",
  },
];

const ComplianceSection = () => {
  return (
    <section
      className="relative bg-[#15151c] text-white"
      aria-labelledby="compliance-section-title"
    >
      {/* NOTE: no `overflow-hidden` on this section. An overflow clip on any
          ancestor silently disables `position: sticky` in its descendants,
          which kills the pinned horizontal track below. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* `background-attachment: fixed` keeps the light viewport-relative.
            The section is 320vh tall for the pinned track, so a normally
            positioned gradient puts its bright spots off-screen and the
            middle of the scroll — the part you actually look at — goes dark. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(80vw 70vh at 12% 18%, rgba(41,121,255,0.42), transparent 65%), radial-gradient(70vw 65vh at 90% 82%, rgba(173,163,50,0.30), transparent 65%)",
            backgroundAttachment: "fixed",
          }}
        />
      </div>

      {/* Intro is centred, not left-aligned like the services block, so the two
          sections don't share a silhouette. */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 pt-16 pb-10 text-center sm:px-8 md:pt-24">
        <motion.span
          className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium text-white"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="size-1.5 rounded-full bg-green-400" />
          Compliance
        </motion.span>

        <motion.h2
          id="compliance-section-title"
          className="text-3xl font-bold leading-tight text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Complete Compliance &amp; Security{" "}
          <span className="font-normal italic text-white/70">Readiness</span>
        </motion.h2>

        <motion.p
          className="max-w-xl text-base leading-7 text-white/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Stay compliant with privacy and healthcare regulations. Our platform
          supports GDPR and HIPAA requirements, providing data protection and
          compliance monitoring for regulated industries.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-xs font-semibold uppercase text-white/85">
            GDPR Ready
          </span>
          <span className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-xs font-semibold uppercase text-white/85">
            HIPAA Aware
          </span>
        </motion.div>
      </div>

      {/* Pinned sideways track. */}
      <HorizontalScrollGallery
        className="relative z-10 hidden md:block"
        scrollHeight="320vh"
      >
        <div className="flex h-full items-center gap-6 px-[8vw]">
          {complianceItems.map((item, index) => (
            <article
              className="relative flex h-[62vh] w-[78vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/25 bg-gradient-to-br from-white/[0.26] via-white/[0.14] to-white/[0.07] p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm lg:w-[46vw]"
              key={item.title}
            >
              <div className="flex items-start justify-between">
                <div className="flex size-16 items-center justify-center rounded-2xl border border-white/35 bg-white/20 text-white">
                  <item.icon className="size-8" strokeWidth={1.4} />
                </div>
                <span className="text-7xl font-bold leading-none text-white/30">
                  0{index + 1}
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white lg:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-md text-base leading-7 text-white/85">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </HorizontalScrollGallery>

      {/* Phones get a plain vertical stack — a pinned sideways track on a small
          touch screen fights the user's natural scroll. */}
      <div className="relative z-10 flex flex-col gap-4 px-5 pb-4 md:hidden">
        {complianceItems.map((item, index) => (
          <article
            className="relative overflow-hidden rounded-2xl border border-white/25 bg-gradient-to-br from-white/[0.26] via-white/[0.14] to-white/[0.07] p-6 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] backdrop-blur-sm"
            key={item.title}
          >
            <div className="mb-4 flex items-start justify-between">
              <div className="flex size-12 items-center justify-center rounded-xl border border-white/35 bg-white/20 text-white">
                <item.icon className="size-6" strokeWidth={1.4} />
              </div>
              <span className="text-4xl font-bold leading-none text-white/30">
                0{index + 1}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/85">
              {item.description}
            </p>
          </article>
        ))}
      </div>

      <div className="relative z-10 flex justify-center px-5 pb-16 md:pb-24">
        <BookCallLiquidButton href="#book-call" />
      </div>
    </section>
  );
};

export default ComplianceSection;
