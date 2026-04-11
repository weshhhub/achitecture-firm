import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-brand-black/40 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block text-brand-white/80 text-xs uppercase tracking-[0.3em] font-bold mb-6 border-l-2 border-brand-taupe pl-4">
              Architecture • Interior • 3D Visualization
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-brand-white font-serif leading-[1.1] mb-8">
              Designing spaces that are <span className="italic text-brand-taupe">functional</span>, beautiful, and buildable.
            </h1>
            <p className="text-lg md:text-xl text-brand-white/80 mb-10 max-w-2xl leading-relaxed">
              We provide high-quality architectural design, interior design, and 3D visualization services for residential, commercial, and development projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/portfolio"
                className="group bg-brand-white text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-brand-taupe hover:text-brand-white transition-all duration-300"
              >
                View Portfolio
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group bg-transparent border border-brand-white/30 text-brand-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:bg-brand-white/10 transition-all duration-300"
              >
                Request a Quote
              </Link>
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-white/40 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
