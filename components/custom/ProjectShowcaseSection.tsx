"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { portfolioProjects } from "@/lib/portfolio-data";

export function ProjectShowcaseSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const frame = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.14;
      current.current.y += (target.current.y - current.current.y) * 0.14;

      if (previewRef.current) {
        previewRef.current.style.transform = `translate3d(${current.current.x + 24}px, ${current.current.y - 110}px, 0)`;
      }
      frame.current = requestAnimationFrame(animate);
    };

    frame.current = requestAnimationFrame(animate);
    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <section
      id="work"
      className="relative overflow-hidden bg-[#f1f0e9] py-24 text-[#111411] lg:py-36"
      aria-labelledby="project-showcase-title"
      onPointerMove={(event) => {
        target.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerLeave={() => setHoveredIndex(null)}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 border-b border-black/20 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-black/45">
              Selected work · 2026
            </p>
            <h2
              id="project-showcase-title"
              className="mt-4 text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-7xl"
            >
              Systems,
              <span className="block font-serif font-normal italic text-[#22643b]">
                not theatre.
              </span>
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-black/62 lg:justify-self-end lg:text-lg">
            Client delivery, active builds, independent products, and private
            operating software. Every item is labeled by its real status so a
            prototype is never presented as production and a community system is
            not confused with a marketing concept.
          </p>
        </div>

        <div className="relative mt-10">
          <div
            ref={previewRef}
            className={`pointer-events-none fixed left-0 top-0 z-[80] hidden h-[220px] w-[340px] overflow-hidden rounded-2xl border border-black/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,.35)] transition-[opacity,scale] duration-300 lg:block ${
              hoveredIndex === null
                ? "scale-90 opacity-0"
                : "scale-100 opacity-100"
            }`}
            aria-hidden="true"
          >
            {portfolioProjects.map((project, index) => (
              <Image
                key={project.title}
                src={project.image}
                alt=""
                fill
                sizes="340px"
                className={`object-cover transition-all duration-500 ${
                  hoveredIndex === index
                    ? "scale-100 opacity-100 blur-0"
                    : "scale-110 opacity-0 blur-md"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
          </div>

          {portfolioProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.href}
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noreferrer" : undefined}
              className="group block border-b border-black/15"
              onPointerEnter={() => setHoveredIndex(index)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
            >
              <article className="relative grid gap-4 py-7 transition-transform duration-300 lg:grid-cols-[1fr_1.35fr_auto] lg:items-center lg:gap-10 lg:group-hover:translate-x-3">
                <div className="flex items-center gap-4">
                  <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-black lg:hidden">
                    <Image
                      src={project.image}
                      alt=""
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="inline-flex items-center gap-2 text-2xl font-medium tracking-[-0.035em] sm:text-3xl">
                      {project.title}
                      <ArrowUpRight className="size-5 translate-x-[-6px] translate-y-[6px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
                    </h3>
                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/42">
                      {project.status}
                    </p>
                  </div>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-black/55 transition-colors group-hover:text-black/75 sm:text-base">
                  {project.description}
                </p>
                <span className="font-mono text-xs text-black/42">
                  {project.year}
                </span>
              </article>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
