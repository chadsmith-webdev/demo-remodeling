import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, Star, Shield, Award, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StatCounter from "@/components/StatCounter";
import TestimonialCard from "@/components/TestimonialCard";
import HomeHero from "@/components/HomeHero";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Home Remodeling Contractor | Rogers, AR | Summit Home Remodeling",
  description:
    "Summit Home Remodeling is Rogers, AR's trusted home remodeling contractor. Kitchens, bathrooms, additions & basement finishes. 15+ years, 430+ projects, 4.9-star rated. Free estimates.",
  alternates: { canonical: "https://summithomeremodeling.com" },
};

const trustItems = [
  "Licensed & Insured in Arkansas",
  "5-Year Workmanship Warranty",
  "Fixed-Price Contracts — No Surprises",
  "Dedicated Project Manager",
  "Real Portfolio, Real Prices",
];

const testimonials = [
  {
    name: "Jennifer & Mark Holloway",
    city: "Rogers, AR",
    rating: 5,
    text: "Summit completely transformed our 1990s kitchen into something out of a magazine. They were upfront about pricing, finished on time, and the quality of the custom cabinetry blew us away. We've already referred them to three neighbors.",
    project: "Full Kitchen Remodel",
    date: "2025-08",
  },
  {
    name: "David Carrington",
    city: "Bentonville, AR",
    rating: 5,
    text: "I interviewed five contractors before choosing Summit. The difference was simple: they answer questions honestly, including the ones about what things cost and why. My master bathroom is now my favorite room in the house.",
    project: "Master Bathroom Remodel",
    date: "2025-11",
  },
  {
    name: "Sarah & Tom Weaver",
    city: "Springdale, AR",
    rating: 5,
    text: "Our home addition went exactly as planned. Six months from first call to final walkthrough. The crew was professional, cleaned up every day, and the craftsmanship speaks for itself. Summit earned every 5-star review they have.",
    project: "460 sq ft Room Addition",
    date: "2025-06",
  },
  {
    name: "Lisa Nguyen",
    city: "Lowell, AR",
    rating: 5,
    text: "We turned our unfinished basement into a full guest suite and media room. Summit brought ideas we hadn't thought of and kept us informed throughout. The finished product feels like it cost twice what we paid.",
    project: "Basement Finish & Guest Suite",
    date: "2026-01",
  },
];

const whyChooseItems = [
  {
    icon: Shield,
    title: "Fixed-Price Contracts",
    desc: "The price we quote is the price you pay. We eliminate change-order surprises that plague the industry.",
  },
  {
    icon: Award,
    title: "Craftsman-Grade Execution",
    desc: "Every project is led by a licensed superintendent. We hire skilled tradespeople — not the lowest bidder.",
  },
  {
    icon: Clock,
    title: "Schedule Transparency",
    desc: "You receive a detailed project schedule before we break ground. And we actually stick to it.",
  },
];

