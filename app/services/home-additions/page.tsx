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
import TestimonialCard from "@/components/TestimonialCard";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title:
    "Home Additions Rogers AR | Room Additions & Sunrooms | Summit Home Remodeling",
  description:
    "Home additions in Rogers, AR and Northwest Arkansas. Master suite additions, sunrooms, second-story additions, garage conversions. Structural engineers on every project. Call (479) 319-4200.",
  keywords: [
    "home addition Rogers AR",
    "room addition Northwest Arkansas",
    "master suite addition Rogers",
    "sunroom addition Bentonville AR",
    "home addition contractor Rogers Arkansas",
  ],
  alternates: {
    canonical: "https://summithomeremodeling.com/services/home-additions",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Additions",
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
  serviceType: "Home Additions",
  areaServed: siteConfig.serviceAreas.map((a) => `${a.city}, ${a.state}`),
  description:
    "Residential home additions including master suite additions, sunrooms, family room extensions, garage conversions, and second-story additions for homes in Rogers, AR and Northwest Arkansas.",
  offers: { "@type": "Offer", priceRange: "$60,000 – $250,000+" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a home addition take in Rogers, AR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most first-floor additions take 3–5 months from permit approval to completion. Second-story additions typically run 4–7 months. We build detailed project timelines before any work begins.",
      },
    },
    {
      "@type": "Question",
      name: "What does a home addition cost in Northwest Arkansas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Home additions in Northwest Arkansas typically range from $60,000 for a simple room addition to $250,000+ for full second-story additions. Cost depends on size, finish level, and structural complexity.",
      },
    },
    {
      "@type": "Question",
      name: "Does Summit use a structural engineer for additions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, every addition project we build is reviewed and stamped by a licensed structural engineer. This protects your home and ensures the addition integrates properly with your existing structure.",
      },
    },
  ],
};

const included = [
  "Architectural design & structural engineering",
  "Permit applications & city/county coordination",
  "Foundation work (slab, crawl space, or basement)",
  "Full framing — walls, roof tie-in, and floor system",
  "Electrical, HVAC, and plumbing rough-in & finish",
  "Exterior siding matched to existing home",
  "Windows, doors & exterior trim",
  "Insulation to current energy code",
  "Drywall, interior trim & paint",
  "Flooring installation (your choice of material)",
];

const faqs = [
  {
    q: "Will the addition match my existing home?",
    a: "We take matching seriously — siding material, roof pitch, window trim, and soffit details are all specified to blend the addition seamlessly with your existing home. We walk you through the specs before framing starts.",
  },
  {
    q: "How are home additions permitted in Rogers, AR?",
    a: "We submit architectural plans (stamped by our structural engineer) to the Rogers Planning & Zoning Department and coordinate inspections at each phase. Permit complexity depends on addition type and your zoning classification.",
  },
  {
    q: "Can we add a second story to our existing home?",
    a: "In many cases yes, but it requires a structural assessment of your existing foundation and wall system. We'll determine if your home can support a second story before you spend money on plans.",
  },
  {
    q: "What is the ROI on a home addition?",
    a: "Northwest Arkansas is experiencing consistent real estate appreciation. Master suite additions and family room additions typically recoup 60–80% at resale in this market, while also significantly improving livability.",
  },
  {
    q: "Do we need to move out during an addition?",
    a: "Usually not. We sequence the tie-in work during a planned weather window and get the new space dried-in quickly. Most families remain in their home for the full project.",
  },
];

const testimonials = [
  {
    name: "Chris & Lauren Barker",
    city: "Rogers, AR",
    rating: 5,
    text: "We added a master suite and sunroom simultaneously. Summit managed everything — the engineer, the architects, the permits, and the crew. The addition looks like it was always part of the house.",
    project: "Master Suite + Sunroom Addition",
    date: "2024-11",
  },
  {
    name: "Greg Sorenson",
    city: "Lowell, AR",
    rating: 5,
    text: "Summit converted our detached garage into a guest suite and connected it to the main house. The work is indistinguishable from original construction — that's rare.",
    project: "Garage-to-Guest Suite Conversion",
    date: "2025-04",
  },
];

export default function HomeAdditionsPage() {
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
                Home Additions
              </span>
              <meta itemProp='position' content='3' />
            </li>
          </ol>
        </div>
      </nav>

      <section className='relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden'>
        <Image
          src='/images/addition-after.jpg'
          alt='Beautiful home addition built by Summit Home Remodeling in Rogers AR'
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
            Home Additions
          </h1>
          <p className='font-body text-base md:text-lg text-foreground/75 mt-3 max-w-xl'>
            Rogers, AR and Northwest Arkansas. More space, seamlessly built.
          </p>
        </div>
      </section>

      <div className='bg-card border-b border-border'>
        <div className='container-site mx-auto px-4 md:px-8'>
          <div className='grid grid-cols-3 divide-x divide-border'>
            {[
              { icon: DollarSign, label: "Starting from", value: "$60,000" },
              { icon: Clock, label: "Typical timeline", value: "3–5 Months" },
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
                More home. Same neighborhood. No moving trucks.
              </h2>
              <div className='space-y-4 font-body text-muted-foreground leading-relaxed text-sm'>
                <p>
                  When your family outgrows your home, moving isn&apos;t always
                  the answer — especially in a Northwest Arkansas market where
                  desirable neighborhoods command premium prices. A Summit home
                  addition gives you the space you need while you stay in the
                  community you love.
                </p>
                <p>
                  Every addition we build starts with structural engineering. We
                  don&apos;t guess at load paths, header sizes, or foundation
                  requirements. A licensed Arkansas structural engineer reviews
                  and stamps every addition project before we break ground.
                </p>
                <p>
                  Our roster of addition types: master suite additions, family
                  room extensions, sunrooms, second-story additions, in-law
                  suites, garage conversions, mudroom additions, and screened
                  porches. If it connects to your home, we build it.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <div className='relative rounded-xl overflow-hidden h-72 md:h-96'>
                <Image
                  src='/images/addition-after.jpg'
                  alt='Home addition exterior — Rogers AR'
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 100vw, 66vw'
                />
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-6'>
                What&apos;s included in every home addition
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
                Home addition questions we hear most
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
                From our home addition clients
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
                  Discuss your addition
                </h3>
                <p className='font-body text-sm text-muted-foreground mb-5'>
                  Book a free consultation. We&apos;ll assess your property,
                  discuss your goals, and outline a fixed-price path forward.
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
                  "Structural Engineering on Every Project",
                  "5-Year Workmanship Warranty",
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
                    .filter((s) => s.slug !== "home-additions")
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
