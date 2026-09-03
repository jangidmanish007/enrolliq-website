'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Handshake, Rocket, Users2, Lock, RefreshCcw } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Student-First Thinking',
    description:
      "Every feature we build starts with one question: does this help a student find the right institution? If not, it doesn't ship.",
    color: 'yellow',
  },
  {
    icon: Handshake,
    title: 'Partnership Over Vendor',
    description:
      'We treat institutions as long-term partners, not customers. Your success is literally our success — we grow together.',
    color: 'blue',
  },
  {
    icon: Rocket,
    title: 'Bias for Action',
    description:
      'We ship fast, learn from real data, and iterate relentlessly. Perfect is the enemy of good — especially in EdTech.',
    color: 'violet',
  },
  {
    icon: Users2,
    title: 'Inclusive by Design',
    description:
      'Our platform is built to serve institutions from Tier-1 metros to Tier-3 cities with equal capability and equal care.',
    color: 'emerald',
  },
  {
    icon: Lock,
    title: 'Data Privacy Always',
    description:
      'Student data is sacred. We are ISO 27001 certified, GDPR compliant, and will never monetise or misuse institutional data.',
    color: 'red',
  },
  {
    icon: RefreshCcw,
    title: 'Relentless Improvement',
    description:
      'We release new features every two weeks based on direct feedback from admissions teams. Your voice shapes the product.',
    color: 'cyan',
  },
];

const colorMap = {
  yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-600', ring: 'ring-yellow-200' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-600', ring: 'ring-blue-200' },
  violet: { bg: 'bg-violet-500/10', text: 'text-violet-600', ring: 'ring-violet-200' },
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-600', ring: 'ring-emerald-200' },
  red: { bg: 'bg-red-500/10', text: 'text-red-600', ring: 'ring-red-200' },
  cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-600', ring: 'ring-cyan-200' },
};

export default function ValuesSection() {
  return (
    <section className="bg-muted/30 py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our values</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The principles that guide us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Values aren&apos;t wall art here — they&apos;re the filter for every decision we make.
          </p>
        </motion.div>

        {/* Values grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ icon: Icon, title, description, color }, i) => {
            const c = colorMap[color];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="relative group rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className={`pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full ${c.bg} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Number */}
                <span className="absolute top-6 right-7 text-5xl font-black text-foreground/4">0{i + 1}</span>

                <div
                  className={`relative mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${c.ring} ${c.bg}`}
                >
                  <Icon className={`h-5 w-5 ${c.text}`} />
                </div>
                <h3 className="relative mb-3 text-base font-semibold text-foreground">{title}</h3>
                <p className="relative text-sm leading-7 text-muted-foreground">{description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
