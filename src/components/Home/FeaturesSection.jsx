'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Funnel,
  Users2,
  MessageSquare,
  BrainCircuit,
  CreditCard,
  FileText,
  BarChart3,
  FolderOpen,
  Workflow,
} from 'lucide-react';

const features = [
  {
    id: 'lead-capture',
    icon: Funnel,
    title: 'Lead Capture & Distribution',
    badge: 'Zero Leakage',
    color: 'violet',
    description:
      'Centralise every inquiry from your website, landing pages, social ads, walk-ins, and third-party portals into one unified pipeline. Auto-assign leads to counsellors using round-robin or custom rule-based logic — by location, program, language, or availability.',
    bullets: [
      'Single inbox for 20+ lead sources',
      'Round-robin & rule-based auto-assignment',
      'Duplicate detection & smart merging',
      'Real-time lead capture via APIs & webhooks',
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=85&auto=format&fit=crop',
  },
  {
    id: 'counsellor',
    icon: Users2,
    title: 'Counsellor Workspace',
    badge: 'Productivity',
    color: 'blue',
    description:
      'Give your counselling team a purpose-built workspace — not a generic sales CRM. Every lead shows full context: source, program interest, prior interactions, documents, and AI intent score. One-click calling, notes, and follow-up scheduling built in.',
    bullets: [
      '360° applicant profile in one view',
      'Built-in VoIP calling & call logging',
      'Follow-up reminders & task manager',
      'Counsellor performance scorecards',
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=85&auto=format&fit=crop',
  },
  {
    id: 'omnichannel',
    icon: MessageSquare,
    title: 'Omnichannel Engagement',
    badge: 'Unified Inbox',
    color: 'cyan',
    description:
      'Engage applicants across WhatsApp, Email, SMS, and web chat from a single unified inbox. Send personalised drip sequences triggered by applicant behaviour — form fills, email opens, page visits — without switching between tools.',
    bullets: [
      'WhatsApp Business API integrated',
      'Email + SMS + web chat in one inbox',
      'Behaviour-triggered drip sequences',
      'Bulk campaign broadcasts with segmentation',
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=85&auto=format&fit=crop',
  },
  {
    id: 'ai-scoring',
    icon: BrainCircuit,
    title: 'AI Lead Scoring & Automation',
    badge: 'AI Powered',
    color: 'purple',
    description:
      'Our ML model analyses 50+ behavioural and demographic signals to rank every lead by conversion probability. Counsellors see exactly who to call next. AI also auto-triggers follow-ups, flags at-risk leads, and nudges your team at the right moment.',
    bullets: [
      '50+ scoring signals per lead',
      'AI intent detection & urgency flags',
      'Auto-triggered follow-up sequences',
      'Predictive enrolment forecasting',
    ],
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=85&auto=format&fit=crop',
  },
  {
    id: 'fee-collection',
    icon: CreditCard,
    title: 'Fee Collection & Payment',
    badge: 'Revenue',
    color: 'emerald',
    description:
      'Accept application fees, registration deposits, and full tuition payments directly within EnrollIQ. Generate automated receipts, send payment reminders, and track outstanding balances — all without a separate payment tool.',
    bullets: [
      'Razorpay, PayU & CC Avenue integrated',
      'Automated payment reminders',
      'Partial payment & instalment plans',
      'GST-compliant receipt generation',
    ],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=85&auto=format&fit=crop',
  },
  {
    id: 'application-portal',
    icon: FileText,
    title: 'Student Application Portal',
    badge: 'Self-Service',
    color: 'rose',
    description:
      'Give applicants a branded self-service portal where they can fill forms, upload documents, book interview slots, pay fees, and track their application status in real time — reducing counsellor workload by up to 60%.',
    bullets: [
      'Branded portal with your logo & colours',
      'Online form builder with conditional logic',
      'Slot booking for interviews & entrance tests',
      'Real-time application status tracker',
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=85&auto=format&fit=crop',
  },
  {
    id: 'analytics',
    icon: BarChart3,
    title: 'Reports & Analytics',
    badge: 'Real-time',
    color: 'amber',
    description:
      'Live dashboards that show source-wise lead performance, counsellor activity, stage-by-stage conversion, campaign ROI, and enrolment forecasts. Publisher benchmarking lets you cut spend on underperforming lead sources instantly.',
    bullets: [
      'Source-wise conversion funnel',
      'Publisher benchmarking dashboard',
      'Counsellor activity & leaderboard',
      'Custom report builder + Excel export',
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=85&auto=format&fit=crop',
  },
  {
    id: 'documents',
    icon: FolderOpen,
    title: 'Document Management',
    badge: 'Paperless',
    color: 'teal',
    description:
      "Create program-specific document checklists, collect uploads via the student portal, verify authenticity, and archive everything securely. Automated reminders chase applicants for missing documents so your team doesn't have to.",
    bullets: [
      'Program-specific document checklists',
      'Automated collection reminders',
      'Secure cloud storage & e-signatures',
      'Bulk download & audit trail',
    ],
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=85&auto=format&fit=crop',
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'Workflow Automation',
    badge: 'No-code',
    color: 'orange',
    description:
      'Build powerful no-code automation workflows — move leads through stages automatically, trigger communications based on actions, assign tasks to counsellors, and escalate stale leads — all without writing a single line of code.',
    bullets: [
      'Visual drag-and-drop workflow builder',
      'Stage-based automation triggers',
      'Auto-escalation for stale leads',
      'Integration with 14+ external CRMs',
    ],
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=85&auto=format&fit=crop',
  },
];

const colorMap = {
  violet: {
    icon: 'bg-violet-500/10 text-violet-600',
    border: 'border-violet-200',
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    active: 'border-violet-400 bg-violet-500/8 text-violet-700',
    dot: 'bg-violet-500',
    glow: 'from-violet-500/10',
  },
  blue: {
    icon: 'bg-blue-500/10 text-blue-600',
    border: 'border-blue-200',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    active: 'border-blue-400 bg-blue-500/8 text-blue-700',
    dot: 'bg-blue-500',
    glow: 'from-blue-500/10',
  },
  cyan: {
    icon: 'bg-cyan-500/10 text-cyan-600',
    border: 'border-cyan-200',
    badge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    active: 'border-cyan-400 bg-cyan-500/8 text-cyan-700',
    dot: 'bg-cyan-500',
    glow: 'from-cyan-500/10',
  },
  purple: {
    icon: 'bg-purple-500/10 text-purple-600',
    border: 'border-purple-200',
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
    active: 'border-purple-400 bg-purple-500/8 text-purple-700',
    dot: 'bg-purple-500',
    glow: 'from-purple-500/10',
  },
  emerald: {
    icon: 'bg-emerald-500/10 text-emerald-600',
    border: 'border-emerald-200',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    active: 'border-emerald-400 bg-emerald-500/8 text-emerald-700',
    dot: 'bg-emerald-500',
    glow: 'from-emerald-500/10',
  },
  rose: {
    icon: 'bg-rose-500/10 text-rose-600',
    border: 'border-rose-200',
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
    active: 'border-rose-400 bg-rose-500/8 text-rose-700',
    dot: 'bg-rose-500',
    glow: 'from-rose-500/10',
  },
  amber: {
    icon: 'bg-amber-500/10 text-amber-600',
    border: 'border-amber-200',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    active: 'border-amber-400 bg-amber-500/8 text-amber-700',
    dot: 'bg-amber-500',
    glow: 'from-amber-500/10',
  },
  teal: {
    icon: 'bg-teal-500/10 text-teal-600',
    border: 'border-teal-200',
    badge: 'bg-teal-50 text-teal-700 border-teal-200',
    active: 'border-teal-400 bg-teal-500/8 text-teal-700',
    dot: 'bg-teal-500',
    glow: 'from-teal-500/10',
  },
  orange: {
    icon: 'bg-orange-500/10 text-orange-600',
    border: 'border-orange-200',
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    active: 'border-orange-400 bg-orange-500/8 text-orange-700',
    dot: 'bg-orange-500',
    glow: 'from-orange-500/10',
  },
};

export default function FeaturesSection() {
  const [active, setActive] = useState(features[0].id);
  const current = features.find((f) => f.id === active);
  const c = colorMap[current.color];

  // Refs for horizontal scroll centering on mobile
  const scrollRef = useRef(null);
  const tabRefs = useRef({});

  // Scroll active tab to center whenever it changes
  useEffect(() => {
    const container = scrollRef.current;
    const tabEl = tabRefs.current[active];
    if (!container || !tabEl) return;
    const containerWidth = container.offsetWidth;
    const tabLeft = tabEl.offsetLeft;
    const tabWidth = tabEl.offsetWidth;
    container.scrollTo({
      left: tabLeft - containerWidth / 2 + tabWidth / 2,
      behavior: 'smooth',
    });
  }, [active]);

  return (
    <section className="bg-background py-12 sm:py-24">
      {/* Hide scrollbar for webkit browsers on the horizontal tab strip */}
      <style>{`.features-tab-scroll::-webkit-scrollbar { display: none; }`}</style>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Platform Features</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Every CRM feature your admissions team needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Purpose-built for education. Not retrofitted from a generic sales CRM.
          </p>
        </motion.div>

        {/* Interactive layout: sidebar list (desktop) / horizontal scroll tabs (mobile) + detail panel */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[340px_1fr]">
          {/* ── Mobile horizontal scroll tab strip (hidden on lg) ── */}
          <div className="relative lg:hidden">
            {/* fade edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-background to-transparent z-10" />
            <div
              ref={scrollRef}
              className="features-tab-scroll flex gap-2 overflow-x-auto scroll-smooth pb-2 px-1"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {features.map(({ id, icon: Icon, title, color }) => {
                const cm = colorMap[color];
                const isActive = id === active;
                return (
                  <button
                    key={id}
                    ref={(el) => (tabRefs.current[id] = el)}
                    onClick={() => setActive(id)}
                    className={`flex shrink-0 items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? `${cm.active} shadow-sm`
                        : 'border-transparent bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${isActive ? cm.icon : 'bg-background text-muted-foreground'}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </div>
                    {title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Desktop sidebar (hidden below lg) ── */}
          <div className="hidden lg:flex flex-col gap-1.5">
            {features.map(({ id, icon: Icon, title, badge, color }) => {
              const cm = colorMap[color];
              const isActive = id === active;
              return (
                <button
                  key={id}
                  onClick={() => setActive(id)}
                  className={`group flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                    isActive
                      ? `${cm.active} shadow-sm`
                      : 'border-transparent hover:border-border hover:bg-muted/60 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${isActive ? cm.icon : 'bg-muted text-muted-foreground group-hover:' + cm.icon}`}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-semibold leading-tight">{title}</span>
                  {isActive && (
                    <span
                      className={`ml-auto shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold ${cm.badge}`}
                    >
                      {badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* ── Detail panel ── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              {/* Glow */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-60`}
              />

              {/*
                Two-col layout.
                Key fix: outer wrapper is `grid grid-cols-2` with explicit `min-h-[400px]`.
                Both columns are `h-full`. The image col uses `absolute inset-0` so it
                always fills whatever height the text col produces — never leaves blank space.
              */}
              <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[400px] h-full">
                {/* Text column */}
                <div className="flex flex-col justify-center p-8 lg:p-10">
                  <span
                    className={`mb-4 inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-bold ${c.badge}`}
                  >
                    {current.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-foreground sm:text-2xl mb-3">{current.title}</h3>
                  <p className="text-sm leading-7 text-muted-foreground mb-6">{current.description}</p>
                  <ul className="flex flex-col gap-2.5">
                    {current.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                        <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${c.dot}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image column — absolutely fills its grid cell, zero blank space ever */}
                <div className="relative hidden md:block overflow-hidden rounded-r-2xl">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover object-center"
                    sizes="50vw"
                  />
                  {/* colour tint */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-70`} />
                  {/* left-edge fade so image blends into text */}
                  <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-card to-transparent" />
                </div>

                {/* Mobile: image below text, fixed height */}
                <div className="relative block md:hidden h-52 overflow-hidden rounded-b-2xl">
                  <Image
                    src={current.image}
                    alt={current.title}
                    fill
                    className="object-cover object-center"
                    sizes="100vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.glow} to-transparent opacity-70`} />
                  <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-card to-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
