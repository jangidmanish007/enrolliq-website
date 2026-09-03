'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    q: 'How quickly can we go live with EnrollIQ?',
    a: 'Most institutions are fully live within 5–7 business days. Our onboarding team handles data migration, CRM integration, form setup, and staff training. You get a dedicated onboarding manager from day one — no technical team required on your end.',
    category: 'Getting Started',
  },
  {
    q: 'Can EnrollIQ integrate with the CRM we already use?',
    a: "Yes. EnrollIQ connects natively with 14+ CRM platforms including Meritto, LeadSquared, HubSpot, Salesforce, Zoho, and more. Data syncs bi-directionally in real time — so your existing workflows stay intact. If your CRM isn't on the list, our open REST API and webhooks can connect to virtually any system.",
    category: 'Integrations',
  },
  {
    q: 'Do we need to replace our existing CRM to use EnrollIQ?',
    a: 'Not at all. EnrollIQ is designed to work alongside your existing tools, not replace them. You can run EnrollIQ as your admissions intelligence layer on top of your current CRM, syncing data both ways. Or use it as a standalone platform — the choice is yours.',
    category: 'Integrations',
  },
  {
    q: 'How does the AI lead scoring actually work?',
    a: 'Our ML model analyses 50+ signals per lead — browsing depth on your site, time spent on fee and program pages, response latency to messages, form completion rate, demographic fit, and engagement history across all channels. Each lead gets a real-time intent score (0–100). Counsellors see exactly who to call next, without guessing.',
    category: 'AI & Automation',
  },
  {
    q: 'Is our student data secure? Where is it stored?',
    a: 'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). EnrollIQ is ISO 27001 certified, GDPR compliant, and SOC 2 Type II audited. Data is stored in Indian data centres by default, with optional regional residency for Middle East deployments. Role-based access controls ensure only the right people see the right data.',
    category: 'Security',
  },
  {
    q: 'What channels does the omnichannel inbox support?',
    a: 'WhatsApp Business API, email (SMTP or SendGrid), SMS (MSG91, Twilio, Exotel), and web chat — all in a single unified inbox. Counsellors reply from one screen regardless of which channel the student used. Automated drip sequences run across all channels simultaneously based on lead behaviour.',
    category: 'Features',
  },
  {
    q: 'Can we manage multiple campuses or programs from one account?',
    a: 'Yes. EnrollIQ supports multi-campus and multi-program management with full data isolation between units. Each campus or department gets its own pipeline, counsellor team, and reporting — while central leadership sees a consolidated view. Role-based permissions control who sees what.',
    category: 'Features',
  },
  {
    q: 'What does the student application portal look like to applicants?',
    a: "Applicants see a fully branded portal with your institution's logo, colours, and domain name — they never see EnrollIQ branding. They can fill multi-step application forms, upload documents, book interview or counselling slots, pay fees, and track their application status in real time. It works seamlessly on mobile.",
    category: 'Features',
  },
  {
    q: 'Is there a free trial? Do we need a credit card to start?',
    a: 'Yes — all plans include a 14-day free trial with full feature access. No credit card required to start. At the end of the trial you can choose a plan or talk to our team about a custom arrangement. There are no setup fees or hidden charges.',
    category: 'Pricing',
  },
  {
    q: 'What kind of support is available after we go live?',
    a: 'Every account gets email and chat support. Growth and Enterprise plans include priority support with guaranteed response times. Enterprise customers get a dedicated Customer Success Manager who runs quarterly business reviews and proactively suggests workflow improvements based on your data.',
    category: 'Support',
  },
];

const categories = [...new Set(faqs.map((f) => f.category))];

const categoryColors = {
  'Getting Started': 'bg-violet-50 text-violet-700 border-violet-200',
  Integrations: 'bg-blue-50 text-blue-700 border-blue-200',
  'AI & Automation': 'bg-purple-50 text-purple-700 border-purple-200',
  Security: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Features: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  Pricing: 'bg-amber-50 text-amber-700 border-amber-200',
  Support: 'bg-rose-50 text-rose-700 border-rose-200',
};

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All' ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <section className="bg-muted/30 py-12 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/6 px-4 py-1.5 text-sm font-medium text-primary mb-5">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Questions we hear all the time
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know before you start. Can't find your answer?{' '}
            <Link href="/contact" className="text-primary hover:underline font-semibold">
              Talk to our team.
            </Link>
          </p>
        </motion.div>
        {/* Accordion */}
        <motion.div layout className="flex flex-col gap-3">
          <AnimatePresence initial={false}>
            {filtered.map((faq, i) => {
              const isOpen = open === faq.q;
              const catColor = categoryColors[faq.category] || 'bg-muted text-muted-foreground border-border';
              return (
                <motion.div
                  key={faq.q}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, delay: i * 0.03 }}
                  className={`overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow duration-200 ${
                    isOpen ? 'border-primary/30 shadow-md shadow-primary/6' : 'border-border'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : faq.q)}
                    className="flex w-full items-start gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    {/* Question */}
                    <span className="flex-1 text-sm font-semibold text-foreground leading-snug pr-2">{faq.q}</span>

                    {/* Toggle icon */}
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
                        isOpen ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <p className="text-sm leading-7 text-muted-foreground">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Still have questions? Our team usually responds within an hour.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/25 hover:bg-primary/90 transition-colors"
            >
              Talk to us <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Start free trial
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
