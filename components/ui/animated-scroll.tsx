"use client";

import type { CSSProperties, ReactNode } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface ScrollAdventurePage {
  leftContent?: ReactNode;
  rightContent?: ReactNode;
}

interface ScrollAdventureProps {
  className?: string;
  pages: ScrollAdventurePage[];
}

const animationTime = 1000;

export default function ScrollAdventure({
  className,
  pages,
}: ScrollAdventureProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const currentPageRef = useRef(1);
  const scrolling = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pageCount = pages.length;

  const goToPage = useCallback(
    (page: number) => {
      const nextPage = Math.min(Math.max(1, page), pageCount);

      currentPageRef.current = nextPage;
      setCurrentPage(nextPage);
    },
    [pageCount],
  );

  const navigateUp = useCallback(() => {
    if (currentPageRef.current > 1) {
      goToPage(currentPageRef.current - 1);
    }
  }, [goToPage]);

  const navigateDown = useCallback(() => {
    if (currentPageRef.current < pageCount) {
      goToPage(currentPageRef.current + 1);
    }
  }, [goToPage, pageCount]);

  const isSectionAligned = useCallback(() => {
    const container = containerRef.current;
    if (!container) return false;

    const rect = container.getBoundingClientRect();

    return rect.top <= 8 && rect.bottom >= window.innerHeight - 8;
  }, []);

  const alignSection = useCallback(
    (page: number) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();

      window.scrollTo({
        behavior: "auto",
        top: window.scrollY + rect.top,
      });
      goToPage(page);
    },
    [goToPage],
  );

  const lockNavigation = useCallback(() => {
    scrolling.current = true;
    window.setTimeout(() => {
      scrolling.current = false;
    }, animationTime);
  }, []);

  const processWheel = useCallback(
    (deltaY: number, preventDefault: () => void) => {
      const page = currentPageRef.current;

      const wantsNext = deltaY > 0;
      const wantsPrevious = deltaY < 0;
      const canGoNext = wantsNext && page < pageCount;
      const canGoPrevious = wantsPrevious && page > 1;

      if (!canGoNext && !canGoPrevious) return;

      if (scrolling.current) {
        preventDefault();
        return;
      }

      preventDefault();
      alignSection(page);
      lockNavigation();

      if (canGoNext) navigateDown();
      if (canGoPrevious) navigateUp();
    },
    [alignSection, lockNavigation, navigateDown, navigateUp, pageCount],
  );

  useEffect(() => {
    const handleWindowWheel = (event: globalThis.WheelEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const sectionIsVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (!sectionIsVisible) return;

      const scrollingDown = event.deltaY > 0;
      const scrollingUp = event.deltaY < 0;
      const page = currentPageRef.current;
      const hasReachedTop = rect.top <= 8 && rect.bottom > 8;
      const shouldTrapDown = scrollingDown && hasReachedTop && page < pageCount;
      const shouldTrapUp = scrollingUp && hasReachedTop && page > 1;

      if (!shouldTrapDown && !shouldTrapUp) return;

      if (!isSectionAligned()) {
        event.preventDefault();
        alignSection(page);
      }

      processWheel(event.deltaY, () => event.preventDefault());
    };

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (!isSectionAligned() || scrolling.current) return;

      if (event.key === "ArrowUp" && currentPageRef.current > 1) {
        event.preventDefault();
        lockNavigation();
        navigateUp();
      }

      if (event.key === "ArrowDown" && currentPageRef.current < pageCount) {
        event.preventDefault();
        lockNavigation();
        navigateDown();
      }
    };

    window.addEventListener("wheel", handleWindowWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWindowWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    alignSection,
    isSectionAligned,
    lockNavigation,
    navigateDown,
    navigateUp,
    pageCount,
    processWheel,
  ]);

  const handleDotClick = (pageNumber: number) => {
    if (scrolling.current) {
      return;
    }

    lockNavigation();
    goToPage(pageNumber);
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-black text-white shadow-[0_24px_80px_rgba(0,0,0,0.28)] outline-none md:h-screen",
        className,
      )}
      ref={containerRef}
    >
      {pages.map((page, index) => {
        const pageNumber = index + 1;
        const isActive = currentPage === pageNumber;
        const leftTransform = isActive ? "translateY(0)" : "translateY(100%)";
        const rightTransform = isActive ? "translateY(0)" : "translateY(-100%)";

        return (
          <div
            className="relative border-b border-white/10 last:border-b-0 md:absolute md:inset-0 md:border-0"
            key={pageNumber}
          >
            <div
              className="relative h-auto min-h-[360px] w-full md:absolute md:top-0 md:left-0 md:h-full md:min-h-0 md:w-1/2 md:transition-transform md:duration-1000"
              style={{ "--desktop-transform": leftTransform } as CSSProperties}
            >
              <div className="h-full w-full">{page.leftContent}</div>
            </div>

            <div
              className="relative h-auto min-h-[360px] w-full md:absolute md:top-0 md:left-1/2 md:h-full md:min-h-0 md:w-1/2 md:transition-transform md:duration-1000"
              style={{ "--desktop-transform": rightTransform } as CSSProperties}
            >
              <div className="h-full w-full">{page.rightContent}</div>
            </div>
          </div>
        );
      })}

      <div className="absolute right-4 bottom-4 z-30 hidden gap-2 md:flex">
        {Array.from({ length: pageCount }, (_, index) => {
          const pageNumber = index + 1;

          return (
            <button
              aria-label={`Show page ${pageNumber}`}
              className={cn(
                "h-2.5 w-2.5 rounded-full border border-white/60 transition-colors",
                currentPage === pageNumber ? "bg-white" : "bg-white/20",
              )}
              key={`page-dot-${pageNumber}`}
              onClick={() => handleDotClick(pageNumber)}
              type="button"
            />
          );
        })}
      </div>
    </div>
  );
}
