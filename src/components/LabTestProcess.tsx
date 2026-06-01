"use client";

import React from "react";

const steps = [
  { id: 1, title: "FEED CONTROL", icon: "ph-bird", x: 8.33, y: 66.66 },
  { id: 2, title: "REGULAR DOCTOR CHECKUPS", icon: "ph-stethoscope", x: 16.66, y: 50 },
  { id: 3, title: "BIOSECURITY CHECK", icon: "ph-shield-warning", x: 25, y: 33.33 },
  { id: 4, title: "TEMPERATURE CHECK", icon: "ph-thermometer", x: 33.33, y: 25 },
  { id: 5, title: "PH FRESHNESS TEST", icon: "ph-drop", x: 41.66, y: 33.33 },
  { id: 6, title: "YOLK TEST", icon: "ph-flask", x: 50, y: 58.33 },
  { id: 7, title: "SHELL STRENGTH TEST", icon: "ph-egg-crack", x: 58.33, y: 75 },
  { id: 8, title: "CANDLING", icon: "ph-lightbulb", x: 66.66, y: 83.33 },
  { id: 9, title: "UV SANITISATION", icon: "ph-sun", x: 75, y: 75 },
  { id: 10, title: "GRADING", icon: "ph-certificate", x: 83.33, y: 58.33 },
  { id: 11, title: "MICROBIAL TEST", icon: "ph-microscope", x: 91.66, y: 41.66 },
];

export default function LabTestProcess() {
  return (
    <section className="py-24 bg-[#ECA600] relative overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 text-white">
          <h2 className="font-heading text-4xl font-bold mb-4">Our Lab Test <span className="text-white underline decoration-2 underline-offset-4">Process</span></h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">From the farm to your hands, our rigorous testing ensures uncompromising quality.</p>
        </div>

        {/* Desktop / Tablet Curved Timeline */}
        <div className="hidden lg:block relative w-full h-[600px] mt-10">
          
          {/* SVG Curve */}
          <div className="absolute inset-0 pointer-events-none">
            <svg viewBox="0 0 1200 600" className="w-full h-full text-white/50" preserveAspectRatio="none">
              <path d="
                M 0 400
                C 50 400, 50 400, 100 400
                C 150 400, 150 300, 200 300
                C 250 300, 250 200, 300 200
                C 350 200, 350 150, 400 150
                C 450 150, 450 200, 500 200
                C 550 200, 550 350, 600 350
                C 650 350, 650 450, 700 450
                C 750 450, 750 500, 800 500
                C 850 500, 850 450, 900 450
                C 950 450, 950 350, 1000 350
                C 1050 350, 1050 250, 1100 250
                C 1150 250, 1150 250, 1200 250
              " fill="none" stroke="currentColor" strokeWidth="4" />
            </svg>
          </div>

          {/* Nodes */}
          {steps.map((step, index) => (
            <div 
              key={step.id}
              className="absolute -translate-x-1/2 -translate-y-1/2 animate-in fade-in zoom-in duration-700 fill-mode-both"
              style={{ 
                left: `${step.x}%`, 
                top: `${step.y}%`,
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="w-[105px] h-[105px] xl:w-[120px] xl:h-[120px] rounded-full bg-white shadow-xl flex flex-col items-center justify-center p-2 text-center transform transition-transform hover:scale-110 hover:shadow-2xl cursor-default group">
                <i className={`ph-fill ${step.icon} text-3xl xl:text-4xl text-[#ECA600] mb-1 transition-colors group-hover:text-primary-dark`}></i>
                <span className="text-[9px] xl:text-[10px] font-bold text-black uppercase leading-tight">{step.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative py-10">
          {/* Vertical Line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-1 bg-white/50 -translate-x-1/2 rounded-full"></div>
          
          <div className="flex flex-col gap-12 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex items-center gap-6 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                  <h3 className="font-bold text-white uppercase text-sm">{step.title}</h3>
                </div>
                
                <div className="shrink-0 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-[#ECA600]">
                  <i className={`ph-fill ${step.icon} text-3xl text-[#ECA600]`}></i>
                </div>
                
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
