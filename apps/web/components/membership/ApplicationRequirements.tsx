"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const requirements = [
  "Government ID Proof (Aadhar/PAN/Passport)",
  "Address Proof (Electricity Bill/Voter ID)",
  "Recent Passport Size Photograph",
  "Valid Contact Information (Email/Phone)",
];

export default function ApplicationRequirements() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
        <div className="w-10 h-10 bg-blue-50 text-secondary rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-primary">Required Documents</h3>
      </div>
      
      <ul className="space-y-4">
        {requirements.map((req, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-3"
          >
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-gray-700 text-sm font-medium">{req}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
