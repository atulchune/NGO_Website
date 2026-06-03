"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { ContentItem } from "@/lib/api";

interface HeroProps {
  heroData: any;
  recentUpdates: ContentItem[];
  vpcfNews: ContentItem[];
}

export default function Hero({ heroData, recentUpdates, vpcfNews }: HeroProps) {
  const [activeTab, setActiveTab] = useState("updates");

  // Fallbacks if props are empty
  const defaultUpdates = [
    { id: "1", title: "Baba Banda Singh Bahadur Ji Diwas Samagam scheduled for next week", createdAt: "2026-05-31T00:00:00Z", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=100" } as any,
    { id: "2", title: "Daily Mukhwak - Sri Harmandir Sahib", createdAt: "2026-05-31T00:00:00Z", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=100" } as any,
  ];

  const currentFeed = activeTab === "updates" 
    ? (recentUpdates.length > 0 ? recentUpdates : defaultUpdates) 
    : (vpcfNews.length > 0 ? vpcfNews : defaultUpdates);

  return (
    <section className="bg-background flex flex-col">

      {/* Main Hero Split Screen */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 py-6 flex-1">
        <div className="grid lg:grid-cols-12 gap-6 h-full">

          {/* Left: Pure Image Banner (8 cols) */}
          <div className="lg:col-span-8 relative overflow-hidden h-[400px] lg:h-[600px] shadow-sm border border-gray-200 bg-white group flex flex-col justify-end">
            <img
              src={heroData?.imageUrl || "/images/golden-temple.jpg"}
              alt={heroData?.title || "Golden Temple Amritsar"}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>

            <div className="relative z-10 p-6 md:p-10 flex flex-col sm:flex-row items-end justify-between gap-6">
              <div className="max-w-xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight drop-shadow-lg">{heroData?.title || "Vapi Punjabi Charitable Foundation"}</h1>
                <p className="text-blue-100 font-medium text-sm md:text-lg leading-relaxed drop-shadow-md">
                  {heroData?.subtitle || "Serving humanity through selfless service, education, and medical aid."}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Tabbed Updates List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col h-[500px] lg:h-[600px] border border-gray-200 bg-white shadow-sm">
            {/* Tabs */}
            <div className="flex text-sm font-bold border-b border-gray-200">
              <button
                onClick={() => setActiveTab("updates")}
                className={`flex-1 py-3 px-4 text-center transition-colors ${activeTab === "updates" ? "bg-white text-primary border-t-4 border-t-primary" : "bg-gray-100 text-gray-500 hover:bg-gray-50 border-t-4 border-t-transparent"}`}
              >
                Updates
              </button>
              <button
                onClick={() => setActiveTab("vpcf")}
                className={`flex-1 py-3 px-4 text-center transition-colors ${activeTab === "vpcf" ? "bg-white text-primary border-t-4 border-t-primary" : "bg-gray-100 text-gray-500 hover:bg-gray-50 border-t-4 border-t-transparent"}`}
              >
                VPCF News
              </button>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-gray-50/50">
              {currentFeed.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  key={item.id}
                >
                  <Link href="#" className="flex gap-4 p-3 bg-white rounded shadow-sm border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className="w-20 h-16 shrink-0 rounded overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <span className="text-[10px] font-bold text-white bg-primary self-start px-1.5 py-0.5 rounded-sm uppercase mb-1">News</span>
                      <h4 className="font-semibold text-primary text-xs md:text-sm line-clamp-2 leading-tight group-hover:text-secondary">
                        {item.title}
                      </h4>
                      <span className="text-[10px] text-gray-500 mt-1 font-medium">{new Date(item.createdAt).toLocaleDateString()}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-3 bg-white border-t border-gray-200">
              <Link href="/news" className="block text-center text-xs font-bold text-white bg-primary py-2 hover:bg-secondary transition-colors uppercase tracking-wide">
                View All Announcements
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* CSS for Marquee */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
