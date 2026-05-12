"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";

interface TimelineItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  side: "left" | "right";
}

const internshipData: TimelineItem[] = [
  {
    company: "Tech Nova Solutions",
    role: "Frontend Developer Intern",
    period: "June 2025 - Present",
    description: [
      "Developing high-performance user interfaces using Next.js and Tailwind CSS.",
      "Collaborating with senior developers to implement complex animations with Framer Motion.",
      "Optimizing application performance and accessibility standards.",
    ],
    side: "left",
  },
  {
    company: "Webspace IT Solution Pvt Ltd",
    role: "Social Media Manager + Resource Manager Intern",
    period: "January 2024 - May 2024",
    description: [
      "Managed corporate social media presence and engagement strategies.",
      "Coordinated resource allocation across multiple internal projects.",
      "Streamlined team communication and project tracking workflows.",
    ],
    side: "right",
  },
];

const TimelineNode = () => (
  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-bg border-2 border-neon-cyan z-10">
    <div className="absolute inset-0 rounded-full bg-neon-cyan blur-sm animate-pulse" />
  </div>
);

const Internship = () => {
  return (
    <Section id="internship" className="py-24 border-t border-white/5 overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">EXPERIENCE</h2>
        <p className="text-text-primary/40 uppercase tracking-[0.3em] text-xs font-bold">My Professional Journey</p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-2 md:left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-transparent opacity-20" />

        <div className="space-y-12 md:space-y-24">
          {internshipData.map((item, index) => (
            <div key={item.company} className="relative flex items-center">
              <TimelineNode />
              
              <div className={`flex w-full ${item.side === "left" ? "md:justify-start" : "md:justify-end"} pl-10 md:pl-0`}>
                <motion.div
                  initial={{ opacity: 0, x: item.side === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass p-6 md:p-8 rounded-2xl border border-white/10 w-full md:w-[calc(50%-3rem)] group hover:border-neon-cyan/50 transition-all duration-500`}
                >
                  <div className="flex flex-col mb-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-neon-cyan/60 mb-1">{item.period}</span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">{item.role}</h3>
                    <p className="text-text-primary/40 font-bold text-sm uppercase tracking-wider">{item.company}</p>
                  </div>
                  
                  <ul className="space-y-3">
                    {item.description.map((desc, i) => (
                      <li key={i} className="text-sm text-text-primary/60 leading-relaxed flex gap-3">
                        <span className="text-neon-purple mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-neon-purple shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Decorative background glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Internship;
