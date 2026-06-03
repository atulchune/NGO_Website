"use client";

import { motion } from "framer-motion";
import { Play, Headphones, ArrowRight, Mic } from "lucide-react";
import Link from "next/link";

import { useState, useEffect } from "react";
import UniversalPlayer from "../ui/UniversalPlayer";

export default function FeaturedMedia() {
  const [videoItems, setVideoItems] = useState<any[]>([]);
  const [audioItems, setAudioItems] = useState<any[]>([]);

  useEffect(() => {
    async function fetchMedia() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

        // Fetch videos
        const videoRes = await fetch(`${API_URL}/api/v1/media?type=VIDEO&limit=8`);
        const videoData = await videoRes.json();
        if (videoData.success && videoData.data) {
          setVideoItems(videoData.data);
        }

        // Fetch audios
        const audioRes = await fetch(`${API_URL}/api/v1/media?type=AUDIO&limit=8`);
        const audioData = await audioRes.json();
        if (audioData.success && audioData.data) {
          setAudioItems(audioData.data);
        }
      } catch (error) {
        console.error("Failed to fetch media:", error);
      }
    }
    fetchMedia();
  }, []);
  console.log(videoItems, "videoItems")
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
                <div className="relative rounded-xl overflow-hidden shadow-sm aspect-video mb-3 bg-gray-100 flex items-center justify-center">
                  <UniversalPlayer
                    id={`video-${video.id}`}
                    url={video.url || video.fileUrl || "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
                    type="video"
                    light={video.sourceType === 'YOUTUBE' || video.sourceType === 'LIVE_STREAM' ? true : false}
                    className="w-full h-full object-cover"
                  />
                  {!video.url && !video.fileUrl && (
                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 bg-accent/90 text-primary rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2 z-20 text-xs font-bold bg-black/80 text-white px-2 py-0.5 rounded shadow-sm pointer-events-none">
                    {video.duration || "0:00"}
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
                className="bg-muted p-3 rounded-xl flex flex-col gap-3 hover:bg-gray-100 transition-colors border border-transparent hover:border-gray-200"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0 shadow-sm flex items-center justify-center bg-gray-100">
                    <img src={audio.thumbnail || "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=150"} alt={audio.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-primary text-sm truncate">{audio.title}</h4>
                    <p className="text-xs text-gray-500 truncate mt-0.5">{audio.artist || "Unknown Artist"}</p>
                  </div>
                </div>
                <div className="w-full h-9 rounded-full overflow-hidden">
                  <UniversalPlayer
                    id={`audio-${audio.id}`}
                    url={audio.url || audio.fileUrl || "http://localhost:5000/uploads/sample.mp3"}
                    type="audio"
                    className="h-full border-none !rounded-none scale-[1.02]"
                  />
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
