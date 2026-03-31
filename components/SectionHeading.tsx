interface SectionHeadingProps {
  eyebrow?: string; // small label above the title
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

/**
 * SectionHeading — consistent heading style across all sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 ${isCenter ? "text-center" : ""}`}>
      {eyebrow && (
        <p className="text-xs font-mono font-medium text-forest-600 uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest-950 leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sage-600 text-base md:text-lg leading-relaxed max-w-2xl ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
