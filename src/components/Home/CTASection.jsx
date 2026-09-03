'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-muted/30 py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-foreground px-8 py-20 text-center shadow-2xl sm:px-16"
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-[80px]" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet-500/20 blur-[80px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[100px]" />
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
              }}
            />
          </div>

          {/* Floating avatars */}
          <div className="relative mb-8 flex items-center justify-center">
            <div className="flex -space-x-3">
              {[
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=80&auto=format&fit=crop&face',
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&q=80&auto=format&fit=crop&face',
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&q=80&auto=format&fit=crop&face',
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&q=80&auto=format&fit=crop&face',
              ].map((src, i) => (
                <div key={i} className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-foreground/80">
                  <Image src={src} alt="User" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="ml-3 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
              +50,000 students enrolled this year
            </div>
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white/80 mb-6">
              <Sparkles className="h-4 w-4 text-yellow-400" />
              Start for free today
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl mb-5">
              Ready to enrol smarter?
            </h2>
            <p className="mx-auto max-w-xl text-lg text-white/65 mb-10">
              Join 150+ institutions already using EnrollIQ to close more admissions with less effort. No credit card
              needed.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/login">
                <Button
                  size="lg"
                  className="gap-2 bg-white text-foreground hover:bg-white/90 shadow-xl shadow-black/20 px-7"
                >
                  Get started free <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="ghost" className="gap-2 text-white hover:bg-white/10 border border-white/20">
                  <Phone className="h-4 w-4" />
                  Talk to sales
                </Button>
              </Link>
            </div>

            <p className="mt-6 text-xs text-white/40">14-day free trial · No credit card required · Cancel anytime</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
