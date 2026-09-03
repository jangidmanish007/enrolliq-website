'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, MinusCircle, Zap } from 'lucide-react';
import Link from 'next/link';

const rows = [
  // [Feature, EnrollIQ, Meritto, notes]
  { feature: 'Unified lead inbox (all sources)', enrolliq: 'full', meritto: 'full', note: '' },
  {
    feature: 'AI lead scoring (50+ signals)',
    enrolliq: 'full',
    meritto: 'partial',
    note: 'Meritto uses basic intent scoring',
  },
  { feature: 'WhatsApp Business API', enrolliq: 'full', meritto: 'full', note: '' },
  { feature: 'Built-in VoIP calling', enrolliq: 'full', meritto: 'partial', note: 'Meritto requires add-on telephony' },
  { feature: 'Branded student application portal', enrolliq: 'full', meritto: 'full', note: '' },
  { feature: 'Online fee collection', enrolliq: 'full', meritto: 'full', note: '' },
  {
    feature: 'No-code workflow automation',
    enrolliq: 'full',
    meritto: 'partial',
    note: 'Meritto has limited automation rules',
  },
  { feature: 'Visual pipeline (Kanban board)', enrolliq: 'full', meritto: 'full', note: '' },
  { feature: 'Publisher benchmarking analytics', enrolliq: 'full', meritto: 'full', note: '' },
  { feature: 'Predictive enrolment forecasting', enrolliq: 'full', meritto: 'none', note: 'Not available in Meritto' },
  { feature: 'Multi-campus / group-level management', enrolliq: 'full', meritto: 'full', note: '' },
  {
    feature: 'Custom report builder',
    enrolliq: 'full',
    meritto: 'partial',
    note: 'Meritto has fixed report templates',
  },
  { feature: 'Open REST API & webhooks', enrolliq: 'full', meritto: 'partial', note: 'Meritto API has rate limits' },
  { feature: 'Integration with 14+ CRMs', enrolliq: 'full', meritto: 'none', note: 'Meritto is a standalone platform' },
  { feature: 'Dedicated onboarding manager', enrolliq: 'full', meritto: 'partial', note: 'Only on enterprise plan' },
  {
    feature: 'Transparent usage-based pricing',
    enrolliq: 'full',
    meritto: 'none',
    note: 'Meritto pricing not publicly listed',
  },
];

function StatusIcon({ status }) {
  if (status === 'full') return <CheckCircle2 className="h-5 w-5 text-emerald-500 mx-auto" />;
  if (status === 'partial') return <MinusCircle className="h-5 w-5 text-amber-400 mx-auto" />;
  return <XCircle className="h-5 w-5 text-red-400 mx-auto" />;
}

export default function ComparisonSection() {
  return (
    <section className="bg-background py-12 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Why switch</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">EnrollIQ vs Meritto</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Both are built for education. But EnrollIQ goes further — with deeper AI, open integrations, and complete
            transparency.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-border shadow-sm"
        >
          {/* Column headers */}
          <div className="grid grid-cols-[1fr_140px_140px] bg-muted/50 border-b border-border">
            <div className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-muted-foreground">Feature</div>
            {/* EnrollIQ */}
            <div className="flex flex-col items-center justify-center border-l border-border px-4 py-4 bg-primary/4">
              <div className="flex items-center gap-1.5 mb-0.5">
                <div className="flex h-5 w-5 items-center justify-center rounded-md bg-primary">
                  <Zap className="h-3 w-3 text-white" />
                </div>
                <span className="text-sm font-extrabold text-primary">EnrollIQ</span>
              </div>
              <span className="text-[10px] text-primary/60 font-medium">Our platform</span>
            </div>
            {/* Meritto */}
            <div className="flex flex-col items-center justify-center border-l border-border px-4 py-4">
              <span className="text-sm font-bold text-foreground">Meritto</span>
              <span className="text-[10px] text-muted-foreground/60 font-medium">Competitor</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map(({ feature, enrolliq, meritto, note }, i) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className={`grid grid-cols-[1fr_140px_140px] border-b border-border last:border-0 ${
                i % 2 === 0 ? 'bg-background' : 'bg-muted/20'
              }`}
            >
              <div className="px-6 py-3.5">
                <span className="text-sm font-medium text-foreground">{feature}</span>
                {note && <span className="ml-2 text-xs text-muted-foreground italic">({note})</span>}
              </div>
              <div className="border-l border-border bg-primary/[0.03] flex items-center justify-center py-3.5">
                <StatusIcon status={enrolliq} />
              </div>
              <div className="border-l border-border flex items-center justify-center py-3.5">
                <StatusIcon status={meritto} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-5 text-xs text-muted-foreground"
        >
          {[
            { icon: <CheckCircle2 className="h-4 w-4 text-emerald-500" />, label: 'Fully available' },
            { icon: <MinusCircle className="h-4 w-4 text-amber-400" />, label: 'Partially / add-on' },
            { icon: <XCircle className="h-4 w-4 text-red-400" />, label: 'Not available' },
          ].map(({ icon, label }) => (
            <span key={label} className="flex items-center gap-1.5 font-medium">
              {icon} {label}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <p className="text-sm text-muted-foreground">See the difference for yourself — no credit card needed.</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-violet-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:opacity-90 transition-opacity"
            >
              Start free trial <Zap className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Book a live demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
