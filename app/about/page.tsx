import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Shield, Award, Users, Clock4 } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "About Summit Home Remodeling | Rogers, AR — Est. 2011",
  description:
    "Summit Home Remodeling has served Northwest Arkansas since 2011. Learn about our team, values, licensing, and why 430+ Rogers-area families trust us with their homes.",
  alternates: { canonical: "https://summithomeremodeling.com/about" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Summit Home Remodeling",
  url: "https://summithomeremodeling.com",
  telephone: siteConfig.phoneRaw,
  email: siteConfig.email,
  foundingDate: "2011",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.zip,
    addressCountry: "US",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.stats.rating,
    reviewCount: siteConfig.stats.reviews,
    bestRating: 5,
    worstRating: 1,
  },
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "license",
      name: "Arkansas Contractor License",
      identifier: siteConfig.license,
    },
  ],
};

const values = [
  {
    icon: Shield,
    title: "Fixed-Price Integrity",
    desc: "We write the number before we break ground — and we stand behind it. No bait-and-switch, no 'unforeseen condition' excuses. Our contract is our word.",
  },
  {
    icon: Users,
    title: "W-2 Craftsmen",
    desc: "Our carpenters, tile setters, and project managers are Summit employees. Not day laborers, not underbid subs. People who've worked here for years and will still be here when you need warranty service.",
  },
  {
    icon: Award,
    title: "Quality as Standard",
    desc: "We don't offer 'good, better, best' tiers of craftsmanship. Every Summit project gets the same installation standards — premium adhesives, quality hardware, proper blocking, the right substrate. Always.",
  },
  {
    icon: Clock4,
    title: "Respect for Your Home",
    desc: "Daily cleanup. Footwear protocols. Locked job sites each evening. No unauthorized workers. Your home is not a construction site — it's someone's home. We act accordingly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
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
            <li className='text-foreground'>About</li>
          </ol>
        </div>
      </nav>

      {/* Origin story */}
      <section className='section-pad'>
        <div className='container-site mx-auto px-4 md:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <AnimatedSection direction='left'>
              <p className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-3'>
                Est. 2011, Rogers, AR
              </p>
              <h1 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-6'>
                Built on the premise that remodeling shouldn&apos;t be a
                nightmare
              </h1>
              <div className='space-y-4 font-body text-muted-foreground leading-relaxed text-sm'>
                <p>
                  Summit Home Remodeling was founded in 2011 by a former general
                  contractor who watched too many homeowners get burned — by
                  vague contracts, missing subcontractors, and invoices that
                  bore no resemblance to the original quote. He built Summit
                  around a single principle: a homeowner should know exactly
                  what they&apos;re getting, exactly what it costs, and exactly
                  when it will be done.
                </p>
                <p>
                  Fourteen years later, Summit has completed over 430 projects
                  across Northwest Arkansas. Our team of 18 full-time craftsmen,
                  project managers, and designers has stayed largely intact
                  since 2015 — because when you treat people well, they stay.
                  That same stability means the person who starts your project
                  finishes it.
                </p>
                <p>
                  We work exclusively in Northwest Arkansas — Rogers,
                  Bentonville, Lowell, Cave Springs, Springdale, and
                  Fayetteville. We don&apos;t chase volume by expanding our
                  service area. We know this region, its soils, its building
                  stock, its permit offices, and its inspectors. Local depth
                  beats geographic breadth.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction='right'>
              <div className='relative rounded-xl overflow-hidden h-80 md:h-[480px]'>
                <Image
                  src='/images/team-working.jpg'
                  alt='Summit Home Remodeling craftsmen working on a kitchen project in Rogers AR'
                  fill
                  className='object-cover'
                  sizes='(max-width: 1024px) 100vw, 50vw'
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className='bg-card border-y border-border'>
        <div className='container-site mx-auto px-4 md:px-8 py-10'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-border'>
            {[
              {
                label: "Years in Business",
                value: `${siteConfig.stats.yearsInBusiness}+`,
              },
              {
                label: "Projects Completed",
                value: `${siteConfig.stats.projectsCompleted}+`,
              },
              { label: "Google Rating", value: `${siteConfig.stats.rating} ★` },
              {
                label: "Warranty",
                value: `${siteConfig.stats.warrantyYears} Years`,
              },
            ].map((stat) => (
              <div key={stat.label} className='text-center md:px-8'>
                <div className='font-display text-3xl font-bold text-gold mb-1'>
                  {stat.value}
                </div>
                <div className='font-body text-xs text-muted-foreground uppercase tracking-widest'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className='section-pad'>
        <div className='container-site mx-auto px-4 md:px-8'>
          <AnimatedSection>
            <h2 className='font-display text-3xl font-bold text-foreground mb-10 text-center'>
              What we actually believe
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {values.map((v) => (
                <div
                  key={v.title}
                  className='bg-card border border-border rounded-xl p-6 hover:border-gold/30 transition-colors'
                >
                  <v.icon
                    className='w-6 h-6 text-gold mb-4'
                    aria-hidden='true'
                  />
                  <h3 className='font-display text-lg font-bold text-foreground mb-2'>
                    {v.title}
                  </h3>
                  <p className='font-body text-sm text-muted-foreground leading-relaxed'>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Credentials */}
      <section className='bg-card border-t border-border section-pad'>
        <div className='container-site mx-auto px-4 md:px-8 max-w-3xl'>
          <AnimatedSection>
            <h2 className='font-display text-3xl font-bold text-foreground mb-6 text-center'>
              Licensing &amp; Insurance
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              {[
                {
                  label: "Arkansas Contractor License",
                  value: siteConfig.license,
                },
                {
                  label: "General Liability Insurance",
                  value: "$2,000,000 per occurrence",
                },
                {
                  label: "Workers' Compensation",
                  value: "All W-2 employees covered",
                },
                {
                  label: "Established",
                  value: `${siteConfig.established} — Rogers, AR`,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className='border border-border rounded-lg p-4'
                >
                  <div className='font-body text-[10px] uppercase tracking-widest text-gold mb-1'>
                    {item.label}
                  </div>
                  <div className='font-body text-sm font-semibold text-foreground'>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
            <p className='font-body text-xs text-muted-foreground mt-6 text-center'>
              License and insurance certificates available upon request. Always
              ask any contractor you interview.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className='section-pad border-t border-border'>
        <div className='container-site mx-auto px-4 md:px-8 text-center'>
          <AnimatedSection>
            <div className='gold-line mx-auto mb-6 w-12' />
            <h2 className='font-display text-3xl font-bold text-foreground mb-4'>
              Let&apos;s talk about your home
            </h2>
            <p className='font-body text-muted-foreground mb-8 max-w-lg mx-auto text-sm'>
              Every Summit project starts with a free in-home consultation. No
              obligation, no sales pressure — just a professional conversation
              about what&apos;s possible.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-[oklch(0.13_0.008_68)] font-body font-semibold text-sm rounded hover:bg-[oklch(0.82_0.12_75)] transition-colors'
              >
                Book a Free Consultation{" "}
                <ArrowRight className='w-4 h-4' aria-hidden='true' />
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className='inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-border text-foreground/80 font-body font-semibold text-sm rounded hover:border-gold/50 transition-colors'
              >
                <Phone className='w-4 h-4' aria-hidden='true' />{" "}
                {siteConfig.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
