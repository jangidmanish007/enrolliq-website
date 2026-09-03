'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
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
  Plug2,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const tabs = [
  {
    id: 'lead-management',
    label: 'Lead Management',
    icon: Funnel,
    badge: 'Core',
    color: 'violet',
    number: '01',
    headline: 'Capture, centralise & distribute every inquiry — automatically',
    tagline: 'From first touch to qualified pipeline in seconds.',
    description:
      'EnrollIQ aggregates leads from 20+ sources — your website, Google Ads, Facebook, CollegeDekho, Shiksha, walk-ins, and more — into a single, unified pipeline. Smart deduplication merges duplicate entries automatically. Auto-assignment routes each lead to the right counsellor instantly.',
    features: [
      {
        title: 'Multi-source lead capture',
        desc: 'Website forms, paid ads, education portals, walk-ins, and referrals — all in one place.',
      },
      {
        title: 'Smart auto-assignment',
        desc: 'Round-robin or rule-based routing by location, program, language, or counsellor availability.',
      },
      {
        title: 'Zero duplicate leads',
        desc: 'AI detects and merges duplicate entries across all sources in real time.',
      },
      {
        title: 'Lead source tracking',
        desc: 'Know exactly which source, campaign, or keyword generated each inquiry.',
      },
    ],
    stat: { value: '20+', label: 'lead sources connected' },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=90&auto=format&fit=crop',
  },
  {
    id: 'counsellor-workspace',
    label: 'Counsellor Workspace',
    icon: Users2,
    badge: 'Productivity',
    color: 'blue',
    number: '02',
    headline: 'Give your counsellors everything they need in one screen',
    tagline: 'No more spreadsheets. No more context-switching.',
    description:
      "EnrollIQ's counsellor workspace replaces the chaos of disconnected tools. Every lead shows a 360° profile — source, program interest, interaction history, documents, AI intent score, and next recommended action. Built-in VoIP calling and WhatsApp messaging means zero context-switching.",
    features: [
      {
        title: '360° applicant profile',
        desc: 'Full history: calls, emails, WhatsApp, notes, documents, and payments in one timeline.',
      },
      {
        title: 'Built-in VoIP calling',
        desc: 'Click-to-call directly from the CRM. Every call is logged and recorded automatically.',
      },
      {
        title: 'Smart follow-up reminders',
        desc: 'AI-generated reminders ensure no lead goes cold. Never miss a follow-up.',
      },
      {
        title: 'Performance scorecards',
        desc: 'Counsellors see their own metrics; managers see team leaderboards in real time.',
      },
    ],
    stat: { value: '3×', label: 'faster follow-up speed' },
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=90&auto=format&fit=crop',
  },
  {
    id: 'omnichannel',
    label: 'Omnichannel Inbox',
    icon: MessageSquare,
    badge: 'Engagement',
    color: 'cyan',
    number: '03',
    headline: 'One inbox for WhatsApp, Email, SMS, and web chat',
    tagline: 'Meet students where they already are.',
    description:
      'Students expect to communicate on their terms. EnrollIQ unifies all channels into a single inbox so counsellors never miss a message, no matter where it comes from. Automated drip sequences engage thousands of leads simultaneously without any manual effort.',
    features: [
      {
        title: 'WhatsApp Business API',
        desc: 'Send and receive WhatsApp messages directly from EnrollIQ. Full media support.',
      },
      {
        title: 'Email & SMS campaigns',
        desc: 'Drag-and-drop email builder. SMS with personalisation tokens. A/B testing built in.',
      },
      {
        title: 'Behaviour-triggered drips',
        desc: 'Sequences fire automatically based on page visits, form fills, and email opens.',
      },
      {
        title: 'Bulk broadcast with segments',
        desc: 'Target specific cohorts — by program, location, or lead score — with one click.',
      },
    ],
    stat: { value: '4', label: 'channels, one inbox' },
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=90&auto=format&fit=crop',
  },
  {
    id: 'ai-crm',
    label: 'AI & Automation',
    icon: BrainCircuit,
    badge: 'AI Powered',
    color: 'purple',
    number: '04',
    headline: 'Let AI and automation handle the heavy lifting',
    tagline: 'Surface the right lead at the right moment — automatically.',
    description:
      'Our ML model scores every lead using 50+ signals — browsing behaviour, response time, program fit, demographic data — surfacing those most likely to convert. Automation workflows trigger the right actions automatically, from WhatsApp nudges to manager escalations.',
    features: [
      {
        title: 'AI intent scoring (50+ signals)',
        desc: 'Know which leads to prioritise before counsellors pick up the phone.',
      },
      {
        title: 'Predictive enrolment forecasting',
        desc: "See how many confirmations you're likely to close this cycle — updated daily.",
      },
      {
        title: 'No-code workflow builder',
        desc: "Drag-and-drop automation: 'If lead views fee page → send WhatsApp → assign to senior counsellor.'",
      },
      {
        title: 'Auto-escalation rules',
        desc: 'Stale leads are automatically escalated to managers before they go cold.',
      },
    ],
    stat: { value: '50+', label: 'AI scoring signals' },
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=90&auto=format&fit=crop',
  },
  {
    id: 'fee-collection',
    label: 'Fee Collection',
    icon: CreditCard,
    badge: 'Revenue',
    color: 'emerald',
    number: '05',
    headline: 'Collect fees and tuition without leaving EnrollIQ',
    tagline: 'Frictionless payments that keep revenue flowing.',
    description:
      'Accept payments through Razorpay, PayU, or CC Avenue directly within the platform. Generate GST-compliant receipts automatically, track outstanding balances, and send automated payment reminders. Instalment plans and partial payments are fully supported.',
    features: [
      {
        title: 'Razorpay, PayU & CC Avenue',
        desc: 'Connect your preferred payment gateway with a few clicks. No developer needed.',
      },
      {
        title: 'Auto receipt generation',
        desc: 'GST-compliant receipts sent to students instantly on payment confirmation.',
      },
      {
        title: 'Instalment & partial payments',
        desc: 'Configure flexible payment schedules to reduce financial drop-off.',
      },
      {
        title: 'Automated payment reminders',
        desc: 'Schedule reminders via WhatsApp and email before payment due dates.',
      },
    ],
    stat: { value: '↓60%', label: 'payment drop-off' },
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=90&auto=format&fit=crop',
  },
  {
    id: 'application-portal',
    label: 'Application Portal',
    icon: FileText,
    badge: 'Self-Service',
    color: 'rose',
    number: '06',
    headline: 'A branded portal for the entire application journey',
    tagline: 'Your brand. Your domain. Zero complexity for applicants.',
    description:
      "Give applicants a professional, self-service experience with your institution's branding. They can fill forms, upload documents, book interview slots, pay fees, and track application status in real time — reducing inbound enquiry load by up to 60%.",
    features: [
      {
        title: 'Fully branded portal',
        desc: "Your logo, colours, and domain. Students never see 'EnrollIQ' branding.",
      },
      {
        title: 'Smart form builder',
        desc: 'Conditional logic, file uploads, digital signatures, and multi-step flows.',
      },
      {
        title: 'Interview & slot booking',
        desc: 'Applicants self-book interview, counselling, or entrance test slots online.',
      },
      {
        title: 'Real-time status tracker',
        desc: 'Applicants see exactly where they are in the process — reducing status enquiry calls.',
      },
    ],
    stat: { value: '↓60%', label: 'inbound enquiry load' },
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=90&auto=format&fit=crop',
  },
  {
    id: 'analytics',
    label: 'Analytics & Reports',
    icon: BarChart3,
    badge: 'Real-time',
    color: 'amber',
    number: '07',
    headline: 'Every metric your institution needs — live, in one dashboard',
    tagline: 'Turn raw data into decisions your leadership can act on.',
    description:
      "EnrollIQ's analytics go beyond basic counts. See source-wise conversion funnels, publisher ROI benchmarking, counsellor performance, stage-by-stage drop-off, campaign attribution, and enrolment forecasts. Custom reports can be built and exported in seconds.",
    features: [
      {
        title: 'Source & publisher benchmarking',
        desc: 'Compare ROI across Google, Facebook, CollegeDekho, Shiksha, and more.',
      },
      {
        title: 'Counsellor leaderboard',
        desc: 'Track calls made, follow-ups completed, conversions closed — per counsellor.',
      },
      {
        title: 'Stage funnel analysis',
        desc: 'See exactly where applicants drop off and fix the bottleneck in real time.',
      },
      {
        title: 'Custom report builder',
        desc: 'Build any report with drag-and-drop filters. Export to Excel or schedule by email.',
      },
    ],
    stat: { value: 'Live', label: 'real-time dashboards' },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=90&auto=format&fit=crop',
  },
  {
    id: 'documents',
    label: 'Document Management',
    icon: FolderOpen,
    badge: 'Paperless',
    color: 'teal',
    number: '08',
    headline: 'Automate document collection, verification & archiving',
    tagline: 'From checklist to verified — without chasing anyone.',
    description:
      "Create program-specific document checklists. Applicants upload documents through the self-service portal. Automated reminders chase missing submissions so your team doesn't have to. Counsellors can verify, annotate, and approve from within the CRM.",
    features: [
      {
        title: 'Program-specific checklists',
        desc: 'Different requirements for B.Tech, MBA, MBBS — all configured in minutes.',
      },
      {
        title: 'Automated collection reminders',
        desc: 'WhatsApp and email reminders sent until all required documents are uploaded.',
      },
      {
        title: 'In-CRM verification workflow',
        desc: 'Approve, reject, or request re-upload with one click. Full audit trail.',
      },
      {
        title: 'Secure cloud storage',
        desc: 'Encrypted storage with role-based access. Bulk download for accreditation.',
      },
    ],
    stat: { value: '100%', label: 'paperless process' },
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&q=90&auto=format&fit=crop',
  },
  {
    id: 'integrations',
    label: 'Integrations',
    icon: Plug2,
    badge: 'Open Platform',
    color: 'orange',
    number: '09',
    headline: 'Connect EnrollIQ to everything your institution already uses',
    tagline: 'Open by design. Extensible by nature.',
    description:
      'EnrollIQ is an open platform. Our REST API and native webhooks connect to any ERP, LMS, payment gateway, or communication tool. Native integrations with 14+ CRMs — Meritto, LeadSquared, HubSpot, Salesforce, Zoho — let you sync data both ways without custom development.',
    features: [
      {
        title: '14+ native CRM integrations',
        desc: 'Meritto, LeadSquared, HubSpot, Salesforce, Zoho, TeleCRM, and more.',
      },
      {
        title: 'REST API & webhooks',
        desc: 'Full programmatic access. Integrate with any internal system or third-party tool.',
      },
      {
        title: 'ERP & SIS connectors',
        desc: 'Sync confirmed enrolments directly to your SIS or ERP — no manual data export.',
      },
      {
        title: 'Education portal partnerships',
        desc: 'Direct integrations with JEE portals, Shiksha, CollegeDekho, and Common App.',
      },
    ],
    stat: { value: '14+', label: 'native integrations' },
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=90&auto=format&fit=crop',
  },
];

