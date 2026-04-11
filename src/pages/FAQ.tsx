import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';
import { cn } from '../lib/utils';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Support</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Frequently Asked <span className="italic text-brand-taupe">Questions</span>.
            </h1>
            <p className="text-xl text-brand-black/60 leading-relaxed">
              Find answers to common questions about our services, process, and how we work with our clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="border-b border-brand-black/5"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full py-8 flex items-center justify-between text-left group"
              >
                <h3 className={cn(
                  "text-xl md:text-2xl font-serif transition-colors",
                  activeIndex === index ? "text-brand-taupe" : "text-brand-black group-hover:text-brand-taupe"
                )}>
                  {faq.question}
                </h3>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                  activeIndex === index ? "bg-brand-black text-brand-white rotate-180" : "bg-brand-beige text-brand-black"
                )}>
                  {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-brand-black/60 leading-relaxed text-lg">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-32 py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif mb-6">Still have questions?</h2>
          <p className="text-brand-black/60 mb-10">
            We're here to help. Send us a message and we'll get back to you as soon as possible.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-brand-black text-brand-white px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-taupe transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>
    </div>
  );
}
