"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, CircleDot, Users } from "lucide-react";
import Image from "next/image";
import { capabilities, caseStudies, processSteps } from "@/lib/portfolio-data";

export function PortfolioCaseStudiesSection() {
  return (
    <>
      <section
        className="bg-[#070907] text-white"
        aria-label="Flagship case studies"
      >
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-36">
          <div className="grid gap-8 border-b border-white/12 pb-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#91efad]">
                Flagship case studies
              </p>
              <h2 className="mt-4 text-5xl font-medium tracking-[-0.055em] sm:text-7xl">
                The operating
                <span className="block font-serif font-normal italic text-[#b5f7c8]">
                  layer matters.
                </span>
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-white/55 lg:justify-self-end lg:text-lg">
              The visible interface is only one part of the work. These systems
              also manage state, policy, retries, validation, alerts, audit
              trails, and the conditions that return control to a person.
            </p>
          </div>

          <div className="mt-20 space-y-28 lg:space-y-44">
            {caseStudies.map((study, index) => (
              <article
                id={study.id}
                key={study.id}
                className="scroll-mt-24 grid gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className={`${index % 2 === 1 ? "lg:order-2" : ""} lg:sticky lg:top-24 lg:self-start`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04]">
                    <Image
                      src={study.image}
                      alt={`${study.eyebrow} project cover`}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <span className="absolute bottom-5 left-5 font-mono text-5xl font-medium tracking-[-0.06em] text-white/90">
                      {study.index}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.75,
                    delay: 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8cebaa]">
                    {study.eyebrow}
                  </p>
                  <h3 className="mt-5 text-4xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-5xl">
                    {study.title}
                  </h3>
                  <p className="mt-7 text-lg leading-8 text-white/66">
                    {study.summary}
                  </p>

                  <div className="mt-8 border-l border-[#83eca6]/45 pl-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/38">
                      My contribution
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/58">
                      {study.contribution}
                    </p>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {study.proof.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-white/58"
                      >
                        <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#81efa7]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {study.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/12 bg-white/[0.045] px-3 py-1.5 text-[11px] text-white/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="case-products"
        className="scroll-mt-20 bg-[#dff7e5] py-24 text-[#0b1d10] lg:py-32"
        aria-labelledby="products-title"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#28643b]">
                Products I operate
              </p>
              <h2
                id="products-title"
                className="mt-4 text-5xl font-medium leading-[.95] tracking-[-0.055em] sm:text-7xl"
              >
                I build beyond
                <span className="block font-serif font-normal italic">
                  the client demo.
                </span>
              </h2>
            </div>
            <div className="space-y-6 text-base leading-7 text-[#0b1d10]/66 lg:pt-10 lg:text-lg">
              <p>
                FounderOS runs as a private production service for operating
                tasks, communication, relationships, finances, content, agents,
                and business systems. Its latest verification passed 980 tests
                across 113 files.
              </p>
              <p>
                Network OS provides relationship intelligence through an
                authenticated API and local MCP bridge. TestMyAgent.pro makes
                AI-agent testing more structured. Vest Self is a native mobile
                accountability MVP built with a protected TypeScript backend
                boundary.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/50 border border-black/5">
              <Image
                src="/portfolio/founderos.svg"
                alt="FounderOS"
                fill
                className="object-contain p-8 opacity-80 mix-blend-multiply"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/50 border border-black/5">
              <Image
                src="/portfolio/network-os.svg"
                alt="Network OS"
                fill
                className="object-contain p-8 opacity-80 mix-blend-multiply"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/50 border border-black/5">
              <Image
                src="/portfolio/testmyagent.png"
                alt="TestMyAgent"
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-white/50 border border-black/5">
              <Image
                src="/portfolio/vest-self.png"
                alt="Vest Self"
                fill
                className="object-contain p-6"
              />
            </div>
          </div>

          <div
            id="services"
            className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[#0b1d10]/15 bg-[#0b1d10]/15 md:grid-cols-2 lg:grid-cols-4"
          >
            {capabilities.map((capability, index) => (
              <motion.article
                key={capability.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="bg-[#eaf9ed] p-6 sm:p-8"
              >
                <span className="font-mono text-xs text-[#28643b]/60">
                  0{index + 1}
                </span>
                <h3 className="mt-14 text-xl font-semibold tracking-[-0.025em]">
                  {capability.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#0b1d10]/60">
                  {capability.text}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="mt-20 grid gap-10 border-t border-[#0b1d10]/20 pt-14 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#28643b]">
                How I work
              </p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.045em] sm:text-5xl">
                From operating problem to maintainable system.
              </h2>
            </div>
            <ol className="grid gap-0 border-t border-[#0b1d10]/15">
              {processSteps.map((step, index) => (
                <li
                  key={step}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-[#0b1d10]/15 py-5"
                >
                  <span className="font-mono text-xs text-[#28643b]/65">
                    0{index + 1}
                  </span>
                  <span className="text-base font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section
        id="community"
        className="scroll-mt-20 bg-[#f3f1e9] py-24 text-[#111411] lg:py-32"
        aria-labelledby="community-title"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid overflow-hidden rounded-[2rem] border border-black/10 bg-white lg:grid-cols-2">
            <div className="relative min-h-[420px]">
              <Image
                src="/portfolio/ai-circle-team.jpg"
                alt="Jonas Alfonso with AI Circle speakers in Barcelona"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-7 sm:p-10 lg:p-14">
              <Users className="size-6 text-[#23643b]" />
              <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                Community and public work
              </p>
              <h2
                id="community-title"
                className="mt-4 text-4xl font-medium tracking-[-0.045em] sm:text-5xl"
              >
                Building in public, in Barcelona.
              </h2>
              <p className="mt-6 text-base leading-7 text-black/62">
                I work with Barcelona Digital Nomads as an AI services and
                automation partner. I also help organise and deliver AI Circle
                talks, practical skill-sharing, and in-person networking for
                founders, freelancers, and builders.
              </p>
              <p className="mt-5 text-sm leading-7 text-black/55">
                Barcelona Digital Nomads describes its public calendar as a
                7,100+ member community and the biggest digital nomad community
                in Barcelona. Its LinkedIn has featured me as the founder of
                Oléo and as a speaker on making money with AI.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <ProofLink
                  href="https://luma.com/barcelonadigitalnomads"
                  label="Community calendar"
                />
                <ProofLink
                  href="https://www.skool.com/ai-circle/about"
                  label="AI Circle"
                />
                <ProofLink
                  href="https://www.linkedin.com/posts/barcelona-digital-nomads_aicircle-ai-digitalnomads-activity-7469337635438694400-xSN3"
                  label="Speaker feature"
                />
                <ProofLink
                  href="https://github.com/themosthappypiano"
                  label="GitHub portfolio"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-black/15 py-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-black/48">
            <span className="flex items-center gap-2 text-black">
              <CircleDot className="size-3.5 text-emerald-600" /> Available for
              selected builds
            </span>
            <span>Barcelona based</span>
            <span>English and Spanish</span>
            <span>Strategy through deployment</span>
          </div>
        </div>
      </section>
    </>
  );
}

function ProofLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between gap-3 rounded-xl border border-black/15 px-4 py-3 text-sm font-medium transition-colors hover:border-black"
    >
      <span>{label}</span>
      <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  );
}
