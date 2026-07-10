import React from 'react';
import { Award, GraduationCap } from 'lucide-react';

export default function InstructorCard({ instructor }) {
  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      <div className="aspect-square bg-gradient-to-br from-emerald-100 to-amber-50 relative overflow-hidden">
        {instructor.image_url ? (
          <img src={instructor.image_url} alt={instructor.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-6xl text-emerald-800/20 font-bold">
              {instructor.name?.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-emerald-950">{instructor.name}</h3>
        <p className="text-sm text-amber-600 font-medium">{instructor.title}</p>
        {instructor.bio && <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{instructor.bio}</p>}
        <div className="mt-4 space-y-2">
          {instructor.specialization && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award size={15} className="text-emerald-600 shrink-0" /> {instructor.specialization}
            </div>
          )}
          {instructor.experience_years > 0 && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <GraduationCap size={15} className="text-emerald-600 shrink-0" /> {instructor.experience_years} years experience
            </div>
          )}
        </div>
      </div>
    </div>
  );
}