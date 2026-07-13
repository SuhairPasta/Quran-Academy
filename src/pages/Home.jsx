import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses as mockCourses, instructors as mockInstructors, testimonials as mockTestimonials } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Users, Clock, Shield, Heart, Sparkles, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import CourseCard from '@/components/CourseCard';
import InstructorCard from '@/components/InstructorCard';
import TestimonialCard from '@/components/TestimonialCard';

const features = [
  { icon: Users, title: 'One-on-One Classes', desc: 'Personalized attention with dedicated instructors for every student.' },
  { icon: Clock, title: 'Flexible Schedule', desc: 'Book classes at your convenience, 24/7, across all time zones.' },
  { icon: Shield, title: 'Certified Instructors', desc: 'Learn from qualified teachers with Ijazah and years of experience.' },
  { icon: Heart, title: 'Free Trial Classes', desc: 'Start with a free evaluation class before committing to a plan.' },
];

const steps = [
  { num: '01', title: 'Register', desc: 'Fill out the enrollment form with your details and preferred schedule.' },
  { num: '02', title: 'Free Trial', desc: 'Attend a free trial class to meet your instructor and experience our teaching.' },
  { num: '03', title: 'Start Learning', desc: 'Begin your personalized Quran learning journey with regular scheduled classes.' },
];

export default function Home() {
  const courses = mockCourses.slice(0, 3);
  const instructors = mockInstructors.slice(0, 4);
  const testimonials = mockTestimonials.slice(0, 3);

  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-900 via-emerald-950 to-teal-950 overflow-hidden pt-20">
        <div className="absolute inset-0 islamic-pattern text-amber-400 opacity-[0.06]" />
        <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center py-20">
          <div>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
              className="font-arabic text-amber-400 text-3xl mb-6">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="font-display text-5xl lg:text-7xl font-semibold text-white leading-[1.05] tracking-tight">
              Learn the Quran<br />with <span className="text-amber-400 italic">Expert Guidance</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-emerald-100/70 max-w-lg">
              Join thousands of students worldwide learning Quran reading, Tajweed, memorization, and Tafsir through personalized online classes with certified instructors.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4">
              <Link to="/enroll">
                <Button className="bg-amber-500 hover:bg-amber-600 text-emerald-950 rounded-full px-8 py-6 text-base font-semibold">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="bg-transparent border-amber-400/40 text-white hover:bg-white/10 hover:text-white rounded-full px-8 py-6 text-base">
                  Browse Courses
                </Button>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
              className="mt-12 flex items-center gap-8">
              {[
                { val: '500+', label: 'Students' },
                { val: '10+', label: 'Countries' },
                { val: '10', label: 'Years' },
              ].map((s, i) => (
                <div key={i} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-10 bg-white/15" />}
                  <div>
                    <div className="text-3xl font-bold text-white font-display">{s.val}</div>
                    <div className="text-sm text-emerald-100/60">{s.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border-2 border-amber-400/20" />
              <div className="absolute inset-8 rounded-full border border-amber-400/10" />
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-amber-500/10 to-transparent flex items-center justify-center">
                <span className="font-arabic text-amber-400/40 text-9xl leading-none">ق</span>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400/30" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-400/30" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400/30" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-amber-400/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT US */}
      <section className="py-24 bg-emerald-50/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-amber-600">
              <span className="w-8 h-px bg-current opacity-50" />
              About Us
              <span className="w-8 h-px bg-current opacity-50" />
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <img 
                  src="/about-quran.png" 
                  alt="About Noor Quran Academy" 
                  className="relative rounded-3xl object-cover w-full h-[450px]"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <h3 className="font-display text-4xl md:text-5xl font-semibold text-emerald-950 leading-tight">
                Spreading the Light of Quran Worldwide
              </h3>
              <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>
                  At Noor Academy, we are dedicated to bringing the authentic teachings of the Quran to students across the globe. Through our interactive online classes, we bridge the distance between eager learners and expert educators.
                </p>
                <p>
                  Whether you are starting from the very beginning with the Noorani Qaidah, perfecting your recitation with proper Tajweed, or embarking on the blessed journey of Hifz e Quran (Memorization), we provide a structured and supportive environment.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Why Choose Us" title="A Learning Experience Built for You" subtitle="We combine authentic Islamic education with modern online teaching methods to bring you the best Quran learning experience." />
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="h-full bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
                    <f.icon className="text-emerald-700" size={26} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-emerald-950">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES PREVIEW */}
      <section className="py-24 bg-emerald-50/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="Our Courses" title="Find the Right Path for You" subtitle="From beginner Quran reading to advanced Tajweed and memorization, we offer courses for every level." />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c, i) => (
              <ScrollReveal key={c.id} delay={i * 0.1}>
                <CourseCard course={c} />
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/courses">
              <Button variant="outline" className="rounded-full px-8 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white">
                View All Courses <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading eyebrow="How It Works" title="Start Your Journey in 3 Steps" />
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="relative text-center">
                  <div className="relative inline-flex w-16 h-16 rounded-full bg-emerald-900 text-amber-400 items-center justify-center font-display text-2xl font-bold mx-auto">
                    {s.num}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-emerald-950">{s.title}</h3>
                  <p className="mt-2 text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>



      {/* TESTIMONIALS */}
      {testimonials.length > 0 && (
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <SectionHeading eyebrow="Student Stories" title="Words from Our Students" subtitle="Hear from students around the world who have benefited from our online Quran classes." />
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.id} delay={i * 0.1}>
                  <TestimonialCard testimonial={t} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-emerald-900 to-emerald-950 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern text-amber-400 opacity-[0.05]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Sparkles className="text-amber-400 mx-auto mb-6" size={32} />
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-white tracking-tight">
              Begin Your Quran Journey Today
            </h2>
            <p className="mt-4 text-lg text-emerald-100/70 max-w-xl mx-auto">
              Register now for a free trial class and experience the beauty of learning the Quran online with expert guidance.
            </p>
            <Link to="/enroll" className="inline-block mt-8">
              <Button className="bg-amber-500 hover:bg-amber-600 text-emerald-950 rounded-full px-10 py-6 text-base font-semibold">
                Start Your Free Trial
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}