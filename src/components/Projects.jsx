import React, { forwardRef } from 'react';

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      name: 'Personal Portfolio Website',
      description: 'A website to showcase my skills, projects, and professional journey.',
      technologies: ['React', 'Vite', 'CSS', 'HTML'],
      liveLink: 'https://github.com/Osike/GROUP1-.git',
      githubLink: 'https://github.com/nasser-633',
      image: 'src/assets/portfoliogimg0.jpeg', // Path to a screenshot or image
    },
    {
      name: 'My New Project',
      description: 'learning and upgrading my skils',
      technologies: ['JavaScript', 'Node.js', 'Git'],
      liveLink: 'https://github.com/Osike/GROUP1-.git',
      githubLink: 'https://github.com/Osike/GROUP1-.git',
      image: 'src/assets/portfoliogimg1.jpeg',
    },
    // Add more projects here
  ];

  return (
    <section ref={ref} id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <div className="project-links">
              {project.liveLink && <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>}
              {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
            </div>
            {project.image && <img src={project.image} alt={project.name} />}
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;