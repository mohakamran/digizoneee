import {
  BoltIcon,
  ChartBarIcon,
  GlobeAltIcon,
  MegaphoneIcon,
  ShoppingBagIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export const services = [
  {
    id: "amazon",
    title: "Amazon Management",
    description:
      "Full-funnel Amazon growth: storefront builds, PPC, DSP, listing optimization, A/B testing, and FBA/FBM ops.",
    icon: ShoppingBagIcon,
    link: "/services#amazon",
    price: "$899",
    period: "/month",
    features: [
      "Complete Amazon account setup",
      "PPC campaign management",
      "DSP advertising",
      "A+ Content creation",
      "FBA/FBM optimization",
      "Monthly performance reports"
    ]
  },
  {
    id: "walmart",
    title: "Walmart Store Management",
    description:
      "End-to-end setup, catalog, advertising, and performance dashboards tailored for Walmart Marketplace.",
    icon: GlobeAltIcon,
    link: "/services#walmart",
    price: "$799",
    period: "/month",
    features: [
      "Walmart Marketplace setup",
      "Product catalog optimization",
      "Walmart Connect ads",
      "Content compliance",
      "Performance analytics",
      "Weekly optimization"
    ]
  },
  {
    id: "etsy",
    title: "Etsy Store Management",
    description:
      "Creative brand pages, photography guidance, Etsy Ads, and conversion-first listing SEO built for makers.",
    icon: SparklesIcon,
    link: "/services#etsy",
    price: "$599",
    period: "/month",
    features: [
      "Etsy shop setup & branding",
      "Product photography guidance",
      "Etsy Ads management",
      "SEO optimization",
      "Creative templates",
      "Monthly insights"
    ]
  },
  {
    id: "shopify",
    title: "Shopify Development",
    description:
      "Custom Shopify builds, headless storefronts, checkout UX, CRO, and subscription + loyalty integrations.",
    icon: BoltIcon,
    link: "/services#shopify",
    price: "$1,299",
    period: "/month",
    features: [
      "Custom theme development",
      "Headless architecture",
      "CRO testing",
      "Checkout optimization",
      "Subscription setup",
      "Performance monitoring"
    ]
  },
  {
    id: "seo",
    title: "E-Commerce SEO & Marketing",
    description:
      "Organic search, performance creative, email/SMS, influencer, and on-site personalization that converts.",
    icon: MegaphoneIcon,
    link: "/services#seo",
    price: "$699",
    period: "/month",
    features: [
      "Ecommerce SEO strategy",
      "Email marketing automation",
      "SMS campaigns",
      "Influencer partnerships",
      "On-site personalization",
      "Conversion tracking"
    ]
  },
  {
    id: "integration",
    title: "Multi-Platform Integration",
    description:
      "Unified inventory, PIM/OMS, analytics dashboards, and API development for seamless operations.",
    icon: ChartBarIcon,
    link: "/services#integration",
    price: "$1,499",
    period: "/month",
    features: [
      "Inventory management system",
      "PIM/OMS integration",
      "Analytics dashboard",
      "API development",
      "Real-time sync",
      "Custom reporting"
    ]
  },
];

export const caseStudies = [
  {
    id: "aurora",
    client: "Aurora Beauty",
    platform: "Amazon",
    result: "+182% YoY revenue",
    title: "Full-funnel Amazon acceleration with DSP and retail media science.",
    highlights: [
      "A+ content uplift increased CVR by 28%",
      "ACoS reduced from 32% to 17%",
      "Inventory waste down by 41%",
    ],
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["DSP", "A/B Testing", "Retail Media"],
    metrics: { revenue: "£2.4M", roi: "6.4x", timeline: "9 months" },
  },
  {
    id: "harbor",
    client: "Harbor & Co",
    platform: "Shopify",
    result: "3.2x ROAS in 60 days",
    title: "Replatformed to Shopify with a modular, CRO-led design system.",
    highlights: [
      "Checkout drop-off reduced by 22%",
      "Loyalty + subscription uplifted LTV by 31%",
      "Core Web Vitals passed across mobile",
    ],
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["CRO", "Headless Ready", "Subscriptions"],
    metrics: { revenue: "£1.1M", roi: "3.2x", timeline: "2 months" },
  },
  {
    id: "coast",
    client: "Coast Living",
    platform: "Etsy",
    result: "+64% conversion rate",
    title: "Creative refresh plus Etsy Ads automation for a sustainable home brand.",
    highlights: [
      "Photography + video templates reduced production time by 40%",
      "Automated bidding lifted visibility in peak hours",
      "NPS moved from 48 to 71",
    ],
    image:
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1462396881884-de2c07cb95ed?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["Ads Automation", "Creative", "Customer Experience"],
    metrics: { revenue: "£640k", roi: "4.1x", timeline: "4 months" },
  },
  {
    id: "outback",
    client: "Outback Outfitters",
    platform: "Walmart",
    result: "-38% operational cost",
    title: "OMS + PIM integration unified Walmart, Amazon, and D2C inventory.",
    highlights: [
      "Real-time inventory sync dropped oversells to <1%",
      "Ad mix shifted to high-intent placements, CPC down 19%",
      "On-time delivery rate at 98.4%",
    ],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    ],
    tags: ["PIM/OMS", "Attribution", "Ops"],
    metrics: { revenue: "A$3.2M", roi: "2.9x", timeline: "6 months" },
  },
];

