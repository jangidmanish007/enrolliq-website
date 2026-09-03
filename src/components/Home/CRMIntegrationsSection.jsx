'use client';

import { motion } from 'framer-motion';
import { Plug2, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const crms = [
  { name: 'Meritto', desc: 'Education CRM', color: 'bg-orange-500/10 text-orange-600 border-orange-200', emoji: '🎓' },
  { name: 'LeadSquared', desc: 'Lead Management', color: 'bg-blue-500/10 text-blue-600 border-blue-200', emoji: '📊' },
  { name: 'Neodove', desc: 'Calling CRM', color: 'bg-violet-500/10 text-violet-600 border-violet-200', emoji: '📞' },
  {
    name: 'TelecRM',
    desc: 'Tele-calling CRM',
    color: 'bg-purple-500/10 text-purple-600 border-purple-200',
    emoji: '📱',
  },
  { name: 'Superphone', desc: 'Conversational', color: 'bg-pink-500/10 text-pink-600 border-pink-200', emoji: '🦸' },
  { name: 'OnePage CRM', desc: 'Simple CRM', color: 'bg-amber-500/10 text-amber-600 border-amber-200', emoji: '📋' },
  {
    name: 'EAdmissions',
    desc: 'Edu Admissions',
    color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200',
    emoji: '🏫',
  },
  {
    name: 'CollegeDekho',
    desc: 'Admissions portal',
    color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
    emoji: '🏫',
  },
  {
    name: 'Shiksha',
    desc: 'Discovery portal',
    color: 'bg-yellow-500/10 text-yellow-600 border-yellow-200',
    emoji: '📚',
  },
  { name: 'Careers360', desc: 'Ranking portal', color: 'bg-teal-500/10 text-teal-600 border-teal-200', emoji: '🏆' },
  { name: 'Fedena', desc: 'School ERP', color: 'bg-rose-500/10 text-rose-600 border-rose-200', emoji: '🏫' },
  { name: 'Campusnexus', desc: 'Campus mgmt', color: 'bg-cyan-500/10 text-cyan-600 border-cyan-200', emoji: '🖥️' },
  { name: 'MSG91', desc: 'SMS platform', color: 'bg-sky-500/10 text-sky-600 border-sky-200', emoji: '📨' },
  { name: 'Razorpay', desc: 'Payment gateway', color: 'bg-green-500/10 text-green-600 border-green-200', emoji: '💳' },
];

const features = [
  'One-click OAuth & API key setup',
  'Bi-directional real-time data sync',
  'Custom field mapping',
  'Automated lead de-duplication',
  'Unified reporting across all CRMs',
];

export default function CRMIntegrationsSection() {
  return (
    <section className="bg-muted/30 py-12 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/6 px-4 py-1.5 text-sm font-medium text-primary mb-5">
              <Plug2 className="h-4 w-4" />
              CRM Integrations
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-5">
              Works with the CRM <span className="gradient-text">you already use</span>
            </h2>

            <p className="text-base leading-8 text-muted-foreground mb-8">
              EnrollIQ integrates natively with the admissions tools your team already relies on — calling CRMs,
              education portals, ERPs, and payment gateways. Your data flows seamlessly — no manual exports, no
              duplicates, no silos.
            </p>

            <ul className="flex flex-col gap-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3">
              <Button className="gap-2 shadow-md shadow-primary/25">
                Browse all integrations <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="gap-2">
                <Zap className="h-4 w-4" /> Request a new integration
              </Button>
            </div>
          </motion.div>

          {/* Right — CRM grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative"
          >
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              {crms.map(({ name, desc, color, emoji }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className={`flex flex-col items-center justify-center rounded-2xl border ${color} bg-card p-4 text-center shadow-sm cursor-pointer transition-all`}
                >
                  <span className="text-2xl mb-2">{emoji}</span>
                  <p className="text-xs font-semibold text-foreground leading-tight">{name}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{desc}</p>
                </motion.div>
              ))}
              {/* More card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: crms.length * 0.04 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-primary/30 bg-primary/4 p-4 text-center cursor-pointer hover:bg-primary/8 transition-colors"
              >
                <span className="text-2xl mb-2">➕</span>
                <p className="text-xs font-semibold text-primary">+ 20 more</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Coming soon</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
