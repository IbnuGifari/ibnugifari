"use client";

import { useEffect, useState } from "react";

/**
 * Leaf SVG — decorative floating element
 */
function FloatingLeaf({
  className = "",
  delay = "0s",
}: {
  className?: string;
  delay?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute opacity-20 animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      <path
        d="M20 2 C20 2 38 16 38 30 C38 41 30 50 20 50 C10 50 2 41 2 30 C2 16 20 2 20 2Z"
        fill="#16a34a"
      />
      <line
        x1="20"
        y1="10"
        x2="20"
        y2="48"
        stroke="#15803d"
        strokeWidth="1.5"
      />
      <line x1="20" y1="22" x2="30" y2="16" stroke="#15803d" strokeWidth="1" />
      <line x1="20" y1="30" x2="10" y2="24" stroke="#15803d" strokeWidth="1" />
      <line x1="20" y1="38" x2="30" y2="32" stroke="#15803d" strokeWidth="1" />
    </svg>
  );
}

/**
 * Animated number counter for the stat blurb
 */
function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center px-6 py-3 bg-white/70 backdrop-blur rounded-2xl border border-forest-100 shadow-sm">
      <span className="font-display text-2xl font-bold text-forest-700">
        {value}
      </span>
      <span className="text-xs text-sage-600 font-body mt-0.5">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Small delay so CSS animations feel intentional
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden noise-bg">
      {/* ── Background gradient blobs ── */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-forest-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-sage-200/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-earth-50/30 rounded-full blur-3xl" />
      </div>

      {/* ── Decorative floating leaves ── */}
      <FloatingLeaf className="w-16 top-24 right-[12%]" delay="0s" />
      <FloatingLeaf className="w-10 top-40 right-[22%]" delay="1.5s" />
      <FloatingLeaf className="w-12 bottom-32 left-[8%]" delay="0.8s" />
      <FloatingLeaf className="w-8 bottom-48 left-[18%]" delay="2s" />
      <FloatingLeaf className="w-20 top-1/3 right-[5%] opacity-10" delay="3s" />

      {/* ── Main content ── */}
      <div className="section-container w-full pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Status pill */}
          <div
            className={`inline-flex items-center gap-2 bg-forest-50 border border-forest-200 text-forest-700 text-xs font-medium px-4 py-1.5 rounded-full mb-8 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-forest-500 animate-pulse-slow" />
            Open to opportunities · Jakarta, ID
          </div>

          {/* Name */}
          <h1
            className={`font-display text-5xl md:text-7xl text-forest-950 leading-[1.05] mb-4 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Ibnu Khairy
            <br />
            <span className="gradient-text">Algifari</span>
          </h1>

          {/* Tagline */}
          <p
            className={`text-xl md:text-2xl font-body font-light text-sage-700 mb-6 tracking-wide transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Turning data into{" "}
            <span className="italic font-normal text-forest-600">
              sustainable impact.
            </span>
          </p>

          {/* Intro */}
          <p
            className={`text-base md:text-lg text-sage-600 font-body leading-relaxed max-w-xl mb-10 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Information Systems graduate who believes the best insights are the
            ones that leave the world a little better. I build data tools,
            analytics systems, and apps with purpose.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white font-medium px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-forest-200 hover:shadow-forest-300 hover:-translate-y-0.5"
            >
              View Projects
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white hover:bg-forest-50 text-forest-700 font-medium px-6 py-3 rounded-full border border-forest-200 transition-all duration-200 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>

          {/* Stats row */}
          <div
            className={`flex flex-wrap gap-4 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <StatBadge value="6+" label="Projects Built" />
            <StatBadge value="2+" label="Years Experience" />
            <StatBadge value="🌱" label="Sustainability Focus" />
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sage-400 animate-bounce">
        <span className="text-xs font-body tracking-widest uppercase">
          Scroll
        </span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div> */}
    </div>
  );
}
