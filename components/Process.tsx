"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  CheckCircle, 
  ArrowRight, 
  Sparkles, 
  Clock, 
  FileText, 
  Palette, 
  Wrench, 
  Brush, 
  Eye, 
  Star, 
  Zap,
  Award,
  Users,
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ProcessStep } from '../types';

const processSteps: ProcessStep[] = [
  {
    id: '1',
    title: 'Initial Consultation & Assessment',
    description: 'We begin with an in-depth consultation to understand your vision, assess project requirements, and provide expert recommendations tailored to your specific needs, timeline, and budget constraints.',
    icon: 'consultation'
  },
  {
    id: '2',
    title: 'Detailed Proposal & Planning',
    description: 'Receive a comprehensive, transparent proposal with detailed breakdowns of materials, labor, timeline, and costs. No hidden fees, just complete clarity and professional planning.',
    icon: 'quote'
  },
  {
    id: '3',
    title: 'Color Consultation & Design',
    description: 'Our color specialists work with you to select the perfect palette. We provide physical samples, digital mockups, and expert guidance to visualize your transformed space.',
    icon: 'color'
  },
  {
    id: '4',
    title: 'Surface Preparation & Protection',
    description: 'Meticulous preparation ensures lasting results. We thoroughly clean, sand, prime, and repair all surfaces while protecting your furniture and belongings with premium materials.',
    icon: 'prep'
  },
  {
    id: '5',
    title: 'Professional Paint Application',
    description: 'Our master craftsmen apply premium paints using advanced techniques and professional-grade equipment, ensuring flawless coverage and a finish that exceeds expectations.',
    icon: 'paint'
  },
  {
    id: '6',
    title: 'Quality Inspection & Completion',
    description: 'We conduct a comprehensive final inspection with you, ensuring every detail meets our exacting standards. Your complete satisfaction is our ultimate measure of success.',
    icon: 'inspection'
  }
];

const iconMap = {
  consultation: Clock,
  quote: FileText,
  color: Palette,
  prep: Wrench,
  paint: Brush,
  inspection: Eye,
};

