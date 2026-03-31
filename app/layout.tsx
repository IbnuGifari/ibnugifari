import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ibnu Algifari — Data & Sustainability",
  description:
    "Portfolio of Ibnu Khairy Algifari — Turning data into sustainable impact through analytics, BI, and purposeful development.",
  keywords: ["data science", "business analytics", "sustainability", "portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
