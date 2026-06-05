"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: "📋",
    title: "Manual quotes take 2–3 days.",
    body: "Customers lose interest waiting. By the time you email the quote, they've already spoken to your competitor.",
  },
  {
    icon: "🤝",
    title: "At exhibitions, you take notes.",
    body: "Follow-up emails never convert. The lead dies in a WhatsApp message or a crumpled business card.",
  },
  {
    icon: "📉",
    title: "No system to track enquiries.",
    body: "No record of who enquired, what they wanted, or when to follow up. Deals fall through the cracks every day.",
  },
];

export default function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="problem" ref={ref} className="py-24 bg-[#070E1A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#C9A84C] uppercase tracking-widest mb-4 font-medium">The Problem</p>
          <h2
            className="text-3xl md:text-5xl font-black text-[#F0F4FF] leading-tight font-display"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
          >
            The Old Way Is{" "}
            <span className="gradient-text">Costing You Orders</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 group hover:border-[#C9A84C40] transition-colors duration-300"
            >
              <div className="text-4xl mb-5">{p.icon}</div>
              <h3 className="text-lg font-bold text-[#F0F4FF] mb-3 leading-snug">{p.title}</h3>
              <p className="text-[#6B7FA3] text-sm leading-relaxed">{p.body}</p>

              {/* Decorative bottom line */}
              <div className="mt-6 h-px w-0 bg-[#C9A84C] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
