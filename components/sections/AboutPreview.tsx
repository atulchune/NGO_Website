"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutPreview() {
  return (
    <section id="about-preview" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative z-10 w-11/12">
                <Image
                  src="/images/gallery/1.jpg"
                  alt="Foundation event"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-8 -right-4 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-xl border-8 border-background z-20 hidden md:block">
                <Image
                  src="/images/gallery/2.jpg"
                  alt="Foundation work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 0vw, 25vw"
                />
              </div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-50 z-0"></div>
              <div className="absolute -bottom-12 right-12 w-40 h-40 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-40 z-0"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:pl-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-1 bg-secondary rounded"></div>
              <h3 className="text-secondary font-bold text-sm tracking-wider uppercase">Who We Are</h3>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
              A community born from <span className="text-primary">kindness</span> and <span className="text-secondary">action.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Vapi Punjabi Charitable Foundation is a non-profit registered organization focused on uplifting the underprivileged in Vapi and surrounding regions. We believe in providing sustainable solutions in healthcare, education, and immediate community relief.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Healthcare & Medical Emergency funds for the poor.",
                "Education sponsorship for underprivileged children.",
                "Widow pension and financial security programs."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-secondary mt-1 shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors group">
              <span>Read Our Full Story</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