const stepConfig = [
  { gradient: 'from-blue-500 to-indigo-600', bg: 'bg-blue-50', accent: 'text-blue-600' },
  { gradient: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', accent: 'text-emerald-600' },
  { gradient: 'from-purple-500 to-violet-600', bg: 'bg-purple-50', accent: 'text-purple-600' },
  { gradient: 'from-orange-500 to-amber-600', bg: 'bg-orange-50', accent: 'text-orange-600' },
  { gradient: 'from-pink-500 to-rose-600', bg: 'bg-pink-50', accent: 'text-pink-600' },
  { gradient: 'from-cyan-500 to-blue-600', bg: 'bg-cyan-50', accent: 'text-cyan-600' },
];

export default function Process() {
  // Animation variants
  const containerVariants : Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };


  const stepVariants : Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants : Variants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const iconVariants : Variants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="process" className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
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
            ease: [0.25, 0.46, 0.45, 0.94]
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
            ease: [0.25, 0.46, 0.45, 0.94]
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
              <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
            </motion.div>
            Our Process
          </motion.div>
          
          {/* Main Title - Fully Responsive */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight"
          >
            Delivering Excellence
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block sm:inline bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              {" "}Step by Step
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
            Our proven methodology ensures every project is executed with precision, 
            transparency, and unwavering commitment to exceptional results.
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
              { icon: Award, number: "6", label: "Step Process" },
              { icon: Users, number: "15+", label: "Years Experience" },
              { icon: Star, number: "5.0", label: "Average Rating" },
              { icon: CheckCircle, number: "100%", label: "Satisfaction Rate" }
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
                <div className="text-lg sm:text-xl font-bold text-slate-900">{stat.number}</div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Enhanced Process Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 transform -translate-x-px"></div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12 sm:space-y-16 lg:space-y-24"
          >
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];
              const config = stepConfig[index];
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={step.id} 
                  variants={stepVariants}
                  className={`relative flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8 xl:pr-16' : 'lg:pl-8 xl:pl-16'} mb-8 lg:mb-0`}>
                    <motion.div
                      whileHover={{ y: -4, scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Card className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 overflow-hidden rounded-2xl sm:rounded-3xl">
                        <CardContent className="p-6 sm:p-8">
                          <div className={`flex items-start space-x-4 sm:space-x-6 ${isEven ? '' : 'lg:flex-row-reverse lg:space-x-reverse lg:text-right'}`}>
                            {/* Step Number & Icon */}
                            <div className="flex-shrink-0 relative">
                              <motion.div 
                                variants={iconVariants}
                                whileHover="hover"
                                className={`relative bg-gradient-to-r ${config.gradient} p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500`}
                              >
                                <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                                <div className="absolute inset-0 bg-white/20 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              </motion.div>
                              {/* Step Number Badge */}
                              <div className={`absolute -top-2 -right-2 bg-white border-2 border-slate-200 rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-xs sm:text-sm font-bold ${config.accent} shadow-sm`}>
                                {step.id}
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className={`flex-1 space-y-3 min-w-0 ${isEven ? '' : 'lg:text-right'}`}>
                              <motion.h3 
                                whileHover={{ x: isEven ? 4 : -4 }}
                                className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight"
                              >
                                {step.title}
                              </motion.h3>
                              <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                                {step.description}
                              </p>
                              
                              {/* Progress Indicator */}
                              <div className={`flex items-center space-x-2 pt-2 ${isEven ? '' : 'lg:justify-end'}`}>
                                <motion.div 
                                  animate={{ scale: [1, 1.2, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${config.gradient}`}
                                />
                                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                                  Step {step.id} of 6
                                </span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>

                  {/* Timeline Node - Desktop */}
                  <div className="lg:block w-2/12 flex justify-center relative z-10">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`bg-gradient-to-r ${config.gradient} rounded-full w-4 h-4 shadow-lg border-4 border-white relative`}
                    >
                      <motion.div 
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        className="absolute inset-0 bg-white/30 rounded-full"
                      />
                    </motion.div>
                  </div>

                  {/* Visual Element */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pl-8 xl:pl-16' : 'lg:pr-8 xl:pr-16'}`}>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="relative group"
                    >
                      <div className="aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-sm border border-slate-100">
                        <motion.img 
                          variants={imageVariants}
                          whileHover="hover"
                          src={`https://images.pexels.com/photos/${
                            index === 0 ? '4207892' :
                            index === 1 ? '5691659' :
                            index === 2 ? '1669754' :
                            index === 3 ? '1571460' :
                            index === 4 ? '1648776' :
                            '1571468'
                          }/pexels-photo-${
                            index === 0 ? '4207892' :
                            index === 1 ? '5691659' :
                            index === 2 ? '1669754' :
                            index === 3 ? '1571460' :
                            index === 4 ? '1648776' :
                            '1571468'
                          }.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop`}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                      </div>
                      
                      {/* Floating Badge */}
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className={`absolute top-3 sm:top-4 ${isEven ? 'right-3 sm:right-4' : 'left-3 sm:left-4'} ${config.bg} backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full border border-white/20 shadow-sm`}
                      >
                        <span className={`text-xs font-medium ${config.accent}`}>
                          Phase {step.id}
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 sm:mt-20 lg:mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl transform rotate-1"></div>
          <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
            
            <div className="relative z-10 space-y-4 sm:space-y-6 lg:space-y-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 lg:px-6 py-2 rounded-full text-sm font-medium"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Experience Our Professional Process
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Ready to Begin Your
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Transformation Journey?
                </span>
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
              >
                Let us guide you through our proven process. Schedule your complimentary 
                consultation and discover how we bring exceptional results to life.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-white text-slate-900 hover:bg-slate-100 px-6 sm:px-8 py-3 sm:py-4 lg:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group w-full sm:w-auto"
                  >
                    Schedule Free Consultation
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
                
            
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-6 sm:pt-8 opacity-70"
              >
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-slate-300">5-Star Rated</span>
                </div>
                <div className="w-px h-4 bg-white/20 hidden sm:block"></div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-slate-300">Fast Response</span>
                </div>
                <div className="w-px h-4 bg-white/20 hidden sm:block"></div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">Guaranteed</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}