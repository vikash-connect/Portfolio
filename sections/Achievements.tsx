"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Trophy, 
  Award, 
  Medal, 
  Star, 
  Calendar, 
  Users, 
  Sparkles, 
  Rocket,
  LucideIcon
} from "lucide-react";
import Section from "@/components/Section";

interface Item {
  title: string;
  icon: LucideIcon;
}

const achievements: Item[] = [
  { title: "First professional internship", icon: Trophy },
  { title: "Top 10 in DaVinci Resolve course", icon: Award },
  { title: "CEE score 166/184", icon: Medal },
  { title: "Active in tech workshops", icon: Star },
];

const events: Item[] = [
  { title: "Agentic AI events", icon: Calendar },
  { title: "GitHub Copilot Dev Days", icon: Users },
  { title: "NVIDIA Generative Media", icon: Sparkles },
  { title: "Open source participation", icon: Rocket },
];

const IconCard = ({ item, index }: { item: Item; index: number }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="group relative"
    >
      {/* Neon Glow Backdrop */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan/0 to-neon-purple/0 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 group-hover:from-neon-cyan/20 group-hover:to-neon-purple/20 transition-all duration-500 pointer-events-none" />
      
      {/* Card Content */}
      <div className="glass relative flex items-center gap-4 p-5 rounded-2xl border border-white/5 group-hover:border-neon-cyan/30 transition-colors duration-500 overflow-hidden">
        {/* Subtle Gradient Border Overlay */}
        <div className="absolute inset-0 border border-transparent bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none rounded-2xl" />
        
        {/* Icon Container */}
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 group-hover:border-neon-cyan/50 group-hover:bg-neon-cyan/10 transition-all duration-500">
          <item.icon className="w-5 h-5 text-text-primary/70 group-hover:text-neon-cyan transition-colors" />
        </div>

        {/* Text */}
        <span className="text-sm md:text-base font-medium text-text-primary/80 group-hover:text-white transition-colors">
          {item.title}
        </span>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Section id="achievements" className="py-24 border-t border-white/5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-16"
      >
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4">
            ACHIEVEMENTS & <span className="text-neon-cyan">EVENTS</span>
          </h2>
          <p className="text-text-primary/40 uppercase tracking-[0.3em] text-xs font-bold">Milestones & Community</p>
        </div>

        {/* Two-Column Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">

          
          {/* Achievements Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 bg-neon-cyan rounded-full" />
              <h3 className="text-xl font-bold uppercase tracking-wider text-white/90">Achievements</h3>
            </div>
            
            <motion.div 
              variants={containerVariants}
              className="grid gap-4"
            >
              {achievements.map((item, index) => (
                <IconCard key={item.title} item={item} index={index} />
              ))}
            </motion.div>
          </div>

          {/* Events Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-6 bg-neon-purple rounded-full" />
              <h3 className="text-xl font-bold uppercase tracking-wider text-white/90">Events</h3>
            </div>
            
            <motion.div 
              variants={containerVariants}
              className="grid gap-4"
            >
              {events.map((item, index) => (
                <IconCard key={item.title} item={item} index={index} />
              ))}
            </motion.div>
          </div>

        </div>
      </motion.div>
    </Section>
  );
};

export default Achievements;
