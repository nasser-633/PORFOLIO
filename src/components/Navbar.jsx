import React from 'react';

function Navbar({ activeSection, onAboutClick, onProjectsClick, onContactClick, onSkillsClick, onHomeClick }) {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">EMMANUEL ROTICH</div>
        <ul className="nav-links">
          <li>
            <a
              href="#"
              onClick={(event) => { event.preventDefault(); onHomeClick(); }}
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(event) => { event.preventDefault(); onAboutClick(); }}
              className={activeSection === 'about' ? 'active' : ''}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={(event) => { event.preventDefault(); onSkillsClick(); }}
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={(event) => { event.preventDefault(); onProjectsClick(); }}
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#education"
              onClick={(event) => { event.preventDefault(); const educationSection = document.getElementById('education'); if (educationSection) educationSection.scrollIntoView({ behavior: 'smooth' }); }}
              className={activeSection === 'education' ? 'active' : ''}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(event) => { event.preventDefault(); onContactClick(); }}
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;