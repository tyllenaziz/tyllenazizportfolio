import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    { category: "Languages", items: ["JavaScript", "Python", "Java", "C++", "HTML/CSS"] },
    { category: "Frameworks", items: ["React", "React Native", "Node.js", "Flask", "Tailwind"] },
    { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "VS Code", "Expo", "Vercel", "Render"] }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE: Image & About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Image Section */}
            <div className="mb-8 flex justify-center md:justify-start">
              <div className="relative w-48 h-48 md:w-56 md:h-56">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
                <img 
                  src="/profile.jpg" 
                  alt="Tyllen Aziz" 
                  className="relative w-full h-full object-cover rounded-full border-4 border-secondary shadow-2xl"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
<h3 className="text-xl font-bold text-accent mb-4">
  🏆 Guinness World Record Holder
</h3>

<p className="text-gray-400 text-lg leading-relaxed mb-6">
I am proud to be a <span className="text-white font-semibold">Guinness World Record Holder</span> through the KANZ AI program, contributing to the record for the <span className="text-white">Most Users in an Artificial Intelligence Video Lesson.</span> This achievement reflects my passion for continuous learning, innovation, and artificial intelligence.

<br /><br />

I am an Information Technology graduate with over two years of professional experience in software development, systems support, data analysis, and enterprise data management. Since April 2024, I have worked at Nextvijo Software Solutions designing, deploying, and maintaining business information systems while providing technical support and database administration. I also work remotely as a Data Curator and Data Analyst at Veeva Systems, where I perform data validation, quality assurance, research, and analysis on enterprise healthcare datasets. Combined with industrial training at Nairobi City Water & Sewerage Company, I have developed strong expertise in IT support, troubleshooting, database management, cloud technologies, and delivering reliable technology solutions.
</p>
              <br/><br/>
I am an Information Technology graduate with over two years of professional experience in software development, systems support, data analysis, and enterprise data management. Since April 2024, I have worked at Nextvijo Software Solutions designing, deploying, and maintaining business information systems while providing technical support and database administration. I also work remotely as a Data Curator and Data Analyst at Veeva Systems, where I perform data validation, quality assurance, research, and analysis on enterprise healthcare datasets. Combined with industrial training at Nairobi City Water & Sewerage Company, I have developed strong expertise in IT support, troubleshooting, database management, cloud technologies, and delivering reliable technology solutions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-primary rounded-lg border border-white/5 hover:border-accent/50 transition-colors">
                <Code className="text-accent mb-2" />
                {/* Certificates */}
<div className="mt-8">
  <h3 className="text-2xl font-bold text-white mb-6">
    Achievements & Certifications
  </h3>


  <div className="space-y-10">

  <div className="bg-primary rounded-xl p-6 border border-white/10">
    <img
      src="/world.jpg"
      alt="Guinness World Record"
      className="w-full max-w-4xl mx-auto rounded-lg object-contain"
    />

    <h4 className="text-2xl font-bold text-white mt-6">
      🏆 Guinness World Record Holder
    </h4>

    <p className="text-gray-400 mt-3">
      Official Guinness World Record certificate awarded through KANZ AI.
    </p>
  </div>

  <div className="bg-primary rounded-xl p-6 border border-white/10">
    <img
      src="/kanz.jpg"
      alt="KANZ AI Certificate"
      className="w-full max-w-4xl mx-auto rounded-lg object-contain"
    />

    <h4 className="text-2xl font-bold text-white mt-6">
      🤖 KANZ AI Certificate
    </h4>

    <p className="text-gray-400 mt-3">
      Successfully completed the KANZ AI program.
    </p>
  </div>

</div>
</div>
<div className="mt-8">
  <a
    href="https://try.ka.nz/ai/tyllenaziz"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center px-6 py-3 bg-accent text-black font-semibold rounded-lg hover:scale-105 transition-all"
  >
    🚀 View My KANZ AI Portfolio
  </a>
</div>
                <h3 className="font-semibold text-white">Full Stack Dev</h3>
              </div>
              <div className="p-4 bg-primary rounded-lg border border-white/5 hover:border-purple-500/50 transition-colors">
                <Smartphone className="text-purple-500 mb-2" />
                <h3 className="font-semibold text-white">React Native</h3>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Skills Section */}
          <motion.div
            id="skills"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
            {skills.map((skillGroup, index) => (
              <div key={index}>
                <h4 className="text-accent font-medium mb-3">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-accent hover:text-white transition-all cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;