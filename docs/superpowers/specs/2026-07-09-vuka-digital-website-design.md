# Vuka Digital Website — Design Spec

## Overview
A marketing website for Vuka Digital, a digital marketing agency, styled as a dark/neon "creative agency" site (visual reference: Darkyn WordPress theme) built around the agency's existing neon blue→green phoenix-and-globe logo. Includes a Three.js 3D hero centerpiece.

## Business Info
- **Name:** Vuka Digital
- **Tagline:** "We Design | We Optimize | We Grow"
- **Phone:** 072 037 3679
- **WhatsApp:** +27 72 833 1515
- **Email:** info@vukadigital.co.za
- **Address:** 30 New Time Square, 30 Ernest Oppenheimer, Bruma, Johannesburg
- **Logo:** transparent neon blue/green phoenix-and-globe mark (provided by user, `vuka_digital_transparent.png` and higher-res version supplied in-chat)

## Architecture
- **Framework:** Next.js 14 (App Router) + TypeScript + Tailwind CSS
- **3D graphics:** `@react-three/fiber` + `@react-three/drei` for a hero-section rotating wireframe globe with glowing particle nodes and connecting data-lines, echoing the logo's phoenix/globe motif. Subtle mouse-parallax tilt. Client-side only (`dynamic(..., { ssr: false })`), simplified/static fallback on mobile for performance.
- **Animation:** Framer Motion for scroll-reveal, hover, and glow-pulse effects elsewhere on the site.
- **Content management:** static typed data files under `lib/data/` (`services.ts`, `portfolio.ts`, `testimonials.ts`) — plain arrays, hand-editable, no CMS.
- **Contact form backend:** a Next.js API route (`app/api/contact/route.ts`) sends enquiries via the Resend email API. This is the one server-only feature in the site.
- **Deployment target:** Vercel or any Node/serverless host — the `/api/contact` route needs a server runtime, so a pure static export is not viable. Everything else remains static/prerendered.

## Pages
No blog. Pages are:

1. **Home (`/`)**
   - Hero: Three.js globe + headline "We Design. We Optimize. We Grow." + primary CTA
   - Services preview grid (icons, links to full Services page)
   - "Why us" stats strip
   - Featured portfolio (3-4 items)
   - Testimonials carousel
   - CTA banner
   - Footer

2. **About (`/about`)**
   - Origin story built around "Vuka" meaning "awaken" (Nguni languages) — positions the agency as helping brands "wake up" their digital presence
   - Mission statement
   - 3-4 value pillars
   - Team placeholder section

3. **Services (`/services`)**
   - All 10 services as cards (icon + 1-2 sentence benefit-focused description), single page, no sub-pages:
     1. Web Design
     2. SEO
     3. Digital Marketing
     4. Graphic Design
     5. Google Business Profile Optimization
     6. Logo Design
     7. Business Profile Design
     8. Social Media Management
     9. Branding & Identity
     10. Paid Ads (PPC)

4. **Portfolio (`/portfolio`)**
   - Grid of 6-8 placeholder case studies with category tags, filterable by service type
   - Placeholder mockup images/gradients standing in for real screenshots

5. **Contact (`/contact`)**
   - Form: name, email, message fields; submits via `fetch` to a Next.js API route (`/api/contact`) which sends the enquiry through Resend to info@vukadigital.co.za, with sending/sent/error UI states
   - Click-to-call phone button, click-to-chat WhatsApp button
   - Email, address display
   - Embedded Google Map (Bruma, Johannesburg)
   - Social links (placeholder icons, hrefs to be filled in later)

## Shared Components
`Navbar` (sticky, glass/blur on scroll), `Footer`, `Logo`, `ServiceCard`, `PortfolioCard`, `TestimonialCard`, `CTAButton` (glow-on-hover), `Hero3D` (Three.js globe), `SectionHeading`.

## Content
All content is drafted/placeholder, written to be realistic and easily editable later:
- **Services:** 10 entries as listed above, each with icon + short benefit-focused copy
- **Portfolio:** 6-8 fictional case studies, category-tagged (Web Design, Branding, SEO, etc.)
- **Testimonials:** 4-5 short fictional client quotes with names/companies
- **About:** "Vuka" origin story, mission, values

## Styling
- **Palette:** near-black background (`#05070a`), electric blue (~`#2E7CF6`) → neon green (~`#39FF6A`) gradients pulled from the logo, off-white text, subtle grid/noise texture in dark sections
- **Typography:** Space Grotesk (headings, geometric/bold), Inter (body)
- **Motion:** glow-pulse primary buttons, scroll-reveal fades/slides, hover-lift cards, animated gradient underlines on nav links
- **Responsive:** mobile-first, fully responsive
- **Accessibility:** WCAG AA contrast checked despite dark theme

## Out of Scope
- Blog (explicitly excluded)
- CMS integration
- Individual service detail sub-pages
- Real client portfolio/testimonial content (placeholder only, to be replaced by user later)