const serviceHighlights = [
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    desc: "Custom kitchens designed around how you actually live — from layout to last pull.",
    imageSrc: "/images/kitchen-after.jpg",
    imageAlt: "Modern kitchen remodel in Rogers AR with custom cabinetry and quartz countertops",
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    desc: "Spa-quality bathrooms tailored to your daily rituals and personal style.",
    imageSrc: "/images/bathroom-after.jpg",
    imageAlt: "Luxury bathroom remodel with freestanding tub in Bentonville AR",
  },
  {
    slug: "home-additions",
    name: "Home Additions",
    desc: "More space, seamlessly integrated — without leaving the neighborhood you love.",
    imageSrc: "/images/addition-after.jpg",
    imageAlt: "Home addition built by Summit Home Remodeling in Rogers AR",
  },
  {
    slug: "basement-finishing",
    name: "Basement Finishing",
    desc: "Transform raw square footage into the most valuable room in your home.",
    imageSrc: "/images/basement-after.jpg",
    imageAlt: "Finished basement media room in Springdale AR",
  },
];

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://summithomeremodeling.com/#business",
  name: "Summit Home Remodeling",
  url: "https://summithomeremodeling.com",
  image: "https://summithomeremodeling.com/images/og-image.jpg",
  priceRange: "$$",
  telephone: siteConfig.phoneRaw,
  email: siteConfig.email,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.lat,
    longitude: siteConfig.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.stats.rating,
    reviewCount: siteConfig.stats.reviews,
    bestRating: 5,
    worstRating: 1,
  },
  areaServed: siteConfig.serviceAreas.map((area) => ({
    "@type": "City",
    name: area.city,
    containedInPlace: { "@type": "State", name: "Arkansas" },
  })),
  sameAs: [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.google,
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      <HomeHero />

      {/* Trust bar */}
      <section className="bg-card border-y border-border py-5">
        <div className="container-site mx-auto px-4 md:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-gold shrink-0" aria-hidden="true" />
                <span className="font-body text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad bg-background" aria-label="Company statistics">
        <div className="container-site mx-auto">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Northwest Arkansas trusts Summit
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <AnimatedSection delay={0}>
              <StatCounter end={siteConfig.stats.yearsInBusiness} suffix="+" label="Years in Business" />
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <StatCounter end={siteConfig.stats.projectsCompleted} suffix="+" label="Projects Completed" />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <StatCounter end={siteConfig.stats.reviews} label="Verified Reviews" />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <StatCounter end={siteConfig.stats.warrantyYears} suffix="-Year" label="Workmanship Warranty" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-surface-low" id="services" aria-label="Our services">
        <div className="container-site mx-auto">
          <AnimatedSection className="mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Full-service remodeling,
              <br className="hidden md:block" /> start to finish
            </h2>
            <p className="font-body text-base text-muted-foreground mt-4 max-w-xl">
              Every project comes with dedicated project management, a fixed-price contract, and our
              5-year workmanship warranty.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {serviceHighlights.map((service, i) => (
              <AnimatedSection key={service.slug} delay={i * 0.08}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block overflow-hidden rounded-xl border border-border hover:border-gold/50 transition-all duration-300"
                  aria-label={`Learn about our ${service.name} services`}
                >
                  <div className="relative h-64 md:h-72 overflow-hidden">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-overlay-dark/90 via-overlay-dark/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl font-bold text-foreground mb-1">
                          {service.name}
                        </h3>
                        <p className="font-body text-sm text-foreground/70">{service.desc}</p>
                      </div>
                      <ArrowRight
                        className="w-5 h-5 text-gold shrink-0 -translate-x-1 group-hover:translate-x-0 opacity-60 group-hover:opacity-100 transition-all duration-300"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Summit */}
      <section className="section-pad bg-background" aria-label="Why choose Summit Home Remodeling">
        <div className="container-site mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection direction="left" className="relative">
              <div className="relative h-[400px] md:h-[520px] rounded-xl overflow-hidden">
                <Image
                  src="/images/team-working.jpg"
                  alt="Summit Home Remodeling craftsmen working on a custom kitchen installation in Rogers AR"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-gold rounded-xl p-5 shadow-2xl shadow-gold/20">
                <div className="font-display text-3xl font-bold text-primary-foreground">
                  {siteConfig.stats.rating}
                </div>
                <div className="flex gap-0.5 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-primary-foreground text-primary-foreground"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="font-body text-xs text-primary-foreground/70 mt-1 font-semibold">
                  Google Rating
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="space-y-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground leading-tight">
                  The contractor that earns your trust before you sign anything
                </h2>
                <p className="font-body text-base text-muted-foreground mt-4 leading-relaxed">
                  Most homeowners spend months researching before they call a contractor. We designed
                  our process — and this website — to answer every question honestly, so when
                  you&apos;re ready, you already know Summit is the right choice.
                </p>
              </div>

              <div className="space-y-6">
                {whyChooseItems.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-gold/10 border border-gold/20 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-gold" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link
                  href="/process"
                  className='px-6 py-3 bg-gold text-primary-foreground font-body font-semibold text-sm rounded hover:bg-primary-hover transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 text-center'
                >
                  See How We Work
                </Link>
                <Link
                  href="/about"
                  className="px-6 py-3 border border-border text-foreground/80 font-body font-semibold text-sm rounded hover:border-gold/50 hover:text-foreground transition-colors text-center"
                >
                  About the Company
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="section-pad bg-surface-low" aria-label="Project gallery preview">
        <div className="container-site mx-auto">
          <AnimatedSection className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Real projects. Real homes.
                <br className="hidden md:block" /> Real results.
              </h2>
            </div>
            <Link
              href="/gallery"
              className="flex items-center gap-2 font-body text-sm font-medium text-gold hover:text-gold/80 transition-colors shrink-0"
            >
              View full gallery
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: "/images/gallery-kitchen-1.jpg", alt: "Custom kitchen remodel Rogers AR" },
              { src: "/images/gallery-bathroom-1.jpg", alt: "Master bathroom remodel Bentonville AR" },
              { src: "/images/gallery-basement-1.jpg", alt: "Finished basement Springdale AR" },
              { src: "/images/gallery-addition-1.jpg", alt: "Home addition Rogers AR" },
              { src: "/images/gallery-kitchen-2.jpg", alt: "Modern kitchen remodel Lowell AR" },
              { src: "/images/gallery-bathroom-2.jpg", alt: "Guest bathroom remodel Cave Springs AR" },
            ].map((img, i) => (
              <AnimatedSection key={img.src} delay={i * 0.06}>
                <Link href="/gallery" aria-label={img.alt} className="group relative block rounded-lg overflow-hidden aspect-square">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-pad bg-background" aria-label="Customer testimonials">
        <div className="container-site mx-auto">
          <AnimatedSection className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                What our clients say
              </h2>
              <a
                href={siteConfig.social.google}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-gold transition-colors shrink-0"
              >
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" aria-hidden="true" />
                  ))}
                </div>
                <span>{siteConfig.stats.reviews} Google reviews</span>
              </a>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.08}>
                <TestimonialCard {...t} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-pad bg-surface-low" aria-label="Service areas in Northwest Arkansas">
        <div className="container-site mx-auto">
          <AnimatedSection className="mb-10">
            <h2 className="font-display text-3xl font-bold text-foreground">
              Serving Northwest Arkansas
            </h2>
            <p className="font-body text-base text-muted-foreground mt-3 max-w-lg">
              Based in Rogers, AR. Serving Benton and Washington County communities within a 25-mile radius.
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap gap-3">
            {siteConfig.serviceAreas.map((area, i) => (
              <AnimatedSection key={area.slug} delay={i * 0.06} direction="none">
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="group flex items-center gap-2 px-4 py-3 rounded-full border border-border hover:border-gold/50 transition-all duration-200 hover:bg-gold/5"
                >
                  <span className="font-body text-sm font-medium text-foreground/80 group-hover:text-gold transition-colors">
                    {area.city}, {area.state}
                  </span>
                  {area.isPrimary ? (
                    <span className="text-[10px] font-body font-semibold uppercase tracking-wider text-gold/60">Local</span>
                  ) : (
                    <span className="text-[10px] font-body text-muted-foreground">~{area.distanceMiles} mi</span>
                  )}
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-background" aria-label="Get a free estimate">
        <div className="container-site mx-auto text-center max-w-3xl">
          <AnimatedSection>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              No guesswork
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              We answer every question before you ask it
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
              Our process page covers timeline, budget, disruption to your daily life, how we handle
              surprises, and what questions you should ask every contractor before hiring them.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/process"
                className="px-7 py-3.5 bg-gold text-primary-foreground font-body font-semibold text-sm rounded hover:bg-primary-hover transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 w-full sm:w-auto text-center"
              >
                See Our Full Process
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-foreground/80 font-body font-semibold text-sm rounded hover:border-gold/50 hover:text-foreground transition-colors w-full sm:w-auto"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {siteConfig.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
