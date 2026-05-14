"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import FeaturedProject from "@/sections/FeaturedProject";
import OtherProjects from "@/sections/OtherProjects";
import Internship from "@/sections/Internship";
import Achievements from "@/sections/Achievements";
import Certificates from "@/sections/Certificates";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex flex-col items-center"
    >


      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Featured Project Section */}
      <FeaturedProject />

      {/* Other Projects Section */}
      <OtherProjects />

      {/* Internship Section */}
      <Internship />

      {/* Achievements & Events Section */}
      <Achievements />

      {/* Certificates Gallery Section */}
      <Certificates />

      {/* Contact Section */}
      <Contact />

      <Footer />
    </motion.div>

  );
}

