import React, { useRef, useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const heroRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const projectsSectionRef = useRef(null);
  const educationSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
const handleScroll = () => {
    const sections = [
      { ref: heroRef, id: 'home' },
      { ref: aboutSectionRef, id: 'about' },
      { ref: skillsSectionRef, id: 'skills' },
      { ref: projectsSectionRef, id: 'projects' },
      { ref: educationSectionRef, id: 'education' },
      { ref: contactSectionRef, id: 'contact' },
    ];

    const scrollY = window.scrollY;
    let currentActiveSection = 'home';

    for (const section of sections) {
      if (section.ref.current) {
        const top = section.ref.current.offsetTop;
        // Consider the section active if the top of the viewport has reached or crossed the top of the section
        if (scrollY >= top) {
          currentActiveSection = section.id;
        }
      }
    }
    setActiveSection(currentActiveSection);
    console.log('Scroll event handled. Active section:', activeSection);
  };

    console.log('Scroll listener attached');
    window.addEventListener('scroll', handleScroll);

    return () => {
      console.log('Scroll listener removed');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar
        activeSection={activeSection}
        onAboutClick={() => aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onProjectsClick={() => projectsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onContactClick={() => contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onSkillsClick={() => skillsSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onHomeClick={() => heroRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />
      <Hero ref={heroRef} id="home" />
      <About ref={aboutSectionRef} id="about" />
      <Skills ref={skillsSectionRef} id="skills" />
      <Projects ref={projectsSectionRef} id="projects" />
      <Education ref={educationSectionRef} id="education" />
      <Contact ref={contactSectionRef} id="contact" />
    </div>
  );
}

export default App;