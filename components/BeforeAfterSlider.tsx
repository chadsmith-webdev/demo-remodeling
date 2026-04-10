"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  height?: number;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  height = 480,
}: BeforeAfterSliderProps) {
  const [sliderX, setSliderX] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateSlider = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(Math.max((x / rect.width) * 100, 2), 98);
    setSliderX(pct);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      updateSlider(e.clientX);
    },
    [isDragging, updateSlider],
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      updateSlider(e.touches[0].clientX);
    },
    [updateSlider],
  );

  return (
    <div
      ref={containerRef}
      className='relative select-none overflow-hidden rounded-xl cursor-ew-resize'
      style={{ height }}
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      role='separator'
      aria-label='Before and after comparison slider'
    >
      {/* After image (base) */}
      <div className='absolute inset-0'>
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 800px'
        />
        <div className='absolute top-4 right-4 bg-gold text-[oklch(0.13_0.008_68)] font-body text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded'>
          After
        </div>
      </div>

      {/* Before image (clipped) */}
      <div
        className='absolute inset-0 overflow-hidden'
        style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className='object-cover'
          sizes='(max-width: 768px) 100vw, 800px'
        />
        <div className='absolute top-4 left-4 bg-secondary text-foreground font-body text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded border border-border'>
          Before
        </div>
      </div>

      {/* Divider */}
      <div
        className='absolute top-0 bottom-0 w-0.5 bg-gold shadow-lg shadow-gold/50 z-10'
        style={{ left: `${sliderX}%` }}
      >
        {/* Handle */}
        <motion.div
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold shadow-xl shadow-gold/40 flex items-center justify-center'
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            viewBox='0 0 24 24'
            fill='none'
            className='w-5 h-5 text-[oklch(0.13_0.008_68)]'
            aria-hidden='true'
          >
            <path
              d='M9 4L5 12L9 20M15 4L19 12L15 20'
              stroke='currentColor'
              strokeWidth={2.5}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
