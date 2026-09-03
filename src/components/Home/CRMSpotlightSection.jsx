'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  BrainCircuit,
  Zap,
  BarChart3,
  MessageSquare,
  ShieldCheck,
  Users2,
  ArrowRight,
  TrendingUp,
  Target,
  Clock,
} from 'lucide-react';
import Link from 'next/link';

/* ─── Animated Counter ─────────────────────────────────────────── */
function AnimatedCounter({ to, suffix = '', prefix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * to));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ─── 3-D Tilt Card wrapper ────────────────────────────────────── */
function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRx = useSpring(rx, { stiffness: 200, damping: 20 });
  const springRy = useSpring(ry, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    rx.set(((e.clientY - cy) / rect.height) * -10);
    ry.set(((e.clientX - cx) / rect.width) * 10);
  };
  const handleMouseLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX: springRx, rotateY: springRy, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Feature pill row ─────────────────────────────────────────── */
const featurePills = [
  { icon: BrainCircuit, label: 'AI Lead Scoring', color: 'text-violet-400 bg-violet-500/10 border-violet-500/20' },
  { icon: MessageSquare, label: 'Omnichannel Inbox', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
  { icon: BarChart3, label: 'ROI Analytics', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  { icon: Users2, label: 'Counsellor Workspace', color: 'text-rose-400 bg-rose-500/10 border-rose-500/20' },
  { icon: Clock, label: 'Automated Workflows', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
  { icon: Target, label: 'Pipeline Tracking', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
];

/* ─── Stats data ───────────────────────────────────────────────── */
const stats = [
  {
    value: 50,
    suffix: '+',
    label: 'AI signals per lead',
    icon: BrainCircuit,
    color: 'text-violet-400',
    glow: 'shadow-violet-500/20',
  },
  {
    value: 4,
    suffix: 'x',
    label: 'Faster admissions cycle',
    icon: Zap,
    color: 'text-amber-400',
    glow: 'shadow-amber-500/20',
  },
  {
    value: 340,
    suffix: '%',
    label: 'Lead-to-enrolment lift',
    icon: TrendingUp,
    color: 'text-emerald-400',
    glow: 'shadow-emerald-500/20',
  },
  {
    value: 99,
    suffix: '.9%',
    label: 'Uptime SLA guarantee',
    icon: ShieldCheck,
    color: 'text-cyan-400',
    glow: 'shadow-cyan-500/20',
  },
];

/* ─── Pipeline mock data ───────────────────────────────────────── */
const pipeline = [
  { stage: 'New Lead', count: 1240, pct: 100, color: 'from-violet-600 to-violet-400' },
  { stage: 'Contacted', count: 892, pct: 72, color: 'from-indigo-600 to-indigo-400' },
  { stage: 'Counselled', count: 534, pct: 43, color: 'from-blue-600 to-blue-400' },
  { stage: 'Applied', count: 298, pct: 24, color: 'from-cyan-600 to-cyan-400' },
  { stage: 'Enrolled', count: 187, pct: 15, color: 'from-emerald-600 to-emerald-400' },
];

export default function CRMSpotlightSection() {
  return (
    <section className="relative bg-[oklch(0.11_0.02_264)] py-20 sm:py-28 overflow-hidden">
      {/* Background glow blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/3 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="absolute top-1/2 left-0 h-[300px] w-[300px] rounded-full bg-cyan-600/8 blur-[90px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm font-medium text-violet-300 mb-5">
            <BrainCircuit className="h-4 w-4" />
            Why EnrollIQ
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Built for admissions.{' '}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              Not retrofitted.
            </span>
          </h2>
          <p className="mt-5 text-lg text-white/50 leading-relaxed">
            Every feature, every workflow, every metric — designed ground-up for the education admissions journey. No
            generic sales tools. No compromises.
          </p>
        </motion.div>

        {/* ── Feature pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2.5 mb-14"
        >
          {featurePills.map(({ icon: Icon, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium ${color} cursor-default transition-shadow`}
            >
              <Icon className="h-3.5 w-3.5" />
              {label}
            </motion.div>
          ))}
        </motion.div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* ── CARD 1: AI Scoring — col-span-2 ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="sm:col-span-2"
          >
            <TiltCard className="h-full">
              <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-8 min-h-[280px] flex flex-col justify-between group">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/15 border border-violet-500/20">
                        <BrainCircuit className="h-6 w-6 text-violet-400" />
                      </div>
                      <span className="inline-block rounded-full bg-violet-500/15 border border-violet-500/25 px-3 py-0.5 text-[11px] font-bold text-violet-300 mb-3">
                        AI Powered
                      </span>
                      <h3 className="text-2xl font-extrabold text-white mb-3 leading-tight">
                        Intelligent lead scoring that prioritises your hottest prospects
                      </h3>
                      <p className="text-white/55 leading-relaxed text-sm max-w-lg">
                        Our ML model analyses 50+ real-time signals — program fit, engagement depth, response latency,
                        browsing behaviour — and surfaces applicants who are ready to enrol right now.
                      </p>
                    </div>
                    {/* Score widget */}
                    <div className="shrink-0 w-52 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md hidden sm:block">
                      <p className="text-[11px] font-semibold text-white/40 mb-3 uppercase tracking-wider">
                        Live Intent Score
                      </p>
                      {[
                        { name: 'Priya M.', score: 94, color: 'from-emerald-500 to-emerald-400' },
                        { name: 'Rohan K.', score: 81, color: 'from-violet-500 to-violet-400' },
                        { name: 'Ananya S.', score: 67, color: 'from-amber-500 to-amber-400' },
                        { name: 'Dev P.', score: 42, color: 'from-rose-500 to-rose-400' },
                      ].map(({ name, score, color }) => (
                        <div key={name} className="mb-2.5 last:mb-0">
                          <div className="flex justify-between mb-1">
                            <span className="text-[11px] text-white/60">{name}</span>
                            <span className="text-[11px] font-bold text-white">{score}</span>
                          </div>
                          <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${score}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
                              className={`h-full rounded-full bg-gradient-to-r ${color}`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative z-10 mt-6">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Explore AI features <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* ── CARD 2: Stat — 50+ signals ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="h-full">
              <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-8 h-full flex flex-col justify-between group min-h-[200px]">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 to-transparent opacity-40 rounded-2xl" />
                <div className="relative z-10">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/15 border border-violet-500/20">
                    <BrainCircuit className="h-5 w-5 text-violet-400" />
                  </div>
                  <p className="text-5xl font-black text-white mt-2">
                    <AnimatedCounter to={50} suffix="+" />
                  </p>
                  <p className="text-white/50 text-sm mt-2 leading-snug">AI signals analysed per lead in real time</p>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* ── CARD 3: Omnichannel ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="h-full">
              <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-8 h-full flex flex-col group min-h-[260px]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 flex-1">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-500/20">
                    <MessageSquare className="h-6 w-6 text-cyan-400" />
                  </div>
                  <span className="inline-block rounded-full bg-cyan-500/15 border border-cyan-500/25 px-3 py-0.5 text-[11px] font-bold text-cyan-300 mb-3">
                    Omnichannel
                  </span>
                  <h3 className="text-lg font-extrabold text-white mb-3 leading-snug">
                    One inbox for all your channels
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    WhatsApp, Email, SMS, and web chat — unified. Behaviour-triggered drips run automatically while
                    counsellors focus on closing.
                  </p>
                </div>
                {/* Channel icons */}
                <div className="relative z-10 mt-6 flex items-center gap-2.5">
                  {[
                    { label: 'WhatsApp', bg: 'bg-emerald-500', t: 'W' },
                    { label: 'Email', bg: 'bg-blue-500', t: 'E' },
                    { label: 'SMS', bg: 'bg-violet-500', t: 'S' },
                    { label: 'Chat', bg: 'bg-amber-500', t: 'C' },
                  ].map(({ label, bg, t }, i) => (
                    <motion.div
                      key={label}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: 0.3 + i * 0.08, type: 'spring', stiffness: 260 }}
                      title={label}
                      className={`flex h-9 w-9 items-center justify-center rounded-full ${bg} text-[11px] font-bold text-white shadow-lg`}
                    >
                      {t}
                    </motion.div>
                  ))}
                  <span className="text-xs text-white/40 ml-1">+ more</span>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* ── CARD 4: Pipeline funnel — col-span-2 ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="sm:col-span-2"
          >
            <TiltCard className="h-full">
              <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-8 group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
                    <div>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/20">
                        <BarChart3 className="h-6 w-6 text-amber-400" />
                      </div>
                      <span className="inline-block rounded-full bg-amber-500/15 border border-amber-500/25 px-3 py-0.5 text-[11px] font-bold text-amber-300 mb-3">
                        Real-time Pipeline
                      </span>
                      <h3 className="text-xl font-extrabold text-white mb-2 leading-snug">
                        Full-funnel visibility. Zero guesswork.
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed max-w-sm">
                        Track every applicant from first touch to enrolment. Spot drop-offs instantly. Know which
                        counsellor, which source, and which programme converts best.
                      </p>
                    </div>
                  </div>
                  {/* Funnel bars */}
                  <div className="space-y-2.5">
                    {pipeline.map(({ stage, count, pct, color }, i) => (
                      <div key={stage} className="flex items-center gap-4">
                        <span className="w-24 shrink-0 text-right text-xs text-white/40 font-medium">{stage}</span>
                        <div className="flex-1 h-8 rounded-lg bg-white/5 overflow-hidden relative">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${pct}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15 + i * 0.1, ease: 'easeOut' }}
                            className={`h-full rounded-lg bg-gradient-to-r ${color} flex items-center justify-end pr-3`}
                          >
                            <span className="text-[11px] font-bold text-white/90">{count}</span>
                          </motion.div>
                        </div>
                        <span className="w-10 shrink-0 text-xs font-bold text-white/30">{pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* ── CARDS 5-8: Stats row ── */}
          {stats.map(({ value, suffix, label, icon: Icon, color, glow }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <TiltCard className="h-full">
                <div
                  className={`relative overflow-hidden rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-7 h-full flex flex-col justify-between group shadow-lg ${glow} min-h-[160px]`}
                >
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, oklch(0.58 0.22 264.4 / 0.08), transparent 70%)',
                    }}
                  />
                  <div className="relative z-10">
                    <Icon className={`h-5 w-5 ${color} mb-4`} />
                    <p className={`text-4xl font-black ${color}`}>
                      <AnimatedCounter to={value} suffix={suffix} />
                    </p>
                    <p className="text-white/45 text-sm mt-2 leading-snug">{label}</p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}

          {/* ── CARD: Counsellor workspace ── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="sm:col-span-2"
          >
            <TiltCard className="h-full">
              <div className="relative overflow-hidden rounded-2xl border border-white/8 bg-white/4 backdrop-blur-sm p-8 group">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-rose-500/15 border border-rose-500/20">
                      <Users2 className="h-7 w-7 text-rose-400" />
                    </div>
                    <div>
                      <span className="inline-block rounded-full bg-rose-500/15 border border-rose-500/25 px-3 py-0.5 text-[11px] font-bold text-rose-300 mb-2">
                        Counsellor Tools
                      </span>
                      <h3 className="text-lg font-extrabold text-white leading-snug">
                        360° applicant profiles · Built-in VoIP · AI follow-up nudges
                      </h3>
                      <p className="text-white/50 text-sm mt-1">
                        Everything a counsellor needs on one screen. No context switching.
                      </p>
                    </div>
                  </div>
                  {/* Mini metric chips */}
                  <div className="flex gap-2 flex-wrap shrink-0">
                    {[
                      { label: 'Call logging', bg: 'bg-rose-500/15 text-rose-300 border-rose-500/20' },
                      { label: 'AI nudges', bg: 'bg-violet-500/15 text-violet-300 border-violet-500/20' },
                      { label: 'Scorecards', bg: 'bg-amber-500/15 text-amber-300 border-amber-500/20' },
                    ].map(({ label, bg }) => (
                      <span key={label} className={`rounded-full border px-3 py-1 text-xs font-semibold ${bg}`}>
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* ── FULL WIDTH: Enterprise trust bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-1 sm:col-span-2 lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 via-violet-500/6 to-transparent px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-5">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background:
                    'radial-gradient(ellipse 60% 80% at 10% 50%, oklch(0.485 0.215 264.4 / 0.3), transparent)',
                }}
              />
              <div className="relative flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/20 border border-primary/30">
                  <ShieldCheck className="h-6 w-6 text-violet-300" />
                </div>
                <div>
                  <p className="font-bold text-white">Enterprise-grade security & compliance</p>
                  <p className="text-sm text-white/45 mt-0.5">
                    ISO 27001 certified · GDPR compliant · SOC 2 Type II · 99.9% uptime SLA
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="relative shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
              >
                Talk to enterprise sales <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
