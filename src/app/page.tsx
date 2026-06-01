import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import LabTestProcess from "@/components/LabTestProcess";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* Features Section */}
      <section className="py-24 bg-surface">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="font-heading text-4xl font-bold mb-4">Why Choose <span className="text-primary">Vigor</span>?</h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">We merge rigorous quality standards with a deep commitment to your holistic health.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-surface border border-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-primary-light transition-all duration-300 text-center group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <i className="ph-fill ph-check-circle"></i>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Premium Quality</h3>
              <p className="text-text-muted">Every product undergoes strict quality control to ensure you get nothing but the absolute best.</p>
            </div>
            
            <div className="p-10 rounded-3xl bg-surface border border-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-primary-light transition-all duration-300 text-center group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <i className="ph-fill ph-leaf"></i>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Natural & Safe</h3>
              <p className="text-text-muted">From our farm-fresh eggs to skin-friendly pads, we prioritize natural materials and safety.</p>
            </div>
            
            <div className="p-10 rounded-3xl bg-surface border border-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-primary-light transition-all duration-300 text-center group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <i className="ph-fill ph-heart"></i>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Holistic Care</h3>
              <p className="text-text-muted">Nourishing you from the inside out. Expert nutrition meets advanced personal care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Test Process Section */}
      <LabTestProcess />

      {/* Products Preview Section */}
      <section className="py-24">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-2">Our Core <span className="text-primary">Offerings</span></h2>
              <p className="text-lg text-text-muted">Discover our range of premium products.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
              <div className="w-full h-60 relative bg-gray-100 border-b border-black/5">
                <img src="https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&q=80&w=600" alt="Farm Fresh Eggs" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Nutrition</span>
                <h3 className="font-heading text-xl font-bold mb-3">Farm Fresh Whole Eggs</h3>
                <p className="text-text-muted text-sm mb-6 flex-grow">Rich in omega-3 and essential vitamins. Sourced directly from our ethical farms.</p>
                <Link href="/products" className="text-primary font-semibold flex items-center gap-2 hover:text-primary-dark transition-colors">
                  Learn More <i className="ph-bold ph-arrow-right"></i>
                </Link>
              </div>
            </div>
            
            {/* Product 2 */}
            <div className="flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
              <div className="w-full h-60 relative bg-gray-100 border-b border-black/5">
                <img src="/liquid_egg_white.png" alt="Liquid Egg White" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Fitness</span>
                <h3 className="font-heading text-xl font-bold mb-3">Pure Egg Whites</h3>
                <p className="text-text-muted text-sm mb-6 flex-grow">100% pure protein powerhouse. Perfect for athletes and fitness enthusiasts.</p>
                <Link href="/products" className="text-primary font-semibold flex items-center gap-2 hover:text-primary-dark transition-colors">
                  Learn More <i className="ph-bold ph-arrow-right"></i>
                </Link>
              </div>
            </div>
            
            {/* Product 3 */}
            <div className="flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              <div className="w-full h-60 relative bg-gray-100 border-b border-black/5">
                <img src="/sanitary_pads.png" alt="Sanitary Pads" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Hygiene</span>
                <h3 className="font-heading text-xl font-bold mb-3">Ultra-Soft Sanitary Pads</h3>
                <p className="text-text-muted text-sm mb-6 flex-grow">Advanced absorption technology with a breathable, skin-friendly cotton top layer.</p>
                <Link href="/products" className="text-primary font-semibold flex items-center gap-2 hover:text-primary-dark transition-colors">
                  Learn More <i className="ph-bold ph-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
            <Link href="/products" className="inline-flex items-center justify-center px-7 py-4 rounded-full font-heading font-semibold text-white bg-primary shadow-[0_10px_20px_var(--primary-glow)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_15px_25px_var(--primary-glow)] transition-all duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
