// Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <strong>Cryptocurrency Market Predictor:</strong> 
          This data science project leverages machine learning models to predict market trends in the cryptocurrency space. Using historical market data, the system analyzes patterns and forecasts future price movements of popular cryptocurrencies. Built with Python, Scikit-learn, and TensorFlow, it aids investors in making informed decisions about their portfolios.
        </li>
        <li>
          <strong>Vehicle Parking Management System:</strong> 
          A Java-based system designed for managing parking spaces, tracking vehicle data, and calculating parking fees. The application allows users to register vehicles, reserve parking spots, and calculate fees based on parking duration. It integrates with a database for real-time updates on available spots, ensuring efficient space utilization in parking lots.
        </li>
      </ul>
    </section>
  );
}

export default Projects;
