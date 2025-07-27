"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Mail,
  ArrowRight,
  MapPin,
  Shield,
  Award,
  Clock,
  Star,
  CheckCircle,
  Users,
  Palette,
  Home,
  Building,
  Brush,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: "Home", href: "#home", icon: Home },
    { label: "Services", href: "#services", icon: Brush },
    { label: "About", href: "#about", icon: Users },
    { label: "Portfolio", href: "#portfolio", icon: Palette },
    { label: "Contact", href: "#contact", icon: Phone },
  ];

  const contactInfo = {
    phone: "(555) 123-4567",
    email: "info@colourrays.com",
  };

  const services = [
    { name: "Interior Painting", icon: Home, color: "from-blue-500 to-blue-600" },
    { name: "Exterior Painting", icon: Building, color: "from-green-500 to-green-600" },
    { name: "Commercial", icon: Building, color: "from-purple-500 to-purple-600" },
    { name: "Residential", icon: Home, color: "from-orange-500 to-orange-600" },
  ];

  const trustIndicators = [
    { 
      title: "Licensed & Insured", 
      subtitle: "Fully Protected", 
      icon: Shield, 
      color: "from-blue-500 to-blue-600" 
    },
    { 
      title: "15+ Years Experience", 
      subtitle: "Proven Expertise", 
      icon: Award, 
      color: "from-green-500 to-green-600" 
    },
    { 
      title: "Local Professionals", 
      subtitle: "Community Trusted", 
      icon: MapPin, 
      color: "from-purple-500 to-purple-600" 
    },
  ];

  const benefits = [
    { text: "Free Consultation & Estimates", icon: CheckCircle },
    { text: "Premium Quality Materials", icon: Star },
    { text: "24/7 Emergency Service", icon: Clock },
    { text: "100% Satisfaction Guarantee", icon: Shield },
    { text: "Licensed & Insured Since 2010", icon: Award },
    { text: "500+ Happy Customers", icon: Users },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? -20 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white ${
          isMobileMenuOpen ? "hidden" : "block"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 sm:py-2.5">
            <div className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-1.5 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
              >
                <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span className="font-medium hidden min-[475px]:inline">
                  {contactInfo.phone}
                </span>
                <span className="font-medium min-[475px]:hidden">Call</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="hidden sm:flex items-center space-x-1.5 hover:text-blue-400 transition-colors duration-200 cursor-pointer"
              >
                <Mail className="h-3.5 w-3.5" />
                <span className="font-medium">{contactInfo.email}</span>
              </motion.div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
              <div className="flex items-center space-x-1 text-green-400">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-green-400 rounded-full"
                />
                <span className="font-medium hidden sm:inline">Available 24/7</span>
                <span className="font-medium sm:hidden">Online</span>
              </div>
              <div className="hidden md:flex items-center space-x-1.5">
                <Shield className="h-3.5 w-3.5 text-blue-400" />
                <span className="font-medium">Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-2xl shadow-2xl shadow-slate-900/10 border-b border-slate-200/50"
            : "bg-transparent"
        }`}
        style={{ top: isScrolled || isMobileMenuOpen ? "0" : "36px" }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="flex items-center group cursor-pointer"
            >
              <div className="relative">
                <motion.div 
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 30px rgba(99, 102, 241, 0.4)",
                      "0 0 20px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur-sm opacity-20 scale-110"
                />
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-2 sm:p-2.5 lg:p-3 rounded-2xl "
                >
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-white rounded-lg flex items-center justify-center">
                    <motion.div 
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.5 }}
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md transform rotate-45"
                    />
                  </div>
                </motion.div>
              </div>
              <div className="ml-2 sm:ml-3 lg:ml-4">
                <h1 className="text-base sm:text-lg lg:text-2xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                  COLOUR RAYS
                </h1>
                <p className="text-xs text-slate-500 font-semibold tracking-wider hidden sm:block group-hover:text-blue-600 transition-colors duration-300">
                  PROFESSIONAL PAINTING
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileHover={{ scale: 1.05 }}
                  className="relative px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all duration-300 group overflow-hidden rounded-xl"
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div 
                    whileHover={{ scale: 1 }}
                    initial={{ scale: 0 }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl origin-center"
                  />
                  <motion.div 
                    whileHover={{ width: 32, x: -16 }}
                    initial={{ width: 0, x: 0 }}
                    className="absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600"
                  />
                </motion.a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-xs text-slate-500 font-medium">Free Estimate</p>
                <p className="text-sm font-bold text-slate-800 flex items-center">
                  <Clock className="w-3 h-3 mr-1 text-green-500" />
                  24/7 Available
                </p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-bold  transition-all duration-300 group">
                  Get Free Quote
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.div>
                </Button>
              </motion.div>
            </div>

            {/* Tablet CTA */}
            <div className="hidden md:hidden items-center space-x-3">
              <div className="text-right">
                <p className="text-xs text-slate-500 font-medium">Free Quote</p>
                <p className="text-sm font-bold text-green-600">Available</p>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300">
                  Quote
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2.5 text-slate-700 hover:text-blue-600 transition-all duration-300 group rounded-xl"
              >
                <motion.div 
                  whileHover={{ scale: 1 }}
                  initial={{ scale: 0 }}
                  className="absolute inset-0 bg-gradient-to-r from-slate-100 to-blue-50 rounded-xl"
                />
                <div className="relative z-10">
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="h-5 w-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden fixed inset-0 z-40"
              style={{ top: "0px" }}
            >
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 h-full">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
                  />
                  <motion.div 
                    animate={{ 
                      scale: [1.2, 1, 1.2],
                      opacity: [0.1, 0.15, 0.1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                    className="absolute top-40 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"
                  />
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.3, 1],
                      opacity: [0.1, 0.25, 0.1]
                    }}
                    transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                    className="absolute bottom-40 left-1/2 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"
                  />
                </div>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="relative h-full flex flex-col px-6 py-8 overflow-y-auto"
                >
                  {/* Header Section */}
                  <div className="flex items-center justify-between mb-8">
                    <motion.div 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="flex items-center space-x-3"
                    >
                      <div className="relative">
                        <motion.div 
                          animate={{ 
                            boxShadow: [
                              "0 0 20px rgba(59, 130, 246, 0.6)",
                              "0 0 30px rgba(147, 51, 234, 0.6)",
                              "0 0 20px rgba(236, 72, 153, 0.6)",
                              "0 0 30px rgba(59, 130, 246, 0.6)"
                            ]
                          }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl blur-sm opacity-60"
                        />
                        <div className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-3 rounded-2xl">
                          <div className="w-6 h-6 bg-white rounded-lg flex items-center justify-center">
                            <motion.div 
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                              className="w-3 h-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md transform rotate-45"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h1 className="text-xl font-black text-white tracking-tight">
                          COLOUR RAYS
                        </h1>
                        <p className="text-xs text-blue-200 font-semibold tracking-wider">
                          PROFESSIONAL PAINTING
                        </p>
                      </div>
                    </motion.div>
                    <motion.button
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-2xl transition-all duration-300"
                    >
                      <X className="h-6 w-6" />
                    </motion.button>
                  </div>

                  {/* Hero Section */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="text-center mb-8"
                  >
                    <h2 className="text-3xl font-bold text-white mb-3 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                      Transform Your Space
                    </h2>
                    <p className="text-blue-200 text-sm leading-relaxed mb-4">
                      Professional painting services with expert craftsmanship and premium materials
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1 text-yellow-300">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                          >
                            <Star className="h-3 w-3 fill-current" />
                          </motion.div>
                        ))}
                      </div>
                      <span className="text-blue-200 font-medium">Licensed & Insured Since 2010</span>
                    </div>
                  </motion.div>

                  {/* Navigation Links */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="space-y-3 mb-8"
                  >
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center">
                      <motion.div 
                        animate={{ width: [20, 32, 20] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mr-3"
                      />
                      Navigation
                    </h3>
                    {navItems.map((item, index) => {
                      const IconComponent = item.icon;
                      return (
                        <motion.a
                          key={item.label}
                          href={item.href}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center justify-between bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 rounded-2xl p-4 transition-all duration-300 group backdrop-blur-xl"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="flex items-center text-white font-semibold">
                            <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-2 rounded-xl mr-4">
                              <IconComponent className="h-4 w-4 text-white" />
                            </div>
                            {item.label}
                          </span>
                          <motion.div
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ArrowRight className="h-5 w-5 text-white/60 group-hover:text-white" />
                          </motion.div>
                        </motion.a>
                      );
                    })}
                  </motion.div>

                  {/* Contact Cards */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="grid grid-cols-1 gap-4 mb-8"
                  >
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center">
                      <motion.div 
                        animate={{ width: [20, 32, 20] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="h-0.5 bg-gradient-to-r from-green-400 to-blue-400 mr-3"
                      />
                      Contact Us Now
                    </h3>
                    
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-gradient-to-r from-green-500 to-green-600 p-2.5 rounded-xl">
                            <Phone className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="text-xs text-blue-200 font-medium">Call Now</p>
                            <p className="font-bold text-white text-lg">{contactInfo.phone}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <motion.div 
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 bg-green-400 rounded-full"
                          />
                          <span className="text-sm font-medium text-green-300">Available</span>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2.5 rounded-xl">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-blue-200 font-medium">Email Us</p>
                          <p className="font-semibold text-white">{contactInfo.email}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Services Section */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="mb-8"
                  >
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center">
                      <motion.div 
                        animate={{ width: [20, 32, 20] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        className="h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 mr-3"
                      />
                      Our Services
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                          <motion.div
                            key={service.name}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
                          >
                            <div className="flex items-center space-x-2">
                              <div className={`bg-gradient-to-r ${service.color} p-1.5 rounded-lg`}>
                                <IconComponent className="h-3 w-3 text-white" />
                              </div>
                              <span className="text-white text-sm font-medium">{service.name}</span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Trust Indicators */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="mb-8"
                  >
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center">
                      <motion.div 
                        animate={{ width: [20, 32, 20] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                        className="h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 mr-3"
                      />
                      Why Choose Us
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {trustIndicators.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                          <motion.div
                            key={item.title}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 4 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`bg-gradient-to-r ${item.color} p-2 rounded-xl`}>
                                <IconComponent className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <span className="text-white font-semibold block">{item.title}</span>
                                <p className="text-blue-200 text-sm">{item.subtitle}</p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>

                  {/* Benefits Section */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 }}
                    className="mb-8"
                  >
                    <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 flex items-center">
                      <motion.div 
                        animate={{ width: [20, 32, 20] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
                        className="h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 mr-3"
                      />
                      Our Promise
                    </h3>
                    <div className="space-y-3">
                      {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon;
                        return (
                          <motion.div
                            key={benefit.text}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.3, delay: 1.0 + index * 0.05 }}
                            whileHover={{ scale: 1.02, x: 4 }}
                            className="flex items-center space-x-3 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-xl hover:bg-white/10 transition-all duration-300"
                          >
                            <IconComponent className="h-4 w-4 text-green-300 flex-shrink-0" />
                            <span className="text-white text-sm">{benefit.text}</span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>


                  {/* Footer Info */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                    className="text-center pt-6 border-t border-white/20"
                  >
                    <p className="text-white font-semibold mb-2">Professional Painting Since 2010</p>
                    <p className="text-blue-200 text-sm mb-4">Free Estimates • Premium Materials • Expert Craftsmanship</p>
                    <div className="flex items-center justify-center space-x-4 text-xs text-blue-300">
                      <span>Licensed & Insured</span>
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1 h-1 bg-blue-400 rounded-full"
                      />
                      <span>Local Experts</span>
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="w-1 h-1 bg-blue-400 rounded-full"
                      />
                      <span>Quality Guaranteed</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}