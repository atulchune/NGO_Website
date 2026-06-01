"use client";

import { motion } from "framer-motion";
import { Users, Heart, BookOpen, Music, Video, Calendar, Image as ImageIcon, MapPin } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { title: "Membership", icon: Users, link: "/membership", color: "text-blue-600 bg-blue-50/50 border-blue-100" },
  { title: "Donate", icon: Heart, link: "/donate", color: "text-red-600 bg-red-50/50 border-red-100" },
  { title: "Hukamnama", icon: BookOpen, link: "/hukamnama", color: "text-orange-600 bg-orange-50/50 border-orange-100" },
  { title: "Live Kirtan", icon: Music, link: "/live-kirtan", color: "text-purple-600 bg-purple-50/50 border-purple-100" },
  { title: "Videos", icon: Video, link: "/videos", color: "text-indigo-600 bg-indigo-50/50 border-indigo-100" },
  { title: "Events", icon: Calendar, link: "/events", color: "text-teal-600 bg-teal-50/50 border-teal-100" },
  { title: "Gallery", icon: ImageIcon, link: "/gallery", color: "text-pink-600 bg-pink-50/50 border-pink-100" },
  { title: "Contact", icon: MapPin, link: "/contact", color: "text-emerald-600 bg-emerald-50/50 border-emerald-100" },
];

export default function QuickAccess() {
  return (
    <section className="bg-white relative z-20 shadow-sm border-b border-gray-100">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="flex flex-col items-center gap-2 group"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 ${link.color}`}>
                <link.icon className="w-6 h-6 stroke-[1.5]" />
              </div>
              <span className="text-[13px] font-semibold text-slate-700 group-hover:text-primary transition-colors">
                {link.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
