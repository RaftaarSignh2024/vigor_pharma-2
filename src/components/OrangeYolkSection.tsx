import Image from "next/image";

export default function OrangeYolkSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-64 h-full bg-[#f58d20] -translate-x-[70%] skew-x-[-20deg] opacity-90 z-0 hidden md:block"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#f58d20] translate-x-[70%] -translate-y-[50%] skew-x-[-20deg] opacity-90 z-0 hidden md:block"></div>

      <div className="w-full max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="font-heading text-3xl md:text-5xl font-black uppercase tracking-tight text-[#3d2c23]">
            THE SECRET BEHIND OUR <span className="text-[#f58d20]">PREMIUM QUALITY</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          {/* Image */}
          <div className="w-full md:w-1/2 animate-in fade-in slide-in-from-left-8 duration-1000 delay-100">
            <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white">
              <Image 
                src="/hens_eating_feed.png" 
                alt="Hens eating natural herbal diet feed from a trough" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* List */}
          <div className="w-full md:w-1/2 animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
            <ul className="space-y-5 text-[1.1rem] leading-relaxed text-[#3d2c23] font-medium">
              <li className="flex items-start gap-4 group">
                <div className="mt-1.5 min-w-[8px] h-[8px] rounded-full bg-[#3d2c23] group-hover:bg-[#f58d20] transition-colors duration-300"></div>
                <span>Our products are formulated using the purest, scientifically validated ingredients.</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1.5 min-w-[8px] h-[8px] rounded-full bg-[#3d2c23] group-hover:bg-[#f58d20] transition-colors duration-300"></div>
                <span>We source high-grade raw materials to ensure maximum efficacy and safety.</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1.5 min-w-[8px] h-[8px] rounded-full bg-[#3d2c23] group-hover:bg-[#f58d20] transition-colors duration-300"></div>
                <span>Advanced manufacturing processes help maintain the integrity of our formulations.</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1.5 min-w-[8px] h-[8px] rounded-full bg-[#3d2c23] group-hover:bg-[#f58d20] transition-colors duration-300"></div>
                <span>Each product is carefully crafted to deliver essential nutrients and wellness-boosting compounds.</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1.5 min-w-[8px] h-[8px] rounded-full bg-[#3d2c23] group-hover:bg-[#f58d20] transition-colors duration-300"></div>
                <span>Our rigorous quality control ensures every batch meets stringent healthcare standards.</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-1.5 min-w-[8px] h-[8px] rounded-full bg-[#3d2c23] group-hover:bg-[#f58d20] transition-colors duration-300"></div>
                <span>We are committed to delivering natural, antioxidant-rich solutions that support your overall wellbeing.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
