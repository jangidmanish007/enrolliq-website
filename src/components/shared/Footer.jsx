'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

// Social icon SVGs (lucide-react v1.x doesn't include brand icons)
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
import { Button } from '@/components/ui/button';

const footerLinks = {
  Product: [
    { label: 'Features', href: '/services' },
    { label: 'CRM Integrations', href: '/services#crm' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Changelog', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
  ],
  Resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Status', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'GDPR', href: '#' },
  ],
};

const socials = [
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: GithubIcon, href: '#', label: 'GitHub' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter strip */}
      <div className="border-b border-background/10">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold text-background">Stay in the loop</h3>
              <p className="mt-1 text-sm text-background/60">
                Get product updates, admission tips, and EdTech insights.
              </p>
            </div>
            <form className="flex w-full max-w-sm gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@institution.edu"
                className="flex-1 rounded-lg border border-background/20 bg-background/10 px-3 py-2 text-sm text-background placeholder:text-background/40 outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
              />
              <Button size="sm" className="shrink-0 gap-1.5 bg-primary hover:bg-primary/80 text-primary-foreground">
                Subscribe <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          {/* Brand col */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-md shadow-primary/30">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-background">
                Enroll<span className="text-primary">IQ</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-background/60 max-w-xs">
              The intelligent CRM and enrolment platform built for modern educational institutions. Powered by AI.
            </p>

            {/* Contact */}
            <div className="mt-6 flex flex-col gap-3 text-sm text-background/60">
              <a
                href="mailto:hello@enrolliq.com"
                className="flex items-center gap-2 hover:text-background transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" /> hello@enrolliq.com
              </a>
              <a href="tel:+918000000000" className="flex items-center gap-2 hover:text-background transition-colors">
                <Phone className="h-4 w-4 shrink-0" /> +91 80000 00000
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" /> Bengaluru, India
              </span>
            </div>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-background/15 text-background/50 hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-background/40">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link href={href} className="text-sm text-background/60 hover:text-background transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-8 sm:flex-row">
          <p className="text-xs text-background/40">
            © {new Date().getFullYear()} EnrollIQ Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-background/40">
            <span>Made with</span>
            <span className="text-red-400">♥</span>
            <span>in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
