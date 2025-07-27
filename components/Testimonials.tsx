"use client";

import { useState, useEffect } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
  MessageCircle,
  Users,
  TrendingUp,
  Award,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    location: "Downtown Residential",
    rating: 5,
    comment:
      "Elite Painting transformed our home completely! The attention to detail was extraordinary, and the team was professional throughout. Our living room looks like something from a magazine. The color consultation was invaluable and helped us achieve exactly the aesthetic we envisioned.",
    avatar:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    location: "Westside Commercial",
    rating: 5,
    comment:
      "Outstanding work on our office building! They worked around our business hours and completed the project on time and within budget. The quality is exceptional and our clients have noticed the difference. Their professionalism and attention to detail sets them apart.",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: "3",
    name: "Jennifer Chen",
    location: "Suburban Home",
    rating: 5,
    comment:
      "The exterior painting of our Victorian home was challenging, but Elite Painting handled it beautifully. They matched historical colors perfectly and the weather-resistant finish looks amazing after two years. Their expertise in period-appropriate restoration is unmatched.",
    avatar:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: "4",
    name: "David Thompson",
    location: "Kitchen Renovation",
    rating: 5,
    comment:
      "The cabinet refinishing exceeded our expectations! What we thought would require complete replacement, Elite Painting made look brand new at a fraction of the cost. Their spray finish technique is flawless and the durability has been impressive.",
    avatar:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: "5",
    name: "Lisa Park",
    location: "Modern Condo",
    rating: 5,
    comment:
      "From color consultation to final cleanup, everything was perfect. The team was respectful of our space, used quality materials, and delivered exactly what was promised. Their systematic approach and clear communication made the entire process stress-free.",
    avatar:
      "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
  {
    id: "6",
    name: "Robert Johnson",
    location: "Restaurant Chain",
    rating: 5,
    comment:
      "Elite Painting has maintained our restaurant locations for three years. Their reliability, quality, and ability to work with our tight schedules makes them an invaluable partner. The consistency across all our locations is remarkable.",
    avatar:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const stats = [
    {
      icon: Star,
      number: 5.0,
      suffix: "",
      label: "Rating",
      description: "Average client satisfaction",
      color: "from-amber-400 via-yellow-500 to-orange-500",
      glow: "shadow-amber-500/20",
    },
    {
      icon: Users,
      number: 850,
      suffix: "+",
      label: "Clients",
      description: "Projects completed successfully",
      color: "from-emerald-400 via-teal-500 to-cyan-500",
      glow: "shadow-emerald-500/20",
    },
    {
      icon: TrendingUp,
      number: 98,
      suffix: "%",
      label: "Referrals",
      description: "Client recommendation rate",
      color: "from-violet-400 via-purple-500 to-indigo-500",
      glow: "shadow-violet-500/20",
    },
    {
      icon: Award,
      number: 15,
      suffix: "+",
      label: "Experience",
      description: "Years in the industry",
      color: "from-blue-400 via-indigo-500 to-purple-500",
      glow: "shadow-blue-500/20",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184)_1px,transparent_0)] bg-[length:32px_32px] opacity-[0.015]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-medium shadow-sm">
            <MessageCircle className="h-4 w-4 mr-2 text-blue-600" />
            Client Testimonials
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent mb-6 leading-tight mt-4">
            Voices of
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}
              Satisfaction
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover why hundreds of clients trust Elite Painting Services to
            transform their spaces with unmatched quality, professionalism, and
            attention to detail.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative mb-20">
          <Card className="group relative bg-white/80 backdrop-blur-sm border-0 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 overflow-hidden rounded-3xl">
            <CardContent className="p-0">
              <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 p-12 md:p-20">
                {/* Background Quote Pattern */}
                <div className="absolute top-8 left-8 opacity-5">
                  <Quote className="h-32 w-32 text-blue-600" />
                </div>
                <div className="absolute bottom-8 right-8 opacity-5 rotate-180">
                  <Quote className="h-32 w-32 text-indigo-600" />
                </div>

                <div className="relative max-w-4xl mx-auto text-center">
                  {/* Enhanced Rating Display */}
                  <div className="flex justify-center mb-8">
                    <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-2xl shadow-lg">
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 text-white fill-current"
                          />
                        )
                      )}
                    </div>
                  </div>

                  {/* Enhanced Comment */}
                  <blockquote className="text-2xl md:text-3xl lg:text-4xl text-slate-800 font-light leading-relaxed mb-12 tracking-wide">
                    <span className="text-blue-600 text-5xl leading-none">
                      "
                    </span>
                    {testimonials[currentIndex].comment}
                    <span className="text-blue-600 text-5xl leading-none">
                      "
                    </span>
                  </blockquote>

                  {/* Enhanced Author Section */}
                  <div className="flex items-center justify-center space-x-6">
                    <div className="relative">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-20 h-20 rounded-full object-cover shadow-xl border-4 border-white"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-full shadow-lg">
                        <Star className="h-4 w-4 text-white fill-current" />
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-slate-900 text-xl mb-1">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-slate-600 font-medium">
                        {testimonials[currentIndex].location}
                      </div>
                      <div className="flex items-center mt-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mr-2"></div>
                        <span className="text-sm text-slate-500 font-medium">
                          Verified Client
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl border border-slate-200 rounded-full w-12 h-12 group"
          >
            <ChevronLeft className="h-6 w-6 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white shadow-xl border border-slate-200 rounded-full w-12 h-12 group"
          >
            <ChevronRight className="h-6 w-6 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
          </Button>
        </div>

        {/* Enhanced Dots Indicator */}
        <div className="flex justify-center space-x-3 mb-20">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 h-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                  : "w-3 h-3 bg-slate-300 hover:bg-slate-400 rounded-full"
              }`}
            >
              {index === currentIndex && (
                <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
              )}
            </button>
          ))}
        </div>

        {/* Revolutionary Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <div key={index} className="group relative text-center">
                {/* Card with Hover Effects */}
                <div className="relative bg-white/60 backdrop-blur-sm border border-gray-100/50 rounded-2xl p-6 lg:p-8 hover:bg-white/80 hover:border-gray-200/50 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                  {/* Gradient Glow on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                  ></div>

                  {/* Icon with Enhanced Effects */}
                  <div className="relative mb-4">
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} shadow-lg ${stat.glow} group-hover:shadow-xl group-hover:scale-110 transition-all duration-500`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="text-sm font-semibold text-gray-900 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 leading-relaxed">
                    {stat.description}
                  </div>

                  {/* Subtle Bottom Border */}
                  <div
                    className={`absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r ${stat.color} group-hover:w-12 group-hover:-translate-x-1/2 transition-all duration-500`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
