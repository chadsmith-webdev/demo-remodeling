import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import TestimonialCard from "@/components/TestimonialCard";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title:
    "Home Remodeling Rogers AR | Kitchen, Bath & More | Summit Home Remodeling",
  description:
    "Summit Home Remodeling serves Rogers, AR with kitchen remodels, bathroom renovations, home additions, and basement finishing. Licensed Rogers contractor, 5-year warranty, fixed-price contracts. Call (479) 319-4200.",
  keywords: [
    "home remodeling Rogers AR",
    "kitchen remodeling Rogers Arkansas",
    "bathroom remodel Rogers AR",
    "home addition Rogers Arkansas",
    "Rogers AR contractor",
  ],
  alternates: {
    canonical: "https://summithomeremodeling.com/service-areas/rogers",
  },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Summit Home Remodeling — Rogers, AR",
  url: "https://summithomeremodeling.com/service-areas/rogers",
  image: "https://summithomeremodeling.com/images/og-image.jpg",
  priceRange: "$$",
  telephone: siteConfig.phoneRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: "Rogers",
    addressRegion: "AR",
    postalCode: "72756",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Rogers",
    sameAs: "https://www.wikidata.org/wiki/Q992290",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.stats.rating,
    reviewCount: siteConfig.stats.reviews,
    bestRating: 5,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Home Remodeling Services in Rogers, AR",
    itemListElement: siteConfig.services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
  },
};

const faqs = [
  {
    name: "Is Summit Home Remodeling licensed to work in Rogers, AR?",
    text: `Yes. Summit holds ${siteConfig.license} and is fully insured with $2M general liability and workers' compensation for all employees.`,
  },
  {
    name: "What remodeling services does Summit offer in Rogers, AR?",
    text: "Summit provides kitchen remodeling, bathroom remodeling, home additions (master suites, sunrooms, second-story), and basement finishing throughout Rogers, AR.",
  },
  {
    name: "How do I get a remodeling estimate in Rogers?",
    text: "Call (479) 319-4200 or complete our online form. A Summit project manager will schedule a free in-home consultation and deliver a fixed-price estimate within 48 hours of your design sign-off.",
  },
];

const testimonials = [
  {
    name: "Jennifer & Mark Holloway",
    city: "Rogers, AR",
    rating: 5,
    text: "Summit completely transformed our 1990s kitchen. Upfront about pricing, finished on time, and the custom cabinetry quality is stunning.",
    project: "Full Kitchen Remodel",
    date: "2025-08",
  },
  {
    name: "Sandra & Dave Whitmore",
    city: "Rogers, AR",
    rating: 5,
    text: "Our master bath hadn't been touched since 1998. Summit designed the most beautiful walk-in shower I've ever seen.",
    project: "Master Bath Gut Renovation",
    date: "2025-06",
  },
];

