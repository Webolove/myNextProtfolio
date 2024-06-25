"use client"
import About from "@/Components/About";
import Achievements from "@/Components/Achievements";
import Contact from "@/Components/Contact";
import Navigation from "@/Components/Navigation";
import Projects from "@/Components/Projects";
import AOS from "aos";
import 'aos/dist/aos.css';

// import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

import Footer from "@/Components/Footer";
import MoveUp from "@/Components/MoveUp";

import React, { useEffect, useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState(false);
  const [activeNav, setActiveNav] = useState("About");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      const storedNav = localStorage.getItem('activeNav');
      if (storedTheme !== null) {
        setTheme(JSON.parse(storedTheme));
      }
      if (storedNav !== null) {
        setActiveNav(storedNav);
      }
      setIsMounted(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && isMounted) {
      localStorage.setItem('theme', JSON.stringify(theme));
      document.body.className = theme ? 'bg-dark_body_bg' : 'bg-light_body_bg';
    }
  }, [theme, isMounted]);

  useEffect(() => {
    if (typeof window !== 'undefined' && isMounted) {
      localStorage.setItem('activeNav', activeNav); // Save as string directly
    }
  }, [activeNav, isMounted]);


  useEffect(() => {
    AOS.init({
      offset: 50,
      delay: 100,
      duration: 400,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom'
    })

  }, [])

  return (
    isMounted && <main>
      <Navigation theme={theme} setTheme={setTheme} activeNav={activeNav} setActiveNav={setActiveNav} />
      {activeNav == "About" ? <About showSkill={false} theme={theme} /> : activeNav == "Projects" ? <Projects theme={theme} /> : activeNav == "Contact" ? <Contact theme={theme} /> : activeNav == "Achievements" ? <Achievements theme={theme} /> : <About showSkill={true} theme={theme} />}
      <MoveUp theme={theme} activeTab={activeNav} />
      <Footer theme={theme} />
    </main>

  );

}
