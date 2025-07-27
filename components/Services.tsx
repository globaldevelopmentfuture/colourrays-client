"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Home,
  Building2,
  Palette,
  Shield,
  Wrench,
  Sparkles,
  CheckCircle,
  Filter,
  Star,
  Award,
  Clock,
  Users,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Service } from "../types";

const services: Service[] = [
  {
    id: "1",
    title: "Residential Interior",
    description:
      "Transform your living spaces with premium interior painting services that bring your vision to life with expert craftsmanship.",
    features: [
      "Expert color consultation",
      "Premium eco-friendly paints",
      "Complete furniture protection",
      "Professional cleanup included",
    ],
    icon: "Home",
    category: "Residential",
    image:
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Exterior & Facades",
    description:
      "Enhance curb appeal and protect your property with weather-resistant exterior painting solutions that last for years.",
    features: [
      "Weather-resistant technology",
      "Power washing included",
      "Precision trim work",
      "Color matching guarantee",
    ],
    icon: "Building2",
    category: "Residential",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Commercial Spaces",
    description:
      "Professional painting for offices and commercial properties with minimal business disruption and maximum quality results.",
    features: [
      "Flexible scheduling options",
      "Commercial-grade materials",
      "Safety compliance certified",
      "Ongoing maintenance plans",
    ],
    icon: "Building2",
    category: "Commercial",
    image:
      "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    id: "4",
    title: "Cabinet Refinishing",
    description:
      "Revitalize your kitchen and bathrooms with expert cabinet painting and refinishing services using premium techniques.",
    features: [
      "Multiple finish selections",
      "Hardware upgrade options",
      "Spray finish precision",
      "Fast project completion",
    ],
    icon: "Palette",
    category: "Specialty",
    image:
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    id: "5",
    title: "Artistic Finishes",
    description:
      "Custom decorative techniques including faux painting, textures, and artistic wall treatments for unique spaces.",
    features: [
      "Bespoke design creation",
      "Advanced faux techniques",
      "Textured wall treatments",
      "Mural and art services",
    ],
    icon: "Sparkles",
    category: "Specialty",
    image:
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    id: "6",
    title: "Maintenance Plans",
    description:
      "Preserve your investment with comprehensive maintenance programs and priority touch-up services for lasting beauty.",
    features: [
      "Scheduled inspections",
      "Priority touch-up service",
      "Color archive system",
      "Preventive maintenance",
    ],
    icon: "Shield",
    category: "Maintenance",
    image:
      "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
];

const iconMap = {
  Home,
  Building2,
  Palette,
  Shield,
  Wrench,
  Sparkles,
};

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Specialty",
  "Maintenance",
];

const categoryColors = {
  Residential: "from-blue-500 to-blue-600",
  Commercial: "from-purple-500 to-purple-600",
  Specialty: "from-pink-500 to-pink-600",
  Maintenance: "from-green-500 to-green-600",
};

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredServices =
    activeCategory === "All"
      ? services
      : services.filter((service) => service.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const cardHoverVariants: Variants = {
    hover: {
      y: -4,
      scale: 1.01,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const imageVariants: Variants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants: Variants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="services"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184)_1px,transparent_0)] bg-[length:24px_24px] opacity-[0.02]"></div>

        {/* Floating Shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute top-1/2 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: 4,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="absolute bottom-32 left-1/3 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium mb-4 sm:mb-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Palette className="h-4 w-4 mr-2 text-blue-600" />
            </motion.div>
            Professional Services
          </motion.div>

          {/* Main Title - Fully Responsive */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight"
          >
            Crafted with
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block sm:inline bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              {" "}
              Precision
            </motion.span>
          </motion.h2>

          {/* Description - Responsive */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light px-4 sm:px-0"
          >
            From concept to completion, we deliver exceptional painting
            solutions that transform spaces and exceed expectations with
            professional craftsmanship.
          </motion.p>

          {/* Stats Row - New Addition */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-12"
          >
            {[
              { icon: Award, number: "500+", label: "Projects Completed" },
              { icon: Users, number: "15+", label: "Years Experience" },
              { icon: Star, number: "5.0", label: "Average Rating" },
              { icon: Clock, number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
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

        {/* Enhanced Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 lg:mb-20"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white/80 backdrop-blur-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 hover:border-blue-200"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Filter className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>{category}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Services Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20"
          >
            {filteredServices.map((service, index) => {
              const IconComponent =
                iconMap[service.icon as keyof typeof iconMap];
              const categoryColor =
                categoryColors[service.category as keyof typeof categoryColors];

              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover="hover"
                  className="group"
                >
                  <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden rounded-2xl sm:rounded-3xl h-full">
                    <motion.div variants={cardHoverVariants}>
                      {/* Enhanced Image Container */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden">
                        <motion.img
                          variants={imageVariants}
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>

                        {/* Enhanced Category Badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="absolute top-3 sm:top-4 left-3 sm:left-4"
                        >
                          <span
                            className={`inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r ${categoryColor} text-white shadow-lg backdrop-blur-sm`}
                          >
                            {service.category}
                          </span>
                        </motion.div>

                        {/* Enhanced Icon */}
                        <motion.div
                          variants={iconVariants}
                          className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg"
                        >
                          <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-slate-700 group-hover:text-white transition-colors duration-500" />
                        </motion.div>

                        {/* Hover Overlay */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent"
                        />
                      </div>

                      <CardContent className="p-4 sm:p-6 lg:p-8">
                        {/* Title */}
                        <motion.h3
                          whileHover={{ x: 4 }}
                          className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight"
                        >
                          {service.title}
                        </motion.h3>

                        {/* Description */}
                        <p className="text-slate-600 mb-4 sm:mb-6 leading-relaxed font-light text-sm sm:text-base">
                          {service.description}
                        </p>

                        {/* Simple Features List */}
                        <div className="space-y-2 sm:space-y-3">
                          {service.features.map((feature, featureIndex) => (
                            <motion.div
                              key={featureIndex}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: featureIndex * 0.1,
                              }}
                              className="flex items-center text-sm sm:text-base text-slate-600"
                            >
                              <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                              <span className="font-medium">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </motion.div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

   
      </div>
    </section>
  );
}
