'use client';

import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const row1 = [
  { name: 'MIT WPU', sector: 'Engineering', emoji: '🎓' },
  { name: 'Amity University', sector: 'Multi-discipline', emoji: '🏛️' },
  { name: 'Manipal Academy', sector: 'Medical & Tech', emoji: '🏥' },
  { name: 'BITS Pilani', sector: 'Engineering', emoji: '⚙️' },
  { name: 'Christ University', sector: 'Arts & Science', emoji: '✝️' },
  { name: 'Ashoka University', sector: 'Liberal Arts', emoji: '📚' },
  { name: 'SRM Institute', sector: 'Multi-discipline', emoji: '🔬' },
  { name: 'VIT University', sector: 'Technology', emoji: '💻' },
];

const row2 = [
  { name: 'Jindal Global', sector: 'Law & Business', emoji: '⚖️' },
  { name: 'OP Jindal', sector: 'Engineering', emoji: '🏗️' },
  { name: 'Lovely Professional', sector: 'Multi-discipline', emoji: '🌟' },
  { name: 'Sharda University', sector: 'Multi-discipline', emoji: '🎯' },
  { name: 'Symbiosis', sector: 'Management', emoji: '📊' },
  { name: 'Bennett University', sector: 'Technology', emoji: '🖥️' },
  { name: 'Jain University', sector: 'Commerce & Arts', emoji: '🎨' },
  { name: 'Parul University', sector: 'Health Sciences', emoji: '💊' },
];

function PartnerCard({ name, sector, emoji }) {
  return (
    /* mx-2 keeps cards snug; no extra gap between them */
    <div className="mx-2 flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 shadow-sm shrink-0 select-none hover:border-primary/30 hover:shadow-md transition-all duration-200 cursor-default">
      <span className="text-lg leading-none">{emoji}</span>
      <div className="leading-tight">
        <p className="text-[13px] font-semibold text-foreground whitespace-nowrap">{name}</p>
        <p className="text-[11px] text-muted-foreground mt-0.5 whitespace-nowrap">{sector}</p>
      </div>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-7xl px-4 lg:px-8 mb-10 text-center"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Partner institutions</p>
        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
          Powering admissions at <span className="gradient-text">150+ institutions</span>
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Trusted by leading universities, colleges &amp; institutes across India.
        </p>
      </motion.div>

      {/* Marquee rows — no gap between rows, just a small visual separation */}
      <div className="space-y-3">
        {/* Row 1 — left */}
        <Marquee speed={38} gradient gradientColor="white" gradientWidth={100} pauseOnHover autoFill>
          {row1.map((p) => (
            <PartnerCard key={p.name} {...p} />
          ))}
        </Marquee>

        {/* Row 2 — right */}
        <Marquee speed={32} direction="right" gradient gradientColor="white" gradientWidth={100} pauseOnHover autoFill>
          {row2.map((p) => (
            <PartnerCard key={p.name} {...p} />
          ))}
        </Marquee>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="mx-auto max-w-7xl px-4 lg:px-8 mt-10"
      >
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {[
            { value: '150+', label: 'partner institutions' },
            { value: '12', label: 'states across India' },
            { value: '500K+', label: 'enquiries / year' },
            { value: '4.9★', label: 'platform rating' },
          ].map(({ value, label }) => (
            <span key={label} className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <span className="font-bold text-foreground">{value}</span>
              {label}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
