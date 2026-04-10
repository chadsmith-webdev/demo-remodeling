import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title:
    "Service Areas | Northwest Arkansas Home Remodeling | Summit Home Remodeling",
  description:
    "Summit Home Remodeling serves Rogers, Bentonville, Lowell, Cave Springs, Springdale, and Fayetteville, AR. Kitchen, bath, additions, and basement remodeling throughout Northwest Arkansas.",
  alternates: { canonical: "https://summithomeremodeling.com/service-areas" },
};

export default function ServiceAreasPage() {
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
            <li className='text-foreground'>Service Areas</li>
          </ol>
        </div>
      </nav>

      <header className='section-pad bg-card border-b border-border text-center'>
        <div className='container-site mx-auto px-4 md:px-8'>
          <AnimatedSection>
            <p className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-3'>
              Where We Work
            </p>
            <h1 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-4'>
              Northwest Arkansas Service Area
            </h1>
            <p className='font-body text-base text-muted-foreground max-w-xl mx-auto'>
              Summit Home Remodeling serves a focused area within 25 miles of
              our Rogers, AR headquarters. We don&apos;t chase jobs across the
              state — we know Northwest Arkansas and we&apos;re deeply invested
              in it.
            </p>
          </AnimatedSection>
        </div>
      </header>

      <section className='section-pad'>
        <div className='container-site mx-auto px-4 md:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {siteConfig.serviceAreas.map((area) => (
              <AnimatedSection key={area.city}>
                <Link
                  href={`/service-areas/${area.city.toLowerCase().replace(/\s+/g, "-")}`}
                  className='group block bg-card border border-border rounded-xl p-6 hover:border-gold/40 transition-colors'
                >
                  <div className='flex items-start gap-3 mb-3'>
                    <MapPin
                      className='w-5 h-5 text-gold shrink-0 mt-0.5'
                      aria-hidden='true'
                    />
                    <div>
                      <div className='font-display text-lg font-bold text-foreground group-hover:text-gold transition-colors'>
                        {area.city}, AR
                        {area.isPrimary && (
                          <span className='ml-2 font-body text-[10px] text-gold border border-gold/30 rounded-full px-2 py-0.5 align-middle'>
                            Home Office
                          </span>
                        )}
                      </div>
                      <div className='font-body text-xs text-muted-foreground'>
                        {area.distance} from Rogers
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-1 font-body text-sm text-gold group-hover:text-[oklch(0.82_0.12_75)] transition-colors'>
                    View service area{" "}
                    <ArrowRight className='w-3.5 h-3.5' aria-hidden='true' />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className='mt-16 bg-card border border-border rounded-xl p-8 text-center'>
              <h2 className='font-display text-2xl font-bold text-foreground mb-3'>
                Outside our service area?
              </h2>
              <p className='font-body text-sm text-muted-foreground mb-6 max-w-md mx-auto'>
                Our boundary is roughly 25 miles from our Rogers office. If
                you&apos;re close to the edge, reach out — we&apos;ll let you
                know if we can help.
              </p>
              <Link
                href='/contact'
                className='inline-flex items-center gap-2 px-6 py-3 bg-gold text-[oklch(0.13_0.008_68)] font-body font-semibold text-sm rounded hover:bg-[oklch(0.82_0.12_75)] transition-colors'
              >
                Contact Us <ArrowRight className='w-4 h-4' aria-hidden='true' />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
