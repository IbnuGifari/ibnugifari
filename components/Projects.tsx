"use client";

import { useState } from "react";
import { projects, ProjectCategory } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

type FilterTab = "all" | ProjectCategory;

const tabs: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All Projects" },
  { key: "data", label: "📊 Data & Analytics" },
  { key: "dev", label: "💻 Development" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");

  const filtered =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <SectionWrapper id="projects" tint>
      <SectionHeading
        eyebrow="Work"
        title="Projects & Case Studies"
        subtitle="A selection of data, analytics, and development projects — all built with the goal of creating meaningful impact."
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === tab.key
                ? "bg-forest-700 text-white shadow-md shadow-forest-200"
                : "bg-white text-sage-600 border border-forest-100 hover:border-forest-300 hover:text-forest-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
