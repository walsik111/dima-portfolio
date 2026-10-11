import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TechStack } from "@/components/TechStack";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-ink-primary selection:bg-white selection:text-black">
      {/* Top sticky navigation */}
      <Navbar />

      <main id="top" className="relative">
        {/* Hero Section: Typography-driven & ultra-minimalist */}
        <Hero />

        {/* About Me Section: Bio & Principles */}
        <About />

        {/* Tech Stack: Interactive technologies grid */}
        <TechStack />

        {/* Projects: Portfolio grid */}
        <Projects />

        {/* Contact / Links: Minimalist social links */}
        <Contact />
      </main>

      {/* Minimalist Footer */}
      <Footer />
    </div>
  );
}
