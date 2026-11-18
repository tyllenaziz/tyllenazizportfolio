import { ChevronRight, LineChart } from 'lucide-react';
import Reveal, { SectionHeading } from './Reveal';
import { skillGroups, dataPipeline, dataSkills } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" className="section bg-ink-800/40">
      <div className="container-x">
        <SectionHeading eyebrow="Skills" title="Full-stack engineering, grounded in data" sub="Technologies I have used in real projects and professional work." />

        {/* Data science spotlight */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-mint-400/20 bg-gradient-to-br from-mint-500/10 via-ink-800 to-gold-500/10 p-7 md:p-10">
            <div className="flex items-center gap-3 text-mint-300"><LineChart size={22} aria-hidden="true" /><h3 className="font-display text-2xl text-ivory md:text-3xl">Data Science &amp; Analytics</h3></div>
            <p className="mt-3 max-w-2xl text-ivory/65">My day job is making data reliable. At Veeva Systems I validate and analyse healthcare datasets, and in Kinga I train and ship a computer-vision model. I care about the whole path from raw data to a decision.</p>

            <ol className="mt-8 grid gap-3 md:grid-cols-5" aria-label="Data workflow">
              {dataPipeline.map((s, i) => (
                <li key={s.step} className="relative rounded-2xl border border-white/10 bg-ink-900/60 p-4">
                  <span className="font-mono text-xs text-mint-300">0{i + 1}</span>
                  <p className="mt-1 font-semibold text-ivory">{s.step}</p>
                  <p className="mt-1 text-xs text-ivory/55">{s.text}</p>
                  {i < dataPipeline.length - 1 && <ChevronRight className="absolute -right-3.5 top-1/2 z-10 hidden -translate-y-1/2 text-mint-300/60 md:block" size={20} aria-hidden="true" />}
                </li>
              ))}
            </ol>

            <ul className="mt-6 flex flex-wrap gap-2">
              {dataSkills.map((s) => <li key={s} className="rounded-full border border-mint-400/30 bg-mint-400/10 px-3.5 py-1.5 text-sm font-medium text-mint-300">{s}</li>)}
            </ul>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.06}>
              <div className="glass h-full rounded-2xl p-6 transition hover:-translate-y-1 hover:border-gold-400/40">
                <h3 className="font-semibold text-gold-300">{g.title}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">{g.items.map((s) => <li key={s} className="chip">{s}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
