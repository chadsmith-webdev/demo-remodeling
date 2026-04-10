import type { Metadata } from "next";
import Link from "next/link";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title:
    "Project Gallery | Kitchen, Bath & Basement Before & After | Summit Home Remodeling",
  description:
    "Browse before and after photos from Summit Home Remodeling projects across Rogers, Bentonville, and Northwest Arkansas. Kitchens, bathrooms, basements, and home additions.",
  alternates: { canonical: "https://summithomeremodeling.com/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      {/* Breadcrumb */}
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
            <li className='text-foreground'>Gallery</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <header className='section-pad bg-card border-b border-border text-center'>
        <div className='container-site mx-auto px-4 md:px-8'>
          <p className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-3'>
            Our Work
          </p>
          <h1 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-4'>
            Before &amp; After Gallery
          </h1>
          <p className='font-body text-base text-muted-foreground max-w-xl mx-auto'>
            Drag the slider to reveal the transformation. Every project shown
            was completed by Summit craftsmen — no stock photos, no outsourced
            work.
          </p>
        </div>
      </header>

      <GalleryClient />
    </>
  );
}
