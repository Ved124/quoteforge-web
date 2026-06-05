"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Do I need a developer to set this up?",
    a: "No. We handle everything — setup, configuration, and onboarding. You just share your machine list and branding details. We do the rest.",
    id: "faq-developer",
  },
  {
    q: "Can I use this at exhibitions?",
    a: "Yes. QuoteForge is built specifically for exhibitions. It works on tablets, is optimized for touch screens, and can work offline so unstable WiFi at trade shows is never a problem.",
    id: "faq-exhibitions",
  },
  {
    q: "How long does setup take?",
    a: "5–7 working days from the time you share your machine details and branding. We do a live demo with your team before you go live.",
    id: "faq-setup",
  },
  {
    q: "Is my data secure?",
    a: "Yes. Each company's data is fully isolated — your leads, your quotes, your pricing. No other company can see your data.",
    id: "faq-security",
  },
  {
    q: "Can I update machines and pricing myself?",
    a: "Yes. You get a simple admin panel where you can add machines, update specs, change pricing, and manage your team. No technical knowledge required.",
    id: "faq-admin",
  },
  {
    q: "What happens if I want to cancel?",
    a: "All plans are monthly. You can cancel anytime with no lock-in, no penalties, and no questions asked. Your data is available for export before cancellation.",
    id: "faq-cancel",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
        open ? "border-[#C9A84C50] bg-[#0D2444]/50" : "border-[#C9A84C20] bg-[#0B1628]/30"
      }`}
    >
      <button
        id={faq.id}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-[#F0F4FF] text-sm md:text-base">{faq.q}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#C9A84C] shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-6 pb-5">
              <p className="text-[#6B7FA3] text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="py-24 bg-[#070E1A]">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm text-[#C9A84C] uppercase tracking-widest mb-4 font-medium">FAQ</p>
          <h2
            className="text-3xl md:text-5xl font-black text-[#F0F4FF] font-display"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
          >
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={faq.id} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
