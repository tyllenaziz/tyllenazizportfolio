import { ExternalLink, GraduationCap, Rocket, Database } from 'lucide-react';
import Reveal, { SectionHeading } from './Reveal';
import { achievements, LINKS } from '../data/content';

const pillars = [
  { icon: GraduationCap, title: 'BSc Information Technology', text: 'Mount Kenya University, Second Class Honours.' },
  { icon: Rocket, title: 'Co-founder', text: 'Nextvijo Software Solutions, building business systems since April 2024.' },
  { icon: Database, title: 'Data & AI', text: 'Data curation and analysis at Veeva Systems, computer vision in Kinga.' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="About" title="Building useful things, one dataset and one app at a time" />
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-ivory/70">
            <p>
              I am an Information Technology graduate with over two years of professional experience across software development, systems support, database management and data analysis. Since April 2024 I have co-run <span className="font-semibold text-ivory">Nextvijo Software Solutions</span>, where I design, deploy and maintain business information systems and support the people who use them.
            </p>
            <p>
              Alongside that, I work remotely as a Data Curator and Data Analyst at <span className="font-semibold text-ivory">Veeva Systems</span>, validating and researching enterprise healthcare data. That work taught me how much good software and good models depend on clean, trustworthy data, and it shapes how I build.
            </p>
            <p>
              I am interested in applying AI and technology to practical problems, especially in underserved communities. Kinga, which helps farmers identify crop pests from a phone, and NexusGrid, a student-led data and AI initiative at Mount Kenya University, come from that interest.
            </p>
            <p>
              Through the KANZ AI programme I am also a <span className="font-semibold text-gold-300">Guinness World Record holder</span> for the Most Users in an Artificial Intelligence Video Lesson.
            </p>
          </Reveal>

          <div className="space-y-4">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="glass flex gap-4 rounded-2xl p-5 transition hover:border-gold-400/40">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold-400/10 text-gold-300"><p.icon size={22} aria-hidden="true" /></span>
                  <div><h3 className="font-semibold text-ivory">{p.title}</h3><p className="mt-1 text-sm text-ivory/60">{p.text}</p></div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <Reveal><h3 className="h-display mb-8 text-2xl md:text-3xl">Achievements &amp; certificates</h3></Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.1}>
                <figure className="glass group overflow-hidden rounded-3xl">
                  <div className="flex h-72 items-center justify-center overflow-hidden bg-ink-950/60 p-4">
                    <img src={a.img} alt={a.alt} loading="lazy" className="h-full w-auto max-w-full rounded-lg object-contain transition duration-500 group-hover:scale-105" />
                  </div>
                  <figcaption className="p-6"><h4 className="font-display text-xl text-ivory">{a.title}</h4><p className="mt-2 text-sm text-ivory/60">{a.text}</p></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <a href={LINKS.kanzAi} target="_blank" rel="noopener noreferrer" className="btn-ghost">View my KANZ AI portfolio <ExternalLink size={15} aria-hidden="true" /></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
