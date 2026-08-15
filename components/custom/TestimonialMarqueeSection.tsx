"use client";

import { Quote } from "lucide-react";
import { type DraftTestimonial, draftTestimonials } from "@/lib/portfolio-data";

const MARQUEE_STYLES = `
@keyframes portfolio-testimonial-forward {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(-50%, 0, 0); }
}
@keyframes portfolio-testimonial-reverse {
  from { transform: translate3d(-50%, 0, 0); }
  to { transform: translate3d(0, 0, 0); }
}
.portfolio-testimonial-track {
  width: max-content;
  will-change: transform;
  animation: portfolio-testimonial-forward 38s linear infinite;
}
.portfolio-testimonial-track[data-reverse="true"] {
  animation-name: portfolio-testimonial-reverse;
  animation-duration: 44s;
}
.portfolio-testimonial-track:hover { animation-play-state: paused; }
@media (prefers-reduced-motion: reduce) {
  .portfolio-testimonial-track { animation-play-state: paused; }
}
`;

export function TestimonialMarqueeSection() {
  const firstRow = draftTestimonials.slice(0, 3);
  const secondRow = draftTestimonials.slice(3);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#080a08] py-24 text-white lg:py-32"
      aria-labelledby="testimonial-title"
    >
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static animation CSS controlled in source */}
      <style dangerouslySetInnerHTML={{ __html: MARQUEE_STYLES }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(74,255,141,.12),transparent_38%)]" />
      <div
        className="portfolio-grid absolute inset-0 opacity-20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#93efaf]">
              Testimonial layout preview
            </p>
            <h2
              id="testimonial-title"
              className="mt-4 text-5xl font-medium tracking-[-0.055em] sm:text-7xl"
            >
              The system should
              <span className="block font-serif font-normal italic text-[#b8f7ca]">
                earn the quote.
              </span>
            </h2>
          </div>
          <div className="lg:justify-self-end">
            <p className="max-w-xl text-base leading-7 text-white/56 lg:text-lg">
              This uses Componentry’s dual-row testimonial-marquee pattern. The
              wording below is temporary layout copy and remains visibly marked
              until each client approves a real attribution.
            </p>
            <div className="mt-5 inline-flex rounded-full border border-amber-300/35 bg-amber-300/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-200">
              Draft quotes · do not publish yet
            </div>
          </div>
        </div>
      </div>

      <p className="sr-only">
        The testimonial cards in this section are temporary draft copy and are
        not approved client testimonials.
      </p>

      <div className="relative mt-14 space-y-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <MarqueeRow items={firstRow} />
        <MarqueeRow items={secondRow} reverse />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: DraftTestimonial[];
  reverse?: boolean;
}) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden" aria-hidden="true">
      <div
        className="portfolio-testimonial-track flex gap-4 px-2"
        data-reverse={reverse}
      >
        {repeated.map((testimonial, index) => (
          <article
            key={`${testimonial.initials}-${index}`}
            className="w-[min(82vw,430px)] shrink-0 rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <Quote className="size-5 text-[#8ff0ad]" />
              <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-amber-200">
                Draft
              </span>
            </div>
            <p className="mt-7 text-lg leading-8 tracking-[-0.015em] text-white/84">
              “{testimonial.text}”
            </p>
            <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
              <div className="flex size-10 items-center justify-center rounded-full border border-[#7eed9f]/25 bg-[#153622] text-xs font-bold text-[#b7ffce]">
                {testimonial.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-white/86">
                  {testimonial.name}
                </p>
                <p className="mt-0.5 text-xs text-white/38">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
