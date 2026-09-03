'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Zap,
  ArrowRight,
  BarChart3,
  Plug2,
  Mail,
  Users2,
  FileCheck,
  BrainCircuit,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const serviceItems = [
  {
    icon: Plug2,
    label: 'CRM Integrations',
    desc: 'Connect 14+ CRM platforms',
    href: '/services#crm',
    color: 'text-violet-600 bg-violet-500/10',
  },
  {
    icon: Mail,
    label: 'Email & SMS',
    desc: 'Automated drip campaigns',
    href: '/services#email',
    color: 'text-blue-600 bg-blue-500/10',
  },
  {
    icon: BarChart3,
    label: 'Analytics',
    desc: 'Real-time admissions insights',
    href: '/services#analytics',
    color: 'text-emerald-600 bg-emerald-500/10',
  },
  {
    icon: BrainCircuit,
    label: 'AI Lead Scoring',
    desc: 'ML-powered conversion ranking',
    href: '/services#ai',
    color: 'text-purple-600 bg-purple-500/10',
  },
  {
    icon: Users2,
    label: 'Admissions Suite',
    desc: 'End-to-end pipeline management',
    href: '/services#admissions',
    color: 'text-rose-600 bg-rose-500/10',
  },
  {
    icon: FileCheck,
    label: 'Document Mgmt',
    desc: 'Smart collection & reminders',
    href: '/services#documents',
    color: 'text-amber-600 bg-amber-500/10',
  },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', mega: true },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      {/* ── Announcement bar ── */}
      <AnimatePresence>
        {announcementVisible && (
          <motion.div
            initial={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative z-50 overflow-hidden bg-primary"
          >
            <div className="flex items-center justify-center gap-3 px-4 py-2 text-center text-xs font-medium text-white">
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-white/60 animate-pulse" />
                New: AI-powered lead scoring v2.0 is live —
              </span>
              <Link
                href="/services#ai"
                className="inline-flex items-center gap-1 font-semibold underline underline-offset-2 hover:no-underline transition-all"
              >
                See what&apos;s new <ArrowRight className="h-3 w-3" />
              </Link>
              <button
                onClick={() => setAnnouncementVisible(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main header ── */}
      <header
        className={cn(
          'sticky top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-white/80 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(0,0,0,0.06)] border-b border-border/60'
            : 'bg-white/60 backdrop-blur-xl',
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[60px] items-center justify-between gap-6">
            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-violet-600 shadow-md shadow-primary/35 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/40 group-hover:scale-105">
                <Zap className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[17px] font-extrabold tracking-tight text-foreground">
                  Enroll
                  <span className="bg-gradient-to-r from-primary to-violet-600 bg-clip-text text-transparent">IQ</span>
                </span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/70 mt-0.5">
                  Admissions Platform
                </span>
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) =>
                link.mega ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={cn(
                        'flex items-center gap-1 rounded-lg px-3.5 py-2 text-[13.5px] font-semibold transition-all duration-150',
                        pathname.startsWith(link.href)
                          ? 'text-primary bg-primary/8'
                          : 'text-foreground/75 hover:text-foreground hover:bg-black/4',
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-200',
                          openDropdown === link.label ? 'rotate-180 text-primary' : '',
                        )}
                      />
                    </button>

                    {/* Mega dropdown */}
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.97 }}
                          transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[560px] rounded-2xl border border-border bg-white shadow-2xl shadow-black/10 p-4"
                        >
                          {/* Top label */}
                          <p className="mb-3 px-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground/60">
                            Product Suite
                          </p>
                          <div className="grid grid-cols-2 gap-1">
                            {serviceItems.map(({ icon: Icon, label, desc, href, color }) => (
                              <Link
                                key={label}
                                href={href}
                                className="group/item flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-muted/60"
                              >
                                <div
                                  className={cn(
                                    'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                                    color,
                                  )}
                                >
                                  <Icon className="h-4 w-4" />
                                </div>
                                <div>
                                  <p className="text-[13px] font-semibold text-foreground group-hover/item:text-primary transition-colors">
                                    {label}
                                  </p>
                                  <p className="text-[11.5px] text-muted-foreground leading-snug mt-0.5">{desc}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                          {/* Footer strip */}
                          <div className="mt-3 border-t border-border pt-3 flex items-center justify-between px-2">
                            <span className="text-xs text-muted-foreground">
                              14+ CRM integrations · AI-powered · 150+ institutions
                            </span>
                            <Link
                              href="/services"
                              className="flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                            >
                              View all <ArrowRight className="h-3 w-3" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      'rounded-lg px-3.5 py-2 text-[13.5px] font-semibold transition-all duration-150',
                      pathname === link.href
                        ? 'text-primary bg-primary/8'
                        : 'text-foreground/75 hover:text-foreground hover:bg-black/4',
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            {/* ── Desktop CTA ── */}
            <div className="hidden md:flex items-center gap-2.5 shrink-0">
              {/* Social proof pip */}
              <div className="mr-1 hidden lg:flex items-center gap-1.5 rounded-full border border-border bg-muted/60 px-3 py-1.5">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-medium text-muted-foreground">150+ institutions</span>
              </div>

              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-[13px]">
                  Sign in
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="sm"
                  className="text-[13px] gap-1.5 bg-gradient-to-r from-primary to-violet-600 hover:from-primary/90 hover:to-violet-600/90 shadow-md shadow-primary/25 border-0"
                >
                  Get started
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>

            {/* ── Mobile toggle ── */}
            <button
              className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-4.5 w-4.5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-4.5 w-4.5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="md:hidden absolute top-full left-0 right-0 z-50 overflow-hidden border-t border-border bg-white/95 backdrop-blur-xl shadow-xl shadow-black/10"
            >
              <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors',
                        pathname === link.href || pathname.startsWith(link.href)
                          ? 'text-primary bg-primary/8'
                          : 'text-foreground/80 hover:text-foreground hover:bg-muted',
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.mega && (
                      <div className="ml-4 mt-1 grid grid-cols-1 gap-0.5">
                        {serviceItems.map(({ icon: Icon, label, href, color }) => (
                          <Link
                            key={label}
                            href={href}
                            className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                          >
                            <div className={cn('flex h-6 w-6 items-center justify-center rounded-md', color)}>
                              <Icon className="h-3.5 w-3.5" />
                            </div>
                            {label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-border">
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      Sign in
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button className="w-full gap-2 bg-gradient-to-r from-primary to-violet-600 border-0">
                      Get started free <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
