'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import {
  Plug2,
  ArrowRight,
  Phone,
  CreditCard,
  MessageSquare,
  BookOpen,
  Database,
  Globe,
  LayoutGrid,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

/* ─────────────────────────────────────────────────────────────────
   Integration categories — EnrollIQ ecosystem partners only.
   No competing CRM products.
───────────────────────────────────────────────────────────────── */
const categories = [
  {
    id: 'calling',
    label: 'Calling & Telephony',
    icon: Phone,
    color: 'blue',
    items: ['Exotel', 'Ozonetel', 'Knowlarity', 'MyOperator', 'Servetel', 'Tata Tele'],
  },
  {
    id: 'payments',
    label: 'Payment Gateways',
    icon: CreditCard,
    color: 'emerald',
    items: ['Razorpay', 'PayU', 'CC Avenue', 'Cashfree', 'Instamojo', 'Stripe'],
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: MessageSquare,
    color: 'cyan',
    items: ['WhatsApp Business', 'MSG91', 'Gupshup', 'Kaleyra', 'Wati', 'Interakt'],
  },
  {
    id: 'portals',
    label: 'Education Portals',
    icon: BookOpen,
    color: 'amber',
    items: ['Shiksha', 'CollegeDekho', 'Careers360', 'GetMyUni', 'AdmitKard', 'Buddy4Study'],
  },
  {
    id: 'erp',
    label: 'ERP & SIS',
    icon: Database,
    color: 'rose',
    items: ['Fedena', 'iCollege', 'Campusnexus', 'Edunext', 'Classpro', 'Moodle'],
  },
  {
    id: 'marketing',
    label: 'Ad & Marketing',
    icon: Globe,
    color: 'violet',
    items: ['Google Ads', 'Meta Ads', 'HubSpot', 'Mailchimp', 'Zoho Campaigns', 'Zapier'],
  },
];

