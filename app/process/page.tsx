import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title:
    "Our Remodeling Process | How Summit Home Remodeling Works | Rogers, AR",
  description:
    "Summit's 5-step remodeling process — from initial consultation to final walkthrough. No surprises, no subcontractor games, and a fixed price before a single nail is pulled. Rogers, AR.",
  alternates: { canonical: "https://summithomeremodeling.com/process" },
};

const steps = [
  {
    num: "01",
    title: "Free In-Home Consultation",
    duration: "60–90 minutes",
    desc: "We come to you. One of Summit's senior project managers visits your home to walk the space, understand your goals, and ask the questions that will shape the design. We don't send sales reps — you meet the person who'll manage your project.",
    details: [
      "We review your wish list and prioritize it against your budget",
      "We identify structural, mechanical, or code considerations",
      "You get a clear sense of ballpark cost before you invest in design",
      "No pressure, no pitch — just a professional conversation",
    ],
  },
  {
    num: "02",
    title: "Design & Material Selection",
    duration: "1–3 weeks",
    desc: "Our in-house designer translates your goals into a 3D design concept. We source materials, spec fixtures, and guide you through selections at our Rogers showroom or via our digital lookbook — whichever you prefer. Every selection is made before we write the contract.",
    details: [
      "3D renderings so you can visualize the finished space",
      "Material samples brought to your home or chosen at our showroom",
      "Full spec sheet of every fixture, finish, and cabinet style",
      "Revisions included — we don't charge by the hour to get the design right",
    ],
  },
  {
    num: "03",
    title: "Fixed-Price Contract",
    duration: "48–72 hours after design approval",
    desc: "After design is finalized, we write a fixed-price contract that includes every cost — labor, materials, permits, and cleanup. The number you sign is the number you pay. If we encounter unexpected conditions (hidden rot, non-code wiring, etc.), we document it before addressing it and present any cost impact for your approval.",
    details: [
      "Itemized scope of work — you see exactly what's included",
      "Payment schedule tied to project milestones, not calendar dates",
      "Change order process documented up front — nothing proceeds without your approval",
      "No retainage held — we earn payment by completing work, not by locking it in",
    ],
  },
  {
    num: "04",
    title: "Construction",
    duration: "Per your project timeline",
    desc: "Your dedicated project manager coordinates all trades and is on site every working day. We use W-2 craftsmen for carpentry and tile — the highest-skill trades — and vetted subcontractors for electrical, plumbing, and HVAC. Your project manager is reachable by text or call throughout.",
    details: [
      "Daily cleanup so your home stays livable",
      "Weekly progress updates with photos by text or email",
      "No 'ghost site' weeks where nothing happens — we maintain momentum",
      "Permit inspections coordinated without delaying the schedule",
    ],
  },
  {
    num: "05",
    title: "Final Walkthrough & Warranty",
    duration: "Project completion",
    desc: "Before we consider a project closed, you walk every inch with your project manager. Every item on the punch list is addressed before final payment is requested. After completion, your 5-year workmanship warranty kicks in — in writing, always.",
    details: [
      "Formal punch list walkthrough with your project manager",
      "Professional cleaning before your final walkthrough",
      "5-year workmanship warranty in writing, mailed with your completion package",
      "We want referrals — so we treat every project like it's the one you'll tell your neighbors about",
    ],
  },
];

