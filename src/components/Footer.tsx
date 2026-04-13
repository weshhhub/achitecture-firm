import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black text-brand-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-white flex items-center justify-center rounded-sm">
              <Box className="text-brand-black w-5 h-5" />
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">
              Visuals <span className="text-brand-taupe">by Waweru</span>
            </span>
          </Link>
          <p className="text-brand-white/60 text-sm leading-relaxed max-w-xs">
            Designing spaces that are functional, beautiful, and buildable. Your partner in architectural excellence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-taupe transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-brand-taupe transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-brand-taupe transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-brand-taupe transition-colors"><Twitter size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-brand-white/60">
            <li><Link to="/services/architectural-design" className="hover:text-brand-white transition-colors">Architectural Design</Link></li>
            <li><Link to="/services/interior-design" className="hover:text-brand-white transition-colors">Interior Design</Link></li>
            <li><Link to="/services/3d-visualization" className="hover:text-brand-white transition-colors">3D Visualization</Link></li>
            <li><Link to="/services/landscape-design" className="hover:text-brand-white transition-colors">Landscape Design</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-brand-white/60">
            <li><Link to="/about" className="hover:text-brand-white transition-colors">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:text-brand-white transition-colors">Portfolio</Link></li>
            <li><Link to="/quote" className="hover:text-brand-white transition-colors">Quote Builder</Link></li>
            <li><Link to="/process" className="hover:text-brand-white transition-colors">Our Process</Link></li>
            <li><Link to="/contact" className="hover:text-brand-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-brand-white/60">
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-brand-taupe" />
              <span>+254 700 000 000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-brand-taupe" />
              <span>hello@visualsbywaweru.com</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={16} className="text-brand-taupe" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-brand-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-white/40 uppercase tracking-widest">
        <p>© 2024 Visuals by Waweru. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
