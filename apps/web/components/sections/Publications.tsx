"use client";

import { motion } from "framer-motion";
import { Book, Download, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";

const publications = [
  { id: 1, title: "Sikh History Vol 1", author: "Foundation Press", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400" },
  { id: 2, title: "Annual Report 2025", author: "VPCF", image: "https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&q=80&w=400" },
  { id: 3, title: "Gurmat Gian Magazine", author: "Monthly Edition", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=400" },
  { id: 4, title: "Gurbani Santhiya Guide", author: "Education Wing", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400" },
  { id: 5, title: "Health & Seva Journal", author: "Quarterly", image: "https://images.unsplash.com/photo-1506869640319-fea1a2ab8e40?auto=format&fit=crop&q=80&w=400" },
  { id: 6, title: "Youth Activity Book", author: "Foundation Press", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=400" }
];

export default function Publications() {
  return (
    <section className="py-10 md:py-12 bg-white border-t border-gray-100 relative">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b-2 border-primary pb-4">
          <div>
            <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-1 block">Knowledge Center</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Library & Publications</h2>
          </div>
          <Link href="/publications" className="hidden md:flex bg-secondary hover:bg-primary hover:text-white text-white px-6 py-2.5 rounded-full font-bold transition-colors items-center gap-2">
            Browse All <Book className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="relative rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow mb-3 bg-gray-100 aspect-[3/4] border border-gray-100">
                <img src={pub.image} alt={pub.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 backdrop-blur-sm">
                  <button className="bg-accent text-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                    <Download className="w-4 h-4" />
                  </button>
                  <button className="bg-white/20 text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 border border-white/40">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <h4 className="font-bold text-primary text-sm group-hover:text-secondary transition-colors line-clamp-1">{pub.title}</h4>
              <p className="text-xs text-gray-500 truncate">{pub.author}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10 md:hidden">
          <Link href="/publications" className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full shadow-sm font-bold">
            Browse All <Book className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
