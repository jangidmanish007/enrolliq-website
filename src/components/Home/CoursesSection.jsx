'use client';

import { motion } from 'framer-motion';
import { Star, Clock, Users, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const courses = [
  {
    category: 'Engineering',
    title: 'B.Tech Computer Science & Engineering',
    institution: 'MIT World Peace University',
    rating: 4.9,
    students: '12.4K',
    duration: '4 Years',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80&auto=format&fit=crop',
    color: 'bg-violet-500/10',
    accent: 'text-violet-600',
    border: 'border-violet-100',
    badge: 'Most Popular',
    badgeColor: 'bg-violet-500 text-white',
  },
  {
    category: 'Management',
    title: 'MBA in Business Analytics & Strategy',
    institution: 'Amity University',
    rating: 4.8,
    students: '8.7K',
    duration: '2 Years',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&q=80&auto=format&fit=crop',
    color: 'bg-blue-500/10',
    accent: 'text-blue-600',
    border: 'border-blue-100',
    badge: 'Top Rated',
    badgeColor: 'bg-blue-500 text-white',
  },
  {
    category: 'Data Science',
    title: 'M.Sc. Data Science & Machine Learning',
    institution: 'BITS Pilani',
    rating: 4.9,
    students: '6.2K',
    duration: '2 Years',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&q=80&auto=format&fit=crop',
    color: 'bg-emerald-500/10',
    accent: 'text-emerald-600',
    border: 'border-emerald-100',
    badge: 'Trending',
    badgeColor: 'bg-emerald-500 text-white',
  },
  {
    category: 'Design',
    title: 'B.Des Industrial & UX Design',
    institution: 'Srishti Manipal Institute',
    rating: 4.7,
    students: '4.8K',
    duration: '4 Years',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80&auto=format&fit=crop',
    color: 'bg-rose-500/10',
    accent: 'text-rose-600',
    border: 'border-rose-100',
    badge: null,
    badgeColor: '',
  },
  {
    category: 'Law',
    title: 'BA LLB (Hons) — Integrated Law',
    institution: 'Jindal Global Law School',
    rating: 4.8,
    students: '3.9K',
    duration: '5 Years',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&q=80&auto=format&fit=crop',
    color: 'bg-amber-500/10',
    accent: 'text-amber-600',
    border: 'border-amber-100',
    badge: null,
    badgeColor: '',
  },
  {
    category: 'Medicine',
    title: 'MBBS — Bachelor of Medicine',
    institution: 'Kasturba Medical College',
    rating: 5.0,
    students: '9.5K',
    duration: '5.5 Years',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=500&q=80&auto=format&fit=crop',
    color: 'bg-cyan-500/10',
    accent: 'text-cyan-600',
    border: 'border-cyan-100',
    badge: 'High Demand',
    badgeColor: 'bg-cyan-500 text-white',
  },
];

export default function CoursesSection() {
  return (
    <section className="bg-background py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end mb-12"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Programs</p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Featured programs</h2>
            <p className="mt-3 text-lg text-muted-foreground max-w-xl">
              Explore top-ranked programs from India&apos;s leading institutions — managed on EnrollIQ.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 gap-2">
            View all programs <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map(
            (
              {
                category,
                title,
                institution,
                rating,
                students,
                duration,
                image,
                color,
                accent,
                border,
                badge,
                badgeColor,
              },
              i,
            ) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className={`group cursor-pointer rounded-2xl border ${border} bg-card shadow-sm hover:shadow-lg transition-all overflow-hidden`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 ${color} mix-blend-multiply`} />
                  {/* Category + badge */}
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between">
                    <span
                      className={`rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold ${accent}`}
                    >
                      {category}
                    </span>
                    {badge && (
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeColor}`}>{badge}</span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="mb-1 text-sm font-semibold leading-snug text-foreground line-clamp-2">{title}</h3>
                  <p className="mb-4 text-xs text-muted-foreground flex items-center gap-1.5">
                    <BookOpen className="h-3 w-3" />
                    {institution}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-foreground">{rating}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" /> {students}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> {duration}
                    </span>
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
