import React, { forwardRef } from 'react';

const Education = forwardRef((props, ref) => {
  const educationList = [
    {
      institution: 'Technical University of Mombasa',
      degree: 'Bachelor of Science in Information Technology',
      years: '2020 - NOW',
      description: 'Coursework included web development, mobile programming, data structures, algorithms, software engineering, and database management.', // Optional description
    },
    {
      institution: 'Mombasa Aviation Training Institute',
      course: 'Diploma in Electrical & Electronics Engineering',
      completionDate: 'Completed: November 2024',
      // No description needed for this format
    },
    {
      institution: 'Nairobi School',
      degree: 'Kenya Certificate of Secondary Education',
      completionDate: 'Completed: November 2019',
    },
    // Add more education entries
  ];

  return (
    <section ref={ref} id="education" className="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationList.map((item, index) => (
          <div key={index} className="education-item">
            <h3>{item.institution}</h3>
            {item.degree && <p><strong>{item.degree}</strong></p>}
            {item.course && <p><strong>{item.course}</strong></p>}
            {item.years && <p>{item.years}</p>}
            {item.completionDate && <p>{item.completionDate}</p>}
            {item.description && <p className="description">{item.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
});

export default Education;