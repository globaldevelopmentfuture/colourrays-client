import { CheckCircle, ArrowRight, Sparkles, Clock, FileText, Palette, Wrench, Brush, Eye, Star, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProcessStep } from '@/types';

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
  return (
    <section id="process" className="relative py-24 bg-gradient-to-b from-white via-slate-50/30 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184)_1px,transparent_0)] bg-[length:32px_32px] opacity-[0.015]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
            <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
            Our Process
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
            Delivering Excellence
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Step by Step</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Our proven methodology ensures every project is executed with precision, 
            transparency, and unwavering commitment to exceptional results.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-indigo-300 to-purple-200 transform -translate-x-px"></div>
          
          <div className="space-y-16 lg:space-y-24">
            {processSteps.map((step, index) => {
              const IconComponent = iconMap[step.icon as keyof typeof iconMap];
              const config = stepConfig[index];
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.id} className={`relative flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <Card className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 overflow-hidden rounded-2xl">
                      <CardContent className="p-8">
                        <div className={`flex items-start space-x-6 ${isEven ? '' : 'lg:flex-row-reverse lg:space-x-reverse lg:text-right'}`}>
                          {/* Step Number & Icon */}
                          <div className="flex-shrink-0">
                            <div className={`relative bg-gradient-to-r ${config.gradient} p-4 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                              <IconComponent className="h-6 w-6 text-white" />
                              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            {/* Step Number Badge */}
                            <div className={`absolute -top-2 -right-2 bg-white border-2 border-slate-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold ${config.accent} shadow-sm`}>
                              {step.id}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className={`flex-1 space-y-3 ${isEven ? '' : 'lg:text-right'}`}>
                            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                              {step.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed font-light">
                              {step.description}
                            </p>
                            
                            {/* Progress Indicator */}
                            <div className={`flex items-center space-x-2 pt-2 ${isEven ? '' : 'lg:justify-end'}`}>
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${config.gradient}`}></div>
                              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                                Step {step.id} of 6
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node - Desktop */}
                  <div className="hidden lg:block w-2/12 flex justify-center relative z-10">
                    <div className={`bg-gradient-to-r ${config.gradient} rounded-full w-4 h-4 shadow-lg border-4 border-white`}>
                      <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Visual Element */}
                  <div className={`w-full lg:w-5/12 mt-8 lg:mt-0 ${isEven ? 'lg:pl-16' : 'lg:pr-16'}`}>
                    <div className="relative group">
                      <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl bg-white/80 backdrop-blur-sm border border-slate-100">
                        <img 
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
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                      </div>
                      
                      {/* Floating Badge */}
                      <div className={`absolute top-4 ${isEven ? 'right-4' : 'left-4'} ${config.bg} backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 shadow-sm`}>
                        <span className={`text-xs font-medium ${config.accent}`}>
                          Phase {step.id}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl transform rotate-1"></div>
          <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                Experience Our Professional Process
              </div>
              
              <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                Ready to Begin Your
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Transformation Journey?
                </span>
              </h3>
              
              <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                Let us guide you through our proven process. Schedule your complimentary 
                consultation and discover how we bring exceptional results to life.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-6 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center justify-center space-x-6 pt-8 opacity-70">
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-slate-300">5-Star Rated</span>
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-blue-400" />
                  <span className="text-sm text-slate-300">Fast Response</span>
                </div>
                <div className="w-px h-4 bg-white/20"></div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span className="text-sm text-slate-300">Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}