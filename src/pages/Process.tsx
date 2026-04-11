import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Coffee, Pencil, Box, CheckCircle, Truck } from 'lucide-react';

const STEPS = [
  {
    icon: MessageSquare,
    title: 'Inquiry',
    desc: 'You reach out with your project idea. We discuss your goals, budget, and timeline.',
  },
  {
    icon: Coffee,
    title: 'Consultation',
    desc: 'A deep dive into the project requirements. We define the scope and provide a formal quote.',
  },
  {
    icon: Pencil,
    title: 'Concept Design',
    desc: 'We create initial sketches, mood boards, and massing models to explore the design direction.',
  },
  {
    icon: Box,
    title: 'Design Development',
    desc: 'Refining the chosen concept into detailed plans, sections, and 3D models.',
  },
  {
    icon: CheckCircle,
    title: 'Revisions',
    desc: 'We present the design and incorporate your feedback to ensure perfection.',
  },
  {
    icon: Truck,
    title: 'Final Delivery',
    desc: 'Handover of all final drawings, renders, and documentation ready for implementation.',
  },
];

export default function Process() {
  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Our Process</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              How we bring your <span className="italic text-brand-taupe">vision</span> to life.
            </h1>
            <p className="text-xl text-brand-black/60 leading-relaxed">
              Our structured approach ensures clarity, efficiency, and excellence at every stage of the design journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-brand-black/5 -translate-y-1/2 z-0" />
            
            {STEPS.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 group"
              >
                <div className="w-20 h-20 bg-brand-white border border-brand-black/5 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-brand-black group-hover:text-brand-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:-translate-y-2">
                  <step.icon size={32} />
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-brand-taupe font-serif text-2xl italic">0{index + 1}</span>
                  <h3 className="text-2xl font-serif">{step.title}</h3>
                </div>
                <p className="text-brand-black/60 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-32 py-24 px-6 bg-brand-black text-brand-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Ready to start step one?</h2>
          <p className="text-brand-white/60 mb-12 text-lg">
            Every great project begins with a simple conversation. Let's discuss your ideas today.
          </p>
          <button className="bg-brand-white text-brand-black px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-taupe hover:text-brand-white transition-all duration-300">
            Book Your Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
