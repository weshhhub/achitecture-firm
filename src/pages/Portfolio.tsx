import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Filter } from 'lucide-react';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';

const CATEGORIES = ['All', 'Architecture', 'Interior', 'Visualization'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row justify-between items-end gap-8"
          >
            <div className="max-w-2xl">
              <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Portfolio</span>
              <h1 className="text-5xl md:text-7xl font-serif mb-6">Our Work</h1>
              <p className="text-xl text-brand-black/60 leading-relaxed">
                A selection of our most impactful projects across architecture, interior design, and visualization.
              </p>
            </div>
            
            {/* Filter */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-6 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all duration-300",
                    activeCategory === category
                      ? "bg-brand-black text-brand-white"
                      : "bg-brand-beige text-brand-black hover:bg-brand-black/10"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-brand-beige"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <span className="text-brand-taupe text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
                      {project.category} • {project.location}
                    </span>
                    <h3 className="text-brand-white text-3xl font-serif mb-4">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tools.map(tool => (
                        <span key={tool} className="text-[8px] text-brand-white/60 uppercase tracking-widest border border-brand-white/20 px-2 py-1 rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <button className="inline-flex items-center gap-2 text-brand-white font-bold uppercase tracking-widest text-[10px] hover:text-brand-taupe transition-colors">
                      View Project Details <ArrowRight size={12} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-brand-black/40 font-serif text-2xl italic">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-32 py-24 px-6 bg-brand-black text-brand-white text-center rounded-t-[4rem]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Have a project in mind?</h2>
          <p className="text-brand-white/60 mb-12 text-lg">
            Let's discuss how we can bring your vision to life with our expert design and visualization services.
          </p>
          <button className="bg-brand-white text-brand-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-taupe hover:text-brand-white transition-all duration-300">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
