import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: React.ReactNode;
  description: string;
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "ibnukhairygifari@gmail.com",
    href: "mailto:ibnukhairygifari@gmail.com",
    icon: <EmailIcon />,
    description: "Best for project inquiries & opportunities",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/ibnu-khairy-algifari/",
    href: "https://www.linkedin.com/in/ibnu-khairy-algifari/",
    icon: <LinkedInIcon />,
    description: "Professional profile & recommendations",
  },
  {
    label: "GitHub",
    value: "github.com/IbnuGifari",
    href: "https://github.com/IbnuGifari",
    icon: <GitHubIcon />,
    description: "Code, projects & contributions",
  },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" tint>
      <div className="max-w-3xl mx-auto text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something meaningful."
          subtitle="I'm open to full-time roles in data analytics, BI, and sustainability tech — as well as interesting freelance projects."
          align="center"
        />

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group bg-white border border-forest-100 rounded-2xl p-5 text-left shadow-sm hover:shadow-md hover:border-forest-300 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-forest-50 border border-forest-100 flex items-center justify-center text-forest-600 mb-4 group-hover:bg-forest-100 transition-colors">
                {link.icon}
              </div>

              <p className="text-xs text-sage-500 font-body mb-0.5">
                {link.label}
              </p>
              <p className="text-sm font-medium text-forest-800 break-all mb-2">
                {link.value}
              </p>
              <p className="text-xs text-sage-400 leading-relaxed">
                {link.description}
              </p>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-forest-900 rounded-3xl px-8 py-10 text-white">
          <p className="text-forest-200 text-sm mb-2">
            Currently available for
          </p>
          <h3 className="font-display text-2xl font-semibold text-white mb-4">
            Data Analyst · BI Developer · Analytics Engineer
          </h3>
          <p className="text-forest-300 text-sm leading-relaxed max-w-md mx-auto mb-6">
            If you&apos;re working on something that sits at the intersection of
            data and impact — especially in sustainability, mobility, or urban
            tech — I&apos;d love to hear about it.
          </p>
          <a
            href="mailto:ibnu.algifari@email.com"
            className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-400 text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
          >
            Send me an email
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
        </div>
      </div>
    </SectionWrapper>
  );
}
