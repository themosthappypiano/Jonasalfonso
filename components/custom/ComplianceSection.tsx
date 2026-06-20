"use client";

import { motion } from "framer-motion";
import { BadgeCheck, FileCheck2, LockKeyhole, ShieldCheck } from "lucide-react";
import { BookCallLiquidButton } from "@/components/ui/button-1";
import { bentoDescription, bentoHeader } from "@/lib/animations";
import AnimatedGradientBackground from "../ui/animated-gradient-background";
import { Badge } from "../ui/badge";

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
      <AnimatedGradientBackground
        Breathing
        animationSpeed={0.015}
        breathingRange={8}
        containerClassName="pointer-events-none opacity-70"
        gradientColors={[
          "#0A0A0A",
          "#2979FF",
          "#FF80AB",
          "#FF6D00",
          "#FFD600",
          "#00E676",
          "#3D5AFE",
        ]}
        gradientStops={[28, 48, 60, 70, 80, 90, 100]}
        startingGap={130}
        topOffset={18}
      />
      <div className="pointer-events-none absolute inset-0 bg-black/62" />
      <div className="relative z-10 mx-auto flex max-w-container flex-col items-center gap-6 px-8 py-12 md:py-20 lg:py-32">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(460px,1.1fr)] lg:items-center">
          <div className="flex flex-col gap-5">
            <motion.div
              variants={bentoHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <Badge
                variant="outline"
                className="w-fit border-white/15 bg-white/10 text-white"
              >
                <span className="size-1.5 rounded-full bg-green-400" />
                Compliance
              </Badge>
            </motion.div>

            <motion.h2
              id="compliance-section-title"
              className="text-3xl font-bold leading-tight text-white sm:text-4xl"
              variants={bentoHeader}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              Complete Compliance &amp; Security{" "}
              <span className="font-normal italic text-white/55">
                Readiness
              </span>
            </motion.h2>

            <motion.p
              className="max-w-xl text-base leading-7 text-white/65 text-balance"
              variants={bentoDescription}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              Stay compliant with privacy and healthcare regulations. Our
              platform supports GDPR and HIPAA requirements, providing data
              protection and compliance monitoring for regulated industries.
            </motion.p>

            <motion.div
              className="grid max-w-md grid-cols-2 gap-3 pt-2 text-xs font-semibold uppercase text-white/70"
              variants={bentoDescription}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <span className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                GDPR Ready
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                HIPAA Aware
              </span>
            </motion.div>
            <motion.div
              variants={bentoDescription}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <BookCallLiquidButton href="#book-call" />
            </motion.div>
          </div>

          <motion.div
            className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/30"
            variants={bentoDescription}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {complianceItems.map((item, index) => (
              <div
                key={item.title}
                className="relative flex min-h-36 items-center gap-5 border-white/10 border-b p-6 last:border-b-0 sm:p-8"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                    {item.description}
                  </p>
                </div>
                <div className="hidden size-24 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 sm:flex lg:size-28">
                  <item.icon className="size-11" strokeWidth={1.5} />
                </div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white/[0.07] to-transparent" />
                <span className="absolute top-5 right-5 text-xs font-medium text-white/25">
                  0{index + 1}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
