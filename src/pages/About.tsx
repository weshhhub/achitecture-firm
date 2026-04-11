import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Lightbulb, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">About Us</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              We are a collective of <span className="italic">visionaries</span> and builders.
            </h1>
            <p className="text-xl text-brand-black/60 leading-relaxed">
              Visuals by Waweru was founded on the principle that every space has a story to tell. We combine architectural precision with artistic flair to create environments that inspire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1000"
                alt="Studio Office"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="aspect-[4/5] rounded-3xl overflow-hidden md:mt-24">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
                alt="Team Meeting"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 bg-brand-beige">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="p-12 bg-brand-white rounded-3xl">
            <Target className="text-brand-taupe mb-6" size={40} />
            <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
            <p className="text-brand-black/60 leading-relaxed">
              To provide innovative and sustainable design solutions that enhance the quality of life for our clients and the communities we serve. We strive for excellence in every render, plan, and build.
            </p>
          </div>
          <div className="p-12 bg-brand-white rounded-3xl">
            <Lightbulb className="text-brand-taupe mb-6" size={40} />
            <h2 className="text-3xl font-serif mb-6">Our Vision</h2>
            <p className="text-brand-black/60 leading-relaxed">
              To be the leading architectural and visualization studio in East Africa, recognized for our commitment to design integrity, technological innovation, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Our Values</span>
            <h2 className="text-4xl md:text-5xl font-serif">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Quality', desc: 'Uncompromising attention to detail in every project.' },
              { icon: Users, title: 'Collaboration', desc: 'Working closely with clients to realize their vision.' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Using the latest tools and techniques in design.' },
              { icon: CheckCircle2, title: 'Integrity', desc: 'Honest and transparent communication at all times.' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 bg-brand-beige rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-brand-black" size={24} />
                </div>
                <h3 className="text-xl font-serif mb-4">{value.title}</h3>
                <p className="text-sm text-brand-black/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 bg-brand-black text-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">The Founder</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">A Passion for Design</h2>
            <p className="text-brand-white/60 mb-8 leading-relaxed">
              With over a decade of experience in the architectural industry, our founder established Visuals by Waweru to bridge the gap between complex architectural concepts and client understanding through superior visualization.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-taupe flex items-center justify-center font-bold">JD</div>
                <div>
                  <h4 className="font-bold uppercase tracking-wider">John Doe</h4>
                  <p className="text-xs text-brand-taupe uppercase tracking-widest">Lead Architect & Founder</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-square">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1000"
              alt="Founder"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
