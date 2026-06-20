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
      className="fixed inset-0 z-[999] overflow-y-auto bg-black/80 px-4 py-6 text-white backdrop-blur-md md:px-8"
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
        className="fixed top-5 right-5 z-[1000] flex size-11 items-center justify-center rounded-full border border-white/15 bg-black text-white transition-colors hover:bg-white hover:text-black"
        onClick={close}
        type="button"
      >
        <X className="size-5" />
      </button>

      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-7xl gap-8 rounded-3xl border border-white/10 bg-black px-5 py-10 shadow-2xl shadow-black/60 md:px-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/45">
            Ready to book a call
          </p>
          <h2
            className="max-w-xl text-4xl font-semibold leading-tight md:text-5xl"
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

        <div className="h-[720px] overflow-hidden rounded-2xl border border-white/10 bg-white shadow-2xl shadow-black/40">
          <CalInlineEmbed
            calLink="jonas-alfonso-ohn6ow/15min"
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  );
}
