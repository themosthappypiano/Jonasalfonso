import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jonasalfonso.onrender.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jonas Alfonso | AI Automation Agency",
  description:
    "AI-powered systems for chatbots, voice agents, receptionists, websites, appointment booking, lead generation, and business automation.",
  keywords: [
    "AI automation",
    "business automation",
    "AI agents",
    "workflow automation",
    "enterprise automation",
  ],
  authors: [{ name: "Jonas Alfonso" }],
  openGraph: {
    title: "Jonas Alfonso | AI Automation Agency",
    description:
      "AI-powered systems that automate operations, generate leads, and help businesses grow around the clock.",
    type: "website",
    url: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased relative")}>{children}</body>
    </html>
  );
}
