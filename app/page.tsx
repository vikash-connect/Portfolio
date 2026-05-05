import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

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
      
      {/* Hero Section */}
      <Section className="flex flex-col items-center justify-center min-h-screen text-center relative">
        <header className="mb-12 animate-in fade-in slide-in-from-top-8 duration-1000">
          <div className="inline-block px-4 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Portfolio v1.0
          </div>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan bg-[length:200%_auto] animate-pulse-slow bg-clip-text text-transparent leading-none">
            VIKASH <br className="hidden md:block" /> PORTFOLIO
          </h1>
          <p className="text-xl md:text-2xl text-text-primary/60 max-w-2xl mx-auto font-light leading-relaxed">
            Crafting digital experiences with <span className="text-white font-medium">precision</span> and <span className="text-neon-cyan font-medium">neon</span> aesthetics.
          </p>
        </header>

        <div className="flex gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-neon-cyan transition-colors">
            View My Work
          </button>
          <button className="glass px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs border border-white/10 hover:border-white/30 transition-colors">
            Download CV
          </button>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="work" className="pt-0">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-2">SELECTED WORKS</h2>
            <p className="text-text-primary/40 uppercase tracking-[0.3em] text-xs font-bold">Project Archive 2024-2026</p>
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

      {/* Contact Section */}
      <Section id="contact" className="pb-32">
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
