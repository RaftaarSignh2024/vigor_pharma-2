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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
              {/* Product 1: Egg Whites Powder */}
              <Link href="/products/egg-whites-powder" id="egg-whites-powder" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/slider_egg_white_new.png" alt="Eggy Nutritior™ Egg Whites Powder" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Fitness & Recovery</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">Eggy Nutritior™ Egg Whites Powder</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">100% pure protein powerhouse in a convenient powder form. Zero fat and zero cholesterol.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
              
              {/* Product 2: Egg Yolks Powder */}
              <Link href="/products/egg-yolks-powder" id="egg-yolks-powder" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/slider_egg_yolk_new.png" alt="Eggy Nutritior™ Egg Yolks Powder" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Culinary & Baking</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">Eggy Nutritior™ Egg Yolks Powder</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">Dense in essential nutrients like Vitamin D and Choline. Ideal for premium baking and sauces.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>

              {/* Product 3: Egg Combined Powder (NEW) */}
              <Link href="/products/egg-combined-powder" id="egg-combined-powder" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/slider_egg_combined_new.png" alt="Eggy Nutritior™ Egg Combined Powder" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Balanced Nutrition</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">Eggy Nutritior™ Egg Combined Powder</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">The perfect balance of egg whites and yolks in a convenient powder. Ideal for a full amino acid profile.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>

              {/* Product 4: Liquid Egg Whites */}
              <Link href="/products/liquid-egg-whites" id="liquid-egg-whites" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/slider_liquid_white_v4.png" alt="Eggy Nutritior™ Liquid Egg Whites" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Fitness</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">Eggy Nutritior™ Liquid Egg Whites</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">Premium pasteurized liquid egg whites. Ready to use straight from the bottle for cooking or smoothies.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>

              {/* Product 5: Liquid Egg Yolks (NEW) */}
              <Link href="/products/liquid-egg-yolks" id="liquid-egg-yolks" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/slider_liquid_yellow_v5.png" alt="Eggy Nutritior™ Liquid Egg Yolks" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Culinary Excellence</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">Eggy Nutritior™ Liquid Egg Yolks</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">Rich, golden pasteurized liquid egg yolks for all your culinary needs. Perfect for hollandaise, custards, and baking.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>

              {/* Product 6: Liquid Combined Eggs (NEW) */}
              <Link href="/products/liquid-combined-eggs" id="liquid-combined-eggs" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/slider_liquid_combined_v4.png" alt="Eggy Nutritior™ Liquid Whole Eggs" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Daily Nutrition</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">Eggy Nutritior™ Liquid Whole Eggs</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">Convenient pasteurized whole liquid eggs. The perfect mix of whites and yolks, ready to scramble or bake.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>

              {/* Product 7: Premium Farm Eggs */}
              <Link href="/products/premium-farm-eggs" id="premium-farm-eggs" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both md:col-span-2 lg:col-span-3 lg:w-1/3 lg:mx-auto">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/premium_egg_carton.png" alt="Eggy Nutritior™ Cage-Free Premium Farm Eggs" className="w-full h-full object-cover" />
                  {/* Cage-Free badge overlay */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-green-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                      <i className="ph-fill ph-check-circle"></i> Cage-Free
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider shadow-md">
                      <i className="ph-fill ph-leaf"></i> Free-Range
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Farm Fresh Nutrition</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">Eggy Nutritior™ Cage-Free Premium Farm Eggs</h3>
                  <p className="text-text-muted text-sm mb-5 flex-grow">Ethically raised cage-free eggs from free-range hens. Packed with high-quality protein, Omega-3 fatty acids, and essential vitamins. No hormones, no antibiotics — just pure, natural goodness straight from our farm.</p>
                  {/* Feature Pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold"><i className="ph-fill ph-check-circle"></i>100% Cage-Free</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold"><i className="ph-fill ph-leaf"></i>Free-Range Hens</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-semibold"><i className="ph-fill ph-heart"></i>Hormone-Free</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold"><i className="ph-fill ph-drop"></i>Rich in Omega-3</span>
                  </div>
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
              {/* Product 3 (Sanitary Pads) */}
              <Link href="/products/sanitary-pads" id="sanitary-pads" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/slider_sanitary_pads_new.png" alt="Sanitary Pads" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Hygiene</span>
                  <h3 className="font-heading text-2xl font-bold mb-4"><mark className="bg-yellow-300 text-black px-2 py-0.5 rounded-sm font-bold shadow-sm">Sky Soft</mark>™ Sanitary Pads (Day/Night Pack)</h3>
                  <p className="text-text-muted mb-8 flex-grow">Advanced absorption technology with a breathable, 100% organic cotton top layer by Vigor Life Care. Designed to prevent irritation while offering maximum leak-proof protection for up to 12 hours. Dermatologically tested and safe for sensitive skin.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
              
              {/* Product 4 (Baby Diapers) */}
              <Link href="/products/baby-diapers" id="baby-diapers" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/slider_baby_diapers_new.png" alt="Premium Baby Diapers" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Baby Care</span>
                  <h3 className="font-heading text-2xl font-bold mb-4"><mark className="bg-yellow-300 text-black px-2 py-0.5 rounded-sm font-bold shadow-sm">Sky Soft</mark>™ Baby Diapers (Ultra Soft)</h3>
                  <p className="text-text-muted mb-8 flex-grow">Provide unparalleled comfort for your little one. Features a super-absorbent core, wetness indicator, and hypoallergenic materials free from harsh chemicals. Guaranteed to keep delicate skin dry and rash-free all night long.</p>
                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>

              {/* Product 5 (Baby Wipes) */}
              <Link href="/products/baby-wipes" id="baby-wipes" className="block flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:border-primary hover:ring-4 hover:ring-primary/10 hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/slider_baby_wipes_new.png" alt="Pure Water Baby Wipes" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Gentle Baby Care</span>
                  <h3 className="font-heading text-2xl font-bold mb-4"><mark className="bg-yellow-300 text-black px-2 py-0.5 rounded-sm font-bold shadow-sm">Sky Soft</mark>™ Baby Wipes (Pure Water)</h3>
                  <p className="text-text-muted mb-8 flex-grow">99% pure water wipes with organic Aloe Vera & Chamomile extracts. Ultra-soft, thick, hypoallergenic, and 100% free from alcohol and parabens for sensitive skin.</p>
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
