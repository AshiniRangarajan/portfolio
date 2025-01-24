// App.js
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;