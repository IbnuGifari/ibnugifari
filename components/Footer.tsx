export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-forest-100 bg-white py-8">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-sage-400 font-body">
        <p>
          © {year}{" "}
          <span className="text-forest-700 font-medium">Ibnu Algifari</span>.
          Built with Next.js & Tailwind CSS.
        </p>
        <p className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-forest-400 animate-pulse-slow" />
          Turning data into sustainable impact 🌱
        </p>
      </div>
    </footer>
  );
}
