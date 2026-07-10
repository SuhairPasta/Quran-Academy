import React, { useState, useEffect } from 'react';
import { courses as mockCourses } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import CourseCard from '@/components/CourseCard';
import SectionHeading from '@/components/SectionHeading';
import ScrollReveal from '@/components/ScrollReveal';
import { BookOpen, Loader2 } from 'lucide-react';

const levels = ['all', 'beginner', 'intermediate', 'advanced', 'educators'];

export default function Courses() {
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' 
    ? mockCourses 
    : mockCourses.filter(c => c.level.toLowerCase().replace(' ', '_') === filter || c.level.toLowerCase() === filter);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-950 relative overflow-hidden py-20">
        <div className="absolute inset-0 islamic-pattern text-amber-400 opacity-[0.06]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <BookOpen className="text-amber-400 mx-auto mb-4" size={32} />
            <h1 className="font-display text-5xl font-semibold text-white">Our Courses</h1>
            <p className="mt-4 text-lg text-emerald-100/70 max-w-xl mx-auto">
              Comprehensive Quran courses designed for students of all ages and levels, from beginners to advanced learners.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {levels.map(l => (
              <button key={l} onClick={() => setFilter(l)}
                className={`px-5 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  filter === l ? 'bg-emerald-900 text-white' : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                }`}>
                {l === 'all_levels' ? 'all levels' : l}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-20">No courses found for this level.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((c, i) => (
                <ScrollReveal key={c.id} delay={i * 0.08}>
                  <CourseCard course={c} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}