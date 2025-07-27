"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Award, Users, Shield, Star, ArrowRight, Sparkles, CheckCircle,  Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality Materials',
      description: 'We exclusively use top-tier paint brands and eco-friendly materials to ensure lasting beauty and environmental responsibility.',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Users,
      title: 'Master Craftsmen',
      description: 'Our certified professionals bring decades of combined experience and continuous training in cutting-edge techniques.',
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Shield,
      title: 'Complete Protection',
      description: 'Fully licensed, bonded, and insured with comprehensive warranties and our unconditional satisfaction guarantee.',
      gradient: 'from-purple-500 to-violet-600'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '15+', label: 'Years Experience', icon: Clock },
    { number: '5.0', label: 'Average Rating', icon: Star },
    { number: '100%', label: 'Satisfaction Rate', icon: CheckCircle }
  ];

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

  const itemVariants : Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants : Variants = {
    float: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.42, 0, 0.58, 1]
      }
    }
  };

  return (
    <section id="about" className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
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
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-start">
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 sm:space-y-12"
          >
            {/* Header Section */}
            <div className="space-y-4 sm:space-y-6">
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Users className="h-4 w-4 mr-2 text-blue-600" />
                </motion.div>
                About COLOUR RAYS
              </motion.div>
              
              <motion.h2 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent block">
                  Crafting Excellence
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent block">
                  Since 2010
                </span>
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed font-light max-w-2xl"
              >
                COLOUR RAYS has been transforming spaces across the region with unmatched 
                craftsmanship, innovative techniques, and an unwavering commitment to perfection.
              </motion.p>
            </div>

            {/* Stats Section - New Addition */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 2xl:grid-cols-4 gap-4 sm:gap-6 py-6 sm:py-8 border-y border-slate-200/50"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-blue-100 to-indigo-100 p-2 sm:p-3 rounded-full inline-flex mb-2 group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300"
                  >
                    <stat.icon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </motion.div>
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Features Section */}
            <motion.div 
              variants={itemVariants}
              className="space-y-4 sm:space-y-6"
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-start space-x-4 sm:space-x-5 p-4 sm:p-6 rounded-2xl hover:bg-white/60 backdrop-blur-sm transition-all duration-500 hover:shadow-lg border border-transparent hover:border-slate-100"
                  >
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`relative bg-gradient-to-r ${feature.gradient} p-2.5 sm:p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 flex-shrink-0`}
                    >
                      <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </motion.div>
                    <div className="flex-1 space-y-2 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed font-light text-sm sm:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative xl:sticky xl:top-8 mt-8 xl:mt-0"
          >
            {/* Main Image Container */}
            <div className="relative">
              {/* Primary Image Grid - Responsive */}
              <div className="grid grid-cols-12 gap-3 sm:gap-4 h-[400px] sm:h-[500px] lg:h-[600px]">
                {/* Large Featured Image */}
                <motion.div 
                  variants={imageVariants}
                  className="col-span-7 row-span-2"
                >
                  <Card className="group h-full overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-700">
                    <div className="relative h-full">
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.7 }}
                        src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                        alt="Professional painter at work"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                      
                      {/* Overlay Badge */}
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg shadow-lg"
                      >
                        <div className="flex items-center space-x-2">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-1 sm:p-1.5 rounded-md">
                            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-xs sm:text-sm">Premium Service</div>
                            <div className="text-xs text-slate-600">Certified Excellence</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>

                {/* Top Right Image */}
                <motion.div 
                  variants={imageVariants}
                  transition={{ delay: 0.2 }}
                  className="col-span-5"
                >
                  <Card className="group h-full overflow-hidden shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative h-full">
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        src="https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                        alt="Team collaboration"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                  </Card>
                </motion.div>

                {/* Bottom Right Image */}
                <motion.div 
                  variants={imageVariants}
                  transition={{ delay: 0.4 }}
                  className="col-span-5"
                >
                  <Card className="group h-full overflow-hidden shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative h-full">
                      <motion.img 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                        alt="Quality tools and materials"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                  </Card>
                </motion.div>
              </div>

              {/* Floating Achievement Card - Responsive */}
              <motion.div 
                variants={floatingVariants}
                animate="float"
                className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 z-20 hidden lg:block"
              >
                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl p-4 sm:p-6 rounded-2xl max-w-[180px] sm:max-w-[200px] transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center space-y-2 sm:space-y-3">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 sm:p-3 rounded-xl inline-flex shadow-lg"
                    >
                      <Award className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-1">Excellence Award</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Recognized as the region's premier painting contractor for 3 consecutive years
                      </p>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                        >
                          <Star className="h-2 w-2 sm:h-3 sm:w-3 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div 
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"
              />
              <motion.div 
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute top-1/4 -right-6 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 sm:mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl sm:rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
            
            <div className="relative z-10 space-y-4 sm:space-y-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-2 rounded-full text-sm font-medium"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Ready to Transform Your Space?
              </motion.div>
              
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              >
                Experience the
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  COLOUR RAYS Difference
                </span>
              </motion.h3>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light"
              >
                Join hundreds of satisfied clients who have trusted us to bring their vision to life 
                with precision, artistry, and uncompromising quality.
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
                    className="bg-white text-slate-900 hover:bg-slate-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group w-full sm:w-auto"
                  >
                    Start Your Project
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
                
               
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}