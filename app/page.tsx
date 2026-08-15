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

const SelectedWorkSection = dynamic(
  () =>
    import("@/components/custom/SelectedWorkSection").then(
      (mod) => mod.SelectedWorkSection,
    ),
  { loading: () => <SectionPlaceholder /> },
);

import { DynamicButton } from "@/components/custom/DynamicButton";

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

      <section className="flex justify-center py-12">
        <DynamicButton href="/portfolio">View the work</DynamicButton>
      </section>

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
