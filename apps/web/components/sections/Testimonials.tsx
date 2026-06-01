"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Sharma",
    role: "Local Benefactor",
    content: "The foundation's commitment to providing medical aid to the underprivileged in Vapi is truly commendable. I've witnessed their transparent operations and selfless service firsthand.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: 2,
    name: "Amanpreet Kaur",
    role: "Scholarship Recipient",
    content: "Thanks to the educational scholarship provided by VPCF, I was able to complete my engineering degree. They didn't just give me funds; they gave me a future.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
  },
  {
    id: 3,
    name: "M. Patel",
    role: "Community Member",
    content: "The daily Langar service is a blessing for so many daily wage workers in our industrial area. The scale at which they serve without any discrimination is inspiring.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
  }
];

export default function Testimonials() {
  return (
    <section className="py-10 md:py-12 bg-slate-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          badge="Community Voices"
          title="Impact Stories"
          subtitle="Hear from the people whose lives have been touched by our foundation."
          center={true}
          light={true}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-700/50 backdrop-blur-md rounded-3xl p-8 border border-slate-600 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-600 opacity-30" />
              
              <div className="flex gap-1 mb-6 text-orange-400">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-4 h-4" fill="currentColor" />
                ))}
              </div>
              
              <p className="text-slate-200 text-lg mb-8 relative z-10 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-slate-600 pt-6">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover ring-2 ring-primary" />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
