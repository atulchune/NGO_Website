"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, Phone, Mail, User } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "News", href: "/news" },
    { name: "Media", href: "/media" },
    { name: "Events", href: "/events" },
    // { name: "Publications", href: "/publications" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Utility Bar - Static at the very top of the document */}
      <div className="bg-primary text-white text-xs py-2 hidden md:block w-full">
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-2"><Phone className="w-3 h-3 text-accent" /> +91 98765 43210</span>
            <span className="flex items-center gap-2"><Mail className="w-3 h-3 text-accent" /> info@vpcf.org</span>
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex gap-3 border-r border-white/20 pr-4">
              <a href="#" className="hover:text-accent transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" /></svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
            </div>
            <Link href="http://localhost:3001" className="flex items-center gap-2 font-semibold hover:text-accent transition-colors">
              <User className="w-3.5 h-3.5" /> Member Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar - Becomes Sticky on scroll */}
      <header className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white ${isScrolled ? "shadow-md py-2" : "border-b border-gray-100 py-4"}`}>
        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-2xl shadow-inner">
              VF
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg leading-tight text-primary uppercase tracking-tight">
                Vapi Punjabi
              </span>
              <span className="font-semibold text-xs leading-tight text-secondary">
                Charitable Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold text-sm px-4 py-2 rounded-full transition-colors relative ${pathname === link.href ? "text-primary bg-blue-50" : "text-gray-700 hover:text-primary hover:bg-gray-50"
                  }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="ml-2 pl-4 flex items-center gap-3 border-l border-gray-200">
              <Link
                href="/membership"
                className="flex items-center gap-2 bg-primary hover:bg-blue-900 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-sm"
              >
                <User size={16} />
                <span>Become a Member</span>
              </Link>
              <Link
                href="/donate"
                className="flex items-center gap-2 bg-accent hover:bg-yellow-500 text-primary px-5 py-2.5 rounded-full font-bold transition-all shadow-sm"
              >
                <Heart size={16} fill="currentColor" />
                <span>Donate</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 p-2 bg-gray-100 rounded-full"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="text-primary" size={20} />
            ) : (
              <Menu className="text-primary" size={20} />
            )}
          </button>

          {/* Mobile Nav */}
          <div
            className={`fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center z-40 transition-transform duration-300 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
              } lg:hidden`}
          >
            <div className="flex flex-col items-center gap-6 text-xl w-full px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-bold w-full text-center py-3 border-b border-gray-100 ${pathname === link.href ? "text-secondary" : "text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/membership"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-6 flex justify-center w-full items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg"
              >
                <User size={20} />
                <span>Become a Member</span>
              </Link>
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="flex justify-center w-full items-center gap-2 bg-accent text-primary px-8 py-4 rounded-full font-bold text-lg shadow-lg"
              >
                <Heart size={20} fill="currentColor" />
                <span>Donate Now</span>
              </Link>
              <Link
                href="http://localhost:3001"
                onClick={() => setMobileMenuOpen(false)}
                className="flex justify-center w-full items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-bold"
              >
                <User size={18} />
                <span>Member Portal</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
