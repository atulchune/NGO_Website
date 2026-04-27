"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/SectionHeading";
import { Building2, BarChart3, FileText, Handshake } from "lucide-react";
import Link from "next/link";

const benefits = [
  {
    icon: FileText,
    title: "80G Tax Exemption",
    description:
      "Receive official 80G certificates for all CSR contributions made to the foundation.",
  },
  {
    icon: BarChart3,
    title: "Impact Reports",
    description:
      "Quarterly impact reports with detailed metrics, photos, and beneficiary feedback.",
  },
  {
    icon: Building2,
    title: "Brand Visibility",
    description:
      "Prominent acknowledgement on our website, events, and marketing material.",
  },
  {
    icon: Handshake,
    title: "Custom Programs",
    description:
      "We can design bespoke CSR programs aligned with your company's social goals.",
  },
];

export default function CsrPartnershipsPage() {
  return (
    <>
      <PageHero
        title="CSR Partnerships"
        subtitle="Partner with us to create meaningful social impact through your CSR initiatives."
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
              Why Partner with Us?
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We offer end-to-end CSR solutions — from program design and
              execution to auditing, reporting, and employee volunteering
              opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {b.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-slate-600 text-lg mb-6">
              Interested in a CSR partnership? Let&apos;s discuss how we can
              create a customised program for your organisation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg shadow-primary/30"
            >
              Schedule a Discussion
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
