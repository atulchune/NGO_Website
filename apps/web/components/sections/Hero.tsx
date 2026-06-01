"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const recentUpdates = [
  { id: 1, title: "Baba Banda Singh Bahadur Ji Diwas Samagam scheduled for next week", date: "31-May-2026", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=100" },
  { id: 2, title: "Daily Mukhwak - Sri Harmandir Sahib", date: "31-May-2026", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=100" },
  { id: 3, title: "Special Langar organized at Vapi GIDC for the underprivileged", date: "30-May-2026", image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=100" },
  { id: 4, title: "Free Health Checkup Camp starts tomorrow", date: "29-May-2026", image: "https://images.unsplash.com/photo-1514416432279-50fac261c7dd?auto=format&fit=crop&q=80&w=100" },
];

const vpcfNews = [
  { id: 1, title: "VPCF announces new education scholarships for 2026-2027", date: "28-May-2026", image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=100" },
  { id: 2, title: "Mega Blood Donation Drive crosses 1000 units", date: "25-May-2026", image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=100" },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState("updates");

  const currentFeed = activeTab === "updates" ? recentUpdates : vpcfNews;

  return (
    <section className="bg-background flex flex-col">

      {/* Audio Players Bar - Dark Blue */}
      <div className="bg-primary border-b border-white/10 py-3 hidden md:block">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 grid grid-cols-3 gap-6">
          <div className="flex items-center gap-4">
            <span className="text-white text-xs font-bold whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">Live Kirtan</span>
            <audio controls className="h-8 w-full">
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white text-xs font-bold whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">Daily Mukhwak</span>
            <audio controls className="h-8 w-full">
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
            </audio>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white text-xs font-bold whitespace-nowrap bg-white/10 px-3 py-1.5 rounded-full">Mukhwak Katha</span>
            <audio controls className="h-8 w-full">
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" type="audio/mpeg" />
            </audio>
          </div>
        </div>
      </div>

      {/* Scrolling News Ticker */}
      <div className="bg-[#0f245c] text-white py-2 border-b border-white/20">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 flex items-center">
          <div className="bg-white text-primary text-xs font-bold px-3 py-1 shrink-0 mr-4 z-10 shadow">
            LATEST UPDATES
          </div>
          <div className="overflow-hidden relative flex-1">
            <div className="whitespace-nowrap animate-marquee text-sm font-medium">
              <span className="mx-4 text-accent">✦</span> VPCF announces new dates for the upcoming Sikhi Camp <span className="mx-4 text-accent">✦</span> Free Medical Camp in GIDC successfully concluded with 500+ beneficiaries <span className="mx-4 text-accent">✦</span> Applications for Annual Education Scholarships are now open <span className="mx-4 text-accent">✦</span> Join the Sunday Diwan at 10:00 AM
            </div>
          </div>
        </div>
      </div>

      {/* Main Hero Split Screen */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 py-6 flex-1">
        <div className="grid lg:grid-cols-12 gap-6 h-full">

          {/* Left: Pure Image Banner (8 cols) */}
          <div className="lg:col-span-8 relative overflow-hidden h-[400px] lg:h-[600px] shadow-sm border border-gray-200 bg-white group flex flex-col justify-end">
            <img
              src="/images/golden-temple.jpg"
              alt="Golden Temple Amritsar"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent"></div>

            <div className="relative z-10 p-6 md:p-10 flex flex-col sm:flex-row items-end justify-between gap-6">
              <div className="max-w-xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-2 leading-tight drop-shadow-lg">Vapi Punjabi Charitable Foundation</h1>
                <p className="text-blue-100 font-medium text-sm md:text-lg leading-relaxed drop-shadow-md">
                  Serving humanity through selfless service, education, and medical aid.
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
                      <span className="text-[10px] text-gray-500 mt-1 font-medium">{item.date}</span>
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
