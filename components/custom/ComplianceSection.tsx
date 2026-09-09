"use client";

import { motion } from "framer-motion";
import { BadgeCheck, FileCheck2, LockKeyhole, ShieldCheck } from "lucide-react";
import { BookCallLiquidButton } from "@/components/ui/button-1";
import { GlowCard, GlowGrid } from "@/components/ui/glow-card";

/**
 * Compliance section, restyled onto pointer-tracked glow cards.
 * Adapted from 21st.dev "Glow Card Grid" (id 25283).
 * All copy is carried over unchanged from the previous version.
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
      className="relative overflow-hidden bg-black text-white"
      aria-labelledby="compliance-section-title"
    >
      {/* Static accent wash. The old animated gradient canvas ran a rAF loop
          for the entire section height, which cost real frames on mobile. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(70% 50% at 50% 0%, rgba(173,163,50,0.16), transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-5 py-16 sm:px-8 md:py-24">
        <div className="flex flex-col gap-5">
          <motion.span
            className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white"
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
            className="max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Complete Compliance &amp; Security{" "}
            <span className="font-normal italic text-white/55">Readiness</span>
          </motion.h2>

          <motion.p
            className="max-w-xl text-base leading-7 text-white/65"
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
            className="flex flex-wrap items-center gap-3 pt-1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase text-white/70">
              GDPR Ready
            </span>
            <span className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold uppercase text-white/70">
              HIPAA Aware
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <BookCallLiquidButton href="#book-call" />
          </motion.div>
        </div>

        <GlowGrid className="gap-4 sm:grid-cols-2">
          {complianceItems.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              key={item.title}
              transition={{
                duration: 0.55,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <GlowCard className="h-full">
                <div className="flex h-full flex-col gap-4 p-6 sm:p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80">
                      <item.icon className="size-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-medium text-white/25">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-6 text-white/60 sm:text-base">
                    {item.description}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </GlowGrid>
      </div>
    </section>
  );
};

export default ComplianceSection;
