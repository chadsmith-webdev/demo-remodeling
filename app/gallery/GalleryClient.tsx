"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    category: "kitchen",
    label: "Kitchen",
    title: "Navy Shaker Kitchen — Rogers, AR",
    desc: "Full gut renovation with custom navy shaker cabinets, quartzite waterfall island, and unlacquered brass hardware.",
    before: "/images/kitchen-before.jpg",
    after: "/images/kitchen-after.jpg",
    duration: "9 weeks",
    value: "$72,000",
  },
  {
    id: 2,
    category: "kitchen",
    label: "Kitchen",
    title: "White Oak Modern Kitchen — Bentonville, AR",
    desc: "Open-concept layout reconfiguration with white oak floating shelves, integrated appliances, and Zellige tile backsplash.",
    before: "/images/gallery-kitchen-1.jpg",
    after: "/images/gallery-kitchen-2.jpg",
    duration: "7 weeks",
    value: "$58,000",
  },
  {
    id: 3,
    category: "bathroom",
    label: "Bathroom",
    title: "Spa Master Suite — Cave Springs, AR",
    desc: 'Freestanding soaking tub, 48" x 84" walk-in shower with rainfall head, heated floors, and double custom vanity.',
    before: "/images/bathroom-before.jpg",
    after: "/images/bathroom-after.jpg",
    duration: "4 weeks",
    value: "$48,000",
  },
  {
    id: 4,
    category: "bathroom",
    label: "Bathroom",
    title: "Guest Bath Refresh — Lowell, AR",
    desc: "Complete hall bath remodel with large-format marble-look tile, frameless glass, and custom niche.",
    before: "/images/gallery-bathroom-1.jpg",
    after: "/images/gallery-bathroom-2.jpg",
    duration: "2 weeks",
    value: "$18,500",
  },
  {
    id: 5,
    category: "basement",
    label: "Basement",
    title: "Home Theater Basement — Rogers, AR",
    desc: "Entire unfinished space transformed into home theater, playroom, full bath, and storage room.",
    before: "/images/basement-before.jpg",
    after: "/images/basement-after.jpg",
    duration: "11 weeks",
    value: "$67,000",
  },
  {
    id: 6,
    category: "addition",
    label: "Addition",
    title: "Master Suite Addition — Springdale, AR",
    desc: "600 sq ft master suite addition with spa bathroom, walk-in closet, and vaulted ceiling.",
    before: "/images/addition-after.jpg",
    after: "/images/gallery-addition-1.jpg",
    duration: "14 weeks",
    value: "$145,000",
  },
];

const categories = ["all", "kitchen", "bathroom", "basement", "addition"];
const categoryLabels: Record<string, string> = {
  all: "All Projects",
  kitchen: "Kitchens",
  bathroom: "Bathrooms",
  basement: "Basements",
  addition: "Additions",
};

export default function GalleryClient() {
  const [active, setActive] = useState("all");
  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className='container-site mx-auto px-4 md:px-8 py-12'>
      {/* Filter tabs */}
      <div className='flex gap-2 flex-wrap mb-10'>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-body text-xs font-semibold px-4 py-2 rounded-full border transition-colors ${
              active === cat
                ? "bg-gold text-[oklch(0.13_0.008_68)] border-gold"
                : "border-border text-muted-foreground hover:border-gold/40 hover:text-foreground"
            }`}
          >
            {categoryLabels[cat]}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className='space-y-16'>
        {filtered.map((project) => (
          <AnimatedSection key={project.id}>
            <div className='border border-border rounded-xl overflow-hidden bg-card'>
              <BeforeAfterSlider
                beforeSrc={project.before}
                afterSrc={project.after}
                beforeAlt={`Before: ${project.title}`}
                afterAlt={`After: ${project.title}`}
                height={480}
              />
              <div className='p-6 md:p-8'>
                <div className='flex items-start justify-between gap-4 flex-wrap'>
                  <div>
                    <span className='font-body text-[10px] font-semibold uppercase tracking-widest text-gold'>
                      {project.label}
                    </span>
                    <h2 className='font-display text-xl md:text-2xl font-bold text-foreground mt-1 mb-2'>
                      {project.title}
                    </h2>
                    <p className='font-body text-sm text-muted-foreground max-w-prose'>
                      {project.desc}
                    </p>
                  </div>
                  <div className='flex gap-6 shrink-0'>
                    <div>
                      <div className='font-body text-[10px] uppercase tracking-widest text-muted-foreground'>
                        Duration
                      </div>
                      <div className='font-body text-sm font-semibold text-foreground'>
                        {project.duration}
                      </div>
                    </div>
                    <div>
                      <div className='font-body text-[10px] uppercase tracking-widest text-muted-foreground'>
                        Project Value
                      </div>
                      <div className='font-body text-sm font-semibold text-gold'>
                        {project.value}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* CTA */}
      <AnimatedSection>
        <div className='mt-20 text-center'>
          <p className='font-body text-muted-foreground mb-4 text-sm'>
            Ready to start your project?
          </p>
          <Link
            href='/contact'
            className='inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-[oklch(0.13_0.008_68)] font-body font-semibold text-sm rounded hover:bg-[oklch(0.82_0.12_75)] transition-colors'
          >
            Get a Free Estimate{" "}
            <ArrowRight className='w-4 h-4' aria-hidden='true' />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
