"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, FileText, Tablet, Building2, BarChart3, Wrench } from "lucide-react";

const features = [
  {
    icon: Settings,
    title: "Machine Configurator",
    body: "Multi-step configuration tailored to your product line. Customers select specs, options, and variants with ease.",
    id: "feature-configurator",
  },
  {
    icon: FileText,
    title: "Instant PDF Quotes",
    body: "Branded quotations generated in seconds, not days. Professional, accurate, and sent directly to the customer.",
    id: "feature-pdf",
  },
  {
    icon: Tablet,
    title: "Exhibition Ready",
    body: "Works on tablets, offline-capable, and impressively fast at trade shows. Turn every stall visitor into a lead.",
    id: "feature-exhibition",
  },
  {
    icon: Building2,
    title: "Your Branding",
    body: "Your logo, colors, and company details on everything. Customers see your brand, not ours.",
    id: "feature-branding",
  },
  {
    icon: BarChart3,
    title: "Lead Dashboard",
    body: "Every enquiry captured, tracked, and ready for follow-up. Never let a lead slip away again.",
    id: "feature-dashboard",
  },
  {
    icon: Wrench,
    title: "Admin Control",
    body: "Add machines, update pricing, manage specs — no developer needed. You're in complete control.",
    id: "feature-admin",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" ref={ref} className="py-24 bg-[#0B1628]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#C9A84C] uppercase tracking-widest mb-4 font-medium">Features</p>
          <h2
            className="text-3xl md:text-5xl font-black text-[#F0F4FF] font-display"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
          >
            Everything Your Sales Team Needs
          </h2>
          <p className="text-[#6B7FA3] mt-4 max-w-xl mx-auto">
            Purpose-built for the machinery industry. Every feature designed around the way manufacturers actually sell.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.id}
                id={f.id}
                variants={cardVariants}
                className="glass-card p-7 group hover:border-[#C9A84C40] transition-all duration-300 cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-[#C9A84C15] border border-[#C9A84C30] flex items-center justify-center mb-5 group-hover:bg-[#C9A84C25] transition-colors">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <h3 className="text-lg font-bold text-[#F0F4FF] mb-2">{f.title}</h3>
                <p className="text-[#6B7FA3] text-sm leading-relaxed">{f.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
