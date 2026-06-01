"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <div
          className={`flex items-center gap-2 mb-4 ${
            center ? "justify-center" : ""
          }`}
        >
          <div className="w-12 h-1 bg-secondary rounded"></div>
          <h3
            className={`${
              light ? "text-orange-300" : "text-secondary"
            } font-bold text-sm tracking-wider uppercase`}
          >
            {badge}
          </h3>
          {center && <div className="w-12 h-1 bg-secondary rounded"></div>}
        </div>
      )}
      <h2
        className={`text-3xl md:text-5xl font-extrabold ${
          light ? "text-white" : "text-slate-800"
        } mb-4`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`${
            light ? "text-slate-300" : "text-slate-600"
          } text-lg max-w-2xl ${center ? "mx-auto" : ""}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-primary">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10" />
        {backgroundImage ? (
          <img src={backgroundImage} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-blue-900" />
        )}
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
