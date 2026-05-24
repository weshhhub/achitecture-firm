import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  MapPin, 
  Maximize, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Plus,
  Calculator,
  Rocket
} from 'lucide-react';
import { PROJECTS } from '../constants';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="pt-32 pb-24 bg-brand-white">
      {/* Hero Section */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-brand-taupe font-bold uppercase tracking-widest text-[10px] mb-8 hover:text-brand-black transition-colors">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
                {project.category} • {project.type}
              </span>
              <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">{project.title}</h1>
              <div className="flex flex-wrap gap-8 text-sm text-brand-black/60">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-brand-taupe" />
                  {project.location}
                </div>
                {project.size && (
                  <div className="flex items-center gap-2">
                    <Maximize size={16} className="text-brand-taupe" />
                    {project.size}
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-brand-taupe" />
                  {project.year}
                </div>
                {project.timeline && (
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-brand-taupe" />
                    {project.timeline}
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-brand-black/70 leading-relaxed text-lg lg:pb-2"
            >
              {project.description}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[3rem] overflow-hidden aspect-[21/9] shadow-2xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-20">
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="text-3xl font-serif mb-6 border-b border-brand-black/5 pb-4">Client Brief</h2>
              <p className="text-brand-black/70 leading-relaxed text-lg">
                {project.clientBrief}
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-8 border-b border-brand-black/5 pb-4">Scope of Work</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.scopeOfWork.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-brand-beige rounded-2xl">
                    <div className="w-8 h-8 rounded-full bg-brand-black text-brand-white flex items-center justify-center text-xs font-bold shrink-0">
                      {index + 1}
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif mb-8 border-b border-brand-black/5 pb-4">Design Highlights</h2>
              <ul className="space-y-6">
                {project.designHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="text-brand-taupe shrink-0 mt-1" size={24} />
                    <span className="text-lg text-brand-black/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-12">
            <div className="bg-brand-beige p-10 rounded-[2.5rem] border border-brand-black/5">
              <h3 className="text-xl font-serif mb-6">Services Included</h3>
              <ul className="space-y-4">
                {project.servicesIncluded.map(service => (
                  <li key={service} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-black/60">
                    <div className="w-2 h-2 bg-brand-taupe rounded-full" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-black text-brand-white p-10 rounded-[2.5rem] shadow-2xl">
              <h3 className="text-2xl font-serif mb-6">Start a Similar Project</h3>
              <p className="text-brand-white/60 text-sm mb-10 leading-relaxed">
                Inspired by this project? Let's discuss how we can bring a similar level of excellence to your vision.
              </p>
              <div className="space-y-4">
                <Link
                  to="/quote"
                  className="w-full bg-brand-white text-brand-black py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-taupe hover:text-brand-white transition-all"
                >
                  <Calculator size={16} /> Get Instant Quote
                </Link>
                <Link
                  to="/contact"
                  className="w-full border border-brand-white/20 text-brand-white py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-white/10 transition-all"
                >
                  <Rocket size={16} /> Start Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 mb-24 bg-brand-beige py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Visual Story</span>
            <h2 className="text-4xl md:text-5xl font-serif">Project Gallery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.gallery.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-3xl overflow-hidden aspect-square shadow-xl group"
              >
                <img
                  src={img}
                  alt={`${project.title} Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto bg-brand-black text-brand-white p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-brand-taupe/5 skew-y-6 translate-y-1/2" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to build your vision?</h2>
            <p className="text-brand-white/60 mb-12 text-lg max-w-2xl mx-auto">
              Whether it's a {project.type.toLowerCase()} or a large-scale commercial development, we have the expertise to deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/quote"
                className="bg-brand-white text-brand-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-taupe hover:text-brand-white transition-all duration-300"
              >
                Build Your Quote
              </Link>
              <Link
                to="/contact"
                className="border border-brand-white/30 text-brand-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
