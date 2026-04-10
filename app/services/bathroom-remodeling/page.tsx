import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  DollarSign,
  Star,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import TestimonialCard from "@/components/TestimonialCard";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title:
    "Bathroom Remodeling Rogers AR | Custom Bathrooms | Summit Home Remodeling",
  description:
    "Professional bathroom remodeling in Rogers, AR and Northwest Arkansas. Walk-in showers, freestanding tubs, full gut renovations. Fixed-price contracts, 5-year warranty. Call (479) 319-4200.",
  keywords: [
    "bathroom remodeling Rogers AR",
    "bathroom renovation Northwest Arkansas",
    "walk-in shower Rogers AR",
    "master bath remodel Bentonville",
    "bathroom contractor Rogers Arkansas",
  ],
  alternates: {
    canonical: "https://summithomeremodeling.com/services/bathroom-remodeling",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Bathroom Remodeling",
  provider: {
    "@type": "HomeAndConstructionBusiness",
    name: "Summit Home Remodeling",
    url: "https://summithomeremodeling.com",
    telephone: siteConfig.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
  },
  serviceType: "Bathroom Remodeling",
  areaServed: siteConfig.serviceAreas.map((a) => `${a.city}, ${a.state}`),
  description:
    "Custom bathroom remodeling including walk-in showers, freestanding tubs, double vanity installation, and full gut renovations for homes in Rogers, AR and Northwest Arkansas.",
  offers: { "@type": "Offer", priceRange: "$12,000 – $55,000" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a bathroom remodel take in Rogers, AR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A full master bathroom remodel typically takes 3–5 weeks. A guest bath or powder room refresh can be done in 1–2 weeks. We sequence our trades so there's no waiting between phases.",
      },
    },
    {
      "@type": "Question",
      name: "What does a bathroom remodel cost in Northwest Arkansas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bathroom remodels at Summit range from $12,000 for a hall bath update to $55,000+ for a full luxury master suite. All contracts are fixed-price with no surprise change orders.",
      },
    },
    {
      "@type": "Question",
      name: "Will I be able to use my bathroom during the remodel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We sequence work to minimize downtime. If you have only one bathroom, we'll discuss your situation and find a plan. Most master bath projects don't affect the hall or guest bath.",
      },
    },
  ],
};

const included = [
  "Full demolition & debris removal",
  "Shower pan, tile & glass enclosure installation",
  "Freestanding or built-in tub installation",
  "Custom vanity & countertop installation",
  "Plumbing rough-in & fixture connections",
  "Heated floor rough-in (optional)",
  "Drywall, paint & ceiling work",
  "Lighting & exhaust fan upgrades",
  "Accent tile & niche design",
  "Permit pulling & inspection scheduling",
];

const faqs = [
  {
    q: "How long does a bathroom remodel take?",
    a: "A full master bathroom takes 3–5 weeks. Guest baths and powder rooms run 1–2 weeks. We sequence our trades to eliminate waiting between phases.",
  },
  {
    q: "What does bathroom remodeling cost near Rogers, AR?",
    a: "Our bathroom remodels range from $12,000 for a targeted hall bath refresh to $55,000+ for a full luxury master suite. Fixed-price contracts every time.",
  },
  {
    q: "Can you install a walk-in tile shower?",
    a: "Absolutely — custom walk-in showers with large-format tile, niches, multiple shower heads, and frameless glass are our most-requested bathroom projects.",
  },
  {
    q: "Will mold issues during demo stop the project?",
    a: "We encounter bathroom mold occasionally. When we do, we stop, document, remediate to EPA guidelines, and show you photos before continuing. Any additional cost is disclosed before work proceeds.",
  },
  {
    q: "Do you offer accessible bathroom design?",
    a: "Yes. We design and build ADA-compliant walk-in showers, grab bars, barrier-free entries, and comfort-height fixtures for aging-in-place projects throughout Northwest Arkansas.",
  },
];

const testimonials = [
  {
    name: "Sandra & Dave Whitmore",
    city: "Rogers, AR",
    rating: 5,
    text: "Our master bath hadn't been touched since 1998. Summit designed the most beautiful walk-in shower I've ever seen. The tile work is absolutely flawless.",
    project: "Master Bath Gut Renovation",
    date: "2025-06",
  },
  {
    name: "Patricia Nguyen",
    city: "Cave Springs, AR",
    rating: 5,
    text: "I wanted a freestanding tub and didn't think my bathroom could accommodate one. Summit redesigned the whole layout and now it's my favorite place in the house.",
    project: "Master Bath Reconfiguration + Freestanding Tub",
    date: "2025-01",
  },
];

