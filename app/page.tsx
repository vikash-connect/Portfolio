import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import FeaturedProject from "@/sections/FeaturedProject";
import OtherProjects from "@/sections/OtherProjects";
import Internship from "@/sections/Internship";
import Achievements from "@/sections/Achievements";


export default function Home() {

  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Featured Project Section */}
        <FeaturedProject />

        {/* Other Projects Section */}
        <OtherProjects />

        {/* Internship Section */}
        <Internship />

        {/* Achievements & Events Section */}
        <Achievements />


        {/* Contact Section */}
        <Section id="contact" className="py-24 border-t border-white/5 pb-32">
          <div className="glass p-12 md:p-24 rounded-[3rem] border border-white/5 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 pointer-events-none" />
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8 relative z-10">
              START A <span className="text-neon-cyan">PROJECT?</span>
            </h2>
            <p className="text-xl text-text-primary/60 max-w-xl mx-auto mb-12 relative z-10">
              I'm currently available for freelance work and full-time positions. Let's build something extraordinary.
            </p>
            <a 
              href="mailto:contact@vikash.dev"
              className="inline-block bg-gradient-to-r from-neon-cyan to-neon-purple p-[1px] rounded-full group transition-all duration-500 hover:scale-105 relative z-10"
            >
              <div className="bg-[#0B0F19] px-12 py-5 rounded-full group-hover:bg-transparent transition-colors">
                <span className="text-white font-bold uppercase tracking-widest text-sm">Say Hello</span>
              </div>
            </a>
          </div>
        </Section>
      </main>

      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm tracking-widest uppercase opacity-40">
            © 2026 Vikash. Built with Next.js & Tailwind
          </p>
          <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
            <a href="#" className="hover:text-neon-cyan">Twitter</a>
            <a href="#" className="hover:text-neon-cyan">GitHub</a>
            <a href="#" className="hover:text-neon-cyan">LinkedIn</a>
          </div>
        </div>
      </footer>
    </>
  );
}
