import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

export default function Services() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Our Services</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Solutions for every <span className="italic text-brand-taupe">dimension</span> of design.
            </h1>
            <p className="text-xl text-brand-black/60 leading-relaxed">
              From the initial sketch to the final photorealistic render, we provide a comprehensive suite of services tailored to your project's unique requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="px-6 space-y-32">
        {SERVICES.map((service, index) => (
          <div key={service.id} className="max-w-7xl mx-auto">
            <div className={index % 2 === 0 ? 'flex flex-col lg:flex-row gap-16 items-center' : 'flex flex-col lg:flex-row-reverse gap-16 items-center'}>
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">0{index + 1} • {service.title}</span>
                  <h2 className="text-4xl md:text-5xl font-serif mb-8">{service.title}</h2>
                  <p className="text-brand-black/60 text-lg mb-10 leading-relaxed">
                    {service.fullDescription}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-brand-black/10 pb-2">Key Features</h4>
                      <ul className="space-y-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm text-brand-black/80">
                            <CheckCircle2 size={18} className="text-brand-taupe shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-xs mb-6 border-b border-brand-black/10 pb-2">Deliverables</h4>
                      <ul className="space-y-4">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-brand-black/80">
                            <div className="w-1.5 h-1.5 bg-brand-taupe rounded-full mt-1.5 shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-brand-black text-brand-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-taupe transition-colors"
                  >
                    Request a Quote <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
              <div className="flex-1 w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl relative"
                >
                  {service.videoUrl ? (
                    <video
                      src={service.videoUrl}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-32 py-24 px-6 bg-brand-beige text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Not sure which service you need?</h2>
          <p className="text-brand-black/60 mb-12 text-lg">
            Book a free consultation with our experts. We'll help you define your project scope and choose the best approach.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brand-black text-brand-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-taupe transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
