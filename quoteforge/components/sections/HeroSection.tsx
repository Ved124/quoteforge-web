"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function TabletMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md mx-auto"
    >
      {/* Glow behind tablet */}
      <div className="absolute inset-0 bg-[#C9A84C] opacity-5 rounded-3xl blur-3xl scale-110" />

      {/* Tablet Frame */}
      <div className="relative bg-[#0B1628] border-2 border-[#C9A84C30] rounded-3xl p-3 shadow-2xl">
        {/* Tablet top bar */}
        <div className="flex items-center justify-between px-4 py-2 mb-2">
          <div className="w-16 h-1.5 bg-[#C9A84C30] rounded-full" />
          <div className="w-3 h-3 rounded-full bg-[#C9A84C20] border border-[#C9A84C30]" />
        </div>

        {/* Configurator UI */}
        <div className="bg-[#070E1A] rounded-2xl p-5 border border-[#C9A84C15]">
          {/* Progress steps */}
          <div className="flex items-center gap-1 mb-5">
            {["Customer", "Machine", "Specs", "Quote"].map((step, i) => (
              <div key={step} className="flex items-center gap-1 flex-1">
                <div className={`flex-1 flex flex-col items-center gap-1`}>
                  <div
                    className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center ${
                      i === 0
                        ? "bg-[#C9A84C] text-[#070E1A]"
                        : i < 2
                        ? "bg-[#C9A84C30] text-[#C9A84C]"
                        : "bg-[#0D2444] text-[#6B7FA3]"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <span className={`text-[8px] ${i === 0 ? "text-[#C9A84C]" : "text-[#6B7FA3]"}`}>
                    {step}
                  </span>
                </div>
                {i < 3 && (
                  <div className={`h-px flex-1 mb-4 ${i < 1 ? "bg-[#C9A84C]" : "bg-[#C9A84C20]"}`} />
                )}
              </div>
            ))}
          </div>

          {/* Form Fields */}
          <div className="space-y-3 mb-4">
            <div>
              <p className="text-[9px] text-[#6B7FA3] mb-1">Company Name</p>
              <div className="bg-[#0B1628] border border-[#C9A84C20] rounded-lg px-3 py-2">
                <span className="text-[11px] text-[#F0F4FF]">Mehta Engineering Pvt Ltd</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-[9px] text-[#6B7FA3] mb-1">Contact Person</p>
                <div className="bg-[#0B1628] border border-[#C9A84C20] rounded-lg px-3 py-2">
                  <span className="text-[11px] text-[#F0F4FF]">Rajesh Mehta</span>
                </div>
              </div>
              <div>
                <p className="text-[9px] text-[#6B7FA3] mb-1">Phone</p>
                <div className="bg-[#0B1628] border border-[#C9A84C20] rounded-lg px-3 py-2">
                  <span className="text-[11px] text-[#F0F4FF]">+91 98765...</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA in mockup */}
          <button className="w-full bg-[#C9A84C] text-[#070E1A] text-[11px] font-bold py-2.5 rounded-lg">
            Next: Choose Machine →
          </button>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-center gap-2 mt-3">
          <div className="w-24 h-1 bg-[#C9A84C20] rounded-full" />
        </div>
      </div>

      {/* Badge */}
      <div className="absolute -top-3 -right-3 bg-[#C9A84C] text-[#070E1A] text-[10px] font-bold px-3 py-1.5 rounded-full">
        Exhibition Mode ✓
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden gold-grid"
    >
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C9A84C] opacity-[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Copy */}
        <div>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#C9A84C30] bg-[#C9A84C10] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            <span className="text-xs text-[#C9A84C] font-medium">Built for Indian Machinery Manufacturers</span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 font-display gold-glow"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
          >
            Your Machines.{" "}
            <span className="gradient-text">Configured.</span>{" "}
            Quoted. Closed.
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-[#6B7FA3] text-lg leading-relaxed mb-10 max-w-xl"
          >
            The digital configurator built for Indian machinery manufacturers. Let customers build their
            machine, get a PDF quote instantly — at your stall, on your website, anywhere.
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              id="hero-cta-primary"
              className="group inline-flex items-center gap-2 px-7 py-4 bg-[#C9A84C] text-[#070E1A] font-bold rounded-xl hover:bg-[#e8c97a] transition-all duration-200 shadow-lg shadow-[#C9A84C20]"
            >
              Request a Free Demo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              id="hero-cta-secondary"
              className="group inline-flex items-center gap-2 px-7 py-4 text-[#F0F4FF] border border-[#F0F4FF20] rounded-xl hover:border-[#C9A84C50] hover:text-[#C9A84C] transition-all duration-200"
            >
              <Play className="w-4 h-4" />
              Watch How It Works
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-6 mt-10 pt-10 border-t border-[#C9A84C10]"
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-[#C9A84C]">10x</p>
              <p className="text-xs text-[#6B7FA3]">Faster Quotes</p>
            </div>
            <div className="w-px h-8 bg-[#C9A84C20]" />
            <div className="text-center">
              <p className="text-2xl font-bold text-[#C9A84C]">7</p>
              <p className="text-xs text-[#6B7FA3]">Day Setup</p>
            </div>
            <div className="w-px h-8 bg-[#C9A84C20]" />
            <div className="text-center">
              <p className="text-2xl font-bold text-[#C9A84C]">100%</p>
              <p className="text-xs text-[#6B7FA3]">Lead Capture</p>
            </div>
          </motion.div>
        </div>

        {/* Right: Tablet Mockup */}
        <div className="flex justify-center lg:justify-end">
          <TabletMockup />
        </div>
      </div>
    </section>
  );
}
