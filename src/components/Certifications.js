// Certifications.js
import React from 'react';

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>
      <div className="certifications-container">
        {/* Certification 1 */}
        <div className="certification-box">
          <h4>Mastering in Data Structures and Algorithms Using C and C++</h4>
          <p>Offered by Udemy. A comprehensive course on data structures and algorithms using C and C++.</p>
        </div>
        
        {/* Certification 2 */}
        <div className="certification-box">
          <h4>HTML, CSS and JavaScript</h4>
          <p>Offered by CourseEra. This course covers the fundamentals of web development using HTML, CSS, and JavaScript.</p>
        </div>

        {/* Certification 3 */}
        <div className="certification-box">
          <h4>C Certification</h4>
          <p>Offered by Hackerrank. A certification showcasing proficiency in the C programming language.</p>
        </div>

        {/* Certification 4 */}
        <div className="certification-box">
          <h4>Introduction to Data Engineering and BigData</h4>
          <p>Offered by Guvi. This course introduces data engineering and big data concepts.</p>
        </div>

        {/* Certification 5 */}
        <div className="certification-box">
          <h4>Generative AI</h4>
          <p>Offered by Guvi. A course on understanding generative AI models and their applications.</p>
        </div>

        {/* Certification 6 */}
        <div className="certification-box">
          <h4>Python Matplotlib</h4>
          <p>Offered by Great Learning. A course dedicated to data visualization using Python’s Matplotlib library.</p>
        </div>

        {/* Certification 7 */}
        <div className="certification-box">
          <h4>Pandas</h4>
          <p>Offered by Kaggle. This course teaches the Pandas library for data manipulation and analysis.</p>
        </div>
      </div>

      <h2>Programming Achievements</h2>
      <div className="achievements-container">
        {/* Achievement 1 */}
        <div className="achievement-box">
          <h4>Leetcode</h4>
          <p>Solved 100+ problems on Leetcode, honing problem-solving skills and algorithms.</p>
        </div>

        {/* Achievement 2 */}
        <div className="achievement-box">
          <h4>CodeChef</h4>
          <p>Solved 150+ problems on CodeChef, participating in various contests and improving algorithmic skills.</p>
        </div>

        {/* Achievement 3 */}
        <div className="achievement-box">
          <h4>HackerRank</h4>
          <p>Gained silver badge in C and Python on HackerRank, showcasing proficiency in both languages.</p>
        </div>

        {/* Achievement 4 */}
        <div className="achievement-box">
          <h4>Skillrack</h4>
          <p>Solved 300+ problems on Skillrack, improving competitive programming skills.</p>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
