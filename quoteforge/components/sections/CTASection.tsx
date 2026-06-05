"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-28 bg-[#0B1628] gold-border-top relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#C9A84C] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm text-[#C9A84C] uppercase tracking-widest mb-5 font-medium">
            Get Started Today
          </p>
          <h2
            className="text-4xl md:text-6xl font-black text-[#F0F4FF] mb-6 leading-tight font-display gold-glow"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
          >
            Ready to Close{" "}
            <span className="gradient-text">More Orders?</span>
          </h2>
          <p className="text-[#6B7FA3] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join machinery manufacturers across India who are already using QuoteForge to quote faster
            and sell smarter.
          </p>

          <a
            href="mailto:contact@quoteforge.in?subject=Demo Request"
            id="cta-final-button"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-[#C9A84C] text-[#070E1A] font-bold text-lg rounded-xl hover:bg-[#e8c97a] transition-all duration-200 shadow-2xl shadow-[#C9A84C25]"
          >
            Request a Free Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-[#6B7FA3] text-sm mt-6">
            No commitment · Setup in 7 days · Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  );
}
