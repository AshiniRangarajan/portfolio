// Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get in Touch</h2>
      <p>If you'd like to connect, have any questions, or want to discuss a potential project, feel free to reach out!</p>
      <div className="contact-details">
        <div className="contact-item">
          <h3>Email</h3>
          <p><a href="mailto:ashini.r2023ai-ds@sece.ac.in">ashini.r2023ai-ds@sece.ac.in</a></p>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+91 9384754510</p>
        </div>
        <div className="contact-item">
          <h3>Find Me Online</h3>
          <div className="social-links">
            <a href="https://github.com/AshiniRangarajan" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
            <a href="https://www.linkedin.com/in/ashini-r-217a53294" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          </div>
        </div>
      </div>
      <p>Let’s collaborate and build something amazing!</p>
    </section>
  );
}

export default Contact;
