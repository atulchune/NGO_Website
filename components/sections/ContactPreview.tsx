"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactPreview() {
  return (
    <section id="contact-preview" className="py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-br from-primary to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left — Info */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-12 h-1 bg-secondary rounded"></div>
                <h3 className="text-orange-300 font-bold text-sm tracking-wider uppercase">
                  Reach Out
                </h3>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
                Let&apos;s Build Something <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-400">
                  Meaningful Together.
                </span>
              </h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                Have questions? Want to volunteer, donate, or partner? We&apos;d
                love to hear from you. Reach out and we&apos;ll respond within
                24 hours.
              </p>
              <div className="space-y-5 mb-10">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <span>info@vapifoundation.org</span>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <span>123 Foundation House, Main Road, Vapi, Gujarat</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-8 py-4 rounded-full font-bold text-lg w-fit transition-transform transform hover:-translate-y-1 shadow-xl shadow-secondary/30 group"
              >
                <span>Contact Us</span>
                <ArrowRight
                  size={18}
                  className="transform group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Right — Map or Image */}
            <div className="relative min-h-[300px] lg:min-h-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59904.38959698075!2d72.88!3d20.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0d11754a6f0bd%3A0x8df6e92a9e64df12!2sVapi%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vapi location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
