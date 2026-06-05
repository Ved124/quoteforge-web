"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, User, Settings, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 0,
    label: "Customer Details",
    icon: User,
    content: (
      <div className="space-y-3">
        <div>
          <p className="text-[10px] text-[#6B7FA3] mb-1">Company Name</p>
          <div className="bg-[#0B1628] border border-[#C9A84C30] rounded-lg px-4 py-2.5">
            <span className="text-sm text-[#F0F4FF]">Mehta Engineering Pvt Ltd</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[10px] text-[#6B7FA3] mb-1">Contact Person</p>
            <div className="bg-[#0B1628] border border-[#C9A84C30] rounded-lg px-4 py-2.5">
              <span className="text-sm text-[#F0F4FF]">Rajesh Mehta</span>
            </div>
          </div>
          <div>
            <p className="text-[10px] text-[#6B7FA3] mb-1">City</p>
            <div className="bg-[#0B1628] border border-[#C9A84C30] rounded-lg px-4 py-2.5">
              <span className="text-sm text-[#F0F4FF]">Ahmedabad</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 1,
    label: "Choose Machine",
    icon: Settings,
    content: (
      <div className="space-y-2">
        {["Blown Film Line", "Cast Film Line", "Lamination Line"].map((machine, i) => (
          <div
            key={machine}
            className={`flex items-center justify-between px-4 py-3 rounded-lg border ${
              i === 0
                ? "border-[#C9A84C] bg-[#C9A84C10]"
                : "border-[#C9A84C20] bg-[#0B1628]"
            }`}
          >
            <span className={`text-sm ${i === 0 ? "text-[#C9A84C] font-medium" : "text-[#6B7FA3]"}`}>
              {machine}
            </span>
            {i === 0 && <CheckCircle className="w-4 h-4 text-[#C9A84C]" />}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 2,
    label: "Select Specs",
    icon: Settings,
    content: (
      <div className="space-y-3">
        {[
          { label: "Output Capacity", value: "150 kg/hr" },
          { label: "Film Width", value: "1200mm" },
          { label: "Layers", value: "3 Layer" },
          { label: "Drive System", value: "AC Servo" },
        ].map((spec) => (
          <div key={spec.label} className="flex items-center justify-between">
            <span className="text-xs text-[#6B7FA3]">{spec.label}</span>
            <span className="text-sm font-medium text-[#F0F4FF] bg-[#0B1628] border border-[#C9A84C20] px-3 py-1 rounded-lg">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 3,
    label: "Get Quote",
    icon: FileText,
    content: (
      <div className="text-center space-y-4">
        <div className="w-14 h-14 rounded-full bg-[#C9A84C20] border-2 border-[#C9A84C] flex items-center justify-center mx-auto">
          <FileText className="w-6 h-6 text-[#C9A84C]" />
        </div>
        <div>
          <p className="text-[#F0F4FF] font-bold text-lg">Quote Ready!</p>
          <p className="text-[#6B7FA3] text-xs mt-1">PDF generated in 2.3 seconds</p>
        </div>
        <div className="bg-[#0B1628] border border-[#C9A84C20] rounded-lg p-4 text-left space-y-2">
          <div className="flex justify-between">
            <span className="text-xs text-[#6B7FA3]">Machine Total</span>
            <span className="text-sm font-bold text-[#C9A84C]">₹48,50,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs text-[#6B7FA3]">GST (18%)</span>
            <span className="text-sm text-[#F0F4FF]">₹8,73,000</span>
          </div>
          <div className="h-px bg-[#C9A84C20]" />
          <div className="flex justify-between">
            <span className="text-xs text-[#6B7FA3] font-bold">Grand Total</span>
            <span className="text-base font-black text-[#F0F4FF]">₹57,23,000</span>
          </div>
        </div>
        <button className="w-full bg-[#C9A84C] text-[#070E1A] text-sm font-bold py-3 rounded-lg">
          Download PDF Quote →
        </button>
      </div>
    ),
  },
];

export default function DemoSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="demo" ref={ref} className="py-24 bg-[#0B1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#C9A84C] uppercase tracking-widest mb-4 font-medium">Live Preview</p>
          <h2
            className="text-3xl md:text-5xl font-black text-[#F0F4FF] font-display"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
          >
            See It In Action
          </h2>
          <p className="text-[#6B7FA3] mt-4">
            Watch how a customer goes from zero to a branded PDF quote in under a minute.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {/* Step tabs */}
          <div className="flex items-center bg-[#070E1A] rounded-xl p-1 mb-6 border border-[#C9A84C20]">
            {steps.map((step, i) => (
              <button
                key={step.id}
                id={`demo-step-${i}`}
                onClick={() => setActiveStep(i)}
                className={`flex-1 py-2.5 px-2 text-xs font-medium rounded-lg transition-all duration-200 ${
                  activeStep === i
                    ? "bg-[#C9A84C] text-[#070E1A]"
                    : "text-[#6B7FA3] hover:text-[#F0F4FF]"
                }`}
              >
                {step.label}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="glass-card p-8 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
              >
                {steps[activeStep].content}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-5">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeStep === i ? "w-8 bg-[#C9A84C]" : "w-1.5 bg-[#C9A84C30]"
                }`}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            id="demo-cta"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#070E1A] font-bold rounded-xl hover:bg-[#e8c97a] transition-colors text-lg"
          >
            Get This For Your Company
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
