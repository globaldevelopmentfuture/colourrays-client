'use client';

import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, ArrowUp, Shield, Award, Star, Zap, Users, TrendingUp, Sparkles, ExternalLink } from 'lucide-react';

// Floating Animation Hook
function useFloatingAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.animation = 'float 8s ease-in-out infinite';
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

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const floatingRef = useFloatingAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'from-blue-500 to-blue-600' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'from-pink-500 to-purple-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'from-blue-400 to-cyan-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'from-blue-600 to-indigo-700' }
  ];

  const services = [
    'Interior Painting',
    'Exterior Painting', 
    'Commercial Painting',
    'Cabinet Refinishing',
    'Specialty Finishes',
    'Color Consultation'
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Our Process', href: '#process' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      primary: '(555) 123-4567',
      secondary: '24/7 Emergency',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: Mail,
      primary: 'info@elitepainting.com',
      secondary: 'Response within 2 hours',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: MapPin,
      primary: 'Metropolitan Area',
      secondary: '50-mile service radius',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: Clock,
      primary: 'Mon-Fri: 7AM-7PM',
      secondary: 'Sat: 8AM-5PM',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const certifications = [
    { 
      icon: Shield, 
      label: 'Licensed & Insured', 
      color: 'from-emerald-400 to-teal-500',
      description: 'Fully licensed and insured for your protection'
    },
    { 
      icon: Award, 
      label: 'BBB A+ Rating', 
      color: 'from-blue-400 to-indigo-500',
      description: 'Better Business Bureau accredited'
    },
    { 
      icon: Star, 
      label: '5-Year Warranty', 
      color: 'from-amber-400 to-orange-500',
      description: 'Comprehensive warranty on all work'
    },
    { 
      icon: Zap, 
      label: 'EPA Certified', 
      color: 'from-violet-400 to-purple-500',
      description: 'Environmentally responsible practices'
    }
  ];

  const stats = [
    { 
      icon: Users, 
      number: 500, 
      suffix: '+', 
      label: 'Projects Completed',
      color: 'from-emerald-400 to-teal-500'
    },
    { 
      icon: TrendingUp, 
      number: 98, 
      suffix: '%', 
      label: 'Client Satisfaction',
      color: 'from-blue-400 to-indigo-500'
    },
    { 
      icon: Award, 
      number: 15, 
      suffix: '+', 
      label: 'Years Experience',
      color: 'from-violet-400 to-purple-500'
    },
    { 
      icon: Star, 
      number: 5, 
      suffix: '.0', 
      label: 'Average Rating',
      color: 'from-amber-400 to-orange-500'
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      {/* Floating Elements */}
      <div ref={floatingRef} className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-indigo-600/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-r from-violet-500/10 to-purple-600/10 rounded-full blur-xl" style={{animation: 'float 10s ease-in-out infinite reverse'}}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Premium Stats Section */}
        <div className="py-16 border-b border-slate-700/50">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50/10 to-indigo-50/10 border border-blue-500/20 text-blue-300 px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              <span>Our Achievements</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Excellence in
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
                Every Detail
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              const { count, ref } = useCountUp(stat.number);
              
              return (
                <div
                  key={index}
                  ref={ref}
                  className="group relative text-center"
                >
                  <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 lg:p-8 hover:bg-slate-800/70 hover:border-slate-600/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                    
                    {/* Gradient Glow on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                    
                    {/* Icon */}
                    <div className="relative mb-4">
                      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Animated Number */}
                    <div className="mb-2">
                      <span className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.suffix === '%' || stat.suffix === '+' ? count : count.toFixed(1)}
                        {stat.suffix}
                      </span>
                    </div>
                    
                    {/* Label */}
                    <div className="text-sm font-medium text-slate-300">
                      {stat.label}
                    </div>
                    
                    {/* Bottom Border Effect */}
                    <div className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r ${stat.color} group-hover:w-12 group-hover:-translate-x-1/2 transition-all duration-500`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold mb-2">
                  Elite <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Painting</span>
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
              </div>
              
              <p className="text-slate-300 mb-8 leading-relaxed font-light">
                Transforming spaces with professional painting services since 2010. 
                Licensed, insured, and committed to excellence in every project.
              </p>
              
              {/* Enhanced Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="group relative p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl hover:border-slate-600/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>
                      <IconComponent className="relative h-5 w-5 text-slate-400 group-hover:text-white transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="group flex items-center text-slate-300 hover:text-blue-400 transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-blue-400 group-hover:scale-125 transition-all duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="group flex items-center text-slate-300 hover:text-blue-400 transition-all duration-300"
                    >
                      <div className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3 group-hover:bg-blue-400 group-hover:scale-125 transition-all duration-300"></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Contact Information</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="group flex items-start gap-3">
                      <div className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-r ${info.color} shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                        <IconComponent className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-300 font-medium group-hover:text-white transition-colors duration-300">
                          {info.primary}
                        </p>
                        <p className="text-slate-400 text-sm">
                          {info.secondary}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Certifications Section */}
        <div className="border-t border-slate-700/50 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Trusted & Certified</h3>
            <p className="text-slate-400">Your peace of mind is our priority</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-800/50 hover:border-slate-600/50 transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500`}></div>
                  
                  <div className="relative">
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${cert.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <h4 className="font-semibold text-white text-sm mb-1">
                      {cert.label}
                    </h4>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p>&copy; 2025 Elite Painting Services. All rights reserved.</p>
              <p className="mt-1">License #123456789 • Fully Insured • Bonded</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Warranty', 'Sitemap'].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="group flex items-center text-slate-400 hover:text-blue-400 transition-colors duration-300"
                >
                  <span>{link}</span>
                  <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(1deg); }
          66% { transform: translateY(8px) rotate(-1deg); }
        }
      `}</style>
    </footer>
  );
}