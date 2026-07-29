import Image from "next/image";
import Link from "next/link";

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
                At <span className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">Vigor Life Care LLP</span>, we believe that true wellness encompasses what you put into your body and how you care for it externally. That's why we've pioneered a unique approach, offering top-tier nutritional staples alongside premium personal care items.
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
                <h3 className="font-heading text-3xl font-bold mb-2">Vigor Life Care LLP</h3>
                <div className="mb-4 text-sm font-bold tracking-wider uppercase flex items-center gap-3 flex-wrap">
                  <div><span className="text-text-muted">Founder:</span> <span className="text-primary bg-primary/10 px-2 py-1 rounded ml-1">Mr. Gajendra Kumar</span></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 hidden sm:block"></div>
                  <div><span className="text-text-muted">Est:</span> <span className="text-primary bg-primary/10 px-2 py-1 rounded ml-1">2024</span></div>
                </div>
                <p className="text-text-muted text-lg leading-relaxed mb-6">
                  Founded in 2024, <span className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">Vigor Life Care LLP</span> has rapidly emerged as a transformative powerhouse in the wellness industry. Driven by a relentless pursuit of excellence, we fuse advanced nutritional science with state-of-the-art personal hygiene innovations. Our mission is to radically elevate global health standards, delivering uncompromising quality and profound vitality to empower lives worldwide.
                </p>
                <Link href="/company/vigor-life-care" className="inline-block px-8 py-4 rounded-xl font-heading font-semibold text-white bg-primary shadow-[0_10px_20px_var(--primary-glow)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_15px_25px_var(--primary-glow)] transition-all duration-300">
                  View More
                </Link>
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
                <h3 className="font-heading text-3xl font-bold mb-2">GS Enterprises</h3>
                <div className="mb-4 text-sm font-bold tracking-wider uppercase"><span className="text-text-muted">Founder:</span> <span className="text-primary bg-primary/10 px-2 py-1 rounded ml-1">Mr. Gajendra Kumar</span></div>
                <p className="text-text-muted text-lg leading-relaxed mb-4">
                  <span className="text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">G.S. Enterprises</span> is a professionally managed TurnKey Projects and Engineering Company specialized in setting up of Pharma, API, Cosmetic, Herbal Extraction and Healthcare Plants from Concept to Commissioning. This includes Preparation of Factory designs, Architecture and Structural designing, HVAC designing, Equipment expediting, Water System and Electrical Designing and In house Engineering, construction, Manufacturing & site Execution.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "PHARMA PROJECT CONSULTANTS", "PHARMA PROJECTS EXPORT", "TURNKEY PHARMA PROJECTS", "TURNKEY PROJECTS", "PHARMACEUTICAL PROJECT EXPORT", "PHARMACEUTICAL TURNKEY PROJECT", "EU APPROVAL FOR PHARMA PLANTS", "VALIDATION OF PHARMA PROJECTS", "CONSULTANCY FOR PHARMA PROJECTS", "HERBAL PROJECTS", "SUPPLY OF TURNKEY PHARMA PROJECTS", "LABORATORY DESIGNING", "LABORATORY TURNKEY PROJECTS", "PHARMA TURNKEY PROJECT SUPPLY", "PHARMA PLANT LAYOUTS", "PHARMA PLANT ENGINEERING", "FEASIBILITY REPORT FOR PHARMA PROJECT", "PHARMA PLANT DESIGN", "HVAC IN PHARMA PLANTS", "CLEAN ROOMS FOR PHARMA PLANTS", "CLEAN ROOM DESIGN", "TABLET CAPSULE PLANTS", "LIQUID ORAL PLANTS", "IV FLUID FACTORY SUPPLY", "PHARMA FACTORY SUPPLY", "USFDA APPROVAL PHARMA PLANTS", "MHRA APPROVAL PHARMA PLANTS", "PICS APPROVAL PHARMA PLANTS", "INTERNATIONAL PHARMA PLANTS"
                  ].map((service, index) => (
                    <span key={index} className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                      {service}
                    </span>
                  ))}
                </div>
                <Link href="/company/gs-enterprises" className="inline-block px-8 py-4 rounded-xl font-heading font-semibold text-white bg-primary shadow-[0_10px_20px_var(--primary-glow)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_15px_25px_var(--primary-glow)] transition-all duration-300">
                  View More
                </Link>
              </div>
            </div>
            
            {/* CF Natural Lay Farms LLP */}
            <div className="flex flex-col md:flex-row items-center bg-surface rounded-3xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-black/5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 fill-mode-both">
              <div className="w-full md:w-1/2 h-64 md:h-[400px] relative">
                <img src="/banner_cf_farms.png" alt="CF Natural Lay Farms LLP" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-10 md:p-16">
                <div className="w-16 h-16 rounded-2xl bg-green-500/10 text-green-600 flex items-center justify-center text-3xl mb-6">
                  <i className="ph-fill ph-plant"></i>
                </div>
                <h3 className="font-heading text-3xl font-bold mb-2">CF Natural Lay Farms LLP</h3>
                <div className="mb-4 text-sm font-bold tracking-wider uppercase"><span className="text-text-muted">Founder:</span> <span className="text-primary bg-primary/10 px-2 py-1 rounded ml-1">Mr. Gajendra Kumar</span></div>
                <p className="text-text-muted text-lg leading-relaxed mb-4">
                  Driven by a deep respect for heritage practices, <span className="text-green-600 font-bold bg-green-600/10 px-2 py-0.5 rounded">CF Natural Lay Farms LLP</span> represents our unwavering commitment to sustainable agriculture. We focus on the ethical, eco-conscious cultivation of premium-quality eggs that nourish our communities.
                </p>

                {/* Professional Highlight Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "Registered Trademark: Eggy Nutritior™ (Class 29)",
                    "Ethical Eco-Conscious Farming",
                    "100% Pasture Raised & Free-Range",
                    "Zero Antibiotics & Zero Hormones",
                    "Omega-3 Rich Premium Farm Eggs",
                    "Farm-to-Table Quality Control",
                    "Sustainable Agriculture & Eco Practices"
                  ].map((highlight, index) => (
                    <span key={index} className="text-xs font-semibold text-green-700 bg-green-50 px-3 py-1.5 rounded-full border border-green-200 flex items-center gap-1.5">
                      <i className="ph-bold ph-check-circle text-green-600"></i>
                      {highlight}
                    </span>
                  ))}
                </div>

                <Link href="/company/cf-natural-farms" className="inline-block px-8 py-4 rounded-xl font-heading font-semibold text-white bg-primary shadow-[0_10px_20px_var(--primary-glow)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_15px_25px_var(--primary-glow)] transition-all duration-300">
                  View More
                </Link>
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
