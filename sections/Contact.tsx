"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Section from "@/components/Section";

const ContactRow = ({ 
  icon: Icon, 
  text, 
  href, 
  delay 
}: { 
  icon: any; 
  text: string; 
  href: string;
  delay: number;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5, scale: 1.02 }}
    className="group relative flex items-center justify-between p-4 md:p-6 glass rounded-2xl border border-white/5 hover:border-neon-cyan/50 transition-all duration-500 overflow-hidden"
  >
    {/* Inner Glow Backdrop */}
    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="flex items-center gap-4 relative z-10">
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-cyan/10 group-hover:border-neon-cyan/30 transition-all duration-500">
        <Icon size={20} className="text-text-primary/60 group-hover:text-neon-cyan transition-colors" />
      </div>
      <span className="text-sm md:text-base font-medium text-text-primary/80 group-hover:text-white transition-colors">
        {text}
      </span>
    </div>
    
    <ExternalLink size={16} className="text-text-primary/20 group-hover:text-neon-cyan transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
  </motion.a>
);

const Contact = () => {
  return (
    <Section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-slow" />
      
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 uppercase"
          >
            LET&apos;S BUILD <span className="text-neon-cyan">SOMETHING</span> TOGETHER
          </motion.h2>
          <p className="text-text-primary/40 uppercase tracking-[0.3em] text-xs font-bold">Contact Me</p>
        </div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/10 relative overflow-hidden shadow-2xl"
        >
          {/* Subtle animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-transparent to-neon-purple/5 animate-gradient-xy opacity-50" />

          <div className="space-y-4 relative z-10">
            <ContactRow 
              icon={Mail} 
              text="your-email@example.com" 
              href="mailto:your-email@example.com"
              delay={0.1}
            />
            <ContactRow 
              icon={FaGithub} 
              text="github.com/profile-placeholder" 
              href="https://github.com"
              delay={0.2}
            />
            <ContactRow 
              icon={FaLinkedin} 
              text="linkedin.com/in/profile-placeholder" 
              href="https://linkedin.com"
              delay={0.3}
            />

          </div>

          {/* Send Message Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 relative z-10"
          >
            <motion.a
              href="mailto:your-email@example.com"
              animate={{ 
                boxShadow: ["0 0 10px rgba(0,245,255,0.2)", "0 0 20px rgba(0,245,255,0.4)", "0 0 10px rgba(0,245,255,0.2)"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,245,255,0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-gradient-to-r from-neon-cyan to-neon-purple text-white font-bold uppercase tracking-widest text-sm relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Send Message</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;
