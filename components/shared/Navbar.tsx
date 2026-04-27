"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Gallery", href: "/gallery" },
    { name: "Committee", href: "/committee" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-header py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
            VF
          </div>
          <span className={`font-bold text-lg md:text-xl transition-colors ${isScrolled || mobileMenuOpen ? "text-primary" : "text-primary md:text-white"}`}>
            Vapi Foundation
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-medium text-sm transition-colors hover:text-secondary relative ${
                pathname === link.href ? "text-secondary" : isScrolled ? "text-slate-700" : "text-white/90"
              }`}
            >
              {link.name}
              {pathname === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 top-full h-0.5 w-full bg-secondary mt-1"
                />
              )}
            </Link>
          ))}
          <Link
            href="/donate"
            className="flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white px-5 py-2.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg shadow-secondary/30"
          >
            <Heart size={16} fill="currentColor" />
            <span>Donate</span>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="text-primary" size={24} />
          ) : (
            <Menu className={isScrolled ? "text-primary" : "text-primary"} size={24} />
          )}
        </button>

        {/* Mobile Nav */}
        <div
          className={`fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center z-40 transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col items-center gap-6 text-xl">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-semibold ${
                  pathname === link.href ? "text-secondary" : "text-slate-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-full font-bold"
            >
              <Heart size={20} fill="currentColor" />
              <span>Donate Now</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
