"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function MembershipCTA() {
  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 max-w-[1200px]">
        
        <div className="relative bg-primary rounded-3xl overflow-hidden shadow-2xl p-10 md:p-16 text-center text-white">
          {/* Subtle Foundation Branding Background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-[120%] h-[120%] -rotate-12">
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="4" fill="none" />
              <path d="M 50 10 L 50 90 M 10 50 L 90 50" stroke="white" strokeWidth="2" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Become a Member Today</h2>
            <p className="text-blue-100 text-lg mb-10">
              Join a growing community dedicated to service, unity, and positive impact. Take the first step towards making a meaningful difference.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#apply-form" 
                className="flex items-center justify-center gap-2 bg-accent hover:bg-yellow-500 text-primary px-8 py-4 rounded-full font-bold transition-all shadow-lg transform hover:-translate-y-1"
              >
                Apply for Membership <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all border border-white/20 transform hover:-translate-y-1"
              >
                <Download className="w-5 h-5" /> Download Form
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
