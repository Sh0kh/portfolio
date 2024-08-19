import React, { useRef } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import AboutMe from '../Components/AboutMe';
import Skils from '../Components/Skils';
import Project from '../Components/Project';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';

function Home() {
  const heroRef = useRef(null);
  const aboutMeRef = useRef(null);
  const skilsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    section.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* Передаём функцию и рефы в Header */}
      <Header 
        scrollToSection={scrollToSection} 
        heroRef={heroRef} 
        aboutMeRef={aboutMeRef} 
        skilsRef={skilsRef} 
        projectRef={projectRef} 
        contactRef={contactRef} 
      />
      <main>
        <div ref={heroRef}><Hero 
        scrollToSection={scrollToSection} 
         aboutMeRef={aboutMeRef} 
        /></div>
        <div ref={aboutMeRef}><AboutMe 
        scrollToSection={scrollToSection}
        skilsRef={skilsRef}  
        /></div>
        <div ref={skilsRef}><Skils
                scrollToSection={scrollToSection}
                projectRef={projectRef} 
        /></div>
        <div ref={projectRef}><Project 
                        scrollToSection={scrollToSection}
                        contactRef={contactRef} 
        /></div>
        <div ref={contactRef}><Contact /></div>
        <Footer 
        
        scrollToSection={scrollToSection} 
        heroRef={heroRef} 
        aboutMeRef={aboutMeRef} 
        skilsRef={skilsRef} 
        projectRef={projectRef} 
        contactRef={contactRef} />
      </main>
    </div>
  );
}

export default Home;
