import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: "work" | "academic";
  description: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Data Scientist Intern",
    company: "GoTo Group",
    period: "Sep 2025 - Mar 2026",
    type: "work",
    description: [
      "Contributed to building an internal analytics tool that automated recurring data reporting for logistics operations.",
      "Wrote and optimized SQL queries in BigQuery to surface operational KPIs for cross-functional teams.",
      "Collaborated with senior analysts to design dbt models for cleaner, maintainable data pipelines.",
      "Reduced manual reporting time by approximately 5 hours per week through automation workflows.",
    ],
    tags: ["SQL", "BigQuery", "dbt", "Looker", "Python"],
  },
  {
    role: "Business Analyst Intern",
    company: "Reka Cipta Solusi",
    period: "Jul 2024 - Sep 2024",
    type: "work",
    description: [
      "Translated complex IT and business processes into technical specifications, producing four comprehensive Software Design Documents (SDDs) to support capital market application implementation.",
      "Designed structured API specifications and relational database schemas to facilitate seamless data transformation and integration across departments.",
      "Mapped end-to-end BPMN workflows to identify automation opportunities and optimize operational efficiency for banking products.",
      "Coordinated with cross-functional stakeholders to ensure alignment between technical automated solutions and business requirements.",
    ],
    tags: [
      "BPMN",
      "SQL",
      "Collaboration",
      "System Design",
      "Business Analysis",
    ],
  },
  {
    role: "Teaching Assistant — Database Systems",
    company: "University",
    period: "2023 · 1 semester",
    type: "academic",
    description: [
      "Assisted in delivering lab sessions on relational database design, SQL querying, and normalization concepts.",
      "Supported 40+ students with assignments, debugging sessions, and understanding data modeling fundamentals.",
      "Graded assignments and provided structured written feedback to help students improve their query logic.",
    ],
    tags: ["SQL", "Database Design", "Teaching", "PostgreSQL"],
  },
];

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've Worked & Contributed"
        subtitle="Professional and academic experiences that shaped how I think about data, systems, and collaboration."
      />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-forest-100 hidden md:block" />

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative md:pl-16">
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 rounded-full items-center justify-center bg-white border-2 border-forest-200 shadow-sm text-xl">
                {exp.type === "work" ? "💼" : "🎓"}
              </div>

              {/* Card */}
              <div className="bg-white border border-forest-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-forest-200 transition-all duration-300">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-forest-900">
                      {exp.role}
                    </h3>
                    <p className="text-forest-600 font-medium text-sm mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-mono text-sage-500 bg-sage-50 border border-sage-100 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        exp.type === "work"
                          ? "bg-forest-50 text-forest-700 border border-forest-200"
                          : "bg-earth-50 text-earth-700 border border-earth-200"
                      }`}
                    >
                      {exp.type === "work" ? "Industry" : "Academic"}
                    </span>
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="space-y-2 mb-5">
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-sage-600 leading-relaxed"
                    >
                      <span className="text-forest-400 mt-0.5 flex-shrink-0">
                        →
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-forest-50">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono text-sage-600 bg-sage-50 border border-sage-100 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
