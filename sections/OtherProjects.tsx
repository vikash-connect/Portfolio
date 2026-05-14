"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";

interface Project {
  title: string;
  description: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Grocery App — Team MERN Project",
    description: "Full-stack grocery ordering platform built collaboratively using the MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Flipkart Clone — Ecommerce UI",
    description: "Frontend clone replicating Flipkart UI with responsive layout and product pages.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    title: "Travel Website — In Progress",
    description: "Modern travel landing page focused on layout, animations and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        rotateX: 10, 
        rotateY: -10, 
        scale: 1.02,
        boxShadow: "0 0 30px rgba(0, 245, 255, 0.2)"
      }}
      className="relative group glass rounded-3xl p-8 border border-white/10 flex flex-col h-full transition-all duration-500 cursor-default overflow-hidden"
    >
      {/* Animated Gradient Border on Hover */}
      <div className="absolute -inset-[2px] bg-gradient-to-br from-neon-cyan/50 via-neon-purple/50 to-neon-cyan/50 rounded-3xl opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-500 -z-10" />

      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-neon-cyan transition-colors">
        {project.title}
      </h3>
      <p className="text-text-primary/60 text-sm mb-8 leading-relaxed flex-grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] font-bold uppercase tracking-widest text-neon-cyan/60 border border-neon-cyan/20 px-2.5 py-1 rounded-md bg-neon-cyan/5"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-neon-purple/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
};

const OtherProjects = () => {
  return (
    <Section id="other-projects" className="py-24 border-t border-white/5">
      <div className="mb-16">
        <span className="text-neon-purple text-sm font-bold tracking-[0.4em] uppercase mb-2 block">
          Secondary Works
        </span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
          OTHER PROJECTS
        </h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default OtherProjects;
