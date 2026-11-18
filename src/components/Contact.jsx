import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import Reveal, { SectionHeading } from './Reveal';
import { LINKS } from '../data/content';

const field = 'w-full rounded-xl border border-white/10 bg-ink-900/70 px-4 py-3 text-ivory placeholder:text-ivory/30 transition focus:border-gold-400 focus:outline-none';

export default function Contact() {
  const rows = [
    { icon: Mail, label: 'Email', text: LINKS.email, href: `mailto:${LINKS.email}` },
    { icon: Phone, label: 'Phone', text: LINKS.phoneLabel, href: `tel:${LINKS.phone}` },
    { icon: MapPin, label: 'Location', text: 'Nairobi, Kenya' },
  ];
  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Contact" title="Let's build something useful" sub="Open to full-stack, data and AI opportunities, and to projects that solve real problems." />
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal className="space-y-5">
            {rows.map((r) => {
              const inner = (<><span className="grid h-12 w-12 place-items-center rounded-xl bg-gold-400/10 text-gold-300"><r.icon size={22} aria-hidden="true" /></span><span><span className="block text-xs uppercase tracking-widest text-ivory/45">{r.label}</span><span className="text-ivory">{r.text}</span></span></>);
              return r.href
                ? <a key={r.label} href={r.href} className="glass flex items-center gap-4 rounded-2xl p-4 transition hover:border-gold-400/40">{inner}</a>
                : <div key={r.label} className="glass flex items-center gap-4 rounded-2xl p-4">{inner}</div>;
            })}
            <div className="flex gap-3 pt-2">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Github size={16} aria-hidden="true" /> GitHub</a>
              <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Linkedin size={16} aria-hidden="true" /> LinkedIn</a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form action="https://formsubmit.co/926babe75b569e4a6f3f22e076cd9827" method="POST" className="glass space-y-5 rounded-3xl p-6 md:p-8">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Portfolio Message!" />
              <input type="hidden" name="_next" value="https://tyllenazizportfolio.vercel.app/" />
              <div><label htmlFor="name" className="mb-2 block text-sm font-medium text-ivory/70">Name</label><input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={field} /></div>
              <div><label htmlFor="email" className="mb-2 block text-sm font-medium text-ivory/70">Email</label><input id="email" name="email" type="email" required autoComplete="email" placeholder="you@example.com" className={field} /></div>
              <div><label htmlFor="message" className="mb-2 block text-sm font-medium text-ivory/70">Message</label><textarea id="message" name="message" rows="5" required placeholder="How can I help?" className={field} /></div>
              <button type="submit" className="btn-primary w-full">Send message <Send size={16} aria-hidden="true" /></button>
            </form>
          </Reveal>
        </div>
        <p className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-ivory/40">© {new Date().getFullYear()} Tyllen Aziz Alugo. Built with React, Tailwind CSS and Framer Motion.</p>
      </div>
    </section>
  );
}
