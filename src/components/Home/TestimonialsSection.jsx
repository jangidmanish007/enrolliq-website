'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Priya Menon',
    role: 'Director of Admissions',
    org: 'MIT World Peace University',
    body: 'EnrollIQ completely transformed our admissions process. We went from tracking leads in spreadsheets to a fully automated pipeline. Our conversion rate jumped by 40% in the first cycle itself.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&auto=format&fit=crop&face',
    rating: 5,
    highlight: '40% higher conversion',
  },
  {
    name: 'Rajesh Kumar',
    role: 'VP — Student Recruitment',
    org: 'Amity University',
    body: 'The CRM integration with our existing Meritto setup was seamless. Data syncs in real time, our counsellors have full context before every call, and follow-ups are automated. Game changer.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&face',
    rating: 5,
    highlight: 'Seamless Meritto sync',
  },
  {
    name: 'Ananya Sharma',
    role: 'Head of Marketing',
    org: 'Manipal Academy',
    body: 'What used to take our team 3 hours of manual work is now automated entirely. The AI scoring means we prioritise the right leads at the right time. Absolute must-have for any ed-institution.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop&face',
    rating: 5,
    highlight: '3 hrs saved daily',
  },
  {
    name: 'Suresh Patel',
    role: 'Registrar',
    org: 'BITS Pilani',
    body: 'The analytics dashboard alone is worth the price. We can see exactly where leads drop off in the funnel and fix it immediately. Our team loves the intuitive UI — minimal training needed.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&auto=format&fit=crop&face',
    rating: 5,
    highlight: 'Real-time funnel analytics',
  },
  {
    name: 'Kavitha Nair',
    role: 'Chief Academic Officer',
    org: 'Christ University',
    body: 'We manage 15,000+ applicants every year across multiple programs. EnrollIQ handles all of it with ease. The multi-campus feature and role-based access are exactly what we needed.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&q=80&auto=format&fit=crop&face',
    rating: 5,
    highlight: '15K+ applicants managed',
  },
  {
    name: 'Mohammed Irfan',
    role: 'Admissions Manager',
    org: 'Ashoka University',
    body: 'Support team is phenomenal. Whenever we had an onboarding question or needed a custom workflow, they were there within the hour. The product keeps getting better with every release.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop&face',
    rating: 5,
    highlight: 'World-class support',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-12 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">Testimonials</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Trusted by admissions leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from institutions that transformed their enrolment outcomes with EnrollIQ.
          </p>
        </motion.div>

        {/* Masonry-style grid */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {testimonials.map(({ name, role, org, body, avatar, rating, highlight }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="mb-6 break-inside-avoid rounded-2xl border border-border bg-card p-7 shadow-sm"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <Quote className="h-7 w-7 text-primary/20 mb-3" />
              <p className="text-sm leading-7 text-muted-foreground mb-5">{body}</p>

              {/* Highlight pill */}
              <span className="mb-5 inline-block rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                ✦ {highlight}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border">
                  <Image src={avatar} alt={name} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{name}</p>
                  <p className="text-xs text-muted-foreground">
                    {role} · {org}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
