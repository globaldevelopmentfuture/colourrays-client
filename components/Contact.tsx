"use client";

import { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  Users,
  Star,
  Award,
  TrendingUp,
  Heart,
} from "lucide-react";

interface ContactInfo {
  icon: any;
  title: string;
  primary: string;
  secondary?: string;
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

// Floating Animation Hook
function useFloatingAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.animation = "float 6s ease-in-out infinite";
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}

// Counter Animation Hook
function useCountUp(end: number, start: number = 0, duration: number = 2000) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (end - start) * easeOutQuart;

      setCount(Math.floor(current));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isVisible, end, start, duration]);

  return { count, ref };
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const floatingRef = useFloatingAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: "Phone",
      primary: "(555) 123-4567",
      secondary: "(555) 123-4568",
      accent: "24/7 Emergency Service",
      color: "from-emerald-500 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      glowColor: "shadow-emerald-500/20",
    },
    {
      icon: Mail,
      title: "Email",
      primary: "info@elitepainting.com",
      secondary: "quotes@elitepainting.com",
      accent: "Response within 2 hours",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      glowColor: "shadow-blue-500/20",
    },
    {
      icon: MapPin,
      title: "Service Area",
      primary: "Metropolitan Area",
      secondary: "50-mile radius",
      accent: "Free estimates included",
      color: "from-violet-500 to-purple-600",
      bgColor: "from-violet-50 to-purple-50",
      glowColor: "shadow-violet-500/20",
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Mon-Fri: 7AM - 7PM",
      secondary: "Sat: 8AM - 5PM",
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
    "Maintenance & Touch-ups",
    "Free Consultation",
  ];

  const trustIndicators = [
    {
      icon: Shield,
      label: "Licensed & Insured",
      color: "from-emerald-400 to-teal-500",
    },
    {
      icon: Zap,
      label: "Quick Response",
      color: "from-blue-400 to-indigo-500",
    },
    {
      icon: Users,
      label: "500+ Happy Clients",
      color: "from-violet-400 to-purple-500",
    },
    {
      icon: Sparkles,
      label: "Premium Quality",
      color: "from-amber-400 to-orange-500",
    },
  ];

  // Premium Stats Data
  const premiumStats = [
    {
      icon: Star,
      number: 5.0,
      suffix: "",
      label: "Client Rating",
      description: "Average satisfaction score",
      color: "from-amber-400 via-yellow-500 to-orange-500",
      glow: "shadow-amber-500/25",
      bgGlow: "from-amber-50 to-orange-50",
    },
    {
      icon: Users,
      number: 850,
      suffix: "+",
      label: "Projects Done",
      description: "Successfully completed",
      color: "from-emerald-400 via-teal-500 to-cyan-500",
      glow: "shadow-emerald-500/25",
      bgGlow: "from-emerald-50 to-cyan-50",
    },
    {
      icon: TrendingUp,
      number: 98,
      suffix: "%",
      label: "Referral Rate",
      description: "Client recommendations",
      color: "from-violet-400 via-purple-500 to-indigo-500",
      glow: "shadow-violet-500/25",
      bgGlow: "from-violet-50 to-indigo-50",
    },
    {
      icon: Award,
      number: 15,
      suffix: "+",
      label: "Years Trusted",
      description: "Industry experience",
      color: "from-blue-400 via-indigo-500 to-purple-500",
      glow: "shadow-blue-500/25",
      bgGlow: "from-blue-50 to-purple-50",
    },
    {
      icon: Heart,
      number: 24,
      suffix: "/7",
      label: "Support",
      description: "Emergency availability",
      color: "from-rose-400 via-pink-500 to-red-500",
      glow: "shadow-rose-500/25",
      bgGlow: "from-rose-50 to-red-50",
    },
    {
      icon: Shield,
      number: 100,
      suffix: "%",
      label: "Insured",
      description: "Full coverage guarantee",
      color: "from-green-400 via-emerald-500 to-teal-500",
      glow: "shadow-green-500/25",
      bgGlow: "from-green-50 to-teal-50",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ultra Enhanced Header */}
        <div className="text-center mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-8 backdrop-blur-sm shadow-lg shadow-blue-500/10">
            <Send className="h-4 w-4" />
            <span>Get In Touch</span>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Ready to Transform
            <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Your Space?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Contact us today for your free consultation and detailed estimate.
            We're here to bring your painting vision to life with unmatched
            quality and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Ultra Enhanced Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/70 backdrop-blur-sm border border-gray-100/50 rounded-2xl p-6 hover:bg-white/90 hover:border-gray-200/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                >
                  {/* Enhanced Gradient Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${info.color} opacity-0 group-hover:opacity-8 rounded-2xl transition-opacity duration-500`}
                  ></div>

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-2xl"></div>

                  <div className="relative flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${info.color} shadow-lg ${info.glowColor} group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg group-hover:text-gray-800 transition-colors duration-300">
                        {info.title}
                      </h3>
                      <p className="text-gray-700 font-medium mb-1 group-hover:text-gray-800 transition-colors duration-300">
                        {info.primary}
                      </p>
                      {info.secondary && (
                        <p className="text-gray-600 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                          {info.secondary}
                        </p>
                      )}
                      <p
                        className={`text-sm font-medium bg-gradient-to-r ${info.color} bg-clip-text text-transparent`}
                      >
                        {info.accent}
                      </p>
                    </div>
                  </div>

                  {/* Enhanced Bottom Border Effect */}
                  <div
                    className={`absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r ${info.color} group-hover:w-20 group-hover:-translate-x-1/2 transition-all duration-500 rounded-t-full`}
                  ></div>
                </div>
              );
            })}
          </div>

          {/* Ultra Enhanced Contact Form */}
          <div className="lg:col-span-3">
            <div className="relative bg-white/80 backdrop-blur-xl border border-gray-100/50 shadow-[0_20px_60px_rgba(0,0,0,0.08)] rounded-3xl overflow-hidden">
              {/* Enhanced Form Header with Gradient */}
              <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-8 text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.05),transparent_50%)]"></div>

                <div className="relative">
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                    Get Your Free Estimate
                  </h3>
                  <p className="text-blue-100 font-light">
                    Fill out the form below and we'll get back to you within 24
                    hours with a detailed quote.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
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
                        className="w-full px-5 py-4 bg-gradient-to-r from-gray-50/80 to-gray-50/60 border-2 border-gray-200/60 rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-500 placeholder-gray-400 text-gray-800 font-medium hover:border-gray-300 hover:shadow-md"
                      />
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 opacity-0 transition-all duration-500 pointer-events-none ${
                          focusedField === "name" ? "opacity-100 scale-105" : ""
                        }`}
                      ></div>
                      <div
                        className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 opacity-0 transition-opacity duration-500 pointer-events-none ${
                          focusedField === "name" ? "opacity-30" : ""
                        }`}
                      ></div>
                      {/* Floating label effect */}
                      <div
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          formData.name || focusedField === "name"
                            ? "-top-2 text-xs bg-white px-2 text-blue-600 font-semibold"
                            : "top-4 text-gray-400"
                        }`}
                      >
                        {!(formData.name || focusedField === "name") &&
                          "Enter your full name"}
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
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
                        className="w-full px-5 py-4 bg-gradient-to-r from-gray-50/80 to-gray-50/60 border-2 border-gray-200/60 rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-500 placeholder-gray-400 text-gray-800 font-medium hover:border-gray-300 hover:shadow-md"
                      />
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 opacity-0 transition-all duration-500 pointer-events-none ${
                          focusedField === "email"
                            ? "opacity-100 scale-105"
                            : ""
                        }`}
                      ></div>
                      <div
                        className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 opacity-0 transition-opacity duration-500 pointer-events-none ${
                          focusedField === "email" ? "opacity-30" : ""
                        }`}
                      ></div>
                      {/* Email validation indicator */}
                      {formData.email && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2">
                          {formData.email.includes("@") &&
                          formData.email.includes(".") ? (
                            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                          ) : (
                            <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center animate-pulse">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          )}
                        </div>
                      )}
                      {/* Floating label effect */}
                      <div
                        className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                          formData.email || focusedField === "email"
                            ? "-top-2 text-xs bg-white px-2 text-blue-600 font-semibold"
                            : "top-4 text-gray-400"
                        }`}
                      >
                        {!(formData.email || focusedField === "email") &&
                          "Enter your email address"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone and Service Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
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
                        className="w-full px-5 py-4 pl-12 bg-gradient-to-r from-gray-50/80 to-gray-50/60 border-2 border-gray-200/60 rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-500 placeholder-gray-400 text-gray-800 font-medium hover:border-gray-300 hover:shadow-md"
                      />
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 opacity-0 transition-all duration-500 pointer-events-none ${
                          focusedField === "phone"
                            ? "opacity-100 scale-105"
                            : ""
                        }`}
                      ></div>
                      <div
                        className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 opacity-0 transition-opacity duration-500 pointer-events-none ${
                          focusedField === "phone" ? "opacity-30" : ""
                        }`}
                      ></div>
                      {/* Phone icon */}
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Phone
                          className={`h-4 w-4 transition-colors duration-300 ${
                            focusedField === "phone"
                              ? "text-blue-500"
                              : "text-gray-400"
                          }`}
                        />
                      </div>
                      {/* Floating label effect */}
                      <div
                        className={`absolute left-12 transition-all duration-300 pointer-events-none ${
                          formData.phone || focusedField === "phone"
                            ? "-top-2 text-xs bg-white px-2 text-blue-600 font-semibold"
                            : "top-4 text-gray-400"
                        }`}
                      >
                        {!(formData.phone || focusedField === "phone") &&
                          "Phone number (optional)"}
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
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
                        className="w-full px-5 py-4 bg-gradient-to-r from-gray-50/80 to-gray-50/60 border-2 border-gray-200/60 rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-500 appearance-none cursor-pointer text-gray-800 font-medium hover:border-gray-300 hover:shadow-md"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option
                            className="p-2"
                            key={service}
                            value={service.toLowerCase().replace(/\s+/g, "-")}
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 opacity-0 transition-all duration-500 pointer-events-none ${
                          focusedField === "service"
                            ? "opacity-100 scale-105"
                            : ""
                        }`}
                      ></div>
                      <div
                        className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 opacity-0 transition-opacity duration-500 pointer-events-none ${
                          focusedField === "service" ? "opacity-30" : ""
                        }`}
                      ></div>

                      {/* Enhanced Custom Arrow */}
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <div
                          className={`p-1 rounded-full transition-all duration-300 ${
                            focusedField === "service"
                              ? "bg-blue-500 text-white"
                              : "bg-gray-200 text-gray-400"
                          }`}
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
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
                      className="w-full px-5 py-4 bg-gradient-to-r from-gray-50/80 to-gray-50/60 border-2 border-gray-200/60 rounded-2xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/10 transition-all duration-500 placeholder-gray-400 resize-none text-gray-800 font-medium hover:border-gray-300 hover:shadow-md"
                      rows={5}
                    />
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-violet-500/10 opacity-0 transition-all duration-500 pointer-events-none ${
                        focusedField === "message"
                          ? "opacity-100 scale-[1.02]"
                          : ""
                      }`}
                    ></div>
                    <div
                      className={`absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 opacity-0 transition-opacity duration-500 pointer-events-none ${
                        focusedField === "message" ? "opacity-30" : ""
                      }`}
                    ></div>

                    {/* Character counter */}
                    <div className="absolute bottom-3 right-4 text-xs text-gray-400">
                      {formData.message.length}/500
                    </div>

                    {/* Floating label effect */}
                    <div
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        formData.message || focusedField === "message"
                          ? "-top-2 text-xs bg-white px-2 text-blue-600 font-semibold"
                          : "top-4 text-gray-400"
                      }`}
                    >
                      {!(formData.message || focusedField === "message") &&
                        "Describe your project details..."}
                    </div>
                  </div>
                </div>

                {/* Enhanced Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <div className="relative mt-1 group">
                    <input
                      type="checkbox"
                      id="terms"
                      className="peer h-5 w-5 text-blue-600 border-2 border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 cursor-pointer hover:border-blue-400"
                      required
                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    I agree to receive communications from Elite Painting
                    Services regarding my project. Your information will be kept
                    confidential and used only to provide estimates and updates.
                  </label>
                </div>

                {/* Ultra Enhanced Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="group relative w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-700 hover:via-indigo-700 hover:to-violet-700 text-white py-5 px-8 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  {/* Enhanced Button Background Animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>

                  {/* Pulse Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 opacity-0 group-hover:opacity-20 animate-pulse rounded-2xl"></div>

                  {/* Border glow effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="h-6 w-6 animate-bounce" />
                        <span>Message Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-6 w-6 group-hover:translate-x-1 group-hover:rotate-12 transition-transform duration-300" />
                        <span>Send Message & Get Free Quote</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                      </>
                    )}
                  </div>
                </button>

                {/* Enhanced Footer Note */}
                <div className="text-center pt-4">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-100/50 rounded-xl p-4">
                    <div className="text-sm text-gray-600 leading-relaxed">
                      <div className="inline-flex items-center gap-2 mb-2 font-medium">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-green-700">
                          Expect a response within 2-4 business hours
                        </span>
                      </div>
                      <br />
                      <div className="inline-flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-blue-700">
                          Emergency services available 24/7
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
