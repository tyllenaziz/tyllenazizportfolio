import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Globe, Brain, Database, BarChart3, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      
      {/* --- 1. BACKGROUND IMAGE (Watermark Look) --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ty.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-20 grayscale" 
        />
      </div>

      {/* --- 2. COLOR CHANGING OVERLAY --- */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-slate-900/40 animate-gradient-xy mix-blend-overlay"></div>
      
      <style>{`
        @keyframes gradient-xy {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 6s ease infinite;
        }
      `}</style>

      {/* --- 3. THE CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Title */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <Code2 className="text-accent w-5 h-5" />
            <h2 className="text-accent font-semibold tracking-wide uppercase text-lg shadow-black drop-shadow-md">
              Welcome to my world
            </h2>
          </div>
          
          {/* Main Name */}
          <h1 className="mt-2 text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">Tyllen Aziz</span>
          </h1>
          
          {/* --- NEW TECH SUBTITLE SECTION --- */}
<div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-6xl mx-auto text-base md:text-lg text-gray-300 font-medium drop-shadow-md">
  
  {/* Item 1: Software Developer */}
  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
    <Code2 className="text-blue-400 w-5 h-5" />
    <span>Software Developer</span>
  </div>

  {/* Item 2: Full-Stack & Mobile */}
  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
    <div className="flex">
      <Smartphone className="text-purple-500 w-5 h-5" />
      <Globe className="text-green-400 w-5 h-5 -ml-1.5" />
    </div>
    <span>Full-Stack & Mobile App Developer</span>
  </div>

  {/* Item 3: AI Solutions */}
  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
    <Brain className="text-pink-400 w-5 h-5" />
    <span>AI-Powered Solutions</span>
  </div>

  {/* Item 4: Database Specialist */}
  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
    <Database className="text-yellow-500 w-5 h-5" />
    <span>Database Specialist</span>
  </div>

  {/* Item 5: Data Analyst */}
  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
    <BarChart3 className="text-cyan-400 w-5 h-5" />
    <span>Data Analyst (Power BI)</span>
  </div>

</div>
          
          {/* Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            <a href="#projects" className="px-8 py-3 rounded-full bg-accent text-primary font-bold hover:bg-accent/90 transition-transform hover:scale-105 shadow-lg shadow-accent/20">
              View Work
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-white/10 transition-all text-white">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
