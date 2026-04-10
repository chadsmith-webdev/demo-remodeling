"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/kitchen-remodeling", label: "Kitchen Remodeling" },
      { href: "/services/bathroom-remodeling", label: "Bathroom Remodeling" },
      { href: "/services/home-additions", label: "Home Additions" },
      { href: "/services/basement-finishing", label: "Basement Finishing" },
    ],
  },
  { href: "/gallery", label: "Gallery" },
  { href: "/process", label: "Our Process" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[oklch(0.13_0.008_68/0.97)] backdrop-blur-md border-b border-border shadow-xl shadow-black/20"
            : "bg-transparent",
        )}
      >
        <div className='container-site mx-auto px-4 md:px-8'>
          <div className='flex items-center justify-between h-16 md:h-20'>
            {/* Logo */}
            <Link href='/' className='flex flex-col leading-none group'>
              <span className='font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-gold transition-colors duration-200'>
                Summit
              </span>
              <span className='text-[10px] md:text-xs font-body font-medium tracking-[0.18em] text-gold uppercase'>
                Home Remodeling
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              className='hidden lg:flex items-center gap-1'
              role='navigation'
              aria-label='Main navigation'
            >
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.href} className='relative group'>
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 text-sm font-body font-medium rounded transition-colors duration-200",
                        pathname.startsWith("/services")
                          ? "text-gold"
                          : "text-foreground/80 hover:text-foreground",
                      )}
                      aria-expanded={servicesOpen}
                      onMouseEnter={() => setServicesOpen(true)}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {link.label}
                      <ChevronDown className='w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180' />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          transition={{ duration: 0.15 }}
                          className='absolute top-full left-0 pt-1 min-w-[220px]'
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          <div className='bg-card border border-border rounded-lg shadow-2xl shadow-black/40 overflow-hidden'>
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  "block px-4 py-3 text-sm font-body transition-all duration-150 border-b border-border/50 last:border-0",
                                  pathname === child.href
                                    ? "bg-gold/10 text-gold"
                                    : "text-foreground/80 hover:bg-secondary hover:text-gold",
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 text-sm font-body font-medium rounded transition-colors duration-200",
                      pathname === link.href
                        ? "text-gold"
                        : "text-foreground/80 hover:text-foreground",
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            {/* Desktop CTA */}
            <div className='hidden lg:flex items-center gap-3'>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className='flex items-center gap-2 text-sm font-body font-medium text-foreground/80 hover:text-gold transition-colors duration-200'
                aria-label='Call Summit Home Remodeling'
              >
                <Phone className='w-4 h-4' />
                <span>{siteConfig.phone}</span>
              </a>
              <Link
                href='/contact'
                className='ml-2 px-5 py-2.5 bg-gold text-[oklch(0.13_0.008_68)] font-body font-semibold text-sm rounded hover:bg-[oklch(0.82_0.12_75)] transition-all duration-200 hover:shadow-lg hover:shadow-gold/20 active:scale-95'
              >
                Free Estimate
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className='lg:hidden p-2 rounded text-foreground/80 hover:text-foreground transition-colors'
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className='w-6 h-6' />
              ) : (
                <Menu className='w-6 h-6' />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden'
              onClick={() => setIsOpen(false)}
              aria-hidden='true'
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className='fixed top-0 right-0 bottom-0 z-50 w-[min(320px,90vw)] bg-card border-l border-border shadow-2xl lg:hidden flex flex-col'
              role='dialog'
              aria-label='Mobile navigation'
            >
              {/* Drawer header */}
              <div className='flex items-center justify-between px-6 h-16 border-b border-border'>
                <span className='font-display font-bold text-lg text-gold'>
                  Summit
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className='p-2 rounded text-foreground/80 hover:text-foreground'
                  aria-label='Close menu'
                >
                  <X className='w-5 h-5' />
                </button>
              </div>

              {/* Nav links */}
              <nav
                className='flex-1 overflow-y-auto py-6 px-4'
                role='navigation'
                aria-label='Mobile navigation'
              >
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    {link.children ? (
                      <div>
                        <div className='px-3 py-2.5 text-xs font-body font-semibold uppercase tracking-widest text-gold/70 mt-4'>
                          Services
                        </div>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              "block px-5 py-2.5 text-sm font-body rounded-md mb-1 transition-colors",
                              pathname === child.href
                                ? "bg-gold/10 text-gold"
                                : "text-foreground/80 hover:text-foreground hover:bg-secondary",
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={cn(
                          "block px-3 py-3 text-base font-body font-medium rounded-md mb-1 transition-colors",
                          pathname === link.href
                            ? "text-gold"
                            : "text-foreground/80 hover:text-foreground hover:bg-secondary",
                        )}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              {/* Drawer footer CTA */}
              <div className='px-6 py-6 border-t border-border space-y-3'>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className='flex items-center justify-center gap-2 w-full py-3 border border-border rounded font-body text-sm font-medium text-foreground/80 hover:text-gold hover:border-gold transition-colors duration-200'
                >
                  <Phone className='w-4 h-4' />
                  {siteConfig.phone}
                </a>
                <Link
                  href='/contact'
                  className='flex items-center justify-center w-full py-3 bg-gold text-[oklch(0.13_0.008_68)] font-body font-semibold text-sm rounded hover:bg-[oklch(0.82_0.12_75)] transition-colors'
                >
                  Get Free Estimate
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer so content starts below fixed nav */}
      <div className='h-16 md:h-20' aria-hidden='true' />
    </>
  );
}
