"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const cities = [
  "Ahmedabad",
  "Chennai",
  "Hyderabad",
  "Bangalore",
  "Vadodara",
  "Rajkot",
  "Mumbai",
  "Pune",
  "Surat",
  "Coimbatore",
];

export default function SocialProofBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="social-proof" ref={ref} className="py-14 border-y border-[#C9A84C15] bg-[#0B1628]/40">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-[#6B7FA3] mb-6 uppercase tracking-widest"
        >
          Trusted by machinery manufacturers across India
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {cities.map((city, i) => (
            <motion.span
              key={city}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="px-4 py-2 text-sm font-medium text-[#C9A84C] bg-[#C9A84C08] border border-[#C9A84C25] rounded-full"
            >
              {city}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
