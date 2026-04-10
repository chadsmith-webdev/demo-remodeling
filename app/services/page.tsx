import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title:
    "Remodeling Services Rogers AR | Kitchen, Bath, Additions | Summit Home Remodeling",
  description:
    "Full-service home remodeling in Rogers, AR — kitchen remodels, bathroom renovations, home additions, and basement finishing. Fixed-price contracts, 5-year warranty. Free estimates.",
  alternates: { canonical: "https://summithomeremodeling.com/services" },
};

const serviceDetails = [
  {
    slug: "kitchen-remodeling",
    name: "Kitchen Remodeling",
    img: "/images/kitchen-after.jpg",
    alt: "Custom kitchen remodel in Rogers AR",
    price: "$25,000 – $85,000",
    timeline: "6–10 weeks",
    desc: "Custom cabinets, quartz countertops, new layouts, and full gut renovations. The kitchen your family deserves, built on a fixed-price contract.",
    highlights: [
      "Custom & semi-custom cabinets",
      "Layout reconfiguration",
      "Quartz / granite / marble tops",
      "Appliance & plumbing connections",
    ],
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    img: "/images/bathroom-after.jpg",
    alt: "Luxury bathroom remodel in Rogers AR",
    price: "$12,000 – $55,000",
    timeline: "3–5 weeks",
    desc: "Walk-in tile showers, freestanding tubs, double vanities, heated floors. Turn your bathroom into a private retreat.",
    highlights: [
      "Walk-in shower systems",
      "Freestanding & built-in tubs",
      "Custom vanity installation",
      "Schluter waterproofing on every shower",
    ],
  },
  {
    slug: "home-additions",
    name: "Home Additions",
    img: "/images/addition-after.jpg",
    alt: "Home addition project in Rogers AR",
    price: "$60,000 – $250,000+",
    timeline: "3–5 months",
    desc: "More space without moving. Master suites, family rooms, sunrooms, second stories, and garage conversions — structural engineer on every project.",
    highlights: [
      "Licensed structural engineering",
      "Exterior matched to existing home",
      "Master suite, sunroom, second-story",
      "Full mechanical tie-in",
    ],
  },
  {
    slug: "basement-finishing",
    name: "Basement Finishing",
    img: "/images/basement-after.jpg",
    alt: "Finished basement with home theater in Rogers AR",
    price: "$30,000 – $90,000",
    timeline: "8–14 weeks",
    desc: "Moisture-tested first, then finished. Home theaters, playrooms, home offices, in-law suites — your most underutilized square footage, fully realized.",
    highlights: [
      "Moisture-first assessment",
      "Full electrical, HVAC & plumbing",
      "Egress window installation",
      "Home theater & wet bar pre-wire",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://summithomeremodeling.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: "https://summithomeremodeling.com/services",
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className='section-pad bg-card border-b border-border'>
        <div className='container-site mx-auto px-4 md:px-8 text-center'>
          <AnimatedSection>
            <p className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-3'>
              What We Build
            </p>
            <h1 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-4'>
              Home remodeling services in Rogers, AR
            </h1>
            <p className='font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8'>
              Every Summit project runs on a fixed-price contract — the number
              you see is the number you pay. No change order surprises. Backed
              by a 5-year workmanship warranty.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-[oklch(0.13_0.008_68)] font-body font-semibold text-sm rounded hover:bg-[oklch(0.82_0.12_75)] transition-colors'
              >
                Get a Free Estimate{" "}
                <ArrowRight className='w-4 h-4' aria-hidden='true' />
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className='inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground/80 font-body font-semibold text-sm rounded hover:border-gold/50 transition-colors'
              >
                <Phone className='w-4 h-4' aria-hidden='true' />{" "}
                {siteConfig.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Cards */}
      <section className='section-pad'>
        <div className='container-site mx-auto px-4 md:px-8 space-y-16'>
          {serviceDetails.map((service, i) => (
            <AnimatedSection
              key={service.slug}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? "lg:grid-flow-dense" : ""}`}
              >
                {/* Image */}
                <div
                  className={`relative rounded-xl overflow-hidden h-64 md:h-80 ${i % 2 !== 0 ? "lg:col-start-2" : ""}`}
                >
                  <Image
                    src={service.img}
                    alt={service.alt}
                    fill
                    className='object-cover hover:scale-105 transition-transform duration-700'
                    sizes='(max-width: 1024px) 100vw, 50vw'
                  />
                </div>

                {/* Content */}
                <div
                  className={i % 2 !== 0 ? "lg:col-start-1 lg:row-start-1" : ""}
                >
                  <Link href={`/services/${service.slug}`} className='group'>
                    <h2 className='font-display text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-gold transition-colors'>
                      {service.name}
                    </h2>
                  </Link>
                  <div className='flex gap-6 mb-4'>
                    <div>
                      <div className='font-body text-[10px] uppercase tracking-widest text-muted-foreground'>
                        Price Range
                      </div>
                      <div className='font-body text-sm font-semibold text-gold'>
                        {service.price}
                      </div>
                    </div>
                    <div>
                      <div className='font-body text-[10px] uppercase tracking-widest text-muted-foreground'>
                        Timeline
                      </div>
                      <div className='font-body text-sm font-semibold text-foreground'>
                        {service.timeline}
                      </div>
                    </div>
                  </div>
                  <p className='font-body text-sm text-muted-foreground mb-5 leading-relaxed'>
                    {service.desc}
                  </p>
                  <ul className='space-y-2 mb-6'>
                    {service.highlights.map((h) => (
                      <li key={h} className='flex items-center gap-2.5'>
                        <CheckCircle
                          className='w-4 h-4 text-gold shrink-0'
                          aria-hidden='true'
                        />
                        <span className='font-body text-sm text-muted-foreground'>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className='inline-flex items-center gap-2 font-body text-sm font-semibold text-gold hover:text-[oklch(0.82_0.12_75)] transition-colors'
                  >
                    Learn more about {service.name}{" "}
                    <ArrowRight className='w-4 h-4' aria-hidden='true' />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='bg-card border-t border-border section-pad'>
        <div className='container-site mx-auto px-4 md:px-8 text-center'>
          <AnimatedSection>
            <div className='gold-line mx-auto mb-6 w-12' />
            <h2 className='font-display text-3xl font-bold text-foreground mb-4'>
              Not sure which service fits your project?
            </h2>
            <p className='font-body text-muted-foreground mb-8 max-w-xl mx-auto text-sm'>
              Tell us about your home and goals during a free in-home
              consultation. We&apos;ll recommend the right approach and scope —
              no pressure, no sales pitch.
            </p>
            <Link
              href='/contact'
              className='inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-[oklch(0.13_0.008_68)] font-body font-semibold text-sm rounded hover:bg-[oklch(0.82_0.12_75)] transition-colors'
            >
              Book a Free Consultation{" "}
              <ArrowRight className='w-4 h-4' aria-hidden='true' />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
