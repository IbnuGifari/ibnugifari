import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import GreenzyHighlight from "@/components/GreenzyHighlight";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/**
 * Home — root page that composes all portfolio sections.
 *
 * Section order:
 *   Hero → About → Projects → Greenzy Spotlight →
 *   Skills → Experience → Contact → Footer
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9faf7]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <GreenzyHighlight />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
