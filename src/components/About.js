// About.js
import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p>
        I am Ashini, an AI and Data Science student passionate about building impactful solutions. With a deep interest in data-driven technologies, I focus on applying machine learning to solve real-world problems.
      </p>
     
      <div className="key-skills">
        <div className="skills-container">
          <div className="skill-box">
            <h4>Data Analysis</h4>
            <p>Proficient in analyzing and interpreting data  using tools like Python and SQL.</p>
          </div>
          <div className="skill-box">
            <h4>Web Development</h4>
            <p>Trained in developing responsive websites using HTML, CSS, JavaScript, React, and Node.js.</p>
          </div>
          <div className="skill-box">
            <h4>Database Management</h4>
            <p>Experienced in designing and managing databases using MySQL and MongoDB.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
