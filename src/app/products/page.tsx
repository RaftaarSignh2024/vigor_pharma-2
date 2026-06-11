import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <>


      {/* Products Section */}
      <section className="pt-40 pb-24 bg-surface">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          
          {/* Category: Nutrition */}
          <div className="mb-24">
            <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h2 className="font-heading text-4xl font-bold mb-4">Nutrition & <span className="text-primary">Wellness</span></h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">Fuel your body with the highest quality protein sources.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Product 1 */}
              <Link href="/products/egg-whites-powder" id="egg-whites-powder" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/egg_whites_powder.png" alt="Premium Egg Whites Powder" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Fitness & Recovery</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">Premium Egg Whites Powder</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">100% pure protein powerhouse in a convenient powder form. Zero fat and zero cholesterol. Perfect for athletes, smoothies, and fitness enthusiasts.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
              
              {/* Product 2 */}
              <Link href="/products/egg-yolks-powder" id="egg-yolks-powder" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/egg_yolks_powder.png" alt="Rich Egg Yolks Powder" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Culinary & Baking</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">Rich Egg Yolks Powder</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">Dense in essential nutrients like Vitamin D and Choline. Ideal for premium baking, sauces, culinary arts, and long-term shelf stability.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>

              {/* Product 3 */}
              <Link href="/products/eggy-nutritior" id="eggy-nutritior" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/liquid_egg_white.png" alt="Eggy Nutritior" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Nutrition & Wellness</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">Eggy Nutritior</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">Premium liquid egg products in convenient bottle packaging. Choose from our range of variations to suit your dietary and culinary needs.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>

              {/* Product 4 */}
              <Link href="/products/premium-farm-eggs" id="premium-farm-eggs" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/premium_egg_carton.png" alt="Premium Farm Eggs" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Nutrition & Wellness</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">Premium Farm Eggs</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">High-quality, farm-fresh eggs in premium protective packaging. Rich in protein, Omega-3, and essential vitamins for your daily nutritional needs.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Category: Hygiene */}
          <div>
            <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h2 className="font-heading text-4xl font-bold mb-4">Personal <span className="text-primary">Hygiene</span></h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">Uncompromising comfort and advanced protection.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Product 3 (Sanitary Pads) */}
              <Link href="/products/sanitary-pads" id="sanitary-pads" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5 p-6">
                  <img src="/sanitary_pads_s.jpg" alt="Sanitary Pads" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Hygiene</span>
                  <h3 className="font-heading text-2xl font-bold mb-4"><mark className="bg-yellow-300 text-black px-2 py-0.5 rounded-sm font-bold shadow-sm">Sky Soft</mark> Sanitary Pads (Day/Night Pack)</h3>
                  <p className="text-text-muted mb-8 flex-grow">Advanced absorption technology with a breathable, 100% organic cotton top layer. Designed to prevent irritation while offering maximum leak-proof protection for up to 12 hours. Dermatologically tested and safe for sensitive skin.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
              
              {/* Product 4 (Baby Diapers) */}
              <Link href="/products/baby-diapers" id="baby-diapers" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5 p-6">
                  <img src="/premium_baby_diapers.png" alt="Premium Baby Diapers" className="w-full h-full object-cover mix-blend-multiply rounded-t-3xl" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Baby Care</span>
                  <h3 className="font-heading text-2xl font-bold mb-4"><mark className="bg-yellow-300 text-black px-2 py-0.5 rounded-sm font-bold shadow-sm">Sky Soft</mark> Baby Diapers (Ultra Soft)</h3>
                  <p className="text-text-muted mb-8 flex-grow">Provide unparalleled comfort for your little one. Features a super-absorbent core, wetness indicator, and hypoallergenic materials free from harsh chemicals. Guaranteed to keep delicate skin dry and rash-free all night long.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
