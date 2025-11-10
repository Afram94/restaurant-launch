import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { Container } from './container';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Brand */}
            <div className="lg:col-span-1">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">
                Nordic Kitchen Solutions
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">
                Complete restaurant setups from concept to opening. Based in{' '}
                {SITE_CONFIG.address}.
              </p>
              <p className="text-sm text-gray-600">
                In partnership with{' '}
                <a
                  href={SITE_CONFIG.heluxUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-900 underline decoration-gray-300 underline-offset-2 hover:decoration-gray-900"
                >
                  HELUX Storkök & Inredningar AB
                </a>
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 gap-8 lg:col-span-1">
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
                  Pages
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Home
                    </Link>
                  </li>
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
                </ul>
              </div>
              <div>
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-900">
                  Legal
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact */}
            <div className="lg:col-span-1">
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

          {/* Bottom Bar */}
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600 lg:mt-12">
            © {new Date().getFullYear()} Nordic Kitchen Solutions. All rights
            reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
