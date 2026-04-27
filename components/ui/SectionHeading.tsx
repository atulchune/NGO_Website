"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-2xl mb-16 ${center ? "mx-auto text-center" : ""}`}
    >
      <div
        className={`flex items-center gap-2 mb-4 ${
          center ? "justify-center" : ""
        }`}
      >
        <div className="w-12 h-1 bg-secondary rounded"></div>
        <h3 className="text-secondary font-bold text-sm tracking-wider uppercase">
          {badge}
        </h3>
        {center && <div className="w-12 h-1 bg-secondary rounded"></div>}
      </div>
      <h2
        className={`text-3xl md:text-5xl font-extrabold mb-4 leading-tight ${
          light ? "text-white" : "text-slate-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg ${light ? "text-blue-100" : "text-slate-600"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface PageHeroProps {
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-primary via-blue-800 to-blue-900 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      <div className="absolute -left-24 -top-24 w-96 h-96 bg-secondary rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
      <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xl text-blue-100 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
        {children}
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118,152.47,117.8,219.65,106.2,254.49,101.44,288.63,89.5,321.39,56.44Z"
            className="fill-background"
          ></path>
        </svg>
      </div>
    </section>
  );
}
