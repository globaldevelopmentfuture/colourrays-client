'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ArrowRight, MapPin, Shield, Award, Clock } from 'lucide-react';
import { Button } from './ui/button';



export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Închide meniul mobil când se redimensionează ecranul
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  const contactInfo = {
    phone: '(555) 123-4567',
    email: 'info@colourrays.com'
  };

  return (
    <>
      {/* Top Info Bar - Ultra Modern */}
      <div className={`bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'} ${isMobileMenuOpen ? 'hidden' : 'block'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 sm:py-2.5">
            <div className="flex items-center space-x-3 sm:space-x-6 text-xs sm:text-sm">
              <div className="flex items-center space-x-1.5 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                <span className="font-medium hidden xs:inline">{contactInfo.phone}</span>
                <span className="font-medium xs:hidden">Call</span>
              </div>
              <div className="hidden sm:flex items-center space-x-1.5 hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                <Mail className="h-3.5 w-3.5" />
                <span className="font-medium">{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4 text-xs sm:text-sm">
              <div className="flex items-center space-x-1 text-green-400">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
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
      </div>

      {/* Main Header - Ultra Modern */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/98 backdrop-blur-2xl shadow-2xl shadow-slate-900/10 border-b border-slate-200/50'
            : 'bg-transparent'
        }`}
        style={{ top: isScrolled || isMobileMenuOpen ? '0' : '36px' }}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16 lg:h-20">
            {/* Logo - Ultra Modern */}
            <div className="flex items-center group cursor-pointer">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur-sm opacity-20 group-hover:opacity-40 transition-all duration-500 scale-110"></div>
                {/* Main logo container */}
                <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-2 sm:p-2.5 lg:p-3 rounded-2xl shadow-xl shadow-blue-600/25 group-hover:shadow-blue-600/40 transition-all duration-300 group-hover:scale-105">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-md transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                  </div>
                </div>
              </div>
              <div className="ml-2 sm:ml-3 lg:ml-4">
                <h1 className="text-base sm:text-lg lg:text-2xl font-black bg-gradient-to-r from-slate-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent tracking-tight group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                  COLOUR RAYS
                </h1>
                <p className="text-xs text-slate-500 font-semibold tracking-wider hidden sm:block group-hover:text-blue-600 transition-colors duration-300">
                  PROFESSIONAL PAINTING
                </p>
              </div>
            </div>

            {/* Desktop Navigation - Ultra Modern */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10">{item.label}</span>
                  {/* Hover background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-8 group-hover:-translate-x-4 transition-all duration-300"></div>
                </a>
              ))}
            </nav>

            {/* CTA Section - Ultra Modern */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-right">
                <p className="text-xs text-slate-500 font-medium">Free Estimate</p>
                <p className="text-sm font-bold text-slate-800 flex items-center">
                  <Clock className="w-3 h-3 mr-1 text-green-500" />
                  24/7 Available
                </p>
              </div>
              <Button 
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-bold shadow-2xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 hover:scale-105 group"
              >
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Tablet CTA */}
            <div className="hidden md:flex lg:hidden items-center space-x-3">
              <div className="text-right">
                <p className="text-xs text-slate-500 font-medium">Free Quote</p>
                <p className="text-sm font-bold text-green-600">Available</p>
              </div>
              <Button 
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
              >
                Quote
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>

            {/* Mobile Menu Button - Ultra Modern */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-2.5 text-slate-700 hover:text-blue-600 transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 to-blue-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="relative z-10">
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5 transform rotate-0 group-hover:rotate-90 transition-transform duration-300" />
                  ) : (
                    <Menu className="h-5 w-5 transform rotate-0 group-hover:rotate-180 transition-transform duration-300" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation - Ultra Modern & Perfect */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-screen ] opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className=" min-h-[100vh] bg-white/98 backdrop-blur-2xl border-t border-slate-200/50 shadow-2xl">
            <div className="px-4 py-5 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {/* Navigation Links */}
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3.5 text-base font-semibold text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-2xl transition-all duration-300 active:scale-[0.98] group"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ 
                    animationDelay: `${index * 75}ms`,
                    animation: isMobileMenuOpen ? 'slideInFromRight 0.4s ease-out forwards' : 'none'
                  }}
                >
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {item.label}
                  </span>
                  <ArrowRight className="h-4 w-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </a>
              ))}
              
              {/* Contact Section - Ultra Modern */}
              <div className="pt-5 border-t border-slate-200/50 mt-5 space-y-4">
                {/* Contact Cards */}
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200/50 hover:border-blue-200 transition-all duration-300 group">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{contactInfo.phone}</p>
                        <p className="text-xs text-slate-500">Tap to call instantly</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-semibold">
                        Available
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-2xl border border-slate-200/50 hover:border-indigo-200 transition-all duration-300">
                    <div className="flex items-center space-x-3">
                      <div className="p-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg">
                        <Mail className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-800">{contactInfo.email}</p>
                        <p className="text-xs text-slate-500">Quick response guaranteed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators - Ultra Modern */}
                <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 p-4 rounded-2xl border border-slate-200/50">
                  <div className="flex items-center justify-center space-x-6 text-xs font-semibold">
                    <div className="flex items-center space-x-1.5 text-green-600">
                      <Shield className="w-3.5 h-3.5" />
                      <span>Licensed</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-blue-600">
                      <Award className="w-3.5 h-3.5" />
                      <span>Insured</span>
                    </div>
                    <div className="flex items-center space-x-1.5 text-indigo-600">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Local Experts</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Navigation - Ultra Modern */}
        <div className={`hidden md:block lg:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-80 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="bg-white/98 backdrop-blur-2xl border-t border-slate-200/50 shadow-2xl">
            <div className="px-6 py-5">
              <div className="grid grid-cols-3 gap-3 mb-5">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-center px-4 py-3 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 rounded-xl transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-200/50">
                <div className="flex items-center space-x-6 text-sm text-slate-600">
                  <div className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
                    <Phone className="h-4 w-4" />
                    <span className="font-semibold">{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 hover:text-indigo-600 transition-colors duration-300">
                    <Mail className="h-4 w-4" />
                    <span className="font-semibold">{contactInfo.email}</span>
                  </div>
                </div>
                <Button 
                  className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-2xl font-bold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Custom Animations & Responsive Styles */}
      <style jsx>{`
        @media (max-width: 475px) {
          .xs\\:hidden {
            display: none;
          }
          .xs\\:inline {
            display: inline;
          }
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Smooth scrolling pentru linkuri */
        html {
          scroll-behavior: smooth;
        }

        /* Prevent body scroll when mobile menu is open */
        ${isMobileMenuOpen ? 'body { overflow: hidden; }' : ''}
      `}</style>
    </>
  );
}