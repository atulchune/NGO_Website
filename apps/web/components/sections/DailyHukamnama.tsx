"use client";

import { motion } from "framer-motion";
import { BookOpen, Volume2, FileText, Download } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export default function DailyHukamnama() {
  return (
    <section className="py-10 md:py-12 bg-white relative">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-secondary rounded"></div>
                <h3 className="text-secondary font-bold text-sm tracking-wider uppercase">
                  Daily Blessing
                </h3>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-6 leading-tight">
                Today's Hukamnama
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Start your day with the divine message from Sri Guru Granth Sahib
                Ji. Read the translation or listen to the audio recording.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-primary hover:bg-blue-800 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg shadow-primary/30">
                  <Volume2 className="w-5 h-5" />
                  Listen Audio
                </button>
                <button className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-full font-medium transition-colors">
                  <FileText className="w-5 h-5" />
                  Read Full Meaning
                </button>
              </div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-50 to-amber-100/50 p-8 md:p-10 rounded-3xl border border-orange-100 shadow-xl relative"
            >
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <BookOpen className="w-32 h-32 text-orange-900" />
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-center border-b border-orange-200/50 pb-4 mb-6">
                  <div>
                    <p className="font-bold text-orange-900">Sri Darbar Sahib, Amritsar</p>
                    <p className="text-sm text-orange-700/80">Ang 612 • May 31, 2026</p>
                  </div>
                  <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-orange-600 shadow-sm hover:shadow-md transition-shadow">
                    <Download className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-6 text-center md:text-left">
                  <p className="text-xl md:text-2xl font-medium text-orange-950 leading-relaxed font-serif">
                    "Sarab rog kaa aoukhad naam."
                  </p>
                  <div className="w-16 h-px bg-orange-300 mx-auto md:mx-0"></div>
                  <p className="text-lg text-orange-800 leading-relaxed italic">
                    The Name of the Lord is the panacea, the healing medicine for all diseases.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    In this verse, the Guru emphasizes that meditating on the Divine Name brings ultimate peace and cures all spiritual and mental afflictions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
