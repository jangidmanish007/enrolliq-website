'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Users, Globe2, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const highlights = [
  { icon: Users, value: '150+', label: 'Partner Institutions' },
  { icon: Globe2, value: '12', label: 'States Covered' },
  { icon: Award, value: '2021', label: 'Founded' },
];

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/8 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(99 102 241)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/6 px-4 py-1.5 text-sm font-medium text-primary mb-6"
            >
              Our Story
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl leading-[1.08] mb-6"
            >
              We&apos;re building the <span className="gradient-text">future of admissions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg leading-8 text-muted-foreground mb-8 max-w-xl"
            >
              EnrollIQ was born from a simple observation: India&apos;s best educational institutions were losing great
              students to broken, fragmented admissions processes. We built the platform we wish had existed —
              intelligent, unified, and purpose-built for education.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/contact">
                <Button size="lg" className="gap-2 shadow-lg shadow-primary/25">
                  Work with us <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline">
                  See our platform
                </Button>
              </Link>
            </motion.div>

            {/* Stat pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              {highlights.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 shadow-sm"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground leading-none">{value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl border border-border shadow-md aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80&auto=format&fit=crop"
                    alt="Team collaboration"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-border shadow-md aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80&auto=format&fit=crop"
                    alt="Office"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl border border-border shadow-md aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&q=80&auto=format&fit=crop"
                    alt="Team meeting"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl border border-border shadow-md aspect-[4/5]">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80&auto=format&fit=crop"
                    alt="Team"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-5 py-4 shadow-xl"
            >
              <p className="text-xs text-muted-foreground">This year&apos;s enrolments</p>
              <p className="text-2xl font-extrabold text-foreground">50,000+</p>
              <p className="text-xs text-emerald-600 font-semibold">↑ 40% vs last year</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
