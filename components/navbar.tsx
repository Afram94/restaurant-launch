'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Sparkles, ChevronRight } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { Container } from './container';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault();
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-gray-900/5 border-b border-gray-100'
            : 'bg-white/80 backdrop-blur-md'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Logo with Geometric Icon */}
            <Link
              href="/"
              className="group flex items-center gap-2.5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-110 lg:h-10 lg:w-10">
                <svg
                  viewBox="0 0 40 40"
                  className="h-5 w-5 text-white lg:h-6 lg:w-6"
                  fill="currentColor"
                >
                  <path d="M8 8h10v24H8V8zm14 0h10v10H22V8zm0 14h10v10H22V22z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-gray-900 lg:text-xl">
                  Nordic Kitchen
                </span>
                <span className="text-[10px] font-medium tracking-wide text-gray-500 lg:text-xs">
                  SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                className="group flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
              >
                <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                <span className="hidden xl:inline">{SITE_CONFIG.phone}</span>
                <span className="xl:hidden">Call Us</span>
              </a>
              <Link
                href="/#contact"
                onClick={handleContactClick}
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-blue-500/40"
              >
                Free Consultation
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative rounded-xl border-2 border-gray-200 bg-white p-2.5 text-gray-900 transition-all hover:border-blue-300 hover:bg-blue-50 lg:hidden"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </button>
          </div>
        </Container>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-gray-900/60 backdrop-blur-sm lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-blue-50 to-emerald-50 p-6">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 shadow-lg">
                      <svg
                        viewBox="0 0 40 40"
                        className="h-4 w-4 text-white"
                        fill="currentColor"
                      >
                        <path d="M8 8h10v24H8V8zm14 0h10v10H22V8zm0 14h10v10H22V22z" />
                      </svg>
                    </div>
                    <span className="text-lg font-bold text-gray-900">
                      Menu
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="rounded-lg p-2 text-gray-900 transition-colors hover:bg-white/50"
                    aria-label="Close menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Links */}
                <div className="flex-1 overflow-y-auto p-6">
                  <div className="space-y-2">
                    {NAV_LINKS.map((link, index) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={link.href}
                          className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-all ${
                            pathname === link.href
                              ? 'bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg shadow-blue-500/25'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {link.label}
                          <ChevronRight className={`h-5 w-5 transition-transform group-hover:translate-x-1 ${
                            pathname === link.href ? 'text-white' : 'text-gray-400'
                          }`} />
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Quick Contact Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8 rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-emerald-50 p-6"
                  >
                    <div className="mb-3 flex items-center gap-2">
                      <Phone className="h-5 w-5 text-blue-600" />
                      <span className="text-sm font-bold text-gray-900">Quick Call</span>
                    </div>
                    <a
                      href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                      className="block text-xl font-bold text-blue-600 hover:text-blue-700"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                    <p className="mt-2 text-xs text-gray-600">
                      Mon-Fri • 8:00-17:00
                    </p>
                  </motion.div>
                </div>

                {/* CTA */}
                <div className="border-t border-gray-200 bg-gray-50 p-6">
                  <Link
                    href="/#contact"
                    onClick={handleContactClick}
                    className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-4 text-center text-base font-bold text-white shadow-xl shadow-blue-500/25 transition-all active:scale-95"
                  >
                    Free Consultation
                    <Sparkles className="h-5 w-5" />
                  </Link>
                  <p className="mt-3 text-center text-xs text-gray-500">
                    24h Response • No Obligation
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16 lg:h-20" />
    </>
  );
}
