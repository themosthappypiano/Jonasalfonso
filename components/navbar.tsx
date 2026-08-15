"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";
import { useCallback, useState } from "react";
import { fadeIn } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { BookCallLiquidButton } from "./ui/button-1";

interface NavbarProps {
  className?: string;
}

function Navbar({ className }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80; // Approximate navbar height
      const elementPosition = element.offsetTop - navbarHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent, sectionId: string) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        scrollToSection(sectionId);
      }
    },
    [scrollToSection],
  );

  return (
    <div className={cn("px-4 md:p-0", className)}>
      <motion.nav
        className={cn(
          "relative bg-primary backdrop-blur-sm border-b border-border shadow-sm max-w-6xl mx-auto z-50",
          !isMobileMenuOpen ? "rounded-2xl" : "rounded-t-2xl",
        )}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        aria-label="Main navigation"
      >
        <div className="absolute inset-0  bg-gradient-to-b from-white/10 to-transparent backdrop-blur-2xl pointer-events-none !rounded-2xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-secondary-foreground" />
              </div>
              <span className="text-xl font-semibold text-primary-foreground">
                Jonas Alfonso
              </span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("work")}
                onKeyDown={(e) => handleKeyDown(e, "work")}
                className="text-sm text-primary-foreground hover:text-primary transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-primary-foreground/20 focus:ring-offset-2 focus:ring-offset-primary rounded-sm px-2 py-1"
                aria-label="Navigate to Selected Work section"
              >
                Work
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("community")}
                onKeyDown={(e) => handleKeyDown(e, "community")}
                className="text-sm text-primary-foreground hover:text-primary transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-primary-foreground/20 focus:ring-offset-2 focus:ring-offset-primary rounded-sm px-2 py-1"
                aria-label="Navigate to Community section"
              >
                Community
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("services")}
                onKeyDown={(e) => handleKeyDown(e, "services")}
                className="text-sm text-primary-foreground hover:text-primary transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-primary-foreground/20 focus:ring-offset-2 focus:ring-offset-primary rounded-sm px-2 py-1"
                aria-label="Navigate to Services section"
              >
                Services
              </Button>
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <BookCallLiquidButton className="h-11" href="#book-call" />
            </div>

            {/* Mobile menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="text-primary-foreground hover:bg-primary-foreground/10"
                aria-label={
                  isMobileMenuOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 z-[100] -mt-1 "
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-primary border-t border-border rounded-b-2xl shadow-2xl">
                <div className="absolute inset-0 bg-primary rounded-b-2xl"></div>
                <div className="relative z-10">
                  <Button
                    onClick={() => scrollToSection("work")}
                    onKeyDown={(e) => handleKeyDown(e, "work")}
                    className="block w-full text-left px-3 py-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-primary-foreground/20 focus:ring-offset-2 focus:ring-offset-primary rounded-sm"
                    aria-label="Navigate to Selected Work section"
                  >
                    Work
                  </Button>
                  <Button
                    onClick={() => scrollToSection("community")}
                    onKeyDown={(e) => handleKeyDown(e, "community")}
                    className="block w-full text-left px-3 py-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-primary-foreground/20 focus:ring-offset-2 focus:ring-offset-primary rounded-sm"
                    aria-label="Navigate to Community section"
                  >
                    Community
                  </Button>
                  <Button
                    onClick={() => scrollToSection("services")}
                    onKeyDown={(e) => handleKeyDown(e, "services")}
                    className="block w-full text-left px-3 py-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-primary-foreground/20 focus:ring-offset-2 focus:ring-offset-primary rounded-sm"
                    aria-label="Navigate to Services section"
                  >
                    Services
                  </Button>
                  <div className="pt-4 pb-3 border-t border-border">
                    <div className="flex flex-col space-y-2 px-3">
                      <Button
                        onClick={() => scrollToSection("book-call")}
                        className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-sm"
                      >
                        Book a call
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

export default Navbar;
