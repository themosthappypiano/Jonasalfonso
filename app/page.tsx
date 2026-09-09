import dynamic from "next/dynamic";
import HeroSection from "@/components/custom/HeroSection";

const HeroSummarySection = dynamic(
  () =>
    import("@/components/custom/HeroSummarySection").then(
      (mod) => mod.HeroSummarySection,
    ),
  { loading: () => <SectionPlaceholder /> },
);

const BentoSection = dynamic(
  () =>
    import("@/components/bentoSection/BentoSection").then(
      (mod) => mod.BentoSection,
    ),
  { loading: () => <SectionPlaceholder /> },
);

const ComplianceSection = dynamic(
  () => import("@/components/custom/ComplianceSection"),
  { loading: () => <SectionPlaceholder /> },
);

const AgencySystemsSection = dynamic(
  () =>
    import("@/components/custom/AgencySystemsSection").then(
      (mod) => mod.AgencySystemsSection,
    ),
  { loading: () => <SectionPlaceholder /> },
);

import { BookCallLiquidButton } from "@/components/ui/button-1";

const ScrollBand = dynamic(() =>
  import("@/components/custom/ScrollBand").then((mod) => mod.ScrollBand),
);

const BookCallSection = dynamic(() =>
  import("@/components/custom/BookCallSection").then(
    (mod) => mod.BookCallSection,
  ),
);

const FooterSection = dynamic(
  () =>
    import("@/components/custom/FooterSection").then(
      (mod) => mod.FooterSection,
    ),
  { loading: () => <SectionPlaceholder /> },
);

function SectionPlaceholder() {
  return <div aria-hidden="true" className="min-h-[40vh]" />;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section id="hero">
        <HeroSection />
      </section>

      <HeroSummarySection />

      <section className="flex justify-center bg-black py-12">
        <BookCallLiquidButton
          href="/portfolio"
          label="View the work"
          variant="yellow"
        />
      </section>

      <ScrollBand />

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
