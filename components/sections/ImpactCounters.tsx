"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import impactData from "../../data/impact.json";

function Counter({ end, suffix, label }: { end: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [end, inView]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-6xl font-extrabold text-white mb-2 font-mono">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-blue-100 font-medium text-lg uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function ImpactCounters() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
      <div className="absolute -left-24 top-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
      <div className="absolute -right-24 bottom-0 w-96 h-96 bg-secondary rounded-full mix-blend-overlay filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {impactData.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Counter end={item.value} suffix={item.suffix} label={item.label} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
