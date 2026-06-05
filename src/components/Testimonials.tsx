"use client";

import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Jenkins",
    role: "Nutritionist & Dietitian",
    quote: "Vigor Life Care's pure egg white powder has been a game-changer for my clients. The protein quality and solubility are unmatched in the current market.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Fitness Coach",
    quote: "As someone who demands the best for athletic performance, I highly recommend their premium products. They truly prioritize holistic health and safety.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Maternal Health Advocate",
    quote: "The <mark className=\"bg-yellow-300 text-black px-2 py-0.5 rounded-sm font-bold shadow-sm mx-1\">Sky Soft</mark> sanitary pads and baby diapers are incredibly gentle and reliable. It's refreshing to see a brand focus so much on premium care.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#FFF6F0] relative overflow-hidden">
      <div className="w-full max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="font-heading text-4xl font-bold mb-4">What Professionals <span className="text-primary">Say</span></h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">Don't just take our word for it. Hear from experts who trust Vigor Life Care.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={t.id} className="bg-white p-8 rounded-3xl relative border border-black/5 shadow-sm hover:-translate-y-2 hover:shadow-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both" style={{ animationDelay: `${(i + 1) * 150}ms` }}>
              <i className="ph-fill ph-quotes text-5xl text-primary/10 absolute top-8 right-8"></i>
              <div className="flex items-center gap-4 mb-6">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-2 border-primary/20" />
                <div>
                  <h4 className="font-bold text-lg">{t.name}</h4>
                  <p className="text-sm text-primary font-semibold">{t.role}</p>
                </div>
              </div>
              <p className="text-text-muted italic leading-relaxed">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
