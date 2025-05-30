import React, { forwardRef } from 'react';

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="contact" className="contact">
      <h2>Contact Me</h2>
      <form className="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>Or reach me directly at: <a href="mnrotich2@gmail.com">mnrotich2@gmail.com</a></p>
        <p>Phone: 0700697865</p>
        <p>Location: Mombasa, Kenya</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/manu-rotich-9551a61ba/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span> | </span>
          <a href="https://github.com/nasser-633" target="_blank" rel="noopener noreferrer">GitHub</a>
          <span> | </span>
          <a href="https://www.instagram.com/___m.a.s.s.i.v.e/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <span> | </span>
          <a href="https://web.facebook.com/jinandio.nlikosa" target="_blank" rel="noopener noreferrer">Facebook</a>

        </div>
      </div>
    </section>
  );
});

export default Contact;