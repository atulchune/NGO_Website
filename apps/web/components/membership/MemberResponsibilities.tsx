"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const responsibilities = [
  "Uphold Foundation values and objectives",
  "Support and promote community initiatives",
  "Participate actively in scheduled programs",
  "Maintain respectful engagement with peers",
  "Represent the Foundation responsibly in public",
];

export default function MemberResponsibilities() {
  return (
    <div className="bg-primary rounded-2xl shadow-xl p-8 text-white relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4 relative z-10">
        <div className="w-10 h-10 bg-white/10 text-accent rounded-lg flex items-center justify-center">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-bold">Member Responsibilities</h3>
      </div>
      
      <ul className="space-y-4 relative z-10">
        {responsibilities.map((res, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0"></div>
            <span className="text-blue-50 text-sm font-medium">{res}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
