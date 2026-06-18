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
    "Kitchen Remodeling Rogers AR | Custom Kitchens | Summit Home Remodeling",
  description:
    "Expert kitchen remodeling in Rogers, AR and Northwest Arkansas. Custom cabinets, quartz countertops, full gut renovations. Fixed-price contracts, 5-year warranty. Free estimates. Call (479) 319-4200.",
  keywords: [
    "kitchen remodeling Rogers AR",
    "kitchen renovation Northwest Arkansas",
    "custom kitchen cabinets Rogers",
    "kitchen remodel Bentonville AR",
    "kitchen contractor Rogers Arkansas",
  ],
  alternates: {
    canonical: "https://summithomeremodeling.com/services/kitchen-remodeling",
  },
  openGraph: {
    title: "Kitchen Remodeling Rogers AR | Summit Home Remodeling",
    description:
      "Custom kitchens built to last in Northwest Arkansas. Fixed prices, 5-year warranty.",
    images: [{ url: "/images/kitchen-after.jpg" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Kitchen Remodeling",
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
  serviceType: "Kitchen Remodeling",
  areaServed: siteConfig.serviceAreas.map((a) => `${a.city}, ${a.state}`),
  description:
    "Custom kitchen remodeling including cabinet installation, countertop replacement, layout reconfiguration, and full gut renovations for homes in Rogers, AR and Northwest Arkansas.",
  offers: {
    "@type": "Offer",
    priceRange: "$25,000 – $85,000",
  },
};

const included = [
  "Detailed 3D kitchen design & layout planning",
  "Custom or semi-custom cabinet installation",
  "Countertop fabrication & installation (quartz, granite, marble)",
  "Backsplash tile installation",
  "Appliance connections & plumbing rough-in",
  "Lighting plan & electrical updates",
  "Flooring installation",
  "Paint & finish work",
  "Permit pulling & inspection scheduling",
  "Final walkthrough & punch list",
];

const faqs = [
  {
    q: "How long does a kitchen remodel take?",
    a: "A typical full kitchen remodel takes 6–10 weeks from demolition to final punch list. Cabinet lead times (4–8 weeks) are usually the long pole. You receive a detailed schedule before signing anything.",
  },
  {
    q: "What does a kitchen remodel cost in Northwest Arkansas?",
    a: "Our kitchen remodels range from $25,000 for a targeted refresh to $85,000+ for a full custom build with layout changes. Every contract is fixed-price — no surprise change orders.",
  },
  {
    q: "Can I stay in my home during the remodel?",
    a: "Yes. Most clients remain in the home. We set up a temporary kitchen station, seal off the work area each night, and clean up daily. Your daily life continues.",
  },
  {
    q: "Do you handle permits?",
    a: "Completely. Summit handles all Rogers and Benton County permits and coordinates inspections. Permit timelines are built into your project schedule from day one.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes — we stand behind our work with a 5-year workmanship warranty on every kitchen remodel. Cabinet and appliance manufacturer warranties are additional.",
  },
];

const testimonials = [
  {
    name: "Jennifer & Mark Holloway",
    city: "Rogers, AR",
    rating: 5,
    text: "Summit completely transformed our 1990s kitchen into something out of a magazine. Upfront about pricing, finished on time, and the custom cabinetry quality blew us away.",
    project: "Full Kitchen Remodel",
    date: "2025-08",
  },
  {
    name: "Robert Kim",
    city: "Bentonville, AR",
    rating: 5,
    text: "The fixed-price contract meant no surprises. They reconfigured our layout, added an island, and I now have the kitchen I've wanted for 15 years. Highly recommend Summit.",
    project: "Kitchen Layout Reconfiguration + Island",
    date: "2025-03",
  },
];

export default function KitchenRemodelingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://summithomeremodeling.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://summithomeremodeling.com/services" },
      { "@type": "ListItem", position: 3, name: "Kitchen Remodeling", item: "https://summithomeremodeling.com/services/kitchen-remodeling" },
    ],
  };
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
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
                Kitchen Remodeling
              </span>
              <meta itemProp='position' content='3' />
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className='relative h-[50vh] md:h-[60vh] flex items-end overflow-hidden'>
        <Image
          src='/images/kitchen-after.jpg'
          alt='Custom kitchen remodel by Summit Home Remodeling in Rogers, AR with navy cabinets and quartz island'
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
            Kitchen Remodeling
          </h1>
          <p className='font-body text-base md:text-lg text-foreground/75 mt-3 max-w-xl'>
            Rogers, AR and Northwest Arkansas. Custom kitchens that become the
            heart of your home.
          </p>
        </div>
      </section>

      {/* Quick info bar */}
      <div className='bg-card border-b border-border'>
        <div className='container-site mx-auto px-4 md:px-8'>
          <div className='grid grid-cols-3 divide-x divide-border'>
            {[
              { icon: DollarSign, label: "Starting from", value: "$25,000" },
              { icon: Clock, label: "Typical timeline", value: "6–10 Weeks" },
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

      {/* Main content */}
      <div className='container-site mx-auto px-4 md:px-8'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 py-16 md:py-20'>
          {/* Content — 2 cols */}
          <div className='lg:col-span-2 space-y-14'>
            {/* Intro */}
            <AnimatedSection>
              <h2 className='font-display text-2xl md:text-3xl font-bold text-foreground mb-4'>
                The kitchen your family actually deserves
              </h2>
              <div className='prose prose-sm max-w-none space-y-4 font-body text-muted-foreground leading-relaxed'>
                <p>
                  In Northwest Arkansas, homeowners spend more time in their
                  kitchens than any other room. When the layout is wrong, the
                  storage is inadequate, and the finishes are dated, it affects
                  everything — from how you cook to how you feel about coming
                  home. Summit Home Remodeling builds kitchens that solve real
                  problems, not just look good in photos.
                </p>
                <p>
                  Every Summit kitchen starts with a 3D design session where we
                  work through your layout, workflow, and storage needs before a
                  single cabinet is ordered. We build fixed-price contracts that
                  include every item — labor, materials, permits, and cleanup —
                  so you never face a surprise invoice.
                </p>
                <p>
                  Our craftsmen are W-2 employees who specialize in kitchen
                  installation. We don&apos;t subcontract the critical work. The
                  apprentices we hired eight years ago are now the lead
                  carpenters building your kitchen today.
                </p>
              </div>
            </AnimatedSection>

            {/* Before/After Slider */}
            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-4'>
                Before &amp; After
              </h2>
              <BeforeAfterSlider
                beforeSrc='/images/kitchen-before.jpg'
                afterSrc='/images/kitchen-after.jpg'
                beforeAlt='Outdated kitchen before Summit Home Remodeling renovation in Rogers AR'
                afterAlt='Stunning custom kitchen after Summit Home Remodeling renovation in Rogers AR'
                height={420}
              />
              <p className='font-body text-xs text-muted-foreground mt-3 text-center'>
                Project: Full kitchen gut renovation · Rogers, AR · 9 weeks
              </p>
            </AnimatedSection>

            {/* What's Included */}
            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-6'>
                What&apos;s included in every kitchen remodel
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

            {/* FAQ */}
            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-6'>
                Questions clients ask us before starting their kitchen remodel
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

            {/* Testimonials */}
            <AnimatedSection>
              <h2 className='font-display text-2xl font-bold text-foreground mb-6'>
                From our kitchen clients
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                {testimonials.map((t) => (
                  <TestimonialCard key={t.name} {...t} />
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <aside className='lg:col-span-1 space-y-6'>
            {/* Sticky CTA card */}
            <div className='sticky top-24 space-y-4'>
              <div className='bg-card border border-border rounded-xl p-6'>
                <h3 className='font-display text-xl font-bold text-foreground mb-2'>
                  Get a free kitchen estimate
                </h3>
                <p className='font-body text-sm text-muted-foreground mb-5'>
                  We&apos;ll visit your home, discuss your vision, and send a
                  detailed fixed-price proposal within 48 hours.
                </p>
                <Link
                  href='/contact'
                  className='flex items-center justify-center gap-2 w-full py-3 bg-gold text-[oklch(0.13_0.008_68)] font-body font-semibold text-sm rounded hover:bg-[oklch(0.82_0.12_75)] transition-colors mb-3'
                >
                  Schedule Free Consultation
                  <ArrowRight className='w-4 h-4' aria-hidden='true' />
                </Link>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className='flex items-center justify-center gap-2 w-full py-3 border border-border text-foreground/80 font-body font-semibold text-sm rounded hover:border-gold/50 hover:text-foreground transition-colors'
                >
                  <Phone className='w-4 h-4' aria-hidden='true' />
                  {siteConfig.phone}
                </a>
                <p className='font-body text-xs text-muted-foreground text-center mt-3'>
                  {siteConfig.hours.weekday}
                </p>
              </div>

              {/* Trust signals */}
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

              {/* Other services */}
              <div className='bg-card border border-border rounded-xl p-5'>
                <h4 className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-3'>
                  Other Services
                </h4>
                <div className='space-y-2'>
                  {siteConfig.services
                    .filter((s) => s.slug !== "kitchen-remodeling")
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
