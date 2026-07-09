# Vuka Digital Website

Marketing website for Vuka Digital, built with Next.js, Tailwind CSS, and Three.js.

## Development

```bash
cd vuka-digital
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

- `npm run dev` - start the development server
- `npm run build` - production build
- `npm run start` - serve the production build
- `npm run lint` - run ESLint
- `npm test` - run Vitest unit tests (data layer)

## Editing content

- Services: `vuka-digital/lib/data/services.ts`
- Portfolio: `vuka-digital/lib/data/portfolio.ts`
- Testimonials: `vuka-digital/lib/data/testimonials.ts`
- Logo/favicon: `vuka-digital/public/logo.png`, `vuka-digital/public/favicon.png`

## Environment variables

Create `vuka-digital/.env.local` (not committed) with:

```
RESEND_API_KEY=your_resend_api_key
```

Get a key from https://resend.com. The contact form (`/api/contact`) uses this to send enquiry emails. For reliable delivery to `info@vukadigital.co.za` in production, verify the `vukadigital.co.za` domain in the Resend dashboard and update the `from` address in `vuka-digital/app/api/contact/route.ts` (it currently uses the shared `onboarding@resend.dev` test sender, which only delivers to the Resend account owner's own email).
