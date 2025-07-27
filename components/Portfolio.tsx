'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/types';
import { Eye, ArrowRight, Sparkles, Filter, Grid3X3, ExternalLink } from 'lucide-react';

const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Living Room Transformation',
    category: 'Interior',
    image: 'https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Complete interior makeover with custom color palette and premium finishes that create a sophisticated living environment.'
  },
  {
    id: '2',
    title: 'Victorian Home Exterior',
    category: 'Exterior',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Historic home restoration with period-appropriate colors and advanced weather protection systems.'
  },
  {
    id: '3',
    title: 'Corporate Office Complex',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Large-scale commercial project featuring modern corporate aesthetics and high-performance coatings.'
  },
  {
    id: '4',
    title: 'Luxury Kitchen Cabinets',
    category: 'Cabinet',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Custom cabinet refinishing with premium lacquer finish and precision spray application techniques.'
  },
  {
    id: '5',
    title: 'Contemporary Bedroom Suite',
    category: 'Interior',
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Sophisticated bedroom design featuring accent walls and custom textured finishes for ultimate elegance.'
  },
  {
    id: '6',
    title: 'Retail Store Makeover',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Complete retail space transformation designed to enhance customer experience and brand identity.'
  },
  {
    id: '7',
    title: 'Craftsman Home Restoration',
    category: 'Exterior',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Authentic restoration of craftsman-style architecture with historically accurate color schemes.'
  },
  {
    id: '8',
    title: 'Artistic Mural Project',
    category: 'Specialty',
    image: 'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Custom artistic mural featuring specialized techniques and premium materials for lasting beauty.'
  },
  {
    id: '9',
    title: 'Open Concept Living Space',
    category: 'Interior',
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    description: 'Seamless color flow throughout open floor plan creating harmony and visual continuity.'
  }
];

const categories = ['All', 'Interior', 'Exterior', 'Commercial', 'Cabinet', 'Specialty'];

const categoryConfig: Record<string, { gradient: string; bg: string; icon: string }> = {
  Interior: { gradient: 'from-blue-500 to-indigo-600', bg: 'bg-blue-50', icon: '🏠' },
  Exterior: { gradient: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', icon: '🏡' },
  Commercial: { gradient: 'from-purple-500 to-violet-600', bg: 'bg-purple-50', icon: '🏢' },
  Cabinet: { gradient: 'from-orange-500 to-amber-600', bg: 'bg-orange-50', icon: '🚪' },
  Specialty: { gradient: 'from-pink-500 to-rose-600', bg: 'bg-pink-50', icon: '🎨' },
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184)_1px,transparent_0)] bg-[length:24px_24px] opacity-[0.02]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Grid3X3 className="h-4 w-4 mr-2 text-blue-600" />
            Our Portfolio
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
            Showcasing Our
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Finest Work</span>
          </h2>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Explore our diverse collection of completed projects, each telling a unique story 
            of transformation, craftsmanship, and unwavering attention to detail.
          </p>
        </div>

        {/* Enhanced Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const config = categoryConfig[category];
            
            return (
              <Button
                key={category}
                variant="ghost"
                onClick={() => setActiveCategory(category)}
                className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isActive 
                    ? 'bg-white shadow-lg border border-slate-200 text-slate-900' 
                    : 'hover:bg-white/60 backdrop-blur-sm text-slate-600 hover:text-slate-900 border border-transparent hover:border-slate-200'
                }`}
              >
                {category === 'All' ? (
                  <Filter className="h-4 w-4 mr-2" />
                ) : (
                  <span className="mr-2">{config?.icon}</span>
                )}
                {category}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl"></div>
                )}
              </Button>
            );
          })}
        </div>

        {/* Portfolio Grid with Masonry-like Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => {
            const config = categoryConfig[project.category];
            const isLarge = index % 5 === 0; // Every 5th item is larger
            
            return (
              <Card 
                key={project.id} 
                className={`group relative bg-white/80 backdrop-blur-sm border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 overflow-hidden rounded-2xl ${
                  isLarge ? 'md:col-span-2 xl:col-span-1' : ''
                }`}
              >
                {/* Image Container */}
                <div className={`relative overflow-hidden ${isLarge ? 'aspect-[16/12]' : 'aspect-[16/12]'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className={`${config.bg} border-0 text-slate-700 font-medium px-3 py-1 shadow-sm backdrop-blur-sm`}>
                      <span className="mr-1">{config.icon}</span>
                      {project.category}
                    </Badge>
                  </div>
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-3">
                      <Button 
                        size="sm" 
                        className="bg-white/20 backdrop-blur-md text-white border-white/30 hover:bg-white/30 rounded-xl shadow-lg"
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="bg-white/20 backdrop-blur-md text-white hover:bg-white/30 rounded-xl shadow-lg"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Project Number */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-slate-600">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed font-light text-sm">
                    {project.description}
                  </p>
                  
                  {/* Bottom Action */}
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="group/btn w-full justify-between hover:bg-slate-50 rounded-xl py-2 transition-all duration-300"
                    >
                      <span className="font-medium text-slate-700 group-hover/btn:text-blue-600 transition-colors duration-300">
                        View Project
                      </span>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover/btn:text-blue-600 group-hover/btn:translate-x-1 transition-all duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

    
      </div>
    </section>
  );
}