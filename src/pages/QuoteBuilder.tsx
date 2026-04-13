import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Home, 
  Layout as LayoutIcon, 
  Box, 
  Trees, 
  ArrowRight, 
  ArrowLeft, 
  Plus, 
  Check, 
  Calculator,
  Save,
  Rocket,
  X
} from 'lucide-react';
import { QUOTE_SERVICES, ADDONS } from '../constants';
import { QuoteService, SubBranch, Addon } from '../types';
import { cn } from '../lib/utils';

const ICON_MAP: Record<string, any> = {
  Home,
  Layout: LayoutIcon,
  Box,
  Trees
};

export default function QuoteBuilder() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<QuoteService | null>(null);
  const [selectedSubBranch, setSelectedSubBranch] = useState<SubBranch | null>(null);
  const [area, setArea] = useState<number>(100);
  const [selectedAddons, setSelectedAddons] = useState<Addon[]>([]);
  const [showAddonModal, setShowAddonModal] = useState(false);

  const handleServiceSelect = (service: QuoteService) => {
    setSelectedService(service);
    setSelectedSubBranch(null);
    setStep(2);
  };

  const handleSubBranchSelect = (subBranch: SubBranch) => {
    setSelectedSubBranch(subBranch);
    if (subBranch.ratePerSqm) {
      setStep(3); // Go to area input
    } else {
      // If it's a flat rate, skip area or set area to 1?
      // Actually, visualization might still want area for some things, but user said "where applicable"
      setShowAddonModal(true);
      setStep(4);
    }
  };

  const handleAreaSubmit = () => {
    setShowAddonModal(true);
    setStep(4);
  };

  const toggleAddon = (addon: Addon) => {
    setSelectedAddons(prev => 
      prev.find(a => a.id === addon.id) 
        ? prev.filter(a => a.id !== addon.id)
        : [...prev, addon]
    );
  };

  const handleSave = () => {
    alert('Quote saved successfully! You can access it from your account or via the link sent to your email.');
  };

  const handleStartProject = () => {
    alert('Project request submitted! Our team will contact you within 24 hours to discuss the next steps.');
  };

  const calculateTotal = useMemo(() => {
    if (!selectedSubBranch) return 0;
    
    let total = 0;
    
    // Base price
    if (selectedSubBranch.ratePerSqm) {
      total += selectedSubBranch.ratePerSqm * area;
    } else if (selectedSubBranch.flatRate) {
      total += selectedSubBranch.flatRate;
    }

    // Addons
    selectedAddons.forEach(addon => {
      if (addon.ratePerSqm) {
        total += addon.ratePerSqm * area;
      } else if (addon.flatRate) {
        total += addon.flatRate;
      }
    });

    return total;
  }, [selectedSubBranch, area, selectedAddons]);

  const reset = () => {
    setStep(1);
    setSelectedService(null);
    setSelectedSubBranch(null);
    setArea(100);
    setSelectedAddons([]);
  };

  return (
    <div className="pt-32 pb-24 px-6 bg-brand-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Interactive Tool</span>
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Quote Builder</h1>
          <p className="text-brand-black/60 max-w-2xl mx-auto">
            Configure your project services and receive a live estimate tailored to your specific requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Builder Area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl font-serif">1. Select Primary Service</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {QUOTE_SERVICES.map((service) => {
                      const Icon = ICON_MAP[service.icon];
                      return (
                        <button
                          key={service.id}
                          onClick={() => handleServiceSelect(service)}
                          className={cn(
                            "flex items-center gap-6 p-8 rounded-2xl border transition-all duration-300 text-left group",
                            selectedService?.id === service.id 
                              ? "border-brand-black bg-brand-black text-brand-white" 
                              : "border-brand-black/5 bg-brand-beige hover:border-brand-taupe"
                          )}
                        >
                          <div className={cn(
                            "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                            selectedService?.id === service.id ? "bg-brand-white text-brand-black" : "bg-brand-white text-brand-taupe"
                          )}>
                            <Icon size={24} />
                          </div>
                          <div>
                            <h3 className="font-serif text-lg">{service.name}</h3>
                            <p className={cn(
                              "text-xs uppercase tracking-widest mt-1",
                              selectedService?.id === service.id ? "text-brand-white/60" : "text-brand-black/40"
                            )}>
                              {service.subBranches.length} Options
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 2 && selectedService && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <button onClick={() => setStep(1)} className="p-2 hover:bg-brand-beige rounded-full transition-colors">
                      <ArrowLeft size={20} />
                    </button>
                    <h2 className="text-2xl font-serif">2. Select Project Type</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {selectedService.subBranches.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => handleSubBranchSelect(sub)}
                        className={cn(
                          "flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 text-left",
                          selectedSubBranch?.id === sub.id 
                            ? "border-brand-black bg-brand-black text-brand-white" 
                            : "border-brand-black/5 bg-brand-beige hover:border-brand-taupe"
                        )}
                      >
                        <span className="font-serif text-lg">{sub.name}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-sm opacity-60">
                            {sub.ratePerSqm ? `$${sub.ratePerSqm}/sqm` : `$${sub.flatRate} Flat`}
                          </span>
                          <ArrowRight size={18} />
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && selectedSubBranch && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <button onClick={() => setStep(2)} className="p-2 hover:bg-brand-beige rounded-full transition-colors">
                      <ArrowLeft size={20} />
                    </button>
                    <h2 className="text-2xl font-serif">3. Project Size</h2>
                  </div>
                  <div className="bg-brand-beige p-10 rounded-3xl border border-brand-black/5">
                    <label className="block text-xs uppercase tracking-[0.2em] font-bold text-brand-black/40 mb-6">
                      Total Area (Square Metres)
                    </label>
                    <div className="flex items-center gap-8">
                      <input 
                        type="range" 
                        min="20" 
                        max="2000" 
                        step="10"
                        value={area}
                        onChange={(e) => setArea(parseInt(e.target.value))}
                        className="flex-1 accent-brand-black"
                      />
                      <div className="w-32">
                        <input 
                          type="number" 
                          value={area}
                          onChange={(e) => setArea(parseInt(e.target.value) || 0)}
                          className="w-full bg-brand-white border border-brand-black/10 rounded-xl px-4 py-3 text-center font-bold text-xl outline-none focus:border-brand-taupe"
                        />
                      </div>
                    </div>
                    <div className="mt-10 flex justify-end">
                      <button 
                        onClick={handleAreaSubmit}
                        className="bg-brand-black text-brand-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-brand-taupe transition-all"
                      >
                        Continue to Add-ons <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-serif">4. Review & Finalize</h2>
                    <button 
                      onClick={reset}
                      className="text-xs uppercase tracking-widest font-bold text-brand-taupe hover:text-brand-black transition-colors"
                    >
                      Start Over
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-6 bg-brand-beige rounded-2xl border border-brand-black/5 flex items-center justify-between">
                      <div>
                        <h4 className="font-serif text-lg">{selectedService?.name}</h4>
                        <p className="text-sm text-brand-black/40">{selectedSubBranch?.name} • {area} sqm</p>
                      </div>
                      <span className="font-bold">
                        ${selectedSubBranch?.ratePerSqm ? selectedSubBranch.ratePerSqm * area : selectedSubBranch?.flatRate}
                      </span>
                    </div>

                    {selectedAddons.map(addon => (
                      <div key={addon.id} className="p-6 bg-brand-beige rounded-2xl border border-brand-black/5 flex items-center justify-between">
                        <div>
                          <h4 className="font-serif text-lg">{addon.name}</h4>
                          <p className="text-sm text-brand-black/40">Add-on Service</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-bold">
                            ${addon.ratePerSqm ? addon.ratePerSqm * area : addon.flatRate}
                          </span>
                          <button onClick={() => toggleAddon(addon)} className="text-brand-taupe hover:text-red-500">
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    ))}

                    <button 
                      onClick={() => setShowAddonModal(true)}
                      className="w-full py-6 border-2 border-dashed border-brand-black/10 rounded-2xl flex items-center justify-center gap-3 text-brand-black/40 hover:border-brand-taupe hover:text-brand-taupe transition-all group"
                    >
                      <Plus size={20} className="group-hover:scale-110 transition-transform" />
                      <span className="font-bold uppercase tracking-widest text-xs">Add More Services</span>
                    </button>
                  </div>

                  <div className="pt-8 border-t border-brand-black/5 flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={handleSave}
                      className="flex-1 bg-brand-beige text-brand-black py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-black hover:text-brand-white transition-all"
                    >
                      <Save size={18} /> Save Quote
                    </button>
                    <button 
                      onClick={handleStartProject}
                      className="flex-1 bg-brand-black text-brand-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-brand-taupe transition-all shadow-xl shadow-brand-black/10"
                    >
                      <Rocket size={18} /> Start Project
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Live Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-brand-beige rounded-[2rem] p-8 border border-brand-black/5 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="text-brand-taupe" size={20} />
                <h3 className="font-serif text-xl">Quote Summary</h3>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex justify-between text-sm">
                  <span className="text-brand-black/40 uppercase tracking-widest font-bold text-[10px]">Primary Service</span>
                  <span className="font-medium">{selectedService?.name || '---'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-black/40 uppercase tracking-widest font-bold text-[10px]">Type</span>
                  <span className="font-medium">{selectedSubBranch?.name || '---'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-brand-black/40 uppercase tracking-widest font-bold text-[10px]">Area</span>
                  <span className="font-medium">{area} sqm</span>
                </div>
                
                {selectedAddons.length > 0 && (
                  <div className="pt-4 border-t border-brand-black/5">
                    <span className="text-brand-black/40 uppercase tracking-widest font-bold text-[10px] block mb-3">Add-ons</span>
                    <div className="space-y-2">
                      {selectedAddons.map(addon => (
                        <div key={addon.id} className="flex justify-between text-xs">
                          <span>{addon.name}</span>
                          <span>${addon.ratePerSqm ? addon.ratePerSqm * area : addon.flatRate}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-brand-black/10">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-brand-black/40 uppercase tracking-widest font-bold text-[10px] block mb-1">Estimated Total</span>
                    <span className="text-4xl font-serif">${calculateTotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add-on Modal */}
      <AnimatePresence>
        {showAddonModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowAddonModal(false)}
              className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-brand-white w-full max-w-2xl rounded-[2.5rem] p-10 md:p-16 shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-beige/50 skew-x-12 translate-x-1/4 -z-10" />
              
              <div className="text-center mb-12">
                <span className="text-brand-taupe text-xs uppercase tracking-[0.3em] font-bold mb-4 block underline decoration-2 underline-offset-8">Enhance Your Project</span>
                <h2 className="text-3xl md:text-4xl font-serif">Recommended Add-ons</h2>
                <p className="text-brand-black/60 mt-4 text-sm">
                  Complement your primary service with these essential design layers.
                </p>
              </div>

              <div className="space-y-4 mb-12">
                {ADDONS.map((addon) => {
                  const isSelected = selectedAddons.find(a => a.id === addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon)}
                      className={cn(
                        "w-full flex items-center justify-between p-6 rounded-2xl border transition-all duration-300 text-left",
                        isSelected 
                          ? "border-brand-black bg-brand-black text-brand-white" 
                          : "border-brand-black/5 bg-brand-beige hover:border-brand-taupe"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-6 h-6 rounded-full border flex items-center justify-center",
                          isSelected ? "border-brand-white bg-brand-white text-brand-black" : "border-brand-black/20"
                        )}>
                          {isSelected && <Check size={14} />}
                        </div>
                        <div>
                          <span className="font-serif text-lg block">{addon.name}</span>
                          <span className={cn(
                            "text-[10px] uppercase tracking-widest font-bold",
                            isSelected ? "text-brand-white/40" : "text-brand-black/40"
                          )}>
                            {addon.ratePerSqm ? `+$${addon.ratePerSqm}/sqm` : `+$${addon.flatRate} Flat`}
                          </span>
                        </div>
                      </div>
                      <Plus size={20} className={cn(isSelected && "rotate-45 transition-transform")} />
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-center">
                <button 
                  onClick={() => setShowAddonModal(false)}
                  className="bg-brand-black text-brand-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-brand-taupe transition-all shadow-xl"
                >
                  View Final Quote
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
