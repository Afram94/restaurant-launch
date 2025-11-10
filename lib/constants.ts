/**
 * Shared constants and content
 */

export const SITE_CONFIG = {
  name: 'Nordic Kitchen Solutions',
  tagline: 'Complete restaurant setups in collaboration with HELUX',
  contactEmail: 'hello@nordickitchensolutions.se',
  phone: '+46 (0)11 123 4567',
  address: 'Norrköping, Sweden',
  heluxUrl: 'https://heluxab.se',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

export const PROJECT_TYPES = [
  'New Restaurant',
  'Renovation',
  'Café',
  'Bar',
  'Cloud Kitchen',
  'Other',
] as const;

export const FEATURES = [
  {
    title: 'Kitchen Planning',
    description: 'Optimized layouts that maximize workflow and comply with Swedish regulations.',
    icon: 'ChefHat',
  },
  {
    title: 'Equipment Supply',
    description: 'Professional-grade kitchen equipment sourced through our partnership with HELUX.',
    icon: 'Package',
  },
  {
    title: 'Interior & Furniture',
    description: 'Complete dining area design and furnishing that reflects your brand.',
    icon: 'Sofa',
  },
  {
    title: 'Project Coordination',
    description: 'End-to-end management from permits to final inspection.',
    icon: 'ClipboardCheck',
  },
] as const;

export const STEPS = [
  {
    number: 1,
    title: 'Book a free consultation',
    description: 'Tell us about your vision and we will assess your needs.',
  },
  {
    number: 2,
    title: 'We design your setup (with HELUX)',
    description: 'Our team creates a complete plan including equipment, layout, and interiors.',
  },
  {
    number: 3,
    title: 'Delivery & installation',
    description: 'Professional installation and coordination with all trades.',
  },
  {
    number: 4,
    title: 'Open your doors!',
    description: 'We hand over a turnkey kitchen ready for service.',
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: 'They coordinated everything seamlessly. Our kitchen was ready two weeks ahead of schedule.',
    author: 'Anna Bergström',
    role: 'Owner, Bergström Bistro',
  },
  {
    quote: 'Transparent pricing and no surprises. The HELUX equipment has been rock solid.',
    author: 'Johan Larsson',
    role: 'Head Chef, Lilla Köket',
  },
  {
    quote: 'I appreciated the attention to detail and how they explained every step.',
    author: 'Mira Yilmaz',
    role: 'Co-founder, Fika & Co',
  },
] as const;

export const SERVICES = [
  {
    title: 'Kitchen Planning & Design',
    description: 'Custom kitchen layouts optimized for your menu, space, and workflow. We ensure compliance with Swedish health and safety standards while maximizing efficiency.',
    details: [
      'Space planning and flow optimization',
      'Ventilation and exhaust design',
      'Compliance with Swedish regulations',
      'Equipment placement and sizing',
    ],
  },
  {
    title: 'Equipment Supply',
    description: 'Professional kitchen equipment sourced through HELUX Storkök & Inredningar AB. We provide reliable, commercial-grade appliances with full warranty and service support.',
    details: [
      'Ranges, ovens, and cooktops',
      'Refrigeration and freezing units',
      'Prep tables and sinks',
      'Dishwashing systems',
    ],
  },
  {
    title: 'Interior Design & Furniture',
    description: 'Complete dining area design that reflects your brand and provides a welcoming atmosphere for guests. We handle furniture, lighting, and finishing touches.',
    details: [
      'Dining area layout and seating',
      'Custom furniture selection',
      'Lighting design',
      'Decor and finishing touches',
    ],
  },
  {
    title: 'Project Coordination',
    description: 'Full project management from initial planning through final handover. We coordinate permits, contractors, deliveries, and inspections so you can focus on your menu and team.',
    details: [
      'Permit applications and approvals',
      'Contractor coordination',
      'Timeline management',
      'Final inspection and handover',
    ],
  },
] as const;

export const FAQS = [
  {
    question: 'How long does a typical restaurant setup take?',
    answer: 'Most projects take 8–14 weeks from initial consultation to opening day. Timeline depends on space size, complexity, and permit processing. We provide a detailed schedule during planning.',
  },
  {
    question: 'What is the typical budget for a restaurant setup?',
    answer: 'Costs vary widely based on size and concept. A small café might start around 300,000 SEK, while a full restaurant setup can range from 800,000 to 2,000,000 SEK or more. We provide transparent estimates after our consultation.',
  },
  {
    question: 'Do you provide warranties on equipment?',
    answer: 'Yes. All equipment sourced through HELUX comes with manufacturer warranties, typically 1–3 years. We also offer optional extended service plans.',
  },
  {
    question: 'Which regions do you serve?',
    answer: 'We are based in Norrköping and primarily serve central and southern Sweden. For projects outside our primary area, please contact us to discuss feasibility.',
  },
  {
    question: 'What brands of equipment do you work with?',
    answer: 'Through our HELUX partnership, we provide access to leading commercial kitchen brands including Electrolux Professional, Rational, Hoshizaki, and more. We recommend equipment based on your needs, not commissions.',
  },
  {
    question: 'Do you handle installation and permits?',
    answer: 'Yes. We coordinate all installations, contractor work, and permit applications. You will have a single point of contact throughout the process.',
  },
] as const;
