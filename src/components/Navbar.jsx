import { useEffect, useState } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { LINKS } from '../data/content';

const links = [
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? 'border-b border-white/10 bg-ink-900/80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-ivory" aria-label="Tyllen Aziz — home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 font-bold text-ink-950">T</span>
          <span className="hidden sm:inline">Tyllen Aziz</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${active === l.id ? 'bg-white/10 text-gold-300' : 'text-ivory/70 hover:text-ivory'}`}>
                {l.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !px-5 !py-2.5 md:inline-flex">
            <Download size={16} aria-hidden="true" /> CV
          </a>
          <button className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-ivory md:hidden" onClick={() => setOpen(!open)}
            aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 px-5 pb-6 pt-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-ivory/80 hover:bg-white/5">{l.name}</a>
              </li>
            ))}
          </ul>
          <a href={LINKS.cv} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 w-full"><Download size={16} aria-hidden="true" /> Download CV</a>
        </div>
      )}
    </header>
  );
}
