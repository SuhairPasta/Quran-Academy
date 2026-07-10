import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { courses as mockCourses } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ScrollReveal from '@/components/ScrollReveal';
import { CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

export default function Enroll() {
  const courses = mockCourses;
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    student_name: '', email: '', phone: '', country: '', student_age: '',
    course_interest: '', preferred_days: '', preferred_time: '', notes: ''
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Enrollment form submitted:', form);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-emerald-50/30 px-6">
        <ScrollReveal className="max-w-lg text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-emerald-600" size={40} />
          </div>
          <h1 className="font-display text-4xl font-semibold text-emerald-950">Registration Received!</h1>
          <p className="mt-4 text-muted-foreground">
            Thank you for registering. Our team will contact you within 24 hours to schedule your free trial class, insha'Allah.
          </p>
          <Link to="/" className="inline-block mt-8">
            <Button className="rounded-full bg-emerald-800 hover:bg-emerald-900 px-8">Back to Home</Button>
          </Link>
        </ScrollReveal>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-950 relative overflow-hidden py-20">
        <div className="absolute inset-0 islamic-pattern text-amber-400 opacity-[0.06]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-display text-5xl font-semibold text-white">Enroll Now</h1>
            <p className="mt-4 text-lg text-emerald-100/70 max-w-xl mx-auto">
              Fill out the form below to register for a free trial class. Our team will contact you to schedule your first session.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl border border-border p-8 md:p-10 shadow-sm space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="student_name">Student Name *</Label>
                  <Input id="student_name" name="student_name" required value={form.student_name} onChange={handleChange} className="mt-1.5" placeholder="Full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="mt-1.5" placeholder="you@example.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" value={form.phone} onChange={handleChange} className="mt-1.5" placeholder="+92 (311) 324-6161" />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" name="country" value={form.country} onChange={handleChange} className="mt-1.5" placeholder="Your country" />
                </div>
                <div>
                  <Label htmlFor="student_age">Student Age</Label>
                  <Input id="student_age" name="student_age" value={form.student_age} onChange={handleChange} className="mt-1.5" placeholder="e.g. 12 or adult" />
                </div>
                <div>
                  <Label htmlFor="course_interest">Course Interest</Label>
                  <select id="course_interest" name="course_interest" value={form.course_interest} onChange={handleChange}
                    className="mt-1.5 w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                    <option value="">Select a course</option>
                    {courses.map(c => <option key={c.id} value={c.title}>{c.title}</option>)}
                    <option value="Not sure">Not sure yet</option>
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="preferred_days">Preferred Days</Label>
                  <Input id="preferred_days" name="preferred_days" value={form.preferred_days} onChange={handleChange} className="mt-1.5" placeholder="e.g. Mon, Wed, Fri" />
                </div>
                <div>
                  <Label htmlFor="preferred_time">Preferred Time</Label>
                  <Input id="preferred_time" name="preferred_time" value={form.preferred_time} onChange={handleChange} className="mt-1.5" placeholder="e.g. 5 PM - 7 PM (your timezone)" />
                </div>
              </div>
              <div>
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea id="notes" name="notes" value={form.notes} onChange={handleChange} className="mt-1.5" rows={4} placeholder="Any specific goals or questions?" />
              </div>
              <Button type="submit" disabled={submitting}
                className="w-full rounded-full bg-amber-500 hover:bg-amber-600 text-emerald-950 py-6 text-base font-semibold">
                {submitting ? <><Loader2 className="animate-spin mr-2" size={18} /> Submitting...</> : <>Submit Registration <ArrowRight className="ml-2" size={18} /></>}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}