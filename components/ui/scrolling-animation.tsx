"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const modelLogos = [
  {
    alt: "OpenAI",
    description: "Use the best model for every task.",
    label: "Best-fit AI routing",
    monochrome: true,
    src: "/model-logos/openai.svg",
  },
  {
    alt: "Claude",
    description: "Strong reasoning for complex business workflows.",
    label: "Powerful trained AI",
    src: "/model-logos/claude-color.svg",
  },
  {
    alt: "Gemini",
    description: "Connect everyday tools into one automated system.",
    label: "Integrates with your tools",
    src: "/model-logos/gemini-color.svg",
  },
  {
    alt: "Mistral",
    description: "Track usage, cost, and performance across runs.",
    label: "Smart token tracking",
    src: "/model-logos/mistral-color.svg",
  },
  {
    alt: "OpenRouter",
    description: "Govern access, logs, and compliance boundaries.",
    label: "Security & compliance",
    monochrome: true,
    src: "/model-logos/openrouter.svg",
  },
  {
    alt: "Ollama",
    description: "Deploy private and open-source models when needed.",
    label: "Open-source models",
    monochrome: true,
    src: "/model-logos/ollama.svg",
  },
  {
    alt: "n8n",
    description: "Build reliable automations around your AI agents.",
    label: "AI automation expert",
    src: "/model-logos/n8n-color.svg",
  },
  {
    alt: "Nous Research",
    description: "Fine-tuned model choices for specialist workflows.",
    label: "Custom model strategy",
    monochrome: true,
    src: "/model-logos/nousresearch.svg",
  },
];

export function ScrollingAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleScroll();
    handleResize();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animationProgress = Math.min(scrollY / 500, 1);
  const expandRadius = animationProgress * Math.min(windowWidth * 0.31, 245);
  const ringOpacity = Math.min(animationProgress * 1.7, 1);
  const centerOpacity = Math.min(
    Math.max((animationProgress - 0.04) / 0.18, 0),
    1,
  );

  return (
    <div className="pointer-events-none absolute left-1/2 top-[48%] z-10 h-[min(82vw,620px)] w-[min(82vw,620px)] -translate-x-1/2 -translate-y-1/2">
      <div
        className="absolute inset-0 rounded-full border border-[#E1E0CC]/15 transition-opacity duration-500"
        style={{ opacity: scrollY > 300 ? ringOpacity : 0 }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-[min(62vw,470px)] w-[min(62vw,470px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E1E0CC]/20 transition-opacity duration-500"
        style={{ opacity: scrollY > 120 ? ringOpacity : 0 }}
      />

      <div
        className="absolute left-1/2 top-1/2 h-[min(42vw,320px)] w-[min(42vw,320px)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#E1E0CC]/25 bg-black/5 shadow-[0_0_80px_rgba(225,224,204,0.12)] backdrop-blur-[1px] transition-opacity duration-300"
        style={{ opacity: centerOpacity }}
      />

      {modelLogos.map(({ alt, description, label, monochrome, src }, index) => {
        const angle = (index / modelLogos.length) * Math.PI * 2;
        const itemProgress = Math.min(
          Math.max((animationProgress - index * 0.035) / 0.2, 0),
          1,
        );

        return (
          <div
            className="group pointer-events-auto absolute left-1/2 top-1/2 flex h-14 w-14 items-center justify-center rounded-xl border border-[#E1E0CC]/75 bg-black/45 p-3 shadow-[0_16px_42px_rgba(0,0,0,0.45)] backdrop-blur-md transition-[border-color,box-shadow,opacity,transform] duration-300 ease-out hover:border-[#E1E0CC] hover:shadow-[0_18px_54px_rgba(225,224,204,0.22)] sm:h-20 sm:w-20 sm:p-4 lg:h-24 lg:w-24 lg:p-5"
            key={src}
            style={{
              opacity: itemProgress,
              transform: `translate(-50%, -50%) translate(${expandRadius * Math.cos(angle)}px, ${expandRadius * Math.sin(angle)}px) scale(${0.35 + itemProgress * 0.65})`,
            }}
          >
            <span className="relative block h-full w-full">
              <Image
                alt={alt}
                className={`object-contain ${monochrome ? "brightness-0 invert" : ""}`}
                draggable={false}
                fill
                sizes="(min-width: 1024px) 56px, (min-width: 640px) 48px, 32px"
                src={src}
              />
            </span>
            <span className="pointer-events-none absolute top-[calc(100%+0.75rem)] left-1/2 w-48 -translate-x-1/2 translate-y-1 rounded-md border border-[#E1E0CC]/20 bg-black/80 px-3 py-2 text-center text-[#E1E0CC] opacity-0 shadow-[0_16px_34px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="block text-[10px] font-semibold uppercase leading-tight tracking-[0.18em]">
                {label}
              </span>
              <span className="mt-1 block text-xs leading-snug text-[#E1E0CC]/70">
                {description}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function HomePage() {
  return <ScrollingAnimation />;
}
