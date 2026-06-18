"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const containerReduced = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
    },
  },
};

export default function HomeHero() {
  const prefersReducedMotion = useReducedMotion();
  const activeContainer = prefersReducedMotion ? containerReduced : container;
  return (
    <section
      className='relative min-h-[92vh] flex items-center overflow-hidden'
      aria-label='Summit Home Remodeling — Rogers, AR home remodeling contractor'
    >
      {/* Background image */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/images/hero-home.jpg'
          alt='Luxury home exterior — Summit Home Remodeling Rogers AR'
          fill
          priority
          quality={90}
          className='object-cover object-center'
          sizes='100vw'
        />
        {/* Gradient overlay: dark left / transparent right on large, full-dark on mobile */}
        <div className='absolute inset-0 bg-gradient-to-r from-overlay-dark/97 via-overlay-dark/75 to-overlay-dark/40 md:to-transparent' />
        <div className='absolute inset-0 md:hidden bg-overlay-dark/65' />
      </div>

      {/* Content */}
      <div className='relative z-10 container-site mx-auto px-4 md:px-8 py-24 md:py-32'>
        <div className='max-w-2xl'>
          <motion.div variants={activeContainer} initial='hidden' animate='show'>
            {/* Eyebrow */}
            <motion.div
              variants={item}
              className='flex items-center gap-3 mb-5'
            >
              <div className='h-px w-8 bg-gold' aria-hidden='true' />
              <p className='font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold'>
                Rogers, AR · Est. {siteConfig.established}
              </p>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className='font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] text-foreground'
            >
              Your home,
              <br />
              <span className='relative inline-block'>
                <span className='relative z-10 text-gold'>reimagined.</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                  className='absolute bottom-1 left-0 right-0 h-1 bg-gold/20 origin-left'
                  aria-hidden='true'
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={item}
              className='font-body text-base md:text-lg text-foreground/75 mt-6 leading-relaxed max-w-lg'
            >
              Northwest Arkansas&apos; most transparent home remodeling
              contractor. Fixed prices. Real timelines. Craftsman-quality
              finish. Serving Rogers, Bentonville, Springdale, and surrounding
              communities since {siteConfig.established}.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className='flex flex-col sm:flex-row gap-3 mt-8'
            >
              <Link
                href='/contact'
                className='inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold text-primary-foreground font-body font-bold text-sm rounded hover:bg-primary-hover transition-all duration-200 hover:shadow-xl hover:shadow-gold/30 group'
              >
                Get a Free Estimate
                <ArrowRight
                  className='w-4 h-4 transition-transform duration-200 group-hover:translate-x-1'
                  aria-hidden='true'
                />
              </Link>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className='inline-flex items-center justify-center gap-2 px-7 py-4 border border-foreground/20 text-foreground/80 font-body font-semibold text-sm rounded hover:border-gold/50 hover:text-foreground transition-all duration-200 backdrop-blur-sm'
              >
                <Phone className='w-4 h-4 text-gold' aria-hidden='true' />
                {siteConfig.phone}
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={item}
              className='flex items-center gap-4 mt-8 pt-8 border-t border-foreground/10'
            >
              <div>
                <div className='flex gap-0.5'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      viewBox='0 0 12 12'
                      className='w-4 h-4 fill-gold'
                      aria-hidden='true'
                    >
                      <path d='M6 0l1.5 4.6H12L8.3 7.4l1.4 4.6L6 9.3l-3.7 2.7 1.4-4.6L0 4.6h4.5z' />
                    </svg>
                  ))}
                </div>
                <p className='font-body text-xs text-foreground/60 mt-1'>
                  <strong className='text-foreground/90'>
                    {siteConfig.stats.rating}/5
                  </strong>{" "}
                  from {siteConfig.stats.reviews} Google reviews
                </p>
              </div>
              <div className='w-px h-8 bg-foreground/10' aria-hidden='true' />
              <p className='font-body text-xs text-foreground/60'>
                <strong className='text-foreground/90'>
                  {siteConfig.stats.projectsCompleted}+
                </strong>{" "}
                projects completed in NW Arkansas
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — hidden for reduced-motion users */}
      {!prefersReducedMotion && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2'
        aria-hidden='true'
      >
        <span className='font-body text-[10px] uppercase tracking-widest text-foreground/40'>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className='w-4 h-6 border border-foreground/20 rounded-full flex items-start justify-center pt-1.5'
        >
          <div className='w-1 h-1.5 rounded-full bg-gold/60' />
        </motion.div>
      </motion.div>
      )}
    </section>
  );
}
