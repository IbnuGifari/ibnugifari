// ─── Types ───────────────────────────────────────────────────────────────────

export type ProjectCategory = "data" | "dev";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  impact: string;
  category: ProjectCategory;
  highlight?: boolean; // marks featured projects
  link?: string;
}

// ─── Projects Data ────────────────────────────────────────────────────────────

export const projects: Project[] = [
  // ── Data / Analytics ──
  {
    id: "greenzy-analytics",
    title: "Carbon Footprint Analytics Engine",
    description:
      "Built the analytics backbone of Greenzy — a mobile app that tracks individual carbon footprints. Designed data pipelines that translate daily habits (food, transport, energy) into CO₂ equivalents with personalized reduction insights.",
    techStack: ["Python", "Pandas", "Firebase", "Data Modeling"],
    impact:
      "Helps users visualize their environmental impact and take measurable steps toward a lower-carbon lifestyle.",
    category: "data",
    highlight: true,
  },
  {
    id: "geospatial-clustering-needs",
    title: "Geospatial Clustering for Regional Infrastructure Needs",
    description:
      "Applied K-Means, hierarchical clustering, and DBSCAN on Indonesian subdistricts across 2 provonces to plot regionals' infrastructure needs.",
    techStack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    impact:
      "Focusing government's spending to more urgents regional developments.",
    category: "data",
    link: "https://ibnugifari.github.io/facility-cluster-map",
  },
  {
    id: "bi-dashboard",
    title: "Business Intelligence Dashboard",
    description:
      "Designed and built an interactive BI dashboard aggregating KPIs across sales, operations, and customer data. Enabled non-technical stakeholders to self-serve insights without writing a single query.",
    techStack: ["SQL", "Looker Studio", "Python", "BigQuery"],
    impact:
      "Reduced reporting time by ~70% and improved decision-making speed for the operations team.",
    category: "data",
  },

  // ── Development ──
  {
    id: "greenzy-app",
    title: "Greenzy — Carbon Tracker App",
    description:
      "Co-developed Greenzy, a cross-platform mobile app that gamifies carbon footprint reduction. Users log daily activities, receive personalized tips, and track progress on sustainability goals.",
    techStack: ["React Native", "Firebase", "Expo", "TypeScript"],
    impact:
      "Designed to make sustainable living accessible and engaging for everyday users through habit tracking and gentle nudges.",
    category: "dev",
    highlight: true,
  },
  {
    id: "smart-mobility",
    title: "Smart Mobility Web Platform",
    description:
      "Built a web platform visualizing urban mobility patterns and public transit data to support city planners in identifying transit gaps and optimizing routes.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Mapbox", "REST API"],
    impact:
      "Supports data-driven decisions for more efficient and equitable urban transport planning.",
    category: "dev",
  },
  {
    id: "intern-goto",
    title: "GoTo Internal Analytics Tool",
    description:
      "During internship at GoTo, contributed to building an internal data tool that automated reporting workflows and surfaced operational metrics for logistics teams.",
    techStack: ["SQL", "Python", "Looker", "dbt"],
    impact:
      "Freed up ~5 hours/week of analyst time by automating recurring report generation.",
    category: "data",
  },
];
