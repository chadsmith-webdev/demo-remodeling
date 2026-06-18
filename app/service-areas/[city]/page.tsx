import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/lib/siteConfig";

const cityData: Record<
  string,
  {
    title: string;
    slug: string;
    county: string;
    description: string;
    localFact: string;
    wikidata: string;
  }
> = {
  bentonville: {
    title: "Bentonville",
    slug: "bentonville",
    county: "Benton County",
    description:
      "Bentonville is the corporate home of Walmart and one of the fastest-growing tech and cultural hubs in the South. Its housing stock spans from pre-war downtown bungalows to custom new builds in communities like Cobblestone Creek and Branchwood. Summit serves the full range.",
    localFact:
      "Bentonville homeowners frequently engage Summit for master suite additions to accommodate extended family and for kitchen renovations in older Walmart-era homes that haven't been updated since the 1980s.",
    wikidata: "https://www.wikidata.org/wiki/Q953722",
  },
  lowell: {
    title: "Lowell",
    slug: "lowell",
    county: "Benton County",
    description:
      "Lowell sits between Rogers and Springdale on I-49, offering a quieter residential character with strong community roots. We've worked on dozens of homes here — from 1960s ranch-style renovations to new-construction finishing work.",
    localFact:
      "Lowell clients most commonly request basement finishing projects to maximize existing square footage, and bathroom remodels to upgrade older homes entering the resale market.",
    wikidata: "https://www.wikidata.org/wiki/Q986561",
  },
  "cave-springs": {
    title: "Cave Springs",
    slug: "cave-springs",
    county: "Benton County",
    description:
      "Cave Springs is one of Arkansas's fastest-growing small cities, with substantial new development yet a small-town feel. Homeowners here often seek custom upgrades that differentiate their homes in a competitive market of similarly-built subdivisions.",
    localFact:
      "Cave Springs homeowners frequently contact us about kitchen and bathroom upgrades in newer homes — where builder-grade finishes are the norm and custom work stands out dramatically.",
    wikidata: "https://www.wikidata.org/wiki/Q2315779",
  },
  springdale: {
    title: "Springdale",
    slug: "springdale",
    county: "Washington County",
    description:
      "Springdale is the second-largest city in Northwest Arkansas and home to Tyson Foods headquarters. Its residential market features a wide range of housing ages — from postwar bungalows to contemporary builds — all of which Summit serves.",
    localFact:
      "Springdale clients often bring us full kitchen gut renovations in mid-century homes and room additions on properties with larger lots where expansion is feasible.",
    wikidata: "https://www.wikidata.org/wiki/Q992293",
  },
  fayetteville: {
    title: "Fayetteville",
    slug: "fayetteville",
    county: "Washington County",
    description:
      "Home to the University of Arkansas, Fayetteville combines a vibrant college-town atmosphere with established residential neighborhoods and growing luxury development. Summit serves Fayetteville homeowners with the same fixed-price approach and 5-year warranty.",
    localFact:
      "Fayetteville clients frequently request historic home renovations on the Fayetteville Town Center Historic District edges, and high-end master bath transformations in Markham Hill and Wilson Park area homes.",
    wikidata: "https://www.wikidata.org/wiki/Q89649",
  },
};

type Params = { city: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { city } = await params;
  const data = cityData[city];
  if (!data) return {};
  return {
    title: `Home Remodeling ${data.title} AR | Kitchen, Bath & More | Summit`,
    description: `Summit Home Remodeling serves ${data.title}, AR with kitchen remodels, bathroom renovations, home additions, and basement finishing. Licensed contractor, 5-year warranty. Call (479) 319-4200.`,
    keywords: [
      `home remodeling ${data.title} AR`,
      `kitchen remodeling ${data.title} Arkansas`,
      `bathroom remodel ${data.title} AR`,
      `contractor ${data.title} AR`,
    ],
    alternates: {
      canonical: `https://summithomeremodeling.com/service-areas/${city}`,
    },
  };
}

export function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { city } = await params;
  const data = cityData[city];
  if (!data) notFound();

  const localSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: `Summit Home Remodeling — ${data.title}, AR`,
    url: `https://summithomeremodeling.com/service-areas/${city}`,
    image: "https://summithomeremodeling.com/images/og-image.jpg",
    priceRange: "$$",
    telephone: siteConfig.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: "AR",
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    areaServed: { "@type": "City", name: data.title, sameAs: data.wikidata },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.stats.rating,
      reviewCount: siteConfig.stats.reviews,
      bestRating: 5,
    },
  };

  const faqs = [
    {
      name: `Does Summit Home Remodeling serve ${data.title}, AR?`,
      text: `Yes. Summit serves all of ${data.county}, including ${data.title}. Our headquarters in Rogers, AR is approximately ${siteConfig.serviceAreas.find((a) => a.city === data.title)?.distance ?? "nearby"} from ${data.title}.`,
    },
    {
      name: `What remodeling services are available in ${data.title}, AR?`,
      text: `Summit offers kitchen remodeling, bathroom remodeling, home additions, and basement finishing for homeowners in ${data.title}, AR. All projects use fixed-price contracts and come with a 5-year workmanship warranty.`,
    },
  ];

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
            { "@type": "ListItem", position: 3, name: `${data.title}, AR`, item: `https://summithomeremodeling.com/service-areas/${city}` },
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
            <li className='text-foreground'>{data.title}, AR</li>
          </ol>
        </div>
      </nav>

      <header className='section-pad bg-card border-b border-border'>
        <div className='container-site mx-auto px-4 md:px-8 max-w-3xl'>
          <AnimatedSection>
            <p className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-3'>
              {data.county} ·{" "}
              {siteConfig.serviceAreas.find((a) => a.city === data.title)
                ?.distance ?? ""}{" "}
              from Rogers
            </p>
            <h1 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-4'>
              Home Remodeling in {data.title}, AR
            </h1>
            <p className='font-body text-base text-muted-foreground leading-relaxed'>
              {data.description}
            </p>
          </AnimatedSection>
        </div>
      </header>

      <section className='section-pad'>
        <div className='container-site mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <div className='lg:col-span-2 space-y-12'>
            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-4'>
                Serving {data.title} since 2011
              </h2>
              <div className='space-y-4 font-body text-sm text-muted-foreground leading-relaxed'>
                <p>{data.localFact}</p>
                <p>
                  Every {data.title} project runs on the same Summit process:
                  free in-home consultation, detailed 3D design, fixed-price
                  contract, then construction with a dedicated project manager
                  on site through completion. At the final walkthrough, your
                  5-year workmanship warranty goes into effect — in writing.
                </p>
                <p>
                  We handle all permits for {data.title} projects and know the{" "}
                  {data.county} inspection process. Our permit applications
                  never delay your project because we build the approval
                  timeline into your schedule from day one.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-5'>
                Remodeling services in {data.title}, AR
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
                {data.title} remodeling FAQs
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
                  Free estimate in {data.title}
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
                  "Licensed AR Contractor",
                  "5-Year Workmanship Warranty",
                  "Fixed-Price Contracts",
                  "Fully Insured — $2M Liability",
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
                  All Service Areas
                </h4>
                <div className='space-y-2'>
                  {siteConfig.serviceAreas.map((a) => (
                    <Link
                      key={a.city}
                      href={`/service-areas/${a.city.toLowerCase().replace(/\s+/g, "-")}`}
                      className='flex items-center justify-between py-1.5 group'
                    >
                      <span
                        className={`font-body text-sm transition-colors ${a.city === data.title ? "text-gold" : "text-muted-foreground group-hover:text-gold"}`}
                      >
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
