import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Layout as LayoutIcon, Box, Info, Phone, Briefcase, Calculator } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

const NAV_LINKS = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About', path: '/about', icon: Info },
  { name: 'Services', path: '/services', icon: LayoutIcon },
  { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
  { name: 'Quote', path: '/quote', icon: Calculator },
  { name: 'Contact', path: '/contact', icon: Phone },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'bg-brand-white/80 backdrop-blur-md border-b border-brand-black/5 py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-brand-black flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12">
            <Box className="text-brand-white w-6 h-6" />
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">
            Visuals <span className="text-brand-taupe">by Waweru</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-sm font-medium uppercase tracking-widest transition-colors hover:text-brand-taupe',
                location.pathname === link.path ? 'text-brand-black' : 'text-brand-black/60'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/quote"
            className="bg-brand-black text-brand-white px-6 py-2 text-xs uppercase tracking-widest font-bold rounded-full hover:bg-brand-taupe transition-colors"
          >
            Build a Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-black p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-white border-b border-brand-black/5 p-6 md:hidden shadow-xl"
          >
            <nav className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'flex items-center gap-4 text-lg font-serif py-2 border-b border-brand-black/5',
                    location.pathname === link.path ? 'text-brand-black' : 'text-brand-black/60'
                  )}
                >
                  <link.icon className="w-5 h-5" />
                  {link.name}
                </Link>
              ))}
              <Link
                to="/quote"
                className="mt-4 bg-brand-black text-brand-white text-center py-4 rounded-lg font-bold uppercase tracking-widest"
              >
                Build a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
