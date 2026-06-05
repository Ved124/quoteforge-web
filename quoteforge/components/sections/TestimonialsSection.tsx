"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const metrics = [
  { label: "10x Faster Quotes", icon: "⚡" },
  { label: "100% Lead Capture", icon: "🎯" },
  { label: "Exhibition Ready", icon: "🏆" },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-[#0B1628]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#C9A84C] uppercase tracking-widest mb-4 font-medium">Testimonials</p>
          <h2
            className="text-3xl md:text-5xl font-black text-[#F0F4FF] font-display"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
          >
            Built on Real Factory Floor{" "}
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Featured quote card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card p-10 md:p-14 text-center relative mb-12"
        >
          {/* Gold quote mark */}
          <div className="absolute top-8 left-10 text-[#C9A84C] opacity-30">
            <Quote className="w-16 h-16 fill-current" />
          </div>

          <blockquote className="relative z-10">
            <p className="text-xl md:text-2xl text-[#F0F4FF] leading-relaxed font-medium mb-8 italic">
              &ldquo;We used to spend 2 days preparing quotes after every exhibition. Now our team generates
              them on the spot. We closed our first order at the show itself.&rdquo;
            </p>
            <footer>
              <p className="text-[#C9A84C] font-semibold">Blown Film Manufacturer, Ahmedabad</p>
              <p className="text-[#6B7FA3] text-sm mt-1">Pilot Customer</p>
            </footer>
          </blockquote>

          {/* Gold border glow */}
          <div className="absolute inset-0 rounded-xl bg-[#C9A84C] opacity-[0.02] pointer-events-none" />
        </motion.div>

        {/* Metric pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-2 px-6 py-3 bg-[#C9A84C10] border border-[#C9A84C30] rounded-full"
            >
              <span className="text-lg">{m.icon}</span>
              <span className="text-sm font-semibold text-[#C9A84C]">{m.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