const faqs = [
  {
    q: "What if you discover something unexpected during demolition?",
    a: "We document it with photos, present the options and costs to you, and wait for your written approval before proceeding. Work never expands without your consent. This is spelled out in every contract.",
  },
  {
    q: "How do I know Summit won't ghost me mid-project?",
    a: "You have a dedicated project manager's personal cell number from day one. We also provide weekly photo updates. We've completed over 430 projects since 2011 — our reputation is the only thing that keeps us in business.",
  },
  {
    q: "Do you use subcontractors?",
    a: "Yes, for licensed trades (electrical, plumbing, HVAC) — that's industry standard and required by Arkansas code. All Summit subcontractors are vetted, licensed, insured, and have worked with us for years. Our W-2 carpenters and tile setters handle the majority of the visible work.",
  },
  {
    q: "Can I make changes after the contract is signed?",
    a: "Yes, with a written change order. Any scope change — add, remove, or modify — is priced and approved in writing before work proceeds. We don't allow verbal changes; it protects both parties.",
  },
  {
    q: "What questions should I ask every contractor I interview?",
    a: "Ask: Are you licensed and insured (verify both)? Will you provide a fixed-price contract? Who manages my project day to day? How do you handle unexpected conditions? Can I call past clients? What does your warranty cover and for how long? A contractor who hedges on any of these is a warning sign.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ProcessPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
            <li className='text-foreground'>Our Process</li>
          </ol>
        </div>
      </nav>

      {/* Header */}
      <header className='section-pad bg-card border-b border-border'>
        <div className='container-site mx-auto px-4 md:px-8 max-w-3xl'>
          <AnimatedSection>
            <p className='font-body text-xs font-semibold uppercase tracking-widest text-gold mb-3'>
              How We Work
            </p>
            <h1 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-4'>
              No surprises. No runaround. Just clear process.
            </h1>
            <p className='font-body text-base text-muted-foreground leading-relaxed'>
              Remodeling has a reputation for going over budget, running over
              schedule, and leaving homeowners frustrated. That reputation
              exists because most contractors operate without a defined process.
              At Summit, process is the product.
            </p>
          </AnimatedSection>
        </div>
      </header>

      {/* Steps */}
      <section className='section-pad'>
        <div className='container-site mx-auto px-4 md:px-8'>
          <div className='relative'>
            {/* Vertical line */}
            <div
              className='absolute left-8 md:left-16 top-0 bottom-0 w-px bg-border hidden md:block'
              aria-hidden='true'
            />

            <div className='space-y-12 md:space-y-16'>
              {steps.map((step) => (
                <AnimatedSection key={step.num} direction='left'>
                  <div className='flex gap-6 md:gap-12'>
                    {/* Number badge */}
                    <div className='flex-shrink-0 relative z-10'>
                      <div className='w-16 md:w-32 h-16 flex items-center justify-center'>
                        <div className='w-14 h-14 rounded-full border border-gold/30 bg-card flex items-center justify-center'>
                          <span className='font-display text-lg font-bold text-gold'>
                            {step.num}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className='pb-4 pt-3 flex-1'>
                      <div className='flex items-center gap-3 mb-3 flex-wrap'>
                        <h2 className='font-display text-xl md:text-2xl font-bold text-foreground'>
                          {step.title}
                        </h2>
                        <span className='font-body text-xs text-muted-foreground bg-card border border-border rounded-full px-3 py-1'>
                          {step.duration}
                        </span>
                      </div>
                      <p className='font-body text-sm text-muted-foreground leading-relaxed mb-4'>
                        {step.desc}
                      </p>
                      <ul className='space-y-2'>
                        {step.details.map((d) => (
                          <li key={d} className='flex items-start gap-2.5'>
                            <div
                              className='w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2'
                              aria-hidden='true'
                            />
                            <span className='font-body text-sm text-muted-foreground'>
                              {d}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className='section-pad bg-card border-t border-border'>
        <div className='container-site mx-auto px-4 md:px-8 max-w-3xl'>
          <AnimatedSection>
            <h2 className='font-display text-3xl font-bold text-foreground mb-8'>
              Questions homeowners are afraid to ask contractors
            </h2>
            <div className='space-y-5'>
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className='border border-border rounded-lg p-6 hover:border-gold/30 transition-colors'
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
        </div>
      </section>

      {/* CTA */}
      <section className='section-pad border-t border-border'>
        <div className='container-site mx-auto px-4 md:px-8 text-center'>
          <AnimatedSection>
            <div className='gold-line mx-auto mb-6 w-12' />
            <h2 className='font-display text-3xl font-bold text-foreground mb-4'>
              Ready to start the conversation?
            </h2>
            <p className='font-body text-muted-foreground mb-8 max-w-lg mx-auto text-sm'>
              Step one is a free, no-pressure in-home consultation. You meet
              your future project manager, we look at your space, and we talk
              through what&apos;s possible.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 justify-center'>
              <Link
                href='/contact'
                className='inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gold text-[oklch(0.13_0.008_68)] font-body font-semibold text-sm rounded hover:bg-[oklch(0.82_0.12_75)] transition-colors'
              >
                Book Your Free Consultation{" "}
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
