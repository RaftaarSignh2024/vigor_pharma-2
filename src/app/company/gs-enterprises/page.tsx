import Image from "next/image";

export default function GSEnterprisesDetails() {
  const timelineEvents = [
    {
      year: "2020",
      title: "Company Registration",
      description: "GS Enterprises was officially registered in 2020 with a vision to redefine pharmaceutical consulting and strategic healthcare solutions.",
      icon: "ph-buildings"
    },
    {
      year: "2021",
      title: "Building Expert Networks",
      description: "Successfully established a robust network of industry experts to provide unparalleled regulatory and compliance guidance.",
      icon: "ph-users-three"
    },
    {
      year: "2023",
      title: "Advanced Strategic Solutions",
      description: "Expanded our consulting services to cover product lifecycle management and complex healthcare market strategies.",
      icon: "ph-strategy"
    },
    {
      year: "Present",
      title: "Global Pharma Consulting Ecosystem",
      description: "Today, we stand as a trusted consulting powerhouse, guiding premium wellness and pharmaceutical ventures worldwide.",
      icon: "ph-globe-hemisphere-west"
    }
  ];

  return (
    <>
      {/* Page Header */}
      <header className="pt-48 pb-10 bg-gradient-to-br from-[#FFF6F0] to-white border-b border-black/5 text-center">
        <div className="w-full max-w-[1280px] mx-auto px-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">GS <span className="text-primary">Enterprises</span></h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Discover the full story of our pharmaceutical consulting firm and the milestones that have defined our healthcare expertise.
          </p>
        </div>
      </header>

      {/* Full Company Content */}
      <section className="pt-16 pb-24 bg-white">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
            <div className="w-full lg:w-5/12 h-80 lg:h-[450px] relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="/banner_gs_enterprises.png" alt="GS Enterprises" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="w-full lg:w-7/12">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                <i className="ph-fill ph-stethoscope text-xl"></i>
                <span className="font-semibold tracking-wide uppercase text-sm">Turnkey Projects & Engineering Consultants</span>
              </div>
              <h3 className="font-heading text-4xl font-bold mb-6">G.S. Enterprises</h3>
              
              <div className="space-y-4 text-text-muted text-base md:text-lg leading-relaxed">
                <p>
                  <strong className="text-gray-800 font-semibold">G.S. Enterprises</strong> is a professionally managed TurnKey Projects and Engineering Company specialized in setting up of Pharma, API, Cosmetic, Herbal Extraction and Healthcare Plants from Concept to Commissioning. This includes Preparation of Factory designs, Architecture and Structural designing, HVAC designing, Equipment expediting, Water System and Electrical Designing and In house Engineering, construction, Manufacturing & site Execution.
                </p>
                <p>
                  We at G.S. Enterprises have dedicated team of Architects, Structural Engineers, HVAC Engineers, Mechanical Engineers, Electrical Engineers & Site Engineers. We take up the project work with a concept of <span className="font-semibold text-primary">Project Integration</span>, making us your ideal partners in your plans for expansion of your facilities, green field project & capacity expansions.
                </p>
                <p>
                  We provide In house Engineering & Manufacturing for electrical, HVAC, Piping and process equipment. This is followed up by active on site project management and validation. We pay major attention to integration of project resulting in to cost effective and timely completion of the project. Apart from having worked on more than <span className="font-bold text-gray-800 underline decoration-primary/40 underline-offset-4">60+ pharmaceutical, API, Bulk Drug, Herbal Extraction and Oral Care Projects</span>.
                </p>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-black/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    60+
                  </div>
                  <span className="text-sm font-bold text-gray-800">Projects Executed Worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                    <i className="ph-bold ph-gear"></i>
                  </div>
                  <span className="text-sm font-bold text-gray-800">Concept to Commissioning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-gray-50 border-t border-black/5">
        <div className="w-full max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-4">
              <i className="ph-bold ph-certificate"></i> Our Specialties & Core Capabilities
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Services Provided by <span className="text-primary">G.S. Enterprises</span></h2>
            <p className="text-lg text-text-muted max-w-3xl mx-auto">From concept to commissioning — specialized turnkey engineering, plant design, regulatory guidance, and international approvals.</p>
          </div>

          {/* Categorized Services Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Category 1: Turnkey Engineering & Plant Design */}
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-600 flex items-center justify-center text-3xl mb-6">
                <i className="ph-fill ph-buildings"></i>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3 text-slate-800">Turnkey Plant & Engineering</h3>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">Full turnkey execution for Pharma, API, Cosmetic, Herbal Extraction, and Healthcare plants from Concept to Commissioning.</p>
              <ul className="space-y-3 mt-auto">
                {[
                  "Factory Design & Architecture",
                  "Structural & HVAC Designing",
                  "Electrical & Water System Design",
                  "Equipment Expediting & Piping",
                  "In-house Manufacturing & Site Execution",
                  "Greenfield Projects & Facility Expansion"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                    <i className="ph-bold ph-check-circle text-primary text-lg shrink-0 mt-0.5"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 2: Regulatory & Certification Services */}
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl mb-6">
                <i className="ph-fill ph-certificate"></i>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3 text-slate-800">Regulatory & International Approvals</h3>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">Complete USFDA, MHRA, EU, and PICS approval guidance and regulatory validation support.</p>
              <ul className="space-y-3 mt-auto">
                {[
                  "USFDA Approval for Pharma Plants",
                  "MHRA & EU Approval for Pharma Plants",
                  "PICS Approval & Validation of Projects",
                  "Consultancy for International Pharma Plants",
                  "Clean Rooms & HVAC for Pharma Plants",
                  "Tablet, Capsule, Liquid & IV Fluid Factories"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                    <i className="ph-bold ph-check-circle text-primary text-lg shrink-0 mt-0.5"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Category 3: Quality Risk Management & Licensing */}
            <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center text-3xl mb-6">
                <i className="ph-fill ph-shield-check"></i>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3 text-slate-800">Laboratory & Specialized Plants</h3>
              <p className="text-text-muted text-sm mb-6 leading-relaxed">Laboratory turnkey designing, herbal extraction plants, feasibility reports, and active project integration.</p>
              <ul className="space-y-3 mt-auto">
                {[
                  "Laboratory Designing & Turnkey Projects",
                  "Herbal Projects & Extraction Plants",
                  "Feasibility Report for Pharma Projects",
                  "Pharma Plant Layouts & Engineering",
                  "In-house Manufacturing & Site Management",
                  "Active On-site Management & Validation"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                    <i className="ph-bold ph-check-circle text-primary text-lg shrink-0 mt-0.5"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Quick List Badge Grid */}
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-black/5 shadow-lg">
            <h4 className="font-heading text-2xl font-bold mb-6 text-center text-gray-800">Our Complete Specialties Portfolio</h4>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {[
                "PHARMA PROJECT CONSULTANTS", "PHARMA PROJECTS EXPORT", "TURNKEY PHARMA PROJECTS", "TURNKEY PROJECTS", "PHARMACEUTICAL PROJECT EXPORT", "PHARMACEUTICAL TURNKEY PROJECT", "EU APPROVAL FOR PHARMA PLANTS", "VALIDATION OF PHARMA PROJECTS", "CONSULTANCY FOR PHARMA PROJECTS", "HERBAL PROJECTS", "SUPPLY OF TURNKEY PHARMA PROJECTS", "LABORATORY DESIGNING", "LABORATORY TURNKEY PROJECTS", "PHARMA TURNKEY PROJECT SUPPLY", "PHARMA PLANT LAYOUTS", "PHARMA PLANT ENGINEERING", "FEASIBILITY REPORT FOR PHARMA PROJECT", "PHARMA PLANT DESIGN", "HVAC IN PHARMA PLANTS", "CLEAN ROOMS FOR PHARMA PLANTS", "CLEAN ROOM DESIGN", "TABLET CAPSULE PLANTS", "LIQUID ORAL PLANTS", "IV FLUID FACTORY SUPPLY", "PHARMA FACTORY SUPPLY", "USFDA APPROVAL PHARMA PLANTS", "MHRA APPROVAL PHARMA PLANTS", "PICS APPROVAL PHARMA PLANTS", "INTERNATIONAL PHARMA PLANTS"
              ].map((service, index) => (
                <div key={index} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-gray-50 border border-gray-200 text-gray-800 font-bold text-xs hover:border-primary hover:bg-primary/5 hover:text-primary transition-all duration-300 shadow-2xs">
                  <i className="ph-fill ph-check-circle text-primary text-sm"></i>
                  <span>{service}</span>
                </div>
              ))}
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
            <p className="text-lg text-text-muted max-w-2xl mx-auto">From our inception to our current global presence, explore the milestones that built our legacy.</p>
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
