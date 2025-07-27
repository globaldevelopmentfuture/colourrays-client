import { ArrowRight, CheckCircle, Play, Star, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden mt-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50/50 to-blue-50/30">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-slate-200/30 rounded-full blur-lg animate-bounce" style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-blue-200/40 rounded-full blur-md animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content - Enhanced */}
          <div className="lg:col-span-7 space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-slate-200/50 text-slate-700 px-6 py-3 rounded-full text-sm font-medium shadow-lg shadow-slate-200/20 hover:shadow-xl hover:shadow-slate-200/30 transition-all duration-300">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                </div>
                <span className="text-slate-600">•</span>
                <span className="font-semibold">Licensed & Insured Since 2010</span>
              </div>
            </div>
            
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-slate-900 leading-[0.9] tracking-tight">
                <span className="block">Transform</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-slate-600">
                  Your Space
                </span>
                <span className="block text-4xl md:text-5xl lg:text-6xl font-normal text-slate-600 mt-4">
                  with precision & artistry
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl font-light">
                Elevate your property with our premium painting services. 
                <span className="text-slate-800 font-medium"> Professional craftsmanship</span> meets 
                <span className="text-slate-800 font-medium"> exceptional attention to detail.</span>
              </p>
            </div>

            {/* Key Features - Minimalist */}
            <div className="grid grid-cols-2 gap-6 py-8">
              {[
                { label: 'Free Consultation', sublabel: 'Expert advice' },
                { label: 'Premium Materials', sublabel: 'Quality guaranteed' },
                { label: '15+ Years Experience', sublabel: 'Trusted expertise' },
                { label: '5-Year Warranty', sublabel: 'Peace of mind' }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                    <CheckCircle className="h-4 w-4 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{feature.label}</div>
                    <div className="text-xs text-slate-500 font-medium">{feature.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="group bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-xl shadow-slate-900/20 hover:shadow-2xl hover:shadow-slate-900/30 transition-all duration-300"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group px-8 py-4 text-lg font-medium border-2 border-slate-200 hover:border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                Watch Our Process
              </Button>
            </div>

            {/* Social Proof Stats */}
            <div className="flex items-center space-x-12 pt-12 border-t border-slate-200/50">
              <div className="text-center">
                <div className="text-3xl font-light text-slate-900">500<span className="text-blue-600">+</span></div>
                <div className="text-sm text-slate-500 font-medium">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-slate-900">15<span className="text-blue-600">+</span></div>
                <div className="text-sm text-slate-500 font-medium">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-slate-900">5.0<span className="text-yellow-500">★</span></div>
                <div className="text-sm text-slate-500 font-medium">Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Redesigned Gallery */}
          <div className="lg:col-span-5 relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Primary Image */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
                <img 
                  src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
                  alt="Professional interior painting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              {/* Floating Secondary Images */}
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl shadow-slate-900/20 border-4 border-white">
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Exterior painting"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 w-40 h-28 rounded-2xl overflow-hidden shadow-xl shadow-slate-900/20 border-4 border-white">
                <img 
                  src="https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=250&h=175&fit=crop"
                  alt="Cabinet refinishing"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Achievement Card */}
              <div className="absolute top-8 -left-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200/50 max-w-48">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 p-3 rounded-full inline-flex mb-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm mb-1">Excellence Award</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">Regional painting contractor of the year</p>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200/50">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Quality Guaranteed</div>
                    <div className="text-xs text-slate-600">5-Year Warranty</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100/30 to-slate-100/30 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}