import Image from "next/image";

export default function GSEnterprisesDetails() {
  const timelineEvents = [
    {
      year: "2018",
      title: "Company Registration",
      description: "GS Enterprises was officially registered with a vision to redefine pharmaceutical consulting and strategic healthcare solutions.",
      icon: "ph-buildings"
    },
    {
      year: "2019",
      title: "Building Expert Networks",
      description: "Successfully established a robust network of industry experts to provide unparalleled regulatory and compliance guidance.",
      icon: "ph-users-three"
    },
    {
      year: "2021",
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
                <span className="font-semibold tracking-wide uppercase text-sm">Pharma Consultancy</span>
              </div>
              <h3 className="font-heading text-4xl font-bold mb-6">GS Enterprises</h3>
              <p className="text-text-muted text-lg leading-relaxed mb-6">
                GS Enterprises operates as the premier pharmaceutical consulting firm of our group, delivering specialized expertise across the dynamic healthcare and pharma landscapes. We provide strategic guidance, regulatory insights, and operational solutions to navigate complex medical industry standards.
              </p>
              <p className="text-text-muted text-lg leading-relaxed">
                Our dedicated team of consultants bridges the gap between scientific innovation and market success. From compliance strategies to product lifecycle management, we ensure that healthcare ventures meet uncompromising standards of excellence, safety, and operational efficiency every single time.
              </p>
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