export default function BathroomRemodelingPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <nav
        className='bg-card border-b border-border px-4 md:px-8 py-3'
        aria-label='Breadcrumb'
      >
        <div className='container-site mx-auto'>
          <ol
            className='flex items-center gap-2 text-xs font-body text-muted-foreground'
            itemScope
            itemType='https://schema.org/BreadcrumbList'
          >
            <li
              itemProp='itemListElement'
              itemScope
              itemType='https://schema.org/ListItem'
            >
              <Link
                href='/'
                itemProp='item'
                className='hover:text-gold transition-colors'
              >
                <span itemProp='name'>Home</span>
              </Link>
              <meta itemProp='position' content='1' />
            </li>
            <li aria-hidden='true'>/</li>
            <li
              itemProp='itemListElement'
              itemScope
              itemType='https://schema.org/ListItem'
            >
              <Link
                href='/services'
                itemProp='item'
                className='hover:text-gold transition-colors'
              >
                <span itemProp='name'>Services</span>
              </Link>
              <meta itemProp='position' content='2' />
            </li>
            <li aria-hidden='true'>/</li>
            <li
              itemProp='itemListElement'
              itemScope
              itemType='https://schema.org/ListItem'
            >
              <span itemProp='name' className='text-foreground'>
                Bathroom Remodeling
              </span>
              <meta itemProp='position' content='3' />
            </li>
          </ol>
        </div>
      </nav>

      <section className='relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden'>
        <Image
          src='/images/bathroom-after.jpg'
          alt='Luxury bathroom remodel with walk-in tile shower by Summit Home Remodeling in Rogers AR'
          fill
          priority
          className='object-cover'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[oklch(0.10_0.008_68/0.95)] via-[oklch(0.10_0.008_68/0.5)] to-transparent' />
        <div className='relative z-10 container-site mx-auto px-4 md:px-8 pb-10 md:pb-14'>
          <p className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-2'>
            Service
          </p>
          <h1 className='font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground'>
            Bathroom Remodeling
          </h1>
          <p className='font-body text-base md:text-lg text-foreground/75 mt-3 max-w-xl'>
            Rogers, AR and Northwest Arkansas. Turn your bathroom into a private
            retreat.
          </p>
        </div>
      </section>

      <div className='bg-card border-b border-border'>
        <div className='container-site mx-auto px-4 md:px-8'>
          <div className='grid grid-cols-3 divide-x divide-border'>
            {[
              { icon: DollarSign, label: "Starting from", value: "$12,000" },
              { icon: Clock, label: "Typical timeline", value: "3–5 Weeks" },
              { icon: Star, label: "Warranty", value: "5-Year" },
            ].map((item) => (
              <div
                key={item.label}
                className='flex flex-col sm:flex-row items-center gap-2 sm:gap-3 py-4 px-4 md:px-8'
              >
                <item.icon
                  className='w-5 h-5 text-gold shrink-0'
                  aria-hidden='true'
                />
                <div className='text-center sm:text-left'>
                  <div className='font-body text-[10px] uppercase tracking-widest text-muted-foreground'>
                    {item.label}
                  </div>
                  <div className='font-body font-semibold text-sm text-foreground'>
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='container-site mx-auto px-4 md:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 py-16 md:py-20'>
          <div className='lg:col-span-2 space-y-14'>
            <AnimatedSection>
              <h2 className='font-display text-2xl md:text-3xl font-bold text-foreground mb-4'>
                A bathroom that feels like a hotel suite — every day
              </h2>
              <div className='space-y-4 font-body text-muted-foreground leading-relaxed text-sm'>
                <p>
                  Bathrooms are the most personal spaces in your home. They set
                  the tone for your morning and provide the exhale at the end of
                  your day. When a bathroom is cramped, outdated, or simply
                  functional, you feel it every single time. Summit builds
                  bathrooms that become experiences.
                </p>
                <p>
                  We specialize in large-format tile showers, custom wall
                  niches, freestanding soaking tubs, dual-head rainfall systems,
                  heated floors, and double vanity configurations — the details
                  that take a bathroom from contractor-grade to truly custom.
                </p>
                <p>
                  Our waterproofing standards exceed Arkansas code requirements.
                  We use Schluter KERDI membrane systems on every shower we
                  build, because the tile you see is only as good as what&apos;s
                  behind it.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-4'>
                Before &amp; After
              </h2>
              <BeforeAfterSlider
                beforeSrc='/images/bathroom-before.jpg'
                afterSrc='/images/bathroom-after.jpg'
                beforeAlt='Outdated bathroom before Summit renovation in Rogers AR'
                afterAlt='Luxury spa bathroom after Summit renovation in Rogers AR'
                height={420}
              />
              <p className='font-body text-xs text-muted-foreground mt-3 text-center'>
                Project: Full master bath renovation · Rogers, AR · 4 weeks
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-6'>
                What&apos;s included in every bathroom remodel
              </h2>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                {included.map((item) => (
                  <li key={item} className='flex items-start gap-2.5'>
                    <CheckCircle
                      className='w-4 h-4 text-gold shrink-0 mt-0.5'
                      aria-hidden='true'
                    />
                    <span className='font-body text-sm text-muted-foreground'>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-6'>
                Questions clients ask us before starting their bathroom remodel
              </h2>
              <div className='space-y-5'>
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className='border border-border rounded-lg p-5 hover:border-gold/30 transition-colors'
                  >
                    <h3 className='font-body font-semibold text-foreground mb-2'>
                      {faq.q}
                    </h3>
                    <p className='font-body text-sm text-muted-foreground leading-relaxed'>
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-6'>
                From our bathroom clients
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                {testimonials.map((t) => (
                  <TestimonialCard key={t.name} {...t} />
                ))}
              </div>
            </AnimatedSection>
          </div>

          <aside className='lg:col-span-1 space-y-6'>
            <div className='sticky top-24 space-y-4'>
              <div className='bg-card border border-border rounded-xl p-6'>
                <h3 className='font-display text-xl font-bold text-foreground mb-2'>
                  Get a free bathroom estimate
                </h3>
                <p className='font-body text-sm text-muted-foreground mb-5'>
                  We&apos;ll measure your space, discuss your wish list, and
                  send a fixed-price proposal within 48 hours.
                </p>
                <Link
                  href='/contact'
                  className='flex items-center justify-center gap-2 w-full py-3 bg-gold text-[oklch(0.13_0.008_68)] font-body font-semibold text-sm rounded hover:bg-[oklch(0.82_0.12_75)] transition-colors mb-3'
                >
                  Schedule Free Consultation{" "}
                  <ArrowRight className='w-4 h-4' aria-hidden='true' />
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className='flex items-center justify-center gap-2 w-full py-3 border border-border text-foreground/80 font-body font-semibold text-sm rounded hover:border-gold/50 hover:text-foreground transition-colors'
                >
                  <Phone className='w-4 h-4' aria-hidden='true' />{" "}
                  {siteConfig.phone}
                </a>
                <p className='font-body text-xs text-muted-foreground text-center mt-3'>
                  {siteConfig.hours.weekday}
                </p>
              </div>

              <div className='bg-card border border-border rounded-xl p-5 space-y-3'>
                {[
                  "Licensed AR Contractor #CR-2011-0847",
                  "5-Year Workmanship Warranty",
                  "Fixed-Price Contract Guarantee",
                  "Fully Insured — $2M General Liability",
                  "Est. 2011 · 430+ Projects Completed",
                ].map((item) => (
                  <div key={item} className='flex items-start gap-2.5'>
                    <CheckCircle
                      className='w-4 h-4 text-gold shrink-0 mt-0.5'
                      aria-hidden='true'
                    />
                    <span className='font-body text-xs text-muted-foreground'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className='bg-card border border-border rounded-xl p-5'>
                <h4 className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-3'>
                  Other Services
                </h4>
                <div className='space-y-2'>
                  {siteConfig.services
                    .filter((s) => s.slug !== "bathroom-remodeling")
                    .map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className='flex items-center justify-between py-2 border-b border-border last:border-0 group'
                      >
                        <span className='font-body text-sm text-muted-foreground group-hover:text-gold transition-colors'>
                          {s.name}
                        </span>
                        <ArrowRight
                          className='w-3.5 h-3.5 text-muted-foreground group-hover:text-gold transition-colors'
                          aria-hidden='true'
                        />
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
