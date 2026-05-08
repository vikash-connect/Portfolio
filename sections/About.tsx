"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-neon-cyan/5 blur-[100px] animate-blob" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-neon-purple/5 blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Side: Profile Image */}
          <div className="flex flex-col items-center justify-center relative">
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              {/* Rotating Gradient Border */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan p-1"
              >
                <div className="w-full h-full rounded-full bg-bg" />
              </motion.div>

              {/* Image Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden glass p-2">
                <div className="w-full h-full rounded-full bg-white/5 flex items-center justify-center overflow-hidden relative">
                   {/* Using a placeholder image that feels techy */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20" />
                  <span className="text-4xl font-bold text-white/20">VK</span>
                </div>
              </div>
            </motion.div>

            {/* Caption */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-text-primary/40 flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse" />
              Based in Bangalore 🇮🇳
            </motion.p>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
              <span className="bg-gradient-to-r from-neon-cyan to-neon-purple bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            {/* Glowing Divider */}
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-transparent rounded-full mb-8 mx-auto lg:mx-0 shadow-[0_0_10px_var(--neon-cyan)]" />

            <div className="space-y-6 text-text-primary/70 leading-relaxed text-lg font-light max-w-2xl mx-auto lg:mx-0">
              <p>
                I'm a <span className="text-white font-medium">First-year B.Tech Computer Science student</span> based in the tech hub of Bangalore. 
                As a passionate <span className="text-white font-medium">Full Stack Developer</span>, I focus on the MERN stack to build scalable, real-world projects.
              </p>
              
              <p>
                I recently completed an impactful internship as a <span className="text-white font-medium">Social Media & Resource Manager</span> at Webspace IT Solution Pvt Ltd, where I honed my organizational and digital strategy skills.
              </p>

              <p>
                My drive comes from building production-ready apps, experimenting with <span className="text-neon-cyan font-medium">AI workflows</span>, and constantly refining my UI/UX design sensibilities to create elite digital experiences.
              </p>
            </div>

            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-10"
            >
              <span className="glass px-6 py-3 rounded-full border border-neon-cyan/20 text-neon-cyan text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,245,255,0.1)]">
                Open to internships and collaborations
              </span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
