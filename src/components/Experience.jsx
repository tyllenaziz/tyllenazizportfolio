import { Briefcase, GraduationCap } from 'lucide-react';
import Reveal, { SectionHeading } from './Reveal';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Experience" title="Where I have worked and studied" />
        <ol className="relative mx-auto max-w-3xl space-y-8 before:absolute before:bottom-2 before:left-5 before:top-2 before:w-px before:bg-gradient-to-b before:from-gold-400 before:via-white/15 before:to-transparent">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.role} delay={i * 0.07} className="relative pl-16">
              <span className={`absolute left-0 top-1 grid h-10 w-10 place-items-center rounded-full border bg-ink-900 ${e.kind === 'edu' ? 'border-mint-400/60 text-mint-300' : 'border-gold-400/60 text-gold-300'}`}>
                {e.kind === 'edu' ? <GraduationCap size={18} aria-hidden="true" /> : <Briefcase size={18} aria-hidden="true" />}
              </span>
              <div className="glass rounded-2xl p-6 transition hover:border-gold-400/30">
                <p className="font-mono text-xs uppercase tracking-widest text-gold-400">{e.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-ivory">{e.role}</h3>
                <p className="text-ivory/60">{e.org}</p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ivory/70">
                  {e.points.map((p) => <li key={p} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-400" aria-hidden="true" />{p}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
