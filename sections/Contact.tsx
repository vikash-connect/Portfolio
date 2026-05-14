"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Mail, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const Contact = () => {
  const socialLinks = [
    { name: "GitHub", icon: FaGithub, href: "#", color: "hover:text-[#2ea44f]" },
    { name: "LinkedIn", icon: FaLinkedin, href: "#", color: "hover:text-[#0077b5]" },
    { name: "Twitter", icon: FaTwitter, href: "#", color: "hover:text-[#1da1f2]" },
  ];


  return (
    <Section id="contact" className="py-24 border-t border-white/5 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass p-12 md:p-24 rounded-[3rem] border border-white/5 relative overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 to-neon-purple/5 pointer-events-none" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-neon-cyan/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-neon-purple/10 blur-[100px] rounded-full" />

        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-[10px] font-bold uppercase tracking-[0.3em] mb-8"
          >
            <MessageSquare size={12} />
            Get In Touch
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8">
            START A <span className="text-neon-cyan">PROJECT?</span>
          </h2>
          
          <p className="text-xl text-text-primary/60 mb-12 leading-relaxed">
            I'm currently available for freelance work and full-time positions. Let's build something extraordinary together.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
            <motion.a 
              href="mailto:contact@vikash.dev"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-neon-cyan to-neon-purple p-[1px] rounded-full group transition-all duration-500"
            >
              <div className="bg-[#0B0F19] px-12 py-5 rounded-full group-hover:bg-transparent transition-colors flex items-center gap-3">
                <Mail size={18} className="text-neon-cyan group-hover:text-white" />
                <span className="text-white font-bold uppercase tracking-widest text-sm">Say Hello</span>
              </div>
            </motion.a>

            <div className="flex gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`w-12 h-12 rounded-full glass border border-white/10 flex items-center justify-center text-text-primary/60 transition-all ${social.color}`}
                  title={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm tracking-widest uppercase opacity-40 font-medium">
              Bangalore, India — GMT +5:30
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Ready to work</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Contact;
