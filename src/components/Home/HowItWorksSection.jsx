'use client';

import { motion } from 'framer-motion';
import { Magnet, MessageCircle, BadgeCheck, GraduationCap, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    icon: Magnet,
    label: 'Capture',
    title: 'Capture every inquiry — from every source',
    description:
      'Whether a student fills a form on your website, clicks a Facebook ad, walks into your campus, or calls your helpline — every inquiry lands in EnrollIQ instantly. Zero lead leakage, zero manual data entry. Duplicate leads are automatically merged.',
    details: [
      '20+ source integrations: JEE portals, Shiksha, CollegeDekho, Google Ads',
      'Instant lead capture via embeddable web forms & APIs',
      'Auto-deduplication with intelligent merge logic',
      'Walk-in & call-in capture for offline inquiries',
    ],
    accent: 'from-violet-600 to-violet-400',
    light: 'bg-violet-50 border-violet-200 text-violet-700',
    dot: 'bg-violet-500',
    glow: 'bg-violet-500/15',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=85&auto=format&fit=crop',
  },
  {
    number: '02',
    icon: MessageCircle,
    label: 'Engage',
    title: 'Engage applicants at the right moment',
    description:
      "AI analyses each applicant's behaviour and intent in real time, then automatically triggers the right message on the right channel — WhatsApp, email, or SMS. Your counsellors are notified when a lead is hot and ready to convert.",
    details: [
      'AI intent scoring with 50+ behavioural signals',
      'WhatsApp, Email & SMS from a unified inbox',
      'Behaviour-triggered drip sequences (no manual effort)',
      "Counsellor nudges: 'Call now — lead just viewed fee page'",
    ],
    accent: 'from-blue-600 to-cyan-400',
    light: 'bg-blue-50 border-blue-200 text-blue-700',
    dot: 'bg-blue-500',
    glow: 'bg-blue-500/15',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&auto=format&fit=crop',
  },
  {
    number: '03',
    icon: BadgeCheck,
    label: 'Convert',
    title: 'Convert leads into confirmed applicants',
    description:
      'The branded student portal lets applicants complete their application, upload documents, book interview slots, and pay the application fee — all in one place. Counsellors track every step in real time and step in exactly when needed.',
    details: [
      'Branded self-service applicant portal',
      'Online forms, document uploads & slot booking',
      'Integrated fee collection (Razorpay, PayU, CC Avenue)',
      'Stage automation: auto-move leads on form completion',
    ],
    accent: 'from-emerald-600 to-teal-400',
    light: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    dot: 'bg-emerald-500',
    glow: 'bg-emerald-500/15',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=85&auto=format&fit=crop',
  },
  {
    number: '04',
    icon: GraduationCap,
    label: 'Enroll',
    title: 'Enroll students — and analyse every outcome',
    description:
      'Once a student is confirmed, EnrollIQ handles the handoff to your student information system. Post-admission analytics show you exactly which sources, campaigns, and counsellors drove enrolments — so every future cycle improves.',
    details: [
      'One-click confirmation & offer letter generation',
      'SIS/ERP integration for seamless data handoff',
      'Post-cycle analytics: source ROI, counsellor rankings',
      'Publisher benchmarking to optimise ad spend',
    ],
    accent: 'from-amber-600 to-orange-400',
    light: 'bg-amber-50 border-amber-200 text-amber-700',
    dot: 'bg-amber-500',
    glow: 'bg-amber-500/15',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85&auto=format&fit=crop',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-muted/30 py-12 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">How it works</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            From first inquiry to confirmed enrolment
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete 4-stage CRM workflow — automated, intelligent, and built for education.
          </p>
        </motion.div>

        {/* Step flow indicator */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16 flex items-center justify-center gap-0"
        >
          {steps.map(({ number, label, icon: Icon, accent, light }, i) => (
            <div key={label} className="flex items-center">
              <div className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold ${light}`}>
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </div>
              {i < steps.length - 1 && <ArrowRight className="h-4 w-4 text-muted-foreground/40 mx-1" />}
            </div>
          ))}
        </motion.div>

        {/* Steps */}
        <div className="flex flex-col gap-20">
          {steps.map((step, i) => {
            const isEven = i % 2 === 1;
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center ${isEven ? 'lg:[direction:rtl]' : ''}`}
              >
                {/* Text */}
                <div className={isEven ? 'lg:[direction:ltr]' : ''}>
                  {/* Step label */}
                  <div
                    className={`mb-5 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-bold ${step.light}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    Step {step.number} — {step.label}
                  </div>

                  <h3 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl mb-4 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-base leading-8 text-muted-foreground mb-7">{step.description}</p>

                  <ul className="flex flex-col gap-3">
                    {step.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-sm text-foreground">
                        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${step.dot}`} />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* Progress pips */}
                  <div className="mt-8 flex items-center gap-2">
                    {steps.map((_, j) => (
                      <div
                        key={j}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          j === i ? `w-10 bg-gradient-to-r ${step.accent}` : 'w-4 bg-muted'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div className={`relative ${isEven ? 'lg:[direction:ltr]' : ''}`}>
                  {/* Glow behind image */}
                  <div className={`absolute -inset-4 rounded-3xl ${step.glow} blur-2xl -z-10`} />
                  <div className="overflow-hidden rounded-2xl border border-border shadow-xl shadow-black/8">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={800}
                      height={500}
                      className="w-full object-cover aspect-[16/10]"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-black/5`} />
                  </div>

                  {/* Floating step number badge */}
                  <div
                    className={`absolute -top-4 ${isEven ? 'left-4' : 'right-4'} flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} text-white text-lg font-black shadow-lg`}
                  >
                    {step.number}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-colors"
          >
            See the full workflow in action <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
