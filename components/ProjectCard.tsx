import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

/**
 * ProjectCard — displays a single project with title, description,
 * tech stack chips, and impact statement.
 */
export default function ProjectCard({ project }: ProjectCardProps) {
  const isHighlight = project.highlight;

  return (
    <article
      className={`relative group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isHighlight
          ? "bg-forest-900 text-white shadow-lg shadow-forest-900/20"
          : "bg-white border border-forest-100 shadow-sm hover:border-forest-200"
      }`}
    >
      {/* Highlight badge */}
      {isHighlight && (
        <span className="absolute top-4 right-4 text-xs font-medium bg-forest-500/30 text-forest-200 px-2.5 py-1 rounded-full border border-forest-500/30">
          ⭐ Featured
        </span>
      )}

      {/* Category tag */}
      <div className="mb-4">
        <span
          className={`text-xs font-mono font-medium px-3 py-1 rounded-full ${
            isHighlight
              ? "bg-forest-700/60 text-forest-200"
              : project.category === "data"
              ? "bg-forest-50 text-forest-700 border border-forest-200"
              : "bg-earth-50 text-earth-700 border border-earth-200"
          }`}
        >
          {project.category === "data" ? "📊 Data & Analytics" : "💻 Development"}
        </span>
      </div>

      {/* Title */}
      <h3
        className={`font-display text-xl font-semibold mb-3 leading-snug ${
          isHighlight ? "text-white" : "text-forest-900"
        }`}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-4 ${
          isHighlight ? "text-forest-200" : "text-sage-600"
        }`}
      >
        {project.description}
      </p>

      {/* Impact */}
      <div
        className={`flex items-start gap-2 text-sm rounded-xl p-3 mb-4 ${
          isHighlight
            ? "bg-forest-700/40 text-forest-100"
            : "bg-forest-50 text-forest-800"
        }`}
      >
        <span className="text-base flex-shrink-0">🌱</span>
        <p className="leading-relaxed">{project.impact}</p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className={`text-xs font-mono px-2.5 py-1 rounded-md ${
              isHighlight
                ? "bg-forest-800 text-forest-300 border border-forest-700"
                : "bg-sage-50 text-sage-700 border border-sage-200"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Optional link */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 text-sm font-medium mt-4 transition-colors ${
            isHighlight
              ? "text-forest-300 hover:text-white"
              : "text-forest-600 hover:text-forest-800"
          }`}
        >
          View Project
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </article>
  );
}
