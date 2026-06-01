"use client";

import { motion } from "framer-motion";
import { FileText, Upload, CreditCard, Users, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Application",
    description: "Fill out the online application form with your personal details.",
  },
  {
    icon: Upload,
    title: "Upload Documents",
    description: "Provide ID Proof, Address Proof, and a Passport Size Photo.",
  },
  {
    icon: CreditCard,
    title: "Pay Contribution",
    description: "Pay the required membership fee based on your chosen tier.",
  },
  {
    icon: Users,
    title: "Committee Review",
    description: "Our executive committee will review your application within 7 days.",
  },
  {
    icon: CheckCircle,
    title: "Approval & ID",
    description: "Receive your official Membership ID and welcome kit.",
  },
];

export default function MembershipProcess() {
  return (
    <section className="py-10 md:py-12 bg-white">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 max-w-[1200px]">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">How it Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Membership Process</h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gray-200"></div>

          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step Circle */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-gray-100 flex items-center justify-center mb-6 shadow-sm group-hover:border-secondary transition-colors duration-300 relative">
                  <step.icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors" />
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center border-2 border-white shadow-md">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-bold text-primary text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{step.description}</p>
                
                {/* Vertical Line for Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-12 bg-gray-200 my-4"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
