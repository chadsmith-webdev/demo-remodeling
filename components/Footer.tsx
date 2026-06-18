import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Star } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-surface-low border-t border-border'>
      {/* CTA Strip */}
      <div className='bg-gold'>
        <div className='container-site mx-auto px-4 md:px-8 py-8 md:py-10'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left'>
            <div>
              <p className='font-display text-2xl md:text-3xl font-bold text-primary-foreground'>
                Ready to transform your home?
              </p>
              <p className='font-body text-sm md:text-base text-on-gold-muted mt-1'>
                Free in-home consultations. No pressure, no obligation.
              </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-3 shrink-0'>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className='px-6 py-3 bg-background text-gold font-body font-semibold text-sm rounded hover:bg-surface-hover transition-colors'
              >
                Call {siteConfig.phone}
              </a>
              <Link
                href='/contact'
                className='px-6 py-3 border-2 border-background text-background font-body font-semibold text-sm rounded hover:bg-background hover:text-gold transition-colors'
              >
                Schedule Online
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className='container-site mx-auto px-4 md:px-8 py-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8'>
          {/* Brand column */}
          <div className='sm:col-span-2 lg:col-span-1'>
            <Link href='/' className='inline-flex flex-col leading-none mb-4'>
              <span className='font-display text-2xl font-bold text-foreground'>
                Summit
              </span>
              <span className='text-[10px] font-body font-medium tracking-[0.18em] text-gold uppercase'>
                Home Remodeling
              </span>
            </Link>
            <p className='font-body text-sm text-muted-foreground leading-relaxed mb-4'>
              Northwest Arkansas' trusted home remodeling contractor. Serving
              Rogers, Bentonville, Springdale, and surrounding communities since{" "}
              {siteConfig.established}.
            </p>
            {/* Stars */}
            <div className='flex items-center gap-1.5 mb-1'>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className='w-4 h-4 fill-gold text-gold'
                  aria-hidden='true'
                />
              ))}
              <span className='font-body text-sm font-semibold text-foreground ml-1'>
                {siteConfig.stats.rating}
              </span>
            </div>
            <p className='font-body text-xs text-muted-foreground'>
              {siteConfig.stats.reviews} verified Google reviews
            </p>
            <p className='font-body text-xs text-muted-foreground mt-2'>
              {siteConfig.license}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-4'>
              Services
            </h3>
            <ul className='space-y-2.5'>
              {siteConfig.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className='font-body text-sm text-muted-foreground hover:text-gold transition-colors'
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href='/gallery'
                  className='font-body text-sm text-muted-foreground hover:text-gold transition-colors'
                >
                  Project Gallery
                </Link>
              </li>
              <li>
                <Link
                  href='/process'
                  className='font-body text-sm text-muted-foreground hover:text-gold transition-colors'
                >
                  Our Process
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-4'>
              Service Areas
            </h3>
            <ul className='space-y-2.5'>
              {siteConfig.serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className='font-body text-sm text-muted-foreground hover:text-gold transition-colors'
                  >
                    {area.city}, {area.state}
                    {area.isPrimary && (
                      <span className='ml-2 text-[10px] font-semibold uppercase tracking-wider text-gold/60'>
                        HQ
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-4'>
              Contact
            </h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className='flex items-start gap-2.5 font-body text-sm text-muted-foreground hover:text-gold transition-colors'
                >
                  <Phone
                    className='w-4 h-4 shrink-0 mt-0.5'
                    aria-hidden='true'
                  />
                  <span>{siteConfig.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className='flex items-start gap-2.5 font-body text-sm text-muted-foreground hover:text-gold transition-colors'
                >
                  <Mail
                    className='w-4 h-4 shrink-0 mt-0.5'
                    aria-hidden='true'
                  />
                  <span>{siteConfig.email}</span>
                </a>
              </li>
              <li className='flex items-start gap-2.5 font-body text-sm text-muted-foreground'>
                <MapPin
                  className='w-4 h-4 shrink-0 mt-0.5 text-gold/60'
                  aria-hidden='true'
                />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className='flex items-start gap-2.5 font-body text-sm text-muted-foreground'>
                <Clock
                  className='w-4 h-4 shrink-0 mt-0.5 text-gold/60'
                  aria-hidden='true'
                />
                <div>
                  <div>{siteConfig.hours.weekday}</div>
                  <div>{siteConfig.hours.saturday}</div>
                  <div>{siteConfig.hours.sunday}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-border'>
        <div className='container-site mx-auto px-4 md:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-body text-muted-foreground'>
          <p>© {currentYear} Summit Home Remodeling. All rights reserved.</p>
          <p>
            Built by{" "}
            <a
              href='https://localsearchally.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80 transition-opacity'
            >
              <span className='text-white'>Local Search</span>{" "}
              <span style={{ color: "#7bafd4" }}>Ally</span>
            </a>
          </p>
          <div className='flex items-center gap-4'>
            <Link href='/privacy' className='hover:text-gold transition-colors'>
              Privacy Policy
            </Link>
            <Link
              href='/sitemap.xml'
              className='hover:text-gold transition-colors'
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
