"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

interface Particle {
  x: string;
  y: string;
  opacity: number;
  duration: number;
  yMove: string;
}

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "I build web apps, experiment with AI workflows, and ship projects fast.";
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  // Mouse Parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const moveX = useTransform(springX, [-500, 500], [-30, 30]);
  const moveY = useTransform(springY, [-500, 500], [-30, 30]);

  useEffect(() => {
    setMounted(true);

    // Generate particles only on client-side to prevent hydration mismatch
    const generatedParticles = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * 100 + "%",
      y: Math.random() * 100 + "%",
      opacity: Math.random() * 0.5,
      duration: Math.random() * 5 + 5,
      yMove: Math.random() * -100 - 50 + "px",
    }));

    setParticles(generatedParticles);

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveXVal = clientX - window.innerWidth / 2;
      const moveYVal = clientY - window.innerHeight / 2;
      mouseX.set(moveXVal);
      mouseY.set(moveYVal);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Typing Animation
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-bg">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-cyan/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon-purple/10 blur-[120px] animate-blob" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-neon-cyan/5 blur-[100px] animate-blob" style={{ animationDelay: '2s' }} />
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      {/* Particles Effect - Client Only */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: particle.x, 
                y: particle.y, 
                opacity: particle.opacity 
              }}
              animate={{ 
                y: [null, particle.yMove],
                opacity: [null, 0]
              }}
              transition={{ 
                duration: particle.duration, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_10px_white]"
            />
          ))}
        </div>
      )}

      {/* Main Content */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-neon-cyan text-[10px] font-bold uppercase tracking-[0.3em] mb-6">
            Available for New Projects
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6 max-w-4xl">
            VIKASH — <br />
            <span className="bg-gradient-to-r from-neon-cyan via-white to-neon-purple bg-[length:200%_auto] animate-pulse-slow bg-clip-text text-transparent">
              FULL STACK <br className="md:hidden" /> DEVELOPER
            </span>
          </h1>
          <p className="text-lg md:text-xl text-text-primary/60 font-medium max-w-2xl mx-auto min-h-[4.5rem] md:h-auto mb-8 md:mb-0">
            {text}<span className="animate-pulse">|</span>
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6"
        >

          <MagneticButton className="w-full md:w-auto shadow-[0_0_20px_rgba(0,245,255,0.2)]">
            View Projects
          </MagneticButton>
          <MagneticButton variant="secondary" className="w-full md:w-auto">
            Contact Me
          </MagneticButton>

        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-neon-cyan to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
