"use client";

import { motion } from "framer-motion";
import { Play, Calendar, Users } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import UniversalPlayer from "../ui/UniversalPlayer";

export default function LiveKirtan({ liveVideo }: { liveVideo?: any }) {
  // if (!liveVideo) return null;

  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/2 translate-y-1/2"></div>

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          badge="Live Broadcast"
          title="Join Our Daily Kirtan"
          subtitle="Experience the divine bliss of Gurbani Kirtan broadcasted live every morning and evening."
          center={true}
        />

        <div className="mx-auto mt-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white grid lg:grid-cols-2 group"
          >
            {/* Video Thumbnail Area */}
            <div className="relative w-full aspect-video md:aspect-auto md:min-h-[400px] bg-slate-900 overflow-hidden">
              {liveVideo ? (
                <UniversalPlayer
                  id={`live-${liveVideo.id}`}
                  url={liveVideo.url}
                  type="video"
                  className="w-full h-full"
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-black/40 z-10 transition-opacity group-hover:bg-black/20"></div>
                  {/* Dummy Image */}
                  <img
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200"
                    alt="Live Kirtan"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <button className="w-16 h-16 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(30,58,138,0.5)] transition-transform hover:scale-110 hover:bg-primary">
                      <Play className="w-6 h-6 ml-1" fill="currentColor" />
                    </button>
                  </div>
                </>
              )}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-pulse">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                Live Now
              </div>
            </div>

            {/* Info Area */}
            <div className="w-full p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-slate-50">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                {liveVideo ? liveVideo.title : "Evening Diwan"}
              </h3>
              <p className="text-slate-600 mb-8">
                {liveVideo?.category ? liveVideo.category.replace(/_/g, ' ') : "Bhai Gurpreet Singh Ji (Hazoori Ragi)"}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-12 h-12 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Schedule
                    </p>
                    <p className="font-semibold text-primary text-lg">6:30 PM - 8:30 PM</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-slate-700">
                  <div className="w-12 h-12 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-secondary shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      Watching
                    </p>
                    <p className="font-semibold text-primary text-lg">1.2k+ Sangat</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-slate-200">
                <a
                  href="/live-kirtan"
                  className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-blue-900 transition-colors shadow-md"
                >
                  View Full Schedule
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
