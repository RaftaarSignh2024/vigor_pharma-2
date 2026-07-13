import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import LabTestProcess from "@/components/LabTestProcess";
import Testimonials from "@/components/Testimonials";
import OrangeYolkSection from "@/components/OrangeYolkSection";
import OurStorySection from "@/components/OurStorySection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSlider />

      {/* Trademark Section */}
      <section className="bg-primary/5 py-16 border-b border-primary/10 animate-in fade-in duration-1000">
        <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="bg-white p-3 rounded-2xl shadow-xl rotate-[-2deg] hover:rotate-0 transition-all duration-500 hover:scale-105">
              <img src="/trademark.jpg" alt="Eggy Nutritior Trademark Registration" className="w-full h-auto rounded-xl border border-gray-100 object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary mb-4">
              <i className="ph-fill ph-certificate text-lg"></i>
              <span className="font-semibold text-sm uppercase tracking-wider">Registered Trademark</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Official Owners of Eggy Nutritior™</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              We are the proud owners of the officially registered trademark for <strong className="text-primary font-bold">Eggy Nutritior™</strong> (Class 29). This certification reflects our unwavering commitment to providing premium quality eggs, poultry, and nutritional products with uncompromising standards.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="font-heading text-4xl font-bold mb-4">Why Choose <span className="text-primary">Vigor Life Care LLP</span>?</h2>
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
                <img src="/egg_whites_powder_new.png" alt="Premium Egg Whites Powder" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Fitness & Recovery</span>
                <h3 className="font-heading text-xl font-bold mb-3">Premium Egg Whites Powder</h3>
                <p className="text-text-muted text-sm mb-6 flex-grow">100% pure protein powerhouse in a convenient powder form.</p>
                <Link href="/products/egg-whites-powder" className="text-primary font-semibold flex items-center gap-2 hover:text-primary-dark transition-colors">
                  Learn More <i className="ph-bold ph-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
              <div className="w-full h-60 relative bg-gray-100 border-b border-black/5">
                <img src="/egg_yolks_powder_new.png" alt="Rich Egg Yolks Powder" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Culinary & Baking</span>
                <h3 className="font-heading text-xl font-bold mb-3">Rich Egg Yolks Powder</h3>
                <p className="text-text-muted text-sm mb-6 flex-grow">Dense in essential nutrients like Vitamin D and Choline. Ideal for premium baking.</p>
                <Link href="/products/egg-yolks-powder" className="text-primary font-semibold flex items-center gap-2 hover:text-primary-dark transition-colors">
                  Learn More <i className="ph-bold ph-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Product 3 */}
            <div className="flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              <div className="w-full h-60 relative bg-gray-100 border-b border-black/5">
                <img src="/liquid_egg_white.png" alt="Liquid Egg White" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Fitness</span>
                <h3 className="font-heading text-xl font-bold mb-3">Eggy Nutritior Liquid Eggs</h3>
                <p className="text-text-muted text-sm mb-6 flex-grow">100% pure protein powerhouse. Choose from whites, yolks, or combo.</p>
                <Link href="/products/eggy-nutritior" className="text-primary font-semibold flex items-center gap-2 hover:text-primary-dark transition-colors">
                  Learn More <i className="ph-bold ph-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Product 4 */}
            <div className="flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
              <div className="w-full h-60 relative bg-gray-100 border-b border-black/5">
                <img src="/premium_egg_carton.png" alt="Premium Farm Eggs" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Nutrition</span>
                <h3 className="font-heading text-xl font-bold mb-3">Farm Fresh Whole Eggs</h3>
                <p className="text-text-muted text-sm mb-6 flex-grow">Rich in omega-3 and essential vitamins. Sourced directly from our ethical farms.</p>
                <Link href="/products/premium-farm-eggs" className="text-primary font-semibold flex items-center gap-2 hover:text-primary-dark transition-colors">
                  Learn More <i className="ph-bold ph-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Product 5 */}
            <div className="flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
              <div className="w-full h-60 relative bg-gray-100 border-b border-black/5 p-4">
                <img src="/sanitary_pads_s.jpg" alt="Sanitary Pads" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Hygiene</span>
                <h3 className="font-heading text-xl font-bold mb-3"><mark className="bg-yellow-300 text-black px-2 py-0.5 rounded-sm font-bold shadow-sm">Sky Soft</mark> Sanitary Pads</h3>
                <p className="text-text-muted text-sm mb-6 flex-grow">Advanced absorption technology with a breathable, skin-friendly cotton top layer.</p>
                <Link href="/products/sanitary-pads" className="text-primary font-semibold flex items-center gap-2 hover:text-primary-dark transition-colors">
                  Learn More <i className="ph-bold ph-arrow-right"></i>
                </Link>
              </div>
            </div>

            {/* Product 6 */}
            <div className="flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              <div className="w-full h-60 relative bg-gray-100 border-b border-black/5 p-4">
                <img src="/diaper_m.jpg" alt="Baby Diapers" className="w-full h-full object-contain mix-blend-multiply" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Baby Care</span>
                <h3 className="font-heading text-xl font-bold mb-3"><mark className="bg-yellow-300 text-black px-2 py-0.5 rounded-sm font-bold shadow-sm">Sky Soft</mark> Baby Diapers</h3>
                <p className="text-text-muted text-sm mb-6 flex-grow">Provide unparalleled comfort with a super-absorbent core and hypoallergenic materials.</p>
                <Link href="/products/baby-diapers" className="text-primary font-semibold flex items-center gap-2 hover:text-primary-dark transition-colors">
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

      {/* Testimonials Section */}
      <Testimonials />

      {/* Our Story Section */}
      <OurStorySection />

      {/* Orange Yolk Section */}
      <OrangeYolkSection />
    </>
  );
}
