import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import ScrollReveal from '@/components/ScrollReveal';
import { Mail, Phone, MapPin, Clock, CheckCircle2, Loader2, Send } from 'lucide-react';

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ student_name: '', email: '', notes: '' });

  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/send_contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hafizismail125125@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+92 (300) 111-3101' },
    { icon: Clock, label: 'Hours', value: 'Available 24/7 Worldwide' },
    { icon: MapPin, label: 'Location', value: 'Online — Worldwide' },
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-950 relative overflow-hidden py-20">
        <div className="absolute inset-0 islamic-pattern text-amber-400 opacity-[0.06]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <Mail className="text-amber-400 mx-auto mb-4" size={32} />
            <h1 className="font-display text-5xl font-semibold text-white">Get in Touch</h1>
            <p className="mt-4 text-lg text-emerald-100/70 max-w-xl mx-auto">
              Have a question? We're here to help. Reach out and we'll respond within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <div className="space-y-6">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                    <c.icon className="text-emerald-700" size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-emerald-950">{c.label}</h3>
                    <p className="text-muted-foreground text-sm mt-0.5">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            {sent ? (
              <div className="bg-card rounded-3xl border border-border p-10 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="text-emerald-600" size={32} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-emerald-950">Message Sent!</h3>
                <p className="mt-2 text-muted-foreground">We'll get back to you within 24 hours, insha'Allah.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card rounded-3xl border border-border p-8 shadow-sm space-y-5">
                <div>
                  <Label htmlFor="student_name">Your Name</Label>
                  <Input id="student_name" name="student_name" required value={form.student_name} onChange={handleChange} className="mt-1.5" placeholder="Full name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="mt-1.5" placeholder="you@example.com" />
                </div>
                <div>
                  <Label htmlFor="notes">Message</Label>
                  <Textarea id="notes" name="notes" required value={form.notes} onChange={handleChange} className="mt-1.5" rows={5} placeholder="How can we help you?" />
                </div>
                <Button type="submit" disabled={submitting}
                  className="w-full rounded-full bg-emerald-800 hover:bg-emerald-900 py-6 text-base font-semibold">
                  {submitting ? <><Loader2 className="animate-spin mr-2" size={18} /> Sending...</> : <>Send Message <Send className="ml-2" size={18} /></>}
                </Button>
                {error && (
                  <p className="text-red-600 text-sm text-center mt-2">{error}</p>
                )}
              </form>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}