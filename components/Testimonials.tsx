"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  MessageCircle,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Heart,
} from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Testimonial } from "../types";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "Downtown Residential",
    rating: 5,
    comment:
      "COLOUR RAYS transformed our home completely! The attention to detail was extraordinary, and the team was professional throughout. Our living room looks like something from a magazine. The color consultation was invaluable and helped us achieve exactly the aesthetic we envisioned.",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    location: "Westside Commercial",
    rating: 5,
    comment:
      "Outstanding work on our office building! They worked around our business hours and completed the project on time and within budget. The quality is exceptional and our clients have noticed the difference. Their professionalism and attention to detail sets them apart.",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: "3",
    name: "Jennifer Chen",
    location: "Suburban Home",
    rating: 5,
    comment:
      "The exterior painting of our Victorian home was challenging, but COLOUR RAYS handled it beautifully. They matched historical colors perfectly and the weather-resistant finish looks amazing after two years. Their expertise in period-appropriate restoration is unmatched.",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: "4",
    name: "David Thompson",
    location: "Kitchen Renovation",
    rating: 5,
    comment:
      "The cabinet refinishing exceeded our expectations! What we thought would require complete replacement, COLOUR RAYS made look brand new at a fraction of the cost. Their spray finish technique is flawless and the durability has been impressive.",
    avatar:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: "5",
    name: "Lisa Park",
    location: "Modern Condo",
    rating: 5,
    comment:
      "From color consultation to final cleanup, everything was perfect. The team was respectful of our space, used quality materials, and delivered exactly what was promised. Their systematic approach and clear communication made the entire process stress-free.",
    avatar:
      "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: "6",
    name: "Robert Johnson",
    location: "Restaurant Chain",
    rating: 5,
    comment:
      "COLOUR RAYS has maintained our restaurant locations for three years. Their reliability, quality, and ability to work with our tight schedules makes them an invaluable partner. The consistency across all our locations is remarkable.",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const stats = [
    {
      icon: Star,
      number: 5.0,
      suffix: "",
      label: "Rating",
      description: "Average client satisfaction",
      color: "from-amber-400 via-yellow-500 to-orange-500",
      glow: "shadow-amber-500/20",
    },
    {
      icon: Users,
      number: 850,
      suffix: "+",
      label: "Clients",
      description: "Projects completed",
      color: "from-emerald-400 via-teal-500 to-cyan-500",
      glow: "shadow-emerald-500/20",
    },
    {
      icon: TrendingUp,
      number: 98,
      suffix: "%",
      label: "Referrals",
      description: "Client recommendation rate",
      color: "from-violet-400 via-purple-500 to-indigo-500",
      glow: "shadow-violet-500/20",
    },
    {
      icon: Award,
      number: 15,
      suffix: "+",
      label: "Experience",
      description: "Years in the industry",
      color: "from-blue-400 via-indigo-500 to-purple-500",
      glow: "shadow-blue-500/20",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      id="testimonials"
      className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184)_1px,transparent_0)] bg-[length:32px_32px] opacity-[0.015]"></div>

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
          className="absolute bottom-32 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-2xl"
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
              <MessageCircle className="h-4 w-4 mr-2 text-blue-600" />
            </motion.div>
            Client Testimonials
          </motion.div>

          {/* Main Title - Fully Responsive */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight"
          >
            Voices of
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block sm:inline bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              {" "}
              Satisfaction
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
            Discover why hundreds of clients trust COLOUR RAYS to transform
            their spaces with unmatched quality, professionalism, and attention
            to detail.
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
              { icon: Heart, number: "850+", label: "Happy Clients" },
              { icon: Star, number: "5.0", label: "Average Rating" },
              { icon: Award, number: "15+", label: "Years Experience" },
              { icon: CheckCircle, number: "98%", label: "Referral Rate" },
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

        {/* Main Testimonial Slider */}
        <div className="relative mb-20">
          <Card className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 overflow-hidden rounded-3xl">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-12 md:p-20">
                {/* Background Quote Pattern */}
                <div className="absolute top-8 left-8 opacity-5">
                  <Quote className="h-32 w-32 text-blue-600" />
                </div>
                <div className="absolute bottom-8 right-8 opacity-5 rotate-180">
                  <Quote className="h-32 w-32 text-indigo-600" />
                </div>

                <div className="relative max-w-4xl mx-auto text-center">
                  {/* Enhanced Rating Display */}
                  <div className="flex justify-center mb-8">
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-2xl shadow-lg">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-white fill-current"
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Enhanced Comment */}
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl text-slate-800 font-light leading-relaxed mb-12 tracking-wide">
                    <span className="text-blue-600 text-5xl leading-none">
                      "
                    </span>
                    {testimonials[currentIndex].comment}
                    <span className="text-blue-600 text-5xl leading-none">
                      "
                    </span>
                  </blockquote>

                  {/* Enhanced Author Section */}
                  <div className="flex items-center justify-center space-x-6">
                    <div className="relative">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-20 h-20 rounded-full object-cover shadow-xl border-4 border-white"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-full shadow-lg">
                        <Star className="h-4 w-4 text-white fill-current" />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-slate-900 text-xl mb-1">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-slate-600 font-medium">
                        {testimonials[currentIndex].location}
                      </div>
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-2"></div>
                        <span className="text-sm text-slate-500 font-medium">
                          Verified Client
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl border border-slate-200 rounded-full w-12 h-12 group"
          >
            <ChevronLeft className="h-6 w-6 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl border border-slate-200 rounded-full w-12 h-12 group"
          >
            <ChevronRight className="h-6 w-6 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
          </Button>
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center space-x-3 mb-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                  : "w-3 h-3 bg-slate-300 hover:bg-slate-400 rounded-full"
              }`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Stats Section - Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative text-center"
              >
                {/* Card with Enhanced Hover Effects */}
                <div className="relative bg-white/60 backdrop-blur-sm border border-gray-100/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover:bg-white/80 hover:border-gray-200/50 transition-all duration-500 hover:shadow-xl">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-xl sm:rounded-2xl transition-opacity duration-500`}
                  />

                  <div className="relative mb-3 sm:mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`inline-flex p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${stat.color} shadow-lg ${stat.glow} group-hover:shadow-xl transition-all duration-500`}
                    >
                      <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Number Display */}
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">
                    {stat.number}
                    <span className="text-blue-600">{stat.suffix}</span>
                  </div>

                  {/* Label */}
                  <div className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </div>

                  {/* Description */}
                  <div className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {stat.description}
                  </div>

                  {/* Subtle Bottom Border */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: 48 }}
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r ${stat.color} transition-all duration-500`}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

     
      </div>
    </section>
  );
}
