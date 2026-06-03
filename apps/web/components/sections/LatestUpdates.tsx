"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Link from "next/link";

import { ContentItem } from "@/lib/api";

interface LatestUpdatesProps {
  newsItems: ContentItem[];
  blogItems: ContentItem[];
}

export default function LatestUpdates({ newsItems, blogItems }: LatestUpdatesProps) {
  // Use fallback dummy data if props are empty
  const displayNews = newsItems.length > 0 ? newsItems : [
    { id: "1", title: "Free Medical Camp Organized Successfully in Vapi GIDC", createdAt: "May 28, 2026", category: "Health", image: "/images/gallery/3.jpg" } as any,
    { id: "2", title: "Annual Education Scholarship Distribution Ceremony", createdAt: "May 15, 2026", category: "Education", image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600" } as any,
    { id: "3", title: "Blood Donation Drive Collects 500+ Units", createdAt: "May 10, 2026", category: "Health", image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=600" } as any,
    { id: "4", title: "New Sewing Center Opened for Women Empowerment", createdAt: "May 05, 2026", category: "Community", image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80&w=600" } as any,
  ];

  const displayBlogs = blogItems.length > 0 ? blogItems : [
    { id: "1", title: "The Importance of Seva in Modern Times", author: "Gurpreet Singh", createdAt: "May 20, 2026", content: "Selfless service is a core tenet of our faith. Discover how modern seva is changing lives.", image: "/images/gallery/4.jpg" } as any,
    { id: "2", title: "Understanding the Daily Hukamnama", author: "Bhai Surinder Singh", createdAt: "May 12, 2026", content: "A deep dive into the spiritual significance of the daily edict from Sri Darbar Sahib.", image: "/images/gallery/5.jpg" } as any,
    { id: "3", title: "Youth Engagement in Community Service", author: "Simran Kaur", createdAt: "May 05, 2026", content: "How the younger generation is stepping up to lead community welfare programs in Vapi.", image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600" } as any,
  ];
  return (
    <section className="py-10 md:py-12 bg-background">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8">
        
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Latest News Grid (Takes 7 columns on lg) */}
          <div className="lg:col-span-7">
            <div className="flex justify-between items-end border-b-2 border-primary pb-3 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Latest News</h3>
              <Link href="/news" className="text-sm font-semibold text-secondary hover:text-primary flex items-center gap-1 transition-colors">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {displayNews.map((news, index) => (
                <motion.div
                  key={news.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group flex flex-col"
                >
                  <div className="h-40 overflow-hidden relative">
                    <div className="absolute top-2 left-2 z-10 bg-accent text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">
                      {news.category}
                    </div>
                    <img src={news.image} alt={news.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <h4 className="font-bold text-primary text-base group-hover:text-secondary transition-colors line-clamp-2 mb-2">
                      <Link href={`/news/${news.id}`}>{news.title}</Link>
                    </h4>
                    <span className="text-xs text-gray-500 flex items-center gap-1 mt-auto">
                      <Calendar className="w-3 h-3" /> {new Date(news.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Featured Blogs List (Takes 5 columns on lg) */}
          <div className="lg:col-span-5">
            <div className="flex justify-between items-end border-b-2 border-primary pb-3 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-primary">Featured Blogs</h3>
              <Link href="/blogs" className="text-sm font-semibold text-secondary hover:text-primary flex items-center gap-1 transition-colors">
                View All <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="flex flex-col gap-4">
              {displayBlogs.map((blog, index) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group flex flex-col"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {new Date(blog.createdAt).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1"><User className="w-3 h-3" /> {blog.author}</span>
                    </div>
                    <h4 className="font-bold text-primary text-base group-hover:text-secondary transition-colors line-clamp-2 mb-2">
                      <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {blog.content}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
