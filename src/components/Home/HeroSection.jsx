'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, Zap, TrendingUp, Users, BarChart3, Bell } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const badges = ['Zero lead leakage', 'AI-powered scoring', '99.9% uptime SLA', 'GDPR compliant'];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ── Micro notification card ── */
function NotifCard({ icon: Icon, label, value, sub, colorClass, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-xl shadow-black/10 ${colorClass}`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-current/10">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-medium text-gray-500 leading-none mb-0.5">{label}</p>
        <p className="text-base font-extrabold leading-none">{value}</p>
        <p className="text-[10px] text-gray-400 mt-0.5 leading-none truncate">{sub}</p>
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#06060f]">
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0">
        {/* Primary glow */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 h-[700px] w-[1000px] rounded-full bg-indigo-600/20 blur-[140px]" />
        <div className="absolute top-1/3 right-[-5%] h-[500px] w-[500px] rounded-full bg-violet-600/12 blur-[120px]" />
        <div className="absolute bottom-0 left-[-5%] h-[400px] w-[500px] rounded-full bg-blue-600/8 blur-[100px]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Noise overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#06060f]" />
      </div>

      {/* ── Content ── */}
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 pt-28 pb-0 sm:pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-10 lg:items-center">
          {/* LEFT — Copy */}
          <div className="lg:pr-6">
            {/* Live pill */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/6 px-4 py-1.5 text-[13px] font-medium text-white/75 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-70" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              The OS for Student Enrolments
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[42px] sm:text-[54px] lg:text-[60px] font-extrabold tracking-[-0.03em] text-white leading-[1.06] mb-6"
            >
              Close more admissions.{' '}
              <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                Lose zero leads.
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[15px] leading-[1.8] text-white/55 mb-8 max-w-[520px]"
            >
              EnrollIQ is the AI-powered admissions CRM built for educational institutions — unifying lead capture,
              counsellor workflows, omnichannel engagement, fee collection, and live analytics in one intelligent
              platform.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <Link href="/login">
                <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3 text-[14px] font-bold text-white shadow-2xl shadow-indigo-600/35 hover:from-indigo-500 hover:to-violet-500 transition-all duration-200 active:scale-[0.98]">
                  Start free trial <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2.5 rounded-xl border border-white/15 bg-white/6 px-5 py-3 text-[14px] font-semibold text-white/75 hover:bg-white/12 hover:text-white transition-all duration-200 backdrop-blur-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/12 border border-white/15">
                    <Play className="h-3 w-3 fill-white ml-0.5" />
                  </span>
                  Watch 2-min demo
                </button>
              </Link>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {badges.map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-[12px] font-medium text-white/40">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400/80 shrink-0" /> {b}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:ml-4"
          >
            {/* Glow behind card */}
            <div className="absolute inset-0 -m-8 rounded-3xl bg-indigo-600/15 blur-3xl pointer-events-none" />

            {/* Browser window */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              {/* Chrome bar */}
              <div className="flex items-center gap-2 bg-[#13131f] px-4 py-3 border-b border-white/6">
                <div className="flex gap-1.5">
                  {['bg-rose-500/60', 'bg-amber-400/60', 'bg-emerald-500/60'].map((c, i) => (
                    <div key={i} className={`h-2.5 w-2.5 rounded-full ${c}`} />
                  ))}
                </div>
                <div className="mx-auto flex items-center gap-2 rounded-lg bg-white/5 border border-white/8 px-4 py-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] text-white/35 font-mono tracking-wide">app.enrolliq.com/dashboard</span>
                </div>
              </div>

              {/* Dashboard image */}
              <div className="relative">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=90&auto=format&fit=crop"
                  alt="EnrollIQ CRM Dashboard"
                  width={1400}
                  height={820}
                  className="w-full object-cover object-top"
                  priority
                />
                {/* Bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#06060f] via-[#06060f]/10 to-transparent" />
                {/* Colour tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/8 via-transparent to-violet-600/6" />
              </div>
            </div>

            {/* Floating notification cards */}
            <div className="absolute -left-10 top-10 z-20 hidden xl:block">
              <NotifCard
                icon={TrendingUp}
                label="Conversion Rate"
                value="+38%"
                sub="vs last admission cycle"
                colorClass="text-emerald-600 border-emerald-100"
                delay={1.0}
              />
            </div>
            <div className="absolute -right-8 top-16 z-20 hidden xl:block">
              <NotifCard
                icon={Bell}
                label="AI Follow-ups Sent"
                value="1,240"
                sub="auto-triggered today"
                colorClass="text-violet-600 border-violet-100"
                delay={1.15}
              />
            </div>
            <div className="absolute -right-6 bottom-28 z-20 hidden xl:block">
              <NotifCard
                icon={Users}
                label="Active Pipeline"
                value="8,492"
                sub="leads across 6 programs"
                colorClass="text-blue-600 border-blue-100"
                delay={1.3}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats band ── */}
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 mt-20 pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.55 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px overflow-hidden rounded-t-2xl border-t border-x border-white/8 bg-white/8"
        >
          {[
            { value: '150+', label: 'Partner Institutions', icon: '🏛️', sub: 'across India & ME' },
            { value: '500K+', label: 'Enquiries / Year', icon: '📥', sub: 'managed on-platform' },
            { value: '38%', label: 'Avg. Conversion Lift', icon: '📈', sub: 'vs pre-EnrollIQ' },
            { value: '4.9★', label: 'Satisfaction Score', icon: '⭐', sub: 'from 150+ reviews' },
          ].map(({ value, label, icon, sub }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.08 }}
              className="flex flex-col items-center gap-1 bg-white/[0.04] px-6 py-7 text-center backdrop-blur-sm hover:bg-white/[0.07] transition-colors"
            >
              <span className="text-2xl mb-1">{icon}</span>
              <p className="text-2xl font-extrabold text-white tracking-tight">{value}</p>
              <p className="text-[12px] font-semibold text-white/70">{label}</p>
              <p className="text-[11px] text-white/30">{sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Seamless transition to white bg ── */}
      <div className="h-16 bg-gradient-to-b from-[#06060f] to-background" />
    </section>
  );
}
