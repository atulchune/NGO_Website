"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Building2, HandHeart } from "lucide-react";

const cards = [
  {
    icon: Users,
    title: "Volunteer With Us",
    description:
      "Donate your time and skills. Join our team on the ground — from medical camps to education drives — your presence makes a real difference.",
    cta: "Become a Volunteer",
    href: "/contact",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: HandHeart,
    title: "Sponsor a Project",
    description:
      "Fund a specific cause like girl-child education, physiotherapy camps, or medical emergency support for families in crisis.",
    cta: "Sponsor Now",
    href: "/donate",
    gradient: "from-orange-400 to-orange-600",
  },
  {
    icon: Building2,
    title: "CSR Partnership",
    description:
      "Partner with us through your organization's CSR initiative. We provide full transparency, impact reports, and 80G tax benefits.",
    cta: "Explore Partnership",
    href: "/csr-partnerships",
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function HowYouCanHelp() {
  return (
    <section id="how-you-can-help" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1 bg-secondary rounded"></div>
            <h3 className="text-secondary font-bold text-sm tracking-wider uppercase">
              Get Involved
            </h3>
            <div className="w-12 h-1 bg-secondary rounded"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4">
            How You Can Help
          </h2>
          <p className="text-slate-600 text-lg">
            Every contribution counts. Whether you give your time, money, or
            expertise — together we can build a better tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-white rounded-2xl shadow-lg border border-slate-100 p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-slate-600 mb-8 flex-1 leading-relaxed">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className={`w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r ${card.gradient} text-white px-6 py-3 rounded-full font-bold transition-transform transform hover:scale-105 shadow-md`}
                >
                  {card.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
