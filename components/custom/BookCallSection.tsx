"use client";

import { X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { CalInlineEmbed } from "@/components/ui/cal-inline-embed";

export function BookCallSection() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const syncHash = () => setIsOpen(window.location.hash === "#book-call");

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
    if (window.location.hash === "#book-call") {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search,
      );
    }
  }, []);

  if (!isOpen) return null;

  return (
    <section
      aria-modal="true"
      className="fixed inset-0 z-[999] overflow-y-auto bg-black/80 px-2 py-2 text-white backdrop-blur-md sm:px-4 sm:py-6 md:px-8"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          close();
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          close();
        }
      }}
      role="dialog"
      tabIndex={-1}
    >
      <button
        aria-label="Close booking"
        className="fixed top-[max(0.75rem,env(safe-area-inset-top))] right-3 z-[1000] flex size-11 items-center justify-center rounded-full border border-white/15 bg-black text-white transition-colors hover:bg-white hover:text-black sm:top-5 sm:right-5"
        onClick={close}
        type="button"
      >
        <X className="size-5" />
      </button>

      <div className="mx-auto grid min-h-[calc(100svh-1rem)] max-w-7xl gap-6 rounded-2xl border border-white/10 bg-black px-4 py-16 shadow-2xl shadow-black/60 sm:min-h-[calc(100vh-3rem)] sm:gap-8 sm:rounded-3xl sm:px-5 sm:py-10 md:px-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
            Ready to book a call
          </p>
          <h2
            className="max-w-xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl"
            id="book-call-title"
          >
            Pick a time that works.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-white/60">
            Choose a 15-minute slot and I’ll walk through what you want to
            automate, where the bottlenecks are, and what kind of AI system
            makes sense.
          </p>
        </div>

        <div className="h-[620px] overflow-hidden rounded-xl border border-white/10 bg-white shadow-2xl shadow-black/40 sm:h-[720px] sm:rounded-2xl">
          <CalInlineEmbed
            calLink="jonas-alfonso-ohn6ow/15min"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
