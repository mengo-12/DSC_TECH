"use client";
import React from "react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-[#071027] dark:text-slate-100 transition-colors">
      {/* <div className="py-6">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4"> */}
      <Header />
      {/* <div className="flex items-center gap-3">
            </div>
            </div>
            <LanguageSwitcher />
            <ThemeSwitcher />
        </div> */}

      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
