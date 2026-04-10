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
    "Basement Finishing Rogers AR | Finished Basements | Summit Home Remodeling",
  description:
    "Expert basement finishing in Rogers, AR and Northwest Arkansas. Home theaters, playrooms, home offices, in-law suites. Moisture-controlled construction, 5-year warranty. Call (479) 319-4200.",
  keywords: [
    "basement finishing Rogers AR",
    "finished basement Northwest Arkansas",
    "basement remodel Rogers",
    "basement home theater Bentonville AR",
    "basement contractor Rogers Arkansas",
  ],
  alternates: {
    canonical: "https://summithomeremodeling.com/services/basement-finishing",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Basement Finishing",
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
  serviceType: "Basement Finishing",
  areaServed: siteConfig.serviceAreas.map((a) => `${a.city}, ${a.state}`),
  description:
    "Basement finishing services including framing, electrical, HVAC, drywall, flooring, and custom room configurations for homes across Rogers, AR and Northwest Arkansas.",
  offers: { "@type": "Offer", priceRange: "$30,000 – $90,000" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does basement finishing take in Rogers, AR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standard basement finish takes 8–14 weeks depending on complexity. Adding a bathroom, wet bar, or home theater system extends the timeline. We build a detailed schedule before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to finish a basement in Northwest Arkansas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Basement finishing in Northwest Arkansas typically runs $30,000 for a basic open-plan finish to $90,000+ for a fully custom space with home theater, wet bar, and full bathroom. All Summit contracts are fixed price.",
      },
    },
    {
      "@type": "Question",
      name: "Do you first test for moisture before finishing a basement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every time. Before we frame a single wall, we conduct moisture testing and inspect the foundation for cracks, efflorescence, or water intrusion. We will not finish a wet basement — we'll address the problem first.",
      },
    },
  ],
};

const included = [
  "Moisture assessment & waterproofing review",
  "Egress window installation (if required)",
  "Full framing (walls, ceiling soffits, closets)",
  "Electrical — circuits, outlets, can lights, home theater pre-wire",
  "HVAC extension & duct work",
  "Plumbing rough-in for bathrooms or wet bars",
  "Insulation to current code (closed-cell on walls)",
  "Drywall, taping & finish paint",
  "Flooring (LVP, carpet, tile — your choice)",
  "Trim, doors & built-in shelving",
];

const faqs = [
  {
    q: "How do you handle moisture in Northwest Arkansas basements?",
    a: "We test before we frame. If we find active moisture, we address it first — interior drain tile, sump pump, crack injection, or exterior drainage. A finished basement built on top of a moisture problem is a guarantee of callbacks.",
  },
  {
    q: "Do I need egress windows to finish my basement?",
    a: "Arkansas code requires egress windows in any sleeping room — so if your basement will include a bedroom, yes. We handle egress window installation as part of the project and coordinate all inspections.",
  },
  {
    q: "Can you add a full bathroom to the basement?",
    a: "Yes. We handle the complete plumbing rough-in, a sewage ejector pump if needed (above drain cases), and full bathroom tile/fixture installation. Basement bathrooms with tile walk-in showers are one of our specialties.",
  },
  {
    q: "What flooring works best in a basement?",
    a: "We recommend luxury vinyl plank (LVP) for most basement floors — it's waterproof, durable, comfortable underfoot, and installs over concrete with minimal prep. Carpet over a quality pad works well in media rooms. We'll advise based on your specific layout and moisture levels.",
  },
  {
    q: "Can a finished basement double my home's livable square footage?",
    a: "In many ranch-style homes, yes. A full basement finish adds usable space at roughly 40–60% of the cost per square foot of an above-ground addition. It's often the highest-ROI home improvement you can make.",
  },
];

const testimonials = [
  {
    name: "David & Amy Caldwell",
    city: "Rogers, AR",
    rating: 5,
    text: "Summit turned our dark, ugly basement into a home theater, playroom, and full bath. Our kids spend more time in the basement than the living room now. I can't believe we waited this long.",
    project: "Full Basement Finish with Home Theater",
    date: "2025-02",
  },
  {
    name: "Thomas Merritt",
    city: "Springdale, AR",
    rating: 5,
    text: "I work from home and needed a real office. The basement is now a quiet, professional space with a wet bar on the other side. Summit's moisture testing upfront saved me from finishing a problem basement.",
    project: "Basement Home Office + Wet Bar",
    date: "2024-09",
  },
];

export default function BasementFinishingPage() {
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
                Basement Finishing
              </span>
              <meta itemProp='position' content='3' />
            </li>
          </ol>
        </div>
      </nav>

      <section className='relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden'>
        <Image
          src='/images/basement-after.jpg'
          alt='Finished basement with home theater by Summit Home Remodeling in Rogers AR'
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
            Basement Finishing
          </h1>
          <p className='font-body text-base md:text-lg text-foreground/75 mt-3 max-w-xl'>
            Rogers, AR and Northwest Arkansas. Turn unused square footage into
            your favorite room.
          </p>
        </div>
      </section>

      <div className='bg-card border-b border-border'>
        <div className='container-site mx-auto px-4 md:px-8'>
          <div className='grid grid-cols-3 divide-x divide-border'>
            {[
              { icon: DollarSign, label: "Starting from", value: "$30,000" },
              { icon: Clock, label: "Typical timeline", value: "8–14 Weeks" },
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
                Your most underutilized square footage, finally realized
              </h2>
              <div className='space-y-4 font-body text-muted-foreground leading-relaxed text-sm'>
                <p>
                  Most Northwest Arkansas homes with basements are using them as
                  storage. That unfinished concrete box represents hundreds of
                  square feet of potential — a home theater, a dedicated home
                  office, a kids&apos; playroom, a fitness room, an in-law
                  suite, or all of the above.
                </p>
                <p>
                  Summit takes a moisture-first approach to every basement
                  project. Before a stud goes up, we run moisture testing and
                  inspect the foundation. We won&apos;t finish a basement that
                  has active moisture problems — we&apos;ll remediate them
                  first. That&apos;s the only way to protect your investment
                  long-term.
                </p>
                <p>
                  Our basement finishes are built to look like the rest of your
                  home — not like an afterthought. We match trim profiles,
                  install real doors (not hollow-core), and spec flooring that
                  performs in below-grade conditions. The result is a basement
                  that commands a premium at resale.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-4'>
                Before &amp; After
              </h2>
              <BeforeAfterSlider
                beforeSrc='/images/basement-before.jpg'
                afterSrc='/images/basement-after.jpg'
                beforeAlt='Unfinished basement before Summit Home Remodeling in Rogers AR'
                afterAlt='Beautiful finished basement after Summit Home Remodeling in Rogers AR'
                height={420}
              />
              <p className='font-body text-xs text-muted-foreground mt-3 text-center'>
                Project: Full basement finish with home theater · Rogers, AR ·
                11 weeks
              </p>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-6'>
                What&apos;s included in every basement finish
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
                Basement finishing questions we hear most
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
                From our basement finishing clients
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
                  Get a free basement estimate
                </h3>
                <p className='font-body text-sm text-muted-foreground mb-5'>
                  We&apos;ll assess your basement&apos;s potential, discuss your
                  vision, and deliver a fixed-price proposal within 48 hours.
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
                  "Moisture-First Approach — Always",
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
                    .filter((s) => s.slug !== "basement-finishing")
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
