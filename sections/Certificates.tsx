"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ZoomIn } from "lucide-react";
import Section from "@/components/Section";
import Image from "next/image";

interface Certificate {
  title: string;
  issuer: string;
  image: string;
}

const certificates: Certificate[] = [
  { 
    title: "Google AI Certificates", 
    issuer: "Google", 
    image: "/certificates/google-ai.png" 
  },
  { 
    title: "DaVinci Resolve Course", 
    issuer: "Blackmagic Design", 
    image: "/certificates/davinci.png" 
  },
  { 
    title: "Open Source Participation", 
    issuer: "GitHub/Various", 
    image: "/certificates/open-source.png" 
  },
  { 
    title: "Hackathon Participation", 
    issuer: "Devpost/Various", 
    image: "/certificates/hackathon.png" 
  },
  { 
    title: "GitHub Workshop", 
    issuer: "GitHub", 
    image: "/certificates/github.png" 
  },
  { 
    title: "Digital Marketing Certificate", 
    issuer: "Google/HubSpot", 
    image: "/certificates/marketing.png" 
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedCert]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Section id="certificates" className="py-24 border-t border-white/5">
      <div className="space-y-16">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-4 uppercase">
            Certificates
          </h2>
          <p className="text-text-primary/40 uppercase tracking-[0.3em] text-xs font-bold">Verified Milestones</p>
        </div>

        {/* Certificate Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedCert(cert)}
              className="group relative cursor-pointer"
            >
              <div className="glass relative aspect-[4/3] rounded-2xl border border-white/5 overflow-hidden group-hover:border-neon-cyan/50 transition-all duration-500">
                {/* Certificate Image */}
                <Image 
                  src={cert.image} 
                  alt={cert.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />

                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-neon-cyan uppercase tracking-widest mb-1">{cert.issuer}</p>
                      <h3 className="text-sm font-bold text-white line-clamp-1">{cert.title}</h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-neon-cyan/20 border border-neon-cyan/50 flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-neon-cyan" />
                    </div>
                  </div>
                </div>

                {/* Neon Glow on Hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-neon-cyan/0 to-neon-purple/0 rounded-2xl blur opacity-0 group-hover:opacity-20 group-hover:from-neon-cyan group-hover:to-neon-purple transition-all duration-500 pointer-events-none -z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-bg/90 backdrop-blur-xl cursor-zoom-out" 
              onClick={() => setSelectedCert(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-5xl glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-neon-cyan/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-white group"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              </button>

              <div className="flex flex-col">
                <div className="relative aspect-[16/10] w-full">
                  <Image 
                    src={selectedCert.image} 
                    alt={selectedCert.title}
                    fill
                    sizes="100vw"
                    className="object-contain p-4 md:p-8"
                  />

                </div>
                <div className="p-8 border-t border-white/5 bg-white/5 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-xs font-bold text-neon-cyan uppercase tracking-[0.3em] mb-2 block">{selectedCert.issuer}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{selectedCert.title}</h2>
                  </div>
                  <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-neon-cyan/10 hover:border-neon-cyan/50 transition-all group">
                    <span className="text-sm font-bold uppercase tracking-widest text-white/70 group-hover:text-neon-cyan transition-colors">Verify Credential</span>
                    <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-neon-cyan transition-colors" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Certificates;
