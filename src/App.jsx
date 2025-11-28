import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Experience from './components/Experience'; // <--- Add this at top

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />  
      <Projects />
      <Contact />
    </div>
  );
}

export default App;