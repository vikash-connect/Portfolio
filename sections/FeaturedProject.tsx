"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Section from "@/components/Section";

const features = [
  "Candidate & party data display",
  "REST API backend architecture",
  "MongoDB database integration",
  "Responsive dashboard UI",
  "Cloud deployed production app",
];

const techStack = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "REST API",
  "Cloud Deployment",
];

const FeaturedProject = () => {
  return (
    <Section id="featured-project" className="relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
      >
        {/* Left Side: Project Screenshot Placeholder */}
        <motion.div
          whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative w-full lg:w-1/2 aspect-video rounded-3xl overflow-hidden glass border border-white/10 group cursor-default"
        >
          {/* Animated Gradient Border */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-cyan rounded-[1.6rem] opacity-30 group-hover:opacity-100 blur-[2px] transition-opacity duration-500 animate-gradient-xy" />
          
          {/* Inner Glow and Content */}
          <div className="absolute inset-0 bg-[#0B0F19]/80 flex flex-col items-center justify-center p-8 text-center z-10">
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,245,255,0.15)] pointer-events-none" />
            
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-neon-cyan/50 transition-all duration-500">
              <div className="w-10 h-10 bg-gradient-to-br from-neon-cyan to-neon-purple rounded-lg opacity-50 blur-sm absolute" />
              <div className="relative text-white font-black text-2xl">EA</div>
            </div>
            
            <h4 className="text-xl font-bold text-white/40 uppercase tracking-[0.2em]">
              Project Screenshot
            </h4>
            <div className="mt-4 flex gap-2">
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-neon-purple animate-pulse delay-75" />
              <div className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse delay-150" />
            </div>
          </div>

          {/* Subtitle Glass Overlay */}
          <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl border border-white/5 z-20 transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <p className="text-xs text-text-primary/60 font-medium">Interactive Election Monitoring & Analytics Platform</p>
          </div>
        </motion.div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-neon-cyan text-sm font-bold tracking-[0.4em] uppercase mb-3 block">
              Featured Project
            </span>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-[0_0_15px_rgba(0,245,255,0.3)]">
              Election Assistant — <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">Full Stack Web App</span>
            </h3>

            {/* Feature List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-3 text-text-primary/80 font-medium"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center">
                    <CheckCircle2 size={12} className="text-neon-cyan" />
                  </div>
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {techStack.map((tech, idx) => (
                <motion.span
                  key={tech}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -2,
                    boxShadow: "0 0 20px rgba(0, 245, 255, 0.3)",
                    borderColor: "rgba(0, 245, 255, 0.5)"
                  }}
                  className="px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-bold text-white/90 transition-all cursor-default shadow-sm"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-5">
              <motion.a
                href="https://election-assistant-268328857051.us-central1.run.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(0, 245, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative group p-[1px] rounded-full overflow-hidden transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple animate-gradient-xy" />
                <div className="relative bg-[#0B0F19] px-8 py-3.5 rounded-full flex items-center gap-2 group-hover:bg-transparent transition-colors">
                  <span className="text-white font-bold uppercase tracking-widest text-sm">Live Demo</span>
                  <ExternalLink size={16} className="text-white" />
                </div>
              </motion.a>

              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3.5 rounded-full glass border border-white/10 text-white font-bold uppercase tracking-widest text-sm flex items-center gap-2 transition-all"
              >
                <FaGithub size={16} />
                View Code
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};

export default FeaturedProject;
