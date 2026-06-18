import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  city: string;
  rating: number;
  text: string;
  project: string;
  date?: string;
}

export default function TestimonialCard({
  name,
  city,
  rating,
  text,
  project,
  date,
}: TestimonialCardProps) {
  return (
    <div className='bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-gold/40 transition-colors duration-300 group'>
      {/* Stars + quote icon */}
      <div className='flex items-start justify-between'>
        <div
          className='flex gap-0.5'
          role='img'
          aria-label={`${rating} out of 5 stars`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating ? "fill-gold text-gold" : "text-muted-foreground"
              }`}
              aria-hidden='true'
            />
          ))}
        </div>
        <Quote
          className='w-6 h-6 text-gold/30 group-hover:text-gold/50 transition-colors'
          aria-hidden='true'
        />
      </div>

      {/* Review text */}
      <blockquote className='font-body text-sm text-muted-foreground leading-relaxed flex-1'>
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Author + project */}
      <div className='pt-4 border-t border-border'>
        <div className='font-body font-semibold text-sm text-foreground'>
          {name}
        </div>
        <div className='font-body text-xs text-muted-foreground mt-0.5'>
          {city}
        </div>
        <div className='font-body text-xs text-gold/70 mt-1 font-medium'>
          {project}
        </div>
        {date && (
          <time
            className='font-body text-xs text-muted-foreground'
            dateTime={date}
          >
            {new Date(date).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </time>
        )}
      </div>
    </div>
  );
}
