"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/SectionHeading";
import { CreditCard, Shield, Heart } from "lucide-react";
import Link from "next/link";

export default function DonatePage() {
  return (
    <>
      <PageHero
        title="Donate"
        subtitle="Your generosity creates lasting impact. Every contribution matters."
      />

      <section className="py-10 md:py-12 bg-background">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-8">
              <Heart className="text-secondary" size={36} />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-800 mb-4">
              Online Donations Coming Soon
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              We are currently setting up secure online payment integration
              through Razorpay / Stripe. In the meantime, you can make
              donations via direct bank transfer or by contacting us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  icon: CreditCard,
                  title: "Bank Transfer",
                  desc: "Transfer directly to our registered bank account. Contact us for details.",
                },
                {
                  icon: Shield,
                  title: "80G Tax Benefit",
                  desc: "All donations qualify for tax exemption under Section 80G of the Income Tax Act.",
                },
                {
                  icon: Heart,
                  title: "Choose a Cause",
                  desc: "Specify which project your donation should support for directed giving.",
                },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="bg-slate-50 rounded-xl p-6 text-center"
                  >
                    <Icon
                      className="text-primary mx-auto mb-4"
                      size={28}
                    />
                    <h3 className="font-bold text-slate-800 mb-2">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{card.desc}</p>
                  </div>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-xl shadow-secondary/30"
            >
              Contact Us to Donate
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
