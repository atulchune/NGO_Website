"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const categories = [
  {
    name: "Annual Membership",
    description: "Ideal for individuals looking to start their journey of service with the Foundation.",
    price: "₹1,100",
    frequency: "/ year",
    benefits: [
      "Valid for one year",
      "Active participation in events",
      "Annual renewal required",
      "Access to community groups"
    ],
    recommended: false,
  },
  {
    name: "Lifetime Membership",
    description: "For dedicated members committing to lifelong service and community support.",
    price: "₹11,000",
    frequency: "one-time",
    benefits: [
      "One-time contribution",
      "Lifetime recognition & ID",
      "Long-term association",
      "Voting rights in AGMs"
    ],
    recommended: true,
  },
  {
    name: "Family Membership",
    description: "A comprehensive plan covering immediate family members under one umbrella.",
    price: "₹21,000",
    frequency: "one-time",
    benefits: [
      "Covers up to 4 family members",
      "Encourages family participation",
      "Combined recognition",
      "Priority seating at events"
    ],
    recommended: false,
  },
  {
    name: "Patron Membership",
    description: "For esteemed supporters wishing to make a significant impact.",
    price: "₹51,000",
    frequency: "one-time",
    benefits: [
      "Premium supporter status",
      "Special plaque of recognition",
      "Priority invitations to VIP events",
      "Name etched on Patron Wall"
    ],
    recommended: false,
  }
];

export default function MembershipCategories() {
  return (
    <section className="py-10 md:py-12 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 inset-x-0 h-64 bg-primary"></div>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 max-w-[1400px] relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-bold text-sm tracking-wider uppercase mb-2 block">Membership Tiers</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Choose Your Level of Impact</h2>
          <p className="text-blue-100 mt-4 text-lg">
            Find the membership category that best aligns with your commitment to the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-3xl overflow-hidden flex flex-col relative transition-transform hover:-translate-y-2 ${
                category.recommended 
                  ? "ring-4 ring-accent shadow-2xl scale-105 z-10" 
                  : "border border-gray-100 shadow-lg"
              }`}
            >
              {category.recommended && (
                <div className="bg-accent text-primary text-xs font-bold uppercase tracking-wider py-1.5 text-center flex items-center justify-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-primary" /> Most Popular
                </div>
              )}
              
              <div className="p-8 border-b border-gray-100 flex-1">
                <h3 className="text-2xl font-bold text-primary mb-2">{category.name}</h3>
                <p className="text-gray-500 text-sm mb-6 min-h-[40px]">{category.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">{category.price}</span>
                  <span className="text-gray-500 font-medium"> {category.frequency}</span>
                </div>

                <a 
                  href="#apply-form" 
                  className={`block w-full py-3 px-4 rounded-full text-center font-bold transition-colors ${
                    category.recommended 
                      ? "bg-primary text-white hover:bg-blue-900 shadow-md" 
                      : "bg-blue-50 text-secondary hover:bg-blue-100"
                  }`}
                >
                  Apply Now
                </a>
              </div>

              <div className="p-8 bg-gray-50 flex-1">
                <p className="text-sm font-bold text-primary mb-4 uppercase tracking-wider">Plan Benefits</p>
                <ul className="space-y-4">
                  {category.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="w-5 h-5 text-green-500 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
