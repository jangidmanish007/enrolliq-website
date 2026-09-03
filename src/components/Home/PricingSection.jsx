'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 4999,
    annualPrice: 3999,
    description: 'Perfect for small institutes just starting their digital admissions journey.',
    color: 'border-border',
    badge: null,
    badgeColor: '',
    features: [
      'Up to 500 leads / month',
      '1 CRM integration',
      'Email automation (basic)',
      'Admission pipeline tracking',
      'Standard reporting',
      'Email support',
    ],
    cta: 'Start free trial',
    ctaVariant: 'outline',
  },
  {
    name: 'Growth',
    monthlyPrice: 12999,
    annualPrice: 9999,
    description: 'Built for growing institutions that need automation and deeper insights.',
    color: 'border-primary',
    badge: 'Most Popular',
    badgeColor: 'bg-primary text-primary-foreground',
    features: [
      'Up to 5,000 leads / month',
      '5 CRM integrations',
      'Email + SMS + WhatsApp',
      'AI lead scoring',
      'Smart segmentation',
      'Document collection',
      'Advanced analytics',
      'Priority support',
    ],
    cta: 'Start free trial',
    ctaVariant: 'default',
  },
  {
    name: 'Enterprise',
    monthlyPrice: null,
    annualPrice: null,
    description: 'For large universities and groups with complex, multi-campus requirements.',
    color: 'border-border',
    badge: null,
    badgeColor: '',
    features: [
      'Unlimited leads',
      'All CRM integrations (14+)',
      'Omnichannel inbox',
      'Custom AI models',
      'Multi-campus management',
      'White-label options',
      'SLA guarantee (99.9%)',
      'Dedicated success manager',
      'Custom onboarding',
    ],
    cta: 'Contact sales',
    ctaVariant: 'outline',
  },
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Pricing</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No hidden fees. Pay monthly or save 25% with annual billing.
          </p>

          {/* Toggle */}
          <div className="mt-7 inline-flex items-center gap-3 rounded-xl border border-border bg-muted p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
                !annual ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-sm font-medium transition-all ${
                annual ? 'bg-card shadow-sm text-foreground' : 'text-muted-foreground'
              }`}
            >
              Annual
              <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                Save 25%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {plans.map(
            (
              { name, monthlyPrice, annualPrice, description, color, badge, badgeColor, features, cta, ctaVariant },
              i,
            ) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className={`relative flex flex-col rounded-2xl border-2 ${color} bg-card p-8 shadow-sm ${
                  i === 1 ? 'shadow-lg shadow-primary/10 scale-[1.02]' : ''
                }`}
              >
                {badge && (
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold ${badgeColor}`}
                  >
                    {badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-bold text-foreground mb-1">{name}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>

                <div className="mb-8">
                  {monthlyPrice ? (
                    <div className="flex items-end gap-1">
                      <span className="text-4xl font-extrabold text-foreground">
                        ₹{(annual ? annualPrice : monthlyPrice).toLocaleString('en-IN')}
                      </span>
                      <span className="mb-1 text-sm text-muted-foreground">/month</span>
                    </div>
                  ) : (
                    <div className="text-3xl font-extrabold text-foreground">Custom</div>
                  )}
                  {annual && monthlyPrice && (
                    <p className="mt-1 text-xs text-muted-foreground line-through">
                      ₹{monthlyPrice.toLocaleString('en-IN')}/month
                    </p>
                  )}
                </div>

                <ul className="flex-1 flex flex-col gap-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={name === 'Enterprise' ? '/contact' : '/login'}>
                  <Button
                    variant={ctaVariant}
                    className={`w-full gap-2 ${i === 1 ? 'shadow-md shadow-primary/25' : ''}`}
                  >
                    {cta} <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </motion.div>
            ),
          )}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center text-sm text-muted-foreground"
        >
          All plans include a 14-day free trial. No credit card required.
          <Link href="/contact" className="ml-1 text-primary hover:underline">
            Questions? Talk to us.
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
