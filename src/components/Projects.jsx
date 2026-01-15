import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Download, Monitor } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sangara Wholesalers POS",
      desc: "A complete inventory and sales management system. Implemented product tracking, stock updates, automated reporting, and secure user roles.",
      tech: ["React", "Node.js", "Express", "My SQL"],
      link: "https://sangarawholesalers.vercel.app/#/dashboard",
      image: "/pos1.jpg", 
      isApk: false
    },
    {
      title: "Rental Management App",
      desc: "Mobile system for landlords to manage tenants and billing. Features automated reminders, bill updates, and tenant profiling.",
      tech: ["React Native", "Flask", "Node.js"],
      link: "https://expo.dev/artifacts/eas/2PvaU9Xeud27KNGQnZhzGj.apk",
      image: "/rent.jpg", 
      isApk: true
    },
    {
      title: "Kinga Pest Control (Mobile)",
      desc: "AI-powered mobile app that detects pests using computer vision. Built with PyTorch and OpenCV with a React Native frontend.",
      tech: ["Python", "PyTorch", "React Native"],
      // Your Expo Build Link
      link: "https://expo.dev/artifacts/eas/wgAmTgdYb4go9LaxGj99EC.apk",
      // Make sure to add a pest.jpg to public folder, or it uses this backup
      image: "/pest.jpg", 
      isApk: true
    },
    {
      title: "Kinga Web Dashboard",
      desc: "The web interface for the Kinga Pest Control system. Allows administrators to view data, manage users, and access reports.",
      tech: ["React", "Vercel", "Tailwind"],
      // Your Vercel Link
      link: "https://kinga-web.vercel.app/",
      // Using a different backup image for the web version so it looks distinct
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
      isApk: false
    },
    {
      title: "GradePoa System",
      desc: "Student grading automation system with secure login and report generation. Hosted on Render (Backend) and Vercel (Frontend).",
      tech: ["React", "Render", "Vercel"],
      link: "#",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
      isApk: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-4 text-gray-400">Real-world systems deployed and in use</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-secondary rounded-xl overflow-hidden border border-white/5 hover:border-accent/50 transition-all duration-300 flex flex-col"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10" />
                <img 
                  src={project.image} 
                  onError={(e) => {
                    // Fallback if local image is missing
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
                  }}
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-medium px-2 py-1 bg-primary rounded text-accent border border-accent/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons Section */}
                <div className="flex gap-4">
                  {/* MAIN BUTTON (Live Demo or Download) */}
                  {project.link !== "#" ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2 text-sm font-bold text-primary bg-accent px-4 py-2 rounded-full hover:bg-white transition-all shadow-lg shadow-accent/20"
                    >
                      {project.isApk ? <Download size={16} /> : <ExternalLink size={16} />} 
                      {project.isApk ? "Download App" : "Live Demo"}
                    </a>
                  ) : (
                    // Button disabled if no link
                    <span className="flex items-center gap-2 text-sm font-bold text-gray-500 bg-white/5 px-4 py-2 rounded-full cursor-not-allowed">
                      <Monitor size={16} /> Coming Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
