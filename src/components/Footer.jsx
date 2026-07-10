import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-emerald-100/70 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <span className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center font-arabic text-emerald-950 text-2xl">ق</span>
              <span className="font-display text-2xl font-semibold text-white">Noor Academy</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Bringing the light of Quran education to students worldwide through personalized online classes with certified instructors.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/courses" className="hover:text-amber-400 transition-colors">Courses</Link></li>
              <li><Link to="/enroll" className="hover:text-amber-400 transition-colors">Enroll Now</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-amber-400 shrink-0" />
                <a href="mailto:info@noorquranacademy.com" className="hover:text-amber-400 transition-colors">info@noorquranacademy.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-amber-400 shrink-0" />
                <a href="tel:+923113246161" className="hover:text-amber-400 transition-colors">+92 (311) 324-6161</a>
              </li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-amber-400 shrink-0" /> Online — Worldwide</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Follow Us</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://www.facebook.com/Hafizismail11" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors">Instagram</a></li>
              <li><a href="https://www.youtube.com/@HafizIsmailQuranTeacher" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        <p className="pt-8 text-center text-sm text-emerald-100/50">
          © {new Date().getFullYear()} Noor Quran Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}