import React, { forwardRef } from 'react';
import profileImage from '../assets/portfolioimg.jpg';
import resumeFile from '../assets/emmanuel-resume.pdf';

const Hero = forwardRef(({ /* onProjectsClick, */ }, ref) => {
  const handleViewWorkClick = () => {
    window.location.href = 'https://porfolio-git-main-nasser-633s-projects.vercel.app';
  };

  return (
    <section ref={ref} id="home" className="hero">
      <img src={profileImage} alt="EMMANUEL ROTICH" className="profile-photo" />
      <h1>EMMANUEL ROTICH</h1>
      <p>AI, IoT, ML, and Data Science Shaping the Future with Innovation.</p>
      <div className="cta-buttons">
        <button onClick={handleViewWorkClick}>View My Work</button>
        <a href={resumeFile} download="Emmanuel Rotich Resume">
          <button>Download Resume</button>
        </a>
      </div>
    </section>
  );
});

export default Hero;