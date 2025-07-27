"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Eye,
  Filter,
  Grid3X3,
  ExternalLink,
  Award,
  Users,
  Star,
  Clock,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Project } from "../types";

const projects: Project[] = [
  {
    id: "1",
    title: "Modern Living Room Transformation",
    category: "Interior",
    image:
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Complete interior makeover with custom color palette and premium finishes that create a sophisticated living environment.",
  },
  {
    id: "2",
    title: "Victorian Home Exterior",
    category: "Exterior",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Historic home restoration with period-appropriate colors and advanced weather protection systems.",
  },
  {
    id: "3",
    title: "Corporate Office Complex",
    category: "Commercial",
    image:
      "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Large-scale commercial project featuring modern corporate aesthetics and high-performance coatings.",
  },
  {
    id: "4",
    title: "Luxury Kitchen Cabinets",
    category: "Cabinet",
    image:
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Custom cabinet refinishing with premium lacquer finish and precision spray application techniques.",
  },
  {
    id: "5",
    title: "Contemporary Bedroom Suite",
    category: "Interior",
    image:
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Sophisticated bedroom design featuring accent walls and custom textured finishes for ultimate elegance.",
  },
  {
    id: "6",
    title: "Retail Store Makeover",
    category: "Commercial",
    image:
      "https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Complete retail space transformation designed to enhance customer experience and brand identity.",
  },
  {
    id: "7",
    title: "Craftsman Home Restoration",
    category: "Exterior",
    image:
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Authentic restoration of craftsman-style architecture with historically accurate color schemes.",
  },
  {
    id: "8",
    title: "Artistic Mural Project",
    category: "Specialty",
    image:
      "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Custom artistic mural featuring specialized techniques and premium materials for lasting beauty.",
  },
  {
    id: "9",
    title: "Open Concept Living Space",
    category: "Interior",
    image:
      "https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    description:
      "Seamless color flow throughout open floor plan creating harmony and visual continuity.",
  },
];

const categories = [
  "All",
  "Interior",
  "Exterior",
  "Commercial",
  "Cabinet",
  "Specialty",
];

const categoryConfig: Record<
  string,
  { gradient: string; bg: string; icon: string }
> = {
  Interior: {
    gradient: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50",
    icon: "🏠",
  },
  Exterior: {
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    icon: "🏡",
  },
  Commercial: {
    gradient: "from-purple-500 to-violet-600",
    bg: "bg-purple-50",
    icon: "🏢",
  },
  Cabinet: {
    gradient: "from-orange-500 to-amber-600",
    bg: "bg-orange-50",
    icon: "🚪",
  },
  Specialty: {
    gradient: "from-pink-500 to-rose-600",
    bg: "bg-pink-50",
    icon: "🎨",
  },
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
        ease: [0.25, 0.46, 0.45, 0.94],
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
      scale: 1.05,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="portfolio"
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
              <Grid3X3 className="h-4 w-4 mr-2 text-blue-600" />
            </motion.div>
            Our Portfolio
          </motion.div>

          {/* Main Title - Fully Responsive */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight"
          >
            Showcasing Our
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block sm:inline bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              {" "}
              Finest Work
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
            Explore our diverse collection of completed projects, each telling a
            unique story of transformation, craftsmanship, and unwavering
            attention to detail.
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

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 lg:mb-20"
        >
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const config = categoryConfig[category];

            return (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`group relative px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25"
                    : "bg-white/80 backdrop-blur-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 border border-slate-200 hover:border-blue-200"
                }`}
              >
                <div className="flex items-center space-x-2">
                  {category === "All" ? (
                    <Filter className="h-3 w-3 sm:h-4 sm:w-4" />
                  ) : (
                    <span className="text-sm">{config?.icon}</span>
                  )}
                  <span>{category}</span>
                </div>
                {isActive && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full"
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Enhanced Portfolio Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20"
          >
            {filteredProjects.map((project, index) => {
              const config = categoryConfig[project.category];
              const isLarge = index % 7 === 0 && index !== 0; // Every 7th item (except first) is larger

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover="hover"
                  className={`group ${
                    isLarge ? "sm:col-span-2 xl:col-span-1" : ""
                  }`}
                >
                  <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden rounded-2xl sm:rounded-3xl h-full">
                    <motion.div variants={cardHoverVariants}>
                      {/* Enhanced Image Container */}
                      <div
                        className={`relative overflow-hidden ${
                          isLarge ? "aspect-[16/10]" : "aspect-[16/12]"
                        }`}
                      >
                        <motion.img
                          variants={imageVariants}
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                        {/* Category Badge */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="absolute top-3 sm:top-4 left-3 sm:left-4"
                        >
                          <Badge
                            className={`${config.bg} border-0 text-slate-700 font-medium px-2 sm:px-3 py-1 shadow-sm backdrop-blur-sm text-xs sm:text-sm`}
                          >
                            <span className="mr-1">{config.icon}</span>
                            {project.category}
                          </Badge>
                        </motion.div>

                        {/* Project Number */}
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.05 + 0.1,
                          }}
                          className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs font-bold text-slate-600"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </motion.div>

                        {/* Hover Actions */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                        >
                          <div className="flex gap-2 sm:gap-3">
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                size="sm"
                                className="bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30 rounded-xl shadow-lg text-xs sm:text-sm px-3 sm:px-4 py-2"
                              >
                                <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                                <span className="hidden sm:inline">
                                  View Details
                                </span>
                                <span className="sm:hidden">View</span>
                              </Button>
                            </motion.div>
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                size="sm"
                                variant="ghost"
                                className="bg-white/20 backdrop-blur-md text-white hover:bg-white/30 rounded-xl shadow-lg p-2"
                              >
                                <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                              </Button>
                            </motion.div>
                          </div>
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
                          className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-tight"
                        >
                          {project.title}
                        </motion.h3>

                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base mb-4 sm:mb-6">
                          {project.description}
                        </p>
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
