'use client';

import type { Metadata } from 'next';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { Card } from '@/components/card';
import { FAQ } from '@/components/faq';
import { SERVICES, FAQS } from '@/lib/constants';
import * as LucideIcons from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function ServicesPage() {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = '/#contact';
  };

  return (
    <>
      {/* Hero - Modern & Engaging */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:pt-32 lg:pb-24">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-emerald-400/30 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-20 top-40 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl"
          />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              Powered by HELUX Excellence
            </motion.div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Complete Restaurant Setup Solutions
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-blue-100 sm:text-xl lg:text-2xl">
              From your first sketch to opening day — we deliver turnkey restaurant kitchens 
              that comply with Swedish regulations and exceed your expectations.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-medium text-blue-700 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl active:scale-95"
              >
                Start Your Project
                <ArrowRight size={18} />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-95"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Value Proposition Banner */}
      <section className="border-b border-slate-200 bg-white py-8">
        <Container>
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 text-3xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-slate-600">Compliant with Swedish Standards</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 text-3xl font-bold text-emerald-600">8-12</div>
              <div className="text-sm text-slate-600">Weeks Average Project Timeline</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-2 text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-slate-600">Post-Installation Support</div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Services Grid - Enhanced */}
      <Section id="services" className="bg-gradient-to-b from-white to-slate-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center lg:mb-16"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What We Deliver
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Four comprehensive services that work together to transform your restaurant vision into reality.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid gap-8 lg:grid-cols-2"
          >
            {SERVICES.map((service, index) => {
              const icons = ['ChefHat', 'Package', 'Sofa', 'ClipboardCheck'];
              const colors = [
                'from-blue-500 to-blue-600',
                'from-emerald-500 to-emerald-600',
                'from-orange-500 to-orange-600',
                'from-purple-500 to-purple-600',
              ];
              const IconComponent = (LucideIcons as any)[icons[index]] || LucideIcons.Package;

              return (
                <motion.div key={service.title} variants={fadeInUp}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10">
                    {/* Icon */}
                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colors[index]} shadow-lg transition-transform group-hover:scale-110`}>
                      <IconComponent className="h-7 w-7 text-white" />
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 text-2xl font-bold text-slate-900">
                      {service.title}
                    </h2>

                    {/* Description */}
                    <p className="mb-6 leading-relaxed text-slate-600">
                      {service.description}
                    </p>

                    {/* Details List */}
                    <ul className="space-y-3">
                      {service.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-3 text-sm text-slate-700"
                        >
                          <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                            <Check className="h-3 w-3 text-emerald-600" strokeWidth={3} />
                          </div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover gradient effect */}
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/0 to-emerald-500/0 opacity-0 blur-2xl transition-opacity group-hover:from-blue-500/10 group-hover:to-emerald-500/10 group-hover:opacity-100" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-gradient-to-br from-slate-800 to-slate-900">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
                Why restaurants choose us
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                We're not just suppliers — we're your strategic partner in building a restaurant that works flawlessly from day one.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: 'HELUX Partnership',
                    description: 'Access to premium commercial-grade equipment from Sweden\'s most trusted supplier since 2012.',
                  },
                  {
                    title: 'Regulatory Expertise',
                    description: 'We navigate Swedish health & safety regulations so you don\'t have to worry about compliance.',
                  },
                  {
                    title: 'End-to-End Execution',
                    description: 'From permits to installation, we manage every detail so you can focus on your menu and team.',
                  },
                  {
                    title: 'Ongoing Support',
                    description: 'Post-opening assistance ensures your kitchen runs smoothly when it matters most.',
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500">
                      <Check className="h-5 w-5 text-white" strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl bg-gradient-to-br from-blue-500/10 to-emerald-500/10 p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                    <div className="mb-2 text-4xl font-bold text-white">500K - 2M SEK</div>
                    <p className="text-sm text-blue-200">Typical project investment range</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                    <div className="mb-2 text-4xl font-bold text-white">3-6 Months</div>
                    <p className="text-sm text-blue-200">From concept to fully operational</p>
                  </div>
                  <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
                    <div className="mb-2 text-4xl font-bold text-white">10+ Years</div>
                    <p className="text-sm text-blue-200">Equipment lifespan with proper maintenance</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* FAQ - Enhanced */}
      <Section className="bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 text-center lg:mb-16"
          >
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              Clear answers to common questions about our services, timeline, and process.
            </p>
          </motion.div>
          <FAQ faqs={FAQS} />
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-white/10 px-8 py-16 text-center backdrop-blur-sm sm:px-16 lg:py-20"
          >
            <div className="relative z-10">
              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
                Ready to build your dream kitchen?
              </h2>
              <p className="mb-8 text-lg text-orange-100">
                Book a free consultation — we'll respond within 24 hours with a custom plan.
              </p>
              <Link
                href="/#contact"
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-medium text-orange-600 shadow-lg transition-all hover:bg-orange-50 hover:shadow-xl active:scale-95"
              >
                Get Started Now
                <ArrowRight size={18} />
              </Link>
            </div>
            {/* Decorative blurs */}
            <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-red-500/20 blur-3xl" />
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