/* ─────────────────────────────────────────────
   COLOR MAP — light bg, uses CSS vars
───────────────────────────────────────────── */
const colorMap = {
  violet: {
    accent: 'text-violet-600',
    badge: 'bg-violet-50 text-violet-700 border-violet-200',
    activeBg: 'bg-violet-50 border-violet-200',
    activeText: 'text-violet-700',
    activeIcon: 'text-violet-600',
    indicator: 'bg-violet-500',
    dot: 'bg-violet-500',
    statColor: 'text-violet-600',
    statBg: 'bg-violet-50 border-violet-100',
    featureIcon: 'text-violet-500 bg-violet-50',
    imgOverlay: 'from-violet-900/30',
    pillBg: 'bg-violet-600/90',
    number: 'text-violet-300',
  },
  blue: {
    accent: 'text-blue-600',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    activeBg: 'bg-blue-50 border-blue-200',
    activeText: 'text-blue-700',
    activeIcon: 'text-blue-600',
    indicator: 'bg-blue-500',
    dot: 'bg-blue-500',
    statColor: 'text-blue-600',
    statBg: 'bg-blue-50 border-blue-100',
    featureIcon: 'text-blue-500 bg-blue-50',
    imgOverlay: 'from-blue-900/30',
    pillBg: 'bg-blue-600/90',
    number: 'text-blue-300',
  },
  cyan: {
    accent: 'text-cyan-600',
    badge: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    activeBg: 'bg-cyan-50 border-cyan-200',
    activeText: 'text-cyan-700',
    activeIcon: 'text-cyan-600',
    indicator: 'bg-cyan-500',
    dot: 'bg-cyan-500',
    statColor: 'text-cyan-600',
    statBg: 'bg-cyan-50 border-cyan-100',
    featureIcon: 'text-cyan-500 bg-cyan-50',
    imgOverlay: 'from-cyan-900/30',
    pillBg: 'bg-cyan-600/90',
    number: 'text-cyan-300',
  },
  purple: {
    accent: 'text-purple-600',
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
    activeBg: 'bg-purple-50 border-purple-200',
    activeText: 'text-purple-700',
    activeIcon: 'text-purple-600',
    indicator: 'bg-purple-500',
    dot: 'bg-purple-500',
    statColor: 'text-purple-600',
    statBg: 'bg-purple-50 border-purple-100',
    featureIcon: 'text-purple-500 bg-purple-50',
    imgOverlay: 'from-purple-900/30',
    pillBg: 'bg-purple-600/90',
    number: 'text-purple-300',
  },
  emerald: {
    accent: 'text-emerald-600',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    activeBg: 'bg-emerald-50 border-emerald-200',
    activeText: 'text-emerald-700',
    activeIcon: 'text-emerald-600',
    indicator: 'bg-emerald-500',
    dot: 'bg-emerald-500',
    statColor: 'text-emerald-600',
    statBg: 'bg-emerald-50 border-emerald-100',
    featureIcon: 'text-emerald-500 bg-emerald-50',
    imgOverlay: 'from-emerald-900/30',
    pillBg: 'bg-emerald-600/90',
    number: 'text-emerald-300',
  },
  rose: {
    accent: 'text-rose-600',
    badge: 'bg-rose-50 text-rose-700 border-rose-200',
    activeBg: 'bg-rose-50 border-rose-200',
    activeText: 'text-rose-700',
    activeIcon: 'text-rose-600',
    indicator: 'bg-rose-500',
    dot: 'bg-rose-500',
    statColor: 'text-rose-600',
    statBg: 'bg-rose-50 border-rose-100',
    featureIcon: 'text-rose-500 bg-rose-50',
    imgOverlay: 'from-rose-900/30',
    pillBg: 'bg-rose-600/90',
    number: 'text-rose-300',
  },
  amber: {
    accent: 'text-amber-600',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    activeBg: 'bg-amber-50 border-amber-200',
    activeText: 'text-amber-700',
    activeIcon: 'text-amber-600',
    indicator: 'bg-amber-500',
    dot: 'bg-amber-500',
    statColor: 'text-amber-600',
    statBg: 'bg-amber-50 border-amber-100',
    featureIcon: 'text-amber-500 bg-amber-50',
    imgOverlay: 'from-amber-900/30',
    pillBg: 'bg-amber-600/90',
    number: 'text-amber-300',
  },
  teal: {
    accent: 'text-teal-600',
    badge: 'bg-teal-50 text-teal-700 border-teal-200',
    activeBg: 'bg-teal-50 border-teal-200',
    activeText: 'text-teal-700',
    activeIcon: 'text-teal-600',
    indicator: 'bg-teal-500',
    dot: 'bg-teal-500',
    statColor: 'text-teal-600',
    statBg: 'bg-teal-50 border-teal-100',
    featureIcon: 'text-teal-500 bg-teal-50',
    imgOverlay: 'from-teal-900/30',
    pillBg: 'bg-teal-600/90',
    number: 'text-teal-300',
  },
  orange: {
    accent: 'text-orange-600',
    badge: 'bg-orange-50 text-orange-700 border-orange-200',
    activeBg: 'bg-orange-50 border-orange-200',
    activeText: 'text-orange-700',
    activeIcon: 'text-orange-600',
    indicator: 'bg-orange-500',
    dot: 'bg-orange-500',
    statColor: 'text-orange-600',
    statBg: 'bg-orange-50 border-orange-100',
    featureIcon: 'text-orange-500 bg-orange-50',
    imgOverlay: 'from-orange-900/30',
    pillBg: 'bg-orange-600/90',
    number: 'text-orange-300',
  },
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  // One ref object per section, stored as plain {current: null}
  const sectionRefs = useRef(Object.fromEntries(tabs.map(({ id }) => [id, { current: null }])));

  // Tab button refs (shared between desktop + mobile via the same object)
  const tabBtnRefs = useRef({});

  // Scroll containers
  const desktopListRef = useRef(null);
  const mobileListRef = useRef(null);

  // Guard against observer fighting click-scroll
  const isClickScrolling = useRef(false);

  /* ── Scroll the active tab button into centre ── */
  const centerTab = useCallback((id) => {
    const btn = tabBtnRefs.current[id];

    // Desktop vertical list
    const vl = desktopListRef.current;
    if (vl && btn) {
      vl.scrollTo({
        top: btn.offsetTop - vl.clientHeight / 2 + btn.offsetHeight / 2,
        behavior: 'smooth',
      });
    }

    // Mobile horizontal strip
    const hl = mobileListRef.current;
    // mobile buttons are in a separate DOM tree so look up by data-id
    if (hl) {
      const mBtn = hl.querySelector(`[data-tabid="${id}"]`);
      if (mBtn) {
        hl.scrollTo({
          left: mBtn.offsetLeft - hl.clientWidth / 2 + mBtn.offsetWidth / 2,
          behavior: 'smooth',
        });
      }
    }
  }, []);

  /* ── IntersectionObserver for scroll-spy ── */
  useEffect(() => {
    const observers = [];

    tabs.forEach(({ id }) => {
      const el = sectionRefs.current[id]?.current;
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isClickScrolling.current) {
            setActiveTab(id);
            centerTab(id);
          }
        },
        { threshold: 0, rootMargin: '-38% 0px -38% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [centerTab]);

  /* ── Tab click ── */
  const handleTabClick = useCallback(
    (id) => {
      setActiveTab(id);
      centerTab(id);

      const el = sectionRefs.current[id]?.current;
      if (!el) return;

      isClickScrolling.current = true;
      // scroll-mt-[76px] on sections handles the navbar offset
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });

      setTimeout(() => {
        isClickScrolling.current = false;
      }, 900);
    },
    [centerTab],
  );

  return (
    <section id="crm" className="bg-background scroll-mt-20">
      {/* ══════════════════════════════════════════
          MOBILE — sticky horizontal tab strip
      ══════════════════════════════════════════ */}
      <div className="lg:hidden sticky top-[60px] z-30 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
        <div
          ref={mobileListRef}
          className="flex gap-2 overflow-x-auto px-4 py-3"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tabs.map(({ id, label, icon: Icon, color }) => {
            const c = colorMap[color];
            const isActive = id === activeTab;
            return (
              <button
                key={id}
                data-tabid={id}
                onClick={() => handleTabClick(id)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? `${c.activeBg} ${c.activeText} shadow-sm`
                    : 'border-border bg-card text-muted-foreground hover:text-foreground hover:bg-muted/60'
                }`}
              >
                <Icon className={`h-3.5 w-3.5 shrink-0 ${isActive ? c.activeIcon : ''}`} />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════
          DESKTOP — two-column layout
      ══════════════════════════════════════════ */}
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10 xl:px-16 py-16 lg:py-20">
        <div className="flex gap-0 lg:gap-10 xl:gap-14">
          {/* ── LEFT: sticky tab nav (desktop only) ── */}
          <aside className="hidden lg:block w-[230px] xl:w-[260px] shrink-0">
            {/* sticky — top equals navbar height 60px */}
            <div
              className="sticky top-[60px] max-h-[calc(100vh-76px)] overflow-y-auto py-8 pr-2"
              ref={desktopListRef}
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/50 mb-4 px-3">
                Product Modules
              </p>

              <nav className="flex flex-col gap-0.5" aria-label="Service modules">
                {tabs.map(({ id, label, icon: Icon, color, number }) => {
                  const c = colorMap[color];
                  const isActive = id === activeTab;
                  return (
                    <button
                      key={id}
                      ref={(el) => {
                        tabBtnRefs.current[id] = el;
                      }}
                      onClick={() => handleTabClick(id)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`group relative flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? `${c.activeBg} ${c.activeText} shadow-sm`
                          : 'border-transparent bg-transparent text-muted-foreground hover:text-foreground hover:bg-muted/60 hover:border-border/50'
                      }`}
                    >
                      {/* Active left bar */}
                      {isActive && (
                        <motion.span
                          layoutId="tabIndicator"
                          className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-r-full ${c.indicator}`}
                          transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                        />
                      )}

                      <span
                        className={`text-[10px] font-mono font-bold tracking-wider shrink-0 ${
                          isActive ? c.number : 'text-muted-foreground/30 group-hover:text-muted-foreground/60'
                        }`}
                      >
                        {number}
                      </span>

                      <Icon
                        className={`h-4 w-4 shrink-0 transition-colors ${
                          isActive ? c.activeIcon : 'text-muted-foreground/50 group-hover:text-muted-foreground'
                        }`}
                      />

                      <span className="truncate leading-snug">{label}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Bottom promo */}
              <div className="mt-8 px-1">
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                  <p className="text-xs font-semibold text-foreground/70 mb-3 leading-snug">Ready to see it live?</p>
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-1.5 w-full rounded-xl bg-primary hover:bg-primary/90 px-3 py-2 text-xs font-bold text-white transition-colors"
                  >
                    Book a demo <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* ── RIGHT: stacked sections ── */}
          <div className="flex-1 min-w-0 lg:border-l lg:border-border lg:pl-10 xl:pl-14">
            {tabs.map((tab) => (
              <ServiceSection
                key={tab.id}
                tab={tab}
                ref={(node) => {
                  sectionRefs.current[tab.id].current = node;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SERVICE SECTION
   Uses forwardRef so the parent can attach the
   IntersectionObserver ref directly to the DOM node.
───────────────────────────────────────────── */
import { forwardRef } from 'react';

const ServiceSection = forwardRef(function ServiceSection({ tab }, ref) {
  const c = colorMap[tab.color];
  const Icon = tab.icon;

  return (
    <div
      ref={ref}
      id={tab.id}
      data-section={tab.id}
      /* scroll-mt must compensate: navbar 60px + a little breathing room */
      className="scroll-mt-[76px] py-16 lg:py-20 border-b border-border last:border-b-0"
    >
      <div className="grid grid-cols-1 gap-12 xl:gap-16 items-start">
        {/* ── Text column ── */}
        <div>
          {/* Number + Badge */}
          <div className="flex items-center gap-3 mb-5">
            <span className={`text-xs font-mono font-bold tracking-widest ${c.number} select-none`}>{tab.number}</span>
            <span
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold tracking-wide ${c.badge}`}
            >
              <Icon className="h-3 w-3" />
              {tab.badge}
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl lg:text-[2rem] xl:text-[2rem] font-extrabold tracking-tight text-foreground leading-[1.13] mb-2.5">
            {tab.headline}
          </h2>

          {/* Tagline */}
          <p className={`text-[15px] font-semibold mb-4 ${c.accent}`}>{tab.tagline}</p>

          {/* Body */}
          <p className="text-[14.5px] leading-[1.85] text-muted-foreground mb-8 max-w-lg">{tab.description}</p>

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {tab.features.map(({ title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <div
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${c.featureIcon}`}
                >
                  <CheckCircle2 className="h-3 w-3" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-snug mb-0.5">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Stat pill */}
          <div className={`inline-flex items-center gap-3 rounded-xl border px-5 py-3 ${c.statBg}`}>
            <span className={`text-2xl font-black ${c.statColor}`}>{tab.stat.value}</span>
            <span className="text-xs text-muted-foreground leading-snug">{tab.stat.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
});
