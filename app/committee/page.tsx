"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/SectionHeading";
import { User } from "lucide-react";
import committeeData from "@/data/committee.json";

const groupColors: Record<string, string> = {
  Trustees: "from-blue-600 to-primary",
  Committee: "from-orange-400 to-secondary",
  Operations: "from-emerald-500 to-teal-600",
};

export default function CommitteePage() {
  return (
    <>
      <PageHero
        title="Our Committee"
        subtitle="Meet the dedicated individuals steering our mission with passion and integrity."
      />

      {committeeData.map((group) => (
        <section
          key={group.group}
          className="py-16 bg-background odd:bg-slate-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-12 h-1 bg-secondary rounded"></div>
                <h3 className="text-secondary font-bold text-sm tracking-wider uppercase">
                  {group.group}
                </h3>
                <div className="w-12 h-1 bg-secondary rounded"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
                {group.group} Members
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {group.members.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden text-center hover:shadow-xl transition-shadow">
                    <div
                      className={`relative aspect-square bg-gradient-to-br ${
                        groupColors[group.group] || "from-slate-400 to-slate-600"
                      } flex items-center justify-center`}
                    >
                      <User
                        className="text-white/40"
                        size={80}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-slate-800">
                        {member.name}
                      </h3>
                      <p className="text-secondary font-medium text-sm mt-1">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
