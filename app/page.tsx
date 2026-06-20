"use client";

import { BentoSection } from "@/components/bentoSection/BentoSection";
import { AgencySystemsSection } from "@/components/custom/AgencySystemsSection";
import { BookCallSection } from "@/components/custom/BookCallSection";
import ComplianceSection from "@/components/custom/ComplianceSection";
import { FooterSection } from "@/components/custom/FooterSection";
import HeroSection from "@/components/custom/HeroSection";
import { HeroSummarySection } from "@/components/custom/HeroSummarySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section id="hero">
        <HeroSection />
      </section>

      <HeroSummarySection />

      <BentoSection />

      <section id="compliance">
        <ComplianceSection />
      </section>

      <AgencySystemsSection />

      <BookCallSection />

      <FooterSection />
    </div>
  );
}
