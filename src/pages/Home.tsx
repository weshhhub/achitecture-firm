import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICES, PROJECTS, TESTIMONIALS } from '../constants';
import Hero from '../components/Hero';
import { cn } from '../lib/utils';

export default function Home() {
  return (
    <div className="bg-brand-white">
      <Hero />

      {/* Trust Statement / Intro */}
      <section className="py-24 px-6 border-b border-brand-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
              We believe that great design is a balance of <span className="italic">art</span> and <span className="italic">science</span>.
            </h2>
          </div>
          <div className="space-y-6 text-brand-black/70 leading-relaxed">
            <p>
              Visuals by Waweru is a multidisciplinary design firm based in Nairobi, Kenya. We specialize in creating spaces that are not only visually stunning but also highly functional and sustainable.
            </p>
            <p>
              Whether it's a private residence, a commercial hub, or a detailed 3D visualization for a real estate project, we bring the same level of passion and precision to every task.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-brand-black font-bold uppercase tracking-widest text-xs border-b-2 border-brand-black pb-1 hover:text-brand-taupe hover:border-brand-taupe transition-colors">
              Learn More About Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 bg-brand-beige">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-serif">Comprehensive Design Services</h2>
            </div>
            <Link to="/services" className="text-brand-black font-bold uppercase tracking-widest text-xs flex items-center gap-2 group">
              View All Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-brand-white p-10 rounded-2xl border border-brand-black/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-14 h-14 bg-brand-beige rounded-xl flex items-center justify-center mb-8 group-hover:bg-brand-black group-hover:text-brand-white transition-colors">
                  {/* Icon mapping would go here, using a placeholder for now */}
                  <div className="w-6 h-6 border-2 border-current rounded-sm" />
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-brand-black/60 text-sm mb-8 leading-relaxed">
                  {service.shortDescription}
                </p>
                <ul className="space-y-3 mb-10">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs uppercase tracking-wider font-medium text-brand-black/80">
                      <CheckCircle2 size={14} className="text-brand-taupe" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.id}`}
                  className="inline-flex items-center gap-2 text-brand-black font-bold uppercase tracking-widest text-[10px] group-hover:text-brand-taupe transition-colors"
                >
                  Explore Service <ArrowRight size={12} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Our Work</span>
              <h2 className="text-4xl md:text-5xl font-serif">Featured Projects</h2>
            </div>
            <Link to="/portfolio" className="text-brand-black font-bold uppercase tracking-widest text-xs flex items-center gap-2 group">
              View Full Portfolio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {PROJECTS.slice(0, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3]"
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
                  <Link
                    to={`/portfolio/${project.id}`}
                    className="inline-flex items-center gap-2 text-brand-white font-bold uppercase tracking-widest text-[10px] hover:text-brand-taupe transition-colors"
                  >
                    View Project Details <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visualization Reel Section */}
      <section className="py-24 px-6 bg-brand-black text-brand-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Immersive Experience</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Cinematic Walkthroughs</h2>
              <p className="text-brand-white/60 text-lg mb-10 leading-relaxed">
                Experience your project in motion. Our 3D visualization walkthroughs provide a cinematic tour of your future space, capturing every detail of light, material, and atmosphere.
              </p>
              <Link
                to="/services/3d-visualization"
                className="inline-flex items-center gap-3 bg-brand-white text-brand-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-taupe hover:text-brand-white transition-all duration-300"
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-video border border-brand-white/10"
            >
              <video
                src="https://player.vimeo.com/external/459389137.sd.mp4?s=91239327aa0d050491a4a6d592076ee432f529f7&profile_id=164&oauth2_token_id=57447761"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-black/20" />
              <div className="absolute top-6 right-6 bg-brand-taupe/80 backdrop-blur-sm px-3 py-1 rounded text-[8px] uppercase tracking-widest font-bold">
                4K Visualization
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-brand-black text-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000"
                alt="Design Process"
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-taupe p-12 rounded-2xl hidden md:block">
              <span className="text-5xl font-serif block mb-2">10+</span>
              <span className="text-xs uppercase tracking-widest font-bold opacity-80">Years of Experience</span>
            </div>
          </div>
          <div>
            <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Why Visuals by Waweru</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">Excellence in every detail, from concept to reality.</h2>
            <div className="space-y-8">
              {[
                { title: 'Professional & Trustworthy', desc: 'We maintain the highest standards of integrity and professionalism in every project.' },
                { title: 'Visual Excellence', desc: 'Our 3D visualizations provide a photorealistic preview of your future space.' },
                { title: 'Client-Centric Approach', desc: 'We listen to your needs and translate them into functional, beautiful designs.' }
              ].map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full border border-brand-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="text-brand-taupe" size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                    <p className="text-brand-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-brand-beige">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-serif">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-brand-white p-10 rounded-3xl border border-brand-black/5">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-brand-taupe">★</span>
                  ))}
                </div>
                <p className="text-brand-black/70 italic mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-beige rounded-full flex items-center justify-center font-serif text-xl">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider">{testimonial.name}</h4>
                    <p className="text-xs text-brand-taupe uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-brand-black text-brand-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-taupe/10 skew-x-12 translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif mb-10">Ready to start your next project?</h2>
          <p className="text-brand-white/60 mb-12 text-lg">
            Let's collaborate to create something extraordinary. Whether it's a new build, a renovation, or a 3D visualization, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/quote"
              className="bg-brand-white text-brand-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-taupe hover:text-brand-white transition-all duration-300"
            >
              Build Your Quote
            </Link>
            <a
              href="https://wa.me/254792617164"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-brand-white/30 text-brand-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
