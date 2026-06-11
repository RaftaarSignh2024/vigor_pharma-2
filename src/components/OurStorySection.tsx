import Image from "next/image";
import Link from "next/link";

export default function OurStorySection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-[#f58d20] -translate-x-[20%] -translate-y-[20%] rounded-br-full opacity-90 z-0 hidden md:block"></div>
      <div className="absolute bottom-0 right-0 w-80 md:w-[500px] h-80 md:h-[500px] bg-[#f58d20] translate-x-[20%] translate-y-[20%] rounded-tl-[100%] opacity-90 z-0 hidden md:block"></div>

      <div className="w-full max-w-[1280px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="font-heading text-4xl md:text-5xl font-black uppercase tracking-tight text-[#3d2c23] mb-6">
            OUR STORY
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="w-full md:w-1/2 animate-in fade-in slide-in-from-left-8 duration-1000 delay-100">
            <div className="relative w-full aspect-[16/11] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white">
              <Image 
                src="/our_story_team.png" 
                alt="Our dedicated team and farmers" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 pt-4">
            <h3 className="font-heading text-3xl md:text-4xl font-black uppercase tracking-tight text-[#2d3748] mb-8 leading-tight">
              DRIVEN BY VISION TO REVOLUTION <span className="text-[#f58d20]">EGG QUALITY IN INDIA</span>
            </h3>

            <ul className="space-y-4 text-[1.1rem] leading-relaxed text-[#4a5568] font-medium mb-10">
              <li className="flex items-start gap-4 group">
                <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-[#3d2c23] group-hover:bg-[#f58d20] transition-colors duration-300"></div>
                <span>Our mission is to improve the quality of eggs in India.</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-[#3d2c23] group-hover:bg-[#f58d20] transition-colors duration-300"></div>
                <span>We work directly with farmers to maintain strict quality standards.</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-[#3d2c23] group-hover:bg-[#f58d20] transition-colors duration-300"></div>
                <span>Our eggs come from healthy hens fed with herbal and nutritious feed.</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-[#3d2c23] group-hover:bg-[#f58d20] transition-colors duration-300"></div>
                <span>Every egg goes through multiple safety and freshness checks.</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="mt-2 min-w-[6px] h-[6px] rounded-full bg-[#3d2c23] group-hover:bg-[#f58d20] transition-colors duration-300"></div>
                <span>We ensure fresh eggs reach your home quickly and safely.</span>
              </li>
            </ul>

            <div>
              <Link href="/about" className="inline-block bg-[#f07b32] hover:bg-[#d66a27] text-white font-semibold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Read Full Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
