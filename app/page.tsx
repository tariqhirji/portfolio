import Navbar from "@/components/Navbar";
import Hero from "@/screens/Hero";
import Experience from "@/screens/Experience";
import Skills from "@/screens/Skills";
import Projects from "@/screens/Projects";
import About from "@/screens/About";
import Contact from "@/screens/Contact";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}
