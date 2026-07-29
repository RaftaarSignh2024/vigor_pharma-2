import Image from "next/image";

export default function CFNaturalFarmsDetails() {
  const timelineEvents = [
    {
      year: "2025",
      title: "Company Registration",
      description: "CF Natural Lay Farms LLP was officially registered in 2025 with a dedication to sustainable agriculture.",
      icon: "ph-buildings"
    },
    {
      year: "2025",
      title: "First Farm Establishment",
      description: "Successfully acquired and developed our first eco-conscious farming facility.",
      icon: "ph-tree"
    },
    {
      year: "2026",
      title: "Scaling Production",
      description: "Expanded our operations to meet the growing demand for ethically cultivated, high-quality nutritional sources.",
      icon: "ph-chart-line-up"
    },
    {
      year: "2026",
      title: "Trademark Registration",
      description: "Successfully registered the trademark 'Eggy Nutritior' under Class 29, cementing our commitment to quality egg and poultry products.",
      icon: "ph-certificate"
    },
    {
      year: "Present",
      title: "Farm-to-Table Excellence",
      description: "Today, we stand at the forefront of providing essential, protein-rich staples while prioritizing environmental stewardship.",
      icon: "ph-leaf"
    }
  ];

  return (
    <>
      {/* Page Header */}
      <header className="pt-48 pb-10 bg-gradient-to-br from-[#FFF6F0] to-white border-b border-black/5 text-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">CF Natural Lay Farms <span className="text-primary">LLP</span></h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Discover the full story of our sustainable egg production farm and the milestones that built our farm-to-table legacy.
          </p>
        </div>
      </header>

      {/* Full Company Content */}
      <section className="pt-16 pb-24 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            <div className="w-full lg:w-5/12 h-80 lg:h-[450px] relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/banner_cf_farms.png" alt="CF Natural Lay Farms LLP" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full lg:w-7/12">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-600/10 text-green-600 mb-6">
                <i className="ph-fill ph-plant text-xl"></i>
                <span className="font-semibold tracking-wide uppercase text-sm">Sustainable Agriculture</span>
              </div>
              <h3 className="font-heading text-4xl font-bold mb-6">CF Natural Lay Farms LLP</h3>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                <span className="text-green-600 font-semibold bg-green-600/10 px-2 py-0.5 rounded">CF Natural Lay Farms LLP</span> stands at the forefront of sustainable agriculture, operating as a specialized facility dedicated to the ethical production of premium-quality eggs. By integrating advanced, eco-conscious farming methodologies, we ensure that our nutritional offerings consistently exceed industry standards for safety, freshness, and overall nutritional value.
              </p>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                At the heart of our operations lies a deep respect for traditional farming culture. We believe that the best nutritional sources come from processes that honor nature's rhythms. By combining time-tested heritage practices with modern sustainability, we cultivate our eggs with genuine care, patience, and a reverence for the land.
              </p>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                Driven by a steadfast commitment to environmental stewardship and rigorous quality assurance, we have perfected the farm-to-table continuum. Our core philosophy centers on nurturing both our flocks and our consumers—delivering vital, protein-rich staples that serve as the cornerstone of a vibrant, healthy lifestyle.
              </p>
              {/* Professional Highlight Badges */}
              <div className="flex flex-wrap gap-2.5 my-6">
                {[
                  "Registered Trademark: Eggy Nutritior™ (Class 29)",
                  "Ethical Eco-Conscious Farming",
                  "100% Pasture Raised & Free-Range",
                  "Zero Antibiotics & Zero Hormones",
                  "Omega-3 Rich Premium Farm Eggs",
                  "Farm-to-Table Quality Control",
                  "Sustainable Agriculture & Eco Practices"
                ].map((highlight, index) => (
                  <span key={index} className="text-xs font-bold text-green-700 bg-green-50 px-3.5 py-2 rounded-full border border-green-200 flex items-center gap-2 shadow-2xs">
                    <i className="ph-bold ph-check-circle text-green-600 text-sm"></i>
                    {highlight}
                  </span>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mt-6 flex gap-4 items-start">
                <i className="ph-fill ph-certificate text-3xl text-primary shrink-0 mt-1"></i>
                <div>
                  <h4 className="font-heading font-bold text-xl mb-2 text-slate-800">Registered Trademark: Eggy Nutritior™</h4>
                  <p className="text-text-muted">
                    We proudly hold the trademark for <strong>Eggy Nutritior</strong> (Class 29), which represents our dedication to delivering the finest quality preserved, frozen, and farm-fresh eggs and poultry products to our consumers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Journey Profile */}
      <section className="py-24 bg-surface relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none"></div>

        <div className="w-full max-w-[1000px] mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h2 className="font-heading text-4xl font-bold mb-4">Our <span className="text-primary">Journey</span></h2>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">Explore the key milestones that have defined our commitment to sustainable agriculture.</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}>
                  
                  {/* Timeline Dot */}
                  <div className="hidden sm:flex absolute left-[28px] md:left-1/2 top-0 w-14 h-14 bg-white border-4 border-primary/20 group-hover:border-primary rounded-full transform -translate-x-1/2 items-center justify-center text-primary group-hover:text-white group-hover:bg-primary transition-all duration-500 shadow-lg z-10">
                    <i className={`ph-fill ${event.icon} text-2xl`}></i>
                  </div>

                  {/* Content Box */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} animate-in fade-in slide-in-from-bottom-4 duration-700 delay-${index * 100}`}>
                    <div className="glass p-8 rounded-3xl shadow-sm hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-300 relative">
                      {/* Mobile Icon (Visible only on small screens) */}
                      <div className="sm:hidden w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center text-2xl mb-4">
                        <i className={`ph-fill ${event.icon}`}></i>
                      </div>

                      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 tracking-wider">
                        {event.year}
                      </span>
                      <h4 className="font-heading text-2xl font-bold mb-3 text-slate-800 group-hover:text-primary transition-colors">{event.title}</h4>
                      <p className="text-text-muted leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
