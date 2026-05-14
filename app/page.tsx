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
    <>
      <Navbar />
      
      <main>
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
      </main>

      <Footer />

    </>
  );
}
