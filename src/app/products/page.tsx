import Image from "next/image";

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Product 1 */}
              <div id="whole-eggs" className="flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
                <div className="w-full h-60 relative bg-gray-100 border-b border-black/5">
                  <img src="https://images.unsplash.com/photo-1598965675045-45c5e72c7d05?auto=format&fit=crop&q=80&w=600" alt="Farm Fresh Eggs" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Nutrition</span>
                  <h3 className="font-heading text-xl font-bold mb-3">Farm Fresh Whole Eggs</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">Rich in omega-3 and essential vitamins. Sourced directly from our ethical farms where hens roam freely.</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-black/5">
                    <span className="text-xl font-bold text-text-dark">$4.99 <span className="text-sm font-normal text-text-muted">/ dozen</span></span>
                    <button className="px-4 py-2 rounded-full font-semibold text-sm text-primary bg-transparent border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300">Add to Cart</button>
                  </div>
                </div>
              </div>
              
              {/* Product 2 */}
              <div id="egg-whites" className="flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
                <div className="w-full h-60 relative bg-gray-100 border-b border-black/5">
                  <img src="/liquid_egg_white.png" alt="Liquid Egg White" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Fitness</span>
                  <h3 className="font-heading text-xl font-bold mb-3">Pure Egg Whites (Pasteurized)</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">100% pure protein powerhouse. Zero fat and zero cholesterol. Perfect for athletes and fitness enthusiasts.</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-black/5">
                    <span className="text-xl font-bold text-text-dark">$6.50 <span className="text-sm font-normal text-text-muted">/ 500ml</span></span>
                    <button className="px-4 py-2 rounded-full font-semibold text-sm text-primary bg-transparent border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300">Add to Cart</button>
                  </div>
                </div>
              </div>
              
              {/* Product 3 */}
              <div id="egg-yolks" className="flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
                <div className="w-full h-60 relative bg-gray-100 border-b border-black/5">
                  <img src="/egg_yolk.png" alt="Egg Yolk" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Culinary</span>
                  <h3 className="font-heading text-xl font-bold mb-3">Rich Egg Yolks (Pasteurized)</h3>
                  <p className="text-text-muted text-sm mb-6 flex-grow">Dense in essential nutrients like Vitamin D and Choline. Ideal for premium baking, sauces, and culinary arts.</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-black/5">
                    <span className="text-xl font-bold text-text-dark">$7.00 <span className="text-sm font-normal text-text-muted">/ 500ml</span></span>
                    <button className="px-4 py-2 rounded-full font-semibold text-sm text-primary bg-transparent border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category: Hygiene */}
          <div>
            <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h2 className="font-heading text-4xl font-bold mb-4">Personal <span className="text-primary">Hygiene</span></h2>
              <p className="text-lg text-text-muted max-w-2xl mx-auto">Uncompromising comfort and advanced protection.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Product 4 */}
              <div id="sanitary-pads" className="flex flex-col rounded-3xl bg-surface border border-black/5 overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
                <div className="w-full h-80 relative bg-gray-100 border-b border-black/5">
                  <img src="/sanitary_pads.png" alt="Sanitary Pads" className="w-full h-full object-cover" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Hygiene</span>
                  <h3 className="font-heading text-2xl font-bold mb-4">Ultra-Soft Sanitary Pads (Day/Night Pack)</h3>
                  <p className="text-text-muted mb-8 flex-grow">Advanced absorption technology with a breathable, 100% organic cotton top layer. Designed to prevent irritation while offering maximum leak-proof protection for up to 12 hours. Dermatologically tested and safe for sensitive skin.</p>
                  <div className="flex justify-between items-center mt-4 pt-6 border-t border-black/5">
                    <span className="text-2xl font-bold text-text-dark">$8.99 <span className="text-sm font-normal text-text-muted">/ pack of 20</span></span>
                    <button className="px-6 py-3 rounded-full font-heading font-semibold text-white bg-primary shadow-[0_10px_20px_var(--primary-glow)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_15px_25px_var(--primary-glow)] transition-all duration-300">Add to Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
