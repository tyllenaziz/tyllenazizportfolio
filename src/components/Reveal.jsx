import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({ eyebrow, title, sub }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="h-display text-4xl md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-lg text-ivory/60">{sub}</p>}
    </Reveal>
  );
}
