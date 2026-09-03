"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Eye, EyeOff, ArrowRight, Zap, CheckCircle2,
  GraduationCap, BarChart3, Users, Mail, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";

const perks = [
  { icon: GraduationCap, text: "Manage 500K+ annual enquiries" },
  { icon: BarChart3,     text: "Real-time admissions analytics" },
  { icon: Users,         text: "Team inboxes & counsellor tracking" },
  { icon: CheckCircle2,  text: "14+ CRM integrations included" },
];

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [tab, setTab] = useState("login"); // "login" | "signup"
  const [form, setForm] = useState({ email: "", password: "", name: "", institution: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex">
      {/* Left panel — branding */}
      <div className="hidden lg:flex lg:w-[52%] relative flex-col justify-between overflow-hidden bg-foreground px-14 py-12">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-primary/25 blur-[100px]" />
          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-violet-500/20 blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='white'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
            }}
          />
        </div>

        {/* Logo */}
        <div className="relative">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-md shadow-primary/30">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              Enroll<span className="text-primary">IQ</span>
            </span>
          </Link>
        </div>

        {/* Main copy */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl font-extrabold text-white leading-[1.1] mb-5">
              The smarter way to manage{" "}
              <span className="text-primary">admissions</span>
            </h1>
            <p className="text-base text-white/60 mb-10 max-w-sm leading-7">
              Join 150+ institutions that use EnrollIQ to enrol more students, 
              automate follow-ups, and get real-time insights — all in one platform.
            </p>

            {/* Perks */}
            <ul className="flex flex-col gap-4">
              {perks.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm text-white/75">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Testimonial strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <p className="text-sm text-white/70 leading-7 mb-4">
            &ldquo;EnrollIQ cut our admissions cycle from 5 days to under 6 hours. 
            It&apos;s the most impactful tool we&apos;ve adopted in the last 5 years.&rdquo;
          </p>
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/20">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80&auto=format&fit=crop&face"
                alt="Priya Menon"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Priya Menon</p>
              <p className="text-xs text-white/50">Director of Admissions, MIT WPU</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right panel — form */}
      <div className="flex flex-1 items-center justify-center px-6 py-16 sm:px-10">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="mb-8 flex justify-center lg:hidden">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold">Enroll<span className="text-primary">IQ</span></span>
            </Link>
          </div>

          {/* Tab toggle */}
          <div className="mb-8 flex rounded-xl border border-border bg-muted p-1">
            {["login", "signup"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex-1 rounded-lg py-2 text-sm font-medium transition-all ${
                  tab === t
                    ? "bg-card shadow-sm text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t === "login" ? "Sign in" : "Create account"}
              </button>
            ))}
          </div>

          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                {tab === "login" ? "Welcome back" : "Create your account"}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {tab === "login"
                  ? "Sign in to your EnrollIQ workspace."
                  : "Start your 14-day free trial — no credit card required."}
              </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              {tab === "signup" && (
                <>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground">Full name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Arjun Mehta"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-foreground">Institution name</label>
                    <input
                      type="text"
                      name="institution"
                      value={form.institution}
                      onChange={handleChange}
                      placeholder="e.g. MIT World Peace University"
                      className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                    />
                  </div>
                </>
              )}

              {/* Email */}
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">Work email</label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@institution.edu"
                    className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label className="text-xs font-semibold text-foreground">Password</label>
                  {tab === "login" && (
                    <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
                  )}
                </div>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full rounded-lg border border-border bg-background py-2.5 pl-10 pr-12 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              {tab === "signup" && (
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-border accent-primary" />
                  <span className="text-xs text-muted-foreground leading-5">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">Terms of Service</a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </span>
                </label>
              )}

              <Button type="submit" size="lg" className="w-full gap-2 shadow-md shadow-primary/20 mt-1">
                {tab === "login" ? "Sign in" : "Create free account"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">or continue with</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* SSO buttons */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Google", emoji: "🔵" },
                { label: "Microsoft", emoji: "🟦" },
              ].map(({ label, emoji }) => (
                <button
                  key={label}
                  className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  <span>{emoji}</span>
                  {label}
                </button>
              ))}
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              {tab === "login" ? "New to EnrollIQ? " : "Already have an account? "}
              <button
                onClick={() => setTab(tab === "login" ? "signup" : "login")}
                className="text-primary font-medium hover:underline"
              >
                {tab === "login" ? "Create a free account" : "Sign in"}
              </button>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
