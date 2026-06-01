"use client";

import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const events = [
  { id: 1, title: "Annual Vaisakhi Celebration & Kirtan Darbar", date: "Apr 14, 2026", month: "APR", day: "14", time: "09:00 AM", venue: "Main Gurdwara", image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400" },
  { id: 2, title: "Mega Blood Donation Camp", date: "May 10, 2026", month: "MAY", day: "10", time: "10:00 AM", venue: "Community Hall", image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=400" },
  { id: 3, title: "Free Health & Eye Checkup", date: "May 15, 2026", month: "MAY", day: "15", time: "08:00 AM", venue: "GIDC Grounds", image: "https://images.unsplash.com/photo-1514416432279-50fac261c7dd?auto=format&fit=crop&q=80&w=400" },
  { id: 4, title: "Sunday Youth Gurmat Camp", date: "May 22, 2026", month: "MAY", day: "22", time: "11:00 AM", venue: "Education Wing", image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=400" },
];

export default function UpcomingEvents() {
  return (
    <section className="py-10 md:py-12 bg-muted">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b-2 border-primary pb-4">
          <div>
            <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-1 block">Community</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">Upcoming Events</h2>
          </div>
          <Link href="/events" className="hidden md:flex bg-white hover:bg-primary hover:text-white text-primary px-6 py-2.5 rounded-full font-bold transition-colors items-center gap-2 border border-gray-200">
            Full Calendar <CalendarIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                
                {/* Date Badge */}
                <div className="absolute top-3 left-3 bg-white rounded-lg shadow-lg text-center overflow-hidden w-14 z-20 border border-gray-100">
                  <div className="bg-secondary text-white text-[10px] font-bold py-1 uppercase">{event.month}</div>
                  <div className="text-lg font-bold text-primary py-1">{event.day}</div>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                  <Link href={`/events/${event.id}`}>{event.title}</Link>
                </h3>
                
                <div className="space-y-2 mt-auto text-sm text-gray-600 font-medium">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-secondary shrink-0" />
                    <span className="truncate">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span className="truncate">{event.venue}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10 md:hidden">
          <Link href="/events" className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full shadow-sm border border-gray-200 hover:shadow-md font-bold">
            Full Calendar <CalendarIcon className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
