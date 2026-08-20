"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const proofPoints = [
  ["22 nodes", "Live WhatsApp moderation"],
  ["43 nodes", "AI intake and custom CRM"],
  ["980 tests", "Latest FounderOS verification"],
] as const;

const systemNodes = [
  "Conversation",
  "Policy",
  "AI decision",
  "CRM state",
  "Human handoff",
  "Audit trail",
];

export function CinematicPortfolioHero() {
  const rootRef = useRef<HTMLElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const systemRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const context = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (isMobile) {
        gsap.set(introRef.current, {
          autoAlpha: 1,
          clearProps: "transform,filter",
        });
        gsap.set(cardRef.current, { autoAlpha: 0 });
        return;
      }

      if (prefersReducedMotion) {
        gsap.set(
          [
            introRef.current,
            cardRef.current,
            systemRef.current,
            proofRef.current,
          ],
          {
            autoAlpha: 1,
            clearProps: "transform,filter",
          },
        );
        gsap.set(finalRef.current, { autoAlpha: 0 });
        return;
      }

      gsap.set(cardRef.current, {
        yPercent: 115,
        scale: 0.82,
        autoAlpha: 1,
      });
      gsap.set(systemRef.current, { autoAlpha: 0, y: 70, scale: 0.9 });
      gsap.set(proofRef.current?.children ?? [], { autoAlpha: 0, y: 35 });
      gsap.set(finalRef.current, {
        autoAlpha: 0,
        scale: 0.82,
        filter: "blur(24px)",
      });

      gsap.set(introRef.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "+=4200",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      timeline
        .to(introRef.current, {
          scale: 1.12,
          autoAlpha: 0.15,
          filter: "blur(18px)",
          duration: 1.2,
          ease: "power2.inOut",
        })
        .to(
          cardRef.current,
          {
            yPercent: 0,
            scale: 1,
            duration: 1.5,
            ease: "expo.inOut",
          },
          "-=0.9",
        )
        .to(cardRef.current, {
          width: "100vw",
          height: "100vh",
          borderRadius: 0,
          duration: 1.1,
          ease: "power3.inOut",
        })
        .to(systemRef.current, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "expo.out",
        })
        .to(
          proofRef.current?.children ?? [],
          {
            autoAlpha: 1,
            y: 0,
            stagger: 0.16,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.7",
        )
        .to({}, { duration: 1.2 })
        .to([systemRef.current, proofRef.current], {
          autoAlpha: 0,
          y: -35,
          duration: 0.8,
          ease: "power2.in",
        })
        .to(
          finalRef.current,
          {
            autoAlpha: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2,
            ease: "expo.out",
          },
          "-=0.3",
        )
        .to({}, { duration: 1 });
    }, root);

    const hashTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
      const hash = window.location.hash;
      if (!hash || hash === "#top") return;
      const target = document.querySelector(hash);
      if (!(target instanceof HTMLElement)) return;

      const previousBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY);
      document.documentElement.style.scrollBehavior = previousBehavior;
    }, 50);

    return () => {
      window.clearTimeout(hashTimer);
      context.revert();
    };
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#050806] py-24 text-white md:h-screen md:min-h-[680px] md:py-0"
      aria-labelledby="portfolio-hero-title"
    >
      <Image
        src="/portfolio/jonas-speaking.jpg"
        alt="Jonas Alfonso speaking to an audience at an AI Circle event in Barcelona"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[45%_42%] opacity-45"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,6,4,.4),rgba(3,6,4,.82)_78%,#050806)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_35%,rgba(118,255,174,.18),transparent_32%)]" />
      <div
        className="portfolio-grain absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
      />

      <nav className="absolute inset-x-0 top-0 z-40 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-white"
        >
          JONAS ALFONSO
        </a>
        <div className="flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/70 sm:gap-8 sm:text-[11px] sm:tracking-[0.16em]">
          <a href="#work" className="transition-colors hover:text-white">
            Work
          </a>
          <a
            href="#community"
            className="hidden transition-colors hover:text-white sm:block"
          >
            Community
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Contact
          </a>
        </div>
      </nav>

      <div
        ref={introRef}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-16 sm:px-8"
      >
        <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#9ff8bc] sm:text-xs sm:tracking-[0.2em]">
          <span className="h-px w-10 bg-[#9ff8bc]" />
          <span className="sm:hidden">AI systems builder · Barcelona</span>
          <span className="hidden sm:inline">
            AI systems builder · Founder of Oléo · Barcelona
          </span>
        </p>
        <h1
          id="portfolio-hero-title"
          className="max-w-6xl text-[clamp(4rem,10vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.065em]"
        >
          Systems that
          <span className="block font-serif font-normal italic text-[#b6f6c8]">
            survive reality.
          </span>
        </h1>
        <div className="mt-9 grid gap-6 border-t border-white/20 pt-6 md:grid-cols-[1.1fr_.9fr] md:items-end">
          <p className="max-w-2xl text-sm leading-6 text-white/72 sm:text-lg sm:leading-7">
            I connect customer conversations, CRM state, payments, AI decisions,
            human approval, and failure controls into operating systems that can
            be tested, understood, and maintained.
          </p>
          <a
            href="#work"
            className="inline-flex items-center gap-3 text-sm font-semibold text-white md:justify-self-end"
          >
            Explore the systems <ArrowDown className="size-4" />
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <div
          ref={cardRef}
          className="portfolio-depth-card pointer-events-auto relative hidden h-[88vh] w-[92vw] max-w-[1500px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#09150e] shadow-[0_60px_160px_rgba(0,0,0,.8)] md:flex"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_35%,rgba(70,255,143,.16),transparent_35%),linear-gradient(135deg,#0d2015,#061009_70%)]" />
          <div
            className="portfolio-grid absolute inset-0 opacity-40"
            aria-hidden="true"
          />
          <div
            className="portfolio-grain absolute inset-0 opacity-[0.06]"
            aria-hidden="true"
          />

          <div
            ref={systemRef}
            className="relative z-10 grid h-full w-full items-center gap-8 px-6 py-10 md:px-10 lg:grid-cols-[.8fr_1.35fr_.65fr] lg:px-16"
          >
            <div className="self-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#81efa7]">
                Connected by design
              </p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                More than an isolated chatbot.
              </h2>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/60 sm:text-base">
                The useful work happens between tools: policy, state, retries,
                approvals, observability, and the moment a person needs to take
                over.
              </p>
            </div>

            <div className="relative mx-auto hidden aspect-square w-full max-w-[560px] items-center justify-center md:flex">
              <div className="absolute inset-[12%] rounded-full border border-[#72ee9f]/20" />
              <div className="absolute inset-[27%] rounded-full border border-[#72ee9f]/25" />
              <div className="absolute h-px w-[82%] rotate-[22deg] bg-gradient-to-r from-transparent via-[#72ee9f]/45 to-transparent" />
              <div className="absolute h-px w-[82%] -rotate-[32deg] bg-gradient-to-r from-transparent via-[#72ee9f]/35 to-transparent" />
              {systemNodes.map((node, index) => {
                const positions = [
                  "left-[2%] top-[24%]",
                  "right-[5%] top-[17%]",
                  "left-[34%] top-[4%]",
                  "right-[2%] bottom-[24%]",
                  "left-[5%] bottom-[18%]",
                  "left-[37%] bottom-[3%]",
                ];
                return (
                  <div
                    key={node}
                    className={`absolute ${positions[index]} rounded-full border border-white/15 bg-black/45 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/75 shadow-xl backdrop-blur-xl`}
                  >
                    {node}
                  </div>
                );
              })}
              <div className="relative flex size-40 flex-col items-center justify-center rounded-full border border-[#8bffb3]/30 bg-[#0b2918] text-center shadow-[0_0_90px_rgba(72,255,139,.18)]">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#9ff8bc]">
                  Operator
                </span>
                <strong className="mt-2 text-2xl">Oléo</strong>
                <span className="mt-1 text-xs text-white/45">system layer</span>
              </div>
            </div>

            <div
              ref={proofRef}
              className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1"
            >
              {proofPoints.map(([value, label]) => (
                <div
                  key={value}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl"
                >
                  <p className="text-2xl font-semibold tracking-tight text-[#b8ffcf]">
                    {value}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/50">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={finalRef}
            className="absolute inset-0 z-20 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(25,75,43,.96),rgba(5,15,9,.98)_64%)] px-6 text-center"
          >
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9ff8bc]">
                Strategy through deployment
              </p>
              <h2 className="mt-6 text-5xl font-medium leading-[0.95] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                Real operations.
                <span className="block font-serif font-normal italic text-[#b6f6c8]">
                  Proof in the details.
                </span>
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                Client systems, independent products, internal operating
                software, and community infrastructure—built from the real
                workflow outward.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full bg-[#b7ffd0] px-6 py-3 text-sm font-semibold text-[#061009] transition-transform hover:-translate-y-0.5"
                >
                  View selected work <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
