"use client";

import {
  type MotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const gallery = [
  {
    src: "/portfolio/jonas-community.jpg",
    alt: "Jonas Alfonso at an AI Circle event",
  },
  {
    src: "/portfolio/bridge-48.jpg",
    alt: "Bridge 48 project environment",
  },
  {
    src: "/portfolio/jonas-speaking.jpg",
    alt: "Jonas Alfonso speaking in Barcelona",
  },
  {
    src: "/portfolio/testmyagent.png",
    alt: "TestMyAgent product interface",
  },
  {
    src: "/portfolio/ai-circle-audience.jpg",
    alt: "AI Circle audience in Barcelona",
  },
] as const;

const positions = [
  { x: -430, y: 62, rotate: -17 },
  { x: -220, y: 12, rotate: -8 },
  { x: 0, y: -12, rotate: 0 },
  { x: 220, y: 12, rotate: 8 },
  { x: 430, y: 62, rotate: 17 },
] as const;

export function GalleryCTASection() {
  const rootRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: rootRef,
    offset: ["start end", "center center"],
  });

  return (
    <section
      id="contact"
      ref={rootRef}
      className="relative overflow-hidden bg-[#eff0e8] px-5 py-28 text-[#111411] sm:px-8 lg:py-40"
      aria-labelledby="cta-title"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(81,221,126,.22),transparent_34%)]" />
      <div className="mx-auto max-w-7xl">
        <div className="relative h-[380px] sm:h-[470px]" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2">
            {gallery.map((item, index) => (
              <GalleryCard
                key={item.src}
                item={item}
                index={index}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-20 mx-auto max-w-5xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#28643b]">
            Selected builds · Barcelona and remote
          </p>
          <h2
            id="cta-title"
            className="mt-5 text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[0.86] tracking-[-0.065em]"
          >
            Bring me the workflow
            <span className="block font-serif font-normal italic text-[#28643b]">
              that should not still be manual.
            </span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-black/58 sm:text-lg">
            I am most useful when the requirement is bigger than a chatbot: a
            connected system that must handle business state, customer
            conversations, AI decisions, human approval, and failure conditions
            together.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:jonas@jonasalfonso.com?subject=System%20build%20inquiry"
              className="group inline-flex items-center gap-3 rounded-full bg-[#111411] px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-1"
            >
              <Mail className="size-4" />
              Discuss a system
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com/themosthappypiano"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/20 px-7 py-4 text-sm font-semibold transition-colors hover:border-black hover:bg-white/50"
            >
              Review the engineering <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-black/42">
            <span>jonas@jonasalfonso.com</span>
            <span>English + Spanish</span>
            <span>Barcelona</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GalleryCard({
  item,
  index,
  progress,
}: {
  item: (typeof gallery)[number];
  index: number;
  progress: MotionValue<number>;
}) {
  const position = positions[index];
  const x = useTransform(progress, [0, 1], [0, position.x]);
  const y = useTransform(progress, [0, 1], [120, position.y]);
  const rotate = useTransform(progress, [0, 1], [0, position.rotate]);
  const scale = useTransform(progress, [0, 1], [0.72, index === 2 ? 1.06 : 1]);
  const opacity = useTransform(progress, [0, 0.3, 1], [0, 0.7, 1]);

  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity }}
      className="absolute left-[-125px] top-[-155px] h-[310px] w-[250px] overflow-hidden rounded-2xl border-[6px] border-white bg-white shadow-[0_30px_70px_rgba(0,0,0,.22)] sm:left-[-160px] sm:top-[-190px] sm:h-[380px] sm:w-[320px]"
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="320px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/28 to-transparent" />
    </motion.div>
  );
}
