import { techStack } from "@/data/techStack";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const categoryLabels: Record<string, string> = {
  data: "Data & Analytics",
  dev: "Development",
  cloud: "Tools & Infrastructure",
};

const categoryColors: Record<string, string> = {
  data: "bg-forest-50 text-forest-800 border-forest-200",
  dev: "bg-sage-50 text-sage-800 border-sage-200",
  cloud: "bg-earth-50 text-earth-800 border-earth-200",
};

export default function Skills() {
  const categories = ["data", "dev", "cloud"] as const;

  return (
    <SectionWrapper id="skills" tint>
      <SectionHeading
        eyebrow="Skills"
        title="Tech Stack"
        subtitle="Tools and technologies I use to build data pipelines, analytics systems, and web & mobile applications."
      />

      <div className="grid md:grid-cols-3 gap-8">
        {categories.map((cat) => {
          const items = techStack.filter((t) => t.category === cat);
          return (
            <div
              key={cat}
              className="bg-white rounded-2xl p-6 border border-forest-100 shadow-sm"
            >
              {/* Category header */}
              <h3 className="font-display text-base font-semibold text-forest-900 mb-5 flex items-center gap-2">
                <span className="w-1.5 h-5 bg-forest-500 rounded-full" />
                {categoryLabels[cat]}
              </h3>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2">
                {items.map((tech) => {
                  const Icon = tech.icon;

                  return (
                    <div
                      key={tech.name}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm cursor-default ${categoryColors[cat]}`}
                    >
                      <Icon className="text-base" />
                      <span>{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
