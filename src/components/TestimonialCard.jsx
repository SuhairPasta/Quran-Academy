import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
      <Quote className="text-amber-400 mb-4 shrink-0" size={28} />
      <div className="flex gap-1 mb-3">
        {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
          <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4 flex-1">"{testimonial.content}"</p>
      <div className="mt-5 flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center font-semibold text-emerald-700 shrink-0">
          {testimonial.name?.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-emerald-950 text-sm">{testimonial.name}</div>
          <div className="text-xs text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}