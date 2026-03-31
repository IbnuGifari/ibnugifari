import {
  SiPython,
  SiPandas,
  SiScikitlearn,
  SiGooglebigquery,
  SiDbt,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
  SiGithub,
  SiExpo,
} from "react-icons/si";

import { FaDatabase } from "react-icons/fa";

export interface TechItem {
  name: string;
  category: "data" | "dev" | "cloud";
  icon: React.ElementType;
}

export const techStack: TechItem[] = [
  // Data
  { name: "Python", category: "data", icon: SiPython },
  { name: "SQL", category: "data", icon: FaDatabase },
  { name: "Pandas", category: "data", icon: SiPandas },
  { name: "Scikit-learn", category: "data", icon: SiScikitlearn },
  // { name: "Looker Studio", category: "data", icon: FaDatabase }, // fallback
  { name: "BigQuery", category: "data", icon: SiGooglebigquery },
  { name: "dbt", category: "data", icon: SiDbt },

  // Dev
  { name: "React", category: "dev", icon: SiReact },
  { name: "Next.js", category: "dev", icon: SiNextdotjs },
  { name: "React Native", category: "dev", icon: SiReact },
  { name: "TypeScript", category: "dev", icon: SiTypescript },
  { name: "Tailwind CSS", category: "dev", icon: SiTailwindcss },

  // Cloud / Infra
  { name: "Firebase", category: "cloud", icon: SiFirebase },
  { name: "Git & GitHub", category: "cloud", icon: SiGithub },
  { name: "Expo", category: "cloud", icon: SiExpo },
];