export const blogPosts = [
  {
    slug: "amazon-dsp-playbook-2025",
    title: "Amazon DSP Playbook for 2025",
    excerpt:
      "How we build retail-aware DSP funnels that compound organic rank and profitable demand.",
    date: "2025-01-15",
    image:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1200&q=80",
    readingTime: "7 min read",
    tags: ["Amazon", "DSP", "Performance"],
    content: [
      "The 2025 DSP landscape rewards retail-aware creative and incrementality-first measurement.",
      "We map funnels to retail readiness, pair AMC cohorts with product lifecycle, and automate bids with contribution margins, not just ROAS.",
      "Our starter checklist: clean retail media taxonomy, lifecycle-based creative, and post-view + post-click validation through AMC.",
    ],
  },
  {
    slug: "shopify-cro-blueprint",
    title: "A CRO Blueprint for Modern Shopify Brands",
    excerpt:
      "From modular sections to post-purchase upsells, here’s how we lifted LTV by 31% for D2C brands.",
    date: "2024-12-02",
    image:
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
    readingTime: "6 min read",
    tags: ["Shopify", "CRO", "Design Systems"],
    content: [
      "We start with speed budgets, accessibility, and merchandising heuristics before testing microcopy.",
      "Dynamic bundles, trust UX, and embedded financing improved AOV without harming conversion.",
      "Instrumentation: mixpanel for journeys, GA4 for scale, and Pixel for remarketing feedback loops.",
    ],
  },
  {
    slug: "etsy-creatives-that-convert",
    title: "Etsy Creatives That Convert",
    excerpt:
      "A creative system for Etsy sellers that halved production time while raising CVR by 64%.",
    date: "2024-11-10",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
    readingTime: "5 min read",
    tags: ["Etsy", "Creative", "Automation"],
    content: [
      "Templates that highlight craftsmanship, materials, and delivery promises drive Etsy intent.",
      "Automated dayparting and budget shifts keep ads live during peak discovery windows.",
      "Attach social proof and UGC early in the carousel to boost dwell and click-through.",
    ],
  },
  {
    slug: "walmart-marketplace-ops",
    title: "Operating at Scale on Walmart Marketplace",
    excerpt:
      "Inventory sync, bidding models, and catalog quality levers for Walmart-first sellers.",
    date: "2024-10-05",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    readingTime: "8 min read",
    tags: ["Walmart", "Ops", "Attribution"],
    content: [
      "We connect PIM and OMS for unified availability and automate issue remediation.",
      "Ad strategy blends search, display, and performance placements with contribution margin guardrails.",
      "Operational scorecards keep fulfillment, returns, and on-time metrics transparent to execs.",
    ],
  },
];

