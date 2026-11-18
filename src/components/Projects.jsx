import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, ExternalLink, Download, Check } from 'lucide-react';
import Reveal, { SectionHeading } from './Reveal';
import { projects, categories } from '../data/content';

function Actions({ p }) {
  const primaryLive = p.live;
  const Icon = primaryLive?.type === 'install' ? Download : ExternalLink;
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {primaryLive ? (
        <a href={primaryLive.href} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5">
          <Icon size={15} aria-hidden="true" /> {primaryLive.label}<span className="sr-only"> for {p.title} (opens in new tab)</span>
        </a>
      ) : (
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-primary !px-5 !py-2.5">
          <Github size={15} aria-hidden="true" /> View Source<span className="sr-only"> for {p.title} on GitHub (opens in new tab)</span>
        </a>
      )}
      {primaryLive && p.github && (
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn-ghost !px-5 !py-2.5">
          <Github size={15} aria-hidden="true" /> GitHub<span className="sr-only"> repository for {p.title} (opens in new tab)</span>
        </a>
      )}
    </div>
  );
}

function Card({ p, large }) {
  return (
    <motion.article layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.4 }}
      className={`group glass flex overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-2xl hover:shadow-gold-500/10 ${large ? 'flex-col lg:col-span-2 lg:flex-row' : 'flex-col'}`}>
      <div className={`relative overflow-hidden ${large ? 'lg:w-[46%]' : ''}`}>
        <img src={p.image} alt={`${p.title} project illustration`} width="960" height="600" loading="lazy"
          className="aspect-[16/10] h-full w-full object-cover transition duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" aria-hidden="true" />
        {p.featured && <span className="absolute left-4 top-4 rounded-full bg-gold-400 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-ink-950">Featured</span>}
      </div>
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-mint-300">{p.kind}</p>
        <h3 className="mt-2 font-display text-2xl text-ivory transition group-hover:text-gold-300">{p.title}</h3>
        <p className="mt-3 leading-relaxed text-ivory/65">{p.desc}</p>
        <ul className={`mt-5 space-y-2 text-sm text-ivory/75 ${large ? '' : 'hidden sm:block'}`}>
          {p.features.slice(0, large ? 4 : 3).map((f) => (
            <li key={f} className="flex gap-2"><Check size={15} className="mt-0.5 shrink-0 text-gold-400" aria-hidden="true" />{f}</li>
          ))}
        </ul>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">{p.tech.map((t) => <li key={t} className="chip">{t}</li>)}</ul>
        <div className="mt-auto"><Actions p={p} /></div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [cat, setCat] = useState('All');
  const list = useMemo(() => projects.filter((p) => cat === 'All' || p.categories.includes(cat)), [cat]);

  return (
    <section id="projects" className="section bg-ink-800/40">
      <div className="container-x">
        <SectionHeading eyebrow="Projects" title="Real systems, real users" sub="Web platforms, mobile apps and AI work. Each button goes to the live app, the installable build or the source code." />

        <Reveal className="mb-10 flex flex-wrap gap-2" >
          <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${cat === c ? 'border-gold-400 bg-gold-400 text-ink-950' : 'border-white/15 bg-white/5 text-ivory/80 hover:border-gold-400/50'}`}>
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p) => <Card key={p.id} p={p} large={p.featured && cat === 'All'} />)}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
