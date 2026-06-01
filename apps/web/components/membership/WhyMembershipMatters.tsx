"use client";

import { motion } from "framer-motion";
import { Users, ShieldCheck, Megaphone, Target, HeartHandshake, Building2 } from "lucide-react";

const benefits = [
  { icon: Users, title: "Participate in community initiatives" },
  { icon: Target, title: "Support program execution" },
  { icon: Megaphone, title: "Planning and decision participation" },
  { icon: ShieldCheck, title: "Represent the Foundation" },
  { icon: HeartHandshake, title: "Promote unity and service" },
  { icon: Building2, title: "Strengthen organizational stability" },
];

export default function WhyMembershipMatters() {
  return (
    <section className="py-10 md:py-12 bg-muted">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 max-w-[1200px]">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          <div className="md:col-span-5">
            <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-2 block">Our Foundation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Why Membership Matters</h2>
            <div className="w-16 h-1 bg-accent mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed">
              Membership provides individuals and families an opportunity to formally associate with the Foundation and contribute meaningfully to community development.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 shrink-0 bg-blue-50 text-secondary rounded-lg flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-sm leading-tight pt-1 group-hover:text-secondary transition-colors">
                      {benefit.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
