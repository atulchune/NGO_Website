"use client";

import { motion } from "framer-motion";
import { Play, Headphones, ArrowRight, Mic } from "lucide-react";
import Link from "next/link";

const videoItems = [
  { id: 1, title: "Sikhi Camp 2026 Highlights - Day 1", duration: "12:45", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400" },
  { id: 2, title: "Community Langar Preparation at Gurdwara", duration: "08:20", image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=400" },
  { id: 3, title: "Interview with Foundation President", duration: "45:10", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400" },
  { id: 4, title: "Medical Camp Volunteer Walkthrough", duration: "15:30", image: "https://images.unsplash.com/photo-1538183183570-5a34e0624838?auto=format&fit=crop&q=80&w=400" },
  { id: 5, title: "Vaisakhi Nagar Kirtan 2026", duration: "1:20:05", image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=400" },
  { id: 6, title: "Youth Kirtan Darbar - Evening Session", duration: "55:10", image: "https://images.unsplash.com/photo-1493225457224-eda8e15442ee?auto=format&fit=crop&q=80&w=400" },
  { id: 7, title: "Education Scholarship Award Ceremony", duration: "32:15", image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=400" },
  { id: 8, title: "Special Katha on Seva by Giani Ji", duration: "48:20", image: "https://images.unsplash.com/photo-1514059489567-5fb5073e5dbd?auto=format&fit=crop&q=80&w=400" },
];

const audioItems = [
  { id: 1, title: "Morning Nitnem (Japji Sahib)", artist: "Bhai Gurpreet Singh", duration: "25:30", image: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=150" },
  { id: 2, title: "Anand Sahib Kirtan", artist: "Hazoori Ragi Jatha", duration: "18:45", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=150" },
  { id: 3, title: "Rehras Sahib", artist: "Bhai Gurpreet Singh", duration: "32:15", image: "https://images.unsplash.com/photo-1614113489855-66422ad300a4?auto=format&fit=crop&q=80&w=150" },
  { id: 4, title: "Kirtan Sohila", artist: "Hazoori Ragi Jatha", duration: "05:50", image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=150" },
  { id: 5, title: "Sukhmani Sahib - Part 1", artist: "Giani Harpal Singh", duration: "45:00", image: "https://images.unsplash.com/photo-1516280440502-3c22b1c40212?auto=format&fit=crop&q=80&w=150" },
  { id: 6, title: "Sukhmani Sahib - Part 2", artist: "Giani Harpal Singh", duration: "42:15", image: "https://images.unsplash.com/photo-1516280440502-3c22b1c40212?auto=format&fit=crop&q=80&w=150" },
  { id: 7, title: "Asa Di Vaar", artist: "Bhai Surinder Singh", duration: "1:15:20", image: "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?auto=format&fit=crop&q=80&w=150" },
  { id: 8, title: "Special Katha - Humility", artist: "Sant Maskeen Ji", duration: "55:10", image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=150" },
];

export default function FeaturedMedia() {
  return (
    <section className="py-10 md:py-12 bg-white border-t border-gray-100">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b-2 border-primary pb-4">
          <div>
            <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-1 block">Media Library</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Discover Videos & Audios</h2>
          </div>
          <Link href="/media" className="hidden md:flex bg-secondary hover:bg-primary text-white px-6 py-2.5 rounded-full font-bold transition-colors items-center gap-2">
            Explore Full Library <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Video Grid (8 items) */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <Play className="w-6 h-6 fill-current" />
            <h3 className="text-2xl font-bold">Latest Videos</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {videoItems.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group cursor-pointer flex flex-col"
              >
                <div className="relative rounded-xl overflow-hidden shadow-sm aspect-video mb-3 bg-gray-100">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <img src={video.image} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute bottom-2 right-2 z-20 text-xs font-bold bg-black/80 text-white px-2 py-0.5 rounded shadow-sm">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 bg-accent/90 text-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 ml-1" fill="currentColor" />
                    </div>
                  </div>
                </div>
                <h4 className="font-bold text-primary text-sm line-clamp-2 group-hover:text-secondary transition-colors">
                  {video.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Audio Grid (8 items) */}
        <div>
          <div className="flex items-center gap-2 mb-6 text-primary">
            <Mic className="w-6 h-6 fill-current" />
            <h3 className="text-2xl font-bold">Latest Audios</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {audioItems.map((audio, index) => (
              <motion.div
                key={audio.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-muted p-3 rounded-xl flex items-center gap-4 hover:bg-gray-100 transition-colors group cursor-pointer border border-transparent hover:border-gray-200"
              >
                <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 shadow-sm">
                  <img src={audio.image} alt={audio.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-white" fill="currentColor" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-primary text-sm truncate group-hover:text-secondary transition-colors">{audio.title}</h4>
                  <p className="text-xs text-gray-500 truncate mt-0.5">{audio.artist}</p>
                </div>
                <div className="text-xs font-bold text-gray-400">
                  {audio.duration}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/media" className="inline-flex bg-secondary hover:bg-primary text-white px-6 py-2.5 rounded-full font-bold transition-colors items-center gap-2">
            Explore Full Library <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
