import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Trophy, MapPin } from 'lucide-react';
import { LINKS, roles, projects } from '../data/content';

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  const stats = [
    { n: '2+', l: 'Years professional experience' },
    { n: `${projects.length}`, l: 'Projects shipped or in build' },
    { n: '1', l: 'Guinness World Record' },
  ];

  return (
    <section id="top" className="noise relative flex min-h-screen items-center overflow-hidden pb-16 pt-28">
      {/* animated background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-10 h-[28rem] w-[28rem] animate-drift rounded-full bg-gold-500/20 blur-[120px]" />
        <div className="absolute -right-24 bottom-0 h-[30rem] w-[30rem] animate-drift rounded-full bg-mint-500/20 blur-[130px]" style={{ animationDelay: '-8s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm text-gold-300">
            <Trophy size={15} aria-hidden="true" /> Guinness World Record Holder
          </motion.span>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}
            className="h-display mt-6 text-5xl leading-[1.05] sm:text-6xl xl:text-7xl">
            Tyllen Aziz <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-mint-300 bg-clip-text text-transparent">Alugo</span>
          </motion.h1>

          <div className="mt-5 h-9 text-xl font-semibold text-ivory/90 sm:text-2xl" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.span key={roles[i]} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35 }} className="inline-block">
                {roles[i]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 max-w-xl text-lg leading-relaxed text-ivory/65">
            I build web and mobile software and turn messy data into something people can trust. Co-founder of Nextvijo Software Solutions, working across full-stack development, data analysis and applied AI, with a focus on practical tools for communities that are often overlooked.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">View My Projects <ArrowRight size={16} aria-hidden="true" /></a>
            <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="btn-ghost"><Download size={16} aria-hidden="true" /> Download CV</a>
            <a href={LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile" className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-ivory transition hover:border-gold-400/60 hover:text-gold-300"><Github size={20} /></a>
            <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-ivory transition hover:border-gold-400/60 hover:text-gold-300"><Linkedin size={20} /></a>
          </motion.div>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.l}>
                <dt className="sr-only">{s.l}</dt>
                <dd className="h-display text-3xl text-gold-300 sm:text-4xl">{s.n}</dd>
                <p className="mt-1 text-xs leading-snug text-ivory/50" aria-hidden="true">{s.l}</p>
              </div>
            ))}
          </dl>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-gold-400/40 via-transparent to-mint-400/40 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-t-[12rem] rounded-b-[2rem] border border-white/15 bg-ink-800 p-2">
            <img src="/profile.webp" alt="Portrait of Tyllen Aziz Alugo" width="800" height="1067" fetchpriority="high"
              className="aspect-[4/5] w-full rounded-t-[11.5rem] rounded-b-[1.5rem] object-cover object-top" />
          </div>
          <div className="glass absolute -left-4 bottom-10 animate-float rounded-2xl px-4 py-3 shadow-xl sm:-left-10">
            <p className="font-mono text-[10px] uppercase tracking-widest text-gold-400">Co-founder</p>
            <p className="text-sm font-semibold text-ivory">Nextvijo Software Solutions</p>
          </div>
          <div className="glass absolute -right-2 top-16 animate-float rounded-2xl px-4 py-3 shadow-xl sm:-right-8" style={{ animationDelay: '-3s' }}>
            <p className="flex items-center gap-1.5 text-sm font-semibold text-ivory"><MapPin size={14} className="text-mint-300" aria-hidden="true" /> Nairobi, Kenya</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
