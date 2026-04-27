"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import projectsData from "../../data/projects.json";

export default function KeyProjects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="key-projects" className="py-20 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1 bg-secondary rounded"></div>
            <h3 className="text-secondary font-bold text-sm tracking-wider uppercase">Our Work</h3>
            <div className="w-12 h-1 bg-secondary rounded"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-800 mb-4">Key Initiatives</h2>
          <p className="text-slate-600 text-lg">We focus our resources where they can create the most profound, sustainable impact in our society.</p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {projectsData.map((project) => (
            <motion.div key={project.id} variants={item} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-slate-600 mb-6 text-sm flex-1">{project.shortDescription}</p>
                <Link href={`/projects#${project.id}`} className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors mt-auto">
                  <span>Learn More</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 text-center">
          <Link href="/projects" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-transform transform hover:-translate-y-1 shadow-lg shadow-primary/30">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
