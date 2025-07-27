import { Award, Users, Shield, Star, ArrowRight, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white via-slate-50/50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184)_1px,transparent_0)] bg-[length:32px_32px] opacity-[0.015]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Header Section */}
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm">
                <Users className="h-4 w-4 mr-2 text-blue-600" />
                About Elite Painting
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                  Crafting Excellence
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Since 2010
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light max-w-2xl">
                Elite Painting Services has been transforming spaces across the region with unmatched 
                craftsmanship, innovative techniques, and an unwavering commitment to perfection.
              </p>
            </div>

            {/* Features Section */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="group flex items-start space-x-5 p-6 rounded-2xl hover:bg-white/60 backdrop-blur-sm transition-all duration-500 hover:shadow-lg border border-transparent hover:border-slate-100">
                    <div className={`relative bg-gradient-to-r ${feature.gradient} p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 flex-shrink-0`}>
                      <IconComponent className="h-5 w-5 text-white" />
                      <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="flex-1 space-y-2 min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed font-light text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

         
          </div>

          {/* Right Content - Image Section */}
          <div className="relative xl:sticky xl:top-8">
            {/* Main Image Container */}
            <div className="relative">
              {/* Primary Image Grid */}
              <div className="grid grid-cols-12 gap-4 h-[600px]">
                {/* Large Featured Image */}
                <div className="col-span-7 row-span-2">
                  <Card className="group h-full overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-700">
                    <div className="relative h-full">
                      <img 
                        src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop"
                        alt="Professional painter at work"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>
                      
                      {/* Overlay Badge */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                        <div className="flex items-center space-x-2">
                          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-1.5 rounded-md">
                            <Star className="h-4 w-4 text-white" />
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-sm">Premium Service</div>
                            <div className="text-xs text-slate-600">Certified Excellence</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Top Right Image */}
                <div className="col-span-5">
                  <Card className="group h-full overflow-hidden shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative h-full">
                      <img 
                        src="https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                        alt="Team collaboration"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                  </Card>
                </div>

                {/* Bottom Right Image */}
                <div className="col-span-5">
                  <Card className="group h-full overflow-hidden shadow-lg border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-500">
                    <div className="relative h-full">
                      <img 
                        src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                        alt="Quality tools and materials"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Floating Achievement Card - Positioned carefully */}
              <div className="absolute -top-6 -right-6 z-20 hidden lg:block">
                <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl p-6 rounded-2xl max-w-[200px] transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center space-y-3">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-xl inline-flex shadow-lg">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1">Excellence Award</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Recognized as the region's premier painting contractor for 3 consecutive years
                      </p>
                    </div>
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/4 -right-6 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl transform -rotate-1"></div>
          <div className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2" />
                Ready to Transform Your Space?
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Experience the
                <br />
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Elite Difference
                </span>
              </h3>
              
              <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
                Join hundreds of satisfied clients who have trusted us to bring their vision to life 
                with precision, artistry, and uncompromising quality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}