"use client";

import { motion } from "framer-motion";
import { HandHeart, Users2, CalendarDays, Bell, Network, Scale } from "lucide-react";

const reasons = [
  { icon: HandHeart, title: "Contribute to social initiatives" },
  { icon: Users2, title: "Network with community leaders" },
  { icon: CalendarDays, title: "Priority access to events" },
  { icon: Bell, title: "Regular foundation updates" },
  { icon: Network, title: "Expand your social circle" },
  { icon: Scale, title: "Voting rights in AGM" },
];

export default function WhyBecomeMember() {
  return (
    <section className="py-10 md:py-12 bg-slate-50 relative">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-4">Why Become a Member?</h2>
          <p className="text-slate-600 text-lg">
            Membership is more than just a donation; it's a commitment to uplifting our society.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary shrink-0">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-slate-700">{reason.title}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
