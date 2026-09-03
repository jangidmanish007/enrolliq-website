'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Clock, Globe2, ShieldCheck } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '340%',
    label: 'Average increase in lead conversion',
    color: 'bg-violet-500/10 text-violet-600',
    border: 'border-violet-100',
  },
  {
    icon: Clock,
    value: '4x',
    label: 'Faster admissions cycle vs manual process',
    color: 'bg-blue-500/10 text-blue-600',
    border: 'border-blue-100',
  },
  {
    icon: Globe2,
    value: '150+',
    label: 'Institutions across India & Middle East',
    color: 'bg-emerald-500/10 text-emerald-600',
    border: 'border-emerald-100',
  },
  {
    icon: ShieldCheck,
    value: '99.9%',
    label: 'Platform uptime SLA guaranteed',
    color: 'bg-amber-500/10 text-amber-600',
    border: 'border-amber-100',
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative bg-muted/30 py-20 sm:py-24 overflow-hidden">
      {/* Decorative blob */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-primary/4 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">By the numbers</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Results that speak for themselves
          </h2>
          <p className="mt-3 text-muted-foreground">Real outcomes from institutions that switched to EnrollIQ.</p>
        </motion.div>

        {/* Stats grid */}
        <div ref={ref} className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ icon: Icon, value, label, color, border }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`relative overflow-hidden rounded-2xl border ${border} bg-card p-8 shadow-sm`}
            >
              {/* Icon */}
              <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
                <Icon className="h-5 w-5" />
              </div>

              {/* Value */}
              <div className="text-4xl font-extrabold tracking-tight text-foreground mb-2">{value}</div>
              <p className="text-sm leading-6 text-muted-foreground">{label}</p>

              {/* Subtle corner decoration */}
              <div
                className={`pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-full ${color} opacity-20 blur-2xl`}
              />
            </motion.div>
          ))}
        </div>

        {/* Logos trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-3"
        >
          <span className="text-xs font-medium text-muted-foreground mr-2">Trusted by teams at</span>
          {['MIT WPU', 'Amity University', 'Manipal', 'BITS Pilani', 'Christ University', 'Ashoka University'].map(
            (name) => (
              <span
                key={name}
                className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {name}
              </span>
            ),
          )}
        </motion.div>
      </div>
    </section>
  );
}
