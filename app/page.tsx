'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Phone, Sparkles, ChefHat, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { FeatureList } from '@/components/feature-list';
import { Steps } from '@/components/steps';
import { TestimonialList } from '@/components/testimonial-list';
import { ContactPanel } from '@/components/contact-panel';
import { FEATURES, STEPS, TESTIMONIALS, SITE_CONFIG } from '@/lib/constants';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function HomePage() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Hide overlay after brief hold
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Smooth entrance animation variants
  const heroContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const,
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const heroItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const,
      }
    }
  };

  const floatingElement = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1] as const,
      }
    }
  };

  return (
    <>
      {/* Opening Overlay Animation */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{
              duration: 1.2,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#1D4ED8] to-[#2563EB]"
          >
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.6,
                ease: [0.65, 0, 0.35, 1],
              }}
              className="flex flex-col items-center gap-4"
            >
              {/* Logo Mark */}
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <svg
                    viewBox="0 0 40 40"
                    className="h-10 w-10 text-white"
                    fill="currentColor"
                  >
                    <path d="M8 8h10v24H8V8zm14 0h10v10H22V8zm0 14h10v10H22V22z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="text-3xl font-bold tracking-tight text-white">
                    Nordic Kitchen Solutions
                  </div>
                  <div className="text-sm font-medium tracking-wider text-blue-100">
                    COMPLETE LAUNCH PARTNER
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content - Fades in as overlay exits */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showOverlay ? 0 : 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.65, 0, 0.35, 1],
        }}
      >
      {/* Hero Section - Enhanced with Smooth Entrance */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32">
        {/* Subtle Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
          {/* Radial gradient glow at top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute top-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]"
          />
        </div>
        
        {/* Gentle floating orbs - reduced motion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
          className="absolute left-0 top-1/4 h-[400px] w-[400px] rounded-full bg-emerald-500/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1], delay: 0.8 }}
          className="absolute bottom-1/4 right-0 h-[350px] w-[350px] rounded-full bg-purple-500/15 blur-3xl"
        />

        <Container>
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center"
          >
            {/* Badge */}
            <motion.div
              variants={heroItem}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 py-2.5 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <Sparkles className="h-4 w-4 text-emerald-300" />
              <span className="text-sm font-semibold text-emerald-200">
                Sweden's Premier Restaurant Setup Partner
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={heroItem}
              className="mb-6 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Launch Your Complete Restaurant{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                  Physical + Digital
                </span>
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.2,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="absolute -bottom-2 left-0 right-0 h-1 origin-left rounded-full bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400"
                />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={heroItem}
              className="mb-10 max-w-3xl text-xl leading-relaxed text-blue-100 sm:text-2xl"
            >
              From kitchen design to website launch — we handle equipment, interiors, AND your 
              online presence. <span className="font-semibold text-white">One partner, complete solution</span>.
            </motion.p>

            {/* Stats Bar */}
            <motion.div
              variants={heroItem}
              className="mb-10 grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4"
            >
              {[
                { value: '50+', label: 'Projects Completed' },
                { value: '15+', label: 'Years Experience' },
                { value: '100%', label: 'Success Rate' },
                { value: '24h', label: 'Response Time' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={floatingElement}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-6"
                >
                  <div className="mb-1 text-3xl font-bold text-white sm:text-4xl">{stat.value}</div>
                  <div className="text-xs text-blue-200 sm:text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={heroItem}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/#contact"
                onClick={handleContactClick}
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40"
              >
                <ChefHat className="h-5 w-5 transition-transform group-hover:rotate-12" />
                Get Free Consultation
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="group inline-flex items-center gap-3 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
                {SITE_CONFIG.phone}
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              variants={heroItem}
              className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200"
            >
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-emerald-400" />
                <span>Premium Equipment</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-blue-400"></div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-emerald-400" />
                <span>Digital Services Included</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-blue-400"></div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-emerald-400" />
                <span>Complete Solutions</span>
              </div>
            </motion.div>
          </motion.div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs text-blue-200">Scroll to explore</span>
            <div className="h-8 w-5 rounded-full border-2 border-white/30">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mx-auto mt-1 h-2 w-1 rounded-full bg-white"
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features - Enhanced */}
      <Section className="bg-gradient-to-b from-white to-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-6 py-2">
              <Sparkles className="h-4 w-4 text-blue-700" />
              <span className="text-sm font-semibold text-blue-700">
                Complete Solutions
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Open Your Restaurant
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-600">
              From kitchen planning to final touches, we handle every detail with precision and care.
            </p>
          </motion.div>
          <FeatureList features={FEATURES} />
        </Container>
      </Section>

      {/* What's Included - Complete Package */}
      <Section className="bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-6 py-2">
              <Sparkles className="h-4 w-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-700">
                Complete Restaurant Package
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Open AND Succeed Online
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-slate-600">
              We handle both the physical setup and your digital presence — one partner for your complete launch.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Physical Setup Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-xl shadow-blue-100/50 transition-all hover:shadow-2xl hover:shadow-blue-200/50 sm:p-10"
            >
              <div className="relative z-10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/30">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-slate-900">Physical Setup</h3>
                <p className="mb-6 text-slate-600">
                  Complete kitchen and interior solutions through our partnership with HELUX
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Award className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Professional kitchen equipment (HELUX)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Award className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Custom interior design & furnishing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Award className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Installation & setup coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Award className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Health & safety compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
                      <Award className="h-4 w-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Warranty & ongoing support</span>
                  </li>
                </ul>
              </div>
              <div className="absolute right-0 top-0 h-64 w-64 -translate-y-32 translate-x-32 rounded-full bg-blue-400/10 blur-3xl transition-transform group-hover:scale-110" />
            </motion.div>

            {/* Digital Presence Card - Highlighted */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border-2 border-emerald-300 bg-gradient-to-br from-emerald-50 via-green-50 to-white p-8 shadow-xl shadow-emerald-200/50 transition-all hover:shadow-2xl hover:shadow-emerald-300/50 sm:p-10"
            >
              {/* "Our Expertise" Badge */}
              <div className="absolute right-6 top-6 z-20 rounded-full bg-gradient-to-r from-emerald-600 to-green-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                ✨ Our Expertise
              </div>

              <div className="relative z-10">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-green-600 shadow-lg shadow-emerald-500/30">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-slate-900">Digital Presence</h3>
                <p className="mb-6 text-slate-600">
                  Complete online infrastructure to attract and serve your customers digitally
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <Award className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700">Modern restaurant website</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <Award className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700">Online booking/reservation system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <Award className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700">Google Business & SEO setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <Award className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700">Digital menu system (QR codes)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                      <Award className="h-4 w-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700">Social media foundation & email marketing</span>
                  </li>
                </ul>
              </div>
              <div className="absolute right-0 top-0 h-64 w-64 -translate-y-32 translate-x-32 rounded-full bg-emerald-400/10 blur-3xl transition-transform group-hover:scale-110" />
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/#contact"
              onClick={handleContactClick}
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-emerald-500/40"
            >
              <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Get Your Complete Package
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </Container>
      </Section>

      {/* Powered by HELUX - Redesigned */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-emerald-400/30 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl"
          />
        </div>

        <Container>
          <div className="relative z-10 mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left: Badge & Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-2xl shadow-black/20"
              >
                <div className="text-5xl font-bold bg-gradient-to-br from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                  H
                </div>
              </motion.div>
              
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Equipment Partner: HELUX
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-blue-100">
                We've partnered with <span className="font-semibold text-white">HELUX Storkök & Inredningar AB</span> to bring you Sweden's 
                highest quality equipment. We manage the entire relationship — you work with us, 
                we coordinate with HELUX for the best pricing and service.
              </p>
              <a
                href={SITE_CONFIG.heluxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-blue-700 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl active:scale-95"
              >
                See Our Equipment Partner
                <ExternalLink size={16} />
              </a>
            </div>

            {/* Right: Stats/Benefits */}
            <div className="grid gap-4 sm:grid-cols-2">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-2 text-4xl font-bold text-white">13+</div>
                <div className="text-sm text-blue-100">Years of Excellence</div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-2 text-4xl font-bold text-white">100%</div>
                <div className="text-sm text-blue-100">Quality Equipment</div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-2 text-4xl font-bold text-white">500+</div>
                <div className="text-sm text-blue-100">Successful Projects</div>
              </motion.div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="mb-2 text-4xl font-bold text-white">24/7</div>
                <div className="text-sm text-blue-100">Support Available</div>
              </motion.div>
            </div>
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05),transparent_50%)]" />
        
        <Container>
          <div className="relative z-10 mb-12 text-center lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              Simple & Transparent Process
            </motion.div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              How it works
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Four simple steps from consultation to opening day. We're with you every step of the way.
            </p>
          </div>
          <Steps steps={STEPS} />
        </Container>
      </Section>

      {/* Testimonials - Commented out for now */}
      {/* <Section className="bg-slate-50">
        <Container>
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What our clients say
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Real feedback from restaurant owners we have helped.
            </p>
          </div>
          <TestimonialList testimonials={TESTIMONIALS} />
        </Container>
      </Section> */}

      {/* CTA Band - Enhanced */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900">
        {/* Animated Background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
        />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-6 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-orange-300" />
              <span className="text-sm font-semibold text-orange-200">
                Start Your Journey Today
              </span>
            </div>

            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Ready to Launch Your{' '}
              <span className="bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent">
                Complete Restaurant?
              </span>
            </h2>
            
            <p className="mb-10 text-xl text-gray-300 sm:text-2xl">
              Get a free consultation for your complete package — physical setup + digital presence. Our experts handle everything.
            </p>
            
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-orange-500/25 transition-all hover:scale-105 hover:shadow-orange-500/40"
              >
                <Phone className="h-6 w-6 transition-transform group-hover:rotate-12" />
                Call {SITE_CONFIG.phone}
              </a>
              <Link
                href="/#contact"
                onClick={handleContactClick}
                className="inline-flex items-center gap-3 rounded-xl border-2 border-white/30 bg-white/10 px-10 py-5 text-xl font-semibold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
              >
                Send Message
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400"></div>
                <span>24-hour response</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Contact Section - Enhanced */}
      <Section id="contact" className="bg-gradient-to-b from-slate-50 to-white">
        <Container>
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-6 py-2">
                <Phone className="h-4 w-4 text-emerald-700" />
                <span className="text-sm font-semibold text-emerald-700">
                  Get In Touch
                </span>
              </div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                Let's Discuss Your{' '}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Restaurant Project
                </span>
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-slate-600">
                Interested in our complete package? Let us know in your message below. We'll get back to you within 24 hours.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border-2 border-gray-200 bg-white p-8 shadow-2xl shadow-gray-900/5 sm:p-12"
            >
              <ContactPanel />
              
              {/* Trust Badges Below Form */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t-2 border-gray-200 pt-8">
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-blue-600">24h</div>
                  <div className="text-xs text-gray-600">Quick Response</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-emerald-600">100%</div>
                  <div className="text-xs text-gray-600">Free Consultation</div>
                </div>
                <div className="text-center">
                  <div className="mb-2 text-3xl font-bold text-purple-600">50+</div>
                  <div className="text-xs text-gray-600">Projects Done</div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
      </motion.div>
    </>
  );
}

