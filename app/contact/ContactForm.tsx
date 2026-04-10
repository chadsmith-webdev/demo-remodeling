"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

const projectTypes = [
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Home Addition",
  "Basement Finishing",
  "Multiple Projects",
  "Not Sure Yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    // Demo form — simulates submission
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className='bg-card border border-border rounded-xl p-8 text-center'>
        <div className='w-14 h-14 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-4'>
          <svg
            className='w-7 h-7 text-gold'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            aria-hidden='true'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M5 13l4 4L19 7'
            />
          </svg>
        </div>
        <h3 className='font-display text-xl font-bold text-foreground mb-2'>
          Thank you, {formData.name.split(" ")[0]}!
        </h3>
        <p className='font-body text-sm text-muted-foreground'>
          We received your request and will contact you within one business day
          to schedule your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-card border border-border rounded-xl p-6 md:p-8 space-y-5'
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
        <div>
          <label
            htmlFor='name'
            className='block font-body text-xs font-semibold uppercase tracking-widest text-gold mb-1.5'
          >
            Your Name *
          </label>
          <input
            id='name'
            name='name'
            type='text'
            required
            value={formData.name}
            onChange={handleChange}
            placeholder='Jane Smith'
            className='w-full px-4 py-3 bg-background border border-border rounded text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors'
          />
        </div>
        <div>
          <label
            htmlFor='phone'
            className='block font-body text-xs font-semibold uppercase tracking-widest text-gold mb-1.5'
          >
            Phone Number *
          </label>
          <input
            id='phone'
            name='phone'
            type='tel'
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder='(479) 555-0100'
            className='w-full px-4 py-3 bg-background border border-border rounded text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors'
          />
        </div>
      </div>

      <div>
        <label
          htmlFor='email'
          className='block font-body text-xs font-semibold uppercase tracking-widest text-gold mb-1.5'
        >
          Email Address *
        </label>
        <input
          id='email'
          name='email'
          type='email'
          required
          value={formData.email}
          onChange={handleChange}
          placeholder='jane@example.com'
          className='w-full px-4 py-3 bg-background border border-border rounded text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors'
        />
      </div>

      <div>
        <label
          htmlFor='projectType'
          className='block font-body text-xs font-semibold uppercase tracking-widest text-gold mb-1.5'
        >
          Project Type *
        </label>
        <select
          id='projectType'
          name='projectType'
          required
          value={formData.projectType}
          onChange={handleChange}
          className='w-full px-4 py-3 bg-background border border-border rounded text-sm font-body text-foreground focus:outline-none focus:border-gold/50 transition-colors'
        >
          <option value=''>Select a project type...</option>
          {projectTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor='message'
          className='block font-body text-xs font-semibold uppercase tracking-widest text-gold mb-1.5'
        >
          Tell Us About Your Project
        </label>
        <textarea
          id='message'
          name='message'
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder='Describe your project, your goals, and any questions you have. The more you share, the more helpful our consultation will be.'
          className='w-full px-4 py-3 bg-background border border-border rounded text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 transition-colors resize-none'
        />
      </div>

      <button
        type='submit'
        disabled={status === "sending"}
        className='flex items-center justify-center gap-2 w-full py-3.5 bg-gold text-[oklch(0.13_0.008_68)] font-body font-semibold text-sm rounded hover:bg-[oklch(0.82_0.12_75)] transition-colors disabled:opacity-60 disabled:cursor-not-allowed'
      >
        {status === "sending" ? (
          "Sending…"
        ) : (
          <>
            Request Free Consultation{" "}
            <ArrowRight className='w-4 h-4' aria-hidden='true' />
          </>
        )}
      </button>

      <p className='font-body text-xs text-muted-foreground text-center'>
        We respond within one business day. No spam, no pressure.
      </p>
    </form>
  );
}
