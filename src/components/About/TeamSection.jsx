'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Brand icons as inline SVGs (lucide-react v1.x doesn't include social brand icons)
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Co-founder & CEO',
    bio: "Former product lead at Byju's. IIT Delhi alumnus. Passionate about making quality education accessible through technology.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format&fit=crop&face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Priya Krishnan',
    role: 'Co-founder & CTO',
    bio: '10+ years in SaaS engineering. Previously at Freshworks. Built EdTech platforms used by 2M+ students.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&auto=format&fit=crop&face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Rahul Sharma',
    role: 'Head of Product',
    bio: 'Ex-Vedantu. Obsessed with UX for high-stakes decisions. Brought 3 EdTech products from 0 to 1M users.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format&fit=crop&face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Sneha Iyer',
    role: 'Head of Growth',
    bio: 'Former VP Marketing at Unacademy. Expert in B2B SaaS GTM strategy for the Indian education market.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format&fit=crop&face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Karan Nair',
    role: 'Lead Engineer',
    bio: 'Full-stack architect. Previously at Swiggy. Loves distributed systems and building things that scale to millions.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format&fit=crop&face',
    linkedin: '#',
    twitter: '#',
  },
  {
    name: 'Divya Patel',
    role: 'Customer Success Lead',
    bio: 'Has personally onboarded 80+ institutions. Former admissions counsellor — knows exactly what the teams need.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80&auto=format&fit=crop&face',
    linkedin: '#',
    twitter: '#',
  },
];

export default function TeamSection() {
  return (
    <section className="bg-background py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">The team</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built by people who understand education
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We&apos;re a team of builders, educators, and operators who&apos;ve worked across India&apos;s top EdTech
            companies — united by one mission.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map(({ name, role, bio, image, linkedin, twitter }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

                {/* Social icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={linkedin}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    <LinkedinIcon />
                  </a>
                  <a
                    href={twitter}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    <TwitterIcon />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="font-bold text-foreground mb-0.5">{name}</h3>
                <p className="text-sm font-medium text-primary mb-3">{role}</p>
                <p className="text-sm leading-6 text-muted-foreground">{bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Join us card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-dashed border-primary/30 bg-primary/4 p-10 text-center"
        >
          <h3 className="text-xl font-bold text-foreground mb-2">Want to join the team?</h3>
          <p className="text-muted-foreground mb-5">
            We&apos;re always looking for exceptional people who want to reshape Indian EdTech.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/85 transition-colors"
          >
            View open roles
          </a>
        </motion.div>
      </div>
    </section>
  );
}
