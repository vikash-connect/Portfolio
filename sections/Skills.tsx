"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { 
  SiExpress, 
  SiMongodb, 
  SiDavinciresolve, 
  SiCanva, 
  SiOpenai 
} from 'react-icons/si';
import { RiRobot2Fill } from 'react-icons/ri';
import Section from '@/components/Section';

const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "text-blue-400" },
      { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-400" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
      { name: "GitHub", icon: FaGithub, color: "text-white" },
      { name: "DaVinci Resolve", icon: SiDavinciresolve, color: "text-purple-400" },
      { name: "Canva", icon: SiCanva, color: "text-blue-400" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Digital Marketing", icon: RiRobot2Fill, color: "text-pink-400" },
      { name: "AI Tools", icon: SiOpenai, color: "text-teal-400" },
    ],
  },
];

const SkillItem = ({ name, icon: Icon, color }: { name: string, icon: any, color: string }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -5, 
        rotate: 2,
        scale: 1.05,
        filter: "drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-xl border border-white/10 group transition-all duration-300"
    >
      <Icon className={`text-3xl mb-2 ${color} group-hover:scale-110 transition-transform duration-300`} />
      <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

const SkillCard = ({ category, items, index }: { category: string, items: any[], index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      {/* Gradient Border Wrapper */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-2xl blur-sm opacity-25 group-hover:opacity-75 transition duration-500"></div>
      
      <div className="relative h-full bg-[#0b0f19]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden">
        <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">
          {category}
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <SkillItem key={idx} {...item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <Section id="skills" className="bg-[#0b0f19] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A comprehensive list of my technical expertise and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill, index) => (
            <SkillCard 
              key={index} 
              category={skill.category} 
              items={skill.items} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;
