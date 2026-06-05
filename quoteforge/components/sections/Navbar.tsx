"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Anvil } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070E1A]/90 backdrop-blur-xl border-b border-[#C9A84C20]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" id="nav-logo">
          <div className="w-8 h-8 rounded-lg bg-[#C9A84C15] border border-[#C9A84C40] flex items-center justify-center group-hover:bg-[#C9A84C25] transition-colors">
            <Anvil className="w-4 h-4 text-[#C9A84C]" />
          </div>
          <span className="text-xl font-bold text-[#C9A84C] tracking-tight" style={{ fontFamily: "var(--font-inter, Inter, sans-serif)" }}>
            QuoteForge
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-[#6B7FA3] hover:text-[#F0F4FF] transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#C9A84C] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            id="nav-cta"
            className="px-5 py-2.5 text-sm font-medium text-[#C9A84C] border border-[#C9A84C] rounded-lg hover:bg-[#C9A84C] hover:text-[#070E1A] transition-all duration-200"
          >
            Request Demo
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-[#F0F4FF] p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          id="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B1628]/95 backdrop-blur-xl border-b border-[#C9A84C20] overflow-hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-sm text-[#6B7FA3] hover:text-[#F0F4FF] border-b border-[#C9A84C10] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 text-sm font-medium text-[#C9A84C] border border-[#C9A84C] rounded-lg hover:bg-[#C9A84C] hover:text-[#070E1A] transition-all"
                >
                  Request Demo
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
