"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function MembershipHero() {
  return (
    <section className="bg-primary pt-32 pb-16 relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full fill-current text-white">
          <polygon points="0,100 100,0 100,100" />
        </svg>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent font-bold text-xs uppercase tracking-wider rounded-full mb-6 border border-accent/30">
              Join Hands. Build Community. Create Impact.
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Become a Member
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              At Vapi Punjabi Charitable Foundation, membership is more than a title — it is a commitment to service, unity, and collective growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#apply-form" 
                className="flex items-center justify-center gap-2 bg-accent hover:bg-yellow-500 text-primary px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-accent/20 transform hover:-translate-y-1"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[450px]">
              <div className="absolute inset-0 bg-primary/20 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1000" 
                alt="Community Gathering" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-bold text-gray-800">1,245+ Members</p>
                <p className="text-xs text-gray-500">Growing community</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
