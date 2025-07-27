import {
  Home,
  Building2,
  Palette,
  Shield,
  Wrench,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Service } from "@/types";

const services: Service[] = [
  {
    id: "1",
    title: "Residential Interior",
    description:
      "Transform your living spaces with premium interior painting services that bring your vision to life.",
    features: [
      "Expert color consultation",
      "Premium eco-friendly paints",
      "Complete furniture protection",
      "Professional cleanup included",
    ],
    icon: "Home",
    category: "Residential",
    image:
      "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    id: "2",
    title: "Exterior & Facades",
    description:
      "Enhance curb appeal and protect your property with weather-resistant exterior painting solutions.",
    features: [
      "Weather-resistant technology",
      "Power washing included",
      "Precision trim work",
      "Color matching guarantee",
    ],
    icon: "Building2",
    category: "Residential",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    id: "3",
    title: "Commercial Spaces",
    description:
      "Professional painting for offices and commercial properties with minimal business disruption.",
    features: [
      "Flexible scheduling options",
      "Commercial-grade materials",
      "Safety compliance certified",
      "Ongoing maintenance plans",
    ],
    icon: "Building2",
    category: "Commercial",
    image:
      "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    id: "4",
    title: "Cabinet Refinishing",
    description:
      "Revitalize your kitchen and bathrooms with expert cabinet painting and refinishing services.",
    features: [
      "Multiple finish selections",
      "Hardware upgrade options",
      "Spray finish precision",
      "Fast project completion",
    ],
    icon: "Palette",
    category: "Specialty",
    image:
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    id: "5",
    title: "Artistic Finishes",
    description:
      "Custom decorative techniques including faux painting, textures, and artistic wall treatments.",
    features: [
      "Bespoke design creation",
      "Advanced faux techniques",
      "Textured wall treatments",
      "Mural and art services",
    ],
    icon: "Sparkles",
    category: "Specialty",
    image:
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
  {
    id: "6",
    title: "Maintenance Plans",
    description:
      "Preserve your investment with comprehensive maintenance programs and touch-up services.",
    features: [
      "Scheduled inspections",
      "Priority touch-up service",
      "Color archive system",
      "Preventive maintenance",
    ],
    icon: "Shield",
    category: "Maintenance",
    image:
      "https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
  },
];

const iconMap = {
  Home,
  Building2,
  Palette,
  Shield,
  Wrench,
  Sparkles,
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184)_1px,transparent_0)] bg-[length:24px_24px] opacity-[0.02]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6 shadow-sm">
            <Palette className="h-4 w-4 mr-2 text-blue-600" />
            Professional Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight">
            Crafted with
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Precision
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            From concept to completion, we deliver exceptional painting
            solutions that transform spaces and exceed expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card
                key={service.id}
                className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 overflow-hidden rounded-2xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/30 transition-all duration-500"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-slate-700 border border-white/20">
                      {service.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg">
                    <IconComponent className="h-5 w-5 text-slate-700 group-hover:text-white transition-colors duration-500" />
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="ghost"
                    className="group/btn w-full justify-between hover:bg-slate-50 border border-slate-200 rounded-xl py-6 transition-all duration-300 hover:border-blue-300"
                  >
                    <span className="font-medium text-slate-700 group-hover/btn:text-blue-600 transition-colors duration-300">
                      Learn More
                    </span>
                    <ArrowRight className="h-4 w-4 text-slate-400 group-hover/btn:text-blue-600 group-hover/btn:translate-x-1 transition-all duration-300" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
