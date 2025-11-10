'use client';

import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { ContactPanel } from '@/components/contact-panel';
import { SITE_CONFIG } from '@/lib/constants';
import { Mail, Phone, MapPin, Clock, MessageCircle, Zap, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/motion';

export default function ContactPage() {
  return (
    <>
      {/* Hero Section - Redesigned */}
      <section className="relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>
          
          {/* Animated Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, 50, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-emerald-500/30 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.6, 0.4],
              x: [0, -50, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 top-0 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl"
          />
        </div>

        <Container>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center py-20 text-center"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-2 backdrop-blur-sm"
            >
              <MessageCircle className="h-4 w-4 text-emerald-300" />
              <span className="text-sm font-medium text-white">
                We're Here to Help
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeInUp}
              className="mb-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Let's Start Your{' '}
              <span className="bg-gradient-to-r from-emerald-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Restaurant Journey
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="mb-12 max-w-2xl text-xl leading-relaxed text-blue-100 sm:text-2xl"
            >
              Get in touch today and receive a response within 24 hours. Your dream restaurant is just one conversation away.
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center justify-center gap-6 text-white"
            >
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-emerald-300" />
                <span className="text-sm">24h Response Time</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <span className="text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <span className="text-sm">No Obligation</span>
              </div>
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

      {/* Contact Form & Info - Redesigned */}
      <Section className="bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact Info - Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2">
                  <Phone className="h-4 w-4 text-blue-700" />
                  <span className="text-sm font-semibold text-blue-700">
                    Contact Details
                  </span>
                </div>
                
                <h2 className="mb-6 text-3xl font-bold text-gray-900">
                  Get in Touch
                </h2>
                
                <p className="mb-8 text-gray-600">
                  Reach out to us using any of the methods below. We're committed to responding within 24 hours.
                </p>

                {/* Contact Cards */}
                <div className="space-y-4">
                  {/* Email Card */}
                  <motion.a
                    href={`mailto:${SITE_CONFIG.contactEmail}`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-start gap-4 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition-all hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg transition-transform group-hover:scale-110">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold text-gray-900">
                        Email Us
                      </p>
                      <p className="text-gray-600 transition-colors group-hover:text-blue-600">
                        {SITE_CONFIG.contactEmail}
                      </p>
                    </div>
                  </motion.a>

                  {/* Phone Card */}
                  <motion.a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-start gap-4 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition-all hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg transition-transform group-hover:scale-110">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold text-gray-900">
                        Call Us
                      </p>
                      <p className="text-gray-600 transition-colors group-hover:text-emerald-600">
                        {SITE_CONFIG.phone}
                      </p>
                    </div>
                  </motion.a>

                  {/* Location Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group flex items-start gap-4 rounded-2xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition-all hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg transition-transform group-hover:scale-110">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="mb-1 text-sm font-semibold text-gray-900">
                        Visit Us
                      </p>
                      <p className="text-gray-600">{SITE_CONFIG.address}</p>
                    </div>
                  </motion.div>
                </div>

                {/* Business Hours Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-8 overflow-hidden rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 p-6"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-semibold text-gray-900">8:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday - Sunday</span>
                      <span className="font-semibold text-gray-900">Closed</span>
                    </div>
                  </div>
                </motion.div>

                {/* Response Time Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-6 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-6 text-center text-white shadow-2xl shadow-orange-500/25"
                >
                  <p className="mb-2 text-4xl font-bold">24h</p>
                  <p className="text-sm font-medium text-orange-100">
                    Guaranteed Response Time
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form - Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="rounded-3xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 shadow-xl shadow-gray-900/5 sm:p-12">
                <div className="mb-8">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2">
                    <MessageCircle className="h-4 w-4 text-emerald-700" />
                    <span className="text-sm font-semibold text-emerald-700">
                      Send a Message
                    </span>
                  </div>
                  <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                    Tell Us About Your Project
                  </h2>
                  <p className="text-lg text-gray-600">
                    Fill out the form below and we'll get back to you with a detailed response within 24 hours.
                  </p>
                </div>
                
                <ContactPanel />

                {/* Trust Badges */}
                <div className="mt-8 grid grid-cols-3 gap-4 border-t-2 border-gray-200 pt-8">
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold text-blue-600">24h</div>
                    <div className="text-xs text-gray-600">Quick Reply</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold text-emerald-600">100%</div>
                    <div className="text-xs text-gray-600">Free Consultation</div>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-2xl font-bold text-purple-600">50+</div>
                    <div className="text-xs text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Call-to-Action Banner */}
      <Section className="relative overflow-hidden bg-gradient-to-r from-gray-900 to-blue-900">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="absolute left-0 top-0 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl"
        />
        
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Prefer to Call?
            </h2>
            <p className="mb-8 text-xl text-blue-200">
              We're ready to discuss your restaurant project right now
            </p>
            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-xl font-bold text-blue-600 shadow-2xl transition-all hover:scale-105 hover:shadow-white/20"
            >
              <Phone className="h-6 w-6" />
              {SITE_CONFIG.phone}
            </a>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
