import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-brand-taupe font-bold uppercase tracking-widest text-[10px] mb-8 hover:text-brand-black transition-colors">
            <ArrowLeft size={14} /> Back to Services
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">{service.title}</h1>
            <p className="text-xl text-brand-black/60 leading-relaxed">
              {service.fullDescription}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-[3rem] overflow-hidden aspect-[21/9] mb-24 shadow-2xl relative group">
            {service.videoUrl ? (
              <video
                src={service.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
            {service.videoUrl && (
              <div className="absolute bottom-8 left-8 bg-brand-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-brand-white/20">
                <span className="text-brand-white text-[10px] uppercase tracking-widest font-bold">Visualization Reel</span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-serif mb-10">What's Included</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h4 className="font-bold uppercase tracking-widest text-[10px] text-brand-taupe border-b border-brand-black/5 pb-2">Features</h4>
                  <ul className="space-y-4">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-brand-black/80">
                        <CheckCircle2 size={18} className="text-brand-taupe shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="font-bold uppercase tracking-widest text-[10px] text-brand-taupe border-b border-brand-black/5 pb-2">Deliverables</h4>
                  <ul className="space-y-4">
                    {service.deliverables.map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-brand-black/80">
                        <div className="w-1.5 h-1.5 bg-brand-taupe rounded-full mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-brand-beige p-12 rounded-[2.5rem] flex flex-col justify-center">
              <h3 className="text-3xl font-serif mb-6">Ready to start?</h3>
              <p className="text-brand-black/60 mb-10 leading-relaxed">
                Every project is unique. Contact us today to discuss your specific requirements and get a tailored quote for our {service.title} services.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 bg-brand-black text-brand-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-taupe transition-colors"
              >
                Get a Quote <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
