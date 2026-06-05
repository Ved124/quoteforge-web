"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  phone: string;
  company: string;
  city: string;
}

const initialForm: FormData = { name: "", phone: "", company: "", city: "" };

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormData>(initialForm);
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const errors: Partial<FormData> = {};
    if (!form.name.trim()) errors.name = "Full name is required";
    if (!form.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) {
      errors.phone = "Enter a valid 10-digit Indian mobile number";
    }
    if (!form.company.trim()) errors.company = "Company name is required";
    if (!form.city.trim()) errors.city = "City is required";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (fieldErrors[name as keyof FormData]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setState("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          phone: form.phone.trim(),
          company: form.company.trim(),
          city: form.city.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setState("success");
    } catch (err: unknown) {
      setState("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 bg-[#0B1628] gold-border-top relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#C9A84C] opacity-[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-[#C9A84C] uppercase tracking-widest mb-4 font-medium">
            Get Started Today
          </p>
          <h2
            className="text-3xl md:text-5xl font-black text-[#F0F4FF] mb-4 leading-tight font-display gold-glow"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', serif)" }}
          >
            Ready to Close{" "}
            <span className="gradient-text">More Orders?</span>
          </h2>
          <p className="text-[#6B7FA3] leading-relaxed">
            Join machinery manufacturers across India already using QuoteForge to quote faster and sell smarter.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass-card p-8 md:p-10"
        >
          <AnimatePresence mode="wait">
            {state === "success" ? (
              /* ── Success state ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center py-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                  className="w-16 h-16 rounded-full bg-[#C9A84C20] border-2 border-[#C9A84C] flex items-center justify-center mx-auto mb-5"
                >
                  <CheckCircle className="w-8 h-8 text-[#C9A84C]" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#F0F4FF] mb-2">
                  Thank you!
                </h3>
                <p className="text-[#6B7FA3]">
                  We&apos;ll call you within 24 hours.
                </p>
                <p className="text-[#6B7FA3] text-sm mt-1">
                  No commitment · Setup in 7 days · Cancel anytime
                </p>
              </motion.div>
            ) : (
              /* ── Form state ── */
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                noValidate
                className="space-y-5"
              >
                {/* Row 1 — Full Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs uppercase tracking-wider text-[#6B7FA3] mb-1.5 font-medium"
                  >
                    Full Name <span className="text-[#C9A84C]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Rajesh Mehta"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full bg-[#0B1628] text-[#F0F4FF] placeholder-[#6B7FA3]/50 rounded-xl px-4 py-3 text-sm outline-none border transition-all duration-200
                      ${fieldErrors.name
                        ? "border-red-500/60 focus:border-red-500"
                        : "border-[#C9A84C40] focus:border-[#C9A84C] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)]"
                      }`}
                  />
                  {fieldErrors.name && (
                    <p className="text-red-400 text-xs mt-1">{fieldErrors.name}</p>
                  )}
                </div>

                {/* Row 2 — Phone */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs uppercase tracking-wider text-[#6B7FA3] mb-1.5 font-medium"
                  >
                    Phone Number <span className="text-[#C9A84C]">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="98765 43210"
                    maxLength={10}
                    value={form.phone}
                    onChange={handleChange}
                    className={`w-full bg-[#0B1628] text-[#F0F4FF] placeholder-[#6B7FA3]/50 rounded-xl px-4 py-3 text-sm outline-none border transition-all duration-200
                      ${fieldErrors.phone
                        ? "border-red-500/60 focus:border-red-500"
                        : "border-[#C9A84C40] focus:border-[#C9A84C] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)]"
                      }`}
                  />
                  {fieldErrors.phone && (
                    <p className="text-red-400 text-xs mt-1">{fieldErrors.phone}</p>
                  )}
                </div>

                {/* Row 3 — Company + City side by side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs uppercase tracking-wider text-[#6B7FA3] mb-1.5 font-medium"
                    >
                      Company Name <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Mehta Engineering"
                      value={form.company}
                      onChange={handleChange}
                      className={`w-full bg-[#0B1628] text-[#F0F4FF] placeholder-[#6B7FA3]/50 rounded-xl px-4 py-3 text-sm outline-none border transition-all duration-200
                        ${fieldErrors.company
                          ? "border-red-500/60 focus:border-red-500"
                          : "border-[#C9A84C40] focus:border-[#C9A84C] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)]"
                        }`}
                    />
                    {fieldErrors.company && (
                      <p className="text-red-400 text-xs mt-1">{fieldErrors.company}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-city"
                      className="block text-xs uppercase tracking-wider text-[#6B7FA3] mb-1.5 font-medium"
                    >
                      City <span className="text-[#C9A84C]">*</span>
                    </label>
                    <input
                      id="contact-city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="Ahmedabad"
                      value={form.city}
                      onChange={handleChange}
                      className={`w-full bg-[#0B1628] text-[#F0F4FF] placeholder-[#6B7FA3]/50 rounded-xl px-4 py-3 text-sm outline-none border transition-all duration-200
                        ${fieldErrors.city
                          ? "border-red-500/60 focus:border-red-500"
                          : "border-[#C9A84C40] focus:border-[#C9A84C] focus:shadow-[0_0_0_3px_rgba(201,168,76,0.12)]"
                        }`}
                    />
                    {fieldErrors.city && (
                      <p className="text-red-400 text-xs mt-1">{fieldErrors.city}</p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <button
                  id="cta-final-button"
                  type="submit"
                  disabled={state === "submitting"}
                  className="w-full flex items-center justify-center gap-2 bg-[#C9A84C] text-[#070E1A] font-bold py-4 rounded-xl hover:bg-[#e8c97a] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#C9A84C20] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {state === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Request a Free Demo →"
                  )}
                </button>

                {/* Submission error */}
                {state === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-400 text-sm text-center"
                  >
                    {errorMsg}
                  </motion.p>
                )}

                <p className="text-[#6B7FA3] text-xs text-center">
                  No commitment · Setup in 7 days · Cancel anytime
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
