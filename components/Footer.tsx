"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          className="text-sm tracking-widest uppercase"
        >
          © 2026 Vikash. Built with Next.js & Tailwind
        </motion.p>
        
        <div className="flex gap-8 text-xs font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity">
          <a href="#" className="hover:text-neon-cyan transition-colors">Twitter</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">GitHub</a>
          <a href="#" className="hover:text-neon-cyan transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
