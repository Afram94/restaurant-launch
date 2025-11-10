'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { SITE_CONFIG } from '@/lib/constants';
import { CheckCircle2, Phone, Award, Shield, Users, Sparkles, Zap, Target, ExternalLink } from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/motion';

const VALUES = [
  {
    icon: Sparkles,
    title: 'Transparent',
    description:
      'Clear pricing, no hidden costs. You know exactly what you are getting.',
  },
  {
    icon: Target,
    title: 'Local',
    description:
      'Based in Sweden, we understand local regulations and work with trusted partners.',
  },
  {
    icon: Zap,
    title: 'Reliable',
    description:
      'On-time delivery and responsive communication throughout your project.',
  },
  {
    icon: Sparkles,
    title: 'Efficient',
    description:
      'Streamlined processes and coordination to get you open as quickly as possible.',
  },
];

const TRUST_POINTS = [
  {
    icon: Award,
    title: '15+ Years Combined Experience',
    description: 'Our team brings extensive expertise in commercial kitchen design and restaurant operations.',
  },
  {
    icon: Shield,
    title: 'Full Insurance & Guarantees',
    description: 'All work is insured and equipment comes with manufacturer warranties. Your investment is protected.',
  },
  {
    icon: Users,
    title: '50+ Successful Projects',
    description: 'From intimate cafés to full-service restaurants, we\'ve helped dozens of owners open their doors.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Completely Redesigned */}
      <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4],
              x: [0, -50, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl"
          />
        </div>

        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center py-20 text-center"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-6 py-2 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-200">
                Your Restaurant Setup Partner
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="mb-6 max-w-5xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              We Transform Your{' '}
              <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                Restaurant Dreams
              </span>{' '}
              Into Reality
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="mb-12 max-w-3xl text-xl leading-relaxed text-blue-100 sm:text-2xl"
            >
              From concept to grand opening, we're the complete solution for restaurant owners across Sweden. Premium equipment, expert design, flawless execution.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={fadeInUp}
              className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold text-white">50+</div>
                <div className="text-sm text-blue-200">Projects Delivered</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold text-white">15+</div>
                <div className="text-sm text-blue-200">Years Experience</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold text-white">100%</div>
                <div className="text-sm text-blue-200">Success Rate</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold text-white">24h</div>
                <div className="text-sm text-blue-200">Response Time</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40"
              >
                <Phone className="h-6 w-6 transition-transform group-hover:rotate-12" />
                Call {SITE_CONFIG.phone}
              </a>
              <a
                href="#mission"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Discover Our Story
                <motion.span
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </a>
            </motion.div>
          </motion.div>
        </Container>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Mission Section - Redesigned */}
      <Section id="mission" className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                <Sparkles className="h-4 w-4" />
                Our Mission
              </div>
              
              <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                Making Restaurant Dreams{' '}
                <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Effortless
                </span>
              </h2>
              
              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p className="text-xl font-medium text-gray-900">
                  Opening a restaurant shouldn't be overwhelming. We make it simple.
                </p>
                <p>
                  Between permits, equipment sourcing, contractor coordination, and interior design, 
                  launching a restaurant can feel impossible. That's where we come in.
                </p>
                <p>
                  Based in <span className="font-semibold text-gray-900">{SITE_CONFIG.address}</span>, 
                  we provide <span className="font-semibold text-gray-900">complete restaurant setups</span> from 
                  initial consultation through opening day. We handle everything: kitchen planning, 
                  equipment procurement, interior design, and project management.
                </p>
                <p>
                  Our partnership with <span className="font-semibold text-blue-600">HELUX Storkök & Inredningar AB</span> gives 
                  us access to premium commercial kitchen equipment and deep expertise in professional kitchen design.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4 rounded-2xl border-2 border-blue-100 bg-blue-50/50 p-6">
                <div>
                  <div className="mb-1 text-3xl font-bold text-blue-600">8-14</div>
                  <div className="text-sm text-gray-600">Weeks Average</div>
                </div>
                <div>
                  <div className="mb-1 text-3xl font-bold text-blue-600">1</div>
                  <div className="text-sm text-gray-600">Point of Contact</div>
                </div>
                <div>
                  <div className="mb-1 text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Turnkey Solution</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative Cards */}
              <div className="space-y-4">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-900/5">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Fast & Efficient</h3>
                  <p className="text-gray-600">
                    Streamlined processes get you from concept to grand opening faster than traditional methods.
                  </p>
                </div>

                <div className="ml-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-900/5">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Fully Insured</h3>
                  <p className="text-gray-600">
                    All work is insured and equipment comes with manufacturer warranties. Your investment is protected.
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-lg shadow-gray-900/5">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">Proven Expertise</h3>
                  <p className="text-gray-600">
                    15+ years combined experience and 50+ successful restaurant projects across Sweden.
                  </p>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 -top-4 rounded-2xl border-2 border-white bg-gradient-to-br from-orange-500 to-red-500 p-4 shadow-2xl"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-xs text-orange-100">Happy Clients</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Why Trust Us - Reimagined */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        {/* Animated Background */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
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
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl"
        />

        <Container>
          <div className="relative z-10">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-sm">
                <Shield className="h-4 w-4 text-blue-200" />
                <span className="text-sm font-semibold text-blue-100">
                  Trusted By Restaurant Owners
                </span>
              </div>
              <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
                Why Choose Us
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-blue-100">
                Your investment deserves proven expertise and reliable partners
              </p>
            </motion.div>
            
            {/* Trust Points Grid */}
            <div className="mb-12 grid gap-8 md:grid-cols-3">
              {TRUST_POINTS.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:-translate-y-2 hover:bg-white/10 hover:shadow-2xl">
                    {/* Icon */}
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-blue-100 shadow-xl shadow-blue-900/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                      <point.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="mb-3 text-2xl font-bold text-white">
                      {point.title}
                    </h3>
                    <p className="leading-relaxed text-blue-100">
                      {point.description}
                    </p>

                    {/* Decorative gradient */}
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-400/0 to-emerald-400/0 opacity-0 blur-2xl transition-opacity group-hover:from-blue-400/30 group-hover:to-emerald-400/30 group-hover:opacity-100" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl border-2 border-white/20 bg-white/10 p-8 text-center backdrop-blur-md sm:p-12"
            >
              <div className="relative z-10">
                <h3 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                  Let's Discuss Your Project
                </h3>
                <p className="mb-8 text-lg text-blue-100">
                  Get expert advice and a free consultation. We're here to answer your questions.
                </p>
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                    className="group inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-600 shadow-2xl transition-all hover:scale-105 hover:shadow-white/20"
                  >
                    <Phone className="h-6 w-6 transition-transform group-hover:rotate-12" />
                    Call {SITE_CONFIG.phone}
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                  >
                    Or Send Email
                  </a>
                </div>
                <p className="mt-6 text-sm text-blue-200">
                  Available Mon-Fri 9:00-17:00 • Response within 24 hours
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-yellow-400/20 blur-3xl" />
              <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-emerald-400/20 blur-3xl" />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* What We Do vs HELUX */}
      <Section className="bg-gray-50">
        <Container>
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
                How We Work Together
              </h2>
            </motion.div>
            
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8"
              >
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  Nordic Kitchen Solutions
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gray-900" />
                    <span>Complete project management</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gray-900" />
                    <span>Kitchen layout and flow design</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gray-900" />
                    <span>Interior design and furniture</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gray-900" />
                    <span>Permit applications</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gray-900" />
                    <span>Contractor coordination</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:p-8"
              >
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  HELUX Storkök & Inredningar AB
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gray-900" />
                    <span>Commercial kitchen equipment</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gray-900" />
                    <span>Technical installation expertise</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gray-900" />
                    <span>Equipment warranties and service</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gray-900" />
                    <span>Professional ventilation systems</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gray-900" />
                    <span>Specialized kitchen design knowledge</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <a
                href={SITE_CONFIG.heluxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-base font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 transition-colors hover:decoration-gray-900"
              >
                Visit HELUX website
                <ExternalLink size={16} />
              </a>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Values Section - Redesigned */}
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
              <Target className="h-4 w-4 text-emerald-700" />
              <span className="text-sm font-semibold text-emerald-700">
                Our Core Values
              </span>
            </div>
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              What Drives Us Forward
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              The principles that guide our work and relationships with clients
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border-2 border-gray-200 bg-white p-8 transition-all hover:-translate-y-2 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Icon */}
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 text-white shadow-lg transition-transform group-hover:scale-110 group-hover:rotate-6">
                    <value.icon className="h-7 w-7" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="leading-relaxed text-gray-600">
                    {value.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute right-0 top-0 h-20 w-20 translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br from-blue-500/10 to-emerald-500/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Final CTA - Redesigned */}
      <Section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
        />

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-300">
                Ready to Get Started?
              </span>
            </div>

            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              Let's Build Your Dream{' '}
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Restaurant
              </span>
            </h2>
            
            <p className="mb-10 text-xl text-gray-300 sm:text-2xl">
              Every successful restaurant begins with a conversation. Call us today for a free consultation and let's discuss your vision.
            </p>
            
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40"
              >
                <Phone className="h-6 w-6 transition-transform group-hover:rotate-12" />
                {SITE_CONFIG.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 bg-white/10 px-10 py-5 text-xl font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                Or Email Us
              </Link>
            </div>
            
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>24-hour response</span>
              </div>
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
