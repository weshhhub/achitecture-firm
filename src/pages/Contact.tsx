import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageCircle, Send, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number is required'),
  projectType: z.string().min(1, 'Please select a project type'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Form data:', data);
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Contact Us</span>
            <h1 className="text-5xl md:text-7xl font-serif mb-8 leading-tight">
              Let's build something <span className="italic text-brand-taupe">extraordinary</span> together.
            </h1>
            <p className="text-xl text-brand-black/60 leading-relaxed">
              Have a question or ready to start your project? Reach out to us through any of the channels below or fill out the form.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-serif mb-8">Get in Touch</h3>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-beige rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="text-brand-black" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-taupe mb-1">Call Us</p>
                    <p className="text-lg font-medium">+254 792 617 164</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-beige rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="text-brand-black" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-taupe mb-1">Email Us</p>
                    <p className="text-lg font-medium">hello@visualsbywaweru.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-brand-beige rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-black" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-brand-taupe mb-1">Visit Us</p>
                    <p className="text-lg font-medium">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-brand-black text-brand-white rounded-3xl">
              <MessageCircle className="text-brand-taupe mb-4" size={32} />
              <h4 className="text-xl font-serif mb-4">Quick Chat</h4>
              <p className="text-brand-white/60 text-sm mb-6">Prefer WhatsApp? Chat with us directly for a faster response.</p>
              <a
                href="https://wa.me/254792617164"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-white font-bold uppercase tracking-widest text-xs border-b border-brand-white pb-1 hover:text-brand-taupe hover:border-brand-taupe transition-colors"
              >
                Open WhatsApp <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-brand-beige p-8 md:p-12 rounded-[2.5rem]">
            <h3 className="text-3xl font-serif mb-10">Send us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-black/60 ml-1">Full Name</label>
                <input
                  {...register('name')}
                  className={cn(
                    "w-full bg-brand-white border border-brand-black/5 rounded-2xl px-6 py-4 outline-none focus:border-brand-taupe transition-colors",
                    errors.name && "border-red-500"
                  )}
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-[10px] uppercase tracking-widest font-bold">{errors.name.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-black/60 ml-1">Email Address</label>
                <input
                  {...register('email')}
                  className={cn(
                    "w-full bg-brand-white border border-brand-black/5 rounded-2xl px-6 py-4 outline-none focus:border-brand-taupe transition-colors",
                    errors.email && "border-red-500"
                  )}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-[10px] uppercase tracking-widest font-bold">{errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-black/60 ml-1">Phone Number</label>
                <input
                  {...register('phone')}
                  className={cn(
                    "w-full bg-brand-white border border-brand-black/5 rounded-2xl px-6 py-4 outline-none focus:border-brand-taupe transition-colors",
                    errors.phone && "border-red-500"
                  )}
                  placeholder="+254 792 617 164"
                />
                {errors.phone && <p className="text-red-500 text-[10px] uppercase tracking-widest font-bold">{errors.phone.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-black/60 ml-1">Project Type</label>
                <select
                  {...register('projectType')}
                  className={cn(
                    "w-full bg-brand-white border border-brand-black/5 rounded-2xl px-6 py-4 outline-none focus:border-brand-taupe transition-colors appearance-none",
                    errors.projectType && "border-red-500"
                  )}
                >
                  <option value="">Select a service</option>
                  <option value="architecture">Architectural Design</option>
                  <option value="interior">Interior Design</option>
                  <option value="visualization">3D Visualization</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && <p className="text-red-500 text-[10px] uppercase tracking-widest font-bold">{errors.projectType.message}</p>}
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-brand-black/60 ml-1">Project Details</label>
                <textarea
                  {...register('message')}
                  rows={5}
                  className={cn(
                    "w-full bg-brand-white border border-brand-black/5 rounded-2xl px-6 py-4 outline-none focus:border-brand-taupe transition-colors resize-none",
                    errors.message && "border-red-500"
                  )}
                  placeholder="Tell us about your project, goals, and timeline..."
                />
                {errors.message && <p className="text-red-500 text-[10px] uppercase tracking-widest font-bold">{errors.message.message}</p>}
              </div>

              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-black text-brand-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:bg-brand-taupe transition-all duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
