import Link from 'next/link';
import { Globe, Wrench, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { Container } from './container';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Nordic Kitchen Solutions
              </h3>
              <p className="mb-2 text-sm font-semibold text-blue-600">
                Complete Restaurant Launch Partner
              </p>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                From kitchen equipment to your website — we deliver turnkey restaurant 
                solutions across Sweden. Based in {SITE_CONFIG.address}.
              </p>
            </div>

            {/* Physical Setup */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100">
                  <Wrench className="h-4 w-4 text-blue-600" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900">
                  Physical Setup
                </h4>
              </div>
              <p className="mb-3 text-xs text-gray-500">Via HELUX Partnership</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Professional kitchen equipment</li>
                <li>• Interior design & furnishing</li>
                <li>• Installation & setup</li>
                <li>• Health & safety compliance</li>
                <li>• HELUX partnership quality</li>
              </ul>
            </div>

            {/* Digital Services - Highlighted */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50 p-4">
              <div className="absolute right-2 top-2 rounded-full bg-emerald-600 px-2 py-0.5 text-[10px] font-bold text-white">
                ✨ Our Expertise
              </div>
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900">
                  Digital Presence
                </h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Restaurant websites</li>
                <li>• Online booking systems</li>
                <li>• Google Business & SEO</li>
                <li>• Digital menus (QR codes)</li>
                <li>• Social media setup</li>
                <li>• Email marketing</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/services"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    Privacy & Terms
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
                  Contact
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href={`mailto:${SITE_CONFIG.contactEmail}`}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {SITE_CONFIG.contactEmail}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${SITE_CONFIG.phone.replace(/\s/g, '')}`}
                      className="text-gray-600 hover:text-gray-900"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
                    <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
            <p className="mb-4">
              Nordic Kitchen Solutions coordinates complete restaurant setups through our partnership 
              with HELUX for equipment and interiors, while providing digital services 
              (website, booking, marketing) through our tech expertise.
            </p>
            <p>
              © {new Date().getFullYear()} Nordic Kitchen Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
