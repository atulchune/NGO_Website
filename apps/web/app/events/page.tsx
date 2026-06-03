import { Calendar as CalendarIcon, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { Pagination } from "@/components/ui/Pagination";
import { getEvents } from "@/lib/api";

export default async function EventsPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const itemsPerPage = 8;
  
  // Fetch real data from the backend
  const allEvents = await getEvents();
  
  const totalPages = Math.ceil(allEvents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEvents = allEvents.slice(startIndex, startIndex + itemsPerPage);

  return (
    <main className="min-h-screen bg-gray-50 pt-8 pb-8">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b-2 border-primary pb-6 gap-6">
          <div>
            <span className="text-secondary font-bold text-sm tracking-wider uppercase mb-1 block">Community Calendar</span>
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Upcoming Events</h1>
          </div>
          <div className="text-gray-600 text-lg max-w-lg">
            Mark your calendars and join us in our upcoming community gatherings, medical camps, and spiritual events.
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {currentEvents.map((event) => {
            const dateObj = new Date(event.eventDate);
            const month = dateObj.toLocaleString('default', { month: 'short' }).toUpperCase();
            const day = dateObj.getDate();
            const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            
            return (
            <div
              key={event.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col sm:flex-row group"
            >
              <div className="relative sm:w-2/5 h-56 sm:h-auto overflow-hidden">
                <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent sm:hidden"></div>

                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur rounded-xl shadow-lg text-center overflow-hidden w-16 z-20">
                  <div className="bg-secondary text-white text-xs font-bold py-1.5 uppercase tracking-widest">{month}</div>
                  <div className="text-2xl font-bold text-primary py-2 leading-none">{day}</div>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1 sm:w-3/5">
                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors line-clamp-2">
                  <Link href={`/events/${event.id}`}>{event.title}</Link>
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-2 flex-1">
                  {event.description}
                </p>

                <div className="space-y-3 bg-gray-50 p-4 rounded-xl text-sm text-gray-700 font-medium">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4 text-secondary" />
                    </div>
                    <span>{time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          )})}
        </div>

        {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} baseUrl="/events" />}
      </div>
    </main>
  );
}
