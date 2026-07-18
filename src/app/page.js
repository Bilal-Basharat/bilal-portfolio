import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* Step 2 will add: <Experience /> */}
    <Experience />
      {/* Step 3 will add: <Projects /> */}
    <Projects />
      {/* Step 4 will add: <Skills /> and <Certifications /> */}
      {/* Step 5 will add: <Contact /> and <Footer /> */}
    </main>
  );
}
