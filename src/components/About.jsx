import React, { forwardRef } from 'react';

const About = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="about">
      <h2>About Me</h2>
      <p>Hello! I'm Emmanuel Rotich, a student of IT with a keen interest in Data Science and Software Engineering. I believe in the power of continuous learning, user-centric design and efficient solutions to make a positive impact.</p>
      <p>My journey began from my admission to a degree in IT. This foundation has equipped me with problem-solving and critical thinking skills.</p>
      <p>Looking ahead, I am eager to contribute my skills to smart systems and the cutting-edge technologies and to further develop my expertise in Data Analysis.</p>
    </section>
  );
});

export default About;