export default function RogersServiceAreaPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://summithomeremodeling.com" },
            { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://summithomeremodeling.com/service-areas" },
            { "@type": "ListItem", position: 3, name: "Rogers, AR", item: "https://summithomeremodeling.com/service-areas/rogers" },
          ],
        }) }}
      />

      <nav
        className='bg-card border-b border-border px-4 md:px-8 py-3'
        aria-label='Breadcrumb'
      >
        <div className='container-site mx-auto'>
          <ol className='flex items-center gap-2 text-xs font-body text-muted-foreground'>
            <li>
              <Link href='/' className='hover:text-gold transition-colors'>
                Home
              </Link>
            </li>
            <li aria-hidden='true'>/</li>
            <li>
              <Link
                href='/service-areas'
                className='hover:text-gold transition-colors'
              >
                Service Areas
              </Link>
            </li>
            <li aria-hidden='true'>/</li>
            <li className='text-foreground'>Rogers, AR</li>
          </ol>
        </div>
      </nav>

      <header className='section-pad bg-card border-b border-border'>
        <div className='container-site mx-auto px-4 md:px-8 max-w-3xl'>
          <AnimatedSection>
            <p className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-3'>
              Home Office · Primary Service Area
            </p>
            <h1 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-4'>
              Home Remodeling in Rogers, AR
            </h1>
            <p className='font-body text-base text-muted-foreground leading-relaxed'>
              Summit Home Remodeling is headquartered in Rogers, AR, and has
              served Benton County homeowners since 2011. From the older
              craftsman homes in downtown Rogers to the newer construction in
              Pinnacle zip codes, our team knows Rogers residential construction
              inside and out.
            </p>
          </AnimatedSection>
        </div>
      </header>

      <section className='section-pad'>
        <div className='container-site mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <div className='lg:col-span-2 space-y-12'>
            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-4'>
                Remodeling services for Rogers, AR homeowners
              </h2>
              <div className='space-y-4 text-sm text-muted-foreground font-body leading-relaxed'>
                <p>
                  Rogers is Benton County&apos;s largest city and one of the
                  fastest-growing communities in the South. With that growth
                  comes a mix of housing stock — 1970s ranch homes in
                  established neighborhoods, 1990s–2000s construction in
                  established suburban developments, and newer homes in
                  communities like Pinnacle and Persimmon Hills. Each era of
                  Rogers construction has its own quirks, and our team has
                  worked on all of them.
                </p>
                <p>
                  We pull all our permits through the Rogers Building Services
                  division and have established working relationships with city
                  inspectors. Our projects don&apos;t stall waiting for
                  inspections — we schedule them in advance and build the
                  inspection cadence into your timeline.
                </p>
                <p>
                  Whether you&apos;re on a tree-lined street near Old Downtown
                  Rogers, in a family neighborhood near Pinnacle Hills, or
                  anywhere between, Summit provides the same fixed-price
                  contract, the same craftsmen, and the same 5-year warranty.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-5'>
                Our services in Rogers, AR
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {siteConfig.services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className='group flex items-center gap-3 bg-card border border-border rounded-lg p-4 hover:border-gold/40 transition-colors'
                  >
                    <div className='w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0'>
                      <span className='text-gold text-base'>{s.icon}</span>
                    </div>
                    <div>
                      <div className='font-body text-sm font-semibold text-foreground group-hover:text-gold transition-colors'>
                        {s.name}
                      </div>
                      <div className='font-body text-xs text-muted-foreground'>
                        {s.priceRange}
                      </div>
                    </div>
                    <ArrowRight
                      className='ml-auto w-3.5 h-3.5 text-muted-foreground group-hover:text-gold transition-colors'
                      aria-hidden='true'
                    />
                  </Link>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-5'>
                From our Rogers clients
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                {testimonials.map((t) => (
                  <TestimonialCard key={t.name} {...t} />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-5'>
                Rogers, AR remodeling FAQs
              </h2>
              <div className='space-y-4'>
                {faqs.map((faq) => (
                  <div
                    key={faq.name}
                    className='border border-border rounded-lg p-5 hover:border-gold/30 transition-colors'
                  >
                    <h3 className='font-body font-semibold text-foreground mb-2'>
                      {faq.name}
                    </h3>
                    <p className='font-body text-sm text-muted-foreground leading-relaxed'>
                      {faq.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <aside className='space-y-5'>
            <div className='sticky top-24 space-y-4'>
              <div className='bg-card border border-border rounded-xl p-6'>
                <h3 className='font-display text-lg font-bold text-foreground mb-2'>
                  Get a free estimate in Rogers
                </h3>
                <p className='font-body text-sm text-muted-foreground mb-4'>
                  We respond within one business day.
                </p>
                <Link
                  href='/contact'
                  className='flex items-center justify-center gap-2 w-full py-3 bg-gold text-[oklch(0.13_0.008_68)] font-body font-semibold text-sm rounded hover:bg-[oklch(0.82_0.12_75)] transition-colors mb-3'
                >
                  Request Free Estimate{" "}
                  <ArrowRight className='w-4 h-4' aria-hidden='true' />
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className='flex items-center justify-center gap-2 w-full py-3 border border-border text-foreground/80 font-body font-semibold text-sm rounded hover:border-gold/50 hover:text-foreground transition-colors'
                >
                  <Phone className='w-4 h-4' aria-hidden='true' />{" "}
                  {siteConfig.phone}
                </a>
              </div>
              <div className='bg-card border border-border rounded-xl p-5 space-y-3'>
                {[
                  "Primary service area",
                  "Licensed AR Contractor",
                  "5-Year Workmanship Warranty",
                  "Fixed-Price Contracts",
                  "Est. 2011 · 430+ Projects",
                ].map((item) => (
                  <div key={item} className='flex items-center gap-2.5'>
                    <CheckCircle
                      className='w-4 h-4 text-gold shrink-0'
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
                  Nearby Cities We Serve
                </h4>
                <div className='space-y-2'>
                  {siteConfig.serviceAreas
                    .filter((a) => a.city !== "Rogers")
                    .map((a) => (
                      <Link
                        key={a.city}
                        href={`/service-areas/${a.city.toLowerCase().replace(/\s+/g, "-")}`}
                        className='flex items-center justify-between py-1.5'
                      >
                        <span className='font-body text-sm text-muted-foreground hover:text-gold transition-colors'>
                          {a.city}
                        </span>
                        <span className='font-body text-xs text-muted-foreground'>
                          {a.distance}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
