import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Page Header */}
      <header className="pt-40 pb-8 bg-gradient-to-br from-[#FFF6F0] to-white border-b border-black/5 text-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Our <span className="text-primary">Story</span></h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Bridging the gap between essential nutrition and uncompromising personal hygiene for a holistically healthier world.
          </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="pt-8 pb-24 bg-surface">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <div className="relative animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(255,107,0,0.15)]">
                <img 
                  src="/about_us.png" 
                  alt="Team working" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
              <h2 className="font-heading text-4xl font-bold mb-6">A Commitment to <span className="text-primary">Excellence</span></h2>
              <p className="text-text-muted mb-6 text-lg">
                At Vigor, we believe that true wellness encompasses what you put into your body and how you care for it externally. That's why we've pioneered a unique approach, offering top-tier nutritional staples alongside premium personal care items.
              </p>
              <p className="text-text-muted mb-10 text-lg">
                Whether it's ensuring our farm-fresh eggs are packed with vital nutrients, or designing sanitary pads that offer unparalleled comfort and protection, our uncompromising standards remain the same.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div>
                  <h3 className="font-heading text-4xl text-primary font-bold mb-2">10k+</h3>
                  <p className="font-medium text-lg">Happy Customers</p>
                </div>
                <div>
                  <h3 className="font-heading text-4xl text-primary font-bold mb-2">100%</h3>
                  <p className="font-medium text-lg">Quality Assured</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Companies Section */}
      <section className="py-24 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Group of <span className="text-primary">Companies</span></h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">A unified approach to wellness, agriculture, and quality products through our diverse ventures.</p>
          </div>
          
          <div className="flex flex-col gap-12">
            {/* Vigor Life Care LLP */}
            <div className="flex flex-col md:flex-row items-center bg-surface rounded-3xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-black/5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
              <div className="w-full md:w-1/2 h-64 md:h-[400px] relative">
                <img src="/banner_vigor_life_care.png" alt="Vigor Life Care LLP" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-10 md:p-16">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6">
                  <i className="ph-fill ph-heartbeat"></i>
                </div>
                <h3 className="font-heading text-3xl font-bold mb-4">Vigor Life Care LLP</h3>
                <p className="text-text-muted text-lg leading-relaxed">Dedicated to pioneering healthcare solutions and premium personal care products that enhance everyday well-being and hygiene.</p>
              </div>
            </div>
            
            {/* GS Enterprises */}
            <div className="flex flex-col md:flex-row-reverse items-center bg-surface rounded-3xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-black/5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
              <div className="w-full md:w-1/2 h-64 md:h-[400px] relative">
                <img src="/banner_gs_enterprises.png" alt="GS Enterprises" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-10 md:p-16">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6">
                  <i className="ph-fill ph-storefront"></i>
                </div>
                <h3 className="font-heading text-3xl font-bold mb-4">GS Enterprises</h3>
                <p className="text-text-muted text-lg leading-relaxed">Our robust distribution and trading arm, ensuring seamless supply chains and delivering excellence across markets worldwide.</p>
              </div>
            </div>
            
            {/* CF Natural Lay Farms LLP */}
            <div className="flex flex-col md:flex-row items-center bg-surface rounded-3xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-black/5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              <div className="w-full md:w-1/2 h-64 md:h-[400px] relative">
                <img src="/banner_cf_farms.png" alt="CF Natural Lay Farms LLP" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-10 md:p-16">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6">
                  <i className="ph-fill ph-plant"></i>
                </div>
                <h3 className="font-heading text-3xl font-bold mb-4">CF Natural Lay Farms LLP</h3>
                <p className="text-text-muted text-lg leading-relaxed">Committed to sustainable agriculture and providing farm-fresh, nutritionally rich produce right from nature to your table.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Core <span className="text-primary">Values</span></h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">The principles that guide every product we create and every decision we make.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-surface border border-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-primary-light transition-all duration-300 text-center group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <i className="ph-fill ph-shield-check"></i>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Integrity</h3>
              <p className="text-text-muted">We are fully transparent about our sourcing, ingredients, and manufacturing processes.</p>
            </div>
            
            <div className="p-10 rounded-3xl bg-surface border border-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-primary-light transition-all duration-300 text-center group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <i className="ph-fill ph-plant"></i>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Sustainability</h3>
              <p className="text-text-muted">Committed to eco-friendly practices that protect our planet for future generations.</p>
            </div>
            
            <div className="p-10 rounded-3xl bg-surface border border-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-primary-light transition-all duration-300 text-center group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <i className="ph-fill ph-users"></i>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">Community</h3>
              <p className="text-text-muted">Building a supportive ecosystem where health and wellness are accessible to everyone.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
