import {
  Globe2,
  Search,
  Megaphone,
  Palette,
  MapPin,
  PenTool,
  FileText,
  Share2,
  Sparkles,
  Target,
  LucideIcon,
} from 'lucide-react'

export interface ServicePricingItem {
  label: string
  price: string
  unit: string
  note?: string
}

export interface ServiceWhyUs {
  title: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface Service {
  slug: string
  title: string
  description: string
  icon: LucideIcon
  tagline: string
  overview: string
  whatsIncluded: string[]
  whyUs: ServiceWhyUs[]
  pricing: ServicePricingItem[]
  faqs: ServiceFAQ[]
}

export const SERVICES: Service[] = [
  {
    slug: 'web-design',
    title: 'Web Design',
    description: 'Fast, modern, mobile-first websites built to convert visitors into customers.',
    icon: Globe2,
    tagline: 'Fast, modern websites built to convert',
    overview:
      'Your website is often the first impression a potential customer has of your business. We design and build fast, mobile-first websites that load quickly, look great on every device, and are structured to turn visitors into paying customers.',
    whatsIncluded: [
      'Custom design tailored to your brand',
      'Mobile-first, fully responsive layout',
      'Fast loading speeds and clean code',
      'Contact forms and clear calls-to-action',
      'Basic on-page SEO setup included',
    ],
    whyUs: [
      {
        title: 'Built for Conversions',
        description:
          'Every page is designed with a clear next step for the visitor, not just to look nice.',
      },
      {
        title: 'No Templates',
        description: 'Every site is designed from scratch around your brand, not a recycled theme.',
      },
      {
        title: 'Fast Turnaround',
        description: 'Most websites are designed and live within 1-2 weeks.',
      },
    ],
    pricing: [{ label: 'Web Design', price: 'R650', unit: 'once-off' }],
    faqs: [
      {
        question: 'How long does a website take to build?',
        answer:
          'Most standard websites are completed within 1-2 weeks from final content approval, depending on the number of pages and revisions.',
      },
      {
        question: 'Do I need to provide the content?',
        answer:
          'You can provide your own text and images, or we can help write and source content as an add-on.',
      },
      {
        question: 'Will my website work on mobile?',
        answer:
          'Yes. Every website we build is fully responsive and tested across phones, tablets, and desktops.',
      },
    ],
  },
  {
    slug: 'seo',
    title: 'SEO',
    description: 'Rank higher on Google with technical, on-page, and local SEO strategies.',
    icon: Search,
    tagline: 'Rank higher and get found by the right customers',
    overview:
      'SEO is how customers find you before they find your competitors. We handle technical fixes, on-page optimization, and content structure to help your website rank higher on Google for the searches that actually bring in business.',
    whatsIncluded: [
      'Keyword research for your industry',
      'On-page optimization (titles, meta descriptions, headings)',
      'Technical SEO audit and fixes',
      'Site speed and mobile usability improvements',
      'Monthly performance reporting',
    ],
    whyUs: [
      {
        title: 'Data-Driven, Not Guesswork',
        description: 'Every recommendation is backed by real keyword and competitor data.',
      },
      {
        title: 'White-Hat Only',
        description: 'We never use shortcuts that risk a Google penalty down the line.',
      },
      {
        title: 'Local + National',
        description:
          'Whether you need local map-pack visibility or national rankings, we tailor the strategy.',
      },
    ],
    pricing: [{ label: 'On-Page SEO', price: 'R1,050', unit: 'once-off' }],
    faqs: [
      {
        question: 'How long until I see results?',
        answer:
          'SEO is a long-term investment. Most clients start seeing meaningful ranking improvements within 2-4 months.',
      },
      {
        question: 'Is this a once-off service or ongoing?',
        answer:
          'On-page SEO is a once-off optimization. We also offer ongoing SEO management for continued growth, available on request.',
      },
      {
        question: 'Do you guarantee first-page rankings?',
        answer:
          'No ethical agency can guarantee specific rankings, since search algorithms are outside anyone’s control. We focus on sustainable, long-term improvement instead.',
      },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Full-funnel campaigns across search, social, and email that drive real growth.',
    icon: Megaphone,
    tagline: 'Full-funnel campaigns that turn attention into revenue',
    overview:
      'From search to social to email, we build and manage digital marketing campaigns that work together toward one goal: measurable growth. No scattered efforts, just one coordinated strategy across every channel that matters to your business.',
    whatsIncluded: [
      'Multi-channel campaign strategy',
      'Search, social, and email marketing',
      'Audience targeting and segmentation',
      'Creative and copy for every channel',
      'Monthly performance reporting',
    ],
    whyUs: [
      {
        title: 'One Strategy, Every Channel',
        description:
          'Your campaigns work together instead of competing for the same budget and attention.',
      },
      {
        title: 'Real Metrics, Not Vanity Numbers',
        description: 'We report on traffic, leads, and revenue, not just likes and impressions.',
      },
      {
        title: 'Flexible Budgets',
        description: 'Campaigns are built to scale with whatever budget you are working with.',
      },
    ],
    pricing: [],
    faqs: [
      {
        question: 'What is the minimum budget to get started?',
        answer:
          'It depends on your goals and industry. Get in touch and we will put together a plan that fits your budget.',
      },
      {
        question: 'Which channels do you manage?',
        answer:
          'Google, Meta (Facebook & Instagram), email marketing, and organic social, tailored to where your customers actually are.',
      },
      {
        question: 'How often will I get updates?',
        answer:
          'You will get a full performance report every month, plus quick updates whenever something significant happens with your campaigns.',
      },
    ],
  },
  {
    slug: 'graphic-design',
    title: 'Graphic Design',
    description: 'Eye-catching visuals for print, digital ads, packaging, and everything in between.',
    icon: Palette,
    tagline: 'Visuals that make your brand impossible to ignore',
    overview:
      'From social media graphics to print materials and packaging, we create eye-catching visuals that keep your brand consistent and professional everywhere it shows up.',
    whatsIncluded: [
      'Social media graphics and templates',
      'Print materials (flyers, brochures, banners)',
      'Packaging and product design',
      'Brand-consistent visual assets',
      'Fast turnaround on revisions',
    ],
    whyUs: [
      {
        title: 'Consistent Brand Identity',
        description:
          'Every asset we design stays true to your existing brand guidelines, or helps establish new ones.',
      },
      {
        title: 'Print & Digital Ready',
        description: 'Files are delivered correctly formatted for web, social, or professional printing.',
      },
      {
        title: 'Quick Turnarounds',
        description: 'Most design requests are completed within a few days, not weeks.',
      },
    ],
    pricing: [],
    faqs: [
      {
        question: 'What file formats will I receive?',
        answer:
          'You will get all the files you need, typically PNG, JPG, and PDF for print, plus editable source files on request.',
      },
      {
        question: 'Can you match our existing brand style?',
        answer: 'Yes, we will design around your existing brand guidelines, logo, and colour palette.',
      },
      {
        question: 'Do you offer print-ready packaging design?',
        answer: 'Yes, we design packaging and product graphics that are print-ready and production-tested.',
      },
    ],
  },
  {
    slug: 'google-business-profile',
    title: 'Google Business Profile',
    description: 'Optimized local listings that put you on the map for nearby customers searching right now.',
    icon: MapPin,
    tagline: 'Show up on the map when nearby customers search',
    overview:
      'Your Google Business Profile is often the first thing local customers see. We optimize it fully, photos, categories, description, and posts, so you show up in the map pack for the searches that matter most.',
    whatsIncluded: [
      'Full profile setup or optimization',
      'Category and service selection',
      'Photo and description optimization',
      'Review strategy guidance',
      'Map-pack visibility improvements',
    ],
    whyUs: [
      {
        title: 'Local SEO Specialists',
        description: 'We know exactly what signals search engines use to rank local businesses.',
      },
      {
        title: 'More Calls & Visits',
        description:
          'A fully optimized profile directly drives more calls, direction requests, and website clicks.',
      },
      {
        title: 'Quick, One-Time Setup',
        description: 'Get it done right the first time with a single once-off optimization.',
      },
    ],
    pricing: [{ label: 'Google Business Profile Setup', price: 'R550', unit: 'once-off' }],
    faqs: [
      {
        question: 'I already have a Google Business Profile. Can you still help?',
        answer:
          'Yes, we will audit your existing profile and optimize everything that is holding back your visibility.',
      },
      {
        question: 'Will this help me show up in the map pack?',
        answer:
          'A fully optimized profile is one of the biggest factors in local map-pack rankings, alongside reviews and citations.',
      },
      {
        question: 'Do you manage reviews for me?',
        answer:
          'We provide guidance and a strategy for growing reviews. Ongoing review management is available as an add-on.',
      },
    ],
  },
  {
    slug: 'logo-design',
    title: 'Logo Design',
    description: 'Distinctive, memorable logos that anchor your brand identity from day one.',
    icon: PenTool,
    tagline: 'A memorable mark that anchors your entire brand',
    overview:
      'Your logo is the anchor of your brand identity. We design distinctive, versatile logos that work everywhere, from your website to your storefront to your business cards, and actually look good at every size.',
    whatsIncluded: [
      'Custom logo concepts',
      'Unlimited revisions on the chosen direction',
      'Multiple file formats (PNG, SVG, PDF)',
      'Colour and black-and-white versions',
      'Basic usage guidelines',
    ],
    whyUs: [
      {
        title: 'Built to Last',
        description: 'We design for longevity, not trends that will look dated in two years.',
      },
      {
        title: 'Versatile by Design',
        description: 'Every logo is tested at multiple sizes and on multiple backgrounds before delivery.',
      },
      {
        title: 'Affordable, Professional Quality',
        description: 'Agency-quality design without the agency-sized price tag.',
      },
    ],
    pricing: [{ label: 'Logo Design', price: 'R250', unit: 'once-off' }],
    faqs: [
      {
        question: 'How many concepts will I see?',
        answer:
          'You will receive multiple initial concepts to choose from, then unlimited revisions on your chosen direction.',
      },
      {
        question: 'What files do I get at the end?',
        answer: 'You will receive PNG, SVG, and PDF files in both colour and black-and-white versions.',
      },
      {
        question: 'Can you redesign an existing logo?',
        answer: 'Yes, we can refresh and modernize an existing logo while keeping brand recognition intact.',
      },
    ],
  },
  {
    slug: 'business-profile-design',
    title: 'Business Profile Design',
    description: 'Polished company profiles and brochures that win trust with new clients.',
    icon: FileText,
    tagline: 'A polished company profile that wins new business',
    overview:
      'A professional company profile document is often what closes the deal with new clients, suppliers, or tenders. We design polished, on-brand profile documents that present your business the way it deserves to be seen.',
    whatsIncluded: [
      'Custom-designed layout matching your brand',
      'Up to 5 pages included',
      'Print and digital-ready formats',
      'Editable source file on request',
      'Additional pages available',
    ],
    whyUs: [
      {
        title: 'Tender & Client-Ready',
        description:
          'Designed to meet the standard expected in formal business documents and tender submissions.',
      },
      {
        title: 'On-Brand Every Page',
        description: 'Consistent with your logo, colours, and overall visual identity.',
      },
      {
        title: 'Scales With Your Needs',
        description: 'Need more than 5 pages? Additional pages are added at a simple flat rate.',
      },
    ],
    pricing: [
      {
        label: 'Business Profile Design',
        price: 'R750',
        unit: 'up to 5 pages',
        note: 'R120 per additional page after that',
      },
    ],
    faqs: [
      {
        question: 'What is included in the 5 pages?',
        answer:
          'Typically a cover page, company overview, services, team or capabilities, and contact page, adjusted to fit your business.',
      },
      {
        question: 'Can I get more than 5 pages?',
        answer: 'Yes, additional pages are R120 each, added to the base price.',
      },
      {
        question: 'Do you write the content too?',
        answer: 'You can supply your own content, or we can help write and structure it as an add-on.',
      },
    ],
  },
  {
    slug: 'social-media-management',
    title: 'Social Media Management',
    description: 'Consistent, on-brand content and community management across platforms.',
    icon: Share2,
    tagline: 'Consistent, on-brand content without the daily effort',
    overview:
      'Staying active on social media takes time most business owners do not have. We plan, create, and post consistent, on-brand content across your channels, so your social presence grows without you having to think about it every day.',
    whatsIncluded: [
      'Monthly content calendar',
      'Custom graphics and captions',
      'Posting across your chosen platforms',
      'Community management and replies',
      'Monthly performance reporting',
    ],
    whyUs: [
      {
        title: 'Consistency That Compounds',
        description:
          'Regular, on-brand posting builds trust and visibility over time, not just a one-off boost.',
      },
      {
        title: 'Real Engagement, Not Bots',
        description: 'We focus on genuine community management, not fake followers or engagement pods.',
      },
      {
        title: 'Tailored Content Strategy',
        description: 'Content is planned around what actually works for your industry and audience.',
      },
    ],
    pricing: [],
    faqs: [
      {
        question: 'Which platforms do you manage?',
        answer: 'Typically Facebook and Instagram, with LinkedIn and TikTok available depending on your audience.',
      },
      {
        question: 'Do I need to approve posts before they go live?',
        answer: 'Yes, you will review and approve your content calendar each month before anything is posted.',
      },
      {
        question: 'How many posts per week is normal?',
        answer: 'This depends on your package, but most active accounts post 3-5 times per week.',
      },
    ],
  },
  {
    slug: 'branding-identity',
    title: 'Branding & Identity',
    description:
      'Cohesive visual systems built from colour, type, and tone that make your brand instantly recognisable.',
    icon: Sparkles,
    tagline: 'A cohesive identity that makes your brand instantly recognisable',
    overview:
      'Real branding is more than a logo. We build cohesive visual identity systems, colour, typography, tone, and imagery, so your brand looks and feels consistent everywhere your customers encounter it.',
    whatsIncluded: [
      'Brand strategy and positioning',
      'Colour palette and typography system',
      'Logo design and variations',
      'Brand guidelines document',
      'Templates for common brand assets',
    ],
    whyUs: [
      {
        title: 'Strategy Before Design',
        description: 'We start with who you are and who you are talking to, not just what looks nice.',
      },
      {
        title: 'One Consistent System',
        description:
          'Every asset, from your website to your social posts, follows the same visual language.',
      },
      {
        title: 'Built to Scale',
        description: 'Your brand system grows with you, new products, new channels, same consistent identity.',
      },
    ],
    pricing: [],
    faqs: [
      {
        question: 'Do you offer full rebrands as well as new brands?',
        answer: 'Yes, we work with brand-new businesses and established businesses looking for a refresh.',
      },
      {
        question: 'What is included in brand guidelines?',
        answer:
          'Logo usage, colour codes, typography, tone of voice, and examples of correct and incorrect usage.',
      },
      {
        question: 'Is logo design included?',
        answer: 'Yes, full logo design and variations are included as part of a complete branding package.',
      },
    ],
  },
  {
    slug: 'paid-ads',
    title: 'Paid Ads (PPC)',
    description: 'Targeted Google and Meta ad campaigns engineered for measurable ROI.',
    icon: Target,
    tagline: 'Targeted campaigns engineered for measurable ROI',
    overview:
      'We set up and manage Google and Meta ad campaigns built around one goal: a measurable return on your ad spend. From audience targeting to ad creative to ongoing optimization, every rand is working toward real results.',
    whatsIncluded: [
      'Google Ads and/or Meta Ads campaign setup',
      'Audience research and targeting',
      'Ad creative and copywriting',
      'Conversion tracking setup',
      'Ongoing optimization and reporting',
    ],
    whyUs: [
      {
        title: 'ROI-Focused',
        description: 'Campaigns are optimized for leads and sales, not just clicks and impressions.',
      },
      {
        title: 'Full Transparency',
        description: 'You see exactly where your ad budget is going and what it is returning, every month.',
      },
      {
        title: 'Platform Specialists',
        description: 'We know the ins and outs of both Google and Meta ad platforms, not just one.',
      },
    ],
    pricing: [
      { label: 'Google Ads Setup', price: 'R550', unit: 'once-off' },
      { label: 'Facebook & Instagram Ads Setup', price: 'R450', unit: 'once-off' },
    ],
    faqs: [
      {
        question: 'What is the difference between the setup fee and ad spend?',
        answer:
          'The setup fee covers campaign creation and configuration. Your ad spend (the budget the platform charges to show your ads) is separate and paid directly to Google or Meta.',
      },
      {
        question: 'How much should I budget for ad spend?',
        answer:
          'This depends on your industry and goals. We will recommend a starting budget based on your objectives during onboarding.',
      },
      {
        question: 'Do you manage the campaigns ongoing, or just set them up?',
        answer: 'The listed price covers setup. Ongoing management and optimization is available separately.',
      },
    ],
  },
]
