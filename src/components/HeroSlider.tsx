"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Slide {
  id: number;
  imageUrl: string;
  alt: string;
  title?: string;
  subtitle?: string;
}
const slides: Slide[] = [
  {
    id: 1,
    imageUrl: "/slider_egg_white.png",
    alt: "Premium Egg White Powder",
    title: "Pure Egg White Powder",
    subtitle: "100% pure protein powerhouse for athletes and fitness enthusiasts."
  },
  {
    id: 2,
    imageUrl: "/slider_egg_yolk.png",
    alt: "Premium Egg Yolk Powder",
    title: "Rich Egg Yolk Powder",
    subtitle: "Nutrient-dense and vibrant, perfect for holistic health and nutrition."
  },
  {
    id: 3,
    imageUrl: "/slider_sanitary_pads.png",
    alt: "Sky Soft Sanitary Pads",
    title: "Sky Soft Sanitary Pads",
    subtitle: "Advanced absorption with a breathable, skin-friendly layer for ultimate comfort."
  },
  {
    id: 4,
    imageUrl: "/slider_baby_diapers.png",
    alt: "Sky Soft Baby Diapers",
    title: "Sky Soft Baby Diapers",
    subtitle: "Gentle on skin, offering maximum protection and coziness for your little ones."
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Change slide every 5 seconds

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
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-gray-100 group mt-[120px] md:mt-[136px]">
      {/* Slides */}
      <div 
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <img
              src={slide.imageUrl}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
            {/* Overlay and Text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="w-full max-w-[1280px] mx-auto px-6">
                <div className="max-w-2xl text-white animate-in slide-in-from-bottom-8 duration-1000">
                  {slide.title && (
                    <h2 className="font-heading text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                      {slide.title.includes("Sky Soft") ? (
                        <>
                          <mark className="bg-yellow-400 text-black px-3 py-1 rounded-sm font-bold shadow-md">Sky Soft</mark>
                          {slide.title.split("Sky Soft")[1]}
                        </>
                      ) : (
                        slide.title
                      )}
                    </h2>
                  )}
                  {slide.subtitle && (
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                      {slide.subtitle}
                    </p>
                  )}
                  <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 rounded-full font-heading font-semibold text-primary-dark bg-white hover:bg-gray-100 transition-all duration-300">
                    Explore Product
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
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/50"
        aria-label="Previous Slide"
      >
        <i className="ph-bold ph-caret-left text-2xl"></i>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/30 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/50"
        aria-label="Next Slide"
      >
        <i className="ph-bold ph-caret-right text-2xl"></i>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? "bg-primary w-8" : "bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
