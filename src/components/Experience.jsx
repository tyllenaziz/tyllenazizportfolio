import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: "work",
      role: "Mobile & Web Developer (Kinga System)",
      company: "Kinga Pest Control Project",
      period: "2025",
      desc: "Developed 'Kinga', a comprehensive dual-platform solution (Android & Web) for agricultural pest management. The Android app uses AI (PyTorch & OpenCV) for real-time pest detection via camera. The Web Dashboard (React/Vercel) allows admins to track data and manage users. Features include instant treatment recommendations, cloud synchronization, and offline capabilities."
    },
    {
      type: "work",
      role: "Mobile & Web Developer",
      company: "Rental Management & Billing System",
      period: "2025",
      desc: "Developed a full system helping landlords manage tenants, update bills, and track payments. Built with React Native for mobile and Flask/Node backend. Key features include automated bill reminders, tenant profiles, admin dashboards, and tabs for pending/sent bills. Successfully replaced manual record-keeping with a fully digital workflow."
    },
    {
      type: "work",
      role: "Full Stack Developer",
      company: "Sangara Wholesalers POS",
      period: "2024 - 2025",
      desc: "Designed and developed a complete inventory and sales management system. Implemented product tracking, stock updates, automated reports, and user-role management. Integrated secure authentication and real-time database updates to streamline business operations."
    },
    {
      type: "education",
      role: "Bachelor of Science in Information Technology",
      company: "Mount Kenya University",
      period: "2022 - 2025",
      desc: "Graduated with Second Class Division. Gained expertise in Software Development, Network Security, and Database Management. Built multiple real-world systems as part of practical coursework."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">My Journey</h2>
          <p className="text-gray-400">Professional Experience & Projects</p>
        </motion.div>

        <div className="space-y-8 relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative pl-24"
            >
              {/* Icon Bubble */}
              <div className="absolute left-4 w-9 h-9 bg-secondary border border-accent rounded-full flex items-center justify-center z-10">
                {exp.type === 'education' ? (
                  <GraduationCap size={16} className="text-purple-500" />
                ) : (
                  <Briefcase size={16} className="text-accent" />
                )}
              </div>

              {/* Content Card */}
              <div className="bg-secondary/50 p-6 rounded-xl border border-white/5 hover:border-accent/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <div className="flex items-center text-accent text-sm font-medium mt-1 sm:mt-0">
                    <Calendar size={14} className="mr-1" />
                    {exp.period}
                  </div>
                </div>
                <h4 className="text-lg text-gray-300 mb-2">{exp.company}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
