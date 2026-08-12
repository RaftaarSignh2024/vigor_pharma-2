"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Slide {
  id: number;
  bgImage: string;
  alt: string;
  category: string;
  title: string;
  subtitle: string;
  features: string[];
  link: string;
  bgContain?: boolean;
}

const slides: Slide[] = [
  {
    id: 1,
    bgImage: "/hero_banner_egg_white.png",
    alt: "Eggy Nutritior Egg Whites Powder",
    category: "Fitness & Recovery",
    title: "Eggy Nutritior Egg Whites Powder",
    subtitle: "100% pure protein powerhouse in convenient powder form. Zero fat and zero cholesterol for optimal performance.",
    features: ["100% Pure Protein", "Zero Fat & Cholesterol", "High Bioavailability"],
    link: "/products/egg-whites-powder"
  },
  {
    id: 2,
    bgImage: "/hero_banner_egg_yolk.png",
    alt: "Eggy Nutritior Egg Yolks Powder",
    category: "Culinary & Baking",
    title: "Eggy Nutritior Egg Yolks Powder",
    subtitle: "Dense in essential nutrients like Vitamin D, Choline, and healthy fats. Ideal for premium baking and gourmet cooking.",
    features: ["Rich in Vitamin D & Choline", "Premium Baking Quality", "100% Natural Nutrition"],
    link: "/products/egg-yolks-powder"
  },
  {
    id: 3,
    bgImage: "/hero_banner_egg_combo.png",
    alt: "Eggy Nutritior Whole Egg Powder",
    category: "Balanced Nutrition",
    title: "Eggy Nutritior Whole Egg Powder",
    subtitle: "The perfect balance of egg whites and yolks in a convenient, long-lasting powder for a complete amino acid profile.",
    features: ["Complete Protein Mix", "Extended Shelf Life", "Versatile Daily Prep"],
    link: "/products/egg-combined-powder"
  },
  {
    id: 4,
    bgImage: "/hero_banner_liquid_white.png",
    alt: "Eggy Nutritior Liquid Egg Whites",
    category: "Pasteurized Pure Protein",
    title: "Eggy Nutritior Liquid Egg Whites",
    subtitle: "Pasteurized liquid egg whites ready to use straight from the bottle for cooking, baking, or protein smoothies.",
    features: ["Pasteurized Safety", "Ready to Pour", "Zero Egg Shell Mess"],
    link: "/products/liquid-egg-whites"
  },
  {
    id: 5,
    bgImage: "/hero_banner_liquid_yellow.png",
    alt: "Eggy Nutritior Liquid Egg Yolks",
    category: "Gourmet Culinary Liquid",
    title: "Eggy Nutritior Liquid Egg Yolks",
    subtitle: "Rich, golden pasteurized liquid egg yolks for all your culinary needs. Perfect for hollandaise, custards, and baking.",
    features: ["Golden Rich Texture", "Chef Grade Quality", "100% Pure Yolk"],
    link: "/products/liquid-egg-yolks"
  },
  {
    id: 6,
    bgImage: "/hero_banner_liquid_whole.png",
    alt: "Eggy Nutritior Liquid Whole Eggs",
    category: "Whole Egg Liquid Mix",
    title: "Eggy Nutritior Liquid Whole Eggs",
    subtitle: "Convenient pasteurized whole liquid eggs. The perfect mix of whites and yolks, ready to scramble or bake effortlessly.",
    features: ["Uniform Scramble Mix", "Fast Commercial Prep", "Homogenized & Fresh"],
    link: "/products/liquid-combined-eggs"
  },
  {
    id: 7,
    bgImage: "/hero_banner_sanitary_pads.png",
    alt: "Sky Soft Sanitary Pads",
    category: "Personal Hygiene",
    title: "Sky Soft Sanitary Pads",
    subtitle: "Advanced organic cotton protection by Vigor Life Care LLP. Breathable, hypoallergenic, and leak-proof for up to 12 hours.",
    features: ["100% Organic Cotton", "12-Hour Leak Guard", "Dermatologically Tested"],
    link: "/products/sanitary-pads"
  },
  {
    id: 8,
    bgImage: "/hero_banner_baby_diapers.png",
    alt: "Sky Soft Baby Diapers",
    category: "Premium Baby Care",
    title: "Sky Soft Baby Diapers",
    subtitle: "Gentle on delicate skin by Vigor Life Care LLP, offering maximum absorbency, softness, and coziness for your little one.",
    features: ["3D Super Absorbent Core", "Hypoallergenic Comfort", "Smart Wetness Indicator"],
    link: "/products/baby-diapers"
  },
  {
    id: 9,
    bgImage: "/hero_banner_baby_wipes.png",
    alt: "Sky Soft Baby Wipes",
    category: "Gentle Baby Care",
    title: "Sky Soft Baby Wipes",
    subtitle: "99% pure water wipes with organic Aloe Vera & Chamomile extracts by Vigor Life Care LLP. Ultra-soft, thick, and hypoallergenic for delicate skin.",
    features: ["99% Pure Water", "Alcohol & Paraben Free", "Hypoallergenic Softness"],
    link: "/products/baby-wipes"
  },
  {
    id: 10,
    bgImage: "/hero_banner_farm_eggs.png",
    alt: "Eggy Nutritior Cage-Free Premium Farm Fresh Eggs",
    category: "Cage-Free Farm Fresh",
    title: "Eggy Nutritior Cage-Free Eggs",
    subtitle: "Ethically raised cage-free eggs bursting with natural nutrition. Rich in Omega-3, high-quality protein, and essential vitamins — straight from our free-range farms to your table.",
    features: ["100% Cage-Free", "Rich in Omega-3", "Ethically Farm-Raised"],
    link: "/products/premium-farm-eggs"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5500);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full min-h-[560px] md:h-[82vh] max-h-[820px] overflow-hidden bg-slate-950 group mt-[120px] md:mt-[136px]">
      {/* Slides Track */}
      <div 
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative flex items-center">
            {/* Highlighted Banner Background Image */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
              <img
                src={slide.bgImage}
                alt={slide.alt}
                className="w-full h-full object-cover filter contrast-[1.05]"
              />
            </div>

            {/* Smooth gradient overlay — left dark to right transparent for consistent text readability */}
            <div className="absolute inset-0 z-[1]" style={{
              background: "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.58) 35%, rgba(0,0,0,0.22) 58%, rgba(0,0,0,0) 75%)"
            }} />

            {/* Slide Text Content Container */}
            <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 py-10 md:py-16 h-full flex items-center">
              <div className="w-full md:w-3/5 lg:w-1/2 text-white animate-in slide-in-from-left duration-700">
                {/* Category Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/25 border border-primary/40 text-primary-light mb-4">
                  <i className="ph-fill ph-sparkle text-sm"></i>
                  <span className="font-bold text-xs uppercase tracking-widest">{slide.category}</span>
                </div>

                {/* Main Heading */}
                <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-[1.15] text-white">
                  {slide.title.includes("Sky Soft") ? (
                    <>
                      <mark className="bg-yellow-400 text-black px-3 py-1 rounded-md font-bold shadow-lg mr-2 inline-block">
                        Sky Soft
                      </mark>
                      <sup className="text-xl md:text-2xl font-extrabold">TM</sup>
                      {slide.title.split("Sky Soft")[1]}
                    </>
                  ) : slide.title.includes("Eggy Nutritior") ? (
                    <>
                      <span className="text-white">Eggy Nutritior</span>
                      <sup className="text-xl md:text-2xl font-extrabold text-primary-light">TM</sup>
                      {slide.title.split("Eggy Nutritior")[1]}
                    </>
                  ) : (
                    slide.title
                  )}
                </h2>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-6 max-w-xl leading-relaxed font-normal">
                  {slide.subtitle}
                </p>

                {/* Key Feature Badges */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8">
                  {slide.features.map((feat, idx) => (
                    <span 
                      key={idx} 
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-slate-100 text-xs sm:text-sm font-medium"
                    >
                      <i className="ph-bold ph-check-circle text-primary-light"></i>
                      {feat}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <div>
                  <Link 
                    href={slide.link} 
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-[0_10px_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] transition-all duration-300 group/btn"
                  >
                    <span>Explore Product</span>
                    <i className="ph-bold ph-arrow-right text-lg group-hover/btn:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 border border-white/20 backdrop-blur-md text-white opacity-80 hover:opacity-100 transition-all hover:bg-black/60 hover:scale-110"
        aria-label="Previous Slide"
      >
        <i className="ph-bold ph-caret-left text-2xl"></i>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-black/40 border border-white/20 backdrop-blur-md text-white opacity-80 hover:opacity-100 transition-all hover:bg-black/60 hover:scale-110"
        aria-label="Next Slide"
      >
        <i className="ph-bold ph-caret-right text-2xl"></i>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-yellow-400 w-9" : "bg-white/50 hover:bg-white w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}