export const testimonials = [
  {
    name: "Clara Jennings",
    role: "VP E-Commerce, Aurora Beauty",
    photo:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
    quote:
      "Digizone rebuilt our entire Amazon program. We’ve never had such a tight retail + media loop—revenue is up and ops are calmer.",
  },
  {
    name: "Michael Tan",
    role: "Founder, Harbor & Co",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    quote:
      "Their Shopify squad works like an embedded product team. We shipped faster, tested smarter, and hit targets weeks early.",
  },
  {
    name: "Emily Wright",
    role: "CMO, Coast Living",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    quote:
      "Creative ops, ads automation, and CX instrumentation in one place. Digizone helped us scale without losing our brand voice.",
  },
  {
    name: "Liam O’Connor",
    role: "COO, Outback Outfitters",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    quote:
      "Our marketplace stack was messy. Digizone unified inventory, fixed attribution, and gave us an ops playbook the team loves.",
  },
];

export const jobs = [
  {
    title: "Senior Marketplace Manager",
    location: "London, UK (Hybrid)",
    description:
      "Own performance across Amazon/Walmart for tier-one brands. Lead strategy, ads, and retail readiness.",
    link: "mailto:talent@digizone.co?subject=Senior Marketplace Manager",
  },
  {
    title: "Shopify Frontend Engineer",
    location: "Sydney, AU (Remote-friendly)",
    description:
      "Craft performant Shopify storefronts, headless experiences, and CRO-driven UI systems.",
    link: "mailto:talent@digizone.co?subject=Shopify Frontend Engineer",
  },
  {
    title: "Performance Marketing Lead",
    location: "Manchester, UK (Hybrid)",
    description:
      "Lead paid search, social, and retail media with incrementality-first measurement.",
    link: "mailto:talent@digizone.co?subject=Performance Marketing Lead",
  },
  {
    title: "Creative Strategist",
    location: "Melbourne, AU (Remote)",
    description:
      "Build video + UGC playbooks, motion templates, and conversion-led creative for ecommerce.",
    link: "mailto:talent@digizone.co?subject=Creative Strategist",
  },
];

export const team = [
  {
    name: "Sophie Patel",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=800&q=80",
    socials: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Calum Fraser",
    role: "Director of Marketplace Ops",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
    socials: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Isabella Wright",
    role: "Head of Performance",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    socials: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    name: "Noah Bennett",
    role: "Product & Data Lead",
    image:
      "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    socials: {
      linkedin: "https://www.linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

export const stats = [
  { label: "Projects delivered", value: "240+" },
  { label: "Avg. ROAS across clients", value: "4.3x" },
  { label: "Countries served", value: "UK & Australia" },
  { label: "Years in ecommerce", value: "10+" },
];

export const offices = [
  {
    city: "London, UK",
    address: "22 Bishopsgate, London EC2N 4AJ",
    phone: "+44 20 7946 0123",
    email: "hello@digizone.co.uk",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.490694821924!2d-0.08335492331489734!3d51.51614431274866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cab9f97be0b%3A0xe442c78bf3e0b2c1!2s22%20Bishopsgate%2C%20London!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk",
  },
  {
    city: "Sydney, AU",
    address: "161 Castlereagh St, Sydney NSW 2000",
    phone: "+61 2 9012 3456",
    email: "hello@digizone.com.au",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.9110814671836!2d151.20969927695332!3d-33.87271602084977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3d7d0971af%3A0xf044c10de66ac7ca!2s161%20Castlereagh%20St%2C%20Sydney%20NSW%202000!5e0!3m2!1sen!2sau!4v1700000000001!5m2!1sen!2sau",
  },
];

export const heroLottie =
  "https://assets10.lottiefiles.com/packages/lf20_49rdyysj.json";

export const sparkLottie =
  "https://assets6.lottiefiles.com/packages/lf20_myejiggj.json";

export const growthLottie =
  "https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json";

export const teamLottie =
  "https://assets3.lottiefiles.com/packages/lf20_x62chj.json";

export const successLottie =
  "https://assets1.lottiefiles.com/packages/lf20_0b6xzzco.json";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blogs" },
  { href: "/careers", label: "Careers" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export type CaseStudy = (typeof caseStudies)[number];

