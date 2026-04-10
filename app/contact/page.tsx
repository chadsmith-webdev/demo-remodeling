import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "./ContactForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact Summit Home Remodeling | Free Estimates | Rogers, AR",
  description:
    "Schedule a free in-home consultation with Summit Home Remodeling in Rogers, AR. Call (479) 319-4200 or complete the form. We respond within one business day.",
  alternates: { canonical: "https://summithomeremodeling.com/contact" },
};

export default function ContactPage() {
  return (
    <>
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
            <li className='text-foreground'>Contact</li>
          </ol>
        </div>
      </nav>

      <header className='section-pad bg-card border-b border-border text-center'>
        <div className='container-site mx-auto px-4 md:px-8'>
          <AnimatedSection>
            <p className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-3'>
              Get Started
            </p>
            <h1 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-4'>
              Request your free consultation
            </h1>
            <p className='font-body text-base text-muted-foreground max-w-xl mx-auto'>
              Fill out the form and we&apos;ll reach out within one business day
              to schedule your free in-home estimate. Prefer to call? We&apos;re
              available Monday–Saturday, 7am–6pm.
            </p>
          </AnimatedSection>
        </div>
      </header>

      <section className='section-pad'>
        <div className='container-site mx-auto px-4 md:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {/* Form */}
            <div className='lg:col-span-2'>
              <AnimatedSection>
                <ContactForm />
              </AnimatedSection>
            </div>

            {/* Contact info */}
            <aside className='space-y-5'>
              <AnimatedSection direction='right'>
                <div className='bg-card border border-border rounded-xl p-6 space-y-5'>
                  <div className='flex items-start gap-3'>
                    <Phone
                      className='w-5 h-5 text-gold shrink-0 mt-0.5'
                      aria-hidden='true'
                    />
                    <div>
                      <div className='font-body text-xs uppercase tracking-widest text-muted-foreground mb-1'>
                        Phone
                      </div>
                      <a
                        href={`tel:${siteConfig.phoneRaw}`}
                        className='font-body font-semibold text-foreground hover:text-gold transition-colors'
                      >
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <Mail
                      className='w-5 h-5 text-gold shrink-0 mt-0.5'
                      aria-hidden='true'
                    />
                    <div>
                      <div className='font-body text-xs uppercase tracking-widest text-muted-foreground mb-1'>
                        Email
                      </div>
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className='font-body font-semibold text-foreground hover:text-gold transition-colors text-sm'
                      >
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <MapPin
                      className='w-5 h-5 text-gold shrink-0 mt-0.5'
                      aria-hidden='true'
                    />
                    <div>
                      <div className='font-body text-xs uppercase tracking-widest text-muted-foreground mb-1'>
                        Office
                      </div>
                      <address className='font-body text-sm text-foreground not-italic'>
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.city}, {siteConfig.address.state}{" "}
                        {siteConfig.address.zip}
                      </address>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <Clock
                      className='w-5 h-5 text-gold shrink-0 mt-0.5'
                      aria-hidden='true'
                    />
                    <div>
                      <div className='font-body text-xs uppercase tracking-widest text-muted-foreground mb-1'>
                        Hours
                      </div>
                      <div className='font-body text-sm text-foreground'>
                        {siteConfig.hours.weekday}
                      </div>
                      <div className='font-body text-sm text-foreground'>
                        {siteConfig.hours.saturday}
                      </div>
                      <div className='font-body text-sm text-muted-foreground'>
                        {siteConfig.hours.sunday}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service areas */}
                <div className='bg-card border border-border rounded-xl p-6 mt-5'>
                  <h3 className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-3'>
                    Service Area
                  </h3>
                  <div className='flex flex-wrap gap-2'>
                    {siteConfig.serviceAreas.map((area) => (
                      <Link
                        key={area.city}
                        href={`/service-areas/${area.city.toLowerCase().replace(/\s+/g, "-")}`}
                        className='font-body text-xs text-muted-foreground border border-border rounded-full px-3 py-1 hover:border-gold/40 hover:text-foreground transition-colors'
                      >
                        {area.city}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className='bg-card border border-border rounded-xl p-6 mt-5'>
                  <h3 className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-3'>
                    License
                  </h3>
                  <p className='font-body text-sm text-muted-foreground'>
                    {siteConfig.license}
                  </p>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
