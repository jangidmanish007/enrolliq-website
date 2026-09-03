'use client';

import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    body: 'To eliminate friction from the student enrolment journey — empowering every institution to admit more deserving students through intelligent, data-driven processes.',
    color: 'bg-violet-500/10 text-violet-600 border-violet-200',
    glow: 'from-violet-500/5',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    body: 'A world where no talented student misses their dream institution because of slow response times, lost leads, or fragmented communication.',
    color: 'bg-blue-500/10 text-blue-600 border-blue-200',
    glow: 'from-blue-500/5',
  },
  {
    icon: Heart,
    title: 'Our Values',
    body: 'Student-first thinking, radical transparency with our partners, relentless iteration on product quality, and deep empathy for the counsellors who work tirelessly on the front lines.',
    color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
    glow: 'from-emerald-500/5',
  },
];

export default function MissionSection() {
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
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Purpose</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Why EnrollIQ exists</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;re not just building software. We&apos;re reshaping how education reaches students.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pillars.map(({ icon: Icon, title, body, color, glow }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className={`relative overflow-hidden rounded-2xl border bg-card p-8 shadow-sm`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${glow} to-transparent`} />
              <div
                className={`relative mb-6 inline-flex h-13 w-13 items-center justify-center rounded-2xl border ${color}`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="relative mb-3 text-xl font-bold text-foreground">{title}</h3>
              <p className="relative text-sm leading-7 text-muted-foreground">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* Wide story block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 to-violet-500/5 p-10 lg:p-14"
        >
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground sm:text-3xl mb-5">The problem we set out to solve</h3>
              <p className="text-base leading-8 text-muted-foreground mb-4">
                In 2021, our founders were consulting for a Tier-1 university in Bengaluru. They discovered the
                admissions team was managing 25,000 annual inquiries using a combination of Excel sheets, WhatsApp
                groups, and three disconnected CRMs. Leads were slipping through the cracks daily.
              </p>
              <p className="text-base leading-8 text-muted-foreground">
                The irony? The same university had a state-of-the-art campus, Nobel Prize-winning faculty, and
                world-class labs — but a broken funnel meant thousands of eligible students never made it past the first
                interaction. That&apos;s the gap EnrollIQ closes.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { before: '25,000 leads', after: 'Zero lost', label: 'Inquiries tracked' },
                { before: '3 CRMs', after: '1 platform', label: 'Systems unified' },
                { before: '12% conversion', after: '34% conversion', label: 'Enrolment rate' },
                { before: '5 day', after: '2 hour', label: 'Average response time' },
              ].map(({ before, after, label }) => (
                <div key={label} className="rounded-xl border border-border bg-card p-5">
                  <p className="text-xs text-muted-foreground mb-1 line-through">{before}</p>
                  <p className="text-lg font-bold text-primary">{after}</p>
                  <p className="text-xs text-muted-foreground mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
