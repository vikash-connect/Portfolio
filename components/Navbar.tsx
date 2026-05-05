import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 pointer-events-none">
      <div className="glass px-8 py-3 rounded-full flex items-center gap-8 pointer-events-auto border border-white/10 shadow-2xl">
        <div className="text-neon-cyan font-bold tracking-tighter text-xl mr-4">
          VP.
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-widest text-text-primary/60">
          <a href="#" className="hover:text-neon-cyan transition-colors">Home</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">Work</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">About</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">Contact</a>
        </div>
        <button className="bg-neon-purple/20 text-neon-purple px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-tighter border border-neon-purple/30 hover:bg-neon-purple hover:text-white transition-all duration-300">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
