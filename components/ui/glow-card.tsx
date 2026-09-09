"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Pointer-tracked glow border, adapted from 21st.dev "Glow Card Grid" (id 25283).
 * The catalog original renders avatars; this variant is content-agnostic so it can
 * wrap real copy. A single pointermove listener on the grid drives every card via
 * CSS custom properties (cheaper than one listener per card).
 */
export function GlowGrid({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Coarse pointers (phones) have no hover, so skip the work entirely.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      const grid = gridRef.current;
      if (!grid) return;

      for (const card of grid.querySelectorAll<HTMLElement>(
        "[data-slot='glow-card']",
      )) {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--gx", `${x}%`);
        card.style.setProperty("--gy", `${y}%`);
      }
    };

    document.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    return () => document.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div ref={gridRef} className={cn("grid w-full", className)} {...props}>
      {children}
    </div>
  );
}

export function GlowCard({
  className,
  children,
  accent = "#ada332",
  ...props
}: React.ComponentPropsWithoutRef<"div"> & { accent?: string }) {
  return (
    <div
      data-slot="glow-card"
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-colors duration-300 hover:border-white/20",
        className,
      )}
      style={{ "--accent": accent } as React.CSSProperties}
      {...props}
    >
      {/* Glow that tracks the pointer. Hidden until hover so idle cards stay flat. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--gx,50%) var(--gy,50%), color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
