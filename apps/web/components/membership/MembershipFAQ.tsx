"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who can become a member?",
    answer: "Any individual who believes in the values and objectives of the Vapi Punjabi Charitable Foundation and is willing to contribute to community welfare can apply for membership."
  },
  {
    question: "How long does approval take?",
    answer: "Once all required documents and the contribution are submitted, the executive committee typically reviews and approves applications within 7 to 10 working days."
  },
  {
    question: "Can I upgrade membership later?",
    answer: "Yes, you can upgrade from an Annual to a Lifetime or Patron membership at any time by paying the differential contribution amount."
  },
  {
    question: "How do renewals work?",
    answer: "Annual memberships must be renewed every year. You will receive an email and SMS reminder 30 days prior to your membership expiration date."
  },
  {
    question: "What documents are required?",
    answer: "You will need to provide a valid Government ID proof (Aadhar/PAN/Passport), an Address proof, and a recent passport-size photograph during the application process."
  }
];

export default function MembershipFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 md:py-12 bg-slate-50">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 max-w-[800px]">
        
        <div className="text-center mb-12">
          <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between focus:outline-none text-left"
              >
                <span className="font-bold text-primary">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-secondary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-5 text-gray-600 text-sm leading-relaxed"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
