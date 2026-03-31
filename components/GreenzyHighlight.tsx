import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

/**
 * CarbonBar — visual representation of carbon reduction
 */
function CarbonBar({
  label,
  value,
  max,
  color = "forest",
}: {
  label: string;
  value: number;
  max: number;
  color?: string;
}) {
  const pct = (value / max) * 100;
  return (
    <div>
      <div className="flex justify-between text-xs text-forest-300 mb-1.5 font-body">
        <span>{label}</span>
        <span>{value} kg CO₂</span>
      </div>
      <div className="h-2 bg-forest-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r from-forest-400 to-forest-300`}
          style={{ width: `${pct}%`, transition: "width 1.5s ease-out" }}
        />
      </div>
    </div>
  );
}

/**
 * Mock phone mockup for Greenzy
 */
function PhoneMockup() {
  return (
    <div className="relative flex justify-center">
      {/* Phone outer frame */}
      <div className="relative w-52 bg-forest-950 rounded-[2.5rem] p-2 shadow-2xl shadow-forest-950/50">
        {/* Screen */}
        <div className="bg-forest-900 rounded-[2rem] overflow-hidden">
          {/* Status bar */}
          <div className="bg-forest-800 px-4 pt-3 pb-2 flex justify-between items-center">
            <span className="text-forest-300 text-[9px] font-mono">9:41</span>
            <div className="w-16 h-3 bg-forest-950 rounded-full" />
            <span className="text-forest-300 text-[9px]">●●●</span>
          </div>

          {/* App UI */}
          <div className="px-4 py-4 space-y-4">
            {/* Header */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-forest-500 rounded-full flex items-center justify-center text-sm">
                🌿
              </div>
              <div>
                <p className="text-white text-[10px] font-semibold">Greenzy</p>
                <p className="text-forest-400 text-[8px]">Your carbon tracker</p>
              </div>
            </div>

            {/* Score circle */}
            <div className="flex justify-center py-2">
              <div className="w-24 h-24 rounded-full border-4 border-forest-500 flex flex-col items-center justify-center bg-forest-800">
                <span className="text-white text-xl font-bold font-display">4.2</span>
                <span className="text-forest-400 text-[8px]">tons CO₂/yr</span>
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-2.5">
              <CarbonBar label="🚗 Transport" value={1.8} max={5} />
              <CarbonBar label="🍽️ Food" value={1.4} max={5} />
              <CarbonBar label="⚡ Energy" value={1.0} max={5} />
            </div>

            {/* Tip card */}
            <div className="bg-forest-700/50 rounded-xl p-2.5 border border-forest-600/50">
              <p className="text-forest-200 text-[8px] leading-relaxed">
                💡 <strong>Tip:</strong> Take public transit twice a week to
                reduce your footprint by 0.3 tons/yr.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-forest-400/10 rounded-full blur-2xl -z-10 scale-110" />
    </div>
  );
}

export default function GreenzyHighlight() {
  return (
    <SectionWrapper id="greenzy">
      <div className="bg-forest-950 rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left: content */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 bg-forest-800 text-forest-300 text-xs font-mono font-medium px-3 py-1.5 rounded-full mb-6 w-fit border border-forest-700">
              🌿 Sustainability Spotlight
            </div>

            <SectionHeading
              eyebrow=""
              title="Greenzy"
              subtitle="A mobile app that turns your daily choices into CO₂ numbers — then helps you reduce them."
            />

            {/* Override subtitle color for dark bg */}
            <style>{`
              #greenzy .subtitle-override { color: #86efac; }
            `}</style>

            <p className="text-forest-300 text-sm leading-relaxed mb-8">
              Greenzy is my most purpose-driven project. I built the analytics
              engine behind it — a system that takes inputs about what you eat,
              how you travel, and how you use energy, then translates them into
              real CO₂ equivalent numbers with personalized reduction paths.
            </p>

            {/* Feature list */}
            <ul className="space-y-3 mb-8">
              {[
                "Personal carbon footprint tracking across 3 lifestyle categories",
                "Habit-based recommendations with quantified impact",
                "Progress dashboard with weekly comparisons",
                "Gamified goals to make sustainability feel achievable",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-forest-200"
                >
                  <span className="text-forest-400 mt-0.5 flex-shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {["React Native", "Firebase", "Expo", "Python", "TypeScript"].map(
                (t) => (
                  <span
                    key={t}
                    className="text-xs font-mono bg-forest-800 text-forest-300 border border-forest-700 px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="bg-gradient-to-br from-forest-900 to-forest-950 flex items-center justify-center py-16 px-8">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
