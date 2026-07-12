import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

export default function PrivacyPolicy() {
  return (
    <div className="pt-20 bg-background min-h-screen">
      <section className="bg-gradient-to-br from-emerald-900 to-emerald-950 relative overflow-hidden py-16">
        <div className="absolute inset-0 islamic-pattern text-amber-400 opacity-[0.06]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-semibold text-white">Privacy Policy</h1>
            <p className="mt-4 text-emerald-100/70 font-medium">Last Updated: July 12, 2026</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-emerald-950">
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Welcome to Quran Academy. We value your privacy and are committed to protecting it.
            </p>

            <div className="space-y-10">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-3 text-emerald-900">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not collect, store, or sell any personal information from visitors who browse our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-3 text-emerald-900">How We Use Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Since we do not collect personal data, we do not use, share, rent, or sell your information to anyone.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-3 text-emerald-900">Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website does not use cookies for tracking or advertising purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-3 text-emerald-900">Third-Party Links</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may contain links to third-party services such as WhatsApp or other external websites. Once you leave our website, their privacy policies will apply.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-3 text-emerald-900">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our Quran courses are available for students of all ages. We do not knowingly collect personal information from children through this website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-3 text-emerald-900">Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated revision date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold mb-3 text-emerald-900">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions regarding this Privacy Policy, please contact us through the contact information provided on our website.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
