import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Jonas Alfonso",
  description:
    "Client systems, independent products, operational automation, and community infrastructure built by Jonas Alfonso.",
  openGraph: {
    title: "Portfolio | Jonas Alfonso",
    description:
      "AI systems, operational automation, and full-stack products built from the real workflow outward.",
    images: ["/portfolio/jonas-speaking.jpg"],
  },
};

export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
