import React, { useState, useEffect } from 'react';
import { instructors as mockInstructors } from '@/data/mockData';
import InstructorCard from '@/components/InstructorCard';
import ScrollReveal from '@/components/ScrollReveal';
import { Users, Loader2 } from 'lucide-react';

export default function Instructors() {
  const instructors = mockInstructors;

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-950 relative overflow-hidden py-20">
        <div className="absolute inset-0 islamic-pattern text-amber-400 opacity-[0.06]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Users className="text-amber-400 mx-auto mb-4" size={32} />
            <h1 className="font-display text-5xl font-semibold text-white">Our Instructors</h1>
            <p className="mt-4 text-lg text-emerald-100/70 max-w-xl mx-auto">
              Qualified and certified teachers dedicated to helping you master the Quran with proper Tajweed and understanding.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {instructors.map((ins, i) => (
                <ScrollReveal key={ins.id} delay={i * 0.08}>
                  <InstructorCard instructor={ins} />
                </ScrollReveal>
              ))}
            </div>
        </div>
      </section>
    </div>
  );
}