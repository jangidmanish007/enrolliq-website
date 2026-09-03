'use client';

import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2021',
    quarter: 'Q1',
    title: 'The idea sparks',
    description:
      'Arjun and Priya, while consulting for a university in Bengaluru, discover the massive gap in admissions technology. EnrollIQ is conceived on a whiteboard.',
    color: 'bg-violet-500',
    light: 'bg-violet-500/10 border-violet-200',
    text: 'text-violet-600',
  },
  {
    year: '2021',
    quarter: 'Q3',
    title: 'First prototype ships',
    description:
      'After 6 months of building, the first working version of EnrollIQ is demoed to 5 institutions. All 5 sign pilot agreements on the spot.',
    color: 'bg-blue-500',
    light: 'bg-blue-500/10 border-blue-200',
    text: 'text-blue-600',
  },
  {
    year: '2022',
    quarter: 'Q1',
    title: 'Seed funding raised',
    description:
      'EnrollIQ raises ₹4.5 Cr in seed funding from leading EdTech investors. The team scales to 15 members across product, engineering, and customer success.',
    color: 'bg-emerald-500',
    light: 'bg-emerald-500/10 border-emerald-200',
    text: 'text-emerald-600',
  },
  {
    year: '2022',
    quarter: 'Q4',
    title: '50 institutions onboarded',
    description:
      'EnrollIQ crosses the 50 partner institution milestone. First CRM integrations with Meritto and LeadSquared launched. NPS score: 72.',
    color: 'bg-amber-500',
    light: 'bg-amber-500/10 border-amber-200',
    text: 'text-amber-600',
  },
  {
    year: '2023',
    quarter: 'Q2',
    title: 'AI features launch',
    description:
      'AI lead scoring, automated follow-up generation, and smart segmentation go live. Average conversion rate across partners improves by 34%.',
    color: 'bg-rose-500',
    light: 'bg-rose-500/10 border-rose-200',
    text: 'text-rose-600',
  },
  {
    year: '2024',
    quarter: 'Q1',
    title: 'Series A & 150+ partners',
    description:
      'EnrollIQ raises a ₹22 Cr Series A. Platform now serves 150+ institutions, manages 500K+ annual inquiries, and has enrolled 50,000+ students.',
    color: 'bg-primary',
    light: 'bg-primary/10 border-primary/20',
    text: 'text-primary',
  },
];

export default function TimelineSection() {
  return (
    <section className="bg-background py-12 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Our journey</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From a whiteboard to 150+ institutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Three years of building, iterating, and growing alongside our partners.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Centre line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border hidden lg:block" />

          <div className="flex flex-col gap-12">
            {milestones.map(({ year, quarter, title, description, color, light, text }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${year}-${quarter}`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center`}
                >
                  {/* Content card */}
                  <div className={`${isLeft ? 'lg:pr-12' : 'lg:order-2 lg:pl-12'}`}>
                    <div className={`rounded-2xl border ${light} bg-card p-7 shadow-sm`}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className={`rounded-full ${color} px-3 py-1 text-xs font-bold text-white`}>
                          {year} {quarter}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                      <p className="text-sm leading-7 text-muted-foreground">{description}</p>
                    </div>
                  </div>

                  {/* Centre dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className={`h-5 w-5 rounded-full border-4 border-background ${color} shadow-lg`} />
                  </div>

                  {/* Empty col for zigzag */}
                  <div className={`${isLeft ? 'lg:order-2' : 'lg:order-1'} hidden lg:block`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
