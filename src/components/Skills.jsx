import React, { forwardRef } from 'react';

const Skills = forwardRef((props, ref) => {
  const technicalSkills = [
    'React',
    'HTML',
    'CSS',
    'Git',
    'General wiring',
    'Plumbing',
    'Painting & Drawing',
  ];

  const softSkills = [
    'Problem-solving',
    'Communication',
    'Teamwork',
    'Adaptability',
    'Critical-Thinking',
  ];

  return (
    <section ref={ref} id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <ul>
            {technicalSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <ul>
            {softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
});

export default Skills;