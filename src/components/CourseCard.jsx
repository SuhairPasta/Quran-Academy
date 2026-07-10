import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

const levelStyles = {
  beginner: 'bg-emerald-100 text-emerald-800',
  intermediate: 'bg-amber-100 text-amber-800',
  advanced: 'bg-rose-100 text-rose-800',
  all_levels: 'bg-sky-100 text-sky-800',
};

export default function CourseCard({ course }) {
  const levelLabel = (course.level || 'all_levels').replace('_', ' ');
  return (
    <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <div className="aspect-[16/10] bg-gradient-to-br from-emerald-800 to-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern text-amber-400/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-arabic text-amber-400/30 text-7xl">۝</span>
        </div>
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${levelStyles[course.level] || levelStyles.all_levels}`}>
            {levelLabel}
          </span>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-2xl font-semibold text-emerald-950">{course.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{course.description}</p>
        {course.duration && (
          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Clock size={15} /> {course.duration}
          </div>
        )}
        {course.features?.length > 0 && (
          <ul className="mt-4 space-y-1.5 flex-1">
            {course.features.slice(0, 3).map((f, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-amber-500 mt-0.5">✦</span> {f}
              </li>
            ))}
          </ul>
        )}
        <Link to="/enroll" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 hover:text-amber-600 transition-colors">
          Enroll in this course <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}