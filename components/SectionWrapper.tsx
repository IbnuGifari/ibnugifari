import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Tint the section background for visual rhythm */
  tint?: boolean;
}

/**
 * SectionWrapper — wraps every section with consistent vertical rhythm,
 * max-width, and optional background tint for visual alternation.
 */
export default function SectionWrapper({
  id,
  children,
  className = "",
  tint = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${tint ? "bg-forest-50/60" : "bg-transparent"} ${className}`}
    >
      <div className="section-container">{children}</div>
    </section>
  );
}
