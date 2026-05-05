import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <Section className="flex flex-col items-center justify-center min-h-screen text-center">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="glass p-8 rounded-3xl border border-white/5 hover:border-neon-cyan/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-cyan/10 blur-3xl -mr-16 -mt-16 group-hover:bg-neon-cyan/20 transition-colors" />
            <h3 className="text-2xl font-bold mb-4 text-neon-cyan group-hover:drop-shadow-[0_0_8px_rgba(0,245,255,0.8)] relative z-10">Typography</h3>
            <p className="text-text-primary/70 relative z-10 leading-relaxed">
              Headings in Space Grotesk. Body in Inter. A perfect balance of futuristic and professional.
            </p>
          </div>
          
          <div className="glass p-8 rounded-3xl border border-white/5 hover:border-neon-purple/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 blur-3xl -mr-16 -mt-16 group-hover:bg-neon-purple/20 transition-colors" />
            <h3 className="text-2xl font-bold mb-4 text-neon-purple group-hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.8)] relative z-10">Glassmorphism</h3>
            <p className="text-text-primary/70 relative z-10 leading-relaxed">
              Layered frosted glass effects with subtle borders and deep backdrop blurs for a premium feel.
            </p>
          </div>

          <div className="glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl -mr-16 -mt-16 group-hover:bg-white/10 transition-colors" />
            <h3 className="text-2xl font-bold mb-4 text-text-primary group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] relative z-10">Motion</h3>
            <p className="text-text-primary/70 relative z-10 leading-relaxed">
              Fluid background blobs and micro-interactions that make the interface feel alive and responsive.
            </p>
          </div>
        </div>
      </Section>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-sm tracking-widest uppercase opacity-40">
          Built with Next.js & Tailwind CSS 4
        </p>
      </footer>
    </>
  );
}
