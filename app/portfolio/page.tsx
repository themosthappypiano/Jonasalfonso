import { CinematicPortfolioHero } from "@/components/custom/CinematicPortfolioHero";
import { GalleryCTASection } from "@/components/custom/GalleryCTASection";
import { PortfolioCaseStudiesSection } from "@/components/custom/PortfolioCaseStudiesSection";
import { ProjectShowcaseSection } from "@/components/custom/ProjectShowcaseSection";
import { TestimonialMarqueeSection } from "@/components/custom/TestimonialMarqueeSection";

export default function HomePage() {
  return (
    <main className="overflow-clip bg-[#070907]">
      <CinematicPortfolioHero />
      <ProjectShowcaseSection />
      <PortfolioCaseStudiesSection />
      <TestimonialMarqueeSection />
      <GalleryCTASection />
      <footer className="border-t border-white/10 bg-[#070907] px-5 py-8 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">Jonas Alfonso · Oléo</p>
            <p className="mt-1">
              AI systems builder and full-stack operator in Barcelona.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              className="transition-colors hover:text-white"
              href="mailto:jonas@jonasalfonso.com"
            >
              Email
            </a>
            <a
              className="transition-colors hover:text-white"
              href="https://www.linkedin.com/in/jonas-alfonso/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="transition-colors hover:text-white"
              href="https://github.com/themosthappypiano"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a className="transition-colors hover:text-white" href="#top">
              Back to top
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
