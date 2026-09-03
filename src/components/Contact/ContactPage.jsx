'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight, Send, Headphones, ChevronRight, Building2, Navigation } from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const offices = [
  {
    type: 'Head Office',
    city: 'Gurugram',
    state: 'Haryana',
    address: '1st Floor, Plot No – 242 & 243, AIHP Palms, Udyog Vihar, Phase 4, Gurugram, Haryana – 122015',
    image: '/cities/gurugram.webp',
    featured: true,
  },
  {
    type: 'Regional Office',
    city: 'Bengaluru',
    state: 'Karnataka',
    address: 'KustomWork, #1611, 7th Cross, 19th Main, Sector – 1, HSR Layout, Bengaluru, Karnataka – 560102',
    image: '/cities/bengaluru.webp',
  },
  {
    type: 'Regional Office',
    city: 'Chennai',
    state: 'Tamil Nadu',
    address:
      'Office No 01, IndiQube Viceroy, Rajbhavan Telephone Exchange, Sardar Patel Rd, Little Mount, Guindy, Chennai, Tamil Nadu – 600032',
    image: '/cities/chennai.webp',
  },
  {
    type: 'Regional Office',
    city: 'Pune',
    state: 'Maharashtra',
    address: '12th floor, Awfis Gold, Eleven West, Pancard Club Rd, Baner, Pune, Maharashtra – 411069',
    image: '/cities/pune.webp',
  },
  {
    type: 'Satellite Office',
    city: 'Ahmedabad',
    state: 'Gujarat',
    address: 'Mondeal Heights, B Wing, 1701 Near Novotel Hotel, Sarkhej – Gandhinagar Hwy, Ahmedabad, Gujarat – 380015',
    image: '/cities/ahmedabad.webp',
  },
  {
    type: 'Regional Office',
    city: 'Kolkata',
    state: 'West Bengal',
    address:
      'AKASA Coworking, PS Srijan Corporate Park GP Block, Sector-V, Unit No 1102, Tower No-1, 11th Floor, Kolkata, West Bengal – 700091',
    image: '/cities/kolkata.webp',
  },
  {
    type: 'Satellite Office',
    city: 'Jaipur',
    state: 'Rajasthan',
    address: 'Aarna Coworking, C-31, Lalkothi, Pankaj Singhvi Marg Lalkothi, Jaipur, Rajasthan – 302015',
    image: '/cities/jaipur.webp',
  },
  {
    type: 'Satellite Office',
    city: 'Mohali',
    state: 'Punjab',
    address:
      '3rd floor, Verma Towers, Nxt 57 Co-Working space, F-88, Near Uchit Diagnostic Centre, Phase 7, Mohali, Punjab – 160055',
    image: '/cities/mohali.webp',
  },
  {
    type: 'Regional Office',
    city: 'Mumbai',
    state: 'Maharashtra',
    address:
      'Quest Coworks Pvt Ltd. 5th Floor, Technopolis Knowledge Park, Mahakali Caves Road, Chakala, Andheri (East) – Mumbai – 400093',
    image: '/cities/mumbai.png',
  },
  {
    type: 'Regional Office',
    city: 'Lucknow',
    state: 'Uttar Pradesh',
    address:
      'Cubispace, 2nd Floor, JSV Hyundai Building CP-53, near Engineering College Chauraha, near CNG Petrol Pump, Lucknow, Uttar Pradesh – 226021',
    image: '/cities/lucknow.png',
  },
  {
    type: 'Satellite Office',
    city: 'Indore',
    state: 'Madhya Pradesh',
    address: '4th Floor, Elite House, Ravindra Nagar, Old Palasia, Indore, Madhya Pradesh – 452001',
    image: '/cities/indore.png',
  },
  {
    type: 'Satellite Office',
    city: 'Hyderabad',
    state: 'Telangana',
    address:
      'Vcollab work spaces, 5th floor, Capital Pk Rd, Ayyappa Society, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana – 500081',
    image: '/cities/hyderabad.png',
  },
];

/* badge colour by type */
const badgeStyles = {
  'Head Office': 'bg-indigo-600 text-white',
  'Regional Office': 'bg-emerald-600 text-white',
  'Satellite Office': 'bg-amber-500 text-white',
};

