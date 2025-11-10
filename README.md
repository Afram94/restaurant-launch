# Nordic Kitchen Solutions

A premium, frontend-only marketing website for restaurant setup services in Sweden.

## Tech Stack

- **Next.js 14+** with App Router
- **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **lucide-react** for icons

## Features

- ✅ **Pure frontend** - No backend, no API routes, no database
- ✅ **Static export ready** - Deploys to any static host
- ✅ **mailto: contact form** - Opens user's email client (alternatives commented for Netlify Forms/Formspree)
- ✅ **Premium Scandinavian design** - Minimalist, airy, professional
- ✅ **Fully responsive** - Mobile-first design
- ✅ **Smooth animations** - Respects `prefers-reduced-motion`
- ✅ **SEO optimized** - Proper metadata and semantic HTML
- ✅ **Accessible** - WCAG compliant with focus states and ARIA labels

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates a static export in the `out/` directory.

### Deploy

The static export can be deployed to:

- **Vercel**: `vercel deploy`
- **Netlify**: Drag and drop the `out/` folder
- **GitHub Pages**: Push the `out/` folder to gh-pages branch
- Any static hosting service

## Project Structure

```
app/
  layout.tsx          # Root layout with navbar/footer
  page.tsx            # Home page
  services/page.tsx   # Services page
  about/page.tsx      # About page
  contact/page.tsx    # Contact page
  globals.css         # Global styles

components/
  navbar.tsx          # Sticky navigation with mobile menu
  footer.tsx          # Footer with links
  section.tsx         # Animated section wrapper
  container.tsx       # Max-width container
  card.tsx            # Reusable card component
  feature-list.tsx    # Feature grid
  steps.tsx           # Numbered steps
  testimonial-list.tsx # Testimonial cards
  faq.tsx             # Accordion FAQ
  contact-panel.tsx   # Contact form (mailto)
  media-frame.tsx     # Image placeholder

lib/
  constants.ts        # Site content and config
  mailto.ts           # Mailto URL builder
  motion.ts           # Framer Motion variants
```

## Contact Form

The contact form uses a `mailto:` link by default. When users submit:

1. Their email client opens with prefilled content
2. A "Copy" button provides fallback functionality

### Switching to Netlify Forms

Uncomment the Netlify Forms section in `components/contact-panel.tsx`:

```tsx
<form 
  name="contact" 
  method="POST" 
  data-netlify="true"
>
  <input type="hidden" name="form-name" value="contact" />
  {/* ... fields ... */}
</form>
```

### Switching to Formspree

Replace the form action:

```tsx
<form 
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>
  {/* ... fields ... */}
</form>
```

## Customization

### Content

Edit `lib/constants.ts` to update:
- Site name and contact info
- Navigation links
- Features, steps, testimonials
- Services and FAQs

### Styling

- Design tokens are in `app/globals.css`
- Tailwind classes can be customized
- Font is Inter (can be changed in `app/layout.tsx`)

### Images

Replace placeholder images in `public/` directory. The `MediaFrame` component uses Next.js Image optimization.

## Performance

Built for Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## License

MIT

