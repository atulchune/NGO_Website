"use client";

import { motion } from "framer-motion";
import { Users, Heart, ArrowRight } from "lucide-react";

export function MembershipCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full mix-blend-screen filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 lg:p-16 border border-white/20 shadow-2xl flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
            <Users className="w-10 h-10 text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Become a Member Today</h2>
            <p className="text-blue-100 text-lg md:text-xl max-w-2xl">
              Join hands with the Vapi Punjabi Charitable Foundation. Together we can make a bigger impact in society through selfless service.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <a href="/membership" className="bg-white text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
              Apply Now <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DonationCTA() {
  return (
    <section className="py-10 md:py-12 bg-gradient-to-br from-orange-50 to-amber-100/50">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-orange-100 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 opacity-5">
            <Heart className="w-96 h-96 text-orange-900" />
          </div>
          <div className="relative z-10 flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-secondary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              <Heart className="w-4 h-4" fill="currentColor" />
              Support Our Cause
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Your Contribution Changes Lives</h2>
            <p className="text-slate-600 text-lg max-w-2xl mb-8">
              Every donation, no matter how small, helps us provide education, medical aid, and relief to those in need. 100% of your donation goes directly to our charitable projects.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="/donate" className="bg-secondary text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-orange-500/30 hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                Donate Now <Heart className="w-5 h-5" />
              </a>
              <a href="/projects" className="bg-slate-100 text-slate-800 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
                View Our Projects
              </a>
            </div>
          </div>
          <div className="relative z-10 w-full md:w-1/3 max-w-xs shrink-0">
             <div className="bg-slate-900 rounded-2xl p-6 text-white text-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
               <h4 className="text-xl font-bold mb-2 text-orange-400">Scan to Donate</h4>
               <div className="bg-white p-4 rounded-xl mb-4 aspect-square flex items-center justify-center">
                 <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=vpcf@upi&pn=VapiPunjabiFoundation" alt="UPI QR" className="w-full h-full object-contain" />
               </div>
               <p className="font-mono text-sm opacity-80">UPI: vpcf@sbi</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
