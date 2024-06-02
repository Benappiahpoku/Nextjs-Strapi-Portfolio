import Image from "next/image";
import { Hero } from "./components/Hero";
import { Portfolio } from "./components/Portfolio";
import { Skills } from "./components/Skills";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";

export default function Home() {
  return (
    <main>
      <section id="hero">
       <Hero />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="skills">
       <Skills />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="testimonial">
       <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
