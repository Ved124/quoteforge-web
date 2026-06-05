"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    id: "pricing-starter",
    name: "Starter",
    price: "₹3,999",
    period: "/month",
    description: "Perfect for getting started with digital quoting",
    features: [
      "1 product line",
      "3 users",
      "Instant PDF quotes",
      "Lead capture dashboard",
      "Email support",
      "Mobile & tablet optimized",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    id: "pricing-growth",
    name: "Growth",
    price: "₹8,999",
    period: "/month",
    description: "For manufacturers ready to scale their sales",
    features: [
      "3 product lines",
      "10 users",
      "Exhibition mode",
      "Custom branding control",
      "Lead follow-up reminders",
      "Priority support",
      "Analytics dashboard",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    id: "pricing-enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large manufacturers with complex requirements",
    features: [
      "Unlimited product lines",
      "Unlimited users",
      "Custom integrations",
      "Dedicated onboarding",
      "SLA guarantee",
      "White-label option",
      "Priority phone support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" ref={ref} className="py-24 bg-[#070E1A]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-[#C9A84C] uppercase tracking-widest mb-4 font-medium">Pricing</p>
          <h2
            className="text-3xl md:text-5xl font-black text-[#F0F4FF] font-display"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
          >
            Simple Pricing. <span className="gradient-text">No Surprises.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              id={plan.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex flex-col rounded-2xl p-8 border ${
                plan.popular
                  ? "bg-[#0D2444] border-[#C9A84C] shadow-[0_0_40px_rgba(201,168,76,0.12)]"
                  : "glass-card"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#070E1A] text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-bold text-[#F0F4FF] mb-1">{plan.name}</h3>
                <p className="text-[#6B7FA3] text-sm mb-5">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-[#C9A84C]">{plan.price}</span>
                  {plan.period && <span className="text-[#6B7FA3] text-sm">{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#C9A84C] mt-0.5 shrink-0" />
                    <span className="text-sm text-[#6B7FA3]">{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  plan.popular
                    ? "bg-[#C9A84C] text-[#070E1A] hover:bg-[#e8c97a]"
                    : "border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#070E1A]"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-[#6B7FA3] text-sm mt-8"
        >
          One-time setup fee ₹15,000 · All plans include 7-day onboarding · Cancel anytime
        </motion.p>
      </div>
    </section>
  );
}
