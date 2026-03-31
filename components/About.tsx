import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const interests = [
  { icon: "📊", label: "Data Science & BI" },
  { icon: "🌿", label: "Sustainability Tech" },
  { icon: "🚌", label: "Smart Mobility" },
  { icon: "📱", label: "Mobile Development" },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <SectionHeading
            eyebrow="About Me"
            title="Data enthusiast with a purpose."
            subtitle="I believe every dataset holds a story — and the best stories are the ones that create positive change."
          />

          <div className="space-y-4 text-sage-600 leading-relaxed">
            <p>
              I&apos;m Ibnu, an Information Systems & Technology fresh graduate
              with a deep interest in{" "}
              <span className="text-forest-700 font-medium">
                data science, business analytics
              </span>
              , and building things that matter. My work sits at the
              intersection of data, technology, and sustainability.
            </p>
            <p>
              From tracking carbon footprints to analyzing mobility patterns, I
              care about applying{" "}
              <span className="text-forest-700 font-medium">
                data-driven thinking
              </span>{" "}
              to problems that have real environmental and social impact. I also
              enjoy building the tools that make that data accessible to
              everyone — not just analysts.
            </p>
            <p>
              When I&apos;m not deep in a dataset, you&apos;ll find me thinking
              about urban systems, sustainable cities, and how technology can
              help us live better with less.
            </p>
          </div>

          {/* Interest chips */}
          <div className="flex flex-wrap gap-3 mt-8">
            {interests.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 bg-forest-50 border border-forest-100 text-forest-800 text-sm font-medium px-4 py-2 rounded-full"
              >
                <span>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual card */}
        <div className="relative">
          {/* Main card */}
          <div className="bg-forest-900 rounded-3xl p-8 text-white relative overflow-hidden">
            {/* BG decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-forest-700/30 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-forest-600/20 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-forest-600/50 flex items-center justify-center text-3xl mb-6">
                🌱
              </div>
              <p className="font-display text-xl italic text-forest-100 leading-relaxed mb-6">
                &ldquo;The most powerful data tools are those that help people
                make better decisions for themselves — and for the
                planet.&rdquo;
              </p>
              <div className="pt-4 border-t border-forest-700">
                <p className="text-forest-300 text-sm font-body">
                  — Ibnu Khairy Algifari
                </p>
                <p className="text-forest-500 text-xs mt-0.5">
                  Information Systems & Technology Graduate · Jakarta
                </p>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg border border-forest-100 px-4 py-3 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-forest-100 flex items-center justify-center text-lg">
              🎓
            </div>
            <div>
              <p className="text-xs font-semibold text-forest-900">
                IS&T Graduate
              </p>
              <p className="text-xs text-sage-500">2025</p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
