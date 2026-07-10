import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function SectionHeading({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <ScrollReveal className={center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest ${light ? 'text-amber-400' : 'text-amber-600'}`}>
          <span className="w-8 h-px bg-current opacity-50" />
          {eyebrow}
          <span className="w-8 h-px bg-current opacity-50" />
        </div>
      )}
      <h2 className={`mt-4 font-display text-4xl md:text-5xl font-semibold tracking-tight ${light ? 'text-white' : 'text-emerald-950'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? 'text-emerald-100/70' : 'text-muted-foreground'}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}