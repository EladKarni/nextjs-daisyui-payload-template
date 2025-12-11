import Hero from '@/views/hero';
import About from '@/views/about';
import WorkExperience from '@/views/work-experience';
import Skills from '@/views/skills';
import Portfolio from '@/views/portfolio';
import Contact from '@/views/contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="resume">
        <WorkExperience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