// Tailwind color maps (light-theme friendly)
const colorMap = {
  blue: {
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: 'bg-blue-100 text-blue-600',
    pill: 'bg-blue-50 text-blue-700 border-blue-200',
  },
  emerald: {
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: 'bg-emerald-100 text-emerald-600',
    pill: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  cyan: {
    badge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    icon: 'bg-cyan-100 text-cyan-600',
    pill: 'bg-cyan-50 text-cyan-700 border-cyan-200',
  },
  amber: {
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: 'bg-amber-100 text-amber-600',
    pill: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  rose: {
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
    icon: 'bg-rose-100 text-rose-600',
    pill: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  violet: {
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    icon: 'bg-violet-100 text-violet-600',
    pill: 'bg-violet-50 text-violet-700 border-violet-200',
  },
};

/* ─── Magnetic hover card ──────────────────────────────────────── */
function MagneticCard({ children, className = '' }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 25 });
  const sy = useSpring(y, { stiffness: 300, damping: 25 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(((e.clientX - rect.left - rect.width / 2) / rect.width) * 7);
    y.set(((e.clientY - rect.top - rect.height / 2) / rect.height) * 7);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Orbiting Hub ─────────────────────────────────────────────── */
function OrbitHub() {
  return (
    <div className="relative mx-auto shrink-0" style={{ width: 280, height: 280 }}>
      {/* Outer dashed orbit ring */}
      <div className="absolute rounded-full border border-dashed border-border" style={{ inset: 0 }} />

      {/* Spinning arc */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, oklch(0.485 0.215 264.4 / 0.35) 0deg, transparent 90deg)',
        }}
      />

      {/* SVG connector lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 280 280">
        {categories.map(({ id }, i) => {
          const angle = (i / categories.length) * 360 - 90;
          const rad = (angle * Math.PI) / 180;
          const r = 120;
          return (
            <motion.line
              key={id}
              x1="140"
              y1="140"
              x2={140 + Math.cos(rad) * r}
              y2={140 + Math.sin(rad) * r}
              stroke="oklch(0.485 0.215 264.4 / 0.12)"
              strokeWidth="1"
              strokeDasharray="3 4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.06 }}
            />
          );
        })}
      </svg>

      {/* Orbit icons */}
      {categories.map(({ id, icon: Icon, color, label }, i) => {
        const angle = (i / categories.length) * 360 - 90;
        const rad = (angle * Math.PI) / 180;
        const r = 118;
        const cx = 140 + Math.cos(rad) * r;
        const cy = 140 + Math.sin(rad) * r;
        const c = colorMap[color];
        return (
          <motion.div
            key={id}
            title={label}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.4 + i * 0.07, type: 'spring', stiffness: 240 }}
            whileHover={{ scale: 1.2 }}
            className={`absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border shadow-sm cursor-default ${c.icon} border-border`}
            style={{ left: cx, top: cy }}
          >
            <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" />
          </motion.div>
        );
      })}

      {/* Center hub */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 180 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 to-violet-500/8 shadow-lg shadow-primary/10"
      >
        <LayoutGrid className="h-7 w-7 text-primary" />
        <span className="text-[9px] font-bold text-primary mt-1 tracking-widest uppercase">EnrollIQ</span>
      </motion.div>
    </div>
  );
}

/* ─── Single marquee pill ──────────────────────────────────────── */
function IntegrationPill({ name, color }) {
  const c = colorMap[color];
  return (
    <div
      className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 mx-2 text-xs font-semibold select-none ${c.pill}`}
    >
      {name}
    </div>
  );
}

/* ─── Main section ─────────────────────────────────────────────── */
export default function IntegrationEcosystemSection() {
  // Flatten all items into two rows, alternating categories for visual variety
  const row1 = categories.flatMap(({ items, color }) => items.slice(0, 3).map((name) => ({ name, color })));
  const row2 = categories.flatMap(({ items, color }) => items.slice(3).map((name) => ({ name, color })));

  return (
    <section className="bg-background py-20 sm:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/6 px-4 py-1.5 text-sm font-medium text-primary mb-5">
            <Plug2 className="h-4 w-4" />
            Open Integration Platform
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Plugs into your <span className="gradient-text">entire stack</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            EnrollIQ connects to calling platforms, payment gateways, communication tools, education portals, and your
            ERP — no rip-and-replace, just connect and go.
          </p>
        </motion.div>

        {/* ── Hub + category cards ── */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14 mb-16">
          {/* Orbit hub */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <OrbitHub />
          </motion.div>

          {/* Category cards */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {categories.map(({ icon: Icon, label, color, items }, i) => {
              const c = colorMap[color];
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <MagneticCard
                    className={`rounded-xl border border-border h-full bg-card p-4 cursor-default group hover:shadow-md transition-shadow duration-200`}
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${c.icon}`}>
                        <Icon className="h-[17px] w-[17px]" />
                      </div>
                      <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold ${c.badge}`}>
                        {label}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">{items.slice(0, 4).join(' · ')}</p>
                  </MagneticCard>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Two marquee strips (opposite directions) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3 mb-14"
        >
          {/* Row 1 — left to right */}
          <Marquee speed={38} gradient={true} gradientColor="white" gradientWidth={80} pauseOnHover>
            {row1.map(({ name, color }, i) => (
              <IntegrationPill key={`r1-${i}`} name={name} color={color} />
            ))}
          </Marquee>

          {/* Row 2 — right to left */}
          <Marquee speed={38} direction="right" gradient={true} gradientColor="white" gradientWidth={80} pauseOnHover>
            {row2.map(({ name, color }, i) => (
              <IntegrationPill key={`r2-${i}`} name={name} color={color} />
            ))}
          </Marquee>
        </motion.div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-10 mb-12"
        >
          {[
            { value: '40+', label: 'Native integrations' },
            { value: '6', label: 'Integration categories' },
            { value: 'REST', label: 'Open API & webhooks' },
            { value: '<1 day', label: 'Average setup time' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-black gradient-text">{value}</p>
              <p className="text-xs text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 rounded-2xl border border-border bg-muted/40 px-8 py-7"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Zap className="h-4 w-4 text-primary" />
              <p className="font-bold text-foreground">Don't see your tool?</p>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Our open REST API and webhooks connect to any platform. Custom integrations built in days, not months.
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Request integration
            </Link>
            <Link
              href="/services#integrations"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/25 hover:bg-primary/90 transition-colors"
            >
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
