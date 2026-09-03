'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import Link from 'next/link';

const modules = [
  'Lead Management',
  'Counsellor Workspace',
  'Omnichannel Inbox',
  'AI Scoring',
  'Fee Collection',
  'Application Portal',
  'Analytics',
  'Document Management',
  'Integrations',
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#060818] pt-28 pb-20 sm:pt-36 sm:pb-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-sm font-medium text-white/70 backdrop-blur-sm"
        >
          <Layers className="h-4 w-4" />9 integrated CRM modules
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl leading-[1.08] mb-6"
        >
          One CRM platform. <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-primary via-violet-400 to-blue-400 bg-clip-text text-transparent">
            Everything your admissions team needs.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg leading-8 text-white/55 mb-8 max-w-2xl mx-auto"
        >
          From the first inquiry to the confirmed enrolment — EnrollIQ covers every step of the admissions journey with
          purpose-built CRM tools that are faster, smarter, and more connected than anything else on the market.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <Link
            href="/login"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-violet-600 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-primary/25 hover:opacity-90 transition-opacity"
          >
            Start free trial <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/8 px-6 py-3 text-sm font-semibold text-white hover:bg-white/15 transition-colors backdrop-blur-sm"
          >
            Book a personalised demo
          </Link>
        </motion.div>

        {/* Module pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {modules.map((m, i) => (
            <motion.span
              key={m}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.04 }}
              className="rounded-full border border-white/15 bg-white/8 px-3.5 py-1.5 text-xs font-medium text-white/60 backdrop-blur-sm"
            >
              {m}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
