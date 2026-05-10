import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";

export default function Home() {
  const projects = [
    {
      title: "Neural Interface",
      description: "A futuristic dashboard for monitoring brain-computer interface telemetry in real-time.",
      tags: ["Next.js", "Three.js", "Tailwind"],
      link: "#"
    },
    {
      title: "Cryptex Wallet",
      description: "Next-generation crypto asset management with biometric security and gasless transactions.",
      tags: ["Solidity", "React", "Ether.js"],
      link: "#"
    },
    {
      title: "Zenith OS",
      description: "A cloud-based desktop environment built for high-performance distributed computing.",
      tags: ["Rust", "Wasm", "TypeScript"],
      link: "#"
    }
  ];

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

        {/* Projects Section */}
        <Section id="projects" className="py-24 border-t border-white/5">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-2">PROJECTS</h2>
              <p className="text-text-primary/40 uppercase tracking-[0.3em] text-xs font-bold">Selected Works 2024-2026</p>
            </div>
            <div className="hidden md:block h-px bg-white/10 flex-grow mx-12 mb-4" />
            <button className="text-xs font-bold uppercase tracking-widest text-neon-cyan hover:underline transition-all">
              View All Projects
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className={`animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-${(index + 1) * 200}`}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </Section>

        {/* Internship Section */}
        <Section id="internship" className="py-24 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">EXPERIENCE</h2>
            <p className="text-text-primary/40 uppercase tracking-[0.3em] text-xs font-bold">Professional Journey</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-neon-purple">Frontend Developer Intern</h3>
                <span className="text-sm text-text-primary/40 font-bold uppercase tracking-widest">June 2025 - Present</span>
              </div>
              <p className="text-text-primary/70 mb-4">Tech Nova Solutions</p>
              <ul className="list-disc list-inside text-sm text-text-primary/60 space-y-2">
                <li>Developing high-performance user interfaces using Next.js and Tailwind CSS.</li>
                <li>Collaborating with senior developers to implement complex animations with Framer Motion.</li>
                <li>Optimizing application performance and accessibility standards.</li>
              </ul>
            </div>
          </div>
        </Section>

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
