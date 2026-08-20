"use client";

import { useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, MessageCircleMore } from "lucide-react";
import * as React from "react";
import { useEffect, useRef } from "react";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { BookCallLiquidButton } from "@/components/ui/button-1";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
.cinematic-footer-wrapper {
  -webkit-font-smoothing: antialiased;
  color: #ffffff;
  --pill-bg-1: color-mix(in oklch, var(--foreground) 3%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--foreground) 1%, transparent);
  --pill-shadow: color-mix(in oklch, var(--background) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--foreground) 10%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--background) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--foreground) 8%, transparent);
  --pill-bg-1-hover: color-mix(in oklch, var(--foreground) 8%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, var(--foreground) 2%, transparent);
  --pill-border-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
  --pill-shadow-hover: color-mix(in oklch, var(--background) 70%, transparent);
  --pill-highlight-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 40s linear infinite;
}

.footer-bg-grid {
  background-size: 60px 60px;
  background-image:
    linear-gradient(to right, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%,
    color-mix(in oklch, var(--primary) 15%, transparent) 0%,
    color-mix(in oklch, var(--secondary) 15%, transparent) 40%,
    transparent 70%
  );
}

.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow:
      0 10px 30px -10px var(--pill-shadow),
      inset 0 1px 1px var(--pill-highlight),
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow:
      0 20px 40px -10px var(--pill-shadow-hover),
      inset 0 1px 1px var(--pill-highlight-hover);
  color: inherit;
}

.footer-giant-bg-text {
  font-size: 22vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklch, var(--foreground) 5%, transparent);
  background: linear-gradient(180deg, color-mix(in oklch, var(--foreground) 10%, transparent) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

.footer-text-glow {
  color: #ffffff;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.12);
}

.cinematic-footer-wrapper a,
.cinematic-footer-wrapper button,
.cinematic-footer-wrapper svg,
.cinematic-footer-wrapper span,
.cinematic-footer-wrapper h2 {
  color: inherit;
}
`;

export type MagneticButtonProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
      as?: React.ElementType;
    };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  (
    { className, children, as: Component = "button", ...props },
    forwardedRef,
  ) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          localRef.current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) forwardedRef.current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
MagneticButton.displayName = "MagneticButton";

const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>AI Chatbots</span> <span className="text-primary/60">✦</span>
    <span>Voice Agents</span> <span className="text-secondary/60">✦</span>
    <span>AI Receptionists</span> <span className="text-primary/60">✦</span>
    <span>Appointment Systems</span>{" "}
    <span className="text-secondary/60">✦</span>
    <span>Lead Automation</span> <span className="text-primary/60">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, {
    amount: 0.3,
    once: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        },
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: Static component CSS, not user-provided content. */}
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      <div
        ref={wrapperRef}
        className="relative h-[100svh] min-h-[620px] w-full md:h-screen md:min-h-0"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <footer className="cinematic-footer-wrapper fixed bottom-0 left-0 flex h-[100svh] min-h-[620px] w-full flex-col justify-between overflow-hidden bg-black !text-white md:h-screen md:min-h-0">
          <AnimatedGradientBackground
            Breathing
            animationSpeed={0.018}
            breathingRange={6}
            containerClassName="pointer-events-none z-0 opacity-80"
            gradientColors={[
              "#050505",
              "#0A0A0A",
              "#2979FF",
              "#FF80AB",
              "#FF6D00",
              "#FFD600",
              "#00E676",
              "#3D5AFE",
            ]}
            gradientStops={[26, 42, 56, 66, 76, 84, 92, 100]}
            isActive={isInView}
            startingGap={115}
            topOffset={18}
          />
          <div className="pointer-events-none absolute inset-0 z-0 bg-black/45" />
          <div className="footer-aurora pointer-events-none absolute left-1/2 top-1/2 z-0 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px]" />
          <div className="footer-bg-grid pointer-events-none absolute inset-0 z-0" />

          <div
            ref={giantTextRef}
            className="footer-giant-bg-text pointer-events-none absolute -bottom-[5vh] left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap"
          >
            JONAS
          </div>

          <div className="absolute left-0 top-8 z-10 w-full -rotate-2 scale-110 overflow-hidden border-y border-white/10 bg-black/70 py-3 shadow-2xl backdrop-blur-md md:top-12 md:py-4">
            <div className="flex w-max animate-footer-scroll-marquee text-xs font-bold uppercase tracking-[0.3em] text-white/55 md:text-sm">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          <div className="relative z-10 mx-auto mt-16 flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 md:mt-20 md:px-6">
            <h2
              ref={headingRef}
              className="footer-text-glow mb-7 text-center text-4xl font-black tracking-tighter sm:text-5xl md:mb-12 md:text-8xl"
            >
              Ready to automate?
            </h2>

            <div
              ref={linksRef}
              className="flex w-full flex-col items-center gap-4 md:gap-6"
            >
              <div className="flex w-full flex-col items-center justify-center gap-3 min-[390px]:flex-row md:flex-wrap md:gap-4">
                <MagneticButton
                  as="a"
                  href="#services"
                  className="footer-glass-pill flex h-12 w-[168px] items-center justify-center gap-3 rounded-full px-5 text-sm font-bold text-white md:h-auto md:w-auto md:px-10 md:py-5 md:text-base"
                >
                  Explore services
                </MagneticButton>

                <BookCallLiquidButton href="#book-call" />
              </div>

              <div className="mt-1 flex w-full flex-wrap justify-center gap-2 md:mt-2 md:gap-6">
                <MagneticButton
                  as="a"
                  href="#hero"
                  className="footer-glass-pill rounded-full px-4 py-2.5 text-xs font-medium text-white/70 hover:text-white md:px-6 md:py-3 md:text-sm"
                >
                  Home
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="/portfolio#work"
                  className="footer-glass-pill rounded-full px-4 py-2.5 text-xs font-medium text-white/70 hover:text-white md:px-6 md:py-3 md:text-sm"
                >
                  Work
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#compliance"
                  className="footer-glass-pill rounded-full px-4 py-2.5 text-xs font-medium text-white/70 hover:text-white md:px-6 md:py-3 md:text-sm"
                >
                  Compliance
                </MagneticButton>
              </div>
            </div>
          </div>

          <div className="relative z-20 flex w-full flex-col items-center justify-between gap-3 px-5 pb-[max(1rem,env(safe-area-inset-bottom))] md:flex-row md:gap-6 md:px-12 md:pb-8">
            <div className="order-2 text-center text-[9px] font-semibold uppercase tracking-widest text-white/50 md:order-1 md:text-left md:text-xs">
              © 2026 Jonas Alfonso. All rights reserved.
            </div>

            <div className="order-1 flex items-center gap-3 md:order-2">
              <MagneticButton
                as="a"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-glass-pill flex h-11 w-11 items-center justify-center rounded-full text-white/80 hover:text-white md:h-12 md:w-12"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-5" />
              </MagneticButton>
              <MagneticButton
                as="a"
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="footer-glass-pill flex h-11 w-11 items-center justify-center rounded-full text-white/80 hover:text-white md:h-12 md:w-12"
                aria-label="WhatsApp"
              >
                <MessageCircleMore className="size-5" />
              </MagneticButton>
            </div>

            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="footer-glass-pill group absolute right-5 bottom-[max(1rem,env(safe-area-inset-bottom))] order-3 flex h-11 w-11 items-center justify-center rounded-full text-white/80 hover:text-white md:static md:h-12 md:w-12"
              aria-label="Back to top"
            >
              <svg
                className="h-5 w-5 transform transition-transform duration-300 group-hover:-translate-y-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
