"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  Shield,
} from "lucide-react";

/* ────────────────────────── tipuri auxiliare ────────────────────────── */
interface ContactInfo {
  icon: any;
  title: string;
  primary: string;
  accent: string;
  color: string;
  bgColor: string;
  glowColor: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

/* ─────────────────────────── componenta ─────────────────────────────── */
export default function Contact() {
  /* ----------- state ------------ */
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  /* ---------- handlers ---------- */
  const handleInputChange = (field: keyof FormData, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone || "‑",
      service: formData.service || "General enquiry",
      message: formData.message || "(no message provided)",
    };

    try {
      await emailjs.send(
        "service_osy4ifa", // Service ID
        "template_ysz2bkj", // Template ID
        templateParams,
        "0icNqgiTThb2YrqN2" // Public Key / User ID
      );

      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 4000);

      // reset formular
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (err) {
      console.error("Email sending failed:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* --------- date statice -------- */
  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: "Phone",
      primary: "(+44) 759‑720‑4777",
      accent: "24/7 Emergency Service",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      glowColor: "shadow-emerald-500/20",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "vbogdan88@yahoo.com",
      accent: "Response within 2 hours",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      glowColor: "shadow-blue-500/20",
    },
    {
      icon: MapPin,
      title: "Service Area",
      primary: "Metropolitan Area",
      accent: "Free estimates included",
      color: "from-violet-500 to-purple-600",
      bgColor: "from-violet-50 to-purple-50",
      glowColor: "shadow-violet-500/20",
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon‑Fri  7 AM – 7 PM",
      accent: "Sunday by appointment",
      color: "from-amber-500 to-orange-600",
      bgColor: "from-amber-50 to-orange-50",
      glowColor: "shadow-amber-500/20",
    },
  ];

  const services = [
    "Interior Painting",
    "Exterior Painting",
    "Commercial Painting",
    "Cabinet Refinishing",
    "Specialty Finishes",
    "Maintenance & Touch‑ups",
    "Free Consultation",
  ];

  /* -------- framer‑motion variants -------- */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const cardHoverVariants: Variants = {
    hover: {
      y: -4,
      scale: 1.01,
      transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  /* ----------------------------- UI ----------------------------- */
  return (
    <section
      id="contact"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden"
    >
      {/* ===== background pattern & shapes ===== */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184)_1px,transparent_0)] bg-[length:32px_32px] opacity-[0.015]" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute bottom-32 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm shadow-lg shadow-blue-500/10"
          >
            <Send className="h-4 w-4" />
            <span>Get In Touch</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 bg-blue-500 rounded-full"
            />
          </motion.div>

          {/* titlu */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight"
          >
            Ready to Transform
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent"
            >
              Your Space?
            </motion.span>
          </motion.h2>

          {/* descriere */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0"
          >
            Contact us today for your free consultation and detailed estimate.
            We're here to bring your painting vision to life with unmatched
            quality and precision.
          </motion.p>

          {/* stats scurte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-12"
          >
            {[
              { icon: Phone, number: "24/7", label: "Available" },
              { icon: Clock, number: "2 hr", label: "Response" },
              { icon: CheckCircle, number: "Free", label: "Estimates" },
              { icon: Shield, number: "100%", label: "Insured" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-blue-100 to-indigo-100 p-2 sm:p-3 rounded-full inline-flex mb-2 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300"
                >
                  <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </motion.div>
                <div className="text-lg sm:text-xl font-bold text-slate-900">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ================= CONTINUT PRINCIPAL ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* ----- CARDURI INFO ----- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover="hover"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="relative bg-white/70 backdrop-blur-sm border border-gray-100/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/90 hover:border-gray-200/50 transition-all duration-500 hover:shadow-xl overflow-hidden"
                  >
                    {/* gradient glow */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-8 rounded-xl sm:rounded-2xl transition-opacity duration-500`}
                    />
                    {/* shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl sm:rounded-2xl" />

                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <div
                        className={`flex-shrink-0 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${info.color} shadow-lg ${info.glowColor} group-hover:shadow-2xl transition-all duration-500`}
                      >
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg">
                          {info.title}
                        </h3>
                        <p className="text-gray-700 font-medium mb-1 text-sm sm:text-base">
                          {info.primary}
                        </p>
                        <p
                          className={`text-xs sm:text-sm font-medium bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}
                        >
                          {info.accent}
                        </p>
                      </div>
                    </div>
                    {/* linie inferioară */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileHover={{ width: 80 }}
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 sm:h-1 bg-gradient-to-r ${info.color} transition-all duration-500 rounded-t-full`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ----- FORMULAR ----- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative bg-white/80 backdrop-blur-xl border border-gray-100/50 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-2xl sm:rounded-3xl overflow-hidden">
              {/* antet formular */}
              <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-6 sm:p-8 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
                <div className="relative">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                    Get Your Free Estimate
                  </h3>
                  <p className="text-blue-100 font-light text-sm sm:text-base">
                    Fill out the form below and we'll get back to you within 24
                    hours with a detailed quote.
                  </p>
                </div>
              </div>

              {/* === FORM === */}
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 space-y-4 sm:space-y-6"
              >
                {/* Nume + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* nume */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gradient-to-r from-gray-50/80 to-gray-50/60 border-2 border-gray-200/60 rounded-xl sm:rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-500 placeholder-gray-400 text-gray-800 font-medium hover:border-gray-300 hover:shadow-md text-sm sm:text-base"
                        placeholder="Enter your full name"
                      />
                      <motion.div
                        animate={{
                          opacity: focusedField === "name" ? 1 : 0,
                          scale: focusedField === "name" ? 1.02 : 1,
                        }}
                        className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 pointer-events-none"
                      />
                    </div>
                  </div>

                  {/* email */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gradient-to-r from-gray-50/80 to-gray-50/60 border-2 border-gray-200/60 rounded-xl sm:rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-500 placeholder-gray-400 text-gray-800 font-medium hover:border-gray-300 hover:shadow-md text-sm sm:text-base"
                        placeholder="Enter your email address"
                      />
                      <motion.div
                        animate={{
                          opacity: focusedField === "email" ? 1 : 0,
                          scale: focusedField === "email" ? 1.02 : 1,
                        }}
                        className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 pointer-events-none"
                      />
                      {/* indicator validitate */}
                      <AnimatePresence>
                        {formData.email && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2"
                          >
                            {formData.email.includes("@") &&
                            formData.email.includes(".") ? (
                              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                              </div>
                            ) : (
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-500 rounded-full flex items-center justify-center"
                              >
                                <div className="w-2 h-2 bg-white rounded-full" />
                              </motion.div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Telefon + Serviciu */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {/* telefon */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-10 sm:pl-12 px-4 sm:px-5 py-3 sm:py-4 bg-gradient-to-r from-gray-50/80 to-gray-50/60 border-2 border-gray-200/60 rounded-xl sm:rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-500 placeholder-gray-400 text-gray-800 font-medium hover:border-gray-300 hover:shadow-md text-sm sm:text-base"
                        placeholder="Phone number (optional)"
                      />
                      <motion.div
                        animate={{
                          opacity: focusedField === "phone" ? 1 : 0,
                          scale: focusedField === "phone" ? 1.02 : 1,
                        }}
                        className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 pointer-events-none"
                      />
                      <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Phone
                          className={`h-4 w-4 transition-colors duration-300 ${
                            focusedField === "phone"
                              ? "text-blue-500"
                              : "text-gray-400"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* serviciu */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                      Service Type
                    </label>
                    <div className="relative">
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          handleInputChange("service", e.target.value)
                        }
                        onFocus={() => setFocusedField("service")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gradient-to-r from-gray-50/80 to-gray-50/60 border-2 border-gray-200/60 rounded-xl sm:rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-500 appearance-none cursor-pointer text-gray-800 font-medium hover:border-gray-300 hover:shadow-md text-sm sm:text-base"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option
                            key={service}
                            value={service.toLowerCase().replace(/\s+/g, "-")}
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                      <motion.div
                        animate={{
                          opacity: focusedField === "service" ? 1 : 0,
                          scale: focusedField === "service" ? 1.02 : 1,
                        }}
                        className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 pointer-events-none"
                      />
                      {/* săgeată custom */}
                      <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <motion.div
                          animate={{
                            backgroundColor:
                              focusedField === "service"
                                ? "#3b82f6"
                                : "#e5e7eb",
                            color:
                              focusedField === "service"
                                ? "#ffffff"
                                : "#9ca3af",
                          }}
                          className="p-1 rounded-full transition-all duration-300"
                        >
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detalii proiect */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                    Project Details
                  </label>
                  <div className="relative">
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gradient-to-r from-gray-50/80 to-gray-50/60 border-2 border-gray-200/60 rounded-xl sm:rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-500 placeholder-gray-400 resize-none text-gray-800 font-medium hover:border-gray-300 hover:shadow-md text-sm sm:text-base"
                      rows={4}
                      maxLength={500}
                      placeholder="Describe your project details..."
                    />
                    <motion.div
                      animate={{
                        opacity: focusedField === "message" ? 1 : 0,
                        scale: focusedField === "message" ? 1.01 : 1,
                      }}
                      className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 pointer-events-none"
                    />
                    {/* counter */}
                    <div className="absolute bottom-2 sm:bottom-3 right-3 sm:right-4 text-xs text-gray-400">
                      {formData.message.length}/500
                    </div>
                  </div>
                </div>

                {/* termeni */}
                <div className="flex items-start gap-3">
                  <div className="relative mt-1 group">
                    <input
                      type="checkbox"
                      id="terms"
                      className="peer h-4 w-4 sm:h-5 sm:w-5 text-blue-600 border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 cursor-pointer hover:border-blue-400"
                      required
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="text-xs sm:text-sm text-gray-600 leading-relaxed"
                  >
                    I agree to receive communications from COLOUR RAYS regarding
                    my project. Your information will be kept confidential and
                    used only to provide estimates and updates.
                  </label>
                </div>

                {/* BUTON submit */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                >
                  {/* efect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms]" />

                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      /* spinner */
                      <motion.div
                        key="submitting"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3"
                      >
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Sending Message...</span>
                      </motion.div>
                    ) : isSubmitted ? (
                      /* succes */
                      <motion.div
                        key="submitted"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                        <span>Message Sent Successfully!</span>
                      </motion.div>
                    ) : (
                      /* default */
                      <motion.div
                        key="default"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-3"
                      >
                        <Send className="h-5 w-5 sm:h-6 sm:w-6" />
                        <span className="hidden sm:inline">
                          Send Message &amp; Get Free Quote
                        </span>
                        <span className="sm:hidden">Send Message</span>
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* notă footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center pt-4"
                >
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-100/50 rounded-xl p-3 sm:p-4">
                    <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      <div className="flex items-center justify-center gap-2 mb-2 font-medium">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-2 h-2 bg-green-500 rounded-full"
                        />
                        <span className="text-green-700">
                          Expect a response within 2‑4 business hours
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 1,
                          }}
                          className="w-2 h-2 bg-blue-500 rounded-full"
                        />
                        <span className="text-blue-700">
                          Emergency services available 24/7
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
