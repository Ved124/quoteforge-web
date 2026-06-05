"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "We onboard your company and branding",
    body: "Share your logo, colors, and company details. We set up your branded QuoteForge workspace.",
  },
  {
    number: "02",
    title: "You send us your machine list and pricing",
    body: "Share a simple spreadsheet or document. We handle the technical configuration for you.",
  },
  {
    number: "03",
    title: "We configure and train your team",
    body: "Our team sets up your configurator, runs a live demo, and trains your sales team in under an hour.",
  },
  {
    number: "04",
    title: "Start generating quotes and capturing leads",
    body: "Go live at your next exhibition or on your website. Instant quotes. 100% lead capture.",
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="how-it-works" ref={ref} className="py-24 bg-[#070E1A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm text-[#C9A84C] uppercase tracking-widest mb-4 font-medium">How It Works</p>
          <h2
            className="text-3xl md:text-5xl font-black text-[#F0F4FF] font-display"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
          >
            Live in 7 Days.{" "}
            <span className="gradient-text">No Technical Knowledge Needed.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Horizontal connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-[#C9A84C20]">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 bg-[#C9A84C] origin-left"
              style={{ transformOrigin: "left" }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Step circle */}
                <div className="relative w-16 h-16 rounded-full bg-[#0B1628] border-2 border-[#C9A84C] flex items-center justify-center mb-6 z-10">
                  <span className="text-[#C9A84C] font-bold text-sm">{step.number}</span>
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-[#C9A84C] opacity-10 blur-md" />
                </div>

                <h3 className="text-base font-bold text-[#F0F4FF] mb-3 leading-snug">{step.title}</h3>
                <p className="text-[#6B7FA3] text-sm leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            id="how-it-works-cta"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#070E1A] font-bold rounded-xl hover:bg-[#e8c97a] transition-colors"
          >
            Get Started in 7 Days →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