/* ─────────────────────────────────────────────
   OFFICE CARD
───────────────────────────────────────────── */
function OfficeCard({ office, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.07 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* City landmark image */}
      <div className="relative h-44 w-full overflow-hidden bg-white border-b border-gray-50 flex items-center justify-center">
        <img
          src={office.image}
          alt={`${office.city} landmark`}
          fill
          quality={100}
          unoptimized
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* overlay badge */}
        <span
          className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-bold tracking-wide shadow-md z-10 ${badgeStyles[office.type]}`}
        >
          {office.type}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-base font-bold text-gray-900 leading-tight">{office.city}</h3>
            <p className="text-xs font-medium text-indigo-600 mt-0.5">{office.state}</p>
          </div>
          <div className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <Building2 className="h-4 w-4" />
          </div>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed flex-1">{office.address}</p>

        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group-hover:underline"
        >
          <Navigation className="h-3.5 w-3.5" />
          Get Directions
          <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
        </a>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    institution: '',
    role: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ═══════════════════════════════════════
          HERO — dark gradient + form
      ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#0f0f1a] pt-24 pb-20 sm:pt-32 sm:pb-28">
        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-indigo-700/20 blur-[120px]" />
          <div className="absolute top-10 right-0 h-[400px] w-[400px] rounded-full bg-violet-700/15 blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-blue-700/10 blur-[80px]" />
          {/* Grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16 items-center">
            {/* LEFT — headline */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-xs font-semibold tracking-widest text-indigo-300 uppercase">Contact Us</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.12] tracking-tight text-white mb-6">
                Say Hello to a{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  Comprehensive
                </span>{' '}
                Enrolment Solution
              </h1>

              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-md">
                Whether you want a personalised demo, have a technical question, or just want to explore what EnrollIQ
                can do — we&apos;re here.
              </p>

              {/* Quick contact pills */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:hello@enrolliq.com"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/6 px-5 py-3.5 text-sm font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-all"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-500/20">
                    <Mail className="h-4 w-4 text-indigo-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold leading-none mb-1">
                      Email
                    </p>
                    hello@enrolliq.com
                  </div>
                </a>
                <a
                  href="tel:+918000000000"
                  className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/6 px-5 py-3.5 text-sm font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-all"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/20">
                    <Phone className="h-4 w-4 text-violet-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 font-semibold leading-none mb-1">
                      Phone
                    </p>
                    +91 80000 00000
                  </div>
                </a>
              </div>
            </motion.div>

            {/* RIGHT — form card */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-md p-7 sm:p-8 shadow-2xl shadow-black/40">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500/20 border border-indigo-500/30">
                      <Send className="h-7 w-7 text-indigo-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Received!</h3>
                    <p className="text-sm text-gray-400 max-w-xs mb-6">
                      Our team will reach out within 2 business hours. Check your inbox for a confirmation.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm text-indigo-400 hover:text-indigo-300 font-medium underline underline-offset-2"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h2 className="text-lg font-bold text-white mb-5">Get in Touch</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* First name */}
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-gray-400">
                          First Name <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          required
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="Arjun"
                          className="w-full rounded-lg border border-white/10 bg-white/8 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 transition-all"
                        />
                      </div>
                      {/* Last name */}
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-gray-400">
                          Last Name <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          required
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="Mehta"
                          className="w-full rounded-lg border border-white/10 bg-white/8 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 transition-all"
                        />
                      </div>
                      {/* Email */}
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-gray-400">
                          Work Email <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="arjun@institution.edu"
                          className="w-full rounded-lg border border-white/10 bg-white/8 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 transition-all"
                        />
                      </div>
                      {/* Phone */}
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-gray-400">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-lg border border-white/10 bg-white/8 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 transition-all"
                        />
                      </div>
                      {/* Institution */}
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-gray-400">
                          Institution <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          required
                          name="institution"
                          value={form.institution}
                          onChange={handleChange}
                          placeholder="e.g. MIT World Peace University"
                          className="w-full rounded-lg border border-white/10 bg-white/8 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 transition-all"
                        />
                      </div>
                      {/* Role */}
                      <div>
                        <label className="mb-1.5 block text-xs font-semibold text-gray-400">Your Role</label>
                        <select
                          name="role"
                          value={form.role}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-white/10 bg-[#1a1a2e] px-3.5 py-2.5 text-sm text-gray-300 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 transition-all"
                        >
                          <option value="">Select role</option>
                          <option>Director / Principal</option>
                          <option>Admissions Head</option>
                          <option>Marketing Manager</option>
                          <option>IT / Technology</option>
                          <option>Operations</option>
                          <option>Other</option>
                        </select>
                      </div>
                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label className="mb-1.5 block text-xs font-semibold text-gray-400">Message</label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Tell us about your institution's admissions challenges..."
                          className="w-full resize-none rounded-lg border border-white/10 bg-white/8 px-3.5 py-2.5 text-sm text-white placeholder:text-gray-600 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 transition-all"
                        />
                      </div>
                      {/* Submit */}
                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="group w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 hover:from-indigo-500 hover:to-violet-500 hover:shadow-indigo-500/40 active:scale-[0.98] transition-all"
                        >
                          Send Message
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                        <p className="mt-2.5 text-center text-[11px] text-gray-600">
                          By submitting, you agree to our{' '}
                          <a href="#" className="text-indigo-400 hover:underline">
                            Privacy Policy
                          </a>
                          . We typically respond within 2 hours.
                        </p>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SUPPORT ENQUIRIES CARD
      ═══════════════════════════════════════ */}
      <section className="bg-gray-50 py-14 sm:py-16 border-b border-gray-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 sm:p-10 shadow-xl shadow-indigo-500/20"
          >
            {/* decorative circles */}
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/8" />
            <div className="pointer-events-none absolute -right-4 -bottom-8 h-32 w-32 rounded-full bg-white/6" />

            <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/15 border border-white/20 shadow-lg">
                <Headphones className="h-7 w-7 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">Support Enquiries</h2>
                <p className="text-indigo-200 text-sm leading-relaxed max-w-lg">
                  Using our platform and need some help? Get in touch with our customer support team — available
                  Mon–Sat, 9am–7pm IST.
                </p>
              </div>
              <div className="flex flex-col sm:items-end gap-2 shrink-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-indigo-200">Email ID</p>
                <a
                  href="mailto:support@enrolliq.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-all"
                >
                  <Mail className="h-4 w-4" />
                  support@enrolliq.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          OFFICE LOCATIONS
      ═══════════════════════════════════════ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5">
              <MapPin className="h-3.5 w-3.5 text-indigo-600" />
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Office Locations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
              When not on the cloud, or in people&apos;s hearts,
              <br className="hidden sm:block" /> we work from here
            </h2>
            <p className="text-gray-500 text-base max-w-xl mx-auto">
              With offices across India, our team is always close to you.
            </p>

            {/* legend */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              {[
                { label: 'Head Office', color: 'bg-indigo-600' },
                { label: 'Regional Office', color: 'bg-emerald-600' },
                { label: 'Satellite Office', color: 'bg-amber-500' },
              ].map(({ label, color }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600"
                >
                  <span className={`h-2 w-2 rounded-full ${color}`} />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Featured Head Office — full width */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row">
              {/* City image */}
              <div className="relative h-64 lg:h-auto lg:min-h-[280px] border-r border-gray-200 lg:w-1/2 overflow-hidden bg-white shrink-0 flex items-center justify-center">
                <img
                  src="/cities/gurugram.webp"
                  alt="Gurugram city landmark"
                  fill
                  className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <span className="absolute top-4 left-4 rounded-full bg-indigo-600 px-3 py-1 text-[11px] font-bold tracking-wide text-white shadow-md z-10">
                  Head Office
                </span>
              </div>
              {/* Info */}
              <div className="flex flex-col justify-center p-8 lg:p-10">
                <div className="mb-1 flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-indigo-600" />
                  <span className="text-sm font-semibold text-indigo-600">Headquarters</span>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-1">Gurugram</h3>
                <p className="text-sm font-semibold text-gray-500 mb-4">Haryana, India</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-sm">
                  1st Floor, Plot No – 242 &amp; 243, AIHP Palms, Udyog Vihar, Phase 4, Gurugram, Haryana – 122015
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://maps.google.com/?q=1st+Floor+Plot+242+243+AIHP+Palms+Udyog+Vihar+Phase+4+Gurugram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-500/25"
                  >
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </a>
                  <a
                    href="mailto:hello@enrolliq.com"
                    className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid for all other offices */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offices
              .filter((o) => !o.featured)
              .map((office, i) => (
                <OfficeCard key={office.city} office={office} index={i} />
              ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA STRIP
      ═══════════════════════════════════════ */}
      <section className="bg-[#0f0f1a] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Ready to get started?</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Transform your admissions{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                today
              </span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Join 150+ institutions already using EnrollIQ to streamline their entire enrolment process.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-500/30 hover:from-indigo-500 hover:to-violet-500 transition-all"
              >
                Book a Free Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@enrolliq.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/6 px-7 py-3.5 text-sm font-semibold text-gray-200 hover:bg-white/12 hover:text-white transition-all"
              >
                <Mail className="h-4 w-4" />
                Email Us Directly
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
