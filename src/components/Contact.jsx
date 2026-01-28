import React from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-secondary/30 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          
          {/* LEFT SIDE: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-gray-400 mb-8 text-lg">
              I'm currently looking for new opportunities. Whether you have a project in mind, a question, or just want to say hi, feel free to reach out!
            </p>
            
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:tyllenaziz@gmail.com" className="hover:text-accent transition-colors">tyllenaziz@gmail.com</a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+254793982097" className="hover:text-accent transition-colors">0793 982 097</a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <h3 className="text-white font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                {/* GitHub */}
                <a 
                  href="https://github.com/tyllenaziz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                
                {/* LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/tyllen-aziz-639b00264/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-300 hover:bg-accent hover:text-primary transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form (Powered by FormSubmit.co) */}
          <form 
            action="https://formsubmit.co/926babe75b569e4a6f3f22e076cd9827" 
            method="POST"
            className="bg-primary p-8 rounded-2xl border border-white/5 shadow-xl"
          >
            {/* Form Settings */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Portfolio Message!" />
            
            {/* UPDATED: Redirect to your live Vercel site, NOT localhost */}
            <input type="hidden" name="_next" value="https://tyllenazizportfolio.vercel.app/" />

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-white/10 focus:border-accent focus:outline-none text-white transition-colors" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-white/10 focus:border-accent focus:outline-none text-white transition-colors" 
                  placeholder="your@email.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                <textarea 
                  name="message" 
                  rows="4" 
                  required
                  className="w-full px-4 py-3 bg-secondary rounded-lg border border-white/10 focus:border-accent focus:outline-none text-white transition-colors" 
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-3 bg-accent text-primary font-bold rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </div>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Tyllen Aziz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
