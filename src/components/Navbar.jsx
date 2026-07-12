import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', path: '/' },
  { label: 'Courses', path: '/courses' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const solid = scrolled || pathname !== '/';

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      solid ? 'bg-[hsl(38,35%,97%)]/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(6,78,59,0.08)]' : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="public/final logo.png" width="90px" alt="Logo" />
          <span className={`font-display text-2xl font-semibold tracking-tight transition-colors ${solid ? 'text-emerald-950' : 'text-white'}`}>
            Quran & Skills institute
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <Link key={l.path} to={l.path}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                solid ? 'text-emerald-900 hover:bg-emerald-900/5' : 'text-white/90 hover:bg-white/10'
              } ${pathname === l.path ? 'font-semibold' : ''}`}>
              {l.label}
            </Link>
          ))}
          <Link to="/enroll"
            className="ml-3 inline-flex items-center rounded-full bg-amber-500 hover:bg-amber-600 px-6 py-2.5 text-sm font-semibold text-emerald-950 transition-colors shadow-sm">
            Enroll Now
          </Link>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className={solid ? 'text-emerald-950' : 'text-white'} size={24} />
                : <Menu className={solid ? 'text-emerald-950' : 'text-white'} size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-white border-t border-emerald-900/10 px-6 py-4 space-y-1 shadow-lg">
          {links.map(l => (
            <Link key={l.path} to={l.path} className="block py-2.5 text-emerald-900 font-medium">
              {l.label}
            </Link>
          ))}
          <Link to="/enroll" className="block mt-3 text-center rounded-full bg-amber-500 hover:bg-amber-600 px-6 py-3 text-sm font-semibold text-emerald-950">
            Enroll Now
          </Link>
        </div>
      )}
    </header>
  );
}