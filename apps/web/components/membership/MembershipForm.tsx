"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Check, Save } from "lucide-react";

export default function MembershipForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-50 p-6 sm:p-10 md:p-12 relative overflow-hidden" id="apply-form">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
      
      <div className="mb-10 relative z-10 text-center md:text-left">
        <h3 className="text-3xl font-extrabold text-primary mb-3">Membership Application</h3>
        <p className="text-slate-500 text-base">Please complete the form below to initiate your membership process.</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-12 relative z-10">
        <div className="flex justify-between mb-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex flex-col items-center relative z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                step >= i 
                  ? "bg-secondary text-white shadow-md shadow-secondary/30 scale-110" 
                  : "bg-slate-100 text-slate-400 border-2 border-white"
              }`}>
                {step > i ? <Check className="w-5 h-5" /> : i}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-5 left-5 right-5 h-1 bg-slate-100 -z-0 rounded-full overflow-hidden">
          <div 
            className="h-full bg-secondary transition-all duration-500 ease-out" 
            style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
          ></div>
        </div>
        <div className="flex justify-between px-1 hidden sm:flex">
          <span className={`text-xs font-bold transition-colors ${step >= 1 ? "text-primary" : "text-slate-400"}`}>Personal</span>
          <span className={`text-xs font-bold transition-colors ${step >= 2 ? "text-primary" : "text-slate-400"}`}>Contact</span>
          <span className={`text-xs font-bold transition-colors ${step >= 3 ? "text-primary" : "text-slate-400"}`}>Category</span>
          <span className={`text-xs font-bold transition-colors ${step >= 4 ? "text-primary" : "text-slate-400"}`}>Interests</span>
          <span className={`text-xs font-bold transition-colors ${step >= 5 ? "text-primary" : "text-slate-400"}`}>Submit</span>
        </div>
      </div>

      {/* Form Steps Container */}
      <div className="min-h-[360px] relative z-10">
        <AnimatePresence mode="wait">
          
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.3 }}>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                  <input type="text" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-slate-700" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Date of Birth <span className="text-red-500">*</span></label>
                  <input type="date" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-slate-700" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Gender <span className="text-red-500">*</span></label>
                  <select className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-slate-700 appearance-none">
                    <option value="">Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Occupation</label>
                  <input type="text" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-slate-700" placeholder="E.g. Engineer, Business Owner" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Organization Name (Optional)</label>
                  <input type="text" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-slate-700" placeholder="Where do you work?" />
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="step2" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.3 }}>
              <div className="grid md:grid-cols-2 gap-x-6 gap-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Mobile Number <span className="text-red-500">*</span></label>
                  <input type="tel" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-slate-700" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-slate-700" placeholder="you@example.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-bold text-slate-700 mb-2">Residential Address <span className="text-red-500">*</span></label>
                  <textarea rows={4} className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-slate-700 resize-none" placeholder="Enter your full residential address..."></textarea>
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="step3" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.3 }}>
              <label className="block text-base font-bold text-slate-800 mb-6">Select Membership Category <span className="text-red-500">*</span></label>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { name: "Annual", price: "₹1,100" },
                  { name: "Lifetime", price: "₹11,000" },
                  { name: "Family", price: "₹21,000" },
                  { name: "Patron", price: "₹51,000" }
                ].map((cat, i) => (
                  <label key={i} className="flex items-center p-5 border-2 border-slate-100 rounded-2xl cursor-pointer hover:border-secondary/50 transition-all has-[:checked]:border-secondary has-[:checked]:bg-blue-50/30 group">
                    <input type="radio" name="membership_type" className="w-5 h-5 text-secondary border-gray-300 focus:ring-secondary" defaultChecked={i === 1} />
                    <div className="ml-4 flex flex-col">
                      <span className="font-bold text-primary group-hover:text-secondary transition-colors">{cat.name}</span>
                      <span className="text-sm text-slate-500 font-medium">{cat.price}</span>
                    </div>
                  </label>
                ))}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="step4" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.3 }}>
              <label className="block text-base font-bold text-slate-800 mb-6">Select Volunteer Interests <span className="text-slate-400 font-normal text-sm ml-2">(Optional)</span></label>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Community Kitchen (Langar)", 
                  "Education Programs", 
                  "Medical Camps", 
                  "Cultural Events", 
                  "Administration & IT",
                  "Fundraising"
                ].map((interest, i) => (
                  <label key={i} className="flex items-center p-4 border-2 border-slate-50 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors has-[:checked]:border-secondary/30 has-[:checked]:bg-blue-50/50">
                    <input type="checkbox" className="w-5 h-5 text-secondary rounded border-gray-300 focus:ring-secondary" />
                    <span className="ml-3 text-sm font-semibold text-slate-700">{interest}</span>
                  </label>
                ))}
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="step5" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} transition={{ duration: 0.3 }}>
              <div className="bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100 mb-6">
                <h4 className="font-bold text-primary text-xl mb-3">Declaration</h4>
                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  By submitting this application, I solemnly declare that all information provided is true to the best of my knowledge.
                </p>
                <label className="flex items-start gap-4 cursor-pointer bg-white p-5 rounded-xl border border-blue-100/50 shadow-sm">
                  <input type="checkbox" className="mt-1 w-5 h-5 text-secondary rounded border-gray-300 focus:ring-secondary" />
                  <span className="text-sm md:text-base font-medium text-slate-700 leading-snug">
                    I agree to abide by the rules, values, and objectives of the Vapi Punjabi Charitable Foundation.
                  </span>
                </label>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-col-reverse sm:flex-row justify-between items-center pt-8 mt-4 border-t border-slate-100 relative z-10 gap-4">
        {step > 1 ? (
          <button onClick={prevStep} className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors">
            <ChevronLeft className="w-5 h-5" /> Back
          </button>
        ) : (
          <div className="hidden sm:block"></div>
        )}
        
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-primary bg-slate-50 hover:bg-slate-100 transition-colors">
            <Save className="w-4 h-4" /> Save Draft
          </button>
          
          {step < totalSteps ? (
            <button onClick={nextStep} className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white bg-primary hover:bg-blue-900 transition-all shadow-lg shadow-primary/20">
              Next Step <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-3.5 rounded-xl font-bold text-primary bg-accent hover:bg-yellow-500 transition-all shadow-lg shadow-accent/30 scale-105 hover:scale-110 origin-center">
              Submit Application
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
