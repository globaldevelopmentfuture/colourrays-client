"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, CheckCircle, Play, Star, Award, Shield, Clock, } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
 // Variants without easing strings
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const pulseVariants: Variants = {
  pulse: {
    scale: [1, 1.2, 1],
    opacity: [0.1, 0.3, 0.1],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const floatingVariants: Variants = {
  float: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};
  const features = [
    { 
      label: 'Free Consultation', 
      sublabel: 'Expert advice',
      icon: CheckCircle,
      color: 'from-blue-500 to-blue-600'
    },
    { 
      label: 'Premium Materials', 
      sublabel: 'Quality guaranteed',
      icon: Shield,
      color: 'from-green-500 to-green-600'
    },
    { 
      label: '15+ Years Experience', 
      sublabel: 'Trusted expertise',
      icon: Award,
      color: 'from-purple-500 to-purple-600'
    },
    { 
      label: '24/7 Available', 
      sublabel: 'Always here for you',
      icon: Clock,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
     <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/80 to-blue-50/40">
        <motion.div variants={pulseVariants} animate="pulse" className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 sm:w-32 h-20 sm:h-32 bg-blue-200/30 rounded-full blur-xl" />
        <motion.div variants={pulseVariants} animate="pulse" style={{ animationDelay: '2s' }} className="absolute top-32 sm:top-40 right-8 sm:right-20 w-16 sm:w-24 h-16 sm:h-24 bg-indigo-200/40 rounded-full blur-lg" />
        <motion.div variants={pulseVariants} animate="pulse" style={{ animationDelay: '4s' }} className="absolute bottom-20 sm:bottom-32 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-purple-200/30 rounded-full blur-md" />
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2, delayChildren: 0.1, ease: [0.42, 0, 0.58, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Trust Badge */}
            <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center bg-white/90 backdrop-blur-sm border border-slate-200/60 text-slate-700 px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-0.5">
                    {[...Array(5)].map((_, i) => (
                      <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}>
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-slate-500 hidden sm:inline">•</span>
                  <span className="font-semibold text-xs sm:text-sm">Licensed & Insured Since 2010</span>
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-tight tracking-tight">
                <motion.span initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="block">Transform</motion.span>
                <motion.span initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600">Your Space</motion.span>
                <motion.span initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="block text-lg sm:text-xl md:text-2xl text-slate-600 mt-2">with precision & artistry</motion.span>
              </h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                Elevate your property with our premium painting services. <span className="font-medium text-slate-800">Professional craftsmanship</span> meets <span className="font-medium text-slate-800">exceptional attention to detail</span>.
              </motion.p>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 max-w-2xl mx-auto lg:mx-0">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 1 + i * 0.1 }} whileHover={{ scale: 1.05 }} className="flex items-start space-x-3 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-slate-200/50 hover:bg-white/80 hover:shadow-lg transition-all">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className={`bg-gradient-to-r ${feature.color} p-2.5 rounded-lg shadow-lg`}><Icon className="h-4 w-4 text-white" /></motion.div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{feature.label}</div>
                      <div className="text-xs text-slate-500 font-medium">{feature.sublabel}</div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Call to Action */}
            <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white px-6 py-3 rounded-xl font-medium shadow-xl transition-all">
                  Get Your Free Quote
                  <motion.div whileHover={{ x: 4 }} transition={{ duration: 0.2 }}><ArrowRight className="ml-2 h-4 w-4" /></motion.div>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto px-6 py-3 rounded-xl font-medium border-2 border-slate-300 hover:border-slate-400 transition-all">
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.2 }}><Play className="mr-2 h-4 w-4" /></motion.div>
                  Watch Our Process
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="flex justify-center lg:justify-start space-x-8 pt-8 border-t border-slate-200/60">
              {Object.entries({
                500: 'Projects',
                15: 'Years',
                '5.0★': 'Rating'
              }).map(([key, value], index) => (
                <div key={index}>
                  <span className="font-semibold text-slate-900">{key}</span>
                  <span className="text-slate-500"> {value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Example Images */}
          <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.5 }} className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600&h=750" alt="Interior painting" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </motion.div>

              <motion.div variants={floatingVariants} animate="float" className="absolute -top-4 sm:-top-8 -right-4 sm:-right-8 w-20 sm:w-32 h-20 sm:h-32 rounded-xl overflow-hidden shadow-xl border-2 border-white">
                <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" alt="Exterior" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div variants={floatingVariants} animate="float" style={{ animationDelay: '2s' }} className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 w-24 sm:w-40 h-16 sm:h-28 rounded-xl overflow-hidden shadow-xl border-2 border-white">
                <img src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=250&h=175" alt="Cabinet refinishing" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 1 }} whileHover={{ scale: 1.05 }} className="absolute top-4 sm:top-8 -left-4 sm:-left-8 bg-white/95 backdrop-blur-sm p-3 sm:p-6 rounded-xl shadow-xl border border-slate-200/50 max-w-48">
                <div className="text-center">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="bg-gradient-to-r from-yellow-400 to-orange-400 p-2 sm:p-3 rounded-full inline-flex mb-2">
                    <Award className="h-3 w-3 sm:h-6 sm:w-6 text-white" />
                  </motion.div>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">Excellence Award</h3>
                  <p className="text-xs text-slate-600 hidden sm:block">Regional painting contractor of the year</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }} whileHover={{ scale: 1.05 }} className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 bg-white/95 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-slate-200/50 shadow-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <motion.div whileHover={{ rotate:360 }} transition={{ duration:0.5 }} className="bg-green-100 p-1.5 sm:p-2 rounded-full">
                    <CheckCircle className="h-3 w-3 sm:h-5 sm:w-5 text-green-600" />
                  </motion.div>
                  <div>
                    <div className="font-semibold text-slate-900 text-xs sm:text-sm">Quality Guaranteed</div>
                    <div className="text-xs text-slate-600">5-Year Warranty</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div animate={{ scale:[1,1.1,1], opacity:[0.1,0.2,0.1] }} transition={{ duration:8, repeat:Infinity }} className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-100/30 to-slate-100/30 rounded-full blur-3xl" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, delay:2 }} className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <motion.div animate={{ y:[0,10,0] }} transition={{ duration:2, repeat:Infinity }} className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-slate-400 rounded-full flex justify-center cursor-pointer hover:border-slate-600 transition-colors duration-300">
          <motion.div animate={{ y:[0,12,0] }} transition={{ duration:2, repeat:Infinity, delay:0.5 }} className="w-1 h-2 sm:h-3 bg-slate-500 rounded-full mt-1.5 sm:mt-2" />
        </motion.div>
      </motion.div>

  
    </section>

  );
}